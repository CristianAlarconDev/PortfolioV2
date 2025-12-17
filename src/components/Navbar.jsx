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
        <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <Link href="#" className="text-xl font-bold text-primary">
                Cristian Alarcon 
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
                <Link href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
                {translate("home")}
                </Link>
                <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                {translate("projects")}
                </Link>
                <Link href="#stack" className="text-foreground/70 hover:text-foreground transition-colors">
                {translate("stack")}
                </Link>
                <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                {translate("contact")}
                </Link>

                <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                aria-label="Toggle theme"
                >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                aria-label="Toggle language"
                >
                <Globe size={20} />
                <span className="text-xs ml-1">{language.toUpperCase()}</span>
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
                <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                aria-label="Toggle theme"
                >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                aria-label="Toggle language"
                >
                <Globe size={20} />
                </button>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
                <Link href="#home" className="block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("home")}
                </Link>
                <Link href="#projects" className="block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("projects")}
                </Link>
                <Link href="#stack" className="block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("stack")}
                </Link>
                <Link href="#contact" className="block text-foreground/70 hover:text-foreground transition-colors py-2">
                {translate("contact")}
                </Link>
            </div>
            )}
        </div>
        </nav>
    )
    }
