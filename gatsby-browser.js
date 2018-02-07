import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "emotion";

const theme = {
  primaryColor: "#17A0EE"
};

exports.replaceRouterComponent = () => {
  const ConnectedRouterWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
  return ConnectedRouterWrapper;
};

exports.onClientEntry = () => {
  if (
    typeof window !== `undefined` &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__);
  }
};
