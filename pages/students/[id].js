import React, { useEffect } from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import HomeContainer from "../../containers/HomeContainer";
import { getOneStudent } from "../api/students/[id]";
import { getStudents } from "../api/students";
import { getSession } from "next-auth/react";

export default function student({ data }) {
  const { data: session } = getSession();
  console.log(session);
  return (
    <>
      <HeaderContainer />
      {!session ? <HomeContainer /> : <ProfileContainer data={data} />}
    </>
  );
}

export async function getStaticProps(context) {
  const response = await getOneStudent(context.params.id);
  const data = {
    _id: String(response._id),
    courses: response.courses,
    age: response.age,
    gender: response.age,
    name: response.name,
    email: response.email,
    country: response.country,
    updatedAt: String(response.updatedAt),
  };

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 1,
  };
}

export async function getStaticPaths(context) {
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

  const paths = data.map((datum) => {
    return {
      params: { id: `${datum._id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
