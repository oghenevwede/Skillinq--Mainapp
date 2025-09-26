import { useSelector, useDispatch } from 'react-redux';
import { selectTab } from '@/store/slices/jobsSlice';

export default function JobTabs() {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: any) => state.jobs.selectedTab);

  const tabs = [
    { label: 'All', count: 45 },
    { label: 'In Review', count: 34 },
    { label: 'Interviewing', count: 18 },
    { label: 'Assessment', count: 5 },
    { label: 'Offered', count: 2 },
    { label: 'Hired', count: 1 },
  ];

  return (
    <div className="flex space-x-12 font-semibold border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button 
          key={tab.label}
          onClick={() => dispatch(selectTab(tab.label))}
          className={`pb-2 ${selectedTab === tab.label ? 'text-purple-600 border-b-2 border-purple-600 font-semibold' : 'text-gray-500'}`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}