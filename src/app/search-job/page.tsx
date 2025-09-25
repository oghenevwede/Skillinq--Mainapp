'use client';

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  setJobTitle,
  setLocation,
  setSelectedType,
  setSelectedCompany, 
  toggleFilters,
  filterJobs,
} from "@/store/slices/jobSearchSlice";

import JobCard from "../components/JobCard";
import { Header } from "../components/Header";
import SearchIcon from "../components/icons/SearchIcon";
import LocationIcon from "../components/icons/LocationIcon";
import CrosshairIcon from "../components/icons/CrosshairIcon";
import FilterIcon from "../components/icons/FilterIcon";
import Separator from "../components/Separator";

export default function SearchJob() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    jobTitle,
    location,
    selectedType,
    selectedCompany,
    filteredJobs,
    showFilters,
  } = useSelector((state: RootState) => state.jobSearch);

  // Unique job types and companies for filters
  const jobTypes = Array.from(new Set(filteredJobs.map(job => job.type)));
  const companies = Array.from(new Set(filteredJobs.map(job => job.company)));

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-col flex gap-6 py-6 px-4 mt-16 sm:px-8 md:px-20">
        <div className="flex items-center w-full justify-between mb-8">
          <div className='flex flex-col gap-4 w-full'>
            <h1 className="text-3xl dark:text-black mb-2">Explore Top Opportunities</h1>
            <div className="bg-white rounded-sm shadow p-2.5 flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto space-y-2 lg:space-y-0 lg:space-x-4 border border-gray-200 dark:border-gray-700">
              {/* Search Input */}
              <div className="flex items-center w-full lg:w-1/2 px-4 py-2">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search by: Job title, Position, Keyword..."
                  className="flex-grow ml-2 outline-none text-lg text-gray-800 dark:text-gray-200 bg-transparent placeholder-gray-400"
                  value={jobTitle}
                  onChange={(e) => dispatch(setJobTitle(e.target.value))}
                />
              </div>
              <Separator />
              <div className="flex items-center w-full lg:w-1/4 px-4 py-2">
                <LocationIcon className="size-6 stroke-gray-600" />
                <input
                  type="text"
                  placeholder="City, state or zip code"
                  className="flex-grow ml-2 outline-none text-md text-gray-800 dark:text-gray-200 bg-transparent placeholder-gray-400"
                  value={location}
                  onChange={(e) => dispatch(setLocation(e.target.value))}
                />
                <CrosshairIcon />
              </div>
              <div className="flex items-center w-full lg:w-1/4 space-x-2">
                <button
                  onClick={() => dispatch(toggleFilters())}
                  className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-100 text-black font-medium py-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <FilterIcon className="size-6 stroke-2 stroke-gray-800" />
                  <span>Filters</span>
                </button>
                <button
                  className="flex-grow bg-blue-900 w-4xl text-white font-medium py-3 rounded-xs p-4 hover:bg-blue-800 transition-colors"
                  onClick={() => dispatch(filterJobs())}
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
              <h2 className="text-xl font-bold mb-4 text-black">Filter Jobs</h2>
              <div className="mb-4">
                <label className="block mb-1 font-medium text-black">Job Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => dispatch(setSelectedType(e.target.value))}
                  className="w-full text-black border border-gray-300 rounded p-2"
                >
                  <option className="text-gray-500" value="">Any</option>
                  {jobTypes.map(type => (
                    <option className="text-black" key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium text-black">Company</label>
                <select
                  value={selectedCompany}
                  onChange={(e) => dispatch(setSelectedCompany(e.target.value))}
                  className="w-full border text-black border-gray-300 rounded p-2"
                >
                  <option className="text-gray-500" value="">Any</option>
                  {companies.map(company => (
                    <option className="text-black" key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => dispatch(toggleFilters())}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => dispatch(filterJobs())}
                  className="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Job Cards */}
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
