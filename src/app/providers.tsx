"use client";

import { useEffect } from "react";
import { Provider as ReduxProvider, useSelector, useDispatch } from "react-redux";
import { store, RootState, AppDispatch } from "@/store/store";
import { setTheme } from "@/store/slices/themeSlice";

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch<AppDispatch>();

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        dispatch(setTheme(savedTheme));
      }
    }
  }, [dispatch]);

  // Apply theme class & store in localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ThemeInitializer>{children}</ThemeInitializer>
    </ReduxProvider>
  );
}
  