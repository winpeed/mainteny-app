import React from "react";
import SignInContainer from "../containers/SignInContainer";
import { getProviders, getSession, getCsrfToken } from "next-auth/react";

function SignIn({ providers, csrfToken, session }) {
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

export default SignIn;

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}
