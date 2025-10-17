import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/app/data/jobs";

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
  
export const { setApplicationStep, setSelectedJob, clearSelectedJob } = jobSlice.actions;
export default jobSlice.reducer;