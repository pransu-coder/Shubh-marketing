import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { siteConfig } from '../config'

export default function FAQ({ config }) {
  const currentConfig = config || siteConfig
  const [openIdx, setOpenIdx] = useState(0)
  const faqs = currentConfig.faqs || []

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-3">
        <div className="flex items-center gap-2 pb-1 border-b border-blue-200/60">
          <HelpCircle className="w-4 h-4 text-[#1877f2]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx}
                className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-blue-50/20 pt-2 animate-fadeIn">
                    {faq.a}
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
