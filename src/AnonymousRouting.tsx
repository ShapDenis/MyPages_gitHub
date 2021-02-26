import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { isAuthSelector } from "../src/auth/selectors/isAuthSelector";

export const AnonymousRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  if (isAuthSelector) {
    return <Redirect to={"/"} />;
  } else {
    return <Route {...rest} path={path} component={component} />;
  }
};

type Props = {
  path: string;
  component: React.ComponentType;
  exact: boolean;
};
