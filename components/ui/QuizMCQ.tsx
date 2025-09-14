"use client";
import { useState } from "react";
export default function QuizMCQ({
question,
choices,
answer,
explanation,
compact = false,
}: {
question: string;
choices: string[];
answer: string;
explanation?: string;
compact?: boolean;
}) {
const [picked, setPicked] = useState<string | null>(null);
const [submitted, setSubmitted] = useState(false);
const isCorrect = submitted && picked === answer;


return (
<div className={`rounded-2xl border shadow-sm ${compact ? "p-3" : "p-4 sm:p-5"} bg-white/80 w-full max-w-full overflow-hidden quiz-container`}>
<div className="flex items-start gap-2">
<div className="text-2xl flex-shrink-0">🎯</div>
<div className="flex-1 min-w-0">
<h4 className="font-semibold text-slate-800 break-words">{question}</h4>
<div className="mt-3 grid gap-2">
{choices.map((c) => (
<label key={c} className={`cursor-pointer rounded-xl border px-3 py-2 flex items-start gap-2 transition-colors ${picked===c?"border-indigo-500 bg-indigo-50":"hover:bg-slate-50"}`}>
<input
type="radio"
name={question}
value={c}
checked={picked === c}
onChange={() => setPicked(c)}
className="mt-0.5 flex-shrink-0"
/>
<span className="break-words text-sm sm:text-base">{c}</span>
</label>
))}
</div>
<div className="mt-3 flex gap-2 flex-wrap items-center">
<button
onClick={() => setSubmitted(true)}
disabled={!picked}
className="rounded-xl bg-indigo-600 text-white px-4 py-2 disabled:opacity-40 text-sm sm:text-base"
>
Check
</button>
{submitted && (
<span className={`font-semibold text-sm sm:text-base ${isCorrect?"text-green-600":"text-rose-600"}`}>
{isCorrect ? "Correct! ✨" : "Not quite — try again or read the hint."}
</span>
)}
</div>
{submitted && explanation && (
<div className="mt-3 text-sm text-slate-700 break-words">
<span className="font-semibold">Why:</span> {explanation}
</div>
)}
</div>
</div>
</div>
);
}
