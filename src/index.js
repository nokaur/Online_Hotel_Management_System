import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route path="/about" component={AboutComponent} /> */}
        <Route path="/" component={App} />
        <Redirect for="*" to="/" />
      </Switch>
    </div>
  </BrowserRouter>,
  // </Provider>,
  rootElement
);
