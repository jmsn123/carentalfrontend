import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../hooks/auth";
function Navbar() {
  const { user, role } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cars">Cars</Link>
      {role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
      {user ? (
        <button onClick={() => auth.signOut()}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
