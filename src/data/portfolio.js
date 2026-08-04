const PORTFOLIO = {
    name: "Rudra",

    location: "India",

    description: "Pre-Final Year B.Tech Student passionate about Software Development, Competitive Programming, and AI. I love building cool things and solving challenging problems.",

    summary: "I am an Information Technology undergraduate with a strong interest in software development, competitive programming, and building technology that solves real-world problems. I enjoy transforming ideas into scalable, user-focused applications while continuously strengthening my problem-solving and analytical skills through competitive programming and hackathons. Driven by curiosity and a commitment to continuous learning, I am always exploring new technologies and taking on projects that challenge me to grow as a developer and engineer.",

    avatarUrl: "/images/profile.jpg",

    skills: [
        { name: "C++", icon: "cpp" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Git", icon: "git" },
        { name: "VS Code", icon: "vscode" },
    ],

    contact: {},

    projects: [
        {
            title: "ReLeet",
            description: "Chrome extension that saves failed LeetCode problems and automatically schedules revisions using spaced repetition to improve long-term retention.",
            image: "/images/releet.png",
            tech: [
                { name: "React", icon: "react" },
                { name: "JavaScript", icon: "javascript" },
                { name: "Vite", icon: "vite" }
            ],
            github: "https://github.com/itisrudraa/releet",
            live: "",
        },

        {
            title: "OutDOM",
            description: "A lightweight Virtual DOM library built from scratch to understand rendering, reconciliation, diffing, and efficient DOM updates without using React.",
            image: "/images/outdom.png",
            tech: [
                { name: "JavaScript", icon: "javascript" },
                { name: "HTML", icon: "html" },
                { name: "CSS", icon: "css" }
            ],
            github: "https://github.com/itisrudraa/outdom",
            live: "",
        },

        {
            title: "OurVault",
            description: "Frontend for a decentralized savings vault built on Algorand, allowing users to set savings goals, track progress, and securely manage funds.",
            image: "/images/ourvault.png",
            tech: [
                { name: "React", icon: "react" },
                { name: "Tailwind", icon: "tailwind" },
                { name: "Algorand", icon: "algorand" }
            ],
            github: "https://github.com/itisrudraa/ourvault",
            live: "",
        },
    ],

    education: [],

    hackathons: [],
}

export default PORTFOLIO;