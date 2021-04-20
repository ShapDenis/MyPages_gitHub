import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "./auth/selectors/isAuthSelector";

export const AnonymousRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    return <Redirect to={"/Users"} />;
  } else {
    return <Route {...rest} path={path} component={component} />;
  }
};

type Props = {
  path: string;
  component: React.ComponentType;
  exact: boolean;
};
