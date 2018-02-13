import React from "react";
import styled, { css } from "react-emotion";
import { Box } from "grid-emotion";
import Color from "color";
import { Button } from "../Buttons";
import Polygon from "../Polygon";

export default function Feture({ title, body, extra }) {
  return (
    <article css={`
      max-width: 380px;
      text-align: center;
      margin: auto;
    `}>
      <Polygon css={`font-size: 200px; margin-bottom: 1rem;`} />
      <h3>{title}</h3>
      <p>{body}</p>
      {extra}
    </article>
  );
}
