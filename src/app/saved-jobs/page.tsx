'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JobCard from '../components/JobCard';
import { Header } from '../components/Header';
import SearchIcon from '../components/icons/SearchIcon';
import LocationIcon from '../components/icons/LocationIcon';
import CrosshairIcon from '../components/icons/CrosshairIcon';
import FilterIcon from '../components/icons/FilterIcon';
import Separator from '../components/Separator'

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

// Icons using inline SVG for simplicity. In a real app, you would use an icon library.

export default function SearchJob() {
  const [location, setLocation] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  
  // Add handleSearch function
  const handleSearch = () => {
    // Implement search logic here, e.g., filter jobs or trigger API call
    console.log('Searching for:', jobTitle, location);
  };
  
  return (
  <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Header />
    <main className="py-6 px-4 mt-16 sm:px-8 md:px-20">
      <div className="flex items-center w-full justify-between mb-8">
        <div className='flex flex-col gap-4 w-full'>
          <h1 className="text-3xl dark:text-black font-bold mb-2">Explore Top Opportunities</h1>
          <div className="bg-white rounded-sm shadow p-2.5 flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto space-y-2 lg:space-y-0 lg:space-x-4 border border-gray-200">  
            
            {/* Search by Title/Keyword */}
            <div className="flex items-center w-full lg:w-1/2 px-4 py-2">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search by: Job title, Position, Keyword..."
                className="flex-grow ml-2 outline-none text-lg text-gray-800 bg-transparent placeholder-gray-400"
                value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            
            <Separator />
            
            {/* Location Input */}
            <div className="flex items-center w-full lg:w-1/4 px-4 py-2">
              <LocationIcon className='size-6 stroke-blue-800 dark:stroke-blue-800 stroke-2'/>
              <input 
              type="text" 
              placeholder="City, state or zip code" 
              className="flex-grow ml-2 outline-none text-sm text-gray-800 dark:text-gray-200 bg-transparent placeholder-gray-400" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
              <CrosshairIcon className='size-6 stroke-2 stroke-gray-400'/>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center w-full lg:w-1/4 space-x-2">
              <button className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <FilterIcon className='size-6'/>        
                <span>Filters</span>
              </button>
              <button 
              className="flex-grow bg-blue-900 w-4xl text-white font-medium py-3 rounded-xs p-4 hover:bg-blue-800 transition-colors"
              onClick={handleSearch}
              >
              Search Job
            </button>
          </div>
        </div>
      </div>
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
