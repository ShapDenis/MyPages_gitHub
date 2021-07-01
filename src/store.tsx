import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { auth } from "./auth/slice/auth";
import { users } from "./users/slice/users";

const rootReducer = combineReducers({ auth, users });

export const store = configureStore({ reducer: rootReducer });
