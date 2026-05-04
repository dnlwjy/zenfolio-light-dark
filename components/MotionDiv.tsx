'use client'

import { m } from "framer-motion";

interface MotionDivProps {
    children: React.ReactNode;
    variant?: keyof typeof variantMotionDiv;
    del?: 0.3 | 0.5 | 0.7;
    styles?: string;
}

export const variantMotionDiv = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
}

const MotionDiv = ({
    children,
    variant = "left",
    del = 0.3,
    styles
}: MotionDivProps) => {
    return (
        <m.div
            initial={{ opacity: 0, ...variantMotionDiv[variant] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 80, mass: 1, delay: del }}
            viewport={{ once: true, amount: 0 }}
            className={styles}
        >
            {children}
        </m.div>
    );
};

export default MotionDiv;