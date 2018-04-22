import React from 'react';
import Icon from "../Icon";

export default function SocialIcons() {
  return (
    <React.Fragment>
      <a
        target="_blank"
        rel="noopener noreferrer"
        css={`
          color: inherit;
          font-size: 32px;
          padding: 0 5px;
        `}
        href="https://www.facebook.com/RentulDefense"
      >
        <Icon name="facebook" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        css={`
          color: inherit;
          font-size: 32px;
          padding: 0 5px;
        `}
        href="https://twitter.com/Rentuldefense"
      >
        <Icon name="twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        css={`
          color: inherit;
          font-size: 32px;
          padding: 0 5px;
        `}
        href="https://www.linkedin.com/company/27195337/"
      >
        <Icon name="twitter" />
      </a>
    </React.Fragment>
  );
}
