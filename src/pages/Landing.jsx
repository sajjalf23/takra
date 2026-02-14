import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Rocket, Users, Clock, Check, Menu } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden relative font-sans selection:bg-blue-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        @keyframes float { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(20px,40px) rotate(10deg); } }
        .animate-float { animation: float 10s infinite alternate; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float animation-delay-2000 z-0"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 p-4 font-outfit">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg shadow-blue-900/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg transform transition hover:rotate-12">
              <Snowflake size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Taakra</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/competitions" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Competitions
            </Link>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Leaderboard</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Community</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-slate-600 font-semibold hover:text-blue-600 transition-colors">
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <button className="md:hidden text-slate-600">
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 relative font-outfit">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-200 text-blue-700 text-sm font-bold mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Live: Winter Hackathon 2026
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-6">
              Forging Legends in <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                Digital Combat.
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              The ultimate arena for developers, designers, and gamers. Compete in high-stakes tournaments, win prizes, and prove your worth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/signup"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-2xl shadow-blue-500/40 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                <Rocket size={20} className="group-hover:animate-pulse" /> 
                Explore Competitions
              </Link>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-sm">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative z-10 h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6 opacity-80 blur-sm animate-pulse"></div>
              
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col transform transition hover:scale-[1.02] duration-500 cursor-pointer group">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block shadow-lg">Featured</span>
                    <h3 className="text-2xl font-bold group-hover:text-blue-200 transition-colors">Global AI Challenge</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-slate-500 border-b border-slate-100 pb-4">
                      <span className="flex items-center gap-2"><Users size={16} className="text-blue-500" /> 1,204 Teams</span>
                      <span className="flex items-center gap-2"><Clock size={16} className="text-orange-500" /> 2 Days Left</span>
                    </div>
                    <div className="flex -space-x-2 overflow-hidden py-2">
                      {[1,2,3].map(i => (
                        <img 
                          key={i}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white" 
                          src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} 
                          alt="" 
                        />
                      ))}
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 ring-2 ring-white z-10">+4k</div>
                    </div>
                  </div>
                  <Link
                    to="/signup"
                    className="w-full mt-4 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 text-center"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
