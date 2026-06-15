"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, BookMarked } from "lucide-react";
import type { FormulaEntry } from "@/data/formulas";
import { showSourceMetadata } from "@/lib/features";
import { cn } from "@/lib/utils";
import { Math } from "./Math";

type FormulaCardProps = {
  formula: FormulaEntry;
  index?: number;
  onClick: () => void;
  compact?: boolean;
};

export function FormulaCard({ formula, index = 0, onClick, compact = false }: FormulaCardProps) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(15,23,42,0.08)" }}
      onClick={onClick}
      className={cn(
        "group w-full cursor-pointer rounded-2xl border border-slate-200/90 bg-white p-5 text-left shadow-sm transition",
        "hover:border-york-red/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-york-red/30",
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-navy group-hover:text-york-red transition-colors">
            {formula.title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {formula.subtopic}
          </p>
        </div>
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-york-red" />
      </div>

      <div className="rounded-xl bg-slate-50/80 px-3 py-3">
        <Math latex={formula.latex} />
      </div>

      {!compact && (
        <>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {formula.explanation}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {formula.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {showSourceMetadata && formula.source && formula.source.length > 0 && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
              <BookMarked className="h-3.5 w-3.5" />
              Source: {formula.source.map((s) => `${s.sheet}${s.page ? `, p. ${s.page}` : ""}`).join(" · ")}
            </div>
          )}

          {(formula.commonMistakes?.length ?? 0) > 0 && (
            <div className="mt-3 flex items-start gap-1.5 rounded-lg bg-amber-50 px-2.5 py-2 text-xs text-amber-800">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span className="line-clamp-1">{formula.commonMistakes![0]}</span>
            </div>
          )}
        </>
      )}
    </motion.button>
  );
}
