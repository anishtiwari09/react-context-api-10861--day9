import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeContextProvider } from "./Context/ThemeContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
  rootElement
);
