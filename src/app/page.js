"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import FadeUp from "@/components/motion/FadeUp";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";


import {
  HiArrowUpRight,
  HiCodeBracket,
  HiEnvelope,
  HiMapPin,
  HiOutlineArrowDown,
  HiOutlineArrowRight,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiSparkles,
  HiBars3,
  HiXMark,
  HiOutlineEnvelope,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import ThemeToggle from "@/components/theme/ThemeTogle";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "@/components/project/ProjectCard";
import projects from "@/data/projects";
import SkillsSection from "@/components/skills/SkillsSection";
import ExplorationsSection from "@/components/explorations/ExplorationsSection";
import Footer from "@/components/footer/Footer";

function SectionHeading({ eyebrow, title, description, darkMode }) {
  return (
    <div className="mb-12 max-w-3xl">
      <FadeUp distance={20}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          {eyebrow}
        </p>
      </FadeUp>

      <FadeUp delay={0.08} distance={25}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${darkMode ? "text-white" : "text-slate-900"}`}>
          {title}
        </h2>
      </FadeUp>

      {description && (
        <FadeUp delay={0.16} distance={20}>
          <p className={`mt-5 text-base leading-7 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}

function SocialLink({ href, label, darkMode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${darkMode
        ? "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-slate-900"
        }`}
    >
      {label}
    </a>
  );
}


export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme !== "light";
  });

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (darkMode === null) return;

    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  if (darkMode === null) {
    return null;
  }


  return (
    <main
      className={`min-h-screen overflow-hidden ${darkMode
        ? "bg-[#050816] text-white"
        : "bg-slate-50 text-slate-900"
        }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-[35%] h-100 w-100 rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${darkMode
          ? "border-white/5 bg-[#050816]/80"
          : "border-slate-200 bg-white/80"
          }`}
      >
        <nav className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className={`text-xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              TAIF<span className="text-indigo-400">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#home"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Home
              </a>

              <a
                href="#about"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                About
              </a>

              <a
                href="#skills"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Skills
              </a>

              <a
                href="#projects"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Projects
              </a>

              <a
                href="#exploring"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Exploring
              </a>

              <a
                href="#contact"
                className={`text-sm transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            {/* Desktop Resume */}
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
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${darkMode ? "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white" : "border-slate-200 bg-slate-100 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"}`}
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
            className={`overflow-hidden transition-all duration-300 md:hidden ${mobileMenuOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className={`rounded-2xl border p-3 ${darkMode ? "border-white/10 bg-white/3" : "border-slate-200 bg-white"}`}>
              <div className="flex flex-col">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Skills", "#skills"],
                  ["Projects", "#projects"],
                  ["Exploring", "#exploring"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${darkMode ? "text-slate-300 hover:bg-indigo-500/10 hover:text-white" : "text-slate-600 hover:bg-indigo-50 hover:text-slate-900"}`}
                  >
                    {label}
                  </a>
                ))}

                <div className="mt-2 flex justify-center">
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
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

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, x: -35 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Available for opportunities
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-4xl text-[2.75rem] font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              MD. TAIFUR
              <br />
              RAHMAN{" "}
              <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                JASIM
              </span>
            </h1>

            <h2 className={`mt-7 text-xl font-semibold sm:text-2xl ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
              Full-Stack Web Developer{" "}
              <span className="text-indigo-400">|</span>{" "}
              <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Software Engineer
              </span>
            </h2>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I build responsive, user-focused web applications with modern
              technologies. I enjoy turning ideas into practical products while
              continuously improving my skills in software engineering, backend
              architecture, and emerging AI-powered tools.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.03, y: -2 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)]"
              >
                View Projects
                <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.03 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition ${darkMode ? "border-white/10 bg-white/3 text-slate-200 hover:bg-white/[0.07]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <SocialLink
                href="https://github.com/taifurrahman27"
                label="GitHub"
                darkMode={darkMode}
              />

              <SocialLink
                href="https://www.linkedin.com/in/taifurrahmanjs"
                label="LinkedIn"
                darkMode={darkMode}
              />
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, x: 35, scale: 0.96 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                  y: -6,
                }
            }
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 scale-90 rounded-full bg-indigo-500/20 blur-[90px]" />

            <div
              className={`group relative aspect-square overflow-hidden rounded-full border-2 p-3 transition-all duration-500 ${darkMode
                ? "border-indigo-400/60 bg-white/4 shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:border-indigo-300 hover:shadow-[0_0_75px_rgba(99,102,241,0.8),0_0_120px_rgba(139,92,246,0.45)]"
                : "border-indigo-400/60 bg-white shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:border-indigo-500 hover:shadow-[0_0_65px_rgba(99,102,241,0.55),0_0_100px_rgba(139,92,246,0.3)]"
                }`}
            >
              <div className="relative h-full overflow-hidden rounded-full">
                <Image
                  src="/profile.jpg"
                  alt="MD. Taifur Rahman Jasim"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 1024px) 80vw, 400px"
                />
              </div>
            </div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                    y: -3,
                    scale: 1.02,
                  }
              }
              className={`group absolute -bottom-5 left-2 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-xl transition-all duration-300 sm:left-4 ${darkMode
                ? "border-indigo-400/20 bg-[#0b1020]/90 shadow-[0_0_30px_rgba(99,102,241,0.18)] hover:border-indigo-400/40 hover:shadow-[0_0_45px_rgba(99,102,241,0.28)]"
                : "border-indigo-200 bg-white/90 shadow-[0_0_25px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                </span>

                <div>
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${darkMode ? "text-slate-500" : "text-slate-500"
                      }`}
                  >
                    Currently exploring
                  </p>

                  <p
                    className={`mt-1 text-sm font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                      }`}
                  >
                    <span className="text-indigo-400">MCP</span>
                    <span className={darkMode ? "text-slate-500" : "text-slate-400"}>
                      {" + "}
                    </span>
                    <span className="text-violet-400">AI Tools</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll indicator */}
      <FadeIn delay={1} duration={0.6} amount={0.2}>
        <div className="hidden justify-center pb-16 text-slate-600 md:flex">
          <a
            href="#about"
            aria-label="Scroll to about section"
          >
            <HiOutlineArrowDown
              className={
                shouldReduceMotion
                  ? "text-2xl"
                  : "animate-bounce text-2xl"
              }
            />
          </a>
        </div>
      </FadeIn>


      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Building with curiosity and purpose."
          description="My journey is centered around learning by building, solving real problems, and continuously improving the way I write and structure software."
          darkMode={darkMode}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className={`rounded-3xl border p-7 lg:col-span-2 ${darkMode ? "border-white/10 bg-white/3" : "border-slate-200 bg-white"}`}>
            <p className={`text-lg leading-8 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              I am a Software Engineer and Full-Stack Web Developer with
              hands-on experience building responsive, user-focused
              applications using the MERN stack and modern web technologies.
            </p>

            <p className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I enjoy working across the stack—from designing interfaces and
              building REST APIs to working with databases, authentication,
              payments, and deployment. My goal is to join a growth-driven
              engineering team where I can contribute, learn from experienced
              developers, and write clean, maintainable code.
            </p>
          </div>

          <div className={`rounded-3xl border p-7 ${darkMode ? "border-white/10 bg-white/3" : "border-slate-200 bg-white"}`}>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Education
            </p>

            <h3 className={`mt-4 text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
              Jagannath University
            </h3>

            <p className={`mt-2 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              B.S.S. & M.S.S. in Economics
            </p>

            <div className={`my-7 h-px ${darkMode ? "bg-white/10" : "bg-slate-200"}`} />

            <p className="text-sm uppercase tracking-widest text-slate-500">
              Training
            </p>

            <h3 className={`mt-4 text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
              Programming Hero
            </h3>

            <p className={`mt-2 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Complete Web Development Course
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection darkMode={darkMode} />

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects that turn ideas into products."
          description="A selection of applications I've built while developing my full-stack skills and exploring real-world product problems."
          darkMode={darkMode}
        />

        <StaggerContainer
          className="grid gap-6 lg:grid-cols-2"
          stagger={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} darkMode={darkMode} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Exploring */}
      <ExplorationsSection darkMode={darkMode} />


      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <FadeUp distance={35}>
          <div className={`relative overflow-hidden rounded-4xl border p-8 sm:p-12 lg:p-16 ${darkMode ? "border-indigo-400/20 bg-indigo-500/6" : "border-indigo-200 bg-indigo-50/70"}`}>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  05 — Contact
                </p>

                <h2 className={`max-w-2xl text-4xl font-black tracking-tight sm:text-5xl ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Let&apos;s build something meaningful.
                </h2>

                <p className={`mt-5 max-w-xl leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Whether you have an opportunity, a project idea, or simply want
                  to connect, I&apos;d be happy to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:taif.jnu@gmail.com"
                  className={`group flex items-center justify-between rounded-2xl border p-5 transition hover:border-indigo-400/30 ${darkMode ? "border-white/10 bg-black/20 hover:bg-black/30" : "border-slate-200 bg-white hover:bg-indigo-50/40"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                      <HiEnvelope className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Email</p>

                      <p className={`mt-1 text-sm font-medium sm:text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                        taif.jnu@gmail.com
                      </p>
                    </div>
                  </div>

                  <HiArrowUpRight className="text-slate-500 transition group-hover:text-indigo-400" />
                </a>

                <div className={`flex items-center gap-4 rounded-2xl border p-5 ${darkMode ? "border-white/10 bg-black/20" : "border-slate-200 bg-white"}`}>
                  <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                    <HiMapPin className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Based in</p>

                    <p className={`mt-1 text-sm font-medium sm:text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <SocialLink
                    href="https://github.com/taifurrahman27"
                    label="GitHub"
                    darkMode={darkMode}
                  />

                  <SocialLink
                    href="https://www.linkedin.com/in/taifurrahmanjs"
                    label="LinkedIn"
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} />

    </main >
  );
}
