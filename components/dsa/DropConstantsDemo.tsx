"use client";
import React, { useState } from "react";

export default function DropConstantsDemo() {
  const [n, setN] = useState(100);

  return (
	<div>
	  <div className="mt-3 flex items-center gap-3">
		<label className="text-sm font-medium">n = {n}</label>
		<input
		  type="range"
		  min={1}
		  max={400}
		  value={n}
		  onChange={e => setN(parseInt(e.target.value))}
		/>
	  </div>
	  <div className="mt-4 grid gap-2">
		<Bar label="One loop (n)" value={n} color="bg-indigo-500" />
		<Bar label="Two loops (2n)" value={2 * n} color="bg-fuchsia-500" />
	  </div>
	  <p className="text-sm mt-2 text-slate-700">
		Same <strong>shape</strong> as n grows ⇒ same Big‑O.
	  </p>
	</div>
  );
}


function Bar({label, value, color}:{label:string; value:number; color:string}){
const pct = Math.min(100, (value/800)*100);
return (
<div>
<div className="flex items-center justify-between text-xs text-slate-600">
<span>{label}</span><span>{value} ops</span>
</div>
<div className="h-3 rounded-full bg-slate-100 overflow-hidden">
<div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
</div>
</div>
);
}