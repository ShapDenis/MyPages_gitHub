import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
