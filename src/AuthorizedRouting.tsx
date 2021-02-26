import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { isAuthSelector } from "../src/auth/selectors/isAuthSelector";
export const AuthorizedRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  if (isAuthSelector) {
    return <Route {...rest} path={path} component={component} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};

type Props = {
  path: string;
  component: React.ComponentType;
  exact: boolean;
};
