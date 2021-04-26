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
  useEffect(() => {
    console.log(users);
    if (users.ids.length === 0) {
      dispatch(getUsers());
    }
  }, []);
  return (
    <>
      <Header />
      <div css={UsersFormStyles.wrap}>
        {users.ids.map((user) => {
          return (
            <a css={UsersFormStyles.usersLink} href="/">
              <li css={UsersFormStyles.usersLinkList}>{user}</li>
            </a>
          );
        })}
      </div>
    </>
  );
};
