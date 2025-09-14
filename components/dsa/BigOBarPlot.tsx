"use client";
import React, { useState, useMemo } from "react";

// Define FnKey type and any required constants
type FnKey = keyof typeof FN_ORDER;
const FN_ORDER = {
  constant: "constant",
  logarithmic: "logarithmic",
  linear: "linear",
  quadratic: "quadratic",
};
const COLORS: Record<string, string> = {
  constant: "bg-green-400",
  logarithmic: "bg-blue-400", 
  linear: "bg-yellow-400",
  quadratic: "bg-red-400",
};

const COMPLEXITY_LABELS: Record<string, string> = {
  constant: "O(1)",
  logarithmic: "O(log n)",
  linear: "O(n)", 
  quadratic: "O(n²)",
};

// Example base calculation function
function getBase(n: number) {
  return {
    constant: 1,
    logarithmic: n <= 1 ? 1 : Math.log2(n),
    linear: n,
    quadratic: n * n,
  };
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

const BigOBarPlot: React.FC = () => {
  const [n, setN] = useState(16);
  const [enabled, setEnabled] = useState<Record<FnKey, boolean>>({
    constant: true,
    logarithmic: true,
    linear: true,
    quadratic: true,
  });

  const values = useMemo(() => {
    const base = getBase(n);
    
    // Only include enabled functions in calculations
    const enabledBase: Record<string, number> = {};
    Object.keys(base).forEach((k) => {
      if (enabled[k as FnKey]) {
        enabledBase[k] = base[k as FnKey];
      }
    });
    
    // If no functions are enabled, show all
    const displayBase = Object.keys(enabledBase).length > 0 ? enabledBase : base;
    
    const max = Math.max(...Object.values(displayBase));
    const scaled: Record<FnKey, number> = {} as Record<FnKey, number>;
    
    (Object.keys(base) as FnKey[]).forEach((k) => {
      if (enabled[k]) {
        scaled[k] = max > 0 ? (base[k] / max) * 100 : 0; // percentage width
      } else {
        scaled[k] = 0; // Hidden functions get 0 width
      }
    });
    
    return { base, scaled, max };
  }, [n, enabled]);

  return (
    <div className="rounded-3xl border p-3 sm:p-5 bg-white/80 shadow-sm w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        <h4 className="font-bold text-base sm:text-lg">Complexity Growth Playground</h4>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <label className="text-sm whitespace-nowrap">n = {n}</label>
          <input
            type="range"
            min={1}
            max={512}
            value={n}
            onChange={(e) => setN(clamp(parseInt(e.target.value), 1, 512))}
            className="w-20 sm:w-auto"
          />
        </div>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-slate-600">
        Bars compare <em>relative</em> work for each function class at your chosen n. Try dragging n; watch how "quadratic" explodes while "constant" barely moves.
        <br />
        <span className="text-xs text-slate-500 mt-1 block">
          💡 Try n=1, n=16, n=64, n=256 to see dramatic differences!
        </span>
      </p>

      <div className="mt-4 grid gap-3 w-full">
        {(Object.keys(FN_ORDER) as FnKey[]).map((k: FnKey) => (
          <div key={k} className={`w-full transition-opacity duration-300 ${enabled[k] ? 'opacity-100' : 'opacity-50'}`}>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <input
                id={`ck-${k}`}
                type="checkbox"
                checked={enabled[k]}
                onChange={(e) => setEnabled((p) => ({ ...p, [k]: e.target.checked }))}
              />
              <label htmlFor={`ck-${k}`} className="text-sm font-medium capitalize">
                {k.replace('_', ' ')} 
                <span className="text-xs text-slate-500 ml-1">({COMPLEXITY_LABELS[k]})</span>
              </label>
              <span className="ml-auto text-xs text-slate-500 whitespace-nowrap">
                ops ≈ {enabled[k] ? Math.round(values.base[k]).toLocaleString() : '—'}
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden w-full">
              <div 
                className={`h-full ${COLORS[k]} transition-all duration-500 ease-out`} 
                style={{ width: `${values.scaled[k]}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigOBarPlot;