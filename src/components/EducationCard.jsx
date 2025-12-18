import { BookOpen } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function EducationCard() {
  const { translate } = useLanguage()
  return (
    <div className="bg-card rounded-xl p-6 border border-border/50">
      {/* Header */}
      <section className="flex items-center justify-start gap-6 mb-4">
        <BookOpen size={32} className="text-primary" />
        <h3 className="text-xl font-bold">{translate("educationTitle")}</h3>
      </section>
      {/* Education Details */}
      <section className="flex flex-col gap-6">
        
        {/* Educación Formal */}
        <div className="border-l-2 border-primary pl-4">
          <h4 className="font-bold text-foreground/70">
            Ingeniería en Informática
          </h4>
          <p className="text-foreground/70">Universidad de Buenos Aires</p>
          <p className="text-foreground/70 font-semibold">Actualmente 3er año</p>
        </div>

        {/* Capacitación */}
        <div className="border-l-2 border-border pl-4">
          <h4 className="font-bold text-foreground/70  ">
            Capacitación Full Stack MERN
          </h4>
          <p className="text-foreground">Educación IT •</p>
          <p className="text-foreground/70 font-semibold ">Finalizado en diciembre 2025</p>
        </div>

        {/* Futuro cercano */}
        
        <div className="border-l-2 border-dashed border-border pl-4 italic">
          <h4 className="text-foreground/70 font-semibold ">
            Java Backend & Spring Boot
          </h4>
          <p className="text-foreground/70 font-semibold ">
            Próximamente
          </p>
        </div>
        

      </section>
    </div>
  )
}
