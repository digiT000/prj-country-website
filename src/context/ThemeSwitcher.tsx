import { createContext, useContext, useState, useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeSwitcherContext {
  isDarkMode: boolean;
  toggle: () => void;
}

// Initialize the context

const ThemeContext = createContext<ThemeSwitcherContext | undefined>(undefined);

// Custom hook to access the context

export const ThemeSwitcherContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useSearchingContext must be used within a SearchingProvider"
    );
  }

  return context;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }

    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  function toggleDisplay() {
    setDarkMode((prevDark) => !prevDark);
    localStorage.setItem("displayMode", !darkMode ? "dark" : "light");
  }

  const value: ThemeSwitcherContext = {
    isDarkMode: darkMode,
    toggle: toggleDisplay,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
