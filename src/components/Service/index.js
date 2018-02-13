import React from "react";
import styled, { css } from "react-emotion";
import { Box } from "grid-emotion";
import Color from "color";
import { Button } from "../Buttons";
import Icon from "../Icon";
import Polygon from "../Polygon";
import Modal from "../Modal";
import BaseService from "./BaseServiceContent";
import { rem } from "../../utils/typography";

const titleCss = css`
  font-size: ${rem(24)};
`;

const serviceHead = css`
  height: 236px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const serviceBase = css`
  background-color: #f3f4f9;
  border: 1px solid #f9f9fc;
  text-align: center;
`;

const serviceBody = css`
  ${serviceBase};
  border-bottom-color: #e3e6f0;
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 199px;
  font-weight: 300;
`;

const serviceFooter = css`
  ${serviceBase};
  height: 45px;
`;

const serviceButton = color => css`
  border: 1px solid #e3e6f0;
  box-shadow: 0 2px 4px 0 #e3e6f0;
  color: ${color};
  font-size: 18px;
  position: relative;
  transform: translateY(-50%);
`;

const servicePoligon = css`
  font-size: 190px;
`;

const ServiceContainer = styled(Box)`
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

export default function Service({ title, body, color, iconName }) {
  const bg = Color(color)
    .alpha(0.8)
    .hsl()
    .string();
  return (
    <ServiceContainer mb={[2, 2, 0]}>
      <div
        css={`
          ${serviceHead} background-color: ${bg};
        `}
      >
        <Polygon
          css={servicePoligon}
          iconName={iconName}
          opacity="0.07"
          stroke="#FFFFFF"
        />
      </div>
      <div
        css={`
          ${serviceBody};
        `}
      >
        <h3 className={titleCss}>{title}</h3>
        <p>{body}</p>
      </div>
      <div
        css={`
          ${serviceFooter};
        `}
      >
        <Modal
          action={(isOpen, openHandler) => (
            <Button
              isRounded
              isSquared
              css={serviceButton(color)}
              onClick={openHandler}
            >
              +
            </Button>
          )}
        >
          <BaseService color={bg} />
        </Modal>
      </div>
    </ServiceContainer>
  );
}
