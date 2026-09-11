import {
    HiOutlineCodeBracket,
    HiOutlineCommandLine,
    HiOutlineCpuChip,
    HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import skills from "@/data/skills";

const categoryIcons = {
    Languages: HiOutlineCodeBracket,
    Frontend: HiOutlineCommandLine,
    Backend: HiOutlineCpuChip,
    Database: HiOutlineCpuChip,
    Tools: HiOutlineWrenchScrewdriver,
};

function SkillsSection({ darkMode }) {
    const skillCategories = Object.entries(skills).map(
        ([title, items]) => ({
            title,
            icon: categoryIcons[title],
            items,
        })
    );

    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    02 — Technical Skills
                </p>

                <h2
                    className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Tools I use to build modern products.
                </h2>

                <p
                    className={`mt-5 text-base leading-7 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    A practical full-stack toolkit built through projects, experimentation,
                    and continuous learning.
                </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${darkMode
                                ? "border-white/10 bg-[#080d1d]/80 shadow-[0_0_25px_rgba(99,102,241,0.1)] hover:border-indigo-400/30 hover:shadow-[0_0_45px_rgba(99,102,241,0.28),0_0_80px_rgba(139,92,246,0.14)]"
                                : "border-slate-200 bg-white shadow-[0_0_20px_rgba(99,102,241,0.07)] hover:border-indigo-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.18),0_0_70px_rgba(139,92,246,0.08)]"
                                }`}
                        >
                            {/* Hover accent */}
                            <div
                                className={`absolute inset-x-6 top-0 h-px transition-all duration-500 ${darkMode
                                    ? "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/70"
                                    : "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/50"
                                    }`}
                            />

                            {/* Category header */}
                            <div className="mb-5 flex items-center gap-3">
                                <div
                                    className={`rounded-xl border p-3 transition-all duration-300 ${darkMode
                                        ? "border-indigo-400/10 bg-indigo-500/10 text-indigo-400 group-hover:border-indigo-400/20 group-hover:bg-indigo-500/15 group-hover:text-indigo-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                                        : "border-indigo-100 bg-indigo-50 text-indigo-500 group-hover:border-indigo-200 group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]"
                                        }`}
                                >
                                    <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <h3
                                    className={`font-semibold ${darkMode
                                        ? "text-white"
                                        : "text-slate-900"
                                        }`}
                                >
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-300 ${darkMode
                                            ? "border-white/10 bg-white/3 text-slate-400 hover:border-indigo-400/20 hover:bg-indigo-500/10 hover:text-indigo-300"
                                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                                            }`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SkillsSection;
