import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ children, ...rest }) => {
  const email = sessionStorage.getItem("email");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
