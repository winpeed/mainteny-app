import React, { useEffect, useState } from "react";
import Profile from "../components/profile";
import axios from "axios";
import Loading from "../components/Loading";

function SideContainer() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getStudents() {
    try {
      const response = await axios.get("/api/v1/students");
      setStudents(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getStudents();
  }, [isLoading, students]);
  return (
    <Profile.Content type="left">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Profile.PageTitle>Class Data</Profile.PageTitle>
          <Profile.Name>Total Number of Students</Profile.Name>
          <Profile.Text>{students.length}</Profile.Text>
          <Profile.Name>Total Number of Boys</Profile.Name>
          <Profile.Text>
            {students.filter((student) => student.gender == "Male").length}
          </Profile.Text>
          <Profile.Name>Total Number of Girls</Profile.Name>
          <Profile.Text>
            {students.filter((student) => student.gender == "Female").length}
          </Profile.Text>
          <Profile.Name>Average Age of Class</Profile.Name>
          <Profile.Text>
            {(
              students
                .map((student) => student.age)
                .reduce((acc, student) => acc + student, 0) / students.length
            ).toFixed(2)}{" "}
            years.
          </Profile.Text>
          <Profile.Name>Most Offered Course</Profile.Name>
          <Profile.Text>
            {students
              .map((student) => student.courses)
              .reduce((acc, value) => {
                acc = [...acc, ...value];
                return acc;
              }, [])
              .reduce(
                (a, b, i, arr) =>
                  arr.filter((v) => v === a).length >=
                  arr.filter((v) => v === b).length
                    ? a
                    : b,
                null
              )}
          </Profile.Text>
        </>
      )}
    </Profile.Content>
  );
}

export default SideContainer;
