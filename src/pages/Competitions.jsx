import React, { useState } from "react";

export default function Competitions() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Trending");

  // Sample competition data
  const competitions = [
    {
      id: 1,
      name: "Winter Code Fest 2026",
      category: "Development",
      date: "Feb 28",
      prize: "$5,000",
      spots: "142/200",
      filled: 71,
      tags: ["Coding", "Algorithms"],
      avatars: ["A", "B"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      status: "Open",
    },
    {
      id: 2,
      name: "UI/UX Dark Mode Challenge",
      category: "Design",
      date: "Mar 10",
      prize: "$2,000",
      spots: "45/100",
      filled: 45,
      tags: ["Design", "UI/UX"],
      avatars: ["X", "Y"],
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73?w=800&q=80",
      status: "Open",
    },
    {
      id: 3,
      name: "Pro Gaming Tournament",
      category: "Gaming",
      date: "Mar 15",
      prize: "$10,000",
      spots: "300/500",
      filled: 60,
      tags: ["Gaming", "Strategy"],
      avatars: ["G", "H"],
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80",
      status: "Live",
    },
    {
      id: 4,
      name: "AI Hackathon",
      category: "Development",
      date: "Apr 1",
      prize: "$7,500",
      spots: "180/200",
      filled: 90,
      tags: ["AI", "Coding"],
      avatars: ["I", "J"],
      image: "https://images.unsplash.com/photo-1581091870621-3c6f3c3833fc?w=800&q=80",
      status: "Completed",
    },
  ];

  // Filter and search logic
  const filteredCompetitions = competitions
    .filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(search.toLowerCase()) ||
        comp.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory =
        categoryFilter.length === 0 || categoryFilter.includes(comp.category);
      const matchesStatus =
        statusFilter === "All" || comp.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOption === "Trending") return b.filled - a.filled;
      if (sortOption === "Newest") return new Date(b.date) - new Date(a.date);
      if (sortOption === "Prize Pool") {
        const numA = parseInt(a.prize.replace(/\D/g, ""));
        const numB = parseInt(b.prize.replace(/\D/g, ""));
        return numB - numA;
      }
      return 0;
    });

  return (
    <div className="bg-slate-50 min-h-screen font-outfit">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <i className="fas fa-snowflake text-blue-600 text-xl"></i>
            <span className="font-bold text-xl text-slate-900">Taakra</span>
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
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

          <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-4 mb-4">
          {["Development", "Design", "Gaming"].map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                checked={categoryFilter.includes(cat)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategoryFilter([...categoryFilter, cat]);
                  } else {
                    setCategoryFilter(categoryFilter.filter((c) => c !== cat));
                  }
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
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${comp.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                  {comp.tags[0]}
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
                  <h3 className="font-bold text-lg">{comp.name}</h3>
                  <span className="font-bold text-green-400">{comp.prize}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-slate-500 mb-2">
                  <span>
                    📅 {comp.date}
                  </span>
                  <span>
                    👥 {comp.spots}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full mb-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${comp.filled}%` }}
                  ></div>
                </div>
                <button className="w-full py-2 mt-2 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
