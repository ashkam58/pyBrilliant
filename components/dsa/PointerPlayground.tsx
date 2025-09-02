"use client";
import React from "react";

interface HeapObject {
  id: number;
  kind: "int" | "dict";
  value: any;
  refs: number[];
}

interface PointerPlaygroundProps {
  labels?: Record<string, string>;
  env?: Record<string, number>;
  heap?: HeapObject[];
}

export default function PointerPlayground({ 
  labels = {}, 
  env = {}, 
  heap = [] 
}: PointerPlaygroundProps) {
  const vars = Object.keys(labels || {});
  return (
    <div className="mt-3 grid md:grid-cols-2 gap-4">
      <div className="rounded-xl bg-slate-50 p-3">
        <h5 className="font-semibold mb-2">Variables</h5>
        <div className="flex flex-wrap gap-2">
          {vars.map((k) => (
            <div key={k} className="relative rounded-xl bg-white border px-4 py-3 min-w-[120px]">
              <div className="text-xs text-slate-600">{k}</div>
              <div className="font-bold">→ obj #{env[k]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-slate-50 p-3">
        <h5 className="font-semibold mb-2">Heap (Objects)</h5>
        <div className="grid gap-2">
          {heap.map((o) => (
            <div key={o.id} className="rounded-xl bg-white border p-3">
              <div className="text-xs text-slate-500">id #{o.id} • {o.kind === "int" ? "int" : "dict"}</div>
              <div className="font-mono">{o.kind === "int" ? o.value : JSON.stringify(o.value)}</div>
              <div className="text-xs text-slate-600">refs: {o.refs.join(", ") || "(none)"}</div>
            </div>
          ))}
          {heap.length === 0 && <div className="text-sm text-slate-600">(garbage collected)</div>}
        </div>
      </div>
    </div>
  );
}