import React from "react";
import styled, { css } from "react-emotion";
import Color from "color";
import { rem } from '../../utils/typography';

export const Button = styled("button")(base, style, rounded, square);

function style({ styles, theme }) {
  switch (styles) {
    case "primary":
      return buttonStyle("white", theme.primaryColor, "", "1px");
    default:
      return "";
  }
}

function rounded({ isRounded }) {
  return isRounded
    ? css`
        border-radius: 100px;
      `
    : "";
}

function square({ isSquared }) {
  return isSquared
    ? css`
        height: ${rem(60)};
        width: ${rem(60)};
        line-height: ${rem(60)};
        padding: 0;
        text-align: center;
      `
    : "";
}

function base(props) {
  return css`
  text-transform: uppercase;
  padding: 1rem 0.8rem;
  font-size: 1rem;
  line-height: 1;
  border-radius: 3px;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
  transition: all 0.2s ease-out;
  vertical-align: middle;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: white;
    text-decoration: none;
  }

  &:active,
  &.is-active {
    outline: 0;
    background-image: none;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    @include opacity(0.65);
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    }
  }
`;
}

function buttonStyle(
  $color,
  $background,
  $border = "transparent",
  $borderWidth
) {
  const hover = Color($background)
    .darken(0.1)
    .hsl()
    .string();
  return css`
    color: ${$color};
    border-width: ${$borderWidth};
    border-color: ${$border};
    background-color: ${$background};
    &:hover,
    &:focus,
    &:active,
    &.active {
      color: ${$color};
      border-color: ${$border == "transparent" ? $border : hover};
      background-color: ${hover};
    }
    &:active,
    &.active {
      background-image: none;
      background-color: ${hover};
    }
    &.disabled,
    &[disabled],
    fieldset[disabled] & {
      &,
      &:hover,
      &:focus,
      &:active,
      &.active {
        background-color: ${$background};
        border-color: ${$border};
      }
    }
  `;
}
