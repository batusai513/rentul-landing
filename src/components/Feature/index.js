import React from "react";
import styled, { css } from "react-emotion";
import { Box } from 'grid-emotion';
import Color from "color";
import { Button } from "../Buttons";
import Icon from "../Icon";

const titleCss = css`
  font-size: ${24 / 16}rem;
`;

const featureHead = css`
  height: 236px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const featureBase = css`
  background-color: #f3f4f9;
  border: 1px solid #f9f9fc;
  text-align: center;
`;

const featureBody = css`
  ${featureBase} border-bottom-color: #E3E6F0;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 166px;
  font-weight: 300;
`;

const featureFooter = css`
  ${featureBase};
  height: 45px;
`;

const featureButton = color => css`
  border: 1px solid #e3e6f0;
  box-shadow: 0 2px 4px 0 #e3e6f0;
  color: ${color};
  font-size: 18px;
  position: relative;
  transform: translateY(-50%);
`;

const featurePoligon = css`
  font-size: 190px;
`;

const FeatureContainer = styled(Box)`
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

export default function Feature({ title, body, color }) {
  const bg = Color(color)
    .alpha(0.8)
    .hsl()
    .string();
  return (
    <FeatureContainer mb={[2, 2, 0]}>
      <div
        css={`
          ${featureHead} background-color: ${bg};
        `}
      >
        <Icon css={featurePoligon} name="poligon" />
        <svg css={"display: none;"}>
          <symbol id="icon-poligon" viewBox="0 0 28 32">
            <path
              fill="#fff"
              stroke="#fff"
              opacity="0.064974"
              strokeWidth="0.9648"
              strokeMiterlimit="4"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M13.829 0.643l13.347 7.676v15.351l-13.347 7.676-13.347-7.676v-15.351z"
            />
          </symbol>
        </svg>
      </div>
      <div
        css={`
          ${featureBody};
        `}
      >
        <h3 className={titleCss}>{title}</h3>
        <p>{body}</p>
      </div>
      <div
        css={`
          ${featureFooter};
        `}
      >
        <Button isRounded isSquared css={featureButton(color)}>
          +
        </Button>
      </div>
    </FeatureContainer>
  );
}
