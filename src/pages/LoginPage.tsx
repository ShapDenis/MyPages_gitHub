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
        <form css={loginPagesStyles.formLorin}>
          <div css={loginPagesStyles.formLorinUser}>
            <span css={loginPagesStyles.formLorinUserName}>Username</span>
            <input
              css={loginPagesStyles.formLorinInput}
              type="text"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div css={loginPagesStyles.formLorinUser}>
            <span css={loginPagesStyles.formLorinUserName}>Password</span>
            <input
              type="password"
              name="pass"
              css={loginPagesStyles.formLorinInput}
              placeholder="Enter password"
            />
          </div>

          <div css={loginPagesStyles.formLorinButton}>
            <button css={loginPagesStyles.formLorinButtonLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
