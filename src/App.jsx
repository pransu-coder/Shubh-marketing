import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import BannerHero from './components/BannerHero'
import PainPoints from './components/PainPoints'
import WhatYouGet from './components/WhatYouGet'
import ChaptersBreakdown from './components/ChaptersBreakdown'
import AuthorProfile from './components/AuthorProfile'
import FAQ from './components/FAQ'
import StickyCTA from './components/StickyCTA'
import DownloadToast from './components/DownloadToast'
import PaymentModal from './components/PaymentModal'
import AdminPage from './components/AdminPage'
import Footer from './components/Footer'
import { getActivePdf, getSavedConfig } from './utils/storage'
import { MessageCircle } from 'lucide-react'

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false)
  const [config, setConfig] = useState(getSavedConfig())
  const [activePdf, setActivePdf] = useState(getActivePdf())
  const [isDownloading, setIsDownloading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  // Detect /admin or #admin or ?paid=true in URL
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase()
      const hash = window.location.hash.toLowerCase()
      const search = window.location.search.toLowerCase()

      if (path === '/admin' || path === '/admin/' || hash === '#admin' || hash === '#/admin' || search.includes('admin=true')) {
        setIsAdminRoute(true)
      } else {
        setIsAdminRoute(false)
      }

      // Auto-unlock if user is returning with paid=true or #download
      if (search.includes('paid=true') || hash === '#download') {
        handleDownload()
      }

      setConfig(getSavedConfig())
      setActivePdf(getActivePdf())
    }

    checkRoute()
    window.addEventListener('popstate', checkRoute)
    window.addEventListener('hashchange', checkRoute)
    window.addEventListener('storage', checkRoute)
    window.addEventListener('shubh_config_updated', checkRoute)
    return () => {
      window.removeEventListener('popstate', checkRoute)
      window.removeEventListener('hashchange', checkRoute)
      window.removeEventListener('storage', checkRoute)
      window.removeEventListener('shubh_config_updated', checkRoute)
    }
  }, [])

  const handleOpenBuyModal = () => {
    setIsPaymentModalOpen(true)
  }

  const handleDownload = () => {
    setIsDownloading(true)
    const currentPdf = getActivePdf()

    try {
      const link = document.createElement('a')
      link.href = currentPdf.url
      link.setAttribute('download', currentPdf.fileName)
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Download error:', err)
      window.open(currentPdf.url, '_blank')
    }

    setShowToast(true)

    setTimeout(() => {
      setIsDownloading(false)
    }, 1200)

    setTimeout(() => {
      setShowToast(false)
    }, 6000)
  }

  // 1. If on /admin URL, render dedicated Admin Portal
  if (isAdminRoute) {
    return <AdminPage />
  }

  // 2. Otherwise render clean public landing page for visitors
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans antialiased selection:bg-[#1877f2]/20 selection:text-blue-950 flex flex-col justify-between">
      
      {/* Toast Notification when Download triggers */}
      <DownloadToast 
        isOpen={showToast} 
        onClose={() => setShowToast(false)} 
        pdfInfo={activePdf}
      />

      {/* Razorpay Payment & Checkout Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onDownloadSuccess={() => {
          handleDownload()
        }}
        pdfInfo={activePdf}
        config={config}
      />

      {/* Main Mobile App Frame */}
      <main className="w-full max-w-md mx-auto min-h-screen bg-[#fffdfa] shadow-2xl shadow-stone-950/10 flex flex-col">
        
        {/* Header */}
        <Header config={config} />

        {/* Hero Section with 3D Book & Meta Blue Banner */}
        <BannerHero 
          config={config}
          onBuy={handleOpenBuyModal} 
        />

        {/* Pain Points (👉 Business Owners & Students) */}
        <PainPoints 
          config={config}
          onBuy={handleOpenBuyModal} 
        />

        {/* What You'll Get (📌 222 Pages Notes, 31 Lessons, Pixel Strategy) */}
        <WhatYouGet 
          config={config}
          onBuy={handleOpenBuyModal} 
        />

        {/* Chapters & 31 Lessons Breakdown */}
        <ChaptersBreakdown config={config} />

        {/* Author / Shubham Gaur Trust Card */}
        <AuthorProfile config={config} />

        {/* FAQ Section */}
        <FAQ config={config} />

        {/* Clean Footer */}
        <Footer config={config} />
      </main>

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={`https://wa.me/${(config.author?.whatsappNumber || '918009076122').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.author?.whatsappMessage || 'Hi Shubham, Maine Meta Ads Course ka payment kiya hai (₹249).')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-40 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white animate-pulse"
        title="Chat with Shubham Gaur on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

      {/* Persistent Bottom Sticky Buy Bar */}
      <StickyCTA 
        config={config}
        pdfInfo={activePdf}
        onBuy={handleOpenBuyModal} 
        isDownloading={isDownloading} 
      />
    </div>
  )
}


