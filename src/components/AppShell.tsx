"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { courseTopics } from "@/data/courseTopics";
import { formulas } from "@/data/formulas";
import type { FormulaEntry } from "@/data/formulas";
import { groupFormulasByTopic } from "@/lib/grouping";
import { showFormulaChooser } from "@/lib/features";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "./Breadcrumbs";
import { FormulaChooser } from "./FormulaChooser";
import { FormulaDrawer } from "./FormulaDrawer";
import { Hero } from "./Hero";
import { SearchCommand } from "./SearchCommand";
import { SubtopicAccordion } from "./SubtopicAccordion";
import { TopicGrid } from "./TopicGrid";

export function AppShell() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedFormula, setSelectedFormula] = useState<FormulaEntry | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const groupedTopics = useMemo(
    () => groupFormulasByTopic(courseTopics, formulas),
    [],
  );

  const selectedTopic = groupedTopics.find((t) => t.id === selectedTopicId) ?? null;

  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  function handleSelectFormula(formula: FormulaEntry) {
    setSelectedFormula(formula);
    setSidebarOpen(false);
  }

  function handleSelectTopic(topicId: string) {
    setSelectedTopicId((prev) => (prev === topicId ? null : topicId));
    setSidebarOpen(false);
  }

  function toggleSidebar() {
    setSidebarOpen((open) => !open);
  }

  const breadcrumbItems = [
    {
      label: "All Topics",
      onClick: () => setSelectedTopicId(null),
    },
    ...(selectedTopic ? [{ label: selectedTopic.title }] : []),
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Tool header — stays below brand bar; mobile nav overlays this when open */}
      <header className="sticky top-0 z-30 border-b border-york-red/10 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          {/* Mobile / tablet */}
          <div className="lg:hidden">
            <div className="flex items-center gap-3 py-3">
              <button
                type="button"
                onClick={toggleSidebar}
                className="cursor-pointer rounded-lg p-2 text-slate-600 hover:bg-york-red/5 hover:text-york-red"
                aria-label={sidebarOpen ? "Close topics menu" : "Open topics menu"}
                aria-expanded={sidebarOpen}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold leading-none text-navy">Formula Navigator</p>
                <p className="mt-0.5 truncate text-[11px] text-slate-500">MECH 4502 · {formulas.length} formulas</p>
              </div>
            </div>
            <div className="pb-3">
              <SearchCommand
                formulas={formulas}
                topics={courseTopics}
                onSelect={handleSelectFormula}
                forceClose={sidebarOpen}
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden items-center gap-4 py-3 lg:flex">
            <div className="shrink-0">
              <p className="text-sm font-bold leading-none text-navy">Formula Navigator</p>
              <p className="mt-0.5 text-[11px] text-slate-500">MECH 4502 Vibrations</p>
            </div>
            <SearchCommand
              formulas={formulas}
              topics={courseTopics}
              onSelect={handleSelectFormula}
              forceClose={sidebarOpen}
              className="max-w-xl flex-1"
            />
            <div className="shrink-0 rounded-full border border-york-red/15 bg-york-red/5 px-3 py-1.5 text-xs font-semibold text-york-red">
              {formulas.length} formulas
            </div>
          </div>
        </div>
      </header>

      {/* Mobile + tablet topic drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 cursor-pointer bg-navy/40 backdrop-blur-[2px] lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close topics menu"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[min(100vw-3rem,18rem)] flex-col border-r border-slate-200 bg-white shadow-2xl lg:hidden"
              aria-label="Course topics"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <p className="text-sm font-semibold text-navy">Course Topics</p>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="cursor-pointer rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-york-red"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-3">
                <div className="space-y-1">
                  {groupedTopics
                    .filter((t) => t.formulaCount > 0)
                    .map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleSelectTopic(topic.id)}
                        className={cn(
                          "w-full cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm transition",
                          selectedTopicId === topic.id
                            ? "bg-york-red font-medium text-white shadow-sm"
                            : "text-slate-600 hover:bg-york-red/5 hover:text-york-red",
                        )}
                      >
                        <span className="block font-medium leading-snug">{topic.title}</span>
                        <span
                          className={cn(
                            "mt-0.5 block text-xs",
                            selectedTopicId === topic.id ? "text-white/75" : "text-slate-400",
                          )}
                        >
                          {topic.formulaCount} formulas · {topic.chapterRange}
                        </span>
                      </button>
                    ))}
                </div>
              </nav>

              <div className="border-t border-slate-100 px-4 py-3 text-center text-xs text-slate-500">
                {formulas.length} formulas · MECH 4502
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="mx-auto flex max-w-[1440px] gap-6 px-4 py-5 sm:px-6 sm:py-6">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block xl:w-72">
          <div className="sticky top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-york-red">
              Course Topics
            </p>
            <nav className="max-h-[calc(100vh-7rem)] space-y-1 overflow-y-auto pr-1">
              {groupedTopics
                .filter((t) => t.formulaCount > 0)
                .map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleSelectTopic(topic.id)}
                    className={cn(
                      "w-full cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm transition",
                      selectedTopicId === topic.id
                        ? "bg-york-red font-medium text-white shadow-sm"
                        : "text-slate-600 hover:bg-york-red/5 hover:text-york-red",
                    )}
                  >
                    <span className="block font-medium leading-snug">{topic.title}</span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs",
                        selectedTopicId === topic.id ? "text-white/75" : "text-slate-400",
                      )}
                    >
                      {topic.formulaCount} formulas · {topic.chapterRange}
                    </span>
                  </button>
                ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-5 sm:space-y-6">
          <Hero />

          {showFormulaChooser && (
            <FormulaChooser
              onBrowseTopic={handleSelectTopic}
              onSelectFormula={handleSelectFormula}
            />
          )}

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
                <div className="rounded-2xl border border-york-red/10 bg-white px-4 py-4 shadow-sm sm:px-5">
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">{selectedTopic.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {selectedTopic.description}
                  </p>
                </div>
                <SubtopicAccordion
                  groups={selectedTopic.subtopicGroups}
                  onSelectFormula={handleSelectFormula}
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="mb-4 text-lg font-bold text-navy sm:text-xl">Browse by Topic</h2>
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
