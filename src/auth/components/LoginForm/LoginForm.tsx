import React, { useState } from "react";
import { clientID, clientSecret } from "../../constans";
import { loginFormStyles } from "./LoginFormStyles";

export const LoginForm = () => {
  const [token, setToken] = useState("");

  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)responseCode\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const onClickLogin = (): void => {
    if (cookieValue) {
      alert("ddddd");
    }
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
              // type="button"
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
