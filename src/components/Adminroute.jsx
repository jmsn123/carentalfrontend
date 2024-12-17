import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../hooks/auth";

function AdminRoute({ children }) {
  const { role } = useAuth();

  if (role === null) return <p>Loading...</p>;
  if (role !== "admin") return <Navigate to="/" />;

  return children;
}

export default AdminRoute;
