import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { auth } from "./auth/slice/auth";

export const AnonymousRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  if (auth) {
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
