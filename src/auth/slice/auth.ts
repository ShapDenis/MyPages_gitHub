import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
  },
  reducers: {},
});
export const auth = authSlice.reducer;
