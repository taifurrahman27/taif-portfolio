import Image from "next/image";
import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Stripe",
  "Git",
  "GitHub",
];

const projects = [
  {
    id: 1,
    title: "CrowdFunding",
    description:
      "A full-stack crowdfunding platform where supporters can contribute to campaigns, creators can manage campaigns and withdrawals, and admins can oversee the platform.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    featured: true,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A modern full-stack web application focused on creating a clean user experience and solving a real-world problem.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    featured: false,
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A responsive web application demonstrating modern frontend development, API integration, and scalable application structure.",
    technologies: ["React", "Tailwind CSS", "REST API"],
    featured: false,
    live: "#",
    github: "#",
  },
];

const exploring = [
  {
    number: "01",
    title: "MCP",
    description:
      "Exploring Model Context Protocol and how AI can securely interact with tools, applications, and external systems.",
  },
  {
    number: "02",
    title: "AI + Tools",
    description:
      "Learning how AI-powered applications can connect with real-world services and automate practical workflows.",
  },
  {
    number: "03",
    title: "Backend Architecture",
    description:
      "Improving my understanding of scalable APIs, authentication, databases, and maintainable backend systems.",
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Strengthening problem solving, system design, clean code, and software engineering fundamentals.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            <span className="text-violet-500">T</span>R
            <span className="text-violet-500">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link
              href="#home"
              className="transition hover:text-violet-400"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="transition hover:text-violet-400"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="transition hover:text-violet-400"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="transition hover:text-violet-400"
            >
              Projects
            </Link>

            <Link
              href="#exploring"
              className="transition hover:text-violet-400"
            >
              Exploring
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-violet-400"
            >
              Contact
            </Link>
          </div>

          <a
            href="#"
            className="rounded-full border border-violet-500/50 px-5 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500 hover:text-white"
          >
            Resume
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center pt-20"
      >
        <div className="absolute -left-50 top-25 h-125 w-125 rounded-full bg-violet-700/20 blur-[150px]" />

        <div className="absolute -right-45 top-25 h-112.5 w-112.5 rounded-full bg-blue-700/10 blur-[150px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span>👋</span>
              <span>Hello, I&apos;m</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              MD. TAIFUR
              <span className="block bg-linear-to-r from-violet-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                RAHMAN JASIM
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-lg font-medium sm:text-xl">
              <span className="text-white">
                Software Engineer
              </span>

              <span className="text-slate-600">|</span>

              <span className="text-violet-400">
                Full-Stack Web Developer
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive, and scalable web
              applications with a strong focus on clean code,
              intuitive user experiences, and real-world
              solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-7 py-3.5 font-semibold shadow-[0_0_30px_rgba(124,58,237,0.25)] transition hover:scale-[1.03]"
              >
                View Projects
              </Link>

              <Link
                href="#contact"
                className="rounded-xl border border-slate-700 bg-white/2 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-violet-500 hover:text-violet-300"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/taifurrahman27"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300"
              >
                GH
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300"
              >
                in
              </a>

              <a
                href="mailto:your-email@example.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300"
              >
                @
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-105 w-105 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative">
              <div className="absolute -inset-4.5 rounded-full bg-linear-to-r from-violet-600 via-purple-500 to-blue-600 opacity-60 blur-xl" />

              <div className="relative h-77.5 w-77.5 overflow-hidden rounded-full border-4 border-violet-500/70 bg-slate-900 shadow-[0_0_70px_rgba(124,58,237,0.35)] sm:h-97.5 sm:w-97.5">
                <Image
                  src="/profile.jpg"
                  alt="MD. Taifur Rahman Jasim"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-[#0b1020]/90 px-5 py-4 shadow-xl backdrop-blur-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Focused on
                </p>

                <p className="mt-1 font-semibold text-violet-300">
                  Building & Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/5 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                01. About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                My Journey
              </h2>

              <div className="mt-7 max-w-2xl space-y-5 leading-8 text-slate-400">
                <p>
                  I&apos;m a web developer who enjoys
                  transforming ideas into functional,
                  responsive, and user-friendly web
                  applications.
                </p>

                <p>
                  I completed the Complete Web Development
                  Course with Programming Hero, where I built
                  a strong foundation in modern frontend and
                  backend web technologies.
                </p>

                <p>
                  Now, I&apos;m focused on growing as a
                  software engineer by exploring backend
                  systems, APIs, AI integrations, MCP, and
                  scalable application architecture.
                </p>
              </div>

              <Link
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:text-violet-300"
              >
                Explore my work
                <span>→</span>
              </Link>
            </div>

            <div className="grid gap-4">
              <InfoCard
                number="01"
                title="Education"
                description="Complete Web Development Course with Programming Hero."
              />

              <InfoCard
                number="02"
                title="Current Focus"
                description="Backend development, APIs, AI integrations, MCP, and modern software engineering."
              />

              <InfoCard
                number="03"
                title="Goal"
                description="Become a skilled software engineer and build reliable products that create meaningful impact."
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-t border-white/5 bg-white/1 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            02. Skills
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Tech Stack
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Technologies and tools I use to build modern
                web applications.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/5 bg-[#0a0f1e] px-5 py-5 text-center text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-white/5 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            03. Featured Projects
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                My Projects
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                A selection of projects that demonstrate my
                full-stack development skills, problem solving,
                and approach to building real applications.
              </p>
            </div>

            <a
              href="https://github.com/taifurrahman27"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-violet-400"
            >
              View GitHub →
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="exploring"
        className="border-t border-white/5 bg-white/1 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                04. What I&apos;m Exploring
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                What&apos;s Next?
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-slate-400">
                I&apos;m continuously learning new technologies
                and concepts that can help me become a stronger
                software engineer and build smarter, more
                scalable applications.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {exploring.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/5 bg-[#0a0f1e] p-6 transition duration-300 hover:border-violet-500/30"
                >
                  <span className="text-sm font-bold text-violet-500">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative border-t border-white/5 py-24"
      >
        <div className="absolute bottom-0 left-1/2 h-75 w-125 -translate-x-1/2 rounded-full bg-violet-700/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/4 to-transparent p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                  05. Contact
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Let&apos;s Work Together.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-400">
                  I&apos;m open to discussing software development opportunities,
                  collaborations, and interesting projects, or connecting with
                  fellow developers.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:taif.jnu@gmail.com"
                    className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
                  >
                    Send an Email
                  </a>

                  <a
                    href="https://github.com/taifurrahman27"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-violet-500 hover:text-violet-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#070b16] p-6">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/5 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-violet-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-400">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-white/5 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-violet-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Write your message..."
                      className="w-full resize-none rounded-xl border border-white/5 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-violet-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-semibold transition hover:opacity-90"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <div>
            <p className="font-semibold text-slate-300">
              MD. TAIFUR RAHMAN JASIM
            </p>

            <p className="mt-1">
              Web Developer | Aspiring Software Engineer
            </p>
          </div>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({ number, title, description }) {
  return (
    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#0a0f1e] p-6 transition hover:border-violet-500/30">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-sm font-bold text-violet-400">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-[#090e1b] p-6 transition duration-300 hover:-translate-y-1 ${project.featured
        ? "border-violet-500/60 shadow-[0_0_40px_rgba(124,58,237,0.08)]"
        : "border-white/10 hover:border-violet-500/30"
        }`}
    >
      {project.featured && (
        <div className="absolute right-5 top-5 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">
          Featured
        </div>
      )}

      <div className="flex h-44 items-end overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-violet-950 via-[#101837] to-[#080b14] p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
            Project
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="mt-6 min-h-28 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/5 bg-white/4 px-3 py-1.5 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-6">
        <a
          href={project.live}
          className="text-sm font-semibold text-white transition hover:text-violet-400"
        >
          Live Demo ↗
        </a>

        <a
          href={project.github}
          className="text-sm font-semibold text-slate-400 transition hover:text-violet-400"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
