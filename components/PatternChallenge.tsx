'use client'
import { useState } from 'react'

export default function PatternChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const challenges = [
    {
      title: "🌟 Star Pyramid Challenge",
      description: "How many stars will be in row 4 of this pattern?",
      code: `for i in range(1, 6):
    print("*" * i)`,
      options: ["3 stars", "4 stars", "5 stars", "6 stars"],
      correct: 1,
      explanation: "Row 4 means i = 4, so we print '*' * 4 = 4 stars!"
    },
    {
      title: "🔢 Number Pattern Puzzle",
      description: "What will be printed in the last line?",
      code: `for row in range(1, 4):
    numbers = str(row) * row
    print(numbers)`,
      options: ["333", "123", "111", "444"],
      correct: 0,
      explanation: "When row = 3, we print str(3) * 3 = '3' * 3 = '333'"
    },
    {
      title: "🔺 Triangle Math Magic",
      description: "In a triangle pattern, row 5 has how many stars using formula 2*i-1?",
      code: `# Formula: stars = 2 * row - 1
# Row 5: stars = 2 * 5 - 1 = ?`,
      options: ["8 stars", "9 stars", "10 stars", "11 stars"],
      correct: 1,
      explanation: "2 × 5 - 1 = 10 - 1 = 9 stars! This creates odd numbers: 1,3,5,7,9..."
    }
  ]

  const checkAnswer = () => {
    const isCorrect = parseInt(userAnswer) === challenges[currentChallenge].correct
    if (isCorrect) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1)
      setUserAnswer('')
      setShowResult(false)
    }
  }

  const resetChallenge = () => {
    setCurrentChallenge(0)
    setUserAnswer('')
    setShowResult(false)
    setScore(0)
  }

  const challenge = challenges[currentChallenge]
  const isLastChallenge = currentChallenge === challenges.length - 1

  return (
    <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-2xl p-6 shadow-lg border-4 border-green-400 my-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-green-800 mb-2 flex items-center justify-center space-x-2">
          <span>🎮</span>
          <span>Pattern Master Challenge</span>
          <span>🏆</span>
        </h3>
        <div className="flex justify-center space-x-4">
          <span className="bg-white px-3 py-1 rounded-full border-2 border-green-300 font-bold text-green-800">
            Challenge {currentChallenge + 1}/{challenges.length}
          </span>
          <span className="bg-white px-3 py-1 rounded-full border-2 border-blue-300 font-bold text-blue-800">
            Score: {score}/{challenges.length}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-3 border-green-200">
        <h4 className="text-xl font-bold text-green-800 mb-4">
          {challenge.title}
        </h4>
        
        <p className="text-gray-700 mb-4 text-lg">
          {challenge.description}
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <pre className="text-green-400 font-mono text-sm">
            <code>{challenge.code}</code>
          </pre>
        </div>

        {!showResult ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {challenge.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setUserAnswer(index.toString())}
                  className={`p-3 rounded-lg border-2 font-bold transition-all duration-200 ${
                    userAnswer === index.toString()
                      ? 'bg-blue-500 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
            
            {userAnswer && (
              <div className="text-center">
                <button
                  onClick={checkAnswer}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                >
                  🎯 Check Answer
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-2 ${
              parseInt(userAnswer) === challenge.correct
                ? 'bg-green-100 border-green-400'
                : 'bg-red-100 border-red-400'
            }`}>
              <div className="text-center mb-2">
                {parseInt(userAnswer) === challenge.correct ? (
                  <div className="text-green-800">
                    <div className="text-4xl">🎉</div>
                    <div className="font-bold text-lg">Correct! Well done!</div>
                  </div>
                ) : (
                  <div className="text-red-800">
                    <div className="text-4xl">🤔</div>
                    <div className="font-bold text-lg">Not quite right, but keep learning!</div>
                  </div>
                )}
              </div>
              
              <div className="bg-white p-3 rounded-lg border">
                <p className="font-bold text-gray-800 mb-1">💡 Explanation:</p>
                <p className="text-gray-700">{challenge.explanation}</p>
              </div>
            </div>

            <div className="text-center space-x-4">
              {!isLastChallenge ? (
                <button
                  onClick={nextChallenge}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  ➡️ Next Challenge
                </button>
              ) : (
                <div>
                  <div className="mb-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-400">
                    <h5 className="font-bold text-yellow-800 text-xl mb-2">🏆 Challenge Complete!</h5>
                    <p className="text-yellow-700">
                      Final Score: {score}/{challenges.length} 
                      {score === challenges.length ? " - Perfect! You're a Pattern Master! 🌟" : " - Great effort! Keep practicing! 💪"}
                    </p>
                  </div>
                  <button
                    onClick={resetChallenge}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                  >
                    🔄 Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
