import React from "react";
import styled, { css } from "react-emotion";
import { Button } from "../Buttons";

const container = css`
  background-color: tomato;
`;

const titleCss = css`
  font-size: 30px;
`;

const Container = styled("div")(container, props => ({
  backgroundColor: props.theme.primaryColor
}));

export default function Feature({ title, body }) {
  return (
    <Container>
      <h3 className={titleCss}>{title}</h3>
      <p>{body}</p>
      <Button>+</Button>
    </Container>
  );
}
