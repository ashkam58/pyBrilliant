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
  { slug: 'adventure-loops', title: 'The Great Loop Adventure Quest 🏰', tagline: 'Story-based • Interactive Games • Dragons & Trolls', estMins: 25 },
  { slug: 'pattern-printing', title: 'Pattern Printing Playground 🎨', tagline: 'Stars • Numbers • Triangles • Fun Patterns', estMins: 20 },
  { slug: 'pointers', title: 'Pointers & Memory Management 🧠', tagline: 'References • Heap • Memory Visualization', estMins: 15 },
  { slug: 'big-o', title: 'Big O Complexity Analysis 📊', tagline: 'Algorithm Efficiency • Time Complexity • Performance', estMins: 25 },
  { slug: 'assessment', title: 'Final Assessment 🎯', tagline: 'MCQs • Code Drills • Certificate', estMins: 30 },
  { slug: 'review', title: 'Review & Next Steps 🚀', tagline: 'Cheat Sheets • Projects • Career Paths', estMins: 10 },
]

export const JAVA_COURSE: Chapter[] = [
  { slug: 'intro', title: 'Welcome to Java ☕', tagline: 'JDK • JVM • First Program', estMins: 15 },
  { slug: 'variables', title: 'Variables & Data Types 📊', tagline: 'int • String • boolean • Scanner', estMins: 18 },
  { slug: 'control-flow', title: 'Decision Making 🎯', tagline: 'if • else • switch • logical operators', estMins: 20 },
  { slug: 'loops', title: 'Loop Mastery 🔄', tagline: 'for • while • do-while • enhanced for', estMins: 18 },
  { slug: 'methods', title: 'Method Magic 🎩', tagline: 'Functions • Parameters • Return Values', estMins: 22 },
  { slug: 'arrays', title: 'Array Adventures 📚', tagline: 'Arrays • ArrayList • 2D Arrays', estMins: 25 },
  { slug: 'oop', title: 'Object-Oriented Programming 🏗️', tagline: 'Classes • Objects • Inheritance', estMins: 30 },
  { slug: 'assessment', title: 'Java Assessment 🎯', tagline: 'Projects • Challenges • Certificate', estMins: 35 },
]
