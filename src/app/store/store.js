import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/slice/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

//created an empty redux store
