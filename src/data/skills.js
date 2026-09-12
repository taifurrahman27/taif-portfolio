import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiFirebase,
    SiGit,
    SiGithub,
    SiVercel,
    SiPostman,
    SiNpm,
} from "react-icons/si";

const skills = {
    coreStack: [
        {
            name: "JavaScript",
            icon: SiJavascript,
            color: "#F7DF1E",
        },
        {
            name: "React",
            icon: SiReact,
            color: "#61DAFB",
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            color: "#FFFFFF",
        },
        {
            name: "Node.js",
            icon: SiNodedotjs,
            color: "#339933",
        },
        {
            name: "Express.js",
            icon: SiExpress,
            color: "#FFFFFF",
        },
        {
            name: "MongoDB",
            icon: SiMongodb,
            color: "#47A248",
        },
        {
            name: "Git",
            icon: SiGit,
            color: "#F05032",
        },
        {
            name: "GitHub",
            icon: SiGithub,
            color: "#FFFFFF",
        },
    ],

    categories: [
        {
            title: "Languages",
            skills: [
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    color: "#F7DF1E",
                },
                {
                    name: "TypeScript",
                    icon: SiTypescript,
                    color: "#3178C6",
                },
                {
                    name: "HTML5",
                    icon: SiHtml5,
                    color: "#E34F26",
                },
                {
                    name: "CSS3",
                    icon: SiCss,
                    color: "#1572B6",
                },
            ],
        },
        {
            title: "Frontend",
            skills: [
                {
                    name: "React.js",
                    icon: SiReact,
                    color: "#61DAFB",
                },
                {
                    name: "Next.js",
                    icon: SiNextdotjs,
                    color: "#FFFFFF",
                },
                {
                    name: "Redux",
                    icon: SiRedux,
                    color: "#764ABC",
                },
                {
                    name: "Tailwind CSS",
                    icon: SiTailwindcss,
                    color: "#06B6D4",
                },
                {
                    name: "Bootstrap",
                    icon: SiBootstrap,
                    color: "#7952B3",
                },
                {
                    name: "Framer Motion",
                    icon: SiFramer,
                    color: "#FFFFFF",
                },
            ],
        },
        {
            title: "Backend",
            skills: [
                {
                    name: "Node.js",
                    icon: SiNodedotjs,
                    color: "#339933",
                },
                {
                    name: "Express.js",
                    icon: SiExpress,
                    color: "#FFFFFF",
                },
                {
                    name: "REST APIs",
                },
                {
                    name: "JWT Authentication",
                },
                {
                    name: "Server-Side Logic",
                },
            ],
        },
        {
            title: "Database",
            skills: [
                {
                    name: "MongoDB",
                    icon: SiMongodb,
                    color: "#47A248",
                },
                {
                    name: "Mongoose",
                    icon: SiMongoose,
                    color: "#880000",
                },
                {
                    name: "Firebase Authentication",
                    icon: SiFirebase,
                    color: "#FFCA28",
                },
                {
                    name: "NoSQL",
                },
            ],
        },
        {
            title: "Tools",
            skills: [
                {
                    name: "Git",
                    icon: SiGit,
                    color: "#F05032",
                },
                {
                    name: "GitHub",
                    icon: SiGithub,
                    color: "#FFFFFF",
                },
                {
                    name: "VS Code",
                },
                {
                    name: "Figma",
                },
                {
                    name: "Vercel",
                    icon: SiVercel,
                    color: "#FFFFFF",
                },
                {
                    name: "Postman",
                    icon: SiPostman,
                    color: "#FF6C37",
                },
                {
                    name: "npm",
                    icon: SiNpm,
                    color: "#CB3837",
                },
                {
                    name: "CI/CD",
                },
            ],
        },
    ],
};

export default skills;
