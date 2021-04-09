import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { feature } from "../constants";

export const loginAsync = createAsyncThunk(
  "${feature}/login",
  async (login, thunkAPI) => {}
);
export const logoutAsync = createAsyncThunk(
  `${feature}/login`,
  async (login, thunkAPI) => {}
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
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
