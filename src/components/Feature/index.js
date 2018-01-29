import React from "react";
import { css } from 'react-emotion';
import { Button } from '../Buttons';

const container = css`
  background-color: tomato;
`;

const titleCss = css`
  font-size: 30px;
`;

export default function Feature({ title, body }) {
  return (
    <div className={container}>
      <h3 className={titleCss}>{title}</h3>
      <p>{body}</p>
      <Button>+</Button>
    </div>
  );
}
