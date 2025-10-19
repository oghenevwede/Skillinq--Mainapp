"use client";

import React, { useState } from "react";
import Image from "next/image";
import ApplicantRegisterPage from "../continue-registration/page";
import { useRouter } from "next/navigation";

export default function AdminRegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");




  const handleSubmit = async (e: React.FormEvent) => {
    <ApplicantRegisterPage />
    e.preventDefault();
    setError("");
    setIsLoading(true)
    try {
      /*const res = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ OTP }),
      });*/ 
      //if (!res.ok) throw new Error("Login failed");
      //router.push ('/almost-done')
      await router.push ('/welcome');
      // Handle successful login (e.g., save token, redirect)
    } catch (_err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white w-2xl p-8 rounded shadow-md">
        <div className="flex flex-col my-8 max-w-full items-center justify-center">
         <div className="flex flex-col items-center justify-center mx-10">
            <div className="flex items-center justify-between mx-10 mb-5">
              <Image src="/skillinq_logo.png" alt="Logo" width={150} height={150} className="h-8" />
            </div>

            <h2 className="text-2xl dark:text-black font-bold mb-1 mx-4">Enter your OTP</h2>
            <span className="mb-6 text-xs dark:text-black font-normal mx-9">Enter the OTP we sent to your email address</span>
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
           
          <div>
            <label htmlFor="otp" className="mb-2 mt-6 block font-normal dark:text-black text-xs">OTP</label>
            <input
              type="password"
              disabled={isLoading}
              id="otp"
              name="otp"
              maxLength={6}
              minLength={6}
              placeholder="****"
              className="dark:text-black mb-4 w-full max-w-xs p-2 border border-gray-400 rounded"
              value={OTP}
              onChange={e => setOTP(e.target.value)}
              required
            />
            <button type="submit" 
            disabled={isLoading}
            className="w-full max-w-xs justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-700">
             Create your account
              {isLoading && <span className="loader ml-2"></span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}