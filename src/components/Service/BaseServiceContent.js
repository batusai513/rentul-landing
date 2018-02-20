import React from "react";
import { Flex, Box } from "grid-emotion";
import { css } from "react-emotion";
import Container from "../Container";
import Polygon from "../Polygon";
import Logo from "../Header/Logo";
import { rem } from "../../utils/typography";

const headerStyles = `
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media screen and (min-width: 40em) {
    height: 170px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const titleStyles = `
  margin-bottom: 0;
  font-size: ${rem(34)};
`;

const horizontalContainer = `
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-container {
    text-align: center;
  }
  @media screen and (min-width: 40em) {
    flex-direction: row;
    .title-container {
      text-align: left;
      padding-left: ${rem(24)};
      margin-left: ${rem(23)};
      border-left: 1px solid;
    } 
  }
`;

export default function BaseContent({
  children,
  color,
  background,
  title,
  subtitle = "",
  iconName
}) {
  return (
    <div
      css={`
        background-color: #fafafd;
      `}
    >
      <header
        css={`
          ${headerStyles};
          background-color: ${background};
        `}
      >
        <Container
          css={`
            flex-basis: 1240px;
          `}
        >
          <div css={horizontalContainer}>
            <Box flex={"0 0 0"}>
              <Logo />
            </Box>
            <div className="title-container">
              <h2 css={titleStyles}>{title}</h2>
              {Subtitle(subtitle)}
            </div>
          </div>
        </Container>
      </header>
      <Container>
        <Box py={[2, 3]}>
          <Flex wrap>
            <Box
              css={`
                text-align: center;
              `}
              flex={["1 0 100%", "0 0 220px"]}
            >
              <Polygon iconName={iconName} iconColor={color} />
            </Box>
            <Box
              flex={["1 0 100%", "1 0 0"]}
              css={`
                max-width: 730px;
              `}
            >
              {children}
            </Box>
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
