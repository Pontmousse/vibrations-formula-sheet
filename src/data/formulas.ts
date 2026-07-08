export type FormulaEntry = {
  id: string;
  title: string;
  topic: string;
  subtopic: string;
  chapter?: string;
  latex: string;
  explanation: string;
  variables: {
    symbol: string;
    meaning: string;
    unit?: string;
  }[];
  assumptions: string[];
  useCases: string[];
  notFor?: string[];
  commonMistakes?: string[];
  relatedFormulaIds?: string[];
  problemTypes?: string[];
  tags: string[];
  source?: {
    sheet: string;
    page?: number;
  }[];
  example?: {
    prompt: string;
    steps: string[];
    note?: string;
  };
};

export const formulas: FormulaEntry[] = [
  {
    id: "euler-formula",
    title: "Euler's Formula",
    topic: "foundations-modeling",
    subtopic: "Euler's formula",
    chapter: "Ch. 2",
    latex: "e^{j\\theta} = \\cos\\theta + j\\sin\\theta",
    explanation:
      "Relates complex exponentials to trigonometric functions. Essential for expressing harmonic motion in compact complex form and solving ODEs with characteristic roots.",
    variables: [
      { symbol: "j", meaning: "Imaginary unit", unit: "—" },
      { symbol: "\\theta", meaning: "Phase angle", unit: "rad" },
    ],
    assumptions: ["Standard complex number conventions"],
    useCases: [
      "Converting between trigonometric and complex exponential forms",
      "Deriving underdamped free vibration solutions",
      "Expressing harmonic forcing in phasor form",
    ],
    notFor: ["Non-harmonic forcing without Fourier decomposition"],
    commonMistakes: [
      "Forgetting the imaginary unit j in the exponent",
      "Confusing Euler's formula with the parallel axis theorem",
    ],
    relatedFormulaIds: ["underdamped-free-response", "undamped-forced-response"],
    problemTypes: ["Complex exponential form of harmonic motion"],
    tags: ["Conceptual", "SDOF"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
    example: {
      prompt: "Express cos(ωt) using complex exponentials.",
      steps: [
        "Start from e^{jωt} = cos(ωt) + j sin(ωt)",
        "Similarly, e^{-jωt} = cos(ωt) − j sin(ωt)",
        "Add: cos(ωt) = (e^{jωt} + e^{-jωt}) / 2",
      ],
    },
  },
  {
    id: "parallel-axis-theorem",
    title: "Parallel Axis Theorem (Radius of Gyration Form)",
    topic: "foundations-modeling",
    subtopic: "Parallel axis theorem",
    chapter: "Ch. 1-2",
    latex: "k_o^2 = k_G^2 + d^2 \\quad (I_o = I_G + md^2)",
    explanation:
      "Course-sheet form of the parallel axis theorem using radius of gyration. It is equivalent to the moment-of-inertia form I_o = I_G + md².",
    variables: [
      { symbol: "k_o", meaning: "Radius of gyration about the offset axis", unit: "m" },
      { symbol: "k_G", meaning: "Radius of gyration about the mass-center axis", unit: "m" },
      { symbol: "d", meaning: "Distance between parallel axes", unit: "m" },
      { symbol: "I_o, I_G", meaning: "Mass moments of inertia about the offset and mass-center axes", unit: "kg·m²" },
    ],
    assumptions: [
      "Rigid body",
      "Axes are parallel",
      "d is measured between the two axes",
    ],
    useCases: [
      "Converting centroidal inertia to an inertia about a pivot",
      "Building rotational equivalent mass/inertia vibration models",
    ],
    notFor: [
      "Flexible bodies with changing mass distribution",
    ],
    commonMistakes: [
      "Mixing radius-of-gyration form with inertia form without multiplying by mass",
    ],
    relatedFormulaIds: [
      "rotational-translational-equivalence",
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent inertia",
      "Rigid-body vibration modeling",
    ],
    tags: [
      "Conceptual",
      "Equivalent systems",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "sdof-free-eom",
    title: "Free Vibration SDOF Equation of Motion",
    topic: "foundations-modeling",
    subtopic: "Equations of motion",
    chapter: "Ch. 1-2",
    latex: "m\\ddot{x} + c\\dot{x} + kx = 0",
    explanation:
      "Standard homogeneous equation of motion for a linear viscously damped SDOF oscillator.",
    variables: [
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "c", meaning: "Viscous damping coefficient", unit: "N·s/m" },
      { symbol: "k", meaning: "Stiffness", unit: "N/m" },
      { symbol: "x", meaning: "Displacement coordinate", unit: "m" },
    ],
    assumptions: [
      "Linear SDOF model",
      "Viscous damping",
      "No external forcing",
    ],
    useCases: [
      "Starting point for free-vibration solution forms",
      "Deriving the characteristic equation and roots",
    ],
    notFor: [
      "Forced response with nonzero F(t)",
    ],
    commonMistakes: [
      "Using this homogeneous EOM when a forcing term should be present",
    ],
    relatedFormulaIds: [
      "sdof-characteristic-equation",
      "natural-frequency",
      "damping-ratio",
    ],
    problemTypes: [
      "Equation-of-motion setup",
      "Free vibration modeling",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "sdof-characteristic-equation",
    title: "Characteristic Equation for Free Vibration",
    topic: "foundations-modeling",
    subtopic: "ODE solution patterns",
    chapter: "Ch. 1-2",
    latex: "ms^2 + cs + k = 0",
    explanation:
      "Assuming x(t)=e^{st} converts the free-vibration ODE into this quadratic characteristic equation.",
    variables: [
      { symbol: "s", meaning: "Characteristic root", unit: "1/s" },
      { symbol: "m,c,k", meaning: "Mass, damping, and stiffness parameters", unit: "various" },
    ],
    assumptions: [
      "Linear constant-coefficient ODE",
      "Trial solution e^{st}",
    ],
    useCases: [
      "Classifying free-response behavior from the roots",
    ],
    notFor: [
      "Nonlinear systems",
    ],
    commonMistakes: [
      "Forgetting the mass factor on s²",
    ],
    relatedFormulaIds: [
      "sdof-characteristic-roots",
      "discriminant-solution-patterns",
    ],
    problemTypes: [
      "ODE solution setup",
      "Root classification",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "sdof-characteristic-roots",
    title: "Characteristic Roots",
    topic: "foundations-modeling",
    subtopic: "ODE solution patterns",
    chapter: "Ch. 1-2",
    latex: "s_{1,2} = -\\frac{c}{2m} \\pm \\sqrt{\\left(\\frac{c}{2m}\\right)^2 - \\frac{k}{m}}",
    explanation:
      "Roots of the SDOF characteristic equation; their type determines the free-response form.",
    variables: [
      { symbol: "s_1, s_2", meaning: "Characteristic roots", unit: "1/s" },
      { symbol: "m,c,k", meaning: "Mass, damping, and stiffness parameters", unit: "various" },
    ],
    assumptions: [
      "Linear viscously damped SDOF system",
    ],
    useCases: [
      "Root-based classification of free vibration",
    ],
    notFor: [
      "Forced steady-state amplitude calculations",
    ],
    commonMistakes: [
      "Treating complex roots as real exponentials",
    ],
    relatedFormulaIds: [
      "discriminant-solution-patterns",
      "overdamped-response",
      "underdamped-free-response",
    ],
    problemTypes: [
      "Damping classification",
      "ODE roots",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "discriminant-solution-patterns",
    title: "Discriminant and ODE Solution Patterns",
    topic: "foundations-modeling",
    subtopic: "ODE solution patterns",
    chapter: "Ch. 1-2",
    latex: "\\Delta = c^2 - 4mk,\\quad \\begin{cases} \\Delta>0: e^{s_1t}, e^{s_2t} \\\\ \\Delta=0: e^{s_1t}, te^{s_1t} \\\\ \\Delta<0: e^{\\alpha t}\\cos\\beta t, e^{\\alpha t}\\sin\\beta t \\end{cases}",
    explanation:
      "Maps the characteristic-equation discriminant to the correct independent solution functions.",
    variables: [
      { symbol: "\\Delta", meaning: "Discriminant", unit: "varies" },
      { symbol: "\\alpha, \\beta", meaning: "Real and imaginary parts of complex roots", unit: "1/s" },
    ],
    assumptions: [
      "Second-order linear constant-coefficient ODE",
    ],
    useCases: [
      "Choosing the correct mathematical solution pattern before applying initial conditions",
    ],
    notFor: [
      "Direct steady-state forced response",
    ],
    commonMistakes: [
      "Using two independent exponentials when the roots are repeated",
    ],
    relatedFormulaIds: [
      "sdof-characteristic-equation",
      "sdof-characteristic-roots",
    ],
    problemTypes: [
      "ODE classification",
      "Free-response derivation",
    ],
    tags: [
      "Conceptual",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "trigonometric-sum-identities",
    title: "Trigonometric Sum and Difference Identities",
    topic: "foundations-modeling",
    subtopic: "Trigonometric identities",
    chapter: "Ch. 3-5",
    latex: "\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta,\\quad \\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta",
    explanation:
      "Trig identities used to expand phase-shifted harmonic response terms.",
    variables: [
      { symbol: "\\alpha, \\beta", meaning: "Angles", unit: "rad" },
    ],
    assumptions: [
      "Standard trigonometric identities",
    ],
    useCases: [
      "Expanding phase-shifted sine/cosine terms",
      "Deriving harmonic response constants",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "phase-angle",
      "damped-harmonic-transient-constants",
    ],
    problemTypes: [
      "Derivation support",
    ],
    tags: [
      "Conceptual",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "integration-identities-harmonic-response",
    title: "Integration Identities for Harmonic Response",
    topic: "foundations-modeling",
    subtopic: "Integration identities",
    chapter: "Ch. 3-5",
    latex: "\\int x\\cos(ax)dx=\\frac{\\cos(ax)+ax\\sin(ax)}{a^2},\\quad \\int x\\sin(ax)dx=\\frac{\\sin(ax)-ax\\cos(ax)}{a^2}",
    explanation:
      "Integration identities from the Quiz 2 sheet for harmonic and convolution derivations.",
    variables: [
      { symbol: "a", meaning: "Constant frequency-like coefficient", unit: "1/s" },
      { symbol: "x", meaning: "Integration variable", unit: "varies" },
    ],
    assumptions: [
      "a is constant",
    ],
    useCases: [
      "Evaluating integrals in forced-vibration derivations",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "duhamel-integral",
    ],
    problemTypes: [
      "Derivation support",
    ],
    tags: [
      "Conceptual",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "exponential-harmonic-integration-identities",
    title: "Exponential-Harmonic Integration Identities",
    topic: "foundations-modeling",
    subtopic: "Integration identities",
    chapter: "Ch. 3-5",
    latex: "\\int e^{ax}\\cos(bx)dx=\\frac{e^{ax}}{a^2+b^2}\\left(a\\cos bx+b\\sin bx\\right),\\quad \\int e^{ax}\\sin(bx)dx=\\frac{e^{ax}}{a^2+b^2}\\left(a\\sin bx-b\\cos bx\\right)",
    explanation:
      "Useful integrals for damped response and Duhamel-integral evaluations.",
    variables: [
      { symbol: "a,b", meaning: "Constants", unit: "various" },
      { symbol: "x", meaning: "Integration variable", unit: "varies" },
    ],
    assumptions: [
      "a and b are constants",
    ],
    useCases: [
      "Evaluating underdamped convolution integrals",
      "Deriving step response",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "duhamel-integral",
      "step-response",
    ],
    problemTypes: [
      "Derivation support",
    ],
    tags: [
      "Conceptual",
      "Impulse",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "integration-by-parts",
    title: "Integration by Parts",
    topic: "foundations-modeling",
    subtopic: "Integration identities",
    chapter: "Ch. 3-5",
    latex: "\\int u\\,dv = uv - \\int v\\,du",
    explanation:
      "Standard integration-by-parts identity included on the Quiz 2 formula sheet.",
    variables: [
      { symbol: "u,v", meaning: "Differentiable/integrable functions", unit: "varies" },
    ],
    assumptions: [
      "Functions are sufficiently smooth",
    ],
    useCases: [
      "Derivations involving products of functions",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [],
    problemTypes: [
      "Derivation support",
    ],
    tags: [
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "natural-frequency",
    title: "Natural Frequency (Undamped SDOF)",
    topic: "vibration-parameters",
    subtopic: "Natural frequency",
    chapter: "Ch. 2",
    latex: "\\omega_n = \\sqrt{\\frac{k}{m}}",
    explanation:
      "The angular natural frequency of an undamped single-degree-of-freedom system. Determines how fast the system oscillates in free vibration.",
    variables: [
      { symbol: "\\omega_n", meaning: "Natural angular frequency", unit: "rad/s" },
      { symbol: "k", meaning: "Equivalent stiffness", unit: "N/m" },
      { symbol: "m", meaning: "Equivalent mass", unit: "kg" },
    ],
    assumptions: [
      "Linear spring",
      "Single degree of freedom",
      "No damping",
      "Small displacements",
    ],
    useCases: [
      "Computing oscillation rate before damping effects",
      "Finding equivalent stiffness/mass combinations",
      "Setting up damped and forced vibration problems",
    ],
    notFor: ["Multi-DOF systems without modal decomposition", "Large-amplitude nonlinear springs"],
    commonMistakes: [
      "Using total mass instead of equivalent mass",
      "Confusing ω_n with f_n (forgetting 2π)",
      "Using series/parallel spring formulas incorrectly",
    ],
    relatedFormulaIds: ["damped-natural-frequency", "springs-parallel", "springs-series"],
    problemTypes: ["SDOF parameter identification", "Equivalent system setup"],
    tags: ["SDOF", "Free vibration", "Conceptual"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
    example: {
      prompt: "A 5 kg mass on a 200 N/m spring. Find ω_n.",
      steps: ["ω_n = √(k/m) = √(200/5) = √40 ≈ 6.32 rad/s"],
    },
  },
  {
    id: "critical-damping",
    title: "Critical Damping Coefficient",
    topic: "vibration-parameters",
    subtopic: "Critical damping",
    chapter: "Ch. 2",
    latex: "c_c = 2\\sqrt{mk} = 2m\\sqrt{\\frac{k}{m}} = 2m\\omega_n",
    explanation:
      "Course-sheet form of the critical damping coefficient. It is the boundary value separating oscillatory and non-oscillatory free response.",
    variables: [
      { symbol: "c_c", meaning: "Critical damping coefficient", unit: "N·s/m" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "k", meaning: "Stiffness", unit: "N/m" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Viscous damping",
      "Linear SDOF system",
    ],
    useCases: [
      "Computing damping ratio ζ = c/c_c",
      "Classifying underdamped, critically damped, or overdamped response",
    ],
    notFor: [
      "Coulomb or structural damping without an equivalent viscous model",
    ],
    commonMistakes: [
      "Forgetting the factor of 2",
    ],
    relatedFormulaIds: [
      "damping-ratio",
      "critically-damped-response",
    ],
    problemTypes: [
      "Damping classification",
    ],
    tags: [
      "SDOF",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damping-ratio",
    title: "Damping Ratio",
    topic: "vibration-parameters",
    subtopic: "Damping ratio",
    chapter: "Ch. 2",
    latex: "\\zeta = \\frac{c}{c_c} = \\frac{c}{2m\\omega_n} = \\frac{c}{2\\sqrt{km}} = \\frac{\\delta}{\\sqrt{(2\\pi)^2 + \\delta^2}}",
    explanation:
      "Dimensionless measure of damping relative to critical damping. The final equality estimates ζ from logarithmic decrement data.",
    variables: [
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
      { symbol: "c", meaning: "Damping coefficient", unit: "N·s/m" },
      { symbol: "c_c", meaning: "Critical damping coefficient", unit: "N·s/m" },
      { symbol: "\\delta", meaning: "Logarithmic decrement", unit: "—" },
    ],
    assumptions: [
      "Viscous damping",
      "Linear SDOF",
      "Log-decrement relation applies to underdamped free vibration",
    ],
    useCases: [
      "Classifying response type",
      "Computing damped natural frequency",
      "Estimating damping from measured decay peaks",
    ],
    notFor: [
      "Non-viscous damping without an equivalent model",
    ],
    commonMistakes: [
      "Using the log-decrement relation for forced steady-state data",
    ],
    relatedFormulaIds: [
      "critical-damping",
      "damped-natural-frequency",
      "log-decrement",
    ],
    problemTypes: [
      "Damping identification",
      "Damping classification",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damped-natural-frequency",
    title: "Damped Natural Frequency",
    topic: "vibration-parameters",
    subtopic: "Damped natural frequency",
    chapter: "Ch. 2",
    latex: "\\omega_d = \\omega_n\\sqrt{1 - \\zeta^2}",
    explanation:
      "The frequency of oscillation for an underdamped system. Only real when ζ < 1.",
    variables: [
      { symbol: "\\omega_d", meaning: "Damped natural frequency", unit: "rad/s" },
      { symbol: "\\omega_n", meaning: "Undamped natural frequency", unit: "rad/s" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: ["Underdamped (ζ < 1)", "Viscous damping"],
    useCases: [
      "Writing underdamped free vibration solution",
      "Estimating oscillation period with damping",
    ],
    notFor: ["Critically damped or overdamped systems (ω_d is not real)"],
    commonMistakes: [
      "Using this formula when ζ ≥ 1",
      "Confusing ω_d with ω_n in forced response",
    ],
    relatedFormulaIds: ["underdamped-free-response", "damping-ratio"],
    problemTypes: ["Underdamped free vibration"],
    tags: ["SDOF", "Damping", "Free vibration"],
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "log-decrement",
    title: "Logarithmic Decrement",
    topic: "vibration-parameters",
    subtopic: "Logarithmic decrement",
    chapter: "Ch. 2",
    latex: "\\delta = \\ln\\left(\\frac{x_1}{x_2}\\right) = \\frac{2\\pi\\zeta}{\\sqrt{1-\\zeta^2}} = \\frac{2\\pi}{\\omega_d}\\frac{c}{2m},\\quad \\delta = \\frac{1}{N}\\ln\\left(\\frac{x_1}{x_{N+1}}\\right)",
    explanation:
      "Measures exponential amplitude decay per cycle for underdamped free vibration. The multi-cycle form averages decay over N cycles.",
    variables: [
      { symbol: "\\delta", meaning: "Logarithmic decrement", unit: "—" },
      { symbol: "x_1, x_2", meaning: "Successive peak amplitudes", unit: "m" },
      { symbol: "N", meaning: "Number of cycles between measured peaks", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "Underdamped free vibration",
      "Viscous damping",
      "Peaks are measured from the same side of equilibrium",
    ],
    useCases: [
      "Experimental damping estimation from decay envelope",
      "Averaging damping estimates across multiple cycles",
    ],
    notFor: [
      "Forced vibration steady state",
      "Non-exponential decay such as unmodeled Coulomb damping",
    ],
    commonMistakes: [
      "Confusing N cycles with mass m",
    ],
    relatedFormulaIds: [
      "damping-ratio",
      "underdamped-free-response",
    ],
    problemTypes: [
      "Experimental damping measurement",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "undamped-free-response",
    title: "Undamped Free Vibration Response (Amplitude-Phase Form)",
    topic: "free-vibration-sdof",
    subtopic: "Undamped free vibration",
    chapter: "Ch. 2",
    latex: "x(t) = A\\cos(\\omega_n t - \\varphi),\\quad A = \\left[x_0^2 + \\left(\\frac{\\dot{x}_0}{\\omega_n}\\right)^2\\right]^{1/2},\\quad \\varphi = \\tan^{-1}\\left(\\frac{\\dot{x}_0}{x_0\\omega_n}\\right)",
    explanation:
      "Course-sheet amplitude-phase form for undamped free vibration with initial displacement x₀ and initial velocity ẋ₀.",
    variables: [
      { symbol: "x(t)", meaning: "Displacement", unit: "m" },
      { symbol: "A", meaning: "Response amplitude from initial conditions", unit: "m" },
      { symbol: "\\varphi", meaning: "Phase angle from initial conditions", unit: "rad" },
      { symbol: "x_0, \\dot{x}_0", meaning: "Initial displacement and velocity", unit: "m, m/s" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "No damping",
      "Linear spring",
      "SDOF",
      "No external forcing",
    ],
    useCases: [
      "Undamped initial-condition response",
      "Converting x₀ and ẋ₀ into amplitude and phase",
    ],
    notFor: [
      "Damped systems",
      "Forced vibration",
    ],
    commonMistakes: [
      "Forgetting quadrant conventions for inverse tangent",
    ],
    relatedFormulaIds: [
      "natural-frequency",
      "euler-formula",
      "sdof-free-eom",
    ],
    problemTypes: [
      "Initial value problems, undamped",
    ],
    tags: [
      "SDOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "underdamped-free-response",
    title: "Underdamped Free Vibration Response (Amplitude-Phase Form)",
    topic: "free-vibration-sdof",
    subtopic: "Underdamped motion",
    chapter: "Ch. 2",
    latex: "x(t) = X e^{-\\zeta\\omega_n t}\\cos(\\omega_d t - \\varphi)",
    explanation:
      "Course-sheet amplitude-phase form for underdamped free vibration. The exponential envelope decays at ζωₙ while oscillation occurs at ω_d.",
    variables: [
      { symbol: "X", meaning: "Initial-condition amplitude constant", unit: "m" },
      { symbol: "\\varphi", meaning: "Phase constant", unit: "rad" },
      { symbol: "\\omega_d", meaning: "Damped natural frequency", unit: "rad/s" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "Viscous damping",
      "0 < ζ < 1",
      "No forcing",
    ],
    useCases: [
      "Underdamped free response from initial conditions",
      "Experimental decay interpretation",
    ],
    notFor: [
      "ζ ≥ 1",
      "Forced harmonic steady state",
    ],
    commonMistakes: [
      "Omitting the exponential decay term",
    ],
    relatedFormulaIds: [
      "underdamped-initial-condition-constants",
      "damped-natural-frequency",
      "log-decrement",
    ],
    problemTypes: [
      "Underdamped transient response",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "underdamped-initial-condition-constants",
    title: "Underdamped Initial-Condition Constants",
    topic: "free-vibration-sdof",
    subtopic: "Initial-condition response",
    chapter: "Ch. 2",
    latex: "X = \\frac{\\sqrt{x_0^2\\omega_n^2 + \\dot{x}_0^2 + 2x_0\\dot{x}_0\\zeta\\omega_n}}{\\omega_n\\sqrt{1-\\zeta^2}},\\quad \\varphi = \\tan^{-1}\\left(\\frac{\\dot{x}_0 + \\zeta\\omega_n x_0}{x_0\\omega_d}\\right)",
    explanation:
      "Constants for the amplitude-phase underdamped response using initial displacement and velocity.",
    variables: [
      { symbol: "X", meaning: "Amplitude constant", unit: "m" },
      { symbol: "\\varphi", meaning: "Phase angle", unit: "rad" },
      { symbol: "x_0, \\dot{x}_0", meaning: "Initial displacement and velocity", unit: "m, m/s" },
      { symbol: "\\omega_n, \\omega_d", meaning: "Undamped and damped natural frequencies", unit: "rad/s" },
    ],
    assumptions: [
      "0 < ζ < 1",
      "Viscous damping",
      "Amplitude-phase response form",
    ],
    useCases: [
      "Applying initial conditions to underdamped response",
    ],
    notFor: [
      "Critical or overdamped response forms",
    ],
    commonMistakes: [
      "Using these constants with a different response form",
    ],
    relatedFormulaIds: [
      "underdamped-free-response",
      "damped-natural-frequency",
    ],
    problemTypes: [
      "Initial-condition response",
      "Underdamped free vibration",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 1 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "critically-damped-response",
    title: "Critically Damped Response from Initial Conditions",
    topic: "free-vibration-sdof",
    subtopic: "Critically damped motion",
    chapter: "Ch. 2",
    latex: "x(t) = \\left[x_0 + (\\dot{x}_0 + \\omega_n x_0)t\\right]e^{-\\omega_n t}",
    explanation:
      "Course-sheet initial-condition form for critical damping, ζ = 1.",
    variables: [
      { symbol: "x_0, \\dot{x}_0", meaning: "Initial displacement and velocity", unit: "m, m/s" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "ζ = 1",
      "Viscous damping",
      "No forcing",
    ],
    useCases: [
      "Critical damping response with known initial conditions",
    ],
    notFor: [
      "ζ ≠ 1",
    ],
    commonMistakes: [
      "Forgetting the t multiplier inside the bracket",
    ],
    relatedFormulaIds: [
      "critical-damping",
      "damping-ratio",
    ],
    problemTypes: [
      "Critical damping initial-value response",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "overdamped-response",
    title: "Overdamped Response from Initial Conditions",
    topic: "free-vibration-sdof",
    subtopic: "Overdamped motion",
    chapter: "Ch. 2",
    latex: "x(t) = C_1e^{(-\\zeta + \\sqrt{\\zeta^2-1})\\omega_n t} + C_2e^{(-\\zeta - \\sqrt{\\zeta^2-1})\\omega_n t}",
    explanation:
      "Course-sheet overdamped response form for ζ > 1. Constants C₁ and C₂ are set by x₀ and ẋ₀.",
    variables: [
      { symbol: "C_1, C_2", meaning: "Constants from initial conditions", unit: "m" },
      { symbol: "\\zeta", meaning: "Damping ratio greater than 1", unit: "—" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "ζ > 1",
      "Viscous damping",
      "No forcing",
    ],
    useCases: [
      "Heavily damped transient response",
      "Overdamped initial-condition problems",
    ],
    notFor: [
      "Underdamped or harmonic steady-state problems",
    ],
    commonMistakes: [
      "Applying oscillatory ω_d formulas when ζ > 1",
    ],
    relatedFormulaIds: [
      "overdamped-initial-condition-constants",
      "damping-ratio",
    ],
    problemTypes: [
      "Overdamped transient",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "overdamped-initial-condition-constants",
    title: "Overdamped Initial-Condition Constants",
    topic: "free-vibration-sdof",
    subtopic: "Initial-condition response",
    chapter: "Ch. 2",
    latex: "C_1 = \\frac{x_0\\omega_n(\\zeta + \\sqrt{\\zeta^2-1}) + \\dot{x}_0}{2\\omega_n\\sqrt{\\zeta^2-1}},\\quad C_2 = \\frac{-x_0\\omega_n(\\zeta - \\sqrt{\\zeta^2-1}) - \\dot{x}_0}{2\\omega_n\\sqrt{\\zeta^2-1}}",
    explanation:
      "Constants for the course-sheet overdamped response form, computed from initial displacement and velocity.",
    variables: [
      { symbol: "C_1, C_2", meaning: "Constants in overdamped response", unit: "m" },
      { symbol: "x_0, \\dot{x}_0", meaning: "Initial displacement and velocity", unit: "m, m/s" },
      { symbol: "\\zeta", meaning: "Damping ratio greater than 1", unit: "—" },
    ],
    assumptions: [
      "ζ > 1",
      "Same sign convention as the listed overdamped response formula",
    ],
    useCases: [
      "Applying initial conditions to overdamped motion",
    ],
    notFor: [
      "Underdamped or critically damped forms",
    ],
    commonMistakes: [
      "Mixing C₁/C₂ formulas with a different root ordering",
    ],
    relatedFormulaIds: [
      "overdamped-response",
    ],
    problemTypes: [
      "Overdamped initial-value response",
    ],
    tags: [
      "SDOF",
      "Free vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "undamped-forced-response",
    title: "Undamped Harmonic Forced Response with Initial Conditions",
    topic: "forced-vibration-sdof",
    subtopic: "Undamped harmonic forcing",
    chapter: "Ch. 3",
    latex: "m\\ddot{x}+kx=F_0\\cos\\omega t,\\quad x(t)=\\left(x_0-\\frac{F_0}{k-m\\omega^2}\\right)\\cos\\omega_n t+\\frac{\\dot{x}_0}{\\omega_n}\\sin\\omega_n t+\\frac{F_0}{k-m\\omega^2}\\cos\\omega t",
    explanation:
      "Complete undamped harmonic-force response: free-response terms from initial conditions plus the particular harmonic response.",
    variables: [
      { symbol: "F_0", meaning: "Force amplitude", unit: "N" },
      { symbol: "\\omega", meaning: "Forcing frequency", unit: "rad/s" },
      { symbol: "x_0, \\dot{x}_0", meaning: "Initial displacement and velocity", unit: "m, m/s" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped SDOF",
      "Harmonic force on the mass",
      "ω ≠ ω_n for this closed form",
    ],
    useCases: [
      "Undamped forced-response initial-value problems",
    ],
    notFor: [
      "Damped systems",
      "Exact undamped resonance",
    ],
    commonMistakes: [
      "Using this expression at ω = ω_n",
    ],
    relatedFormulaIds: [
      "magnification-factor-undamped",
      "natural-frequency",
    ],
    problemTypes: [
      "Undamped harmonic force",
      "Initial-condition response",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "magnification-factor-undamped",
    title: "Dynamic Magnification Factor (Undamped)",
    topic: "forced-vibration-sdof",
    subtopic: "Magnification factor",
    chapter: "Ch. 3",
    latex: "\\frac{X}{\\delta_{st}}=\\frac{1}{1-\\left(\\frac{\\omega}{\\omega_n}\\right)^2}=\\frac{1}{1-r^2},\\quad \\delta_{st}=\\frac{F_0}{k}",
    explanation:
      "Quiz 2 sheet form of undamped dynamic magnification. The sign represents phase relative to force; magnitude becomes unbounded at r = 1.",
    variables: [
      { symbol: "X", meaning: "Steady-state amplitude", unit: "m" },
      { symbol: "\\delta_{st}", meaning: "Static deflection F₀/k", unit: "m" },
      { symbol: "r", meaning: "Frequency ratio ω/ω_n", unit: "—" },
    ],
    assumptions: [
      "Undamped SDOF",
      "Harmonic force",
      "Steady-state particular response",
    ],
    useCases: [
      "Comparing dynamic amplitude to static deflection",
    ],
    notFor: [
      "Damped systems",
      "Base excitation",
    ],
    commonMistakes: [
      "Ignoring the sign/phase change across resonance",
    ],
    relatedFormulaIds: [
      "undamped-forced-response",
      "magnification-factor",
    ],
    problemTypes: [
      "Magnification",
      "Resonance",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damped-forced-amplitude",
    title: "Damped Harmonic Force Response Amplitude",
    topic: "forced-vibration-sdof",
    subtopic: "Viscously damped harmonic forcing",
    chapter: "Ch. 3",
    latex: "X=\\frac{F_0}{\\sqrt{(k-m\\omega^2)^2+c^2\\omega^2}}=\\frac{\\delta_{st}}{\\sqrt{(1-r^2)^2+(2\\zeta r)^2}}",
    explanation:
      "Steady-state displacement amplitude for a viscously damped SDOF system under harmonic force.",
    variables: [
      { symbol: "X", meaning: "Steady-state amplitude", unit: "m" },
      { symbol: "F_0", meaning: "Force amplitude", unit: "N" },
      { symbol: "c", meaning: "Damping coefficient", unit: "N·s/m" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
      { symbol: "\\delta_{st}", meaning: "Static deflection F₀/k", unit: "m" },
    ],
    assumptions: [
      "Viscous damping",
      "Harmonic force on the mass",
      "Steady state",
    ],
    useCases: [
      "Damped harmonic force response",
      "Computing amplitude at a forcing frequency",
    ],
    notFor: [
      "Base excitation",
      "Transient-only response",
    ],
    commonMistakes: [
      "Using transmissibility instead of force magnification",
    ],
    relatedFormulaIds: [
      "magnification-factor",
      "phase-angle",
      "damped-harmonic-total-response",
    ],
    problemTypes: [
      "Damped harmonic response",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "magnification-factor",
    title: "Magnification Factor (Damped)",
    topic: "forced-vibration-sdof",
    subtopic: "Magnification factor",
    chapter: "Ch. 4",
    latex: "M = \\frac{1}{\\sqrt{(1-r^2)^2 + (2\\zeta r)^2}}",
    explanation:
      "Dynamic magnification for damped harmonic forcing. Peak occurs near but not exactly at r = 1.",
    variables: [
      { symbol: "M", meaning: "Magnification factor", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
    ],
    assumptions: ["Viscous damping", "Harmonic forcing"],
    useCases: ["Design for acceptable vibration amplitude", "Comparing isolation performance"],
    notFor: ["Base excitation (use transmissibility)"],
    commonMistakes: ["Confusing M with transmissibility TR"],
    relatedFormulaIds: ["damped-forced-amplitude", "transmissibility-absolute"],
    problemTypes: ["Forced vibration design"],
    tags: ["SDOF", "Forced vibration", "Damping"],
    source: [{ sheet: "Midterm formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "phase-angle",
    title: "Phase Angle (Harmonic Forcing)",
    topic: "forced-vibration-sdof",
    subtopic: "Phase angle",
    chapter: "Ch. 3",
    latex: "\\phi=\\tan^{-1}\\left(\\frac{c\\omega}{k-m\\omega^2}\\right)=\\tan^{-1}\\left(\\frac{2\\zeta r}{1-r^2}\\right)",
    explanation:
      "Phase lag between harmonic force and steady-state displacement response.",
    variables: [
      { symbol: "\\phi", meaning: "Phase angle", unit: "rad" },
      { symbol: "c", meaning: "Damping coefficient", unit: "N·s/m" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "Viscous damping",
      "Harmonic force on the mass",
      "Steady state",
    ],
    useCases: [
      "Determining response phase relative to force",
    ],
    notFor: [
      "Free vibration",
      "Base excitation phase (use base-excitation phase formula)",
    ],
    commonMistakes: [
      "Not accounting for quadrant when r > 1",
    ],
    relatedFormulaIds: [
      "damped-forced-amplitude",
      "magnification-factor",
    ],
    problemTypes: [
      "Phase relationship",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damped-harmonic-total-response",
    title: "Damped Harmonic Total Response",
    topic: "forced-vibration-sdof",
    subtopic: "Viscously damped harmonic forcing",
    chapter: "Ch. 3",
    latex: "m\\ddot{x}+c\\dot{x}+kx=F_0\\cos\\omega t,\\quad x(t)=x_h+x_p=X_0e^{-\\zeta\\omega_n t}\\cos(\\omega_d t-\\phi_0)+X\\cos(\\omega t-\\phi)",
    explanation:
      "Total response under damped harmonic forcing: decaying homogeneous part plus steady-state particular part.",
    variables: [
      { symbol: "X_0", meaning: "Transient amplitude", unit: "m" },
      { symbol: "\\phi_0", meaning: "Transient phase", unit: "rad" },
      { symbol: "X", meaning: "Steady-state amplitude", unit: "m" },
      { symbol: "\\phi", meaning: "Steady-state phase", unit: "rad" },
    ],
    assumptions: [
      "Linear viscously damped SDOF",
      "Harmonic force on the mass",
    ],
    useCases: [
      "Combining transient and steady-state response",
    ],
    notFor: [
      "Base excitation",
    ],
    commonMistakes: [
      "Using only x_p when initial-condition transient matters",
    ],
    relatedFormulaIds: [
      "damped-harmonic-transient-constants",
      "damped-forced-amplitude",
      "phase-angle",
    ],
    problemTypes: [
      "Damped harmonic total response",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damped-harmonic-transient-constants",
    title: "Damped Harmonic Transient Constants",
    topic: "forced-vibration-sdof",
    subtopic: "Viscously damped harmonic forcing",
    chapter: "Ch. 3",
    latex: "X_0=\\left[(x_0-X\\cos\\phi)^2+\\frac{(\\zeta\\omega_nx_0+\\dot{x}_0-\\zeta\\omega_nX\\cos\\phi-\\omega X\\sin\\phi)^2}{\\omega_d^2}\\right]^{1/2},\\quad \\phi_0=\\tan^{-1}\\left(\\frac{\\zeta\\omega_nx_0+\\dot{x}_0-\\zeta\\omega_nX\\cos\\phi-\\omega X\\sin\\phi}{\\omega_d(x_0-X\\cos\\phi)}\\right)",
    explanation:
      "Initial-condition constants for the transient part of the damped harmonic total response.",
    variables: [
      { symbol: "X_0", meaning: "Transient amplitude", unit: "m" },
      { symbol: "\\phi_0", meaning: "Transient phase", unit: "rad" },
      { symbol: "X,\\phi", meaning: "Steady-state amplitude and phase", unit: "m, rad" },
    ],
    assumptions: [
      "0 < ζ < 1",
      "Damped harmonic response written in total-response form",
    ],
    useCases: [
      "Applying initial conditions to damped forced vibration",
    ],
    notFor: [
      "Steady-state-only problems",
    ],
    commonMistakes: [
      "Using these constants before computing X and φ",
    ],
    relatedFormulaIds: [
      "damped-harmonic-total-response",
      "damped-forced-amplitude",
      "phase-angle",
    ],
    problemTypes: [
      "Forced-vibration initial conditions",
    ],
    tags: [
      "SDOF",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 2 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "transmissibility-absolute",
    title: "Absolute Motion Transmissibility",
    topic: "base-excitation-isolation",
    subtopic: "Absolute motion transmissibility",
    chapter: "Ch. 4",
    latex: "TR = \\frac{X}{Y} = \\frac{\\sqrt{1 + (2\\zeta r)^2}}{\\sqrt{(1-r^2)^2 + (2\\zeta r)^2}}",
    explanation:
      "Ratio of absolute mass displacement amplitude to base displacement amplitude for harmonic base excitation.",
    variables: [
      { symbol: "TR", meaning: "Transmissibility ratio", unit: "—" },
      { symbol: "X", meaning: "Mass displacement amplitude", unit: "m" },
      { symbol: "Y", meaning: "Base displacement amplitude", unit: "m" },
    ],
    assumptions: ["Harmonic base motion", "Viscous damping", "Steady state"],
    useCases: ["Vibration isolation design", "Evaluating transmitted motion to equipment"],
    notFor: ["Force excitation (use magnification factor)"],
    commonMistakes: [
      "Using force-excitation M formula for base excitation",
      "Forgetting numerator 1 + (2ζr)² term",
    ],
    relatedFormulaIds: ["transmissibility-relative", "magnification-factor"],
    problemTypes: ["Base excitation", "Isolation design"],
    tags: ["SDOF", "Base excitation", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 4 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "transmissibility-relative",
    title: "Relative Displacement Transmissibility",
    topic: "base-excitation-isolation",
    subtopic: "Relative motion",
    chapter: "Ch. 4",
    latex: "TR_{rel} = \\frac{Z}{Y} = \\frac{r^2}{\\sqrt{(1-r^2)^2 + (2\\zeta r)^2}}",
    explanation:
      "Ratio of relative displacement (mass relative to base) to base displacement amplitude.",
    variables: [
      { symbol: "Z", meaning: "Relative displacement amplitude", unit: "m" },
      { symbol: "Y", meaning: "Base displacement amplitude", unit: "m" },
    ],
    assumptions: ["Harmonic base excitation", "Steady state"],
    useCases: ["Spring/damper deformation in isolation mounts", "Stress in suspension elements"],
    notFor: ["Absolute motion tracking"],
    commonMistakes: ["Confusing TR and TR_rel"],
    relatedFormulaIds: ["transmissibility-absolute"],
    problemTypes: ["Relative motion in base excitation"],
    tags: ["SDOF", "Base excitation", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 4 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "base-excitation-eom",
    title: "Base Excitation Equation of Motion",
    topic: "base-excitation-isolation",
    subtopic: "Vibration isolation",
    chapter: "Ch. 4",
    latex: "m\\ddot{x}+c(\\dot{x}-\\dot{y})+k(x-y)=0",
    explanation:
      "Equation of motion for an SDOF system subjected to base displacement y(t), written in absolute coordinate x(t).",
    variables: [
      { symbol: "x", meaning: "Absolute mass displacement", unit: "m" },
      { symbol: "y", meaning: "Base displacement", unit: "m" },
      { symbol: "m,c,k", meaning: "Mass, damping, stiffness", unit: "various" },
    ],
    assumptions: [
      "Linear SDOF",
      "Viscous damping",
      "Base motion input",
    ],
    useCases: [
      "Starting point for base-excitation transmissibility",
    ],
    notFor: [
      "Direct force excitation",
    ],
    commonMistakes: [
      "Using force-excitation EOM for base motion",
    ],
    relatedFormulaIds: [
      "transmissibility-absolute",
      "relative-motion-eom",
    ],
    problemTypes: [
      "Base excitation modeling",
    ],
    tags: [
      "SDOF",
      "Base excitation",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "base-excitation-phase",
    title: "Absolute Motion Phase for Base Excitation",
    topic: "base-excitation-isolation",
    subtopic: "Absolute motion transmissibility",
    chapter: "Ch. 4",
    latex: "\\phi=\\tan^{-1}\\left(\\frac{mc\\omega^3}{k(k-m\\omega^2)+(c\\omega)^2}\\right)=\\tan^{-1}\\left(\\frac{2\\zeta r^3}{1+(4\\zeta^2-1)r^2}\\right)",
    explanation:
      "Phase angle for absolute displacement response under harmonic base excitation.",
    variables: [
      { symbol: "\\phi", meaning: "Phase lag", unit: "rad" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "Harmonic base excitation",
      "Steady state",
      "Viscous damping",
    ],
    useCases: [
      "Determining phase of absolute motion relative to base motion",
    ],
    notFor: [
      "Force excitation phase",
    ],
    commonMistakes: [
      "Using force-response phase angle for base excitation",
    ],
    relatedFormulaIds: [
      "transmissibility-absolute",
    ],
    problemTypes: [
      "Base excitation phase",
    ],
    tags: [
      "SDOF",
      "Base excitation",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "relative-motion-eom",
    title: "Relative Motion Equation for Base Excitation",
    topic: "base-excitation-isolation",
    subtopic: "Relative motion",
    chapter: "Ch. 4",
    latex: "z=x-y,\\quad m\\ddot{z}+c\\dot{z}+kz=-m\\ddot{y}",
    explanation:
      "Relative coordinate formulation for base excitation, where z is mass motion relative to the base.",
    variables: [
      { symbol: "z", meaning: "Relative displacement x-y", unit: "m" },
      { symbol: "y", meaning: "Base displacement", unit: "m" },
    ],
    assumptions: [
      "Linear SDOF",
      "Base acceleration input",
    ],
    useCases: [
      "Computing spring/damper deformation under base motion",
    ],
    notFor: [
      "Absolute motion transmissibility without relative deformation",
    ],
    commonMistakes: [
      "Confusing x with z",
    ],
    relatedFormulaIds: [
      "transmissibility-relative",
      "base-excitation-eom",
    ],
    problemTypes: [
      "Relative base-excitation response",
    ],
    tags: [
      "SDOF",
      "Base excitation",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "relative-motion-phase",
    title: "Relative Motion Phase for Base Excitation",
    topic: "base-excitation-isolation",
    subtopic: "Relative motion",
    chapter: "Ch. 4",
    latex: "\\phi_1=\\tan^{-1}\\left(\\frac{c\\omega}{k-m\\omega^2}\\right)=\\tan^{-1}\\left(\\frac{2\\zeta r}{1-r^2}\\right)",
    explanation:
      "Phase angle for relative displacement z under harmonic base excitation.",
    variables: [
      { symbol: "\\phi_1", meaning: "Relative-motion phase angle", unit: "rad" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "Harmonic base excitation",
      "Steady state",
    ],
    useCases: [
      "Phase of relative displacement response",
    ],
    notFor: [
      "Absolute motion phase",
    ],
    commonMistakes: [
      "Mixing absolute and relative phase definitions",
    ],
    relatedFormulaIds: [
      "transmissibility-relative",
      "relative-motion-eom",
    ],
    problemTypes: [
      "Relative base-excitation response",
    ],
    tags: [
      "SDOF",
      "Base excitation",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "coulomb-equivalent-damping",
    title: "Equivalent Viscous Damping (Coulomb Friction)",
    topic: "nonviscous-coulomb-damping",
    subtopic: "Equivalent viscous damping",
    chapter: "Ch. 3",
    latex: "c_{eq} = \\frac{4fN}{\\pi\\omega X}",
    explanation:
      "Equivalent viscous damping coefficient for Coulomb friction, obtained by matching energy dissipated per cycle for harmonic motion of amplitude X.",
    variables: [
      { symbol: "c_{eq}", meaning: "Equivalent viscous damping", unit: "N·s/m" },
      { symbol: "f", meaning: "Coefficient of friction", unit: "—" },
      { symbol: "N", meaning: "Normal force", unit: "N" },
      { symbol: "\\omega", meaning: "Motion frequency", unit: "rad/s" },
      { symbol: "X", meaning: "Motion amplitude", unit: "m" },
    ],
    assumptions: [
      "Coulomb friction",
      "Approximate harmonic motion",
      "Equivalent energy dissipation per cycle",
    ],
    useCases: [
      "Linearizing dry friction damping for approximate harmonic analysis",
    ],
    notFor: [
      "True viscous damping problems",
      "Zero-amplitude motion",
    ],
    commonMistakes: [
      "Forgetting the amplitude X in the denominator",
    ],
    relatedFormulaIds: [
      "damping-ratio",
      "viscous-shear-damper",
    ],
    problemTypes: [
      "Dry friction vibration",
      "Equivalent viscous damping",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "coulomb-eom-equivalent-damping-sheet-form",
    title: "Coulomb Damping EOM Approximation (Midterm Sheet Form)",
    topic: "nonviscous-coulomb-damping",
    subtopic: "Equivalent viscous damping",
    chapter: "Ch. 3",
    latex: "m\\ddot{x}+kx\\pm\\mu N\\cong m\\ddot{x}+kx+c_{eq}\\dot{x},\\quad c_{eq}=\\frac{4\\mu N}{\\pi\\omega}",
    explanation:
      "Midterm-sheet EOM approximation for representing Coulomb friction with an equivalent viscous term. The sheet also lists the amplitude-dependent energy-equivalent coefficient separately.",
    variables: [
      { symbol: "c_{eq}", meaning: "Equivalent damping term in the sheet approximation", unit: "see note" },
      { symbol: "\\mu N", meaning: "Coulomb friction force magnitude", unit: "N" },
      { symbol: "\\omega", meaning: "Motion/forcing frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Coulomb friction",
      "Harmonic motion approximation",
      "Use with the notation/normalization of the Midterm sheet derivation",
    ],
    useCases: [
      "Recognizing the EOM approximation used before the Coulomb forced-response amplitude formula",
    ],
    notFor: [
      "Generic viscous damping coefficient calculations where units must be N·s/m without additional normalization",
    ],
    commonMistakes: [
      "Using this sheet form interchangeably with the amplitude-dependent energy-equivalent coefficient without checking notation",
    ],
    relatedFormulaIds: [
      "coulomb-equivalent-damping",
      "coulomb-harmonic-amplitude",
      "coulomb-harmonic-phase",
    ],
    problemTypes: [
      "Dry friction damping",
      "Equivalent viscous damping",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Forced vibration",
    ],
    source: [{ sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "coulomb-harmonic-amplitude",
    title: "Coulomb Damping Harmonic Response Amplitude",
    topic: "nonviscous-coulomb-damping",
    subtopic: "Coulomb damping response",
    chapter: "Ch. 3",
    latex: "X=\\frac{F_0}{k}\\left[\\frac{1-\\left(\\frac{4\\mu N}{\\pi F_0}\\right)^2}{\\left(1-\\frac{\\omega^2}{\\omega_n^2}\\right)^2}\\right]^{1/2}",
    explanation:
      "Approximate steady-state amplitude for a harmonically forced SDOF system with Coulomb damping.",
    variables: [
      { symbol: "X", meaning: "Response amplitude", unit: "m" },
      { symbol: "F_0", meaning: "Force amplitude", unit: "N" },
      { symbol: "\\mu N", meaning: "Friction force magnitude", unit: "N" },
    ],
    assumptions: [
      "Coulomb friction model",
      "Harmonic force",
      "Equivalent energy approach",
    ],
    useCases: [
      "Dry-friction forced vibration amplitude",
    ],
    notFor: [
      "Pure viscous damping",
    ],
    commonMistakes: [
      "Using this when 4μN/(πF₀) exceeds 1",
    ],
    relatedFormulaIds: [
      "coulomb-equivalent-damping",
      "coulomb-harmonic-phase",
    ],
    problemTypes: [
      "Dry friction forced response",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "coulomb-harmonic-phase",
    title: "Coulomb Damping Harmonic Response Phase",
    topic: "nonviscous-coulomb-damping",
    subtopic: "Coulomb damping response",
    chapter: "Ch. 3",
    latex: "\\phi=\\tan^{-1}\\left(\\frac{\\frac{4\\mu N}{\\pi kX}}{1-\\frac{\\omega^2}{\\omega_n^2}}\\right)=\\tan^{-1}\\left(\\frac{\\pm\\frac{4\\mu N}{\\pi F_0}}{\\sqrt{1-\\left(\\frac{4\\mu N}{\\pi F_0}\\right)^2}}\\right)",
    explanation:
      "Approximate phase relation for Coulomb-damped harmonic response.",
    variables: [
      { symbol: "\\phi", meaning: "Phase angle", unit: "rad" },
      { symbol: "X", meaning: "Response amplitude", unit: "m" },
      { symbol: "\\mu N", meaning: "Friction force magnitude", unit: "N" },
    ],
    assumptions: [
      "Coulomb damping",
      "Harmonic steady-state response",
    ],
    useCases: [
      "Dry-friction phase estimation",
    ],
    notFor: [
      "Viscous phase-angle calculations",
    ],
    commonMistakes: [
      "Ignoring sign convention for friction direction",
    ],
    relatedFormulaIds: [
      "coulomb-harmonic-amplitude",
      "coulomb-equivalent-damping",
    ],
    problemTypes: [
      "Dry friction forced response",
    ],
    tags: [
      "SDOF",
      "Damping",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Midterm formula sheet", page: 3 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "fourier-series",
    title: "Fourier Series Representation",
    topic: "general-forcing",
    subtopic: "Fourier series",
    chapter: "Ch. 4-5",
    latex: "F(t)=\\frac{a_0}{2}+\\sum_{j=1}^{\\infty}\\left[a_j\\cos(j\\omega t)+b_j\\sin(j\\omega t)\\right]",
    explanation:
      "Quiz 2 Fourier series convention for periodic forcing.",
    variables: [
      { symbol: "F(t)", meaning: "Periodic forcing", unit: "N" },
      { symbol: "a_0,a_j,b_j", meaning: "Fourier coefficients", unit: "N" },
      { symbol: "\\omega", meaning: "Fundamental frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Periodic forcing",
      "Piecewise continuous forcing",
      "Linear system for superposition",
    ],
    useCases: [
      "Representing non-sinusoidal periodic forcing",
    ],
    notFor: [
      "Non-periodic transient forcing",
    ],
    commonMistakes: [
      "Mixing a₀ and a₀/2 conventions",
    ],
    relatedFormulaIds: [
      "fourier-coefficients",
      "second-order-fourier-response",
    ],
    problemTypes: [
      "Periodic forcing expansion",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "fourier-coefficients",
    title: "Fourier Coefficients (Continuous)",
    topic: "general-forcing",
    subtopic: "Fourier series",
    chapter: "Ch. 4-5",
    latex: "a_j=\\frac{2}{\\tau}\\int_0^\\tau F(t)\\cos(j\\omega t)\\,dt,\\quad b_j=\\frac{2}{\\tau}\\int_0^\\tau F(t)\\sin(j\\omega t)\\,dt",
    explanation:
      "Continuous Fourier coefficient formulas over one period τ.",
    variables: [
      { symbol: "\\tau", meaning: "Period", unit: "s" },
      { symbol: "a_j,b_j", meaning: "Fourier coefficients", unit: "N" },
      { symbol: "j", meaning: "Harmonic index", unit: "—" },
    ],
    assumptions: [
      "F(t) periodic with period τ",
      "ω = 2π/τ",
    ],
    useCases: [
      "Computing harmonic force components",
    ],
    notFor: [
      "Non-periodic forcing",
    ],
    commonMistakes: [
      "Wrong integration interval or coefficient convention",
    ],
    relatedFormulaIds: [
      "fourier-series",
      "discrete-fourier-coefficients",
    ],
    problemTypes: [
      "Fourier coefficient calculation",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "discrete-fourier-coefficients",
    title: "Discrete Fourier Coefficients",
    topic: "general-forcing",
    subtopic: "Discrete Fourier series",
    chapter: "Ch. 4-5",
    latex: "a_0=\\frac{2}{N}\\sum_{i=1}^{N}F_i,\\quad a_j=\\frac{2}{N}\\sum_{i=1}^{N}F_i\\cos\\left(\\frac{2j\\pi t_i}{\\tau}\\right),\\quad b_j=\\frac{2}{N}\\sum_{i=1}^{N}F_i\\sin\\left(\\frac{2j\\pi t_i}{\\tau}\\right)",
    explanation:
      "Discrete Fourier coefficients for N sampled force values over one period.",
    variables: [
      { symbol: "N", meaning: "Number of samples", unit: "—" },
      { symbol: "F_i", meaning: "Sampled force value", unit: "N" },
      { symbol: "t_i", meaning: "Sample time", unit: "s" },
      { symbol: "\\tau", meaning: "Period", unit: "s" },
    ],
    assumptions: [
      "Samples cover one period",
      "Uniform sampling is typically assumed",
    ],
    useCases: [
      "Numerical harmonic analysis of tabulated force data",
    ],
    notFor: [
      "Continuous analytic calculation when integral form is easier",
    ],
    commonMistakes: [
      "Indexing samples inconsistently",
    ],
    relatedFormulaIds: [
      "fourier-series",
      "fourier-coefficients",
      "second-order-fourier-response",
    ],
    problemTypes: [
      "Numerical Fourier analysis",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "first-order-fourier-response",
    title: "First-Order System Fourier Response",
    topic: "general-forcing",
    subtopic: "First-order harmonic response",
    chapter: "Ch. 4-5",
    latex: "c\\dot{x}+k(x-y)=0,\\quad x(t)=\\left[x_0-\\frac{A_0}{a}+\\sum_{j=1}^{\\infty}(X_j\\sin\\phi_j-Y_j\\cos\\phi_j)\\right]e^{-at}+\\frac{A_0}{a}+\\sum_{j=1}^{\\infty}\\left[X_j\\sin(j\\omega t-\\phi_j)+Y_j\\cos(j\\omega t-\\phi_j)\\right]",
    explanation:
      "Quiz 2 first-order response form for periodic excitation represented by Fourier coefficients.",
    variables: [
      { symbol: "a", meaning: "k/c", unit: "1/s" },
      { symbol: "A_j,B_j", meaning: "Scaled Fourier coefficients", unit: "varies" },
      { symbol: "X_j,Y_j", meaning: "Harmonic response amplitudes", unit: "varies" },
    ],
    assumptions: [
      "First-order linear system",
      "Periodic excitation",
      "Fourier representation",
    ],
    useCases: [
      "Periodic response of first-order damper/spring model",
    ],
    notFor: [
      "Second-order mass-spring-damper response",
    ],
    commonMistakes: [
      "Using second-order magnification factors for a first-order model",
    ],
    relatedFormulaIds: [
      "first-order-fourier-definitions",
      "fourier-series",
    ],
    problemTypes: [
      "First-order harmonic response",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "first-order-fourier-definitions",
    title: "First-Order Fourier Response Definitions",
    topic: "general-forcing",
    subtopic: "First-order harmonic response",
    chapter: "Ch. 4-5",
    latex: "a=\\frac{k}{c},\\quad A_0=\\frac{aa_0}{2},\\quad A_j=aa_j,\\quad B_j=ab_j,\\quad X_j=\\frac{A_j}{\\sqrt{a^2+(j\\omega)^2}},\\quad Y_j=\\frac{B_j}{\\sqrt{a^2+(j\\omega)^2}},\\quad \\phi_j=\\tan^{-1}\\left(\\frac{j\\omega}{a}\\right)",
    explanation:
      "Definitions used with the first-order Fourier response expression.",
    variables: [
      { symbol: "a", meaning: "First-order decay rate k/c", unit: "1/s" },
      { symbol: "A_j,B_j", meaning: "Scaled Fourier coefficients", unit: "varies" },
      { symbol: "\\phi_j", meaning: "Harmonic phase angle", unit: "rad" },
    ],
    assumptions: [
      "Same notation as first-order Fourier response",
    ],
    useCases: [
      "Computing each harmonic term in a first-order response",
    ],
    notFor: [
      "Second-order SDOF response",
    ],
    commonMistakes: [
      "Confusing a=k/c with Fourier coefficient a_j",
    ],
    relatedFormulaIds: [
      "first-order-fourier-response",
      "fourier-coefficients",
    ],
    problemTypes: [
      "First-order harmonic response",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "second-order-fourier-response",
    title: "Second-Order SDOF Fourier Response",
    topic: "general-forcing",
    subtopic: "Second-order harmonic response",
    chapter: "Ch. 4-5",
    latex: "x_p(t)=\\frac{a_0}{2k}+\\sum_{j=1}^{\\infty}\\frac{a_j/k}{\\sqrt{(1-j^2r^2)^2+(2\\zeta jr)^2}}\\cos(j\\omega t-\\phi_j)+\\sum_{j=1}^{\\infty}\\frac{b_j/k}{\\sqrt{(1-j^2r^2)^2+(2\\zeta jr)^2}}\\sin(j\\omega t-\\phi_j)",
    explanation:
      "Particular response of a damped second-order SDOF system to a periodic force via Fourier superposition.",
    variables: [
      { symbol: "a_j,b_j", meaning: "Fourier coefficients of force", unit: "N" },
      { symbol: "r", meaning: "Fundamental frequency ratio 2π/(τω_n)", unit: "—" },
      { symbol: "\\phi_j", meaning: "Phase for jth harmonic", unit: "rad" },
    ],
    assumptions: [
      "Linear SDOF",
      "Viscous damping",
      "Periodic forcing",
    ],
    useCases: [
      "Periodic force response by superposition of harmonic responses",
    ],
    notFor: [
      "Nonlinear systems",
    ],
    commonMistakes: [
      "Using r instead of jr inside harmonic terms",
    ],
    relatedFormulaIds: [
      "second-order-fourier-phase",
      "fourier-series",
      "fourier-coefficients",
    ],
    problemTypes: [
      "Second-order harmonic response",
      "Superposition",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "second-order-fourier-phase",
    title: "Second-Order Fourier Harmonic Phase",
    topic: "general-forcing",
    subtopic: "Second-order harmonic response",
    chapter: "Ch. 4-5",
    latex: "\\phi_j=\\tan^{-1}\\left(\\frac{2\\zeta jr}{1-j^2r^2}\\right),\\quad r=\\frac{2\\pi}{\\tau\\omega_n}",
    explanation:
      "Phase angle for the jth harmonic in second-order Fourier response.",
    variables: [
      { symbol: "\\phi_j", meaning: "Phase of jth harmonic", unit: "rad" },
      { symbol: "j", meaning: "Harmonic index", unit: "—" },
      { symbol: "r", meaning: "Fundamental frequency ratio", unit: "—" },
    ],
    assumptions: [
      "Linear damped SDOF",
      "Fourier harmonic response",
    ],
    useCases: [
      "Phase for each Fourier harmonic",
    ],
    notFor: [
      "First-order response phase",
    ],
    commonMistakes: [
      "Forgetting j multiplies r",
    ],
    relatedFormulaIds: [
      "second-order-fourier-response",
    ],
    problemTypes: [
      "Second-order harmonic response",
    ],
    tags: [
      "Fourier",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "impulse-response-undamped",
    title: "Impulse Response Function (Undamped)",
    topic: "impulse-step-response",
    subtopic: "Undamped and underdamped impulse response",
    chapter: "Ch. 5",
    latex: "g(t)=\\frac{1}{m\\omega_n}\\sin(\\omega_n t)",
    explanation:
      "Unit impulse response for an undamped SDOF system.",
    variables: [
      { symbol: "g(t)", meaning: "Impulse response function", unit: "s/kg" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped SDOF",
      "Unit impulse",
      "Causal response for t ≥ 0",
    ],
    useCases: [
      "Duhamel integral with undamped impulse response",
    ],
    notFor: [
      "Damped systems",
    ],
    commonMistakes: [
      "Using g(t) for t < 0",
    ],
    relatedFormulaIds: [
      "duhamel-integral",
      "undamped-step-response",
    ],
    problemTypes: [
      "Impulse response",
      "Convolution",
    ],
    tags: [
      "SDOF",
      "Impulse",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "impulse-response-underdamped",
    title: "Impulse Response Function (Underdamped)",
    topic: "impulse-step-response",
    subtopic: "Undamped and underdamped impulse response",
    chapter: "Ch. 5",
    latex: "g(t)=\\frac{e^{-\\zeta\\omega_n t}}{m\\omega_d}\\sin(\\omega_d t)",
    explanation:
      "Unit impulse response for an underdamped viscously damped SDOF system.",
    variables: [
      { symbol: "g(t)", meaning: "Impulse response function", unit: "s/kg" },
      { symbol: "\\omega_d", meaning: "Damped natural frequency", unit: "rad/s" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: [
      "0 < ζ < 1",
      "Unit impulse",
      "Causal response for t ≥ 0",
    ],
    useCases: [
      "Duhamel integral for damped SDOF response",
    ],
    notFor: [
      "ζ ≥ 1 without modified impulse response",
    ],
    commonMistakes: [
      "Using ω_n in the sine term",
    ],
    relatedFormulaIds: [
      "duhamel-integral",
      "step-response",
    ],
    problemTypes: [
      "Damped impulse response",
    ],
    tags: [
      "SDOF",
      "Impulse",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "duhamel-integral",
    title: "Duhamel Integral",
    topic: "impulse-step-response",
    subtopic: "Duhamel integral",
    chapter: "Ch. 5",
    latex: "x(t)=\\int_0^t F(\\tau)g(t-\\tau)\\,d\\tau=\\int_0^t F(t-\\tau)g(\\tau)\\,d\\tau",
    explanation:
      "Convolution of force history with impulse response for a linear SDOF system.",
    variables: [
      { symbol: "x(t)", meaning: "Response displacement", unit: "m" },
      { symbol: "F(\\tau)", meaning: "Force history", unit: "N" },
      { symbol: "g(t)", meaning: "Impulse response", unit: "s/kg" },
    ],
    assumptions: [
      "Linear system",
      "Known impulse response",
      "Usually rest initial conditions for forced contribution",
    ],
    useCases: [
      "General forcing response",
      "Deriving step response",
    ],
    notFor: [
      "Nonlinear systems",
    ],
    commonMistakes: [
      "Reversing convolution variables incorrectly",
    ],
    relatedFormulaIds: [
      "impulse-response-undamped",
      "impulse-response-underdamped",
      "step-response",
    ],
    problemTypes: [
      "General transient forcing",
    ],
    tags: [
      "SDOF",
      "Impulse",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "step-response",
    title: "Underdamped Step Response",
    topic: "impulse-step-response",
    subtopic: "Step response",
    chapter: "Ch. 5",
    latex: "x(t)=\\frac{F_0}{k}\\left[1-\\frac{e^{-\\zeta\\omega_n t}}{\\sqrt{1-\\zeta^2}}\\cos(\\omega_d t-\\varphi)\\right],\\quad \\varphi=\\tan^{-1}\\left(\\frac{\\zeta}{\\sqrt{1-\\zeta^2}}\\right)",
    explanation:
      "Step response for a suddenly applied constant force F₀ on an underdamped SDOF system.",
    variables: [
      { symbol: "F_0", meaning: "Step force magnitude", unit: "N" },
      { symbol: "k", meaning: "Stiffness", unit: "N/m" },
      { symbol: "\\varphi", meaning: "Phase angle in compact response form", unit: "rad" },
    ],
    assumptions: [
      "Underdamped SDOF",
      "Step force F₀ applied at t = 0",
      "Rest initial conditions for the forced response",
    ],
    useCases: [
      "Suddenly applied constant force",
      "Special Duhamel integral result",
    ],
    notFor: [
      "Harmonic steady-state response",
    ],
    commonMistakes: [
      "Forgetting the static offset F₀/k",
    ],
    relatedFormulaIds: [
      "duhamel-integral",
      "impulse-response-underdamped",
      "undamped-step-response",
    ],
    problemTypes: [
      "Step forcing",
    ],
    tags: [
      "SDOF",
      "Impulse",
      "Forced vibration",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "impulse-momentum-definition",
    title: "Impulse of a Force over a Short Time",
    topic: "impulse-step-response",
    subtopic: "Delta function",
    chapter: "Ch. 5",
    latex: "\\hat{F}=\\int_t^{t+\\Delta t}F(t)\\,dt",
    explanation:
      "Impulse equals the integral of force over a short time interval.",
    variables: [
      { symbol: "\\hat{F}", meaning: "Impulse", unit: "N·s" },
      { symbol: "F(t)", meaning: "Force", unit: "N" },
      { symbol: "\\Delta t", meaning: "Short time interval", unit: "s" },
    ],
    assumptions: [
      "Force acts over short duration",
    ],
    useCases: [
      "Relating finite impulse to initial velocity jump",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "delta-function-properties",
      "impulse-response-undamped",
    ],
    problemTypes: [
      "Impulse loading",
    ],
    tags: [
      "Impulse",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "delta-function-properties",
    title: "Dirac Delta Function Properties",
    topic: "impulse-step-response",
    subtopic: "Delta function",
    chapter: "Ch. 5",
    latex: "\\delta(t-\\tau)=0\\ (t\\ne\\tau),\\quad \\delta(t-\\tau)=\\infty\\ (t=\\tau),\\quad \\int_0^\\infty\\delta(t-\\tau)\\,dt=1,\\quad \\int_0^\\infty\\delta(t-\\tau)F(t)\\,dt=\\hat{F}(\\tau)",
    explanation:
      "Operational properties of the ideal impulse/delta function used in impulse response derivations.",
    variables: [
      { symbol: "\\delta(t-\\tau)", meaning: "Dirac delta centered at τ", unit: "1/s" },
      { symbol: "\\hat{F}(\\tau)", meaning: "Impulse at time τ", unit: "N·s" },
    ],
    assumptions: [
      "Idealized impulse model",
    ],
    useCases: [
      "Impulse response and convolution derivations",
    ],
    notFor: [],
    commonMistakes: [
      "Treating δ as an ordinary finite-valued function",
    ],
    relatedFormulaIds: [
      "duhamel-integral",
      "impulse-momentum-definition",
    ],
    problemTypes: [
      "Delta function",
      "Impulse response",
    ],
    tags: [
      "Impulse",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "undamped-step-response",
    title: "Undamped Step Response",
    topic: "impulse-step-response",
    subtopic: "Step response",
    chapter: "Ch. 5",
    latex: "x(t)=\\frac{F_0}{k}\\left[1-\\cos(\\omega_n t)\\right]",
    explanation:
      "Step response of an undamped SDOF system to a suddenly applied constant force F₀.",
    variables: [
      { symbol: "F_0", meaning: "Step force magnitude", unit: "N" },
      { symbol: "k", meaning: "Stiffness", unit: "N/m" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped SDOF",
      "Step force at t=0",
      "Rest initial conditions",
    ],
    useCases: [
      "Suddenly applied constant force without damping",
    ],
    notFor: [
      "Damped systems",
    ],
    commonMistakes: [
      "Using damped step response when c = 0",
    ],
    relatedFormulaIds: [
      "duhamel-integral",
      "impulse-response-undamped",
      "step-response",
    ],
    problemTypes: [
      "Step forcing",
    ],
    tags: [
      "SDOF",
      "Impulse",
      "Forced vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "base-excitation-duhamel-relative-response",
    title: "Duhamel Integral for Base-Acceleration Relative Response",
    topic: "impulse-step-response",
    subtopic: "Duhamel integral",
    chapter: "Ch. 5",
    latex: "z(t)=-\\frac{1}{\\omega_d}\\int_0^t \\ddot{y}(\\tau)e^{-\\zeta\\omega_n(t-\\tau)}\\sin[\\omega_d(t-\\tau)]\\,d\\tau",
    explanation:
      "Relative response to arbitrary base acceleration using the underdamped impulse-response kernel.",
    variables: [
      { symbol: "z(t)", meaning: "Relative displacement", unit: "m" },
      { symbol: "\\ddot{y}(\\tau)", meaning: "Base acceleration history", unit: "m/s²" },
      { symbol: "\\omega_d", meaning: "Damped natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Underdamped SDOF",
      "Base acceleration input",
      "Linear system",
    ],
    useCases: [
      "Arbitrary base-motion transient response",
    ],
    notFor: [
      "Force input directly on mass",
    ],
    commonMistakes: [
      "Missing the negative sign from effective inertia force",
    ],
    relatedFormulaIds: [
      "relative-motion-eom",
      "duhamel-integral",
      "impulse-response-underdamped",
    ],
    problemTypes: [
      "Base excitation transient",
    ],
    tags: [
      "Base excitation",
      "Impulse",
      "Damping",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-matrix-eom",
    title: "Two-DOF Matrix Equations of Motion",
    topic: "two-dof-systems",
    subtopic: "Matrix equations of motion",
    chapter: "Ch. 6",
    latex: "\\begin{bmatrix}m_1&0\\\\0&m_2\\end{bmatrix}\\ddot{\\vec{x}}+\\begin{bmatrix}c_1+c_2&-c_2\\\\-c_2&c_2+c_3\\end{bmatrix}\\dot{\\vec{x}}+\\begin{bmatrix}k_1+k_2&-k_2\\\\-k_2&k_2+k_3\\end{bmatrix}\\vec{x}=\\vec{f}(t)",
    explanation:
      "Matrix EOM for the standard two-mass, three-spring/damper coupled system on the Quiz 2 sheet.",
    variables: [
      { symbol: "[M]", meaning: "Mass matrix", unit: "kg" },
      { symbol: "[C]", meaning: "Damping matrix", unit: "N·s/m" },
      { symbol: "[K]", meaning: "Stiffness matrix", unit: "N/m" },
      { symbol: "\\vec{x}", meaning: "Displacement vector", unit: "m" },
    ],
    assumptions: [
      "Linear 2DOF system",
      "Topology matches the standard coupled system",
    ],
    useCases: [
      "Setting up 2DOF matrix equations",
    ],
    notFor: [
      "Different topology without rebuilding matrices",
    ],
    commonMistakes: [
      "Using these matrices for a different spring/damper layout",
    ],
    relatedFormulaIds: [
      "two-dof-scalar-eom",
      "two-dof-frequency-equation",
      "mode-shape-ratio",
    ],
    problemTypes: [
      "2DOF modeling",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-frequency-equation",
    title: "Two-DOF Frequency Equation (Standard Coupled System)",
    topic: "two-dof-systems",
    subtopic: "Natural frequencies",
    chapter: "Ch. 6",
    latex: "m_1m_2\\omega^4-\\left[(k_1+k_2)m_2+(k_2+k_3)m_1\\right]\\omega^2+\\left[(k_1+k_2)(k_2+k_3)-k_2^2\\right]=0",
    explanation:
      "Characteristic equation for the undamped standard coupled 2DOF system from the Quiz 2 sheet.",
    variables: [
      { symbol: "\\omega", meaning: "Natural frequency", unit: "rad/s" },
      { symbol: "m_1,m_2", meaning: "Masses", unit: "kg" },
      { symbol: "k_1,k_2,k_3", meaning: "Spring stiffnesses", unit: "N/m" },
    ],
    assumptions: [
      "Undamped free vibration",
      "Standard coupled topology",
    ],
    useCases: [
      "Finding natural frequencies for the standard 2DOF system",
    ],
    notFor: [
      "Damped forced response without modal analysis",
    ],
    commonMistakes: [
      "Sign errors in the ω² coefficient",
    ],
    relatedFormulaIds: [
      "two-dof-natural-frequency-roots",
      "mode-shape-ratio",
    ],
    problemTypes: [
      "2DOF natural frequencies",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "mode-shape-ratio",
    title: "Mode Shape Ratios for Standard Two-DOF System",
    topic: "two-dof-systems",
    subtopic: "Mode shape ratios",
    chapter: "Ch. 6",
    latex: "r_1=\\frac{X_2^{(1)}}{X_1^{(1)}}=\\frac{k_2}{-m_2\\omega_1^2+(k_2+k_3)},\\quad r_2=\\frac{X_2^{(2)}}{X_1^{(2)}}=\\frac{k_2}{-m_2\\omega_2^2+(k_2+k_3)}",
    explanation:
      "Mode-shape coordinate ratios for the standard coupled 2DOF system.",
    variables: [
      { symbol: "r_1,r_2", meaning: "Mode shape ratios", unit: "—" },
      { symbol: "\\omega_1,\\omega_2", meaning: "Natural frequencies", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped free vibration",
      "Standard coupled topology",
    ],
    useCases: [
      "Sketching mode shapes",
      "Writing 2DOF free response",
    ],
    notFor: [
      "Different 2DOF topology without deriving ratios",
    ],
    commonMistakes: [
      "Using ω₁ in the second mode or ω₂ in the first mode",
    ],
    relatedFormulaIds: [
      "two-dof-frequency-equation",
      "two-dof-free-response",
    ],
    problemTypes: [
      "Mode shape determination",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-scalar-eom",
    title: "Two-DOF Scalar Equations of Motion",
    topic: "two-dof-systems",
    subtopic: "Matrix equations of motion",
    chapter: "Ch. 6",
    latex: "m_1\\ddot{x}_1+(c_1+c_2)\\dot{x}_1-c_2\\dot{x}_2+(k_1+k_2)x_1-k_2x_2=f_1,\\quad m_2\\ddot{x}_2-c_2\\dot{x}_1+(c_2+c_3)\\dot{x}_2-k_2x_1+(k_2+k_3)x_2=f_2",
    explanation:
      "Scalar coupled equations corresponding to the standard 2DOF matrix system.",
    variables: [
      { symbol: "x_1,x_2", meaning: "Mass displacements", unit: "m" },
      { symbol: "f_1,f_2", meaning: "Applied forces", unit: "N" },
    ],
    assumptions: [
      "Standard coupled 2DOF topology",
      "Linear springs/dampers",
    ],
    useCases: [
      "Deriving/validating the matrix EOM",
    ],
    notFor: [
      "Different topology without rebuilding equations",
    ],
    commonMistakes: [
      "Missing negative coupling terms",
    ],
    relatedFormulaIds: [
      "two-dof-matrix-eom",
    ],
    problemTypes: [
      "2DOF modeling",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-natural-frequency-roots",
    title: "Closed-Form Two-DOF Natural Frequencies",
    topic: "two-dof-systems",
    subtopic: "Natural frequencies",
    chapter: "Ch. 6",
    latex: "\\omega_{1,2}^2=\\frac{1}{2}\\left[\\frac{(k_1+k_2)m_2+(k_2+k_3)m_1}{m_1m_2}\\right]\\pm\\frac{1}{2}\\left[\\left(\\frac{(k_1+k_2)m_2+(k_2+k_3)m_1}{m_1m_2}\\right)^2-4\\left(\\frac{(k_1+k_2)(k_2+k_3)-k_2^2}{m_1m_2}\\right)\\right]^{1/2}",
    explanation:
      "Closed-form roots for ω₁² and ω₂² of the standard undamped 2DOF frequency equation.",
    variables: [
      { symbol: "\\omega_1,\\omega_2", meaning: "Natural frequencies", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped standard 2DOF coupled system",
    ],
    useCases: [
      "Computing modal frequencies from system parameters",
    ],
    notFor: [
      "Nonstandard topology",
    ],
    commonMistakes: [
      "Forgetting the square root applies to ω² roots",
    ],
    relatedFormulaIds: [
      "two-dof-frequency-equation",
      "mode-shape-ratio",
    ],
    problemTypes: [
      "2DOF natural frequencies",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }],
  },
  {
    id: "two-dof-free-response",
    title: "Two-DOF Free Response Superposition",
    topic: "two-dof-systems",
    subtopic: "Free response",
    chapter: "Ch. 6",
    latex: "x_1(t)=X_1^{(1)}\\cos(\\omega_1t+\\phi_1)+X_1^{(2)}\\cos(\\omega_2t+\\phi_2),\\quad x_2(t)=r_1X_1^{(1)}\\cos(\\omega_1t+\\phi_1)+r_2X_1^{(2)}\\cos(\\omega_2t+\\phi_2)",
    explanation:
      "Free response written as a superposition of the two normal modes.",
    variables: [
      { symbol: "X_1^{(1)},X_1^{(2)}", meaning: "Modal amplitudes referenced to coordinate 1", unit: "m" },
      { symbol: "r_1,r_2", meaning: "Mode shape ratios", unit: "—" },
      { symbol: "\\phi_1,\\phi_2", meaning: "Modal phase angles", unit: "rad" },
    ],
    assumptions: [
      "Undamped 2DOF free vibration",
      "Known modal frequencies and ratios",
    ],
    useCases: [
      "Writing x₁(t), x₂(t) after modal solution",
    ],
    notFor: [
      "Forced response without modal superposition",
    ],
    commonMistakes: [
      "Mixing modal ratios between modes",
    ],
    relatedFormulaIds: [
      "mode-shape-ratio",
      "two-dof-modal-initial-condition-constants",
    ],
    problemTypes: [
      "2DOF free response",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-modal-initial-condition-constants",
    title: "Two-DOF Modal Constants from Initial Conditions",
    topic: "two-dof-systems",
    subtopic: "Free response",
    chapter: "Ch. 6",
    latex: "X_1^{(1)}=\\frac{1}{r_2-r_1}\\left[(r_2x_1(0)-x_2(0))^2+\\frac{(-r_2\\dot{x}_1(0)+\\dot{x}_2(0))^2}{\\omega_1^2}\\right]^{1/2},\\quad X_1^{(2)}=\\frac{1}{r_2-r_1}\\left[(-r_1x_1(0)+x_2(0))^2+\\frac{(r_1\\dot{x}_1(0)-\\dot{x}_2(0))^2}{\\omega_2^2}\\right]^{1/2}",
    explanation:
      "Amplitude constants for the standard 2DOF modal free-response form from initial conditions.",
    variables: [
      { symbol: "X_1^{(1)},X_1^{(2)}", meaning: "Modal amplitudes", unit: "m" },
      { symbol: "x_1(0),x_2(0)", meaning: "Initial displacements", unit: "m" },
      { symbol: "\\dot{x}_1(0),\\dot{x}_2(0)", meaning: "Initial velocities", unit: "m/s" },
    ],
    assumptions: [
      "Undamped 2DOF free vibration",
      "Known mode shape ratios",
    ],
    useCases: [
      "Applying initial conditions to modal response",
    ],
    notFor: [
      "Damped coupled systems",
    ],
    commonMistakes: [
      "Using these formulas when r₁ = r₂ or modes are not distinct",
    ],
    relatedFormulaIds: [
      "two-dof-free-response",
      "two-dof-modal-phase-constants",
    ],
    problemTypes: [
      "2DOF initial-condition response",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "two-dof-modal-phase-constants",
    title: "Two-DOF Modal Phase Constants",
    topic: "two-dof-systems",
    subtopic: "Free response",
    chapter: "Ch. 6",
    latex: "\\phi_1=\\tan^{-1}\\left[\\frac{-r_2\\dot{x}_1(0)+\\dot{x}_2(0)}{\\omega_1(r_2x_1(0)-x_2(0))}\\right],\\quad \\phi_2=\\tan^{-1}\\left[\\frac{r_1\\dot{x}_1(0)-\\dot{x}_2(0)}{\\omega_2(-r_1x_1(0)+x_2(0))}\\right]",
    explanation:
      "Phase constants for the standard 2DOF free-response modal expansion.",
    variables: [
      { symbol: "\\phi_1,\\phi_2", meaning: "Modal phase constants", unit: "rad" },
    ],
    assumptions: [
      "Undamped 2DOF free vibration",
      "Known modal ratios and initial conditions",
    ],
    useCases: [
      "Completing the 2DOF free-response solution",
    ],
    notFor: [
      "Damped coupled systems",
    ],
    commonMistakes: [
      "Ignoring quadrant when using inverse tangent",
    ],
    relatedFormulaIds: [
      "two-dof-modal-initial-condition-constants",
      "two-dof-free-response",
    ],
    problemTypes: [
      "2DOF initial-condition response",
    ],
    tags: [
      "Two DOF",
      "Free vibration",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 7 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "lagrange-equations-mdof",
    title: "Lagrange Equations for Multi-DOF Systems",
    topic: "multi-dof-continuous",
    subtopic: "Lagrange equations",
    chapter: "Ch. 7-8",
    latex: "\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{x}_i}\\right)-\\frac{\\partial T}{\\partial x_i}+\\frac{\\partial R}{\\partial \\dot{x}_i}+\\frac{\\partial V}{\\partial x_i}=F_i^{(n)},\\quad i=1,2,\\ldots,n",
    explanation:
      "Generalized Lagrange equation with kinetic energy T, potential energy V, dissipation function R, and nonconservative generalized force.",
    variables: [
      { symbol: "T", meaning: "Kinetic energy", unit: "J" },
      { symbol: "V", meaning: "Potential energy", unit: "J" },
      { symbol: "R", meaning: "Rayleigh dissipation function", unit: "W" },
      { symbol: "F_i^{(n)}", meaning: "Nonconservative generalized force", unit: "N or N·m" },
    ],
    assumptions: [
      "Generalized coordinates are independent",
      "Small vibration linearization may follow after deriving equations",
    ],
    useCases: [
      "Deriving multi-DOF equations of motion from energy expressions",
    ],
    notFor: [
      "Direct plug-and-chug response formulas",
    ],
    commonMistakes: [
      "Sign errors in the potential-energy term",
    ],
    relatedFormulaIds: [
      "mdof-energy-matrix-forms",
      "generalized-force-coordinate",
    ],
    problemTypes: [
      "Lagrange equations",
      "MDOF modeling",
    ],
    tags: [
      "Conceptual",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "mdof-energy-matrix-forms",
    title: "Matrix Energy Forms",
    topic: "multi-dof-continuous",
    subtopic: "Matrix formulation",
    chapter: "Ch. 7-8",
    latex: "T=\\frac{1}{2}\\dot{\\vec{x}}^T[m]\\dot{\\vec{x}},\\quad V=\\frac{1}{2}\\vec{x}^T[k]\\vec{x}",
    explanation:
      "Quadratic kinetic and potential energy expressions for linear multi-DOF systems.",
    variables: [
      { symbol: "[m]", meaning: "Mass matrix", unit: "kg" },
      { symbol: "[k]", meaning: "Stiffness matrix", unit: "N/m" },
      { symbol: "\\vec{x}", meaning: "Displacement vector", unit: "m" },
    ],
    assumptions: [
      "Linearized system",
      "Symmetric mass and stiffness matrices",
    ],
    useCases: [
      "Constructing equations of motion from energy",
      "Checking matrix assembly",
    ],
    notFor: [
      "Nonlinear large-motion energy forms",
    ],
    commonMistakes: [
      "Using non-symmetric matrices for conservative systems without justification",
    ],
    relatedFormulaIds: [
      "lagrange-equations-mdof",
      "eigenvalue-problem-mdof",
    ],
    problemTypes: [
      "Matrix formulation",
      "Energy method",
    ],
    tags: [
      "Conceptual",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "proportional-damping-rayleigh",
    title: "Proportional / Rayleigh Damping",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "[c]=\\alpha[m]+\\beta[k],\\quad \\alpha+\\omega_i^2\\beta=2\\zeta_i\\omega_i",
    explanation:
      "Rayleigh proportional damping model, which allows modal decoupling of damped multi-DOF equations.",
    variables: [
      { symbol: "[c]", meaning: "Damping matrix", unit: "N·s/m" },
      { symbol: "\\alpha,\\beta", meaning: "Mass- and stiffness-proportional damping constants", unit: "various" },
      { symbol: "\\zeta_i", meaning: "Modal damping ratio", unit: "—" },
    ],
    assumptions: [
      "Classical/proportional damping assumption",
      "Known target modal damping ratios if solving for α and β",
    ],
    useCases: [
      "Building a damping matrix compatible with modal analysis",
    ],
    notFor: [
      "Non-proportional damping without complex modal analysis",
    ],
    commonMistakes: [
      "Assuming all damping matrices are proportional",
    ],
    relatedFormulaIds: [
      "modal-damped-equations-proportional",
      "damped-modal-response",
    ],
    problemTypes: [
      "Modal damping",
      "Rayleigh damping",
    ],
    tags: [
      "Damping",
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "modal-damped-equations-proportional",
    title: "Decoupled Modal Equations with Proportional Damping",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "[I]\\ddot{\\vec{q}}(t)+\\left[\\alpha[I]+\\beta[\\omega^2]\\right]\\dot{\\vec{q}}(t)+[\\omega^2]\\vec{q}(t)=\\vec{Q}(t)",
    explanation:
      "Modal-coordinate equation set for a proportionally damped multi-DOF system.",
    variables: [
      { symbol: "[I]", meaning: "Identity matrix", unit: "—" },
      { symbol: "[\\omega^2]", meaning: "Diagonal matrix of modal frequency squares", unit: "rad²/s²" },
      { symbol: "\\vec{q}", meaning: "Modal coordinates", unit: "varies" },
      { symbol: "\\vec{Q}", meaning: "Modal generalized forces", unit: "varies" },
    ],
    assumptions: [
      "Modal coordinates are mass-normalized",
      "Proportional damping",
    ],
    useCases: [
      "Solving damped MDOF response mode by mode",
    ],
    notFor: [
      "Nonclassical damping",
    ],
    commonMistakes: [
      "Forgetting modal normalization assumptions",
    ],
    relatedFormulaIds: [
      "proportional-damping-rayleigh",
      "damped-modal-response",
    ],
    problemTypes: [
      "Modal analysis",
      "Damped MDOF response",
    ],
    tags: [
      "Damping",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "generalized-force-coordinate",
    title: "Generalized Nonconservative Force",
    topic: "multi-dof-continuous",
    subtopic: "Lagrange equations",
    chapter: "Ch. 7-8",
    latex: "\\vec{F}=F_{xk}\\vec{i}+F_{yk}\\vec{j}+F_{zk}\\vec{k},\\quad Q_j^{(n)}=\\sum_k\\left(F_{xk}\\frac{\\partial x_k}{\\partial q_j}+F_{yk}\\frac{\\partial y_k}{\\partial q_j}+F_{zk}\\frac{\\partial z_k}{\\partial q_j}\\right)",
    explanation:
      "Maps physical external forces into generalized forces for use in Lagrange equations.",
    variables: [
      { symbol: "Q_j^{(n)}", meaning: "Nonconservative generalized force", unit: "varies" },
      { symbol: "q_j", meaning: "Generalized coordinate", unit: "varies" },
      { symbol: "F_{xk},F_{yk},F_{zk}", meaning: "Cartesian force components on point k", unit: "N" },
    ],
    assumptions: [
      "Virtual work relation between Cartesian and generalized coordinates",
    ],
    useCases: [
      "Finding generalized forcing terms in energy methods",
    ],
    notFor: [
      "Forces that are already directly generalized",
    ],
    commonMistakes: [
      "Omitting a coordinate dependency in the partial derivative",
    ],
    relatedFormulaIds: [
      "lagrange-equations-mdof",
    ],
    problemTypes: [
      "Generalized forces",
    ],
    tags: [
      "Conceptual",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "eigenvalue-problem-mdof",
    title: "Multi-DOF Eigenvalue Problem",
    topic: "multi-dof-continuous",
    subtopic: "Eigenvalue problem",
    chapter: "Ch. 7-8",
    latex: "\\left([k]-\\omega^2[m]\\right)\\vec{X}=0,\\quad [\\lambda[I]-[D]]\\vec{X}=\\vec{0},\\quad [D]=[k]^{-1}[m]",
    explanation:
      "Eigenvalue formulations for undamped multi-DOF natural frequencies and mode shapes.",
    variables: [
      { symbol: "[m]", meaning: "Mass matrix", unit: "kg" },
      { symbol: "[k]", meaning: "Stiffness matrix", unit: "N/m" },
      { symbol: "\\vec{X}", meaning: "Mode shape vector", unit: "varies" },
      { symbol: "\\lambda", meaning: "Eigenvalue in transformed problem", unit: "varies" },
    ],
    assumptions: [
      "Undamped free vibration",
      "Linear system matrices",
    ],
    useCases: [
      "Finding natural frequencies and mode shapes",
    ],
    notFor: [
      "Damped forced response without modal framework",
    ],
    commonMistakes: [
      "Using singular stiffness matrix without checking constraints",
    ],
    relatedFormulaIds: [
      "modal-expansion-theorem",
      "rayleigh-quotient",
    ],
    problemTypes: [
      "Eigenvalue problem",
      "Modal analysis",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "modal-expansion-theorem",
    title: "Modal Expansion Theorem",
    topic: "multi-dof-continuous",
    subtopic: "Expansion theorem",
    chapter: "Ch. 7-8",
    latex: "\\vec{x}(t)=\\sum_{i=1}^{n}c_i\\vec{X}^{(i)},\\quad c_i=\\frac{\\vec{X}^{(i)T}[m]\\vec{x}(t)}{\\vec{X}^{(i)T}[m]\\vec{X}^{(i)}}=\\frac{\\vec{X}^{(i)T}[m]\\vec{x}(t)}{M_{ii}}",
    explanation:
      "Expansion of a displacement vector in terms of mode shapes with mass-orthogonality projection.",
    variables: [
      { symbol: "c_i", meaning: "Modal expansion coefficient", unit: "varies" },
      { symbol: "\\vec{X}^{(i)}", meaning: "i-th mode shape", unit: "varies" },
      { symbol: "M_{ii}", meaning: "Modal mass", unit: "kg or normalized" },
    ],
    assumptions: [
      "Mode shapes form an orthogonal basis under [m]",
      "Linear undamped modal basis",
    ],
    useCases: [
      "Projecting physical displacement onto modal coordinates",
    ],
    notFor: [
      "Nonlinear response bases without modal orthogonality",
    ],
    commonMistakes: [
      "Using ordinary dot products instead of mass-weighted products",
    ],
    relatedFormulaIds: [
      "modal-transform",
      "eigenvalue-problem-mdof",
    ],
    problemTypes: [
      "Modal analysis",
      "Expansion theorem",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "mass-normalized-modal-coefficients",
    title: "Mass-Normalized Modal Coefficients",
    topic: "multi-dof-continuous",
    subtopic: "Expansion theorem",
    chapter: "Ch. 7-8",
    latex: "c_i=\\vec{X}^{(i)T}[m]\\vec{x}(t),\\quad i=1,2,\\ldots,n",
    explanation:
      "Simplified modal coefficient formula when eigenvectors are mass-normalized.",
    variables: [
      { symbol: "c_i", meaning: "Modal coefficient", unit: "varies" },
      { symbol: "\\vec{X}^{(i)}", meaning: "Mass-normalized mode shape", unit: "varies" },
    ],
    assumptions: [
      "Mass-normalized eigenvectors",
      "XᵀmX = 1 for each mode",
    ],
    useCases: [
      "Quick projection onto normalized modal coordinates",
    ],
    notFor: [
      "Unnormalized mode shapes",
    ],
    commonMistakes: [
      "Using this formula when modal mass is not 1",
    ],
    relatedFormulaIds: [
      "modal-expansion-theorem",
    ],
    problemTypes: [
      "Modal analysis",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "modal-transform",
    title: "Modal Coordinate Transformation",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "\\vec{x}(t)=[X]\\vec{q}(t)",
    explanation:
      "Transforms modal coordinates q(t) into physical coordinates x(t).",
    variables: [
      { symbol: "[X]", meaning: "Modal matrix with mode shapes as columns", unit: "varies" },
      { symbol: "\\vec{q}", meaning: "Modal coordinate vector", unit: "varies" },
      { symbol: "\\vec{x}", meaning: "Physical coordinate vector", unit: "m" },
    ],
    assumptions: [
      "Linear modal basis",
      "Mode shapes assembled consistently",
    ],
    useCases: [
      "Converting between physical and modal coordinates",
    ],
    notFor: [],
    commonMistakes: [
      "Mixing row/column convention for mode shape matrix",
    ],
    relatedFormulaIds: [
      "modal-expansion-theorem",
      "undamped-modal-response",
      "damped-modal-response",
    ],
    problemTypes: [
      "Modal analysis",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "undamped-modal-response",
    title: "Undamped Modal Response with Duhamel Integral",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "\\ddot{q}_i(t)+\\omega_i^2q_i(t)=Q_i(t),\\quad q_i(t)=q_i(0)\\cos\\omega_i t+\\frac{\\dot{q}_i(0)}{\\omega_i}\\sin\\omega_i t+\\frac{1}{\\omega_i}\\int_0^t Q_i(\\tau)\\sin\\omega_i(t-\\tau)\\,d\\tau",
    explanation:
      "Decoupled modal response for an undamped multi-DOF system with modal forcing.",
    variables: [
      { symbol: "q_i", meaning: "i-th modal coordinate", unit: "varies" },
      { symbol: "Q_i", meaning: "i-th modal force", unit: "varies" },
      { symbol: "\\omega_i", meaning: "i-th natural frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Undamped system",
      "Modal coordinates are decoupled",
    ],
    useCases: [
      "Solving each undamped mode independently",
    ],
    notFor: [
      "Damped modal equations",
    ],
    commonMistakes: [
      "Forgetting the modal force Q_i rather than physical force F_i",
    ],
    relatedFormulaIds: [
      "modal-transform",
      "damped-modal-response",
    ],
    problemTypes: [
      "Modal response",
      "Duhamel integral",
    ],
    tags: [
      "Two DOF",
      "Impulse",
      "Forced vibration",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "damped-modal-response",
    title: "Underdamped Modal Response",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "\\ddot{q}_i+2\\zeta_i\\omega_i\\dot{q}_i+\\omega_i^2q_i=Q_i(t),\\quad q_i(t)=e^{-\\zeta_i\\omega_i t}\\left[\\cos\\omega_{di}t+\\frac{\\zeta_i}{\\sqrt{1-\\zeta_i^2}}\\sin\\omega_{di}t\\right]q_i(0)+\\frac{e^{-\\zeta_i\\omega_i t}\\sin\\omega_{di}t}{\\omega_{di}}\\dot{q}_i(0)+\\frac{1}{\\omega_{di}}\\int_0^t Q_i(\\tau)e^{-\\zeta_i\\omega_i(t-\\tau)}\\sin\\omega_{di}(t-\\tau)\\,d\\tau",
    explanation:
      "Decoupled underdamped modal response including initial conditions and modal forcing convolution.",
    variables: [
      { symbol: "q_i", meaning: "i-th modal coordinate", unit: "varies" },
      { symbol: "\\zeta_i", meaning: "i-th modal damping ratio", unit: "—" },
      { symbol: "\\omega_{di}", meaning: "i-th damped modal frequency", unit: "rad/s" },
      { symbol: "Q_i", meaning: "Modal generalized force", unit: "varies" },
    ],
    assumptions: [
      "Proportional damping or otherwise decoupled modal equations",
      "ζ_i < 1",
    ],
    useCases: [
      "Solving damped MDOF response mode by mode",
    ],
    notFor: [
      "Non-proportional damping",
    ],
    commonMistakes: [
      "Using physical force instead of modal force",
    ],
    relatedFormulaIds: [
      "modal-damped-frequency",
      "modal-damped-equations-proportional",
    ],
    problemTypes: [
      "Modal response",
      "Damped MDOF response",
    ],
    tags: [
      "Damping",
      "Impulse",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "modal-damped-frequency",
    title: "Damped Modal Frequency",
    topic: "multi-dof-continuous",
    subtopic: "Modal analysis",
    chapter: "Ch. 7-8",
    latex: "\\omega_{di}=\\omega_i\\sqrt{1-\\\\zeta_i^2}",
    explanation:
      "Damped natural frequency of the i-th mode.",
    variables: [
      { symbol: "\\omega_{di}", meaning: "Damped modal frequency", unit: "rad/s" },
      { symbol: "\\omega_i", meaning: "Undamped modal natural frequency", unit: "rad/s" },
      { symbol: "\\zeta_i", meaning: "Modal damping ratio", unit: "—" },
    ],
    assumptions: [
      "ζ_i < 1",
    ],
    useCases: [
      "Computing underdamped modal response frequency",
    ],
    notFor: [
      "Critically damped or overdamped modal response",
    ],
    commonMistakes: [
      "Using this when ζ_i ≥ 1",
    ],
    relatedFormulaIds: [
      "damped-modal-response",
    ],
    problemTypes: [
      "Modal analysis",
      "Damped response",
    ],
    tags: [
      "Damping",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "influence-coefficients",
    title: "Influence Coefficients",
    topic: "multi-dof-continuous",
    subtopic: "Influence coefficients",
    chapter: "Ch. 7-8",
    latex: "F_i=\\sum_{j=1}^{n}k_{ij}x_j,\\quad x_i=\\sum_{j=1}^{n}x_{ij}=\\sum_{j=1}^{n}a_{ij}F_j",
    explanation:
      "Influence coefficient relations between applied forces and resulting displacements.",
    variables: [
      { symbol: "k_{ij}", meaning: "Stiffness influence coefficient", unit: "N/m" },
      { symbol: "a_{ij}", meaning: "Flexibility influence coefficient", unit: "m/N" },
      { symbol: "F_j", meaning: "Applied force at coordinate j", unit: "N" },
      { symbol: "x_i", meaning: "Displacement at coordinate i", unit: "m" },
    ],
    assumptions: [
      "Linear elastic structure",
      "Small deflection",
    ],
    useCases: [
      "Building stiffness/flexibility matrices",
      "Approximate frequency methods",
    ],
    notFor: [
      "Nonlinear structures",
    ],
    commonMistakes: [
      "Confusing stiffness and flexibility coefficients",
    ],
    relatedFormulaIds: [
      "dunkerley-frequency-estimate",
      "rayleigh-quotient",
    ],
    problemTypes: [
      "Influence coefficients",
      "Approximate methods",
    ],
    tags: [
      "Conceptual",
      "Two DOF",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "dunkerley-frequency-estimate",
    title: "Dunkerley Formula for Fundamental Frequency",
    topic: "multi-dof-continuous",
    subtopic: "Dunkerley formula",
    chapter: "Ch. 7-8",
    latex: "\\frac{1}{\\omega_1^2}\\cong a_{11}m_1+a_{22}m_2+\\cdots+a_{nn}m_n,\\quad \\frac{1}{\\omega_1^2}\\cong\\frac{1}{\\omega_{1n}^2}+\\frac{1}{\\omega_{2n}^2}+\\cdots+\\frac{1}{\\omega_{nn}^2},\\quad \\omega_{in}=\\sqrt{\\frac{1}{a_{ii}m_i}}=\\sqrt{\\frac{k_{ii}}{m_i}}",
    explanation:
      "Dunkerley approximation for estimating the fundamental natural frequency from influence coefficients or individual natural frequencies.",
    variables: [
      { symbol: "\\omega_1", meaning: "Approximate fundamental frequency", unit: "rad/s" },
      { symbol: "a_{ii}", meaning: "Flexibility influence coefficient", unit: "m/N" },
      { symbol: "m_i", meaning: "Lumped mass", unit: "kg" },
      { symbol: "\\omega_{in}", meaning: "Frequency contribution for mass i", unit: "rad/s" },
    ],
    assumptions: [
      "Linear system",
      "Approximate fundamental-mode estimate",
    ],
    useCases: [
      "Quick lower-bound style estimate of first natural frequency",
    ],
    notFor: [
      "Exact modal analysis when high accuracy is required",
    ],
    commonMistakes: [
      "Treating Dunkerley as exact",
    ],
    relatedFormulaIds: [
      "influence-coefficients",
      "rayleigh-quotient",
    ],
    problemTypes: [
      "Approximate methods",
      "Dunkerley formula",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "rayleigh-quotient",
    title: "Rayleigh Quotient",
    topic: "multi-dof-continuous",
    subtopic: "Rayleigh method",
    chapter: "Ch. 7-8",
    latex: "\\omega^2=\\frac{\\vec{X}^T[k]\\vec{X}}{\\vec{X}^T[m]\\vec{X}}=R(\\vec{X})",
    explanation:
      "Rayleigh quotient estimates natural frequency from an assumed mode shape vector.",
    variables: [
      { symbol: "R(\\vec{X})", meaning: "Rayleigh quotient", unit: "rad²/s²" },
      { symbol: "\\vec{X}", meaning: "Assumed mode shape vector", unit: "varies" },
      { symbol: "[k],[m]", meaning: "Stiffness and mass matrices", unit: "various" },
    ],
    assumptions: [
      "Linear undamped system",
      "Assumed mode shape is compatible with constraints",
    ],
    useCases: [
      "Approximate natural frequency calculation",
      "Checking trial shapes",
    ],
    notFor: [
      "Forced response amplitude calculations",
    ],
    commonMistakes: [
      "Using an incompatible assumed shape",
    ],
    relatedFormulaIds: [
      "rayleigh-quotient-modal-expansion",
      "shaft-critical-speed",
    ],
    problemTypes: [
      "Rayleigh method",
      "Approximate methods",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "rayleigh-quotient-modal-expansion",
    title: "Rayleigh Quotient in Modal Coordinates",
    topic: "multi-dof-continuous",
    subtopic: "Rayleigh method",
    chapter: "Ch. 7-8",
    latex: "R(\\vec{X})=\\frac{c_1^2\\omega_1^2\\vec{X}^{(1)T}[m]\\vec{X}^{(1)}+c_2^2\\omega_2^2\\vec{X}^{(2)T}[m]\\vec{X}^{(2)}+\\cdots}{c_1^2\\vec{X}^{(1)T}[m]\\vec{X}^{(1)}+c_2^2\\vec{X}^{(2)T}[m]\\vec{X}^{(2)}+\\cdots}",
    explanation:
      "Rayleigh quotient expressed using exact modal components, showing why an assumed shape close to one mode gives a second-order frequency error.",
    variables: [
      { symbol: "c_i", meaning: "Modal content coefficient", unit: "varies" },
      { symbol: "\\omega_i", meaning: "Exact modal frequency", unit: "rad/s" },
    ],
    assumptions: [
      "Expansion in exact mode shapes",
      "Linear undamped system",
    ],
    useCases: [
      "Understanding Rayleigh method accuracy",
    ],
    notFor: [
      "Direct formula selection for SDOF response",
    ],
    commonMistakes: [],
    relatedFormulaIds: [
      "rayleigh-quotient",
      "mass-normalized-rayleigh-quotient",
    ],
    problemTypes: [
      "Rayleigh method",
      "Approximate methods",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "mass-normalized-rayleigh-quotient",
    title: "Mass-Normalized Rayleigh Quotient",
    topic: "multi-dof-continuous",
    subtopic: "Rayleigh method",
    chapter: "Ch. 7-8",
    latex: "R(\\vec{X})=\\frac{c_1^2\\omega_1^2+c_2^2\\omega_2^2+\\cdots}{c_1^2+c_2^2+\\cdots},\\quad \\left|\\frac{c_i}{c_r}\\right|=\\epsilon_i\\ll1,\\quad R(\\vec{X})=\\omega_r^2\\{1+O(\\epsilon^2)\\}",
    explanation:
      "Mass-normalized form of the Rayleigh quotient and its second-order error property near an exact mode.",
    variables: [
      { symbol: "c_i", meaning: "Modal coefficient", unit: "varies" },
      { symbol: "\\epsilon_i", meaning: "Small modal contamination ratio", unit: "—" },
    ],
    assumptions: [
      "Mass-normalized eigenvectors",
      "Assumed shape close to one exact mode",
    ],
    useCases: [
      "Interpreting Rayleigh method accuracy",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "rayleigh-quotient-modal-expansion",
    ],
    problemTypes: [
      "Rayleigh method",
      "Approximate methods",
    ],
    tags: [
      "Two DOF",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "shaft-critical-speed",
    title: "Shaft Critical Speed Estimate",
    topic: "multi-dof-continuous",
    subtopic: "Rayleigh method",
    chapter: "Ch. 7-8",
    latex: "\\omega\\ \\text{(rpm)}=\\frac{30}{\\pi}\\left(\\frac{g}{\\delta_{st}}\\right)^{1/2}",
    explanation:
      "Course-sheet shaft critical speed estimate from static deflection, expressed in rpm.",
    variables: [
      { symbol: "\\omega", meaning: "Critical speed", unit: "rpm" },
      { symbol: "g", meaning: "Gravitational acceleration", unit: "m/s²" },
      { symbol: "\\delta_{st}", meaning: "Static deflection", unit: "m" },
    ],
    assumptions: [
      "Static deflection method",
      "Small deflection",
      "Consistent units",
    ],
    useCases: [
      "Estimating shaft critical speed from static sag/deflection",
    ],
    notFor: [
      "Detailed rotor dynamics with gyroscopic effects",
    ],
    commonMistakes: [
      "Mixing rad/s and rpm units",
    ],
    relatedFormulaIds: [
      "rayleigh-quotient",
    ],
    problemTypes: [
      "Critical speed",
      "Approximate methods",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Final Exam formula sheet" }],
  },
  {
    id: "equivalent-mass-distributed-member-coefficients",
    title: "Equivalent Mass Coefficients for Common Distributed Members",
    topic: "equivalent-systems",
    subtopic: "Equivalent masses",
    chapter: "Ch. 2",
    latex: "m_{eq} = M + \\frac{m}{3},\\quad m_{eq} = M + \\frac{33}{140}m,\\quad m_{eq} = M + 0.5m",
    explanation:
      "Course-sheet equivalent mass coefficients for common member/mass configurations. The correct coefficient depends on the geometry and assumed deflection shape.",
    variables: [
      { symbol: "m_{eq}", meaning: "Equivalent translational mass", unit: "kg" },
      { symbol: "M", meaning: "Concentrated attached mass", unit: "kg" },
      { symbol: "m", meaning: "Distributed member mass", unit: "kg" },
    ],
    assumptions: [
      "Use the coefficient that matches the course-sheet diagram/geometry",
      "Kinetic-energy equivalence",
    ],
    useCases: [
      "Reducing distributed mass systems to SDOF models",
    ],
    notFor: [
      "Arbitrary geometries without matching the assumed shape",
    ],
    commonMistakes: [
      "Using a coefficient without checking the physical configuration",
    ],
    relatedFormulaIds: [
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent mass",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "rotational-translational-equivalence",
    title: "Rotational-Translational Equivalent Mass and Inertia",
    topic: "equivalent-systems",
    subtopic: "Equivalent masses",
    chapter: "Ch. 2",
    latex: "m_{eq} = m + \\frac{J_0}{R^2},\\quad J_{eq} = J_0 + mR^2",
    explanation:
      "Converts between translational and rotational kinetic-energy descriptions when motion is coupled through a radius R.",
    variables: [
      { symbol: "m_{eq}", meaning: "Equivalent translational mass", unit: "kg" },
      { symbol: "J_{eq}", meaning: "Equivalent rotational inertia", unit: "kg·m²" },
      { symbol: "J_0", meaning: "Base rotational inertia", unit: "kg·m²" },
      { symbol: "R", meaning: "Radius relating translation and rotation", unit: "m" },
    ],
    assumptions: [
      "No slip",
      "Kinetic-energy equivalence",
    ],
    useCases: [
      "Pulley, drum, and rolling-element equivalent systems",
    ],
    notFor: [
      "Systems with slip",
    ],
    commonMistakes: [
      "Multiplying by R² when converting to mass instead of dividing",
    ],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent inertia",
      "Equivalent mass",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "lever-equivalent-masses",
    title: "Lever-Based Equivalent Masses",
    topic: "equivalent-systems",
    subtopic: "Equivalent masses",
    chapter: "Ch. 2",
    latex: "m_{eq1} = m_1 + \\left(\\frac{l_2}{l_1}\\right)^2m_2 + \\left(\\frac{l_3}{l_1}\\right)^2m_3",
    explanation:
      "Equivalent mass referred to coordinate 1 for masses connected through lever-arm displacement ratios.",
    variables: [
      { symbol: "m_{eq1}", meaning: "Equivalent mass referred to coordinate 1", unit: "kg" },
      { symbol: "m_1,m_2,m_3", meaning: "Physical masses", unit: "kg" },
      { symbol: "l_1,l_2,l_3", meaning: "Lever arms or displacement-ratio lengths", unit: "m" },
    ],
    assumptions: [
      "Rigid lever or kinematic constraint",
      "Small motion",
    ],
    useCases: [
      "Reducing linked mass systems to one coordinate",
    ],
    notFor: [
      "Flexible links or independent DOFs",
    ],
    commonMistakes: [
      "Forgetting to square displacement ratios",
    ],
    relatedFormulaIds: [
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent mass",
      "Kinematic reduction",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-solid-disk",
    title: "Mass Moment of Inertia: Solid Disk/Cylinder",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{1}{2}mr^2",
    explanation:
      "Mass moment of inertia of a solid disk/cylinder about its centroidal symmetry axis.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Radius", unit: "m" },
    ],
    assumptions: [
      "Uniform solid disk/cylinder",
      "Axis through centroid along symmetry axis",
    ],
    useCases: [
      "Rotational equivalent inertia calculations",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "rotational-translational-equivalence",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 10 }, { sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-thin-ring",
    title: "Mass Moment of Inertia: Thin Ring",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=mr^2",
    explanation:
      "Mass moment of inertia of a thin ring about its centroidal symmetry axis.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Radius", unit: "m" },
    ],
    assumptions: [
      "Mass concentrated at radius r",
    ],
    useCases: [
      "Rotational equivalent inertia calculations",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "rotational-translational-equivalence",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 10 }, { sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-solid-sphere",
    title: "Mass Moment of Inertia: Solid Sphere",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{2}{5}mr^2",
    explanation:
      "Mass moment of inertia of a uniform solid sphere about a centroidal diameter.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Radius", unit: "m" },
    ],
    assumptions: [
      "Uniform solid sphere",
      "Axis through center",
    ],
    useCases: [
      "Rotational equivalent inertia calculations",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 10 }, { sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-thin-spherical-shell",
    title: "Mass Moment of Inertia: Thin Spherical Shell",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{2}{3}mr^2",
    explanation:
      "Course-sheet moment of inertia form commonly used for a thin spherical shell about a centroidal diameter.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Radius", unit: "m" },
    ],
    assumptions: [
      "Uniform thin spherical shell",
      "Axis through center",
    ],
    useCases: [
      "Rotational equivalent inertia calculations",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "rotational-translational-equivalence",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-slender-rod-end",
    title: "Mass Moment of Inertia: Slender Rod About End",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{1}{3}mr^2",
    explanation:
      "Mass moment of inertia of a slender rod about one end; r represents rod length in the course-sheet notation.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Rod length in sheet notation", unit: "m" },
    ],
    assumptions: [
      "Uniform slender rod",
      "Axis through one end perpendicular to rod",
    ],
    useCases: [
      "Pendulum and rotational SDOF models",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 10 }, { sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-rectangular-plate",
    title: "Mass Moment of Inertia: Rectangular Plate/Form",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{1}{12}m(r_1^2+r_2^2)",
    explanation:
      "Course-sheet rectangular/plate inertia form involving two geometric dimensions r₁ and r₂.",
    variables: [
      { symbol: "r_1,r_2", meaning: "Geometry dimensions", unit: "m" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
    ],
    assumptions: [
      "Uniform body with matching geometry from sheet",
    ],
    useCases: [
      "Equivalent rotational inertia",
    ],
    notFor: [],
    commonMistakes: [
      "Confirm which dimensions correspond to r₁ and r₂ in the course diagram",
    ],
    relatedFormulaIds: [
      "parallel-axis-theorem",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Quiz 2 formula sheet", page: 10 }, { sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "inertia-slender-rod-centroid",
    title: "Mass Moment of Inertia: Slender Rod About Centroid",
    topic: "equivalent-systems",
    subtopic: "Moments of inertia",
    chapter: "Ch. 2",
    latex: "I=\\frac{1}{12}mr^2",
    explanation:
      "Course-sheet moment of inertia form for a slender rod about its centroidal transverse axis; r denotes the rod length in the sheet notation.",
    variables: [
      { symbol: "I", meaning: "Mass moment of inertia", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "r", meaning: "Rod length in sheet notation", unit: "m" },
    ],
    assumptions: [
      "Uniform slender rod",
      "Axis through centroid and perpendicular to rod",
    ],
    useCases: [
      "Rotational equivalent inertia calculations",
      "Using parallel axis theorem to shift to an endpoint",
    ],
    notFor: [],
    commonMistakes: [],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "inertia-slender-rod-end",
    ],
    problemTypes: [
      "Moment of inertia",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "parallel-axis-theorem-inertia-form",
    title: "Parallel Axis Theorem (Inertia Form)",
    topic: "foundations-modeling",
    subtopic: "Parallel axis theorem",
    chapter: "Ch. 2",
    latex: "I_O=I_C+md^2",
    explanation:
      "Midterm-sheet inertia form of the parallel axis theorem for shifting a mass moment of inertia from centroid C to a parallel axis through O.",
    variables: [
      { symbol: "I_O", meaning: "Moment of inertia about shifted axis O", unit: "kg·m²" },
      { symbol: "I_C", meaning: "Moment of inertia about centroidal parallel axis C", unit: "kg·m²" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "d", meaning: "Distance between parallel axes", unit: "m" },
    ],
    assumptions: [
      "Rigid body",
      "Axes are parallel",
    ],
    useCases: [
      "Shifting known centroidal inertia to a pivot or support axis",
    ],
    notFor: [
      "Non-parallel axes",
    ],
    commonMistakes: [
      "Using distance to the wrong axis",
    ],
    relatedFormulaIds: [
      "parallel-axis-theorem",
      "inertia-slender-rod-centroid",
      "inertia-slender-rod-end",
    ],
    problemTypes: [
      "Equivalent inertia",
      "Rigid-body vibration modeling",
    ],
    tags: [
      "Equivalent systems",
      "Conceptual",
    ],
    source: [{ sheet: "Midterm formula sheet", page: 6 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "axial-member-stiffness",
    title: "Axial Member Stiffness",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{EA}{l}",
    explanation:
      "Equivalent axial stiffness of a straight elastic member with area A and length l.",
    variables: [
      { symbol: "E", meaning: "Young’s modulus", unit: "Pa" },
      { symbol: "A", meaning: "Cross-sectional area", unit: "m²" },
      { symbol: "l", meaning: "Member length", unit: "m" },
    ],
    assumptions: [
      "Axial deformation",
      "Linear elastic material",
    ],
    useCases: [
      "Replacing an axially loaded bar with an equivalent spring",
    ],
    notFor: [
      "Bending-dominated deformation",
    ],
    commonMistakes: [
      "Using bending stiffness when deformation is axial",
    ],
    relatedFormulaIds: [
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent stiffness",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "sheet-circular-section-axial-stiffness",
    title: "Course-Sheet Circular Section Axial Stiffness",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{\\pi E D d}{4l}",
    explanation:
      "Course-sheet specialized axial-stiffness form. Use it only for the matching circular/section geometry from the formula sheet.",
    variables: [
      { symbol: "E", meaning: "Young’s modulus", unit: "Pa" },
      { symbol: "D,d", meaning: "Geometry dimensions from the course-sheet diagram", unit: "m" },
      { symbol: "l", meaning: "Length", unit: "m" },
    ],
    assumptions: [
      "Use with the corresponding course-sheet geometry",
    ],
    useCases: [
      "Formula-sheet equivalent stiffness for the matching member",
    ],
    notFor: [
      "Generic rods unless the area expression matches",
    ],
    commonMistakes: [
      "Using D and d without confirming diagram definitions",
    ],
    relatedFormulaIds: [
      "axial-member-stiffness",
    ],
    problemTypes: [
      "Equivalent stiffness",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "helical-spring-stiffness",
    title: "Helical Coil Spring Stiffness",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{Gd^4}{8nD^3}",
    explanation:
      "Equivalent stiffness of a close-coiled helical spring.",
    variables: [
      { symbol: "G", meaning: "Shear modulus", unit: "Pa" },
      { symbol: "d", meaning: "Wire diameter", unit: "m" },
      { symbol: "D", meaning: "Mean coil diameter", unit: "m" },
      { symbol: "n", meaning: "Number of active coils", unit: "—" },
    ],
    assumptions: [
      "Close-coiled spring",
      "Linear elastic behavior",
    ],
    useCases: [
      "Replacing a coil spring with equivalent linear stiffness",
    ],
    notFor: [
      "Nonlinear springs or coil bind",
    ],
    commonMistakes: [
      "Confusing wire diameter d with coil diameter D",
    ],
    relatedFormulaIds: [
      "natural-frequency",
    ],
    problemTypes: [
      "Equivalent spring",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "beam-stiffness-fixed-guided",
    title: "Beam Stiffness: Course-Sheet 192EI/l³ Case",
    topic: "equivalent-systems",
    subtopic: "Beam stiffness equivalents",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{192EI}{l^3}",
    explanation:
      "Course-sheet beam stiffness case with coefficient 192. Use it with the matching boundary/loading diagram from the sheet.",
    variables: [
      { symbol: "E", meaning: "Young’s modulus", unit: "Pa" },
      { symbol: "I", meaning: "Second moment of area", unit: "m⁴" },
      { symbol: "l", meaning: "Beam length", unit: "m" },
    ],
    assumptions: [
      "Euler-Bernoulli beam",
      "Boundary/loading case matching the course-sheet diagram",
    ],
    useCases: [
      "Beam-to-spring equivalent stiffness for the matching case",
    ],
    notFor: [
      "Cantilever or simply supported cases",
    ],
    commonMistakes: [
      "Using 192 for a different boundary condition",
    ],
    relatedFormulaIds: [
      "beam-stiffness-cantilever",
      "beam-stiffness-simply-supported",
    ],
    problemTypes: [
      "Beam equivalent stiffness",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 4 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "hollow-shaft-torsional-stiffness",
    title: "Hollow Circular Shaft Torsional Stiffness",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{\\pi G}{32l}(D^4 - d^4)",
    explanation:
      "Course-sheet torsional stiffness form for a hollow circular shaft.",
    variables: [
      { symbol: "G", meaning: "Shear modulus", unit: "Pa" },
      { symbol: "D,d", meaning: "Outer and inner diameters", unit: "m" },
      { symbol: "l", meaning: "Shaft length", unit: "m" },
    ],
    assumptions: [
      "Circular shaft",
      "Linear elastic torsion",
    ],
    useCases: [
      "Equivalent torsional spring stiffness",
    ],
    notFor: [
      "Translational stiffness unless converted through geometry",
    ],
    commonMistakes: [
      "Using translational units for torsional stiffness",
    ],
    relatedFormulaIds: [
      "rotational-translational-equivalence",
    ],
    problemTypes: [
      "Equivalent stiffness",
      "Torsional vibration",
    ],
    tags: [
      "Equivalent systems",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "viscous-shear-damper",
    title: "Viscous Shear Damper Equivalent",
    topic: "equivalent-systems",
    subtopic: "Equivalent viscous dampers",
    chapter: "Ch. 2",
    latex: "c_{eq} = \\frac{\\mu A}{h}",
    explanation:
      "Equivalent viscous damping coefficient for simple shear flow of a fluid layer between moving surfaces.",
    variables: [
      { symbol: "\\mu", meaning: "Dynamic viscosity", unit: "Pa·s" },
      { symbol: "A", meaning: "Shear area", unit: "m²" },
      { symbol: "h", meaning: "Fluid film thickness", unit: "m" },
    ],
    assumptions: [
      "Laminar Couette-type shear",
      "Linear velocity gradient",
    ],
    useCases: [
      "Modeling fluid dashpots and viscous damping layers",
    ],
    notFor: [
      "Dry friction damping",
    ],
    commonMistakes: [
      "Using k units instead of damping units",
    ],
    relatedFormulaIds: [
      "damping-ratio",
      "coulomb-equivalent-damping",
    ],
    problemTypes: [
      "Equivalent viscous damper",
    ],
    tags: [
      "Equivalent systems",
      "Damping",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "viscous-damper-annular-geometry",
    title: "Viscous Damper: Annular Geometry Equivalent",
    topic: "equivalent-systems",
    subtopic: "Equivalent viscous dampers",
    chapter: "Ch. 2",
    latex: "c_{eq} = \\mu\\frac{3\\pi D^3l}{4d^3}\\left(1 + \\frac{2d}{D}\\right)",
    explanation:
      "Course-sheet equivalent damping expression for a specific annular fluid damper geometry.",
    variables: [
      { symbol: "\\mu", meaning: "Dynamic viscosity", unit: "Pa·s" },
      { symbol: "D,d,l", meaning: "Geometry dimensions from the course-sheet diagram", unit: "m" },
    ],
    assumptions: [
      "Geometry matches the course-sheet damper",
      "Linear viscous fluid behavior",
    ],
    useCases: [
      "Equivalent damping for the matching viscous damper geometry",
    ],
    notFor: [
      "Generic dashpots unless geometry matches",
    ],
    commonMistakes: [
      "Applying a geometry-specific coefficient to a different layout",
    ],
    relatedFormulaIds: [
      "viscous-shear-damper",
      "damping-ratio",
    ],
    problemTypes: [
      "Equivalent viscous damper",
    ],
    tags: [
      "Equivalent systems",
      "Damping",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "viscous-damper-composite-film",
    title: "Viscous Damper: Composite Film Equivalent",
    topic: "equivalent-systems",
    subtopic: "Equivalent viscous dampers",
    chapter: "Ch. 2",
    latex: "c_{eq} = \\frac{\\pi\\mu D^2(l-h)}{2d} + \\frac{\\pi\\mu D^3}{32h}",
    explanation:
      "Course-sheet equivalent damping coefficient for a composite viscous-film damper geometry.",
    variables: [
      { symbol: "\\mu", meaning: "Dynamic viscosity", unit: "Pa·s" },
      { symbol: "D,d,l,h", meaning: "Geometry dimensions from the course-sheet diagram", unit: "m" },
    ],
    assumptions: [
      "Geometry matches the course-sheet damper",
      "Linear viscous fluid behavior",
    ],
    useCases: [
      "Equivalent damping for combined viscous-film effects",
    ],
    notFor: [
      "Dry friction or nonlinear fluid damping",
    ],
    commonMistakes: [
      "Dropping one of the two damping contributions",
    ],
    relatedFormulaIds: [
      "viscous-shear-damper",
      "damping-ratio",
    ],
    problemTypes: [
      "Equivalent viscous damper",
    ],
    tags: [
      "Equivalent systems",
      "Damping",
      "SDOF",
    ],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "springs-series",
    title: "Springs in Series (Equivalent Stiffness)",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = \\frac{k_1 k_2}{k_1 + k_2}",
    explanation:
      "Equivalent stiffness when two springs act in series — same force, displacements add.",
    variables: [
      { symbol: "k_{eq}", meaning: "Equivalent stiffness", unit: "N/m" },
      { symbol: "k_1, k_2", meaning: "Individual spring stiffnesses", unit: "N/m" },
    ],
    assumptions: ["Linear springs", "Same force through both"],
    useCases: ["Modeling compliant connections in series"],
    notFor: ["Parallel spring arrangements"],
    commonMistakes: ["Adding stiffnesses instead of using reciprocal rule"],
    relatedFormulaIds: ["springs-parallel", "natural-frequency"],
    problemTypes: ["Equivalent stiffness"],
    tags: ["Equivalent systems", "SDOF"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "springs-parallel",
    title: "Springs in Parallel (Equivalent Stiffness)",
    topic: "equivalent-systems",
    subtopic: "Equivalent springs",
    chapter: "Ch. 2",
    latex: "k_{eq} = k_1 + k_2 + \cdots + k_n",
    explanation:
      "Equivalent stiffness when springs act in parallel — same displacement, forces add.",
    variables: [
      { symbol: "k_{eq}", meaning: "Equivalent stiffness", unit: "N/m" },
      { symbol: "k_1, k_2", meaning: "Individual spring stiffnesses", unit: "N/m" },
    ],
    assumptions: ["Common displacement", "Linear springs"],
    useCases: ["Multiple supports sharing displacement"],
    notFor: ["Series arrangements"],
    commonMistakes: ["Using series formula for parallel geometry"],
    relatedFormulaIds: ["springs-series", "natural-frequency"],
    problemTypes: ["Equivalent stiffness"],
    tags: ["Equivalent systems", "SDOF"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "beam-stiffness-cantilever",
    title: "Cantilever Beam Tip Stiffness",
    topic: "equivalent-systems",
    subtopic: "Beam stiffness equivalents",
    chapter: "Ch. 2",
    latex: "k = \\frac{3EI}{L^3}",
    explanation:
      "Equivalent spring stiffness at the free end of a cantilever beam with a tip mass (neglecting beam mass).",
    variables: [
      { symbol: "k", meaning: "Tip stiffness", unit: "N/m" },
      { symbol: "E", meaning: "Young's modulus", unit: "Pa" },
      { symbol: "I", meaning: "Second moment of area", unit: "m⁴" },
      { symbol: "L", meaning: "Beam length", unit: "m" },
    ],
    assumptions: ["Euler-Bernoulli beam", "Tip load", "Negligible beam mass"],
    useCases: ["Replacing beam with equivalent spring in SDOF model"],
    notFor: ["Distributed mass significant", "Large deflections"],
    commonMistakes: ["Using simply supported formula instead of cantilever", "Wrong power of L"],
    relatedFormulaIds: ["beam-stiffness-simply-supported", "natural-frequency"],
    problemTypes: ["Beam equivalent stiffness"],
    tags: ["Equivalent systems", "SDOF"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
  {
    id: "beam-stiffness-simply-supported",
    title: "Simply Supported Center Load Stiffness",
    topic: "equivalent-systems",
    subtopic: "Beam stiffness equivalents",
    chapter: "Ch. 2",
    latex: "k = \\frac{48EI}{L^3}",
    explanation:
      "Equivalent stiffness at midspan of a simply supported beam under center point load.",
    variables: [
      { symbol: "k", meaning: "Midspan stiffness", unit: "N/m" },
      { symbol: "E", meaning: "Young's modulus", unit: "Pa" },
      { symbol: "I", meaning: "Second moment of area", unit: "m⁴" },
      { symbol: "L", meaning: "Span length", unit: "m" },
    ],
    assumptions: ["Simply supported ends", "Center point load", "Euler-Bernoulli"],
    useCases: ["Beam-mass spring equivalent systems"],
    notFor: ["Cantilever configurations"],
    commonMistakes: ["Confusing 48EI/L³ with cantilever 3EI/L³"],
    relatedFormulaIds: ["beam-stiffness-cantilever", "natural-frequency"],
    problemTypes: ["Beam equivalent stiffness"],
    tags: ["Equivalent systems", "SDOF"],
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }, { sheet: "Midterm formula sheet", page: 5 }, { sheet: "Final Exam formula sheet" }],
  },
];

export function getFormulaById(id: string): FormulaEntry | undefined {
  return formulas.find((f) => f.id === id);
}

export function getTopicTitle(topicId: string, topics: { id: string; title: string }[]): string {
  return topics.find((t) => t.id === topicId)?.title ?? topicId;
}
