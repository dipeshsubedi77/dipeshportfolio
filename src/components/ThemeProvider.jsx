"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create context
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    // Check for saved theme or use system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode

      // Update localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light")

      // Update class on html element
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      return newMode
    })
  }

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(mediaQuery.matches)
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

