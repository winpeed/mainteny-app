import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import SideContainer from "./SideContainer";
import CourseForm from "../components/CourseForm";
import Profile from "../components/profile";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileContainer({ data }) {
  const [person, setPerson] = useState(data);
  const [takenCourses, setTakenCourses] = useState(data.courses);
  const [allStudents, setAllStudents] = useState([]);

  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  const router = useRouter();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onNoticeOpen = () => setNotice(true);
  const onNoticeClose = () => {
    setOpen(false);
    setNotice(false);
  };

  const notify = () =>
    toast.error("Student Data has been deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const { name, age, email, country, gender } = person;

  async function deleteContact() {
    const id = String(person._id);

    try {
      const response = await fetch(`/api/v1/students/${id}`, {
        method: "DELETE",
      });
      notify();
      router.push("/students");
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    getCourses();
    coursesUpdate();
  }, [open]);

  async function getCourses() {
    const response = await fetch(`/api/v1/students/`);
    const results = await response.json();
    setAllStudents(results.data);
  }

  async function coursesUpdate() {
    const id = String(person._id);
    const response = await fetch(`/api/v1/students/${id}`);
    const results = await response.json();
    setTakenCourses(results.data.courses);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
        }}
        aria-labelledby="Add New Courses"
        aria-describedby="A Form to Add new courses to existing courses"
      >
        <CourseForm
          takenCourses={takenCourses}
          person={person}
          onClose={() => setOpen(false)}
          onCourses={() => getCourses()}
        />
      </Modal>
      <Modal
        open={notice}
        onClose={onNoticeClose}
        center
        classNames={{
          overlay: "customOverlay",
        }}
        aria-labelledby="Delete Student Data"
        aria-describedby="A Form to delete student data from the database"
      >
        <Profile.Wrapper align="center">
          <Profile.Text align="center">
            Are you sure want to delete {person.name}'s data from the database?
          </Profile.Text>
          <Profile.ImageWrapper>
            <Profile.Button onClick={onNoticeClose}>No</Profile.Button>
            <Profile.Button onClick={deleteContact} state="danger">
              Yes
            </Profile.Button>
          </Profile.ImageWrapper>
        </Profile.Wrapper>
      </Modal>
      <Profile type="content">
        <SideContainer allStudents={allStudents} />

        <Profile.Content>
          <Profile.ImageWrapper>
            <Link href="/students" passHref>
              <Profile.Button>
                <MdOutlineKeyboardBackspace
                  style={{ fontSize: "1.2rem", marginRight: "0.4em" }}
                />
                Go Back
              </Profile.Button>
            </Link>
            <Profile.Button onClick={onOpenModal} state="success">
              Choose Courses
            </Profile.Button>
          </Profile.ImageWrapper>
          <Profile.Card>
            <Profile.ImageWrapper justify="center">
              <Image
                src="/vice.svg"
                width={180}
                height={180}
                objectFit="contain"
                alt="Vice-Chancellor, Mainteny Uni"
              />
            </Profile.ImageWrapper>

            <Profile.Overall>
              <Profile.SubTitle type="user">{name}</Profile.SubTitle>

              <Profile.Row>
                <Profile.Wrapper>
                  <Profile.Name>Email Address</Profile.Name>
                  <Profile.Text>{email}</Profile.Text>
                </Profile.Wrapper>
              </Profile.Row>

              <Profile.Row>
                <Profile.Wrapper>
                  <Profile.Name>Gender</Profile.Name>
                  <Profile.Text>{gender}</Profile.Text>
                </Profile.Wrapper>
                <Profile.Wrapper>
                  <Profile.Name>Age</Profile.Name>
                  <Profile.Text>{age}</Profile.Text>
                </Profile.Wrapper>
              </Profile.Row>

              <Profile.Row>
                <Profile.Wrapper>
                  <Profile.Name>Courses Offered</Profile.Name>
                  <Profile.Wrapper direction="row">
                    {" "}
                    {takenCourses.map((course, index) => {
                      return <Profile.Span key={index}>{course}</Profile.Span>;
                    })}
                  </Profile.Wrapper>
                </Profile.Wrapper>

                <Profile.Wrapper>
                  <Profile.Name>Country</Profile.Name>
                  <Profile.Text>{country}</Profile.Text>
                </Profile.Wrapper>
              </Profile.Row>
            </Profile.Overall>
          </Profile.Card>
          <Profile.ImageWrapper justify="center">
            <Profile.Button onClick={onNoticeOpen} state="danger">
              Delete Student Data
            </Profile.Button>
          </Profile.ImageWrapper>
        </Profile.Content>
      </Profile>
    </>
  );
}

export default ProfileContainer;
