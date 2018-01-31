import React from "react";
import styled, { css } from "react-emotion";
import { Button } from "../Buttons";

const titleCss = css`
  font-size: 30px;
`;

const Container = styled("div")(props => ({
  
}));

export default function Feature({ title, body }) {
  return (
    <Container>
      <h3 className={titleCss}>{title}</h3>
      <p>{body}</p>
      <Button isRounded isSquared styles="primary">+</Button>
      <Button isRounded styles="primary">+</Button>
      <Button isSquared styles="primary">+</Button>
    </Container>
  );
}
