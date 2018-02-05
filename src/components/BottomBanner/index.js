import React from "react";
import Link from "gatsby-link";
import { Box } from "grid-emotion";
import Container from "../Container";

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
        <h3>Recupere su dinero</h3>
        <p>Mantenga su cartera al día</p>
        <Link to="/">Únete ahora</Link>
      </Container>
    </Box>
  );
}
