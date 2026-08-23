import React from 'react'
import { siteConfig } from '../config'
import { ShieldCheck } from 'lucide-react'

export default function Header({ config }) {
  const currentConfig = config || siteConfig

  return (
    <header className="w-full pt-5 pb-3 px-4 text-center bg-[#fffdfa] border-b border-sky-100">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 mb-2 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>{currentConfig.brandName} • OFFICIAL 2026 EDITION</span>
        </div>

        {/* Top Category Title */}
        <h1 className="text-[20px] sm:text-[24px] font-black text-stone-900 tracking-tight leading-tight uppercase font-sans">
          INSTAGRAM & FACEBOOK
          <span className="block text-[#1877f2] font-serif">META ADS BLUEPRINT</span>
        </h1>

        <p className="text-xs text-stone-600 font-medium mt-1">
          {currentConfig.tagline}
        </p>

      </div>
    </header>
  )
}

