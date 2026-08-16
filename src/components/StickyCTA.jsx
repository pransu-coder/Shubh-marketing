import React from 'react'
import { Download, Sparkles, FileCheck } from 'lucide-react'
import { siteConfig } from '../config'

export default function StickyCTA({ onDownload, isDownloading, pdfInfo, config }) {
  const currentConfig = config || siteConfig
  const fileSize = pdfInfo?.fileSize || currentConfig.fileSize

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-amber-200/80 p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.12)]">
      <div className="max-w-md mx-auto">
        <button
          onClick={onDownload}
          disabled={isDownloading}
          id="sticky-download-button"
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#e7a32b] via-[#e59e1e] to-[#d88f13] hover:from-[#d88f13] hover:to-[#c87e07] active:scale-98 text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-md shadow-amber-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
        >
          {isDownloading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>DOWNLOADING PDF...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 animate-bounce stroke-[2.5]" />
              <span>DOWNLOAD NOW</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-[10px] text-stone-500 font-medium mt-1.5 px-2">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" />
            Direct PDF Download
          </span>
          <span>Size: {fileSize}</span>
        </div>
      </div>
    </div>
  )
}
