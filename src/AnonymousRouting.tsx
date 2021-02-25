import React from "react";
import { Route } from "react-router-dom";
import { FunctionComponent } from "react";

export const AnonymousRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  return <Route {...rest} path={path} component={component} />;
};

type Props = {
  path: string;
  component: React.ComponentType;
  exact: boolean;
};
