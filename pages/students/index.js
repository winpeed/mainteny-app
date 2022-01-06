import React from "react";
import Head from "next/head";
import { getProviders, getSession, getCsrfToken } from "next-auth/react";
import { useSession } from "next-auth/react";
import { getStudents } from "../api/v1/students";
import HeaderContainer from "../../containers/HeaderContainer";
import HomeContainer from "../../containers/HomeContainer";
import StudentContainer from "../../containers/StudentContainer";
import SideContainer from "../../containers/SideContainer";
import Loading from "../../components/Loading";
import Profile from "../../components/profile";

export default function Students({ data }) {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Students Dashboard - Mainteny Uni</title>
        <meta
          name="description"
          content="Student's Dashboard for Mainteny Uni"
        />
      </Head>
      <HeaderContainer />
      {status === "loading" || status === "nonauthenticated" ? (
        <>
          <HomeContainer />
          <Loading />
        </>
      ) : (
        <Profile type="content">
          <SideContainer data={data} />
          <StudentContainer data={data} status={status} />
        </Profile>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await getStudents();

  const data = response.map((respond) => {
    const { _id, courses, age, gender, name, email, country, updatedAt } =
      respond;
    return {
      id: String(_id),
      courses,
      age,
      gender,
      name,
      email,
      country,
      updatedAt: String(updatedAt),
    };
  });

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  const { user } = session;

  return {
    props: {
      user,
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
      data,
    },
  };
}
