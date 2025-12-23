import { Code2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { SiJavascript, SiReact, SiNodedotjs,SiMongodb,SiHtml5, SiGithub, SiTailwindcss} from "react-icons/si";
import { DiJava } from 'react-icons/di';
export default function TechStackCard() {
  const { translate } = useLanguage()
  const technologiesStack = [
    { name: "Java", icon: <DiJava  /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb />},
    { name:"Github", icon:<SiGithub />},
    { name:"TailwindCSS", icon:<SiTailwindcss />},
    { name:"HTML5", icon:<SiHtml5 />},
  ];

  return (
    <section id="technologies" className="bg-card rounded-xl p-6 border border-border/90 shadow-xl">
      {/* Header */}
      <section className="flex justify-center items-center gap-2 mb-4">
          <Code2 size={32} className="text-primary" />
          <h3 className="text-xl font-bold">{translate("techStackTitle")}</h3>
      </section>
      {/* Tech Stack Grid */}
      <section className="grid grid-cols-2 gap-3">
        {technologiesStack.map((tech) => (
          <div key={tech.name} className=" flex flex-col items-center justify-center rounded-lg p-3 text-center border border-border/90">
            <div className=" text-2xl mb-1">{tech.icon}
            </div>
            <p className="text-sm font-medium text-card-text">{tech.name}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
