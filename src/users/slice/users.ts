import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { feature } from "../constants";
import { logoutAsync } from "../../auth/slice/auth";
type users = { usersId: string; name: string };
const usersAdapter = createEntityAdapter<users>({
  selectId: (users) => users.usersId,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const getUsers = createAsyncThunk(`${feature}/getUsers`, async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  console.log(data);
  return data;
});
export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action) => {
      usersAdapter.setAll(state, action.payload);
    },
    [logoutAsync.fulfilled.type]: (state, action) => {
      return [];
    },
  },
});
export const users = usersSlice.reducer;
