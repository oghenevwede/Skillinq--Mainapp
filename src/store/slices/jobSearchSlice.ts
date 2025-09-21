import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
  type: string;
  title: string;
  salary: string;
  company: string;
  location: string;
}

interface JobSearchState {
  jobTitle: string;
  location: string;
  selectedType: string;
  selectedCompany: string;
  filteredJobs: Job[];
  showFilters: boolean;
}

// --- MOCK DATA (in real life, fetch from API) ---
const mockJobsData: Job[] = [
  { type: "FULL-TIME", title: "Technical Support Specialist", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { type: "FULL-TIME", title: "Senior UX Designer", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { type: "INTERNSHIP", title: "Marketing Officer", salary: "Salary: $20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { type: "Full-time", title: "Frontend Developer", salary: "$80,000 - $100,000", company: "TechNova", location: "Lagos" },
  { type: "Part-time", title: "UI/UX Designer", salary: "$40,000 - $60,000", company: "DesignHub", location: "Abuja" },
  { type: "Contract", title: "Backend Engineer", salary: "$90,000 - $120,000", company: "CloudWorks", location: "Remote" },
  { type: "Internship", title: "Data Analyst Intern", salary: "$20,000 - $30,000", company: "Insight Analytics", location: "Port Harcourt" },
  { type: "Full-time", title: "Product Manager", salary: "$110,000 - $140,000", company: "InnovateX", location: "Lagos" },
  { type: "Contract", title: "Mobile App Developer", salary: "$70,000 - $90,000", company: "Appify", location: "Remote" },
  { type: "Full-time", title: "DevOps Engineer", salary: "$100,000 - $130,000", company: "ScaleOps", location: "Abuja" },
  { type: "Part-time", title: "Content Writer", salary: "$30,000 - $50,000", company: "WriteRight", location: "Ibadan" },
  { type: "Internship", title: "Marketing Intern", salary: "$15,000 - $25,000", company: "MarketMinds", location: "Lagos" },
  { type: "Full-time", title: "QA Tester", salary: "$60,000 - $80,000", company: "QualityFirst", location: "Remote" },
];

const initialState: JobSearchState = {
  jobTitle: "",
  location: "",
  selectedType: "",
  selectedCompany: "",
  filteredJobs: mockJobsData,
  showFilters: false,
};

const jobSearchSlice = createSlice({
  name: "jobSearch",
  initialState,
  reducers: {
    setJobTitle(state, action: PayloadAction<string>) {
      state.jobTitle = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setSelectedType(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
    setSelectedCompany(state, action: PayloadAction<string>) {
      state.selectedCompany = action.payload;
    },
    toggleFilters(state) {
      state.showFilters = !state.showFilters;
    },
    filterJobs(state) {
      const filtered = mockJobsData.filter(job =>
        job.title.toLowerCase().includes(state.jobTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(state.location.toLowerCase()) &&
        (state.selectedType ? job.type.toLowerCase() === state.selectedType.toLowerCase() : true) &&
        (state.selectedCompany ? job.company === state.selectedCompany : true)
      );
      state.filteredJobs = filtered.length ? filtered : mockJobsData;
      state.showFilters = false;
    },
  },
});

export const {
  setJobTitle,
  setLocation,
  setSelectedType,
  setSelectedCompany,
  toggleFilters,
  filterJobs,
} = jobSearchSlice.actions;

export default jobSearchSlice.reducer;
