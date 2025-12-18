import React from "react";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext"

export default function ProfileCard() {
  const { translate } = useLanguage()

  return (
    <div className="bg-card rounded-xl p-6 border border-border/50 ">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-3xl">👨‍💻</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">{translate("profileTitle")}</h3>
        </div>
      </div>
      <p className="text-foreground/70 mb-6">{translate("profileDesc")}</p>
      <div className="flex gap-3">
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuMail size={20} color="default" />
        </button>
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuLinkedin size={20} color="default" />
        </button>
        <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
          <LuGithub size={20} color="default" />
        </button>
      </div>
    </div>
  )
}
