'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnalyticsCard from '../components/AnalyticsCard';
import JobCard from '../components/JobCard';
import { Header } from '../components/Header';
import { PlusIcon } from '../components/icons/PlusIcon';

// --- MOCK DATA ---
const mockAnalyticsData = [
  {
    title: "Total Jobs Applied",
    value: "2,420",
    change: "40%",
    trend: "up" as "up" | "down",
  },
  {
    title: "Total Jobs Accepted",
    value: "1,210",
    change: "10%",
    trend: "down" as "up" | "down",
  },
  {
    title: "Total Jobs Rejected",
    value: "316",
    change: "20%",
    trend: "up" as "up" | "down",
  },
];

const mockJobsData = [
  {
    type: "FULL-TIME",
    title: "Technical Support Specialist",
    salary: "Salary: $20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    type: "FULL-TIME",
    title: "Senior UX Designer",
    salary: "Salary: $20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    type: "INTERNSHIP",
    title: "Marketing Officer",
    salary: "Salary: $20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="py-6 px-4 sm:px-8 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl dark:text-black font-bold mb-2">Welcome back, Andre Pinda</h1>
            <p className="text-gray-700 dark:text-gray-700">Track your Job applications and discover more!</p>
          </div>
          <button className="bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
            <PlusIcon />
            Edit your resume
          </button>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnalyticsCard
            title="Total Jobs Applied"
            value="2,420"
            change="40%"
            trend="up"
            color="green"
          />
          <AnalyticsCard
            title="Total Jobs Accepted"
            value="1,210"
            change="10%"
            trend="down"
            color="red"
          />
          <AnalyticsCard
            title="Total Jobs Rejected"
            value="316"
            change="20%"
            trend="up"
            color="green"
          />
        </div>

        {/* Top Jobs Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-black font-bold">Top Jobs for you this week</h2>
          <Link href="#" className="text-blue-800 hover:underline transition-colors">
          <button className='bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors'>
            View all Jobs
          </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobCard
            type="FULL-TIME"
            title="Technical Support Specialist"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
          <JobCard
            type="FULL-TIME"
            title="Senior UX Designer"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
          <JobCard
            type="INTERNSHIP"
            title="Marketing Officer"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
          <JobCard
            type="FULL-TIME"
            title="Technical Support Specialist"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
          <JobCard
            type="FULL-TIME"
            title="Senior UX Designer"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
          <JobCard
            type="INTERNSHIP"
            title="Marketing Officer"
            salary="Salary: $20,000 - $25,000"
            company="Google Inc."
            location="Dhaka, Bangladesh"
          />
        </div>
      </main>
    </div>
  );
}
