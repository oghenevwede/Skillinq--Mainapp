import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import dashboardReducer from "./slices/dashboardSlice";
import jobSearchReducer from "./slices/jobSearchSlice"; // from your search-job page
import authReducer from "./slices/authSlice";
import jobReducer from "./slices/jobSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    jobSearch: jobSearchReducer,
    theme: themeReducer,
    auth: authReducer,
    job: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
