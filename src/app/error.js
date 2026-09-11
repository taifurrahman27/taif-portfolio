"use client";

import { useEffect } from "react";
import { HiOutlineArrowPath, HiOutlineHome } from "react-icons/hi2";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#050816] px-5 text-white">
            <div className="w-full max-w-2xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    Something went wrong
                </p>

                <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
                    Unexpected Error
                </h1>

                <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    Something went wrong while loading this page. Please try again or
                    return to the homepage.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                    >
                        <HiOutlineArrowPath className="text-lg" />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                    >
                        <HiOutlineHome className="text-lg" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
