import React from 'react';
import Polygon from '../Polygon';

export default function Feture({ title, body, extra, iconName = '' }) {
  return (
    <article
      css={`
        max-width: 380px;
        text-align: center;
        margin: auto;
      `}
    >
      <Polygon iconName={iconName} iconColor="#006FAE" />
      <h3>{title}</h3>
      <p>{body}</p>
      {extra}
    </article>
  );
}
