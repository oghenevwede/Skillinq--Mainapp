'use client'

import React from "react";
import Image from "next/image";

export default function ForgotPassword() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white gap-8 py-6 mt-20 sm:py-12">
            <Image src={'/skillinq_logo.png'} alt="SkillInQ Logo" width={200} height={200} />
            <div className="space-y-3 items-center text-center">
                <h2 className="text-3xl font-semibold">Forgot Password</h2>
                <span>We will send an OTP to your email address</span>
            </div>
            <div className="flex flex-col gap-4 max-w-md w-sm px-6">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input 
                id="email"
                type="email"    
                placeholder="Enter your email" 
                className="border-2 border-gray-300 p-2 rounded-md" 
                />
                <button className="bg-blue-900 text-white text-lg p-2 rounded-md mt-4">Send Reset OTP</button>
            </div>
        </div>
    )
}