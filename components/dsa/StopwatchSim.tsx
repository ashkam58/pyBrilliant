"use client";
import React, { useState } from "react";


export default function StopwatchSim(){
const [ops1, setOps1] = useState(1500);
const [ops2, setOps2] = useState(6000);
const [speed, setSpeed] = useState(1); // relative machine speed
const time1 = ops1 / speed;
const time2 = ops2 / speed;
const winner = time1 < time2 ? "Code 1" : time2 < time1 ? "Code 2" : "Tie";


return (
<div className="rounded-2xl border p-5 bg-white/80 shadow-sm">
<h4 className="font-semibold mb-2">Time vs Machine Speed</h4>
<p className="text-sm text-slate-600 mb-3">Same machine speed multiplies both times equally. That’s why we compare <strong>operations</strong>, not clock seconds.</p>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-xl bg-slate-50 p-3">
<label className="text-sm font-medium">Code 1 operations: {ops1}</label>
<input type="range" min={1} max={20000} value={ops1} onChange={e=>setOps1(parseInt(e.target.value))} />
<div className="text-xs text-slate-600">Time ≈ {Math.round(time1)} units</div>
</div>
<div className="rounded-xl bg-slate-50 p-3">
<label className="text-sm font-medium">Code 2 operations: {ops2}</label>
<input type="range" min={1} max={20000} value={ops2} onChange={e=>setOps2(parseInt(e.target.value))} />
<div className="text-xs text-slate-600">Time ≈ {Math.round(time2)} units</div>
</div>
</div>
<div className="mt-3 rounded-xl bg-indigo-50 p-3 flex items-center gap-3">
<div className="text-2xl">⏱️</div>
<div className="flex-1">
<label className="text-sm font-medium">Machine speed multiplier: ×{speed}</label>
<input type="range" min={1} max={8} value={speed} onChange={e=>setSpeed(parseInt(e.target.value))} />
<p className="text-sm mt-1">Winner: <span className="font-bold">{winner}</span> {winner!=="Tie"?"🏁":"🤝"}</p>
</div>
</div>
</div>
);
}