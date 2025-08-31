'use client'
import { useState, useEffect } from 'react'

interface Monster {
  id: number
  name: string
  hp: number
  maxHp: number
  emoji: string
}

export default function LoopBattleArena() {
  const [gameState, setGameState] = useState<'setup' | 'battle' | 'victory'>('setup')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [currentBattle, setCurrentBattle] = useState(0)
  const [battleLog, setBattleLog] = useState<string[]>([])
  const [playerStats, setPlayerStats] = useState({ wins: 0, totalDamage: 0 })

  const monsterTypes = [
    { name: 'Buggy Goblin', emoji: '👹', hp: 30 },
    { name: 'Loop Dragon', emoji: '🐲', hp: 50 },
    { name: 'Syntax Spider', emoji: '🕷️', hp: 25 },
    { name: 'Error Beast', emoji: '👻', hp: 40 },
    { name: 'Code Crusher', emoji: '🤖', hp: 35 }
  ]

  const setupBattle = () => {
    const newMonsters = []
    for (let i = 0; i < 5; i++) {
      const monster = monsterTypes[Math.floor(Math.random() * monsterTypes.length)]
      newMonsters.push({
        id: i,
        name: monster.name,
        hp: monster.hp,
        maxHp: monster.hp,
        emoji: monster.emoji
      })
    }
    setMonsters(newMonsters)
    setGameState('battle')
    setCurrentBattle(0)
    setBattleLog(['⚔️ Battle Arena Activated!', '🎯 5 monsters await your loop magic!'])
    setPlayerStats({ wins: 0, totalDamage: 0 })
  }

  const attackMonster = () => {
    if (currentBattle >= 5) return

    const damage = Math.floor(Math.random() * 20) + 10 // 10-30 damage
    const newMonsters = [...monsters]
    newMonsters[currentBattle].hp -= damage

    const newLog = [...battleLog]
    newLog.push(`⚔️ Attack #${currentBattle + 1}: Hit ${monsters[currentBattle].name} for ${damage} damage!`)

    if (newMonsters[currentBattle].hp <= 0) {
      newMonsters[currentBattle].hp = 0
      newLog.push(`💀 ${monsters[currentBattle].name} defeated!`)
      
      const newStats = {
        wins: playerStats.wins + 1,
        totalDamage: playerStats.totalDamage + damage
      }
      setPlayerStats(newStats)

      if (currentBattle === 4) {
        newLog.push('🏆 ALL MONSTERS DEFEATED! Victory is yours!')
        setGameState('victory')
      } else {
        newLog.push(`🎯 for loop continues to monster ${currentBattle + 2}...`)
        setCurrentBattle(currentBattle + 1)
      }
    }

    setMonsters(newMonsters)
    setBattleLog(newLog)
  }

  const resetBattle = () => {
    setGameState('setup')
    setMonsters([])
    setCurrentBattle(0)
    setBattleLog([])
    setPlayerStats({ wins: 0, totalDamage: 0 })
  }

  return (
    <div className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 rounded-2xl p-8 shadow-2xl border-4 border-red-500 my-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-orange-200 mb-2 flex items-center justify-center space-x-2">
          <span>⚔️</span>
          <span>Loop Battle Arena</span>
          <span>🛡️</span>
        </h3>
        <p className="text-orange-300">Test your loop mastery in epic monster battles!</p>
      </div>

      {gameState === 'setup' && (
        <div className="text-center">
          <div className="bg-black/50 rounded-xl p-6 mb-6">
            <div className="text-6xl mb-4">🏟️</div>
            <p className="text-orange-200 text-lg mb-4">
              Welcome to the Arena, Loop Master! 5 fearsome monsters challenge your skills!
            </p>
            <p className="text-orange-300">
              Use your for loop knowledge to defeat them all in sequence!
            </p>
          </div>
          <button
            onClick={setupBattle}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 text-xl"
          >
            ⚔️ Enter the Arena
          </button>
        </div>
      )}

      {gameState === 'battle' && (
        <div className="space-y-6">
          {/* Battle Status */}
          <div className="bg-black/50 rounded-xl p-4">
            <div className="text-center mb-4">
              <p className="text-orange-200 text-lg font-bold">
                for monster in range(5): # Currently fighting monster {currentBattle + 1}
              </p>
            </div>
            
            {/* Monster Grid */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {monsters.map((monster, index) => (
                <div
                  key={monster.id}
                  className={`p-4 rounded-lg border-2 text-center ${
                    index === currentBattle
                      ? 'bg-red-500 border-red-400 animate-pulse'
                      : monster.hp <= 0
                      ? 'bg-gray-600 border-gray-500 opacity-50'
                      : 'bg-orange-800 border-orange-600'
                  }`}
                >
                  <div className="text-3xl mb-2">{monster.emoji}</div>
                  <div className="text-white font-bold text-sm mb-1">{monster.name}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(monster.hp / monster.maxHp) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-red-200 text-xs">
                    {monster.hp}/{monster.maxHp} HP
                  </div>
                </div>
              ))}
            </div>

            {/* Attack Button */}
            {currentBattle < 5 && monsters[currentBattle]?.hp > 0 && (
              <div className="text-center">
                <p className="text-orange-200 mb-4">
                  🎯 Targeting: {monsters[currentBattle].name} {monsters[currentBattle].emoji}
                </p>
                <button
                  onClick={attackMonster}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  ⚔️ Cast Attack Spell (loop iteration)
                </button>
              </div>
            )}
          </div>

          {/* Battle Log */}
          <div className="bg-black/50 rounded-xl p-4 max-h-32 overflow-y-auto">
            <h4 className="text-orange-200 font-bold mb-2">📜 Battle Log:</h4>
            {battleLog.map((log, index) => (
              <p key={index} className="text-orange-100 text-sm mb-1">
                {log}
              </p>
            ))}
          </div>
        </div>
      )}

      {gameState === 'victory' && (
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <p className="text-yellow-300 text-2xl font-bold mb-4">
            ARENA CHAMPION! 
          </p>
          <p className="text-orange-200 text-lg mb-4">
            You've mastered the for loop in epic combat!
          </p>
          <div className="bg-black/50 rounded-xl p-4 mb-6">
            <h4 className="text-orange-200 font-bold mb-2">🎯 Final Stats:</h4>
            <p className="text-orange-100">Monsters Defeated: {playerStats.wins}/5</p>
            <p className="text-orange-100">Total Damage Dealt: {playerStats.totalDamage}</p>
            <p className="text-yellow-200 font-bold">Loop Mastery: LEGENDARY! ⭐</p>
          </div>
          <button
            onClick={resetBattle}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
          >
            🔄 Fight Again
          </button>
        </div>
      )}
    </div>
  )
}
