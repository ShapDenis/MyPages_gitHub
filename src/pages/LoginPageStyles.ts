import { css } from "@emotion/react";

export const loginPagesStyles = {
  containerLogin: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #ebeeef;
    min-height: 100vh;
  `,
  wrap: css`
    width: 670px;
    border-radius: 10px;
    background: white;
  `,
  wrapLogin: css`
    background-image: url(./images/loginWrap.png);
    text-align: center;
  `,
  wrapLoginSpan: css`
    color: gray;
    font-size: 30px;
    text-transform: uppercase;
    font-family: "Britannic Bold";
  `,
  formLorinUser: css``,
  formLorin: css`
    padding: 43px 88px 93px 190px;
  `,
  formLorinUserName: css`
    text-align: right;
    color: grey;
    position: relative;
    left: -85px;
    top: 32px;
  `,

  formLorinInput: css`
    color: grey;
    height: 45px;
    border: none;
    width: 100%;
    border-bottom: 1px solid #b2b2b2;
  `,
  formLorinButton: css`
    padding-top: 30px;
  `,
  formLorinButtonLogin: css`
    background-color: darkgreen;
    color: white;
    border-radius: 5px;
    min-width: 160px;
    height: 50px;
  `,
};
