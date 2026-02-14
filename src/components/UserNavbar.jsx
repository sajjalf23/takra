import React from "react";
import { Link } from "react-router-dom";

export default function UserNavbar({ username, onLogout }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <i className="fas fa-snowflake text-blue-600 text-xl"></i>
          <span className="font-bold text-xl text-slate-900">Taakra</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="font-semibold text-slate-600 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="font-semibold text-slate-600 hover:text-blue-600"
          >
            Profile
          </Link>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
