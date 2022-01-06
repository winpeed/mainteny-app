import React, { useState } from "react";
import Profile from "./profile";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <Profile>
      {" "}
      <Profile.Wrapper type="home">
        <BeatLoader color={color} loading={loading} size={13} />
      </Profile.Wrapper>
    </Profile>
  );
}

export default Loading;
