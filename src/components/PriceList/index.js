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
        `}
      >
        Escoja su plan de acuerdo a su necesidad.
      </h3>
      <Flex justify="center">
        <PriceItem
          title="Plan Básico"
          price={210000}
          clients={30}
          processes={0}
        />
        <PriceItem
          title="Plan Premium"
          price={470000}
          clients={30}
          processes={3}
        />
        <PriceItem
          title="Plan Gold"
          price={730000}
          clients={100}
          processes={3}
        />
      </Flex>
    </Box>
  );
}
