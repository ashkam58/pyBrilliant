'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PYTHON_COURSE } from '@/lib/course'

export default function LessonNav() {
  const pathname = usePathname()
  
  // Only show Python course now
  const course = PYTHON_COURSE
  const coursePrefix = '/python'
  const courseInfo = { title: 'Python Course', emoji: '🐍', color: 'blue' }
  
  return (
    <nav className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-4 lg:p-6 lg:sticky lg:top-24 overflow-y-auto max-h-screen w-full">
      <div className="flex items-center space-x-2 mb-4 lg:mb-6">
        <div className="text-xl lg:text-2xl">{courseInfo.emoji}</div>
        <div>
          <h3 className="text-base lg:text-lg font-bold text-gray-800">{courseInfo.title}</h3>
          <p className="text-xs text-gray-500">Interactive Learning Path</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {course.map((ch, index) => {
          const href = `${coursePrefix}/${ch.slug}`
          const active = pathname === href
          const colorClasses = {
            active: 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm',
            activeNumber: 'bg-blue-100 text-blue-600',
            activeIcon: 'text-blue-500'
          }
          
          return (
            <li key={ch.slug}>
              <Link 
                href={href} 
                className={`block rounded-xl px-4 py-3 transition-all duration-300 group ${
                  active 
                    ? colorClasses.active
                    : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    active 
                      ? colorClasses.activeNumber
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-medium truncate">{ch.title}</div>
                    <div className="text-xs opacity-70 text-gray-500 truncate">{ch.tagline} • {ch.estMins}m</div>
                  </div>
                  {active && (
                    <div className={colorClasses.activeIcon}>
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
