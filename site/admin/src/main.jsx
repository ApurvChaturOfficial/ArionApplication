import React from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom/client'
import App2 from './app/App2.jsx'
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
import Store from "./love/bRedux/Store";
import { MaterialUIControllerProvider } from './love/iTemplate/context/index.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={Store}>
        <BrowserRouter>

          <MaterialUIControllerProvider>
            <App2 />
          </MaterialUIControllerProvider>
          
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
