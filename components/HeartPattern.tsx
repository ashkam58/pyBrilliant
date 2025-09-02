'use client'
import { useState } from 'react'

export default function HeartPattern() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const heartSteps = [
    { line: "  ***   ***", description: "Top bumps of the heart" },
    { line: " ***** *****", description: "Wider top section" },
    { line: "*************", description: "Full width middle" },
    { line: " *********** ", description: "Start tapering down" },
    { line: "  *********  ", description: "Getting narrower" },
    { line: "   *******   ", description: "More narrow" },
    { line: "    *****    ", description: "Almost pointed" },
    { line: "     ***     ", description: "Nearly there" },
    { line: "      *      ", description: "Heart complete!" }
  ]

  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentStep(0)
    
    // Animate step by step
    for (let i = 0; i < heartSteps.length; i++) {
      setTimeout(() => {
        setCurrentStep(i + 1)
        if (i === heartSteps.length - 1) {
          setTimeout(() => setIsAnimating(false), 1000)
        }
      }, i * 600)
    }
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setCurrentStep(0)
  }

  return (
    <div className="bg-gradient-to-br from-pink-100 via-red-100 to-rose-100 rounded-2xl p-8 shadow-lg border-4 border-pink-400 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-red-700 mb-2 flex items-center justify-center space-x-2">
          <span>💖</span>
          <span>Heart Pattern - Code with Love</span>
          <span>💕</span>
        </h3>
        <p className="text-red-600 text-lg">Watch how loops create love! ❤️</p>
      </div>

      {/* Pattern Display */}
      <div className="bg-white rounded-xl p-8 mb-6 min-h-80 flex flex-col justify-center items-center border-2 border-pink-300">
        {currentStep === 0 && !isAnimating ? (
          <div className="text-center">
            <div className="text-6xl mb-4">💝</div>
            <p className="text-gray-600 text-lg">Click "Build Heart" to see the love pattern!</p>
          </div>
        ) : (
          <div className="space-y-1 font-mono text-sm">
            {heartSteps.map((step, stepIndex) => {
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
                    className={`text-red-500 text-lg font-bold ${
                      isCurrentlyBuilding ? 'animate-pulse text-pink-600' : ''
                    }`}
                    style={{
                      fontFamily: 'monospace',
                      letterSpacing: '2px'
                    }}
                  >
                    {step.line.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={`${
                          char === '*' ? 'text-red-500' : ''
                        } ${isCurrentlyBuilding ? 'animate-bounce' : ''}`}
                        style={{
                          animationDelay: `${charIndex * 0.05}s`
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
            
            {currentStep === heartSteps.length && !isAnimating && (
              <div className="text-center mt-6">
                <div className="text-4xl mb-2 animate-pulse">💕</div>
                <p className="text-red-600 font-bold text-lg">Heart Complete! Made with Code & Love!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Step Info */}
      {isAnimating && currentStep > 0 && currentStep <= heartSteps.length && (
        <div className="bg-pink-50 rounded-xl p-4 mb-4 border-2 border-pink-200">
          <p className="text-pink-800 font-semibold text-center">
            Step {currentStep}: {heartSteps[currentStep - 1].description}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="text-center space-x-4">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-red-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? '💖 Building Heart...' : '💕 Build Heart!'}
        </button>
        
        <button
          onClick={resetAnimation}
          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
        >
          🔄 Reset
        </button>
      </div>

      {/* Code Explanation */}
      <div className="mt-6 bg-red-50 rounded-xl p-4 border-2 border-red-200">
        <h4 className="font-bold text-red-800 mb-3">💻 How the Heart Code Works:</h4>
        <div className="space-y-2 text-sm text-red-700">
          <div className="bg-white rounded p-2 border border-red-200">
            <p><strong>Top Bumps:</strong> Fixed strings for the heart's curves</p>
            <code className="text-red-600 text-xs">print("  ***   ***")</code>
          </div>
          <div className="bg-white rounded p-2 border border-red-200">
            <p><strong>Bottom Triangle:</strong> Loop that decreases stars each row</p>
            <code className="text-red-600 text-xs">for i in range(6): print(" " * i + "*" * (13-2*i))</code>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-red-600 font-bold">❤️ Programming + Love = Beautiful Patterns! ❤️</span>
        </div>
      </div>
    </div>
  )
}
