import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("adminLogin");

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
