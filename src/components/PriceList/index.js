import React from "react";
import { css } from "react-emotion";
import { Flex, Box } from "grid-emotion";
import PriceItem from "./PriceItem";

export default function PriceList() {
  return (
    <Box py={4}>
      <h3
        className={css`
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 400;
        `}
      >
        Escoja su plan de acuerdo a su necesidad.
      </h3>
      <Flex wrap justify="center">
        <PriceItem
          title="Plan Básico"
          price={'210.000'}
          clients={30}
          processes={0}
        />
        <PriceItem
          title="Plan Premium"
          price={'470.000'}
          clients={30}
          processes={3}
          focus
        />
        <PriceItem
          title="Plan Gold"
          price={'730.000'}
          clients={100}
          processes={3}
        />
      </Flex>
    </Box>
  );
}
