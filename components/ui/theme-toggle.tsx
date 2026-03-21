"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("twindow-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      root.classList.toggle("light", savedTheme === "light");
      return;
    }

    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme: "light" | "dark" = systemPrefersLight ? "light" : "dark";
    setTheme(initialTheme);
    root.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    localStorage.setItem("twindow-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "focus-ring inline-flex items-center justify-center transition duration-200",
        className
      )}
      aria-label="Toggle light mode"
    >
      <span className="sm:hidden">{theme === "dark" ? "Light" : "Dark"}</span>
      <span className="hidden sm:inline">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
