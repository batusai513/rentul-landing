import React from "react";
import { Flex, Box } from "grid-emotion";
import Container from "../Container";
import Polygon from "../Polygon";
import Logo from "../Header/Logo";

const headerStyles = `
  height: 197px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default function BaseContent({ color }) {
  return (
    <div>
      <header
        css={`
          ${headerStyles};
          background-color: ${color};
        `}
      >
        <Container>
          <Logo />
        </Container>
      </header>
      <Flex>
        <Box flex={["1 0 0"]}>
          <Polygon />
        </Box>
        <Box flex={["3 0 0"]}>asd</Box>
      </Flex>
    </div>
  );
}
