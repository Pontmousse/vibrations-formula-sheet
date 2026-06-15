"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  onClick?: () => void;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-1 text-sm", className)}>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-300" />}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="rounded-md px-1.5 py-0.5 text-slate-500 transition hover:bg-slate-100 hover:text-york-red"
            >
              {item.label}
            </button>
          ) : (
            <span className="px-1.5 py-0.5 font-medium text-navy">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
