import React, { useEffect } from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import { server } from "../../config";

export default function student({ data }) {
  return (
    <>
      <HeaderContainer />
      <ProfileContainer data={data} />
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`${server}/api/students/${context.params.id}`);
  const result = await response.json();

  const { data } = result;

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

export async function getStaticPaths() {
  const response = await fetch(`${server}/api/students`);
  const result = await response.json();

  const { data } = result;

  const paths = data.map((datum) => {
    return {
      params: { id: `${datum._id}` },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
