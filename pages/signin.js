import React from "react";
import SignInContainer from "../containers/SignInContainer";
import { getProviders, getSession, getCsrfToken } from "next-auth/react";

function signin({ providers, csrfToken, session }) {
  return (
    <>
      <SignInContainer
        csrfToken={csrfToken}
        providers={providers}
        session={session}
      />
    </>
  );
}

export default signin;

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(context),
      session: await getSession(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}
