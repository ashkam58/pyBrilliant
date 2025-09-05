import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Brain, MemoryStick, Cpu, Rocket, Book, Play, Repeat, Trash2 } from "lucide-react";

/**
 * Big‑O Cartoon Lab — Advait Edition
 * -------------------------------------------------------
 * A single‑file React app that feels like MDX slides + interactive widgets.
 * Drop into any Next.js/React project. Uses TailwindCSS if available.
 * No Tailwind? It still works with inline styles.
 *
 * Sections (tabs): Intro, O(n) Lab, Simplify, Bounds (Ω/Θ/O), Pointers, Linked List, Quiz
 *
 * Pedagogy: Grade‑8 friendly, interview‑ready. Cartoon theme, gentle humor, IAS‑style clarity.
 */

// ---------- Helpers ----------
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
const Card = ({ title, icon, children }: CardProps) => (
  <div className="rounded-2xl shadow-lg p-5 bg-white/80 backdrop-blur border border-pink-100">
    <div className="flex items-center gap-2 mb-3 text-pink-700">
      {icon}
      <h3 className="font-bold text-lg">{title}</h3>
interface PillProps {
  children: React.ReactNode;
  tone?: string;
}
const Pill = ({ children, tone = "pink" }: PillProps) => (
  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold bg-${tone}-100 text-${tone}-700 mr-2 mb-2`}>{children}</span>
);
);

const Pill = ({ children, tone = "pink" }) => (
  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold bg-${tone}-100 text-${tone}-700 mr-2 mb-2`}>{children}</span>
);

// Safe tailwind fallback (when Tailwind classes aren’t present)
const bg = {
  gradient: {
    background:
      "radial-gradient(1200px 600px at 10% -10%, #ffe3ec 20%, transparent 60%), radial-gradient(1200px 600px at 110% 10%, #e0f2fe 10%, transparent 60%), linear-gradient(180deg,#ffffff 0%,#fff5f7 100%)",
  },
};

// ---------- Mascot ----------
const Mascot = ({ n = 10 }) => {
  const mood = n < 20 ? "🙂" : n < 60 ? "😅" : n < 200 ? "🥵" : "💥";
  const label = n < 20 ? "Easy peasy" : n < 60 ? "Hmm… growing" : n < 200 ? "This scales!" : "Help!";
  return (
    <motion.div
      className="flex flex-col items-center select-none"
      animate={{ scale: 1 + Math.min(n / 300, 0.4) }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <motion.div
        className="text-6xl"
        animate={{ rotate: Math.min(n, 40) - 20 }}
        transition={{ type: "spring", stiffness: 80, damping: 8 }}
type Kinds = { O1: boolean; Ologn: boolean; On: boolean; Onlogn: boolean; On2: boolean };
type DataRow = { n: number; O1?: number; Ologn?: number; On?: number; Onlogn?: number; On2?: number };

const makeData = (maxN: number, kinds: Kinds): DataRow[] => {
  const data: DataRow[] = [];
  for (let i = 1; i <= maxN; i += Math.max(1, Math.floor(maxN / 50))) {
    const row: DataRow = { n: i };
    if (kinds.O1) row.O1 = 1;
    if (kinds.Ologn) row.Ologn = Math.log2(i) + 1;
    if (kinds.On) row.On = i;
    if (kinds.Onlogn) row.Onlogn = i * (Math.log2(i) + 1);
    if (kinds.On2) row.On2 = i * i;
    data.push(row);
  }
const PrettyYAxis = ({ domain }: { domain: [number, (dataMax: number) => number] }) => (
  <YAxis
    type="number"
    domain={domain}
    tickFormatter={(v: number) => (v > 1e6 ? `${(v / 1e6).toFixed(1)}M` : v > 1e3 ? `${(v / 1e3).toFixed(1)}k` : `${Math.round(v)}`)}
  />
);
    data.push(row);
  }
  return data;
};

const PrettyYAxis = ({ domain }) => (
  <YAxis
    type="number"
    domain={domain}
    tickFormatter={(v) => (v > 1e6 ? `${(v / 1e6).toFixed(1)}M` : v > 1e3 ? `${(v / 1e3).toFixed(1)}k` : `${Math.round(v)}`)}
  />
);

// ---------- O(n) Lab ----------
const ComplexityLab = () => {
  const toggle = (key: keyof Kinds) => setKinds((k) => ({ ...k, [key]: !k[key] }));
  const [kinds, setKinds] = useState({ O1: true, Ologn: true, On: true, Onlogn: true, On2: true });
  const data = useMemo(() => makeData(n, kinds), [n, kinds]);

  const ops = {
    O1: 1,
    Ologn: Math.log2(n) + 1,
    On: n,
    Onlogn: n * (Math.log2(n) + 1),
    On2: n * n,
  };

  const toggle = (key) => setKinds((k) => ({ ...k, [key]: !k[key] }));

  return (
    <div className="grid md:grid-cols-5 gap-4 items-stretch">
      <div className="md:col-span-3">
        <Card title="Growth playground" icon={<Cpu className="w-5 h-5" />}> 
          <div className="mb-3 flex items-center gap-3">
            <label className="text-sm font-semibold">n = {n}</label>
            <input
              type="range"
              min={2}
              max={400}
              step={1}
              value={n}
              onChange={(e) => setN(parseInt(e.target.value))}
              className="w-full"
            />
            <Mascot n={n} />
          </div>

                <PrettyYAxis domain={[0, (dataMax: number) => Math.max(10, dataMax * 1.1)]} />
            <button className={`px-2 py-1 rounded-full text-xs border ${kinds.O1 ? "bg-emerald-100 border-emerald-300" : "bg-white"}`} onClick={() => toggle("O1")}>O(1)</button>
            <button className={`px-2 py-1 rounded-full text-xs border ${kinds.Ologn ? "bg-blue-100 border-blue-300" : "bg-white"}`} onClick={() => toggle("Ologn")}>O(log n)</button>
            <button className={`px-2 py-1 rounded-full text-xs border ${kinds.On ? "bg-pink-100 border-pink-300" : "bg-white"}`} onClick={() => toggle("On")}>O(n)</button>
            <button className={`px-2 py-1 rounded-full text-xs border ${kinds.Onlogn ? "bg-amber-100 border-amber-300" : "bg-white"}`} onClick={() => toggle("Onlogn")}>O(n log n)</button>
            <button className={`px-2 py-1 rounded-full text-xs border ${kinds.On2 ? "bg-red-100 border-red-300" : "bg-white"}`} onClick={() => toggle("On2")}>O(n²)</button>
          </div>

          <div style={{ width: "100%", height: 260 }} className="rounded-xl border border-gray-100 bg-white">
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
                <XAxis dataKey="n" tickCount={6} />
                <PrettyYAxis domain={[0, (dataMax) => Math.max(10, dataMax * 1.1)]} />
                <Tooltip />
                <Legend />
                {kinds.O1 && <Line type="monotone" dataKey="O1" dot={false} strokeWidth={2} />}
                {kinds.Ologn && <Line type="monotone" dataKey="Ologn" dot={false} strokeWidth={2} />}
                {kinds.On && <Line type="monotone" dataKey="On" dot={false} strokeWidth={2} />}
                {kinds.Onlogn && <Line type="monotone" dataKey="Onlogn" dot={false} strokeWidth={2} />}
                {kinds.On2 && <Line type="monotone" dataKey="On2" dot={false} strokeWidth={2} />}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Proportional growth means straight line: that’s O(n). Quadratic blows up: O(n²).
            Interviews usually ask for <b>time complexity</b> (operations) and sometimes <b>space complexity</b> (extra memory used).
          </p>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card title="Mental model" icon={<Brain className="w-5 h-5" />}> 
          <div className="text-sm leading-6">
            <p><b>Stopwatch vs Operations:</b> Wall‑clock time depends on the machine; Big‑O counts steps, not seconds.</p>
            <div className="my-2">
              <Pill>O(1)</Pill>
              <span>Lookup in a Python dict (average case).</span>
            </div>
            <div className="my-2">
              <Pill>O(log n)</Pill>
              <span>Binary search halves the problem each step.</span>
            </div>
            <div className="my-2">
              <Pill>O(n)</Pill>
              <span>One full pass — like printing n items.</span>
            </div>
            <div className="my-2">
              <Pill>O(n log n)</Pill>
              <span>Efficient sorts (merge/quick average).</span>
            </div>
            <div className="my-2">
              <Pill>O(n²)</Pill>
              <span>Nested loops (compare all pairs).</span>
            </div>
          </div>
        </Card>

        <div className="mt-4">
          <Card title="Things to memorize" icon={<Book className="w-5 h-5" />}> 
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Big‑O is an <b>upper bound</b> (think worst‑case by default in interviews).</li>
              <li>Drop constants: O(2n) → O(n), O(100) → O(1).</li>
              <li>Drop lower terms: O(n + n²) → O(n²).</li>
              <li>Ω (Omega) = best‑case lower bound, Θ (Theta) = tight bound.</li>
              <li>Time vs Space: faster code sometimes uses more memory (and vice‑versa).</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

// ---------- Simplification (Drop constants/terms) ----------
const SimplifyPanel = () => {
  const [n, setN] = useState(20);
  const [mode, setMode] = useState("twoLoops"); // twoLoops | nested | mix

  const { exact, simplified, label } = useMemo(() => {
    if (mode === "twoLoops") return { exact: 2 * n, simplified: `O(n)`, label: "Two separate loops (n + n)" };
    if (mode === "nested") return { exact: n * n, simplified: `O(n²)`, label: "Nested loops (n × n)" };
    return { exact: n * n + n, simplified: `O(n²)`, label: "Nested loop + one pass (n² + n)" };
  }, [mode, n]);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Operation counter" icon={<Cpu className="w-5 h-5" />}> 
        <div className="flex items-center gap-4 mb-3">
          <select className="border rounded px-2 py-1" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="twoLoops">Two loops in a row</option>
            <option value="nested">Nested loops</option>
            <option value="mix">Nested + extra pass</option>
          </select>
          <label className="text-sm">n = {n}</label>
          <input type="range" min={2} max={300} value={n} onChange={(e) => setN(parseInt(e.target.value))} />
        </div>
        <div className="text-sm">
          <p><b>{label}</b></p>
          <p className="mt-1">Exact operations (toy model): <b>{exact.toLocaleString()}</b></p>
          <p>Big‑O after simplification: <b>{simplified}</b> <span className="text-gray-500">(drop constants, drop lower terms)</span></p>
        </div>
      </Card>
      <Card title="Why we simplify" icon={<Rocket className="w-5 h-5" />}> 
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>As n grows large, constant factors matter less than the shape of growth.</li>
          <li>O(2n) and O(10n) both scale linearly — same family: O(n).</li>
          <li>O(n² + n) behaves like O(n²) for large n — the n term becomes negligible.</li>
        </ul>
      </Card>
    </div>
  );
};

// ---------- Bounds: Ω / Θ / O ----------
const BoundsPanel = () => {
  const [target, setTarget] = useState(4); // where the value appears in the list 1..7
  const list = [1, 2, 3, 4, 5, 6, 7];
  const best = 1; // find at first element
  const worst = list.length; // at last element
  const average = (best + worst) / 2;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Linear search story" icon={<Play className="w-5 h-5" />}> 
        <p className="text-sm mb-2">Find a number in a list of 7 items.</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {list.map((x) => (
            <div key={x} className={`w-8 h-8 flex items-center justify-center rounded ${x === target ? "bg-pink-400 text-white" : "bg-gray-100"}`}>
              {x}
            </div>
          ))}
        </div>
        <input type="range" min={1} max={7} value={target} onChange={(e) => setTarget(parseInt(e.target.value))} />
        <p className="text-sm mt-2">Operations this run: <b>{target}</b></p>
      </Card>

      <Card title="Translate to bounds" icon={<Brain className="w-5 h-5" />}> 
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li><b>Ω (Omega)</b> — best‑case lower bound: here, 1 step.</li>
          <li><b>Θ (Theta)</b> — tight bound: ~ average behavior: ~{average.toFixed(1)} steps.</li>
          <li><b>O (Big‑O)</b> — upper bound: worst case: 7 steps (for n items → O(n)).</li>
        </ul>
        <p className="text-xs text-gray-600 mt-2">In practice, when people say “What’s the Big‑O?”, they usually mean worst‑case.</p>
      </Card>

      <Card title="Memorize (flash)" icon={<Book className="w-5 h-5" />}> 
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-emerald-50 rounded p-2">Ω → <b>best</b></div>
          <div className="bg-blue-50 rounded p-2">Θ → <b>average/tight</b></div>
          <div className="bg-pink-50 rounded p-2">O → <b>worst/upper</b></div>
          <div className="bg-amber-50 rounded p-2">“O” stands for <b>Order</b> (growth rate).</div>
        </div>
  const [addrA, setAddrA] = useState<string>(randomHexId());
  const [addrB, setAddrB] = useState<string | null>(null); // when null, B points to A's object
  );
};

// ---------- Pointers & Mutability ----------
function randomHexId() {
  return "0x" + Math.floor(Math.random() * 0xfffff).toString(16);
}

const PointersPanel = () => {
  const [mode, setMode] = useState("int"); // int | dict
  const [addrA, setAddrA] = useState(randomHexId());
  const [addrB, setAddrB] = useState(null); // when null, B points to A's object
  const [valA, setValA] = useState(11);
  const [dictVal, setDictVal] = useState(11);

  const effectiveAddrB = addrB ?? addrA;

  const makeNewIntForB = () => {
    // Immutable: assign new address for B
    setAddrB(randomHexId());
  };

  const mutateDict = () => setDictVal((v) => v + 11);

  const resetBoth = () => {
    setAddrA(randomHexId());
    setAddrB(null);
    setValA(11);
    setDictVal(11);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Set‑up" icon={<MemoryStick className="w-5 h-5" />}> 
        <div className="text-sm">
          <label className="block mb-2">Data type:</label>
          <select className="border rounded px-2 py-1 mb-3" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="int">Integer (immutable)</option>
            <option value="dict">Dictionary (mutable)</option>
          </select>

          {mode === "int" ? (
              <p>dict1 = {'{'} value: <b>{dictVal}</b> {'}'} at <code>{addrA}</code></p>
              <p>num1 = <b>{valA}</b> at <code>{addrA}</code></p>
              <p>num2 = num1 → points to <code>{effectiveAddrB}</code></p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <button className="px-3 py-1 border rounded" onClick={() => setValA((v) => v + 11)}>Change num1 to {valA + 11}</button>
                <button className="px-3 py-1 border rounded" onClick={makeNewIntForB}>Set num2 = 22 (new int)</button>
                <button className="px-3 py-1 border rounded" onClick={resetBoth}>Reset</button>
              </div>
              <p className="text-xs text-gray-600 mt-2">Integers are <b>immutable</b>: changing num2 creates a new integer at a <b>new address</b>.</p>
            </>
          ) : (
            <>
              <p>dict1 = {{"{"}} value: <b>{dictVal}</b> {{"}"}} at <code>{addrA}</code></p>
              <p>dict2 = dict1 → same address: <code>{effectiveAddrB}</code></p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <button className="px-3 py-1 border rounded" onClick={mutateDict}>dict2["value"] = {dictVal + 11}</button>
                <button className="px-3 py-1 border rounded" onClick={() => setAddrB(randomHexId())}>dict2 = new dict (new address)</button>
                <button className="px-3 py-1 border rounded" onClick={resetBoth}>Reset</button>
              </div>
              <p className="text-xs text-gray-600 mt-2">Dictionaries are <b>mutable</b>: changing a key updates the <b>same object</b> at the same address.</p>
            </>
          )}
        </div>
      </Card>

      <Card title="Visualize references" icon={<Repeat className="w-5 h-5" />}> 
        <div className="relative h-44">
          <AnimatePresence>
            <motion.div key={addrA} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute left-6 top-8 w-48 h-24 rounded-xl border bg-white shadow flex items-center justify-center">
              <div className="text-center text-sm">
                <div className="font-semibold">Object @ {addrA}</div>
                <div>{mode === "int" ? valA : `{ value: ${dictVal} }`}</div>
              </div>
            </motion.div>
            <motion.div key={effectiveAddrB} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-6 top-8 w-48 h-24 rounded-xl border bg-white shadow flex items-center justify-center">
              <div className="text-center text-sm">
                <div className="font-semibold">Object @ {effectiveAddrB}</div>
                <div>{mode === "int" ? (effectiveAddrB === addrA ? valA : 22) : `{ value: ${effectiveAddrB === addrA ? dictVal : 22} }`}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div className="absolute left-6 -bottom-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
let nextId = 1;
const makeNode = (value: number, next: ListNode | null = null): ListNode => ({ id: nextId++, value, next });
          <motion.div className="absolute right-6 -bottom-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-xs">num2 ➜ <code>{effectiveAddrB}</code></div>
  type ListNode = { id: number; value: number; next: ListNode | null };
  
    const [head, setHead] = useState<ListNode | null>(() => makeNode(22, makeNode(33, makeNode(44))));
    const [garbage, setGarbage] = useState<ListNode[]>([]);
      </Card>
  while (p) {
    nodes.push(p);
    p = p.next as ListNode | null;
  }
// ---------- Linked List & Garbage Collection ----------
let nextId = 1;
const makeNode = (value, next = null) => ({ id: nextId++, value, next });
    setGarbage((g) => (head.next ? [...g, head] : g));
    setHead(head.next);
  const [head, setHead] = useState(() => makeNode(22, makeNode(33, makeNode(44))));
  const [garbage, setGarbage] = useState([]);

  const nodes = [];
  let p = head;
    if (!head || !head.next) return;
    const newHead: ListNode = { ...head, next: head.next.next };
    setGarbage((g) => head.next ? [...g, head.next] : g);
    setHead(newHead);

  const stepHead = () => {
    if (!head) return;
    setGarbage((g) => (head.next ? g.concat(head) : g));
    setHead(head.next);
  };

  const insertAtHead = () => setHead(makeNode(Math.floor(Math.random() * 90) + 10, head));

  const detachMiddle = () => {
    if (!head || !head.next) return;
    const newHead = { ...head, next: head.next.next };
    setGarbage((g) => g.concat(head.next));
    setHead(newHead);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Linked list playground" icon={<Repeat className="w-5 h-5" />}> 
        <div className="flex gap-2 flex-wrap mb-3">
          <button className="px-3 py-1 border rounded" onClick={insertAtHead}>Insert new head</button>
          <button className="px-3 py-1 border rounded" onClick={stepHead}>head = head.next</button>
          <button className="px-3 py-1 border rounded" onClick={detachMiddle}>Remove middle</button>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-center gap-4">
            {nodes.map((node) => (
              <div key={node.id} className="relative">
                <div className="w-28 h-20 bg-white rounded-xl border shadow flex items-center justify-center">
                  <div className="text-center text-sm">
                    <div className="font-semibold">{node.value}</div>
                    <div className="text-[10px] text-gray-500">id #{node.id}</div>
          {garbage.map((g: ListNode) => (
            <motion.div key={g.id} initial={{ opacity: 1 }} animate={{ opacity: 0.4 }} className="w-24 h-16 rounded border bg-gray-50 text-center text-xs flex items-center justify-center">
              <div>
                <div className="font-semibold">{g.value}</div>
                <div># {g.id}</div>
              </div>
            </motion.div>
          ))}
        <p className="text-xs text-gray-600 mt-2">Multiple variables can point to the same node. Reassigning pointers doesn’t copy nodes — it just changes references.</p>
      </Card>

      <Card title="Garbage collection (unreachable)" icon={<Trash2 className="w-5 h-5" />}> 
        <p className="text-sm mb-2">When no variable references a node, it becomes unreachable → eligible for garbage collection.</p>
        <div className="flex gap-2 flex-wrap">
          {garbage.map((g) => (
            <motion.div key={g.id} initial={{ opacity: 1 }} animate={{ opacity: 0.4 }} className="w-24 h-16 rounded border bg-gray-50 text-center text-xs flex items-center justify-center">
              <div>
  type Answers = { q1?: string; q2?: string; q3?: string; q4?: string };
  const [answers, setAnswers] = useState<Answers>({});
  const set = (k: keyof Answers, v: string) => setAnswers((a) => ({ ...a, [k]: v }));
              </div>
            </motion.div>
          ))}
          {!garbage.length && <div className="text-xs text-gray-400">No unreachable nodes yet.</div>}
        </div>
      </Card>
    </div>
  );
};

// ---------- Quiz ----------
const QuizPanel = () => {
  const [answers, setAnswers] = useState({});
  const set = (k, v) => setAnswers((a) => ({ ...a, [k]: v }));

  const score = () => {
    let s = 0;
    if (answers.q1 === "O(n)") s++;
    if (answers.q2 === "O(n log n)") s++;
    if (answers.q3 === "Omega") s++;
    if (answers.q4 === "mutable") s++;
    return s;
  };

  const total = 4;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Quick check" icon={<Book className="w-5 h-5" />}> 
        <div className="text-sm space-y-3">
          <div>
            <p className="font-semibold">1) Printing n items is…</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {['O(1)','O(log n)','O(n)','O(n²)'].map((c)=> (
                <button key={c} className={`px-2 py-1 border rounded text-xs ${answers.q1===c? 'bg-pink-100':''}`} onClick={()=>set('q1',c)}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">2) Merge sort is typically…</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {['O(n)','O(n log n)','O(n²)','O(log n)'].map((c)=> (
                <button key={c} className={`px-2 py-1 border rounded text-xs ${answers.q2===c? 'bg-pink-100':''}`} onClick={()=>set('q2',c)}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">3) “Best‑case bound” symbol is…</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {['Theta','Omega','Big‑O','Pi'].map((c)=> (
                <button key={c} className={`px-2 py-1 border rounded text-xs ${answers.q3===c? 'bg-pink-100':''}`} onClick={()=>set('q3',c)}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">4) Python dictionaries are…</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {['immutable','mutable'].map((c)=> (
                <button key={c} className={`px-2 py-1 border rounded text-xs ${answers.q4===c? 'bg-pink-100':''}`} onClick={()=>set('q4',c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card title="Result" icon={<Rocket className="w-5 h-5" />}> 
        <div className="text-center py-8">
          <div className="text-5xl">{score()}/{total}</div>
          <div className="mt-2 text-sm text-gray-600">{score()===total ? "Topper vibes, Advait!" : "Tweak and retry — mastery is a loop."}</div>
        </div>
      </Card>
function Section({ children }: { children: React.ReactNode }) {
  );
};

// ---------- Slide/Tab Shell ----------
const tabs = [
  { key: "intro", label: "Intro" },
  { key: "on", label: "O(n) Lab" },
  { key: "simplify", label: "Simplify" },
  { key: "bounds", label: "Ω/Θ/O" },
  { key: "pointers", label: "Pointers" },
  { key: "list", label: "Linked List" },
  { key: "quiz", label: "Quiz" },
];

function Section({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
}

export default function BigOCartoonLab() {
  const [tab, setTab] = useState("intro");

  return (
    <div style={bg.gradient} className="min-h-[100vh]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-500 text-white flex items-center justify-center text-xl">O</div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Big‑O Cartoon Lab • Advait</h1>
              <p className="text-xs text-gray-600">Time & Space complexity — playful, precise, interview‑ready.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/70 rounded-full p-1 border">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 py-1 rounded-full text-sm ${tab === t.key ? "bg-pink-500 text-white" : "text-gray-700"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </header>

        <div className="md:hidden mb-3">
          <select className="border rounded px-2 py-1 w-full" value={tab} onChange={(e) => setTab(e.target.value)}>
            {tabs.map((t) => (
              <option key={t.key} value={t.key}>{t.label}</option>
            ))}
          </select>
        </div>

        <AnimatePresence mode="wait">
          {tab === "intro" && (
            <Section key="intro">
              <Card title="What is Big‑O?" icon={<Cpu className="w-5 h-5" />}> 
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 text-sm leading-7">
                    <p><b>Big‑O</b> compares how algorithms <i>scale</i> as input grows. Not seconds — <b>steps</b>.</p>
                    <p>
                      Same code on a faster computer finishes earlier, but the <i>growth rate</i> stays the same. That growth rate is the
                      algorithm’s <b>order</b> — written as O(…)
                    </p>
                    <ul className="list-disc pl-5">
                      <li>Time complexity → number of operations.</li>
                      <li>Space complexity → extra memory used.</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">Footnote: The “O” comes from “order” (German <i>Ordnung</i>), and is used as an upper bound. In interviews, assume worst‑case unless told otherwise.</p>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-center">
                    <Mascot n={12} />
                  </div>
                </div>
              </Card>

              <ComplexityLab />
            </Section>
          )}

          {tab === "on" && (
            <Section key="on">
              <ComplexityLab />
            </Section>
          )}

          {tab === "simplify" && (
            <Section key="simplify">
              <SimplifyPanel />
            </Section>
          )}

          {tab === "bounds" && (
            <Section key="bounds">
              <BoundsPanel />
            </Section>
          )}

          {tab === "pointers" && (
            <Section key="pointers">
              <PointersPanel />
            </Section>
          )}

          {tab === "list" && (
            <Section key="list">
              <LinkedListPanel />
            </Section>
          )}

          {tab === "quiz" && (
            <Section key="quiz">
              <QuizPanel />
            </Section>
          )}
        </AnimatePresence>

        <footer className="mt-8 text-center text-xs text-gray-500">
          Made with curiosity • Cartoon‑themed for Advait • Keep exploring!
        </footer>
      </div>
    </div>
  );
}
