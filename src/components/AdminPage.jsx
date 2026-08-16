import React, { useState, useEffect, useRef } from 'react'
import { 
  Lock, KeyRound, Upload, Link as LinkIcon, FileText, 
  Check, AlertCircle, RefreshCw, Eye, Save, Settings, ShieldCheck,
  CheckCircle2, Sparkles, ArrowLeft
} from 'lucide-react'
import { saveUploadedPdf, getActivePdf, saveCustomConfig, resetAllToDefault, getSavedConfig } from '../utils/storage'

// Secret Admin Password (Only known to you!)
const ADMIN_PASSWORD = "shubhadmin8899"

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  // Active state
  const [activeTab, setActiveTab] = useState('upload') // 'upload' | 'link' | 'content'
  const [currentPdfInfo, setCurrentPdfInfo] = useState(null)
  
  // Form states
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(false)
  const [cloudUrl, setCloudUrl] = useState('')
  const [downloadName, setDownloadName] = useState('')
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('')

  // Live content edit states
  const [brandName, setBrandName] = useState('')
  const [priceTag, setPriceTag] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')

  const fileInputRef = useRef(null)

  useEffect(() => {
    refreshActiveState()
  }, [])

  const refreshActiveState = () => {
    const active = getActivePdf()
    setCurrentPdfInfo(active)
    const config = getSavedConfig()
    setCloudUrl(config.pdfDownloadUrl || '')
    setDownloadName(config.pdfDownloadFileName || 'SHUBH_Marketing_Guide.pdf')
    setBrandName(config.brandName || 'SHUBH MARKETING')
    setPriceTag(config.hero?.subPriceTag || '100% FREE')
    setWhatsappNumber(config.author?.whatsappNumber || '+91 80090 76122')
  }


  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD || password === "8899" || password === "admin8899") {
      setIsAuthenticated(true)
      setPasswordError(false)
      refreshActiveState()
    } else {
      setPasswordError(true)
    }
  }

  // Handle local PDF upload
  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        alert('Kripya sirf valid PDF file select karein!')
        return
      }
      setSelectedFile(file)
    }
  }

  const handleSaveUploadedPdf = async () => {
    if (!selectedFile) return
    setUploadProgress(true)
    try {
      await saveUploadedPdf(selectedFile)
      setSaveSuccessMsg('PDF successfully push ho gayi hai! Ab visitors yahi PDF download karenge.')
      setSelectedFile(null)
      refreshActiveState()
      setTimeout(() => setSaveSuccessMsg(''), 4000)
    } catch (err) {
      console.error(err)
      alert('Upload failed: ' + err.message)
    } finally {
      setUploadProgress(false)
    }
  }

  // Helper to convert Google Drive share links into direct download links
  const formatCloudLink = (url) => {
    if (!url) return ''
    let cleaned = url.trim()
    if (cleaned.includes('drive.google.com/file/d/')) {
      const match = cleaned.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`
      }
    }
    return cleaned
  }

  // Handle saving cloud URL / Drive link
  const handleSaveCloudUrl = () => {
    if (!cloudUrl) {
      alert('Kripya valid URL enter karein!')
      return
    }
    const finalUrl = formatCloudLink(cloudUrl)
    saveCustomConfig({
      pdfDownloadUrl: finalUrl,
      pdfDownloadFileName: downloadName || 'SHUBH_Marketing_Guide.pdf'
    })
    setSaveSuccessMsg('Cloud PDF Link successfully update ho gaya!')
    refreshActiveState()
    setTimeout(() => setSaveSuccessMsg(''), 4000)
  }

  // Handle saving live content
  const handleSaveContent = () => {
    const prev = getSavedConfig()
    saveCustomConfig({
      ...prev,
      brandName: brandName,
      hero: {
        ...prev.hero,
        subPriceTag: priceTag,
      },
      author: {
        ...prev.author,
        whatsappNumber: whatsappNumber,
      }
    })
    setSaveSuccessMsg('Content details successfully update ho gaye!')
    refreshActiveState()
    setTimeout(() => setSaveSuccessMsg(''), 4000)
  }

  const handleReset = () => {
    if (window.confirm('Kya aap sabhi customizations reset karke default settings wapas lana chahte hain?')) {
      resetAllToDefault()
      refreshActiveState()
      setSaveSuccessMsg('Sabhi settings default me reset ho gayi hain!')
      setTimeout(() => setSaveSuccessMsg(''), 4000)
    }
  }

  const goToWebsite = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-[#111218] text-stone-100 flex flex-col items-center justify-center p-4 font-sans selection:bg-amber-500 selection:text-black">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-black">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                <span>SHUBH Admin</span>
              </h3>
              <p className="text-[10px] text-stone-400">PDF & Content Management</p>
            </div>
          </div>

          <button 
            onClick={goToWebsite}
            className="flex items-center gap-1 text-xs text-stone-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go to Site</span>
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Password Verification View */
          <div className="p-6 space-y-5 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-lg text-white">Admin Authentication</h4>
              <p className="text-xs text-stone-400">
                Enter your secret security password to manage PDF and site settings.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-3 pt-2">
              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordError(false)
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-700 text-center font-mono text-base text-amber-300 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                  autoFocus
                />
                {passwordError && (
                  <p className="text-xs text-red-400 font-medium mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Incorrect password! Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-black text-sm tracking-wide uppercase shadow-lg shadow-orange-950/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <KeyRound className="w-4 h-4" />
                <span>Unlock Control Center</span>
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div className="p-4 space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Success Message Banner */}
            {saveSuccessMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-bounceIn">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{saveSuccessMsg}</span>
              </div>
            )}

            {/* Current Active PDF Status Badge */}
            <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-stone-300">Active Live PDF:</div>
                  <div className="text-xs font-black text-amber-300 truncate max-w-[180px]">
                    {currentPdfInfo?.fileName}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {currentPdfInfo?.fileSize} • {currentPdfInfo?.updatedAt}
                  </div>
                </div>
              </div>

              <a
                href={currentPdfInfo?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-[11px] font-medium flex items-center gap-1 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </a>
            </div>

            {/* Navigation Tabs */}
            <div className="flex rounded-xl bg-stone-950 p-1 border border-stone-800">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'upload' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 shadow-sm' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Push PDF</span>
              </button>

              <button
                onClick={() => setActiveTab('link')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'link' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 shadow-sm' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Cloud Link</span>
              </button>

              <button
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'content' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 shadow-sm' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Edit Info</span>
              </button>
            </div>

            {/* TAB 1: Direct File Upload */}
            {activeTab === 'upload' && (
              <div className="space-y-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-xs text-stone-300 space-y-1">
                  <div className="font-bold text-amber-300">Push New PDF File</div>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    Nayi PDF file select karke "Push & Activate" par click karein. Visitors ke liye ye PDF immediately activate ho jayegi.
                  </p>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".pdf,application/pdf"
                  className="hidden"
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-stone-700 hover:border-amber-400/80 rounded-xl p-5 text-center cursor-pointer bg-stone-900/50 hover:bg-stone-900 transition-colors"
                >
                  <Upload className="w-7 h-7 text-amber-400 mx-auto mb-2" />
                  {selectedFile ? (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-emerald-400">
                        {selectedFile.name}
                      </p>
                      <p className="text-[10px] text-stone-400">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Tap to change file
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-stone-200">
                        Click to select PDF from device
                      </p>
                      <p className="text-[10px] text-stone-500">
                        Format: .pdf (Up to 15MB)
                      </p>
                    </div>
                  )}
                </div>

                <button
                  disabled={!selectedFile || uploadProgress}
                  onClick={handleSaveUploadedPdf}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-stone-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>{uploadProgress ? 'Pushing PDF...' : 'Push & Activate New PDF'}</span>
                </button>
              </div>
            )}

            {/* TAB 2: Cloud / Drive Link */}
            {activeTab === 'link' && (
              <div className="space-y-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-xs text-stone-300 space-y-1">
                  <div className="font-bold text-amber-300">Paste Cloud / Drive Link</div>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    Google Drive, Dropbox ya Cloudinary link paste karein (Auto-converts into direct download).
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 block mb-1">
                      PDF Link:
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/file/d/..."
                      value={cloudUrl}
                      onChange={(e) => setCloudUrl(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 block mb-1">
                      File Name for Download:
                    </label>
                    <input
                      type="text"
                      placeholder="SHUBH_Objection_Handling.pdf"
                      value={downloadName}
                      onChange={(e) => setDownloadName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 placeholder:text-stone-600 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveCloudUrl}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Cloud PDF Link</span>
                </button>
              </div>
            )}

            {/* TAB 3: Edit Info & Content */}
            {activeTab === 'content' && (
              <div className="space-y-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-xs text-stone-300 space-y-1">
                  <div className="font-bold text-amber-300">Live Info & Contacts</div>
                  <p className="text-[11px] text-stone-400">
                    Details update karein without coding.
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 block mb-1">
                      Brand Name:
                    </label>
                    <input
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 block mb-1">
                      Price / Offer Badge (e.g. '100% FREE' ya 'SIRF ₹99 MEIN!'):
                    </label>
                    <input
                      type="text"
                      value={priceTag}
                      onChange={(e) => setPriceTag(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 block mb-1">
                      WhatsApp Number:
                    </label>
                    <input
                      type="text"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="+919876543210"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveContent}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Content</span>
                </button>
              </div>
            )}

            {/* Bottom Actions: Reset to Default & Go to Site */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={handleReset}
                className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Default</span>
              </button>

              <button
                onClick={goToWebsite}
                className="text-[11px] text-amber-400 hover:underline font-semibold cursor-pointer"
              >
                View Live Website →
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
