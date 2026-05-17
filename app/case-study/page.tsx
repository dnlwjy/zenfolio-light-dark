import MotionDiv from '../../components/MotionDiv'
import { client } from '../../sanity/lib/client'
import TitleCard from '../../components/TitleCard'
import { generateSEO } from '@/lib/seo'
import type { Projects } from '@/types/sanity.types'

// 1. Rendering config: switched to SSG - better performance and SEO, but has to redeploy every time there's data change
export const dynamic = 'force-static'

// 2. metadata (SEO / head)
const description = "Archive of client-based projects from 2024 onward."
export const metadata = generateSEO({
    title: "Case Studies | Daniel Wijaya",
    description,
    url: "/case-study",
})

// 3. queries
const query = `*[_type == "projects"] | order(year desc, orderRank asc) {
    _id,
    title,
    description,
    year,
    slug,
}`

export const listStyles = "flex flex-col gap-20 w-full"

export default async function CaseStudies() {
    const caseStudies = await client.fetch(query)

    return (
        <main>
            <section className="sm">
                
                <MotionDiv variant="up" styles="flex flex-col gap-6 items-center w-full">
                    <h1>
                        <span className="text-(--gray)">Archive of</span>
                        <br />
                        Case Studies
                    </h1>
                    <p className="text-center">{description}</p>
                </MotionDiv>

                <div className={listStyles}>
                    {caseStudies.map((e: Projects) => (
                        <TitleCard
                            key={e._id}
                            title={e.title}
                            desc={e.description}
                            year={e.year}
                            link={`/case-study/${e.slug!.current}`}
                            longDivider
                            styles="w-full"
                        />
                    ))}
                </div>

            </section>
        </main>
    )
}