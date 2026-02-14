import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 font-sans">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col hidden md:flex shadow-2xl z-20">
        <div className="h-20 flex items-center px-8 border-b border-slate-800">
          <i className="fas fa-snowflake text-blue-500 text-2xl mr-3"></i>
          <span className="font-bold text-2xl tracking-wide">Taakra</span>
        </div>

        <div className="p-6 space-y-8 flex-1 overflow-y-auto">
          {/* Main Menu */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Main Menu</p>
            <nav className="space-y-2">
              <a href="#" className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/50 transition-all hover:scale-105">
                <i className="fas fa-th-large w-6"></i> <span className="font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all group">
                <i className="fas fa-gamepad w-6 group-hover:text-blue-400"></i> <span className="font-medium">Competitions</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all group">
                <i className="far fa-calendar-alt w-6 group-hover:text-blue-400"></i> <span className="font-medium">Schedule</span>
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Social</p>
            <nav className="space-y-2">
              <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all group">
                <i className="fas fa-users w-6 group-hover:text-blue-400"></i> <span className="font-medium">Teams</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all group">
                <div className="relative w-6">
                  <i className="fas fa-comment-dots group-hover:text-blue-400"></i>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <span className="font-medium">Messages</span>
              </a>
            </nav>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 bg-slate-800">
          <div className="flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=User+Name&background=3b82f6&color=fff" className="w-10 h-10 rounded-full ring-2 ring-slate-700" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Sarah Connor</p>
              <p className="text-xs text-slate-400 truncate">Elite Hacker</p>
            </div>
            <button className="ml-auto text-slate-400 hover:text-white">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm">Overview of your performance</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition flex items-center justify-center relative shadow-sm">
              <i className="fas fa-bell"></i>
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition">
              + Join New
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-between hover:-translate-y-1 transition duration-300">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Total Points</p>
                <h3 className="text-3xl font-extrabold text-slate-900">2,450</h3>
                <p className="text-green-500 text-xs font-bold mt-2"><i className="fas fa-arrow-up"></i> 12% this week</p>
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl">
                <i className="fas fa-chart-line"></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-between hover:-translate-y-1 transition duration-300">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Rank</p>
                <h3 className="text-3xl font-extrabold text-slate-900">#42</h3>
                <p className="text-slate-400 text-xs font-bold mt-2">Top 5% Global</p>
              </div>
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-2xl">
                <i className="fas fa-crown"></i>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-xl shadow-blue-500/30 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-blue-100 text-sm font-medium mb-1">Next Event</p>
                <h3 className="text-2xl font-bold">Hackathon Final</h3>
                <p className="text-blue-200 text-xs mt-2">Starts in 2h 45m</p>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-4 translate-y-4">
                <i className="fas fa-stopwatch text-9xl"></i>
              </div>
              <button className="relative z-10 mt-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 rounded-lg text-sm font-bold hover:bg-white/30 transition">
                Enter Lobby
              </button>
            </div>
          </div>

          {/* Active Registrations & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Active Registrations */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Active Registrations</h3>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View All</a>
              </div>

              {[
                {
                  title: "Full Stack Overflow 2026",
                  desc: "Build a scalable SaaS in 48 hours.",
                  tags: ["Web Dev", "Solo"],
                  status: "Accepted",
                  img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80",
                  color: "green-100",
                  textColor: "green-700",
                  icon: "fas fa-check-circle"
                },
                {
                  title: "Neon UI Challenge",
                  desc: "Redesign a retro interface.",
                  tags: ["Design"],
                  status: "Pending",
                  img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
                  color: "yellow-100",
                  textColor: "yellow-700",
                  icon: "fas fa-clock"
                }
              ].map((reg, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 bg-cover bg-center relative" style={{ backgroundImage: `url(${reg.img})` }}>
                    <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                  </div>
                  <div className="flex-1 w-full text-center sm:text-left">
                    <h4 className="font-bold text-slate-900 text-lg">{reg.title}</h4>
                    <p className="text-slate-500 text-sm mb-3">{reg.desc}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      {reg.tags.map((tag, j) => (
                        <span key={j} className={`px-2 py-1 bg-${tag==="Web Dev"?"blue-50":"purple-50"} text-${tag==="Web Dev"?"blue-700":"purple-700"} text-xs rounded font-semibold`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center px-4 py-2 bg-${reg.color} text-${reg.textColor} rounded-lg text-sm font-bold`}>
                      <i className={`${reg.icon} mr-2`}></i> {reg.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Recent Activity */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
              <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <ol className="relative border-l border-slate-200">
                  {[
                    { time: "Just now", title: "Registered for Hackathon", desc: "Your application is under review.", color: "bg-blue-600" },
                    { time: "2 hours ago", title: "Profile Updated", desc: "Added new skills: React, Tailwind.", color: "bg-slate-300" },
                    { time: "Yesterday", title: "Admin Message", desc: `"Welcome to the platform!"`, color: "bg-slate-300" }
                  ].map((act, i) => (
                    <li key={i} className="mb-6 ml-4 relative">
                      <div className={`absolute w-3 h-3 ${act.color} rounded-full mt-1.5 -left-1.5 border border-white`}></div>
                      <time className="mb-1 text-xs font-normal text-slate-400">{act.time}</time>
                      <h3 className="text-sm font-semibold text-slate-900">{act.title}</h3>
                      <p className="text-xs text-slate-500">{act.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
