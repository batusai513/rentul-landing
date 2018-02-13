import React from "react";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";
import { ThemeProvider } from "emotion-theming";

const theme = {
  primaryColor: "#FFA330"
};

exports.replaceRenderer = ({
  setHeadComponents,
  bodyComponent,
  replaceBodyHTMLString
}) => {
  const ConnectedBody = () => (
    <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>
  );

  replaceBodyHTMLString(
    renderStylesToString(renderToString(<ConnectedBody />))
  );
};
