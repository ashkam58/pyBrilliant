'use client'
import { useEffect, useRef, useState } from 'react'

// Minimal Pyodide runner (client-side).
// Loads Pyodide from CDN lazily the first time you click Run.
export default function CodeRunner({ starter='' }:{ starter?: string }) {
  const [out, setOut] = useState<string>('')
  const [busy, setBusy] = useState(false)
  const [ready, setReady] = useState(false)
  const editorRef = useRef<HTMLTextAreaElement | null>(null)
  const pyodideRef = useRef<any>(null)

  async function ensurePyodide() {
    if (pyodideRef.current) return
    setBusy(true)
    try {
      // Dynamically load pyodide from CDN
      if (!(window as any).loadPyodide) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
      }
      // @ts-ignore
      const loadPyodide = (window as any).loadPyodide
      if (!loadPyodide) throw new Error('Pyodide failed to load')
      const pyodide = await loadPyodide({ 
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/' 
      })
      pyodideRef.current = pyodide
      setReady(true)
    } catch (error) {
      console.error('Failed to load Pyodide:', error)
      setOut('❌ Failed to load Python runtime. Please check your internet connection.')
    } finally {
      setBusy(false)
    }
  }

  async function run() {
    try {
      await ensurePyodide()
      if (!pyodideRef.current) {
        setOut('❌ Python runtime not available. Please try again.')
        return
      }
      setBusy(true)
      const code = editorRef.current?.value ?? ''
      let captured = ''
      pyodideRef.current.setStdout({ batched: (s: string) => { captured += s } })
      pyodideRef.current.setStderr({ batched: (s: string) => { captured += s } })
      await pyodideRef.current.runPythonAsync(code)
      setOut(captured || '(no output)')
    } catch (e:any) {
      console.error('Python execution error:', e)
      setOut(`❌ Error: ${String(e)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold">Python Playground</h3>
        <button onClick={run} disabled={busy} className="px-4 py-2 rounded-xl bg-pink-600 text-white font-bold disabled:opacity-50 hover:bg-pink-700 transition-colors">
          {busy ? (ready ? 'Running Python... 🐍' : 'Loading Python... ⏳') : (ready ? 'Run Code ▶️' : 'Load & Run ▶️')}
        </button>
      </div>
      <textarea
        ref={editorRef}
        defaultValue={starter}
        spellCheck={false}
        className="w-full h-48 font-mono text-sm p-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <pre className="bg-black text-white rounded-xl p-4 overflow-auto min-h-32 max-h-64"><code className="whitespace-pre-wrap">{out}</code></pre>
    </div>
  )
}
