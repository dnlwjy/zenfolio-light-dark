'use client'

import { withMagnifier } from "@/lib/withMagnifier"
import Image from "next/image"

const itemShadow = "filter-[drop-shadow(0px_20px_16px_rgba(0,0,0,0.35))]"

interface BaseImageProps {
    image: string
    alt: string
    styles?: string
}

const BaseImage = ({
    image,
    alt,
    styles = "",
    onLoad,
}: BaseImageProps & { onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void }) => (
    <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 680px) 90vw, 480px"
        className={`object-contain select-none ${itemShadow} ${styles}`}
        onLoad={onLoad}
    />
)

const ItemZoom = withMagnifier(BaseImage)

export default ItemZoom