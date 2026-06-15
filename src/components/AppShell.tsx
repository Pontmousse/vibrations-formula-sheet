"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sigma } from "lucide-react";
import { courseTopics } from "@/data/courseTopics";
import { formulas } from "@/data/formulas";
import type { FormulaEntry } from "@/data/formulas";
import { groupFormulasByTopic } from "@/lib/grouping";
import { filterFormulas, type FilterTag } from "@/lib/search";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "./Breadcrumbs";
import { FilterChips } from "./FilterChips";
import { FormulaChooser } from "./FormulaChooser";
import { FormulaDrawer } from "./FormulaDrawer";
import { FormulaCard } from "./FormulaCard";
import { Hero } from "./Hero";
import { SearchCommand } from "./SearchCommand";
import { SubtopicAccordion } from "./SubtopicAccordion";
import { TopicGrid } from "./TopicGrid";

const FILTER_TAG_SET = new Set<string>([
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
]);

export function AppShell() {
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedFormula, setSelectedFormula] = useState<FormulaEntry | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  const filteredFormulas = useMemo(
    () => filterFormulas(formulas, activeFilters),
    [activeFilters],
  );

  const groupedTopics = useMemo(
    () => groupFormulasByTopic(courseTopics, filteredFormulas),
    [filteredFormulas],
  );

  const selectedTopic = groupedTopics.find((t) => t.id === selectedTopicId) ?? null;

  function toggleFilter(tag: FilterTag) {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    setSelectedTopicId(null);
    setSearchMode(false);
  }

  function handleFilterSuggestion(tags: string[]) {
    const validTags = tags.filter((t): t is FilterTag => FILTER_TAG_SET.has(t));
    if (validTags.length > 0) {
      setActiveFilters(validTags);
      setSelectedTopicId(null);
      setSearchMode(true);
    }
  }

  function handleSelectFormula(formula: FormulaEntry) {
    setSelectedFormula(formula);
    setSidebarOpen(false);
  }

  function handleSelectTopic(topicId: string) {
    setSelectedTopicId((prev) => (prev === topicId ? null : topicId));
    setSearchMode(false);
    setSidebarOpen(false);
  }

  const breadcrumbItems = [
    {
      label: "All Topics",
      onClick: () => {
        setSelectedTopicId(null);
        setSearchMode(false);
      },
    },
    ...(selectedTopic
      ? [{ label: selectedTopic.title }]
      : searchMode
        ? [{ label: `Filtered (${filteredFormulas.length})` }]
        : []),
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-york-red text-white">
              <Sigma className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-navy leading-none">MECH 4502</p>
              <p className="text-[11px] text-slate-500">Vibrations Formula Navigator</p>
            </div>
          </div>

          <SearchCommand
            formulas={filteredFormulas}
            topics={courseTopics}
            onSelect={handleSelectFormula}
            className="flex-1"
          />

          <div className="hidden shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 sm:block">
            {filteredFormulas.length} formulas
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-2 sm:px-6">
          <FilterChips activeFilters={activeFilters} onToggle={toggleFilter} />
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-6 px-4 py-6 sm:px-6">
        {/* Sidebar navigation */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-20 w-72 transform border-r border-slate-200 bg-white pt-[120px] transition-transform lg:static lg:translate-x-0 lg:pt-0 lg:shrink-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="h-full overflow-y-auto px-4 pb-6 lg:px-0 lg:pb-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Course Topics
            </p>
            <nav className="space-y-1">
              {groupedTopics
                .filter((t) => t.formulaCount > 0)
                .map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic.id)}
                    className={cn(
                      "w-full rounded-xl px-3 py-2.5 text-left text-sm transition",
                      selectedTopicId === topic.id
                        ? "bg-york-red/10 font-medium text-york-red"
                        : "text-slate-600 hover:bg-slate-50 hover:text-navy",
                    )}
                  >
                    <span className="block font-medium">{topic.title}</span>
                    <span className="mt-0.5 block text-xs text-slate-400">
                      {topic.formulaCount} formulas · {topic.chapterRange}
                    </span>
                  </button>
                ))}
            </nav>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-navy/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="min-w-0 flex-1 space-y-6">
          <Hero />

          <FormulaChooser onFilterSuggestion={handleFilterSuggestion} />

          <Breadcrumbs items={breadcrumbItems} />

          <AnimatePresence mode="wait">
            {selectedTopic ? (
              <motion.div
                key={`topic-${selectedTopic.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-2xl font-bold text-navy">{selectedTopic.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{selectedTopic.description}</p>
                </div>
                <SubtopicAccordion
                  groups={selectedTopic.subtopicGroups}
                  onSelectFormula={handleSelectFormula}
                />
              </motion.div>
            ) : searchMode || activeFilters.length > 0 ? (
              <motion.div
                key="filtered"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="mb-4 text-xl font-bold text-navy">
                  Matching formulas ({filteredFormulas.length})
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredFormulas.map((formula, index) => (
                    <FormulaCard
                      key={formula.id}
                      formula={formula}
                      index={index}
                      onClick={() => handleSelectFormula(formula)}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="mb-4 text-xl font-bold text-navy">Browse by Topic</h2>
                <TopicGrid
                  topics={groupedTopics}
                  selectedTopicId={selectedTopicId}
                  onSelectTopic={handleSelectTopic}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <FormulaDrawer
        formula={selectedFormula}
        onClose={() => setSelectedFormula(null)}
        onSelectRelated={(f) => setSelectedFormula(f)}
      />
    </div>
  );
}
