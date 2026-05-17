'use client'

import { useState } from "react"
import type { ComponentType } from "react"

interface MagnifierOptions {
    zoom?: number
    lensSize?: number
}

export const withMagnifier = <P extends { image: string; alt: string }>(
    Component: ComponentType<P>,
    options: MagnifierOptions = {}
): ComponentType<P> => {
    const { zoom = 2, lensSize = 160 } = options

    return (props: P) => {
        const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 })
        const [lens, setLens] = useState({ visible: false, x: 0, y: 0, bgX: 0, bgY: 0, bgW: 0, bgH: 0 })

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect()

            const scale = Math.min(rect.width / naturalSize.w, rect.height / naturalSize.h)
            const renderedW = naturalSize.w * scale
            const renderedH = naturalSize.h * scale
            const offsetX = (rect.width - renderedW) / 2
            const offsetY = (rect.height - renderedH) / 2

            const cx = e.clientX - rect.left
            const cy = e.clientY - rect.top

            const bgW = renderedW * zoom
            const bgH = renderedH * zoom
            const bgX = lensSize / 2 - (cx - offsetX) * zoom
            const bgY = lensSize / 2 - (cy - offsetY) * zoom

            setLens({ visible: true, x: cx, y: cy, bgX, bgY, bgW, bgH })
        }

        return (
            <div
                className="relative w-[75%] md:h-full cursor-crosshair md:aspect-auto aspect-square select-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setLens(l => ({ ...l, visible: false }))}
            >
                <Component
                    {...props}
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement
                        setNaturalSize({ w: target.naturalWidth, h: target.naturalHeight })
                    }}
                />

                {lens.visible && (
                    <div
                        className="absolute pointer-events-none rounded-full border border-white/20 shadow-2xl"
                        style={{
                            width: lensSize,
                            height: lensSize,
                            top: lens.y - lensSize / 2,
                            left: lens.x - lensSize / 2,
                            backgroundImage: `url(${props.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: `${lens.bgW}px ${lens.bgH}px`,
                            backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
                        }}
                    />
                )}
            </div>
        )
    }
}
