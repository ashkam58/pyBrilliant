"use client";
import React, { useState } from "react";

const LoopDrill: React.FC = () => {
  const [currentDrill, setCurrentDrill] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const drills = [
    {
      title: "Pattern Printing Challenge",
      problem: "Write a loop to print this exact pattern:",
      expectedOutput: `*
**
***
****`,
      template: `# Fill in the loop
for i in range(???):
    print(???)`,
      solution: `for i in range(4):
    print('*' * (i + 1))`,
      explanation: "Use range(4) for 4 rows, and multiply '*' by (i+1) to get increasing stars.",
      hints: [
        "You need 4 rows, so range(4)",
        "Row 0 needs 1 star, row 1 needs 2 stars, etc.",
        "Use string multiplication: '*' * count"
      ]
    },
    {
      title: "Nested Loop Complexity",
      problem: "What's the time complexity of this nested loop?",
      codeExample: `for i in range(n):
    for j in range(i):
        print(i, j)`,
      expectedOutput: "Time complexity analysis",
      template: "Time complexity: O(???)",
      solution: "O(n²)",
      explanation: "Inner loop runs 0+1+2+...+(n-1) = n(n-1)/2 times, which is O(n²)",
      hints: [
        "Count total iterations: 0 + 1 + 2 + ... + (n-1)",
        "This is an arithmetic series",
        "Sum = n(n-1)/2, which grows as n²"
      ]
    },
    {
      title: "Loop Optimization",
      problem: "Optimize this loop to reduce unnecessary iterations:",
      codeExample: `# Find first negative number
found = False
result = None
for i in range(len(numbers)):
    if numbers[i] < 0:
        found = True
        result = numbers[i]
# continues checking even after finding one!`,
      template: "# Write optimized version\nfor i in range(len(numbers)):\n    ???",
      solution: `for i in range(len(numbers)):
    if numbers[i] < 0:
        result = numbers[i]
        break  # Stop as soon as we find one!`,
      explanation: "Use 'break' to exit the loop early once the first negative number is found.",
      hints: [
        "Use 'break' to exit early",
        "No need to check remaining elements",
        "This changes worst-case O(n) to average-case better performance"
      ]
    },
    {
      title: "List Comprehension vs Loop",
      problem: "Convert this loop to a more efficient list comprehension:",
      codeExample: `result = []
for x in range(10):
    if x % 2 == 0:
        result.append(x * x)`,
      template: "result = [??? for ??? in ??? if ???]",
      solution: "result = [x * x for x in range(10) if x % 2 == 0]",
      explanation: "List comprehensions are often faster and more readable for simple transformations.",
      hints: [
        "Pattern: [expression for item in iterable if condition]",
        "Expression: x * x",
        "Condition: x % 2 == 0"
      ]
    },
    {
      title: "Infinite Loop Debug",
      problem: "Fix this infinite loop bug:",
      codeExample: `i = 0
while i < 10:
    print(i)
    # Missing increment!`,
      template: `i = 0
while i < 10:
    print(i)
    # Add missing line here
    ???`,
      solution: `i = 0
while i < 10:
    print(i)
    i += 1  # Increment counter!`,
      explanation: "Always ensure the loop condition will eventually become false.",
      hints: [
        "The variable 'i' never changes",
        "Add increment: i += 1",
        "Always verify loop termination conditions"
      ]
    }
  ];

  const currentDrillData = drills[currentDrill];

  const checkAnswer = () => {
    const userAnswer = userAnswers[currentDrill]?.trim() || "";
    const correctAnswer = currentDrillData.solution.trim();
    
    // Simple check - in real implementation, you'd want more sophisticated comparison
    const correct = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase().replace(/\s+/g, ''));
    setIsCorrect(correct);
    setShowSolution(true);
  };

  const nextDrill = () => {
    if (currentDrill < drills.length - 1) {
      setCurrentDrill(currentDrill + 1);
      setShowSolution(false);
      setIsCorrect(null);
    }
  };

  const prevDrill = () => {
    if (currentDrill > 0) {
      setCurrentDrill(currentDrill - 1);
      setShowSolution(false);
      setIsCorrect(null);
    }
  };

  const updateAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentDrill] = answer;
    setUserAnswers(newAnswers);
  };

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-lg">🔄 Loop Mastery Drill</h4>
        <div className="text-sm text-slate-500">
          {currentDrill + 1} of {drills.length}
        </div>
      </div>

      <div className="mb-4">
        <div className="bg-slate-100 rounded-lg p-4 mb-4">
          <h5 className="font-semibold text-slate-800 mb-2">{currentDrillData.title}</h5>
          <p className="text-sm text-slate-600">{currentDrillData.problem}</p>
        </div>

        {/* Code Example */}
        {currentDrillData.codeExample && (
          <div className="mb-4">
            <div className="text-sm font-medium text-slate-700 mb-2">Given Code:</div>
            <div className="bg-slate-900 rounded-lg p-3">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {currentDrillData.codeExample}
              </pre>
            </div>
          </div>
        )}

        {/* Expected Output */}
        {currentDrillData.expectedOutput && currentDrillData.expectedOutput !== "Time complexity analysis" && (
          <div className="mb-4">
            <div className="text-sm font-medium text-slate-700 mb-2">Expected Output:</div>
            <div className="bg-slate-100 rounded-lg p-3 font-mono text-sm whitespace-pre-wrap">
              {currentDrillData.expectedOutput}
            </div>
          </div>
        )}

        {/* User Input */}
        <div className="mb-4">
          <div className="text-sm font-medium text-slate-700 mb-2">Your Solution:</div>
          <textarea
            value={userAnswers[currentDrill] || ""}
            onChange={(e) => updateAnswer(e.target.value)}
            placeholder={currentDrillData.template}
            className="w-full h-24 p-3 border rounded-lg font-mono text-sm"
            disabled={showSolution}
          />
        </div>

        {/* Hints */}
        {!showSolution && (
          <div className="mb-4">
            <details className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <summary className="text-sm font-medium text-yellow-800 cursor-pointer">
                💡 Need a hint? (Click to expand)
              </summary>
              <div className="mt-2 space-y-1">
                {currentDrillData.hints.map((hint, index) => (
                  <div key={index} className="text-sm text-yellow-700">
                    {index + 1}. {hint}
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}

        {/* Check Answer Button */}
        {!showSolution && (
          <button
            onClick={checkAnswer}
            disabled={!userAnswers[currentDrill]?.trim()}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            Check Answer
          </button>
        )}

        {/* Solution */}
        {showSolution && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border ${
              isCorrect 
                ? "bg-green-50 border-green-200" 
                : "bg-red-50 border-red-200"
            }`}>
              <div className={`font-medium ${
                isCorrect ? "text-green-800" : "text-red-800"
              }`}>
                {isCorrect ? "✅ Correct!" : "❌ Not quite right"}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-slate-700 mb-2">Correct Solution:</div>
              <div className="bg-slate-900 rounded-lg p-3">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                  {currentDrillData.solution}
                </pre>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm font-medium text-blue-800 mb-2">Explanation:</div>
              <div className="text-sm text-blue-700">{currentDrillData.explanation}</div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevDrill}
            disabled={currentDrill === 0}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm"
          >
            ← Previous
          </button>
          
          <div className="flex gap-2">
            {drills.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentDrill 
                    ? "bg-indigo-600" 
                    : index < currentDrill 
                    ? "bg-green-400" 
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextDrill}
            disabled={currentDrill === drills.length - 1}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoopDrill;
