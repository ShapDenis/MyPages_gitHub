import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "./auth/selectors/isAuthSelector";
export const AuthorizedRouting: FunctionComponent<Props> = ({
  path,
  component,
  ...rest
}) => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
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
