import { createSelector } from "@reduxjs/toolkit";
import { authSelector } from "./authSelector";

export const isAuthSelector = createSelector(
  authSelector,

  (auth) => auth.isAuth
);
