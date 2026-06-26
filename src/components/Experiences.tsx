import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const experiences = [
    {
        id: 1,
        role: "Développeur Web & Mobile",
        company: "Goodis Africa",
        period: "Sep 2023 - Présent",
        description: [
            "Développement et maintenance d'applications et de bases de données sous WordPress",
            "Optimisation des performances de l'application",
            "Développement mobile avec React Native, Flutter",
            "Support technique",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Responsable Graphiste",
        company: "Sapercom Sarl U",
        period: "Fév. 2023 - Juin 2023",
        description: [
            "Conception des flyers, logos, etc.",
            "Communication digitale (FaceBook, Instagram)",
        ],
        image: meta,
    },
    {
        id: 3,
        role: "Développeur full-stack",
        company: "Inotix",
        period: "Oct. 2022 - Janv. 2023",
        description: [
            "Conception des applications web, déploiement de solutions",
            "Mise à jour et intégration de nouvelles fonctionnalités back-end",
            "Techo utilisées : PHP/Laravel, MySQL, Firebase, JS, Shell",
        ],
        image: amazon,
    },
    {
        id: 3,
        role: "Stagiaire en Architecture Réseaux Informatiques",
        company: "SGMT",
        period: "Sept. 2021 - Mars 2022",
        description: [
            "Bases en réseaux",
            "Déploiement des caméras de surveillance",
            "Configuration et maintenance de serveurs et équipements du moulin",
        ],
        image: meta,
    },
];


const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Experiences"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                {/* div qui contient les langages */}
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            {/* Affichage d'images de chaque SKILL */}
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            {/* div qui contient les images */}
                            <div className="flex items-center">
                                <img 
                                    src={experience.image}
                                    alt={experience.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role}, {experience.company}
                                    </h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) =>
                                (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences