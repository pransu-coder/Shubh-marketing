import React, { useState } from 'react'
import { siteConfig } from '../config'
import { BookOpen, ChevronDown, CheckCheck } from 'lucide-react'

export default function ChaptersBreakdown() {
  const { chapters } = siteConfig
  const [openChapter, setOpenChapter] = useState(null)

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index)
  }

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-3">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-1 border-b border-amber-200/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
              PDF Index & Chapters Preview
            </h3>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
            6 Chapters Inside
          </span>
        </div>

        <p className="text-xs text-stone-600">
          Is PDF ke har chapter me practical example aur real-life objection scripts diye gaye hain:
        </p>

        {/* Chapters Accordion / Cards */}
        <div className="space-y-2.5 pt-1">
          {chapters.map((ch, idx) => {
            const isOpen = openChapter === idx
            return (
              <div 
                key={ch.number}
                className="overflow-hidden rounded-xl border border-stone-200 bg-white transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleChapter(idx)}
                  className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-100/90 text-orange-800 font-mono text-xs font-bold shrink-0">
                      {ch.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-800">
                      {ch.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-3.5 pt-1 border-t border-stone-100 bg-orange-50/30 text-xs text-stone-600 leading-relaxed flex items-start gap-2 animate-fadeIn">
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ch.desc}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
