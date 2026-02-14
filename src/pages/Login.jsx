import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-10 relative overflow-hidden">
        
        {/* Snowy blobs */}
        <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-blue-300 opacity-40 filter blur-3xl animate-[float_10s_infinite_alternate]"></div>
        <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-indigo-300 opacity-40 filter blur-3xl animate-[float_10s_infinite_alternate] animation-delay-2000"></div>

        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Welcome Back</h2>
        <p className="text-sm text-slate-500 text-center mb-8">Login to your Taakra account</p>

        <form className="space-y-6">
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

          <div className="flex justify-between items-center text-sm text-blue-600">
            <a href="#">Forgot password?</a>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-400/30 hover:bg-blue-700 transition-all">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account? <a href="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
