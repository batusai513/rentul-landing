import React from "react";
import { Box } from "grid-emotion";
import Container from "../Container";

export default function ReferenceBanner() {
  return (
    <Box
      py={[2]}
      css={`
        text-align: center;
        background-color: #fffbf6;
        border-top: 1px solid #ffefdb;
        color: #ffa330;
      `}
    >
      <Container width={620}>
        <h3>Planes de referencia.</h3>
        <p
          css={`
            margin-bottom: 0;
            font-weight: 300;
          `}
        >
          El servicio se configura de acuerdo a la necesidad de cada usuario.{" "}
          <br />
          Si necesita demandar por un valor mayor al relacionado, comuníquese
          con nuestros asesores. Valores más IVA.
        </p>
      </Container>
    </Box>
  );
}
