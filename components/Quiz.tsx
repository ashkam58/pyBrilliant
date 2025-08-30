'use client'
import { useState } from 'react'

type Q = { q: string, options: string[], answer: number, explain?: string }

export default function Quiz({ items }:{ items: Q[] }) {
  const [picked, setPicked] = useState<(number | null)[]>(Array(items.length).fill(null))
  const [show, setShow] = useState(false)

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold">Quick Quiz</h3>
        <button onClick={() => setShow(true)} className="px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold">Check</button>
      </div>
      <ol className="space-y-4 mt-4">
        {items.map((it, i) => (
          <li key={i} className="space-y-2">
            <p className="font-semibold">{i+1}. {it.q}</p>
            <div className="grid gap-2">
              {it.options.map((opt, j) => {
                const active = picked[i]===j
                const correct = show && j===it.answer
                const wrong = show && active && j!==it.answer
                return (
                  <label key={j} className={`flex items-center gap-2 rounded-xl px-3 py-2 border ${active ? 'border-indigo-600' : 'border-black/10'} ${correct ? 'bg-emerald-50 border-emerald-300' : ''} ${wrong ? 'bg-rose-50 border-rose-300' : ''}`}>
                    <input type="radio" name={`q${i}`} className="accent-indigo-600" onChange={() => setPicked(prev => { const p=[...prev]; p[i]=j; return p })} />
                    <span>{opt}</span>
                  </label>
                )
              })}
            </div>
            {show && it.explain && <p className="text-sm opacity-80">Why: {it.explain}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}
