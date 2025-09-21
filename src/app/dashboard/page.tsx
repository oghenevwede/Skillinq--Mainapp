'use client';

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AnalyticsCard from "../components/AnalyticsCard";
import JobCard from "../components/JobCard";
import { Header } from "../components/Header";
import { PlusIcon } from "../components/icons/PlusIcon";

export default function DashboardPage() {
  const { analytics, jobs } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="py-6 px-4 sm:px-8 md:px-20">
        <div className="flex-col space-y-4 flex justify-between mb-8 md:items-center md:flex-row">
          <div>
            <h1 className="text-3xl dark:text-black font-bold mb-2">Welcome back, Andre Pinda</h1>
            <p className="text-gray-700 dark:text-gray-700">
              Track your Job applications and discover more!
            </p>
          </div>
          <button className="bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
            <PlusIcon />
            Edit your resume
          </button>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {analytics.map((item, index) => (
            <AnalyticsCard
              key={index}
              title={item.title}
              value={item.value}
              change={item.change}
              trend={item.trend}
              color={item.trend === "up" ? "green" : "red"}
            />
          ))}
        </div>

        {/* Top Jobs Section */}
        <div className="flex flex-col space-y-4 justify-between mb-6 md:items-center md:flex-row">
          <h2 className="text-2xl text-black font-bold">Top Jobs for you this week</h2>
          <Link href="#">
            <button className="bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              View all Jobs
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <JobCard
              key={`${job.title}-${idx}`}
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
