import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Use environment variable
const API_URL = "https://foundertherapy.onrender.com";
//const API_URL = "http://localhost:5000";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Navigate to home
      navigate("/home");
    } catch (err) {
      alert(
        "Login failed: " +
          (err.response?.data?.error || err.message || "Something went wrong.")
      );
    } finally {
      setLoading(false);
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white transform transition-transform duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:scale-105 hover:shadow-md"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
