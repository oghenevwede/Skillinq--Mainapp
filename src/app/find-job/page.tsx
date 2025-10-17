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
import { Job, jobsData } from '../data/jobs';


// Extract unique values for filters
const jobTypes = Array.from(new Set(jobsData.map(job => job.type)));
const companies = Array.from(new Set(jobsData.map(job => job.company)));


export default function FindJob() {
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [_displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [_recentSearch, setRecentSearch] = useState<{jobTitle: string, location: string, results: Job[]} | null>(null);
    // For filters

    const [filteredJobs, setFilteredJobs] = useState(jobsData);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');

  
  
  function shuffleJobs(jobs: Job[]) {
    return jobs
    .map(job => ({ job, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ job }) => job);
  }
  
  useEffect(() => {
    setDisplayedJobs(shuffleJobs(jobsData).slice(0, 6));
    const savedSearch = localStorage.getItem('recentSearch');
    if (savedSearch) {
      setRecentSearch(JSON.parse(savedSearch));
    }
  }, []);
  
  // const jobsToShow = recentSearch && recentSearch.results.length ? recentSearch.results : displayedJobs;


  // Search and Filter Logic
  const filterSearch = () => {
    const filtered = jobsData.filter(
    job =>
    job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
    job.jobLocation.toLowerCase().includes(location.toLowerCase()) &&
    (selectedType ? job.type.toLowerCase() === selectedType.toLowerCase() : true) &&
    (selectedCompany ? job.company === selectedCompany : true)
    );
    setFilteredJobs(filtered.length ? filtered : jobsData);
    setShowFilters(false);
  };

  
  return (
  <div className="bg-white min-h-screen overflow-x-hidden sm:max-w-full text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Header />
    <div className="w-full max-w-full py-6 px-6 lg:px-80 bg-gray-200 flex items-center justify-between sm:max-w-full sm:overflow-hidden md:max-w-full md:overflow-hidden">
      <h1 className="text-lg dark:text-black mb-2">Find Job</h1>
      <div className="text-sm text-gray-600 dark:text-black mb-2 space-x-2 gap-2">
        <Link href="/dashboard" className="">Home</Link>
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
              <LocationIcon className='size-6 stroke-gray-600' />
              <input 
              type="text" 
              placeholder="City, state or zip code" 
              className="flex-grow ml-2 outline-none text-md text-gray-800 bg-transparent placeholder-gray-400" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
              <CrosshairIcon className='size-6 stroke-gray-700' />
            </div>
            
            {/* Buttons */}
            <div className="flex items-center w-full lg:w-1/4 space-x-2">
              <button 
              onClick={() => setShowFilters(true)}
              className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-200 dark:bg-gray-100 text-gray-700 dark:text-gray-700 font-medium py-3 hover:bg-gray-400 dark:hover:bg-gray-200 transition-colors">
                <FilterIcon className='size-6'/>
                <span>Filters</span>
              </button>
              <button 
              className="flex-grow bg-blue-800 w-sm text-white font-medium py-3 rounded-sm p-4 hover:bg-blue-700 transition-colors"
              onClick={filterSearch}
              >
              Find Job
            </button>
          </div>

          {showFilters && (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-black">Filter Jobs</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">Job Type</label>
            <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="w-full border border-gray-300 text-gray-700 rounded p-2"
            >
            <option value="">Any</option>
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">Company</label>
            <select
            value={selectedCompany}
            onChange={e => setSelectedCompany(e.target.value)}
            className="w-full border border-gray-300 text-gray-700 rounded p-2"
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
          onClick={filterSearch}
          className="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-700"
          >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
  )}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} {...job} />
        ))}
      </div>
    </main>
  </div>
  );
}