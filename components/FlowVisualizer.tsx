'use client'
import { useState } from 'react'

interface FlowStep {
  condition: string
  action: string
  result: string
  emoji: string
}

export default function FlowVisualizer() {
  const [selectedAge, setSelectedAge] = useState(15)
  const [showFlow, setShowFlow] = useState(false)

  const getFlowSteps = (age: number): FlowStep[] => {
    const steps: FlowStep[] = []
    
    steps.push({
      condition: `age = ${age}`,
      action: 'Start checking conditions',
      result: 'Begin flow',
      emoji: '🚀'
    })

    if (age < 3) {
      steps.push({
        condition: `${age} < 3`,
        action: 'First condition TRUE',
        result: '👶 Baby steps!',
        emoji: '✅'
      })
    } else {
      steps.push({
        condition: `${age} < 3`,
        action: 'First condition FALSE',
        result: 'Continue to next condition',
        emoji: '❌'
      })

      if (age < 13) {
        steps.push({
          condition: `${age} < 13`,
          action: 'Second condition TRUE',
          result: '🧒 Kid power!',
          emoji: '✅'
        })
      } else {
        steps.push({
          condition: `${age} < 13`,
          action: 'Second condition FALSE',
          result: 'Continue to next condition',
          emoji: '❌'
        })

        if (age < 20) {
          steps.push({
            condition: `${age} < 20`,
            action: 'Third condition TRUE',
            result: '🌟 Teen energy!',
            emoji: '✅'
          })
        } else {
          steps.push({
            condition: `${age} < 20`,
            action: 'Third condition FALSE',
            result: 'Continue to next condition',
            emoji: '❌'
          })

          if (age < 65) {
            steps.push({
              condition: `${age} < 65`,
              action: 'Fourth condition TRUE',
              result: '💪 Adult mode!',
              emoji: '✅'
            })
          } else {
            steps.push({
              condition: `${age} < 65`,
              action: 'Fourth condition FALSE',
              result: 'Go to else clause',
              emoji: '❌'
            })
            steps.push({
              condition: 'else',
              action: 'Default case',
              result: '🌸 Wisdom mode!',
              emoji: '✅'
            })
          }
        }
      }
    }

    return steps
  }

  const steps = getFlowSteps(selectedAge)

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center space-x-2">
          <span>🎯</span>
          <span>Control Flow Visualizer</span>
        </h3>
        <p className="text-gray-600">See how if-elif-else decisions work step by step!</p>
      </div>

      {/* Age Input */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <label className="text-lg font-medium text-gray-700">Age:</label>
        <input
          type="number"
          value={selectedAge}
          onChange={(e) => setSelectedAge(parseInt(e.target.value) || 0)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg text-center text-lg font-bold focus:border-blue-400 focus:outline-none"
          min="0"
          max="120"
        />
        <button
          onClick={() => setShowFlow(!showFlow)}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        >
          {showFlow ? '🔄 Reset' : '▶️ Trace Flow'}
        </button>
      </div>

      {/* Flow Visualization */}
      {showFlow && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-center text-gray-800 mb-4">
            🔍 Step-by-Step Execution
          </h4>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-500 ${
                step.emoji === '✅' 
                  ? 'bg-green-50 border-green-200' 
                  : step.emoji === '❌'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
              style={{
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-gray-600 border-2 border-gray-300">
                {index + 1}
              </div>
              
              <div className="flex-shrink-0 text-2xl">
                {step.emoji}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  if {step.condition}:
                </div>
                <div className="text-sm text-gray-700 mt-1">
                  {step.action}
                </div>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <div className="font-medium text-gray-800">
                  {step.result}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl border-2 border-green-200">
            <div className="text-xl font-bold text-gray-800">
              🎉 Final Result: {steps[steps.length - 1].result}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Execution complete! The program found its path through the decision tree.
            </div>
          </div>
        </div>
      )}

      {/* Quick Test Buttons */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-3">🎮 Quick Tests:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {[2, 8, 16, 30, 70].map(age => (
            <button
              key={age}
              onClick={() => {
                setSelectedAge(age)
                setShowFlow(false)
              }}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Age {age}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
