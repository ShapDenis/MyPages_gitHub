import { css } from "@emotion/react";

export const UsersFormStyles = {
  wrap: css`
    display: flex;
    justify-content: center;
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
};
