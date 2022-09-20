import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";
import UserContext from "../../context/userContext";

const LandingPage = () => {
  const [name, setName] = useState("peshal");

  return (
    <div>
      <UserContext.Provider value={name}>
        <UserDetail />
      </UserContext.Provider>
    </div>
  );
};

export default LandingPage;
