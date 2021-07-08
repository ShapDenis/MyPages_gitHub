import React from "react";
import { UsersFormStyles } from "./UsersFormStyles";
import { Header } from "../../../common/components/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, selectAll } from "../../slice/user";

export const UsersForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAll);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, []);
  return (
    <>
      <Header />
      <div css={UsersFormStyles.wrap}>
        {users.map((user) => {
          return (
            <a key={user.id} css={UsersFormStyles.usersLink} href="/">
              <li css={UsersFormStyles.usersLinkList}>{user.name}</li>
            </a>
          );
        })}
      </div>
    </>
  );
};
