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

// Example base calculation function
function getBase(n: number) {
  return {
	constant: 1,
	logarithmic: Math.log2(n),
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
    const max = Math.max(...Object.values(base));
    const scaled: Record<FnKey, number> = {} as Record<FnKey, number>;
    (Object.keys(base) as FnKey[]).forEach((k) => {
      scaled[k] = (base[k] / max) * 100; // percentage width
    });
    return { base, scaled, max };
  }, [n, enabled]);

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h4 className="font-bold text-lg">Complexity Growth Playground</h4>
        <div className="flex items-center gap-3">
          <label className="text-sm">n = {n}</label>
          <input
            type="range"
            min={1}
            max={512}
            value={n}
            onChange={(e) => setN(clamp(parseInt(e.target.value), 1, 512))}
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Bars compare <em>relative</em> work for each function class at your chosen n. Try dragging n; watch how "quadratic" explodes while "constant" barely moves.
      </p>

      <div className="mt-4 grid gap-3">
        {(Object.keys(FN_ORDER) as FnKey[]).map((k: FnKey) => (
          <div key={k}>
            <div className="flex items-center gap-2 mb-1">
              <input
                id={`ck-${k}`}
                type="checkbox"
                checked={enabled[k]}
                onChange={(e) => setEnabled((p) => ({ ...p, [k]: e.target.checked }))}
              />
              <label htmlFor={`ck-${k}`} className="text-sm font-medium">{k}</label>
              <span className="ml-auto text-xs text-slate-500">ops ≈ {Math.round(values.base[k]).toLocaleString()}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className={`h-full ${COLORS[k]}`} style={{ width: `${values.scaled[k]}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigOBarPlot;