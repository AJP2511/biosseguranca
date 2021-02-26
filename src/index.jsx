import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { dark } from "./themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <GlobalProvider>
      <GlobalStyles />
      <App />
    </GlobalProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
