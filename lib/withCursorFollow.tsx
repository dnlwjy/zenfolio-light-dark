"use client"

import { useState, useEffect, useRef } from "react"
import type { ComponentType } from "react"
import { m, useMotionValue, useSpring } from "framer-motion"

const settings = {
    damping: 100, // Damping: higher values are smoother
    stiffness: 150, // Stiffness: higher values increase response speed
    maxDistance: 2000, // Max distance for effect activation
    intensity: 0.1, // Effect intensity: higher values = stronger effect
}

const springConfig = {
    damping: settings.damping,
    stiffness: settings.stiffness,
}

export const withCursorFollow = <P extends object>(Component: ComponentType<P>): ComponentType<P> => {
    return (props: P) => {
        const x = useMotionValue(0)
        const y = useMotionValue(0)
        const [componentRef, setComponentRef] = useState<HTMLDivElement | null>(
            null
        )
        const isInView = useRef(false)
        const springX = useSpring(x, springConfig)
        const springY = useSpring(y, springConfig)

        useEffect(() => {
            const calculateDistance = (e: MouseEvent) => {
                if (componentRef) {
                    const rect = componentRef.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    const distanceX = e.clientX - centerX
                    const distanceY = e.clientY - centerY

                    if (
                        Math.abs(distanceX) < settings.maxDistance &&
                        Math.abs(distanceY) < settings.maxDistance
                    ) {
                        const proximityFactor =
                            1 -
                            Math.max(Math.abs(distanceX), Math.abs(distanceY)) /
                                settings.maxDistance
                        x.set(distanceX * proximityFactor * settings.intensity)
                        y.set(distanceY * proximityFactor * settings.intensity)
                    } else {
                        x.set(0)
                        y.set(0)
                    }
                }
            }

            const handleMouseMove = (e: MouseEvent) => {
                if (isInView.current) {
                    calculateDistance(e)
                }
            }

            document.addEventListener("mousemove", handleMouseMove)

            return () => {
                document.removeEventListener("mousemove", handleMouseMove)
            }
        }, [componentRef, x, y])

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        isInView.current = entry.isIntersecting
                    })
                },
                {
                    threshold: 0.1, // Adjust as necessary to define "in view"
                }
            )

            if (componentRef) {
                observer.observe(componentRef)
            }

            return () => {
                if (componentRef) {
                    observer.unobserve(componentRef)
                }
            }
        }, [componentRef])

        return (
            <m.div
                ref={setComponentRef}
                style={{
                    x: springX,
                    y: springY,
                    zIndex: (props as any).zIndex ?? 2, // Default z-index to 2
                }}
            >
                <Component {...props} />
            </m.div>
        )
    }
}
