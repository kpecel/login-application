import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";
import UserContext from "../../context/userContext";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";

const LandingPage = () => {
  const [data, setData] = useState({});

  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    setData(user);
  };

  useEffect(() => {
    updateDetails();
  });
  return (
    <UserContext.Provider value={data}>
      <UserDetail />
    </UserContext.Provider>
  );
};

export default LandingPage;
