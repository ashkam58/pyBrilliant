"use client";
import React, { useState } from "react";

const BigOCheatSheet: React.FC = () => {
  const [selectedComplexity, setSelectedComplexity] = useState("O(1)");

  const complexities = {
    "O(1)": {
      name: "Constant Time",
      color: "bg-green-500",
      description: "Always takes the same time, regardless of input size",
      examples: [
        {
          operation: "Array access by index",
          code: "arr[5]",
          explanation: "Direct memory access"
        },
        {
          operation: "Hash table lookup",
          code: "dict['key']",
          explanation: "Average case for well-designed hash table"
        },
        {
          operation: "Stack push/pop",
          code: "stack.append(x)\nstack.pop()",
          explanation: "Add/remove from end of list"
        }
      ],
      realWorld: "Checking if a user is logged in (session lookup)"
    },
    "O(log n)": {
      name: "Logarithmic Time",
      color: "bg-blue-500", 
      description: "Time increases slowly as input grows (divides problem in half)",
      examples: [
        {
          operation: "Binary search",
          code: "# Search in sorted array\nwhile low <= high:\n    mid = (low + high) // 2",
          explanation: "Eliminate half of remaining elements each step"
        },
        {
          operation: "Balanced tree operations",
          code: "bst.find(value)",
          explanation: "Navigate down one path in tree"
        },
        {
          operation: "Finding height of tree",
          code: "height = math.log2(nodes)",
          explanation: "For balanced binary tree"
        }
      ],
      realWorld: "Finding a word in dictionary, database index lookup"
    },
    "O(n)": {
      name: "Linear Time",
      color: "bg-yellow-500",
      description: "Time grows proportionally with input size",
      examples: [
        {
          operation: "Array traversal",
          code: "for item in array:\n    print(item)",
          explanation: "Must visit each element once"
        },
        {
          operation: "Finding max/min",
          code: "max_val = max(array)",
          explanation: "Must check all elements"
        },
        {
          operation: "Linear search",
          code: "target in array",
          explanation: "May need to check each element"
        }
      ],
      realWorld: "Reading every email in inbox, counting inventory items"
    },
    "O(n log n)": {
      name: "Linearithmic Time",
      color: "bg-orange-500",
      description: "Efficient divide-and-conquer algorithms",
      examples: [
        {
          operation: "Merge sort",
          code: "def merge_sort(arr):\n    # Divide: O(log n) levels\n    # Conquer: O(n) work per level",
          explanation: "Split into halves, merge sorted results"
        },
        {
          operation: "Heap sort",
          code: "heapify(arr)  # O(n log n)",
          explanation: "Build heap, extract min/max n times"
        },
        {
          operation: "Quick sort (average)",
          code: "# Average case with good pivots",
          explanation: "Good pivot selection gives balanced partitions"
        }
      ],
      realWorld: "Sorting large datasets, organizing search results"
    },
    "O(n²)": {
      name: "Quadratic Time",
      color: "bg-red-500",
      description: "Time grows with square of input (nested loops)",
      examples: [
        {
          operation: "Bubble sort",
          code: "for i in range(n):\n    for j in range(n-1):\n        # Compare adjacent",
          explanation: "Each element compared with every other"
        },
        {
          operation: "Finding all pairs",
          code: "for i in range(n):\n    for j in range(i+1, n):\n        compare(arr[i], arr[j])",
          explanation: "Every element paired with every other"
        },
        {
          operation: "Nested list traversal",
          code: "for row in matrix:\n    for col in row:\n        process(col)",
          explanation: "Process each cell in 2D structure"
        }
      ],
      realWorld: "Comparing every student with every other student"
    },
    "O(n³)": {
      name: "Cubic Time",
      color: "bg-purple-500",
      description: "Triple nested loops or cube-related operations",
      examples: [
        {
          operation: "Matrix multiplication",
          code: "for i in range(n):\n    for j in range(n):\n        for k in range(n):\n            result[i][j] += A[i][k] * B[k][j]",
          explanation: "Standard algorithm for multiplying matrices"
        },
        {
          operation: "Finding triplets",
          code: "# Find three numbers that sum to target\nfor i in range(n):\n    for j in range(i+1, n):\n        for k in range(j+1, n):",
          explanation: "Check all possible combinations of 3 elements"
        }
      ],
      realWorld: "3D graphics calculations, complex optimization problems"
    },
    "O(2ⁿ)": {
      name: "Exponential Time",
      color: "bg-pink-500",
      description: "Time doubles with each additional input (very slow!)",
      examples: [
        {
          operation: "Recursive Fibonacci",
          code: "def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)",
          explanation: "Each call branches into two more calls"
        },
        {
          operation: "Subset generation",
          code: "# Generate all possible subsets\n# 2^n total subsets",
          explanation: "Each element can be included or excluded"
        },
        {
          operation: "Brute force password",
          code: "# Try all combinations\n# 2^n possibilities for n bits",
          explanation: "Exponential search space"
        }
      ],
      realWorld: "Cryptography, solving complex puzzles by trying all possibilities"
    }
  };

  const complexityOrder = ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(n³)", "O(2ⁿ)"];
  const currentComplexity = complexities[selectedComplexity as keyof typeof complexities];

  const getInputSize = (complexity: string, seconds: number = 1) => {
    // Rough estimates for what input size can be processed in given time
    switch(complexity) {
      case "O(1)": return "Any size";
      case "O(log n)": return "~10¹⁸";
      case "O(n)": return "~10⁸";
      case "O(n log n)": return "~10⁶";
      case "O(n²)": return "~10⁴";
      case "O(n³)": return "~10²";
      case "O(2ⁿ)": return "~30";
      default: return "Varies";
    }
  };

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-lg">📊 Big-O Complexity Cheat Sheet</h4>
        <div className="text-sm text-slate-500">Time Complexity Reference</div>
      </div>

      {/* Complexity Overview Bar */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Complexity Scale (Fast → Slow):</div>
        <div className="flex flex-wrap gap-1">
          {complexityOrder.map((complexity) => {
            const info = complexities[complexity as keyof typeof complexities];
            return (
              <button
                key={complexity}
                onClick={() => setSelectedComplexity(complexity)}
                className={`px-3 py-2 rounded-lg border text-sm font-mono ${
                  selectedComplexity === complexity
                    ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className={`w-full h-1 ${info.color} rounded mb-1`}></div>
                {complexity}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Complexity Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Details */}
        <div>
          <div className="bg-slate-100 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-4 h-4 ${currentComplexity.color} rounded`}></div>
              <h5 className="font-semibold text-slate-800">{selectedComplexity} - {currentComplexity.name}</h5>
            </div>
            <p className="text-sm text-slate-600 mb-4">{currentComplexity.description}</p>
            
            <div className="text-sm">
              <div className="font-medium text-slate-700 mb-1">Practical limit (1 second):</div>
              <div className="text-slate-600">~{getInputSize(selectedComplexity)} elements</div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm font-medium text-blue-800 mb-2">Real-World Example:</div>
            <div className="text-sm text-blue-700">{currentComplexity.realWorld}</div>
          </div>
        </div>

        {/* Right Column - Code Examples */}
        <div>
          <div className="text-sm font-medium text-slate-700 mb-3">Common Examples:</div>
          <div className="space-y-4">
            {currentComplexity.examples.map((example, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="font-medium text-slate-800 mb-2">{example.operation}</div>
                <div className="bg-slate-900 rounded-lg p-3 mb-2">
                  <pre className="text-green-400 font-mono text-xs whitespace-pre-wrap">
                    {example.code}
                  </pre>
                </div>
                <div className="text-sm text-slate-600 italic">
                  💡 {example.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="mt-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Quick Reference Table:</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left">Complexity</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">n=10</th>
                <th className="px-3 py-2 text-left">n=100</th>
                <th className="px-3 py-2 text-left">n=1000</th>
                <th className="px-3 py-2 text-left">Common Operations</th>
              </tr>
            </thead>
            <tbody>
              {complexityOrder.map((complexity, index) => {
                const info = complexities[complexity as keyof typeof complexities];
                const n10 = complexity === "O(1)" ? "1" : 
                           complexity === "O(log n)" ? "3" :
                           complexity === "O(n)" ? "10" :
                           complexity === "O(n log n)" ? "33" :
                           complexity === "O(n²)" ? "100" :
                           complexity === "O(n³)" ? "1K" :
                           "1K+";
                
                const n100 = complexity === "O(1)" ? "1" : 
                            complexity === "O(log n)" ? "7" :
                            complexity === "O(n)" ? "100" :
                            complexity === "O(n log n)" ? "664" :
                            complexity === "O(n²)" ? "10K" :
                            complexity === "O(n³)" ? "1M" :
                            "10³⁰";
                
                const n1000 = complexity === "O(1)" ? "1" : 
                             complexity === "O(log n)" ? "10" :
                             complexity === "O(n)" ? "1K" :
                             complexity === "O(n log n)" ? "10K" :
                             complexity === "O(n²)" ? "1M" :
                             complexity === "O(n³)" ? "1B" :
                             "10³⁰⁰";

                return (
                  <tr key={complexity} className={`border-t ${selectedComplexity === complexity ? "bg-indigo-50" : ""}`}>
                    <td className="px-3 py-2 font-mono font-medium">{complexity}</td>
                    <td className="px-3 py-2">{info.name}</td>
                    <td className="px-3 py-2 text-center">{n10}</td>
                    <td className="px-3 py-2 text-center">{n100}</td>
                    <td className="px-3 py-2 text-center">{n1000}</td>
                    <td className="px-3 py-2 text-xs">
                      {info.examples[0]?.operation || "Various"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rules for Analysis */}
      <div className="mt-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4">
        <div className="text-sm font-medium text-slate-700 mb-3">Analysis Rules:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span><strong>Focus on worst case:</strong> Big-O is upper bound</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span><strong>Drop constants:</strong> O(3n) → O(n)</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span><strong>Drop lower terms:</strong> O(n² + n) → O(n²)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span><strong>Nested loops multiply:</strong> O(n) × O(m) = O(n×m)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigOCheatSheet;
