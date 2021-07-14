import React from "react";
import { UsersFormStyles } from "./UsersFormStyles";
import { Header } from "../../../common/components/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, selectAll } from "../../slice/user";
import {Link} from "react-router-dom";


export const UsersForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAll);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, []);
  return (
      <div css={UsersFormStyles.wrapUsers}>
      <Header />
      <div css={UsersFormStyles.wrap   }>
        {users.map((user) => {
          return (
            <span key={user.id} css={UsersFormStyles.usersLink} >
              <li css={UsersFormStyles.usersLinkList}>
                  <Link  css={UsersFormStyles.link} to={`/Users/${user.id}`}>{user.name}</Link>
              </li>
            </span>
          );
        })}
      </div>
      </div>
  );
};
