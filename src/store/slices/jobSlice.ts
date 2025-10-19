import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/app/data/jobs";

interface AppliedJob {
  id: string;
  status: "Pending" | "Accepted" | "Declined";
}

interface JobState {
  selectedJob: Job | null;
  applicationStep: 'initial' | 'confirm' | 'success';
  appliedJobs: AppliedJob[];
}

const initialState: JobState = {
  selectedJob: null,
  applicationStep: 'initial',
  appliedJobs: []
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
    markJobApplied: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (!state.appliedJobs.some((job) => job.id === id)) state.appliedJobs.push({ id, status: "Pending" });
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },

        applyJob: (state, action: PayloadAction<string>) => {
      const existing = state.appliedJobs.find((job) => job.id === action.payload);
      if (!existing) {
        state.appliedJobs.push({ id: action.payload, status: "Pending" });
      }
    },
    updateJobStatus: (
      state,
      action: PayloadAction<{ id: string; status: "Pending" | "Accepted" | "Declined" }>
    ) => {
      const job = state.appliedJobs.find((j) => j.id === action.payload.id);
      if (job) job.status = action.payload.status;
    },
  },

});

export const { setApplicationStep, setSelectedJob, clearSelectedJob, markJobApplied, applyJob, updateJobStatus } = jobSlice.actions;
export default jobSlice.reducer;