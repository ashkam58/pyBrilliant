'use client'
import { useState } from 'react'

export default function StarTrianglePattern() {
  const [height, setHeight] = useState(5)
  const [showPattern, setShowPattern] = useState(false)

  const generateTriangle = () => {
    const triangle = []
    for (let i = 1; i <= height; i++) {
      const spaces = " ".repeat(height - i)
      const stars = "*".repeat(2 * i - 1)
      triangle.push({ spaces, stars, row: i })
    }
    return triangle
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg border-4 border-blue-300 my-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center justify-center space-x-2">
          <span>🔺</span>
          <span>Triangle Star Builder</span>
          <span>⭐</span>
        </h3>
        <p className="text-blue-700 font-medium">Create perfect triangle patterns!</p>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <label className="text-lg font-bold text-blue-800">Triangle Height:</label>
        <input
          type="range"
          min="3"
          max="10"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
          className="w-32 accent-blue-500"
        />
        <span className="text-xl font-bold text-blue-800 bg-white px-3 py-1 rounded-full border-2 border-blue-300">
          {height}
        </span>
        <button
          onClick={() => setShowPattern(!showPattern)}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
        >
          {showPattern ? '🔄 Reset' : '🏔️ Build Triangle'}
        </button>
      </div>

      {showPattern && (
        <div className="bg-white rounded-xl p-6 border-3 border-blue-200">
          <h4 className="text-lg font-bold text-blue-800 mb-4 text-center">
            🏔️ Your Star Triangle:
          </h4>
          
          <div className="font-mono text-center space-y-1 mb-6">
            {generateTriangle().map((row, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  opacity: showPattern ? 1 : 0
                }}
              >
                <span className="text-blue-400">{row.spaces}</span>
                <span className="text-yellow-500 text-lg">{row.stars}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h5 className="font-bold text-blue-800 mb-2">🔍 Pattern Rules:</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Spaces decrease: {height} → 1</li>
                <li>• Stars increase: 1, 3, 5, 7...</li>
                <li>• Formula: Stars = 2 × row - 1</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h5 className="font-bold text-purple-800 mb-2">📊 Row Analysis:</h5>
              <div className="text-sm text-purple-700 space-y-1">
                {generateTriangle().slice(0, 3).map((row, i) => (
                  <div key={i}>Row {i + 1}: {height - (i + 1)} spaces + {2 * (i + 1) - 1} stars</div>
                ))}
                {height > 3 && <div>...</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
