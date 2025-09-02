'use client'
import { useState } from 'react'

export default function EmojiTrianglePattern() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentRow, setCurrentRow] = useState(0)

  const emojis = ["🎈", "🎉", "🎊", "🎁", "🎂"]
  const rows = 5

  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentRow(0)
    
    // Animate row by row
    for (let i = 0; i < rows; i++) {
      setTimeout(() => {
        setCurrentRow(i + 1)
        if (i === rows - 1) {
          setTimeout(() => setIsAnimating(false), 500)
        }
      }, i * 800)
    }
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setCurrentRow(0)
  }

  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg border-4 border-pink-300 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-purple-800 mb-2 flex items-center justify-center space-x-2">
          <span>🎪</span>
          <span>Emoji Triangle Party</span>
          <span>🎉</span>
        </h3>
        <p className="text-purple-600 text-lg">Watch the emoji triangle build up row by row!</p>
      </div>

      {/* Pattern Display */}
      <div className="bg-white rounded-xl p-8 mb-6 min-h-64 flex flex-col justify-center items-center border-2 border-purple-200">
        {currentRow === 0 && !isAnimating ? (
          <div className="text-center">
            <div className="text-6xl mb-4">🎭</div>
            <p className="text-gray-600 text-lg">Click "Start Party" to see the emoji triangle magic!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {[...Array(rows)].map((_, rowIndex) => {
              const emoji = emojis[rowIndex]
              const shouldShow = rowIndex < currentRow
              const isCurrentlyBuilding = rowIndex === currentRow - 1 && isAnimating
              
              return (
                <div
                  key={rowIndex}
                  className={`flex justify-center transition-all duration-500 ${
                    shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  } ${isCurrentlyBuilding ? 'animate-bounce' : ''}`}
                >
                  <div className="flex space-x-2">
                    {[...Array(rowIndex + 1)].map((_, emojiIndex) => (
                      <span
                        key={emojiIndex}
                        className={`text-3xl transition-all duration-300 ${
                          isCurrentlyBuilding
                            ? 'animate-pulse transform hover:scale-125'
                            : 'hover:scale-110'
                        }`}
                        style={{
                          animationDelay: `${emojiIndex * 0.1}s`
                        }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
            
            {currentRow === rows && !isAnimating && (
              <div className="text-center mt-6 animate-bounce">
                <div className="text-4xl mb-2">🎊</div>
                <p className="text-purple-600 font-bold text-lg">Party Triangle Complete!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="text-center space-x-4">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? '🎪 Party in Progress...' : '🎉 Start Party!'}
        </button>
        
        <button
          onClick={resetAnimation}
          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
        >
          🔄 Reset
        </button>
      </div>

      {/* Pattern Explanation */}
      <div className="mt-6 bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
        <h4 className="font-bold text-purple-800 mb-2">🧠 How it works:</h4>
        <div className="space-y-2 text-sm text-purple-700">
          <p><strong>Row 1:</strong> 1 balloon 🎈</p>
          <p><strong>Row 2:</strong> 2 party poppers 🎉🎉</p>
          <p><strong>Row 3:</strong> 3 confetti 🎊🎊🎊</p>
          <p><strong>Row 4:</strong> 4 gifts 🎁🎁🎁🎁</p>
          <p><strong>Row 5:</strong> 5 cakes 🎂🎂🎂🎂🎂</p>
        </div>
        <div className="mt-3 p-3 bg-white rounded-lg border border-purple-200">
          <code className="text-purple-800 text-sm">
            for row in range(1, 6): print(emoji * row)
          </code>
        </div>
      </div>
    </div>
  )
}
