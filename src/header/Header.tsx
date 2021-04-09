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
          <Link css={HeaderStyles.HeaderNavListLink} to="/">
            <li css={HeaderStyles.HeaderNavList}>Home</li>
          </Link>
          <Link css={HeaderStyles.HeaderNavListLink} to="/login">
            <li css={HeaderStyles.HeaderNavList}>Users</li>
          </Link>
          <Link css={HeaderStyles.HeaderNavListLink} to="/login">
            <li css={HeaderStyles.HeaderNavList}>Photo</li>
          </Link>
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
