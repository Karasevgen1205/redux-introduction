import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./redcer";
import * as actions from "./action";
import "./index.css";

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.querySelector("#counter").textContent = getState().value;
};

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

subscribe(update);

document.querySelector("#inc").addEventListener("click", inc);

document.querySelector("#dec").addEventListener("click", dec);

document.querySelector("#rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 100);
  rnd(value);
});

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);
