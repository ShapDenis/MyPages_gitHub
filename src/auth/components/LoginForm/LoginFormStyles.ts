import { css } from "@emotion/react";
import loginWrap from "../images/loginWrap.png";

export const loginFormStyles = {
  containerLogin: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #ebeeef;
    min-height: 100vh;
  `,
  wrap: css`
    width: 600px;
    border-radius: 10px;
    background: white;
  `,
  wrapLogin: css`
    background-image: url(${loginWrap});
    border-radius: 10px 10px 0px 0px;
    background-size: 600px auto;
    text-align: center;
  `,
  wrapLoginSpan: css`
    color: darkgrey;
    font-size: 30px;
    text-transform: uppercase;
    font-family: "Britannic Bold";
    line-height: 150px;
  `,
  formLoginUser: css``,
  formLogin: css`
    padding: 43px 88px 70px 190px;
  `,
  formLoginUserName: css`
    text-align: right;
    color: grey;
    position: relative;
    left: -85px;
    top: 32px;
  `,

  formLoginInput: css`
    color: grey;
    height: 45px;
    border: none;
    width: 100%;
    border-bottom: 1px solid #b2b2b2;
    outline: none;
  `,
  formLoginButton: css`
    padding-top: 30px;
  `,
  formLoginButtonLogin: css`
    background-color: green;
    color: white;
    border-radius: 5px;
    min-width: 160px;
    height: 50px;
  `,
};
