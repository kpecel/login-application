import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";
import { useRecoilState } from "recoil";
import { userState } from "../store/userStore";

const LandingPage = () => {
  const [_, setUserState] = useRecoilState(userState);

  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    setUserState({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });
  };

  useEffect(() => {
    updateDetails();
  }, []);

  return (
    <div>
      <UserDetail />
    </div>
  );
};

export default LandingPage;
