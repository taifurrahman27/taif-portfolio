"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeUp({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    distance = 30,
    once = true,
    amount = 0.2,
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: distance }
            }
            whileInView={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
            }
            viewport={{
                once,
                amount,
            }}
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    }
            }
        >
            {children}
        </motion.div>
    );
}