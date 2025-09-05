"use client";
import React, { useState, useRef, useEffect } from "react";

type Operation = "insert_head" | "insert_tail" | "insert_middle" | "delete_head" | "delete_tail" | "delete_middle";

const ReindexingSimulator: React.FC = () => {
  const [listData, setListData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [operation, setOperation] = useState<Operation>("insert_head");
  const [newValue, setNewValue] = useState(99);
  const [targetIndex, setTargetIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndices, setAnimatingIndices] = useState<number[]>([]);
  const [operationCount, setOperationCount] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const operations = {
    insert_head: { name: "Insert at Head", complexity: "O(n)", description: "Insert at beginning - shifts all elements right" },
    insert_tail: { name: "Insert at Tail", complexity: "O(1)", description: "Insert at end - no shifting needed" },
    insert_middle: { name: "Insert at Middle", complexity: "O(n)", description: "Insert at index - shifts elements to the right" },
    delete_head: { name: "Delete Head", complexity: "O(n)", description: "Delete first element - shifts all remaining left" },
    delete_tail: { name: "Delete Tail", complexity: "O(1)", description: "Delete last element - no shifting needed" },
    delete_middle: { name: "Delete Middle", complexity: "O(n)", description: "Delete at index - shifts elements to the left" }
  };

  const reset = () => {
    setListData([1, 2, 3, 4, 5, 6, 7, 8]);
    setOperationCount(0);
    setAnimatingIndices([]);
    setIsAnimating(false);
    if (timer.current) clearTimeout(timer.current);
  };

  const performOperation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setOperationCount(0);
    
    const newList = [...listData];
    let indicesToAnimate: number[] = [];
    let expectedOps = 0;

    switch (operation) {
      case "insert_head":
        newList.unshift(newValue);
        indicesToAnimate = Array.from({ length: listData.length }, (_, i) => i + 1);
        expectedOps = listData.length;
        break;
        
      case "insert_tail":
        newList.push(newValue);
        expectedOps = 1;
        break;
        
      case "insert_middle":
        const insertIdx = Math.min(targetIndex, listData.length);
        newList.splice(insertIdx, 0, newValue);
        indicesToAnimate = Array.from({ length: listData.length - insertIdx }, (_, i) => i + insertIdx + 1);
        expectedOps = listData.length - insertIdx;
        break;
        
      case "delete_head":
        if (newList.length > 0) {
          newList.shift();
          indicesToAnimate = Array.from({ length: newList.length }, (_, i) => i);
          expectedOps = newList.length;
        }
        break;
        
      case "delete_tail":
        if (newList.length > 0) {
          newList.pop();
          expectedOps = 1;
        }
        break;
        
      case "delete_middle":
        const deleteIdx = Math.min(targetIndex, listData.length - 1);
        if (deleteIdx >= 0 && deleteIdx < newList.length) {
          newList.splice(deleteIdx, 1);
          indicesToAnimate = Array.from({ length: newList.length - deleteIdx }, (_, i) => i + deleteIdx);
          expectedOps = newList.length - deleteIdx;
        }
        break;
    }

    setAnimatingIndices(indicesToAnimate);

    // Animate the shifting operations
    if (indicesToAnimate.length > 0) {
      let opCount = 0;
      const animateShift = () => {
        if (opCount < indicesToAnimate.length) {
          setOperationCount(opCount + 1);
          opCount++;
          timer.current = setTimeout(animateShift, 300);
        } else {
          setListData(newList);
          setIsAnimating(false);
          setAnimatingIndices([]);
        }
      };
      animateShift();
    } else {
      setOperationCount(expectedOps);
      setListData(newList);
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const currentOp = operations[operation];
  const needsIndex = operation.includes("middle");

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h4 className="font-bold text-lg">List Operations & Reindexing</h4>
        <button
          onClick={reset}
          className="px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 rounded-lg"
        >
          🔄 Reset
        </button>
      </div>

      <p className="text-sm text-slate-600 mb-4">
        Watch how different list operations require shifting elements. Insertions/deletions at the head or middle need to move other elements, while tail operations are instant!
      </p>

      {/* Operation Selection */}
      <div className="mb-4">
        <div className="text-sm font-medium text-slate-700 mb-2">Choose Operation:</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {(Object.keys(operations) as Operation[]).map((op) => (
            <button
              key={op}
              onClick={() => setOperation(op)}
              disabled={isAnimating}
              className={`p-3 rounded-lg border text-left text-sm ${
                operation === op
                  ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="font-medium">{operations[op].name}</div>
              <div className="text-xs text-slate-500">{operations[op].complexity}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Operation Parameters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {operation.includes("insert") && (
          <div className="flex items-center gap-2">
            <label className="text-sm">Value to insert:</label>
            <input
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(parseInt(e.target.value) || 0)}
              disabled={isAnimating}
              className="w-16 px-2 py-1 border rounded text-sm"
            />
          </div>
        )}
        
        {needsIndex && (
          <div className="flex items-center gap-2">
            <label className="text-sm">Index:</label>
            <input
              type="number"
              min={0}
              max={operation.includes("delete") ? listData.length - 1 : listData.length}
              value={targetIndex}
              onChange={(e) => setTargetIndex(parseInt(e.target.value) || 0)}
              disabled={isAnimating}
              className="w-16 px-2 py-1 border rounded text-sm"
            />
          </div>
        )}

        <button
          onClick={performOperation}
          disabled={isAnimating || listData.length === 0}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? "Working..." : "▶ Execute"}
        </button>
      </div>

      {/* Current Operation Info */}
      <div className="bg-slate-100 rounded-lg p-3 mb-4">
        <div className="text-sm font-medium text-slate-700">{currentOp.name}</div>
        <div className="text-sm text-slate-600">{currentOp.description}</div>
        <div className="text-sm">
          <span className="text-slate-600">Time Complexity:</span>{" "}
          <span className="font-semibold text-indigo-600">{currentOp.complexity}</span>
        </div>
      </div>

      {/* List Visualization */}
      <div className="mb-4">
        <div className="text-sm text-slate-600 mb-2">
          Current List (length: {listData.length}):
        </div>
        <div className="flex gap-2 flex-wrap">
          {listData.map((value, index) => {
            const isAnimating = animatingIndices.includes(index) && operationCount > animatingIndices.indexOf(index);
            const willBeAnimated = animatingIndices.includes(index);
            
            return (
              <div
                key={`${index}-${value}`}
                className={`relative min-w-[3rem] h-12 rounded-lg border flex flex-col items-center justify-center text-sm font-medium transition-all duration-300 ${
                  isAnimating
                    ? "bg-yellow-200 border-yellow-400 transform scale-110"
                    : willBeAnimated
                    ? "bg-orange-100 border-orange-300"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="text-xs text-slate-500">#{index}</div>
                <div>{value}</div>
                {isAnimating && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {needsIndex && (
          <div className="mt-2 text-sm text-slate-600">
            Target index: <span className="font-semibold">{targetIndex}</span>
          </div>
        )}
      </div>

      {/* Operation Counter */}
      <div className="bg-slate-100 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-slate-600">Operations performed:</div>
            <div className="font-bold text-xl">{operationCount}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-600">Expected complexity:</div>
            <div className="font-semibold text-indigo-600">{currentOp.complexity}</div>
          </div>
        </div>
        
        {isAnimating && animatingIndices.length > 0 && (
          <div className="mt-2 text-sm text-slate-600">
            Shifting element {operationCount} of {animatingIndices.length}...
          </div>
        )}
      </div>
    </div>
  );
};

export default ReindexingSimulator;
