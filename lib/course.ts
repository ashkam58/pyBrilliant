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
  { slug: 'solar-system', title: 'Cartoon Solar System 🚀', tagline: 'Turtle Graphics • Animation • Orbits', estMins: 30 },
  { slug: 'big-o', title: 'Big O Complexity Analysis 📊', tagline: 'Algorithm Efficiency • Time Complexity • Performance', estMins: 25 },
  { slug: 'big-o-code', title: 'Big O Coding Playground 💻', tagline: 'Code, Visualize & Experiment', estMins: 20 },
  { slug: 'big-o-practice', title: 'Big-O Practice 🔬', tagline: 'Practice problems • Code • Visualization', estMins: 20 },
  { slug: 'assessment', title: 'Final Assessment 🎯', tagline: 'MCQs • Code Drills • Certificate', estMins: 30 },
  { slug: 'review', title: 'Review & Next Steps 🚀', tagline: 'Cheat Sheets • Projects • Career Paths', estMins: 10 },
  { slug: 'pet-painter', title: 'Python Pet Painter (Hour of Code)', estMins: 60 },
]
