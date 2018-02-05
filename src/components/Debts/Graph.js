import React from "react";
import { css } from 'react-emotion'
import CircularProgressBar from "../CircularProgressBar";

export default function Graph() {
  return (
    <div css={`max-width: 260px; margin-left: auto; margin-right: auto;`}>
      <CircularProgressBar
        stackPercentages={[
          { value: 70, color: "#006FAE" },
          { value: 15, color: "#FF5830" },
          { value: 10, color: "#FFA330" },
          { value: 5, color: "#17A0EE" }
        ]}
        percentage={0}
        initialAnimation
        strokeWidth={12}
      />
    </div>
  );
}
