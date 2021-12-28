import React from "react";
import Profile from "../components/profile";
import Image from "next/image";
import Link from "next/link";

export default function ErrorContainer() {
  return (
    <Profile>
      <Profile.Wrapper type="home">
        Oops, this page is currently not available.
        <Profile.ImageWrapper>
          <Image
            src="/under_construction.svg"
            alt="Under Construction"
            height={250}
            width={500}
          />
        </Profile.ImageWrapper>
        <Link href="/" passHref>
          <Profile.Button>Go Home</Profile.Button>
        </Link>
      </Profile.Wrapper>
    </Profile>
  );
}
