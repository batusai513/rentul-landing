import styled from "react-emotion";
import { rem } from "../../utils/typography";

export const darkStyles = `
  background-color: #454E4D;
  border-color: #454E4D;;
  color: #858A91;
`;

const base = props => `
  display: block;
  width: 100%;
  height: ${rem(36)};
  padding: ${rem(4)} ${rem(8)};
  font-size: 14px;
  line-height: 1.4;
  color: black;
  font-family: 'Roboto Slab';
  font-weight: 300;
  font-style: normal;
  background-color: white;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: $input-border;
  border-radius: 3px;
  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    cursor: not-allowed;
    background-color: #CCCCCC;
    opacity: 1;
  };
  ${props.dark == true ? darkStyles : ""}
`;

export const Input = styled("input")`
  ${base};
`;

export const Textarea = styled("textarea")`
  ${base};
  height: auto;
`;
