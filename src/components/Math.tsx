"use client";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { cn } from "@/lib/utils";

type MathProps = {
  latex: string;
  display?: boolean;
  className?: string;
};

export function Math({ latex, display = true, className }: MathProps) {
  const Component = display ? BlockMath : InlineMath;

  return (
    <div
      className={cn(
        "overflow-x-auto text-[1.05rem] leading-relaxed text-slate-900",
        display && "py-1",
        className,
      )}
    >
      <Component math={latex} errorColor="#b91c1c" />
    </div>
  );
}
