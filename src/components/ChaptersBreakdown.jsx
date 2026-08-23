import React, { useState } from 'react'
import { siteConfig } from '../config'
import { BookOpen, ChevronDown, CheckCheck, Layers } from 'lucide-react'

export default function ChaptersBreakdown({ config }) {
  const currentConfig = config || siteConfig
  const { modules, lessonCount, pageCount } = currentConfig
  const [openLesson, setOpenLesson] = useState(null)
  const [activeModuleIdx, setActiveModuleIdx] = useState(0)

  const toggleLesson = (key) => {
    setOpenLesson(openLesson === key ? null : key)
  }

  return (
    <section className="w-full px-4 py-4 max-w-md mx-auto">
      <div className="space-y-3.5">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-1 border-b border-blue-200/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#1877f2]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
              Complete Course Curriculum
            </h3>
          </div>
          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
            {lessonCount || '31 Lessons'} • {pageCount || '222 Pages'}
          </span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          Is 222-page notes mein har topic real dashboards, live examples aur actionable frameworks ke sath structured hai:
        </p>

        {/* Module Filter Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {modules?.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModuleIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeModuleIdx === idx
                  ? 'bg-[#1877f2] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Module {idx + 1} ({mod.lessons.length})
            </button>
          ))}
        </div>

        {/* Active Module Header */}
        <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1877f2]" />
            <span className="text-xs font-black text-blue-950">
              {modules?.[activeModuleIdx]?.moduleTitle}
            </span>
          </div>
          <span className="text-[10px] text-blue-800 font-bold">
            {modules?.[activeModuleIdx]?.lessons?.length} Lessons
          </span>
        </div>

        {/* Lessons in Current Module */}
        <div className="space-y-2 pt-0.5">
          {modules?.[activeModuleIdx]?.lessons?.map((lesson) => {
            const isOpen = openLesson === lesson.number
            return (
              <div 
                key={lesson.number}
                className="overflow-hidden rounded-xl border border-stone-200 bg-white transition-all shadow-2xs hover:border-blue-300"
              >
                <button
                  onClick={() => toggleLesson(lesson.number)}
                  className="w-full p-3 flex items-center justify-between gap-3 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-blue-800 font-mono text-xs font-extrabold shrink-0 border border-blue-200/60">
                      {lesson.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-800">
                      {lesson.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3 pt-1 border-t border-stone-100 bg-blue-50/30 text-xs text-stone-600 leading-relaxed flex items-start gap-2 animate-fadeIn">
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{lesson.desc}</span>
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

