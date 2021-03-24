import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    cookieLogin: "",
    cookiePass: "",
  },

  reducers: {},
});
export const auth = authSlice.reducer;
