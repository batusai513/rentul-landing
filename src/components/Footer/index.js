import React from "react";
import styled from 'react-emotion';
import { Flex, Box } from "grid-emotion";
import Container from "../Container";

const titleStyles = `
  font-size: 14px;
  font-family: 'Open Sans';
`;

const Input = styled('input')`
  width: 100%;
`;

const Textarea = Input.withComponent('textarea');

export default function Footer() {
  return (
    <Box
      as="footer"
      py={[1, 2, 3]}
      css={`
        background-color: #3e4543;
        color: white;
        font-family: "Open Sans";
      `}
    >
      <Container width={1024}>
        <Flex wrap>
          <Box w={[1, 1 / 3]}>
            <h2 css={titleStyles}>Encuéntranos</h2>
            <p>CR 26 No 63 - 68, Bogotá - Colombia</p>
            <p>
              Bogota: +57 1 508 56 96 <br />
              Cali: +57 2 620 76 18
            </p>
            <p>
              <a href="mailto:colombia@rentul-defense.com">
                colombia@rentul-defense.com
              </a>
            </p>
          </Box>
          <Box w={[1, 1 / 3]}>
            <h2 css={titleStyles}>Contáctanos</h2>
            <Flex wrap>
              <Box w={1}>
                <Input type="text" />
              </Box>
              <Box w={[1, 1 / 2]}>
                <Input type="text" />
              </Box>
              <Box w={[1, 1 / 2]}>
                <Input type="text" />
              </Box>
              <Box w={[1, 1 / 2]}>
                <Input type="text" />
              </Box>
              <Box w={[1, 1 / 2]}>
                <Input type="text" />
              </Box>
              <Box w={1}>
                <Textarea name="" rows="10" />
              </Box>
            </Flex>
          </Box>
          <Box w={[1, 1 / 3]}>
            <h2 css={titleStyles}>Social</h2>
          </Box>
        </Flex>
        <hr
          css={`
            margin-top: 1rem;
            margin-bottom: 1rem;
          `}
        />
      </Container>
    </Box>
  );
}
