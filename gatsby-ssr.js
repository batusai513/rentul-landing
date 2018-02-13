import React from "react";
import { renderToString } from "react-dom/server";
import { extractCritical } from "emotion-server";
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

  const { html, ids, css } = extractCritical(renderToString(<ConnectedBody />));

  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />;
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`
      }}
    />
  );
  setHeadComponents([criticalIds, criticalStyle]);
  replaceBodyHTMLString(html);
};
