import React from "react";
import Link from "next/link";
import Profile from "../components/profile";

function HomeContainer() {
  return (
    <Profile>
      <Profile.Wrapper type="home">
        <Link href="/signin" passHref>
          <Profile.Button>Sign in as Admin</Profile.Button>
        </Link>

        <Link href="/404" passHref>
          <Profile.Button>Sign in as Student</Profile.Button>
        </Link>
      </Profile.Wrapper>
    </Profile>
  );
}

export default HomeContainer;
