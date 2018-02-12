import React from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";

const activeStyle = css`
  border-top-color: #FFA330 !important;
`;

const NavItem = styled(Link)`
  display: inline-block;
  padding: 1.5rem 1rem;
  color: white;
  text-decoration: none;
  border-top: 3px solid transparent;
`;

export default function Navigation() {
  return (
    <nav css={navStyles}>
      <NavItem exact activeClassName={activeStyle} to="/">
        Inicio
      </NavItem>
      <NavItem exact activeClassName={activeStyle} to="/planes">
        planes
      </NavItem>
      <NavItem exact activeClassName={activeStyle} to="/faq">
        Preguntas frecuentes
      </NavItem>
      <NavItem exact activeClassName={activeStyle} to="/">
        Ingreso de usuario
      </NavItem>
    </nav>
  );
}

function navStyles(props) {
  return css`
    text-align: center;
    white-space: nowrap;
    overflow-x: auto;
    width: 100%;
    @media screen and (min-width: 640px) {
      text-align: right;
    }
  `;
}
