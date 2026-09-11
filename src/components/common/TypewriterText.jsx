"use client";

import { useEffect, useState } from "react";

function TypewriterText({
    firstText,
    secondText,
    speed = 65,
    delay = 500,
    separator = "|",
    className = "",
    secondClassName = "",
}) {
    const [firstDisplay, setFirstDisplay] = useState("");
    const [secondDisplay, setSecondDisplay] = useState("");
    const [phase, setPhase] = useState("waiting");

    useEffect(() => {
        const timer = setTimeout(() => {
            setPhase("first");
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (phase !== "first") return;

        if (firstDisplay.length < firstText.length) {
            const timer = setTimeout(() => {
                setFirstDisplay(
                    firstText.slice(0, firstDisplay.length + 1)
                );
            }, speed);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setPhase("separator");
        }, 350);

        return () => clearTimeout(timer);
    }, [phase, firstDisplay, firstText, speed]);

    useEffect(() => {
        if (phase !== "separator") return;

        const timer = setTimeout(() => {
            setPhase("second");
        }, 300);

        return () => clearTimeout(timer);
    }, [phase]);

    useEffect(() => {
        if (phase !== "second") return;

        if (secondDisplay.length < secondText.length) {
            const timer = setTimeout(() => {
                setSecondDisplay(
                    secondText.slice(0, secondDisplay.length + 1)
                );
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [phase, secondDisplay, secondText, speed]);

    const showSeparator =
        phase === "separator" ||
        phase === "second" ||
        secondDisplay.length === secondText.length;

    const isTyping =
        phase === "waiting" ||
        phase === "first" ||
        phase === "separator" ||
        (phase === "second" &&
            secondDisplay.length < secondText.length);

    return (
        <span className={`inline-flex items-center ${className}`}>
            <span>{firstDisplay}</span>

            {showSeparator && (
                <span
                    className="mx-2 text-indigo-400"
                    style={{
                        textShadow:
                            "0 0 10px rgba(129, 140, 248, 0.8)",
                    }}
                >
                    {separator}
                </span>
            )}

            <span className={secondClassName}>{secondDisplay}</span>

            {isTyping && (
                <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[1.1em] w-0.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.9)] animate-pulse"
                />
            )}
        </span>
    );
}

export default TypewriterText;
