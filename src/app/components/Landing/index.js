import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";

const LandingPage = () => {
  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
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
