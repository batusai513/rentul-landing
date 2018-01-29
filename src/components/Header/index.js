import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Inicio
        </Link>
      </h1>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Inicio
      </Link>
      <Link
        to="/planes"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        planes
      </Link>
      <Link
        to="/faq"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Preguntas frecuentes
      </Link>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Ingreso de usuario
      </Link>
    </div>
  </div>
);

export default Header;
