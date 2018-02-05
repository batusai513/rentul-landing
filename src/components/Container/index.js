import styled from 'react-emotion';

export default styled('div')(({width = 1240}) => `
  max-width: ${width}px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
`);