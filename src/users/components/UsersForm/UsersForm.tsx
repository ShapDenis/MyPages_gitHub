import React from "react";
import { UsersFormStyles } from "./UsersFormStyles";
import { Header } from "../../../common/components/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../slice/users";
import { usersSelector } from "../../selectors/usersSelector";

export const UsersForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  let usersList;
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (users.length > 0) {
    usersList = (
      <ul>
        {users.map((user) => {
          return (
            <a css={UsersFormStyles.usersLink} key={user.id} href="/">
              <li css={UsersFormStyles.usersLinkList}>{user.name}</li>
            </a>
          );
        })}
      </ul>
    );
  }
  return (
    <>
      <Header />
      <div css={UsersFormStyles.wrap}>{usersList}</div>
    </>
  );
};
