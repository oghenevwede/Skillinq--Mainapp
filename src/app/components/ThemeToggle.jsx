"use client";

import { useTheme } from "../providers";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full font-semibold transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
// src/app/providers.jsx
import "./globals.css";
import { ThemeProvider } from "../providers"; // Assuming you saved it as providers.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light"> // Set an initial class for no-flash
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
