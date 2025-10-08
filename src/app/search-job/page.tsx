'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JobCard from '../components/JobCard';
import { Header } from '../components/Header';
import SearchIcon from '../components/icons/SearchIcon';
import LocationIcon from '../components/icons/LocationIcon';
import CrosshairIcon from '../components/icons/CrosshairIcon';
import FilterIcon from '../components/icons/FilterIcon';
import Separator from '../components/Separator';

// --- MOCK DATA ---
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
  {
    type: "Full-time",
    title: "Frontend Developer",
    salary: "$80,000 - $100,000",
    company: "TechNova",
    location: "Lagos",
  },
  {
    type: "Part-time",
    title: "UI/UX Designer",
    salary: "$40,000 - $60,000",
    company: "DesignHub",
    location: "Abuja",
  },
  {
    type: "Contract",
    title: "Backend Engineer",
    salary: "$90,000 - $120,000",
    company: "CloudWorks",
    location: "Remote",
  },
  {
    type: "Internship",
    title: "Data Analyst Intern",
    salary: "$20,000 - $30,000",
    company: "Insight Analytics",
    location: "Port Harcourt",
  },
  {
    type: "Full-time",
    title: "Product Manager",
    salary: "$110,000 - $140,000",
    company: "InnovateX",
    location: "Lagos",
  },
  {
    type: "Contract",
    title: "Mobile App Developer",
    salary: "$70,000 - $90,000",
    company: "Appify",
    location: "Remote",
  },
  {
    type: "Full-time",
    title: "DevOps Engineer",
    salary: "$100,000 - $130,000",
    company: "ScaleOps",
    location: "Abuja",
  },
  {
    type: "Part-time",
    title: "Content Writer",
    salary: "$30,000 - $50,000",
    company: "WriteRight",
    location: "Ibadan",
  },
  {
    type: "Internship",
    title: "Marketing Intern",
    salary: "$15,000 - $25,000",
    company: "MarketMinds",
    location: "Lagos",
  },
  {
    type: "Full-time",
    title: "QA Tester",
    salary: "$60,000 - $80,000",
    company: "QualityFirst",
    location: "Remote",
  },
];

// Get unique job types and companies for filters
const jobTypes = Array.from(new Set(mockJobsData.map(job => job.type)));
const companies = Array.from(new Set(mockJobsData.map(job => job.company)));

export default function SearchJob() {
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(mockJobsData);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // Filter jobs when user clicks Search or applies filters
  const handleSearch = () => {
    const filtered = mockJobsData.filter(job =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (selectedType ? job.type.toLowerCase() === selectedType.toLowerCase() : true) &&
      (selectedCompany ? job.company === selectedCompany : true)
    );
    setFilteredJobs(filtered.length ? filtered : mockJobsData);
    setShowFilters(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-col flex gap-6 py-6 px-4 mt-16 sm:px-8 md:px-20">
        <div className="flex items-center w-full justify-between mb-8">
          <div className='flex flex-col gap-4 w-full'>
            <h1 className="text-3xl dark:text-black mb-2">Explore Top Opportunities</h1>
            <div className="bg-white dark:bg-gray-800 rounded-sm shadow p-2.5 flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto space-y-2 lg:space-y-0 lg:space-x-4 border border-gray-200 dark:border-gray-700">  
              {/* Search by Title/Keyword */}
              <div className="flex items-center w-full lg:w-1/2 px-4 py-2">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search by: Job title, Position, Keyword..."
                  className="flex-grow ml-2 outline-none text-lg text-gray-800 dark:text-gray-200 bg-transparent placeholder-gray-400"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <Separator />
              {/* Location Input */}
              <div className="flex items-center w-full lg:w-1/4 px-4 py-2">
                <LocationIcon className='size-6 stroke-gray-600' />
                <input 
                  type="text" 
                  placeholder="City, state or zip code" 
                  className="flex-grow ml-2 outline-none text-md text-gray-800 dark:text-gray-200 bg-transparent placeholder-gray-400" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <CrosshairIcon />
              </div>
              {/* Buttons */}
              <div className="flex items-center w-full lg:w-1/4 space-x-2">
                <button 
                  onClick={() => setShowFilters(true)}
                  className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <FilterIcon />
                  <span>Filters</span>
                </button>
                <button 
                  className="flex-grow bg-blue-900 w-4xl text-white font-medium py-3 rounded-xs p-4 hover:bg-blue-800 transition-colors"
                  onClick={handleSearch}
                  type="button"
                >
                  Search Job
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Modal */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Job Type</label>
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="">Any</option>
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Company</label>
                <select
                  value={selectedCompany}
                  onChange={e => setSelectedCompany(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="">Any</option>
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, idx) => (
            <JobCard
              key={`${job.title}-${job.company}-${idx}`}
              type={job.type}
              title={job.title}
              salary={job.salary}
              company={job.company}
              location={job.location}
            />
          ))}
        </div>
      </main>
    </div>
  );
}