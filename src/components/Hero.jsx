import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { Link } from "react-scroll"

export default function Hero() {
    const { translate } = useLanguage()
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            <div className="absolute inset-0 z-0">
            <img src="/fachada.jpg" alt="Facultad de Ingeniería UBA" 
                className="w-full h-full object-cover "
            />
            </div>   
        {/* Gradiente claro semitransparente */}
        <div className="absolute inset-0 z-10 bg-linear-to-b via-white/52"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{translate("title")}</h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-balance">{translate("subtitle")}</p>
            {/* Call to Action Buttons */}
            <section className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="projects" smooth={true} duration={500}
                    className="cursor-pointer bg-black/60  text-white px-8  rounded-xl font-semibold 
                    flex items-center justify-center gap-2 hover:bg-black/70 ">
                    {translate("viewWork")} <ArrowRight size={18} />
                </Link>
                <a href="/public/CV-Full-Stack.pdf" download="CV_Cristian_Alarcon.pdf"
                    className="bg-white/30 border  text-black px-8 py-3 rounded-xl font-semibold 
                    flex items-center justify-center gap-2 hover:bg-white/50 "
                >
                    {translate("resume")} <Download size={18} />
                </a>
            </section>
        </div>
        </section>
    )
}
