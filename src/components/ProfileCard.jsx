import React from "react";
import { LuLinkedin, LuGithub, LuMail, LuUser  } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext"

export default function ProfileCard() {
  const { translate } = useLanguage()

  return (
    <div className="bg-card rounded-xl p-6 border border-border/50 flex flex-col h-full">
      {/* Profile Header */}
      <section className="flex justify-items-start gap-6 items-center mb-4">
        <LuUser  size={32} color="default" />
        <h3 className="text-xl font-bold">{translate("profileTitle")}</h3>
      </section>
      <p className="text-foreground/70 mb-6">{translate("profileDesc")}</p>
      {/* Social Links */}
      <section className="flex gap-3 mt-auto">
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuMail size={20} color="default" />
        </button>
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuLinkedin size={20} color="default" />
        </button>
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuGithub size={20} color="default" />
        </button>
      </section>
    </div>
  )
}
