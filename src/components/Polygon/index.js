import React from "react";
import styled, { css } from "react-emotion";
import Icon from "../Icon";
import { rem } from "../../utils/typography";

const Poly = styled("svg")`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

const containerStyles = `
  position: relative;
  display: inline-block;
  color: white;
`;

const iconSyles = `
  font-size: 98px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export default function Polygon({
  width = 172,
  height = 199,
  size = 190,
  stroke = "#F1F2F8",
  fill = "#FFF",
  opacity = "1",
  iconName = "",
  iconColor = "white",
  ...props
}) {
  return (
    <span css={containerStyles}>
      <Poly
        viewBox={`0 0 ${width} ${height}`}
        className={css`
          font-size: ${rem(size)};
        `}
        {...props}
      >
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
      <Icon
        css={`
          ${iconSyles};
          color: ${iconColor};
        `}
        name={iconName}
      />
    </span>
  );
}
