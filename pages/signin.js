import React from "react";
import Head from "next/head";
import SignInContainer from "../containers/SignInContainer";
import { getProviders, getSession, getCsrfToken } from "next-auth/react";

function SignIn({ providers, csrfToken, session }) {
  return (
    <>
      <Head>
        <title>Sign in to Mainteny Uni</title>
        <meta name="description" content="Sign in page for Mainteny Uni" />
      </Head>
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
