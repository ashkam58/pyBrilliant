'use client'
import { useState, useEffect } from 'react'

export default function TrollBridge() {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'victory'>('intro')
  const [attempts, setAttempts] = useState(0)
  const [currentRiddle, setCurrentRiddle] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const riddles = [
    {
      question: "What has 4 legs in morning, 2 at noon, 4 at night?",
      wrongAnswer: "A table?",
      isCorrect: false
    },
    {
      question: "What grows when shared?",
      wrongAnswer: "Pizza?", 
      isCorrect: false
    },
    {
      question: "What language do wizards code in?",
      wrongAnswer: "Python!",
      isCorrect: true
    }
  ]

  const startChallenge = () => {
    setGameState('playing')
    setAttempts(0)
    setCurrentRiddle(0)
    setShowAnswer(false)
  }

  const attemptAnswer = () => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setShowAnswer(true)
    
    if (riddles[currentRiddle].isCorrect) {
      setTimeout(() => setGameState('victory'), 2000)
    } else {
      setTimeout(() => {
        setCurrentRiddle(currentRiddle + 1)
        setShowAnswer(false)
      }, 3000)
    }
  }

  const resetGame = () => {
    setGameState('intro')
    setAttempts(0)
    setCurrentRiddle(0)
    setShowAnswer(false)
  }

  return (
    <div className="bg-gradient-to-br from-green-900 via-brown-800 to-gray-900 rounded-2xl p-8 shadow-2xl border-4 border-brown-600 my-8" style={{background: 'linear-gradient(to bottom right, #1a4d1a, #4a3c1d, #2d3748)'}}>
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-green-200 mb-2 flex items-center justify-center space-x-2">
          <span>🌉</span>
          <span>The Troll Bridge Challenge</span>
          <span>🧌</span>
        </h3>
        <p className="text-green-300">Answer the troll's riddles using while loop persistence!</p>
      </div>

      {gameState === 'intro' && (
        <div className="text-center">
          <div className="bg-black/50 rounded-xl p-6 mb-6">
            <div className="text-6xl mb-4">🧌</div>
            <p className="text-green-200 text-lg mb-4">
              "HALT, TRAVELER! None shall pass without proving their wisdom!"
            </p>
            <p className="text-green-300">
              The ancient troll blocks your path. You must answer his riddles correctly to proceed!
            </p>
          </div>
          <button
            onClick={startChallenge}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-brown-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-brown-700 transition-all duration-300 hover:scale-105 text-xl"
          >
            🤔 Face the Troll's Challenge
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="space-y-6">
          <div className="bg-black/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="text-green-200 text-lg font-bold mb-2">
                Attempt #{attempts + 1} | while not correct_answer:
              </div>
              <div className="text-6xl mb-4">🧌</div>
            </div>

            <div className="bg-brown-800/50 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 text-lg font-bold mb-2">
                🧌 TROLL ASKS:
              </p>
              <p className="text-yellow-100 text-xl">
                "{riddles[currentRiddle].question}"
              </p>
            </div>

            {!showAnswer ? (
              <div className="text-center">
                <p className="text-green-200 mb-4">What is your answer, brave hero?</p>
                <button
                  onClick={attemptAnswer}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  💭 "{riddles[currentRiddle].wrongAnswer}"
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-brown-700/50 rounded-lg p-4 mb-4">
                  <p className="text-blue-200 text-lg font-bold mb-2">
                    🤷 HERO SAYS:
                  </p>
                  <p className="text-blue-100 text-xl">
                    "{riddles[currentRiddle].wrongAnswer}"
                  </p>
                </div>
                
                {riddles[currentRiddle].isCorrect ? (
                  <div className="text-green-300 text-xl font-bold animate-bounce">
                    ✅ CORRECT! The troll steps aside with respect!
                  </div>
                ) : (
                  <div className="text-red-300 text-xl font-bold">
                    ❌ Wrong! The loop continues... (while not correct_answer)
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {gameState === 'victory' && (
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-green-300 text-xl font-bold mb-4">
            Bridge Unlocked! The path to the tower is clear! 🌉✨
          </p>
          <p className="text-green-200 mb-4">
            You used the while loop perfectly - kept trying until success!
          </p>
          <p className="text-yellow-200 font-bold mb-6">
            Total attempts: {attempts} (Great persistence!)
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
          >
            🔄 Challenge the Troll Again
          </button>
        </div>
      )}
    </div>
  )
}
