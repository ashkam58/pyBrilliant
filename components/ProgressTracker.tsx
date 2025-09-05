"use client";
import React, { useState, useEffect } from "react";

interface ProgressTrackerProps {
  totalMCQs?: number;
  totalDrills?: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  totalMCQs = 16, 
  totalDrills = 5 
}) => {
  const [mcqsCompleted, setMcqsCompleted] = useState(0);
  const [drillsCompleted, setDrillsCompleted] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const totalQuestions = totalMCQs + totalDrills;
  const completedQuestions = mcqsCompleted + drillsCompleted;
  const progressPercentage = Math.round((completedQuestions / totalQuestions) * 100);

  useEffect(() => {
    if (progressPercentage === 100 && !showConfetti) {
      setShowConfetti(true);
      // Auto-hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [progressPercentage, showConfetti]);

  // Mock function to increment progress (in real app, this would be connected to actual quiz completion)
  const incrementMCQ = () => {
    if (mcqsCompleted < totalMCQs) {
      setMcqsCompleted(prev => prev + 1);
    }
  };

  const incrementDrill = () => {
    if (drillsCompleted < totalDrills) {
      setDrillsCompleted(prev => prev + 1);
    }
  };

  const resetProgress = () => {
    setMcqsCompleted(0);
    setDrillsCompleted(0);
    setShowConfetti(false);
  };

  return (
    <div className="rounded-3xl border p-5 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-sm relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute animate-bounce text-2xl`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              {['🎉', '🎊', '⭐', '🏆', '✨'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-lg text-indigo-800">📊 Assessment Progress</h4>
        <div className="text-sm text-indigo-600 font-medium">
          {completedQuestions}/{totalQuestions} Complete
        </div>
      </div>

      {/* Main Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-indigo-700">Overall Progress</span>
          <span className="text-sm font-bold text-indigo-700">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-white rounded-full h-4 border-2 border-indigo-200">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage > 15 && (
              <span className="text-white text-xs font-bold">
                {progressPercentage === 100 ? '🎉' : '📈'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* MCQ Progress */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">❓</span>
              <span className="text-sm font-medium text-blue-800">Multiple Choice</span>
            </div>
            <span className="text-sm font-bold text-blue-800">{mcqsCompleted}/{totalMCQs}</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(mcqsCompleted / totalMCQs) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-blue-600">
            {mcqsCompleted === totalMCQs ? "✅ All MCQs completed!" : `${totalMCQs - mcqsCompleted} remaining`}
          </div>
        </div>

        {/* Code Drills Progress */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-600">💻</span>
              <span className="text-sm font-medium text-green-800">Code Drills</span>
            </div>
            <span className="text-sm font-bold text-green-800">{drillsCompleted}/{totalDrills}</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-2">
            <div 
              className="bg-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(drillsCompleted / totalDrills) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-green-600">
            {drillsCompleted === totalDrills ? "✅ All drills completed!" : `${totalDrills - drillsCompleted} remaining`}
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="mb-4">
        <div className="text-sm font-medium text-indigo-700 mb-2">Achievement Badges:</div>
        <div className="flex flex-wrap gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
            mcqsCompleted >= totalMCQs / 2 
              ? "bg-blue-100 border-blue-300 text-blue-700" 
              : "bg-gray-100 border-gray-300 text-gray-500"
          }`}>
            🎯 Quiz Master {mcqsCompleted >= totalMCQs / 2 ? "✓" : ""}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
            drillsCompleted >= totalDrills / 2 
              ? "bg-green-100 border-green-300 text-green-700" 
              : "bg-gray-100 border-gray-300 text-gray-500"
          }`}>
            💻 Code Warrior {drillsCompleted >= totalDrills / 2 ? "✓" : ""}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
            progressPercentage === 100 
              ? "bg-purple-100 border-purple-300 text-purple-700" 
              : "bg-gray-100 border-gray-300 text-gray-500"
          }`}>
            🏆 Python Master {progressPercentage === 100 ? "✓" : ""}
          </div>
        </div>
      </div>

      {/* Completion Status */}
      {progressPercentage === 100 ? (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4 text-center">
          <div className="text-lg font-bold mb-1">🎉 Congratulations! 🎉</div>
          <div className="text-sm">You've completed the Python Foundations course!</div>
          <div className="text-xs mt-2 opacity-90">Certificate unlocked! Ready for the next challenge?</div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4 text-center">
          <div className="text-indigo-800 font-medium mb-1">Keep Going! 💪</div>
          <div className="text-sm text-indigo-600">
            Complete {totalQuestions - completedQuestions} more questions to unlock your certificate
          </div>
          <div className="text-xs text-indigo-500 mt-1">
            You're {progressPercentage}% of the way there!
          </div>
        </div>
      )}

      {/* Debug Controls (remove in production) */}
      <div className="mt-4 pt-4 border-t border-indigo-200">
        <div className="text-xs text-indigo-500 mb-2">Progress Controls:</div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={incrementMCQ}
            disabled={mcqsCompleted >= totalMCQs}
            className="px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 disabled:opacity-50 rounded"
          >
            +MCQ
          </button>
          <button
            onClick={incrementDrill}
            disabled={drillsCompleted >= totalDrills}
            className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 disabled:opacity-50 rounded"
          >
            +Drill
          </button>
          <button
            onClick={resetProgress}
            className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
