import React, { use, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router";
import Loading from "../../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const [location, setLocation] = useState()
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
