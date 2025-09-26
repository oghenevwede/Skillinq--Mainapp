"use client";

import React, { useEffect } from "react";
import Image from "next/image"; 
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setSelectedJob, setApplicationStep } from "@/store/slices/jobSlice";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import MailIcon from "../components/icons/MailIcon";
import LinkIcon from "../components/icons/LinkIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import SquareStackIcon from "../components/icons/SquareStackIcon";
import ClockIcon from "../components/icons/ClockIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import BriefcaseIcon from "../components/icons/BriefcaseIcon";
import WalletIcon from "../components/icons/WalletIcon";
import JobModal from "../components/JobModal"; // Import the new modal

// Define the Job interface
interface Job {
  id: string;
  title: string;
  company: string;
  type: string;
  category: string;
  salary: string;
  jobLevel: string;
  experience: string;
  education: string;
  postedDate: string;
  expiryDate: string;
  description: string[];
  requirements: string[];
}

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedJob } = useSelector((state: RootState) => state.job);
  
  useEffect(() => {
    // Simulate fetching job data based on params.id (replace with API call)
    const jobData: Job = {
      id: params.id,
      title: "Senior UX Designer",
      company: "Facebook",
      type: "FULL-TIME",
      category: "Design",
      salary: "$100,000 - $120,000",
      jobLevel: "Entry Level",
      experience: "3+ years",
      education: "Graduation",
      postedDate: "14 Jun, 2024",
      expiryDate: "14 Aug, 2024",
      description: [
        "Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!",
        "Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migrations, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.",
        "The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform.",
        "Want to work with us? You're in good company!"
      ],
      requirements: [
        "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
        "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
        "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
        "Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)",
        "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management."
      ]
    };
    dispatch(setSelectedJob(jobData));
  }, [dispatch, params.id]);
  
  const handleApply = () => {
    dispatch(setApplicationStep('confirm'));
  };
  
  if (!selectedJob) return <p className="text-center text-gray-500">Loading job details...</p>;
  
  return (
    <div className="bg-white min-h-screen text-gray-900 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="">
              <Image src="/globe.svg" width={50} height={50} alt="logo" className="mr-4" />
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
          <div className="flex space-x-4">
            <button className="flex items-center justify-center gap-2 bg-black text-white w-1/2 px-4 py-3 rounded shadow-sm hover:bg-gray-800 transition-colors">
              <span>Save For Later</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 bg-blue-800 text-white w-1/2 px-4 py-3 rounded shadow-sm hover:bg-blue-700 transition-colors"
              onClick={handleApply}
            >
              <span>Apply</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
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
          <div className="space-y-8">
            <div className="flex flex-row items-center justify-center py-4 gap-12 bg-white border border-blue-50 rounded-lg">
              <div className="items-center text-center p-4 border-r-2">
                <h2 className="text-lg mb-2">Salary (USD)</h2>
                <p className="text-lg font-semibold text-green-600">{selectedJob.salary}</p>
                <p className="text-sm text-gray-400">Yearly</p>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Job Location</h2>
                <p className="text-gray-400">Lagos, Nigeria</p>
              </div>
            </div>
            
            <div className="bg-white border border-blue-50 space-y-8 p-4 rounded-lg">
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