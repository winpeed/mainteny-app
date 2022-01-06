import React from "react";
import Head from "next/head";
import ErrorContainer from "../containers/ErrorContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { useSession } from "next-auth/react";

function ErrorPage() {
  const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Error - 404 Page</title>
        <meta name="description" content="Error Page" />
      </Head>
      <HeaderContainer status={status} />
      <ErrorContainer />
    </>
  );
}

export default ErrorPage;
