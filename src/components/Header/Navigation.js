import React from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";

const NavItem = styled(Link)`
  display: inline-block;
  padding: 1.5rem 1rem;
  color: white;
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <nav
      css={navStyles}
    >
      <NavItem to="/">Inicio</NavItem>
      <NavItem to="/planes">planes</NavItem>
      <NavItem to="/faq">Preguntas frecuentes</NavItem>
      <NavItem to="/">Ingreso de usuario</NavItem>
    </nav>
  );
}

function navStyles(props) {
  return css`
    text-align: right;
  `;
}
