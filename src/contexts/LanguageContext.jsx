import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

const traducciones = {
  en: {
    home: "Home",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    title: "Software Engineering Student",
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
    footerText: "If you'd like to chat about a project, an opportunity, or collaborate, feel free to reach out.",
    codigoEmpleoDescription: 
    "A job board platform connecting employers and job seekers with advanced search and application features.",
    gameDescription: 
    "A game built in Java using OOP principles, design patterns, featuring multiple levels, enemy AI, and power-ups.",
    proyectCardPreview: "Project Preview",
    proyectCardCode: "View Code",
    gradeStatus: "Ongoing",
    bootcampStatus: "Completed in December 2025",
    commingSoon: "Coming Soon",
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
    footerText: "Si querés charlar sobre un proyecto, una oportunidad o colaborar, escribime.",
    codigoEmpleoDescription:
      "Plataforma de empleo que vincula empresas y postulantes con sistemas de búsqueda avanzada y aplicación directa.",
    proyectCardPreview: "Previsualización",
    gameDescription: 
    "Un juego construido en Java usando principios de programación orientada a objetos, patrones de diseño, con múltiples niveles, IA enemiga y power ups.",
    proyectCardCode: "Ver Código",
    gradeStatus: "En curso",
    bootcampStatus: "Finalizado en diciembre 2025",
    commingSoon: "Próximamente",
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
