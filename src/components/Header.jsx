import React from 'react'
import { siteConfig } from '../config'
import { Sparkles, ShieldCheck } from 'lucide-react'

export default function Header({ config }) {
  const currentConfig = config || siteConfig

  return (
    <header className="w-full pt-6 pb-3 px-4 text-center bg-[#fffdfa] border-b border-amber-100/60">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-[11px] font-semibold tracking-wider uppercase shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>{currentConfig.brandName} • OFFICIAL GUIDE</span>
        </div>

        {/* Top Category Title (Exact style from screenshot) */}
        <h1 className="text-[26px] sm:text-[32px] font-black text-[#d68a18] tracking-tight leading-tight uppercase font-serif drop-shadow-xs">
          {currentConfig.topCategoryBadge}
        </h1>

        <p className="text-xs text-amber-800/80 font-medium mt-1">
          {currentConfig.tagline}
        </p>

      </div>
    </header>
  )
}
