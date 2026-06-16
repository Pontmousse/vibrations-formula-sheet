"use client";

import { useMemo, useState } from "react";
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

  function handleSelectFormula(formula: FormulaEntry) {
    setSelectedFormula(formula);
    setSidebarOpen(false);
  }

  function handleSelectTopic(topicId: string) {
    setSelectedTopicId((prev) => (prev === topicId ? null : topicId));
    setSidebarOpen(false);
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
      <header className="sticky top-0 z-30 border-b border-york-red/10 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="cursor-pointer rounded-lg p-2 text-slate-600 hover:bg-york-red/5 hover:text-york-red lg:hidden"
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden lg:block">
            <p className="text-sm font-bold leading-none text-navy">Formula Navigator</p>
            <p className="text-[11px] text-slate-500">MECH 4502 Vibrations</p>
          </div>

          <SearchCommand
            formulas={formulas}
            topics={courseTopics}
            onSelect={handleSelectFormula}
            className="flex-1"
          />

          <div className="hidden shrink-0 rounded-full border border-york-red/15 bg-york-red/5 px-3 py-1.5 text-xs font-semibold text-york-red sm:block">
            {formulas.length} formulas
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-6 px-4 py-6 sm:px-6">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-20 w-72 transform border-r border-slate-200 bg-white pt-24 transition-transform lg:static lg:translate-x-0 lg:pt-0 lg:shrink-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="h-full overflow-y-auto px-4 pb-6 lg:px-0 lg:pb-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-york-red">
              Course Topics
            </p>
            <nav className="space-y-1">
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
                    <span className="block font-medium">{topic.title}</span>
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

        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-10 cursor-pointer bg-navy/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
          />
        )}

        <main className="min-w-0 flex-1 space-y-6">
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
                <div className="rounded-2xl border border-york-red/10 bg-white px-5 py-4 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy">{selectedTopic.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{selectedTopic.description}</p>
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
