'use client'
import { useState } from 'react'

export default function FloydsTrianglePattern() {
  const [rows, setRows] = useState(5)
  const [showSteps, setShowSteps] = useState(false)

  const generateFloydTriangle = () => {
    const triangle = []
    let number = 1
    
    for (let i = 1; i <= rows; i++) {
      const row = []
      for (let j = 1; j <= i; j++) {
        row.push(number)
        number++
      }
      triangle.push(row)
    }
    return triangle
  }

  const getTotalNumbers = () => {
    return (rows * (rows + 1)) / 2
  }

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-2xl p-6 shadow-lg border-4 border-purple-300 my-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-purple-800 mb-2 flex items-center justify-center space-x-2">
          <span>🔺</span>
          <span>Floyd's Triangle</span>
          <span>📈</span>
        </h3>
        <p className="text-purple-700 font-medium">Named after Robert Floyd - a famous number pattern!</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-lg font-bold text-purple-800">Rows:</label>
          <input
            type="range"
            min="3"
            max="8"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            className="w-24 accent-purple-500"
          />
          <span className="text-lg font-bold text-purple-800 bg-white px-2 py-1 rounded border-2 border-purple-300">
            {rows}
          </span>
        </div>

        <button
          onClick={() => setShowSteps(!showSteps)}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
        >
          {showSteps ? '🔄 Reset' : '🔺 Build Triangle'}
        </button>
      </div>

      {showSteps && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border-3 border-purple-200">
            <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
              🎯 Floyd's Triangle ({rows} rows):
            </h4>
            
            <div className="flex justify-center mb-6">
              <div className="space-y-2">
                {generateFloydTriangle().map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex justify-center space-x-3"
                    style={{ animationDelay: `${rowIndex * 0.3}s` }}
                  >
                    {row.map((num, numIndex) => (
                      <div
                        key={numIndex}
                        className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 text-white font-bold rounded-lg flex items-center justify-center text-lg shadow-md hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${(rowIndex * row.length + numIndex) * 0.1}s` }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <h5 className="font-bold text-purple-800 mb-2">📊 Stats:</h5>
                <div className="text-sm text-purple-700 space-y-1">
                  <div>Rows: <span className="font-bold">{rows}</span></div>
                  <div>Total Numbers: <span className="font-bold">{getTotalNumbers()}</span></div>
                  <div>Last Number: <span className="font-bold">{getTotalNumbers()}</span></div>
                  <div>Pattern: <span className="font-bold">Consecutive</span></div>
                </div>
              </div>
              
              <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
                <h5 className="font-bold text-pink-800 mb-2">🔍 Pattern Rule:</h5>
                <div className="text-sm text-pink-700 space-y-1">
                  <div>• Start with number 1</div>
                  <div>• Each row has row_number items</div>
                  <div>• Numbers increase consecutively</div>
                  <div>• Never restart counting</div>
                </div>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <h5 className="font-bold text-red-800 mb-2">💻 Code Logic:</h5>
                <div className="text-sm text-red-700 space-y-1">
                  <div className="font-mono bg-gray-100 p-2 rounded text-xs">
                    number = 1<br/>
                    for row in rows:<br/>
                    &nbsp;&nbsp;for col in row:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(number)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;number += 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
            <h5 className="font-bold text-purple-800 mb-2">🧠 Did You Know?</h5>
            <p className="text-purple-700 text-sm">
              Floyd's Triangle is named after computer scientist Robert Floyd. 
              It's used in mathematics and computer science to teach nested loops and number sequences!
              The total numbers in n rows is always n×(n+1)/2 - that's the triangle number formula! 🎯
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
