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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 2 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 1 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
  },
  {
    id: "undamped-forced-response",
    title: "Undamped Harmonic Steady-State Response",
    topic: "forced-vibration-sdof",
    subtopic: "Undamped harmonic forcing",
    chapter: "Ch. 4",
    latex: "x(t) = X\\cos(\\omega t - \\phi), \\quad X = \\frac{F_0/k}{1 - r^2}, \\quad r = \\frac{\\omega}{\\omega_n}",
    explanation:
      "Steady-state displacement amplitude for harmonic force F₀ cos(ωt) on an undamped SDOF system.",
    variables: [
      { symbol: "X", meaning: "Steady-state amplitude", unit: "m" },
      { symbol: "F_0", meaning: "Force amplitude", unit: "N" },
      { symbol: "r", meaning: "Frequency ratio ω/ω_n", unit: "—" },
    ],
    assumptions: ["Undamped", "Harmonic forcing", "Steady state reached"],
    useCases: ["Resonance analysis (r → 1)", "Undamped magnification"],
    notFor: ["Transient response", "Damped systems"],
    commonMistakes: ["Using r² in denominator as 1 + r²", "Ignoring phase jump at resonance"],
    relatedFormulaIds: ["magnification-factor-undamped", "phase-angle"],
    problemTypes: ["Harmonic forcing, undamped"],
    tags: ["SDOF", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 2 }],
  },
  {
    id: "magnification-factor-undamped",
    title: "Dynamic Magnification Factor (Undamped)",
    topic: "forced-vibration-sdof",
    subtopic: "Magnification factor",
    chapter: "Ch. 4",
    latex: "M = \\frac{X}{X_{st}} = \\frac{1}{|1 - r^2|}, \\quad X_{st} = \\frac{F_0}{k}",
    explanation:
      "Ratio of dynamic displacement amplitude to static deflection under F₀. Blows up at resonance (r = 1).",
    variables: [
      { symbol: "M", meaning: "Magnification factor", unit: "—" },
      { symbol: "X_{st}", meaning: "Static deflection F₀/k", unit: "m" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
    ],
    assumptions: ["Undamped", "Harmonic forcing", "Steady state"],
    useCases: ["Resonance severity estimation"],
    notFor: ["Damped systems (use damped M)"],
    commonMistakes: ["Forgetting absolute value / sign change below and above resonance"],
    relatedFormulaIds: ["undamped-forced-response", "magnification-factor"],
    problemTypes: ["Resonance problems"],
    tags: ["SDOF", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 2 }],
  },
  {
    id: "damped-forced-amplitude",
    title: "Damped Harmonic Force Response Amplitude",
    topic: "forced-vibration-sdof",
    subtopic: "Viscously damped harmonic forcing",
    chapter: "Ch. 4",
    latex: "X = \\frac{F_0/k}{\\sqrt{(1-r^2)^2 + (2\\zeta r)^2}}",
    explanation:
      "Steady-state displacement amplitude for viscously damped SDOF under harmonic forcing.",
    variables: [
      { symbol: "X", meaning: "Steady-state amplitude", unit: "m" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
    ],
    assumptions: ["Viscous damping", "Harmonic forcing", "Steady state"],
    useCases: ["Practical forced vibration with finite amplitude at resonance"],
    notFor: ["Transient or non-harmonic forcing"],
    commonMistakes: ["Dropping the damping term (2ζr)²", "Using undamped formula when ζ is given"],
    relatedFormulaIds: ["magnification-factor", "phase-angle"],
    problemTypes: ["Damped harmonic response"],
    tags: ["SDOF", "Forced vibration", "Damping"],
    source: [{ sheet: "Midterm formula sheet", page: 3 }],
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
    source: [{ sheet: "Midterm formula sheet", page: 3 }],
  },
  {
    id: "phase-angle",
    title: "Phase Angle (Harmonic Forcing)",
    topic: "forced-vibration-sdof",
    subtopic: "Phase angle",
    chapter: "Ch. 4",
    latex: "\\phi = \\tan^{-1}\\left(\\frac{2\\zeta r}{1 - r^2}\\right)",
    explanation:
      "Phase lag between harmonic force and steady-state displacement response.",
    variables: [
      { symbol: "\\phi", meaning: "Phase angle", unit: "rad" },
      { symbol: "r", meaning: "Frequency ratio", unit: "—" },
      { symbol: "\\zeta", meaning: "Damping ratio", unit: "—" },
    ],
    assumptions: ["Viscous damping", "Harmonic forcing", "Steady state"],
    useCases: ["Determining whether response leads or lags forcing"],
    notFor: ["Free vibration (no phase relative to force)"],
    commonMistakes: [
      "Inverting numerator and denominator",
      "Not accounting for quadrant when r > 1",
    ],
    relatedFormulaIds: ["damped-forced-amplitude", "magnification-factor"],
    problemTypes: ["Phase relationship problems"],
    tags: ["SDOF", "Forced vibration", "Conceptual"],
    source: [{ sheet: "Midterm formula sheet", page: 3 }],
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
    source: [{ sheet: "Midterm formula sheet", page: 4 }],
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
    source: [{ sheet: "Midterm formula sheet", page: 4 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
  },
  {
    id: "fourier-series",
    title: "Fourier Series Representation",
    topic: "general-forcing",
    subtopic: "Fourier series",
    chapter: "Ch. 5",
    latex: "F(t) = a_0 + \\sum_{n=1}^{\\infty}\\left[a_n\\cos(n\\omega t) + b_n\\sin(n\\omega t)\\right]",
    explanation:
      "Expands a periodic forcing function into harmonic components for superposition analysis.",
    variables: [
      { symbol: "F(t)", meaning: "Periodic forcing", unit: "N" },
      { symbol: "\\omega", meaning: "Fundamental frequency", unit: "rad/s" },
      { symbol: "a_n, b_n", meaning: "Fourier coefficients", unit: "N" },
    ],
    assumptions: ["Periodic forcing", "Piecewise continuous", "Linear system"],
    useCases: ["Square wave, sawtooth, and general periodic forcing"],
    notFor: ["Non-periodic transients without frequency-domain methods"],
    commonMistakes: ["Using wrong integration limits (should be one period)"],
    relatedFormulaIds: ["fourier-coefficients", "discrete-fourier-coefficients"],
    problemTypes: ["Periodic forcing expansion"],
    tags: ["Fourier", "Forced vibration", "Conceptual"],
    source: [{ sheet: "Midterm formula sheet", page: 5 }],
  },
  {
    id: "fourier-coefficients",
    title: "Fourier Coefficients (Continuous)",
    topic: "general-forcing",
    subtopic: "Fourier series",
    chapter: "Ch. 5",
    latex: "a_n = \\frac{2}{T}\\int_0^T F(t)\\cos(n\\omega t)\\,dt, \\quad b_n = \\frac{2}{T}\\int_0^T F(t)\\sin(n\\omega t)\\,dt",
    explanation:
      "Integrals over one period T to compute harmonic content of periodic forcing.",
    variables: [
      { symbol: "T", meaning: "Period", unit: "s" },
      { symbol: "a_n, b_n", meaning: "Cosine and sine coefficients", unit: "N" },
    ],
    assumptions: ["Periodic F(t) with period T", "ω = 2π/T"],
    useCases: ["Computing individual harmonic amplitudes"],
    notFor: ["Non-periodic signals"],
    commonMistakes: ["Wrong limits or forgetting 2/T factor"],
    relatedFormulaIds: ["fourier-series", "discrete-fourier-coefficients"],
    problemTypes: ["Fourier coefficient calculation"],
    tags: ["Fourier", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 5 }],
  },
  {
    id: "discrete-fourier-coefficients",
    title: "Discrete Fourier Coefficients",
    topic: "general-forcing",
    subtopic: "Discrete Fourier series",
    chapter: "Ch. 5",
    latex: "a_n = \\frac{2}{N}\\sum_{k=0}^{N-1} F_k \\cos\\!\\left(\\frac{2\\pi n k}{N}\\right), \\quad b_n = \\frac{2}{N}\\sum_{k=0}^{N-1} F_k \\sin\\!\\left(\\frac{2\\pi n k}{N}\\right)",
    explanation:
      "Discrete form of Fourier coefficients when forcing is sampled at N equally spaced points over one period.",
    variables: [
      { symbol: "N", meaning: "Number of samples per period", unit: "—" },
      { symbol: "F_k", meaning: "Sampled forcing values", unit: "N" },
    ],
    assumptions: ["Equally spaced samples over one full period"],
    useCases: ["Numerical harmonic analysis of tabulated forcing data"],
    notFor: ["Continuous analytic functions (use integral form)"],
    commonMistakes: ["Summing over wrong index range", "Non-uniform sampling"],
    relatedFormulaIds: ["fourier-coefficients", "fourier-series"],
    problemTypes: ["Numerical Fourier analysis"],
    tags: ["Fourier", "Forced vibration"],
    source: [{ sheet: "Midterm formula sheet", page: 5 }],
  },
  {
    id: "impulse-response-undamped",
    title: "Impulse Response (Undamped)",
    topic: "impulse-step-response",
    subtopic: "Undamped and underdamped impulse response",
    chapter: "Ch. 5",
    latex: "h(t) = \\frac{1}{m\\omega_n}\\sin(\\omega_n t), \\quad t \\geq 0",
    explanation:
      "Response to a unit impulse (Dirac delta) on an undamped SDOF system. Foundation for Duhamel integral.",
    variables: [
      { symbol: "h(t)", meaning: "Impulse response function", unit: "s/kg" },
      { symbol: "m", meaning: "Mass", unit: "kg" },
      { symbol: "\\omega_n", meaning: "Natural frequency", unit: "rad/s" },
    ],
    assumptions: ["Undamped", "Unit impulse", "Rest initial conditions before impulse"],
    useCases: ["Convolution with arbitrary forcing", "Duhamel integral setup"],
    notFor: ["Damped systems without underdamped form"],
    commonMistakes: ["Missing 1/(mω_n) factor", "Using for t < 0"],
    relatedFormulaIds: ["duhamel-integral", "impulse-response-underdamped"],
    problemTypes: ["Impulse response", "Convolution"],
    tags: ["SDOF", "Impulse", "Forced vibration"],
    source: [{ sheet: "Final exam formula sheet", page: 1 }],
  },
  {
    id: "impulse-response-underdamped",
    title: "Impulse Response (Underdamped)",
    topic: "impulse-step-response",
    subtopic: "Undamped and underdamped impulse response",
    chapter: "Ch. 5",
    latex: "h(t) = \\frac{e^{-\\zeta\\omega_n t}}{m\\omega_d}\\sin(\\omega_d t), \\quad t \\geq 0",
    explanation:
      "Impulse response for viscously damped underdamped SDOF system.",
    variables: [
      { symbol: "h(t)", meaning: "Impulse response", unit: "s/kg" },
      { symbol: "\\omega_d", meaning: "Damped natural frequency", unit: "rad/s" },
    ],
    assumptions: ["0 < ζ < 1", "Unit impulse"],
    useCases: ["General forcing via convolution/Duhamel"],
    notFor: ["ζ ≥ 1 (use respective closed form)"],
    commonMistakes: ["Using ω_n instead of ω_d in sine term"],
    relatedFormulaIds: ["impulse-response-undamped", "duhamel-integral"],
    problemTypes: ["Damped impulse response"],
    tags: ["SDOF", "Impulse", "Damping"],
    source: [{ sheet: "Final exam formula sheet", page: 1 }],
  },
  {
    id: "duhamel-integral",
    title: "Duhamel Integral",
    topic: "impulse-step-response",
    subtopic: "Duhamel integral",
    chapter: "Ch. 5",
    latex: "x(t) = \\int_0^t F(\\tau)\\,h(t - \\tau)\\,d\\tau",
    explanation:
      "Convolution of forcing with impulse response gives total response for arbitrary F(t) on a linear SDOF system.",
    variables: [
      { symbol: "x(t)", meaning: "Displacement response", unit: "m" },
      { symbol: "F(\\tau)", meaning: "Forcing history", unit: "N" },
      { symbol: "h(t)", meaning: "Impulse response", unit: "s/kg" },
    ],
    assumptions: ["Linear system", "Known impulse response", "Rest ICs at t=0"],
    useCases: ["Arbitrary time-varying forcing", "Step and impulse as special cases"],
    notFor: ["Nonlinear systems", "Steady-state harmonic (use phasor method)"],
    commonMistakes: ["Wrong convolution limits", "Using wrong h(t) for damping level"],
    relatedFormulaIds: ["impulse-response-undamped", "step-response"],
    problemTypes: ["General transient forcing"],
    tags: ["SDOF", "Impulse", "Forced vibration"],
    source: [{ sheet: "Final exam formula sheet", page: 2 }],
  },
  {
    id: "step-response",
    title: "Step Response (Unit Step Force)",
    topic: "impulse-step-response",
    subtopic: "Step response",
    chapter: "Ch. 5",
    latex: "x(t) = \\frac{1}{k}\\left[1 - e^{-\\zeta\\omega_n t}\\left(\\cos(\\omega_d t) + \\frac{\\zeta}{\\sqrt{1-\\zeta^2}}\\sin(\\omega_d t)\\right)\\right]",
    explanation:
      "Response to a suddenly applied constant force (unit step). Underdamped form shown.",
    variables: [
      { symbol: "x(t)", meaning: "Displacement", unit: "m" },
      { symbol: "k", meaning: "Stiffness", unit: "N/m" },
    ],
    assumptions: ["Underdamped", "Unit step F(t) = F₀ u(t)", "Rest ICs"],
    useCases: ["Sudden load application", "Special case of Duhamel integral"],
    notFor: ["Harmonic steady state"],
    commonMistakes: ["Using steady-state harmonic formulas", "Forgetting static offset F₀/k"],
    relatedFormulaIds: ["duhamel-integral", "underdamped-free-response"],
    problemTypes: ["Step forcing"],
    tags: ["SDOF", "Impulse", "Forced vibration"],
    source: [{ sheet: "Final exam formula sheet", page: 2 }],
  },
  {
    id: "two-dof-matrix-eom",
    title: "Two-DOF Matrix Equations of Motion",
    topic: "two-dof-systems",
    subtopic: "Matrix equations of motion",
    chapter: "Ch. 6",
    latex: "[M]\\{\\ddot{x}\\} + [C]\\{\\dot{x}\\} + [K]\\{x\\} = \\{F(t)\\}",
    explanation:
      "General matrix form for linear two-degree-of-freedom (or n-DOF) vibration systems.",
    variables: [
      { symbol: "[M]", meaning: "Mass matrix", unit: "kg" },
      { symbol: "[C]", meaning: "Damping matrix", unit: "N·s/m" },
      { symbol: "[K]", meaning: "Stiffness matrix", unit: "N/m" },
      { symbol: "\\{x\\}", meaning: "Displacement vector", unit: "m" },
    ],
    assumptions: ["Linear system", "Two coordinates defined", "Proportional or given damping"],
    useCases: ["Coupled oscillator problems", "Setting up 2-DOF models"],
    notFor: ["SDOF problems"],
    commonMistakes: ["Incorrect coupling terms in [K]", "Dimension mismatch in matrices"],
    relatedFormulaIds: ["two-dof-frequency-equation", "mode-shape-ratio"],
    problemTypes: ["2-DOF modeling"],
    tags: ["Two DOF", "Free vibration", "Conceptual"],
    source: [{ sheet: "Final exam formula sheet", page: 3 }],
  },
  {
    id: "two-dof-frequency-equation",
    title: "Two-DOF Frequency Equation",
    topic: "two-dof-systems",
    subtopic: "Natural frequencies",
    chapter: "Ch. 6",
    latex: "\\det\\left([K] - \\omega^2[M]\\right) = 0",
    explanation:
      "Characteristic equation yielding two natural frequencies ω₁ and ω₂ for undamped free vibration.",
    variables: [
      { symbol: "\\omega", meaning: "Natural frequency", unit: "rad/s" },
      { symbol: "[K]", meaning: "Stiffness matrix", unit: "N/m" },
      { symbol: "[M]", meaning: "Mass matrix", unit: "kg" },
    ],
    assumptions: ["Undamped free vibration", "Proper DOF selection"],
    useCases: ["Finding ω₁, ω₂ and mode shapes"],
    notFor: ["SDOF", "Damped forced response without modal analysis"],
    commonMistakes: ["Sign errors in [K] assembly", "Forgetting ω² factor"],
    relatedFormulaIds: ["two-dof-matrix-eom", "mode-shape-ratio"],
    problemTypes: ["Natural frequency of 2-DOF"],
    tags: ["Two DOF", "Free vibration"],
    source: [{ sheet: "Final exam formula sheet", page: 3 }],
  },
  {
    id: "mode-shape-ratio",
    title: "Mode Shape Ratio",
    topic: "two-dof-systems",
    subtopic: "Mode shape ratios",
    chapter: "Ch. 6",
    latex: "\\frac{X_2}{X_1} = \\frac{k_{12}}{k_{22} - m_2\\omega^2}",
    explanation:
      "Amplitude ratio between coordinates for a given mode at natural frequency ω. Specific form depends on system topology.",
    variables: [
      { symbol: "X_1, X_2", meaning: "Modal amplitudes of DOF 1 and 2", unit: "m" },
      { symbol: "\\omega", meaning: "Mode natural frequency", unit: "rad/s" },
    ],
    assumptions: ["Undamped free vibration", "Harmonic motion at natural frequency"],
    useCases: ["Sketching mode shapes", "Writing free vibration solution"],
    notFor: ["Forced response without modal superposition"],
    commonMistakes: ["Using wrong ω (must be ω₁ or ω₂ for each mode)"],
    relatedFormulaIds: ["two-dof-frequency-equation"],
    problemTypes: ["Mode shape determination"],
    tags: ["Two DOF", "Free vibration", "Conceptual"],
    source: [{ sheet: "Final exam formula sheet", page: 4 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 2 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
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
    source: [{ sheet: "Quiz 1 formula sheet", page: 3 }],
  },
];

export function getFormulaById(id: string): FormulaEntry | undefined {
  return formulas.find((f) => f.id === id);
}

export function getTopicTitle(topicId: string, topics: { id: string; title: string }[]): string {
  return topics.find((t) => t.id === topicId)?.title ?? topicId;
}
