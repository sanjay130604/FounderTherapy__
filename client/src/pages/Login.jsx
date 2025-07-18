import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      // ✅ Navigate to home page after login
      navigate("/Home");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.error || "Something went wrong."));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form
        className="bg-white p-8 rounded-xl shadow-lg space-y-4 w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <input
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
