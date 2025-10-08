"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      /*const res = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });*/

      // if (!res.ok) throw new Error("Login failed");
      router.push ('./dashboard')
      // Handle successful login (e.g., save token, redirect)
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen w-full bg-white mt-20 p-8 rounded shadow-md">
        <div className="flex items-center justify-between mb-6">
          <Image src='/skillinq_logo.png' alt="Logo" width={200} height={200}/>
        </div>

          <h2 className="text-3xl dark:text-black font-semibold mb-2">Log in to your account</h2>
          <span className="mb-6 text-md dark:text-black font-normal mx-3">Welcome back! Please enter your details.</span>
          {error && <div className="mb-4 text-red-500">{error}</div>}

          <div className="flex flex-col mb-4 max-w-xs w-full">
          <label htmlFor="email" className="mb-2 mt-6 block font-medium text-md dark:text-black">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="dark:text-black mb-4 min-w-full p-2 border-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className="mb-2 block font-medium text-md dark:text-black">Password</label>
          <input
            type="password"
            placeholder="********"
            className="dark:text-black mb-4 w-full p-2 border-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          </div>
          <button type="submit" className="w-full max-w-xs justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-700">
            Sign in
          </button>

          <div className="align-center mt-4 flex justify-center">
            <span className="text-xs dark:text-black font-normal mx-3">Don't have an account? <a href="/register" className="text-blue-800 hover:underline">Sign up</a></span>
          </div>

        </form>
    </div>
  );
}