'use client'
import { useState } from 'react'

export default function StarRowPattern() {
  const [rows, setRows] = useState(5)
  const [showPattern, setShowPattern] = useState(false)

  const generatePattern = () => {
    const pattern = []
    for (let i = 1; i <= rows; i++) {
      pattern.push("*".repeat(i))
    }
    return pattern
  }

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-2xl p-6 shadow-lg border-4 border-yellow-300 my-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-orange-800 mb-2 flex items-center justify-center space-x-2">
          <span>⭐</span>
          <span>Star Row Builder</span>
          <span>⭐</span>
        </h3>
        <p className="text-orange-700 font-medium">Watch how loops create star patterns!</p>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <label className="text-lg font-bold text-orange-800">Number of Rows:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
          className="w-32 accent-orange-500"
        />
        <span className="text-xl font-bold text-orange-800 bg-white px-3 py-1 rounded-full border-2 border-orange-300">
          {rows}
        </span>
        <button
          onClick={() => setShowPattern(!showPattern)}
          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
        >
          {showPattern ? '🔄 Reset' : '✨ Generate Pattern'}
        </button>
      </div>

      {showPattern && (
        <div className="bg-white rounded-xl p-6 border-3 border-orange-200">
          <h4 className="text-lg font-bold text-orange-800 mb-4 text-center">
            🎪 Your Star Pattern:
          </h4>
          
          <div className="space-y-2">
            {generatePattern().map((row, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-2 bg-orange-50 rounded-lg border border-orange-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="font-bold text-orange-700 w-16">
                  Row {index + 1}:
                </div>
                <div className="font-mono text-2xl text-yellow-600">
                  {row}
                </div>
                <div className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                  {row.length} star{row.length !== 1 ? 's' : ''}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-300">
            <p className="text-center font-bold text-orange-800">
              🔍 Pattern Rule: Each row has one more star than the previous row!
            </p>
            <p className="text-center text-orange-700 text-sm mt-1">
              Row number = Number of stars (Row 1 → 1 star, Row 2 → 2 stars...)
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
