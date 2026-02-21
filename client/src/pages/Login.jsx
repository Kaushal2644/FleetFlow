import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Manager");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        ...form,
        role,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful 🚀");

      // REDIRECT TO DASHBOARD
      navigate("/dashboard");

    } catch (err) {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="flex h-screen font-sans">

      {/* LEFT PANEL */}
      <div className="flex-1 bg-gradient-to-br from-sky-800 to-sky-600 text-white flex flex-col justify-center px-14">
        <h2 className="text-3xl font-bold mb-10">🚚 FleetFlow</h2>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Drive smarter. <br />
          Deliver <span className="text-yellow-300">faster.</span> <br />
          Track everything.
        </h1>

        <p className="text-xl max-w-xl text-gray-200">
          A centralized platform that optimizes your fleet lifecycle.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-gray-50 flex justify-center items-center">
        <div className="w-[420px]">
          <h2 className="text-4xl font-bold mb-2">Sign in to FleetFlow</h2>
          <p className="text-gray-500 mb-6">
            Select your role and enter your credentials
          </p>

          {/* ROLE TABS */}
          <div className="flex bg-gray-200 rounded-lg p-1 mb-5">
            <button
              onClick={() => setRole("Manager")}
              className={`flex-1 py-2 rounded-md font-semibold ${
                role === "Manager" ? "bg-white shadow" : "text-gray-700"
              }`}
            >
              Manager
            </button>

            <button
              onClick={() => setRole("Dispatcher")}
              className={`flex-1 py-2 rounded-md font-semibold ${
                role === "Dispatcher" ? "bg-white shadow" : "text-gray-700"
              }`}
            >
              Dispatcher
            </button>
          </div>

          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg text-white text-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:opacity-90"
          >
            Sign In
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;