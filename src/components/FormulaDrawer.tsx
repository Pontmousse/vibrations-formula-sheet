"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, BookOpen, AlertCircle, Lightbulb, Link2, Calculator } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { FormulaEntry } from "@/data/formulas";
import { getFormulaById } from "@/data/formulas";
import { showSourceMetadata, showCommonMistakes } from "@/lib/features";
import { cn } from "@/lib/utils";
import { Math } from "./Math";

type FormulaDrawerProps = {
  formula: FormulaEntry | null;
  onClose: () => void;
  onSelectRelated: (formula: FormulaEntry) => void;
};

const TABS = [
  { id: "meaning", label: "Meaning", icon: BookOpen },
  { id: "variables", label: "Variables", icon: Calculator },
  { id: "assumptions", label: "Assumptions", icon: AlertCircle },
  { id: "useCases", label: "Use Cases", icon: Lightbulb },
  { id: "mistakes", label: "Mistakes", icon: AlertCircle },
  { id: "related", label: "Related", icon: Link2 },
  { id: "example", label: "Example", icon: Calculator },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function FormulaDrawer({ formula, onClose, onSelectRelated }: FormulaDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabId>("meaning");

  const visibleTabs = useMemo(
    () => TABS.filter((tab) => tab.id !== "mistakes" || showCommonMistakes),
    [],
  );

  useEffect(() => {
    if (!showCommonMistakes && activeTab === "mistakes") {
      setActiveTab("meaning");
    }
  }, [activeTab]);

  useEffect(() => {
    if (formula) setActiveTab("meaning");
  }, [formula?.id]);

  const relatedFormulas =
    formula?.relatedFormulaIds
      ?.map((id) => getFormulaById(id))
      .filter((f): f is FormulaEntry => Boolean(f)) ?? [];

  return (
    <AnimatePresence>
      {formula && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 cursor-pointer bg-navy/40 backdrop-blur-sm"
          />

          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="formula-panel-title"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-navy/20 lg:max-w-3xl"
            >
            <div className="border-b border-slate-100 bg-gradient-to-r from-white via-white to-york-red/[0.04] px-5 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-york-red">
                    {formula.subtopic}
                  </p>
                  <h2 id="formula-panel-title" className="mt-1 text-xl font-bold text-navy sm:text-2xl">
                    {formula.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <Math latex={formula.latex} />
              </div>
            </div>

            <div className="border-b border-slate-100 bg-white px-3 sm:px-4">
              <div className="flex gap-1 overflow-x-auto py-2">
                {visibleTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition",
                        activeTab === tab.id
                          ? "bg-york-red text-white shadow-sm shadow-york-red/25"
                          : "text-slate-600 hover:bg-york-red/5 hover:text-york-red",
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {activeTab === "meaning" && (
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-slate-700">{formula.explanation}</p>
                  {showSourceMetadata && formula.source && (
                    <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-slate-600">
                      <p className="font-medium text-navy">Source metadata (dev only)</p>
                      <ul className="mt-2 space-y-1">
                        {formula.source.map((s, i) => (
                          <li key={i}>
                            {s.sheet}
                            {s.page ? `, page ${s.page}` : ""}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "variables" && (
                <div className="overflow-hidden rounded-xl border border-slate-100">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                        <th className="px-4 py-2.5">Symbol</th>
                        <th className="px-4 py-2.5">Meaning</th>
                        <th className="px-4 py-2.5">Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formula.variables.map((v, i) => (
                        <tr key={i} className="border-t border-slate-100">
                          <td className="px-4 py-3 font-mono text-york-red">
                            <Math latex={v.symbol} display={false} />
                          </td>
                          <td className="px-4 py-3 text-slate-700">{v.meaning}</td>
                          <td className="px-4 py-3 text-slate-500">{v.unit ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "assumptions" && (
                <ul className="space-y-2">
                  {formula.assumptions.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-york-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "useCases" && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-navy">When to use it</h4>
                    <ul className="mt-2 space-y-2">
                      {formula.useCases.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  {(formula.notFor?.length ?? 0) > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-navy">When NOT to use it</h4>
                      <ul className="mt-2 space-y-2">
                        {formula.notFor!.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(formula.problemTypes?.length ?? 0) > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-navy">Related problem types</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {formula.problemTypes!.map((pt) => (
                          <span key={pt} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "mistakes" && (
                <div>
                  {(formula.commonMistakes?.length ?? 0) > 0 ? (
                    <ul className="space-y-3">
                      {formula.commonMistakes!.map((item, i) => (
                        <li
                          key={i}
                          className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-500">No common mistakes documented yet.</p>
                  )}
                </div>
              )}

              {activeTab === "related" && (
                <div className="space-y-3">
                  {relatedFormulas.length > 0 ? (
                    relatedFormulas.map((related) => (
                      <button
                        key={related.id}
                        type="button"
                        onClick={() => onSelectRelated(related)}
                        className="w-full cursor-pointer rounded-xl border border-slate-200 p-4 text-left transition hover:border-york-red/30 hover:bg-york-red/5"
                      >
                        <p className="font-medium text-navy">{related.title}</p>
                        <div className="mt-2 text-sm">
                          <Math latex={related.latex} display={false} />
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500">No related formulas linked.</p>
                  )}
                </div>
              )}

              {activeTab === "example" && (
                <div>
                  {formula.example ? (
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-navy">{formula.example.prompt}</p>
                      <ol className="space-y-2">
                        {formula.example.steps.map((step, i) => (
                          <li key={i} className="rounded-lg bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                            <span className="mr-2 font-semibold text-york-red">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      {formula.example.note && (
                        <p className="text-sm text-slate-500">{formula.example.note}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">No worked example yet for this formula.</p>
                  )}
                </div>
              )}
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
