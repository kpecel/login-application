import React from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
