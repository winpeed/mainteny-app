import React from "react";
import Profile from "../components/profile";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ErrorContainer() {
  const router = useRouter();

  function handleRouting() {
    router.push("/");
  }
  return (
    <Profile>
      <Profile.Wrapper type="home">
        <Profile.ImageWrapper>
          <Profile.SubTitle>Oops, this page is not available.</Profile.SubTitle>
        </Profile.ImageWrapper>
        <Profile.ImageWrapper>
          <Image
            src="/under_construction.svg"
            alt="Under Construction"
            height={250}
            width={500}
          />
        </Profile.ImageWrapper>
        <Profile.ImageWrapper justify="center">
          <Profile.Button onClick={handleRouting}>Go Home</Profile.Button>
        </Profile.ImageWrapper>
      </Profile.Wrapper>
    </Profile>
  );
}
