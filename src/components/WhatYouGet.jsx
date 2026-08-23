import React from 'react'
import { siteConfig } from '../config'
import { Gift, ArrowRight } from 'lucide-react'

export default function WhatYouGet({ onBuy, config }) {
  const currentConfig = config || siteConfig
  const { whatYouGet, price } = currentConfig

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-4">
        
        {/* Section Heading */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight font-serif flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#1877f2]" />
            What You'll Get Inside:
          </h2>
          <p className="text-xs text-stone-600">
            Is 222-page practical course mein aapko milenge step-by-step master blueprints:
          </p>
        </div>

        {/* What You Get Points with Pushpin Icon 📌 */}
        <div className="space-y-3">
          {whatYouGet.map((item) => (
            <div 
              key={item.id}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:border-[#1877f2]/50 hover:shadow-xs transition-all group"
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

        {/* Mini CTA */}
        <button
          onClick={onBuy}
          className="w-full py-3 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-300 text-blue-900 font-extrabold text-xs uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
        >
          <span>Get Instant Access to All 6 Modules ({price || '₹249'})</span>
          <ArrowRight className="w-4 h-4 text-blue-700" />
        </button>

      </div>
    </section>
  )
}

