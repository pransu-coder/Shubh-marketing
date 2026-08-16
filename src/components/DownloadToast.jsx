import React from 'react'
import { CheckCircle2, Download, FileText, X, Sparkles } from 'lucide-react'
import { siteConfig } from '../config'

export default function DownloadToast({ isOpen, onClose, pdfInfo }) {
  if (!isOpen) return null
  const downloadUrl = pdfInfo?.url || siteConfig.pdfDownloadUrl


  return (
    <div className="fixed top-4 left-4 right-4 z-50 max-w-md mx-auto animate-bounceIn">
      <div className="bg-stone-900 text-white rounded-2xl p-4 shadow-2xl border border-amber-500/40 backdrop-blur-xl flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
          <CheckCircle2 className="w-6 h-6 animate-pulse" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Download Started!
            </h4>
            <button 
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-300 leading-snug">
            Aapki PDF download shuru ho chuki hai. Please check your browser/phone Downloads folder.
          </p>
          <div className="pt-1.5 flex items-center gap-2">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-sky-400 hover:underline flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              Open / View PDF Online
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
