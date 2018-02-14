import React from "react";

export default function Media({ figure, children }) {
  return (
    <span
      css={`
        display: inline-block;
      `}
    >
      <span
        css={`
          float: left;
          margin-right: 12px;
        `}
      >
        {" "}
        {figure}{" "}
      </span>
      <span
        css={`
          display: block;
          overflow: hidden;
        `}
      >
        {children}
      </span>
    </span>
  );
}
