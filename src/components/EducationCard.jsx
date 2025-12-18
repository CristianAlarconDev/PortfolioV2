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
      <section className="space-y-2">
        <p className="text-foreground/70 text-sm">Universidad de Buenos Aires</p>
        <p className="text-primary text-sm font-medium">2025</p>
      </section>
    </div>
  )
}
