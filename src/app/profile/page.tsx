"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { BriefcaseIcon, MapPinIcon, LinkIcon, FileTextIcon } from "lucide-react";

export default function ProfilePage() {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Profile</h1>
            <p className="text-gray-500 text-sm mt-1">
              Overview of your professional profile and activity
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b pb-2 mb-6 text-sm font-medium text-gray-600">
          <button className="border-b-2 border-blue-600 text-blue-600 pb-2">
            Profile
          </button>
          <Link href="/settings" className="hover:text-blue-600">
            Settings
          </Link>
        </div>

        {/* Profile Overview Card */}
        <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start mb-10">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow">
              <Image
                src={profile.avatar || "/user-placeholder.png"}
                alt="Profile photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {profile.fullName || "Unnamed User"}
            </h2>
            <p className="text-gray-500">{profile.primaryRole || "No role specified"}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-600 mt-3">
              {profile.currentLocation && (
                <span className="flex items-center gap-1">
                  <MapPinIcon size={14} /> {profile.currentLocation}
                </span>
              )}
              {profile.yearsExperience && (
                <span>{profile.yearsExperience} years experience</span>
              )}
              {profile.openRelocation && (
                <span>Open to relocation: {profile.openRelocation}</span>
              )}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {profile.bio || "No bio provided yet."}
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Work Experience
          </h3>
          {profile.currentCompany ? (
            <div className="space-y-2">
              <p className="text-gray-800 font-medium">
                {profile.currentRole || "Role not specified"}
              </p>
              <p className="text-gray-600 text-sm">
                {profile.currentCompany} — {profile.employmentDuration || "N/A"}
              </p>
              <p className="text-gray-500 text-sm">{profile.roleSummary}</p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No work experience added yet.</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
          {profile.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No skills listed.</p>
          )}
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Education</h3>
          <p className="text-gray-600 text-sm">
            {profile.highestEducation || "Not specified"}
          </p>
        </div>

        {/* Social Links */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Social Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {profile.website && (
              <Link
                href={profile.website}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <LinkIcon size={14} /> Website
              </Link>
            )}
            {profile.linkedin && (
              <Link
                href={profile.linkedin}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <LinkIcon size={14} /> LinkedIn
              </Link>
            )}
            {profile.github && (
              <Link
                href={profile.github}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <LinkIcon size={14} /> GitHub
              </Link>
            )}
            {profile.twitter && (
              <Link
                href={profile.twitter}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <LinkIcon size={14} /> Twitter
              </Link>
            )}
            {!profile.website &&
              !profile.linkedin &&
              !profile.github &&
              !profile.twitter && (
                <p className="text-gray-500 text-sm">
                  No social links available.
                </p>
              )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Resume</h3>
          {profile.resume ? (
            <Link
              href={profile.resume}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
            >
              <FileTextIcon size={16} /> View Uploaded Resume
            </Link>
          ) : (
            <p className="text-gray-500 text-sm">No resume uploaded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
