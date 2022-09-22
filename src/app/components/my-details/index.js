import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyDetails = () => {
  //Getting dta from redux-store
  const data = useSelector((state) => state.user);

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <div>
        <p>
          Name: {data.firstName} {data.lastName}
        </p>
        <br />
        <span>Age: 26</span>
        <span>Role: Admin</span>
      </div>
    </>
  );
};
export default MyDetails;
