import { ExternalLink } from "lucide-react"
import { LuGithub } from "react-icons/lu"
import { useLanguage } from "../contexts/LanguageContext";
export default function ProjectCard({ title, description, tags, image, githubLink, demoLink }) {
  const {translate} = useLanguage();
  return (
    <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-xl " >
      {/*Project Image */}
      <section className="mb-4 rounded-lg overflow-hidden bg-secondary h-40">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </section>
      {/* Project Title & Description */}
      <section>
        <h3 className="text-xl font-bold mb-2 text-foretext">{title}</h3>
        <p className="text-card-text mb-4">{description}</p>
      </section>
      {/* Tags */}
      <section className="flex flex-wrap gap-2 mb-5 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium
                      text-foretext border border-border/110">
            {tag}
          </span>
        ))}
        
      </section>
      {/* Links */}
      <section className="flex gap-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer" 
          className="flex items-center gap-2 text-foretext  transition-colors font-medium text-sm">
          <ExternalLink size={22} /> {translate("proyectCardPreview")}
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" 
          className="flex items-center gap-2 text-foretext text-primary transition-colors font-medium text-sm">
          <LuGithub size={22} /> {translate("proyectCardCode")}
        </a>
      </section>
    </div>
  )
}
