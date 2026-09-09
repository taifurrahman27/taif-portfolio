"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function StaggerContainer({
    children,
    className = "",
    delay = 0.1,
    stagger = 0.1,
    once = true,
    amount = 0.15,
}) {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: shouldReduceMotion ? 1 : 0,
        },
        visible: {
            opacity: 1,
            transition: shouldReduceMotion
                ? {
                    duration: 0,
                }
                : {
                    delayChildren: delay,
                    staggerChildren: stagger,
                },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                amount,
            }}
        >
            {children}
        </motion.div>
    );
}
