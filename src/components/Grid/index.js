import React from "react";
import { Flex, Box } from "grid-emotion";

export const Row = ({ spacing, ...props }) => (
  <Flex {...props} ml={spacing * -1} />
);

export const Column = ({ spacing, ...props }) => (
  <Box {...props} pl={spacing} flex="1 1 auto" />
);
