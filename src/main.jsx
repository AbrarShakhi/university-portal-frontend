import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import App from "./App.jsx";
import store from "./app/store.js";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
