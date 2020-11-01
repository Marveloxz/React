import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./supports/css/bootstrap.min.css"
import "./supports/login/css/main.css"
import "./supports/login/css/util.css"
import "./supports/Register/css/main.css"
import { Provider } from "react-redux";
import {createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"
import reducers from "./Reducer"

const store = createStore(reducers,{}, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
