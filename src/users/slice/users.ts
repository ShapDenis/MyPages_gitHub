import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { feature } from "../constants";
import { logoutAsync } from "../../auth/slice/auth";

export const getUsers = createAsyncThunk(`${feature}/getUsers`, async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action) => {
      state.push(...action.payload);
    },
    [logoutAsync.fulfilled.type]: (state, action) => {
      return [];
    },
  },
});

export const users = usersSlice.reducer;
