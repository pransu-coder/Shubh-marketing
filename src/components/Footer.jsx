import React from 'react'
import { siteConfig } from '../config'
import { ShieldCheck, Lock } from 'lucide-react'

export default function Footer({ config }) {
  const currentConfig = config || siteConfig

  return (
    <footer className="w-full pt-6 pb-28 px-4 text-center bg-stone-100 border-t border-stone-200/80 text-stone-500 text-xs">
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-center gap-1 font-bold text-stone-700">
          <ShieldCheck className="w-4 h-4 text-[#1877f2]" />
          <span>{currentConfig.brandName} • {currentConfig.authorName || 'Shubham Gaur'}</span>
        </div>
        
        <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs mx-auto">
          Complete 222-Page Meta Ads Master Course (31 Lessons) — Crafted for Business Owners, Students & Marketers.
        </p>

        <div className="flex items-center justify-center gap-3 text-[10px] text-stone-400 font-medium pt-1">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> 100% Secure Razorpay Payment
          </span>
          <span>•</span>
          <span>Instant PDF Download</span>
        </div>

        <div className="pt-2 border-t border-stone-200/60 text-[10px] text-stone-400">
          © {new Date().getFullYear()} {currentConfig.brandName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

