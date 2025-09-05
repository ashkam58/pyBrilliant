"use client";
import React, { useState } from "react";

type ComplexityExample = {
  expression: string;
  steps: string[];
  result: string;
  explanation: string;
};

const DropTheNoise: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const examples: ComplexityExample[] = [
    {
      expression: "3n² + 5n + 2",
      steps: [
        "3n² + 5n + 2",
        "Drop constants: n² + n + 1", 
        "Keep highest order: n²",
        "O(n²)"
      ],
      result: "O(n²)",
      explanation: "As n grows large, the n² term dominates. Constants and lower-order terms become negligible."
    },
    {
      expression: "7n + 100",
      steps: [
        "7n + 100",
        "Drop constants: n + 1",
        "Keep highest order: n",
        "O(n)"
      ],
      result: "O(n)",
      explanation: "Even with a large constant (100), the linear term n eventually dominates for large inputs."
    },
    {
      expression: "2ⁿ + n³ + 1000n",
      steps: [
        "2ⁿ + n³ + 1000n",
        "Drop constants: 2ⁿ + n³ + n",
        "Keep highest order: 2ⁿ",
        "O(2ⁿ)"
      ],
      result: "O(2ⁿ)",
      explanation: "Exponential growth always dominates polynomial growth, no matter the coefficients."
    },
    {
      expression: "5 log n + 10",
      steps: [
        "5 log n + 10",
        "Drop constants: log n + 1",
        "Keep highest order: log n",
        "O(log n)"
      ],
      result: "O(log n)",
      explanation: "Constants are dropped, leaving the logarithmic growth pattern."
    },
    {
      expression: "n/2 + n/4 + n/8",
      steps: [
        "n/2 + n/4 + n/8",
        "Combine terms: (4n + 2n + n)/8 = 7n/8",
        "Drop constants: n",
        "O(n)"
      ],
      result: "O(n)",
      explanation: "Multiple linear terms still result in linear complexity."
    }
  ];

  const complexityHierarchy = [
    { name: "O(1)", color: "bg-green-500", description: "Constant" },
    { name: "O(log n)", color: "bg-blue-500", description: "Logarithmic" },
    { name: "O(n)", color: "bg-yellow-500", description: "Linear" },
    { name: "O(n log n)", color: "bg-orange-500", description: "Linearithmic" },
    { name: "O(n²)", color: "bg-red-500", description: "Quadratic" },
    { name: "O(n³)", color: "bg-purple-500", description: "Cubic" },
    { name: "O(2ⁿ)", color: "bg-pink-500", description: "Exponential" },
  ];

  const currentExample = examples[selectedExample];

  const nextStep = () => {
    if (currentStep < currentExample.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  const selectExample = (index: number) => {
    setSelectedExample(index);
    setCurrentStep(0);
  };

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <h4 className="font-bold text-lg mb-4">Drop Constants & Lower-Order Terms</h4>
      
      <p className="text-sm text-slate-600 mb-6">
        Big-O notation focuses on growth patterns, not exact counts. Learn how to simplify complex expressions by dropping constants and keeping only the dominant term.
      </p>

      {/* Example Selection */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-2">Choose an expression to simplify:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => selectExample(index)}
              className={`p-3 rounded-lg border text-left ${
                selectedExample === index
                  ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="font-mono text-sm">{example.expression}</div>
              <div className="text-xs text-slate-500 mt-1">→ {example.result}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step-by-step Simplification */}
      <div className="mb-6">
        <div className="bg-slate-900 rounded-lg p-4 mb-4">
          <div className="text-green-400 font-mono text-lg text-center">
            {currentExample.steps[currentStep]}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm"
          >
            ← Previous
          </button>
          
          <div className="text-sm text-slate-600">
            Step {currentStep + 1} of {currentExample.steps.length}
          </div>
          
          <button
            onClick={nextStep}
            disabled={currentStep === currentExample.steps.length - 1}
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm"
          >
            Next →
          </button>
        </div>

        <button
          onClick={resetSteps}
          className="w-full px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm mb-4"
        >
          🔄 Reset to Start
        </button>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-sm text-blue-800">
            <strong>Why this step:</strong> {currentExample.explanation}
          </div>
        </div>
      </div>

      {/* Complexity Hierarchy Reference */}
      <div className="mb-6">
        <div className="text-sm font-medium text-slate-700 mb-3">Common Complexity Classes (from fastest to slowest):</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {complexityHierarchy.map((complexity, index) => (
            <div
              key={index}
              className="text-center p-3 rounded-lg border bg-white"
            >
              <div className={`w-full h-3 ${complexity.color} rounded mb-2`}></div>
              <div className="font-mono text-sm font-medium">{complexity.name}</div>
              <div className="text-xs text-slate-500">{complexity.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Rules */}
      <div className="bg-slate-100 rounded-lg p-4">
        <div className="text-sm font-medium text-slate-700 mb-3">Key Rules for Simplification:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span><strong>Drop constants:</strong> 5n → n, 1000 → 1</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span><strong>Drop lower terms:</strong> n² + n → n²</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span><strong>Keep dominant term:</strong> Focus on fastest-growing part</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span><strong>Big-O = worst case:</strong> Upper bound behavior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropTheNoise;
