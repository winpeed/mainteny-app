import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Sign from "../components/sign";

function SignUpContainer() {
  return (
    <Sign>
      <Sign.Section>
        <Sign.Wrapper direction="row" width="max">
          <Sign.ImageWrapper>
            <Sign.SubHeading>Mainteny Uni</Sign.SubHeading>
          </Sign.ImageWrapper>
          <Link href="/" passHref>
            <Sign.Link>
              <FaLongArrowAltLeft style={{ marginRight: "0.4em" }} />
              Back
            </Sign.Link>
          </Link>
        </Sign.Wrapper>

        <Sign.Wrapper>
          <Sign.Heading>Welcome to Mainteny Uni Admin Portal.</Sign.Heading>
          <Sign.Form>
            <Sign.Label>Username</Sign.Label>
            <Sign.Input type="text" placeholder="johndoe_91" required />
            <Sign.Label>Password</Sign.Label>
            <Sign.Input
              type="password"
              placeholder="Choose a password"
              required
            />
            <Sign.Button disabled>Create an account</Sign.Button>
            <Sign.Wrapper style={{ flexDirection: "row" }}>
              <Sign.Text>No signups for now.</Sign.Text>

              <Link href="/signin" passHref>
                <Sign.Link mode="url">Sign in</Sign.Link>
              </Link>
            </Sign.Wrapper>
          </Sign.Form>
        </Sign.Wrapper>
      </Sign.Section>

      <Sign.Section styled="true">
        <Sign.SubHeading color="light">
          "We are on a mission to set standards for other universities across
          the globe by unleashing the talents of our skilled workforce, deliver
          superior service to our students and impact the community at large"
        </Sign.SubHeading>
        <Sign.Wrapper direction="start">
          <Sign.ImageWrapper>
            <Image
              src="/vice.svg"
              width={50}
              height={50}
              objectFit="contain"
              alt="Vice Chancellor"
            />
          </Sign.ImageWrapper>

          <Sign.Wrapper
            style={{ justifyContent: "center", paddingLeft: "1em" }}
          >
            <Sign.TestHeading color="light">May Andrews</Sign.TestHeading>
            <Sign.Text style={{ margin: "0em" }} color="light">
              Vice Chancellor
            </Sign.Text>
          </Sign.Wrapper>
        </Sign.Wrapper>
      </Sign.Section>
    </Sign>
  );
}

export default SignUpContainer;
