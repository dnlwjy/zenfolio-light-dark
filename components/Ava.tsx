'use client'

import { m, type MotionValue } from 'framer-motion'
import { withCursorFollow } from '@/lib/withCursorFollow'
import { useTheme } from '@/context/ThemeProvider'

interface AvaProps {
    springOpacity: MotionValue<number>,
    styles?: string
}

const AvaComponent = ({
    springOpacity,
    styles = "",
}: AvaProps) => {
    const { theme } = useTheme()

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, ease: [0.44, 0, 0.56, 1], delay: 0.3 }}
            className={styles}
            style={{ opacity: springOpacity }}
        >
            <video
                key={theme}
                src={theme === "dark" ? "/ava-black.mp4" : "/ava-white.webm"}
                className="absolute top-0 inset-x-0 mx-auto w-full"
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-[radial-gradient(farthest-side_at_center,transparent_90%,var(--black)_100%)]" />
        </m.div>
    )
}

const Ava = withCursorFollow(AvaComponent)

export default Ava
