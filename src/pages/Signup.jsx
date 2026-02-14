import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-10 relative overflow-hidden">
        
        {/* Snowy blobs */}
        <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-blue-300 opacity-40 filter blur-3xl animate-[float_10s_infinite_alternate]"></div>
        <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-indigo-300 opacity-40 filter blur-3xl animate-[float_10s_infinite_alternate] animation-delay-2000"></div>

        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Create Account</h2>
        <p className="text-sm text-slate-500 text-center mb-8">Join Taakra and start competing</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-600 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-600 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-slate-600 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-slate-600 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-400/30 hover:bg-blue-700 transition-all">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
