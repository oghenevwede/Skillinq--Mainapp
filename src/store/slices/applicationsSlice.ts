import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Application {
  id: string;
  jobId: number;
  fullName: string;
  email: string;
  coverLetter: string;
}

interface ApplicationsState {
  items: Application[];
}

const initialState: ApplicationsState = {
  items: [],
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    submitApplication: (state, action: PayloadAction<Application>) => {
      state.items.push(action.payload);
    },
  },
});

export const { submitApplication } = applicationsSlice.actions;
export default applicationsSlice.reducer;
