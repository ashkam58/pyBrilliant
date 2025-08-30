"use client";
import { useEffect, useMemo, useRef, useState } from "react";

// Drop this file at: app/about/page.tsx (App Router)
// Tailwind required. No external UI libs. Pure React interactions for reliability.
// All CTAs are live links: WhatsApp, LinkedIn, Email. Adjust copy & pricing as needed.

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Hero />
      <StickyCTA />
      <TrustStrip />
      <Stats />
      <CourseExplorer />
      <JourneyWizard />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ForBuilders />
      <FinalCTA />
      <OrgJsonLd />
    </main>
  );
}

/** ------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 shadow-md">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl"/>
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-purple-200/40 blur-2xl"/>

      <div className="relative z-10 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-black leading-tight text-purple-800 md:text-5xl">
            PythonKids — Learn to Code with Joy ✨
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Cartoon‑vibed, interactive lessons for kids, teens & curious adults.
            We blend <strong>Python</strong>, <strong>Scratch</strong>, and the <strong>MERN Stack</strong> with games,
            quizzes, and real projects. Zero yawns, maximum <em>aha!</em>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%27d%20like%20a%20FREE%20demo%20for%20PythonKids!"
              className="rounded-xl bg-purple-700 px-5 py-3 font-bold text-white shadow hover:bg-purple-800"
            >
              📞 Book a FREE Demo
            </a>
            <a
              href="https://www.linkedin.com/in/ashkam-anwar-0a5400211"
              className="rounded-xl border-2 border-purple-700 px-5 py-3 font-bold text-purple-700 hover:bg-purple-50"
            >
              🔗 Connect on LinkedIn
            </a>
            <a
              href="mailto:ashkam58@gmail.com?subject=PythonKids%20Inquiry&body=Hi%20Ashkam%2C%20I%27m%20interested%20in%20your%20courses.%20Can%20we%20schedule%20a%20call%3F"
              className="rounded-xl border-2 border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-white"
            >
              ✉️ Email Us
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Word of the day: <span className="font-semibold">persuasive</span> — able to convince; compelling.
          </p>
        </div>

        <div className="grid gap-3">
          <BulletedBadge>Live, interactive code runners</BulletedBadge>
          <BulletedBadge>Gamified quizzes + confetti highscores</BulletedBadge>
          <BulletedBadge>1‑on‑1 & small group tracks</BulletedBadge>
          <BulletedBadge>Parent progress reports every week</BulletedBadge>
        </div>
      </div>
    </section>
  );
}

function BulletedBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-purple-600 text-white">★</span>
      <span className="font-semibold text-slate-800">{children}</span>
    </div>
  );
}

/** ------------------------------ Sticky CTA ------------------------------ */
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <a
        href="https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%27d%20like%20a%20FREE%20demo%20for%20PythonKids!"
        className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white shadow-lg shadow-purple-400/30 hover:bg-purple-800"
      >
        🚀 Start with a FREE Demo
      </a>
    </div>
  );
}

/** ------------------------------ Trust strip ----------------------------- */
function TrustStrip() {
  return (
    <section className="mt-10 grid items-center gap-4 rounded-2xl border bg-white p-5 text-sm text-slate-600 shadow-sm md:grid-cols-3">
      <p>✅ 1000+ sessions delivered</p>
      <p>🛡️ Safe, kid‑friendly learning space</p>
      <p>📈 Real projects, real confidence</p>
    </section>
  );
}

/** -------------------------------- Stats -------------------------------- */
function Stats() {
  const items = [
    { label: "Learners coached", end: 350 },
    { label: "Avg. session rating", end: 4.9, decimals: 1 },
    { label: "Parent satisfaction", end: 98, suffix: "%" },
    { label: "Projects shipped", end: 75 },
  ];
  return (
    <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="text-3xl font-black text-purple-700">
            <CountUp end={it.end} duration={1200} decimals={it.decimals} />
            {it.suffix ?? ""}
          </div>
          <div className="mt-1 text-sm text-slate-600">{it.label}</div>
        </div>
      ))}
    </section>
  );
}

function CountUp({ end, duration = 1000, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const cur = end * p;
      setVal(parseFloat(cur.toFixed(decimals)));
      if (p < 1) requestAnimationFrame(step);
    };
    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [end, duration, decimals]);
  return <span>{val.toLocaleString()}</span>;
}

/** --------------------------- Course Explorer --------------------------- */
function CourseExplorer() {
  const allCourses = useMemo<CourseCardProps[]>(
    () => [
      { id: "py-kids", title: "Python Kids (Grades 3–6)", blurb: "Games, puzzles, logic drills.", tags: ["Python", "Kids"], estMins: 60, level: "Beginner" },
      { id: "py-teens", title: "Python Teens (Grades 7–9)", blurb: "Projects + DSA basics.", tags: ["Python", "Teens"], estMins: 75, level: "Beginner-Intermediate" },
      { id: "scratch", title: "Scratch Superstars", blurb: "Block‑coding with story games.", tags: ["Scratch"], estMins: 60, level: "Beginner" },
      { id: "mern", title: "MERN Full‑Stack Starter", blurb: "Build an auth‑ready app.", tags: ["MERN", "Web"], estMins: 90, level: "Intermediate" },
      { id: "math-olymp", title: "Math Olympiad Boost", blurb: "Number sense, patterns, logic.", tags: ["Math"], estMins: 60, level: "Varies" },
      { id: "typing", title: "Typing & Productivity", blurb: "Speed + accuracy with games.", tags: ["Typing"], estMins: 45, level: "All" },
    ],
    []
  );
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const filtered = allCourses.filter((c) => {
    const inTag = tag ? c.tags.includes(tag) : true;
    const inQ = q.trim() ? c.title.toLowerCase().includes(q.toLowerCase()) || c.blurb.toLowerCase().includes(q.toLowerCase()) : true;
    return inTag && inQ;
  });

  const tags = ["All", "Python", "Scratch", "MERN", "Math", "Typing"] as const;

  return (
    <section className="mt-12">
      <header className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-extrabold text-purple-800">Explore Courses</h2>
          <p className="text-sm text-slate-600">Filter by track and peek at lesson flow. Click a card for a mini‑syllabus.</p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses (e.g., Python, MERN)"
          className="h-10 w-full rounded-xl border px-3 sm:w-72"
        />
      </header>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t === "All" ? null : t)}
            className={`rounded-full border px-4 py-1 text-sm ${tag === (t === "All" ? null : t) ? "border-purple-700 bg-purple-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
}

type CourseCardProps = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  estMins: number;
  level: string;
};

function CourseCard(props: CourseCardProps) {
  const [open, setOpen] = useState(false);
  const sampleSyllabus: Record<string, string[]> = {
    "py-kids": ["Print & input", "Loops as dance steps", "Lists as backpacks", "Mini‑game: Guess‑the‑Animal"],
    "py-teens": ["Functions & scope", "Data structures", "DSA lite: stacks/queues", "Project: Quiz App"],
    scratch: ["Sprites & stage", "Events & loops", "Build a maze", "Share your game"],
    mern: ["React basics", "Node/Express API", "MongoDB models", "Auth + deployment"],
    "math-olymp": ["Number sense", "Patterns & sequences", "Logic puzzles", "Speed drills"],
    typing: ["Home row", "Top/Bottom drills", "Accuracy games", "Typing race"],
  };
  const recs = sampleSyllabus[props.id] || ["Fun stuff coming soon ✨"];

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{props.title}</h3>
          <p className="text-sm text-slate-600">{props.blurb}</p>
        </div>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">{props.level}</span>
      </header>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
        <span>⏱️ {props.estMins} min</span>
        <span>🏷️ {props.tags.join(" · ")}</span>
      </div>

      <button onClick={() => setOpen((v) => !v)} className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
        {open ? "Hide" : "View"} mini‑syllabus
      </button>

      {open && (
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700">
          {recs.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white hover:bg-purple-800"
          href={`https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%27m%20interested%20in%20${encodeURIComponent(props.title)}.%20Can%20we%20book%20a%20free%20demo%3F`}
        >
          Book Free Demo
        </a>
        <a
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          href="mailto:ashkam58@gmail.com?subject=Course%20Inquiry%20-%20PythonKids"
        >
          Ask a Question
        </a>
      </div>
    </article>
  );
}

/** --------------------------- Journey Wizard ---------------------------- */
function JourneyWizard() {
  const [persona, setPersona] = useState<"parent" | "student" | "teen" | "adult" | null>(null);
  const [plan, setPlan] = useState<string[] | null>(null);

  const computePlan = () => {
    const p =
      persona === "parent"
        ? ["Free demo & baseline assessment", "Weekly 1‑on‑1 (60m)", "Monthly progress report", "Capstone project showcase"]
        : persona === "student"
        ? ["Python basics", "Loops & lists", "Mini‑project: Guess game", "Typing speed booster"]
        : persona === "teen"
        ? ["Python + DSA lite", "Git & projects", "Web dev sampler (React)", "Publish a portfolio"]
        : persona === "adult"
        ? ["Python for automation", "AI tools 101", "Build a personal dashboard", "Ship a micro‑SaaS idea"]
        : null;
    setPlan(p);
  };

  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-purple-800">Choose Your Path</h2>
      <p className="text-sm text-slate-600">Pick who you are — we’ll lay out a mini‑plan instantly.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(
          [
            { key: "parent", label: "I’m a Parent" },
            { key: "student", label: "I’m a Student (G3–6)" },
            { key: "teen", label: "I’m a Teen (G7–9)" },
            { key: "adult", label: "I’m an Adult Learner" },
          ] as const
        ).map((b) => (
          <button
            key={b.key}
            onClick={() => setPersona(b.key)}
            className={`rounded-full border px-4 py-2 text-sm ${persona === b.key ? "border-purple-700 bg-purple-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <button onClick={computePlan} className="rounded-xl bg-purple-700 px-5 py-2 font-bold text-white hover:bg-purple-800 disabled:opacity-50" disabled={!persona}>
          Generate Mini‑Plan
        </button>
        {plan && (
          <a
            className="rounded-xl border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            href={`https://wa.me/918637094331?text=Hi%20Ashkam%2C%20here%27s%20my%20mini%20plan%3A%20${encodeURIComponent(plan.join(" → "))}.%20Can%20you%20guide%20me%20next%3F`}
          >
            Share on WhatsApp
          </a>
        )}
      </div>

      {plan && (
        <ul className="mt-4 list-decimal space-y-1 pl-6 text-sm text-slate-700">
          {plan.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** --------------------------- How It Works ------------------------------ */
function HowItWorks() {
  const steps = [
    { t: "Book a free demo", d: "We do a fun baseline assessment and set goals." },
    { t: "Pick a track", d: "Python, Scratch, MERN, Math, or Typing — tailored to you." },
    { t: "Weekly sessions", d: "60–90 mins, hands‑on, project‑first. Parent updates weekly." },
    { t: "Capstone & showcase", d: "Publish or present a project. Celebrate progress!" },
  ];
  const [i, setI] = useState(0);
  const pct = ((i + 1) / steps.length) * 100;
  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-purple-800">How It Works</h2>
      <div className="mt-4 h-2 w-full overflow-hidden rounded bg-slate-200">
        <div className="h-full bg-purple-600 transition-all" style={{ width: pct + "%" }} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {steps.map((s, idx) => (
            <button
              key={s.t}
              onClick={() => setI(idx)}
              className={`w-full rounded-xl border px-4 py-3 text-left ${i === idx ? "border-purple-700 bg-purple-50" : "border-slate-300 hover:bg-slate-50"}`}
            >
              <div className="font-bold">{idx + 1}. {s.t}</div>
              <div className="text-sm text-slate-600">{s.d}</div>
            </button>
          ))}
        </div>
        <div className="rounded-2xl border bg-gradient-to-br from-white to-purple-50 p-6">
          <h3 className="text-lg font-bold text-purple-800">Step {i + 1}: {steps[i].t}</h3>
          <p className="mt-2 text-slate-700">{steps[i].d}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a className="rounded-lg bg-purple-700 px-4 py-2 font-bold text-white hover:bg-purple-800" href="https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%20want%20to%20book%20a%20demo.">Book this step</a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50" href="mailto:ashkam58@gmail.com">Ask a question</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ----------------------------- Testimonials ---------------------------- */
function Testimonials() {
  const quotes = [
    { who: "Parent — Dubai", text: "My son finally loves math and coding. The confetti moments are everything!" },
    { who: "Student — NJ, USA", text: "Built my first quiz app in Python. Felt like a wizard 🧙‍♂️." },
    { who: "Parent — Mumbai", text: "Weekly updates + real projects = trust. Highly recommend." },
  ];
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % quotes.length);
  const prev = () => setI((v) => (v - 1 + quotes.length) % quotes.length);

  // auto-advance
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-purple-800">What Families Say</h2>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button onClick={prev} className="rounded-full border px-3 py-2 hover:bg-slate-50">←</button>
        <blockquote className="flex-1 text-center">
          <p className="text-lg font-semibold text-slate-800">“{quotes[i].text}”</p>
          <footer className="mt-2 text-sm text-slate-600">— {quotes[i].who}</footer>
        </blockquote>
        <button onClick={next} className="rounded-full border px-3 py-2 hover:bg-slate-50">→</button>
      </div>
    </section>
  );
}

/** -------------------------------- Pricing ------------------------------ */
function Pricing() {
  const [mode, setMode] = useState<"group" | "one">("group");
  const price = mode === "group" ? { label: "Small Group (3–5)", amount: "₹699 / session", desc: "Fun peer energy, shared projects." } : { label: "1‑on‑1", amount: "₹1299 / session", desc: "Personalized pace & goals." };
  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-purple-800">Simple Pricing</h2>
          <p className="text-sm text-slate-600">Switch to compare. Scholarships available on request.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border p-1">
          <ToggleChip active={mode === "group"} onClick={() => setMode("group")} label="Group" />
          <ToggleChip active={mode === "one"} onClick={() => setMode("one")} label="1‑on‑1" />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-gradient-to-br from-purple-50 to-white p-6">
          <div className="text-sm font-semibold text-purple-700">{price.label}</div>
          <div className="mt-1 text-3xl font-black text-purple-800">{price.amount}</div>
          <p className="mt-2 text-sm text-slate-700">{price.desc}</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700">
            <li>60–90 min live session</li>
            <li>Projects, quizzes, reports</li>
            <li>Parent Q&A after class</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white hover:bg-purple-800" href="https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%27m%20ready%20to%20enroll!">Enroll Now</a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" href="mailto:ashkam58@gmail.com">Ask about scholarships</a>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <div className="text-sm font-semibold text-slate-700">What’s included</div>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
            <li>Interactive playgrounds & mini‑games</li>
            <li>Progress dashboards (parents get weekly notes)</li>
            <li>Flexible scheduling (IST/EST friendly)</li>
            <li>Certificate & showcase at milestones</li>
          </ul>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
            <p><strong>Note:</strong> Prices are indicative and may vary by duration/track. Contact us for custom packages or school partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full px-4 py-1 text-sm ${active ? "bg-purple-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>{label}</button>
  );
}

/** ---------------------------------- FAQ -------------------------------- */
function FAQ() {
  const items = [
    { q: "What ages do you teach?", a: "Grades 3–9 primarily, with adult tracks available for career‑switchers." },
    { q: "Do you offer 1‑on‑1?", a: "Yes. 1‑on‑1 or small groups (3–5) depending on goals and schedule." },
    { q: "Can I get a trial?", a: "Absolutely — book a free demo to experience a live lesson and baseline assessment." },
    { q: "What tools do you use?", a: "From block‑coding (Scratch) to real IDEs and interactive web apps — tailored to the learner." },
  ];
  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-purple-800">FAQ</h2>
      <div className="mt-3 divide-y">
        {items.map((it, idx) => (
          <FAQItem key={idx} {...it} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((v) => !v)}>
        <span className="font-semibold text-slate-900">{q}</span>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-slate-700">{a}</p>}
    </div>
  );
}

/** ----------------------------- For Builders ---------------------------- */
function ForBuilders() {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-12 rounded-2xl border bg-gradient-to-br from-white to-yellow-50 p-6 shadow-sm">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <h2 className="text-2xl font-extrabold text-purple-800">For Curious Teachers / Builders</h2>
        <span className="text-slate-500">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div className="mt-3 text-sm text-slate-700">
          <p><strong>How the platform works:</strong> Lessons are authored in MDX. Add a folder at <code>app/python/&lt;slug&gt;/page.mdx</code> and register it in <code>lib/course.ts</code> with <code>{`{ slug, title, estMins }`}</code>.</p>
          <ol className="ml-5 list-decimal space-y-1">
            <li>Edit <code>lib/course.ts</code> to add metadata.</li>
            <li>Create the MDX file and write the lesson with components like <code>&lt;Callout/&gt;</code>, <code>&lt;Quiz/&gt;</code>, <code>&lt;CodeRunner/&gt;</code>.</li>
            <li>SEO via <code>metadata</code>, <code>sitemap</code>, and <code>robots</code>. Tailwind supplies the cartoon vibe.</li>
          </ol>
        </div>
      )}
    </section>
  );
}

/** -------------------------------- Final CTA ---------------------------- */
function FinalCTA() {
  return (
    <section className="mt-12 rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-700 p-8 text-center text-white">
      <h2 className="text-3xl font-black">Ready when you are, superstar ✨</h2>
      <p className="mt-2 text-purple-100">Let’s make learning feel like a game and progress feel inevitable.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a className="rounded-xl bg-white px-5 py-3 font-bold text-purple-800 hover:bg-purple-50" href="https://wa.me/918637094331?text=Hi%20Ashkam%2C%20please%20book%20a%20free%20demo%20for%20me.">📞 Book a FREE Demo</a>
        <a className="rounded-xl border-2 border-white/80 px-5 py-3 font-bold text-white hover:bg-white/10" href="https://www.linkedin.com/in/ashkam-anwar-0a5400211">🔗 LinkedIn</a>
        <a className="rounded-xl border-2 border-white/80 px-5 py-3 font-bold text-white hover:bg-white/10" href="mailto:ashkam58@gmail.com">✉️ Email</a>
      </div>
    </section>
  );
}

/** ------------------------------ JSON-LD SEO ---------------------------- */
function OrgJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "PythonKids by Ashkam Intelligence Studios",
    url: "https://example.com",
    sameAs: [
      "https://www.linkedin.com/in/ashkam-anwar-0a5400211",
      "https://wa.me/918002416363"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "ashkam58@gmail.com",
      availableLanguage: ["en", "hi"]
    }],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "699",
      description: "Small group live coding session"
    }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
