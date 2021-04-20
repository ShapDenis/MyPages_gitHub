import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userAsync = createAsyncThunk("${feature}/login", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: {
    [userAsync.fulfilled.type]: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const users = usersSlice.reducer;
