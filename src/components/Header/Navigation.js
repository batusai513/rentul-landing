import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

const activeStyle = css`
  border-top-color: #ffa330 !important;
`;

const navItem = `
  display: inline-block;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 1.5rem 1rem;
  color: white;
  text-decoration: none;
  border-top: 3px solid transparent;
`;

const NavAnchor = NavLink.withComponent('a');

export default function Navigation() {
  return (
    <nav css={navStyles}>
      <div css={navItem}>
        <NavLink exact activeClassName={activeStyle} to="/">
          Inicio
        </NavLink>
      </div>
      <div css={navItem}>
        {/*<NavLink exact activeClassName={activeStyle} to="/planes">
        planes
  </NavLink>*/}
      </div>
      <div css={navItem}>
        <NavLink exact activeClassName={activeStyle} to="/faq">
          Preguntas frecuentes
        </NavLink>
      </div>
      <div css={navItem}>
        {/*<Popover
          action={isOpen => (
            <NavAnchor
              css={`
                ${isOpen ? activeStyle : ""};
              `}
              href="https://app.rentuldefense.com/users/sign_in"
            >
              Ingreso de usuario
            </NavAnchor>
          )}
        >
          <LoginPopup />
        </Popover>*/}
        <NavAnchor href="https://app.rentuldefense.com/users/sign_in">
          Ingreso de usuario
        </NavAnchor>
      </div>
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
