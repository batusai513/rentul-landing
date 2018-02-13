import React from "react";
import { Box } from "grid-emotion";
import { Input } from "../Forms";
import { Button } from "../Buttons";

const container = `
  border-radius: 4px;
  background-color: white;
  position: relative;
  width: 173px;
`;

export default class LoginPopup extends React.Component {
  render() {
    return (
      <div css={container}>
        <span
          css={`
            position: absolute;
            display: block;
            bottom: calc(100% - 4px);
            transform: translateX(-50%);
            left: 50%;
          `}
        >
          <svg
            css={`
              display: inline-block;
              vertical-align: middle;
              width: 2em;
              height: 1em;
            `}
            viewBox="0 0 41 23"
          >
            <path
              d="M22.042 1.414l17.799 17.8a2 2 0 0 1-1.415 3.413H2.828a2 2 0 0 1-1.414-3.414l17.8-17.799a2 2 0 0 1 2.828 0z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <form action="#">
          <Box
            css={`
              border-bottom: 1px solid #f3f4f9;
            `}
            p={1}
          >
            <Box mb={1}>
              <Input light placeholder="Usuario" />
            </Box>
            <Box>
              <Input light type="password" placeholder="Contraseña" />
            </Box>
          </Box>
          <Box p={1}>
            <Button styles="primary" block>
              Ingresar
            </Button>
          </Box>
        </form>
      </div>
    );
  }
}
