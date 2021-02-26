import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { dark } from "./themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
