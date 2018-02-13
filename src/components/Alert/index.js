import React from "react";
import { css } from "react-emotion";
import { rem, mq } from "../../utils/typography";

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
