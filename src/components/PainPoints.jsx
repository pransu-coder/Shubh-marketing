import React from 'react'
import { siteConfig } from '../config'
import { AlertCircle, Target, ArrowRight } from 'lucide-react'

export default function PainPoints({ onDownload }) {
  const { painPoints, comboText } = siteConfig

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-4">
        
        {/* Section Mini Header */}
        <div className="flex items-center gap-2 pb-1 border-b border-amber-200/60">
          <Target className="w-4 h-4 text-orange-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
            Kya Aap Bhi Ye Problems Face Kar Rahe Ho?
          </span>
        </div>

        {/* Bullet Points with Hand Icons (👉) Exactly matching the image */}
        <div className="space-y-3.5 pt-1">
          {painPoints.map((point) => (
            <div 
              key={point.id} 
              className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 shadow-2xs hover:bg-amber-50 transition-colors"
            >
              <span className="text-xl sm:text-2xl shrink-0 select-none leading-none pt-0.5">
                👉
              </span>
              <p className="text-sm sm:text-[15px] font-medium text-stone-800 leading-relaxed">
                {point.text.includes('"Paise nahi hai"') ? (
                  <>
                    Face kar rahe ho baar-baar objections like{' '}
                    <strong className="text-orange-700 font-extrabold bg-orange-100/80 px-1 py-0.5 rounded">
                      "Paise nahi hai"
                    </strong>
                    ,{' '}
                    <strong className="text-orange-700 font-extrabold bg-orange-100/80 px-1 py-0.5 rounded">
                      "Time nahi hai"
                    </strong>
                    ,{' '}
                    <strong className="text-orange-700 font-extrabold bg-orange-100/80 px-1 py-0.5 rounded">
                      "Soch ke batata hoon"
                    </strong>
                    ?
                  </>
                ) : (
                  point.text
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box "This combo is for YOU!" */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white p-4 shadow-md text-center border border-amber-500/30">
          <div className="text-base sm:text-lg font-black uppercase tracking-wide text-amber-300">
            ✨ {comboText} ✨
          </div>
          <p className="text-xs text-stone-300 mt-1">
            Ab har prospect ka objection confidence ke sath handle karo aur recruits double karo!
          </p>
        </div>

      </div>
    </section>
  )
}
