"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
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
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineUserGroup,
  HiSparkles,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";
import ThemeToggle from "@/components/theme/ThemeTogle";

const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Server-Side Logic",
  ],
  Database: [
    "MongoDB",
    "Mongoose",
    "Firebase Authentication",
    "NoSQL",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Vercel",
    "Postman",
    "npm",
    "CI/CD",
  ],
};


const explorations = [
  {
    icon: HiOutlineCpuChip,
    title: "MCP",
    description:
      "Exploring Model Context Protocol and how AI systems can connect with real applications, APIs, and tools.",
  },
  {
    icon: HiSparkles,
    title: "AI + Tools",
    description:
      "Learning how AI can move beyond conversations and interact with practical software systems.",
  },
  {
    icon: HiCodeBracket,
    title: "Backend Architecture",
    description:
      "Deepening my understanding of scalable APIs, authentication, databases, payments, and server-side systems.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Software Engineering",
    description:
      "Continuously improving code quality, architecture, problem-solving, and engineering best practices.",
  },
];

const categories = [
  {
    icon: HiOutlineCpuChip,
    title: "Languages",
    items: skills.Languages,
  },
  {
    icon: HiOutlinePaintBrush,
    title: "Frontend",
    items: skills.Frontend,
  },
  {
    icon: HiCodeBracket,
    title: "Backend",
    items: skills.Backend,
  },
  {
    icon: HiOutlineBuildingOffice2,
    title: "Database",
    items: skills.Database,
  },
  {
    icon: HiOutlineUserGroup,
    title: "Tools & Platforms",
    items: skills.Tools,
  },
];

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

function ProjectCard({ project, darkMode }) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 35,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`group relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300 hover:border-indigo-400/30 ${darkMode ? "border-white/10 bg-white/3 hover:bg-white/5" : "border-slate-200 bg-white hover:bg-slate-50"} ${project.featured ? "lg:col-span-2 lg:p-8" : ""}`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-sm text-indigo-400">
            {project.number}
          </span>

          {project.featured && (
            <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
              Featured Project
            </span>
          )}
        </div>

        <p className="mb-2 text-sm font-medium text-slate-500">
          {project.type}
        </p>

        <h3 className={`text-2xl font-bold sm:text-3xl ${darkMode ? "text-white" : "text-slate-900"}`}>
          {project.name}
        </h3>

        <p className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          {project.description}
        </p>

        {project.features && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className={`flex items-start gap-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs ${darkMode ? "border-white/10 bg-black/20 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-600"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${darkMode ? "border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5 hover:text-white" : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"}`}
            >
              GitHub
              <HiArrowUpRight />
            </a>
          )}

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Live Demo
              <HiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}


export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme ? savedTheme === "dark" : true;
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);


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
              TR<span className="text-indigo-400">.</span>
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
              className={`hidden rounded-full border px-5 py-2 text-sm font-semibold transition sm:inline-flex md:hidden ${darkMode ? "border-indigo-400/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100"}`}
            >
              Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-full border px-5 py-2 text-sm font-semibold transition md:inline-flex ${darkMode ? "border-indigo-400/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100"}`}
            >
              Resume
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
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  View Resume
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

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
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
                    : { scale: 1.03 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
              >
                View Projects
                <HiOutlineArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
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

            <div className={`relative aspect-square overflow-hidden rounded-[2.5rem] border p-3 shadow-2xl shadow-indigo-950/30 ${darkMode ? "border-white/10 bg-white/4" : "border-slate-200 bg-white"}`}>
              <div className="relative h-full overflow-hidden rounded-4xl">
                <Image
                  src="/profile.jpg"
                  alt="MD. Taifur Rahman Jasim"
                  fill
                  priority
                  className="object-cover"
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
              className={`absolute -bottom-5 -left-5 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-xl ${darkMode ? "border-white/10 bg-[#0b1020]/90" : "border-slate-200 bg-white/90"}`}
            >
              <p className="text-xs text-slate-500">
                Currently exploring
              </p>

              <p className={`mt-1 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                MCP + AI Tools
              </p>
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
      <section id="skills" className={`border-y ${darkMode ? "border-white/5 bg-white/1.5" : "border-slate-200 bg-slate-100/70"}`}>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="02 — Skills"
            title="My technical toolkit."
            description="Technologies and tools I use to design, build, test, and ship modern web applications."
            darkMode={darkMode}
          />

          <StaggerContainer
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <StaggerItem key={category.title}>
                  <div className={`h-full rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 ${darkMode ? "border-white/10 bg-[#080d1d]/80" : "border-slate-200 bg-white"}`}>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                        <Icon className="text-xl" />
                      </div>

                      <h3 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-lg border px-3 py-2 text-xs ${darkMode ? "border-white/10 bg-white/3 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

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
      <section
        id="exploring"
        className={`border-y ${darkMode ? "border-white/5 bg-white/1.5" : "border-slate-200 bg-slate-100/70"}`}
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="04 — What's Next"
            title="What I'm exploring."
            description="I'm not stopping at building web applications. I'm exploring how software, AI, and developer tools can work together."
            darkMode={darkMode}
          />

          <StaggerContainer
            className="grid gap-5 md:grid-cols-2"
            stagger={0.12}
          >
            {explorations.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className={`group h-full rounded-3xl border p-7 transition-colors duration-300 hover:border-indigo-400/30 ${darkMode ? "border-white/10 bg-white/3" : "border-slate-200 bg-white"}`}
                  >
                    <div className="flex items-start gap-5">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 3,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="rounded-2xl bg-indigo-500/10 p-4 text-indigo-400"
                      >
                        <Icon className="text-2xl" />
                      </motion.div>

                      <div>
                        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                          {item.title}
                        </h3>

                        <p className={`mt-3 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>


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
      <footer className={`border-t ${darkMode ? "border-white/5" : "border-slate-200"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} MD. TAIFUR RAHMAN JASIM. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/taifurrahman27"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${darkMode
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/taifurrahmanjs"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${darkMode
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main >
  );
}
