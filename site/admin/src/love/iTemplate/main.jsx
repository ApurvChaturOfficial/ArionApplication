import React from "react";
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "src/App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "src/love/iTemplate/context";
import { Provider } from "react-redux";
import Store from "./love/bRedux/Store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Provider>
);
