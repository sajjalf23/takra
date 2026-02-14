import React, { useState } from "react";
import { competitions as competitionsData } from "../data/competitions";
import UserNavbar from "../components/UserNavbar";
import { useNavigate } from "react-router-dom"; // for redirect

export default function Competitions({ user }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Trending");

  const navigate = useNavigate();

  // Format PKR currency
  const formatPrize = (value) =>
    new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(value);

  // Filtered competitions
  const filteredCompetitions = competitionsData
    .filter((comp) => {
      const matchesSearch = comp.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        categoryFilter.length === 0 || categoryFilter.includes(comp.category);
      const matchesStatus = statusFilter === "All" || comp.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOption === "Trending") return b.filled - a.filled;
      if (sortOption === "Newest") return new Date(b.date) - new Date(a.date);
      if (sortOption === "Prize Pool") return b.prize - a.prize;
      return 0;
    });

  // Handle Register click
  const handleRegister = (compId) => {
    if (!user) {
      navigate("/login"); // redirect to login if not logged in
    } else {
      navigate(`/register/${compId}`); // or your actual registration page
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-outfit">
      {/* Navbar */}
      {user ? (
        <UserNavbar username={user.username} onLogout={() => console.log("Logout")} />
      ) : (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <i className="fas fa-snowflake text-blue-600 text-xl"></i>
              <span className="font-bold text-xl text-slate-900">Taakra</span>
            </a>
            <div>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Search competitions..."
              className="px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Trending</option>
              <option>Newest</option>
              <option>Prize Pool</option>
            </select>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {["Open", "Live", "Completed", "All"].map((status) => (
              <button
                key={status}
                className={`px-3 py-2 rounded-lg border ${
                  statusFilter === status
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-300"
                }`}
                onClick={() => setStatusFilter(status)}
              >
                {status === "Open" ? "Open for Registration" : status}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          {["Development", "Design", "Gaming"].map((cat) => (
            <label key={cat} className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                checked={categoryFilter.includes(cat)}
                onChange={(e) => {
                  if (e.target.checked) setCategoryFilter([...categoryFilter, cat]);
                  else setCategoryFilter(categoryFilter.filter((c) => c !== cat));
                }}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>

        {/* Number of events */}
        <div className="mb-4 text-slate-600 font-semibold">
          Showing {filteredCompetitions.length} events
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((comp) => (
            <div
              key={comp.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-4"
            >
              <h3 className="font-bold text-lg mb-2">{comp.name}</h3>
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>📅 {comp.date}</span>
                <span>👥 {comp.totalUsers} users</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${comp.filled}%` }}
                ></div>
              </div>
              <div className="text-green-600 font-semibold mb-2">{formatPrize(comp.prize)}</div>
              <button
                onClick={() => handleRegister(comp.id)}
                className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
