import skills from "@/data/skills";

function SkillsSection({ darkMode }) {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
            {/* Section heading */}
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    04 — Technical Skills
                </p>

                <h2
                    className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Technologies behind the products I build.
                </h2>

                <p
                    className={`mt-5 text-base leading-7 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    A practical toolkit built around modern frontend,
                    backend, database, and development technologies.
                </p>
            </div>

            {/* Core Stack */}
            <div
                className={`group relative mb-6 overflow-hidden rounded-3xl border p-6 sm:p-8 ${darkMode
                    ? "border-white/10 bg-[#080d1d]/80"
                    : "border-slate-200 bg-white"
                    }`}
            >
                {/* Ambient glow */}
                <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${darkMode
                        ? "bg-indigo-500/10"
                        : "bg-indigo-400/10"
                        }`}
                />

                <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                        <div>
                            <p
                                className={`text-xs font-semibold uppercase tracking-[0.2em] ${darkMode
                                    ? "text-indigo-400"
                                    : "text-indigo-500"
                                    }`}
                            >
                                Core Stack
                            </p>

                            <h3
                                className={`mt-2 text-xl font-bold ${darkMode
                                    ? "text-white"
                                    : "text-slate-900"
                                    }`}
                            >
                                Technologies I work with most
                            </h3>
                        </div>

                        <div
                            className={`hidden rounded-full border px-3 py-1 text-xs font-medium sm:block ${darkMode
                                ? "border-white/10 bg-white/5 text-slate-400"
                                : "border-slate-200 bg-slate-50 text-slate-500"
                                }`}
                        >
                            Full Stack
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                        {skills.coreStack.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.name}
                                    className={`group/skill relative flex min-h-28 flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-center transition-all duration-300 hover:-translate-y-1 ${darkMode
                                        ? "border-white/10 bg-white/3 hover:border-indigo-400/30 hover:bg-indigo-500/[0.07] hover:shadow-[0_0_30px_rgba(99,102,241,0.18)]"
                                        : "border-slate-200 bg-slate-50/70 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
                                        }`}
                                >
                                    <div
                                        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${darkMode
                                            ? "border-white/10 bg-white/5 text-slate-300 group-hover/skill:border-indigo-400/30 group-hover/skill:bg-indigo-500/10 group-hover/skill:text-indigo-300"
                                            : "border-slate-200 bg-white text-slate-600 group-hover/skill:border-indigo-200 group-hover/skill:bg-indigo-50 group-hover/skill:text-indigo-600"
                                            }`}
                                    >
                                        {Icon ? (
                                            <Icon
                                                className="text-2xl transition-transform duration-300 group-hover/skill:scale-110"
                                                style={{ color: skill.color }}
                                            />
                                        ) : (
                                            <span className="text-sm font-bold">
                                                {skill.name.slice(0, 2)}
                                            </span>
                                        )}
                                    </div>

                                    <span
                                        className={`text-xs font-semibold ${darkMode
                                            ? "text-slate-300"
                                            : "text-slate-700"
                                            }`}
                                    >
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Skill categories */}
            <div className="grid gap-5 md:grid-cols-2">
                {skills.categories.map((category, index) => (
                    <div
                        key={category.title}
                        className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${darkMode
                            ? "border-white/10 bg-[#080d1d]/80 shadow-[0_0_25px_rgba(99,102,241,0.08)] hover:border-indigo-400/30 hover:shadow-[0_0_45px_rgba(99,102,241,0.2)]"
                            : "border-slate-200 bg-white shadow-[0_0_20px_rgba(99,102,241,0.06)] hover:border-indigo-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.14)]"
                            }`}
                    >
                        {/* Top accent */}
                        <div
                            className={`absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/0 to-transparent transition-all duration-500 group-hover:via-indigo-400/70`}
                        />

                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${darkMode
                                        ? "border-indigo-400/10 bg-indigo-500/10 text-indigo-400"
                                        : "border-indigo-100 bg-indigo-50 text-indigo-500"
                                        }`}
                                >
                                    <span className="text-sm font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
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

                            <span
                                className={`text-xs ${darkMode
                                    ? "text-slate-600"
                                    : "text-slate-400"
                                    }`}
                            >
                                {category.skills.length} skills
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all duration-300 ${darkMode
                                            ? "border-white/10 bg-white/3 text-slate-400 hover:border-indigo-400/20 hover:bg-indigo-500/6 hover:text-indigo-300"
                                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                                            }`}
                                    >
                                        {Icon ? (
                                            <Icon
                                                className="text-sm"
                                                style={{ color: skill.color }}
                                            />
                                        ) : (
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                        )}

                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;
