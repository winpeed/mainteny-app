import React from "react";
import Profile from "../components/profile";
import Link from "next/link";

function WelcomeContainer() {
  return (
    <Profile>
      <Profile.Wrapper type="home">
        <Profile.ImageWrapper>
          <Profile.SubTitle>
            Welcome! You are now signed in as an admin
          </Profile.SubTitle>
        </Profile.ImageWrapper>
        <Profile.ImageWrapper>
          <Link href="/students" passHref>
            <Profile.Link>Go to Student's Dashboard</Profile.Link>
          </Link>
        </Profile.ImageWrapper>
      </Profile.Wrapper>
    </Profile>
  );
}

export default WelcomeContainer;
