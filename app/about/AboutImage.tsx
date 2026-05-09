'use client'

import Image from 'next/image'
import { useTheme } from "@/context/ThemeProvider"
import D from "@/public/about-dark.webp"
import L from "@/public/about-light.webp"

const AboutImage = () => {
    const { theme } = useTheme()

    return (
        <Image
            src={theme === "dark" ? L : D}
            alt="About me"
            width={1920} height={1080}
            placeholder="blur"
            className="object-cover w-full"
        />
    )
}

export default AboutImage;