import React from "react";
import Head from "next/head";
import { getProviders, getSession, getCsrfToken } from "next-auth/react";
import { useSession } from "next-auth/react";
import HeaderContainer from "../../containers/HeaderContainer";
import HomeContainer from "../../containers/HomeContainer";
import StudentContainer from "../../containers/StudentContainer";
import SideContainer from "../../containers/SideContainer";
import Loading from "../../components/Loading";
import Profile from "../../components/profile";

export default function Students({ user }) {
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
      <HeaderContainer status={status} />
      {!user ? (
        <>
          <HomeContainer />
          <Loading />
        </>
      ) : (
        <StudentContainer status={status} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const { user } = session;

  return {
    props: {
      user,
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}
