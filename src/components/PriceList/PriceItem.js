import React from "react";
import { Button } from '../Buttons';
import { rem } from "../../utils/typography";

export default function PriceItem({ title, price, clients, processes, focus }) {
  return (
    <article css={`${containerStyles} ${focus && containerFocus}`}>
      <h2 css={titleStyles}>{title}</h2>
      <p css={priceStyles}>
        <sup>$</sup>
        {price}
        <sup>cop</sup>
        <span>/Mes* + IVA</span>
      </p>
      <hr css={separatorStyles} />

      <div css={itemStyles}>
        <p css={itemDescriptionStyles}>Número de clientes a gestionar</p>
        <span css={valueStyles}>{clients}</span>
      </div>

      <div css={itemStyles}>
        <p css={itemDescriptionStyles}>
          Procesos Ejecutivos al año <strong>Sin Comisión.</strong>
        </p>
        <span css={itemDescriptionSmall}>Hasta por $80.000.000 cada una.</span>
        <span css={valueStyles}>{processes}</span>
      </div>

      <div css={itemStyles}>
        <p css={itemDescriptionStyles}>Asesoría jurídica permanente.</p>
        <span css={itemDescriptionSmall}>Sólo cobranza</span>
        <span css={valueStyles}>SI</span>
      </div>
      <hr css={`${separatorStyles}; margin-bottom: 0;`} />
      <div css={footerStyles}>
        <Button isRounded isBordered styles="primary" >Iniciar</Button>
      </div>
    </article>
  );
}

function containerStyles() {
  return `
    width: 100%;
    padding-top: ${rem(41)}
    padding-left: ${rem(41)};
    padding-right: ${rem(41)};
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (min-width: 680px) {
      width: 50%;
      &:last-child {
        width: 100%;
      }
    }
    @media screen and (min-width: 1240px) {
      width: 354px;
      &:last-child {
        width: 354px;
      }
    }
  `;
}

function containerFocus() {
  return `
    background-color: #FCFCFC;
    border-radius: 8px;
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.1);
  `
}

function titleStyles() {
  return `
    font-size: ${rem(16)};
    margin-bottom: 0;
    color: #006FAE;
  `;
}

function priceStyles() {
  return `
    font-size: ${rem(47)};
    & sup {
      font-weight: 300;
      font-size: ${26 / 47}em;
    }
    & span {
      display: block;
      font-weight: 300;
      font-size: ${14 / 47}em;
    }
  `;
}

function separatorStyles() {
  return `
    background-color: #EFF0F0;
  `;
}

function itemStyles() {
  return `
    max-width: ${rem(195)};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${rem(18)};
  `;
}

function itemDescriptionSmall() {
  return `
    font-size: ${rem(10)};
  `;
}

function itemDescriptionStyles() {
  return `
    font-size: ${rem(14)};
    margin-bottom: 0;
  `;
}

function valueStyles() {
  return `
    color: #FFA330;
    font-size: ${rem(31)};
    font-weight: 700;
    display: block;
  `;
}

function footerStyles() {
  return `
    padding-top: ${rem(26)};
    padding-bottom: ${rem(26)};
  `;
}