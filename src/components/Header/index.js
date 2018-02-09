import React from "react";
import Link from "gatsby-link";
import { css } from 'react-emotion';
import { Flex, Box } from "grid-emotion";
import Container from "../Container";
import Navigation from './Navigation';

const Header = (props) => (
  <header
    css={css`
      background: ${props.background || 'transparent'};
      position: ${props.positioned ? 'absolute' : 'static'};
      width: 100%;
    `}
  >
    <Container>
      <Flex align="center" direction={['column', 'row']}>
        <Box width={[1, 1 / 4, 1 / 3]}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Inicio
            </Link>
          </h1>
        </Box>
        <Box width={[1, 3 / 4, 2 / 3]}>
          <Navigation />
        </Box>
      </Flex>
    </Container>
  </header>
);

export default Header;
