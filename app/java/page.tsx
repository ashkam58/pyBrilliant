import Link from 'next/link'
import { JAVA_COURSE } from '@/lib/course'

export const metadata = {
  title: 'Java — Chapters | JavaBrilliant',
  description: 'Browse interactive Java chapters and learn programming with coffee-powered fun!'
}

export default function JavaIndex() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          ☕ Java Brilliant
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Brew your coding skills with interactive Java lessons
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {JAVA_COURSE.map(ch => (
          <Link 
            key={ch.slug} 
            href={`/java/${ch.slug}`} 
            className="card hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200"
          >
            <div className="text-lg font-black text-orange-800">{ch.title}</div>
            <div className="text-sm opacity-70 text-orange-600">{ch.tagline} • {ch.estMins} mins</div>
          </Link>
        ))}
      </div>
    </div>
  )
}