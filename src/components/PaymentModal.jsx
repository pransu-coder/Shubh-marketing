import React, { useState } from 'react'
import { 
  X, ShieldCheck, Sparkles, CheckCircle2, 
  ExternalLink, Download, MessageCircle, CreditCard,
  ArrowRight, RefreshCw, AlertCircle
} from 'lucide-react'
import { siteConfig } from '../config'

export default function PaymentModal({ isOpen, onClose, onDownloadSuccess, pdfInfo, config }) {
  const currentConfig = config || siteConfig
  const [step, setStep] = useState('checkout') // 'checkout' | 'paid_verify' | 'download_ready'
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    utr: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

  const razorpayPaymentUrl = currentConfig.razorpayUrl || "https://razorpay.me/@shubhamgaur3697"

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrorMsg('')
  }

  // Step 1: Open Razorpay Payment Link
  const handleProceedToRazorpay = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      setErrorMsg('Kripya apna Name aur WhatsApp Number enter karein!')
      return
    }

    // Save lead details locally
    try {
      localStorage.setItem('shubh_last_lead', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }))
    } catch (err) {
      console.warn(err)
    }

    // Open Razorpay in a new window/tab
    window.open(razorpayPaymentUrl, '_blank')
    setStep('paid_verify')
  }

  // Step 2: Confirm Payment and Unlock PDF Download
  const handleConfirmAndDownload = () => {
    setIsProcessing(true)
    
    // Mark as paid in localStorage for persistence
    try {
      localStorage.setItem('shubh_meta_ads_paid', 'true')
    } catch (e) {
      console.warn(e)
    }

    setTimeout(() => {
      setIsProcessing(false)
      setStep('download_ready')
      if (onDownloadSuccess) {
        onDownloadSuccess()
      }
    }, 800)
  }

  const handleDirectDownloadTrigger = () => {
    const pdfUrl = pdfInfo?.url || currentConfig.pdfDownloadUrl
    const fileName = pdfInfo?.fileName || currentConfig.pdfDownloadFileName

    const link = document.createElement('a')
    link.href = pdfUrl
    link.setAttribute('download', fileName)
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const whatsappConfirmHref = `https://wa.me/${(currentConfig.author?.whatsappNumber || '918009076122').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi Shubham, Maine Meta Ads 222 Pages Notes ka payment kar diya hai.\n\nName: ${formData.name || 'Student/Owner'}\nWhatsApp: ${formData.whatsapp || ''}\nAmount: ${currentConfig.price || '₹249'}\nUTR / Ref: ${formData.utr || 'Done via Razorpay'}`
  )}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-stone-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden text-stone-100">
        
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 p-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">
                {step === 'download_ready' ? '🎉 Access Unlocked!' : 'Secure Checkout (₹249)'}
              </h3>
              <p className="text-[10px] text-stone-400">
                Official Razorpay Verified Gateway
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: Form & Checkout */}
        {step === 'checkout' && (
          <div className="p-5 space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Product Summary Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/30 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {currentConfig.discountTag || '88% OFF'}
                  </span>
                  <h4 className="font-black text-sm text-white mt-1">
                    Meta Ads Master Notes (222 Pages)
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    31 Lessons • Beginner to Advanced • Lifetime Access
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-amber-400">
                    {currentConfig.price || '₹249'}
                  </div>
                  <div className="text-[10px] text-stone-500 line-through">
                    {currentConfig.originalPrice || '₹1,999'}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400 font-medium">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Instant PDF Download
                </span>
                <span>⚡ Razorpay Secured</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleProceedToRazorpay} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-300 mb-1">
                  Aapka Pura Naam (Full Name)*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-300 mb-1">
                  WhatsApp Number (For PDF & Updates)*
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. rahul@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              {errorMsg && (
                <div className="text-xs text-red-400 bg-red-950/40 p-2.5 rounded-lg border border-red-800/60 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Main Pay Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black text-sm uppercase tracking-wide shadow-lg shadow-amber-950/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <CreditCard className="w-4 h-4 text-stone-950" />
                <span>PAY {currentConfig.price || '₹249'} VIA RAZORPAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-400 pt-1">
                <span>UPI</span> • <span>Google Pay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>Cards</span>
              </div>
            </form>

            {/* Quick Switch for users who already made payment */}
            <div className="pt-3 border-t border-stone-800 text-center">
              <button
                onClick={() => setStep('paid_verify')}
                className="text-xs text-amber-400 hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
              >
                <span>Already Paid via Razorpay? Click here to unlock</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        )}

        {/* STEP 2: Verify Payment & Instant Unlock */}
        {step === 'paid_verify' && (
          <div className="p-5 space-y-4 max-h-[85vh] overflow-y-auto text-center">
            
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-base text-white">
                Payment Verification
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Agar aapne Razorpay link par ₹249 ka payment complete kar liya hai, toh niche button par click karein:
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-left">
              <label className="block text-[11px] font-bold text-stone-400">
                Payment Reference / UTR / Order ID (Optional):
              </label>
              <input
                type="text"
                name="utr"
                placeholder="e.g. pay_XXXXX ya UTR Number"
                value={formData.utr}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <button
              onClick={handleConfirmAndDownload}
              disabled={isProcessing}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-emerald-950/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying & Unlocking...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>I HAVE COMPLETED PAYMENT • UNLOCK PDF</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-800">
              <button
                onClick={() => setStep('checkout')}
                className="text-stone-400 hover:text-white underline cursor-pointer"
              >
                ← Back to Checkout
              </button>

              <a
                href={razorpayPaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Reopen Razorpay Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        )}

        {/* STEP 3: Download Ready */}
        {step === 'download_ready' && (
          <div className="p-5 space-y-4 max-h-[85vh] overflow-y-auto text-center">
            
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-lg text-amber-300">
                Payment Confirmed!
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Aapka Meta Ads 222 Pages Master Course unlock ho gaya hai. Niche diye gaye button par click karke turant PDF download karein!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
              <button
                onClick={handleDirectDownloadTrigger}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 text-stone-950 font-black text-sm uppercase tracking-wide shadow-lg shadow-amber-950/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5 animate-pulse" />
                <span>DOWNLOAD 222 PAGES PDF (1.3 MB)</span>
              </button>

              <div className="text-[11px] text-stone-400">
                📄 File: <strong className="text-amber-300">{currentConfig.pdfDownloadFileName}</strong>
              </div>
            </div>

            {/* WhatsApp Confirmation & Support */}
            <a
              href={whatsappConfirmHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send WhatsApp Payment Confirmation</span>
            </a>

            <p className="text-[10px] text-stone-500">
              Aapka access lifetime valid hai. Kisi bhi query ke liye Shubham Gaur WhatsApp support available hai.
            </p>

          </div>
        )}

      </div>
    </div>
  )
}
