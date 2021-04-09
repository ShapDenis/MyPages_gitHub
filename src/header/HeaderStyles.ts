import { css } from "@emotion/react";

export const HeaderStyles = {
  HeaderWrap: css`
    display: flex;
    justify-content: center;
    background: rgba(18, 13, 13, 0.8);
  `,
  HeaderNav: css`
    display: flex;
    width: 1080px;
    justify-content: space-between;
  `,
  HeaderNavLists: css`
    display: flex;
    width: 100%;
    justify-content: left;
    text-transform: uppercase;
    margin: 0;
    align-items: center;
  `,
  HeaderNavList: css`
    list-style-type: none;
    width: 150px;
    text-align: center;
    &:hover {
      height: 100%;
      line-height: 50px;
      background-color: aqua;
      transition: all 1s;
    }
  `,
  HeaderNavListLink: css`
    color: darkcyan;
    text-decoration: none;
    font-weight: bold;
  `,

  formLogoutButtonLogin: css`
    background-color: darkgrey;
    color: white;
    border-radius: 5px;
    min-width: 160px;
    height: 50px;
  `,
};
