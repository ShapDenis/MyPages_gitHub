import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { loginFormStyles } from "./LoginFormStyles";
import { client } from "../../api/api";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {}, []);

  const onClickLogin = () => {
    client(token);
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
              onClick={onClickLogin}
              css={loginFormStyles.formLoginButtonLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
