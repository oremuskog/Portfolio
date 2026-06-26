import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Planification, suivi et gestion efficace des activités. Attribution des tâches, le suivi de leur progression, la définition des échéances et la collaboration entre les différents intervenants.',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Gestion du catalogue, commandes, paiements et des livraisons. Simplifier les transactions commerciales, améliorer l"expérience d"achat en ligne.',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Compétences, réalisations, projets et expériences.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Echanger des messages instantanément via Internet. Communication rapide et fluide grâce à la transmission des messages en temps réel.',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Application permettant aux utilisateurs de consulter la disponibilité des salles et d"effectuer des réservations en quelques clics, gestion des plannings.',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Outil utilisant l"intelligence artificielle pour analyser des textes et identifier les émotions ou opinions exprimées. Il permet de classer les contenus selon un sentiment positif, négatif ou neutre afin d"aider à la prise de décision.',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];


const Projects = () => {
    return (
        <div id="Projects" className="mt-40">
            <Title title="Mes Projets"/>
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) =>(
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                        <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        {/* Affichage des différents liens */}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            {/* <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects