import React from "react";
import { Flex, Box } from "grid-emotion";
import { css } from "react-emotion";
import Container from "../Container";
import Polygon from "../Polygon";
import Logo from "../Header/Logo";
import { rem } from "../../utils/typography";

const headerStyles = `
  height: 170px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-start;
`;

const titleStyles = `
  margin-bottom: 0;
  font-size: ${rem(34)};
`;

const horizontalContainer = `
  display: flex;
  & > div {
    padding-left: ${rem(24)};
    margin-left: ${rem(23)};
    border-left: 1px solid;
  }
`;

export default function BaseContent({
  children,
  color,
  title,
  subtitle = "",
  iconName
}) {
  return (
    <div>
      <header
        css={`
          ${headerStyles};
          background-color: ${color};
        `}
      >
        <Container
          css={`
            flex-basis: 1240px;
          `}
        >
          <div css={horizontalContainer}>
            <Logo />
            <div>
              <h2 css={titleStyles}>{title}</h2>
              {Subtitle(subtitle)}
            </div>
          </div>
        </Container>
      </header>
      <Container>
        <Box py={3}>
          <Flex>
            <Box
              css={`
                text-align: center;
              `}
              flex={["0 0 220px"]}
            >
              <Polygon iconName={iconName} iconColor={color} />
            </Box>
            <Box flex={["1 0 0"]}>{children}</Box>
          </Flex>
        </Box>
      </Container>
    </div>
  );
}

function Subtitle(toRender) {
  const isArray = Array.isArray(toRender);
  const items = isArray
    ? toRender.map((item, idx) => <li key={idx}>{item}</li>)
    : toRender;
  const wrapper = isArray ? "ul" : "p";
  return React.createElement(
    wrapper,
    {
      className: css`
        margin-bottom: 0;
        list-style: none;
        margin-left: 0;
        & > li {
          margin-bottom: 0;
        }
      `
    },
    items
  );
}
