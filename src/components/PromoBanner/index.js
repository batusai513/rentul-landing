import React from 'react';
import { Box } from 'grid-emotion';
import Modal from '../Modal';
import Container from '../Container';
import { Row, Column } from '../Grid';
import Form from './Form';
import SocialIcons from '../SocialIcons';
import promoImage from './images/rentul-promo.jpg';

const titleStyles = `
  font-size: 14px;
  font-family: 'Open Sans';
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: white;
`;

export default function PromoBannerModal() {
  return (
    <Modal action={() => null} isOpen>
      <Box
        css={`
          background-color: #e9e9ec;
          text-align: center;
        `}
      >
        <img
          css={`
            margin-bottom: 0;
            object-fit: contain;
            width: 860px;
            height: 65vh;
            vertical-align: middle;
          `}
          src={promoImage}
          alt="Imagen con descripcion de servicios"
        />
      </Box>
      <Box
        css={`
          background-color: #3c4542;
          height: 35vh;
        `}
        px={3}
        py={3}
      >
        <Container width={1024}>
          <Row spacing={2} flexWrap="wrap">
            <Column spacing={3} w={[1, 2 / 3]}>
              <h2 css={titleStyles}>Contactenos Ahora</h2>
              <Form />
            </Column>
            <Column
              css={`
                color: white;
              `}
              spacing={3}
              w={[1, 1 / 3]}
            >
              <h2 css={titleStyles}>Siganos</h2>
              <SocialIcons />
            </Column>
          </Row>
        </Container>
      </Box>
    </Modal>
  );
}
