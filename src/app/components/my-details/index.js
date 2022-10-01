import { useObserver } from "mobx-react";
import React from "react";
import { useUserStore } from "../../userContext";

const MyDetails = () => {
  const userStore = useUserStore();

  return useObserver(() => (
    <>
      <div>
        <span>
          Name: {userStore.data.firstName} {userStore.data.lastName}
        </span>
        <br />
        <span>Age: 23</span>
        <br />
        <span>Role: {userStore.data.role}</span>
      </div>
    </>
  ));
};
export default MyDetails;
