"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
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
                    : { opacity: 0 }
            }
            whileInView={{ opacity: 1 }}
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
                        ease: "easeOut",
                    }
            }
        >
            {children}
        </motion.div>
    );
}
