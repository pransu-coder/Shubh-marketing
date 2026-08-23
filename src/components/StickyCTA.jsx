import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { siteConfig } from '../config'

export default function StickyCTA({ onBuy, config }) {
  const currentConfig = config || siteConfig
  const price = currentConfig.price || '₹249'
  const originalPrice = currentConfig.originalPrice || '₹1,999'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-t border-amber-400/40 p-3 shadow-[0_-8px_25px_rgba(0,0,0,0.4)]">
      <div className="max-w-md mx-auto flex items-center gap-3">
        
        {/* Left: Price summary */}
        <div className="shrink-0">
          <div className="text-[10px] font-black uppercase text-amber-300">
            LAUNCH OFFER
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-amber-400 font-mono">
              {price}
            </span>
            <span className="text-[11px] text-stone-500 line-through">
              {originalPrice}
            </span>
          </div>
        </div>

        {/* Right: Buy Button */}
        <button
          onClick={onBuy}
          id="sticky-download-button"
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 text-stone-950 font-black text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-amber-950/40 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>ENROLL NOW • {price}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
      
      <div className="max-w-md mx-auto flex items-center justify-between text-[10px] text-stone-400 font-medium mt-1 px-1">
        <span className="flex items-center gap-1 text-emerald-400">
          <Zap className="w-3 h-3 text-emerald-400" />
          Instant PDF Unlock
        </span>
        <span>222 Pages • 31 Lessons</span>
        <span>🔒 Razorpay Secured</span>
      </div>
    </div>
  )
}

