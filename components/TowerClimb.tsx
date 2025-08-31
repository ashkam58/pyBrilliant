'use client'
import { useState } from 'react'

export default function TowerClimb() {
  const [isClimbing, setIsClimbing] = useState(false)
  const [currentFloor, setCurrentFloor] = useState(1)
  const [safeFloors, setSafeFloors] = useState(0)
  const [gameLog, setGameLog] = useState<string[]>([])
  const [gameComplete, setGameComplete] = useState(false)

  const startClimb = () => {
    setIsClimbing(true)
    setCurrentFloor(1)
    setSafeFloors(0)
    setGameLog(['🏰 Starting the treacherous tower climb...'])
    setGameComplete(false)
  }

  const climbNextFloor = () => {
    const newLog = [...gameLog]
    
    newLog.push(`🚶 Approaching floor ${currentFloor}...`)
    
    // Check if cursed floor (multiple of 3)
    if (currentFloor % 3 === 0) {
      newLog.push('💀 DANGER! Cursed floor detected!')
      newLog.push('🏃 Using CONTINUE spell to skip safely!')
      newLog.push('✨ *whoosh* - teleported past the trap!')
      newLog.push('---')
    }
    // Check for treasure room
    else if (currentFloor === 15) {
      newLog.push('🎉 SECRET TREASURE ROOM DISCOVERED!')
      newLog.push('💰 Found magical potion and golden key!')
      newLog.push('🔑 This key will unlock the princess\'s cell!')
      newLog.push('🏆 QUEST ACCOMPLISHED!')
      setSafeFloors(safeFloors + 1)
      setGameComplete(true)
    }
    // Regular safe floor
    else {
      newLog.push(`✅ Floor ${currentFloor} is safe!`)
      newLog.push('🕯️ Lighting a torch and resting...')
      newLog.push('---')
      setSafeFloors(safeFloors + 1)
    }
    
    setGameLog(newLog)
    
    if (currentFloor === 15 || gameComplete) {
      setGameComplete(true)
    } else {
      setCurrentFloor(currentFloor + 1)
    }
  }

  const resetClimb = () => {
    setIsClimbing(false)
    setCurrentFloor(1)
    setSafeFloors(0)
    setGameLog([])
    setGameComplete(false)
  }

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl border-4 border-purple-500 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-purple-200 mb-2 flex items-center justify-center space-x-2">
          <span>🏰</span>
          <span>Tower of Repetition</span>
          <span>⚡</span>
        </h3>
        <p className="text-purple-300">Master break and continue statements to navigate the dangerous tower!</p>
      </div>

      {!isClimbing ? (
        <div className="text-center">
          <div className="bg-black/50 rounded-xl p-6 mb-6">
            <div className="text-6xl mb-4">🗼</div>
            <p className="text-purple-200 text-lg mb-4">
              The Tower of Repetition looms before you. Princess Pythonia awaits rescue at the top!
            </p>
            <p className="text-purple-300">
              Beware: Some floors are cursed. Use your break and continue magic wisely!
            </p>
          </div>
          <button
            onClick={startClimb}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 text-xl"
          >
            🧗 Begin Tower Climb
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-black/50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-purple-200">
                <span className="text-lg font-bold">Floor: {currentFloor}/20</span>
              </div>
              <div className="text-purple-200">
                <span className="text-lg font-bold">🛡️ Safe Floors: {safeFloors}</span>
              </div>
            </div>
            
            {/* Tower visualization */}
            <div className="grid grid-cols-10 gap-1 mb-6">
              {[...Array(20)].map((_, i) => {
                const floor = i + 1
                const isCursed = floor % 3 === 0
                const isTreasure = floor === 15
                const isCurrentFloor = floor === currentFloor
                const isPassed = floor < currentFloor
                
                return (
                  <div
                    key={i}
                    className={`h-8 rounded border flex items-center justify-center text-xs font-bold ${
                      isCurrentFloor
                        ? 'bg-yellow-400 border-yellow-300 animate-pulse'
                        : isPassed
                        ? isCursed
                          ? 'bg-red-500 border-red-400'
                          : isTreasure
                          ? 'bg-gold-500 border-gold-400'
                          : 'bg-green-500 border-green-400'
                        : isCursed
                        ? 'bg-red-800 border-red-600'
                        : isTreasure
                        ? 'bg-yellow-800 border-yellow-600'
                        : 'bg-gray-700 border-gray-600'
                    }`}
                    style={isTreasure && isPassed ? {background: '#ffd700', borderColor: '#ffed4e'} : {}}
                  >
                    {isPassed
                      ? isCursed
                        ? '💀'
                        : isTreasure
                        ? '🔑'
                        : '✅'
                      : isCurrentFloor
                      ? '🧙'
                      : isCursed
                      ? '💀'
                      : isTreasure
                      ? '💰'
                      : floor
                    }
                  </div>
                )
              })}
            </div>

            {/* Action area */}
            {!gameComplete ? (
              <div className="text-center">
                <p className="text-purple-200 mb-4">
                  {currentFloor % 3 === 0 
                    ? `⚠️ Floor ${currentFloor} is cursed! Should you continue?`
                    : currentFloor === 15
                    ? `✨ Floor ${currentFloor} feels different... something special awaits!`
                    : `🚶 Floor ${currentFloor} - Safe to proceed`
                  }
                </p>
                <button
                  onClick={climbNextFloor}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {currentFloor % 3 === 0 ? '⚡ Use Continue Magic' : '⬆️ Climb Higher'}
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">👸</div>
                <p className="text-green-300 text-xl font-bold mb-4">
                  Princess Pythonia is FREE! Quest Complete! 🎉
                </p>
                <p className="text-purple-200 mb-4">
                  You mastered break and continue to navigate the tower perfectly!
                </p>
                <button
                  onClick={resetClimb}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  🔄 Climb Again
                </button>
              </div>
            )}
          </div>

          {/* Game log */}
          <div className="bg-black/50 rounded-xl p-4 max-h-48 overflow-y-auto">
            <h4 className="text-purple-200 font-bold mb-2">📜 Adventure Log:</h4>
            {gameLog.map((log, index) => (
              <p key={index} className="text-purple-100 text-sm mb-1">
                {log}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
