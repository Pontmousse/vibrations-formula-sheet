"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FormulaEntry } from "@/data/formulas";
import { cn } from "@/lib/utils";
import { FormulaCard } from "./FormulaCard";

type SubtopicGroup = {
  subtopic: string;
  formulas: FormulaEntry[];
};

type SubtopicAccordionProps = {
  groups: SubtopicGroup[];
  onSelectFormula: (formula: FormulaEntry) => void;
  defaultOpen?: string | null;
};

export function SubtopicAccordion({
  groups,
  onSelectFormula,
  defaultOpen = null,
}: SubtopicAccordionProps) {
  const [openSubtopic, setOpenSubtopic] = useState<string | null>(
    defaultOpen ?? groups[0]?.subtopic ?? null,
  );

  return (
    <div className="space-y-3">
      {groups.map((group) => {
        const isOpen = openSubtopic === group.subtopic;
        return (
          <div
            key={group.subtopic}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenSubtopic(isOpen ? null : group.subtopic)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
            >
              <div>
                <h3 className="text-base font-semibold text-navy">{group.subtopic}</h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  {group.formulas.length} formula{group.formulas.length !== 1 ? "s" : ""}
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-slate-400 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 border-t border-slate-100 p-4 sm:grid-cols-2">
                    {group.formulas.map((formula, index) => (
                      <FormulaCard
                        key={formula.id}
                        formula={formula}
                        index={index}
                        onClick={() => onSelectFormula(formula)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
