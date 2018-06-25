import React from 'react';
import { Box, Flex } from 'grid-emotion';
import Feature from './index';
import Container from '../Container';

export default function Features() {
  return (
    <Box
      py={[1, 2, 3, 4]}
      css={`
        background-color: #f8f9fb;
      `}
    >
      <Container>
        <Flex flexWrap="wrap" justify="center">
          {/*<Box
            css={`
              display: flex;
              justify-content: center;
              @media screen and (min-width: 40em) {
                justify-content: flex-end;
              }
            `}
            w={[1, 1 / 2]}
            px={2}
          >
            <Feature
              title="Sin comisión"
              body="En ninguno de nuestros servicios de recuperación de cartera para empresas cobramos comisión."
              extra={
                <p>
                  A excepción de Rentul Inmobiliario <a href="#">Saber más</a>
                </p>
              }
            />
            </Box>*/}
          <Box
            css={`
              display: flex;
              justify-content: center;
              @media screen and (min-width: 40em) {
                justify-content: flex-start;
              }
            `}
            w={[1]}
            px={2}
          >
            <Feature
              title="No tocamos su dinero"
              body="En todos los comunicados le decimos a su cliente que el pago debe hacerlo como acordaron en el momento de la negociación, o como lo ha hecho siempre."
              iconName="caja"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
