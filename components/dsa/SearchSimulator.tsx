"use client";
import React, { useState, useRef, useEffect } from "react";

const SearchSimulator: React.FC = () => {
  const [n, setN] = useState(10);
  const [targetPos, setTargetPos] = useState<"best" | "avg" | "worst">("best");
  const [i, setI] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  let pos = 1; // Default for "best" case
  if (targetPos === "avg") {
	pos = Math.ceil(n / 2);
  } else if (targetPos === "worst") {
	pos = n;
  }

  const start = () => {
	setI(0);
	if (timer.current) clearInterval(timer.current);
	timer.current = setInterval(() => {
	  setI((x: number) => {
		const nx = x + 1;
		if (nx >= pos) {
		  if (timer.current) clearInterval(timer.current);
		}
		return nx;
	  });
	}, 400);
  };

  useEffect(() => {
	return () => {
	  if (timer.current) clearInterval(timer.current);
	};
  }, []);

  const greek =
	targetPos === "best"
	  ? "Ω (Omega) — best case"
	  : targetPos === "avg"
	  ? "Θ (Theta) — average case"
	  : "O (Big‑O) — worst case";

  return (
	<div className="rounded-2xl border p-5 bg-white/80 shadow-sm">
	  <div className="flex flex-wrap items-center gap-3 justify-between">
		<h4 className="font-semibold">Linear Search Explorer</h4>
		<div className="flex items-center gap-2 text-sm">
		  <label>n = {n}</label>
		  <input
			type="range"
			min={3}
			max={20}
			value={n}
			onChange={e => setN(parseInt(e.target.value))}
		  />
		</div>
	  </div>
	  <p className="text-sm text-slate-600 mb-2">
		Pick a scenario, then press ▶ to watch the pointer walk the list.
	  </p>
	  <div className="flex flex-wrap gap-2 mb-3">
		<button
		  onClick={() => setTargetPos("best")}
		  className={`px-3 py-1 rounded-full border ${
			targetPos === "best" ? "bg-emerald-100 border-emerald-400" : ""
		  }`}
		>
		  Best (Ω)
		</button>
		<button
		  onClick={() => setTargetPos("avg")}
		  className={`px-3 py-1 rounded-full border ${
			targetPos === "avg" ? "bg-sky-100 border-sky-400" : ""
		  }`}
		>
		  Average (Θ)
		</button>
		<button
		  onClick={() => setTargetPos("worst")}
		  className={`px-3 py-1 rounded-full border ${
			targetPos === "worst" ? "bg-rose-100 border-rose-400" : ""
		  }`}
		>
		  Worst (O)
		</button>
		<button
		  onClick={start}
		  className="ml-auto px-3 py-1 rounded-full bg-indigo-600 text-white"
		>
		  ▶ Run
		</button>
	  </div>

	  <div className="flex gap-1 flex-wrap">
		{Array.from({ length: n }, (_, k) => k + 1).map((v, index) => {
		  const active = index + 1 === i;
		  const found = index + 1 === pos && i === pos;
		  return (
			<div
			  key={v}
			  className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-semibold relative ${
				active ? "border-indigo-600 bg-indigo-50" : "bg-white"
			  }`}
			>
			  {v}
			  {found && <span className="absolute -top-3 text-xl">🎯</span>}
			</div>
		  );
		})}
	  </div>

	  <p className="mt-3 text-sm text-slate-700">
		Steps taken: <strong>{Math.min(i, pos)}</strong> / {pos} &middot; {greek}
	  </p>
	</div>
  );
};

export default SearchSimulator;