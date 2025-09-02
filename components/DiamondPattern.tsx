'use client'
import { useState } from 'react'

export default function DiamondPattern() {
  const [size, setSize] = useState(4)
  const [showPattern, setShowPattern] = useState(false)

  const generateDiamond = () => {
    const diamond = []
    
    // Top half (including middle)
    for (let i = 0; i < size; i++) {
      const spaces = " ".repeat(size - i - 1)
      const stars = "*".repeat(2 * i + 1)
      diamond.push({ spaces, stars, section: 'top', row: i + 1 })
    }
    
    // Bottom half
    for (let i = size - 2; i >= 0; i--) {
      const spaces = " ".repeat(size - i - 1)
      const stars = "*".repeat(2 * i + 1)
      diamond.push({ spaces, stars, section: 'bottom', row: i + 1 })
    }
    
    return diamond
  }

  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-2xl p-6 shadow-lg border-4 border-pink-300 my-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-pink-800 mb-2 flex items-center justify-center space-x-2">
          <span>💎</span>
          <span>Diamond Sparkle Creator</span>
          <span>✨</span>
        </h3>
        <p className="text-pink-700 font-medium">Craft sparkling diamond patterns!</p>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <label className="text-lg font-bold text-pink-800">Diamond Size:</label>
        <input
          type="range"
          min="3"
          max="8"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          className="w-32 accent-pink-500"
        />
        <span className="text-xl font-bold text-pink-800 bg-white px-3 py-1 rounded-full border-2 border-pink-300">
          {size}
        </span>
        <button
          onClick={() => setShowPattern(!showPattern)}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
        >
          {showPattern ? '🔄 Reset' : '💎 Create Diamond'}
        </button>
      </div>

      {showPattern && (
        <div className="bg-white rounded-xl p-6 border-3 border-pink-200">
          <h4 className="text-lg font-bold text-pink-800 mb-4 text-center">
            💎 Your Sparkling Diamond:
          </h4>
          
          <div className="font-mono text-center space-y-1 mb-6 bg-gray-900 p-4 rounded-lg">
            {generateDiamond().map((row, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  row.section === 'top' ? 'text-cyan-300' : 'text-purple-300'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: showPattern ? 1 : 0
                }}
              >
                <span className="text-gray-600">{row.spaces}</span>
                <span className="text-lg animate-pulse">{row.stars}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
              <h5 className="font-bold text-pink-800 mb-2">🔍 Diamond Structure:</h5>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• <span className="text-cyan-600 font-bold">Top Half:</span> Expanding triangle</li>
                <li>• <span className="text-purple-600 font-bold">Bottom Half:</span> Shrinking triangle</li>
                <li>• Total rows: {2 * size - 1}</li>
                <li>• Widest point: {2 * size - 1} stars</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h5 className="font-bold text-purple-800 mb-2">⚡ Code Logic:</h5>
              <div className="text-sm text-purple-700 space-y-1">
                <div>1. Loop 0 to {size - 1} (top half)</div>
                <div>2. Loop {size - 2} to 0 (bottom half)</div>
                <div>3. Spaces = size - row - 1</div>
                <div>4. Stars = 2 × row + 1</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border-2 border-pink-300">
            <p className="text-center font-bold text-pink-800">
              ✨ Fun Fact: Diamonds are made by combining two triangles - one growing up, one shrinking down!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
