import React from 'react'
import { siteConfig } from '../config'
import { Target, Sparkles, ArrowRight } from 'lucide-react'

export default function PainPoints({ onBuy, config }) {
  const currentConfig = config || siteConfig
  const { painPoints, comboText, price } = currentConfig

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-4">
        
        {/* Section Mini Header */}
        <div className="flex items-center gap-2 pb-1 border-b border-blue-200/60">
          <Target className="w-4 h-4 text-[#1877f2]" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            Kya Aap Bhi Ye Problems Face Kar Rahe Ho?
          </span>
        </div>

        {/* Bullet Points with Hand Icons (👉) */}
        <div className="space-y-3 pt-1">
          {painPoints.map((point) => (
            <div 
              key={point.id} 
              className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/60 shadow-2xs hover:bg-blue-50 transition-colors"
            >
              <span className="text-xl sm:text-2xl shrink-0 select-none leading-none pt-0.5">
                👉
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-stone-950 via-slate-900 to-stone-950 text-white p-4 shadow-lg text-center border border-amber-400/40">
          <div className="text-sm sm:text-base font-black uppercase tracking-wide text-amber-300 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>{comboText}</span>
          </div>
          <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
            Zero experience se lekar 7-Figure scaling tak, Meta Ads ka complete A to Z secret formula ab aapke paas!
          </p>

          <button
            onClick={onBuy}
            className="mt-3 w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 text-stone-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <span>Unlock 222 Pages Notes for {price || '₹249'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}

