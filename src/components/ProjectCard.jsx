import { ExternalLink } from "lucide-react"
import { LuGithub } from "react-icons/lu"

export default function ProjectCard({ title, description, tags, image, }) {
  return (
    <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow border border-border/50" >
      {/*Project Image */}
      <section className="mb-4 rounded-lg overflow-hidden bg-secondary h-40">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </section>
      {/* Project Title & Description */}
      <section>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
      </section>
      {/* Tags */}
      <section className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full text-foreground/80">
            {tag}
          </span>
        ))}
      </section>
      <section className="flex gap-3">
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ExternalLink size={24} /> Previsualización
        </button>
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <LuGithub size={24} /> Codigo
        </button>
      </section>
    </div>
  )
}
