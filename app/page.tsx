import Ava from '../components/Ava'
import MotionDiv from '../components/MotionDiv'
import LinkButton from '../components/LinkButton'
import CaseStudySection from '../components/CaseStudySection'
import AboutImage from '../components/AboutImage'
import { client } from '../sanity/lib/client'
import A from '../components/A'
import LoadingScreen from '../components/LoadingScreen'

const query = `*[_type == "projects" && featured == true] | order(orderRank asc) {
  _id,
  title,
  description,
  slug,
}`

const videos = ['/ava-black.mp4', '/ava-white.webm', '/cs1.webm', '/cs2.webm', '/cs3.webm']

export default async function Home() {
  const projects = await client.fetch(query)

  return (
    <LoadingScreen videos={videos}>

      {/* Hero Section */}
      <section id="hero" className="h-screen p-4">
        <div className="max-h-225 flex flex-col flex-1 py-0 h-[85%] relative">

          <Ava />

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

              <svg xmlns="http://www.w3.org/2000/svg" className="w-2.25" fill="currentColor" viewBox="-1 -1 7 12"><path stroke="var(--gray)" strokeWidth=".5" d="M.826 9.949H0L3.318.05h.826z" /></svg>
              <LinkButton
                title="View CV"
                link="https://drive.google.com/file/d/1g2-1tF6l2J3GOTJN6D0DE1R_SZnUv4wU/view"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Projects Sections */}
      <CaseStudySection
        title={projects[0].title}
        description={projects[0].description}
        link={`/case-study/${projects[0].slug.current}`}
        video="/cs1.webm"
        loopStart={3.8}
      />
      <CaseStudySection
        variant="type B"
        title={projects[1].title}
        description={projects[1].description}
        link={`/case-study/${projects[1].slug.current}`}
        video="/cs2.webm"
      />
      <CaseStudySection
        title={projects[2].title}
        description={projects[2].description}
        link={`/case-study/${projects[2].slug.current}`}
        video="/cs3.webm"
        loopStart={2.4}
      />

      {/* About me */}
      <section className="md:flex-row flex-col max-w-480 md:items-start items-center mt-0 sm:-mt-16 md:mt-0">
        <MotionDiv styles="relative w-full aspect-3/4 min-w-108 max-w-170">
          <AboutImage />
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
    </LoadingScreen>
  );
}