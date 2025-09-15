import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Update the import path below to the actual location of your icon components
import SearchIcon from './icons/SearchIcon';
import SettingsIcon from './icons/SettingsIcon';
import NotificationIcon from './icons/NotificationIcon';

const Header = () => (
  <header className="flex items-center justify-between py-4 px-10 border-b border-gray-300">
    <div className="flex items-center space-x-6">
      <div className="flex items-center">
        <Image src="/skillinq_logo.png" alt="Skillnq Logo" width={100} height={100} />
      </div>
      <nav className="hidden lg:flex space-x-4 text-sm font-medium">
        <Link href="#" className="py-2 px-4 rounded-lg text-black hover:bg-gray-100 transition-colors">Dashboard</Link>
        <Link href="#" className="py-2 px-4 rounded-lg text-black hover:bg-gray-100 transition-colors">Find Job</Link>
        <Link href="#" className="py-2 px-4 rounded-lg text-black hover:bg-gray-100 transition-colors">Applications</Link>
        <Link href="#" className="py-2 px-4 rounded-lg text-black hover:bg-gray-100 transition-colors">Saved Jobs</Link>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>
      <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
        <SettingsIcon />
      </span>
      <span className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
        <NotificationIcon />
      </span>
    </div>
  </header>
);

export { Header };