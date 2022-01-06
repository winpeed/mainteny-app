import React from "react";
import Head from "next/head";
import SignUpContainer from "../containers/SignUpContainer";

function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up to Mainteny Uni</title>
        <meta name="description" content="Sign Up page for Mainteny Uni" />
      </Head>
      <SignUpContainer />
    </>
  );
}

export default SignUp;
