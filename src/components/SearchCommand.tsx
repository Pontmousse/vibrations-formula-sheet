"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import type { FormulaEntry } from "@/data/formulas";
import type { CourseTopic } from "@/data/courseTopics";
import { searchFormulas } from "@/lib/search";
import { cn } from "@/lib/utils";
import { Math } from "./Math";

type SearchCommandProps = {
  formulas: FormulaEntry[];
  topics: CourseTopic[];
  onSelect: (formula: FormulaEntry) => void;
  className?: string;
};

export function SearchCommand({
  formulas,
  topics,
  onSelect,
  className,
}: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(
    () => searchFormulas(formulas, topics, query).slice(0, 8),
    [formulas, topics, query],
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-xl", className)}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search formulas, variables, topics… (e.g. zeta, Duhamel, transmissibility)"
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-800 shadow-sm outline-none transition focus:border-york-red/40 focus:ring-2 focus:ring-york-red/15"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && query.trim().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
          >
            {results.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-slate-500">
                No formulas found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              <ul className="max-h-80 overflow-y-auto py-2">
                {results.map(({ formula, topicTitle }) => (
                  <li key={formula.id}>
                    <button
                      onClick={() => {
                        onSelect(formula);
                        setOpen(false);
                        setQuery("");
                      }}
                      className="flex w-full flex-col gap-1 px-4 py-3 text-left transition hover:bg-slate-50"
                    >
                      <span className="text-sm font-semibold text-navy">{formula.title}</span>
                      <span className="text-xs text-slate-500">
                        {topicTitle} · {formula.subtopic}
                      </span>
                      <Math latex={formula.latex} display={false} className="text-xs" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
