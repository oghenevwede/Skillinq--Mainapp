import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import profileReducer from "./slices/profileSlice"
import dashboardReducer from "./slices/dashboardSlice";
import jobSearchReducer from "./slices/jobSearchSlice"; // from your search-job page
import authReducer from "./slices/authSlice";
import jobReducer from "./slices/jobSlice";
import { profile } from "console";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    dashboard: dashboardReducer,
    jobSearch: jobSearchReducer,
    theme: themeReducer,
    auth: authReducer,
    job: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
