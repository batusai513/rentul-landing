import React from 'react';
import { Box } from 'grid-emotion';
import Modal from '../Modal';
import promoImage from './images/rentul-promo.jpg';

// const titleStyles = `
//   font-size: 14px;
//   font-family: 'Open Sans';
//   margin-bottom: 2rem;
//   text-transform: uppercase;
//   color: white;
// `;

export default function PromoBannerModal() {
  return (
    <Modal action={() => null} isOpen>
      <Box
        css={`
          text-align: center;
        `}
      >
        <img
          css={`
            margin-bottom: 0;
            object-fit: contain;
            width: 700px;
            height: 100%;
            vertical-align: middle;
          `}
          src={promoImage}
          alt="Imagen con descripcion de servicios"
        />
      </Box>
    </Modal>
  );
}
