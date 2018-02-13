import React from "react";
import { Flex, Box } from "grid-emotion";
import Container from "../Container";

export default function FaqItem({ title, children }) {
  return (
    <Box
      py={2}
      css={`
        & + & {
          border-top: 1px solid #eaecf3;
        }
      `}
    >
      <Container width={1080}>
        <Flex wrap align="center">
          <Box
            w={[1, 1 / 3]}
            css={`
              text-align: right;
              color: #ffa330;
            `}
          >
            <h2
              css={`
                font-weight: 300;
                font-size: 24px;
                @media screen and (min-width: 40em) {
                  margin-bottom: 0;
                }
              `}
            >
              {title}
            </h2>
          </Box>
          <Box
            w={[1, 2 / 3]}
            pl={3}
            css={`
              font-size: 12px;
              color: #3e4543;
              & > *:last-child {
                margin-bottom: 0;
              }
            `}
          >
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
