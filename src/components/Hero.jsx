import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { Link } from "react-scroll"

export default function Hero() {
    const { translate } = useLanguage()
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{translate("title")}</h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-balance">{translate("subtitle")}</p>
            {/* Call to Action Buttons */}
            <section className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="projects" smooth={true} duration={500}
                    className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                    {translate("viewWork")} <ArrowRight size={18} />
                </Link>
                <a href="/public/CV-Full-Stack.pdf" download="CV_Cristian_Alarcon.pdf"
                    className="border border-border hover:bg-secondary/50 bg-transparent text-foreground px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                    {translate("resume")} <Download size={18} />
                </a>
            </section>
        </div>
        </section>
    )
}
