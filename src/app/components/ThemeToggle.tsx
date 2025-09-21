"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleTheme } from "@/store/slices/themeSlice";

export default function ThemeToggleButton() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
