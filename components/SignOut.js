import React from "react";
import Profile from "./profile";
import { signOut } from "next-auth/react";

function SignOut({ onClose }) {
  return (
    <Profile.Wrapper align="center">
      <Profile.Text align="center">Are you sure want to signout?</Profile.Text>
      <Profile.ImageWrapper>
        <Profile.Button onClick={onClose}>No</Profile.Button>
        <Profile.Button
          onClick={() =>
            signOut({
              callbackUrl: `/`,
            })
          }
          state="danger"
        >
          Yes
        </Profile.Button>
      </Profile.ImageWrapper>
    </Profile.Wrapper>
  );
}

export default SignOut;
