import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Sign from "../components/sign";

function SignInContainer({ csrfToken }) {
  const router = useRouter();
  const error = router.query.error;

  const errors = {
    Signin: "Try signing with a different account.",
    Callback: "Try signing with a different account.",
    CredentialsSignin:
      "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in.",
  };

  const SignInError = ({ error }) => {
    const errorMessage = error && (errors[error] ?? errors.default);
    return (
      <Sign.Text
        style={{
          color: "red",
          letterSpacing: "0.015em",
          padding: "0.6em 0em",
          fontStyle: "italic",
        }}
      >
        {errorMessage}
      </Sign.Text>
    );
  };

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

          {error && <SignInError error={error} />}
          <Sign.Form action="/api/auth/callback/credentials" method="POST">
            <Sign.Input
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
            />
            <Sign.Label htmlFor="input-username-for-credentials-provider">
              Username
            </Sign.Label>
            <Sign.Input
              type="text"
              placeholder="Enter Username"
              name="username"
              label="username"
              id="input-username-for-credentials-provider"
              required
            />
            <Sign.Label htmlFor="input-password-for-credentials-provider">
              Password
            </Sign.Label>
            <Sign.Input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              label="Password"
              id="input-password-for-credentials-provider"
              required
            />
            <Link href="https://github.com/winpeed/mainteny-app/blob/main/README.md">
              Get Login Details Here
            </Link>
            <Sign.ButtonInput type="submit">Login</Sign.ButtonInput>
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
