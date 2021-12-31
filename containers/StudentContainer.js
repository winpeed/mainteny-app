import React, { useState, useEffect } from "react";
import Profile from "../components/profile";
import DataTable from "react-data-table-component";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import StudentForm from "../components/StudentForm";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import axios from "axios";

function StudentContainer({ data, status }) {
  const [searchText, setSearchText] = useState("");

  const [allStudents, setAllStudents] = useState([]);
  const [isShowing, setIsShowing] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const router = useRouter();

  async function getStudents() {
    try {
      const response = await axios.get("/api/v1/students");
      setAllStudents(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getStudents();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [data, isLoading]);

  const columns = [
    {
      name: "S/N",
      cell: (row, index) => index + 1,
      center: true,
      maxWidth: "30px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      center: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      maxWidth: "60px",
      hide: ("sm", "md"),
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      hide: ("sm", "md"),
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

      <Profile.Content>
        <Profile.ImageWrapper justify="center">
          <Profile.Input
            type="text"
            placeholder="Search for Students"
            required
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />
        </Profile.ImageWrapper>
        <Profile.ContentWrap>
          <Profile.SubTitle>Students</Profile.SubTitle>
          <Profile.Button onClick={onOpenModal} state="success">
            Add New Student
          </Profile.Button>{" "}
        </Profile.ContentWrap>
        {isLoading ? (
          <Loading />
        ) : (
          <DataTable
            columns={columns}
            data={
              status === "loading" || status === "nonauthenticated"
                ? null
                : allStudents.filter((item) => {
                    if (searchText === "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                      return item;
                    }
                  })
            }
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
            pointerOnHover={true}
            highlightOnHover={true}
            onRowClicked={(state) => {
              router.push(`/students/${state._id}`);
            }}
            noDataComponent={<Loading />}
          />
        )}
      </Profile.Content>
    </>
  );
}

export default StudentContainer;
