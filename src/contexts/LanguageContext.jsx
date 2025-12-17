import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

const traducciones = {
  en: {
    home: "Home",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    title: "Ingeniero en Informática Student",
    subtitle: "Full Stack Developer",
    viewWork: "View Work",
    resume: "Resume",
    featuredWork: "Featured Work",
    techStackTitle: "Tech Stack",
    profileTitle: "About Me",
    profileDesc:
      "Developer looking for places where I can contribute and keep learning. I love solving complex problems and learning new technologies.",
    educationTitle: "Education",
    degree: "Ingeniería en Informática",
    university: "Universidad de Buenos Aires",
    footerText: "Something descriptive to go later",
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    stack: "Tecnologías",
    contact: "Contacto",
    title: "Estudiante de Ingeniería en Informática",
    subtitle: "Desarrollador Full Stack",
    viewWork: "Ver Proyectos",
    resume: "Currículum",
    featuredWork: "Proyectos Destacados",
    techStackTitle: "Tecnologías",
    profileTitle: "Sobre Mí",
    profileDesc:
      "Desarrollador en busqueda de lugares donde pueda contribuir y seguir aprendiendo. Me encanta resolver problemas complejos y aprender nuevas tecnologías.",
    educationTitle: "Educación",
    degree: "Ingeniería en Informática",
    university: "Universidad de Buenos Aires",
    footerText: "Algo descriptivo para luego",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const translate = (key) => traducciones[language][key] || traducciones.en[key]

  return <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
