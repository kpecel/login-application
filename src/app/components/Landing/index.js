import React, { useEffect } from "react";
import UserDetail from "../user-detail";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";
import { useUserStore } from "../../userContext";

const LandingPage = () => {
  const userStore = useUserStore();

  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    userStore.updateUserDetails(user);
  };

  useEffect(() => {
    updateDetails();
  });

  return (
    <div>
      <UserDetail />
    </div>
  );
};

export default LandingPage;
