import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
  id: string;
  title: string;
  company: string;
  type: string;
  category: string;
  salary: string;
  jobLevel: string;
  experience: string;
  education: string;
  postedDate: string;
  expiryDate: string;
  description: string[];
  requirements: string[];
}

interface JobState {
  selectedJob: Job | null;
  applicationStep: 'initial' | 'confirm' | 'success';
}

const initialState: JobState = {
  selectedJob: null,
  applicationStep: 'initial'
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setSelectedJob: (state, action: PayloadAction<Job>) => {
      state.selectedJob = action.payload;
    },
    setApplicationStep: (state, action: PayloadAction<'initial' | 'confirm' | 'success'>) => {
          state.applicationStep = action.payload;
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },
  },
});

export const { setApplicationStep, setSelectedJob, clearSelectedJob, } = jobSlice.actions;
export default jobSlice.reducer;