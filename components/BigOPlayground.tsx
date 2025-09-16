"use client";
import React, { useMemo, useState } from "react";

const FUNCTIONS = [
  { key: "constant", label: "O(1)", color: "#10B981" },
  { key: "log", label: "O(log n)", color: "#3B82F6" },
  { key: "linear", label: "O(n)", color: "#F59E0B" },
  { key: "nlogn", label: "O(n log n)", color: "#8B5CF6" },
  { key: "quadratic", label: "O(n²)", color: "#EF4444" },
  { key: "expo", label: "O(2^n)", color: "#EC4899" },
];

function calcValue(key: string, n: number) {
  switch (key) {
    case "constant":
      return 1;
    case "log":
      return n <= 1 ? 1 : Math.log2(n);
    case "linear":
      return n;
    case "nlogn":
      return n * (n <= 1 ? 1 : Math.log2(n));
    case "quadratic":
      return n * n;
    case "expo":
      // cap exponentials so they don't blow browser up
      return Math.min(Math.pow(2, Math.min(n, 20)), Number.MAX_SAFE_INTEGER);
    default:
      return n;
  }
}

export default function BigOPlayground({ initial = 16 }: { initial?: number }) {
  const [n, setN] = useState(initial);
  const [useLogScale, setUseLogScale] = useState(false);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    FUNCTIONS.reduce((acc, f) => ({ ...acc, [f.key]: true }), {} as Record<string, boolean>)
  );

  const values = useMemo(() => {
    const raw = FUNCTIONS.reduce((acc, f) => {
      acc[f.key] = calcValue(f.key, n);
      return acc;
    }, {} as Record<string, number>);
    return raw;
  }, [n]);

  const maxVal = useMemo(() => {
    const arr = Object.keys(values)
      .filter((k) => enabled[k])
      .map((k) => values[k]);
    return Math.max(...arr, 1);
  }, [values, enabled]);

  const points = useMemo(() => {
    // generate curve points scaled for display
    const out: Record<string, number> = {} as Record<string, number>;
    Object.keys(values).forEach((k) => {
      out[k] = enabled[k] ? values[k] / maxVal : 0;
    });
    return out;
  }, [values, maxVal, enabled]);

  return (
    <div className="rounded-2xl border p-4 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-lg font-bold">Big-O Playground</h3>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={useLogScale} onChange={(e) => setUseLogScale(e.target.checked)} />
            Log scale
          </label>
          <div className="flex items-center gap-2">
            <label className="text-sm">n</label>
            <input
              type="range"
              min={1}
              max={256}
              value={n}
              onChange={(e) => setN(parseInt(e.target.value))}
              className="w-36"
            />
            <div className="w-14 text-right text-sm font-mono">{n}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-white rounded-xl p-3 relative overflow-hidden">
            {/* Simple bars representation */}
            <div className="absolute inset-0 flex flex-col justify-center px-4">
              {FUNCTIONS.map((f) => (
                <div key={f.key} className="flex items-center gap-3 mb-2">
                  <div className="w-16 text-sm font-medium text-slate-600">{f.label}</div>
                  <div className="flex-1 h-4 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${Math.round((points[f.key] || 0) * 100)}%`, background: f.color }}
                      className="h-full transition-all duration-300"
                    />
                  </div>
                  <div className="w-20 text-right text-xs font-mono text-slate-700">{Math.round(values[f.key]).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="rounded-xl border p-3 bg-white">
            <h4 className="text-sm font-semibold mb-2">Toggle curves</h4>
            <div className="flex flex-col gap-2 max-h-36 overflow-auto">
              {FUNCTIONS.map((f) => (
                <label key={f.key} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={enabled[f.key]} onChange={(e) => setEnabled((p) => ({ ...p, [f.key]: e.target.checked }))} />
                  <span className="w-3 h-3 rounded-sm" style={{ background: f.color }} />
                  <span className="truncate">{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-xl border p-3 bg-white">
            <h4 className="text-sm font-semibold">Tips</h4>
            <ul className="text-xs mt-2 space-y-1 text-slate-600">
              <li>Try n = 1, 16, 64, 256 to see scaling</li>
              <li>Use Log scale to keep exponential curves visible</li>
              <li>Toggle curves to compare pairs (e.g., n log n vs n²)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
