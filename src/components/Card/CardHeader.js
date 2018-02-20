import styled from "react-emotion";
import { Box } from "grid-emotion";
import { rem } from '../../utils/typography';

const CardHeader = styled(Box)`
  padding: 0.75rem 1.85rem;
  margin-bottom: 0;
  background-color: ${({ background }) => background || "rgba(0, 0, 0, 0.03)"};
  color: ${({ color }) => color || "inherit"};
  min-height: ${rem(75)};
  font-size: ${rem(19)};
  font-weight: bold;
  align-items: center;
  &:first-child {
    border-radius: calc(${rem(8)} - 1px) calc(${rem(8)} - 1px) 0 0;
  }
`;

export default CardHeader;
