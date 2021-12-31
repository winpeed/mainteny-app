import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Profile from "../components/profile";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "../components/Loading";

function HomeContainer({ user }) {
  const router = useRouter();

  useEffect(() => {
    // if (user) {
    //   router.push("/students");
    //    router.prefetch("/students");
    // }
  }, []);

  function handleSignIn() {
    router.push("/signin");
  }

  return (
    <Profile>
      {!user ? (
        <Profile.Wrapper type="home">
          <Profile.ImageWrapper>
            <Profile.SubTitle>
              A place where the best stars shine
            </Profile.SubTitle>
          </Profile.ImageWrapper>
          <Profile.ImageWrapper>
            <Image
              src="/education.svg"
              alt="Education"
              height={250}
              width={500}
            />
          </Profile.ImageWrapper>
          <Profile.ImageWrapper>
            <Profile.Button state="success" onClick={handleSignIn}>
              Sign in as Admin
            </Profile.Button>
          </Profile.ImageWrapper>
        </Profile.Wrapper>
      ) : user ? (
        <Loading />
      ) : null}
    </Profile>
  );
}

export default HomeContainer;
