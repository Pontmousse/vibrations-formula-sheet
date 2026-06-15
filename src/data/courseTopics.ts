export type CourseTopic = {
  id: string;
  title: string;
  chapterRange?: string;
  description: string;
  subtopics: string[];
  tags: string[];
};

export const courseTopics: CourseTopic[] = [
  {
    id: "foundations-modeling",
    title: "Foundations and Modeling",
    chapterRange: "Ch. 1–2",
    description:
      "Degrees of freedom, equations of motion, ODE solution patterns, and fundamental mathematical tools.",
    subtopics: [
      "Degrees of freedom",
      "Equations of motion",
      "ODE solution patterns",
      "Euler's formula",
      "Parallel axis theorem",
    ],
    tags: ["Conceptual", "SDOF"],
  },
  {
    id: "vibration-parameters",
    title: "Vibration Parameters",
    chapterRange: "Ch. 2",
    description:
      "Natural frequency, damping ratio, critical damping, and logarithmic decrement.",
    subtopics: [
      "Natural frequency",
      "Damping ratio",
      "Critical damping",
      "Damped natural frequency",
      "Logarithmic decrement",
    ],
    tags: ["SDOF", "Damping", "Conceptual"],
  },
  {
    id: "free-vibration-sdof",
    title: "Free Vibration of SDOF Systems",
    chapterRange: "Ch. 2–3",
    description:
      "Transient response of single-degree-of-freedom systems with various damping levels.",
    subtopics: [
      "Undamped free vibration",
      "Underdamped motion",
      "Critically damped motion",
      "Overdamped motion",
      "Initial-condition response",
    ],
    tags: ["SDOF", "Free vibration", "Damping"],
  },
  {
    id: "forced-vibration-sdof",
    title: "Forced Vibration of SDOF Systems",
    chapterRange: "Ch. 3–4",
    description:
      "Harmonic forcing, magnification factor, phase angle, and resonance behavior.",
    subtopics: [
      "Undamped harmonic forcing",
      "Viscously damped harmonic forcing",
      "Magnification factor",
      "Phase angle",
      "Resonance",
    ],
    tags: ["SDOF", "Forced vibration"],
  },
  {
    id: "base-excitation-isolation",
    title: "Base Excitation and Isolation",
    chapterRange: "Ch. 4",
    description:
      "Absolute and relative motion, transmissibility, and vibration isolation design.",
    subtopics: [
      "Absolute motion transmissibility",
      "Relative motion",
      "Vibration isolation",
      "Transmissibility ratio",
    ],
    tags: ["SDOF", "Base excitation", "Forced vibration"],
  },
  {
    id: "nonviscous-coulomb-damping",
    title: "Non-viscous and Coulomb Damping",
    chapterRange: "Ch. 3",
    description:
      "Equivalent viscous damping models and dry friction response.",
    subtopics: [
      "Equivalent viscous damping",
      "Coulomb damping response",
      "Dry friction damping",
    ],
    tags: ["SDOF", "Damping"],
  },
  {
    id: "general-forcing",
    title: "General Forcing Conditions",
    chapterRange: "Ch. 4–5",
    description:
      "Fourier series representation and harmonic response via superposition.",
    subtopics: [
      "Fourier series",
      "Discrete Fourier series",
      "First-order harmonic response",
      "Second-order harmonic response",
      "Superposition",
    ],
    tags: ["Forced vibration", "Fourier"],
  },
  {
    id: "impulse-step-response",
    title: "Impulse and Step Response",
    chapterRange: "Ch. 4–5",
    description:
      "Impulse response functions, Duhamel integral, and step response.",
    subtopics: [
      "Impulse response function",
      "Delta function",
      "Duhamel integral",
      "Step response",
      "Undamped and underdamped impulse response",
    ],
    tags: ["SDOF", "Impulse", "Forced vibration"],
  },
  {
    id: "two-dof-systems",
    title: "Two-Degree-of-Freedom Systems",
    chapterRange: "Ch. 6",
    description:
      "Matrix equations of motion, natural frequencies, mode shapes, and free response.",
    subtopics: [
      "Matrix equations of motion",
      "Natural frequencies",
      "Mode shape ratios",
      "Free response",
    ],
    tags: ["Two DOF", "Free vibration"],
  },
  {
    id: "equivalent-systems",
    title: "Equivalent Systems",
    chapterRange: "Ch. 2",
    description:
      "Combining masses, springs, dampers, and beam stiffness equivalents.",
    subtopics: [
      "Equivalent masses",
      "Equivalent springs",
      "Equivalent viscous dampers",
      "Beam stiffness equivalents",
    ],
    tags: ["Equivalent systems", "SDOF", "Conceptual"],
  },
  {
    id: "multi-dof-continuous",
    title: "Multi-DOF and Continuous Systems",
    chapterRange: "Ch. 7–8",
    description:
      "Matrix formulation, modal analysis, approximate methods, and beam vibration overview.",
    subtopics: [
      "Matrix formulation",
      "Modal analysis",
      "Approximate methods",
      "Beam vibration overview",
    ],
    tags: ["Two DOF", "Conceptual"],
  },
];
