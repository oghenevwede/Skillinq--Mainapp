// slices/jobsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

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

interface JobsState {
  selectedTab: string;
  jobs: JobListItem[];
}

const initialState: JobsState = {
  selectedTab: 'All',
  jobs: [
    {
      company: 'Brooklyn Simmons',
      role: 'Marketing Strategist',
      status: 'Accepted',
      statusColor: 'text-green-600',
      statusDotColor: 'bg-green-500',
      field: 'Marketing',
      fieldColor: 'bg-gray-100 text-gray-600',
      dateApplied: '2023-08-09',
      closeDate: '2023-08-09',
      rating: 4,
    },
    {
      company: 'Marvin McKinney',
      role: 'Developer relations',
      status: 'Declined',
      statusColor: 'text-red-600',
      statusDotColor: 'bg-red-500',
      field: 'Dev',
      fieldColor: 'bg-orange-100 text-orange-600',
      dateApplied: '2023-08-09',
      closeDate: '2023-08-09',
      rating: 5,
    },
    {
      company: 'Marvin McKinney',
      role: 'Marketing Strategist',
      status: 'Pending',
      statusColor: 'text-blue-600',
      statusDotColor: 'bg-blue-500',
      field: 'Marketing',
      fieldColor: 'bg-gray-100 text-gray-600',
      dateApplied: '2023-08-09',
      closeDate: '2023-08-09',
      rating: 3,
    },
  ],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
      //I might add filtering logic here if needed later on
    },
  },
});

export const { selectTab } = jobsSlice.actions;
export default jobsSlice.reducer;