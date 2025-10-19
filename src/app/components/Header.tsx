"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import { logout } from "@/store/slices/authSlice"; 
import SearchIcon from "./icons/SearchIcon";
import SettingsIcon from "./icons/SettingsIcon";
import NotificationIcon from "./icons/NotificationIcon";
import { setProfileData } from "@/store/slices/profileSlice"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const profile = useSelector((state: RootState) => state.profile);
  const avatarSrc = profile?.avatar || "/skillinq_logo.png";

const handleLogout = () => {
  dispatch(logout());
  dispatch(
    setProfileData({
      fullName: '',
      phone: '',
      email: '',
      dob: '',
      gender: '',
      currentLocation: '',
      primaryRole: '',
      yearsExperience: '',
      openRoles: [],
      currentCompany: '',
      currentRole: '',
      employmentDuration: '',
      roleSummary: '',
      bio: '',
      website: '',
      linkedin: '',
      github: '',
      twitter: '',
      other: '',
      skills: [],
      highestEducation: '',
      openRelocation: '',
      workStyle: '',
      jobType: '',
      companySizes: [],
      avatar: null,
      resume: null,
    })
  );

  setDropdownOpen(false);
  router.push("/login");
};


  return (
    <header className="sticky top-0 left-0 z-10 flex items-center justify-between w-full py-4 px-10 bg-white border-b border-gray-300">
      {/* LEFT: Logo + Navigation */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center pr-12">
          <Image
            src="/skillinq_logo.png"
            alt="Skillinq Logo"
            width={130}
            height={130}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-md font-medium">
          <Link
            href="/dashboard"
            className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/find-job"
            className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors"
          >
            Find Job
          </Link>
          <Link
            href="/applications"
            className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors"
          >
            Applications
          </Link>
          <Link
            href="/saved-jobs"
            className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors"
          >
            Saved Jobs
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* RIGHT: Search + Icons + Profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-xs pl-10 pr-4 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white text-md text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Settings + Notification */}
        <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
          <SettingsIcon />
        </span>
        <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
          <NotificationIcon />
        </span>

        {/* Profile Avatar */}
        <div className="relative">
          {/* Desktop: Navigate to /profile */}
          <Link
            href="/profile"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow"
          >
            <Image src={avatarSrc} alt="Profile" width={36} height={36} />
          </Link>

          {/* Mobile: Toggle Dropdown */}
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Image src={avatarSrc} alt="Profile" width={36} height={36} />
          </button>

          {/* Mobile Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-20 sm:hidden">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                View Profile
              </Link>
              <Link
                href="/applications"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                My Applications
              </Link>
              <Link
                href="/saved-jobs"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Saved Jobs
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Settings
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-start px-10 py-4 space-y-2 lg:hidden">
          <Link
            href="/dashboard"
            className="w-full py-2 text-black hover:text-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/find-job"
            className="w-full py-2 text-black hover:text-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Find Job
          </Link>
          <Link
            href="/applications"
            className="w-full py-2 text-black hover:text-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Applications
          </Link>
          <Link
            href="/saved-jobs"
            className="w-full py-2 text-black hover:text-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Saved Jobs
          </Link>
        </nav>
      )}
    </header>
  );
};

export { Header };
