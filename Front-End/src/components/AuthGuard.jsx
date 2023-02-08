import React from "react";
import { Navigate } from "react-router-dom";


export const RouteAuthGuard = (props) => {
  const token = localStorage.getItem("token");


  if (!token) {
    return (
      <Navigate
        to={props.redirect}
        replace={false}
      />
    );
  }
  return <>{props.component}</>;
};
