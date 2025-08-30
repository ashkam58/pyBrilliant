export type Chapter = {
  slug: string
  title: string
  tagline?: string
  estMins: number
}

export const PYTHON_COURSE: Chapter[] = [
  { slug: 'intro', title: 'Say Hello, Python 👋', tagline: 'Variables • print • types', estMins: 12 },
  { slug: 'control-flow', title: 'Control Flow Magic 🎯', tagline: 'if • elif • else • match', estMins: 18 },
  { slug: 'loops', title: 'Loop-de-Loop 🔁', tagline: 'for • while • ranges', estMins: 15 },
]
