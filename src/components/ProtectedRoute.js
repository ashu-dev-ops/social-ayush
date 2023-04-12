import React from "react";
import { Navigate } from "react-router-dom";
import { useNewsContext } from "../context/newsContext";

const ProtectedRoute = ({ children }) => {
  const { logIn } = useNewsContext();
  if (!logIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
