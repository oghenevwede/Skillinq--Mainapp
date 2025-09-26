import { useSelector } from 'react-redux';

interface JobListItem {
  company: string;
  role: string;
  status: string;
  statusColor: string;
  statusDotColor: string;
  field: string;
  fieldColor: string;
  dateApplied: string;
  closeDate: string;
  rating: number;
}

export default function JobTable() {
  const { jobs, selectedTab } = useSelector((state: any) => state.jobs);

  // Simple filtering based on status (expand as needed)
  const filteredJobs = selectedTab === 'All' 
    ? jobs 
    : jobs.filter((job: JobListItem) => job.status === selectedTab);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 text-left text-gray-600 text-sm">
            <th className="py-3 px-4">Hiring Company</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Job Field</th>
            <th className="py-3 px-4">Date Applied</th>
            <th className="py-3 px-4">Close Date</th>
            <th className="py-3 px-4">Rating</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job: JobListItem, index: number) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-3 px-4 text-blue-600 underline">{job.company}</td>
              <td className="py-3 px-4">{job.role}</td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center ${job.statusColor}`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${job.statusDotColor}`}></span>
                  {job.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-sm ${job.fieldColor}`}>{job.field}</span>
              </td>
              <td className="py-3 px-4">{job.dateApplied}</td>
              <td className="py-3 px-4">{job.closeDate}</td>
              <td className="py-3 px-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < job.rating ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>★</span>
                  ))}
                </div>
              </td>
              <td className="py-3 px-4">
                <button className="px-4 py-1 bg-gray-100 text-gray-800 rounded-lg">View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}