import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Sign from "../components/sign";

function SignInContainer({ csrfToken }) {
  const [isError, setIsError] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  const { error } = useRouter().query;

  const errors = {
    Signin: "Try signing with a different account.",
    Callback: "Try signing with a different account.",
    CredentialsSignin:
      "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in.",
  };

  const SignInError = ({ error }) => {
    const errorMessage = error && (errors[error] ?? errors.default);
    return <div>{errorMessage}</div>;
  };

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   if (!session) {
  //     setIsError(true);
  //   } else if (session) {
  //     setIsError(false);
  //     router.push("/students");
  //   }
  // }
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
          {error && <SignInError error={error} style={{ color: "red" }} />}
          <Sign.Form action="/api/auth/callback/credentials" method="POST">
            <Sign.Input
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
              onFocus={() => {
                setIsError(false);
              }}
            />
            <Sign.Label htmlFor="input-username-for-credentials-provider">
              Username
            </Sign.Label>
            <Sign.Input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="input-username-for-credentials-provider"
              onFocus={() => {
                setIsError(false);
              }}
              required
            />
            <Sign.Label htmlFor="input-password-for-credentials-provider">
              Password
            </Sign.Label>
            <Sign.Input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="input-password-for-credentials-provider"
              required
            />
            <Sign.Button type="submit">Login</Sign.Button>
            <Sign.Wrapper style={{ flexDirection: "row" }}>
              <Sign.Text>Not an admin yet?</Sign.Text>

              <Link href="/signup" passHref>
                <Sign.Link mode="url">Create an account</Sign.Link>
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
              alt="Vice-Chancellor, Mainteny Uni"
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

export default SignInContainer;
