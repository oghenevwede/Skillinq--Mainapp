import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import LocationIcon from './icons/LocationIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import {useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { Job, jobsData } from "@/app/data/jobs";
import { setSelectedJob, setApplicationStep } from "@/store/slices/jobSlice";


const handleJobClick = (dispatch: AppDispatch, jobId?: string | number) => {
  if (jobId === undefined || jobId === null) return;
  const idStr = String(jobId);
  // jobsData uses string ids like "job-1" — try to match by string or numeric suffix
  const jobData = jobsData.find((job) => job.id === idStr || job.id === `job-${idStr}` || Number(job.id) === Number(idStr));
  if (jobData) {
    dispatch(setSelectedJob(jobData));
    dispatch(setApplicationStep("initial"));
  }
};

type JobCardProps = Partial<Job> & { location?: string };
const JobCard = ({ id, type, title, salary, company, jobLocation, location, logo }: JobCardProps) => {
  // Accept either `jobLocation` or legacy `location` prop
  const resolvedLocation = jobLocation ?? location;
  const _selectedJob = useSelector((state: RootState) => state.job.selectedJob);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link href={`/job-details/${id ?? ''}`} onClick={() => handleJobClick(dispatch, id)}>
      <div className="flex flex-1 flex-col bg-blue-100 rounded-md p-6 shadow-xs border border-gray-200">
        <div className="flex flex-col space-y-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <div className="inline-flex items-center space-x-2">
            <span className="text-xs uppercase font-medium text-green-600 bg-green-100 rounded p-1">{type}</span>
            <span className="flex text-sm text-gray-500 mb-2">{salary}</span>
          </div>
        </div>
        <div className="inline-flex space-x-2 items-center text-sm text-gray-500">
          {/** Use company logo from job data if available; fall back to globe.svg */}
          <Image src={`/${logo ?? 'globe.svg'}`} alt={`${company ?? 'Company'} logo`} width={40} height={40} className="mr-2 rounded-full" />
          <div className="flex flex-col">
            <p className="text-md font-semibold text-black">{company}</p>
            <div className="flex">
              <LocationIcon className='size-5 stroke-2 stroke-gray-600' />
                {resolvedLocation && <span className="ml-1 text-gray-600">{resolvedLocation}</span>}
            </div>
          </div>
          <BookmarkIcon />
        </div>
      </div>
    </Link>
  );
};
export default JobCard;



{/*type JobCardProps = {
  id: number;
  type: string;
  title: string;
  salary: string;
  company: string;
  location: string;
};

export default function JobCard({ id, type, title, salary, company, location }: JobCardProps) {
  return (
    <Link href={`/job/${id}`}>
      <div className="p-5 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all duration-300 cursor-pointer bg-white">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-700 font-medium">{salary}</p>
        <span className="inline-block text-xs mt-2 px-2 py-1 bg-blue-100 text-blue-700 rounded">{type}</span>
      </div>
    </Link>
  );
} */}
