import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";

import { decodeToken } from "../../util/decoder";
import { get } from "../../util/storageUtil";

const LandingPage = () => {
  const [data, setData] = useState({ firstName: "", lastName: "", role: "" });
  const updateDetails = () => {
    let user = decodeToken(get("local", "loggedInUser"));
    updateStateData(user);
  };

  const updateStateData = (user) => {
    setData({
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
      <UserDetail data={data} />
    </div>
  );
};

export default LandingPage;
