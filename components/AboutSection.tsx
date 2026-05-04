'use client'

import Image from 'next/image'
import { useTheme } from "@/context/ThemeProvider"
import D from "@/public/me-dark.webp"
import L from "@/public/me-light.webp"
import MotionDiv from './MotionDiv'
import A from './A'

const AboutSection = () => {
    const { theme } = useTheme()

    return (
        <section className="md:flex-row flex-col max-w-480 md:items-start items-center mt-0 sm:-mt-16 md:mt-0">
        <MotionDiv styles="relative w-full aspect-3/4 min-w-108 max-w-170">
          <Image
            src={theme === "dark" ? D : L}
            alt="Picture of Daniel Wijaya"
            fill
            placeholder="blur"
            sizes="(max-width: 680px) 100vw, 680px"
            className="object-cover"
        />
          <div className="absolute z-10 inset-0 bg-[radial-gradient(farthest-side_at_center,#12121200_90%,var(--black)_100%)]" />
          <svg
            className="absolute w-full aspect-square -bottom-16 z-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 524 524">
            <path stroke="var(--divider)" d="M0 524 524 0M183.704 373l196-196" />
          </svg>
        </MotionDiv>

        <MotionDiv
          variant='right'
          del={0.5}
          styles="w-full mt-10 max-w-120">
          <p>
            I currently live in Jakarta working as a remote worker for global clients from different countries. My projects include UI UX design, Framer development, and Next.js development. Being comfortable with design and code allows me to work end-to-end with team including with backend developers. I specialize in design-to-code implementation, design systems, and advocating UX. Though I might be associated with engineer, I'm also responsible to scale businesses.<br /><br />
            I am currently available for a full-time role for UX engineer role in Australia or Singapore. Outside work, I do my own personal projects such as making <A link="https://www.youtube.com/@danielwijaya" title="new-age music" /> for piano and strings.
          </p>
        </MotionDiv>
      </section>
        
    )
}

export default AboutSection;