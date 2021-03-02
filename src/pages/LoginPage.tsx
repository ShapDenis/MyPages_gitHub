import React from "react";
import { Header } from "../header/Header";
import { loginPagesStyles } from "./LoginPageStyles";

export const LoginPage = () => {
  return (
    <div css={loginPagesStyles.containerLogin}>
      <div css={loginPagesStyles.wrap}>
        <div css={loginPagesStyles.wrapLogin}>
          <span css={loginPagesStyles.wrapLoginSpan}>sign in</span>
        </div>
        {/*<Header />*/}
        <form css={loginPagesStyles.formLogin}>
          <div css={loginPagesStyles.formLoginUser}>
            <span css={loginPagesStyles.formLoginUserName}>Username</span>
            <input
              css={loginPagesStyles.formLoginInput}
              type="text"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div css={loginPagesStyles.formLoginUser}>
            <span css={loginPagesStyles.formLoginUserName}>Password</span>
            <input
              type="password"
              name="pass"
              css={loginPagesStyles.formLoginInput}
              placeholder="Enter password"
            />
          </div>

          <div css={loginPagesStyles.formLoginButton}>
            <button css={loginPagesStyles.formLoginButtonLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
