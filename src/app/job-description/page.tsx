'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

// Inline SVG Icons
const BookmarkIcon = () => (
<svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
);

const LocationIcon = () => (
<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.93a7.7 7.7 0 1 0-11.62 0h11.62Z"/>
</svg>
);

const CalendarIcon = () => (
<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h10M5 12h10M5 17h10M5 3h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
</svg>
);

const ClockIcon = () => (
<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
);

const SuitcaseIcon = () => (
<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-3 0V7m-5 4v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9m-10 0a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-10Z"/>
</svg>
);

const GraduationIcon = () => (
<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13H5m11 0a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4.5M10 17v-4m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0M8 2h4a2 2 0 0 1 2 2v5H8V4a2 2 0 0 1 2-2Z"/>
</svg>
);

const LinkIcon = () => (
<svg className="w-5 h-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656-5.656l-3 3a4 4 0 000 5.656L10 18.828a4 4 0 005.656 0l3-3a4 4 0 000-5.656z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5l-3 3M16.5 16.5l3-3" />
</svg>
);

const LinkedInIcon = () => (
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.527 7-2.138 7 3.332v5.903z"/>
</svg>
);

const FacebookIcon = () => (
<svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.959.192-1.333 1.588-1.333h2.412v-3.84c-.628-.11-1.752-.2-2.909-.2-4.043 0-7.091 2.441-7.091 6.83v2.21z"/>
</svg>
);

const TwitterIcon = () => (
<svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.593 0-6.49 2.907-6.49 6.49 0 .509.058 1.001.168 1.474-5.391-.272-10.198-2.846-13.407-6.795-.559.954-.878 2.064-.878 3.238 0 2.222 1.14 4.195 2.894 5.361-1.057-.035-2.05-.34-2.923-.805v.079c0 3.159 2.246 5.786 5.24 6.386-.54.148-1.112.23-1.705.23-.418 0-.828-.042-1.226-.115.834 2.592 3.25 4.474 6.13 4.526-2.22 1.745-5.022 2.77-8.09 2.77-.525 0-1.04-.03-1.549-.091 2.888 1.859 6.35 2.949 10.06 2.949 12.071 0 18.674-10.009 18.674-18.674 0-.285-.006-.568-.018-.85z"/>
</svg>
);

const MailIcon = () => (
<svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
);

export default function JobDetailsPage() {
  return (
  <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <main className="p-8 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="bg-white p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
        <div className="flex items-center mb-4 lg:mb-0">
          {/* Facebook Logo */}
          <div className="bg-blue-600 p-3 rounded-xl mr-4 flex items-center justify-center">
            <Image src="/google-g.svg" alt="Facebook Logo" width={48} height={48} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Senior UX Designer</h1>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="font-semibold text-gray-800 dark:text-gray-100 mr-2">at Facebook</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">FULL-TIME</span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-medium ml-2">Design</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center bg-black dark:bg-black text-white dark:text-white font-medium w-3xs py-4 px-6 gap-2 rounded-sm shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            Save For Later
            <ArrowRightIcon />
          </button>
          <button className="flex items-center justify-center bg-blue-800 dark:bg-blue-800 text-white dark:text-white font-medium w-3xs py-4 px-6 gap-2 rounded-sm shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            Apply
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      
      {/* Main Content & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Here at Velstar, we don’t just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform. Want to work with us? You’re in good company!
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">Requirements</h3>
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.</span>
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Here at Velstar, we don’t just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform. Want to work with us? You’re in good company!
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">Requirements</h3>
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 font-bold mr-2">•</span>
                <span>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Salary (USD)</h2>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">$100,000 - $120,000</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Yearly salary</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Job Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CalendarIcon />
                <div>
                  <p className="font-medium text-gray-500 text-sm">Job Posted:</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">14 Jun, 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <ClockIcon />
                <div>
                  <p className="font-medium text-gray-500 text-sm">Job Expire in:</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">14 Aug, 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <LocationIcon />
                <div>
                  <p className="font-medium text-gray-500 text-sm">Job Level:</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">Entry Level</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <SuitcaseIcon />
                <div>
                  <p className="font-medium text-gray-500 text-sm">Experience:</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">$50k-80k/month</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <GraduationIcon />
                <div>
                  <p className="font-medium text-gray-500 text-sm">Education:</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">Graduation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Share this job:</h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <LinkIcon />
                Copy Links
              </button>
              <div className="flex items-center space-x-2">
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <LinkedInIcon />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <FacebookIcon />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <TwitterIcon />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}
