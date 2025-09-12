'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Determine CTA button based on current path
  const isJavaPath = pathname?.startsWith('/java')
  const ctaLink = isJavaPath ? '/java/intro' : '/python/intro'
  const ctaText = isJavaPath ? 'Start Java ☕' : 'Start Learning 🚀'

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-4xl group-hover:animate-bounce">🐍</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PyBrilliant
              </h1>
              <p className="text-xs text-gray-500 font-medium">Interactive Learning</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
            
            <Link 
              href="/python" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <span>🐍</span>
              <span>Python Course</span>
            </Link>

            <Link 
              href="/java" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <span>☕</span>
              <span>Java Course</span>
            </Link>
            
            <Link 
              href="/about" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <span>ℹ️</span>
              <span>About</span>
            </Link>

            {/* CTA Button */}
            <Link 
              href={ctaLink}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>{ctaText}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
          >
            <div className="text-xl">
              {isMenuOpen ? '✖️' : '🍔'}
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-700 font-medium transition-all duration-300"
              >
                <span>🏠</span>
                <span>Home</span>
              </Link>
              
              <Link 
                href="/python"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 text-gray-700 font-medium transition-all duration-300"
              >
                <span>🐍</span>
                <span>Python Course</span>
              </Link>

              <Link 
                href="/java"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 text-gray-700 font-medium transition-all duration-300"
              >
                <span>☕</span>
                <span>Java Course</span>
              </Link>
              
              <Link 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 text-gray-700 font-medium transition-all duration-300"
              >
                <span>ℹ️</span>
                <span>About</span>
              </Link>

              <Link 
                href={ctaLink}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold transition-all duration-300 shadow-lg"
              >
                <span>{ctaText}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
