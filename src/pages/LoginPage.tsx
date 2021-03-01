import React from "react";
import { Header } from "../header/Header";
import { loginPagesStyles } from "./LoginPageStyles";

export const LoginPage = () => {
  return (
    <div css={loginPagesStyles.wrap}>
      <Header />
      <span css={loginPagesStyles.span}>Login</span>;
    </div>
  );
};
