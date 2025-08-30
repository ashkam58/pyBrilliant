import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Python Brilliant - Interactive Python Learning',
  description: 'Learn Python interactively with bite-sized lessons, quizzes, and a live Python playground.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}

// WhatsApp link for demo booking
const WA = "https://wa.me/918637094331?text=Hi%20Ashkam%2C%20I%27d%20like%20to%20book%20a%20FREE%20demo%20for%20PythonKids!";

// Simple track function stub (replace with your analytics integration)
function track(event: string, data?: Record<string, any>) {
  // Example: send to analytics endpoint or console.log
  // Replace this with your analytics logic as needed
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[track]", event, data);
  }
}

// Simple confettiBoom stub (replace with real confetti if needed)
async function confettiBoom() {
  // You can integrate a confetti library here, e.g., canvas-confetti
  // For now, just log to the console
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[confettiBoom] 🎉 Confetti!");
  }
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 shadow-md">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-purple-200/40 blur-2xl" />

      <div className="relative z-10 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-black leading-tight text-purple-800 md:text-5xl">
            Python, Scratch, MERN — no yawns, only <em>aha!</em>
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            From Dubai math nights to NJ homework crunches — we’ve walked with your kids,
            shipping projects with confetti moments, IXL‑style drills, and live code runners.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA}
              onClick={async () => {
                track("cta_click_whatsapp_hero");
                await confettiBoom();
              }}
              className="rounded-xl bg-purple-700 px-5 py-3 font-bold text-white shadow hover:bg-purple-800"
            >
              📞 Book a FREE Demo
            </a>
            <a
              href="https://www.linkedin.com/in/ashkam-anwar-0a5400211"
              className="rounded-xl border-2 border-purple-700 px-5 py-3 font-bold text-purple-700 hover:bg-purple-50"
            >
              🔗 LinkedIn
            </a>
            <a
              href="mailto:ashkam58@gmail.com?subject=PythonKids%20Inquiry&body=Hi%20Ashkam%2C%20I%27m%20interested%20in%20your%20courses.%20Can%20we%20schedule%20a%20call%3F"
              className="rounded-xl border-2 border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-white"
            >
              ✉️ Email
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Word of the day: <span className="font-semibold">compelling</span> — powerfully convincing.
          </p>
        </div>
        <div className="grid gap-3">
          <Badge>Live, interactive code runners</Badge>
          <Badge>Gamified quizzes + streaks + confetti</Badge>
          <Badge>1‑on‑1 & small group tracks</Badge>
          <Badge>Weekly parent progress reports</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-purple-600 text-white">★</span>
      <span className="font-semibold text-slate-800">{children}</span>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="mt-6 grid items-center gap-4 rounded-2xl border bg-white p-5 text-sm text-slate-600 shadow-sm md:grid-cols-3">
      <p>✅ 1000+ sessions delivered</p>
      <p>🌍 Taught learners in Dubai & NJ</p>
      <p>🎯 IXL‑style drills • Confetti wins</p>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    {
      t: "Gamified learning",
      d: "Quizzes, streaks, and delightful confetti to reward progress.",
    },
    { t: "Interactive playgrounds", d: "Code runs live — see results instantly." },
    { t: "Weekly parent reports", d: "Clear, actionable updates, not vague jargon." },
    { t: "Real projects", d: "Confidence that shows up in homework and life." },
  ];
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.t}
          className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="text-lg font-bold text-slate-900">{it.t}</div>
          <p className="mt-1 text-sm text-slate-600">{it.d}</p>
        </div>
      ))}
    </section>
  );
}

function CourseExplorer() {
  type Course = {
    id: string;
    title: string;
    blurb: string;
    estMins: number;
    level: string;
    tags: string[];
  };

  const all: Course[] = useMemo(
    () => [
      {
        id: "py-kids",
        title: "Python Kids (Grades 3–6)",
        blurb: "Games, puzzles, logic drills.",
        estMins: 60,
        level: "Beginner",
        tags: ["Python", "Kids"],
      },
      {
        id: "py-teens",
        title: "Python Teens (Grades 7–9)",
        blurb: "Projects + DSA basics.",
        estMins: 75,
        level: "Beginner‑Intermediate",
        tags: ["Python", "Teens"],
      },
      {
        id: "scratch",
        title: "Scratch Superstars",
        blurb: "Block‑coding with story games.",
        estMins: 60,
        level: "Beginner",
        tags: ["Scratch"],
      },
      {
        id: "mern",
        title: "MERN Full‑Stack Starter",
        blurb: "Build an auth‑ready app.",
        estMins: 90,
        level: "Intermediate",
        tags: ["MERN", "Web"],
      },
      {
        id: "math-olymp",
        title: "Math Olympiad Boost",
        blurb: "Number sense, patterns, logic.",
        estMins: 60,
        level: "Varies",
        tags: ["Math"],
      },
      {
        id: "typing",
        title: "Typing & Productivity",
        blurb: "Speed + accuracy with games.",
        estMins: 45,
        level: "All",
        tags: ["Typing"],
      },
    ],
    []
  );

  const tags = ["All", "Python", "Scratch", "MERN", "Math", "Typing"] as const;
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const filtered = all.filter((c) => {
    const inTag = tag ? c.tags.includes(tag) : true;
    const term = q.trim().toLowerCase();
    const inQ = term ? c.title.toLowerCase().includes(term) || c.blurb.toLowerCase().includes(term) : true;
    return inTag && inQ;
  });

  return (
    <section className="mt-10">
      <header className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-extrabold text-purple-800">Explore Courses</h2>
          <p className="text-sm text-slate-600">
            Filter by track and peek at the mini‑syllabus. Each card books your demo via WhatsApp.
          </p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search (e.g., Python, MERN)"
          className="h-10 w-full rounded-xl border px-3 sm:w-72"
        />
      </header>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t === "All" ? null : t)}
            className={`rounded-full border px-4 py-1 text-sm ${
              tag === (t === "All" ? null : t)
                ? "border-purple-700 bg-purple-700 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
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

function CourseCard(props: {
  id: string;
  title: string;
  blurb: string;
  estMins: number;
  level: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);
  const recs: Record<string, string[]> = {
    "py-kids": ["Print & input", "Loops as dance steps", "Lists as backpacks", "Mini‑game: Guess‑the‑Animal"],
    "py-teens": ["Functions & scope", "Data structures", "DSA lite: stacks/queues", "Project: Quiz App"],
    scratch: ["Sprites & stage", "Events & loops", "Build a maze", "Share your game"],
    mern: ["React basics", "Node/Express API", "MongoDB models", "Auth + deployment"],
    "math-olymp": ["Number sense", "Patterns & sequences", "Logic puzzles", "Speed drills"],
    typing: ["Home row", "Top/Bottom drills", "Accuracy games", "Typing race"],
  };
  const info = recs[props.id] || ["Fun stuff coming soon ✨"];

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{props.title}</h3>
          <p className="text-sm text-slate-600">{props.blurb}</p>
        </div>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          {props.level}
        </span>
      </header>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
        <span>⏱️ {props.estMins} min</span>
        <span>🏷️ {props.tags.join(" · ")}</span>
      </div>

      <button
        onClick={() => {
          setOpen((v) => !v);
          track("course_card_view_syllabus", { course_id: props.id });
        }}
        className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
      >
        {open ? "Hide" : "View"} mini‑syllabus
      </button>

      {open && (
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700">
          {info.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white hover:bg-purple-800"
          href={`${WA.replace("FREE%20demo%20for%20PythonKids!", `a%20FREE%20demo%20for%20${encodeURIComponent(
            props.title
          )}!`)}`}
          onClick={() => track("cta_click_whatsapp_hero", { course_id: props.id })}
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

function ChoosePathWizard() {
  type Persona = "parent" | "student" | "teen" | "adult" | null;
  const [persona, setPersona] = useState<Persona>(null);
  const [plan, setPlan] = useState<string[] | null>(null);

  function generate() {
    track("wizard_generate_plan", { persona });
    const p =
      persona === "parent"
        ? [
            "Free demo & baseline assessment",
            "Weekly 1‑on‑1 (60m)",
            "Monthly progress report",
            "Capstone project showcase",
          ]
        : persona === "student"
        ? [
            "Python basics",
            "Loops & lists",
            "Mini‑project: Guess game",
            "Typing speed booster",
          ]
        : persona === "teen"
        ? [
            "Python + DSA lite",
            "Git & projects",
            "Web dev sampler (React)",
            "Publish a portfolio",
          ]
        : persona === "adult"
        ? [
            "Python for automation",
            "AI tools 101",
            "Build a personal dashboard",
            "Ship a micro‑SaaS idea",
          ]
        : null;
    setPlan(p);
  }

  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
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
            className={`rounded-full border px-4 py-2 text-sm ${
              persona === b.key
                ? "border-purple-700 bg-purple-700 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={generate}
          disabled={!persona}
          className="rounded-xl bg-purple-700 px-5 py-2 font-bold text-white hover:bg-purple-800 disabled:opacity-50"
        >
          Generate Mini‑Plan
        </button>
        {plan && (
          <a
            className="rounded-xl border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            href={`https://wa.me/918637094331?text=Hi%20Ashkam%2C%20here%27s%20my%20mini%20plan%3A%20${encodeURIComponent(
              plan.join(" → ")
            )}.%20Can%20you%20guide%20me%20next%3F`}
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

function HowItWorks() {
  const steps = [
    { t: "Free demo & baseline", d: "Fun assessment + clear goals." },
    { t: "Pick a track", d: "Python, Scratch, MERN, Math, or Typing — tailored to you." },
    { t: "Weekly sessions", d: "60–90 mins, hands‑on. Parent updates weekly." },
    { t: "Capstone & showcase", d: "Publish or present a project. Celebrate progress!" },
  ];
  const [i, setI] = useState(0);
  const pct = ((i + 1) / steps.length) * 100;
  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
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
              className={`w-full rounded-xl border px-4 py-3 text-left ${
                i === idx ? "border-purple-700 bg-purple-50" : "border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold">
                {idx + 1}. {s.t}
              </div>
              <div className="text-sm text-slate-600">{s.d}</div>
            </button>
          ))}
        </div>
        <div className="rounded-2xl border bg-gradient-to-br from-white to-purple-50 p-6">
          <h3 className="text-lg font-bold text-purple-800">Step {i + 1}: {steps[i].t}</h3>
          <p className="mt-2 text-slate-700">{steps[i].d}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a className="rounded-lg bg-purple-700 px-4 py-2 font-bold text-white hover:bg-purple-800" href={WA}>Book this step</a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50" href="mailto:ashkam58@gmail.com">Ask a question</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { who: "Parent — Dubai", text: "My son finally loves math and coding. The confetti moments are everything!" },
    { who: "Student — NJ, USA", text: "Built my first quiz app in Python. Felt like a wizard 🧙‍♂️." },
    { who: "Parent — Mumbai", text: "Weekly updates + real projects = trust. Highly recommend." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, [quotes.length]);
  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-purple-800">What Families Say</h2>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)} className="rounded-full border px-3 py-2 hover:bg-slate-50">←</button>
        <blockquote className="flex-1 text-center">
          <p className="text-lg font-semibold text-slate-800">“{quotes[i].text}”</p>
          <footer className="mt-2 text-sm text-slate-600">— {quotes[i].who}</footer>
        </blockquote>
        <button onClick={() => setI((v) => (v + 1) % quotes.length)} className="rounded-full border px-3 py-2 hover:bg-slate-50">→</button>
      </div>
    </section>
  );
}

function Pricing() {
  const [mode, setMode] = useState<"group" | "one">("group");
  const price =
    mode === "group"
      ? {
          label: "Small Group (3–5)",
          amount: "₹699 / session",
          desc: "Fun peer energy, shared projects.",
        }
      : { label: "1‑on‑1", amount: "₹1299 / session", desc: "Personalized pace & goals." };
  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-purple-800">Simple Pricing</h2>
          <p className="text-sm text-slate-600">Switch to compare. Scholarships available on request.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border p-1">
          <Toggle active={mode === "group"} onClick={() => setMode("group")} label="Group" />
          <Toggle active={mode === "one"} onClick={() => setMode("one")} label="1‑on‑1" />
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
            <a className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white hover:bg-purple-800" href={WA} onClick={() => track("cta_click_whatsapp_hero", { plan: mode })}>
              Enroll Now
            </a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" href="mailto:ashkam58@gmail.com">
              Ask about scholarships
            </a>
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
            <p>
              <strong>Note:</strong> Prices are indicative and may vary by duration/track. Contact us for custom packages or school partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Toggle({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full px-4 py-1 text-sm ${active ? "bg-purple-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>
      {label}
    </button>
  );
}

function WordOfTheDay() {
  const words = [
    { w: "persuasive", m: "able to convince; compelling" },
    { w: "succinct", m: "brief and clearly expressed" },
    { w: "resilient", m: "able to recover quickly; tough" },
    { w: "meticulous", m: "very careful and precise" },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(Math.floor(Math.random() * words.length)), []);
  return (
    <section className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <div className="text-sm text-slate-600">Word of the Day</div>
      <div className="mt-1 text-xl font-extrabold text-purple-800">{words[idx].w}</div>
      <div className="text-sm text-slate-700">{words[idx].m}</div>
      <p className="mt-2 text-xs text-slate-500">Cut to the chase: Our demo is persuasive because it shows progress now, not later — hook, line, and sinker.</p>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-700 p-8 text-center text-white">
      <h2 className="text-3xl font-black">Ready when you are, superstar ✨</h2>
      <p className="mt-2 text-purple-100">Let’s make learning feel like a game and progress feel inevitable.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          className="rounded-xl bg-white px-5 py-3 font-bold text-purple-800 hover:bg-purple-50"
          href={WA}
          onClick={() => track("cta_click_whatsapp_hero", { location: "final_banner" })}
        >
          📞 Book a FREE Demo
        </a>
        <a className="rounded-xl border-2 border-white/80 px-5 py-3 font-bold text-white hover:bg-white/10" href="https://www.linkedin.com/in/ashkam-anwar-0a5400211">
          🔗 LinkedIn
        </a>
        <a className="rounded-xl border-2 border-white/80 px-5 py-3 font-bold text-white hover:bg-white/10" href="mailto:ashkam58@gmail.com">
          ✉️ Email
        </a>
      </div>
    </section>
  );
}

function OrgJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "PythonKids by Ashkam Intelligence Studios",
    url: "https://example.com",
    sameAs: [
      "https://www.linkedin.com/in/ashkam-anwar-0a5400211",
      "https://wa.me/918637094331",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "ashkam58@gmail.com",
        availableLanguage: ["en", "hi"],
      },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "699",
      description: "Small group live coding session",
    },
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
