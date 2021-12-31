import React from "react";
import ErrorContainer from "../containers/ErrorContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { useSession } from "next-auth/react";

function ErrorPage() {
  const { data: session, status } = useSession();
  return (
    <>
      <HeaderContainer status={status} />
      <ErrorContainer />
    </>
  );
}

export default ErrorPage;
