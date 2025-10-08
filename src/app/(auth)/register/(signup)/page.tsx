"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ApplicantRegisterPage from "../continue-registration/page";

export default function AdminRegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      /*const res = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });*/
     // if (!res.ok) throw new Error("Login failed");
     router.push ('/register/continue-registration')
      // Handle successful login (e.g., save token, redirect)
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
  <div className="flex items-center justify-center bg-gray-100 mt-20">
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen w-full bg-white p-8 rounded shadow-md">
      <div className="flex flex-col items-center my-8 gap-4">
        <div className="flex items-center justify-between mx-10 mb-6">
          <Image src={'/skillinq_logo.png'} alt="Logo" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl dark:text-black font-semibold mb-1 mx-4">Continue to Skillinq</h2>
            <span className="mb-6 text-md dark:text-black font-normal mx-9">Let's help you find your next role</span>
            {error && <div className="mb-4 text-red-500">{error}</div>}
          </div>
          
          <div className="flex flex-col mb-4 max-w-xs w-full">
            <div className="">
              <label htmlFor="email" className="mb-2 mt-6 block font-medium dark:text-black text-md">Email</label>
              <input
              type="email"
              placeholder="Enter your email"
              className="dark:text-black mb-4 w-lg max-w-xs p-2 border-2 border-gray-400 rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              />
            </div>
            <div className="">
              <label htmlFor="password" className="mb-2 block font-medium dark:text-black text-md">Password</label>
              <input
              type="password"
              placeholder="********"
              className="dark:text-black mb-4 w-full max-w-xs p-2 border-2 border-gray-400 rounded"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              />
            </div>
          </div>
          <button type="submit" className="w-full max-w-xs justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-900">
            Sign up
          </button>
        </div>
        <div className="align-center mt-4 flex justify-center">
          <span className="text-xs dark:text-black font-normal mx-3">Already have an account? <a href="/login" className="text-blue-800 hover:underline">Sign in</a></span>
        </div>
      </div>
    </form>
  </div>
  );
}