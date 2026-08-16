// =========================================================================
// 📦 CLIENT-SIDE DYNAMIC STORAGE UTILITY (No Backend Needed!)
// =========================================================================

import { siteConfig } from '../config'

const STORAGE_KEY_SETTINGS = 'shubh_marketing_custom_settings'
const STORAGE_KEY_PDF_BLOB = 'shubh_marketing_custom_pdf_blob'
const STORAGE_KEY_PDF_META = 'shubh_marketing_custom_pdf_meta'

// Load saved settings or fallback to initial config
export function getSavedConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SETTINGS)
    if (saved) {
      const parsed = JSON.parse(saved)
      return { ...siteConfig, ...parsed }
    }
  } catch (e) {
    console.error('Error loading saved settings:', e)
  }
  return siteConfig
}

// Save custom settings to local storage
export function saveCustomConfig(newSettings) {
  try {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(newSettings))
    return true
  } catch (e) {
    console.error('Error saving settings:', e)
    return false
  }
}

// Store custom PDF as Base64/DataURL in IndexedDB / LocalStorage
export async function saveUploadedPdf(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64Data = reader.result
      const meta = {
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type,
        updatedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      try {
        localStorage.setItem(STORAGE_KEY_PDF_BLOB, base64Data)
        localStorage.setItem(STORAGE_KEY_PDF_META, JSON.stringify(meta))
        resolve({ success: true, meta, dataUrl: base64Data })
      } catch (err) {
        // If localStorage quota exceeded, inform user or handle cleanly
        console.warn('LocalStorage quota warning, using direct object URL:', err)
        const objectUrl = URL.createObjectURL(file)
        resolve({ success: true, meta, dataUrl: objectUrl })
      }
    }
    reader.onerror = (error) => reject(error)
    reader.readAsDataURL(file)
  })
}

// Get the active PDF source (Custom Uploaded > Custom URL > Default in public folder)
export function getActivePdf() {
  try {
    const customBlob = localStorage.getItem(STORAGE_KEY_PDF_BLOB)
    const customMetaStr = localStorage.getItem(STORAGE_KEY_PDF_META)
    const savedConfig = getSavedConfig()

    if (customBlob && customMetaStr) {
      const meta = JSON.parse(customMetaStr)
      return {
        url: customBlob,
        fileName: meta.name || savedConfig.pdfDownloadFileName,
        fileSize: meta.size,
        isCustomUpload: true,
        updatedAt: meta.updatedAt
      }
    }

    if (savedConfig.pdfDownloadUrl && savedConfig.pdfDownloadUrl !== siteConfig.pdfDownloadUrl) {
      return {
        url: savedConfig.pdfDownloadUrl,
        fileName: savedConfig.pdfDownloadFileName || 'SHUBH_Marketing_Guide.pdf',
        fileSize: savedConfig.fileSize || '2.4 MB',
        isCustomUpload: false,
        updatedAt: 'Custom URL Set'
      }
    }
  } catch (e) {
    console.error('Error fetching active PDF:', e)
  }

  return {
    url: siteConfig.pdfDownloadUrl,
    fileName: siteConfig.pdfDownloadFileName,
    fileSize: siteConfig.fileSize,
    isCustomUpload: false,
    updatedAt: 'Default App File'
  }
}

// Reset all customizations back to default
export function resetAllToDefault() {
  try {
    localStorage.removeItem(STORAGE_KEY_SETTINGS)
    localStorage.removeItem(STORAGE_KEY_PDF_BLOB)
    localStorage.removeItem(STORAGE_KEY_PDF_META)
    return true
  } catch (e) {
    console.error('Error resetting:', e)
    return false
  }
}
