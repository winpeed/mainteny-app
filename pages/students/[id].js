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
  try {
    const response = await getOneStudent(context.params.id);

    const data = {
      ...response,
      _id: String(response._id),
      updatedAt: String(response.updatedAt),
    };

    return {
      props: { data },
      revalidate: 1,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths(context) {
  const response = await getStudents();
  const data = response.map((respond) => {
    return {
      ...respond,
      _id: String(respond._id),
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
