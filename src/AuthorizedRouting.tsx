import React from "react";
import { Route } from "react-router-dom";
import { FunctionComponent } from "react";

export const AuthorizedRouting: FunctionComponent<Props> = ({
  path,
  component,
}) => {
  return <Route exact path={path} component={component} />;
};

type Props = {
  path: string;
  component: React.ComponentType;
};
