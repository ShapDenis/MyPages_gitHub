import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AuthorizedRouting } from "./AuthorizedRouting";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <AuthorizedRouting>
              <HomePage />
            </AuthorizedRouting>
            {/*<Route path="/login">*/}
            {/*  <LoginPage />*/}
            {/*</Route>*/}
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
