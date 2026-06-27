export type SelectionResult = {
  title: string;
  description: string;
  topicId: string;
  formulaIds: string[];
  warnings?: string[];
};

export type SelectionOption = {
  id: string;
  label: string;
  hint: string;
  nextNodeId?: string;
  result?: SelectionResult;
};

export type SelectionNode = {
  id: string;
  question: string;
  subtitle?: string;
  options: SelectionOption[];
};

export const selectionResults: Record<string, SelectionResult> = {
  "result-equivalent-systems": {
    title: "Build an equivalent system first",
    description:
      "Reduce the physical system to equivalent mass, stiffness, and damping before choosing a response formula.",
    topicId: "equivalent-systems",
    formulaIds: [
      "equivalent-mass-distributed-member-coefficients",
      "rotational-translational-equivalence",
      "lever-equivalent-masses",
      "axial-member-stiffness",
      "sheet-circular-section-axial-stiffness",
      "helical-spring-stiffness",
      "springs-series",
      "springs-parallel",
      "beam-stiffness-fixed-guided",
      "beam-stiffness-cantilever",
      "beam-stiffness-simply-supported",
      "hollow-shaft-torsional-stiffness",
      "viscous-shear-damper",
      "viscous-damper-annular-geometry",
      "viscous-damper-composite-film",
      "parallel-axis-theorem",
      "natural-frequency",
    ],
    warnings: [
      "Finish equivalent m, k (and c if needed) before using free or forced response formulas.",
    ],
  },
  "result-two-dof": {
    title: "Two-DOF system",
    description:
      "Use matrix equations of motion, the frequency determinant, and mode-shape information.",
    topicId: "two-dof-systems",
    formulaIds: [
      "two-dof-matrix-eom",
      "two-dof-frequency-equation",
      "mode-shape-ratio",
    ],
    warnings: [
      "Mode-shape ratios depend on system topology and coordinate choice — verify your layout.",
    ],
  },
  "result-free-undamped": {
    title: "Undamped free vibration",
    description: "Transient response with no damping. Use ω_n in the trigonometric terms.",
    topicId: "free-vibration-sdof",
    formulaIds: ["sdof-free-eom", "undamped-free-response", "natural-frequency"],
    warnings: ["Do not use ω_d or damping-ratio formulas when ζ = 0."],
  },
  "result-free-underdamped": {
    title: "Underdamped free vibration",
    description: "Oscillatory decay for 0 < ζ < 1. Use ω_d in the sine and cosine terms.",
    topicId: "free-vibration-sdof",
    formulaIds: [
      "sdof-free-eom",
      "underdamped-free-response",
      "underdamped-initial-condition-constants",
      "damped-natural-frequency",
      "damping-ratio",
      "log-decrement",
    ],
    warnings: ["ω_d is only real when ζ < 1."],
  },
  "result-free-critical": {
    title: "Critically damped free vibration",
    description: "Fastest non-oscillatory return to equilibrium (ζ = 1).",
    topicId: "free-vibration-sdof",
    formulaIds: ["critically-damped-response", "critical-damping", "damping-ratio"],
  },
  "result-free-overdamped": {
    title: "Overdamped free vibration",
    description: "Sum of two real exponentials when ζ > 1 — no oscillation.",
    topicId: "free-vibration-sdof",
    formulaIds: ["overdamped-response", "overdamped-initial-condition-constants", "damping-ratio"],
    warnings: ["Do not use ω_d or underdamped forms when ζ > 1."],
  },
  "result-harmonic-steady": {
    title: "Harmonic force — steady-state response",
    description:
      "For F(t) = F₀ cos(ωt) on the mass. Use amplitude, magnification, and phase formulas.",
    topicId: "forced-vibration-sdof",
    formulaIds: [
      "damped-forced-amplitude",
      "magnification-factor",
      "phase-angle",
    ],
    warnings: [
      "These are for force on the mass — not base excitation (use transmissibility instead).",
      "At resonance, use damped formulas; undamped amplitude blows up at r = 1.",
    ],
  },
  "result-harmonic-transient": {
    title: "Harmonic force — transient response",
    description:
      "Total response = homogeneous (free vibration) + particular (steady-state). For general F(t), use Duhamel.",
    topicId: "impulse-step-response",
    formulaIds: [
      "sdof-free-eom",
      "underdamped-free-response",
      "underdamped-initial-condition-constants",
      "damped-forced-amplitude",
      "duhamel-integral",
      "impulse-response-underdamped",
    ],
    warnings: [
      "Steady-state harmonic formulas alone do not include initial-condition transients.",
    ],
  },
  "result-base-excitation": {
    title: "Harmonic base excitation",
    description:
      "Base motion input. Use transmissibility for absolute or relative motion — not magnification M.",
    topicId: "base-excitation-isolation",
    formulaIds: ["transmissibility-absolute", "transmissibility-relative"],
    warnings: [
      "Do not use force-excitation magnification M for base-motion problems.",
    ],
  },
  "result-periodic-forcing": {
    title: "Periodic forcing",
    description:
      "Expand the forcing in a Fourier series, then apply harmonic response and superposition.",
    topicId: "general-forcing",
    formulaIds: [
      "fourier-series",
      "fourier-coefficients",
      "discrete-fourier-coefficients",
      "magnification-factor",
    ],
    warnings: [
      "First- and second-order harmonic response is handled via superposition of steady-state SDOF solutions.",
    ],
  },
  "result-impulse-step": {
    title: "Impulse or step forcing",
    description:
      "Use impulse response and convolution, or the step-response form for a sudden constant load.",
    topicId: "impulse-step-response",
    formulaIds: [
      "impulse-response-undamped",
      "impulse-response-underdamped",
      "duhamel-integral",
      "step-response",
    ],
    warnings: [
      "Pick the impulse response that matches the damping level of the system.",
    ],
  },
};

export const selectionNodes: Record<string, SelectionNode> = {
  root: {
    id: "root",
    question: "Do you need to find equivalent k, m, or c first?",
    subtitle: "Start here if the problem gives a physical system rather than an ideal mass–spring–damper.",
    options: [
      {
        id: "root-yes-equiv",
        label: "Yes — reduce the system first",
        hint: "Springs in series/parallel, beam stiffness, inertia",
        result: selectionResults["result-equivalent-systems"],
      },
      {
        id: "root-no-equiv",
        label: "No — m, k, c are already known",
        hint: "Proceed to SDOF or 2-DOF",
        nextNodeId: "dof",
      },
    ],
  },
  dof: {
    id: "dof",
    question: "Is the system SDOF or two-DOF?",
    options: [
      {
        id: "dof-two",
        label: "Two DOF",
        hint: "Coupled coordinates, mode shapes",
        result: selectionResults["result-two-dof"],
      },
      {
        id: "dof-sdof",
        label: "Single DOF",
        hint: "One coordinate describes the motion",
        nextNodeId: "free-forced",
      },
    ],
  },
  "free-forced": {
    id: "free-forced",
    question: "Is the motion free or forced?",
    options: [
      {
        id: "ff-free",
        label: "Free vibration",
        hint: "No external forcing after t = 0",
        nextNodeId: "damping-level",
      },
      {
        id: "ff-forced",
        label: "Forced vibration",
        hint: "External excitation continues",
        nextNodeId: "excitation-type",
      },
    ],
  },
  "damping-level": {
    id: "damping-level",
    question: "What is the damping level?",
    subtitle: "Classify ζ to pick the correct free-response form.",
    options: [
      {
        id: "damp-undamped",
        label: "Undamped (ζ = 0)",
        hint: "Pure sinusoidal motion",
        result: selectionResults["result-free-undamped"],
      },
      {
        id: "damp-under",
        label: "Underdamped (0 < ζ < 1)",
        hint: "Decaying oscillation",
        result: selectionResults["result-free-underdamped"],
      },
      {
        id: "damp-critical",
        label: "Critically damped (ζ = 1)",
        hint: "Fastest return without oscillation",
        result: selectionResults["result-free-critical"],
      },
      {
        id: "damp-over",
        label: "Overdamped (ζ > 1)",
        hint: "Two exponential decays",
        result: selectionResults["result-free-overdamped"],
      },
    ],
  },
  "excitation-type": {
    id: "excitation-type",
    question: "What type of excitation?",
    subtitle: "Force on the mass and base motion use different formula families.",
    options: [
      {
        id: "exc-harmonic-force",
        label: "Harmonic force on the mass",
        hint: "F₀ cos(ωt) applied to m",
        nextNodeId: "transient-steady",
      },
      {
        id: "exc-base",
        label: "Base / support motion",
        hint: "Moving foundation, isolation",
        result: selectionResults["result-base-excitation"],
      },
      {
        id: "exc-periodic",
        label: "Periodic (non-sinusoidal)",
        hint: "Fourier series + superposition",
        result: selectionResults["result-periodic-forcing"],
      },
      {
        id: "exc-impulse",
        label: "Impulse or step load",
        hint: "Sudden or short-duration forcing",
        result: selectionResults["result-impulse-step"],
      },
    ],
  },
  "transient-steady": {
    id: "transient-steady",
    question: "Do you need transient or steady-state response?",
    options: [
      {
        id: "ts-steady",
        label: "Steady-state only",
        hint: "Amplitude, magnification M, phase φ",
        result: selectionResults["result-harmonic-steady"],
      },
      {
        id: "ts-transient",
        label: "Transient (or full response)",
        hint: "Initial conditions + particular solution",
        result: selectionResults["result-harmonic-transient"],
      },
    ],
  },
};

export const SELECTION_ROOT_NODE_ID = "root";
