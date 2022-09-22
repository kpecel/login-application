import { createSlice } from "@reduxjs/toolkit";
const SET_USER_DETAILS = "SET_USER_DETAILS";
const CLEAR_USER_DETAILS = "CLEAR_USER_DETAILS";
const initialState = {
  firstName: "",
  lastname: "",
  role: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      if (action.payload.type === SET_USER_DETAILS) {
        return { ...state, ...action.payload.data };
      }
      if (action.type === CLEAR_USER_DETAILS) {
        state = { ...initialState };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
