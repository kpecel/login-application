import React, { useEffect } from "react";
import UserDetail from "../user-detail";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";
import { useStore } from "zustand";

const LandingPage = () => {
  const bears = useStore((state) => state.bears);

  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    //  updateUser(user);
  };

  useEffect(() => {
    updateDetails();
  }, []);

  return (
    <div>
      <UserDetail a={bears} />
    </div>
  );
};

export default LandingPage;
