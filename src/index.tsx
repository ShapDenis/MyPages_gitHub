import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AuthorizedRouting } from "./AuthorizedRouting";
import { AnonymousRouting } from "./AnonymousRouting";
import { globalStyles } from "./Global";
import { Global } from "@emotion/react";
import { UsersPage } from "./pages/UsersPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Router>
        <div>
          <Switch>
            <AnonymousRouting exact path={"/login"} component={LoginPage} />
            <AuthorizedRouting exact path={"/Users"} component={UsersPage} />
            <AuthorizedRouting exact path={"/"} component={HomePage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
