'use client'
import { useState, useEffect } from 'react'

export default function PatternMasterCertificate() {
  const [showCertificate, setShowCertificate] = useState(false)
  const [currentDate] = useState(new Date().toLocaleDateString())

  useEffect(() => {
    // Auto-show certificate with animation
    const timer = setTimeout(() => setShowCertificate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="my-8">
      <div className="text-center mb-4">
        <button
          onClick={() => setShowCertificate(!showCertificate)}
          className="px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-600 text-white font-bold rounded-lg hover:from-gold-600 hover:to-yellow-700 transition-all duration-300"
          style={{background: 'linear-gradient(to right, #ffd700, #ffed4e)'}}
        >
          📜 {showCertificate ? 'Hide' : 'Show'} Certificate
        </button>
      </div>

      {showCertificate && (
        <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 rounded-2xl p-8 shadow-2xl border-8 border-gold-400 transform transition-all duration-1000 hover:scale-105"
             style={{borderColor: '#ffd700'}}>

          {/* Header decoration */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">🎨</div>
            <div className="flex justify-center space-x-4 text-4xl">
              <span>⭐</span>
              <span>💎</span>
              <span>🎭</span>
              <span>🎪</span>
              <span>🎨</span>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-purple-800 mb-2" style={{fontFamily: 'serif'}}>
              Certificate of Achievement
            </h2>
            <div className="w-32 h-1 bg-gold-500 mx-auto mb-4" style={{backgroundColor: '#ffd700'}}></div>
            <p className="text-xl text-purple-600 font-semibold">
              Pattern Printing Mastery
            </p>
          </div>

          {/* Main content */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              This certifies that
            </p>
            <div className="bg-white rounded-lg p-4 mb-4 border-2 border-purple-300">
              <p className="text-2xl font-bold text-purple-800">
                CREATIVE PATTERN ARTIST
              </p>
              <p className="text-sm text-gray-600">(Future Code Designer)</p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              has successfully completed the <strong>Pattern Printing Adventure</strong> and demonstrated mastery of:
            </p>
          </div>

          {/* Skills achieved */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-pink-100 rounded-lg p-4 text-center border-2 border-pink-300">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold text-pink-800">Star Patterns</h3>
              <p className="text-sm text-pink-600">Triangle & Diamond Mastery</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 text-center border-2 border-blue-300">
              <div className="text-3xl mb-2">🔢</div>
              <h3 className="font-bold text-blue-800">Number Patterns</h3>
              <p className="text-sm text-blue-600">Mathematical Sequences</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center border-2 border-purple-300">
              <div className="text-3xl mb-2">💖</div>
              <h3 className="font-bold text-purple-800">Creative Patterns</h3>
              <p className="text-sm text-purple-600">Heart & Emoji Designs</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-300">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">🎨 Pattern Achievements</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Created Star Pyramids</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Built Diamond Shapes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Designed Heart Patterns</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Mastered Pascal's Triangle</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Created Emoji Art</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Understood Nested Loops</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end">
            <div className="text-left">
              <div className="border-t-2 border-gray-400 pt-2 w-48">
                <p className="text-sm text-gray-600">Professor Patternia</p>
                <p className="text-xs text-gray-500">Pattern Academy Director</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🎨</div>
              <p className="text-xs text-gray-500">Official Pattern Seal</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Date: {currentDate}</p>
              <p className="text-xs text-gray-500">Mastery Achieved</p>
            </div>
          </div>

          {/* Decorative border elements */}
          <div className="absolute top-4 left-4 text-2xl">⭐</div>
          <div className="absolute top-4 right-4 text-2xl">⭐</div>
          <div className="absolute bottom-4 left-4 text-2xl">⭐</div>
          <div className="absolute bottom-4 right-4 text-2xl">⭐</div>
        </div>
      )}
    </div>
  )
}
