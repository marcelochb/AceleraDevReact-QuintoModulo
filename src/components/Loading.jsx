import React from "react";
import Topbar from "./Topbar";
import Filters from "./Filters";
import "./Loading.scss";

export const Loading = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Filters />
      <span className="loading">Loading...</span>
    </React.Fragment>
  );
};
