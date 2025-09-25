import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  currentLocation: string;
  primaryRole: string;
  yearsExperience: string;
  openRoles: string[];
  currentCompany: string;
  currentRole: string;
  employmentDuration: string;
  roleSummary: string;
  bio: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
  other: string;
  skills: string[];
  highestEducation: string;
  openRelocation: string;
  workStyle: string;
  jobType: string;
  companySizes: string[];
  avatar: string | null;
  resume: string | null; // base64 or filename
}

const initialState: ProfileState = {
  fullName: '',
  phone: '',
  email: '',
  dob: '',
  gender: '',
  currentLocation: '',
  primaryRole: '',
  yearsExperience: '',
  openRoles: [],
  currentCompany: '',
  currentRole: '',
  employmentDuration: '',
  roleSummary: '',
  bio: '',
  website: '',
  linkedin: '',
  github: '',
  twitter: '',
  other: '',
  skills: [],
  highestEducation: '',
  openRelocation: '',
  workStyle: '',
  jobType: '',
  companySizes: [],
  avatar: null,
  resume: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData(state, action: PayloadAction<ProfileState>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;