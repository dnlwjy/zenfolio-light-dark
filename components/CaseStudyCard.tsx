import LinkButton from './LinkButton'
import MotionDiv, { variantMotionDiv } from './MotionDiv'
import Divider from './Divider'
import type { Projects } from '@/types/sanity.types'

interface CaseStudyProps {
    title: Projects['title']
    desc: Projects['description']
    year?: Projects['year']
    link: string
    variant?: keyof typeof variantMotionDiv
    longDivider?: boolean
    styles?: string
}

export const CaseStudyCard = ({
    title,
    desc,
    year,
    link,
    variant,
    longDivider = false,
    styles = "",
}: CaseStudyProps) => (
    <MotionDiv
        variant={variant}
        styles={`flex flex-col gap-8 z-10 ${styles}`}
    >
        <div className="flex flex-col gap-4">
            <Divider styles={longDivider ? "w-full mb-4" : ""} title={year} />
            <h2 className="text-start">{title}</h2>
            <p className="w-[90%]">{desc}</p>
        </div>

        <LinkButton title="View Project" link={link} />
    </MotionDiv>
)

export default CaseStudyCard