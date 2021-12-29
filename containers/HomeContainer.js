import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Profile from "../components/profile";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function HomeContainer() {
  const { data: session } = useSession();

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  const router = useRouter();

  if (session) {
    router.push("/students");
  }

  useEffect(() => {
    if (session) {
      setLoading(true);
    }
    router.prefetch("/students");
  }, [loading, session]);

  return (
    <Profile>
      {!session ? (
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
            <Link href="/signin" passHref>
              <Profile.Button state="success">Sign in as Admin</Profile.Button>
            </Link>
          </Profile.ImageWrapper>
        </Profile.Wrapper>
      ) : session && loading ? (
        <Profile.Wrapper type="home">
          {" "}
          <ClipLoader color={color} loading={loading} size={85} />
          <Profile.Name>Signing in....</Profile.Name>
        </Profile.Wrapper>
      ) : null}
    </Profile>
  );
}

export default HomeContainer;
