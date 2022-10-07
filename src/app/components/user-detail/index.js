import React from "react";
import MyDetails from "../my-details";

const UserDetail = (props) => {
  const { data } = props;
  return (
    <div>
      <p>This is my Details</p>
      <MyDetails data={data} />
    </div>
  );
};

export default UserDetail;
