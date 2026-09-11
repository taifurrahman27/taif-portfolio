import { HiArrowUpRight, HiOutlineCodeBracket, HiOutlineGlobeAlt } from "react-icons/hi2";
import ProjectImage from "./ProjectImage";
import { motion } from "framer-motion";

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
            className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${project.featured ? "lg:col-span-2" : ""
                } ${darkMode
                    ? "border-white/10 bg-[#080d1d]/80 shadow-[0_0_30px_rgba(99,102,241,0.08)] hover:border-indigo-400/30 hover:bg-[#0a1022] hover:shadow-[0_0_50px_rgba(99,102,241,0.2),0_0_90px_rgba(139,92,246,0.08)]"
                    : "border-slate-200 bg-white shadow-[0_0_25px_rgba(99,102,241,0.06)] hover:border-indigo-300 hover:bg-slate-50/70 hover:shadow-[0_0_45px_rgba(99,102,241,0.15),0_0_80px_rgba(139,92,246,0.06)]"
                }`}
        >
            {/* Hover accent */}
            <div
                className={`absolute inset-x-8 top-0 z-20 h-px transition-all duration-500 ${darkMode
                    ? "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/70"
                    : "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/50"
                    }`}
            />

            {/* Ambient glow */}
            <div
                className={`pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full blur-3xl transition-all duration-500 ${darkMode
                    ? "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                    : "bg-indigo-500/5 group-hover:bg-indigo-500/10"
                    }`}
            />

            <div className="relative z-10">
                {/* Project Screenshot */}
                <ProjectImage
                    project={project}
                    darkMode={darkMode}
                />

                {/* Content */}
                <div
                    className={
                        project.featured
                            ? "p-6 lg:p-8"
                            : "p-6"
                    }
                >
                    {/* Header */}
                    <div className="mb-7 flex items-center justify-between">
                        <span
                            className={`font-mono text-sm ${darkMode
                                ? "text-indigo-400"
                                : "text-indigo-500"
                                }`}
                        >
                            {project.number}
                        </span>

                        {project.featured && (
                            <span
                                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${darkMode
                                    ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.08)]"
                                    : "border-indigo-200 bg-indigo-50 text-indigo-600"
                                    }`}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                Featured Project
                            </span>
                        )}
                    </div>

                    {/* Project info */}
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {project.type}
                    </p>

                    <h3
                        className={`text-2xl font-bold tracking-tight sm:text-3xl ${darkMode
                            ? "text-white"
                            : "text-slate-900"
                            }`}
                    >
                        {project.name}
                    </h3>

                    <p
                        className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${darkMode
                            ? "text-slate-400"
                            : "text-slate-600"
                            }`}
                    >
                        {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <li
                                    key={feature}
                                    className={`flex items-start gap-2.5 text-sm ${darkMode
                                        ? "text-slate-300"
                                        : "text-slate-700"
                                        }`}
                                >
                                    <span
                                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${darkMode
                                            ? "bg-indigo-400"
                                            : "bg-indigo-500"
                                            }`}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Tech stack */}
                    <div className="mt-7 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${darkMode
                                    ? "border-white/10 bg-white/3 text-slate-400 group-hover:border-indigo-400/15 group-hover:text-slate-300"
                                    : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-indigo-200 group-hover:bg-indigo-50/60"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        {/* GitHub */}
                        {project.github && project.github !== "#" && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/github relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-xl border px-5 text-sm font-semibold transition-all duration-300 ${darkMode
                                        ? "border-white/10 bg-white/4 text-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                                        : "border-slate-200 bg-white text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]"
                                    }`}
                            >
                                <span
                                    className={`absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/github:translate-x-full ${darkMode ? "block" : "hidden"
                                        }`}
                                />

                                <HiOutlineCodeBracket className="relative text-[17px] transition-transform duration-300 group-hover/github:scale-110" />

                                <span className="relative">Source Code</span>

                                <HiArrowUpRight className="relative text-sm opacity-60 transition-all duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5 group-hover/github:opacity-100" />
                            </a>
                        )}

                        {/* Live Demo */}
                        {project.live && project.live !== "#" && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/live relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(99,102,241,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 hover:shadow-[0_12px_35px_rgba(99,102,241,0.38)]"
                            >
                                {/* Shine */}
                                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/live:translate-x-full" />

                                {/* Content */}
                                <HiOutlineGlobeAlt className="relative text-[17px] transition-transform duration-300 group-hover/live:rotate-6 group-hover/live:scale-110" />

                                <span className="relative">Live Demo</span>

                                <HiArrowUpRight className="relative text-sm transition-all duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
