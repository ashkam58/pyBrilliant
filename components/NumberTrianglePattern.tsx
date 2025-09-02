'use client'
import { useState } from 'react'

export default function NumberTrianglePattern() {
  const [rows, setRows] = useState(5)
  const [patternType, setPatternType] = useState('repeat')
  const [showPattern, setShowPattern] = useState(false)

  const generatePattern = () => {
    const pattern = []
    for (let i = 1; i <= rows; i++) {
      if (patternType === 'repeat') {
        pattern.push(i.toString().repeat(i))
      } else {
        let line = ''
        for (let j = 1; j <= i; j++) {
          line += j.toString() + ' '
        }
        pattern.push(line.trim())
      }
    }
    return pattern
  }

  return (
    <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 rounded-2xl p-6 shadow-lg border-4 border-cyan-300 my-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-cyan-800 mb-2 flex items-center justify-center space-x-2">
          <span>🔢</span>
          <span>Number Triangle Lab</span>
          <span>📊</span>
        </h3>
        <p className="text-cyan-700 font-medium">Experiment with different number patterns!</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-lg font-bold text-cyan-800">Rows:</label>
          <input
            type="range"
            min="3"
            max="9"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            className="w-24 accent-cyan-500"
          />
          <span className="text-lg font-bold text-cyan-800 bg-white px-2 py-1 rounded border-2 border-cyan-300">
            {rows}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-lg font-bold text-cyan-800">Type:</label>
          <select
            value={patternType}
            onChange={(e) => setPatternType(e.target.value)}
            className="px-3 py-1 rounded border-2 border-cyan-300 font-bold text-cyan-800"
          >
            <option value="repeat">Repeat (111, 222...)</option>
            <option value="sequence">Sequence (1, 12, 123...)</option>
          </select>
        </div>

        <button
          onClick={() => setShowPattern(!showPattern)}
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
        >
          {showPattern ? '🔄 Reset' : '🔢 Generate'}
        </button>
      </div>

      {showPattern && (
        <div className="bg-white rounded-xl p-6 border-3 border-cyan-200">
          <h4 className="text-lg font-bold text-cyan-800 mb-4 text-center">
            🎯 Your Number Pattern:
          </h4>
          
          <div className="space-y-2 mb-6">
            {generatePattern().map((row, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="font-bold text-cyan-700">
                  Row {index + 1}:
                </div>
                <div className="font-mono text-xl text-blue-600 flex-1 text-center">
                  {row}
                </div>
                <div className="text-sm text-cyan-600 bg-white px-2 py-1 rounded border">
                  {patternType === 'repeat' ? `${index + 1} repeated` : `${index + 1} numbers`}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200">
              <h5 className="font-bold text-cyan-800 mb-2">🔍 Pattern Analysis:</h5>
              {patternType === 'repeat' ? (
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Each row repeats its number</li>
                  <li>• Row 1: "1" × 1 = "1"</li>
                  <li>• Row 2: "2" × 2 = "22"</li>
                  <li>• Row n: "n" × n</li>
                </ul>
              ) : (
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Each row shows sequence 1 to n</li>
                  <li>• Row 1: "1"</li>
                  <li>• Row 2: "1 2"</li>
                  <li>• Row n: "1 2 3 ... n"</li>
                </ul>
              )}
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h5 className="font-bold text-blue-800 mb-2">💻 Code Concept:</h5>
              <div className="text-sm text-blue-700 space-y-1">
                {patternType === 'repeat' ? (
                  <>
                    <div className="font-mono bg-gray-100 p-2 rounded">str(i) * i</div>
                    <div>Converts number to string and repeats it</div>
                  </>
                ) : (
                  <>
                    <div className="font-mono bg-gray-100 p-2 rounded">for j in range(1, i+1)</div>
                    <div>Nested loop for sequence generation</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
