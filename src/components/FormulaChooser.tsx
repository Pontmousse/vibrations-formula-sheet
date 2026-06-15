"use client";

import { motion } from "framer-motion";
import { Compass, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ChoiceStep = {
  question: string;
  options: { label: string; hint: string; topicId?: string }[];
};

const STEPS: ChoiceStep[] = [
  {
    question: "Is the system free or forced?",
    options: [
      {
        label: "Free vibration",
        hint: "No external forcing after t=0",
        topicId: "free-vibration-sdof",
      },
      {
        label: "Forced vibration",
        hint: "External excitation present",
        topicId: "forced-vibration-sdof",
      },
    ],
  },
  {
    question: "Is damping present?",
    options: [
      {
        label: "No / negligible damping",
        hint: "Use undamped forms",
        topicId: "free-vibration-sdof",
      },
      {
        label: "Viscous damping",
        hint: "Use ζ, ω_d, damped response",
        topicId: "vibration-parameters",
      },
      {
        label: "Coulomb / dry friction",
        hint: "Consider equivalent viscous damping",
        topicId: "nonviscous-coulomb-damping",
      },
    ],
  },
  {
    question: "What type of excitation?",
    options: [
      {
        label: "Harmonic (sin/cos)",
        hint: "Steady-state amplitude and phase",
        topicId: "forced-vibration-sdof",
      },
      {
        label: "Periodic (non-sinusoidal)",
        hint: "Fourier series and superposition",
        topicId: "general-forcing",
      },
      {
        label: "Impulsive / arbitrary",
        hint: "Impulse response and Duhamel integral",
        topicId: "impulse-step-response",
      },
      {
        label: "Base motion",
        hint: "Transmissibility formulas",
        topicId: "base-excitation-isolation",
      },
      {
        label: "None (free vibration)",
        hint: "Free response by damping level",
        topicId: "free-vibration-sdof",
      },
    ],
  },
  {
    question: "Transient or steady-state?",
    options: [
      {
        label: "Transient (IC response)",
        hint: "Free vibration solution forms",
        topicId: "free-vibration-sdof",
      },
      {
        label: "Steady-state",
        hint: "Harmonic amplitude, magnification, phase",
        topicId: "forced-vibration-sdof",
      },
      {
        label: "Both / general forcing",
        hint: "Duhamel integral or modal superposition",
        topicId: "impulse-step-response",
      },
    ],
  },
  {
    question: "SDOF or multi-DOF?",
    options: [
      {
        label: "Single DOF",
        hint: "Scalar EOM and standard formulas",
        topicId: "vibration-parameters",
      },
      {
        label: "Two DOF",
        hint: "Matrix EOM and natural frequencies",
        topicId: "two-dof-systems",
      },
      {
        label: "Need equivalent system first",
        hint: "Combine m, k, c equivalents",
        topicId: "equivalent-systems",
      },
    ],
  },
];

type FormulaChooserProps = {
  onBrowseTopic: (topicId: string) => void;
  className?: string;
};

export function FormulaChooser({ onBrowseTopic, className }: FormulaChooserProps) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [suggestedTopicId, setSuggestedTopicId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(true);
  const [finished, setFinished] = useState(false);

  const currentStep = STEPS[step];

  function handleOption(option: (typeof STEPS)[0]["options"][0]) {
    const nextSelections = [...selections, option.label];
    setSelections(nextSelections);
    if (option.topicId) setSuggestedTopicId(option.topicId);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  }

  function reset() {
    setStep(0);
    setSelections([]);
    setSuggestedTopicId(null);
    setFinished(false);
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-york-red/20 bg-gradient-to-br from-navy via-[#142d54] to-navy p-5 text-white shadow-md sm:p-6",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-york-red p-2 shadow-sm">
            <Compass className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">How to choose a formula</h2>
            <p className="mt-0.5 text-sm text-slate-300">
              Answer a few questions to find the right topic area
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

          {!finished ? (
            <>
              <p className="text-sm font-medium text-white/90">{currentStep.question}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {currentStep.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleOption(option)}
                    className="cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-york-red hover:bg-york-red/20"
                  >
                    <p className="text-sm font-medium">{option.label}</p>
                    <p className="mt-1 text-xs text-slate-300">{option.hint}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-york-red/30 bg-york-red/10 p-4">
              <p className="text-sm font-medium text-white">
                Based on your answers, start with the highlighted topic area below.
              </p>
              {suggestedTopicId && (
                <button
                  type="button"
                  onClick={() => onBrowseTopic(suggestedTopicId)}
                  className="mt-3 cursor-pointer rounded-lg bg-york-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-york-red-dark"
                >
                  Open suggested topic
                </button>
              )}
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={reset}
              className="cursor-pointer text-xs text-slate-400 transition hover:text-white"
            >
              Start over
            </button>
            {selections.length > 0 && (
              <p className="text-[11px] text-slate-400">{selections.join(" → ")}</p>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
