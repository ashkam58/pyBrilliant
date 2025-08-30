import type { MetadataRoute } from 'next'
import { PYTHON_COURSE } from '@/lib/course'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: base + '/python', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    ...PYTHON_COURSE.map(ch => ({
      url: `${base}/python/${ch.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8
    }))
  ]
}
