import React from "react";
import { loginFormStyles } from "./LoginFormStyles";

export const LoginForm = () => {
  return (
    <div css={loginFormStyles.containerLogin}>
      <div css={loginFormStyles.wrap}>
        <div css={loginFormStyles.wrapLogin}>
          <span css={loginFormStyles.wrapLoginSpan}>sign in</span>
        </div>
        {/*<Header />*/}
        <form css={loginFormStyles.formLogin}>
          <div css={loginFormStyles.formLoginUser}>
            <span css={loginFormStyles.formLoginUserName}>Username</span>
            <input
              css={loginFormStyles.formLoginInput}
              type="text"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div css={loginFormStyles.formLoginUser}>
            <span css={loginFormStyles.formLoginUserName}>Password</span>
            <input
              type="password"
              name="pass"
              css={loginFormStyles.formLoginInput}
              placeholder="Enter password"
            />
          </div>
          <div css={loginFormStyles.formLoginButton}>
            <button css={loginFormStyles.formLoginButtonLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
