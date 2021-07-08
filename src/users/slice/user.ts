import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { feature } from "../constants";
import { logoutAsync } from "../../auth/slice/auth";
import { store } from "../../store";

type User = { id: string; name: string };
export const usersAdapter = createEntityAdapter<User>({
  selectId: (users) => users.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

type RootState = ReturnType<typeof store.getState>;
const selectState = (state: RootState) => state.users;
export const { selectAll } = usersAdapter.getSelectors(selectState);
export const getUsers = createAsyncThunk(`${feature}/getUsers`, async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
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
