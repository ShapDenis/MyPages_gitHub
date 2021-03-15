import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginFormStyles } from "./LoginFormStyles";
import { client } from "../../api/api";
import { isAuthSelector } from "../../selectors/isAuthSelector";
import { loginAction } from "../../actions/login";
import axios from "axios";

export const LoginForm = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const onClickLogin = () => {
    window.open(
      "https://github.com/login/oauth/authorize/?client_id=8b883819756ab442330b"
    );
  };

  const code = () => {
    axios
      .post(
        "https://github.com/login/oauth/authorize/?client_id=8b883819756ab442330b"
      )
      .then((res) => {
        res.data;
        console.log(res.data);
      });
  };

  return (
    <div css={loginFormStyles.containerLogin}>
      <div css={loginFormStyles.wrap}>
        <div css={loginFormStyles.wrapLogin}>
          <span css={loginFormStyles.wrapLoginSpan}>sign in</span>
        </div>
        <form css={loginFormStyles.formLogin}>
          <div css={loginFormStyles.formLoginUser}>
            <span css={loginFormStyles.formLoginUserName}>Token</span>
            <input
              type="token"
              name="token"
              onChange={(e) => setToken(e.target.value)}
              css={loginFormStyles.formLoginInput}
              placeholder="Enter token"
            />
          </div>
          <div css={loginFormStyles.formLoginButton}>
            <button
              name="data"
              type="button"
              onClick={onClickLogin}
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
