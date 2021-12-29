import React, { useState, useEffect } from "react";
import Profile from "../components/profile";
import DataTable from "react-data-table-component";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SideContainer from "./SideContainer";
import StudentForm from "../components/StudentForm";
import { useRouter } from "next/router";

function StudentContainer({ data }) {
  const [searchText, setSearchText] = useState("");

  const [allStudents, setAllStudents] = useState(data);
  const [isShowing, setIsShowing] = useState(true);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const router = useRouter();

  async function getStudents() {
    const response = await fetch("/api/v1/students");
    const res = await response.json();
    const { data } = res;
    setAllStudents(data);
  }

  useEffect(() => {}, [allStudents]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      hide: ("sm", "md"),
      center: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      maxWidth: "60px",
      center: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      maxWidth: "60px",
      center: true,
      hide: "sm",
    },
    {
      name: "Country",
      selector: (row) => row.country,
      maxWidth: "120px",
      hide: ("sm", "md"),
      center: true,
    },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
        }}
        aria-labelledby="Add New Students"
        aria-describedby="A Form to Add new students to existing courses"
      >
        <StudentForm
          data={data}
          onShow={() => setIsShowing(!isShowing)}
          isShowing={isShowing}
          onClose={() => {
            getStudents();
            setOpen(false);
          }}
          open={open}
        />
      </Modal>
      <Profile type="content">
        <SideContainer allStudents={allStudents} />
        <Profile.Content>
          <Profile.Input
            type="text"
            placeholder="Search for Students"
            required
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />

          <Profile.ContentWrap>
            <Profile.SubTitle>Students</Profile.SubTitle>
            <Profile.Button onClick={onOpenModal} state="success">
              Add New Student
            </Profile.Button>{" "}
          </Profile.ContentWrap>
          <DataTable
            columns={columns}
            data={allStudents.filter((item) => {
              if (searchText === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return item;
              }
            })}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
            pointerOnHover={true}
            highlightOnHover={true}
            onRowClicked={(state) => {
              router.push(`/students/${state._id}`);
            }}
          />
        </Profile.Content>
      </Profile>
    </>
  );
}

export default StudentContainer;
