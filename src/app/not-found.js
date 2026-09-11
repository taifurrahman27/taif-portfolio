"use client";

import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineHome } from "react-icons/hi2";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#050816] px-5 text-white">
            <div className="w-full max-w-2xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    404 Error
                </p>

                <h1 className="text-7xl font-black tracking-tight sm:text-8xl">
                    404
                </h1>

                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                    Page not found
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    The page you&apos;re looking for doesn&apos;t exist or may have been
                    moved. Let&apos;s get you back to the portfolio.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                    >
                        <HiOutlineHome className="text-lg" />
                        Back to Home
                    </Link>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                    >
                        <HiOutlineArrowLeft className="text-lg" />
                        Go Back
                    </button>
                </div>
            </div>
        </main>
    );
}
