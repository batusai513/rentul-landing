import React from "react";
import styled from "react-emotion";

const Poly = styled("svg")`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export default function Polygon({
  width = 172,
  height = 199,
  stroke = "#F1F2F8",
  fill = "#FFF",
  opacity = "1",
  ...props
}) {
  return (
    <Poly viewBox={`0 0 ${width} ${height}`} {...props}>
      <g>
        <path
          fill={fill}
          stroke={stroke}
          strokeWidth="6"
          opacity={opacity}
          d="M86 4l83 47.75v95.5L86 195 3 147.25v-95.5z"
          fillRule="evenodd"
          fillOpacity=".552"
        />
      </g>
    </Poly>
  );
}
