import React from 'react';
import ReactDOM from "react-dom/client";
import { StoreProvider } from 'easy-peasy';
import store from './store';
import './index.scss';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

