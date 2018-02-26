import React from "react";
import Link from "gatsby-link";
import { Box } from "grid-emotion";
import Container from "../Container";
import { AnchorButton } from "../Buttons";
import { rem, mq } from "../../utils/typography";

const titleSizes = mq({ fontSize: [rem(24), rem(32), rem(36)] });
const subTitleSizes = mq({ fontSize: [rem(16), rem(18), rem(24)] });

export default function Banner() {
  return (
    <Box
      is="section"
      py={[1, 2, 3, 3]}
      css={`
        background-image: url(${require("../../assets/images/bottom-image.jpg")});
        height: 237px;
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
      `}
    >
      <Container>
        <h3
          css={`
            margin-bottom: 0;
            line-height: 1.5;
            ${titleSizes};
          `}
        >
          Recupere su dinero
        </h3>
        <p
          css={`
            font-weight: 300;
            ${subTitleSizes};
          `}
        >
          Mantenga su cartera al día
        </p>
        <AnchorButton
          isRounded
          styles="primary"
          href="https://app.rentuldefense.com/users/sign_in"
        >
          Únete ahora
        </AnchorButton>
      </Container>
    </Box>
  );
}
