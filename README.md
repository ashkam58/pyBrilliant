# PythonKids — Interactive Python (Next.js + MDX + Tailwind)

One‑of‑a‑kind, modular Python platform with MDX chapters, quizzes, and a client‑side Pyodide playground.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Add a new chapter

1. Add an entry to `lib/course.ts`:
   ```ts
   export const PYTHON_COURSE = [
     // ...
     { slug: 'strings', title: 'Strings & f-strings', estMins: 12 },
   ]
   ```
2. Create `app/python/strings/page.mdx`:
   ```mdx
   export const metadata = {
     title: 'Strings & f-strings',
     description: 'formatting + slicing'
   }

   # Strings & f-strings

   <Callout type="note">Use `" "`, `' '`, or triple quotes.</Callout>

   ```python
   name = "Ashkam"
   print(f"Hey {name}!")
   ```

   <CodeRunner starter={`name='Ashkam'\nprint(f'Hey {name}!')`} />
   ```
3. Done. It appears on Home and `/python` lists.

## Tech

- Next.js App Router + MDX (`@next/mdx`)
- Tailwind for styling; Google fonts for playful vibes
- Framer Motion for micro‑animations
- Simple SEO via `metadata`, `sitemap.ts`, and `robots.ts`
- Pyodide for in‑browser Python execution (no server required)

> If you deploy to Vercel, remember to set your production URL inside `app/layout.tsx` (OpenGraph `url`).
