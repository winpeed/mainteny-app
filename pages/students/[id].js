import React from "react";
import Head from "next/head";
import { getStudents } from "../api/v1/students";
import { getOneStudent } from "../api/v1/students/[id]";
import { useSession } from "next-auth/react";
import HeaderContainer from "../../containers/HeaderContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import HomeContainer from "../../containers/HomeContainer";
import SideContainer from "../../containers/SideContainer";
import Profile from "../../components/profile";
import Loading from "../../components/Loading";

export default function Student({ data }) {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>{data.name} - Mainteny Uni</title>
        <meta name="description" content="Student's Data" />
      </Head>
      <HeaderContainer status={status} />
      {status === "loading" || status === "nonauthenticated" ? (
        <>
          <HomeContainer />
          <Loading />
        </>
      ) : status === "authenticated" ? (
        <Profile type="content">
          <SideContainer />
          <ProfileContainer data={data} status={status} />
        </Profile>
      ) : (
        <HomeContainer />
      )}
      )
    </>
  );
}

export async function getStaticProps(context) {
  const response = await getOneStudent(context.params.id);

  const { courses, age, gender, name, email, country, updatedAt } = response;
  const data = {
    _id: String(response._id),
    courses,
    age,
    gender,
    name,
    email,
    country,
    updatedAt: String(updatedAt),
  };

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
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
    fallback: "blocking",
  };
}
