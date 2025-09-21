"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"; 
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setSelectedJob } from "@/store/slices/jobSlice";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import BookmarkIcon from "../components/icons/BookmarkIcon";
import MailIcon from "../components/icons/MailIcon"
import LinkIcon from "../components/icons/LinkIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import TwitterIcon from "../components/icons/TwitterIcon"
import  FacebookIcon from "../components/icons/FacebookIcon"
import { Span } from "next/dist/trace";
import SquareStackIcon from "../components/icons/SquareStackIcon";
import ClockIcon from "../components/icons/ClockIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import BriefcaseIcon from "../components/icons/BriefcaseIcon";
import WalletIcon from "../components/icons/WalletIcon";
export default function JobDetailsPage() {
  const dispatch = useDispatch<AppDispatch>();
    const job = useSelector((state: RootState) => state.job.selectedJob);
    
    // Load example job data (in real project, fetch from API and dispatch)
    useEffect(() => {
      dispatch(
      setSelectedJob({
        id: "1",
        title: "Senior UX Designer",
        company: "Facebook",
        type: "FULL-TIME",
        category: "Design",
        salary: "$100,000 - $120,000",
        jobLevel: "Entry Level",
        experience: "$50k-80k/month",
        education: "Graduation",
        postedDate: "14 Jun, 2024",
        expiryDate: "14 Aug, 2024",
        description: [
        "Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!",
        "Here at Velstar, we don’t just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level.",
        "The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director."
        ],
        requirements: [
        "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
        "3+ years of experience in back-end development",
        "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
        "Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)",
        "Experience with Agile development, servers, storage, and database management"
        ]
      })
      );
    }, [dispatch]);
    
    if (!job) return <p className="text-center text-gray-500">Loading job details...</p>;
    
    return (
    <div className=" bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="bg-white rounded-sm p-8 mx-auto">
        
        {/* Header */}
        <div className="bg-white gap-4 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="bg-blue-600 p-3 rounded-xl mr-4 flex items-center justify-center">
              <Image src="/google-g.svg" alt={job.company} width={48} height={48} />
            </div>
            <div>
              <h1 className="text-2xl text-black font-semibold">{job.title}</h1>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span className="text-xl text-gray-800 mr-2">at {job.company}</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-xs text-md font-semibold">
                  {job.type}
                </span>
                <span className="bg-red-100 text-red-500 px-4 py-1 rounded-xl text-sm ml-2">
                  {job.category}
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:space-y-4 sm:space-y-4 lg:inline items-center space-y-4 space-x-4">
            <button className="flex items-center justify-center bg-black text-white gap-4 py-4 px-12 w-3xs rounded-sm shadow-sm hover:bg-gray-800 transition-colors">
              Save For Later
              <ArrowRightIcon />
            </button>
            <button className="flex items-center justify-center bg-blue-800 text-white gap-4 py-4 px-12 w-3xs rounded-sm shadow-sm hover:bg-blue-700 transition-colors">
              Apply
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid lg:grid-col-2 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline bg-white p-8">
              <h2 className="text-xl text-black font-bold mb-4">Job Description</h2>
              {job.description.map((p, i) => (
                <p key={i} className="text-gray-800 leading-relaxed mb-4">{p}</p>
                ))}
                
                <h3 className="text-lg font-bold text-black mt-6 mb-2">Requirements</h3>
                <ul className="list-none space-y-2 text-gray-600">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 font-bold mr-2">•</span>
                      <span>{req}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:flex lg:flex-row lg:gap-4 flex-1 flex-col space-y-8">
                <div className="flex flex-row border-2 rounded-lg items-center justify-center gap-10 lg:inline-flex">
                  <div className="lg:w-auto lg:flex-1 p-8 items-center justify-center text-center gap-2">
                    <h2 className="text-lg text-black font-semibold mb-4">Salary (USD)</h2>
                    <span className="text-xl font-semibold text-green-600 lg:text-lg">{job.salary}</span>
                    <p className="text-sm text-gray-500 mt-1">Yearly salary</p>
                  </div>
                  <div className="p-8 items-center justify-center text-center gap-3">
                    <BookmarkIcon />
                    <span className="text-lg font-semibold text-black">Job Location</span>
                    <p className="text-sm text-gray-500 mt-1">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex flex-col border-2 rounded-lg w-full py-8 px-3 gap-6 lg:w-auto">
                  <h2 className="text-xl text-black">Job Overview</h2>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-col gap-1">
                      <span className="mr-auto"><CalendarIcon /></span>
                      <span className="text-black">JOB POSTED:</span>
                      <span className="text-black font-semibold">{job.postedDate}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="mr-auto"><ClockIcon /></span>
                      <span className="text-black">JOB EXPIRE IN:</span>
                      <span className="text-black font-semibold">{job.expiryDate}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="mr-auto"><SquareStackIcon /></span>
                      <span className="text-black">JOB LEVEL:</span>
                      <span className="text-black font-semibold">{job.jobLevel}</span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-col text- gap-1">
                      <WalletIcon />
                      <span className="text-black">EXPERIENCE:</span>
                      <span className="text-black font-semibold">{job.experience}</span>
                    </div>
                    <div className="flex flex-col text- gap-1">
                      <span className="mr-auto"><BriefcaseIcon /></span>
                      <span className="text-black">EDUCATION:</span>
                      <span className="text-black font-semibold">{job.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        );
      }
