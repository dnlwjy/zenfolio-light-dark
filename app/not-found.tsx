import LinkButton from '../components/LinkButton'
import MotionDiv from '../components/MotionDiv'

export default function NotFound() {
    return (
        <main>
            <section className="h-screen flex-col gap-10">
                <MotionDiv variant="up" styles="flex flex-col items-center gap-5">
                    <h1>I lost this page.</h1>
                    <p className="text-center">It seems the page you are looking for does not exist.</p>
                </MotionDiv>
                <MotionDiv variant="up" del={0.5}>
                    <LinkButton
                        title="Go to Homepage"
                        link="/"
                    />
                </MotionDiv>
            </section>
        </main>
    )
}