import LessonNav from '@/components/LessonNav'

export default function PythonLayout({ children }:{ children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle study-friendly background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pointer-events-none"></div>
      
      {/* Very subtle floating elements - minimal and calm */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        <div className="absolute top-20 right-10 text-2xl text-blue-300 animate-pulse" style={{animationDuration: '4s'}}>🐍</div>
        <div className="absolute bottom-32 left-10 text-xl text-purple-300 animate-pulse" style={{animationDuration: '6s'}}>💻</div>
        <div className="absolute top-1/2 right-1/3 text-lg text-green-300 animate-pulse" style={{animationDuration: '8s'}}>✨</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[280px,1fr] gap-8 max-w-7xl mx-auto">
          <aside className="md:sticky md:top-24 md:h-fit">
            <LessonNav />
          </aside>
          <main className="min-w-0">
            <article className="mdx bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-8 md:p-12">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
