import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import profileSlice from '@/store/slices/profileSlice'

type AnalyticsItem = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

type Job = {
  type: string;
  title: string;
  salary: string;
  company: string;
  location: string;
};

type DashboardState = {
  analytics: AnalyticsItem[];
  jobs: Job[];
};

const initialState: DashboardState = {
  analytics: [
    { title: "Total Jobs Applied", value: "2,420", change: "40%", trend: "up" },
    { title: "Total Jobs Accepted", value: "1,210", change: "10%", trend: "down" },
    { title: "Total Jobs Rejected", value: "316", change: "20%", trend: "up" },
  ],
  jobs: [
    { type: "FULL-TIME", title: "Technical Support Specialist", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
    { type: "FULL-TIME", title: "Senior UX Designer", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
    { type: "INTERNSHIP", title: "Marketing Officer", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  ],
  
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAnalytics(state, action: PayloadAction<AnalyticsItem[]>) {
      state.analytics = action.payload;
    },
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
    },
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
    },
  },
});

export const { setAnalytics, setJobs, addJob } = dashboardSlice.actions;
export default dashboardSlice.reducer;
