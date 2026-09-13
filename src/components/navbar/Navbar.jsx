"use client";

import Link from "next/link";
import { HiBars3, HiXMark, HiOutlineArrowUpRight } from "react-icons/hi2";
import ThemeToggle from "../theme/ThemeTogle";

const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Exploring", "#exploring"],
    ["Contact", "#contact"],
];

export default function Navbar({
    darkMode,
    setDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
}) {
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${darkMode
                ? "border-white/5 bg-[#050816]/80"
                : "border-slate-200 bg-white/80"
                }`}
        >
            <nav className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={`text-xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        TAIF<span className="text-indigo-400">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className={`text-sm transition ${darkMode
                                    ? "text-slate-300 hover:text-white"
                                    : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle */}
                    <div className="hidden md:flex">
                        <ThemeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    </div>

                    {/* Tablet Resume */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 sm:inline-flex md:hidden ${darkMode
                            ? "border-white/10 bg-white/5 text-slate-300 shadow-[0_0_20px_rgba(99,102,241,0.06)] hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.18)]"
                            : "border-slate-200 bg-white/70 text-slate-700 shadow-[0_0_20px_rgba(99,102,241,0.05)] hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]"
                            }`}
                    >
                        Resume
                        <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    {/* Desktop Resume */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 md:inline-flex ${darkMode
                            ? "border-white/10 bg-white/5 text-slate-300 shadow-[0_0_20px_rgba(99,102,241,0.06)] hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.18)]"
                            : "border-slate-200 bg-white/70 text-slate-700 shadow-[0_0_20px_rgba(99,102,241,0.05)] hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]"
                            }`}
                    >
                        Resume
                        <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${darkMode
                            ? "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
                            : "border-slate-200 bg-slate-100 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                            }`}
                    >
                        {mobileMenuOpen ? (
                            <HiXMark className="text-xl" />
                        ) : (
                            <HiBars3 className="text-xl" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${mobileMenuOpen
                        ? "max-h-96 pb-5 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div
                        className={`rounded-2xl border p-3 ${darkMode
                            ? "border-white/10 bg-white/3"
                            : "border-slate-200 bg-white"
                            }`}
                    >
                        <div className="flex flex-col">
                            {navItems.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${darkMode
                                        ? "text-slate-300 hover:bg-indigo-500/10 hover:text-white"
                                        : "text-slate-600 hover:bg-indigo-50 hover:text-slate-900"
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <div className="mt-2 flex justify-center">
                                <ThemeToggle
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />
                            </div>

                            {/* Mobile Resume */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className={`group mt-2 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300 ${darkMode
                                    ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.08)] hover:border-indigo-400/40 hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]"
                                    : "border-indigo-200 bg-indigo-50/80 text-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.06)] hover:border-indigo-300 hover:bg-indigo-100 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
                                    }`}
                            >
                                View Resume
                                <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
