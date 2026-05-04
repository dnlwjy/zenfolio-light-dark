import HeroSection from '../components/HeroSection'
import CaseStudySection from '../components/CaseStudySection'
import AboutSection from '../components/AboutSection'
import { client } from '../sanity/lib/client'
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
      <HeroSection />

      {/* Projects Sections */}
      <CaseStudySection
        title={projects[0].title}
        description={projects[0].description}
        link={`/case-studies/${projects[0].slug.current}`}
        video="/cs1.webm"
        loopStart={3.8}
      />
      <CaseStudySection
        variant="type B"
        title={projects[1].title}
        description={projects[1].description}
        link={`/case-studies/${projects[1].slug.current}`}
        video="/cs2.webm"
      />
      <CaseStudySection
        title={projects[2].title}
        description={projects[2].description}
        link={`/case-studies/${projects[2].slug.current}`}
        video="/cs3.webm"
        loopStart={2.4}
      />

      {/* About me */}
      <AboutSection />
    </LoadingScreen>
  );
}