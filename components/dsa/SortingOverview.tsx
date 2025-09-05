"use client";
import React, { useState } from "react";

type SortingAlgorithm = {
  name: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  description: string;
  pros: string[];
  cons: string[];
  useCase: string;
};

const SortingOverview: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(0);

  const algorithms: SortingAlgorithm[] = [
    {
      name: "Bubble Sort",
      timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
      spaceComplexity: "O(1)",
      description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order.",
      pros: ["Simple to understand", "In-place sorting", "Stable"],
      cons: ["Very slow for large datasets", "Poor average performance"],
      useCase: "Educational purposes, very small datasets"
    },
    {
      name: "Selection Sort", 
      timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
      spaceComplexity: "O(1)",
      description: "Finds the minimum element and places it at the beginning, then repeats for the remaining unsorted portion.",
      pros: ["Simple implementation", "In-place sorting", "Consistent performance"],
      cons: ["Always O(n²)", "Not stable", "Poor for large data"],
      useCase: "Small datasets where memory is limited"
    },
    {
      name: "Insertion Sort",
      timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
      spaceComplexity: "O(1)",
      description: "Builds the final sorted array one item at a time, inserting each element into its correct position.",
      pros: ["Efficient for small datasets", "Adaptive", "Stable", "In-place"],
      cons: ["Poor performance on large datasets", "O(n²) average case"],
      useCase: "Small datasets, nearly sorted data, online algorithms"
    },
    {
      name: "Merge Sort",
      timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
      spaceComplexity: "O(n)",
      description: "Divides the array into halves, sorts them recursively, then merges the sorted halves.",
      pros: ["Consistent O(n log n)", "Stable", "Good for large datasets"],
      cons: ["Requires O(n) extra space", "Not in-place"],
      useCase: "Large datasets, when stability is required"
    },
    {
      name: "Quick Sort",
      timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)" },
      spaceComplexity: "O(log n)",
      description: "Selects a 'pivot' element and partitions around it, then recursively sorts the partitions.",
      pros: ["Fast average case", "In-place", "Cache efficient"],
      cons: ["Worst case O(n²)", "Not stable", "Poor pivot choice affects performance"],
      useCase: "General purpose sorting, when average case performance matters"
    },
    {
      name: "Heap Sort",
      timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
      spaceComplexity: "O(1)",
      description: "Builds a max heap, then repeatedly extracts the maximum element and places it at the end.",
      pros: ["Consistent O(n log n)", "In-place", "Not sensitive to input"],
      cons: ["Not stable", "Poor cache performance", "More complex"],
      useCase: "When consistent performance and minimal space are needed"
    }
  ];

  const currentAlg = algorithms[selectedAlgorithm];

  const getComplexityColor = (complexity: string) => {
    if (complexity.includes("O(1)")) return "text-green-600 bg-green-50";
    if (complexity.includes("O(log n)")) return "text-blue-600 bg-blue-50";
    if (complexity.includes("O(n log n)")) return "text-orange-600 bg-orange-50";
    if (complexity.includes("O(n²)")) return "text-red-600 bg-red-50";
    if (complexity.includes("O(n)")) return "text-yellow-600 bg-yellow-50";
    return "text-slate-600 bg-slate-50";
  };

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <h4 className="font-bold text-lg mb-4">Sorting Algorithms Overview</h4>
      
      <p className="text-sm text-slate-600 mb-6">
        Different sorting algorithms have different trade-offs. Here's a quick comparison of the most common ones, their complexities, and when to use them.
      </p>

      {/* Algorithm Selection */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Select an algorithm to explore:</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {algorithms.map((alg, index) => (
            <button
              key={index}
              onClick={() => setSelectedAlgorithm(index)}
              className={`p-3 rounded-lg border text-left ${
                selectedAlgorithm === index
                  ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="font-medium text-sm">{alg.name}</div>
              <div className="text-xs text-slate-500 mt-1">
                Avg: {alg.timeComplexity.average}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Algorithm Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Complexity Analysis */}
        <div>
          <div className="bg-slate-100 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-slate-800 mb-3">{currentAlg.name}</h5>
            <p className="text-sm text-slate-600 mb-4">{currentAlg.description}</p>
            
            {/* Time Complexity */}
            <div className="mb-4">
              <div className="text-sm font-medium text-slate-700 mb-2">Time Complexity:</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Best Case (Ω):</span>
                  <span className={`px-2 py-1 rounded text-sm font-mono ${getComplexityColor(currentAlg.timeComplexity.best)}`}>
                    {currentAlg.timeComplexity.best}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Case (Θ):</span>
                  <span className={`px-2 py-1 rounded text-sm font-mono ${getComplexityColor(currentAlg.timeComplexity.average)}`}>
                    {currentAlg.timeComplexity.average}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Worst Case (O):</span>
                  <span className={`px-2 py-1 rounded text-sm font-mono ${getComplexityColor(currentAlg.timeComplexity.worst)}`}>
                    {currentAlg.timeComplexity.worst}
                  </span>
                </div>
              </div>
            </div>

            {/* Space Complexity */}
            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Space Complexity:</span>
                <span className={`px-2 py-1 rounded text-sm font-mono ${getComplexityColor(currentAlg.spaceComplexity)}`}>
                  {currentAlg.spaceComplexity}
                </span>
              </div>
            </div>
          </div>

          {/* Use Case */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm font-medium text-blue-800 mb-2">Best Use Case:</div>
            <div className="text-sm text-blue-700">{currentAlg.useCase}</div>
          </div>
        </div>

        {/* Right Column - Pros and Cons */}
        <div>
          <div className="grid grid-cols-1 gap-4">
            {/* Pros */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-sm font-medium text-green-800 mb-3 flex items-center gap-2">
                <span className="text-lg">✓</span> Advantages
              </div>
              <ul className="space-y-1">
                {currentAlg.pros.map((pro, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-sm font-medium text-red-800 mb-3 flex items-center gap-2">
                <span className="text-lg">⚠</span> Disadvantages
              </div>
              <ul className="space-y-1">
                {currentAlg.cons.map((con, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Comparison Table */}
      <div className="mt-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Quick Comparison:</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left">Algorithm</th>
                <th className="px-3 py-2 text-center">Best</th>
                <th className="px-3 py-2 text-center">Average</th>
                <th className="px-3 py-2 text-center">Worst</th>
                <th className="px-3 py-2 text-center">Space</th>
                <th className="px-3 py-2 text-center">Stable</th>
              </tr>
            </thead>
            <tbody>
              {algorithms.map((alg, index) => (
                <tr key={index} className={`border-t ${selectedAlgorithm === index ? "bg-indigo-50" : ""}`}>
                  <td className="px-3 py-2 font-medium">{alg.name}</td>
                  <td className="px-3 py-2 text-center font-mono text-xs">{alg.timeComplexity.best}</td>
                  <td className="px-3 py-2 text-center font-mono text-xs">{alg.timeComplexity.average}</td>
                  <td className="px-3 py-2 text-center font-mono text-xs">{alg.timeComplexity.worst}</td>
                  <td className="px-3 py-2 text-center font-mono text-xs">{alg.spaceComplexity}</td>
                  <td className="px-3 py-2 text-center">
                    {["Bubble Sort", "Insertion Sort", "Merge Sort"].includes(alg.name) ? "✓" : "✗"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 text-xs text-slate-600">
        <strong>Stable:</strong> Maintains relative order of equal elements. 
        <strong className="ml-4">In-place:</strong> Uses O(1) extra space.
      </div>
    </div>
  );
};

export default SortingOverview;
