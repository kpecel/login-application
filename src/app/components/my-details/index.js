import React, { useContext } from "react";
import LoginContext from "../../context/userContext";

const MyDetails = () => {
  const name = useContext(LoginContext);
  return (
    <>
      <div>
        <p>Name:{name}</p>
        <br />
        <span>Age: 26</span>
        <span>Role: Admin</span>
      </div>
    </>
  );
};
export default MyDetails;
