import React, { useEffect, useState } from "react";
import UserDetail from "../user-detail";

const LandingPage = () => {
  const [name, setName] = useState("peshal");

  return (
    <div>
      <UserDetail />
    </div>
  );
};

export default LandingPage;
