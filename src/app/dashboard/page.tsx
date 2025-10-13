'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import AnalyticsCard from '../components/AnalyticsCard';
import JobCard from '../components/JobCard';
import { PlusIcon } from '../components/icons/PlusIcon';
import SearchIcon from '../components/icons/SearchIcon';
import LocationIcon from '../components/icons/LocationIcon';
import CrosshairIcon from '../components/icons/CrosshairIcon';
import FilterIcon from '../components/icons/FilterIcon';
import Separator from '../components/Separator';

// --- UNIFIED MOCK DATA ---
const mockJobsData = [
// Dashboard Jobs
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
  salary: "Salary: $25,000 - $30,000",
  company: "Amazon Web Services",
  location: "Lagos, Nigeria",
},
{
  type: "INTERNSHIP",
  title: "Marketing Officer",
  salary: "Salary: $15,000 - $20,000",
  company: "Meta Africa",
  location: "Abuja, Nigeria",
},

// Search Jobs
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

// Extract unique values for filters
const jobTypes = Array.from(new Set(mockJobsData.map(job => job.type)));
const companies = Array.from(new Set(mockJobsData.map(job => job.company)));

export default function DashboardPage() {
  const [view, setView] = useState<'dashboard' | 'jobs'>('dashboard');
  
  // States for SearchJobs view
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(mockJobsData);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  
  // Search and Filter Logic
  const handleSearch = () => {
    const filtered = mockJobsData.filter(
    job =>
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
    
    <main className="py-6 px-4 sm:px-8 md:px-20 mt-6">
      {view === 'dashboard' ? (
      <>
      {/* DASHBOARD VIEW */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-black">
            Welcome back, Andre Pinda
          </h1>
          <p className="text-gray-700 dark:text-gray-700">
            Track your Job applications and discover more!
          </p>
        </div>
        <button className="bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
          <PlusIcon />
          Edit your resume
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AnalyticsCard title="Total Jobs Applied" value="2,420" change="40%" trend="up" color="green" />
        <AnalyticsCard title="Total Jobs Accepted" value="1,210" change="10%" trend="down" color="red" />
        <AnalyticsCard title="Total Jobs Rejected" value="316" change="20%" trend="up" color="green" />
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-black font-bold">
          Top Jobs for you this week
        </h2>
        <button
        onClick={() => setView('jobs')}
        className="bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
        >
        View all Jobs
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockJobsData.slice(0, 6).map((job, index) => (
        <JobCard key={index} {...job} />
        ))}
      </div>
      </>
      ) : (
      <>
      {/* SEARCH JOBS VIEW */}
      {/*<div className="flex-col flex gap-6 py-6 px-4 mt-16 sm:px-8 md:px-20">*/} {/* just copied the code from search-jobs/page.tsx and removed the top div since it now shares one with dashboard/page.tsx*/}
        <div className="flex items-center w-full justify-between mb-8 mt-8">
          <div className='flex flex-col gap-4 w-full'>
            <h1 className="text-3xl dark:text-black mb-2">Explore Top Opportunities</h1>
            <div className="bg-white rounded-sm shadow p-2.5 mb-4 flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto space-y-2 lg:space-y-0 lg:space-x-4 border border-gray-200 dark:border-gray-700">  
              {/* Search by Title/Keyword */}
              <div className="flex items-center w-full lg:w-1/2 px-4 py-2">
                <SearchIcon />
                <input
                type="text"
                placeholder="Search by: Job title, Position, Keyword..."
                className="flex-grow ml-2 outline-none text-lg text-black bg-transparent placeholder-gray-400"
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
                className="flex-grow ml-2 outline-none text-md text-black bg-transparent placeholder-gray-400" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <CrosshairIcon className='size-6 stroke-gray-600' />
              </div>
              {/* Buttons */}
              <div className="flex items-center w-full lg:w-1/4 space-x-2">
                <button 
                onClick={() => setShowFilters(true)}
                className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <FilterIcon className='size-6' />
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
  
  
  {/* Job Listings */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredJobs.map((job, idx) => (
      <JobCard
      key={`${job.title}-${job.company}-${idx}`}
      {...job}
      />
      ))}
    </div>
    </>
    )}
  </main>
</div>
);
}
