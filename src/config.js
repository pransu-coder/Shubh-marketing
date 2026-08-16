// =========================================================================
// 🚀 SHUBH MARKETING - CONFIGURATION FILE
// =========================================================================
// Yahan aap bina coding ke saara content aur PDF change kar sakte hain!
// PDF badalne ke liye:
// 1. Apni nayi PDF file ko 'public/' folder me daalein (jaise: public/mera_pdf.pdf)
// 2. Niche 'pdfDownloadUrl' me uska naam likh dein (jaise: "/mera_pdf.pdf")
// 3. Ya fir Google Drive / Cloudinary ka direct download link bhi daal sakte hain!
// =========================================================================

export const siteConfig = {
  // 🏷️ Brand & Header Info
  brandName: "SHUBH MARKETING",
  topCategoryBadge: "NETWORK MARKETERS , FLP ))",
  tagline: "Empowering Network Marketers & Direct Sellers with Proven Closing Systems",

  // 📄 PDF Download Settings (Super Easy to Change!)
  pdfDownloadUrl: "/SHUBH_Marketing_Objection_Handling_Guide.pdf", // File located in public/ folder
  pdfDownloadFileName: "SHUBH_Marketing_Objection_Handling_Guide.pdf", // Name saved on user's device
  fileSize: "2.4 MB (PDF)",
  pageCount: "45+ Pages",

  // 🎯 Main Banner / Hero Section
  hero: {
    badgeText: "LIMITED TIME ACCESS",
    headlineMain: "AAPKE PROSPECT KA",
    headlineHighlight: "'NAHI' AB 'HAAN'",
    headlineEnd: "BANEGA",
    subPriceTag: "100% FREE", // e.g. "SIRF ₹99 MEIN!" ya "100% FREE"
    subPriceOriginal: "₹999",
    instantAccessTag: "INSTANT ACCESS (PDF)",
    bookTitle: "OBJECTION HANDLING EBOOK",
    bookSubtitle: "MASTER CLOSING FORMULA",
  },

  // ⚠️ Pain Points (Prospect Objections)
  painPoints: [
    {
      id: 1,
      text: "Struggling to get quality leads for your product or business?",
    },
    {
      id: 2,
      text: "Face kar rahe ho baar-baar objections like \"Paise nahi hai\", \"Time nahi hai\", \"Soch ke batata hoon\"?",
    },
    {
      id: 3,
      text: "Prospects presentation dekhne ke baad call pick nahi karte ya WhatsApp par ghost kar dete hain?",
    },
    {
      id: 4,
      text: "Team grow nahi ho rahi aur closing ratio 10% se bhi kam chal raha hai?",
    }
  ],

  comboText: "This Guide is specially crafted for YOU!",

  // 🎁 What You'll Get Section
  whatYouGet: [
    {
      id: 1,
      title: "High-Quality, Interest-Based Leads Strategy",
      desc: "Specific to your niche (FLP, Network Marketing & Direct Sales)",
    },
    {
      id: 2,
      title: "Step-by-Step Objection Handling eBook (PDF)",
      desc: "Complete word-to-word Hindi + English closing scripts",
    },
    {
      id: 3,
      title: "Top 7 Objections Master Cheatsheet",
      desc: "\"Paise nahi hai\", \"Papa se puchna hai\", \"Product mehnga hai\" ke solid replies",
    },
    {
      id: 4,
      title: "WhatsApp Follow-Up & Broadcast Scripts",
      desc: "High-converting message templates jo dead leads ko revive karein",
    },
    {
      id: 5,
      title: "Psychological Closing Triggers",
      desc: "Prospect ko bina pushy bane naturally decision lene me help karne ka tarika",
    }
  ],

  // 📚 Chapters Inside the PDF
  chapters: [
    {
      number: "01",
      title: "The Psychology Behind Objections",
      desc: "Log 'NAHI' kyu bolte hain aur objection ko real concern kaise samjhein.",
    },
    {
      number: "02",
      title: "Handling \"Paise Nahi Hai\" Objection",
      desc: "3-Step Value Ladder Formula jo prospect ka money mindset change kare.",
    },
    {
      number: "03",
      title: "Handling \"Time Nahi Hai\" Objection",
      desc: "Busy job professionals aur students ko part-time pitch karne ka best script.",
    },
    {
      number: "04",
      title: "Cracking \"Soch Kar Batata Hoon\"",
      desc: "Prospect ko on-the-spot clear answer lene ke liye 2 magic questions.",
    },
    {
      number: "05",
      title: "Handling \"Company / MLM Fraud Toh Nahi?\"",
      desc: "Legitimacy, FLP & Industry credibility dikha kar trust build karne ka secret.",
    },
    {
      number: "06",
      title: "WhatsApp 5-Day Follow-Up Sequence",
      desc: "Cold leads se repeat conversations start karne ke tested templates.",
    }
  ],

  // 👤 Author & Support Info
  author: {
    name: "SHUBH Marketing",
    role: "Sales & Network Marketing Growth Strategist",
    bio: "Helping 5000+ direct sellers and network marketers overcome daily sales objections and scale their monthly recruits.",
    whatsappNumber: "+91 80090 76122", // Aapka official WhatsApp number
    whatsappMessage: "Hi SHUBH, Maine aapka Objection Handling PDF dekha, mujhe aage ki guide chahiye.",
  }
}

