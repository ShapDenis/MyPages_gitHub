import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "users/login",
  async (login, thunkAPI) => {}
);
export const logoutAsync = createAsyncThunk(
  "users/logout",
  async (login, thunkAPI) => {}
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    cookieLogin: "",
    cookiePass: "",
  },
  reducers: {},
  extraReducers: {
    [loginAsync.fulfilled.type]: (state, action) => {
      state.isAuth = true;
    },
    [logoutAsync.fulfilled.type]: (state, action) => {
      state.isAuth = false;
    },
  },
});

export const auth = authSlice.reducer;
