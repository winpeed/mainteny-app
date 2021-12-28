import React, { useEffect } from "react";
import Link from "next/link";
import Profile from "../components/profile";
import { getSession } from "next-auth/react";

function HomeContainer() {
  const session = getSession().then((data) => {
    return data;
  });
  return (
    <Profile>
      {session ? (
        <Profile.Wrapper type="home">
          <Link href="/students" passHref>
            <Profile.Button>Go to Students Dashboard</Profile.Button>
          </Link>
        </Profile.Wrapper>
      ) : (
        <Profile.Wrapper type="home">
          <Link href="/signin" passHref>
            <Profile.Button>Sign in as Admin</Profile.Button>
          </Link>
        </Profile.Wrapper>
      )}
    </Profile>
  );
}

export default HomeContainer;
