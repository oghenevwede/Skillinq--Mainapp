import React from 'react';
import Image from 'next/image';
import LocationIcon from './icons/LocationIcon';
import BookmarkIcon from './icons/BookmarkIcon';

interface JobCardProps {
  type: string;
  title: string;
  salary: string;
  company: string;
  location: string;
}

const JobCard = ({ type, title, salary, company, location }: JobCardProps) => (
  <div className="flex flex-1 flex-col bg-blue-100 rounded-md p-6 shadow-xs border border-gray-200 dark:border-gray-700">
    <div className="flex flex-col space-y-2 mb-4">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <div className="inline-flex items-center space-x-2">
        <span className="text-xs font-medium text-green-600 bg-green-100 rounded p-1">{type}</span>
        <span className="flex text-sm text-gray-500 mb-2">{salary}</span>
      </div>
    </div>
    <div className="inline-flex space-x-2 items-center text-sm text-gray-500">
      <div className="flex items-center">
        <Image src="/google-g.svg" alt={`.`} width={24} height={24} className="mr-2" />
        <p className="text-md">{company}</p>
      </div>
      <span className="ml-1">
        <LocationIcon />
      </span>
      {location}
      <BookmarkIcon />
    </div>
  </div>
);
export default JobCard;