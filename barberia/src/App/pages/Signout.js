import React from "react";
import Cookie from "js-cookie";
const Signout = () => {
  Cookie.remove("jwt");
  window.location = "/";
  return <div>signout</div>;
};
export default Signout;
