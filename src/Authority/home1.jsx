import React, { useState, useEffect } from "react";
import Video from "../assets/Video.mp4"; // Replace with your own video file if needed
import { Link, Outlet } from "react-router-dom";
function AuthorityLayout() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
      ></video>

      {/* Dark overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm"></div>

      {/* Loading Animation */}
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="mt-4 text-white/80 text-lg font-medium">Loading Authority Panel...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <header className="relative z-10 bg-black/30 backdrop-blur-md text-white px-6 py-3 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold tracking-wide text-yellow-300">COMING SOON....</h1>
            <nav className="flex gap-5 text-sm md:text-base">
              <Link to="/authority/dashboard" className="hover:text-yellow-400 transition">
               UPIIII
              </Link>
              <Link to="/authority/manage" className="hover:text-yellow-400 transition">
                upiii
              </Link>
              <Link
                to="/"
                className="bg-yellow-400 text-black px-3 py-1.5 rounded-md hover:bg-yellow-300 transition"
              >
                Exit
              </Link>
            </nav>
          </header>

          {/* Main content area */}
          <main className="relative z-10 flex-1 flex justify-center items-center p-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-md w-full max-w-3xl text-center">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <footer className="relative z-10 text-center py-3 text-sm text-white/70">
            © 2025 Authority Portal | Project SpidyUPI ⚖️
          </footer>
        </>
      )}
    </div>
  );
}

export default AuthorityLayout;
