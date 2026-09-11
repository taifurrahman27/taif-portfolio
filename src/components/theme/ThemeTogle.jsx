"use client";

import { HiMoon, HiSun } from "react-icons/hi2";

function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            type="button"
            onClick={() => setDarkMode((mode) => !mode)}
            aria-label={
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${darkMode
                    ? "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
                    : "border-slate-200 bg-slate-100 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
        >
            {darkMode ? (
                <HiSun className="text-lg" />
            ) : (
                <HiMoon className="text-lg" />
            )}
        </button>
    );
}

export default ThemeToggle;