import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";
import { Provider, useDispatch } from "react-redux";
import { updateUserDetails } from "../../features/user/slice/userSlice";
import store from "../../store/store";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";

const LandingPage = () => {
  const dispatch = useDispatch();

  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    dispatch(updateUserDetails({ type: "SET_USER_DETAILS", data: user }));
  };

  useEffect(() => {
    updateDetails();
  });

  //stroring to the store

  return (
    <div>
      <Provider store={store}>
        <UserDetail />
      </Provider>
    </div>
  );
};

export default LandingPage;
