import React from "react";
import { UsersFormStyles } from "./UsersFormStyles";
import { Header } from "../header/Header";
import { useEffect } from "react";
import { useState } from "react";

interface Provider {
  name: string;
  id: number;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

export const UsersForm = () => {
  const [users, setUsers] = useState<Provider[]>([]);
  let usersList;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((data) => {
        setUsers(data);
      })
    );
  }, []);

  if (users.length > 0) {
    usersList = (
      <ul>
        {users.map((user) => {
          return (
            <a css={UsersFormStyles.usersLink} key={user.id} href="/">
              <li css={UsersFormStyles.usersLinkList} key={user.id}>
                {user.name}
              </li>
            </a>
          );
        })}
        ;
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
