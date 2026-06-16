"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Compass,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";
import { formulas } from "@/data/formulas";
import { getTopicTitle } from "@/data/formulas";
import { courseTopics } from "@/data/courseTopics";
import type { FormulaEntry } from "@/data/formulas";
import type { SelectionResult } from "@/data/formulaSelectionTree";
import {
  getOptionNextNodeId,
  getOptionResult,
  getRootNode,
  getSelectionNode,
  resolveFormulas,
} from "@/lib/formulaSelection";
import { cn } from "@/lib/utils";
import { Math } from "./Math";

type PathEntry = {
  nodeId: string;
  question: string;
  answer: string;
};

type FormulaChooserProps = {
  onBrowseTopic: (topicId: string) => void;
  onSelectFormula: (formula: FormulaEntry) => void;
  className?: string;
};

export function FormulaChooser({
  onBrowseTopic,
  onSelectFormula,
  className,
}: FormulaChooserProps) {
  const [currentNodeId, setCurrentNodeId] = useState("root");
  const [path, setPath] = useState<PathEntry[]>([]);
  const [result, setResult] = useState<SelectionResult | null>(null);
  const [expanded, setExpanded] = useState(true);

  const currentNode = getSelectionNode(currentNodeId) ?? getRootNode();

  const recommendedFormulas = useMemo(
    () => (result ? resolveFormulas(result, formulas) : []),
    [result],
  );

  function handleOption(
    option: (typeof currentNode.options)[number],
  ) {
    const leaf = getOptionResult(option);
    const nextId = getOptionNextNodeId(option);

    setPath((prev) => [
      ...prev,
      { nodeId: currentNodeId, question: currentNode.question, answer: option.label },
    ]);

    if (leaf) {
      setResult(leaf);
      return;
    }

    if (nextId && getSelectionNode(nextId)) {
      setCurrentNodeId(nextId);
    }
  }

  function goBack() {
    if (result) {
      setResult(null);
      if (path.length > 0) {
        const previous = path[path.length - 1];
        setPath((prev) => prev.slice(0, -1));
        setCurrentNodeId(previous.nodeId);
      }
      return;
    }

    if (path.length === 0) return;

    const previous = path[path.length - 1];
    setPath((prev) => prev.slice(0, -1));
    setCurrentNodeId(previous.nodeId);
  }

  function reset() {
    setCurrentNodeId("root");
    setPath([]);
    setResult(null);
  }

  const depth = result ? path.length : path.length + 1;
  const maxDepth = 5;

  return (
    <section
      className={cn(
        "rounded-2xl border border-york-red/20 bg-gradient-to-br from-navy via-[#142d54] to-navy text-white shadow-md",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left sm:p-6"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-york-red p-2.5 shadow-sm shadow-york-red/30">
            <Compass className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">How to choose a formula</h2>
            <p className="mt-0.5 text-sm text-slate-300">
              Step-by-step decision guide to recommended formulas
            </p>
          </div>
        </div>
        <ChevronRight
          className={cn("h-5 w-5 shrink-0 text-slate-400 transition", expanded && "rotate-90")}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6">
              {/* Progress */}
              <div className="mb-4 flex items-center gap-2">
                {Array.from({ length: maxDepth }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors",
                      i < depth ? "bg-york-red" : "bg-white/10",
                    )}
                  />
                ))}
              </div>

              {/* Path breadcrumb */}
              {path.length > 0 && (
                <div className="mb-4 -mx-1 overflow-x-auto px-1">
                  <div className="flex w-max max-w-full gap-1.5">
                    {path.map((entry, i) => (
                      <span
                        key={`${entry.nodeId}-${i}`}
                        className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-slate-300"
                      >
                        {entry.answer}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div
                    key={currentNodeId}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-base font-medium text-white">{currentNode.question}</p>
                    {currentNode.subtitle && (
                      <p className="mt-1 text-sm text-slate-400">{currentNode.subtitle}</p>
                    )}

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {currentNode.options.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleOption(option)}
                          className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-left transition hover:border-york-red/60 hover:bg-york-red/15"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-white group-hover:text-white">
                              {option.label}
                            </p>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-york-red-light" />
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {option.hint}
                          </p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="rounded-xl border border-york-red/30 bg-york-red/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-york-red-light">
                        Recommended starting point
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">{result.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {result.description}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        Topic: {getTopicTitle(result.topicId, courseTopics)}
                      </p>
                    </div>

                    {result.warnings && result.warnings.length > 0 && (
                      <div className="space-y-2">
                        {result.warnings.map((warning) => (
                          <div
                            key={warning}
                            className="flex gap-2 rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2.5 text-xs leading-relaxed text-amber-100"
                          >
                            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
                            {warning}
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Suggested formulas ({recommendedFormulas.length})
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {recommendedFormulas.map((formula) => (
                          <button
                            key={formula.id}
                            type="button"
                            onClick={() => onSelectFormula(formula)}
                            className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-york-red/40 hover:bg-white/10"
                          >
                            <p className="text-sm font-medium text-white group-hover:text-york-red-light">
                              {formula.title}
                            </p>
                            <div className="mt-2 overflow-hidden rounded-lg bg-white/90 px-2 py-1.5">
                              <Math latex={formula.latex} display={false} className="text-xs" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onBrowseTopic(result.topicId)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-york-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-york-red-dark"
                    >
                      <BookOpen className="h-4 w-4" />
                      Browse full topic
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex gap-3">
                  {(path.length > 0 || result) && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-slate-400 transition hover:text-white"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-slate-400 transition hover:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Start over
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
