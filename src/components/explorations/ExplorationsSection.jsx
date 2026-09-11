import explorations from "@/data/explorations";

function ExplorationsSection({ darkMode }) {
    return (
        <section
            id="exploring"
            className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    05 — Currently Exploring
                </p>

                <h2
                    className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Exploring what comes next.
                </h2>

                <p
                    className={`mt-5 text-base leading-7 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    Continuously learning new technologies and strengthening
                    the engineering skills behind the products I build.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {explorations.map((exploration) => {
                    const Icon = exploration.icon;

                    return (
                        <div
                            key={exploration.title}
                            className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${darkMode
                                    ? "border-white/10 bg-[#080d1d]/80 shadow-[0_0_25px_rgba(99,102,241,0.08)] hover:border-indigo-400/30 hover:shadow-[0_0_45px_rgba(99,102,241,0.2),0_0_80px_rgba(139,92,246,0.1)]"
                                    : "border-slate-200 bg-white shadow-[0_0_20px_rgba(99,102,241,0.06)] hover:border-indigo-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15),0_0_70px_rgba(139,92,246,0.08)]"
                                }`}
                        >
                            {/* Hover accent */}
                            <div
                                className={`absolute inset-x-6 top-0 h-px transition-all duration-500 ${darkMode
                                        ? "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/70"
                                        : "bg-linear-to-r from-transparent via-indigo-400/0 to-transparent group-hover:via-indigo-400/50"
                                    }`}
                            />

                            {/* Content */}
                            <div className="flex items-start gap-4">
                                <div
                                    className={`shrink-0 rounded-xl border p-3 transition-all duration-300 ${darkMode
                                            ? "border-indigo-400/10 bg-indigo-500/10 text-indigo-400 group-hover:border-indigo-400/20 group-hover:bg-indigo-500/15 group-hover:text-indigo-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                                            : "border-indigo-100 bg-indigo-50 text-indigo-500 group-hover:border-indigo-200 group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]"
                                        }`}
                                >
                                    <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <div>
                                    <h3
                                        className={`font-semibold ${darkMode
                                                ? "text-white"
                                                : "text-slate-900"
                                            }`}
                                    >
                                        {exploration.title}
                                    </h3>

                                    <p
                                        className={`mt-2 text-sm leading-6 ${darkMode
                                                ? "text-slate-400"
                                                : "text-slate-600"
                                            }`}
                                    >
                                        {exploration.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ExplorationsSection;
