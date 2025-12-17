import { BookOpen } from "lucide-react"

export default function EducationCard() {

  return (
    <div className="bg-card rounded-xl p-6 border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={24} className="text-primary" />
        <h3 className="text-xl font-bold">Ingeniería Informática</h3>
      </div>
      <div className="space-y-2">
        <p className="text-foreground/70 text-sm">Universidad de Buenos Aires</p>
        <p className="text-primary text-sm font-medium">2025</p>
      </div>
    </div>
  )
}
