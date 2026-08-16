import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Ye eBook / PDF kaise download hogi?",
    a: "Niche diye gaye 'DOWNLOAD NOW' button par click karte hi aapke phone/computer me PDF direct download ho jayegi. Koi login ya complex process nahi hai."
  },
  {
    q: "Kya ye FLP aur sabhi Network Marketing ke liye applicable hai?",
    a: "Haan! Is guide me Forever Living Products (FLP), Direct Selling, aur sabhi Network Marketing business ke standard objections ke exact practical answers diye gaye hain."
  },
  {
    q: "Kya ye scripts Hindi me hain?",
    a: "Haan, ye easy Hinglish aur Hindi me likhi gayi hain taaki aap prospects se baat karte waqt naturally bol sakein."
  },
  {
    q: "Kya ye PDF hamesha mere paas rahegi?",
    a: "Haan, download karne ke baad aap ise anytime apne phone me offline bhi padh sakte hain aur apni team ke sath share kar sakte hain."
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-3">
        <div className="flex items-center gap-2 pb-1 border-b border-amber-200/60">
          <HelpCircle className="w-4 h-4 text-orange-600" />
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
                className="rounded-xl border border-stone-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-3 text-left flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-3 pb-3 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50 pt-2">
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
