import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.error || "Something went wrong"));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* ✨ Hover effect only, no loop */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
