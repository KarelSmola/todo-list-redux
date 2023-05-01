import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false, userName: "" },
  reducers: {
    login(state, action) {
      const userName = action.payload.userName;
      state.isLoggedIn = true;
      localStorage.setItem("login", userName);
      state.userName = userName;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = "";
      localStorage.removeItem("login");
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
