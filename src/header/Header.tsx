import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyles } from "./HeaderStyles";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../auth/slice/auth";

export const Header = () => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logoutAsync());
  };
  return (
    <div css={HeaderStyles.HeaderWrap}>
      <nav css={HeaderStyles.HeaderNav}>
        <ul css={HeaderStyles.HeaderNavLists}>
          <li css={HeaderStyles.HeaderNavList}>
            <Link css={HeaderStyles.HeaderNavListLink} to="/">
              Home
            </Link>
          </li>
          <li css={HeaderStyles.HeaderNavList}>
            <Link css={HeaderStyles.HeaderNavListLink} to="/login">
              Users
            </Link>
          </li>
          <li css={HeaderStyles.HeaderNavList}>
            <Link css={HeaderStyles.HeaderNavListLink} to="/login">
              Photo
            </Link>
          </li>
        </ul>
        <div>
          <button
            name="data"
            onClick={onClickLogout}
            css={HeaderStyles.formLogoutButtonLogin}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
