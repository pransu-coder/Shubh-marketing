import React from 'react'
import { siteConfig } from '../config'
import { ShieldCheck } from 'lucide-react'

export default function Footer({ config }) {
  const currentConfig = config || siteConfig

  return (
    <footer className="w-full pt-6 pb-28 px-4 text-center bg-stone-100 border-t border-stone-200/80 text-stone-500 text-xs">
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-center gap-1 font-bold text-stone-700">
          <ShieldCheck className="w-4 h-4 text-orange-600" />
          <span>{currentConfig.brandName}</span>
        </div>
        
        <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs mx-auto">
          Crafted for Network Marketers, FLP Distributors & Direct Sellers to achieve sales mastery.
        </p>

        <div className="pt-2 border-t border-stone-200/60 text-[10px] text-stone-400">
          © {new Date().getFullYear()} {currentConfig.brandName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
