import type { FormulaEntry } from "@/data/formulas";
import type { CourseTopic } from "@/data/courseTopics";

export type SearchResult = {
  formula: FormulaEntry;
  topicTitle: string;
  score: number;
};

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function tokenize(query: string): string[] {
  return normalize(query)
    .split(" ")
    .filter((token) => token.length > 0);
}

function scoreFormula(
  formula: FormulaEntry,
  topicTitle: string,
  tokens: string[],
): number {
  if (tokens.length === 0) return 0;

  const haystack = normalize(
    [
      formula.title,
      formula.latex,
      formula.explanation,
      formula.topic,
      formula.subtopic,
      formula.chapter ?? "",
      topicTitle,
      ...formula.variables.map((v) => `${v.symbol} ${v.meaning} ${v.unit ?? ""}`),
      ...formula.assumptions,
      ...formula.useCases,
      ...(formula.notFor ?? []),
      ...(formula.commonMistakes ?? []),
      ...(formula.problemTypes ?? []),
      ...formula.tags,
      ...(formula.source?.map((s) => `${s.sheet} page ${s.page ?? ""}`) ?? []),
    ].join(" "),
  );

  let score = 0;
  for (const token of tokens) {
    if (normalize(formula.title).includes(token)) score += 10;
    if (normalize(formula.latex).includes(token)) score += 6;
    if (normalize(topicTitle).includes(token)) score += 5;
    if (normalize(formula.subtopic).includes(token)) score += 5;
    if (formula.tags.some((tag) => normalize(tag).includes(token))) score += 4;
    if (formula.variables.some((v) => normalize(v.symbol).includes(token))) score += 4;
    if (formula.useCases.some((u) => normalize(u).includes(token))) score += 3;
    if ((formula.problemTypes ?? []).some((p) => normalize(p).includes(token)))
      score += 3;
    if (haystack.includes(token)) score += 1;
  }

  return score;
}

export function searchFormulas(
  formulas: FormulaEntry[],
  topics: CourseTopic[],
  query: string,
): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const topicMap = new Map(topics.map((t) => [t.id, t.title]));

  return formulas
    .map((formula) => ({
      formula,
      topicTitle: topicMap.get(formula.topic) ?? formula.topic,
      score: scoreFormula(formula, topicMap.get(formula.topic) ?? "", tokens),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);
}

export const FILTER_TAGS = [
  "SDOF",
  "Free vibration",
  "Forced vibration",
  "Damping",
  "Base excitation",
  "Fourier",
  "Impulse",
  "Two DOF",
  "Equivalent systems",
  "Common mistakes",
  "Exam-useful",
  "Conceptual",
] as const;

export type FilterTag = (typeof FILTER_TAGS)[number];

export function filterFormulas(
  formulas: FormulaEntry[],
  activeFilters: FilterTag[],
): FormulaEntry[] {
  if (activeFilters.length === 0) return formulas;

  return formulas.filter((formula) =>
    activeFilters.every((filter) => {
      if (filter === "Common mistakes") {
        return (formula.commonMistakes?.length ?? 0) > 0;
      }
      return formula.tags.includes(filter);
    }),
  );
}
