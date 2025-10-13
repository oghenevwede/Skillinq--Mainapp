'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  setJobTitle,
  setLocation,
  toggleFilters,
  filterJobs,
} from "@/store/slices/jobSearchSlice";

import SearchIcon from "../components/icons/SearchIcon";
import LocationIcon from "../components/icons/LocationIcon";
import CrosshairIcon from "../components/icons/CrosshairIcon";
import FilterIcon from "../components/icons/FilterIcon";
import Separator from "../components/Separator";

const JobSearch = () => {
  // Move hooks inside the component
  const dispatch = useDispatch<AppDispatch>();
  const {
    jobTitle,
    location,
    //selectedType,
    //selectedCompany,
    //filteredJobs,
    //showFilters,
  } = useSelector((state: RootState) => state.jobSearch);

  // Unique job types and companies for filters
  //const jobTypes = Array.from(new Set(filteredJobs.map(job => job.type)));
  //const companies = Array.from(new Set(filteredJobs.map(job => job.company)));

  return (
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
        <CrosshairIcon className="size-6 stroke-2 stroke-gray-500" />
      </div>
      <div className="flex items-center w-full lg:w-1/4 space-x-2">
        <button
          onClick={() => dispatch(toggleFilters())}
          className="flex-grow flex items-center justify-center w-2xl rounded bg-gray-200 text-black font-medium py-3 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
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
  );
};

export default JobSearch;