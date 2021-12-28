import React from "react";
import Profile from "../components/profile";

function SideContainer({ allStudents }) {
  return (
    <Profile.Content type="left">
      <Profile.PageTitle>Class Data</Profile.PageTitle>
      <Profile.Name>Total Number of Students</Profile.Name>
      <Profile.Text>{allStudents.length}</Profile.Text>
      <Profile.Name>Total Number of Boys</Profile.Name>
      <Profile.Text>
        {allStudents.filter((student) => student.gender == "Male").length}
      </Profile.Text>
      <Profile.Name>Total Number of Girls</Profile.Name>
      <Profile.Text>
        {allStudents.filter((student) => student.gender == "Female").length}
      </Profile.Text>
      <Profile.Name>Average Age of Class</Profile.Name>
      <Profile.Text>
        {(
          allStudents
            .map((student) => student.age)
            .reduce((acc, student) => acc + student, 0) / allStudents.length
        ).toFixed(2)}{" "}
        years.
      </Profile.Text>
      <Profile.Name>Most Offered Course</Profile.Name>
      <Profile.Text>
        {allStudents
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
    </Profile.Content>
  );
}

export default SideContainer;
