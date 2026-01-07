import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const saved = localStorage.getItem("theme-pref");
    if (saved) return saved;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme-pref", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}
