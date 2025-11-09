import React, { useState } from "react";
import Login from "./login";
import Sign from "./sign";
import {Link, NavLink} from 'react-router-dom'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const handleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
    setIsProfileMenuOpen(false);
  };

  const handleSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
    setIsProfileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const handleProfile = () => {
    alert("Profile Page Coming Soon!");
    setIsProfileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-black text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded bg-white">
                <img
                  src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/25c9c14a-0abb-4097-9b75-3c4ab5ae4b8a.png"
                  alt="Logo"
                />
              </div>
              <span className="hidden sm:block font-semibold tracking-wide text-xl">
                Project Shield
              </span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-base">
              <li><Link to='Layout' className="hover:text-blue-400" href="#">Home</Link></li>
              <li><Link to='contact' className="hover:text-blue-400" href="#">Contact Us</Link></li>
              <li><Link to='about' className="hover:text-blue-400" href="#">About Us</Link></li>
              <li className="relative">
                <button onClick={toggleMenu} className="hover:text-blue-400">Suggestion ▾</button>
                {isMenuOpen && (
                  <div className="absolute mt-2 w-52 bg-white text-black rounded shadow">
                    <a className="block px-3 py-2 hover:bg-gray-100" href="#">Suggestion Box</a>
                    <a className="block px-3 py-2 hover:bg-gray-100" href="#">Volunteer</a>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-3 text-base">
              <a href="#" className="hover:text-blue-400">Citizen</a>
              <span className="opacity-50">|</span>
              <a href="#" className="hover:text-blue-400">Authority</a>
            </div>

            <div className="relative">
              <button onClick={toggleProfileMenu} className="w-10 h-10 rounded-full ring-2 ring-white overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxLspZzfvP8zUZjp3p_uiI4uKT3haXiXrIw&s" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow">
                  {!isLoggedIn ? (
                    <>
                      <button onClick={handleLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Login</button>
                      <button onClick={handleSignup} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Signup</button>
                    </>
                  ) : (
                    <>
                      <button onClick={handleProfile} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Modals */}
      {showLogin && <Login onLoginSuccess={handleLoginSuccess} onClose={() => setShowLogin(false)} />}
      {showSignup && <Sign onSignupSuccess={handleSignupSuccess} onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Header;
