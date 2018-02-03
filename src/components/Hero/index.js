import React from "react";
import styled, { css } from "react-emotion";
import { Box } from "grid-emotion";
import bg from "../../assets/images/main-banner.jpg";
import { rem } from '../../utils/typography';

const Container = styled(Box)`
  background-image: url(${bg});
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const text = css`
  font-size: ${rem(34)};
  color: white;
  text-align: center;
  font-weight: 700;
  &:before {
    display: block;
    content: "";
    width: ${80 / 34}em;
    height: 6px;
    background-color: #FFA330;
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
    <Container>
      <p css={text}>
        Especialistas <span>en cobranza</span>
      </p>
    </Container>
  );
}
