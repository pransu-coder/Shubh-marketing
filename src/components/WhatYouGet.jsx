import React from 'react'
import { siteConfig } from '../config'
import { CheckCircle2, Gift, FileText } from 'lucide-react'

export default function WhatYouGet({ onDownload }) {
  const { whatYouGet } = siteConfig

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-4">
        
        {/* Section Heading */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight font-serif flex items-center gap-2">
            <Gift className="w-5 h-5 text-orange-600" />
            What You'll Get:
          </h2>
          <p className="text-xs text-stone-600">
            Is complete guide mein aapko milenge tested blueprints & practical scripts:
          </p>
        </div>

        {/* What You Get Points with Pushpin Icon 📌 (Exact match from screenshot) */}
        <div className="space-y-3">
          {whatYouGet.map((item) => (
            <div 
              key={item.id}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-amber-400/70 transition-all group"
            >
              <span className="text-xl shrink-0 select-none pt-0.5 group-hover:scale-110 transition-transform">
                📌
              </span>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
