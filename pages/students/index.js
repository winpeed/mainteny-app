import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import StudentContainer from "../../containers/StudentContainer";
import { server } from "../../config";
import {
  getProviders,
  getSession,
  getCsrfToken,
  useSession,
} from "next-auth/react";
import HomeContainer from "../../containers/HomeContainer";
import { getStudents } from "../api/students";

export default function students({ data, session }) {
  return (
    <>
      <HeaderContainer />
      {!session ? <HomeContainer /> : <StudentContainer data={data} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await getStudents();
  const data = response.map((respond) => {
    return {
      _id: String(respond._id),
      courses: respond.courses,
      age: respond.age,
      gender: respond.gender,
      name: respond.name,
      email: respond.email,
      country: respond.country,
      updatedAt: String(respond.updatedAt),
    };
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      providers: await getProviders(context),
      session: await getSession(context),
      csrfToken: await getCsrfToken(context),
      data,
    },
  };
}
