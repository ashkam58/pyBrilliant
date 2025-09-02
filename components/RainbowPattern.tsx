'use client'
import { useState } from 'react'

export default function RainbowPattern() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const rainbowSteps = [
    { color: "🔴", letter: "R", description: "Red - Start of the rainbow!" },
    { color: "🟠", letter: "A", description: "Orange - Warm and bright!" },
    { color: "🟡", letter: "I", description: "Yellow - Sunny and cheerful!" },
    { color: "🟢", letter: "N", description: "Green - Fresh and lively!" },
    { color: "🔵", letter: "B", description: "Blue - Cool and calm!" },
    { color: "🟣", letter: "O", description: "Purple - Royal and magical!" },
    { color: "🌟", letter: "W", description: "Sparkle - Rainbow complete!" }
  ]

  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentStep(0)

    // Animate step by step
    for (let i = 0; i < rainbowSteps.length; i++) {
      setTimeout(() => {
        setCurrentStep(i + 1)
        if (i === rainbowSteps.length - 1) {
          setTimeout(() => setIsAnimating(false), 1000)
        }
      }, i * 700)
    }
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setCurrentStep(0)
  }

  return (
    <div className="bg-gradient-to-br from-red-100 via-yellow-100 to-purple-100 rounded-2xl p-8 shadow-lg border-4 border-purple-400 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-purple-700 mb-2 flex items-center justify-center space-x-2">
          <span>🌈</span>
          <span>Rainbow Pattern - Color Magic!</span>
          <span>✨</span>
        </h3>
        <p className="text-purple-600 text-lg">Watch colors create a magical rainbow! 🎨</p>
      </div>

      {/* Pattern Display */}
      <div className="bg-white rounded-xl p-8 mb-6 min-h-80 flex flex-col justify-center items-center border-2 border-purple-300">
        {currentStep === 0 && !isAnimating ? (
          <div className="text-center">
            <div className="text-6xl mb-4">🌈</div>
            <p className="text-gray-600 text-lg">Click "Build Rainbow" to see the colors!</p>
          </div>
        ) : (
          <div className="space-y-2 font-mono text-sm">
            {rainbowSteps.map((step, stepIndex) => {
              const shouldShow = stepIndex < currentStep
              const isCurrentlyBuilding = stepIndex === currentStep - 1 && isAnimating

              return (
                <div
                  key={stepIndex}
                  className={`flex justify-center transition-all duration-500 ${
                    shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <div
                    className={`text-2xl font-bold ${isCurrentlyBuilding ? 'animate-pulse' : ''}`}
                  >
                    {step.color.repeat(stepIndex + 3)}
                    <span className="ml-2 text-3xl">{step.letter}</span>
                  </div>
                </div>
              )
            })}

            {currentStep === rainbowSteps.length && !isAnimating && (
              <div className="text-center mt-6">
                <div className="text-4xl mb-2 animate-pulse">🌟</div>
                <p className="text-purple-600 font-bold text-lg">Rainbow Complete! Colors are Magical!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Step Info */}
      {isAnimating && currentStep > 0 && currentStep <= rainbowSteps.length && (
        <div className="bg-purple-50 rounded-xl p-4 mb-4 border-2 border-purple-200">
          <p className="text-purple-800 font-semibold text-center">
            Step {currentStep}: {rainbowSteps[currentStep - 1].description}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="text-center space-x-4">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? '🌈 Building Rainbow...' : '✨ Build Rainbow!'}
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
        <h4 className="font-bold text-indigo-800 mb-3">💻 How the Rainbow Code Works:</h4>
        <div className="space-y-2 text-sm text-indigo-700">
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>Color Arrays:</strong> Store colors and letters in lists</p>
            <code className="text-indigo-600 text-xs">colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]</code>
          </div>
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>String Repetition:</strong> Repeat colors for each row</p>
            <code className="text-indigo-600 text-xs">color * (i + 3)  # More colors each row</code>
          </div>
          <div className="bg-white rounded p-2 border border-indigo-200">
            <p><strong>Loop Through Colors:</strong> Build rainbow one color at a time</p>
            <code className="text-indigo-600 text-xs">for i in range(len(colors)):</code>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-indigo-600 font-bold">🌈 Code + Colors = Beautiful Rainbows! 🌈</span>
        </div>
      </div>
    </div>
  )
}
