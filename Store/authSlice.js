import { createSlice, createSelector } from "@reduxjs/toolkit";
const initialState = {
  status: false, //logged in status of user
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});
export const AuthSliceSelector = createSelector(
  [(state) => state.auth],
  (initialState) => ({ ...initialState })
);

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;

