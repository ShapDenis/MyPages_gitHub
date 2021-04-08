import React, { useState } from "react";
import { loginFormStyles } from "./LoginFormStyles";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../slice/auth";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const onClickLogin = (login: string, pass: string) => {
    dispatch(loginAction());
  };

  return (
    <div css={loginFormStyles.containerLogin}>
      <div css={loginFormStyles.wrap}>
        <div css={loginFormStyles.wrapLogin}>
          <span css={loginFormStyles.wrapLoginSpan}>sign in</span>
        </div>
        <form css={loginFormStyles.formLogin}>
          <div css={loginFormStyles.formLoginUser}>
            <span css={loginFormStyles.formLoginUserName}>Login</span>
            <input
              type="login"
              name="login"
              onChange={(e) => setLogin(e.target.value)}
              css={loginFormStyles.formLoginInput}
              placeholder="Enter login"
            />
          </div>
          <div css={loginFormStyles.formLoginUser}>
            <span css={loginFormStyles.formLoginUserName}>Password</span>
            <input
              type="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
              css={loginFormStyles.formLoginInput}
              placeholder="Enter password"
            />
          </div>
          <div css={loginFormStyles.formLoginButton}>
            <button
              name="data"
              // type="button"
              onClick={() => onClickLogin(login, pass)}
              css={loginFormStyles.formLoginButtonLogin}
            >
              Login
            </button>
            <a href="https://github.com/login/oauth/authorize?client_id=8b883819756ab442330b">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
