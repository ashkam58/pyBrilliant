'use client'
import { useState } from 'react'

export default function DragonCave() {
  const [showCave, setShowCave] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [gems, setGems] = useState(0)

  const startQuest = () => {
    setShowCave(true)
    setCurrentStep(0)
    setGems(0)
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      setGems(gems + 1)
    }
  }

  const resetQuest = () => {
    setShowCave(false)
    setCurrentStep(0)
    setGems(0)
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-red-900 to-black rounded-2xl p-8 shadow-2xl border-4 border-orange-500 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-orange-200 mb-2 flex items-center justify-center space-x-2">
          <span>🐉</span>
          <span>Dragon Cave Challenge</span>
          <span>💎</span>
        </h3>
        <p className="text-orange-300">Help our brave hero collect magical gems using the power of for loops!</p>
      </div>

      {!showCave ? (
        <div className="text-center">
          <div className="bg-black/50 rounded-xl p-6 mb-6">
            <div className="text-6xl mb-4">🏰</div>
            <p className="text-orange-200 text-lg mb-4">
              The dragon's cave awaits... Are you brave enough to enter?
            </p>
          </div>
          <button
            onClick={startQuest}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 text-xl"
          >
            ⚔️ Enter the Dragon Cave
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-black/50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-orange-200">
                <span className="text-lg font-bold">Step: {currentStep}/5</span>
              </div>
              <div className="text-orange-200">
                <span className="text-lg font-bold">💎 Gems: {gems}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-16 rounded-lg border-2 flex items-center justify-center text-2xl ${
                    i < currentStep
                      ? 'bg-green-500 border-green-400 animate-pulse'
                      : i === currentStep
                      ? 'bg-yellow-500 border-yellow-400 animate-bounce'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  {i < currentStep ? '💎' : i === currentStep ? '🔍' : '?'}
                </div>
              ))}
            </div>

            {currentStep < 5 ? (
              <div className="text-center">
                <p className="text-orange-200 mb-4">
                  {currentStep === 0 && "🚶 Hero steps into the dark cave..."}
                  {currentStep === 1 && "✨ A gem glimmers in the corner!"}
                  {currentStep === 2 && "🐉 Dragon eyes glow in the distance..."}
                  {currentStep === 3 && "💎 Another precious gem found!"}
                  {currentStep === 4 && "🗡️ Almost at the dragon's lair..."}
                </p>
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  ➡️ Take Next Step (for loop iteration)
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <p className="text-green-300 text-xl font-bold mb-4">
                  Quest Complete! The dragon bows in respect! 🐉👑
                </p>
                <button
                  onClick={resetQuest}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  🔄 Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
