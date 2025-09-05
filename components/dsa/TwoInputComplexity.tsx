"use client";
import React, { useState, useMemo } from "react";

const TwoInputComplexity: React.FC = () => {
  const [a, setA] = useState(8);
  const [b, setB] = useState(6);
  const [selectedScenario, setSelectedScenario] = useState<"additive" | "multiplicative">("additive");

  const scenarios = {
    additive: {
      name: "O(a + b) - Additive",
      description: "Process array A, then process array B separately",
      code: `def process_both(A, B):
    # Process array A
    for item in A:        # O(a)
        print(item)
    
    # Process array B  
    for item in B:        # O(b)
        print(item)
    
    # Total: O(a + b)`,
      operations: (a: number, b: number) => a + b,
      explanation: "We do 'a' operations for the first array, then 'b' operations for the second array. Total work is proportional to the sum."
    },
    multiplicative: {
      name: "O(a × b) - Multiplicative", 
      description: "For each item in A, process all items in B (nested loops)",
      code: `def compare_all(A, B):
    # For each item in A
    for item_a in A:      # O(a)
        # Compare with each item in B
        for item_b in B:  # O(b)
            compare(item_a, item_b)
    
    # Total: O(a × b)`,
      operations: (a: number, b: number) => a * b,
      explanation: "For each of the 'a' items, we do 'b' operations. This creates a×b total operations - much more expensive!"
    }
  };

  const currentScenario = scenarios[selectedScenario];
  const operations = currentScenario.operations(a, b);

  // Generate visualization grids
  const additiveVisualization = useMemo(() => {
    const aItems = Array.from({ length: a }, (_, i) => ({ id: `a${i}`, value: i + 1, array: 'A' }));
    const bItems = Array.from({ length: b }, (_, i) => ({ id: `b${i}`, value: i + 1, array: 'B' }));
    return [...aItems, ...bItems];
  }, [a, b]);

  const multiplicativeVisualization = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < b; j++) {
        pairs.push({ aIndex: i, bIndex: j, id: `${i}-${j}` });
      }
    }
    return pairs;
  }, [a, b]);

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <h4 className="font-bold text-lg mb-4">Two-Input Complexity: O(a+b) vs O(a×b)</h4>
      
      <p className="text-sm text-slate-600 mb-6">
        When algorithms take two inputs of different sizes, complexity can be additive (process separately) or multiplicative (nested processing). The difference grows dramatically with input size!
      </p>

      {/* Input Controls */}
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Array A size:</label>
          <input
            type="range"
            min={1}
            max={12}
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-sm font-bold w-6">{a}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Array B size:</label>
          <input
            type="range"
            min={1}
            max={12}
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-sm font-bold w-6">{b}</span>
        </div>
      </div>

      {/* Scenario Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((scenario) => (
          <button
            key={scenario}
            onClick={() => setSelectedScenario(scenario)}
            className={`p-4 rounded-lg border text-left ${
              selectedScenario === scenario
                ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="font-medium mb-1">{scenarios[scenario].name}</div>
            <div className="text-sm text-slate-600">{scenarios[scenario].description}</div>
            <div className="text-lg font-bold mt-2">
              {scenario === "additive" ? `${a} + ${b} = ${a + b}` : `${a} × ${b} = ${a * b}`} operations
            </div>
          </button>
        ))}
      </div>

      {/* Code Example */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-2">Algorithm Example:</div>
        <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">
          {currentScenario.code}
        </div>
      </div>

      {/* Visualization */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Operation Visualization:</div>
        
        {selectedScenario === "additive" && (
          <div>
            <div className="mb-3 text-sm text-slate-600">
              Process A ({a} items), then B ({b} items) = {a + b} total operations
            </div>
            <div className="flex gap-4 flex-wrap">
              <div>
                <div className="text-xs text-slate-500 mb-1">Array A processing:</div>
                <div className="flex gap-1">
                  {Array.from({ length: a }, (_, i) => (
                    <div
                      key={`a-${i}`}
                      className="w-8 h-8 bg-blue-200 border border-blue-400 rounded flex items-center justify-center text-xs font-medium"
                    >
                      A{i}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 text-xl">+</span>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Array B processing:</div>
                <div className="flex gap-1">
                  {Array.from({ length: b }, (_, i) => (
                    <div
                      key={`b-${i}`}
                      className="w-8 h-8 bg-green-200 border border-green-400 rounded flex items-center justify-center text-xs font-medium"
                    >
                      B{i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedScenario === "multiplicative" && (
          <div>
            <div className="mb-3 text-sm text-slate-600">
              For each A item, process all B items = {a} × {b} = {a * b} total operations
            </div>
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${b}, 2rem)` }}>
              {multiplicativeVisualization.map(({ aIndex, bIndex, id }) => (
                <div
                  key={id}
                  className="w-8 h-8 bg-red-200 border border-red-400 rounded flex items-center justify-center text-xs font-medium"
                  title={`A[${aIndex}] × B[${bIndex}]`}
                >
                  {aIndex},{bIndex}
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500 mt-2">
              Grid shows all A×B combinations that need processing
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Performance Comparison:</div>
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Scenario</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Formula</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Current Result</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Growth Pattern</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 text-sm">O(a + b)</td>
                <td className="px-4 py-2 text-sm font-mono">{a} + {b}</td>
                <td className="px-4 py-2 text-sm font-bold text-blue-600">{a + b}</td>
                <td className="px-4 py-2 text-sm">Linear with sum</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 text-sm">O(a × b)</td>
                <td className="px-4 py-2 text-sm font-mono">{a} × {b}</td>
                <td className="px-4 py-2 text-sm font-bold text-red-600">{a * b}</td>
                <td className="px-4 py-2 text-sm">Quadratic-like growth</td>
              </tr>
              <tr className="border-t bg-yellow-50">
                <td className="px-4 py-2 text-sm font-medium">Difference</td>
                <td className="px-4 py-2 text-sm">-</td>
                <td className="px-4 py-2 text-sm font-bold">{(a * b) - (a + b)}x more work</td>
                <td className="px-4 py-2 text-sm">Multiplicative wins when inputs are large</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-slate-100 rounded-lg p-4">
        <div className="text-sm font-medium text-slate-700 mb-2">Why This Matters:</div>
        <div className="text-sm text-slate-600 mb-3">{currentScenario.explanation}</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium text-green-700">✓ O(a + b) is better when:</div>
            <ul className="list-disc list-inside text-slate-600 ml-2">
              <li>You can process inputs separately</li>
              <li>No need to compare every pair</li>
              <li>Linear scaling is acceptable</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-red-700">⚠ O(a × b) happens when:</div>
            <ul className="list-disc list-inside text-slate-600 ml-2">
              <li>Nested loops over both inputs</li>
              <li>Comparing all pairs</li>
              <li>Can't avoid the cross-product</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoInputComplexity;
