import ProjectCard from "../components/ProjectCard"
import TechStackCard from "../components/TechStackCard"
import ProfileCard from "../components/ProfileCard"
import EducationCard from "../components/EducationCard"
import { useLanguage } from "../contexts/LanguageContext"

export default function BentoGrid() {
  const { translate } = useLanguage()

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{translate("featuredWork")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          <ProjectCard
            title="Codigo Empleo"
            description={translate("codigoEmpleoDescription")}
            tags={["React", "Node.js", "MongoDB"]}
            image="/ecommerce-dashboard.png"
          />
          <ProjectCard
            title="Yet another Battle City"
            description={translate("gameDescription")}
            tags={["Java", "OOP", "JavaFx"]}
            image="/ecommerce-dashboard.png"
          />
          <TechStackCard />
          <ProfileCard  />
          <EducationCard />
        </div>
      </div>
    </section>
  )
}
