'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';
import Separator from '../components/Separator';
// Update the import path to the correct icons file location, for example:
import SearchIcon from '../components/icons/SearchIcon'
import LocationIcon from '../components/icons/LocationIcon'
import CrosshairIcon from '../components/icons/CrosshairIcon'
import FilterIcon from '../components/icons/FilterIcon'
import JobCard from '../components/JobCard';

type Job = {
  type: string;
  title: string;
  salary: string;
  company: string;
  location: string;
};
  
const mockJobsData: Job[] = [
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

export default function FindJob() {
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [recentSearch, setRecentSearch] = useState<{jobTitle: string, location: string, results: Job[]} | null>(null);
  
  function shuffleJobs(jobs: Job[]) {
    return jobs
    .map(job => ({ job, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ job }) => job);
  }
  
  useEffect(() => {
    setDisplayedJobs(shuffleJobs(mockJobsData));
    const savedSearch = localStorage.getItem('recentSearch');
    if (savedSearch) {
      setRecentSearch(JSON.parse(savedSearch));
    }
  }, []);
  
  const handleSearch = () => {
    if (!jobTitle && !location) {
      setDisplayedJobs(shuffleJobs(mockJobsData));
      setRecentSearch(null);
      return;
    }
    const filtered = mockJobsData.filter(job =>
    job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
    );
    setDisplayedJobs(filtered.length ? filtered : shuffleJobs(mockJobsData));
    const searchData = { jobTitle, location, results: filtered };
    setRecentSearch(searchData);
    localStorage.setItem('recentSearch', JSON.stringify(searchData));
  };
  
  const jobsToShow = recentSearch && recentSearch.results.length
  ? recentSearch.results
  : displayedJobs;
  
  return (
  <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Header />
    <div className="max-w-screen py-6 px-80 bg-gray-200 flex items-center justify-between">
      <h1 className="text-lg dark:text-black mb-2">Find Job</h1>
      <div className="text-sm text-gray-600 dark:text-black mb-2 space-x-2 gap-2">
        <Link href="/find-job" className="">Home</Link>
        / 
        <Link href="/find-job" className=""> Find Job</Link>
      </div>
    </div>
    <main className="flex-col flex py-6 px-4 mt-4 sm:px-8 md:px-20">
      <div className="flex items-center w-full justify-between mb-8">
        <div className='flex flex-col gap-4 w-full'>
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
              <LocationIcon />
              <input 
              type="text" 
              placeholder="City, state or zip code" 
              className="flex-grow ml-2 outline-none text-md text-gray-800 bg-transparent placeholder-gray-400" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
              <CrosshairIcon />
            </div>
            
            {/* Buttons */}
            <div className="flex items-center w-full lg:w-1/4 space-x-2">
              <button className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-100 dark:bg-gray-100 text-gray-700 dark:text-gray-700 font-medium py-3 hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors">
                <FilterIcon />
                <span>Filters</span>
              </button>
              <button 
              className="flex-grow bg-blue-600 w-sm text-white font-medium py-3 rounded-sm p-4 hover:bg-blue-800 transition-colors"
              onClick={handleSearch}
              >
              Find Job
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobsToShow.map((job, idx) => (
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