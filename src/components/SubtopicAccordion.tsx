"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sigma } from "lucide-react";
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
    <div className="space-y-4">
      {groups.map((group, groupIndex) => {
        const isOpen = openSubtopic === group.subtopic;
        return (
          <motion.div
            key={group.subtopic}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: groupIndex * 0.04 }}
            className={cn(
              "overflow-hidden rounded-2xl border shadow-sm transition-all duration-300",
              isOpen
                ? "border-york-red/25 bg-gradient-to-br from-york-red/[0.06] via-white to-slate-50 shadow-md shadow-york-red/10"
                : "border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-slate-50/80 hover:border-york-red/20 hover:shadow-md hover:shadow-york-red/5",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenSubtopic(isOpen ? null : group.subtopic)}
              className={cn(
                "group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200",
                isOpen ? "bg-york-red/[0.04]" : "hover:bg-york-red/[0.03]",
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200",
                    isOpen
                      ? "bg-york-red text-white shadow-sm shadow-york-red/30"
                      : "bg-slate-100 text-slate-500 group-hover:bg-york-red/10 group-hover:text-york-red",
                  )}
                >
                  <Sigma className="h-4 w-4" />
                </div>
                <div>
                  <h3
                    className={cn(
                      "text-base font-semibold transition-colors",
                      isOpen ? "text-york-red" : "text-navy group-hover:text-york-red",
                    )}
                  >
                    {group.subtopic}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {group.formulas.length} formula{group.formulas.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                  isOpen
                    ? "border-york-red/20 bg-york-red/10 text-york-red"
                    : "border-slate-200 bg-white text-slate-400 group-hover:border-york-red/20 group-hover:text-york-red",
                )}
              >
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 border-t border-york-red/10 bg-gradient-to-b from-slate-50/80 to-white p-4 sm:grid-cols-2 sm:p-5">
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
          </motion.div>
        );
      })}
    </div>
  );
}
