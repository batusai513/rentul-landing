import React from "react";
import styled, { css } from "react-emotion";

const base = css`
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

const primary = props => css`
  background-color: tomato;
`;

const rounded = props => css`
  border-radius: 100px;
`;

export const Button = styled("button")(base, primary, rounded);
