const projects = [
    {
        number: "01",
        name: "StudyNook",
        type: "Study Space Booking Platform",
        description:
            "A study-room booking platform that lets students discover, book, and manage quiet study spaces across libraries and shared learning hubs.",
        features: [
            "Browse and filter study rooms",
            "Real-time room availability",
            "Secure authentication",
            "Study-space listing management",
        ],
        tags: ["React", "Node.js", "MongoDB", "JWT"],
        featured: true,
        image: "/projects/studynook.png",
        github: "https://github.com/taifurrahman27/ph-b13-a009",
        live: "https://ph-b13-a009.vercel.app/",
    },

    {
        number: "02",
        name: "Fable",
        type: "Digital Marketplace & Publishing Platform",
        description:
            "A modern eBook-sharing platform where readers discover and purchase original eBooks while writers publish their work and build an audience.",
        features: [
            "20+ eBook genres",
            "Writer registration & publishing",
            "Dynamic writer leaderboard",
            "Secure eBook purchasing",
        ],
        tags: ["React", "Node.js", "MongoDB", "Firebase"],
        featured: false,
        image: "/projects/fable.png",
        github: "https://github.com/taifurrahman27/ph-b13-a010",
        live: "https://ph-b13-a010.vercel.app/",
    },

    {
        number: "03",
        name: "CrowdFunding",
        type: "Full-Stack Crowdfunding Platform",
        description:
            "A full-stack crowdfunding platform where supporters discover and contribute to meaningful campaigns while creators manage campaigns, contributions, withdrawals, and platform activity.",
        tags: [
            "Next.js",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Stripe",
        ],
        featured: false,
        image: "/projects/crowdfunding2.png",
        github: "https://github.com/taifurrahman27/ph-b13-a011",
        live: "https://ph-b13-a011.vercel.app/",
    },
];

export default projects;
