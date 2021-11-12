import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase/config";

function PrivateRoute  ({ component: Component, ...rest })  {
  const user  = auth.currentUser
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
};
export default PrivateRoute