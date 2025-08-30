'use client'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-green-400/20 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-4xl animate-bounce">🐍</div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PyBrilliant
                </h3>
                <p className="text-gray-300 text-sm">Interactive Python Learning</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Join thousands of learners on an exciting Python programming adventure! 
              Master coding skills through interactive exercises, fun challenges, and hands-on projects. 
              From complete beginner to confident coder - we make learning Python brilliant! 🚀
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🌟</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>👥</span>
                <span>10K+ Students</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🏆</span>
                <span>Award Winning</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <span>🚀</span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1">
                  <span>🏠</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/python" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1">
                  <span>🐍</span>
                  <span>Python Course</span>
                </Link>
              </li>
              <li>
                <Link href="/python/intro" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1">
                  <span>📚</span>
                  <span>Getting Started</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1">
                  <span>ℹ️</span>
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <span>📖</span>
              <span>Resources</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.python.org/3/tutorial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1"
                >
                  <span>📜</span>
                  <span>Python Docs</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pybrilliant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1"
                >
                  <span>💻</span>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://stackoverflow.com/questions/tagged/python" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1"
                >
                  <span>❓</span>
                  <span>Get Help</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://replit.com/@pybrilliant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1"
                >
                  <span>⚡</span>
                  <span>Practice Online</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} PyBrilliant. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-sm text-gray-400">for Python learners</span>
              <div className="flex space-x-1">
                <span className="animate-bounce delay-100">🐍</span>
                <span className="animate-bounce delay-200">💻</span>
                <span className="animate-bounce delay-300">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
