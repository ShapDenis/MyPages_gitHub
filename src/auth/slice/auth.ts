import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginForm } from "../components/LoginForm/LoginForm";

const loginAsync = createAsyncThunk(
  "users/fetchByIdStatus",
  async (login, thunkAPI) => {
    const response = await LoginForm;
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    cookieLogin: "",
    cookiePass: "",
  },

  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logoutAction: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: {
    [loginAsync.pending.type]: (state, action) => {
      state.isAuth = true;
    },
    [loginAsync.fulfilled.type]: (state, action) => {
      state.isAuth = false;
    },
  },
});

export const auth = authSlice.reducer;
export const { login, logoutAction } = authSlice.actions;
