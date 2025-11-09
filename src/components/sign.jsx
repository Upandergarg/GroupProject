import React, { useState } from "react";


const Sign = ({ onClose, onSignupSuccess }) => {
  // determine auth export (handles both `export const auth = ...` and `export default auth`)


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    aadhaarNumber: "",
    mobileNumber: "",
    age: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const mapFirebaseError = (code, message) => {
    if (!code) return message || "Signup failed";
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/weak-password":
        return "Password is too weak (min 6 characters).";
      default:
        return message || code;
    }
  };

  

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[34rem] rounded-lg p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Citizen Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
          />
          <input
            type="text"
            name="aadhaarNumber"
            placeholder="Aadhaar Number"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
            minLength={6}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 text-lg"
            required
          />
          <div className="space-y-2">
            <button 
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white rounded py-3 text-lg font-semibold`}
            >
              {"Create Account"}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="w-full bg-gray-200 hover:bg-gray-300 rounded py-3 text-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;