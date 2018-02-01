import React from "react";
import styled from "react-emotion";

const Svg = styled("svg")`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export default function Icon({ name, ...props }) {
  return (
    <Svg {...props}>
      <use xlinkHref={`#icon-${name}`} />
    </Svg>
  );
}
