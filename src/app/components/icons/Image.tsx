// app/personal-details/page.tsx (Next.js 13+ App Router)
"use client";

import { useState } from "react";

export default function PersonalDetails() {
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-6">
        Personal Details
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jake Gyll"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* Empty column to keep alignment */}
        <div className="hidden md:block" />

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+44 1245 572 135"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Jakegyll@gmail.com"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-3 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
