import React from "react";
import styled, { css } from "react-emotion";
import { Box } from "grid-emotion";
import Color from "color";
import { Button } from "../Buttons";
import Polygon from "../Polygon";

export default function Feture({ title, body, extra, iconName = "" }) {
  return (
    <article
      css={`
        max-width: 380px;
        text-align: center;
        margin: auto;
      `}
    >
      <Polygon
        iconName={iconName}
        iconColor="#006FAE"
        css={`
          font-size: 200px;
        `}
      />
      <h3>{title}</h3>
      <p>{body}</p>
      {extra}
    </article>
  );
}
