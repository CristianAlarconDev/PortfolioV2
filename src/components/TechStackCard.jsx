import { Code2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function TechStackCard() {
  const { translate } = useLanguage()
  //cambiar los iconos por imagenes luego
  const techStack = [
    { name: "Java", icon: "☕" },
    { name: "Javascript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" }
  ]

  return (
    <div className="bg-card rounded-xl p-6 border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={24} className="text-primary" />
        <h3 className="text-xl font-bold">{translate("techStackTitle")}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="bg-secondary rounded-lg p-3 text-center hover:bg-secondary/80 transition-colors"
          >
            <div className="text-2xl mb-1">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
