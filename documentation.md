# MECH 4502 Formula Navigator — Project Documentation

This document captures the **general architecture** of the project and, especially, the **original intent of the formula selector** so future contributors can extend formulas, redesign the UI, or rebuild the chooser without losing the pedagogical goals discussed during development.

---

## 1. Project purpose

The MECH 4502 Vibrations Formula Navigator is a **student-facing learning tool** for browsing course formulas by:

- **Topic and chapter** (not by quiz, midterm, or exam)
- **Concept and problem type**
- **Assumptions and use cases**

It is **not** a problem solver. It helps students **find and understand** the right formula family for a given physical situation.

### Core principles

1. **Topic-first navigation** — assessments may appear only as optional dev metadata, never as primary structure.
2. **Data-driven content** — adding a formula should not require editing UI components.
3. **Honest scope** — empty topic shells mislead students; navigation should reflect what is actually in the dataset.
4. **Guardrails over automation** — the selector suggests formulas and warnings; it does not claim to “solve” the problem.

---

## 2. Technical overview

| Layer | Location | Role |
|-------|----------|------|
| Content | `src/data/formulas.ts` | Formula entries (LaTeX, explanations, tags, links) |
| Topics | `src/data/courseTopics.ts` | Topic hierarchy and subtopics |
| Selector tree | `src/data/formulaSelectionTree.ts` | Decision nodes and leaf results |
| Selector logic | `src/lib/formulaSelection.ts` | Tree lookup and formula resolution |
| Search | `src/lib/search.ts` | Global text search over formulas |
| Grouping | `src/lib/grouping.ts` | Group formulas by topic/subtopic |
| Feature flags | `src/lib/features.ts` | Gate optional / sensitive content |

### Feature flags

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SHOW_FORMULA_CHOOSER` | `true` | Show/hide the decision-tree guide |
| `NEXT_PUBLIC_SHOW_SOURCE_METADATA` | `false` | Quiz/midterm source lines on cards |
| `NEXT_PUBLIC_SHOW_COMMON_MISTAKES` | `false` | Common-mistakes tab and card warnings |

---

## 3. Formula selector — why it exists

Students in vibrations courses often fail not because they cannot manipulate algebra, but because they pick the **wrong formula family**:

- free vs forced response
- force on mass vs base excitation (**M vs TR**)
- transient vs steady-state
- undamped vs damped forms
- SDOF vs 2-DOF
- equivalent system reduction before any response formula

The selector exists to mirror **how a TA would narrow the problem in office hours**, without replacing lecture, derivations, or instructor judgment.

### What it should do

- Ask a **small number of high-value questions** in a logical order.
- **Skip irrelevant branches** (e.g. do not ask steady-state if the path is free vibration).
- **Accumulate context** across answers — never let the last click erase earlier ones.
- Return **specific formula IDs**, not just a topic name.
- Show **short warnings** for known traps (M vs TR, ω_d only when ζ < 1, etc.).
- Let students open a formula directly or browse the full topic.

### What it should not do

- Claim a single “correct” formula for ambiguous exam-style word problems.
- Replace understanding of damping classification or equivalent systems.
- Route by assessment name (Quiz 1, Midterm, etc.).
- Auto-apply formulas or produce numerical answers.

---

## 4. Selector architecture (current)

### Data model (`formulaSelectionTree.ts`)

Three concepts:

```typescript
SelectionNode   // A question + options
SelectionOption // One answer; either nextNodeId or result
SelectionResult // Leaf: title, description, topicId, formulaIds, warnings?
```

### Decision flow (canonical intent)

This is the **reference flow** agreed during design. Future redesigns should preserve these forks even if UI changes.

```
Need equivalent k, m, c first?
├─ yes → Equivalent Systems
└─ no → SDOF or 2-DOF?
         ├─ 2-DOF → Two-DOF Systems
         └─ SDOF → Free or forced?
                    ├─ free → Damping level?
                    │         ├─ undamped
                    │         ├─ underdamped
                    │         ├─ critically damped
                    │         └─ overdamped
                    └─ forced → Excitation type?
                                  ├─ harmonic force on mass → transient or steady?
                                  │                            ├─ steady → X, M, φ
                                  │                            └─ transient → homogeneous + particular / Duhamel
                                  ├─ base motion → TR, TR_rel
                                  ├─ periodic → Fourier + superposition
                                  └─ impulse / step → impulse response, Duhamel, step
```

### Highest-priority forks (do not drop these)

1. **Equivalent system first** — stop and reduce m, k, c before response formulas.
2. **SDOF vs 2-DOF** — matrix/modal route vs scalar SDOF.
3. **Free vs forced** — totally different solution families.
4. **Force on mass vs base motion** — **most common student error** (M vs TR).
5. **Transient vs steady-state** — for harmonic forcing.
6. **Damping level** — for free vibration only.

### Leaf result shape

Each leaf should include:

- `title` — student-friendly outcome name
- `description` — one or two sentences of context
- `topicId` — for “browse full topic”
- `formulaIds` — ordered list of suggested cards (most important first)
- `warnings?` — optional trap callouts

---

## 5. History and lessons learned

### Version 1 (removed): linear wizard with topic tags

- Fixed 5 questions for every user.
- Each option stored a single `topicId`.
- **Last answer overwrote all previous answers.**

**Lesson:** A linear wizard that only outputs a topic and ignores earlier answers is worse than no wizard — it creates false confidence.

### Version 2 (current): branching decision tree

- Questions only appear when relevant.
- Path is stored as breadcrumbs.
- Leaves return **formula IDs + warnings**.
- Data lives in `formulaSelectionTree.ts` for TA/instructor editing.

**Lesson:** The selector must be **compositional** (all answers matter) and **specific** (formulas, not just chapters).

---

## 6. Extending formulas without breaking the selector

When adding a new formula to `formulas.ts`:

1. Assign correct `topic` and `subtopic`.
2. Link it from related entries via `relatedFormulaIds`.
3. Ask: **should the selector ever recommend this formula?**
   - If yes → add its `id` to the appropriate `SelectionResult.formulaIds` in `formulaSelectionTree.ts`.
   - If it enables a new branch → add a node or option.

When adding a new **problem class**:

1. Confirm which canonical fork it belongs to (see section 4).
2. Prefer extending an existing leaf before creating a parallel tree.
3. Add a warning if the new formula is easily confused with an existing one.

### Redesign checklist

Before shipping a selector redesign, verify:

- [ ] Earlier answers still influence the result.
- [ ] Force-on-mass and base-motion remain distinct paths.
- [ ] Free-response damping branches are only shown for free vibration.
- [ ] Leaves reference real `formulaIds` in `formulas.ts`.
- [ ] Empty topics are not suggested without content.
- [ ] Warnings cover the top known traps for that leaf.
- [ ] Instructor can edit tree data without touching React components.

---

## 7. Known content gaps (as of initial release)

The navigation suggests broader coverage than the dataset provides. Notable gaps:

- General forcing: first/second harmonic response, superposition cards
- Equivalent systems: equivalent mass, damper
- Multi-DOF / continuous topic: no formulas yet
- Coulomb: equivalent viscous only, not full Coulomb response
- Resonance as a dedicated concept card

When filling these gaps, update **both** `formulas.ts` and the selector leaves that should point to them.

---

## 8. UI / UX intent

- **Brand bar** — York / Lassonde / department identity; not part of app navigation.
- **Sticky tool header** — search + topic access; on mobile, search must not fight the topic drawer.
- **Topic grid** — browse by chapter concept.
- **Subtopic accordions** — progressive disclosure of formula cards.
- **Formula modal** — fixed-height centered panel; full detail tabs.
- **Selector** — optional, gated by `NEXT_PUBLIC_SHOW_FORMULA_CHOOSER`; default visible pending instructor review.

---

## 9. Deployment

GitHub Pages static export with `basePath: /vibrations-formula-sheet`.

```bash
npm install
npm run dev
npm run build:gh-pages
```

See `README.md` for hosting setup.

---

## 10. Contacts and governance

Before enabling hidden content in production:

- `NEXT_PUBLIC_SHOW_COMMON_MISTAKES` — discuss with course director
- `NEXT_PUBLIC_SHOW_SOURCE_METADATA` — keep off in production
- `NEXT_PUBLIC_SHOW_FORMULA_CHOOSER` — confirm decision-tree wording and formula sets with instructor

The selector’s pedagogical intent is documented here so future edits remain aligned with the original design conversation even if the implementation is rebuilt.
