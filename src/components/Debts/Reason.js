import React, { Fragment } from "react";
import { css } from "react-emotion";
import { rem, mq } from "../../utils/typography";

const percentageStyles = css(
  mq({
    fontSize: [34, 55, 89],
    fontWeight: 'bold',
  })
);

export default function Reason({
  percentage,
  body,
  color,
}) {
  return (
    <Fragment>
      <p css={`${percentageStyles} color: ${color}`}>{percentage}%</p>
      <p>
        {body}
      </p>
    </Fragment>
  );
}

