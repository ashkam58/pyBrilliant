'use client'
import { useState } from 'react'

type DemoCase = {
  input: any
  description: string
  emoji: string
}

export default function MatchPatternDemo() {
  const [selectedInput, setSelectedInput] = useState<any>([0, 0])
  const [showMatching, setShowMatching] = useState(false)

  const demoInputs: DemoCase[] = [
    { input: [0, 0], description: "Origin Point", emoji: "🎯" },
    { input: [0, 5], description: "Y-axis Point", emoji: "📏" },
    { input: [3, 0], description: "X-axis Point", emoji: "📐" },
    { input: [4, 4], description: "Diagonal Point", emoji: "↗️" },
    { input: [2, 3], description: "Quadrant I Point", emoji: "📍" },
    { input: [-1, 2], description: "Quadrant II Point", emoji: "📍" },
    { input: "not a point", description: "Invalid Input", emoji: "❌" }
  ]

  const getMatchSteps = (input: any) => {
    const steps = []
    
    steps.push({
      pattern: `match ${JSON.stringify(input)}:`,
      description: "Start pattern matching",
      matches: false,
      result: "Begin matching process",
      emoji: "🔍"
    })

    // Case (0, 0)
    const case1Matches = Array.isArray(input) && input[0] === 0 && input[1] === 0
    steps.push({
      pattern: "case (0, 0):",
      description: "Check if point is origin",
      matches: case1Matches,
      result: case1Matches ? "🎯 Origin - The center of the universe!" : "Not origin, continue",
      emoji: case1Matches ? "✅" : "❌"
    })

    if (case1Matches) return steps

    // Case (0, y)
    const case2Matches = Array.isArray(input) && input[0] === 0 && input[1] !== 0
    steps.push({
      pattern: "case (0, y):",
      description: "Check if point is on Y-axis",
      matches: case2Matches,
      result: case2Matches ? `📏 On Y-axis at height ${input[1]}` : "Not on Y-axis, continue",
      emoji: case2Matches ? "✅" : "❌"
    })

    if (case2Matches) return steps

    // Case (x, 0)
    const case3Matches = Array.isArray(input) && input[0] !== 0 && input[1] === 0
    steps.push({
      pattern: "case (x, 0):",
      description: "Check if point is on X-axis",
      matches: case3Matches,
      result: case3Matches ? `📐 On X-axis at position ${input[0]}` : "Not on X-axis, continue",
      emoji: case3Matches ? "✅" : "❌"
    })

    if (case3Matches) return steps

    // Case (x, y) if x == y
    const case4Matches = Array.isArray(input) && input[0] === input[1]
    steps.push({
      pattern: "case (x, y) if x == y:",
      description: "Check if point is on diagonal",
      matches: case4Matches,
      result: case4Matches ? `↗️ On diagonal at (${input[0]}, ${input[1]})` : "Not on diagonal, continue",
      emoji: case4Matches ? "✅" : "❌"
    })

    if (case4Matches) return steps

    // Case (x, y) if x > 0 and y > 0
    const case5Matches = Array.isArray(input) && input[0] > 0 && input[1] > 0
    steps.push({
      pattern: "case (x, y) if x > 0 and y > 0:",
      description: "Check if point is in Quadrant I",
      matches: case5Matches,
      result: case5Matches ? `📍 Quadrant I: (${input[0]}, ${input[1]})` : "Not in Quadrant I, continue",
      emoji: case5Matches ? "✅" : "❌"
    })

    if (case5Matches) return steps

    // Case (x, y)
    const case6Matches = Array.isArray(input) && input.length === 2
    steps.push({
      pattern: "case (x, y):",
      description: "Check if it's any valid point",
      matches: case6Matches,
      result: case6Matches ? `📍 Point at (${input[0]}, ${input[1]})` : "Not a valid point, continue",
      emoji: case6Matches ? "✅" : "❌"
    })

    if (case6Matches) return steps

    // Case _
    steps.push({
      pattern: "case _:",
      description: "Wildcard - matches anything else",
      matches: true,
      result: "🤷 Not a valid point!",
      emoji: "✅"
    })

    return steps
  }

  const steps = getMatchSteps(selectedInput)

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200 my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center space-x-2">
          <span>🎯</span>
          <span>Match Pattern Visualizer</span>
        </h3>
        <p className="text-gray-600">See how pattern matching works step by step!</p>
      </div>

      {/* Input Selection */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-700 mb-3 text-center">Choose an input to test:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {demoInputs.map((demo, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedInput(demo.input)
                setShowMatching(false)
              }}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                JSON.stringify(selectedInput) === JSON.stringify(demo.input)
                  ? 'border-purple-400 bg-purple-100 shadow-md'
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-1">{demo.emoji}</div>
              <div className="text-xs font-medium text-gray-700">{demo.description}</div>
              <div className="text-xs text-gray-500 font-mono mt-1">
                {JSON.stringify(demo.input)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Visualize Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowMatching(!showMatching)}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105"
        >
          {showMatching ? '🔄 Reset' : '▶️ Visualize Matching'}
        </button>
      </div>

      {/* Pattern Matching Visualization */}
      {showMatching && (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <div className="inline-block p-3 bg-white rounded-lg border-2 border-purple-300">
              <div className="text-sm text-gray-600">Input:</div>
              <div className="font-mono text-lg font-bold text-purple-600">
                {JSON.stringify(selectedInput)}
              </div>
            </div>
          </div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-500 ${
                step.matches 
                  ? 'bg-green-50 border-green-200 shadow-md' 
                  : 'bg-gray-50 border-gray-200'
              }`}
              style={{
                animationDelay: `${index * 0.4}s`
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-gray-600 border-2 border-gray-300">
                {index + 1}
              </div>
              
              <div className="flex-shrink-0 text-2xl">
                {step.emoji}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm text-purple-700 bg-purple-100 px-3 py-1 rounded mb-1">
                  {step.pattern}
                </div>
                <div className="text-sm text-gray-600">
                  {step.description}
                </div>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <div className={`font-medium ${step.matches ? 'text-green-700' : 'text-gray-600'}`}>
                  {step.result}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-6 p-4 bg-gradient-to-r from-green-100 to-purple-100 rounded-xl border-2 border-green-200">
            <div className="text-xl font-bold text-gray-800">
              🎉 Pattern matched! Execution complete.
            </div>
            <div className="text-sm text-gray-600 mt-1">
              The first matching pattern wins and executes its code block.
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-purple-100 rounded-xl">
        <div className="text-sm text-purple-800">
          <strong>💡 Pro Tip:</strong> Match statements test patterns in order from top to bottom. 
          The first pattern that matches wins! Always put more specific patterns before general ones.
        </div>
      </div>
    </div>
  )
}
