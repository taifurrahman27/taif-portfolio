"use client";

import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

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
} from "react-icons/hi2";

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

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
    >
      {label}
      <HiArrowUpRight className="text-indigo-400" />
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/5 ${project.featured ? "lg:col-span-2 lg:p-8" : ""
        }`}
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

        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {project.description}
        </p>

        {project.features && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-slate-300"
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
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github !== "#" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              GitHub
              <HiArrowUpRight />
            </a>
          ) : null}

          {project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100"
            >
              Live Demo
              <HiArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-[35%] h-100 w-100 rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-white"
          >
            TR<span className="text-indigo-400">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#exploring"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Exploring
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20 sm:inline-flex"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
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

            <h2 className="mt-7 text-xl font-semibold text-slate-200 sm:text-2xl">
              Full-Stack Web Developer{" "}
              <span className="text-indigo-400">|</span>{" "}
              <span className="text-slate-400">
                Aspiring Software Engineer
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build responsive, user-focused web applications with modern
              JavaScript technologies. I enjoy turning ideas into practical
              products while continuously growing as a software engineer.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
              >
                View Projects
                <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/[0.07]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <SocialLink
                href="https://github.com/taifurrahman27"
                label="GitHub"
              />

              <SocialLink
                href="https://www.linkedin.com/in/taifurrahmanjs"
                label="LinkedIn"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 scale-90 rounded-full bg-indigo-500/20 blur-[90px]" />

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/4 p-3 shadow-2xl shadow-indigo-950/30">
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

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0b1020]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-slate-500">Currently exploring</p>
              <p className="mt-1 font-semibold text-white">MCP + AI Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="hidden justify-center pb-16 text-slate-600 md:flex">
        <a href="#about" aria-label="Scroll to about section">
          <HiOutlineArrowDown className="animate-bounce text-2xl" />
        </a>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Building with curiosity and purpose."
          description="My journey is centered around learning by building, solving real problems, and continuously improving the way I write and structure software."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 lg:col-span-2">
            <p className="text-lg leading-8 text-slate-300">
              I am a Software Engineer and Full-Stack Web Developer with
              hands-on experience building responsive, user-focused
              applications using the MERN stack and modern web technologies.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I enjoy working across the stack—from designing interfaces and
              building REST APIs to working with databases, authentication,
              payments, and deployment. My goal is to join a growth-driven
              engineering team where I can contribute, learn from experienced
              developers, and write clean, maintainable code.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/3 p-7">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Education
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              Jagannath University
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              B.S.S. & M.S.S. in Economics
            </p>

            <div className="my-7 h-px bg-white/10" />

            <p className="text-sm uppercase tracking-widest text-slate-500">
              Training
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              Programming Hero
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Complete Web Development Course
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-white/5 bg-white/1.5">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="02 — Skills"
            title="My technical toolkit."
            description="Technologies and tools I use to design, build, test, and ship modern web applications."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-3xl border border-white/10 bg-[#080d1d]/80 p-6 transition hover:border-indigo-400/20"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/3 py-2 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects that turn ideas into products."
          description="A selection of applications I've built while developing my full-stack skills and exploring real-world product problems."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Exploring */}
      <section
        id="exploring"
        className="border-y border-white/5 bg-white/1.5"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="04 — What's Next"
            title="What I'm exploring."
            description="I'm not stopping at building web applications. I'm exploring how software, AI, and developer tools can work together."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {explorations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/3 p-7 transition hover:-translate-y-1 hover:border-indigo-400/30"
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl bg-indigo-500/10 p-4 text-indigo-400">
                      <Icon className="text-2xl" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-indigo-400/20 bg-indigo-500/6 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                05 — Contact
              </p>

              <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Whether you have an opportunity, a project idea, or simply
                want to connect, I&apos;d be happy to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:taif.jnu@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-indigo-400/30 hover:bg-black/30"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                    <HiEnvelope className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="mt-1 text-sm font-medium text-white sm:text-base">
                      taif.jnu@gmail.com
                    </p>
                  </div>
                </div>

                <HiArrowUpRight className="text-slate-500 transition group-hover:text-indigo-400" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                  <HiMapPin className="text-xl" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Based in</p>
                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <SocialLink
                  href="https://github.com/taifurrahman27"
                  label="GitHub"
                />

                <SocialLink
                  href="https://www.linkedin.com/in/taifurrahmanjs"
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
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
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/taifurrahmanjs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
