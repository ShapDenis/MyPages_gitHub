import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    responseCode: "",
  },
  reducers: {},
});
export const auth = authSlice.reducer;
