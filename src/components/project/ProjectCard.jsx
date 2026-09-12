"use client";

import { motion } from "framer-motion";
import {
    HiArrowUpRight,
    HiOutlineCodeBracket,
    HiOutlineGlobeAlt,
    HiOutlineSparkles,
} from "react-icons/hi2";
import {
    SiBootstrap,
    SiExpress,
    SiFirebase,
    SiJavascript,
    SiJsonwebtokens,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiStripe,
    SiTailwindcss,
} from "react-icons/si";
import ProjectImage from "./ProjectImage";

const techIcons = {
    JavaScript: {
        icon: SiJavascript,
        color: "#F7DF1E",
    },
    React: {
        icon: SiReact,
        color: "#61DAFB",
    },
    "Next.js": {
        icon: SiNextdotjs,
        color: "#FFFFFF",
    },
    "Node.js": {
        icon: SiNodedotjs,
        color: "#339933",
    },
    "Express.js": {
        icon: SiExpress,
        color: "#FFFFFF",
    },
    MongoDB: {
        icon: SiMongodb,
        color: "#47A248",
    },
    Firebase: {
        icon: SiFirebase,
        color: "#FFCA28",
    },
    JWT: {
        icon: SiJsonwebtokens,
        color: "#FFFFFF",
    },
    Stripe: {
        icon: SiStripe,
        color: "#635BFF",
    },
    Bootstrap: {
        icon: SiBootstrap,
        color: "#7952B3",
    },
    "Tailwind CSS": {
        icon: SiTailwindcss,
        color: "#06B6D4",
    },
};

function ProjectCard({ project, darkMode }) {
    const isFeatured = project.featured;

    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative h-full overflow-hidden rounded-[28px] border ${darkMode
                ? "border-white/10 bg-[#080d1d]"
                : "border-slate-200 bg-white"
                }`}
        >
            {/* Ambient glow */}
            <div
                className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-500 ${darkMode
                    ? "bg-indigo-500/10 opacity-60 group-hover:opacity-100"
                    : "bg-indigo-400/10 opacity-50 group-hover:opacity-80"
                    }`}
            />

            {/* Top accent */}
            <div
                className={`absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/0 to-transparent transition-all duration-500 group-hover:via-indigo-400/70`}
            />

            <div className="relative">
                {/* Project screenshot */}
                <ProjectImage project={project} darkMode={darkMode} />

                {/* Project content */}
                <div className={`p-6 sm:p-7 ${isFeatured ? "lg:p-8" : ""}`}>
                    {/* Meta row */}
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span
                                className={`font-mono text-xs tracking-[0.2em] ${darkMode
                                    ? "text-indigo-400"
                                    : "text-indigo-500"
                                    }`}
                            >
                                {project.number}
                            </span>

                            <span
                                className={`h-px w-8 ${darkMode
                                    ? "bg-white/10"
                                    : "bg-slate-200"
                                    }`}
                            />

                            <span
                                className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${darkMode
                                    ? "text-slate-500"
                                    : "text-slate-400"
                                    }`}
                            >
                                {project.type}
                            </span>
                        </div>

                        {isFeatured && (
                            <div
                                className={`hidden shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:flex ${darkMode
                                    ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                                    : "border-indigo-200 bg-indigo-50 text-indigo-600"
                                    }`}
                            >
                                <HiOutlineSparkles className="text-xs" />
                                Featured
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <h3
                            className={`text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl ${darkMode
                                ? "text-white group-hover:text-indigo-100"
                                : "text-slate-900 group-hover:text-indigo-700"
                                }`}
                        >
                            {project.name}
                        </h3>

                        {isFeatured && (
                            <p
                                className={`mt-1.5 text-sm font-medium ${darkMode
                                    ? "text-indigo-400"
                                    : "text-indigo-500"
                                    }`}
                            >
                                Featured Project
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <p
                        className={`max-w-2xl text-sm leading-7 sm:text-[15px] ${darkMode
                            ? "text-slate-400"
                            : "text-slate-600"
                            }`}
                    >
                        {project.description}
                    </p>

                    {/* Features */}
                    {project.features?.length > 0 && (
                        <div className="mt-6 grid gap-2 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className={`flex items-start gap-2.5 text-xs ${darkMode
                                        ? "text-slate-400"
                                        : "text-slate-600"
                                        }`}
                                >
                                    <span
                                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${darkMode
                                            ? "bg-indigo-400"
                                            : "bg-indigo-500"
                                            }`}
                                    />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tech stack */}
                    <div className="mt-7">
                        <div
                            className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${darkMode
                                ? "text-slate-600"
                                : "text-slate-400"
                                }`}
                        >
                            Built with
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => {
                                const tech = techIcons[tag];
                                const Icon = tech?.icon;

                                return (
                                    <span
                                        key={tag}
                                        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300 ${darkMode
                                            ? "border-white/10 bg-white/3 text-slate-400 hover:border-indigo-400/20 hover:bg-white/6 hover:text-slate-200"
                                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                            }`}
                                    >
                                        {Icon ? (
                                            <Icon
                                                className="text-sm"
                                                style={{
                                                    color: tech.color,
                                                }}
                                            />
                                        ) : (
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${darkMode
                                                    ? "bg-indigo-400"
                                                    : "bg-indigo-500"
                                                    }`}
                                            />
                                        )}

                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* Actions */}
                    <div
                        className={`mt-8 flex flex-wrap items-center gap-3 border-t pt-6 ${darkMode
                            ? "border-white/5"
                            : "border-slate-100"
                            }`}
                    >
                        {project.github && project.github !== "#" && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/github relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-xl border px-5 text-sm font-semibold transition-all duration-300 ${darkMode
                                    ? "border-white/10 bg-white/4-slate-300 hover:-translate-y-0.5 hover:border-white/20 hoverhover:bg-white/8r:text-white"
                                    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <span
                                    className={`absolute inset-0 -translate-x-full bg-linear-to-rrom-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/github:translate-x-full ${darkMode ? "block" : "hidden"
                                        }`}
                                />

                                <HiOutlineCodeBracket className="relative text-[17px] transition-transform duration-300 group-hover/github:scale-110" />

                                <span className="relative">
                                    Source Code
                                </span>

                                <HiArrowUpRight className="relative text-sm opacity-60 transition-all duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5 group-hover/github:opacity-100" />
                            </a>
                        )}

                        {project.live && project.live !== "#" && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/live relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(99,102,241,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 hover:shadow-[0_12px_35px_rgba(99,102,241,0.38)]"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/live:translate-x-full" />

                                <HiOutlineGlobeAlt className="relative text-[17px] transition-transform duration-300 group-hover/live:rotate-6 group-hover/live:scale-110" />

                                <span className="relative">
                                    Live Demo
                                </span>

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
