"use client";
/* src/providers/ThemeProvider.tsx */
import React, { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({ theme: "dark" });

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force dark class on document for styling overrides
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
