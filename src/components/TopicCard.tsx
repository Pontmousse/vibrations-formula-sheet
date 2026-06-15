"use client";

import { motion } from "framer-motion";
import { ChevronRight, Layers } from "lucide-react";
import type { GroupedTopic } from "@/lib/grouping";
import { cn } from "@/lib/utils";

type TopicCardProps = {
  topic: GroupedTopic;
  selected: boolean;
  onClick: () => void;
  index?: number;
};

export function TopicCard({ topic, selected, onClick, index = 0 }: TopicCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className={cn(
        "group w-full rounded-2xl border p-5 text-left shadow-sm transition",
        selected
          ? "border-york-red bg-york-red text-white shadow-md"
          : "border-slate-200 bg-white hover:border-york-red/30 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {topic.chapterRange && (
            <p
              className={cn(
                "text-xs font-medium uppercase tracking-wide",
                selected ? "text-white/70" : "text-york-red",
              )}
            >
              {topic.chapterRange}
            </p>
          )}
          <h3
            className={cn(
              "mt-1 text-lg font-semibold leading-snug",
              selected ? "text-white" : "text-navy group-hover:text-york-red",
            )}
          >
            {topic.title}
          </h3>
        </div>
        <ChevronRight
          className={cn(
            "h-5 w-5 shrink-0 transition",
            selected ? "text-white" : "text-slate-300 group-hover:text-york-red",
          )}
        />
      </div>

      <p
        className={cn(
          "mt-2 line-clamp-2 text-sm leading-relaxed",
          selected ? "text-white/80" : "text-slate-600",
        )}
      >
        {topic.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {topic.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-medium",
                selected ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            selected ? "text-white/80" : "text-slate-500",
          )}
        >
          <Layers className="h-3.5 w-3.5" />
          {topic.formulaCount} formulas
        </span>
      </div>
    </motion.button>
  );
}
