"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setSelectedJob, setApplicationStep, clearSelectedJob } from "@/store/slices/jobSlice";
import { jobsData } from "@/app/data/jobs";

import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import MailIcon from "../../components/icons/MailIcon";
import LinkIcon from "../../components/icons/LinkIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import SquareStackIcon from "../../components/icons/SquareStackIcon";
import ClockIcon from "../../components/icons/ClockIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import BriefcaseIcon from "../../components/icons/BriefcaseIcon";
import WalletIcon from "../../components/icons/WalletIcon";
import JobModal from "../../components/JobModal";
import { useParams } from "next/navigation";
import { MapIcon } from "@heroicons/react/24/outline";

// Job type is available in data but not required in this file

export default function JobDetailsPage(_props: unknown) {
  const dispatch = useDispatch<AppDispatch>();
    const selectedJob = useSelector((state: RootState) => state.job.selectedJob);
    const { id } = useParams() || {}; // Handle undefined params during initial render
    
    const appliedJobs = useSelector((state: RootState) => state.job.appliedJobs);
    const isApplied = selectedJob ? appliedJobs.some((appliedJob) => appliedJob.id === String(selectedJob.id)) : false;
    // Guard against undefined id
    useEffect(() => {
      if (!id) return;
      
      
      // Fetch job data from data/jobs.ts
      // jobsData uses string ids like "job-1" — match by string first, then try numeric fallbacks
      const jobData = jobsData.find((job) =>
      String(job.id) === String(id) || // exact string match (e.g. "job-1")
      job.id === `job-${id}` || // allow id params like "1" to match "job-1"
      (!Number.isNaN(Number(job.id)) && Number(job.id) === Number(id)) // numeric match if possible
      );
      if (jobData) {
        dispatch(setSelectedJob(jobData));
      } else {
        // clear any previously selected job so the UI can render a not-found message
        dispatch(clearSelectedJob());
      }
    }, [dispatch, id]);
    
    const handleApply = () => {
      dispatch(setApplicationStep("confirm"));
    };
    
    // Check if job is expired (optional enhancement)
    const isExpired = selectedJob && new Date(selectedJob.expiryDate) < new Date();
    if (!selectedJob) return <p className="text-center text-gray-500">Loading job details...</p>;
    if (isExpired) return <p className="text-center text-red-500">This job has expired.</p>;
    
    return (
    <div className="bg-black min-h-screen text-gray-900 transition-colors duration-300">
      <main className="bg-white items-center justify-center px-4 sm:px-6 lg:px-8 py-8 mx-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="">
              <Image src={`/${selectedJob?.logo ?? 'globe.svg'}`} width={64} height={64} alt="logo" className="mr-4 rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{selectedJob.title}</h1>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span className="mr-2">at {selectedJob.company}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold mr-2">
                  {selectedJob.type}
                </span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                  {selectedJob.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 w-sm pr-6">
            <button className="flex items-center justify-center gap-2 bg-black text-white w-1/2 px-4 py-3 rounded shadow-sm hover:bg-gray-800 transition-colors">
              <span>Save For Later</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
            
            <button
            disabled={isApplied}
            className={`flex items-center justify-center gap-2 w-1/2 px-4 py-3 rounded shadow-sm transition-colors
            ${isApplied
              ? "bg-indigo-300 text-white cursor-not-allowed"
              : "bg-blue-800 text-white hover:bg-blue-700"}`}
              onClick={() => !isApplied && handleApply()}
              >
              <span>{isApplied ? "Applied" : "Apply"}</span>
              {!isApplied && <ArrowRightIcon className="ml-2 h-4 w-4" />}
            </button>
            
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 pr-10">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="pl-6">
              <h2 className="text-xl font-bold mb-4">Job Description</h2>
              {selectedJob.description.map((p, i) => (
                <p key={i} className="text-gray-600 mb-4">{p}</p>
                ))}
                <h3 className="text-lg font-bold mt-6 mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8 pr-8  ">
                <div className="flex flex-row items-center justify-center w-md py-4 gap-12 bg-white border-3 border-blue-50 rounded-lg">
                  <div className="items-center text-center p-4 border-r-2">
                    <h2 className="text-lg mb-2">Salary (USD)</h2>
                    <p className="text-lg font-semibold text-green-600">{selectedJob.salary}</p>
                    <p className="text-gray-400">Yearly</p>
                  </div>
                  <div className="p-4 items-center justify-center text-center">
                    <MapIcon className="size-10 stroke-blue-600 item"/>
                    <h2 className="text-lg font-semibold mb-2 ">Job Location</h2>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="bg-white border-3 border-blue-50 w-md space-y-8 p-4 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Job Overview</h2>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <CalendarIcon className="size-10 mb-1 stroke-blue-600" />
                      <p className="text-gray-400">JOB POSTED:</p>
                      <p className="font-semibold text-gray-700">{selectedJob.postedDate}</p>
                    </div>
                    <div>
                      <ClockIcon className="size-10 mb-1 stroke-blue-600" />
                      <p className="text-gray-400">JOB EXPIRE IN:</p>
                      <p className="font-semibold text-gray-700">{selectedJob.expiryDate}</p>
                    </div>
                    <div>
                      <SquareStackIcon className="size-10 mb-1 stroke-blue-600" />
                      <p className="text-gray-400">JOB LEVEL:</p>
                      <p className="font-semibold text-gray-700">{selectedJob.jobLevel}</p>
                    </div>
                    <div>
                      <BriefcaseIcon className="size-10 mb-1 stroke-blue-600" />
                      <p className="text-gray-400">EXPERIENCE</p>
                      <p className="font-semibold text-gray-700">{selectedJob.experience}</p>
                    </div>
                    <div>
                      <WalletIcon className="size-10 mb-1 stroke-blue-600" />
                      <p className="text-gray-400">EDUCATION</p>
                      <p className="font-semibold text-gray-700">{selectedJob.education}</p>
                    </div>
                  </div>
                  <div className="bg-white border-t-2 border-gray-200 p-4">
                    <h2 className="text-lg font-semibold mb-4">Share this job:</h2>
                    <div className="flex space-x-4 items-center">
                      <button className="bg-blue-100 p-2 rounded text-blue-600 font-semibold flex flex-col items-center">
                        <LinkIcon className="size-6 h-5 w-auto stroke-blue-600 stroke-2" /> <span>Copy Links</span>
                      </button>
                      <button className="bg-blue-100 p-3 rounded"><LinkedInIcon className="size-6 fill-blue-700" /></button>
                      <button className="bg-blue-100 p-3 rounded"><FacebookIcon className="size-6 fill-blue-700" /></button>
                      <button className="bg-blue-100 p-3 rounded"><TwitterIcon className="size-6 fill-blue-700" /></button>
                      <button className="bg-blue-100 p-3 rounded"><MailIcon className="size-6 stroke-2 stroke-blue-700" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <JobModal />
        </div>
        );
      }