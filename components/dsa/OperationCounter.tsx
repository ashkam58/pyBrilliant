"use client";
import React, { useState, useRef, useEffect } from "react";

const OperationCounter: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<"linear" | "nested" | "binary">("linear");
  const [n, setN] = useState(8);
  const [isRunning, setIsRunning] = useState(false);
  const [opCount, setOpCount] = useState(0);
  const [currentI, setCurrentI] = useState(0);
  const [currentJ, setCurrentJ] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const algorithms = {
    linear: {
      name: "Linear Loop",
      code: `for i in range(n):
    print(i)  # O(n)`,
      complexity: "O(n)",
      expectedOps: n,
    },
    nested: {
      name: "Nested Loops",
      code: `for i in range(n):
    for j in range(n):
        print(i, j)  # O(n²)`,
      complexity: "O(n²)",
      expectedOps: n * n,
    },
    binary: {
      name: "Binary Search",
      code: `while low <= high:
    mid = (low + high) // 2
    # check mid...  # O(log n)`,
      complexity: "O(log n)",
      expectedOps: Math.ceil(Math.log2(n)),
    }
  };

  const reset = () => {
    setOpCount(0);
    setCurrentI(0);
    setCurrentJ(0);
    setIsRunning(false);
    if (timer.current) clearInterval(timer.current);
  };

  const runSimulation = () => {
    reset();
    setIsRunning(true);
    let ops = 0;
    let i = 0;
    let j = 0;

    const step = () => {
      if (algorithm === "linear") {
        if (i < n) {
          setCurrentI(i);
          setOpCount(++ops);
          i++;
          timer.current = setTimeout(step, 200);
        } else {
          setIsRunning(false);
        }
      } else if (algorithm === "nested") {
        if (i < n) {
          if (j < n) {
            setCurrentI(i);
            setCurrentJ(j);
            setOpCount(++ops);
            j++;
            timer.current = setTimeout(step, 100);
          } else {
            j = 0;
            i++;
            timer.current = setTimeout(step, 100);
          }
        } else {
          setIsRunning(false);
        }
      } else if (algorithm === "binary") {
        let low = 0;
        let high = n - 1;
        
        const binaryStep = () => {
          if (low <= high && ops < algorithms.binary.expectedOps) {
            const mid = Math.floor((low + high) / 2);
            setCurrentI(mid);
            setOpCount(++ops);
            // Simulate searching for the last element
            if (mid < n - 1) {
              low = mid + 1;
            } else {
              high = mid - 1;
            }
            timer.current = setTimeout(binaryStep, 400);
          } else {
            setIsRunning(false);
          }
        };
        
        binaryStep();
        return;
      }
    };

    step();
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    reset();
  }, [algorithm, n]);

  const currentAlg = algorithms[algorithm];

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h4 className="font-bold text-lg">Operation Counter</h4>
        <div className="flex items-center gap-3">
          <label className="text-sm">n = {n}</label>
          <input
            type="range"
            min={3}
            max={16}
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            disabled={isRunning}
          />
        </div>
      </div>
      
      <p className="text-sm text-slate-600 mb-4">
        Watch how different algorithms count operations. The slider controls input size, and you'll see the operation count grow according to each complexity class.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(algorithms) as Array<keyof typeof algorithms>).map((alg) => (
          <button
            key={alg}
            onClick={() => setAlgorithm(alg)}
            disabled={isRunning}
            className={`px-3 py-2 rounded-xl border text-sm font-medium ${
              algorithm === alg 
                ? "bg-indigo-100 border-indigo-400 text-indigo-700" 
                : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            {algorithms[alg].name}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm mb-4">
        <pre className="whitespace-pre-wrap">{currentAlg.code}</pre>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          <span className="text-slate-600">Expected complexity:</span>{" "}
          <span className="font-semibold text-indigo-600">{currentAlg.complexity}</span>
        </div>
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? "Running..." : "▶ Run"}
        </button>
      </div>

      {algorithm === "nested" && (
        <div className="mb-4">
          <div className="text-sm text-slate-600 mb-2">Current iteration: i={currentI}, j={currentJ}</div>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
            {Array.from({ length: n * n }, (_, idx) => {
              const row = Math.floor(idx / n);
              const col = idx % n;
              const isActive = row === currentI && col === currentJ && isRunning;
              const isCompleted = row < currentI || (row === currentI && col < currentJ);
              
              return (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded border flex items-center justify-center text-xs ${
                    isActive 
                      ? "bg-indigo-500 text-white border-indigo-600" 
                      : isCompleted
                      ? "bg-green-100 border-green-300"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {row},{col}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {algorithm === "linear" && (
        <div className="mb-4">
          <div className="text-sm text-slate-600 mb-2">Current index: i={currentI}</div>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: n }, (_, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-medium ${
                  idx === currentI && isRunning
                    ? "bg-indigo-500 text-white border-indigo-600"
                    : idx < currentI
                    ? "bg-green-100 border-green-300"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                {idx}
              </div>
            ))}
          </div>
        </div>
      )}

      {algorithm === "binary" && (
        <div className="mb-4">
          <div className="text-sm text-slate-600 mb-2">Checking index: {currentI}</div>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: n }, (_, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-medium ${
                  idx === currentI && isRunning
                    ? "bg-indigo-500 text-white border-indigo-600"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                {idx}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-100 rounded-lg p-3">
        <div className="flex justify-between text-sm">
          <span>Operations performed:</span>
          <span className="font-bold text-lg">{opCount}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Expected for {currentAlg.complexity}:</span>
          <span>{currentAlg.expectedOps}</span>
        </div>
      </div>
    </div>
  );
};

export default OperationCounter;
