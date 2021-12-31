import React, { useState } from "react";
import Profile from "./profile";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <Profile>
      {" "}
      <Profile.Wrapper type="home">
        <ClipLoader color={color} loading={loading} size={85} />
      </Profile.Wrapper>
    </Profile>
  );
}

export default Loading;
