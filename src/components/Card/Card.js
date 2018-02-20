import styled from "react-emotion";
import { Flex } from "grid-emotion";
import { rem } from '../../utils/typography';

const Card = styled(Flex)`
  position: relative;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: ${rem(8)};
`;

export default Card;
