import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

function Footer({ darkMode }) {
    const currentYear = new Date().getFullYear();

    const socialLinkClass = `flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${darkMode
            ? "border-white/10 bg-white/5 text-slate-400 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-400/40 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
        }`;

    return (
        <footer
            className={`border-t ${darkMode ? "border-white/5" : "border-slate-200"
                }`}
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <p
                    className={`text-center text-sm ${darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                >
                    © {currentYear}{" "}
                    <span
                        className={`font-medium ${darkMode
                                ? "text-slate-300"
                                : "text-slate-700"
                            }`}
                    >
                        MD. TAIFUR RAHMAN JASIM
                    </span>
                    . All rights reserved.
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/taifurrahman27"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={socialLinkClass}
                    >
                        <FaGithub className="text-lg" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/taifurrahmanjs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={socialLinkClass}
                    >
                        <FaLinkedinIn className="text-lg" />
                    </a>

                    <a
                        href="mailto:taif.jnu@gmail.com"
                        aria-label="Email"
                        className={socialLinkClass}
                    >
                        <HiOutlineEnvelope className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
