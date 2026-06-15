"use client";

import { motion } from "framer-motion";
import { Compass, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ChoiceStep = {
  question: string;
  options: { label: string; hint: string; tags: string[] }[];
};

const STEPS: ChoiceStep[] = [
  {
    question: "Is the system free or forced?",
    options: [
      { label: "Free vibration", hint: "No external forcing after t=0", tags: ["Free vibration"] },
      { label: "Forced vibration", hint: "External excitation present", tags: ["Forced vibration"] },
    ],
  },
  {
    question: "Is damping present?",
    options: [
      { label: "No / negligible damping", hint: "Use undamped forms", tags: ["SDOF"] },
      { label: "Viscous damping", hint: "Use ζ, ω_d, damped response", tags: ["Damping"] },
      { label: "Coulomb / dry friction", hint: "Consider equivalent viscous damping", tags: ["Damping"] },
    ],
  },
  {
    question: "What type of excitation?",
    options: [
      { label: "Harmonic (sin/cos)", hint: "Steady-state amplitude & phase", tags: ["Forced vibration"] },
      { label: "Periodic (non-sinusoidal)", hint: "Fourier series + superposition", tags: ["Fourier"] },
      { label: "Impulsive / arbitrary", hint: "Impulse response & Duhamel integral", tags: ["Impulse"] },
      { label: "Base motion", hint: "Transmissibility formulas", tags: ["Base excitation"] },
      { label: "None (free vibration)", hint: "Free response by damping level", tags: ["Free vibration"] },
    ],
  },
  {
    question: "Transient or steady-state?",
    options: [
      { label: "Transient (IC response)", hint: "Free vibration solution forms", tags: ["Free vibration"] },
      { label: "Steady-state", hint: "Harmonic amplitude, M, φ, TR", tags: ["Forced vibration"] },
      { label: "Both / general forcing", hint: "Duhamel or modal superposition", tags: ["Impulse"] },
    ],
  },
  {
    question: "SDOF or multi-DOF?",
    options: [
      { label: "Single DOF", hint: "Scalar EOM and standard formulas", tags: ["SDOF"] },
      { label: "Two DOF", hint: "Matrix EOM, det(K−ω²M)=0", tags: ["Two DOF"] },
      { label: "Need equivalent system first", hint: "Combine m, k, c equivalents", tags: ["Equivalent systems"] },
    ],
  },
];

type FormulaChooserProps = {
  onFilterSuggestion: (tags: string[]) => void;
  className?: string;
};

export function FormulaChooser({ onFilterSuggestion, className }: FormulaChooserProps) {
  const [step, setStep] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(true);

  const currentStep = STEPS[step];

  function handleOption(option: (typeof STEPS)[0]["options"][0]) {
    const newTags = [...new Set([...selectedTags, ...option.tags])];
    setSelectedTags(newTags);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      onFilterSuggestion(newTags.filter((t) => t !== "SDOF" || newTags.length === 1));
    }
  }

  function reset() {
    setStep(0);
    setSelectedTags([]);
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-gradient-to-br from-navy to-slate-800 p-5 text-white shadow-sm sm:p-6",
        className,
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-york-red/20 p-2">
            <Compass className="h-5 w-5 text-york-red-light" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">How to choose a formula</h2>
            <p className="mt-0.5 text-sm text-slate-300">
              Answer a few questions to narrow down relevant formulas
            </p>
          </div>
        </div>
        <ChevronRight
          className={cn("h-5 w-5 text-slate-400 transition", expanded && "rotate-90")}
        />
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-5"
        >
          <div className="mb-4 flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 flex-1 rounded-full",
                  i <= step ? "bg-york-red" : "bg-white/15",
                )}
              />
            ))}
          </div>

          <p className="text-sm font-medium text-white/90">{currentStep.question}</p>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {currentStep.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOption(option)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-york-red/40 hover:bg-white/10"
              >
                <p className="text-sm font-medium">{option.label}</p>
                <p className="mt-1 text-xs text-slate-300">{option.hint}</p>
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={reset}
              className="text-xs text-slate-400 transition hover:text-white"
            >
              Start over
            </button>
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {selectedTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-york-red/25 px-2 py-0.5 text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
