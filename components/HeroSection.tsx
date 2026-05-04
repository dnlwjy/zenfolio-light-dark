'use client'

import { useRef } from 'react'
import { m, useScroll, useTransform, useSpring } from 'framer-motion'
import LinkButton from './LinkButton'
import MotionDiv from './MotionDiv'
import Ava from './Ava'

const springConfig = { stiffness: 132, damping: 60 }

const HeroSection = () => {
    const hero = useRef(null)
    const { scrollYProgress } = useScroll({
        target: hero,
        offset: ['start start', '25% start'],
    })
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const fadeOut = useSpring(opacity, springConfig)

    return (
        <section ref={hero} id="hero" className="h-screen p-4">
            <div className="max-h-225 flex flex-col flex-1 py-0 h-[85%] relative">

                <m.div className="flex flex-1 items-start justify-center z-0">
                    <div className="aspect-3/4 h-[138%] relative min-w-64">
                        <Ava springOpacity={fadeOut} />
                        <m.svg
                            initial={{ opacity: 0, y: 48 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 80, mass: 1, delay: 0.8 }}
                            className="absolute w-full aspect-square sm:-bottom-16 bottom-16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 524 524">
                            <path stroke="var(--divider)" d="M0 524 524 0M183.704 373l196-196" />
                        </m.svg>
                    </div>
                </m.div>

                <MotionDiv
                    del={0.5}
                    variant="up"
                    styles="flex flex-col gap-12 items-center z-10">
                    <h1>
                        <span className="text-(--gray)">I'm Daniel</span>
                        <br />
                        UX Engineer
                    </h1>
                    <div className="flex gap-6 items-center">
                        <LinkButton
                            title="Contact"
                            link="/contact"
                        />

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-1.75 lg:w-2.25" fill="currentColor" viewBox="-1 -1 7 12"><path stroke="var(--gray)" strokeWidth=".5" d="M.826 9.949H0L3.318.05h.826z" /></svg>
                        <LinkButton
                            title="View CV"
                            link="https://drive.google.com/file/d/1g2-1tF6l2J3GOTJN6D0DE1R_SZnUv4wU/view"
                        />
                    </div>
                </MotionDiv>
            </div>
        </section>

    )
}

export default HeroSection;