'use client'

// app/page.tsx (or app/find-job/page.tsx, assuming this is the Find Job page)
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Header } from '../components/Header';
import JobSearch from '../components/JobSearch';
import JobTabs from '../components/JobTabs';
import JobTable from '../components/JobTable';
import Link from 'next/link';

export default function FindJobPage() {
  return (
  <Provider store={store}>
    <div className="min-h-screen bg-white">
      <Header />
      <div className="w-screen max-w-screen py-6 px-80 bg-gray-100 flex items-center justify-between">
        <h1 className="text-lg dark:text-black mb-2">Find Job</h1>
        <div className="text-sm text-gray-600 dark:text-black mb-2 space-x-2 gap-2">
          <Link href="/find-job" className="">Home</Link>
          / 
          <Link href="/find-job" className=""> Find Job</Link>
        </div>
      </div>
      <main className="flex flex-col space-y-8 container mx-auto px-4 py-6">
        <div className="flex flex-col gap-7 px-20">
          <JobSearch />
          <JobTabs />
          <JobTable />
        </div>
      </main>
    </div>
  </Provider>
  );
}