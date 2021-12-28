import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import StudentContainer from "../../containers/StudentContainer";
import { server } from "../../config";

export default function students({ data }) {
  return (
    <>
      <HeaderContainer />
      <StudentContainer data={data} />;
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${server}/api/students`);
  const allStudents = await response.json();

  const { data } = allStudents;

  return {
    props: {
      data,
    },
  };
}
