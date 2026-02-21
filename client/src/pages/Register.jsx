import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Manager");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        ...form,
        role,
      });

      alert("Register Successful ✅");

      // REDIRECT TO DASHBOARD
      navigate("/dashboard");

    } catch (err) {
      alert("Register Failed ❌");
    }
  };

  return (
    <div className="flex h-screen font-sans">

      {/* LEFT */}
      <div className="flex-1 bg-gradient-to-br from-sky-800 to-sky-600 text-white flex flex-col justify-center px-14">
        <h2 className="text-3xl font-bold mb-10">🚚 FleetFlow</h2>
        <h1 className="text-6xl font-bold leading-tight">
          Join FleetFlow
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex-1 bg-gray-50 flex justify-center items-center">
        <div className="w-[420px]">

          <h2 className="text-4xl font-bold mb-2">Create Account</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />

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

          {/* ROLE TABS */}
          <div className="flex bg-gray-200 rounded-lg p-1 mb-5">
            <button
              onClick={() => setRole("Manager")}
              className={`flex-1 py-2 rounded-md font-semibold ${
                role === "Manager" ? "bg-white shadow" : ""
              }`}
            >
              Manager
            </button>

            <button
              onClick={() => setRole("Dispatcher")}
              className={`flex-1 py-2 rounded-md font-semibold ${
                role === "Dispatcher" ? "bg-white shadow" : ""
              }`}
            >
              Dispatcher
            </button>
          </div>

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-sky-400 to-blue-600"
          >
            Register
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;