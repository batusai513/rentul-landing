import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  primaryColor: '#FFA330',
  infoColor: '#0080C0',
};

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>
  );

  replaceBodyHTMLString(
    renderStylesToString(renderToString(<ConnectedBody />))
  );
};
