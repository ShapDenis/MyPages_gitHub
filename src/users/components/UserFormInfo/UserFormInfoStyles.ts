import { css } from "@emotion/react";
import userWrap from "./images/userWrap.jpg";

export const UserFormInfoStyles = {
    wrap: css`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
  `,
    wrapUser: css`
    margin: 0;
    background: url(${userWrap}) no-repeat;
    background-size: 100%;
    min-height: 100vh;
    color: white;

  `,
};