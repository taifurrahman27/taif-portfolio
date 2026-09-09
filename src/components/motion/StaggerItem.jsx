"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function StaggerItem({
    children,
    className = "",
    distance = 25,
}) {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: shouldReduceMotion
            ? {
                opacity: 1,
            }
            : {
                opacity: 0,
                y: distance,
            },

        visible: {
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? {
                    duration: 0,
                }
                : {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
