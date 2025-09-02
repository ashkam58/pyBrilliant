'use client'
import { useState } from 'react'

export default function PascalTrianglePattern() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentRow, setCurrentRow] = useState(0)

  const generatePascalsTriangle = (rows: number) => {
    const triangle = []

    for (let i = 0; i < rows; i++) {
      const row = [1] // Every row starts with 1

      if (triangle.length > 0) {
        // Each number is sum of two numbers above it
        for (let j = 0; j < triangle[triangle.length - 1].length - 1; j++) {
          row.push(triangle[triangle.length - 1][j] + triangle[triangle.length - 1][j + 1])
        }
        row.push(1) // Every row ends with 1
      }

      triangle.push(row)
    }

    return triangle
  }

  const triangle = generatePascalsTriangle(8)

  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentRow(0)

    // Animate row by row
    for (let i = 0; i < triangle.length; i++) {
      setTimeout(() => {
        setCurrentRow(i + 1)
        if (i === triangle.length - 1) {
          setTimeout(() => setIsAnimating(false), 1000)
        }
      }, i * 800)
    }
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setCurrentRow(0)
  }

  return (
    <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 rounded-2xl p-8 shadow-lg border-4 border-purple-400 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-purple-700 mb-2 flex items-center justify-center space-x-2">
          <span>🎪</span>
          <span>Pascal's Triangle - Math Magic!</span>
          <span>✨</span>
        </h3>
        <p className="text-purple-600 text-lg">Watch numbers create magical patterns! 🔮</p>
      </div>

      {/* Pattern Display */}
      <div className="bg-white rounded-xl p-8 mb-6 min-h-96 flex flex-col justify-center items-center border-2 border-purple-300">
        {currentRow === 0 && !isAnimating ? (
          <div className="text-center">
            <div className="text-6xl mb-4">🎭</div>
            <p className="text-gray-600 text-lg">Click "Build Triangle" to see the math magic!</p>
          </div>
        ) : (
          <div className="space-y-2 font-mono text-sm">
            {triangle.map((row, rowIndex) => {
              const shouldShow = rowIndex < currentRow
              const isCurrentlyBuilding = rowIndex === currentRow - 1 && isAnimating

              return (
                <div
                  key={rowIndex}
                  className={`flex justify-center transition-all duration-500 ${
                    shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <div className="flex space-x-1">
                    {row.map((num, numIndex) => (
                      <div
                        key={numIndex}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-purple-700 border-2 border-purple-300 ${
                          isCurrentlyBuilding ? 'animate-pulse bg-purple-200' : 'bg-purple-50'
                        } transition-all duration-300`}
                        style={{
                          animationDelay: `${numIndex * 0.1}s`
                        }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {currentRow === triangle.length && !isAnimating && (
              <div className="text-center mt-6">
                <div className="text-4xl mb-2 animate-pulse">🎉</div>
                <p className="text-purple-600 font-bold text-lg">Triangle Complete! Math is Magical!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Step Info */}
      {isAnimating && currentRow > 0 && currentRow <= triangle.length && (
        <div className="bg-purple-50 rounded-xl p-4 mb-4 border-2 border-purple-200">
          <p className="text-purple-800 font-semibold text-center">
            Row {currentRow}: Each number is the sum of the two numbers above it!
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="text-center space-x-4">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? '🎪 Building Triangle...' : '✨ Build Triangle!'}
        </button>

        <button
          onClick={resetAnimation}
          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
        >
          🔄 Reset
        </button>
      </div>

      {/* Code Explanation */}
      <div className="mt-6 bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
        <h4 className="font-bold text-indigo-800 mb-3">💻 How Pascal's Triangle Code Works:</h4>
        <div className="space-y-2 text-sm text-indigo-700">
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>Row Start:</strong> Every row begins and ends with 1</p>
            <code className="text-indigo-600 text-xs">row = [1] ... row.append(1)</code>
          </div>
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>Middle Numbers:</strong> Sum of two numbers above</p>
            <code className="text-indigo-600 text-xs">row.append(prev_row[j] + prev_row[j+1])</code>
          </div>
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>Pattern Magic:</strong> Each number reveals hidden relationships!</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-indigo-600 font-bold">🎪 Math + Code = Infinite Magic! 🎪</span>
        </div>
      </div>
    </div>
  )
}
