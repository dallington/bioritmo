import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import App from "./App";

const theme = {
  colors: {
    grey: {
      light: "#808080",
      main: "#48a0c2",
      dark: "#333333",
      contrastText: "#fff",
    },
    yellow: "#FFB612",
    red: "#dc0a17",
    green: " #2FC022",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
