import React, { useState } from "react";
import { clientID, clientSecret } from "../../constans";
import { loginFormStyles } from "./LoginFormStyles";
import axios from "axios";
import * as url from "url";

export const LoginForm = () => {
  const [token, setToken] = useState("");
  const onClickLogin = (): void => {
    window.open(
      `https://github.com/login/oauth/authorize/?client_id=${clientID}`
    );
    window.close();
  };
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)responseCodeGitHub\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (cookieValue) {
    axios
      .post("https://github.com/login/oauth/access_token", {
        client_id: clientID,
        client_secret: clientSecret,
        code: cookieValue,
        Accept: "application / json",
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch((error) => {
        console.log("error");
        return "error";
      });
  }

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
