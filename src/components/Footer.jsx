import {  LuGithub, LuLinkedin } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext"
import {ArrowUpRight, Mail} from "lucide-react";

export default function Footer() {
    const { translate } = useLanguage()
    const year = new Date().getFullYear()

    const email = "cristianalarcondev@gmail.com"
    const github = "https://github.com/CristianAlarconDev"
    const linkedin = "https://www.linkedin.com/in/cristian-alarcon-dev/" 

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
        } catch (e) {
            window.location.href = `mailto:${email}`
        }
    }

    return (
    <footer id="contact" className="mt-20 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
            <div>
                <h3 className="text-2xl font-bold">
                {translate("contact") || "Contacto"}
                </h3>
                <p className="text-foreground/70 mt-2 max-w-md">
                {translate("footerText") ||
                    "Si querés charlar sobre un proyecto, una oportunidad o colaborar, escribime."}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 hover:bg-card/80 transition"
                >
                    <Mail size={18} />
                    <span className="font-medium">Copiar </span>
                </button>

                <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 hover:bg-card/80 transition"
                >
                    <ArrowUpRight size={18} />
                    <span className="font-medium">Mail</span>
                </a>
                </div>
            </div>

          {/* Right */}
            <div className="flex flex-col gap-3">
                <a href={github} target="_blank"rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition"
                >
                    <LuGithub size={20} /> GitHub
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition"
                >
                    <LuLinkedin size={20} /> LinkedIn
                </a>
            </div>
        </div>
        </div>
    </footer>
    )
}
