import React, { useContext } from "react";
import LoginContext from "../../context/userContext";
const MyDetails = () => {
  const data = useContext(LoginContext);
  return (
    <div>
      <span>
        Name: {data.firstName} {data.lastName}
      </span>
      <span>Age: 26</span>
      <span>Role: Admin</span>
    </div>
  );
};
export default MyDetails;
