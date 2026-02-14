import React, { useState } from "react";
import UserNavbar from "../components/UserNavbar";

export default function Profile() {
  const [user, setUser] = useState({
    username: "Misharab",
    email: "misharab@example.com",
    fullName: "Muhammad Misharab Waheed",
    bio: "Aspiring developer and hackathon enthusiast",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogout = () => {
    // Clear auth tokens/session
    alert("Logged out successfully!");
    // redirect or update app state
  };

  return (
    <div className="bg-slate-50 min-h-screen font-outfit">
      <UserNavbar username={user.username} onLogout={handleLogout} />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Profile</h1>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          {/* Left: Profile Info */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center text-4xl text-white font-bold">
              {user.username[0].toUpperCase()}
            </div>
            <h2 className="mt-4 text-xl font-semibold">{user.fullName}</h2>
            <p className="text-slate-500 mt-2">{user.email}</p>
          </div>

          {/* Right: Edit Profile Form */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Bio</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* Registered Competitions */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Registered Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sample registered competitions */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-lg">Winter Code Fest 2026</h3>
              <p className="text-sm text-slate-500">Date: 28 Feb 2026</p>
              <p className="text-sm text-slate-500">Status: Open</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-lg">Pro Gaming Tournament</h3>
              <p className="text-sm text-slate-500">Date: 15 Mar 2026</p>
              <p className="text-sm text-slate-500">Status: Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
