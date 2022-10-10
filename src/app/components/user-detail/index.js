import React from "react";
import MyDetails from "../my-details";

const UserDetail = (props) => {
  const { a } = props;
  return (
    <div>
      <p>This is my Details</p>
      <MyDetails data={a} />
    </div>
  );
};

export default UserDetail;
