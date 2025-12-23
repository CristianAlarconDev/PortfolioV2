import React from "react";
import { LuLinkedin, LuGithub, LuMail, LuUser  } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext"

export default function ProfileCard() {
  const { translate } = useLanguage()

  return (
    <section id="contact" className="bg-card rounded-xl p-6 border border-border/90 flex flex-col h-full shadow-xl">
      {/* Profile Header */}
      <section className="flex justify-items-start gap-6 items-center mb-4">
        <LuUser  size={32} color="default" />
        <h3 className="text-xl font-bold text-card-text">{translate("profileTitle")}</h3>
      </section>
      <p className="text-card-text mb-6">{translate("profileDesc")}</p>
      {/* Social Links */}
      <section className="flex gap-2 mt-auto">
        <a href={import.meta.env.VITE_EMAIL_URL || ""} target="_blank" rel="noopener noreferrer" 
        className="p-3 transition-colors flex items-center justify-center text-card-text"
        aria-label="Email"
        >
          <div className="flex items-center justify-center gap-2">
            <LuMail size={20} color="default" />
            <span className="text-card-text">Email</span>
          </div>
        </a>

        <a href={import.meta.env.VITE_LINKEDIN_URL || ""} target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-lg transition-colors flex items-center justify-center text-card-text"
          aria-label="LinkedIn"
        >
          <div className="flex items-center justify-center gap-2">
            <LuLinkedin size={20} color="default" />
          <span className="text-card-text">Linkedin</span>
          </div>
        </a>
        <a href={import.meta.env.VITE_GITHUB_URL || ""} target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-lg transition-colors flex items-center justify-center text-card-text"
          aria-label="GitHub"
        >
          <div className="flex items-center justify-center gap-2">
            <LuGithub size={20} color="default" />
          <span className="text-card-text">Github</span>
          </div>
        </a>
      </section>
    </section>
  )
}
