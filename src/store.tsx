import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { auth } from "./auth/slice/auth";

const rootReducer = combineReducers({ auth });

if (window.location.search.match(/code/)) {
  const code = window.location.search.replace("?code=", "");
  document.cookie = "responseCodeGitHub=" + code;
}

export const store = configureStore({ reducer: rootReducer });
