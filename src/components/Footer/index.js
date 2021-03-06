import React from 'react';
import { Box } from 'grid-emotion';
import { Row, Column } from '../Grid';
import ContactForm from './ContactForm';
import Container from '../Container';
import Icon from '../Icon';
import Media from '../Media';
import SocialIcons from '../SocialIcons';

const titleStyles = `
  font-size: 14px;
  font-family: 'Open Sans';
  margin-bottom: 2rem;
`;

const findItem = `
  font-size: 14px;
`;

const findIcon = `
  color: #ffa330;
  font-size: 18px;
`;

export default function Footer() {
  return (
    <Box
      as="footer"
      py={[1, 2, 3]}
      css={`
        background-color: #3e4543;
        color: white;
        font-family: 'Open Sans';
      `}
    >
      <Container width={1024}>
        <Row spacing={2} flexWrap="wrap">
          <Column spacing={2} w={[1, 3 / 10]}>
            <h2 css={titleStyles}>Encuéntranos</h2>
            <p css={findItem}>
              <Media figure={<Icon css={findIcon} name="geo" />}>
                CR 26 No 63 - 68, Bogotá - Colombia
              </Media>
            </p>
            <p css={findItem}>
              <Media figure={<Icon css={findIcon} name="tel" />}>
                Bogota: +57 1 508 56 96 <br />
                Cali: +57 2 620 76 18
              </Media>
            </p>
            <p css={findItem}>
              <Media figure={<Icon css={findIcon} name="mail" />}>
                <a
                  css={`
                    color: white;
                  `}
                  href="mailto:colombia@rentul-defense.com"
                >
                  colombia@rentul-defense.com
                </a>
              </Media>
            </p>
          </Column>
          <Column spacing={2} w={[1, 4 / 10]}>
            <h2 css={titleStyles}>Contáctanos</h2>
            <ContactForm />
          </Column>
          <Column spacing={2} w={[1, 3 / 10]}>
            <h2 css={titleStyles}>Social</h2>
            <SocialIcons />
          </Column>
        </Row>
        <hr
          css={`
            background-color: #717171;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          `}
        />
        <p
          css={`
            color: #9b9b9b;
            text-align: center;
            font-size: 14px;
            margin-bottom: 0;
          `}
        >
          © {getYear(new Date())} Rentul. All Rights Reserved{' '}
        </p>
      </Container>
    </Box>
  );
}

function getYear(date) {
  return date.getFullYear();
}
