import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ title, description, tags, image, }) {
  return (
    <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow border border-border/50" >
      <div className="mb-4 rounded-lg overflow-hidden bg-secondary h-40">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full text-foreground/80">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ExternalLink size={18} /> View
        </button>
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Github size={18} /> Code
        </button>
      </div>
    </div>
  )
}
