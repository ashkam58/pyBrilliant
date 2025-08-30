import Link from 'next/link'
import { PYTHON_COURSE } from '@/lib/course'

export const metadata = {
  title: 'Python — Chapters | PythonKids',
  description: 'Browse interactive Python chapters.'
}

export default function PythonIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">Python — Chapters</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {PYTHON_COURSE.map(ch => (
          <Link key={ch.slug} href={`/python/${ch.slug}`} className="card hover:shadow-lg transition">
            <div className="text-lg font-black">{ch.title}</div>
            <div className="text-sm opacity-70">{ch.tagline} • {ch.estMins} mins</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
