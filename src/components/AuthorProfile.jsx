import React from 'react'
import { siteConfig } from '../config'
import { Award, Users, TrendingUp, MessageCircle, ShieldCheck } from 'lucide-react'

export default function AuthorProfile({ config }) {
  const currentConfig = config || siteConfig
  const { author } = currentConfig


  const whatsappHref = `https://wa.me/${author.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(author.whatsappMessage)}`

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white p-5 border border-stone-800 shadow-xl space-y-4">
        
        {/* Author Header */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center font-black text-amber-300 text-lg">
              SM
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-base text-white">
                {author.name}
              </h3>
              <ShieldCheck className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-xs text-amber-300 font-medium">
              {author.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-stone-300 leading-relaxed">
          {author.bio}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-800 text-center">
          <div className="p-2 rounded-lg bg-stone-800/50">
            <div className="text-base sm:text-lg font-black text-amber-400">5,000+</div>
            <div className="text-[10px] text-stone-400">Marketers Helped</div>
          </div>
          <div className="p-2 rounded-lg bg-stone-800/50">
            <div className="text-base sm:text-lg font-black text-amber-400">45+</div>
            <div className="text-[10px] text-stone-400">Pages Guide</div>
          </div>
          <div className="p-2 rounded-lg bg-stone-800/50">
            <div className="text-base sm:text-lg font-black text-amber-400">98%</div>
            <div className="text-[10px] text-stone-400">Positive Feedback</div>
          </div>
        </div>

        {/* Optional WhatsApp Connect Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Par Sawal Puchein</span>
        </a>

      </div>
    </section>
  )
}
