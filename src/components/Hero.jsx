import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
    const { translate } = useLanguage()
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{translate("title")}</h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-balance">{translate("subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                {translate("viewWork")} <ArrowRight size={20} />
            </button>
            <button className="border border-border hover:bg-card bg-transparent text-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                {translate("resume")} <Download size={20} />
            </button>
            </div>
        </div>
        </section>
    )
}
