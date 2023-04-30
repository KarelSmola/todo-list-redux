import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false, userName: "" },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
