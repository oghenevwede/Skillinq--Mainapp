"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      // Handle successful login (e.g., save token, redirect)
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex-col bg-white p-8 max-w-sm rounded shadow-md">
      
      <div className="flex items-center justify-between">
        <img src="/skillinq_logo.png" alt="Logo" className="h-8 mx-12 mb-5" />
      </div>

        <h2 className="text-2xl font-bold mb-1">Log in to your account</h2>
        <span className="mb-6 text-xs font-normal mx-3">Welcome back! Please enter your details</span>
        {error && <div className="mb-4 text-red-500">{error}</div>}

        <label htmlFor="email" className="mb-2 mt-6 block font-medium text-xs">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full max-w-xs p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="mb-2 block font-medium text-xs">Password</label>
        <input
          type="password"
          placeholder="********"
          className="mb-4 w-full max-w-xs p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full max-w-xs justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-700">
          Sign in
        </button>

      <div className="align-center mt-4 flex justify-center">
        <span className="text-xs font-normal mx-3">Don't have an account? <a href="/register" className="text-blue-800 hover:underline">Sign up</a></span>
      </div>

      </form>
    </div>
  );
}