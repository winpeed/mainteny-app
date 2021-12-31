import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import HomeContainer from "../containers/HomeContainer";
import WelcomeContainer from "../containers/WelcomeContainer";
import Loading from "../components/Loading";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <HeaderContainer status={status} />
        <HomeContainer />
      </>
    );
  }

  return (
    <>
      <HeaderContainer status={status} />
      <WelcomeContainer />
    </>
  );
}
