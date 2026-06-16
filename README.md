# MECH 4502 Vibrations Formula Navigator

A modern, topic-based interactive formula navigation tool for **MECH 4502 Vibrations** at York University / Lassonde. Students browse formulas by course topic, concept, and problem type — not by quiz or exam.

## Features

- **Topic-based navigation** — organized by chapters and concepts (SDOF free vibration, forced vibration, Fourier series, 2-DOF, etc.)
- **Rich formula cards** — LaTeX rendering, explanations, variables, assumptions, use cases, common mistakes
- **Formula detail drawer** — tabbed panel with Meaning, Variables, Assumptions, Use Cases, Mistakes, Related, Example
- **Global search** — search across titles, LaTeX, variables, topics, tags, and use cases
- **Formula chooser** — interactive decision tree that recommends specific formulas with warnings
- **Smooth animations** — Framer Motion transitions throughout
- **Fully data-driven** — all content lives in TypeScript data files

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### GitHub Pages

The site deploys automatically to GitHub Pages when changes are pushed to `main`.

**Live site:** https://pontmousse.github.io/vibrations-formula-sheet/

In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions** (not "Deploy from branch").

To test the production build locally:

```bash
npm run build:gh-pages
npx serve out
```

Then open http://localhost:3000/vibrations-formula-sheet/

### Production build (Node server)

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Home page (renders AppShell)
│   └── globals.css         # Tailwind + York theme colors
├── components/
│   ├── AppShell.tsx        # Main layout orchestrator
│   ├── Hero.tsx            # Hero section
│   ├── SearchCommand.tsx   # Global search bar
│   ├── TopicGrid.tsx       # Topic card grid
│   ├── TopicCard.tsx       # Individual topic card
│   ├── SubtopicAccordion.tsx  # Expandable subtopic sections
│   ├── FormulaCard.tsx     # Formula preview card
│   ├── FormulaDrawer.tsx   # Right-side detail drawer
│   ├── FormulaChooser.tsx  # "How to choose a formula" guide
│   ├── Math.tsx            # KaTeX wrapper component
│   └── Breadcrumbs.tsx     # Navigation breadcrumbs
├── data/
│   ├── formulas.ts         # All formula entries (extend here)
│   └── courseTopics.ts     # Course topic hierarchy (extend here)
└── lib/
    ├── search.ts           # Search and filter logic
    ├── grouping.ts         # Group formulas by topic/subtopic
    └── utils.ts            # Utility helpers (cn)
```

## How to Add a Formula

Edit `src/data/formulas.ts` and append a new entry to the `formulas` array:

```typescript
{
  id: "my-new-formula",           // unique kebab-case ID
  title: "My New Formula",
  topic: "vibration-parameters",  // must match a topic id in courseTopics.ts
  subtopic: "Natural frequency",    // must match a subtopic string in that topic
  latex: "\\omega_n = \\sqrt{k/m}",
  explanation: "Short explanation for students.",
  variables: [
    { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
  ],
  assumptions: ["Linear spring", "SDOF"],
  useCases: ["Finding oscillation rate"],
  notFor: ["Multi-DOF without reduction"],
  commonMistakes: ["Using total mass instead of equivalent mass"],
  relatedFormulaIds: ["natural-frequency"],
  problemTypes: ["SDOF parameter identification"],
  tags: ["SDOF", "Free vibration", "Exam-useful"],
  source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
  example: {
    prompt: "Given m=5 kg, k=200 N/m, find ω_n.",
    steps: ["ω_n = √(200/5) = 6.32 rad/s"],
  },
}
```

No UI changes are needed — the new formula appears automatically under its topic and subtopic.

## How to Add a Topic

Edit `src/data/courseTopics.ts` and add a new entry:

```typescript
{
  id: "my-new-topic",
  title: "My New Topic",
  chapterRange: "Ch. 9",
  description: "Brief description for the topic card.",
  subtopics: ["Subtopic A", "Subtopic B"],
  tags: ["SDOF", "Conceptual"],
}
```

Then add formulas with `topic: "my-new-topic"` and matching `subtopic` values.

## How to Change Colors / Theme

Edit CSS custom properties in `src/app/globals.css`:

| Variable | Default | Usage |
|----------|---------|-------|
| `--york-red` | `#b91c1c` | Primary accent, buttons, highlights |
| `--navy` | `#0f1f3d` | Headers, dark sections |
| `--background` | `#f8f9fb` | Page background |
| `--warm-accent` | `#d97706` | Optional warm accent |

Tailwind theme tokens are defined in the `@theme inline` block and used as classes like `bg-york-red`, `text-navy`, `bg-page`.

## Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** — animations
- **KaTeX** via **react-katex** — math rendering
- **Lucide React** — icons

## Pedagogical Note

Navigation is organized by **course topics and concepts**, not by assessment. Quiz, midterm, and exam references appear only as optional source metadata on individual formula cards (e.g., "Source: Quiz 2 formula sheet, page 3").

## License

Educational use for MECH 4502 students and TAs.
