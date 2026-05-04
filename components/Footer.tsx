import A from './A'

interface FooterProps {
    styles?: string;
}

const socialMedia = [
    { name: "Instagram", link: "https://www.instagram.com/dnlwjy_/" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/dnlwjy/" },
    { name: "GitHub", link: "https://github.com/dnlwjy" },
    { name: "Spotify", link: "https://open.spotify.com/artist/0VyiZOjAOfYc0gV7EbT4v0" },
]

const Footer = ({
    styles = "",
}: FooterProps) => {
    return (
        <footer className={`flex flex-col gap-16 py-16 px-5 w-full items-center ${styles}`}>
            
            <span className="flex flex-wrap gap-6 items-center justify-center">
                {socialMedia.map((e) => (
                    <A
                        title={e.name}
                        key={e.name}
                        link={e.link}
                    />
                ))}
            </span>

            <small>© {new Date().getFullYear()} Daniel Wijaya</small>
        
        </footer>
    )
}

export default Footer;