import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import reducer from "./redcer";
import App from "./components/App";
import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
