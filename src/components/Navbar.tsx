import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#"
                className="flex items-center font-bold text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                KOFFI
                <span className="text-accent">DEV</span>
            </a>

            {/* Les liens de navigation sont les suivants */}
            <ul
                className="hidden md:flex space-x-4">
                    <li>
                        <a href="#Home"
                            className="btn btn-sm btn-ghost"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#About"
                            className="btn btn-sm btn-ghost"
                        >
                            À Propos
                        </a>
                    </li>
                    <li>
                        <a href="#Experiences"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes Expériences
                        </a>
                    </li>
                    <li>
                        <a href="#Projects"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes Projets
                        </a>
                    </li>

            </ul>

        </div>
    )
}

export default Navbar