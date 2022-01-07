import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CourseForm from "../components/CourseForm";
import Profile from "../components/profile";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loading from "../components/Loading";

function ProfileContainer(data) {
  const [person, setPerson] = useState({});
  const [allCourses, setAllCourses] = useState([]);

  const { _id, name, age, gender, email, country } = person;

  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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

  function handleRouting() {
    router.push("/students");
  }

  useEffect(() => {
    getPerson();
  }, []);

  //Get Details of A Person/ Student and Set the Data in the state
  async function getPerson() {
    const id = String(data.data._id);

    try {
      const response = await axios.get(`/api/v1/students/${id}`);
      setPerson(response.data.data);
      setAllCourses(response.data.data.courses);
      setIsLoading(true);
    } catch (err) {
      console.error(err);
    }
  }

  //Delete a student from the database
  async function deleteContact() {
    const id = String(data.data._id);

    try {
      const response = await axios.delete(`/api/v1/students/${id}`);
      notify();
      router.push("/students");
    } catch (err) {
      return err;
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        className={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        aria-labelledby="Add New Courses"
        aria-describedby="A Form to Add new courses to existing courses"
      >
        <CourseForm
          allCourses={allCourses}
          onClose={() => setOpen(false)}
          onCourses={() => getPerson()}
          data={data}
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
            Are you sure want to delete {name}'s data from the database?
          </Profile.Text>
          <Profile.ImageWrapper>
            <Profile.Button onClick={onNoticeClose}>No</Profile.Button>
            <Profile.Button onClick={deleteContact} state="danger">
              Yes
            </Profile.Button>
          </Profile.ImageWrapper>
        </Profile.Wrapper>
      </Modal>

      <Profile.Content>
        <Profile.ImageWrapper>
          <Profile.ButtonLink onClick={handleRouting}>
            <MdOutlineKeyboardBackspace
              style={{ fontSize: "1.2rem", marginRight: "0.4em" }}
            />
            Go Back
          </Profile.ButtonLink>

          <Profile.ButtonLink onClick={onOpenModal} state="success">
            Edit Courses
          </Profile.ButtonLink>
        </Profile.ImageWrapper>
        {!isLoading ? (
          <Loading />
        ) : (
          <Profile.Card>
            <Profile.ImageWrapper justify="center">
              {gender == "Male" ? (
                <Image
                  src="/male.jpg"
                  width={180}
                  height={180}
                  objectFit="contain"
                  alt="Male Picture"
                />
              ) : (
                <Image
                  src="/vice.svg"
                  width={180}
                  height={180}
                  objectFit="contain"
                  alt="Female Picture"
                />
              )}
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
                    {allCourses.map((course, index) => {
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
        )}
        <Profile.ImageWrapper justify="center">
          <Profile.Button onClick={onNoticeOpen} state="danger">
            Delete Student Data
          </Profile.Button>
        </Profile.ImageWrapper>
      </Profile.Content>
    </>
  );
}

export default ProfileContainer;
