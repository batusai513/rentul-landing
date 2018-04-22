import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  primaryColor: '#FFA330',
  infoColor: '#0080C0'
};

exports.replaceRouterComponent = () => {
  const ConnectedRouterWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
  return ConnectedRouterWrapper;
};
