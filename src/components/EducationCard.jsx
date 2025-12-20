import { BookOpen } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function EducationCard() {
  const { translate } = useLanguage()
  return (
    <div className="bg-card rounded-xl p-6 border border-border/90">
      {/* Header */}
      <section className="flex items-center justify-start gap-6 mb-4">
        <BookOpen size={32} className="text-primary" />
        <h3 className="text-xl font-bold text-card-text">{translate("educationTitle")}</h3>
      </section>
      {/* Education Details */}
      <section className="flex flex-col gap-6">
        
        {/* Educación Formal */}
        <div className="border-l-2 border-primary pl-4">
          <h4 className="font-bold text-card-text">
            Ingeniería en Informática
          </h4>
          <p className="text-card-text">Universidad de Buenos Aires</p>
          <p className="text-card-text font-semibold">{translate("gradeStatus")}</p>
        </div>

        {/* Capacitación */}
        <div className="border-l-2 border-primary pl-4">
          <h4 className="font-bold text-card-text ">
            Capacitación Full Stack MERN
          </h4>
          <p className="text-card-text">Educación IT •</p>
          <p className="text-card-text font-semibold">{translate("bootcampStatus")}</p>
        </div>

        {/* Futuro cercano */}
        
        <div className="border-l-2 border-dashed border-primary pl-4 italic">
          <h4 className="text-card-text font-semibold ">
            Java Backend & Spring Boot
          </h4>
          <p className="text-card-text font-semibold ">
            {translate("commingSoon")}
          </p>
        </div>
      </section>
    </div>
  )
}
