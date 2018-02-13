import React from "react";
import styled, { css } from "react-emotion";
import { Box } from "grid-emotion";
import bg from "../../assets/images/main-banner.jpg";
import { rem, mq } from "../../utils/typography";

const textSizes = mq({ fontSize: [rem(22), rem(28), rem(34)] });
const containerHeights = mq({ height: [rem(280), rem(360), rem(460)] });

const Container = styled(Box)`
  background-image: url(${bg});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const text = css`
  color: white;
  text-align: center;
  font-weight: 700;
  &:before {
    display: block;
    content: "";
    width: ${80 / 34}em;
    height: 6px;
    background-color: #ffa330;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
  span {
    display: block;
    font-size: ${52 / 34}em;
  }
`;

export default function Hero() {
  return (
    <Container css={containerHeights}>
      <p
        css={`
          ${text} ${textSizes};
        `}
      >
        Especialistas <span>en cobranza</span>
      </p>
    </Container>
  );
}
