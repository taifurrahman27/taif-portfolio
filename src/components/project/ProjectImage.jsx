import Image from "next/image";

function ProjectImage({ project, darkMode }) {
    if (!project.image) return null;

    return (
        <div
            className={`relative overflow-hidden border-b ${darkMode
                ? "border-white/10 bg-[#050816]"
                : "border-slate-200 bg-slate-100"
                }`}
        >
            {/* Browser top bar */}
            <div
                className={`flex h-9 items-center gap-2 border-b px-4 ${darkMode
                    ? "border-white/10 bg-[#0b1020]"
                    : "border-slate-200 bg-slate-50"
                    }`}
            >
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                <div
                    className={`ml-3 hidden h-5 flex-1 items-center rounded-md border px-3 text-[9px] sm:flex ${darkMode
                        ? "border-white/5 bg-white/3 text-slate-600"
                        : "border-slate-200 bg-white text-slate-400"
                        }`}
                >
                    {project.name.toLowerCase()}.app
                </div>
            </div>

            {/* Screenshot */}
            <div
                className={`relative overflow-hidden ${project.featured
                    ? "aspect-16/8.5"
                    : "aspect-video"
                    }`}
            >
                <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Screenshot overlay */}
                <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${darkMode
                        ? "bg-linear-to-t from-[#080d1d]/30 via-transparent to-transparent group-hover:opacity-70"
                        : "bg-linear-to-t from-white/20 via-transparent to-transparent group-hover:opacity-60"
                        }`}
                />

                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-4 right-4 translate-y-2 rounded-full border px-3 py-1.5 text-xs font-medium opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${darkMode
                        ? "border-white/10 bg-[#080d1d]/80 text-white hover:border-indigo-400/30 hover:bg-indigo-500/20"
                        : "border-slate-200 bg-white/90 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                        }`}
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectImage;
