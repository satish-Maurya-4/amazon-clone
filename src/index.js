import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { initialState } from "./components/Reducer";
import reducer from "./components/Reducer";
import { StateProvider } from "./components/StateProvider";
import './index.scss';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
  document.getElementById("root")
);
