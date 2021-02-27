import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToNotFound = () => {
  return <Redirect to="/construction" />;
};

export default RedirectToNotFound;