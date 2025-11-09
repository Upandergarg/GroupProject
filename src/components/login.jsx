import React, { useState } from "react";


const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[28rem] rounded-lg p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Citizen Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Gmail"
            className="w-full border rounded px-4 py-3 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-4 py-3 text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-3 text-lg font-semibold"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 rounded py-3 text-lg"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
