import React, { useEffect } from "react";
import { getStudents } from "../pages/api/students";

function NewHome() {
  async function handle() {
    const response = await getStudents();
    console.log(response);
  }

  useEffect(() => {
    handle();
  }, []);
  return <div></div>;
}

export default NewHome;
