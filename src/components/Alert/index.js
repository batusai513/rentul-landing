import React from "react";
import { css } from "react-emotion";
import facepaint from "facepaint";
import { rem } from "../../utils/typography";

const mq = facepaint([
  `@media screen and (min-width: ${rem(600)})`,
  `@media screen and (min-width: ${rem(780)})`,
  `@media screen and (min-width: ${rem(1024)})`
]);

const alertFontSize = css(
  mq({
    fontSize: [rem(25), rem(30), rem(35)]
  })
);

export default function Alert(props) {
  return (
    <div css={alertContainerStyles}>
      <p
        css={`
          ${alertFontSize} ${alertText};
        `}
      >
        Demande a su cliente cuando aún está comercialmente activo.
      </p>
    </div>
  );
}

function alertContainerStyles(props) {
  return `
    background-color: #17A0EE;
    padding: ${rem(21)} ${rem(37)}};
    color: white;
  `;
}

function alertText(props) {
  return `
    margin-bottom: 0;
  `;
}
