'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PYTHON_COURSE } from '@/lib/course'

export default function LessonNav() {
  const pathname = usePathname()
  return (
    <nav className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 sticky top-24">
      <div className="flex items-center space-x-2 mb-6">
        <div className="text-2xl">🐍</div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">Python Course</h3>
          <p className="text-xs text-gray-500">Interactive Learning Path</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {PYTHON_COURSE.map((ch, index) => {
          const href = `/python/${ch.slug}`
          const active = pathname?.startsWith(href)
          return (
            <li key={ch.slug}>
              <Link 
                href={href} 
                className={`block rounded-xl px-4 py-3 transition-all duration-300 group ${
                  active 
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    active 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{ch.title}</div>
                    <div className="text-xs opacity-70 text-gray-500">{ch.tagline} • {ch.estMins}m</div>
                  </div>
                  {active && (
                    <div className="text-blue-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          🎯 <strong>Focus Mode</strong> - Optimized for Learning
        </div>
      </div>
    </nav>
  )
}
