import React from "react";
import Profile from "../components/profile";
import { useRouter } from "next/router";

function WelcomeContainer() {
  const router = useRouter();

  function handleRouting() {
    router.push("/students");
  }
  return (
    <Profile>
      <Profile.Wrapper type="home">
        <Profile.ImageWrapper>
          <Profile.SubTitle>
            Welcome! You are now signed in as an admin
          </Profile.SubTitle>
        </Profile.ImageWrapper>
        <Profile.ImageWrapper>
          <Profile.Button state="success" onClick={handleRouting}>
            Go to Student's Dashboard
          </Profile.Button>
        </Profile.ImageWrapper>
      </Profile.Wrapper>
    </Profile>
  );
}

export default WelcomeContainer;
