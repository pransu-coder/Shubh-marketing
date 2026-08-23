import React from 'react'
import { siteConfig } from '../config'
import { Flame, ArrowRight, Zap } from 'lucide-react'

export default function BannerHero({ onBuy, config }) {
  const currentConfig = config || siteConfig
  const { hero } = currentConfig

  return (
    <section className="w-full px-3.5 py-3 max-w-md mx-auto">
      {/* High-Converting Banner Container with Meta Brand Gradient (Indigo / Blue / Amber) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1877f2] via-[#0d61d1] to-[#073d8a] p-5 text-white shadow-2xl shadow-blue-950/40 border border-sky-400/30">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />

        {/* Top Urgency / Promo Tag */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-[11px] font-extrabold text-amber-300 tracking-wider uppercase border border-amber-300/40 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-bounce" />
            {hero.badgeText}
          </span>
        </div>

        {/* Headline Text */}
        <div className="text-center space-y-1 mb-4">
          <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-sky-200 drop-shadow-xs">
            {hero.headlineMain}
          </h2>
          <h1 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-amber-300 drop-shadow-lg leading-tight">
            {hero.headlineHighlight}
          </h1>
          <div className="inline-block px-3 py-0.5 rounded-md bg-white/10 backdrop-blur-xs border border-white/20 text-xs sm:text-sm font-black tracking-wide text-white uppercase mt-1">
            {hero.headlineEnd}
          </div>
        </div>

        {/* Main 3D Book & Offer Graphic Area */}
        <div className="relative my-2 py-3 flex items-center justify-between gap-2">
          
          {/* Left Side: Pricing / Access Badge */}
          <div className="flex-1 flex flex-col items-center justify-center text-center z-10 space-y-2">
            <div className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-400/50 w-full shadow-lg">
              <span className="text-[10px] font-black tracking-wider uppercase text-amber-300 block">
                SPECIAL LAUNCH PRICE
              </span>
              <div className="text-3xl sm:text-[32px] font-black text-amber-400 drop-shadow-md leading-none my-1.5 font-mono">
                {hero.subPriceTag || currentConfig.price || '₹249'}
              </div>
              <div className="text-[11px] text-stone-400 line-through opacity-90">
                Original Price {hero.subPriceOriginal || currentConfig.originalPrice || '₹1,999'}
              </div>
              <div className="mt-1 text-[9px] font-extrabold text-emerald-400 uppercase bg-emerald-950/60 px-1.5 py-0.5 rounded">
                SAVE 88% TODAY
              </div>
            </div>

            {/* Instant Access Pill Badge */}
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-md border border-emerald-400/40">
              <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
              <span>{hero.instantAccessTag}</span>
            </div>
          </div>

          {/* Right Side: 3D Pure CSS EBook Graphic */}
          <div className="relative flex-1 flex justify-center items-center py-2">
            {/* 3D Book Perspective Box */}
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105" style={{ perspective: '900px' }}>
              
              {/* The 3D Book Container */}
              <div 
                className="relative w-28 sm:w-32 h-44 sm:h-48 rounded-r-md shadow-2xl transition-all duration-500"
                style={{
                  transform: 'rotateY(-22deg) rotateX(8deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '20px 20px 35px rgba(0,0,0,0.6), 5px 5px 12px rgba(0,0,0,0.4)'
                }}
              >
                {/* Book Front Cover (Meta / Indigo Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b40] via-[#1a3175] to-[#0a122c] rounded-r-md p-2 flex flex-col justify-between border-l-4 border-l-sky-950 border-t border-r border-sky-400/50">
                  
                  {/* Top Spine / Brand Stamp */}
                  <div className="text-[8px] font-black text-amber-300 tracking-wider uppercase text-center border-b border-sky-400/40 pb-1">
                    SHUBH MARKETING
                  </div>

                  {/* Main Title on Book */}
                  <div className="text-center my-auto py-1">
                    <p className="text-[12px] sm:text-[13px] font-black leading-tight text-white uppercase tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-sans">
                      <span className="text-amber-300">META ADS</span>
                      <br />
                      MASTER
                      <br />
                      COURSE
                    </p>
                    <span className="text-[8px] text-sky-200 font-bold block mt-1">
                      222 PAGES • 31 LESSONS
                    </span>
                  </div>

                  {/* Meta Blue Base Strip */}
                  <div className="bg-[#1877f2] -mx-2 -mb-2 py-1.5 px-1 text-center rounded-br-md border-t border-sky-300/50 shadow-inner">
                    <span className="text-[7px] font-black tracking-widest text-white uppercase block">
                      BEGINNER TO ADVANCED
                    </span>
                  </div>
                </div>

                {/* Book Pages Edge (Right Side Depth - 222 Pages Thickness) */}
                <div 
                  className="absolute top-1 bottom-1 -right-3 w-3 bg-gradient-to-r from-amber-50 via-slate-100 to-amber-100 rounded-r-xs shadow-inner"
                  style={{
                    transform: 'rotateY(90deg) translateZ(-1px)',
                    backgroundImage: 'repeating-linear-gradient(to bottom, #ccc 0px, #ccc 1px, #fff 1px, #fff 2.5px)'
                  }}
                />
              </div>

              {/* 3D Golden Badge (222 Pages) */}
              <div className="absolute -bottom-2 -left-3 z-20 w-11 h-11 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 p-0.5 shadow-lg shadow-black/60 border-2 border-white flex items-center justify-center animate-pulse">
                <div className="w-full h-full rounded-full bg-stone-950 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-black text-amber-300 leading-none">222</span>
                  <span className="text-[7px] font-bold text-white uppercase leading-none">PAGES</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle / Pitch */}
        <p className="text-xs text-sky-100/90 text-center leading-relaxed mb-3">
          {hero.subHeading}
        </p>

        {/* Quick Action Button Inside Banner */}
        <div className="pt-2 border-t border-sky-400/30">
          <button
            onClick={onBuy}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-black/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>GET FULL COURSE FOR {currentConfig.price || '₹249'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-sky-100 font-medium mt-2.5 px-1">
            <span>⚡ Instant PDF Download</span>
            <span>🔒 Razorpay Secured</span>
            <span>📱 Mobile & PC Compatible</span>
          </div>
        </div>

      </div>
    </section>
  )
}

