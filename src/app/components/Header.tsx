"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SearchIcon from './icons/SearchIcon';
import SettingsIcon from './icons/SettingsIcon';
import NotificationIcon from './icons/NotificationIcon';
import { RootState } from '@/store/store';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const profile = useSelector((state: RootState) => state.profile);
  const avatarSrc = profile?.avatar || '/skillinq_logo.png';

  return (
    <header className="sticky top-0 left-0 z-10 flex items-center justify-between w-full py-4 px-10 bg-white border-b border-gray-300">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center pr-12">
          <Image src="/skillinq_logo.png" alt="Skillinq Logo" width={130} height={130} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-md font-medium">
          <Link href="/dashboard" className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors">
            Dashboard
          </Link>
          <Link href="/find-job" className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors">
            Find Job
          </Link>
          <Link href="#" className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors">
            Applications
          </Link>
          <Link href="/saved-jobs" className="py-2 px-4 rounded-lg text-black hover:text-blue-700 transition-colors">
            Saved Jobs
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
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

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
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
        <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
          <SettingsIcon />
        </span>
        <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
          <NotificationIcon />
        </span>
        {/* Profile avatar */}
        <Link href="/create-profile" aria-label="Open profile" className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow">
          <Image src={avatarSrc} alt="Profile" width={36} height={36} />
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
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
            href="#"
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
