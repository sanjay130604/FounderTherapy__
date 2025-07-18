import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/auth";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-6 p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold text-gray-800">FounderTherapy</h1>
      <div className="space-x-4 text-blue-500">
        <Link to="/dashboard">Start Journaling</Link>
        <Link to="/">Login</Link>
        <Link to="/register">Signup</Link>
        <button
          onClick={logout}
          className="text-red-500 ml-2 hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
