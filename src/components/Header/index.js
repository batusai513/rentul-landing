import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Logo from './Logo';
import Container from '../Container';
import Navigation from './Navigation';
import { rem } from '../../utils/typography';

const Header = props => (
  <header
    css={css`
      background: ${props.background ? props.background : 'transparent'};
      width: 100%;
      @media screen and (min-width: 640px) {
        position: ${props.positioned ? 'absolute' : 'static'};
        background: ${props.positioned && 'transparent'};
      }
    `}
  >
    <Container>
      <Flex flexDirection={['column', 'row']}>
        <Box width={[1, 1 / 4, 1 / 3]}>
          <h1
            css={`
              margin: 0;
              padding-top: ${rem(10)};
              padding-bottom: ${rem(10)};
              text-align: center;
              @media screen and (min-width: 640px) {
                text-align: left;
                padding-top: ${rem(20)};
                padding-bottom: ${rem(5)};
              }
            `}
          >
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Logo />
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
