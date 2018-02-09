import React from 'react';
import P from 'prop-types';
import { rem } from '../../utils/typography';

export default function PageTitle({ title }) {
  return <div css={`
    background-color: #F3F4F9;
    padding-top: ${rem(20)};
    padding-bottom: ${rem(20)};
    text-align: center;
  `}>
    <h2 css={`
      font-size: ${rem(34)};
      color: #FFA330;
      margin-bottom: 0;
    `}>{title}</h2>
  </div>
}

PageTitle.propTypes = {
  title: P.string.isRequired
}
