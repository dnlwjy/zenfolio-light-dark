'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { m } from 'framer-motion'
import { logicPricing } from '@/lib/logicPricing'
import type { Products } from '@/types/sanity.types'
import { urlFor } from '@/sanity/lib/image'

export const itemShadow = "[filter:drop-shadow(0px_20px_16px_rgba(0,0,0,0.35))]"

interface ItemCardProps {
    title: Products['title'];
    image: Products['coverImage'];
    link: string;
    price: Products['price'];
    styles?: string
}

const ItemCard = ({
    title,
    image,
    link,
    price,
    styles = ""
}: ItemCardProps) => {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            href={link}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex aspect-3/4 border border-(--divider) bg-(--white)/7 flex-col gap-0 hover:bg-(--white)/14 transition-colors duration-300 ${styles}`}
        >
            <div className="flex flex-1 items-center justify-center">
                <m.div
                    className="sm:w-[70%] w-[85%] aspect-square relative"
                    animate={{ scale: hovered ? 1.1 : 1 }}
                >
                    <Image
                        src={urlFor(image!).width(360).format("webp").url()}
                        alt={title ?? ""}
                        fill
                        sizes="(max-width: 680px) 35vw, (max-width: 1080px) 25vw, 350px"
                        className={`object-contain ${itemShadow}`}
                    />
                </m.div>
            </div>

            <div className="p-3 sm:p-4 lg:p-5 flex justify-between items-end gap-2">
                <p className="tag line-clamp-2">{title}</p>
                <p className="tag">{logicPricing(price)}</p>
            </div>
        </Link>
    )
}

export default ItemCard