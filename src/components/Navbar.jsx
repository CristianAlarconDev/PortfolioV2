import { useState, useEffect } from "react"
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { isDark, toggleTheme } = useTheme()
    const { language, toggleLanguage, translate } = useLanguage()
    
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-white/30 px-4 py-2 "
        }`}
        >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-xl font-bold text-primary">
                Cristian Alarcon 
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
                <Link to= "projects" smooth={true} duration={500} className=" cursor-pointer font-semibold">
                {translate("projects")}
                </Link>
                <Link to="technologies" smooth={true} duration={500} className="cursor-pointer font-semibold">
                {translate("stack")}
                </Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer font-semibold">
                {translate("contact")}
                </Link>

                <button onClick={toggleTheme}
                    className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                    aria-label="Toggle theme"
                >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button onClick={toggleLanguage}
                    className="cursor-pointer p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                    aria-label="Toggle language"
                >
                <span className="text-foreground/70">{language.toUpperCase()}</span>
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
                <Link to="projects" smooth={true} duration={500} className=" cursor-pointer block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("projects")}
                </Link>
                <Link to="technologies" smooth={true} duration={500} className=" cursor-pointer block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("stack")}
                </Link>
                <Link to="contact" smooth={true} duration={500} className=" cursor-pointer block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("contact")}
                </Link>
                <div className="mt-3 pt-3 border-t flex items-center justify-start gap-4">
                    <button onClick={toggleTheme}
                        className="p-2 rounded-lg "
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button onClick={toggleLanguage}
                        className="p-2 rounded-lg bg-card flex items-center gap-2"
                        aria-label="Toggle language"
                    >
                        <Globe size={18} />
                        <span className="text-sm font-semibold text-foreground/70">{language.toUpperCase()}</span>
                    </button>
                    </div>
                </div>
            )}
        </div>
        </nav>
    )
    }
