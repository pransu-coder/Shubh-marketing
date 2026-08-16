import React from 'react'
import { siteConfig } from '../config'
import { Download, Sparkles, Check, Flame } from 'lucide-react'

export default function BannerHero({ onDownload, isDownloading, config }) {
  const currentConfig = config || siteConfig
  const { hero } = currentConfig


  return (
    <section className="w-full px-3.5 py-4 max-w-md mx-auto">
      {/* Orange Banner Container matching the screenshot */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f95724] via-[#f14e1c] to-[#e44212] p-5 text-white shadow-xl shadow-orange-950/20 border border-orange-400/30">
        
        {/* Subtle decorative background glow */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-800/30 rounded-full blur-2xl pointer-events-none" />

        {/* Top Urgency / Promo Tag */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 backdrop-blur-xs text-[11px] font-bold text-amber-200 tracking-wider uppercase border border-amber-300/30">
            <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-bounce" />
            {hero.badgeText}
          </span>
        </div>

        {/* Headline Text */}
        <div className="text-center space-y-0.5 mb-5">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow-md">
            {hero.headlineMain}
          </h2>
          <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-amber-200 drop-shadow-lg">
            {hero.headlineHighlight}
          </h2>
          <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-white drop-shadow-md">
            {hero.headlineEnd}
          </h2>
        </div>

        {/* Main 3D Book & Offer Graphic Area */}
        <div className="relative my-2 py-4 flex items-center justify-between gap-2">
          
          {/* Left Side: Pricing / Access Badge */}
          <div className="flex-1 flex flex-col items-center justify-center text-center z-10 space-y-2">
            <div className="bg-amber-400/20 backdrop-blur-xs p-2.5 rounded-xl border border-amber-300/40 w-full shadow-inner">
              <span className="text-[12px] font-extrabold tracking-wider uppercase text-amber-100 block">
                SPECIAL OFFER
              </span>
              <div className="text-2xl sm:text-3xl font-black text-yellow-300 drop-shadow-md leading-none my-1">
                {hero.subPriceTag}
              </div>
              <div className="text-[11px] text-orange-100 line-through opacity-80">
                Original Price {hero.subPriceOriginal}
              </div>
            </div>

            {/* Instant Access Pill Badge */}
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#10243e] text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-md border border-sky-400/40">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>{hero.instantAccessTag}</span>
            </div>
          </div>

          {/* Right Side: 3D Pure CSS EBook Graphic */}
          <div className="relative flex-1 flex justify-center items-center py-2">
            {/* 3D Book Perspective Box */}
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105" style={{ perspective: '900px' }}>
              
              {/* The 3D Book Container */}
              <div 
                className="relative w-28 sm:w-32 h-40 sm:h-44 rounded-r-md shadow-2xl transition-all duration-500"
                style={{
                  transform: 'rotateY(-22deg) rotateX(8deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '20px 20px 30px rgba(0,0,0,0.45), 5px 5px 10px rgba(0,0,0,0.3)'
                }}
              >
                {/* Book Front Cover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#e52e2e] via-[#cb2020] to-[#b01414] rounded-r-md p-2 flex flex-col justify-between border-l-4 border-l-orange-900/60 border-t border-r border-red-400/40">
                  
                  {/* Top Spine / Brand Stamp */}
                  <div className="text-[8px] font-bold text-amber-200 tracking-wider uppercase text-center border-b border-red-400/40 pb-1">
                    SHUBH EDITION
                  </div>

                  {/* Main Title on Book */}
                  <div className="text-center my-auto py-1">
                    <p className="text-[13px] sm:text-[14px] font-black leading-tight text-amber-300 uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-sans">
                      OBJECTION
                      <br />
                      HANDLING
                      <br />
                      <span className="text-white text-[11px] sm:text-[12px]">EBOOK</span>
                    </p>
                  </div>

                  {/* Blue Base Strip (matching the image) */}
                  <div className="bg-[#18449c] -mx-2 -mb-2 py-1.5 px-1 text-center rounded-br-md border-t border-blue-400/50 shadow-inner">
                    <span className="text-[7px] font-black tracking-widest text-sky-100 uppercase block">
                      CLOSING BLUEPRINT
                    </span>
                  </div>
                </div>

                {/* Book Pages Edge (Right Side Depth) */}
                <div 
                  className="absolute top-1 bottom-1 -right-2.5 w-2.5 bg-gradient-to-r from-amber-50 via-slate-100 to-amber-100 rounded-r-xs shadow-inner"
                  style={{
                    transform: 'rotateY(90deg) translateZ(-1px)',
                    backgroundImage: 'repeating-linear-gradient(to bottom, #ddd 0px, #ddd 1px, #fff 1px, #fff 3px)'
                  }}
                />
              </div>

              {/* 3D Checkmark Golden Badge (As seen on photo) */}
              <div className="absolute -bottom-2 -left-3 z-20 w-11 h-11 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 p-1 shadow-lg shadow-black/40 border-2 border-white flex items-center justify-center animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-inner">
                  <Check className="w-6 h-6 text-red-700 stroke-[3.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Button Inside Banner */}
        <div className="mt-4 pt-2 border-t border-orange-400/30">
          <button
            onClick={onDownload}
            disabled={isDownloading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-amber-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-lg shadow-black/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
            <span>{isDownloading ? 'DOWNLOADING PDF...' : 'INSTANT DOWNLOAD (PDF)'}</span>
          </button>
          
          <div className="flex items-center justify-between text-[11px] text-orange-100 font-medium mt-2 px-1">
            <span>⚡ Instant Mobile PDF</span>
            <span>🔒 Safe & Direct File</span>
            <span>📱 100% Free Access</span>
          </div>
        </div>

      </div>
    </section>
  )
}
