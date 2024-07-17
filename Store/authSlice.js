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

// {
//   "date": "2024-07-12T00:00:00.000+00:00",
//   "userId": "6695579000195da436ef",
//   "completedStatus": false,
//   "text": "yoko",
//   "$id": "n-SEPGwPOZvy91zvfej1A",
//   "$tenant": "162789",
//   "$createdAt": "2024-07-15T18:31:51.292+00:00",
//   "$updatedAt": "2024-07-15T18:31:51.292+00:00",
//   "$permissions": [
//       "read(\"user:6695579000195da436ef\")",
//       "update(\"user:6695579000195da436ef\")",
//       "delete(\"user:6695579000195da436ef\")"
//   ],
//   "$databaseId": "66891d3c00226288d697",
//   "$collectionId": "66891d7e001e9ca8fba7"
// }
