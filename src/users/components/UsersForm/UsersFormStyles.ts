import { css } from "@emotion/react";

export const UsersFormStyles = {
  wrap: css`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  `,
  usersLink: css`
    text-decoration: none;
  `,
  usersLinkList: css`
    font-size: 30px;
    &:hover {
      background-color: aqua;
      transition: all 1s;
    }
  `,
    wrapUsers: css`
    background: #ebeeef;
    background-size: 100%;
    min-height: 100vh;
  `,
};
