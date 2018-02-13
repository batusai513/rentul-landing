import React from "react";
import styled, { css } from "react-emotion";
import Color from "color";
import { rem, mq } from "../../utils/typography";

export default function Capital(props) {
  return (
    <div css={containerStyles}>
      <div css={bannerStyles} />
      <section css={capitalContentContainer}>
        <div css={capitalHeadStyles}>
          <h2
            css={`
              ${alpha};
            `}
          >
            No Pierda su capital
          </h2>
        </div>
        <div css={capitalBody}>
          <p
            css={`
              ${alpha} ${capitalBodyTitle};
            `}
          >
            Demandar a tiempo es indispensable para la pronta recuperación de su
            dinero.
          </p>
          <h3 css={capitalBodySubtitle}>
            Si usted no demanda su cliente puede:
          </h3>
          <ul css={fontWeight(300)}>
            <li>Declararse en insolvencia.</li>
            <li>Ser demandado por otros proveedores.</li>
            <li>Cambiar de domicilio.</li>
            <li>Negar la deuda.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const alpha = mq({ fontSize: [rem(22), rem(30), rem(38)] });

function containerStyles(props) {
  return `
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    @media screen and (min-width: ${rem(780)}) {
      padding-left: 0;
      padding-right: 0;
    }
  `;
}

function bannerStyles(props) {
  return `
    background-image: url(${require("../../assets/images/money.jpg")});
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    display: none;
    flex: 1;
    @media screen and (min-width: ${rem(780)}) {
      display: inherit;
      height: ${rem(575)};
    }
  `;
}

function capitalHeadStyles(props) {
  return `
    background-color: ${Color("#FFA330")
      .alpha(0.95)
      .hsl()};
    color: white;
    padding: ${rem(34)};
    position: relative;
    * {
      margin-bottom: 0;
    }
  `;
}

function capitalContentContainer(props) {
  return `
    flex: 1;
    @media screen and (min-width: ${rem(780)}) {
      margin-left: ${-238 / 1440 * 100}%;
    }
  `;
}

function capitalBody(props) {
  return `
    background-color: ${Color("#FFFAF3")
      .alpha(0.9)
      .hsl()};
    padding: ${rem(30)} ${rem(38)};
    @media screen and (min-width: ${rem(780)}) {
      margin-left: ${rem(38)};
    }
  `;
}

function capitalBodyTitle(props) {
  return `
    font-weight: 700;
    line-height: 1.07;
  `;
}

function fontWeight(weight = 400) {
  return `
    font-weight: ${weight};
  `;
}

function capitalBodySubtitle(props) {
  return `
    font-size: ${rem(19)};
  `;
}
