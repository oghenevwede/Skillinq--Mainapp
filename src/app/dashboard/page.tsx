'use client'

import React, {useState} from 'react';
        
export default function DashboardPage() {
  const [data, setData] = useState(null)
  return (
    <div className='bg-white flex flex-col gap-2 min-h-screen'>
      <nav className="flex flex-row gap-8 mb-4 py-4 items-center px-8 border-b w-full border-gray-300 text-400">
        <img src="/skillinq_logo.png" alt="Logo" className="pl-8 h-8 mr-4" />  
        <ul className="flex space-x-6 dark:text-black font-[Inter]">
          <li className='cursor-pointer'><a href="#">Dashboard</a></li>
          <li className='cursor-pointer'><a href="#">Find Job</a></li>  
          <li className='cursor-pointer'><a href="#">Applications</a></li>
          <li className='cursor-pointer'><a href="#">Saved Jobs</a></li>
          <li className='cursor-pointer'><a href="#">Messages</a></li>
        </ul>
        <input
          type='text'
          id='search'
          className='dark:text-black border-2 border-gray-300 shadow-gray-400 rounded-md w-sm px-4 py-2 ml-30'
          placeholder='Search'
        />
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="black" stroke-Linecap="round" stroke-Linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
          <path stroke="black" stroke-Linecap="round" stroke-Linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
        </svg>
        <div className="h-12 w-12 p-2 rounded-full bg-gray-500 cursor-pointer">
          <img src="/my_profile_pic.png" alt="Avatar" className="h-full w-full object-cover rounded-full" />
        </div>
      </nav>
      <div className="flex flex-row w-full">
        <div className="flex flex-col h-[2px] py-8 mx-20">
          <h1 className="text-3xl dark:text-black font-normal mb-4">Welcome back, Andre Pinda</h1>
          <p className="text-lg mb-4 dark:text-black">Track your Job applications and discover more!</p>
        </div>
        <div className="flex text-white absolute float-end right-4 ">
          <button className="flex flex-row bg-blue-900  hover:bg-blue-800 items-center text-white font-[Inter] font-normal py-2 px-4 rounded-md mt-8 mr-20 float-end">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>Edit your resume</span>
          </button>
        </div>
      </div>
      <div className="py-8 px-20">
        <div className="flex flex-row row-span-3 mt-12">
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
              <span>Total Jobs Applied</span>
              <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                </svg>
              </button>
            </span>
            <h2 className="text-3xl dark:text-black font-bold mb-2">1,000</h2>
            <div className="text-sm text-gray-600">
              <span>20% vs last month</span>
            </div>
          </div>  
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
                <span>Total Jobs Accepted</span>
                <button className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                  </svg>
                </button>
            </span>
            <h2 className="text-3xl dark:text-black font-bold mb-2">500</h2>
            <div className="text-sm text-gray-600">
              <span>30% vs last month</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
              <span>Total Jobs Rejected</span>
              <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                </svg>
              </button>
            </span>
            <h2 className="dark:text-black text-3xl font-bold mb-2">500</h2>
            <div className="text-sm text-gray-600 dark:text-gray-600">
              <span>
                40% vs last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center ">
        <span className="text-3xl dark:text-black font-sans font-normal mx-20 mb-4 py-8">Top Jobs for you this week</span>
        <div className="flex text-white absolute float-end right-4 items-center">
          <button className="flex flex-row bg-blue-900  hover:bg-blue-800 items-center text-white font-sans font-normal py-2 px-4 rounded-md mt-8 mr-20 float-end">
            <span>View all Jobs</span>
          </button>
        </div>
      </div>
      <div className="px-20">
        <div className="flex flex-row row-span-3">
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
              <span>Total Jobs Applied</span>
              <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                </svg>
              </button>
            </span>
            <h2 className="text-3xl dark:text-black font-bold mb-2">1,000</h2>
            <div className="text-sm text-gray-600">
              <span>20% vs last month</span>
            </div>
          </div>  
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
                <span>Total Jobs Accepted</span>
                <button className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                  </svg>
                </button>
            </span>
            <h2 className="text-3xl dark:text-black font-bold mb-2">500</h2>
            <div className="text-sm text-gray-600">
              <span>30% vs last month</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white dark:bg-white border border-gray-300 shadow-gray-00 shadow-sm rounded-lg mr-4 w-1/3">
            <span className="text-lg dark:text-black font mb-2 items-center flex flex-row">
              <span>Total Jobs Rejected</span>
              <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 10.5a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3a1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3a1.5 1.5 0 000-3z" />
                </svg>
              </button>
            </span>
            <h2 className="dark:text-black text-3xl font-bold mb-2">500</h2>
            <div className="text-sm text-gray-600 dark:text-gray-600">
              <span>
                40% vs last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
