// Tools & Stacks
type ToolsStacksGroup = {
    name: string
    items: { name: string }[]
}

export const TOOLS_AND_STACKS: ToolsStacksGroup[] = [
    {
        name: "Tools",
        items: [
            { name: "Figma" },
            { name: "Framer" },
            { name: "Git" },
            { name: "VS Code" },
            { name: "Photoshop" },
            { name: "Illustrator" }
        ]
    },
    {
        name: "Stacks",
        items: [
            { name: "HTML" },
            { name: "Tailwind CSS" },
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" }
        ]
    }
]

// Experience
type ExperienceType = {
    company: string
    role: string
    period: string
    link?: string
}

export const EXPERIENCE: ExperienceType[] = [
    { company: "Freelance (self-employed)", role: "Designer / Developer / UX Engineer", period: "Feb 2023 - Present" },
    { company: "Flymmer", role: "Founder", period: "Nov 2025 - Present", link: "https://flymmer.com/" },
    { company: "Told", role: "Web Designer, Framer Developer", period: "Jul 2024 - May 2026", link: "https://www.told.co.nz/" },
    { company: "APEX Consulting", role: "UI UX Designer, Framer Developer", period: "Jan 2025 - Nov 2025", link: "https://apex-consulting.ai/" },
    { company: "Prestige Corp", role: "UI UX Designer, Creative Designer", period: "Mar 2022 - Mar 2023", link: "https://prestigecorp.co.id/" },
    { company: "Egeroo.ai (now Arsi.ai)", role: "Graphic Designer", period: "Aug 2020 - Jul 2021", link: "https://www.arsi.ai/" },
]