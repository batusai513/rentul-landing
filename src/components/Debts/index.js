import React from "react";
import { Box, Flex } from "grid-emotion";
import Reason from "./Reason";
import Graph from "./Graph";

export default function Debts() {
  return (
    <Flex flexWrap="wrap">
      <Box
        css={`
          text-align: right;
        `}
        w={[1, 3 / 10]}
      >
        <Reason
          color="#006FAE"
          percentage={70}
          body="No es una prioridad: otras empresas le proveen lo mismo, o ya no necesita su producto."
        />
        <Reason
          color="#FF5830"
          percentage={15}
          body="Piensa que puede esperar"
        />
      </Box>
      <Box css={`display: flex; align-items: flex-end;`} px={2} w={[1, 2 / 5]}>
        <Graph />
      </Box>
      <Box w={[1, 3 / 10]}>
        <Reason
          color="#FFA330"
          percentage={10}
          body="Cree que no tiene forma, conocimiento ni dinero para demandarlo"
        />
        <Reason
          color="#17A0EE"
          percentage={5}
          body="Realmente no tiene con qué"
        />
      </Box>
    </Flex>
  );
}
