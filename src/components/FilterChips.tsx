"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FilterTag } from "@/lib/search";

type FilterChipsProps = {
  activeFilters: FilterTag[];
  onToggle: (tag: FilterTag) => void;
  className?: string;
};

export function FilterChips({ activeFilters, onToggle, className }: FilterChipsProps) {
  const filters: FilterTag[] = [
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
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((tag) => {
        const active = activeFilters.includes(tag);
        return (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onToggle(tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              active
                ? "border-york-red bg-york-red text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-york-red/30 hover:text-york-red",
            )}
          >
            {tag}
          </motion.button>
        );
      })}
    </div>
  );
}
