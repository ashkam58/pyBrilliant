"use client";
import React, { useState, useRef, useEffect } from "react";

const BinarySearchViz: React.FC = () => {
  const [n, setN] = useState(16);
  const [target, setTarget] = useState(13);
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<Array<{low: number, high: number, mid: number, comparison: string}>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const theoreticalSteps = Math.ceil(Math.log2(n));
  
  const reset = () => {
    setSteps([]);
    setCurrentStep(0);
    setIsRunning(false);
    if (timer.current) clearTimeout(timer.current);
  };

  const runBinarySearch = () => {
    reset();
    setIsRunning(true);
    
    const searchSteps: Array<{low: number, high: number, mid: number, comparison: string}> = [];
    let low = 1;
    let high = n;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      let comparison: string;
      
      if (mid === target) {
        comparison = "Found! 🎯";
        searchSteps.push({ low, high, mid, comparison });
        break;
      } else if (mid < target) {
        comparison = `${mid} < ${target}, search right →`;
        low = mid + 1;
      } else {
        comparison = `${mid} > ${target}, search left ←`;
        high = mid - 1;
      }
      
      searchSteps.push({ low, high, mid, comparison });
    }
    
    setSteps(searchSteps);
    
    // Animate through steps
    let stepIndex = 0;
    const animateStep = () => {
      if (stepIndex < searchSteps.length) {
        setCurrentStep(stepIndex + 1);
        stepIndex++;
        timer.current = setTimeout(animateStep, 1500);
      } else {
        setIsRunning(false);
      }
    };
    
    timer.current = setTimeout(animateStep, 500);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    reset();
    // Ensure target is within range
    if (target > n) setTarget(n);
    if (target < 1) setTarget(1);
  }, [n]);

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h4 className="font-bold text-lg">Binary Search Visualizer</h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm">Array size (n):</label>
            <input
              type="range"
              min={4}
              max={64}
              value={n}
              onChange={(e) => setN(parseInt(e.target.value))}
              disabled={isRunning}
              className="w-20"
            />
            <span className="text-sm font-medium">{n}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4">
        Binary search divides the search space in half with each step. Watch how it finds any element in ≈ log₂(n) steps!
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm">Target:</label>
          <input
            type="number"
            min={1}
            max={n}
            value={target}
            onChange={(e) => setTarget(parseInt(e.target.value) || 1)}
            disabled={isRunning}
            className="w-16 px-2 py-1 border rounded text-sm"
          />
        </div>
        <button
          onClick={runBinarySearch}
          disabled={isRunning}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? "Searching..." : "🔍 Search"}
        </button>
      </div>

      {/* Array Visualization */}
      <div className="mb-6">
        <div className="text-sm text-slate-600 mb-2">
          Sorted array (1 to {n}):
        </div>
        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: n }, (_, i) => i + 1).map((num) => {
            let bgColor = "bg-slate-50 border-slate-200";
            let textColor = "text-slate-700";
            
            if (currentStepData) {
              const { low, high, mid } = currentStepData;
              if (num === mid) {
                bgColor = "bg-indigo-500 border-indigo-600";
                textColor = "text-white";
              } else if (num >= low && num <= high) {
                bgColor = "bg-blue-100 border-blue-300";
                textColor = "text-blue-700";
              } else {
                bgColor = "bg-slate-200 border-slate-300";
                textColor = "text-slate-400";
              }
              
              if (num === target && currentStepData.comparison.includes("Found")) {
                bgColor = "bg-green-500 border-green-600";
                textColor = "text-white";
              }
            }
            
            return (
              <div
                key={num}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm font-medium ${bgColor} ${textColor} transition-all duration-300`}
              >
                {num}
              </div>
            );
          })}
        </div>
        
        {currentStepData && (
          <div className="mt-2 text-sm">
            <div className="text-slate-600">
              Search range: [{currentStepData.low}, {currentStepData.high}] • 
              Middle: <span className="font-semibold">{currentStepData.mid}</span>
            </div>
            <div className="text-indigo-600 font-medium">
              {currentStepData.comparison}
            </div>
          </div>
        )}
      </div>

      {/* Step Timeline */}
      {steps.length > 0 && (
        <div className="mb-4">
          <div className="text-sm font-medium text-slate-700 mb-2">Search Steps:</div>
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border text-sm ${
                  index < currentStep
                    ? "bg-green-50 border-green-200"
                    : index === currentStep - 1
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Step {index + 1}: Check middle of [{step.low}, {step.high}] = {step.mid}
                  </span>
                  {index < currentStep && (
                    <span className="text-green-600">✓</span>
                  )}
                </div>
                <div className="text-slate-600">{step.comparison}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Summary */}
      <div className="bg-slate-100 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-600">Steps taken:</div>
            <div className="font-bold text-lg">{currentStep}</div>
          </div>
          <div>
            <div className="text-slate-600">Theoretical max (⌈log₂({n})⌉):</div>
            <div className="font-bold text-lg">{theoreticalSteps}</div>
          </div>
        </div>
        {steps.length > 0 && !isRunning && (
          <div className="mt-2 text-sm">
            {currentStep <= theoreticalSteps ? (
              <span className="text-green-600">✓ Completed within O(log n) bound!</span>
            ) : (
              <span className="text-amber-600">⚠ Took more steps than expected</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BinarySearchViz;
