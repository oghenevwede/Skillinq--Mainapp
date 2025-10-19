"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { jobsData } from "@/app/data/jobs";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import { Header } from "../components/Header";

export default function ApplicationsPage() {
  const appliedJobs = useSelector((state: RootState) => state.job.appliedJobs);
  
  // Match applied job IDs with job data
  const appliedJobData = appliedJobs
  .map((applied) => {
    const jobInfo = jobsData.find((job) => String(job.id) === applied.id);
    return jobInfo ? { ...jobInfo, status: applied.status } : null;
  })
  .filter(Boolean);
  
  return (
  <div className="bg-gray-50 min-h-screen p-6">
    <Header />
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold text-gray-800">Find Job</h1>
      <div className="flex gap-4 text-sm text-gray-500">
        <span>Home</span>
        <span>/</span>
        <span className="text-blue-600 font-medium">Find job</span>
      </div>
    </div>
    
    {/* Search and Filters */}
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full">
        <input
        type="text"
        placeholder="Search by: Job title, Position, Keyword..."
        className="w-full md:w-1/2 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
        type="text"
        placeholder="City, state or zip code"
        className="w-full md:w-1/3 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-3 justify-end">
        <button className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium">
          Filters
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
          Search Job
        </button>
      </div>
    </div>
    
    {/* Tabs */}
    <div className="flex gap-8 border-b mb-4 text-sm font-medium text-gray-600">
      <button className="border-b-2 border-blue-600 text-blue-600 pb-2">
        All ({appliedJobData.length})
      </button>
      <button>In Review (0)</button>
      <button>Interviewing (0)</button>
      <button>Assessment (0)</button>
      <button>Offered (0)</button>
      <button>Hired (0)</button>
    </div>
    
    {/* Table */}
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-600 font-semibold uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Hiring Company</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Job Field</th>
            <th className="px-6 py-3">Date Applied</th>
            <th className="px-6 py-3">Job Close Date</th>
            <th className="px-6 py-3">Rating</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobData.length === 0 ? (
            <tr>
              <td
              colSpan={8}
              className="text-center py-10 text-gray-500 text-sm"
              >
              No applications yet.
            </td>
          </tr>
          ) : (
          appliedJobData.map((job, index) => (
          <tr
          key={index}
          className="border-b border-gray-100 hover:bg-gray-50 transition"
          >
          <td className="px-6 py-4 text-blue-600 font-medium">
            {job?.company}
          </td>
          <td className="px-6 py-4 text -gray-800">{job?.title}</td>
          <td className="px-6 py-4">
            <span
            className={`inline-flex items-center text-xs font-medium px-2 py-1 rounded-full ${
              job?.status === "Accepted"
              ? "bg-green-100 text-green-700"
              : job?.status === "Declined"
              ? "bg-red-100 text-red-600"
              : "bg-blue-100 text-blue-600"
            }`}
            >
            {job?.status}
          </span>
        </td>
        <td className="px-6 py-4">
          <span
          className={`text-xs px-2 py-1 rounded-full border ${
            job?.category === "Marketing"
            ? "text-blue-600 border-blue-200"
            : "text-orange-600 border-orange-400"
          }`}
          >
          {job?.category}
        </span>
      </td>
      <td className="px-6 py-4 text-gray-600">2023-08-09</td>
      <td className="px-6 py-4 text-gray-600">
        {job?.expiryDate || "2023-08-09"}
      </td>
      <td className="px-6 py-4 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <StarIcon
          key={i}
          className={`h-4 w-4 inline ${
            i < (index % 5) + 2 ? "fill-yellow-400" : "fill-gray-300"
          }`}
          />
          ))}
        </td>
        <td className="px-6 py-4 text-right">
          <Link
          href={`/job-details/${job?.id}`}
          className="bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800"
          >
          View details
        </Link>
      </td>
    </tr>
    ))
    )}
  </tbody>
</table>
</div>
</div>
);
}
