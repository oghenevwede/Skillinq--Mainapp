// app/personal-details/page.tsx (Next.js 13+ App Router)
"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Header } from '../components/Header'

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
    };
    
    return (  
    <div className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="flex flex-col ml-10 border-b border-gray-300 pb-6 mb-6">
          <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
          <span className="text-xl text-gray-600">Providing accurate details makes it easier for us to send jobs you are 80% fit for</span>
        </div>
        <div className="flex flex-row gap-30 border-b border-gray-300 ml-10 pb-6 mb-10">
          <div className="flex flex-col">
            <span className="text-md font-semibold mb-2">Profile Photo</span>   
            <span className="text-md text-gray-600 mb-2 text-wrap text-spac">This image will be shown publicly<br /> as your profile picture, it<br /> will help recruiters recognize you!</span>   
          </div>
          <div className="flex gap-8 p-4">
            <Image src="/next.svg" alt="Profile Photo" className="  " width={100} height={100} />
            <div className="flex flex-1 flex-col bg-gray-100 border-3 border-blue-800 border-dashed p-8 rounded-lg items-center justify-center">
              <button className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-800 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <span className="text-gray-600 text-center text-md w-full"><a href="#" className="text-blue-800 hover:underline">Click to replace</a> or drag and drop <br />SVG, PNG, JPG or GIF (max. 400 x 400px)</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-6 max-w-3xl">
          <div className="flex flex-1 flex-row gap-80">
            <div className="ml-10">
              <span >Personal Details</span>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="fullName" className="">Full Name</label>
              <input 
              type="text" 
              id="fullName" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-3xl border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-blue-800" 
              placeholder="Enter your full name" 
              />
            </div>  
          </div>
          <div className="flex flex-1 flex-row gap-80">
            <div className="ml-10">
              <span >Personal Details</span>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="fullName" className="">Full Name</label>
              <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleChange}
              className="w-3xl border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-blue-800" 
              placeholder="Enter your full name" 
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }