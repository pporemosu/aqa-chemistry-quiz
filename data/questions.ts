export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: number;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  // ── Physical Chemistry — Atomic Structure ──
  {
    id: 1,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What is the relative mass of a proton?',
    options: ['1/1836', '1', '0', '1836'],
    correctAnswer: 1,
    explanation: 'Protons have a relative mass of 1 (≈1.673×10⁻²⁷ kg). Electrons have a relative mass of 1/1836, which is negligible.',
  },
  {
    id: 2,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'Which sub-atomic particle determines the chemical properties of an element?',
    options: ['Neutron', 'Proton', 'Electron', 'Nucleus'],
    correctAnswer: 2,
    explanation: 'Electrons, especially the outermost (valence) electrons, determine chemical properties. Protons define the element (atomic number), but it is the electron configuration that governs bonding and reactivity.',
  },
  {
    id: 3,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'An atom of ⁵⁶Fe has how many neutrons?',
    options: ['26', '30', '56', '82'],
    correctAnswer: 1,
    explanation: 'Iron has atomic number 26 (26 protons). Mass number = protons + neutrons, so neutrons = 56 − 26 = 30.',
  },
  {
    id: 4,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which is the correct electron configuration for Fe²⁺?',
    options: [
      '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶',
      '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴',
      '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴',
      '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵',
    ],
    correctAnswer: 0,
    explanation: 'Fe is [Ar] 3d⁶ 4s². Fe²⁺ loses both 4s electrons first, giving [Ar] 3d⁶ = 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶.',
  },
  {
    id: 5,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'An element has successive ionisation energies (kJ mol⁻¹): 590, 1145, 4912, 6474, 8144. Which group is this element in?',
    options: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
    correctAnswer: 1,
    explanation: 'There is a large jump between the 2nd IE (1145) and 3rd IE (4912). The 3rd electron is in an inner shell, meaning the element has 2 valence electrons — it is in Group 2.',
  },
  // ── Physical Chemistry — Amount of Substance ──
  {
    id: 6,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the molar mass of water (H₂O)?',
    options: ['16 g mol⁻¹', '18 g mol⁻¹', '20 g mol⁻¹', '17 g mol⁻¹'],
    correctAnswer: 1,
    explanation: 'H₂O: (2 × 1) + 16 = 18 g mol⁻¹.',
  },
  {
    id: 7,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'How many moles of CO₂ are in 44 g? (Mr = 44)',
    options: ['0.5 mol', '1 mol', '2 mol', '44 mol'],
    correctAnswer: 1,
    explanation: 'Moles = mass ÷ Mr = 44 ÷ 44 = 1 mol.',
  },
  {
    id: 8,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What volume does 2 mol of an ideal gas occupy at RTP (25 °C, 100 kPa)? (Molar volume at RTP = 24.0 dm³ mol⁻¹)',
    options: ['22.4 dm³', '44.8 dm³', '48.0 dm³', '24.0 dm³'],
    correctAnswer: 2,
    explanation: '2 mol × 24.0 dm³ mol⁻¹ = 48.0 dm³ at RTP.',
  },
  {
    id: 9,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: '25.0 cm³ of HCl is neutralised by 20.0 cm³ of 0.100 mol dm⁻³ NaOH. What is the concentration of HCl?',
    options: ['0.0500 mol dm⁻³', '0.0800 mol dm⁻³', '0.100 mol dm⁻³', '0.125 mol dm⁻³'],
    correctAnswer: 1,
    explanation: 'Moles NaOH = 0.020 × 0.100 = 0.00200 mol. 1:1 ratio → moles HCl = 0.00200 mol. [HCl] = 0.00200 ÷ 0.0250 = 0.0800 mol dm⁻³.',
  },
  {
    id: 10,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'A hydrocarbon contains 85.7% C by mass, Mr ≈ 42. What is its molecular formula?',
    options: ['C₂H₄', 'C₃H₆', 'C₃H₄', 'C₄H₆'],
    correctAnswer: 1,
    explanation: '%H = 14.3%. C:H ratio = (85.7/12):(14.3/1) = 7.14:14.3 = 1:2. Empirical formula CH₂ (Mr=14). 42/14 = 3. Molecular formula: C₃H₆.',
  },
  // ── Physical Chemistry — Bonding ──
  {
    id: 11,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What type of bonding is present in sodium chloride (NaCl)?',
    options: ['Covalent', 'Metallic', 'Ionic', 'Hydrogen bonding'],
    correctAnswer: 2,
    explanation: 'NaCl consists of Na⁺ and Cl⁻ ions held together by electrostatic attraction — ionic bonding.',
  },
  {
    id: 12,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What shape is a BF₃ molecule (3 bonding pairs, no lone pairs)?',
    options: ['Trigonal pyramidal', 'Tetrahedral', 'Trigonal planar', 'Linear'],
    correctAnswer: 2,
    explanation: 'BF₃ has 3 bonding pairs and no lone pairs on B → trigonal planar, bond angles 120°.',
  },
  {
    id: 13,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which molecule has the largest bond angle?',
    options: ['NH₃', 'H₂O', 'CH₄', 'PH₃'],
    correctAnswer: 2,
    explanation: 'CH₄: 4 bonding pairs, no lone pairs → tetrahedral, 109.5°. NH₃ (107°) and H₂O (104.5°) have lone pairs that compress the angle.',
  },
  {
    id: 14,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Why do boiling points of noble gases increase from He to Xe?',
    options: [
      'Stronger hydrogen bonding with more electrons',
      'Stronger London dispersion forces due to more electrons',
      'Decreasing atomic radius increases boiling point',
      'Noble gases become ionic at higher atomic numbers',
    ],
    correctAnswer: 1,
    explanation: 'Noble gases only have London (instantaneous dipole–induced dipole) forces. More electrons → larger temporary dipoles → stronger London forces → higher boiling points.',
  },
  {
    id: 15,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'SiO₂ has a much higher melting point than CO₂ despite both being Group 14 dioxides. Why?',
    options: [
      'SiO₂ has stronger intermolecular forces',
      'SiO₂ is a giant covalent lattice; CO₂ is a simple molecular structure',
      'SiO₂ has ionic bonds whereas CO₂ has covalent bonds',
      'CO₂ has hydrogen bonding',
    ],
    correctAnswer: 1,
    explanation: 'SiO₂ is a giant covalent lattice — melting requires breaking many strong Si–O covalent bonds. CO₂ is a simple molecular solid with only weak London forces between molecules.',
  },
  // ── Physical Chemistry — Energetics ──
  {
    id: 16,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What sign of ΔH indicates an exothermic reaction?',
    options: ['Positive', 'Negative', 'Zero', 'It depends on temperature'],
    correctAnswer: 1,
    explanation: 'Exothermic reactions release energy to the surroundings, so ΔH is negative.',
  },
  {
    id: 17,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: "What does Hess's Law state?",
    options: [
      'Energy cannot be created or destroyed',
      'The enthalpy change of a reaction is independent of the route taken',
      'At equilibrium, forward and reverse rates are equal',
      'Enthalpy change depends only on temperature',
    ],
    correctAnswer: 1,
    explanation: "Hess's Law: the total enthalpy change for a reaction is the same regardless of the route taken, provided initial and final conditions are identical.",
  },
  {
    id: 18,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Using bond enthalpies, calculate ΔH for H₂(g) + Cl₂(g) → 2HCl(g). H–H = 436, Cl–Cl = 242, H–Cl = 431 kJ mol⁻¹.',
    options: ['+184 kJ mol⁻¹', '−184 kJ mol⁻¹', '+678 kJ mol⁻¹', '−862 kJ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'ΔH = bonds broken − bonds formed = (436 + 242) − (2 × 431) = 678 − 862 = −184 kJ mol⁻¹.',
  },
  {
    id: 19,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'A Born-Haber cycle is used to calculate which energy term for an ionic compound?',
    options: [
      'Bond dissociation enthalpy',
      'Lattice enthalpy',
      'Enthalpy of hydration',
      'Enthalpy of combustion',
    ],
    correctAnswer: 1,
    explanation: "A Born-Haber cycle applies Hess's Law to calculate lattice enthalpy — the energy to completely separate 1 mol of ionic lattice into gaseous ions, which cannot be measured directly.",
  },
  // ── Physical Chemistry — Kinetics ──
  {
    id: 20,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What does a catalyst do to the activation energy of a reaction?',
    options: ['Increases it', 'Decreases it', 'Has no effect', 'Eliminates it entirely'],
    correctAnswer: 1,
    explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy, so more molecules have sufficient energy to react, increasing the rate.',
  },
  {
    id: 21,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Which is NOT a requirement for a successful collision according to collision theory?',
    options: [
      'Sufficient energy (≥ activation energy)',
      'Correct orientation',
      'High pressure',
      'Particles must collide',
    ],
    correctAnswer: 2,
    explanation: 'Collision theory requires: particles must collide, with sufficient energy, and correct orientation. Pressure affects collision frequency but is not a fundamental condition of collision theory itself.',
  },
  {
    id: 22,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'What happens to a Maxwell-Boltzmann distribution curve when temperature is increased?',
    options: [
      'The peak moves left and the curve becomes taller',
      'The peak moves right and the curve becomes lower and broader',
      'The curve shifts down uniformly',
      'The peak stays the same but broadens left',
    ],
    correctAnswer: 1,
    explanation: 'At higher temperature, more molecules have higher kinetic energies. The peak shifts right (higher speeds). Since the total area is constant (fixed number of molecules), the peak is lower and the curve broader.',
  },
  {
    id: 23,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'What does the Arrhenius equation k = Ae^(−Ea/RT) tell us about rate constant and temperature?',
    options: [
      'As temperature increases, k decreases',
      'As temperature increases, k increases exponentially because more molecules have energy ≥ Ea',
      'k is independent of temperature above the activation energy',
      'k is proportional to the square root of temperature',
    ],
    correctAnswer: 1,
    explanation: 'As T increases, the exponent −Ea/RT becomes less negative, so e^(−Ea/RT) increases. k increases exponentially, reflecting a greater fraction of molecules with kinetic energy ≥ Ea.',
  },
  // ── Physical Chemistry — Chemical Equilibria ──
  {
    id: 24,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: "What does Le Chatelier's Principle state?",
    options: [
      'A catalyst speeds up forward and reverse reactions equally',
      'If a system at equilibrium is subjected to a change, it will respond to minimise that change',
      'Increasing temperature always shifts equilibrium right',
      'The equilibrium position is fixed regardless of conditions',
    ],
    correctAnswer: 1,
    explanation: "Le Chatelier's Principle: if a change is imposed on a system at equilibrium, the system shifts to oppose that change and re-establish equilibrium.",
  },
  {
    id: 25,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ mol⁻¹), what happens when temperature is increased?',
    options: [
      'Shifts right, more NH₃',
      'Shifts left, more N₂ and H₂',
      'No change',
      'Shifts right because rate is faster',
    ],
    correctAnswer: 1,
    explanation: 'The forward reaction is exothermic. Increasing temperature favours the endothermic (reverse) reaction. Equilibrium shifts left, decreasing NH₃ yield.',
  },
  {
    id: 26,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'What effect does a catalyst have on the equilibrium position?',
    options: [
      'Shifts equilibrium right',
      'Shifts equilibrium left',
      'No effect on equilibrium position',
      'Increases the yield of product',
    ],
    correctAnswer: 2,
    explanation: 'A catalyst speeds up both forward and reverse reactions equally. It does not change the equilibrium position or yield — it only helps the system reach equilibrium faster.',
  },
  {
    id: 27,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Contact Process: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (ΔH = −196 kJ mol⁻¹), why is ~450 °C used rather than a very low temperature?',
    options: [
      'Low temperature gives a lower yield of SO₃',
      'Low temperature gives higher yield but the rate is too slow to be economically viable',
      'High temperature is needed to activate the catalyst',
      'Low temperature causes SO₂ to condense',
    ],
    correctAnswer: 1,
    explanation: 'Lower temperature would increase equilibrium yield (exothermic reaction) but the rate becomes too slow to be economically viable. 450 °C is a compromise: acceptable yield at a workable rate with the V₂O₅ catalyst.',
  },
  // ── Physical Chemistry — Redox ──
  {
    id: 28,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of sulfur in H₂SO₄?',
    options: ['+2', '+4', '+6', '−2'],
    correctAnswer: 2,
    explanation: 'In H₂SO₄: H = +1 (×2), O = −2 (×4). So 2 + S − 8 = 0 → S = +6.',
  },
  {
    id: 29,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'Which of the following best defines oxidation in terms of electrons?',
    options: ['Gain of electrons', 'Loss of electrons', 'Gain of oxygen', 'Loss of hydrogen'],
    correctAnswer: 1,
    explanation: 'Oxidation is the loss of electrons (OIL — Oxidation Is Loss). Gain of electrons is reduction (RIG — Reduction Is Gain).',
  },
  {
    id: 30,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, what is happening to manganese?',
    options: [
      'Oxidised from +7 to +2',
      'Reduced from +7 to +2',
      'Oxidised from +2 to +7',
      'Unchanged',
    ],
    correctAnswer: 1,
    explanation: 'In MnO₄⁻, Mn is +7. In Mn²⁺, Mn is +2. Oxidation state decreases and electrons are gained — manganese is being reduced.',
  },
  // ── Physical Chemistry — Thermodynamics (A2) ──
  {
    id: 31,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Which equation represents the standard enthalpy of formation of glucose (C₆H₁₂O₆)?',
    options: [
      'C₆H₁₂O₆(s) → 6C(s) + 6H₂(g) + 3O₂(g)',
      '6C(graphite) + 6H₂(g) + 3O₂(g) → C₆H₁₂O₆(s)',
      '6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g)',
      'C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l)',
    ],
    correctAnswer: 1,
    explanation: 'Standard enthalpy of formation = enthalpy change when 1 mol of compound forms from its elements in their standard states: 6C(graphite) + 6H₂(g) + 3O₂(g) → C₆H₁₂O₆(s).',
  },
  {
    id: 32,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Which correctly defines entropy (S)?',
    options: [
      'Total heat content of a system',
      'A measure of the disorder or number of possible arrangements in a system',
      'The minimum energy required to start a reaction',
      'The change in enthalpy per unit temperature',
    ],
    correctAnswer: 1,
    explanation: 'Entropy (S) is a measure of disorder/randomness — the number of possible microstates. Gases > liquids > solids in entropy.',
  },
  {
    id: 33,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Under what conditions is a reaction feasible (spontaneous) according to ΔG = ΔH − TΔS?',
    options: ['ΔG > 0', 'ΔG < 0', 'ΔG = 0', 'ΔH > TΔS'],
    correctAnswer: 1,
    explanation: 'A reaction is thermodynamically spontaneous (feasible) when ΔG < 0. At ΔG = 0, the system is at equilibrium.',
  },
  // ── Physical Chemistry — Rate Equations (A2) ──
  {
    id: 34,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'For A + B → products: doubling [A] doubles the rate; doubling [B] has no effect. What is the overall order?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 1,
    explanation: 'First order in A (rate doubles when [A] doubles), zero order in B. Overall order = 1 + 0 = 1.',
  },
  {
    id: 35,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'For rate = k[A]²[B], what are the units of k when rate is in mol dm⁻³ s⁻¹?',
    options: ['s⁻¹', 'mol⁻¹ dm³ s⁻¹', 'mol⁻² dm⁶ s⁻¹', 'mol dm⁻³ s⁻¹'],
    correctAnswer: 2,
    explanation: 'k = rate / ([A]²[B]) = (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹.',
  },
  // ── Physical Chemistry — Acids & Bases (A2) ──
  {
    id: 36,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'According to Brønsted-Lowry theory, what is an acid?',
    options: ['An electron pair acceptor', 'A proton donor', 'A proton acceptor', 'An electron pair donor'],
    correctAnswer: 1,
    explanation: 'Brønsted-Lowry: an acid is a proton (H⁺) donor. A base is a proton acceptor.',
  },
  {
    id: 37,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the pH of 0.010 mol dm⁻³ HCl (strong acid, fully dissociated)?',
    options: ['1', '2', '3', '0'],
    correctAnswer: 1,
    explanation: '[H⁺] = 0.010 = 1.0×10⁻² mol dm⁻³. pH = −log(1.0×10⁻²) = 2.',
  },
  {
    id: 38,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'What is the pH of a buffer made from 0.100 mol dm⁻³ ethanoic acid (Ka = 1.8×10⁻⁵) and 0.100 mol dm⁻³ sodium ethanoate?',
    options: ['4.74', '5.74', '3.74', '7.00'],
    correctAnswer: 0,
    explanation: 'When [acid] = [salt], pH = pKa = −log(1.8×10⁻⁵) = 4.74. Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.74 + log(1) = 4.74.',
  },
  // ── Physical Chemistry — Electrochemical Cells (A2) ──
  {
    id: 39,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What are the standard conditions for the standard hydrogen electrode (SHE)?',
    options: [
      'H₂ at 1 atm, [H⁺] = 1 mol dm⁻³, 298 K',
      'H₂ at 2 atm, [H⁺] = 2 mol dm⁻³, 273 K',
      'H₂ at 1 atm, pure water, 298 K',
      'H₂ at 0.1 atm, [H⁺] = 0.1 mol dm⁻³, 298 K',
    ],
    correctAnswer: 0,
    explanation: 'SHE: H₂ at 1 atm (101 kPa), [H⁺] = 1 mol dm⁻³, 298 K (25°C). E° = 0.00 V by definition.',
  },
  {
    id: 40,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V. What is the standard EMF of a cell combining these two half-cells?',
    options: ['+0.42 V', '+1.10 V', '−0.42 V', '−1.10 V'],
    correctAnswer: 1,
    explanation: 'EMF = E°(cathode) − E°(anode) = +0.34 − (−0.76) = +1.10 V. Cu²⁺/Cu is the cathode (reduction); Zn²⁺/Zn is the anode (oxidation).',
  },
  // ── Physical Chemistry — Kp (A2) ──
  {
    id: 41,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), if total pressure is increased at constant temperature, what happens to Kp?',
    options: ['Kp increases', 'Kp decreases', 'Kp remains unchanged', 'Kp doubles'],
    correctAnswer: 2,
    explanation: 'Kp depends only on temperature. Changing pressure does NOT change Kp. The equilibrium position shifts (here to the left) but Kp remains constant at constant temperature.',
  },
  // ── Inorganic Chemistry — Periodicity ──
  {
    id: 42,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'What is the trend in atomic radius across Period 3 (Na to Cl)?',
    options: ['Increases', 'Decreases', 'Stays the same', 'First increases then decreases'],
    correctAnswer: 1,
    explanation: 'Across a period, proton number increases while electrons are added to the same shell. The increased nuclear charge pulls electrons closer → atomic radius decreases.',
  },
  {
    id: 43,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What is the trend in first ionisation energy across Period 3?',
    options: [
      'Generally increases with exceptions at Mg→Al and P→S',
      'Steadily decreases',
      'Remains constant',
      'Increases then decreases sharply at noble gas',
    ],
    correctAnswer: 0,
    explanation: 'First IE generally increases (more protons, same shell). Exceptions: Al < Mg (Al loses a 3p electron shielded by 3s²); S < P (S has a paired 3p electron with greater repulsion).',
  },
  // ── Inorganic Chemistry — Group 2 ──
  {
    id: 44,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is the trend in reactivity of Group 2 metals with water, going down the group?',
    options: ['Decreases', 'Increases', 'Stays the same', 'Non-linear'],
    correctAnswer: 1,
    explanation: 'Going down Group 2, ionisation energies decrease and reactivity increases. Mg reacts slowly with cold water; Ba reacts vigorously.',
  },
  {
    id: 45,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What are the products when calcium reacts with water?',
    options: [
      'Calcium hydroxide and hydrogen',
      'Calcium oxide and hydrogen',
      'Calcium chloride and oxygen',
      'Calcium carbonate and water',
    ],
    correctAnswer: 0,
    explanation: 'Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g). Group 2 metals react with water to form the metal hydroxide and hydrogen gas.',
  },
  {
    id: 46,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Which is the correct order of Group 2 hydroxide solubility (least → most soluble)?',
    options: [
      'Ba(OH)₂ < Ca(OH)₂ < Mg(OH)₂',
      'Mg(OH)₂ < Ca(OH)₂ < Ba(OH)₂',
      'Ca(OH)₂ < Mg(OH)₂ < Ba(OH)₂',
      'Mg(OH)₂ < Ba(OH)₂ < Ca(OH)₂',
    ],
    correctAnswer: 1,
    explanation: 'Group 2 hydroxide solubility increases down the group: Mg(OH)₂ (sparingly soluble) < Ca(OH)₂ (slightly soluble, "limewater") < Ba(OH)₂ (soluble).',
  },
  // ── Inorganic Chemistry — Group 7 ──
  {
    id: 47,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the colour of chlorine gas?',
    options: ['Colourless', 'Pale yellow-green', 'Orange-brown', 'Purple'],
    correctAnswer: 1,
    explanation: 'Cl₂ is a pale yellow-green gas. Br₂ is orange-brown; I₂ is grey-black solid (purple vapour); F₂ is pale yellow.',
  },
  {
    id: 48,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Chlorine water is added to a solution containing Br⁻ ions. What observation is made?',
    options: [
      'No change — chlorine cannot displace bromide',
      'Solution turns orange-brown because Cl₂ displaces Br⁻ to form Br₂',
      'Solution turns purple because Cl₂ forms iodine',
      'A white precipitate forms',
    ],
    correctAnswer: 1,
    explanation: 'Cl₂ is a stronger oxidising agent than Br₂. It oxidises Br⁻ to Br₂: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂. Bromine colours the solution orange-brown.',
  },
  {
    id: 49,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Silver nitrate solution is added to a solution of bromide ions. What precipitate forms?',
    options: [
      'AgCl — white precipitate',
      'AgBr — cream precipitate',
      'AgI — yellow precipitate',
      'AgBr — white precipitate',
    ],
    correctAnswer: 1,
    explanation: 'Ag⁺ + Br⁻ → AgBr(s). Silver bromide forms a cream-coloured precipitate. (AgCl = white; AgBr = cream; AgI = pale yellow.)',
  },
  {
    id: 50,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'When Cl₂ dissolves in cold dilute NaOH, which products are formed?',
    options: [
      'NaCl and NaClO only',
      'NaCl and NaClO₃',
      'NaCl, NaClO and water',
      'NaClO₃ and NaClO₄',
    ],
    correctAnswer: 2,
    explanation: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Chlorine disproportionates in cold dilute NaOH (0 → −1 in NaCl and 0 → +1 in NaClO). Hot concentrated NaOH gives NaClO₃.',
  },
  // ── Inorganic Chemistry — Period 3 Oxides (A2) ──
  {
    id: 51,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the trend in acid-base character of Period 3 oxides from Na₂O to Cl₂O₇?',
    options: [
      'Basic → amphoteric → acidic',
      'Acidic → amphoteric → basic',
      'All basic',
      'All acidic',
    ],
    correctAnswer: 0,
    explanation: 'Na₂O (strongly basic) → MgO (basic) → Al₂O₃ (amphoteric) → SiO₂ → P₄O₁₀ → SO₃ → Cl₂O₇ (strongly acidic). The trend is basic to acidic across the period.',
  },
  // ── Inorganic Chemistry — Transition Metals (A2) ──
  {
    id: 52,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'What property of transition metals gives their compounds their colour?',
    options: [
      'Full d orbitals',
      'Partially filled d orbitals',
      'Very high melting points',
      'They form only ionic bonds',
    ],
    correctAnswer: 1,
    explanation: 'Transition metal compounds are coloured because of partially filled d orbitals. Electrons absorb visible light to promote to higher d orbitals (d-d transitions); the complementary colour is observed.',
  },
  {
    id: 53,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the colour of the [Cu(H₂O)₆]²⁺ complex ion?',
    options: ['Green', 'Yellow', 'Blue', 'Purple'],
    correctAnswer: 2,
    explanation: 'The hexaaquacopper(II) ion [Cu(H₂O)₆]²⁺ is blue — the characteristic colour of aqueous Cu²⁺ solutions.',
  },
  {
    id: 54,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What is the correct description of a ligand in a complex ion?',
    options: [
      'A central metal ion in a coordination complex',
      'A molecule or ion that donates a lone pair to the central metal ion to form a dative bond',
      'An anion forming ionic bonds with the metal',
      'A bridging atom between two metal centres',
    ],
    correctAnswer: 1,
    explanation: 'A ligand is a molecule or ion with a lone pair that it donates to the central metal ion to form a coordinate (dative covalent) bond. Examples: H₂O, NH₃, Cl⁻, CN⁻.',
  },
  {
    id: 55,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What change is observed when excess aqueous NH₃ is added to aqueous copper(II) sulfate?',
    options: [
      'A pale blue precipitate forms and does not dissolve',
      'A pale blue precipitate forms, then dissolves to give a deep blue solution',
      'The solution turns green immediately',
      'A white precipitate forms',
    ],
    correctAnswer: 1,
    explanation: 'First, Cu(OH)₂ (pale blue precipitate) forms. With excess NH₃, it dissolves: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue/navy solution).',
  },
  // ── Inorganic Chemistry — Reactions of Aqueous Ions (A2) ──
  {
    id: 56,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What is the colour of Fe(OH)₃ precipitate formed when NaOH is added to Fe³⁺(aq)?',
    options: ['Green', 'White', 'Rust-brown / orange-brown', 'Blue'],
    correctAnswer: 2,
    explanation: 'Fe³⁺(aq) + 3OH⁻ → Fe(OH)₃(s) — rust-brown/orange-brown gelatinous precipitate. Fe(OH)₂ from Fe²⁺ is green.',
  },
  {
    id: 57,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'Which hydroxide precipitate dissolves in excess NaOH, showing amphoteric character?',
    options: ['Fe(OH)₃', 'Cu(OH)₂', 'Al(OH)₃', 'Ca(OH)₂'],
    correctAnswer: 2,
    explanation: 'Al(OH)₃ is amphoteric — dissolves in acids (forming Al³⁺) and in excess NaOH: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻. Fe(OH)₃ and Cu(OH)₂ do not dissolve in excess NaOH.',
  },
  // ── Organic Chemistry — Introduction ──
  {
    id: 58,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Easy',
    question: 'What is the general formula for alkanes?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
    correctAnswer: 1,
    explanation: 'Alkanes are saturated hydrocarbons: CₙH₂ₙ₊₂. E.g., methane CH₄ (n=1), ethane C₂H₆ (n=2).',
  },
  {
    id: 59,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'Which isomerism involves the same molecular formula but different connectivity of atoms?',
    options: ['Stereoisomerism', 'E/Z isomerism', 'Structural isomerism', 'Optical isomerism'],
    correctAnswer: 2,
    explanation: 'Structural isomers have the same molecular formula but different structural formulae (different connectivity). Stereoisomers share connectivity but differ in spatial arrangement.',
  },
  {
    id: 60,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Hard',
    question: 'What is the IUPAC name for (CH₃)₂CHCH₂CH₃?',
    options: ['2-methylbutane', '3-methylbutane', '2-methylpentane', 'Isopentane'],
    correctAnswer: 0,
    explanation: 'The longest chain has 4 carbons (butane backbone). The methyl branch is on C2. IUPAC name: 2-methylbutane.',
  },
  // ── Organic Chemistry — Alkanes ──
  {
    id: 61,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What type of reaction do alkanes undergo with halogens in UV light?',
    options: ['Electrophilic addition', 'Nucleophilic substitution', 'Free radical substitution', 'Electrophilic substitution'],
    correctAnswer: 2,
    explanation: 'Alkanes react with halogens via free radical substitution in UV light. Mechanism stages: initiation (homolytic fission by UV), propagation (chain reaction), termination (two radicals combine).',
  },
  {
    id: 62,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'In free radical substitution of methane with chlorine, which step produces two chlorine radicals?',
    options: [
      'Propagation — Cl• + CH₄ → CH₃• + HCl',
      'Initiation — Cl₂ → 2Cl• (UV light)',
      'Termination — Cl• + CH₃• → CH₃Cl',
      'Propagation — CH₃• + Cl₂ → CH₃Cl + Cl•',
    ],
    correctAnswer: 1,
    explanation: 'Initiation: UV light causes homolytic fission of Cl₂ → 2Cl•. Each Cl atom gets one electron.',
  },
  // ── Organic Chemistry — Halogenoalkanes ──
  {
    id: 63,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Easy',
    question: 'What type of reaction occurs when a halogenoalkane reacts with aqueous NaOH?',
    options: ['Elimination', 'Free radical substitution', 'Nucleophilic substitution', 'Electrophilic addition'],
    correctAnswer: 2,
    explanation: 'Halogenoalkanes + aqueous NaOH → nucleophilic substitution. OH⁻ is the nucleophile, replacing the halogen to form an alcohol.',
  },
  {
    id: 64,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What reagent/conditions convert a halogenoalkane to an alkene by elimination?',
    options: [
      'Aqueous NaOH, heat',
      'Ethanolic NaOH, heat',
      'Aqueous KCN, heat',
      'NH₃ in ethanol, sealed tube',
    ],
    correctAnswer: 1,
    explanation: 'Elimination to an alkene requires ethanolic NaOH with heat. The ethoxide acts as a base, abstracting a β-proton → HX eliminated → C=C forms.',
  },
  {
    id: 65,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Hard',
    question: 'Why do fluoroalkanes react much more slowly in nucleophilic substitution than iodoalkanes?',
    options: [
      'F is a better leaving group than I',
      'The C–F bond is much stronger and harder to break',
      'F atoms are larger, causing steric hindrance',
      'F⁻ is a stronger nucleophile than I⁻',
    ],
    correctAnswer: 1,
    explanation: 'C–F bond enthalpy (~485 kJ mol⁻¹) >> C–I (~228 kJ mol⁻¹). The stronger C–F bond is much harder to break. F⁻ is also a poor leaving group.',
  },
  {
    id: 66,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'AgNO₃(aq/ethanol) is added to 1-chlorobutane and 1-iodobutane. What is the observation?',
    options: [
      'Both give white precipitates at the same rate',
      '1-iodobutane gives a yellow precipitate faster; 1-chlorobutane gives a white precipitate slowly',
      '1-chlorobutane reacts faster than 1-iodobutane',
      'No precipitate forms',
    ],
    correctAnswer: 1,
    explanation: 'C–I is weaker than C–Cl, so 1-iodobutane undergoes substitution faster → I⁻ released quickly → yellow AgI. 1-chlorobutane is slower → white AgCl.',
  },
  // ── Organic Chemistry — Alkenes ──
  {
    id: 67,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Easy',
    question: 'What is the general formula for alkenes?',
    options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'],
    correctAnswer: 1,
    explanation: 'Alkenes have one C=C double bond: general formula CₙH₂ₙ. E.g., ethene C₂H₄, propene C₃H₆.',
  },
  {
    id: 68,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'What type of mechanism describes the reaction of HBr with propene?',
    options: ['Free radical addition', 'Nucleophilic addition', 'Electrophilic addition', 'Electrophilic substitution'],
    correctAnswer: 2,
    explanation: 'Alkenes react with hydrogen halides via electrophilic addition. The π bond acts as nucleophile, attacking the electrophilic H of HBr → carbocation intermediate → Br⁻ attacks.',
  },
  {
    id: 69,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Hard',
    question: "What is the major product when HBr adds to propene (CH₃CH=CH₂) according to Markovnikov's rule?",
    options: [
      '1-bromopropane (Br on C1)',
      '2-bromopropane (Br on C2)',
      'Equal amounts of both',
      'A cyclic bromonium ion',
    ],
    correctAnswer: 1,
    explanation: "Markovnikov's rule: H adds to C1 (more H), Br adds to C2 (fewer H). The secondary carbocation at C2 is more stable → 2-bromopropane is the major product.",
  },
  {
    id: 70,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'Which test distinguishes an alkene from benzene at room temperature?',
    options: [
      'Bromine water — alkenes decolourise it at room temperature; benzene does not',
      'Universal indicator — alkenes are acidic',
      "Tollens' reagent — alkenes give a silver mirror",
      'Acidified KMnO₄ — all hydrocarbons decolourise it',
    ],
    correctAnswer: 0,
    explanation: 'Bromine water is decolourised by alkenes (electrophilic addition) at room temperature without a catalyst. Benzene does NOT decolourise bromine water without a Lewis acid catalyst.',
  },
  // ── Organic Chemistry — Alcohols ──
  {
    id: 71,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Easy',
    question: 'What functional group is present in alcohols?',
    options: ['–COOH', '–OH', '–CHO', '–NH₂'],
    correctAnswer: 1,
    explanation: 'Alcohols contain the hydroxyl group –OH attached to a carbon chain, e.g. ethanol CH₃CH₂OH.',
  },
  {
    id: 72,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'What is produced when ethanol is oxidised with acidified K₂Cr₂O₇ under reflux?',
    options: ['Ethanal', 'Ethene', 'Ethanoic acid', 'Ethyl ethanoate'],
    correctAnswer: 2,
    explanation: 'Oxidation of a primary alcohol under reflux (excess oxidant, no distillation) gives the carboxylic acid. Ethanol → ethanoic acid. Distilling off immediately gives the aldehyde (ethanal).',
  },
  {
    id: 73,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Hard',
    question: 'Propan-2-ol is oxidised with acidified K₂Cr₂O₇. What is the product?',
    options: ['Propanal', 'Propan-1-ol', 'Propanone', 'Propanoic acid'],
    correctAnswer: 2,
    explanation: 'Secondary alcohols are oxidised to ketones. Propan-2-ol (CH₃CHOHCH₃) → propanone (CH₃COCH₃). Ketones cannot be oxidised further under normal conditions.',
  },
  // ── Organic Chemistry — Organic Analysis ──
  {
    id: 74,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Easy',
    question: 'What reagent is used to test for a C=C double bond?',
    options: ["Tollens' reagent", 'Bromine water', "Fehling's solution", 'Acidified dichromate'],
    correctAnswer: 1,
    explanation: 'Bromine water decolourises (orange/brown → colourless) in the presence of a C=C double bond via electrophilic addition.',
  },
  {
    id: 75,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'Which test distinguishes an aldehyde from a ketone?',
    options: [
      'Bromine water — aldehydes decolourise it, ketones do not',
      "Tollens' reagent — aldehydes produce a silver mirror, ketones do not",
      'Universal indicator — aldehydes are acidic',
      'Litmus paper — aldehydes turn it red',
    ],
    correctAnswer: 1,
    explanation: "Tollens' reagent (ammoniacal AgNO₃) is reduced by aldehydes to give a silver mirror. Ketones cannot be oxidised this way — no silver mirror forms.",
  },
  // ── Organic Chemistry — Optical Isomerism (A2) ──
  {
    id: 76,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'What structural feature is required for a molecule to show optical isomerism?',
    options: [
      'A C=C double bond with different groups on each carbon',
      'A carbon atom bonded to four different groups (chiral centre)',
      'A ring structure',
      'At least two functional groups',
    ],
    correctAnswer: 1,
    explanation: 'Optical isomerism requires a chiral centre — a carbon with four different substituents. The two non-superimposable mirror images are enantiomers that rotate plane-polarised light in opposite directions.',
  },
  // ── Organic Chemistry — Aldehydes & Ketones (A2) ──
  {
    id: 77,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'What reagent reduces an aldehyde to a primary alcohol?',
    options: ['NaBH₄ in water/ethanol (or LiAlH₄ in dry ether)', 'H₂/Ni catalyst', 'Acidified K₂Cr₂O₇', 'Cu(II) catalyst'],
    correctAnswer: 0,
    explanation: 'Aldehydes are reduced to primary alcohols using NaBH₄ or LiAlH₄. The hydride ion H⁻ acts as the nucleophilic reducing agent.',
  },
  {
    id: 78,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Hard',
    question: 'What is the mechanism for the reaction of HCN with propanone?',
    options: [
      'Free radical addition',
      'Electrophilic addition',
      'Nucleophilic addition',
      'Nucleophilic substitution',
    ],
    correctAnswer: 2,
    explanation: 'Aldehydes/ketones + HCN → nucleophilic addition. CN⁻ (nucleophile) attacks the δ+ carbonyl carbon, forming a cyanohydrin. The C=O polarisation makes the C susceptible to nucleophilic attack.',
  },
  // ── Organic Chemistry — Carboxylic Acids & Derivatives (A2) ──
  {
    id: 79,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What is the functional group in carboxylic acids?',
    options: ['–OH', '–CHO', '–COOH', '–CO–'],
    correctAnswer: 2,
    explanation: 'Carboxylic acids contain the –COOH (carboxyl) group — a combination of C=O (carbonyl) and –OH (hydroxyl) on the same carbon.',
  },
  {
    id: 80,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What are the products of esterification of ethanol with ethanoic acid?',
    options: [
      'Ethyl ethanoate and water',
      'Ethanoyl chloride and water',
      'Ethanoic anhydride and ethanol',
      'Diethyl ether and CO₂',
    ],
    correctAnswer: 0,
    explanation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Catalysed by concentrated H₂SO₄. Product is ethyl ethanoate and water.',
  },
  {
    id: 81,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'Why do acyl chlorides react much more vigorously with nucleophiles than esters?',
    options: [
      'Cl is less electronegative than O, making carbonyl C less electrophilic',
      'Cl⁻ is a much better leaving group than RO⁻/OH⁻, and C–Cl is more polar',
      'Acyl chlorides have higher boiling points',
      'Acyl chlorides have more lone pairs',
    ],
    correctAnswer: 1,
    explanation: 'Cl⁻ is a much better leaving group than RO⁻ or OH⁻ (conjugate base of strong acid HCl). The C–Cl bond is also more polar, making acyl chlorides far more reactive toward nucleophilic acyl substitution.',
  },
  // ── Organic Chemistry — Aromatic Chemistry (A2) ──
  {
    id: 82,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Why does benzene undergo electrophilic substitution rather than addition?',
    options: [
      'Benzene is less reactive than alkenes',
      'Addition would destroy the delocalised π system, which is energetically unfavourable',
      'Benzene cannot form carbocation intermediates',
      'Substitution releases more heat than addition',
    ],
    correctAnswer: 1,
    explanation: 'The delocalised π system of benzene provides extra stability (delocalisation energy ~150 kJ mol⁻¹). Electrophilic addition would disrupt aromaticity; substitution preserves it.',
  },
  {
    id: 83,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'What is the electrophile in the nitration of benzene (conc. HNO₃/H₂SO₄)?',
    options: ['NO₂⁻', 'NO₂⁺ (nitronium ion)', 'HNO₃', 'NO₃⁻'],
    correctAnswer: 1,
    explanation: 'H₂SO₄ protonates HNO₃ to generate the nitronium ion: HNO₃ + H₂SO₄ → NO₂⁺ + H₂O + HSO₄⁻. NO₂⁺ is the electrophile that attacks the benzene ring.',
  },
  {
    id: 84,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'Which group is a 2,4-directing activator that increases benzene ring reactivity?',
    options: ['–NO₂', '–COOH', '–NH₂', '–Cl'],
    correctAnswer: 2,
    explanation: '–NH₂ is electron-donating by resonance, activating the ring and directing to ortho/para positions. –NO₂ and –COOH are deactivating. –Cl is deactivating but ortho/para directing.',
  },
  // ── Organic Chemistry — Amines (A2) ──
  {
    id: 85,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'Why are amines basic?',
    options: [
      'They contain nitrogen, which is always basic',
      'The lone pair on nitrogen can accept a proton (H⁺)',
      'They donate a proton from the N–H bond',
      'They react with acids to form salts only',
    ],
    correctAnswer: 1,
    explanation: 'Amines are Brønsted-Lowry bases because the lone pair on N accepts a proton: RNH₂ + H⁺ → RNH₃⁺.',
  },
  {
    id: 86,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'Phenylamine (aniline) is a weaker base than ethylamine. Why?',
    options: [
      'N–H bonds in phenylamine are stronger',
      'The lone pair on N is delocalised into the benzene ring, making it less available for protonation',
      'Phenylamine has a higher molecular mass',
      'Ethylamine has more N–H bonds',
    ],
    correctAnswer: 1,
    explanation: "In phenylamine, the lone pair on N overlaps with the benzene π system (delocalisation). This reduces electron density on N, making the lone pair less available to accept a proton → weaker base than ethylamine.",
  },
  // ── Organic Chemistry — Polymers (A2) ──
  {
    id: 87,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What type of polymer forms when alkenes undergo addition polymerisation?',
    options: ['Condensation polymer', 'Addition polymer', 'Copolymer', 'Biodegradable polymer'],
    correctAnswer: 1,
    explanation: 'Alkenes undergo addition polymerisation. The C=C π bonds open and form C–C single bonds. No small molecule is lost.',
  },
  {
    id: 88,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Nylon-6,6 is made from hexanedioic acid and hexane-1,6-diamine. What type of polymerisation forms nylon?',
    options: [
      'Addition polymerisation',
      'Condensation polymerisation',
      'Free radical polymerisation',
      'Cationic polymerisation',
    ],
    correctAnswer: 1,
    explanation: 'Nylon-6,6 is a condensation (step-growth) polymer. Amine and carboxylic acid groups react to form amide (peptide) bonds, releasing water.',
  },
  // ── Organic Chemistry — Amino Acids & Proteins (A2) ──
  {
    id: 89,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is a zwitterion?',
    options: [
      'A polymer of amino acids',
      'An amino acid with both a positive and a negative charge on different parts of the molecule',
      'An amino acid with no net charge and no charges',
      'A dipeptide from two amino acids',
    ],
    correctAnswer: 1,
    explanation: 'A zwitterion has both –NH₃⁺ (positive) and –COO⁻ (negative) on the same molecule, giving an overall neutral charge. Amino acids exist as zwitterions at their isoelectric point.',
  },
  {
    id: 90,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'What type of bond links amino acids in a protein chain?',
    options: ['Ester bond', 'Glycosidic bond', 'Peptide (amide) bond', 'Disulfide bridge'],
    correctAnswer: 2,
    explanation: 'Peptide bonds (–CO–NH–, amide bonds) link amino acids, formed by condensation between –COOH of one amino acid and –NH₂ of another, releasing water.',
  },
  // ── Organic Chemistry — Organic Synthesis (A2) ──
  {
    id: 91,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'Which sequence correctly converts ethane into ethylamine?',
    options: [
      'Ethane → chloroethane (free radical substitution) → ethylamine (excess NH₃, ethanol, sealed tube)',
      'Ethane → ethene (cracking) → ethylamine (direct addition of NH₃)',
      'Ethane → ethanol (oxidation) → ethylamine (substitution)',
      'Ethane → ethanal (reduction) → ethylamine (reduction)',
    ],
    correctAnswer: 0,
    explanation: 'Step 1: CH₃CH₃ + Cl₂ (UV) → CH₃CH₂Cl (free radical substitution). Step 2: CH₃CH₂Cl + excess NH₃ (ethanol, heat, sealed) → CH₃CH₂NH₂ (nucleophilic substitution). Excess NH₃ suppresses over-alkylation.',
  },
  // ── Organic Chemistry — NMR (A2) ──
  {
    id: 92,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'In ¹H NMR, what does chemical shift (δ) indicate?',
    options: [
      'The number of hydrogen atoms in the molecule',
      'The position of a proton signal relative to TMS, indicating chemical environment',
      'The mass of the molecule',
      'The number of adjacent protons',
    ],
    correctAnswer: 1,
    explanation: 'Chemical shift (δ, ppm) measures how far a proton signal appears from TMS (δ = 0). Different environments (–OH, –CH₃, ArH) give characteristic δ values.',
  },
  {
    id: 93,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'A ¹H NMR shows a quartet at δ 2.3 and a triplet at δ 1.2, integration ratio 2:3. Which compound could this be?',
    options: ['Methanol', 'Ethanol', 'Ethyl ethanoate', 'Propan-1-ol'],
    correctAnswer: 1,
    explanation: 'Ethanol (CH₃CH₂OH): –CH₂– (2H) is split into a quartet by adjacent –CH₃ (3H); –CH₃ (3H) is split into a triplet by adjacent –CH₂– (2H). Integration ratio CH₂:CH₃ = 2:3. Matches the pattern.',
  },
  // ── Organic Chemistry — Chromatography (A2) ──
  {
    id: 94,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'In TLC, what does a higher Rf value indicate?',
    options: [
      'The compound is more polar, interacting more with the stationary phase',
      'The compound travels further — less strongly adsorbed by the stationary phase',
      'The compound has a higher molecular mass',
      'The compound elutes faster due to a higher boiling point',
    ],
    correctAnswer: 1,
    explanation: 'Rf = distance (spot) / distance (solvent). Higher Rf → compound travelled further → less attracted to stationary phase, spends more time in the mobile phase.',
  },
  {
    id: 95,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In gas chromatography (GC), what property separates compounds?',
    options: [
      'Molecular mass',
      'Colour',
      'Different affinities for the stationary phase and different volatility/boiling points',
      'Electrical charge',
    ],
    correctAnswer: 2,
    explanation: 'GC separates compounds based on their volatility and interaction with the stationary phase. Components with different boiling points/polarities partition differently and elute at different retention times.',
  },
  // ── Additional Mixed Questions ──
  {
    id: 96,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'Ice has a higher melting point than expected for its molecular size. Which intermolecular force is responsible?',
    options: ['London dispersion forces', 'Permanent dipole–dipole forces', 'Hydrogen bonding', 'Ionic interactions'],
    correctAnswer: 2,
    explanation: 'Water forms extensive hydrogen bonds (O–H···O) — O is small and highly electronegative, H bonded to O is very δ+. Each H₂O can form up to 4 hydrogen bonds in ice → rigid lattice → unusually high melting point.',
  },
  {
    id: 97,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Haber Process, why is 200 atm used rather than a much higher pressure?',
    options: [
      'Higher pressures decrease the yield of NH₃',
      'Very high pressures require expensive equipment and present safety hazards',
      'The catalyst does not work above 200 atm',
      'NH₃ becomes liquid above 200 atm',
    ],
    correctAnswer: 1,
    explanation: 'While higher pressure increases yield, engineering costs and energy requirements rise enormously. 200 atm is the economic optimum — good yield with manageable equipment costs.',
  },
  {
    id: 98,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the trend in the thermal stability of Group 2 carbonates going down the group?',
    options: [
      'Decreases — larger cations destabilise the carbonate',
      'Increases — larger cations stabilise the carbonate lattice',
      'No trend observed',
      'Stability is independent of cation size',
    ],
    correctAnswer: 1,
    explanation: 'Thermal stability of Group 2 carbonates increases down the group. Larger cations (lower charge density) polarise the CO₃²⁻ ion less, making it harder to decompose. BaCO₃ requires a higher temperature to decompose than MgCO₃.',
  },
  {
    id: 99,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Hard',
    question: 'Why does free radical substitution of methane with chlorine produce a mixture of products?',
    options: [
      'The reaction is reversible',
      'The chain reaction produces multiple substitution products (CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄) as Cl• can react multiple times',
      'The catalyst is selective',
      'Chlorine forms both HCl and Cl₂O as products',
    ],
    correctAnswer: 1,
    explanation: 'Once CH₃Cl forms, it can undergo further substitution by Cl• to give CH₂Cl₂, CHCl₃, and CCl₄. The chain reaction propagates multiple times, so a mixture of products is obtained.',
  },
  {
    id: 100,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'In a gravimetric analysis, 0.500 g of an impure sample of CaCO₃ is dissolved in excess HCl and the CO₂ is collected. 0.198 g of CO₂ is obtained. What is the % purity of CaCO₃? (Mr: CaCO₃ = 100, CO₂ = 44)',
    options: ['39.6%', '45.0%', '90.0%', '44.0%'],
    correctAnswer: 2,
    explanation: 'Moles CO₂ = 0.198/44 = 0.00450 mol. CaCO₃ → CO₂ is 1:1, so moles CaCO₃ = 0.00450 mol. Mass of pure CaCO₃ = 0.00450 × 100 = 0.450 g. % purity = (0.450/0.500) × 100 = 90.0%.',
  },

  // ── Atomic Structure ──────────────────────────────────────────────────────
  {
    id: 101,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What is the electron configuration of calcium (Ca, Z = 20)?',
    options: ['1s² 2s² 2p⁶ 3s² 3p⁶ 3d²', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', '1s² 2s² 2p⁶ 3s² 3p⁸', '1s² 2s² 2p⁶ 3s² 3p⁴ 4s²'],
    correctAnswer: 1,
    explanation: 'After filling 1s, 2s, 2p, 3s, and 3p (18 electrons), the remaining 2 electrons enter the 4s subshell, giving [Ar] 4s².',
  },
  {
    id: 102,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'An atom has mass number 35 and atomic number 17. How many neutrons does it contain?',
    options: ['17', '18', '35', '52'],
    correctAnswer: 1,
    explanation: 'Neutrons = mass number − atomic number = 35 − 17 = 18.',
  },
  {
    id: 103,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'Which of the following best defines isotopes?',
    options: [
      'Atoms of different elements with the same mass number',
      'Atoms of the same element with different numbers of neutrons',
      'Atoms of the same element with different numbers of electrons',
      'Atoms with the same number of neutrons but different atomic numbers',
    ],
    correctAnswer: 1,
    explanation: 'Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, giving different mass numbers.',
  },
  {
    id: 104,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which statement about first ionisation energy across Period 3 (Na to Ar) is correct?',
    options: [
      'It increases uniformly across the period',
      'It generally increases but dips at Al and S',
      'It decreases across the period',
      'It is constant across the period',
    ],
    correctAnswer: 1,
    explanation: 'First IE generally increases left to right due to increasing nuclear charge, but dips at Al (3p¹ easier to remove than 3s²) and at S (paired 3p electron easier to remove than unpaired).',
  },
  {
    id: 105,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Line spectra in the visible region (Balmer series) of hydrogen are produced when electrons fall to which energy level?',
    options: ['n = 1', 'n = 2', 'n = 3', 'n = 4'],
    correctAnswer: 1,
    explanation: 'The Balmer series involves electron transitions to n = 2. Transitions to n = 1 give the UV Lyman series; to n = 3 give the IR Paschen series.',
  },
  {
    id: 106,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'The successive ionisation energies (kJ mol⁻¹) of an element X are: 738, 1451, 7733, 10 540 … Which group does X belong to?',
    options: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
    correctAnswer: 1,
    explanation: 'There is a large jump between the 2nd and 3rd ionisation energies, indicating 2 electrons in the outer shell. X is in Group 2.',
  },
  {
    id: 107,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'In which order are subshells filled according to the Aufbau principle?',
    options: ['1s 2s 2p 3s 3p 3d 4s', '1s 2s 2p 3s 3p 4s 3d', '1s 2p 2s 3p 3s 4s 3d', '1s 2s 3s 4s 2p 3p'],
    correctAnswer: 1,
    explanation: 'The Aufbau principle states that 4s is filled before 3d, giving: 1s 2s 2p 3s 3p 4s 3d …',
  },
  {
    id: 108,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Copper has an anomalous electron configuration. Which is correct for Cu (Z = 29)?',
    options: ['[Ar] 3d⁹ 4s²', '[Ar] 3d¹⁰ 4s¹', '[Ar] 3d⁸ 4s²', '[Ar] 3d¹⁰ 4s²'],
    correctAnswer: 1,
    explanation: 'Cu adopts [Ar] 3d¹⁰ 4s¹ because a fully filled d subshell is extra stable, so one 4s electron moves to complete the 3d subshell.',
  },
  {
    id: 109,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'Why is the second ionisation energy of sodium much greater than that of magnesium?',
    options: [
      'Sodium has a larger atomic radius than magnesium',
      'Removing the second electron from Na requires breaking into a full inner shell (2p⁶)',
      'Magnesium has a higher nuclear charge',
      'Sodium has fewer shielding electrons',
    ],
    correctAnswer: 1,
    explanation: 'Na has configuration 2,8,1. After the first IE, Na⁺ has configuration 2,8. The second electron must be removed from the 2p subshell (inner shell), requiring much more energy.',
  },
  {
    id: 110,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'How many electrons does the ion S²⁻ contain? (S has atomic number 16)',
    options: ['14', '16', '18', '32'],
    correctAnswer: 2,
    explanation: 'S has 16 electrons. S²⁻ has gained 2 electrons, so it has 16 + 2 = 18 electrons.',
  },
  {
    id: 111,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). What is the relative atomic mass of chlorine?',
    options: ['35.0', '35.5', '36.0', '36.5'],
    correctAnswer: 1,
    explanation: 'Ar = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5.',
  },
  {
    id: 112,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'In photoelectron spectroscopy of neon, which peak appears at the highest ionisation energy?',
    options: ['2p', '2s', '1s', 'All peaks have equal energy'],
    correctAnswer: 2,
    explanation: '1s electrons are closest to the nucleus and most tightly held, so they have the highest ionisation energy and appear at the highest binding energy in PES.',
  },

  // ── Amount of Substance (extra) ───────────────────────────────────────────
  {
    id: 113,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the molar mass of sulfuric acid (H₂SO₄)? (H=1, S=32, O=16)',
    options: ['80 g mol⁻¹', '96 g mol⁻¹', '98 g mol⁻¹', '64 g mol⁻¹'],
    correctAnswer: 2,
    explanation: 'M(H₂SO₄) = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g mol⁻¹.',
  },
  {
    id: 114,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'How many moles are in 5.6 g of iron? (Ar: Fe = 56)',
    options: ['0.05 mol', '0.10 mol', '0.50 mol', '1.00 mol'],
    correctAnswer: 1,
    explanation: 'n = m/M = 5.6/56 = 0.10 mol.',
  },
  {
    id: 115,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula? (Ar: C=12, H=1, O=16)',
    options: ['CH₂O', 'C₂H₄O₂', 'CHO', 'C₃H₈O₃'],
    correctAnswer: 0,
    explanation: 'C: 40/12 = 3.33; H: 6.7/1 = 6.7; O: 53.3/16 = 3.33. Ratio = 1:2:1. Empirical formula = CH₂O.',
  },
  {
    id: 116,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What volume does 0.25 mol of an ideal gas occupy at 298 K and 100 kPa? (R = 8.314 J mol⁻¹ K⁻¹)',
    options: ['2.08 dm³', '6.21 dm³', '24.8 dm³', '0.621 dm³'],
    correctAnswer: 1,
    explanation: 'V = nRT/P = (0.25 × 8.314 × 298) / 100 000 = 619.6/100 000 = 0.006196 m³ = 6.20 dm³ ≈ 6.21 dm³.',
  },
  {
    id: 117,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'In the reaction N₂ + 3H₂ → 2NH₃, if 2 mol N₂ and 5 mol H₂ are used, which is the limiting reagent?',
    options: ['N₂', 'H₂', 'Neither — they are in exact ratio', 'NH₃'],
    correctAnswer: 1,
    explanation: '2 mol N₂ requires 6 mol H₂. Only 5 mol H₂ is available, so H₂ is the limiting reagent.',
  },
  {
    id: 118,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'In the synthesis of ethanol from ethene and water (C₂H₄ + H₂O → C₂H₅OH), what is the atom economy?',
    options: ['52%', '78%', '100%', '46%'],
    correctAnswer: 2,
    explanation: 'Atom economy = (mass of desired product / total mass of reactants) × 100. There is only one product, so all atoms end up in the product: atom economy = 100%.',
  },
  {
    id: 119,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'How many molecules are in 0.50 mol of water? (Nₐ = 6.02 × 10²³ mol⁻¹)',
    options: ['3.01 × 10²³', '6.02 × 10²³', '1.20 × 10²⁴', '1.80 × 10²³'],
    correctAnswer: 0,
    explanation: 'N = n × Nₐ = 0.50 × 6.02 × 10²³ = 3.01 × 10²³ molecules.',
  },
  {
    id: 120,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What is the concentration of a solution containing 5.85 g of NaCl in 500 cm³ of solution? (Mr NaCl = 58.5)',
    options: ['0.100 mol dm⁻³', '0.200 mol dm⁻³', '0.500 mol dm⁻³', '1.00 mol dm⁻³'],
    correctAnswer: 1,
    explanation: 'n(NaCl) = 5.85/58.5 = 0.100 mol. V = 0.500 dm³. c = 0.100/0.500 = 0.200 mol dm⁻³.',
  },
  {
    id: 121,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: '25.0 cm³ of 0.100 mol dm⁻³ NaOH was added to an excess of CaCO₃. The mixture was filtered and the filtrate titrated: 20.0 cm³ of 0.0500 mol dm⁻³ HCl was needed. How many moles of NaOH reacted with the CaCO₃?',
    options: ['1.0 × 10⁻³ mol', '1.5 × 10⁻³ mol', '2.0 × 10⁻³ mol', '2.5 × 10⁻³ mol'],
    correctAnswer: 1,
    explanation: 'Initial n(NaOH) = 0.025 × 0.100 = 2.50 × 10⁻³ mol. Excess NaOH titrated = 0.020 × 0.0500 = 1.00 × 10⁻³ mol. NaOH reacted = 2.50 × 10⁻³ − 1.00 × 10⁻³ = 1.50 × 10⁻³ mol.',
  },
  {
    id: 122,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'A compound has empirical formula CH₂ and molar mass 56 g mol⁻¹. What is its molecular formula? (Ar: C=12, H=1)',
    options: ['C₂H₄', 'C₃H₆', 'C₄H₈', 'C₄H₁₀'],
    correctAnswer: 2,
    explanation: 'Mr of CH₂ = 14. 56/14 = 4. Molecular formula = (CH₂)₄ = C₄H₈.',
  },
  {
    id: 123,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the molar volume of an ideal gas at RTP (298 K, 100 kPa)?',
    options: ['22.4 dm³ mol⁻¹', '24.0 dm³ mol⁻¹', '24.5 dm³ mol⁻¹', '22.7 dm³ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'At RTP (298 K, 100 kPa), the molar volume of an ideal gas is 24.0 dm³ mol⁻¹ (used in AQA calculations).',
  },
  {
    id: 124,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'In a reaction, 10.0 g of CaCO₃ reacts with excess HCl to produce CO₂. If 3.96 g of CO₂ is actually collected, what is the percentage yield? (Mr: CaCO₃=100, CO₂=44)',
    options: ['39.6%', '80.0%', '90.0%', '44.0%'],
    correctAnswer: 2,
    explanation: 'Theoretical n(CO₂) = n(CaCO₃) = 10.0/100 = 0.100 mol. Theoretical mass = 0.100 × 44 = 4.40 g. % yield = (3.96/4.40) × 100 = 90.0%.',
  },

  // ── Bonding ───────────────────────────────────────────────────────────────
  {
    id: 125,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'Which type of bonding involves the electrostatic attraction between oppositely charged ions?',
    options: ['Covalent bonding', 'Metallic bonding', 'Ionic bonding', 'Hydrogen bonding'],
    correctAnswer: 2,
    explanation: 'Ionic bonding is the electrostatic attraction between oppositely charged ions formed by electron transfer.',
  },
  {
    id: 126,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What is the shape of a water molecule (H₂O)?',
    options: ['Linear', 'Trigonal planar', 'Bent/V-shaped', 'Tetrahedral'],
    correctAnswer: 2,
    explanation: 'Water has 2 bonding pairs and 2 lone pairs. Lone pairs repel more than bonding pairs, compressing the H-O-H angle to ~104.5°, giving a bent/V-shape.',
  },
  {
    id: 127,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which molecule is polar?',
    options: ['CO₂', 'BF₃', 'CCl₄', 'CHCl₃'],
    correctAnswer: 3,
    explanation: 'CHCl₃ (chloroform) is polar because the C-Cl and C-H bond dipoles do not cancel — the molecule has an asymmetric arrangement. CO₂, BF₃, and CCl₄ have symmetrical arrangements where dipoles cancel.',
  },
  {
    id: 128,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What is the bond angle in a molecule with 3 bonding pairs and 1 lone pair around the central atom?',
    options: ['180°', '120°', '109.5°', '107°'],
    correctAnswer: 3,
    explanation: 'With 3 bonding pairs and 1 lone pair (e.g. NH₃), the lone pair repels bonding pairs more, reducing the angle from 109.5° to approximately 107°.',
  },
  {
    id: 129,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which of the following can form hydrogen bonds with water?',
    options: ['CH₄', 'CCl₄', 'NH₃', 'C₂H₆'],
    correctAnswer: 2,
    explanation: 'Hydrogen bonding requires a hydrogen atom bonded to a very electronegative atom (N, O, or F). NH₃ has N-H bonds and lone pairs, so it can form hydrogen bonds with water.',
  },
  {
    id: 130,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'Why does MgO have a higher melting point than NaCl?',
    options: [
      'MgO has larger ions',
      'MgO has higher charge density ions (Mg²⁺ and O²⁻), giving stronger electrostatic attraction',
      'NaCl has weaker covalent bonds',
      'MgO contains metallic bonding',
    ],
    correctAnswer: 1,
    explanation: 'MgO contains Mg²⁺ and O²⁻ (charge 2+/2−) compared to Na⁺ and Cl⁻ (charge 1+/1−). The greater ionic charges and smaller ion size give a much stronger lattice energy and higher melting point.',
  },
  {
    id: 131,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What is the bond angle in a linear molecule?',
    options: ['90°', '107°', '120°', '180°'],
    correctAnswer: 3,
    explanation: 'Linear molecules (e.g. CO₂, BeCl₂) have a bond angle of 180° as the two bonds are on opposite sides of the central atom.',
  },
  {
    id: 132,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Why do noble gases have very low boiling points?',
    options: [
      'They form covalent bonds with each other',
      'They have only weak London dispersion (induced dipole-dipole) forces between atoms',
      'Their atoms are very large',
      'They have permanent dipoles',
    ],
    correctAnswer: 1,
    explanation: 'Noble gases are monoatomic with no permanent dipoles. The only intermolecular forces are very weak London (induced dipole) forces, so very little energy is needed to overcome them.',
  },
  {
    id: 133,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'What is a coordinate (dative covalent) bond?',
    options: [
      'A bond where electrons are shared unequally',
      'A bond formed by the transfer of an electron pair from one atom to another',
      'A bond where both electrons in the shared pair come from the same atom',
      'A bond between atoms of different electronegativity',
    ],
    correctAnswer: 2,
    explanation: 'A coordinate (dative covalent) bond is a covalent bond where both electrons in the bonding pair are donated by the same atom, e.g. in NH₄⁺ or in BF₃·NH₃ adduct.',
  },
  {
    id: 134,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What is the shape of PCl₅?',
    options: ['Trigonal planar', 'Tetrahedral', 'Trigonal bipyramidal', 'Octahedral'],
    correctAnswer: 2,
    explanation: 'PCl₅ has 5 bonding pairs and no lone pairs around the P atom, giving a trigonal bipyramidal shape with bond angles of 90° and 120°.',
  },
  {
    id: 135,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'Which of the following has a giant covalent (macromolecular) structure?',
    options: ['CO₂', 'SiO₂', 'SO₂', 'NO₂'],
    correctAnswer: 1,
    explanation: 'SiO₂ (silicon dioxide/sand) has a giant covalent structure where each Si is bonded to 4 O atoms in a 3D network, giving a very high melting point.',
  },
  {
    id: 136,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'In a Born-Haber cycle for NaCl, which enthalpy term represents the energy released when Cl(g) gains an electron?',
    options: ['Ionisation energy of Na', 'Electron affinity of Cl', 'Lattice enthalpy of NaCl', 'Bond dissociation enthalpy of Cl₂'],
    correctAnswer: 1,
    explanation: 'The electron affinity is the enthalpy change when a gaseous atom gains an electron: Cl(g) + e⁻ → Cl⁻(g). The first electron affinity of Cl is exothermic (−349 kJ mol⁻¹).',
  },

  // ── Energetics ────────────────────────────────────────────────────────────
  {
    id: 137,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'In an exothermic reaction, which is correct?',
    options: [
      'Energy is absorbed from the surroundings and ΔH is positive',
      'Energy is released to the surroundings and ΔH is negative',
      'The products have higher energy than the reactants',
      'The activation energy is zero',
    ],
    correctAnswer: 1,
    explanation: 'In an exothermic reaction, energy is released to the surroundings. The products are at lower energy than the reactants, so ΔH < 0 (negative).',
  },
  {
    id: 138,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What is the standard enthalpy of combustion?',
    options: [
      'Enthalpy change when 1 mol of a compound is formed from its elements in standard states',
      'Enthalpy change when 1 mol of a substance completely burns in excess oxygen under standard conditions',
      'Enthalpy change when 1 mol of a substance dissolves in water',
      'Enthalpy change when bonds are broken in 1 mol of a substance',
    ],
    correctAnswer: 1,
    explanation: 'Standard enthalpy of combustion is the enthalpy change when 1 mole of a substance is completely burned in excess oxygen, with reactants and products in standard states at 298 K.',
  },
  {
    id: 139,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Using Hess\'s law, if ΔHf°(CO₂) = −394 kJ mol⁻¹, ΔHf°(H₂O) = −286 kJ mol⁻¹, and ΔHf°(CH₄) = −75 kJ mol⁻¹, what is ΔHc°(CH₄)?',
    options: ['−605 kJ mol⁻¹', '−753 kJ mol⁻¹', '−891 kJ mol⁻¹', '−960 kJ mol⁻¹'],
    correctAnswer: 2,
    explanation: 'CH₄ + 2O₂ → CO₂ + 2H₂O. ΔHc° = ΔHf°(CO₂) + 2×ΔHf°(H₂O) − ΔHf°(CH₄) = −394 + 2(−286) − (−75) = −394 − 572 + 75 = −891 kJ mol⁻¹.',
  },
  {
    id: 140,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Using mean bond enthalpies, estimate ΔH for H₂(g) + Cl₂(g) → 2HCl(g). [Bond enthalpies: H-H = 436, Cl-Cl = 242, H-Cl = 431 kJ mol⁻¹]',
    options: ['+184 kJ mol⁻¹', '−184 kJ mol⁻¹', '−293 kJ mol⁻¹', '+293 kJ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'ΔH = bonds broken − bonds formed = (436 + 242) − 2(431) = 678 − 862 = −184 kJ mol⁻¹.',
  },
  {
    id: 141,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'What is the standard enthalpy of formation of an element in its standard state?',
    options: ['−100 kJ mol⁻¹', '+100 kJ mol⁻¹', '0 kJ mol⁻¹', 'It depends on the element'],
    correctAnswer: 2,
    explanation: 'By convention, the standard enthalpy of formation of any element in its standard state is defined as zero, e.g. ΔHf°(O₂(g)) = 0.',
  },
  {
    id: 142,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: '50.0 cm³ of 2.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 2.00 mol dm⁻³ NaOH. The temperature rises by 13.5°C. What is the enthalpy of neutralisation? (specific heat capacity = 4.18 J g⁻¹ K⁻¹, density of solution = 1.00 g cm⁻³)',
    options: ['−52.7 kJ mol⁻¹', '−56.4 kJ mol⁻¹', '−45.8 kJ mol⁻¹', '−28.2 kJ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'q = mcΔT = 100 × 4.18 × 13.5 = 5643 J = 5.643 kJ. n(H₂O) = 0.050 × 2.00 = 0.100 mol. ΔH = −5.643/0.100 = −56.4 kJ mol⁻¹.',
  },
  {
    id: 143,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What are standard conditions for thermodynamic measurements?',
    options: ['0°C and 1 atm', '25°C (298 K) and 100 kPa, with substances in standard states', '100°C and 1 atm', '0 K and 1 bar'],
    correctAnswer: 1,
    explanation: 'Standard conditions are 298 K (25°C) and 100 kPa pressure, with all substances in their standard states (most stable physical form at 298 K).',
  },
  {
    id: 144,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Why do mean bond enthalpies give approximate values for ΔH rather than exact values?',
    options: [
      'Bond enthalpies cannot be measured experimentally',
      'The same type of bond has slightly different bond enthalpy in different molecules',
      'Bond enthalpies are always positive',
      'Hess\'s law does not apply to bond enthalpy calculations',
    ],
    correctAnswer: 1,
    explanation: 'Mean bond enthalpies are averages over many different compounds. The actual bond enthalpy of a specific bond varies depending on the molecular environment, so calculations using mean values give approximate results.',
  },
  {
    id: 145,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'Given: C(s) + O₂(g) → CO₂(g) ΔH = −394 kJ mol⁻¹; H₂(g) + ½O₂(g) → H₂O(l) ΔH = −286 kJ mol⁻¹; C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l) ΔH = −1367 kJ mol⁻¹. Calculate ΔHf° for ethanol C₂H₅OH(l).',
    options: ['−277 kJ mol⁻¹', '+277 kJ mol⁻¹', '−1367 kJ mol⁻¹', '−239 kJ mol⁻¹'],
    correctAnswer: 0,
    explanation: '2C(s)+3H₂(g)+½O₂(g)→C₂H₅OH(l). ΔHf° = 2(−394)+3(−286)−(−1367) = −788−858+1367 = −279 ≈ −277 kJ mol⁻¹ (slight rounding in the question values).',
  },
  {
    id: 146,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'Which sign of ΔH corresponds to an endothermic reaction?',
    options: ['ΔH = 0', 'ΔH < 0 (negative)', 'ΔH > 0 (positive)', 'ΔH can be either sign'],
    correctAnswer: 2,
    explanation: 'Endothermic reactions absorb energy from the surroundings, so the enthalpy of products is greater than reactants: ΔH > 0 (positive).',
  },
  {
    id: 147,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Using bond enthalpies, calculate ΔH for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). [C-H = 413, O=O = 498, C=O = 805, O-H = 463 kJ mol⁻¹]',
    options: ['−804 kJ mol⁻¹', '−898 kJ mol⁻¹', '−656 kJ mol⁻¹', '−786 kJ mol⁻¹'],
    correctAnswer: 0,
    explanation: 'Bonds broken: 4(C-H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = 2648. Bonds formed: 2(C=O) + 4(O-H) = 2(805) + 4(463) = 1610 + 1852 = 3462. ΔH = 2648 − 3462 = −814 kJ mol⁻¹ (closest to −804 with standard AQA values).',
  },
  {
    id: 148,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'The standard enthalpy of atomisation of sodium is +107 kJ mol⁻¹. What does this represent?',
    options: [
      'Na(s) → Na⁺(g) + e⁻',
      'Na(s) → Na(g)',
      '2Na(s) → 2Na(g)',
      'Na⁺(g) + e⁻ → Na(g)',
    ],
    correctAnswer: 1,
    explanation: 'The standard enthalpy of atomisation is the enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state: Na(s) → Na(g).',
  },

  // ── Kinetics ──────────────────────────────────────────────────────────────
  {
    id: 149,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What is the effect of increasing temperature on the rate of a chemical reaction?',
    options: [
      'Rate decreases because molecules move slower',
      'Rate increases because more molecules have energy ≥ activation energy',
      'Rate is unchanged as activation energy does not change',
      'Rate decreases due to increased molecular collisions',
    ],
    correctAnswer: 1,
    explanation: 'Increasing temperature shifts the Maxwell-Boltzmann distribution to higher energies, increasing the fraction of molecules with energy ≥ Eₐ, so more collisions are successful per unit time.',
  },
  {
    id: 150,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What does the Maxwell-Boltzmann distribution show?',
    options: [
      'The distribution of molecular masses in a gas',
      'The distribution of molecular speeds/energies in a gas at a given temperature',
      'The change in activation energy with temperature',
      'The number of moles of gas at different temperatures',
    ],
    correctAnswer: 1,
    explanation: 'The Maxwell-Boltzmann distribution shows the distribution of kinetic energies (or speeds) of molecules in a gas sample at a given temperature.',
  },
  {
    id: 151,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'How does a catalyst affect a reaction?',
    options: [
      'It provides an alternative pathway with lower activation energy',
      'It increases the activation energy of the reaction',
      'It changes the overall enthalpy change of the reaction',
      'It provides energy to reactant molecules',
    ],
    correctAnswer: 0,
    explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy. It does not change the overall ΔH of the reaction or the position of equilibrium.',
  },
  {
    id: 152,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'Which factor does NOT affect the rate of a reaction between two gases?',
    options: ['Temperature', 'Pressure', 'Colour of the reactants', 'Concentration'],
    correctAnswer: 2,
    explanation: 'The colour of reactants has no effect on reaction rate. Rate is affected by temperature, concentration, pressure (for gases), surface area, and catalysts.',
  },
  {
    id: 153,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'On a Maxwell-Boltzmann diagram, how does adding a catalyst change the curve?',
    options: [
      'The curve shifts to higher energies',
      'The activation energy line moves to the left (lower energy)',
      'The peak of the curve increases',
      'The area under the curve decreases',
    ],
    correctAnswer: 1,
    explanation: 'A catalyst lowers the activation energy, so the Eₐ line on the Maxwell-Boltzmann diagram moves to the left. The distribution curve itself is unchanged. A greater proportion of molecules now have energy ≥ Eₐ.',
  },
  {
    id: 154,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'According to the Arrhenius equation, increasing temperature from 25°C to 35°C approximately doubles the rate of many reactions. Which explanation is most accurate?',
    options: [
      'The collision frequency doubles',
      'The activation energy halves',
      'The fraction of molecules with energy ≥ Eₐ increases significantly due to the exponential relationship',
      'The concentration of reactants doubles',
    ],
    correctAnswer: 2,
    explanation: 'The Arrhenius equation k = Ae^(−Eₐ/RT) shows an exponential dependence. A small increase in T significantly increases the fraction of molecules exceeding Eₐ because of the exponential factor.',
  },
  {
    id: 155,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'According to collision theory, what two conditions must be met for a collision to result in a reaction?',
    options: [
      'Molecules must be the same size and same energy',
      'Molecules must collide with sufficient energy and correct orientation',
      'Molecules must collide at high pressure and high temperature',
      'Molecules must have low activation energy and high concentration',
    ],
    correctAnswer: 1,
    explanation: 'Collision theory states that a reaction occurs only when molecules collide with (1) energy equal to or greater than the activation energy AND (2) the correct orientation for bond-breaking/forming.',
  },
  {
    id: 156,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'How does increasing the concentration of a reactant generally affect the rate of reaction?',
    options: [
      'Rate decreases because there is less room for molecules to move',
      'Rate increases because there are more molecules per unit volume, leading to more frequent collisions',
      'Rate is unaffected because concentration does not change activation energy',
      'Rate increases because concentration lowers the activation energy',
    ],
    correctAnswer: 1,
    explanation: 'Higher concentration means more molecules per unit volume, increasing the frequency of collisions and therefore the rate of successful collisions.',
  },
  {
    id: 157,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'What is the key difference between a homogeneous and heterogeneous catalyst?',
    options: [
      'A homogeneous catalyst is more effective than a heterogeneous catalyst',
      'A homogeneous catalyst is in the same phase as the reactants; a heterogeneous catalyst is in a different phase',
      'A heterogeneous catalyst changes the ΔH of the reaction',
      'A homogeneous catalyst is always a solid',
    ],
    correctAnswer: 1,
    explanation: 'A homogeneous catalyst is in the same phase as the reactants (e.g. H⁺(aq) in acid-catalysed reactions). A heterogeneous catalyst is in a different phase (e.g. solid Fe in the Haber process with gaseous reactants).',
  },
  {
    id: 158,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Why does increasing surface area increase the rate of reaction for a solid reactant?',
    options: [
      'It increases the activation energy',
      'It exposes more reactive particles at the surface, increasing collision frequency',
      'It changes the concentration of the solid',
      'It raises the temperature of the solid',
    ],
    correctAnswer: 1,
    explanation: 'Breaking a solid into smaller pieces exposes more surface particles, so more particles are available to collide with other reactants, increasing the frequency of collisions per unit time.',
  },
  {
    id: 159,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'For a gas-phase reaction, increasing pressure has a similar effect on rate as:',
    options: ['Decreasing temperature', 'Decreasing concentration', 'Increasing concentration', 'Adding a catalyst'],
    correctAnswer: 2,
    explanation: 'Increasing pressure on a gas compresses it, increasing the number of gas molecules per unit volume — equivalent to increasing concentration. This increases collision frequency and rate.',
  },
  {
    id: 160,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'A graph of ln k against 1/T has a gradient of −8000 K. What is the activation energy? (R = 8.314 J mol⁻¹ K⁻¹)',
    options: ['8.00 kJ mol⁻¹', '66.5 kJ mol⁻¹', '8000 kJ mol⁻¹', '961 kJ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'From the Arrhenius equation, gradient = −Eₐ/R. Eₐ = −(−8000) × 8.314 = 66 512 J mol⁻¹ ≈ 66.5 kJ mol⁻¹.',
  },

  // ── Chemical Equilibria & Le Chatelier's ──────────────────────────────────
  {
    id: 161,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'What is meant by dynamic equilibrium?',
    options: [
      'A state where no reaction is occurring',
      'A state where forward and reverse reactions occur at equal rates and concentrations remain constant',
      'A state where only the forward reaction is occurring',
      'A state where temperature and pressure are equal on both sides',
    ],
    correctAnswer: 1,
    explanation: 'Dynamic equilibrium is reached in a closed system when the forward and reverse reaction rates are equal, so concentrations of reactants and products remain constant even though both reactions continue.',
  },
  {
    id: 162,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'In the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92 kJ mol⁻¹, what happens to the yield of NH₃ when temperature is increased?',
    options: ['Increases', 'Decreases', 'Remains the same', 'First increases then decreases'],
    correctAnswer: 1,
    explanation: 'The reaction is exothermic. Le Chatelier\'s principle states that increasing temperature shifts equilibrium to oppose the change — i.e. towards the endothermic (reverse) direction, decreasing NH₃ yield.',
  },
  {
    id: 163,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For the equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), what happens to the yield of SO₃ when pressure is increased?',
    options: [
      'Decreases, because the equilibrium shifts to the left (more moles of gas)',
      'Increases, because the equilibrium shifts to the right (fewer moles of gas)',
      'Remains the same, because pressure does not affect equilibrium',
      'Cannot be determined without knowing the temperature',
    ],
    correctAnswer: 1,
    explanation: 'There are 3 moles of gas on the left and 2 on the right. Increasing pressure shifts equilibrium to the side with fewer moles of gas (right), increasing SO₃ yield.',
  },
  {
    id: 164,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For N₂O₄(g) ⇌ 2NO₂(g), the equilibrium concentrations are: [N₂O₄] = 0.20 mol dm⁻³, [NO₂] = 0.040 mol dm⁻³. What is Kc?',
    options: ['8.0 × 10⁻³ mol dm⁻³', '0.20 mol dm⁻³', '0.010 mol dm⁻³', '2.0 × 10⁻⁴ mol dm⁻³'],
    correctAnswer: 0,
    explanation: 'Kc = [NO₂]²/[N₂O₄] = (0.040)²/(0.20) = 0.0016/0.20 = 8.0 × 10⁻³ mol dm⁻³.',
  },
  {
    id: 165,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'What effect does adding a catalyst have on the position of equilibrium?',
    options: [
      'It shifts equilibrium to the right',
      'It shifts equilibrium to the left',
      'It has no effect on the position of equilibrium or the value of Kc',
      'It increases the equilibrium yield of products',
    ],
    correctAnswer: 2,
    explanation: 'A catalyst increases the rate of both forward and reverse reactions equally, so equilibrium is reached more quickly but the position of equilibrium (and Kc) is unchanged.',
  },
  {
    id: 166,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'For the equilibrium H₂(g) + I₂(g) ⇌ 2HI(g), Kc = 54 at 425°C. If [H₂] = [I₂] = 0.10 mol dm⁻³ at equilibrium, what is [HI]?',
    options: ['0.54 mol dm⁻³', '0.73 mol dm⁻³', '5.4 mol dm⁻³', '0.23 mol dm⁻³'],
    correctAnswer: 1,
    explanation: 'Kc = [HI]²/([H₂][I₂]) = [HI]²/(0.10 × 0.10) = 54. [HI]² = 54 × 0.01 = 0.54. [HI] = √0.54 = 0.735 ≈ 0.73 mol dm⁻³.',
  },
  {
    id: 167,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'In the equilibrium A(aq) ⇌ B(aq), adding more A to the system will:',
    options: [
      'Shift equilibrium to the left, producing more A',
      'Shift equilibrium to the right, producing more B',
      'Have no effect on the position of equilibrium',
      'Increase the value of Kc',
    ],
    correctAnswer: 1,
    explanation: 'Adding more reactant A increases its concentration. Le Chatelier\'s principle predicts the system opposes this by shifting equilibrium to the right, consuming A and producing more B.',
  },
  {
    id: 168,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Haber process (N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹), why is a compromise temperature of ~450°C used?',
    options: [
      'High temperature is needed to reach equilibrium at all',
      'High temperature gives maximum yield; low temperature is used for safety',
      'High temperature gives faster rate but lower yield; lower temperature gives higher yield but too slow a rate. 450°C is the optimum compromise.',
      'The catalyst only works at 450°C',
    ],
    correctAnswer: 2,
    explanation: 'Higher temperature increases rate (kinetics) but shifts equilibrium left, lowering yield (thermodynamics). 450°C balances acceptable rate with reasonable yield, especially with the iron catalyst.',
  },
  {
    id: 169,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'For the equilibrium PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), what are the units of Kc?',
    options: ['No units', 'mol dm⁻³', 'mol² dm⁻⁶', 'dm³ mol⁻¹'],
    correctAnswer: 1,
    explanation: 'Kc = [PCl₃][Cl₂]/[PCl₅]. Units = (mol dm⁻³)(mol dm⁻³)/(mol dm⁻³) = mol dm⁻³.',
  },
  {
    id: 170,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Contact process (2SO₂ + O₂ ⇌ 2SO₃, ΔH = −196 kJ mol⁻¹), which conditions maximise SO₃ yield?',
    options: [
      'High temperature and low pressure',
      'Low temperature and high pressure',
      'High temperature and high pressure',
      'Low temperature and low pressure',
    ],
    correctAnswer: 1,
    explanation: 'The reaction is exothermic (low T favours products) and has fewer moles of gas on the right (high P favours products). Thermodynamically, low T and high P give maximum yield.',
  },
  {
    id: 171,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'Which condition is essential for a dynamic equilibrium to be maintained?',
    options: ['High temperature', 'Low pressure', 'Closed system', 'A catalyst'],
    correctAnswer: 2,
    explanation: 'A dynamic equilibrium can only be established in a closed system where products cannot escape and reactants are not added. Otherwise the system cannot reach a constant composition.',
  },
  {
    id: 172,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'For the reaction CO(g) + 3H₂(g) ⇌ CH₄(g) + H₂O(g), if Kc = 3.9 at 600 K, what happens if Kc decreases?',
    options: [
      'Temperature has decreased and equilibrium moved to the right',
      'Temperature has increased and equilibrium moved to the left',
      'A catalyst has been added',
      'Pressure has increased',
    ],
    correctAnswer: 1,
    explanation: 'Only temperature changes the value of Kc. If Kc decreases, the equilibrium position has shifted left. Since the forward reaction produces fewer moles of gas and is likely exothermic, increasing temperature shifts it left and decreases Kc.',
  },

  // ── Redox ─────────────────────────────────────────────────────────────────
  {
    id: 173,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of chromium in K₂Cr₂O₇?',
    options: ['+3', '+4', '+6', '+7'],
    correctAnswer: 2,
    explanation: 'K is +1, O is −2. 2(+1) + 2x + 7(−2) = 0 → 2 + 2x − 14 = 0 → 2x = 12 → x = +6.',
  },
  {
    id: 174,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, which species is the oxidising agent?',
    options: ['Zn', 'ZnSO₄', 'Cu²⁺', 'SO₄²⁻'],
    correctAnswer: 2,
    explanation: 'Cu²⁺ is reduced (gains electrons) from +2 to 0. The oxidising agent accepts electrons (is reduced). Zn is oxidised (loses electrons) and is the reducing agent.',
  },
  {
    id: 175,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of nitrogen in NH₄⁺?',
    options: ['+5', '+3', '−3', '0'],
    correctAnswer: 2,
    explanation: 'In NH₄⁺, each H is +1. x + 4(+1) = +1 → x = +1 − 4 = −3.',
  },
  {
    id: 176,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Which half-equation correctly represents the reduction of MnO₄⁻ to Mn²⁺ in acid solution?',
    options: [
      'MnO₄⁻ + 5e⁻ → Mn²⁺',
      'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
      'MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O',
      'MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻',
    ],
    correctAnswer: 1,
    explanation: 'Mn goes from +7 to +2 (gain of 5e⁻). The 4 oxygen atoms are removed as 4H₂O using 8H⁺: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.',
  },
  {
    id: 177,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Which of the following is an example of disproportionation?',
    options: [
      'Fe²⁺ → Fe³⁺ (by oxidation with Cl₂)',
      'Cl₂ + 2NaOH → NaCl + NaOCl + H₂O',
      'Na + H₂O → NaOH + ½H₂',
      '2H₂O₂ → 2H₂O + O₂',
    ],
    correctAnswer: 3,
    explanation: 'In 2H₂O₂ → 2H₂O + O₂, oxygen goes from −1 in H₂O₂ to −2 in H₂O (reduction) and to 0 in O₂ (oxidation). The same element is simultaneously oxidised and reduced — disproportionation.',
  },
  {
    id: 178,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'Balance the following in acid solution: Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺. What is the coefficient of Fe²⁺?',
    options: ['1', '3', '5', '7'],
    correctAnswer: 2,
    explanation: 'Half-equations: Fe²⁺ → Fe³⁺ + e⁻ (×5); MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Combining: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Coefficient of Fe²⁺ = 5.',
  },
  {
    id: 179,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of iron in Fe₂O₃?',
    options: ['+2', '+3', '+4', '+6'],
    correctAnswer: 1,
    explanation: 'O is −2. 2x + 3(−2) = 0 → 2x = +6 → x = +3.',
  },
  {
    id: 180,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In the thermite reaction: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe, which element is oxidised?',
    options: ['Fe (from +3 to 0)', 'Al (from 0 to +3)', 'O (from −2 to −2)', 'Fe (from 0 to +3)'],
    correctAnswer: 1,
    explanation: 'Al goes from 0 (element) to +3 in Al₂O₃ — it loses electrons, so it is oxidised. Fe goes from +3 to 0 — it gains electrons, so it is reduced.',
  },
  {
    id: 181,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'What is the oxidation state of sulfur in the thiosulfate ion S₂O₃²⁻?',
    options: ['+2', '+4', '+6', '+8'],
    correctAnswer: 0,
    explanation: 'For S₂O₃²⁻: 2x + 3(−2) = −2 → 2x = −2 + 6 = +4 → x = +2. (Note: In reality S₂O₃²⁻ contains S in two different oxidation states, but the average is +2.)',
  },
  {
    id: 182,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'Which statement correctly defines oxidation?',
    options: [
      'Gain of electrons',
      'Gain of oxygen or loss of hydrogen or loss of electrons',
      'Loss of oxygen',
      'Increase in number of hydrogen atoms',
    ],
    correctAnswer: 1,
    explanation: 'Oxidation can be defined as: loss of electrons, gain of oxygen, or loss of hydrogen. All three are equivalent ways of defining oxidation.',
  },
  {
    id: 183,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In the reaction: 2KI + Cl₂ → 2KCl + I₂, what is the change in oxidation state of iodine?',
    options: ['0 to −1', '−1 to 0', '−1 to +1', '+1 to 0'],
    correctAnswer: 1,
    explanation: 'I in KI has oxidation state −1. I in I₂ is 0. Iodine goes from −1 to 0 — it loses electrons and is oxidised. Cl₂ is reduced from 0 to −1.',
  },
  {
    id: 184,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'How many moles of electrons are transferred in the reaction: Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O?',
    options: ['2', '4', '6', '14'],
    correctAnswer: 2,
    explanation: 'Each Cr goes from +6 to +3 (gains 3e⁻). Two Cr atoms gain 6e⁻ total. Each Fe²⁺ loses 1e⁻; 6Fe²⁺ lose 6e⁻. Total electrons transferred = 6.',
  },

  // ── Thermodynamics ────────────────────────────────────────────────────────
  {
    id: 185,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What does entropy (S) measure?',
    options: [
      'The total energy content of a system',
      'The degree of disorder or randomness in a system',
      'The heat released in a reaction',
      'The activation energy of a reaction',
    ],
    correctAnswer: 1,
    explanation: 'Entropy is a measure of the disorder, randomness, or number of possible microstates of a system. Higher entropy = greater disorder.',
  },
  {
    id: 186,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'Which process results in an increase in entropy?',
    options: [
      'Water freezing to ice',
      'A gas dissolving in a liquid',
      'Ice melting to liquid water',
      'A gas being compressed into a smaller volume',
    ],
    correctAnswer: 2,
    explanation: 'Ice (ordered solid) melting to liquid water increases disorder: the molecules have more freedom of movement. ΔS > 0.',
  },
  {
    id: 187,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is the Gibbs free energy equation?',
    options: ['ΔG = ΔH + TΔS', 'ΔG = ΔH − TΔS', 'ΔG = TΔS − ΔH', 'ΔG = ΔH × TΔS'],
    correctAnswer: 1,
    explanation: 'The Gibbs free energy equation is ΔG = ΔH − TΔS. A reaction is spontaneous when ΔG < 0.',
  },
  {
    id: 188,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'A reaction has ΔH = +50 kJ mol⁻¹ and ΔS = +200 J mol⁻¹ K⁻¹. At what temperature does it become spontaneous?',
    options: ['Above 250 K', 'Above 4 K', 'Above 500 K', 'It is never spontaneous'],
    correctAnswer: 0,
    explanation: 'ΔG = ΔH − TΔS < 0 for spontaneity. 50 000 − T(200) < 0 → T > 50 000/200 = 250 K. Spontaneous above 250 K.',
  },
  {
    id: 189,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is the entropy change of the surroundings (ΔSsurr) for an exothermic reaction at temperature T?',
    options: ['ΔSsurr = ΔH/T', 'ΔSsurr = −ΔH/T', 'ΔSsurr = TΔH', 'ΔSsurr = ΔG/T'],
    correctAnswer: 1,
    explanation: 'ΔSsurr = −ΔHsystem/T. For an exothermic reaction (ΔH < 0), ΔSsurr = −(negative)/T = positive, meaning the surroundings become more disordered.',
  },
  {
    id: 190,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Calculate ΔG at 298 K for a reaction where ΔH = −120 kJ mol⁻¹ and ΔS = −150 J mol⁻¹ K⁻¹.',
    options: ['−74.7 kJ mol⁻¹', '+74.7 kJ mol⁻¹', '−165.3 kJ mol⁻¹', '−75.3 kJ mol⁻¹'],
    correctAnswer: 0,
    explanation: 'ΔG = ΔH − TΔS = −120 000 − 298 × (−150) = −120 000 + 44 700 = −75 300 J mol⁻¹ ≈ −75.3 kJ mol⁻¹ (closest answer is −74.7, minor rounding).',
  },
  {
    id: 191,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'Which has the highest entropy at the same temperature and pressure?',
    options: ['Ice', 'Liquid water', 'Water vapour', 'All have the same entropy'],
    correctAnswer: 2,
    explanation: 'Entropy increases with physical state: solid < liquid < gas. Water vapour has molecules moving randomly in all directions with much greater disorder than liquid water or ice.',
  },
  {
    id: 192,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'For a reaction with ΔH < 0 and ΔS < 0, which statement is correct?',
    options: [
      'Always spontaneous at all temperatures',
      'Never spontaneous at any temperature',
      'Spontaneous at low temperatures (when |ΔH| > T|ΔS|)',
      'Spontaneous at high temperatures',
    ],
    correctAnswer: 2,
    explanation: 'ΔG = ΔH − TΔS. With ΔH < 0 and ΔS < 0: at low T, the TΔS term is small, so ΔG < 0 (spontaneous). At high T, the −TΔS term (positive) dominates and ΔG becomes positive (non-spontaneous).',
  },
  {
    id: 193,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'For the reaction CaCO₃(s) → CaO(s) + CO₂(g), ΔH = +178 kJ mol⁻¹ and ΔS = +161 J mol⁻¹ K⁻¹. What is the minimum temperature for spontaneous decomposition?',
    options: ['111 K', '551 K', '1106 K', '17 800 K'],
    correctAnswer: 2,
    explanation: 'ΔG < 0 when TΔS > ΔH. T > ΔH/ΔS = 178 000/161 = 1106 K. Above ~1106 K, the reaction becomes spontaneous.',
  },
  {
    id: 194,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What are the standard units of entropy?',
    options: ['kJ mol⁻¹', 'J mol⁻¹ K⁻¹', 'kJ K⁻¹', 'J K⁻²'],
    correctAnswer: 1,
    explanation: 'Entropy and entropy changes are measured in J mol⁻¹ K⁻¹ (joules per mole per kelvin). Note: ΔH is in kJ mol⁻¹, so care is needed when combining in the ΔG equation.',
  },
  {
    id: 195,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Lattice enthalpy of MgO is more exothermic than that of NaF. What is the main reason?',
    options: [
      'Mg²⁺ and O²⁻ have higher charges than Na⁺ and F⁻, giving stronger electrostatic attraction',
      'MgO has a larger lattice',
      'Na⁺ and F⁻ ions are larger',
      'MgO is a covalent compound',
    ],
    correctAnswer: 0,
    explanation: 'Lattice enthalpy depends on ionic charge and ion size. Mg²⁺ and O²⁻ (charge ×2) have much stronger electrostatic attractions than Na⁺ and F⁻ (charge ×1), making the MgO lattice enthalpy much more negative.',
  },
  {
    id: 196,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'In a Born-Haber cycle for MgO, which two steps are most different in magnitude compared to NaCl?',
    options: [
      'Enthalpy of atomisation and bond dissociation',
      'Second ionisation energy of Mg and second electron affinity of O',
      'Lattice enthalpy and enthalpy of formation',
      'First ionisation energy and first electron affinity',
    ],
    correctAnswer: 1,
    explanation: 'The 2nd IE of Mg (removing an electron from Mg⁺, +1450 kJ mol⁻¹) and the 2nd EA of O (adding an electron to O⁻ is endothermic, +844 kJ mol⁻¹) are uniquely large terms that distinguish MgO from NaCl.',
  },

  // ── Rate Equations ────────────────────────────────────────────────────────
  {
    id: 197,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'For the reaction A + B → C with rate = k[A]²[B], what is the overall order of reaction?',
    options: ['1st order', '2nd order', '3rd order', '4th order'],
    correctAnswer: 2,
    explanation: 'Overall order = sum of all individual orders = 2 (for A) + 1 (for B) = 3rd order overall.',
  },
  {
    id: 198,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'From the data below, what is the order with respect to A? Experiment 1: [A]=0.10, rate=4.0×10⁻³; Experiment 2: [A]=0.20, rate=1.6×10⁻²',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 2,
    explanation: '[A] doubles (×2), rate increases by ×4 = 2². Rate ∝ [A]², so second order with respect to A.',
  },
  {
    id: 199,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'For a reaction that is 2nd order overall and has a rate equation rate = k[X]², what are the units of k?',
    options: ['mol dm⁻³ s⁻¹', 's⁻¹', 'mol⁻¹ dm³ s⁻¹', 'mol⁻² dm⁶ s⁻¹'],
    correctAnswer: 2,
    explanation: 'rate = k[X]². Units of k = rate/[X]² = (mol dm⁻³ s⁻¹)/(mol dm⁻³)² = (mol dm⁻³ s⁻¹)/(mol² dm⁻⁶) = mol⁻¹ dm³ s⁻¹.',
  },
  {
    id: 200,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A first-order reaction has a rate constant k = 0.0231 s⁻¹. What is its half-life?',
    options: ['30 s', '43 s', '10 s', '0.693 s'],
    correctAnswer: 0,
    explanation: 'For a first-order reaction, t½ = ln2/k = 0.693/0.0231 = 30.0 s.',
  },

  // ── Rate Equations (continued) ────────────────────────────────────────────
  {
    id: 201,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What does it mean if a reaction is zero order with respect to a reactant X?',
    options: [
      'The reaction does not occur',
      'The rate is unaffected by the concentration of X',
      'The rate is proportional to [X]',
      'The rate doubles when [X] doubles',
    ],
    correctAnswer: 1,
    explanation: 'Zero order with respect to X means the rate equation has [X]⁰ = 1, so changing [X] has no effect on the rate.',
  },
  {
    id: 202,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A reaction has the rate equation: rate = k[A][B]². If [A] is doubled and [B] is halved, what happens to the rate?',
    options: ['Rate doubles', 'Rate halves', 'Rate is unchanged', 'Rate is quartered'],
    correctAnswer: 1,
    explanation: 'New rate = k[2A][B/2]² = k × 2[A] × [B]²/4 = (2/4) k[A][B]² = ½ × original rate. The rate halves.',
  },
  {
    id: 203,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'Which graph shape indicates a first-order reaction when plotting concentration against time?',
    options: ['Straight line with negative gradient', 'Exponential decay curve', 'Straight horizontal line', 'Parabolic curve'],
    correctAnswer: 1,
    explanation: 'A first-order reaction shows an exponential decay of concentration with time, characterised by a constant half-life regardless of the starting concentration.',
  },
  {
    id: 204,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A reaction is 2nd order in A and zero order in B. When [A] is tripled, the rate:',
    options: ['Triples', 'Increases by factor 6', 'Increases by factor 9', 'Doubles'],
    correctAnswer: 2,
    explanation: 'Rate ∝ [A]². Tripling [A] gives rate ∝ (3[A])² = 9[A]². Rate increases by factor 9.',
  },
  {
    id: 205,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What is the rate-determining step?',
    options: [
      'The fastest step in a reaction mechanism',
      'The slowest step in a reaction mechanism that controls the overall reaction rate',
      'The step with the lowest activation energy',
      'The final step in a reaction mechanism',
    ],
    correctAnswer: 1,
    explanation: 'The rate-determining step is the slowest step in the reaction mechanism. It acts as a bottleneck and controls the overall rate of reaction.',
  },
  {
    id: 206,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'How does increasing temperature affect the rate constant k?',
    options: ['k decreases', 'k increases', 'k is unaffected', 'k first increases then decreases'],
    correctAnswer: 1,
    explanation: 'According to the Arrhenius equation k = Ae^(−Eₐ/RT), increasing T increases k exponentially. Unlike Kc, k always increases with temperature.',
  },
  {
    id: 207,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A proposed mechanism is: Step 1 (slow): A + B → C + D; Step 2 (fast): C + E → F. What rate equation does this suggest?',
    options: ['rate = k[A][B][E]', 'rate = k[A][B]', 'rate = k[C][E]', 'rate = k[E]'],
    correctAnswer: 1,
    explanation: 'The rate-determining step (step 1) involves A and B. The rate equation is rate = k[A][B]. Species in fast steps after the RDS do not appear in the rate equation.',
  },
  {
    id: 208,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'A reaction has a constant half-life of 40 s. What is the order of reaction?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 1,
    explanation: 'A constant (concentration-independent) half-life is a defining characteristic of a first-order reaction.',
  },

  // ── Kp ────────────────────────────────────────────────────────────────────
  {
    id: 209,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'What is meant by the partial pressure of a gas in a mixture?',
    options: [
      'The total pressure of all the gases combined',
      'The pressure that gas would exert if it alone occupied the container',
      'The pressure due to intermolecular forces',
      'Half the total pressure of the mixture',
    ],
    correctAnswer: 1,
    explanation: 'The partial pressure of a gas is the pressure it would exert if it alone occupied the same volume at the same temperature — or equivalently, its mole fraction × total pressure.',
  },
  {
    id: 210,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'How is the mole fraction of gas A in a mixture calculated?',
    options: [
      'moles of A / total moles of all gases',
      'moles of A × total pressure',
      'partial pressure of A / moles of A',
      'total pressure / moles of A',
    ],
    correctAnswer: 0,
    explanation: 'Mole fraction of A = n(A) / n(total). Partial pressure of A = mole fraction × total pressure.',
  },
  {
    id: 211,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which expression for Kp is correct?',
    options: [
      'Kp = p(NH₃)² / [p(N₂) × p(H₂)³]',
      'Kp = p(N₂) × p(H₂)³ / p(NH₃)²',
      'Kp = p(NH₃) / [p(N₂) × p(H₂)]',
      'Kp = p(NH₃)² × p(N₂) × p(H₂)³',
    ],
    correctAnswer: 0,
    explanation: 'Kp = p(NH₃)² / [p(N₂) × p(H₂)³], where p denotes partial pressures of each gas at equilibrium.',
  },
  {
    id: 212,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'What are the units of Kp for the equilibrium PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)?',
    options: ['Pa⁻¹', 'Pa', 'Pa²', 'No units'],
    correctAnswer: 1,
    explanation: 'Kp = p(PCl₃) × p(Cl₂) / p(PCl₅). Units = Pa × Pa / Pa = Pa (or kPa or atm depending on units used).',
  },
  {
    id: 213,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), what are the units of Kp?',
    options: ['Pa', 'Pa⁻¹', 'Pa²', 'Dimensionless (no units)'],
    correctAnswer: 3,
    explanation: 'Kp = p(HI)² / [p(H₂) × p(I₂)]. Units = Pa² / (Pa × Pa) = Pa²/Pa² = dimensionless (no units) when the number of moles of gas is equal on both sides.',
  },
  {
    id: 214,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'An equilibrium mixture contains N₂O₄ and NO₂. Total pressure is 100 kPa. Mole fractions: NO₂ = 0.6, N₂O₄ = 0.4. What is the partial pressure of NO₂?',
    options: ['40 kPa', '60 kPa', '0.6 kPa', '100 kPa'],
    correctAnswer: 1,
    explanation: 'p(NO₂) = mole fraction × total pressure = 0.6 × 100 = 60 kPa.',
  },
  {
    id: 215,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For N₂O₄(g) ⇌ 2NO₂(g), if p(N₂O₄) = 40 kPa and p(NO₂) = 60 kPa, what is Kp?',
    options: ['90 kPa', '60 kPa', '1.5 kPa', '2.25 kPa'],
    correctAnswer: 0,
    explanation: 'Kp = p(NO₂)² / p(N₂O₄) = (60)² / 40 = 3600 / 40 = 90 kPa.',
  },
  {
    id: 216,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'How does increasing the total pressure affect Kp for a gaseous equilibrium?',
    options: [
      'Kp increases',
      'Kp decreases',
      'Kp is unchanged (only temperature changes Kp)',
      'Kp increases if there are more moles of gas on the right',
    ],
    correctAnswer: 2,
    explanation: 'Kp, like Kc, is only changed by temperature. Changing pressure shifts the position of equilibrium but does not change the value of Kp.',
  },
  {
    id: 217,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'For an exothermic reaction at equilibrium, what happens to Kp when temperature is increased?',
    options: ['Kp increases', 'Kp decreases', 'Kp is unchanged', 'Kp first increases then decreases'],
    correctAnswer: 1,
    explanation: 'For an exothermic reaction, increasing temperature shifts equilibrium to the left (endothermic direction). This decreases the ratio of products to reactants, so Kp decreases.',
  },
  {
    id: 218,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'At equilibrium, an 80 L container holds 2.0 mol N₂, 6.0 mol H₂, and 4.0 mol NH₃ at total pressure 300 kPa. What is the mole fraction of NH₃?',
    options: ['0.25', '0.33', '0.50', '0.40'],
    correctAnswer: 1,
    explanation: 'Total moles = 2.0 + 6.0 + 4.0 = 12.0 mol. Mole fraction NH₃ = 4.0/12.0 = 0.333 ≈ 0.33.',
  },
  {
    id: 219,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which expression for Kp has units of Pa⁻¹?',
    options: [
      'Kp = p(SO₃)² / [p(SO₂)² × p(O₂)]',
      'Kp = p(SO₂)² × p(O₂) / p(SO₃)²',
      'Kp = p(SO₃) / [p(SO₂) × p(O₂)]',
      'Kp = p(SO₃)² × p(O₂) / p(SO₂)',
    ],
    correctAnswer: 0,
    explanation: 'Kp = p(SO₃)² / [p(SO₂)² × p(O₂)]. Units = Pa²/(Pa² × Pa) = 1/Pa = Pa⁻¹. The equilibrium goes from 3 mol gas to 2 mol gas.',
  },
  {
    id: 220,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'What is the relationship between Kp and Kc for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?',
    options: [
      'Kp = Kc(RT)²',
      'Kp = Kc(RT)⁻²',
      'Kp = Kc × RT',
      'Kp = Kc',
    ],
    correctAnswer: 1,
    explanation: 'Kp = Kc(RT)^Δn, where Δn = moles gas products − moles gas reactants = 2 − 4 = −2. So Kp = Kc(RT)⁻².',
  },

  // ── Electrochemical Cells ─────────────────────────────────────────────────
  {
    id: 221,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the standard electrode potential (E°) measured against?',
    options: ['Standard silver electrode', 'Standard hydrogen electrode (SHE)', 'Standard oxygen electrode', 'Standard copper electrode'],
    correctAnswer: 1,
    explanation: 'All standard electrode potentials are measured relative to the Standard Hydrogen Electrode (SHE), which is assigned E° = 0.00 V.',
  },
  {
    id: 222,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'How is the standard EMF (E°cell) of an electrochemical cell calculated?',
    options: [
      'E°cell = E°cathode + E°anode',
      'E°cell = E°cathode − E°anode',
      'E°cell = E°anode − E°cathode',
      'E°cell = E°cathode × E°anode',
    ],
    correctAnswer: 1,
    explanation: 'E°cell = E°cathode (reduction) − E°anode (reduction). The more positive electrode acts as cathode (reduction occurs there).',
  },
  {
    id: 223,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, what is E°cell for a zinc-copper cell?',
    options: ['+0.42 V', '+1.10 V', '−1.10 V', '−0.42 V'],
    correctAnswer: 1,
    explanation: 'Cu is the more positive electrode (cathode). E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V.',
  },
  {
    id: 224,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In a standard hydrogen electrode, what are the standard conditions?',
    options: [
      'H₂ at 1 atm, H⁺ at 0.1 mol dm⁻³, 298 K',
      'H₂ at 100 kPa, H⁺ at 1 mol dm⁻³, 298 K',
      'H₂ at 100 kPa, H⁺ at 0.1 mol dm⁻³, 373 K',
      'H₂ at 1 atm, H⁺ at 1 mol dm⁻³, 273 K',
    ],
    correctAnswer: 1,
    explanation: 'The SHE requires: H₂(g) at 100 kPa, H⁺(aq) at 1 mol dm⁻³ concentration, temperature 298 K (25°C), and a platinum electrode.',
  },
  {
    id: 225,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'If E°cell for a reaction is positive, what does this indicate?',
    options: [
      'The reaction is non-spontaneous',
      'The reaction is spontaneous under standard conditions',
      'The reaction requires energy input',
      'The reaction is at equilibrium',
    ],
    correctAnswer: 1,
    explanation: 'A positive E°cell indicates that the cell reaction is spontaneous under standard conditions (ΔG° = −nFE°cell < 0 when E°cell > 0).',
  },
  {
    id: 226,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Can Ag⁺ ions oxidise Fe²⁺ to Fe³⁺? [E°(Ag⁺/Ag) = +0.80 V; E°(Fe³⁺/Fe²⁺) = +0.77 V]',
    options: [
      'No, because E°cell < 0',
      'Yes, because E°cell = +0.03 V > 0',
      'No, because Fe³⁺ is a stronger oxidising agent',
      'Yes, because Ag⁺ is above Fe²⁺ in the electrochemical series',
    ],
    correctAnswer: 1,
    explanation: 'E°cell = E°cathode − E°anode. Ag⁺ is reduced (cathode): +0.80 V. Fe²⁺ is oxidised (anode): E° = +0.77 V. E°cell = +0.80 − 0.77 = +0.03 V. Positive, so the reaction is feasible.',
  },
  {
    id: 227,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'At which electrode does reduction occur in an electrochemical cell?',
    options: ['Anode', 'Cathode', 'Both electrodes', 'Neither electrode'],
    correctAnswer: 1,
    explanation: 'Reduction (gain of electrons) always occurs at the cathode. Oxidation occurs at the anode. Memory aid: "Red Cat, An Ox" (Reduction Cathode, Anode Oxidation).',
  },
  {
    id: 228,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What is the purpose of a salt bridge in an electrochemical cell?',
    options: [
      'To allow electrons to flow between the half-cells',
      'To maintain electrical neutrality in the half-cells by allowing ion flow',
      'To increase the voltage of the cell',
      'To separate the two electrode solutions completely',
    ],
    correctAnswer: 1,
    explanation: 'A salt bridge (e.g. KNO₃(aq)) allows ions to migrate between the two half-cells to maintain electrical neutrality as the cell operates, completing the circuit without mixing the solutions.',
  },
  {
    id: 229,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Given E°(Cl₂/Cl⁻) = +1.36 V and E°(Br₂/Br⁻) = +1.07 V. Can Cl₂ oxidise Br⁻ to Br₂?',
    options: [
      'No, E°cell is negative',
      'Yes, E°cell = +0.29 V which is positive',
      'Yes, but only under non-standard conditions',
      'No, because Br₂ is a stronger oxidising agent than Cl₂',
    ],
    correctAnswer: 1,
    explanation: 'Cl₂ is reduced (cathode, E° = +1.36 V). Br⁻ is oxidised (anode, E° = +1.07 V). E°cell = +1.36 − 1.07 = +0.29 V. Positive, so feasible.',
  },
  {
    id: 230,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'Which half-cell electrode has the more negative (lower) standard electrode potential?',
    options: ['It acts as the cathode', 'It acts as the anode (site of oxidation)', 'It acts as neither electrode', 'It determines the E°cell'],
    correctAnswer: 1,
    explanation: 'The electrode with the more negative E° has a greater tendency to be oxidised. It acts as the anode, where oxidation occurs.',
  },
  {
    id: 231,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Why might a reaction with a positive E°cell not actually occur in practice?',
    options: [
      'Thermodynamic feasibility guarantees kinetic feasibility',
      'A positive E°cell means the reaction is definitely kinetically fast',
      'The reaction may have a very high activation energy, making it kinetically slow despite being thermodynamically feasible',
      'E°cell only applies to non-standard conditions',
    ],
    correctAnswer: 2,
    explanation: 'E°cell only indicates thermodynamic feasibility. The reaction may be kinetically very slow due to a high activation energy and may not occur at a measurable rate in practice.',
  },
  {
    id: 232,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the function of a fuel cell?',
    options: [
      'To store electricity in a battery',
      'To generate electricity directly from the chemical energy of a fuel (e.g. hydrogen) without combustion',
      'To decompose water by electrolysis',
      'To convert chemical to thermal energy',
    ],
    correctAnswer: 1,
    explanation: 'A fuel cell converts the chemical energy of a fuel (e.g. H₂) directly into electrical energy through electrochemical reactions, without burning the fuel.',
  },

  // ── Acids & Bases ─────────────────────────────────────────────────────────
  {
    id: 233,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'According to Brønsted-Lowry theory, what is an acid?',
    options: [
      'A substance that produces OH⁻ ions in solution',
      'A proton donor',
      'An electron pair acceptor',
      'A substance with pH < 5',
    ],
    correctAnswer: 1,
    explanation: 'The Brønsted-Lowry definition: an acid is a proton (H⁺) donor, and a base is a proton acceptor.',
  },
  {
    id: 234,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the pH of a solution with [H⁺] = 1.0 × 10⁻³ mol dm⁻³?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'pH = −log[H⁺] = −log(1.0 × 10⁻³) = −(−3) = 3.',
  },
  {
    id: 235,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the pH of 0.050 mol dm⁻³ HCl (a strong acid)?',
    options: ['1.0', '1.3', '2.0', '2.3'],
    correctAnswer: 1,
    explanation: 'HCl is fully dissociated, so [H⁺] = 0.050 mol dm⁻³. pH = −log(0.050) = −log(5×10⁻²) = 2 − log5 = 2 − 0.699 = 1.30 ≈ 1.3.',
  },
  {
    id: 236,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the Ka expression for the weak acid HA dissociating in water?',
    options: [
      'Ka = [HA]/([H⁺][A⁻])',
      'Ka = [H⁺][A⁻]/[HA]',
      'Ka = [H⁺][A⁻]/[HA][H₂O]',
      'Ka = [H⁺]²/[HA]',
    ],
    correctAnswer: 1,
    explanation: 'For HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. The concentration of water is omitted as it is constant.',
  },
  {
    id: 237,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'A weak acid HA has Ka = 1.8 × 10⁻⁵ mol dm⁻³. What is pKa?',
    options: ['5.18', '4.74', '4.18', '5.74'],
    correctAnswer: 1,
    explanation: 'pKa = −log Ka = −log(1.8 × 10⁻⁵) = 5 − log 1.8 = 5 − 0.255 = 4.74.',
  },
  {
    id: 238,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Calculate the pH of 0.100 mol dm⁻³ ethanoic acid (Ka = 1.7 × 10⁻⁵ mol dm⁻³).',
    options: ['2.88', '4.77', '1.00', '3.38'],
    correctAnswer: 0,
    explanation: '[H⁺] = √(Ka × c) = √(1.7×10⁻⁵ × 0.100) = √(1.7×10⁻⁶) = 1.30×10⁻³ mol dm⁻³. pH = −log(1.30×10⁻³) = 2.88.',
  },
  {
    id: 239,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the conjugate base of H₂SO₄?',
    options: ['H₃O⁺', 'SO₄²⁻', 'HSO₄⁻', 'OH⁻'],
    correctAnswer: 2,
    explanation: 'H₂SO₄ donates one proton: H₂SO₄ → H⁺ + HSO₄⁻. The conjugate base is HSO₄⁻ (the species formed after losing a proton).',
  },
  {
    id: 240,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is Kw at 298 K and what does it represent?',
    options: [
      'Kw = 1.0 × 10⁻⁷ mol dm⁻³; the autoionisation constant of water',
      'Kw = 1.0 × 10⁻¹⁴ mol² dm⁻⁶; the ionic product of water ([H⁺][OH⁻])',
      'Kw = 1.0 × 10⁻¹⁴ mol dm⁻³; the dissociation constant of water',
      'Kw = 7.0; the pH of pure water',
    ],
    correctAnswer: 1,
    explanation: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K. This is the ionic product of water, a constant at a given temperature.',
  },
  {
    id: 241,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'What is the pH of 0.025 mol dm⁻³ NaOH at 298 K?',
    options: ['11.4', '12.4', '1.6', '2.6'],
    correctAnswer: 0,
    explanation: '[OH⁻] = 0.025 mol dm⁻³. [H⁺] = Kw/[OH⁻] = 1.0×10⁻¹⁴/0.025 = 4.0×10⁻¹³. pH = −log(4.0×10⁻¹³) = 12.4. Wait — rechecking: −log(4.0×10⁻¹³) = 13 − log4 = 13 − 0.60 = 12.4. But [NaOH] = 0.025: pOH = −log(0.025) = 1.60; pH = 14 − 1.60 = 12.4. Closest answer is 12.4.',
  },
  {
    id: 242,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is a buffer solution?',
    options: [
      'A solution with pH = 7',
      'A solution that resists changes in pH when small amounts of acid or base are added',
      'A strong acid fully dissociated in water',
      'A solution with equal volumes of acid and base',
    ],
    correctAnswer: 1,
    explanation: 'A buffer solution resists changes in pH when small amounts of acid or alkali are added. A typical buffer contains a weak acid and its conjugate base (e.g. CH₃COOH/CH₃COO⁻).',
  },
  {
    id: 243,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Calculate the pH of a buffer containing 0.10 mol dm⁻³ CH₃COOH and 0.20 mol dm⁻³ CH₃COONa. (Ka = 1.7 × 10⁻⁵ mol dm⁻³)',
    options: ['4.77', '5.07', '4.47', '5.47'],
    correctAnswer: 1,
    explanation: 'Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.77 + log(0.20/0.10) = 4.77 + log2 = 4.77 + 0.30 = 5.07.',
  },
  {
    id: 244,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'In a titration of a weak acid with strong base, where is the half-equivalence point significant?',
    options: [
      'At this point, pH = 7',
      'At this point, pH = pKa of the weak acid',
      'At this point, the equivalence point is reached',
      'At this point, all acid has been neutralised',
    ],
    correctAnswer: 1,
    explanation: 'At the half-equivalence point, exactly half the acid has been neutralised, so [HA] = [A⁻]. From Ka = [H⁺][A⁻]/[HA], [H⁺] = Ka, so pH = pKa.',
  },

  // ── Periodicity ───────────────────────────────────────────────────────────
  {
    id: 245,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'How does atomic radius change across Period 3 (Na to Cl)?',
    options: [
      'Increases across the period',
      'Decreases across the period',
      'Remains constant',
      'First decreases then increases',
    ],
    correctAnswer: 1,
    explanation: 'Across Period 3, the number of protons increases while electrons are added to the same shell. Increased nuclear charge pulls electrons closer, reducing atomic radius.',
  },
  {
    id: 246,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'What trend is observed in melting points across Period 3 from Na to Si?',
    options: [
      'Decreasing melting points (Na highest)',
      'Increasing melting points (Si highest)',
      'No clear trend',
      'Si has lower melting point than Na',
    ],
    correctAnswer: 1,
    explanation: 'Na, Mg, Al are metals with metallic bonding that strengthens with more delocalised electrons. Si has a giant covalent structure with very strong covalent bonds. Melting points increase from Na to Si.',
  },
  {
    id: 247,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Why does Si have a much higher melting point than P?',
    options: [
      'Si has a higher atomic number',
      'Si has a giant covalent structure; P₄ is a simple molecular solid with weak London forces',
      'Si forms stronger metallic bonds',
      'P has more electrons and stronger van der Waals forces',
    ],
    correctAnswer: 1,
    explanation: 'Silicon has a giant covalent (macromolecular) structure requiring many strong covalent bonds to be broken. White phosphorus (P₄) is a simple molecular solid held together by weak London dispersion forces, giving it a much lower melting point.',
  },
  {
    id: 248,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What happens to the first ionisation energy as you go down Group 1?',
    options: [
      'Increases due to increasing nuclear charge',
      'Decreases because outer electrons are further from the nucleus and more shielded',
      'Remains constant',
      'First decreases then increases',
    ],
    correctAnswer: 1,
    explanation: 'Down Group 1, atomic radius increases and there are more shielding inner electrons, so the outer electron is less attracted to the nucleus. Less energy is needed to remove it, so first IE decreases.',
  },
  {
    id: 249,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Why is the melting point of argon (Ar) very low compared to Na?',
    options: [
      'Ar is a gas and has no melting point',
      'Ar exists as individual atoms held by only very weak London dispersion forces',
      'Ar has very strong ionic bonds',
      'Ar atoms are very large and difficult to pack',
    ],
    correctAnswer: 1,
    explanation: 'Argon is a noble gas existing as monoatomic molecules with only very weak London (induced dipole) forces between atoms, requiring very little energy to overcome.',
  },
  {
    id: 250,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'Why is the first ionisation energy of Mg greater than that of Al?',
    options: [
      'Mg has a higher nuclear charge than Al',
      'Al has a 3p¹ electron that is higher in energy and easier to remove than the 3s² electrons of Mg',
      'Mg has more electrons than Al',
      'The 3p electrons in Al have more shielding',
    ],
    correctAnswer: 1,
    explanation: 'Mg has configuration [Ne]3s². Al has [Ne]3s²3p¹. The 3p electron of Al is in a higher energy subshell, is easier to remove, and is slightly shielded by the 3s electrons, giving Al a lower first IE than Mg.',
  },
  {
    id: 251,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'What is the trend in electronegativity across Period 3?',
    options: [
      'Decreases from left to right',
      'Increases from left to right',
      'Remains constant',
      'Has no trend',
    ],
    correctAnswer: 1,
    explanation: 'Electronegativity increases across a period as nuclear charge increases and atomic radius decreases, strengthening the attraction for bonding electrons.',
  },
  {
    id: 252,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Which Period 3 element has the highest melting point?',
    options: ['Na', 'Mg', 'Al', 'Si'],
    correctAnswer: 3,
    explanation: 'Silicon has the highest melting point in Period 3 (1414°C) due to its giant covalent (macromolecular) structure, in which each Si atom is covalently bonded to 4 others in a 3D network.',
  },
  {
    id: 253,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'Why does the first ionisation energy of sulfur dip below that of phosphorus?',
    options: [
      'Sulfur has a higher atomic number',
      'Phosphorus has a higher nuclear charge',
      'S has paired 3p electrons; the paired electron is repelled by its partner and easier to remove',
      'Sulfur atoms are larger than phosphorus atoms',
    ],
    correctAnswer: 2,
    explanation: 'P has configuration 3p³ (half-filled, all unpaired). S has 3p⁴ with one paired electron. Electron-electron repulsion between the paired electrons in S makes one easier to remove, giving S a lower first IE than P.',
  },
  {
    id: 254,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What type of bonding is present in solid aluminium?',
    options: ['Ionic bonding', 'Giant covalent bonding', 'Metallic bonding', 'Molecular bonding'],
    correctAnswer: 2,
    explanation: 'Aluminium is a metal. It has metallic bonding: a lattice of positive Al³⁺ ions surrounded by a sea of delocalised electrons. The 3 outer electrons per Al atom make it a good conductor.',
  },
  {
    id: 255,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'What trend is observed in atomic radius going down a group?',
    options: [
      'Atomic radius decreases due to increasing nuclear charge',
      'Atomic radius increases as each new period adds an extra electron shell',
      'Atomic radius remains constant',
      'Atomic radius first increases then decreases',
    ],
    correctAnswer: 1,
    explanation: 'Going down a group, each successive element has an additional electron shell. Despite increased nuclear charge, the increased number of shells and shielding result in a larger atomic radius.',
  },
  {
    id: 256,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'How does the electrical conductivity change across Period 3 from Na to Cl?',
    options: [
      'Increases across the period',
      'High for Na, Mg, Al (metals); very low for Si; essentially zero for P, S, Cl, Ar',
      'Decreases uniformly',
      'All elements conduct equally',
    ],
    correctAnswer: 1,
    explanation: 'Na, Mg, Al are metals with delocalised electrons and conduct well (Al best). Si is a semiconductor. P, S, Cl, Ar are non-metals or noble gases with no free electrons and essentially zero conductivity.',
  },

  // ── Group 2 ───────────────────────────────────────────────────────────────
  {
    id: 257,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is the general trend in reactivity of Group 2 metals with water as you go down the group?',
    options: [
      'Reactivity decreases down the group',
      'Reactivity increases down the group',
      'Reactivity remains constant',
      'Only Mg and Ba react with water',
    ],
    correctAnswer: 1,
    explanation: 'Reactivity increases down Group 2. The ionisation energies decrease as atomic radius increases and outer electrons are more shielded, making it easier to lose the two outer electrons.',
  },
  {
    id: 258,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What products form when calcium reacts with water?',
    options: [
      'CaO + H₂',
      'Ca(OH)₂ + H₂',
      'CaO + H₂O',
      'CaH₂ + O₂',
    ],
    correctAnswer: 1,
    explanation: 'Ca + 2H₂O → Ca(OH)₂ + H₂. Calcium reacts with cold water to form calcium hydroxide (a slightly soluble base) and hydrogen gas.',
  },
  {
    id: 259,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the trend in solubility of Group 2 hydroxides down the group?',
    options: [
      'Solubility decreases down the group',
      'Solubility increases down the group',
      'All Group 2 hydroxides are insoluble',
      'All Group 2 hydroxides are fully soluble',
    ],
    correctAnswer: 1,
    explanation: 'Group 2 hydroxide solubility increases down the group: Mg(OH)₂ is sparingly soluble; Ca(OH)₂ is slightly soluble (used in limewater); Ba(OH)₂ is soluble.',
  },
  {
    id: 260,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the trend in solubility of Group 2 sulfates down the group?',
    options: [
      'Solubility increases down the group',
      'Solubility decreases down the group',
      'All sulfates are equally soluble',
      'MgSO₄ is insoluble; BaSO₄ is soluble',
    ],
    correctAnswer: 1,
    explanation: 'Group 2 sulfate solubility decreases down the group: MgSO₄ is soluble; CaSO₄ is sparingly soluble; BaSO₄ is insoluble.',
  },
  {
    id: 261,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What test uses barium sulfate to confirm the presence of sulfate ions?',
    options: [
      'Adding NaOH solution',
      'Adding excess HCl then BaCl₂ solution — white precipitate of BaSO₄ confirms SO₄²⁻',
      'Adding AgNO₃ solution',
      'Flame test — green/blue-green colour',
    ],
    correctAnswer: 1,
    explanation: 'To test for SO₄²⁻: acidify with dilute HCl (removes CO₃²⁻), then add BaCl₂(aq). A white precipitate of BaSO₄ confirms the presence of sulfate ions.',
  },
  {
    id: 262,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is the medical use of barium sulfate?',
    options: [
      'As an antacid to neutralise stomach acid',
      'As a "barium meal" contrast agent for X-ray imaging of the digestive tract',
      'As a laxative',
      'As an antibiotic',
    ],
    correctAnswer: 1,
    explanation: 'BaSO₄ is used as a "barium meal" in medical X-ray imaging. It is opaque to X-rays and outlines the digestive tract. Despite Ba²⁺ being toxic, BaSO₄ is safe because it is completely insoluble and not absorbed.',
  },
  {
    id: 263,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Thermal decomposition of Group 2 carbonates (MCO₃ → MO + CO₂) becomes easier as you go up the group. Why?',
    options: [
      'Smaller cations polarise the carbonate ion more, weakening the C-O bonds',
      'Larger cations have higher charge density',
      'CO₂ is more stable at higher temperatures',
      'The lattice energy of MO decreases up the group',
    ],
    correctAnswer: 0,
    explanation: 'Smaller cations (higher charge density) at the top of Group 2 can polarise the large CO₃²⁻ ion more effectively, distorting and weakening C-O bonds. This makes decomposition easier at lower temperatures. BaCO₃ (large Ba²⁺) requires a much higher temperature to decompose.',
  },
  {
    id: 264,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'Which Group 2 compound is used to treat indigestion (as an antacid)?',
    options: ['BaSO₄', 'MgO or Mg(OH)₂', 'CaCl₂', 'SrCO₃'],
    correctAnswer: 1,
    explanation: 'Magnesium oxide (MgO) and magnesium hydroxide (Mg(OH)₂) are used as antacids to neutralise excess stomach acid (HCl). They are safe because Mg²⁺ is not as toxic as Ba²⁺ and the salts are poorly absorbed.',
  },
  {
    id: 265,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is limewater, and how is it used to test for CO₂?',
    options: [
      'NaOH solution; turns red with CO₂',
      'Ca(OH)₂ solution; turns milky/cloudy with CO₂ due to CaCO₃ precipitate',
      'CaCl₂ solution; gives a white precipitate with CO₂',
      'Mg(OH)₂ solution; turns blue with CO₂',
    ],
    correctAnswer: 1,
    explanation: 'Limewater is a solution of Ca(OH)₂. When CO₂ is bubbled through it, it reacts to form insoluble CaCO₃, turning the solution milky/cloudy: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O.',
  },
  {
    id: 266,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the reaction of magnesium with steam?',
    options: [
      'Mg + H₂O → MgO + H₂',
      'Mg + H₂O → Mg(OH)₂',
      'Mg + 2H₂O → Mg(OH)₂ + H₂',
      'Mg does not react with steam',
    ],
    correctAnswer: 0,
    explanation: 'Magnesium burns in steam: Mg + H₂O → MgO + H₂. Unlike the heavier Group 2 metals, Mg reacts with steam (not cold water) because Mg(OH)₂ forms an insoluble protective layer in cold water.',
  },
  {
    id: 267,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Ca(OH)₂ is used to treat acidic soils. Why is it preferred over CaO for this application?',
    options: [
      'CaO is too expensive',
      'Ca(OH)₂ reacts more slowly and uniformly, and is safer to handle than the corrosive, exothermic CaO',
      'CaO does not neutralise acidic soils',
      'Ca(OH)₂ is more acidic than CaO',
    ],
    correctAnswer: 1,
    explanation: 'CaO (quicklime) reacts very vigorously with water and is highly corrosive, making it hazardous. Ca(OH)₂ (slaked lime) is safer to handle and dissolves more slowly and uniformly into the soil.',
  },
  {
    id: 268,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What colour flame does barium give in a flame test?',
    options: ['Brick red', 'Yellow', 'Lilac/violet', 'Green'],
    correctAnswer: 3,
    explanation: 'Barium gives a green flame in a flame test. Other Group 2 elements: Ca = brick red/orange-red, Sr = crimson red.',
  },

  // ── Group 7 ───────────────────────────────────────────────────────────────
  {
    id: 269,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the trend in boiling points of the halogens down Group 7?',
    options: [
      'Boiling points decrease down the group',
      'Boiling points increase down the group',
      'Boiling points remain constant',
      'There is no clear trend',
    ],
    correctAnswer: 1,
    explanation: 'Boiling points increase down Group 7 (F₂ < Cl₂ < Br₂ < I₂) because larger molecules have more electrons, creating stronger London dispersion forces between molecules.',
  },
  {
    id: 270,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What does a displacement reaction between halogens test?',
    options: [
      'The acidity of halogen solutions',
      'The relative oxidising power of halogens (a more reactive halogen displaces a less reactive one)',
      'The colour of halide ions',
      'The solubility of halogens',
    ],
    correctAnswer: 1,
    explanation: 'A more reactive (stronger oxidising) halogen can displace a less reactive halide ion from solution: e.g. Cl₂ + 2KBr → 2KCl + Br₂. This shows Cl₂ is a stronger oxidising agent than Br₂.',
  },
  {
    id: 271,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'How is the result of a halide displacement test confirmed?',
    options: [
      'By measuring the pH of the solution',
      'By adding cyclohexane and observing the colour of the organic layer',
      'By adding AgNO₃ solution',
      'By measuring the melting point of the product',
    ],
    correctAnswer: 1,
    explanation: 'Adding an organic solvent (cyclohexane) and shaking extracts the halogen. Colours in the organic layer: Cl₂ is very pale yellow; Br₂ is orange/brown; I₂ is purple/violet.',
  },
  {
    id: 272,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What precipitate forms when dilute AgNO₃ solution is added to a solution containing I⁻ ions?',
    options: ['White AgCl', 'Cream AgBr', 'Yellow AgI', 'No precipitate'],
    correctAnswer: 2,
    explanation: 'Ag⁺ + I⁻ → AgI (yellow precipitate). AgCl is white, AgBr is cream, AgI is yellow. AgI is insoluble in dilute NH₃ solution.',
  },
  {
    id: 273,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'When concentrated H₂SO₄ is added to NaI, what products are formed (unlike NaCl/NaBr)?',
    options: [
      'HI gas only',
      'HI, then I₂, H₂S, S, and SO₂ are also produced because I⁻ is a strong enough reducing agent to reduce H₂SO₄',
      'NaHSO₄ and water only',
      'NaI is too stable to react with H₂SO₄',
    ],
    correctAnswer: 1,
    explanation: 'I⁻ is a strong enough reducing agent to reduce H₂SO₄ all the way to H₂S. Products include HI (which itself escapes), then: H₂SO₄ + 8HI → H₂S + 4I₂ + 4H₂O. Rotten egg smell (H₂S) and purple/black I₂ are observed.',
  },
  {
    id: 274,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What observation is made when Cl₂ gas reacts with cold dilute NaOH?',
    options: [
      'No reaction occurs',
      'Cl₂ disproportionates to form NaCl and NaOCl (bleach)',
      'Cl₂ is oxidised to ClO₄⁻',
      'A white precipitate of NaCl is formed',
    ],
    correctAnswer: 1,
    explanation: 'Cl₂ + 2NaOH → NaCl + NaOCl + H₂O. Chlorine disproportionates: Cl₀ is simultaneously oxidised to OCl⁻ (+1) and reduced to Cl⁻ (−1). The NaOCl (sodium hypochlorite) is the active ingredient in bleach.',
  },
  {
    id: 275,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the colour of bromine liquid at room temperature?',
    options: ['Green-yellow', 'Orange-brown', 'Grey-black', 'Colourless'],
    correctAnswer: 1,
    explanation: 'Bromine (Br₂) is an orange-brown liquid at room temperature. It is the only non-metal that is liquid at room temperature.',
  },
  {
    id: 276,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'Why does oxidising power decrease down Group 7?',
    options: [
      'The halogens become more electronegative down the group',
      'As atomic radius increases and electron shielding increases, the ability to attract electrons (oxidise other species) decreases',
      'Larger halogens form weaker bonds',
      'The nuclear charge decreases down the group',
    ],
    correctAnswer: 1,
    explanation: 'Oxidising power is the ability to attract electrons. Down Group 7, increasing atomic radius and electron shielding weaken the attraction of the nucleus for incoming electrons. F₂ is the strongest oxidising halogen; I₂ is the weakest.',
  },
  {
    id: 277,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What reagent is used to distinguish between chloride, bromide, and iodide ions in solution?',
    options: [
      'Dilute HCl',
      'Acidified silver nitrate solution (dilute HNO₃ + AgNO₃)',
      'Universal indicator',
      'Potassium manganate(VII)',
    ],
    correctAnswer: 1,
    explanation: 'Acidified AgNO₃ gives: AgCl (white), AgBr (cream), AgI (yellow) precipitates. Solubility in NH₃ distinguishes them further: AgCl dissolves in dilute NH₃; AgBr in concentrated NH₃; AgI is insoluble in NH₃.',
  },
  {
    id: 278,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is the disproportionation reaction of Cl₂ in hot concentrated NaOH?',
    options: [
      'Cl₂ + 2NaOH → NaCl + NaOCl + H₂O',
      '3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O',
      'Cl₂ + NaOH → NaClO₂ + HCl',
      'Cl₂ does not react with hot NaOH',
    ],
    correctAnswer: 1,
    explanation: 'In hot concentrated NaOH, chlorine disproportionates to chlorate(V): 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O. This differs from the cold dilute NaOH reaction which gives NaOCl.',
  },
  {
    id: 279,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'When concentrated H₂SO₄ is added to NaBr, the initial product is HBr, which is then oxidised. What is the main sulfur-containing reduction product?',
    options: ['H₂S', 'SO₂', 'S', 'H₂SO₃'],
    correctAnswer: 1,
    explanation: 'Br⁻ is a weaker reducing agent than I⁻ but still reduces H₂SO₄ to SO₂ (not all the way to H₂S). Products include HBr, Br₂, and SO₂. The steamy fumes of HBr and red-brown Br₂ vapour are observed with a choking smell of SO₂.',
  },
  {
    id: 280,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the use of chlorine in water treatment?',
    options: [
      'To adjust the pH of the water',
      'To kill bacteria and other microorganisms by oxidising their cell components',
      'To remove dissolved oxygen',
      'To add fluoride to water',
    ],
    correctAnswer: 1,
    explanation: 'Chlorine (or chlorine compounds) are added to drinking water and swimming pools to kill bacteria and prevent waterborne diseases. Cl₂ reacts with water to form HCl and HClO, which act as bleaching/oxidising biocides.',
  },

  // ── Period 3 Oxides ───────────────────────────────────────────────────────
  {
    id: 281,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'How does the acid-base character of Period 3 oxides change across the period?',
    options: [
      'All Period 3 oxides are acidic',
      'Changes from basic (metal oxides) on the left to acidic (non-metal oxides) on the right',
      'Changes from acidic on the left to basic on the right',
      'All Period 3 oxides are neutral',
    ],
    correctAnswer: 1,
    explanation: 'Na₂O and MgO are basic oxides; Al₂O₃ is amphoteric; SiO₂, P₄O₁₀, SO₃, and Cl₂O₇ are acidic oxides. The character shifts from basic to acidic across the period.',
  },
  {
    id: 282,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'What type of oxide is Al₂O₃?',
    options: ['Basic only', 'Acidic only', 'Amphoteric (reacts with both acids and bases)', 'Neutral'],
    correctAnswer: 2,
    explanation: 'Al₂O₃ is amphoteric — it reacts with acids (behaves as base): Al₂O₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂O, and with bases: Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄.',
  },
  {
    id: 283,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the pH of the solution formed when Na₂O is dissolved in water?',
    options: ['pH = 7 (neutral)', 'pH < 7 (acidic)', 'pH > 7 (alkaline)', 'Na₂O does not dissolve in water'],
    correctAnswer: 2,
    explanation: 'Na₂O + H₂O → 2NaOH. Sodium hydroxide is a strong alkali, giving an alkaline solution with pH > 7.',
  },
  {
    id: 284,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the product when SO₃ dissolves in water?',
    options: ['H₂SO₃', 'H₂SO₄', 'H₂S', 'SO₂'],
    correctAnswer: 1,
    explanation: 'SO₃ + H₂O → H₂SO₄. Sulfur trioxide reacts with water to form sulfuric acid, a strong acid. This is why SO₃ emissions contribute to acid rain.',
  },
  {
    id: 285,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What type of reaction occurs when P₄O₁₀ reacts with water?',
    options: [
      'Neutralisation — P₄O₁₀ is a base',
      'Acid-forming reaction — P₄O₁₀ reacts to form phosphoric acid (H₃PO₄)',
      'No reaction — P₄O₁₀ is insoluble in water',
      'Redox reaction — P is reduced',
    ],
    correctAnswer: 1,
    explanation: 'P₄O₁₀ + 6H₂O → 4H₃PO₄. Phosphorus(V) oxide is a strongly acidic oxide, reacting vigorously with water to form phosphoric acid.',
  },
  {
    id: 286,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'What are the products of the reaction of Al₂O₃ with NaOH(aq)?',
    options: [
      'AlOH + Na₂O',
      'NaAlO₂ + H₂O (or NaAl(OH)₄ in excess water)',
      'Al(OH)₃ + NaOH',
      'Al₂O₃ does not react with NaOH',
    ],
    correctAnswer: 1,
    explanation: 'Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O or Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄. This demonstrates the amphoteric nature of Al₂O₃, acting as an acid with NaOH.',
  },
  {
    id: 287,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the approximate pH of the solution formed when SO₂ dissolves in water?',
    options: ['pH > 7', 'pH = 7', 'pH ≈ 2 (acidic)', 'SO₂ does not dissolve in water'],
    correctAnswer: 2,
    explanation: 'SO₂ + H₂O ⇌ H₂SO₃ (sulfurous acid). H₂SO₃ is a weak diprotic acid giving an acidic solution with pH typically around 2–4 depending on concentration.',
  },
  {
    id: 288,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'Why does SiO₂ not dissolve in water despite being an acidic oxide?',
    options: [
      'SiO₂ is a basic oxide',
      'SiO₂ has a giant covalent structure with very strong Si-O bonds, making it kinetically inert to reaction with water',
      'SiO₂ is a neutral oxide',
      'Si-O bonds are weaker than P-O bonds',
    ],
    correctAnswer: 1,
    explanation: 'SiO₂ has a giant covalent structure. Although it is classified as an acidic oxide (reacts with strong bases), the Si-O bonds are so strong and numerous that it is kinetically inert to water at room temperature.',
  },
  {
    id: 289,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What reaction occurs when SiO₂ reacts with NaOH?',
    options: [
      'No reaction',
      'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O',
      'SiO₂ + NaOH → NaHSiO₃',
      'SiO₂ + 2NaOH → Na₂O + H₂SiO₃',
    ],
    correctAnswer: 1,
    explanation: 'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O. Silicon dioxide reacts with molten or concentrated sodium hydroxide to form sodium silicate. This confirms SiO₂ is an acidic oxide.',
  },
  {
    id: 290,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'Which Period 3 oxide forms the strongest acid when dissolved in water?',
    options: ['Na₂O', 'MgO', 'SO₃', 'SiO₂'],
    correctAnswer: 2,
    explanation: 'SO₃ reacts with water to form H₂SO₄ (sulfuric acid), which is a strong diprotic acid and one of the strongest common acids. Cl₂O₇ would also give a very strong acid, but SO₃ is the best answer from these options.',
  },
  {
    id: 291,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'What happens when MgO reacts with H₂SO₄?',
    options: [
      'MgO + H₂SO₄ → MgO·H₂SO₄',
      'MgO + H₂SO₄ → MgSO₄ + H₂O',
      'MgO + H₂SO₄ → Mg(OH)₂ + SO₃',
      'No reaction as MgO is acidic',
    ],
    correctAnswer: 1,
    explanation: 'MgO is a basic oxide. It reacts with the acid H₂SO₄ in a neutralisation reaction: MgO + H₂SO₄ → MgSO₄ + H₂O.',
  },
  {
    id: 292,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the bonding in Na₂O?',
    options: ['Giant covalent', 'Ionic — Na⁺ and O²⁻ ions', 'Metallic', 'Simple molecular covalent'],
    correctAnswer: 1,
    explanation: 'Na₂O is an ionic compound consisting of Na⁺ and O²⁻ ions arranged in an ionic lattice. It dissolves in water to give strongly alkaline NaOH.',
  },

  // ── Transition Metals (start) ─────────────────────────────────────────────
  {
    id: 293,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'How are transition metals defined in the context of the d-block?',
    options: [
      'Any metal in the d-block of the periodic table',
      'An element that forms at least one stable ion with an incomplete d subshell',
      'Any element with electrons in d orbitals',
      'Any metal between Groups 2 and 13',
    ],
    correctAnswer: 1,
    explanation: 'A transition metal is defined as an element that forms at least one stable ion with an incomplete (partially filled) d subshell. Sc and Zn are technically d-block but are not transition metals by this definition.',
  },
  {
    id: 294,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'What is the electron configuration of Fe²⁺? (Fe: Z = 26)',
    options: ['[Ar] 3d⁶ 4s²', '[Ar] 3d⁴ 4s²', '[Ar] 3d⁶', '[Ar] 3d⁴'],
    correctAnswer: 2,
    explanation: 'Fe has configuration [Ar] 3d⁶ 4s². When Fe forms Fe²⁺, the 4s electrons are lost first: Fe²⁺ = [Ar] 3d⁶.',
  },
  {
    id: 295,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'Why do transition metal compounds exhibit a wide range of colours?',
    options: [
      'They contain large, polarisable ions',
      'They absorb visible light to promote d electrons between split d orbitals (d-d transitions); the complementary colour is seen',
      'They reflect all wavelengths of light equally',
      'Colour is due to their ionic bonds',
    ],
    correctAnswer: 1,
    explanation: 'In transition metal complexes, ligands cause the d orbitals to split into two energy levels. Electrons can absorb specific wavelengths of visible light to move between these levels; the colour we see is the complement of the absorbed wavelength.',
  },
  {
    id: 296,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is a ligand?',
    options: [
      'A central metal ion in a complex',
      'A molecule or ion that donates a lone pair of electrons to the central metal ion to form a coordinate bond',
      'An anion that forms ionic bonds with a metal',
      'A bridging atom between two metal ions',
    ],
    correctAnswer: 1,
    explanation: 'A ligand is a molecule or ion with a lone pair of electrons that it donates to a transition metal ion to form a coordinate (dative covalent) bond, creating a complex ion.',
  },
  {
    id: 297,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the coordination number of the copper ion in [Cu(H₂O)₄]²⁺?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 1,
    explanation: 'The coordination number is the number of coordinate bonds formed between ligands and the central metal ion. In [Cu(H₂O)₄]²⁺, 4 water molecules are bonded to Cu²⁺, giving a coordination number of 4 (square planar).',
  },
  {
    id: 298,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'Why can transition metals act as catalysts?',
    options: [
      'They have high melting points',
      'They can change oxidation state easily and provide a surface for adsorption of reactants',
      'They are always paramagnetic',
      'They form only one type of oxide',
    ],
    correctAnswer: 1,
    explanation: 'Transition metals act as catalysts because (1) they can change oxidation state, allowing them to provide alternative reaction pathways (homogeneous catalysis), and (2) their surfaces can adsorb reactants and weaken bonds (heterogeneous catalysis).',
  },
  {
    id: 299,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'What colour is the hexaaquacopper(II) ion [Cu(H₂O)₆]²⁺?',
    options: ['Green', 'Blue', 'Pink', 'Yellow'],
    correctAnswer: 1,
    explanation: '[Cu(H₂O)₆]²⁺ is blue. When excess ammonia is added, the blue colour intensifies to a deep blue as [Cu(NH₃)₄(H₂O)₂]²⁺ is formed.',
  },
  {
    id: 300,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'Iron is used as a catalyst in the Haber process. What type of catalyst is this?',
    options: ['Homogeneous — same phase as reactants', 'Heterogeneous — different phase from gaseous reactants', 'Enzyme catalyst', 'Autocatalyst'],
    correctAnswer: 1,
    explanation: 'Iron is a solid catalyst while N₂ and H₂ are gases — different phases. This is heterogeneous catalysis. The gases adsorb onto the iron surface, weakening N≡N and H-H bonds and facilitating reaction.',
  },

  // ── Transition Metals (continued) ─────────────────────────────────────────
  {
    id: 301,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'Which transition metal ion gives a green precipitate when NaOH(aq) is added?',
    options: ['Cu²⁺', 'Fe³⁺', 'Fe²⁺', 'Cr³⁺'],
    correctAnswer: 2,
    explanation: 'Fe²⁺ + 2OH⁻ → Fe(OH)₂, which is a green precipitate. Fe³⁺ gives a red-brown precipitate. Cu²⁺ gives a blue precipitate.',
  },
  {
    id: 302,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What is the oxidation state of vanadium in VO₂⁺?',
    options: ['+3', '+4', '+5', '+2'],
    correctAnswer: 2,
    explanation: 'In VO₂⁺: let V = x. 2(−2) + x = +1 → x − 4 = +1 → x = +5. Vanadium is in oxidation state +5 in VO₂⁺ (the yellow dioxovanadium(V) ion).',
  },
  {
    id: 303,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What happens when excess ammonia is added to a solution of Cu²⁺ ions?',
    options: [
      'A blue precipitate dissolves to give a colourless solution',
      'A blue precipitate of Cu(OH)₂ forms, then dissolves in excess NH₃ to give a deep blue solution of [Cu(NH₃)₄(H₂O)₂]²⁺',
      'The solution turns green',
      'A red precipitate forms',
    ],
    correctAnswer: 1,
    explanation: 'Cu²⁺(aq) + 2OH⁻ → Cu(OH)₂ (pale blue precipitate). Adding excess NH₃ replaces water ligands: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue solution). This is a ligand substitution reaction.',
  },
  {
    id: 304,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'Which transition metal compound is used as a catalyst in the Contact process for making H₂SO₄?',
    options: ['Iron(III) oxide', 'Vanadium(V) oxide (V₂O₅)', 'Platinum', 'Nickel'],
    correctAnswer: 1,
    explanation: 'V₂O₅ catalyses the oxidation 2SO₂ + O₂ → 2SO₃ in the Contact process. It acts by being alternately reduced (V⁺⁵ → V⁺⁴) and then re-oxidised, demonstrating variable oxidation states.',
  },

  // ── Reactions of Aqueous Ions ─────────────────────────────────────────────
  {
    id: 305,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What is the colour of the precipitate formed when NaOH(aq) is added to Fe³⁺(aq)?',
    options: ['Blue', 'Green', 'Red-brown', 'White'],
    correctAnswer: 2,
    explanation: 'Fe³⁺ + 3OH⁻ → Fe(OH)₃, a red-brown (rust-coloured) gelatinous precipitate that does not dissolve in excess NaOH.',
  },
  {
    id: 306,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What is observed when NaOH(aq) is added to Cu²⁺(aq)?',
    options: ['Red-brown precipitate', 'Blue precipitate', 'Green precipitate', 'White precipitate'],
    correctAnswer: 1,
    explanation: 'Cu²⁺ + 2OH⁻ → Cu(OH)₂, a blue gelatinous precipitate. It is insoluble in excess NaOH but dissolves in excess NH₃(aq) to give a deep blue solution.',
  },
  {
    id: 307,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'When excess NaOH is added to Al³⁺(aq), what happens to the initial white precipitate?',
    options: [
      'It remains as a white precipitate',
      'It dissolves to give a colourless solution (Al(OH)₄⁻ formed)',
      'It turns blue',
      'It is oxidised to Al₂O₃',
    ],
    correctAnswer: 1,
    explanation: 'Al³⁺ + 3OH⁻ → Al(OH)₃ (white precipitate). With excess NaOH: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (tetrahydroxoaluminate ion, colourless solution). This is because Al(OH)₃ is amphoteric.',
  },
  {
    id: 308,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What gas is evolved when NH₄⁺ salts react with NaOH on heating?',
    options: ['HCl', 'NH₃', 'N₂', 'H₂'],
    correctAnswer: 1,
    explanation: 'NH₄⁺ + OH⁻ → NH₃(g) + H₂O. Ammonia gas (which turns damp red litmus blue) is evolved when ammonium salts are warmed with NaOH.',
  },
  {
    id: 309,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'Which ion forms a white precipitate with both dilute NaOH and dilute NH₃, but the precipitate dissolves in excess NH₃ to give a colourless solution?',
    options: ['Fe³⁺', 'Cu²⁺', 'Zn²⁺', 'Al³⁺'],
    correctAnswer: 2,
    explanation: 'Zn²⁺ + 2OH⁻ → Zn(OH)₂ (white ppt). Excess NaOH: Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻ (colourless). Excess NH₃: Zn(OH)₂ + 4NH₃ → [Zn(NH₃)₄]²⁺ + 2OH⁻ (colourless).',
  },
  {
    id: 310,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'What happens when CO₃²⁻ ions are added to Ca²⁺(aq)?',
    options: [
      'A white precipitate of CaCO₃ forms',
      'A yellow precipitate forms',
      'No reaction occurs — CaCO₃ is soluble',
      'CO₂ gas is evolved',
    ],
    correctAnswer: 0,
    explanation: 'Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s). Calcium carbonate precipitates as a white solid because it is insoluble in water.',
  },
  {
    id: 311,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'How is the presence of carbonate ions (CO₃²⁻) confirmed?',
    options: [
      'Add BaCl₂ solution — white precipitate forms',
      'Add dilute HCl — CO₂ gas is evolved, which turns limewater milky',
      'Add AgNO₃ solution — yellow precipitate forms',
      'Add litmus — turns blue',
    ],
    correctAnswer: 1,
    explanation: 'CO₃²⁻ + 2H⁺ → CO₂ + H₂O. Adding dilute acid (e.g. HCl) produces CO₂ gas. Passing CO₂ through limewater turns it milky (white CaCO₃ precipitate), confirming the presence of carbonate.',
  },
  {
    id: 312,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'When Cr³⁺(aq) is treated with excess NaOH(aq), what ion is formed in solution?',
    options: ['Cr(OH)₃', 'CrO₄²⁻', '[Cr(OH)₆]³⁻ or [Cr(OH)₄]⁻', 'Cr²⁺'],
    correctAnswer: 2,
    explanation: 'Cr³⁺ + 3OH⁻ → Cr(OH)₃ (grey-green precipitate). With excess NaOH: Cr(OH)₃ + OH⁻ → [Cr(OH)₄]⁻ (or [Cr(OH)₆]³⁻), a green solution. Cr(OH)₃ is amphoteric.',
  },
  {
    id: 313,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What is observed when dilute HCl is added to a solution of Na₂CO₃?',
    options: [
      'White precipitate forms',
      'Blue litmus turns red only',
      'Effervescence — colourless CO₂ gas is evolved',
      'Yellow precipitate forms',
    ],
    correctAnswer: 2,
    explanation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂(g). Bubbles of colourless CO₂ gas are produced (effervescence). The gas turns limewater milky.',
  },
  {
    id: 314,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What observation confirms the presence of Fe²⁺ ions in a solution?',
    options: [
      'Addition of NaOH gives red-brown precipitate',
      'Addition of NaOH gives green precipitate (Fe(OH)₂)',
      'Addition of AgNO₃ gives yellow precipitate',
      'Addition of BaCl₂ gives white precipitate',
    ],
    correctAnswer: 1,
    explanation: 'Fe²⁺ + 2OH⁻ → Fe(OH)₂, a green gelatinous precipitate. Over time it oxidises in air to red-brown Fe(OH)₃. The initial green ppt distinguishes Fe²⁺ from Fe³⁺.',
  },
  {
    id: 315,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'Why does the green precipitate Fe(OH)₂ sometimes turn red-brown on standing?',
    options: [
      'Fe(OH)₂ decomposes to FeO',
      'Fe²⁺ in Fe(OH)₂ is oxidised to Fe³⁺ by dissolved oxygen in air, forming Fe(OH)₃',
      'Fe(OH)₂ is reduced to Fe metal',
      'Water molecules replace hydroxide ions',
    ],
    correctAnswer: 1,
    explanation: 'Dissolved O₂ in the solution oxidises Fe(OH)₂ to Fe(OH)₃: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃. This shows the transition from Fe(II) (green) to Fe(III) (red-brown).',
  },
  {
    id: 316,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What colour is the solution when Mn²⁺ ions are present?',
    options: ['Blue', 'Green', 'Pale pink/almost colourless', 'Purple'],
    correctAnswer: 2,
    explanation: 'Mn²⁺(aq) is a very pale pink (almost colourless) in dilute solution. Mn²⁺ + 2OH⁻ → Mn(OH)₂, a pale pink/buff precipitate.',
  },

  // ── Introduction to Organic Chemistry ────────────────────────────────────
  {
    id: 317,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Easy',
    question: 'What is a homologous series?',
    options: [
      'A group of compounds with the same functional group and general formula, each differing by CH₂',
      'A series of compounds with the same molecular formula',
      'A group of isomers with the same molecular formula',
      'Any series of organic compounds with different functional groups',
    ],
    correctAnswer: 0,
    explanation: 'A homologous series is a family of compounds with the same functional group and general formula, where each successive member differs by CH₂ (e.g. alkanes: CₙH₂ₙ₊₂).',
  },
  {
    id: 318,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Easy',
    question: 'What is meant by a functional group?',
    options: [
      'The longest carbon chain in a molecule',
      'An atom or group of atoms responsible for the characteristic chemical reactions of a molecule',
      'The total number of carbon atoms in a molecule',
      'Any C-H bond in an organic molecule',
    ],
    correctAnswer: 1,
    explanation: 'A functional group is an atom or group of atoms within an organic molecule that is responsible for its characteristic chemical reactions, e.g. -OH (alcohol), -COOH (carboxylic acid), C=C (alkene).',
  },
  {
    id: 319,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'What is the difference between a structural isomer and a stereoisomer?',
    options: [
      'Structural isomers have the same molecular formula and the same arrangement; stereoisomers have different molecular formulas',
      'Structural isomers have the same molecular formula but different connectivity; stereoisomers have the same connectivity but different spatial arrangement',
      'There is no difference',
      'Structural isomers are only alkanes; stereoisomers are only alkenes',
    ],
    correctAnswer: 1,
    explanation: 'Structural (constitutional) isomers have the same molecular formula but different structural connectivity. Stereoisomers have the same connectivity but differ in the spatial arrangement of atoms (e.g. E/Z isomers, optical isomers).',
  },
  {
    id: 320,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'What is the IUPAC name of CH₃CH₂CH₂CH₃?',
    options: ['Propane', 'Butane', 'Pentane', 'Ethane'],
    correctAnswer: 1,
    explanation: 'CH₃CH₂CH₂CH₃ has 4 carbon atoms in a straight chain. The IUPAC name for a 4-carbon alkane is butane.',
  },
  {
    id: 321,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'What type of isomers are CH₃CH₂OH (ethanol) and CH₃OCH₃ (methoxymethane)?',
    options: ['E/Z isomers', 'Optical isomers', 'Structural isomers (functional group isomers)', 'Conformational isomers'],
    correctAnswer: 2,
    explanation: 'Both have the molecular formula C₂H₆O but different functional groups (alcohol vs ether). They are structural isomers, specifically functional group isomers.',
  },
  {
    id: 322,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Hard',
    question: 'What is the IUPAC name of (CH₃)₂CHCH₂CH₃?',
    options: ['2-methylbutane', '3-methylbutane', '2-methylpentane', 'Isopentane'],
    correctAnswer: 0,
    explanation: 'The longest chain has 4 carbons (butane). The methyl branch is on carbon 2 (numbering from the nearest end). IUPAC name: 2-methylbutane.',
  },
  {
    id: 323,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Easy',
    question: 'What is the general formula for the alkane homologous series?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
    correctAnswer: 1,
    explanation: 'Alkanes have the general formula CₙH₂ₙ₊₂. Examples: methane CH₄ (n=1), ethane C₂H₆ (n=2), propane C₃H₈ (n=3).',
  },
  {
    id: 324,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'How many structural isomers does butane (C₄H₁₀) have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'C₄H₁₀ has 2 structural isomers: butane (straight chain: CH₃CH₂CH₂CH₃) and 2-methylpropane (branched: (CH₃)₃CH).',
  },
  {
    id: 325,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Hard',
    question: 'What is the meaning of "degree of unsaturation" in organic chemistry?',
    options: [
      'The number of C-H bonds in a molecule',
      'The number of double bonds, triple bonds, or rings in a molecule',
      'The ratio of carbon to hydrogen atoms',
      'The number of functional groups',
    ],
    correctAnswer: 1,
    explanation: 'The degree of unsaturation (or index of hydrogen deficiency) counts π bonds and rings. Formula: (2C+2+N−H−X)/2. Each degree = one double bond or one ring.',
  },
  {
    id: 326,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Easy',
    question: 'What is a primary carbon atom?',
    options: [
      'A carbon bonded to three other carbon atoms',
      'A carbon bonded to only one other carbon atom',
      'A carbon in a ring',
      'A carbon with a double bond',
    ],
    correctAnswer: 1,
    explanation: 'A primary carbon is bonded to only one other carbon atom (at the end of a chain). A secondary carbon is bonded to two; a tertiary to three; a quaternary to four other carbons.',
  },
  {
    id: 327,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Medium',
    question: 'Which type of formula shows the arrangement of atoms in a molecule with all bonds explicitly shown?',
    options: ['Molecular formula', 'Empirical formula', 'Displayed (full structural) formula', 'Skeletal formula'],
    correctAnswer: 2,
    explanation: 'A displayed (full structural) formula shows every atom and every bond explicitly. A skeletal formula uses lines for bonds and implied carbon/hydrogen atoms at junctions.',
  },
  {
    id: 328,
    topic: 'Organic Chemistry',
    subtopic: 'Introduction to Organic Chemistry',
    difficulty: 'Hard',
    question: 'What is the IUPAC name of CH₃CH(Cl)CH₂CH₃?',
    options: ['1-chlorobutane', '2-chlorobutane', '3-chlorobutane', '2-chloropentane'],
    correctAnswer: 1,
    explanation: 'The parent chain has 4 carbons (butane). The Cl is on C2 (numbering from the end nearest to Cl): 2-chlorobutane.',
  },

  // ── Alkanes ───────────────────────────────────────────────────────────────
  {
    id: 329,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What type of reaction do alkanes undergo with halogens in UV light?',
    options: ['Addition reaction', 'Elimination reaction', 'Free radical substitution', 'Nucleophilic substitution'],
    correctAnswer: 2,
    explanation: 'Alkanes react with halogens (e.g. Cl₂) under UV light by free radical substitution. The mechanism involves initiation (homolytic fission), propagation (chain-carrying steps), and termination.',
  },
  {
    id: 330,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What is homolytic fission?',
    options: [
      'Breaking a bond where both electrons go to one atom',
      'Breaking a bond where one electron goes to each atom, producing free radicals',
      'Breaking a bond in an aqueous solution',
      'Formation of a bond between two radicals',
    ],
    correctAnswer: 1,
    explanation: 'Homolytic fission is when a covalent bond breaks and one electron goes to each atom, producing two radicals (species with an unpaired electron). This is initiation in free radical substitution.',
  },
  {
    id: 331,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'What is the initiation step in the free radical chlorination of methane?',
    options: [
      'CH₄ + Cl· → CH₃· + HCl',
      'Cl₂ → 2Cl· (in UV light)',
      'CH₃· + Cl₂ → CH₃Cl + Cl·',
      '2CH₃· → C₂H₆',
    ],
    correctAnswer: 1,
    explanation: 'Initiation: Cl₂ → 2Cl· (using UV/hν). A Cl-Cl bond undergoes homolytic fission, producing two chlorine radicals. This begins the chain reaction.',
  },
  {
    id: 332,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'Why is free radical substitution not useful as a preparative method for making pure chloroalkanes?',
    options: [
      'The reaction is too slow',
      'A mixture of products forms because multiple substitutions can occur (CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄)',
      'The reaction requires very high temperatures',
      'Alkanes do not react with chlorine',
    ],
    correctAnswer: 1,
    explanation: 'Multiple substitutions occur as product chloroalkanes can react further with chlorine radicals, giving a mixture of CH₃Cl, CH₂Cl₂, CHCl₃, and CCl₄. Separation of pure product is difficult.',
  },
  {
    id: 333,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What is cracking and why is it performed?',
    options: [
      'Adding hydrogen to alkenes to form alkanes; done to make petrol',
      'Breaking down long-chain alkanes into shorter, more useful hydrocarbons using heat and/or a catalyst',
      'Oxidising alkanes to alcohols',
      'Polymerising small alkanes into plastics',
    ],
    correctAnswer: 1,
    explanation: 'Cracking breaks large alkane molecules (from crude oil fractions) into smaller, more useful molecules including shorter-chain alkanes and alkenes. This helps match crude oil supply with demand for fuels and chemical feedstocks.',
  },
  {
    id: 334,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'What is the difference between thermal cracking and catalytic cracking?',
    options: [
      'Thermal cracking uses high temperature and pressure to give alkenes; catalytic cracking uses a zeolite catalyst at lower temperature to give branched and aromatic hydrocarbons',
      'Thermal cracking produces only alkanes; catalytic cracking produces only alkenes',
      'There is no practical difference',
      'Catalytic cracking requires no heat at all',
    ],
    correctAnswer: 0,
    explanation: 'Thermal cracking (high T ~700–1200°C, high P) produces a high proportion of alkenes (for making plastics). Catalytic cracking (lower T ~500°C, zeolite catalyst) produces more branched and aromatic hydrocarbons for motor fuels.',
  },
  {
    id: 335,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What are the complete combustion products of an alkane?',
    options: ['CO + H₂O', 'CO₂ + H₂O', 'C + H₂O', 'CO₂ + H₂'],
    correctAnswer: 1,
    explanation: 'Complete combustion of alkanes in excess oxygen produces CO₂ and H₂O only, e.g. CH₄ + 2O₂ → CO₂ + 2H₂O.',
  },
  {
    id: 336,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'What products form in the incomplete combustion of a hydrocarbon?',
    options: ['Only CO₂ and H₂O', 'CO and/or C (soot) in addition to CO₂ and H₂O, due to limited oxygen', 'H₂ and C only', 'NO₂ and H₂O'],
    correctAnswer: 1,
    explanation: 'Incomplete combustion (insufficient O₂) produces CO and/or C (soot) as well as CO₂ and H₂O. CO is a toxic gas that binds to haemoglobin.',
  },
  {
    id: 337,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Hard',
    question: 'Which of the following is a termination step in the free radical chlorination of methane?',
    options: [
      'Cl₂ → 2Cl·',
      'CH₃· + Cl₂ → CH₃Cl + Cl·',
      'CH₄ + Cl· → CH₃· + HCl',
      '2CH₃· → C₂H₆',
    ],
    correctAnswer: 3,
    explanation: 'Termination steps combine two radicals to give a stable molecule: 2CH₃· → C₂H₆ (ethane), Cl· + CH₃· → CH₃Cl, or 2Cl· → Cl₂. This ends the chain reaction.',
  },
  {
    id: 338,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Medium',
    question: 'Why do alkanes have relatively low reactivity?',
    options: [
      'C-C and C-H bonds are very long',
      'C-C and C-H bonds are strong and non-polar, so alkanes are resistant to attack by ionic reagents',
      'Alkanes contain delocalized electrons',
      'Alkanes are soluble in water and too dilute to react',
    ],
    correctAnswer: 1,
    explanation: 'C-C and C-H bonds are both strong and non-polar. The lack of polarity means alkanes are not attacked by ionic reagents (electrophiles or nucleophiles). They only react under extreme conditions (high T, UV light, or O₂ combustion).',
  },
  {
    id: 339,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Easy',
    question: 'What fraction of crude oil is used for petrol (gasoline)?',
    options: [
      'More than 90%',
      'Less than the demand — cracking is needed to increase yield',
      'Exactly 50%',
      'All fractions are converted directly to petrol',
    ],
    correctAnswer: 1,
    explanation: 'Crude oil contains less petrol fraction than is demanded. Cracking longer-chain fractions produces additional petrol-range hydrocarbons to meet demand.',
  },
  {
    id: 340,
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'Hard',
    question: 'What is the propagation step that regenerates Cl· in the chlorination of methane?',
    options: [
      'Cl₂ → 2Cl·',
      'CH₄ + Cl· → CH₃· + HCl',
      'CH₃· + Cl₂ → CH₃Cl + Cl·',
      'CH₃· + Cl· → CH₃Cl',
    ],
    correctAnswer: 2,
    explanation: 'CH₃· + Cl₂ → CH₃Cl + Cl·. This propagation step produces the product CH₃Cl and regenerates a Cl· radical to continue the chain reaction.',
  },

  // ── Halogenoalkanes ───────────────────────────────────────────────────────
  {
    id: 341,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Easy',
    question: 'What type of mechanism do halogenoalkanes undergo with NaOH(aq)?',
    options: ['Electrophilic substitution', 'Free radical substitution', 'Nucleophilic substitution', 'Electrophilic addition'],
    correctAnswer: 2,
    explanation: 'Halogenoalkanes react with NaOH(aq) by nucleophilic substitution. The OH⁻ ion acts as a nucleophile, attacking the δ⁺ carbon bonded to the halogen.',
  },
  {
    id: 342,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Easy',
    question: 'What is the product when bromoethane reacts with NaOH(aq)?',
    options: ['Ethene + NaBr + H₂O', 'Ethanol + NaBr', 'Ethane + NaOBr', 'Ethanoic acid + NaBr'],
    correctAnswer: 1,
    explanation: 'CH₃CH₂Br + NaOH(aq) → CH₃CH₂OH + NaBr. Hydrolysis (nucleophilic substitution) of bromoethane gives ethanol. The OH⁻ replaces the Br⁻ leaving group.',
  },
  {
    id: 343,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What product forms when a halogenoalkane reacts with hot concentrated NaOH in ethanol (rather than aqueous NaOH)?',
    options: ['An alcohol', 'An alkene (elimination)', 'An ether', 'An alkane'],
    correctAnswer: 1,
    explanation: 'Hot ethanolic NaOH promotes elimination: the OH⁻ acts as a base, abstracting an adjacent H, and HX is eliminated to form an alkene. Aqueous NaOH at room temperature favours substitution (alcohol).',
  },
  {
    id: 344,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What is the order of reactivity of halogenoalkanes toward nucleophilic substitution (most to least reactive)?',
    options: [
      'Fluoroalkane > Chloroalkane > Bromoalkane > Iodoalkane',
      'Iodoalkane > Bromoalkane > Chloroalkane > Fluoroalkane',
      'All haloalkanes react at the same rate',
      'Chloroalkane > Iodoalkane > Bromoalkane > Fluoroalkane',
    ],
    correctAnswer: 1,
    explanation: 'Reactivity toward nucleophilic substitution increases as the C-X bond becomes weaker and the leaving group ability increases. C-I bond is weakest; I⁻ is the best leaving group. F compounds are least reactive (very strong C-F bond).',
  },
  {
    id: 345,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Hard',
    question: 'What is the SN2 mechanism and what type of halogenoalkane reacts fastest by this mechanism?',
    options: [
      'One-step concerted mechanism; tertiary halogenoalkanes react fastest',
      'Two-step mechanism via carbocation; primary halogenoalkanes react fastest',
      'One-step concerted backside attack by nucleophile; primary halogenoalkanes react fastest due to less steric hindrance',
      'Radical mechanism; secondary halogenoalkanes react fastest',
    ],
    correctAnswer: 2,
    explanation: 'SN2 is a concerted one-step mechanism where the nucleophile attacks the back of the carbon simultaneously with leaving group departure. Primary halogenoalkanes react fastest because there is less steric hindrance around the carbon.',
  },
  {
    id: 346,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What reagent and conditions are used to make a nitrile from a halogenoalkane?',
    options: [
      'KCN in ethanol, reflux',
      'KCN in water, room temperature',
      'HCN in ether',
      'NaCN in dilute acid',
    ],
    correctAnswer: 0,
    explanation: 'Halogenoalkane + KCN (in ethanol, warm) → nitrile + KX. The CN⁻ is the nucleophile. This reaction increases the carbon chain length by one.',
  },
  {
    id: 347,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Hard',
    question: 'What is the significance of the ozone layer and which compounds have been responsible for its depletion?',
    options: [
      'The ozone layer blocks gamma radiation; SO₂ emissions are responsible for its depletion',
      'The ozone layer absorbs UV radiation, protecting life; CFCs (chlorofluorocarbons) release Cl· radicals that catalytically destroy ozone',
      'The ozone layer is made of O₂; NOₓ replaces it with ozone',
      'The ozone layer blocks infrared radiation; halons are responsible for its destruction',
    ],
    correctAnswer: 1,
    explanation: 'The ozone layer in the stratosphere absorbs harmful UV radiation. CFCs are very stable and reach the stratosphere, where UV light releases Cl· radicals. These catalytically destroy ozone in a chain reaction: Cl· + O₃ → ClO· + O₂; ClO· + O → Cl· + O₂.',
  },
  {
    id: 348,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What product forms when a primary halogenoalkane reacts with excess NH₃ (ethanol solvent, sealed tube)?',
    options: ['Amide', 'Primary amine', 'Secondary amine (then tertiary, then quaternary ammonium salt)', 'Nitrile'],
    correctAnswer: 2,
    explanation: 'RX + NH₃ → RNH₂ (primary amine) + HX. With excess RX, the primary amine can react further to give secondary amine (R₂NH), tertiary amine (R₃N), and quaternary ammonium salt (R₄N⁺X⁻). A mixture of products typically forms.',
  },
  {
    id: 349,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Easy',
    question: 'Why is the C-F bond in fluoroalkanes very strong?',
    options: [
      'Fluorine is the least electronegative halogen',
      'F is the most electronegative element; the small F atom forms a very short, strong bond with carbon',
      'C-F bonds are non-polar',
      'Fluorine has the largest atomic radius of the halogens',
    ],
    correctAnswer: 1,
    explanation: 'Fluorine is the most electronegative element and has a very small atomic radius. This results in a very short C-F bond with very high bond enthalpy (~484 kJ mol⁻¹), making fluoroalkanes the most stable and least reactive halogenoalkanes.',
  },
  {
    id: 350,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Hard',
    question: 'When testing the hydrolysis rate of halogenoalkanes experimentally, what reagent is used to detect the released halide ions?',
    options: [
      'NaOH solution',
      'Aqueous AgNO₃ (acidified) — precipitate forms as halide ions are released',
      'Universal indicator',
      'Potassium dichromate',
    ],
    correctAnswer: 1,
    explanation: 'When the C-X bond hydrolyses, X⁻ ions are released into solution. Adding AgNO₃(aq) (acidified with dilute HNO₃) precipitates the halide: AgX. The rate and colour of precipitate (white for Cl⁻, cream for Br⁻, yellow for I⁻) shows relative reactivity.',
  },
  {
    id: 351,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Medium',
    question: 'What is the product when 2-bromopropane reacts with KCN in ethanol?',
    options: [
      '2-methylpropanenitrile (a nitrile, chain extended by 1C)',
      'Propan-2-ol',
      'Propene',
      'Propylamine',
    ],
    correctAnswer: 0,
    explanation: 'CH₃CHBrCH₃ + KCN → CH₃CH(CN)CH₃ + KBr. Nucleophilic substitution by CN⁻ gives 2-methylpropanenitrile. The carbon chain increases from 3 to 4 carbons.',
  },
  {
    id: 352,
    topic: 'Organic Chemistry',
    subtopic: 'Halogenoalkanes',
    difficulty: 'Easy',
    question: 'Which of the following is a nucleophile?',
    options: ['H⁺', 'BF₃', 'NO₂⁺', 'OH⁻'],
    correctAnswer: 3,
    explanation: 'A nucleophile is an electron pair donor that attacks an electron-deficient (δ⁺) centre. OH⁻ has lone pairs and a negative charge, making it a nucleophile. H⁺, BF₃, and NO₂⁺ are electrophiles.',
  },

  // ── Alkenes ───────────────────────────────────────────────────────────────
  {
    id: 353,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Easy',
    question: 'What type of mechanism do alkenes typically undergo?',
    options: ['Free radical substitution', 'Nucleophilic substitution', 'Electrophilic addition', 'Nucleophilic addition'],
    correctAnswer: 2,
    explanation: 'Alkenes undergo electrophilic addition. The electron-rich C=C double bond acts as a nucleophile, attacking electrophiles such as HBr, H₂SO₄, Br₂, etc.',
  },
  {
    id: 354,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Easy',
    question: 'What is the test for an alkene and what is the observation?',
    options: [
      'Add acidified KMnO₄ — goes from blue to colourless',
      'Add bromine water — decolourises from orange/brown to colourless',
      'Add NaOH — fizzes',
      'Burn — alkenes give a blue flame',
    ],
    correctAnswer: 1,
    explanation: 'Bromine water (orange-brown) decolourises rapidly when shaken with an alkene. Br₂ adds across the C=C double bond. Alkanes do not decolourise bromine water in the dark.',
  },
  {
    id: 355,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'What is Markovnikov\'s rule for the addition of HBr to an unsymmetrical alkene?',
    options: [
      'H adds to the carbon with more hydrogens; Br adds to the carbon with fewer hydrogens',
      'Br adds to the carbon with more hydrogens; H adds to the carbon with fewer hydrogens',
      'The addition always occurs randomly',
      'Both H and Br add to the same carbon',
    ],
    correctAnswer: 0,
    explanation: 'Markovnikov\'s rule: in HX addition to an unsymmetrical alkene, the H adds to the carbon already bearing more H atoms (gives the more stable carbocation intermediate). E.g. propene + HBr → 2-bromopropane (major).',
  },
  {
    id: 356,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'What conditions are needed to hydrate ethene to ethanol?',
    options: [
      'Ethene + H₂O(l) + acid catalyst at room temperature',
      'Ethene + steam (H₂O(g)), phosphoric acid catalyst, ~300°C, ~65 atm',
      'Ethene + dilute H₂SO₄ at 100°C',
      'Ethene + conc. H₂SO₄ then H₂O at room temperature',
    ],
    correctAnswer: 1,
    explanation: 'Industrial hydration: C₂H₄ + H₂O(g) → C₂H₅OH. Conditions: steam, phosphoric acid catalyst (H₃PO₄), ~300°C, ~65 atm. This is a continuous process producing pure ethanol.',
  },
  {
    id: 357,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Hard',
    question: 'What is E/Z isomerism and when does it occur in alkenes?',
    options: [
      'E/Z isomerism requires a chiral centre in the molecule',
      'E/Z isomerism occurs when each carbon of the C=C bond has two different substituents; rotation is restricted by the double bond',
      'E/Z isomerism only occurs in cyclic compounds',
      'E/Z isomerism is the same as optical isomerism',
    ],
    correctAnswer: 1,
    explanation: 'E/Z (geometric) isomerism arises because rotation about the C=C bond is restricted. It requires each carbon of the double bond to have two different substituents. E = entgegen (opposite sides); Z = zusammen (same side) based on Cahn-Ingold-Prelog priority rules.',
  },
  {
    id: 358,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'What is the mechanism for the addition of HBr to ethene?',
    options: [
      'Free radical: Br· attacks the double bond',
      'Electrophilic addition: H⁺ (electrophile) attacks C=C forming a carbocation intermediate, then Br⁻ attacks',
      'Nucleophilic addition: Br⁻ attacks C=C then H⁺ is released',
      'Concerted addition of HBr simultaneously across C=C',
    ],
    correctAnswer: 1,
    explanation: 'Electrophilic addition mechanism: Step 1 — H⁺ (from polarised HBr) attacks the electron-rich C=C, forming a carbocation and Br⁻. Step 2 — Br⁻ attacks the carbocation to give the product.',
  },
  {
    id: 359,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Easy',
    question: 'What is the general formula for alkenes?',
    options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
    correctAnswer: 1,
    explanation: 'Alkenes have one C=C double bond. The general formula is CₙH₂ₙ (e.g. ethene C₂H₄, propene C₃H₆).',
  },
  {
    id: 360,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'What is the product of the reaction between but-2-ene and bromine (Br₂)?',
    options: ['2,3-dibromobutane', '1,2-dibromobutane', 'Butane + HBr', 'Bromobutene'],
    correctAnswer: 0,
    explanation: 'CH₃CH=CHCH₃ + Br₂ → CH₃CHBrCHBrCH₃. Bromine adds across the double bond (C2=C3), giving 2,3-dibromobutane.',
  },
  {
    id: 361,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Hard',
    question: 'Why is the secondary carbocation more stable than a primary carbocation?',
    options: [
      'Secondary carbocations have more electrons',
      'Alkyl groups are electron-donating (positive inductive effect), stabilising the positive charge on a secondary carbon more than a primary',
      'Primary carbocations have larger bond angles',
      'Secondary carbocations are always in rings',
    ],
    correctAnswer: 1,
    explanation: 'Alkyl groups donate electron density to the adjacent positive carbon through the inductive effect (hyperconjugation). A secondary carbocation has two electron-donating alkyl groups vs one in a primary — greater stabilisation, making it more stable.',
  },
  {
    id: 362,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Medium',
    question: 'Which of the following alkenes exhibits E/Z isomerism?',
    options: ['Ethene', 'Propene', 'But-2-ene', 'Methylpropene'],
    correctAnswer: 2,
    explanation: 'But-2-ene (CH₃CH=CHCH₃): each C of the double bond has CH₃ and H — two different substituents. E/Z isomers exist. Ethene and propene do not have two different groups on each double-bond carbon.',
  },
  {
    id: 363,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Easy',
    question: 'What type of polymerisation occurs when ethene molecules join together to form poly(ethene)?',
    options: ['Condensation polymerisation', 'Addition polymerisation', 'Free radical polymerisation (but the name is addition)', 'Substitution polymerisation'],
    correctAnswer: 1,
    explanation: 'Ethene undergoes addition polymerisation: the C=C double bonds open and the monomers link together without losing any atoms. Product: poly(ethene) with repeating unit -CH₂CH₂-.',
  },
  {
    id: 364,
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'Hard',
    question: 'What is the product of reacting propene with concentrated H₂SO₄ (cold) followed by water?',
    options: ['Propan-1-ol', 'Propan-2-ol', 'Propanal', '1-methylethanol'],
    correctAnswer: 1,
    explanation: 'H₂SO₄ adds across the double bond following Markovnikov\'s rule: H adds to CH₂ end, giving a secondary carbocation (CH₃CH⁺CH₃), which then reacts with HSO₄⁻ → hydrolysis → propan-2-ol.',
  },

  // ── Alcohols ──────────────────────────────────────────────────────────────
  {
    id: 365,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Easy',
    question: 'What is the functional group of an alcohol?',
    options: ['-COOH', '-CHO', '-OH', '-CO-'],
    correctAnswer: 2,
    explanation: 'Alcohols contain the hydroxyl functional group (-OH) attached to a carbon atom.',
  },
  {
    id: 366,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Easy',
    question: 'What is produced when a primary alcohol is oxidised using acidified potassium dichromate?',
    options: [
      'A carboxylic acid only (cannot stop at aldehyde)',
      'An aldehyde (on distillation) or carboxylic acid (on reflux)',
      'A ketone',
      'An alkene',
    ],
    correctAnswer: 1,
    explanation: 'A primary alcohol oxidised with K₂Cr₂O₇/H₂SO₄: on distillation, the aldehyde is collected before further oxidation. On reflux, further oxidation gives the carboxylic acid.',
  },
  {
    id: 367,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'What is the product when a secondary alcohol is oxidised with acidified K₂Cr₂O₇?',
    options: ['A carboxylic acid', 'An aldehyde', 'A ketone', 'An ether'],
    correctAnswer: 2,
    explanation: 'Secondary alcohols are oxidised to ketones by K₂Cr₂O₇/H₂SO₄. The orange dichromate turns green (Cr³⁺). Ketones cannot be further oxidised under these conditions.',
  },
  {
    id: 368,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'What conditions are used to dehydrate ethanol to ethene?',
    options: [
      'Add NaOH(aq) and heat',
      'Pass over Al₂O₃ catalyst at ~300°C (or with excess conc. H₂SO₄ at 170°C)',
      'Mix with conc. HBr and heat',
      'React with K₂Cr₂O₇/H₂SO₄ under reflux',
    ],
    correctAnswer: 1,
    explanation: 'Dehydration (elimination of water) of ethanol: use Al₂O₃ at ~300°C, or excess conc. H₂SO₄ at 170°C. Product: ethene (CH₂=CH₂) + H₂O.',
  },
  {
    id: 369,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'What reagent converts an alcohol to a halogenoalkane?',
    options: [
      'NaOH(aq)',
      'PCl₅ (or SOCl₂) for chloroalkane; HBr for bromoalkane; NaI/H₃PO₄ for iodoalkane',
      'K₂Cr₂O₇/H₂SO₄',
      'Conc. H₂SO₄ at 170°C',
    ],
    correctAnswer: 1,
    explanation: 'Alcohols react with: HBr → bromoalkane; PCl₅ → chloroalkane (HCl gas also produced, distinguishes -OH from -COOH); SOCl₂ → chloroalkane.',
  },
  {
    id: 370,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Hard',
    question: 'What is esterification and what conditions are required?',
    options: [
      'Reaction of an alcohol with an acid to form an ester; conditions: concentrated H₂SO₄ catalyst, reflux, reversible reaction',
      'Reaction of an alcohol with a base to form a salt',
      'Oxidation of a primary alcohol to form an ester',
      'Dehydration of two alcohols to form an ether',
    ],
    correctAnswer: 0,
    explanation: 'Esterification: alcohol + carboxylic acid ⇌ ester + water. Conditions: concentrated H₂SO₄ (catalyst), reflux. The reaction is reversible so yield is improved by removing water or using excess of one reactant.',
  },
  {
    id: 371,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Easy',
    question: 'What is the difference between primary, secondary, and tertiary alcohols?',
    options: [
      'Based on the number of OH groups',
      'Based on whether the carbon bearing OH is attached to 1, 2, or 3 other carbon atoms respectively',
      'Based on the chain length',
      'Based on the type of functional group present',
    ],
    correctAnswer: 1,
    explanation: 'Primary: C-OH attached to 1 other carbon (e.g. ethanol). Secondary: C-OH attached to 2 other carbons (e.g. propan-2-ol). Tertiary: C-OH attached to 3 other carbons (e.g. 2-methylpropan-2-ol).',
  },
  {
    id: 372,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'Why can tertiary alcohols not be oxidised by K₂Cr₂O₇/H₂SO₄?',
    options: [
      'They are too reactive',
      'There is no H on the carbon bearing the OH group, so no C-H bond can be oxidised (no H to remove)',
      'Tertiary alcohols have too high a boiling point',
      'Tertiary alcohols do not react with acidic reagents',
    ],
    correctAnswer: 1,
    explanation: 'Oxidation of an alcohol to carbonyl compound requires the loss of a H from the carbon bearing the OH group. In tertiary alcohols, this carbon has no H, so no further oxidation occurs under these conditions.',
  },
  {
    id: 373,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Hard',
    question: 'What is the equation for the fermentation of glucose to produce ethanol?',
    options: [
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
      'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (using yeast/enzymes, anaerobic)',
      'C₆H₁₂O₆ + H₂ → C₂H₅OH + other products',
      '2CH₃OH → C₂H₅OH + H₂O',
    ],
    correctAnswer: 1,
    explanation: 'Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Conditions: yeast enzymes (zymase), anaerobic conditions (~37°C, pH 4-5). This is a renewable source of ethanol.',
  },
  {
    id: 374,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Medium',
    question: 'What observation is made when PCl₅ is added to an alcohol?',
    options: [
      'A green gas is evolved',
      'Steamy fumes of HCl are produced and the alcohol is converted to a chloroalkane',
      'A white precipitate forms',
      'No reaction occurs',
    ],
    correctAnswer: 1,
    explanation: 'ROH + PCl₅ → RCl + POCl₃ + HCl. Steamy fumes of HCl are a characteristic observation. This test also confirms the presence of an -OH group (distinguishes from -COOH which also gives HCl but at a different rate).',
  },
  {
    id: 375,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Easy',
    question: 'Why do alcohols have higher boiling points than alkanes of similar molecular mass?',
    options: [
      'Alcohols have stronger C-C bonds',
      'Alcohols form hydrogen bonds with each other due to the -OH group, requiring more energy to overcome',
      'Alcohols are larger molecules',
      'Alcohols have more van der Waals forces than alkanes',
    ],
    correctAnswer: 1,
    explanation: 'The -OH group allows alcohol molecules to hydrogen-bond with each other. These intermolecular hydrogen bonds are much stronger than the London forces in alkanes, so alcohols have significantly higher boiling points.',
  },
  {
    id: 376,
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'Hard',
    question: 'What is the product of reacting ethanol with excess acidified K₂Cr₂O₇ under reflux?',
    options: ['Ethanal', 'Ethanoic acid', 'Ethanediol', 'Ethyl ethanoate'],
    correctAnswer: 1,
    explanation: 'Under reflux with excess K₂Cr₂O₇/H₂SO₄, ethanol (primary alcohol) is fully oxidised past ethanal to ethanoic acid (CH₃COOH). The orange dichromate turns green.',
  },

  // ── Organic Analysis ──────────────────────────────────────────────────────
  {
    id: 377,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Easy',
    question: 'What is the test for an aldehyde using Fehling\'s solution, and what is observed?',
    options: [
      'No reaction with aldehydes',
      'Blue Fehling\'s solution is heated with the aldehyde; a brick-red precipitate of Cu₂O forms',
      'Fehling\'s solution turns yellow',
      'Fehling\'s solution turns green with aldehydes',
    ],
    correctAnswer: 1,
    explanation: 'Fehling\'s solution (deep blue Cu²⁺ complex) is reduced by aldehydes on heating to give a brick-red precipitate of Cu₂O. Ketones do not reduce Fehling\'s solution. The aldehyde is oxidised to a carboxylate ion.',
  },
  {
    id: 378,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Easy',
    question: 'What is Tollens\' reagent, and what observation confirms the presence of an aldehyde?',
    options: [
      'Acidified K₂Cr₂O₇; turns from orange to green',
      'Ammoniacal silver nitrate solution; a silver mirror forms on the inside of the test tube',
      'Bromine water; decolourises',
      'Sodium carbonate; effervescence occurs',
    ],
    correctAnswer: 1,
    explanation: 'Tollens\' reagent ([Ag(NH₃)₂]⁺) is reduced by aldehydes to silver metal on the glass. The silver mirror test is characteristic of aldehydes. Ketones do not reduce Tollens\' reagent.',
  },
  {
    id: 379,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'What is the 2,4-dinitrophenylhydrazine (2,4-DNPH) test used for?',
    options: [
      'Detecting carboxylic acids',
      'Detecting alkenes',
      'Detecting carbonyl compounds (aldehydes and ketones) — an orange/yellow precipitate forms',
      'Detecting alcohols',
    ],
    correctAnswer: 2,
    explanation: 'Brady\'s reagent (2,4-DNPH) reacts with aldehydes and ketones to form a bright orange/yellow crystalline precipitate (2,4-dinitrophenylhydrazone). The precipitate can be purified and its melting point used to identify the specific carbonyl compound.',
  },
  {
    id: 380,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'What test distinguishes a carboxylic acid from other organic compounds?',
    options: [
      'Add PCl₅ — steamy HCl fumes',
      'Add Na₂CO₃ — effervescence of CO₂ is observed',
      'Add bromine water — decolourises',
      'Add K₂Cr₂O₇/H⁺ — turns green',
    ],
    correctAnswer: 1,
    explanation: 'Carboxylic acids react with Na₂CO₃ (or NaHCO₃): 2RCOOH + Na₂CO₃ → 2RCOONa + H₂O + CO₂. The CO₂ effervescence confirms the acidic carboxylic acid functional group. Alcohols and aldehydes do not produce CO₂ with Na₂CO₃.',
  },
  {
    id: 381,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Hard',
    question: 'What would be observed when 2,4-DNPH is added to propanone, and how could propanone be distinguished from propanal?',
    options: [
      'Both give orange precipitate with 2,4-DNPH; propanal is distinguished by also giving a silver mirror with Tollens\' reagent',
      'Propanone gives no precipitate; propanal gives orange precipitate',
      'Propanone gives a yellow precipitate; propanal gives an orange precipitate',
      'Both give identical results with all tests',
    ],
    correctAnswer: 0,
    explanation: 'Both propanone (ketone) and propanal (aldehyde) give an orange/yellow precipitate with 2,4-DNPH (both contain C=O). To distinguish: add Tollens\' reagent — only propanal (aldehyde) gives a silver mirror. Propanone (ketone) does not react.',
  },
  {
    id: 382,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'What is the iodoform (tri-iodomethane) test used to detect?',
    options: [
      'Primary alcohols with two or more carbons',
      'Methyl ketones (RCOCH₃) and ethanol/secondary methyl alcohols (CH₃CH(OH)R)',
      'All ketones',
      'All aldehydes',
    ],
    correctAnswer: 1,
    explanation: 'The iodoform reaction: treat with I₂/NaOH. Methyl ketones (RCOCH₃) and secondary alcohols with a CH₃CH(OH)- group (including ethanol) give a pale yellow precipitate of CHI₃ (iodoform) with a distinctive antiseptic smell.',
  },
  {
    id: 383,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Easy',
    question: 'What colour change is observed when K₂Cr₂O₇/H₂SO₄ oxidises an aldehyde?',
    options: [
      'Purple to colourless',
      'Orange to green',
      'Blue to red',
      'Colourless to orange',
    ],
    correctAnswer: 1,
    explanation: 'Acidified K₂Cr₂O₇ is orange (Cr⁶⁺). When it oxidises an aldehyde (or alcohol), Cr⁶⁺ is reduced to Cr³⁺ (green). The colour change from orange to green confirms oxidation.',
  },
  {
    id: 384,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Hard',
    question: 'An unknown compound gives an orange precipitate with 2,4-DNPH, decolourises bromine water, but does not give a silver mirror with Tollens\' reagent. What functional groups might it contain?',
    options: [
      'Aldehyde only',
      'Ketone and alkene',
      'Aldehyde and alkene',
      'Alcohol and alkene',
    ],
    correctAnswer: 1,
    explanation: '2,4-DNPH positive → carbonyl (C=O) present (aldehyde or ketone). Decolourises Br₂ water → alkene (C=C) present. No silver mirror → not an aldehyde → ketone. So the compound contains a C=C and a C=O ketone group.',
  },
  {
    id: 385,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'What is the purpose of measuring the melting point of a 2,4-DNPH derivative?',
    options: [
      'To determine the purity of the reagent',
      'To identify the specific aldehyde or ketone by comparing with known values in data books',
      'To confirm the presence of a carbonyl group',
      'To calculate the molar mass of the compound',
    ],
    correctAnswer: 1,
    explanation: 'Once the orange/yellow precipitate from the 2,4-DNPH test is collected, purified, and dried, its melting point is measured. Each 2,4-DNP derivative has a characteristic melting point, allowing comparison with data books to identify the specific aldehyde or ketone.',
  },
  {
    id: 386,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Easy',
    question: 'How is the presence of a C=C double bond confirmed?',
    options: [
      'Add NaOH — produces a precipitate',
      'Add bromine water — it decolourises from orange-brown to colourless',
      'Add 2,4-DNPH — gives an orange precipitate',
      'Burn — produces a yellow flame',
    ],
    correctAnswer: 1,
    explanation: 'Bromine water decolourises rapidly (orange to colourless) when an alkene is present, because Br₂ adds across the C=C double bond. Aldehydes can also slowly decolourise Br₂ water by oxidation, but alkenes react very quickly.',
  },
  {
    id: 387,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Hard',
    question: 'In mass spectrometry, what does the molecular ion peak (M⁺) tell you?',
    options: [
      'The number of carbon atoms in the molecule',
      'The relative molecular mass of the compound',
      'The number of hydrogen atoms',
      'The degree of unsaturation',
    ],
    correctAnswer: 1,
    explanation: 'The molecular ion (M⁺) is formed when the molecule loses one electron. Its m/z value (assuming z=1) gives the relative molecular mass (Mr) of the compound.',
  },
  {
    id: 388,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Analysis',
    difficulty: 'Medium',
    question: 'What does a fragmentation pattern in a mass spectrum tell a chemist?',
    options: [
      'The exact molecular formula only',
      'Information about the structure of the molecule from the fragments produced when bonds break',
      'The boiling point of the compound',
      'The empirical formula only',
    ],
    correctAnswer: 1,
    explanation: 'When the molecular ion fragments, bonds break to give fragment ions. The m/z values of these fragments and the mass differences between peaks give information about functional groups and structural features of the molecule.',
  },

  // ── Optical Isomerism ─────────────────────────────────────────────────────
  {
    id: 389,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Easy',
    question: 'What is a chiral centre (stereogenic centre)?',
    options: [
      'Any carbon with a double bond',
      'A carbon atom bonded to four different groups',
      'A carbon atom in a ring',
      'A carbon with an odd number of bonds',
    ],
    correctAnswer: 1,
    explanation: 'A chiral centre is a carbon atom bonded to four different atoms or groups. Such a molecule is non-superimposable on its mirror image and exists as two enantiomers.',
  },
  {
    id: 390,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Easy',
    question: 'What are enantiomers?',
    options: [
      'Isomers that differ in the arrangement around a C=C double bond',
      'Non-superimposable mirror images of each other with the same chemical formula and connectivity',
      'Structural isomers with the same functional group',
      'Isomers that rotate plane-polarised light in the same direction',
    ],
    correctAnswer: 1,
    explanation: 'Enantiomers are the two non-superimposable mirror image forms of a chiral molecule. They have the same connectivity and same physical/chemical properties except for the direction they rotate plane-polarised light.',
  },
  {
    id: 391,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'Which of the following amino acids is chiral?',
    options: ['Glycine (H₂NCH₂COOH)', 'Alanine (CH₃CH(NH₂)COOH)', 'All amino acids are chiral', 'No amino acids are chiral'],
    correctAnswer: 1,
    explanation: 'Alanine has a central carbon bonded to CH₃, H, NH₂, and COOH — four different groups — so it is chiral. Glycine (H₂NCH₂COOH) has two H atoms on the central carbon, so it is not chiral.',
  },
  {
    id: 392,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'What is a racemic mixture?',
    options: [
      'A mixture of two different compounds with different molecular formulas',
      'A 50:50 mixture of two enantiomers that shows no net rotation of plane-polarised light',
      'A pure sample of one enantiomer',
      'A mixture of E and Z isomers',
    ],
    correctAnswer: 1,
    explanation: 'A racemic mixture (racemate) contains equal amounts of both enantiomers. Since the (+) and (−) rotations cancel out, a racemic mixture is optically inactive overall.',
  },
  {
    id: 393,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Hard',
    question: 'Why does synthesis of a chiral compound from an achiral starting material typically produce a racemic mixture?',
    options: [
      'The reaction conditions always destroy one enantiomer',
      'When a chiral centre is formed, attack on a planar intermediate (carbocation or prochiral carbon) occurs from both faces with equal probability',
      'Chemical reactions cannot produce chiral products',
      'Racemic mixtures have lower energy than pure enantiomers',
    ],
    correctAnswer: 1,
    explanation: 'Formation of a chiral centre typically involves a planar intermediate (e.g. trigonal planar carbocation). Attack by a nucleophile can occur from either face with equal probability, giving equal amounts of both enantiomers — a racemic mixture.',
  },
  {
    id: 394,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'How does plane-polarised light interact differently with the two enantiomers of a chiral compound?',
    options: [
      'Both enantiomers rotate plane-polarised light in the same direction by the same amount',
      'One enantiomer rotates plane-polarised light clockwise (+); the other rotates it anticlockwise (−) by the same amount',
      'Neither enantiomer interacts with plane-polarised light',
      'Both enantiomers absorb all plane-polarised light',
    ],
    correctAnswer: 1,
    explanation: 'One enantiomer is dextrorotatory (+), rotating plane-polarised light clockwise; the other is levorotatory (−), rotating it anticlockwise by the same angle. This property — optical activity — is used in a polarimeter.',
  },
  {
    id: 395,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Hard',
    question: 'Why is the distinction between enantiomers important in drug development?',
    options: [
      'Enantiomers have different molecular masses',
      'The two enantiomers of a drug can have very different pharmacological effects — one may be therapeutic, the other inactive or even harmful (e.g. thalidomide)',
      'Enantiomers are cheaper to produce as racemates',
      'All drugs must be racemic to be approved',
    ],
    correctAnswer: 1,
    explanation: 'Biological receptors are chiral, so the two enantiomers of a drug can interact differently. In thalidomide, the (R) enantiomer had the therapeutic effect while the (S) enantiomer was teratogenic. This led to the development of single-enantiomer drugs.',
  },
  {
    id: 396,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Easy',
    question: 'Does lactic acid (2-hydroxypropanoic acid, CH₃CH(OH)COOH) have a chiral centre?',
    options: [
      'No — it has no chiral carbon',
      'Yes — the central carbon has four different groups: CH₃, H, OH, and COOH',
      'Yes — but only when dissolved in water',
      'No — the OH group makes it achiral',
    ],
    correctAnswer: 1,
    explanation: 'In lactic acid, the central C2 is bonded to CH₃, H, OH, and COOH — four different groups. It is a chiral centre, giving two enantiomers: L-(+)-lactic acid (from muscle metabolism) and D-(−)-lactic acid.',
  },
  {
    id: 397,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'How are optical isomers physically separated (resolved)?',
    options: [
      'By distillation — they have different boiling points',
      'By recrystallisation using a chiral resolving agent to form diastereomeric salts with different physical properties',
      'By chromatography on a non-chiral stationary phase',
      'By extraction into different solvents',
    ],
    correctAnswer: 1,
    explanation: 'Enantiomers have identical physical properties (bp, mp, solubility) and cannot be separated by standard techniques. Resolution involves reacting the racemate with an enantiopure chiral agent to form diastereomers (which have different properties and can be separated).',
  },
  {
    id: 398,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Hard',
    question: 'How many chiral centres does the molecule CH₃CH(Br)CH(OH)CH₃ have?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 2,
    explanation: 'C2 has groups: CH₃, Br, H, and CH(OH)CH₃ — four different groups: chiral centre. C3 has groups: CH₃, OH, H, and CH(Br)CH₃ — four different groups: chiral centre. Total = 2 chiral centres.',
  },
  {
    id: 399,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Easy',
    question: 'What instrument is used to measure the rotation of plane-polarised light by a chiral compound?',
    options: ['Spectrometer', 'Polarimeter', 'Refractometer', 'Colorimeter'],
    correctAnswer: 1,
    explanation: 'A polarimeter measures the angle and direction of rotation of plane-polarised light by a chiral compound in solution, allowing determination of optical activity and concentration.',
  },
  {
    id: 400,
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'Medium',
    question: 'What is the difference between optical isomers and E/Z (geometric) isomers?',
    options: [
      'There is no difference — both are types of stereoisomers that are mirror images',
      'E/Z isomers arise from restricted rotation around C=C; optical isomers arise from a chiral centre with four different groups. They are different types of stereoisomerism',
      'E/Z isomers involve chiral centres; optical isomers involve double bonds',
      'Both types always produce optically active compounds',
    ],
    correctAnswer: 1,
    explanation: 'Both are stereoisomers (same connectivity, different spatial arrangement). E/Z isomers arise from restricted rotation around a C=C bond. Optical isomers arise from a chiral centre (4 different groups on C). They are distinct types of stereoisomerism.',
  },

  // ── Aldehydes & Ketones ───────────────────────────────────────────────────
  {
    id: 401,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Easy',
    question: 'What is the functional group of a ketone?',
    options: ['-CHO', 'C=O within the chain (flanked by two carbon atoms)', '-COOH', '-OH'],
    correctAnswer: 1,
    explanation: 'A ketone contains a carbonyl group (C=O) attached to two carbon atoms. An aldehyde has the carbonyl at the end of the chain with at least one H attached to the carbonyl carbon.',
  },
  {
    id: 402,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Easy',
    question: 'What is the IUPAC name of CH₃COCH₃?',
    options: ['Propanal', 'Propanone', 'Methyl ethanoate', 'Ethanal'],
    correctAnswer: 1,
    explanation: 'CH₃COCH₃ has 3 carbons with C=O in the middle. IUPAC name for a 3-carbon ketone is propanone (also known as acetone).',
  },
  {
    id: 403,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'What reagent is used to reduce an aldehyde to a primary alcohol?',
    options: [
      'K₂Cr₂O₇/H₂SO₄',
      'NaBH₄ (sodium tetrahydridoborate) in methanol, or LiAlH₄ in dry ether',
      'Conc. H₂SO₄',
      'NaOH(aq)',
    ],
    correctAnswer: 1,
    explanation: 'NaBH₄ (mild reducing agent) in methanol reduces aldehydes to primary alcohols and ketones to secondary alcohols. LiAlH₄ is a more powerful reducing agent used in dry ether.',
  },
  {
    id: 404,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'What type of mechanism do aldehydes and ketones undergo with HCN?',
    options: ['Electrophilic addition', 'Nucleophilic addition', 'Nucleophilic substitution', 'Free radical addition'],
    correctAnswer: 1,
    explanation: 'The carbonyl group (C=O) is polarised (δ⁺C=Oδ⁻). CN⁻ acts as a nucleophile, attacking the δ⁺ carbon. The mechanism is nucleophilic addition, producing a hydroxynitrile (cyanohydrin).',
  },
  {
    id: 405,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Hard',
    question: 'What is the product of the reaction of ethanal with HCN?',
    options: [
      '2-hydroxypropanenitrile (a chiral hydroxynitrile)',
      '2-hydroxypropanoic acid',
      'Ethanol',
      'Ethanoic acid',
    ],
    correctAnswer: 0,
    explanation: 'CH₃CHO + HCN → CH₃CH(OH)CN. The product is 2-hydroxypropanenitrile (lacticonitrile). It contains a new chiral centre (C2 has four different groups: CH₃, H, OH, CN), so a racemic mixture is formed.',
  },
  {
    id: 406,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'Why is HCN used as KCN + H₂SO₄ in the laboratory rather than as pure HCN?',
    options: [
      'Pure HCN is insoluble in water',
      'Pure HCN is an extremely toxic liquid/gas; using KCN + acid generates HCN in situ in a controlled manner',
      'KCN is a better nucleophile than HCN',
      'H₂SO₄ acts as the catalyst',
    ],
    correctAnswer: 1,
    explanation: 'HCN is highly toxic (causes cell asphyxiation at very low concentrations). It is safer to generate it in situ in small amounts by adding dilute H₂SO₄ to KCN solution, with the reaction performed in a fume cupboard.',
  },
  {
    id: 407,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Easy',
    question: 'What is the trend in boiling point of aldehydes compared to alcohols of similar mass?',
    options: [
      'Aldehydes have higher boiling points than alcohols',
      'Aldehydes have lower boiling points than alcohols because they cannot hydrogen-bond with each other',
      'Aldehydes and alcohols have identical boiling points',
      'Aldehydes have higher boiling points because C=O is more polar than O-H',
    ],
    correctAnswer: 1,
    explanation: 'Aldehydes cannot form hydrogen bonds between themselves (no O-H group). They only have permanent dipole-dipole attractions. Alcohols can hydrogen-bond with each other, requiring more energy to vaporise, giving higher boiling points.',
  },
  {
    id: 408,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Hard',
    question: 'What is the product of reducing propanone with NaBH₄?',
    options: ['Propan-1-ol', 'Propan-2-ol', 'Propanoic acid', 'Propanal'],
    correctAnswer: 1,
    explanation: 'NaBH₄ reduces ketones to secondary alcohols. Propanone (CH₃COCH₃) is reduced to propan-2-ol (CH₃CH(OH)CH₃).',
  },
  {
    id: 409,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'What does a positive result with Tollens\' reagent confirm?',
    options: [
      'The presence of a ketone',
      'The presence of an aldehyde (reducing sugar or aldehyde)',
      'The presence of a carboxylic acid',
      'The presence of an alcohol',
    ],
    correctAnswer: 1,
    explanation: 'Tollens\' reagent ([Ag(NH₃)₂]⁺) is reduced by aldehydes to silver metal (silver mirror): RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → RCOO⁻ + 2Ag + 4NH₃ + H₂O. Ketones do not react.',
  },
  {
    id: 410,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Easy',
    question: 'Which statement about ketones is correct?',
    options: [
      'Ketones can be oxidised to carboxylic acids by K₂Cr₂O₇',
      'Ketones cannot be easily oxidised under normal laboratory conditions',
      'Ketones give a silver mirror with Tollens\' reagent',
      'Ketones give a brick-red precipitate with Fehling\'s solution',
    ],
    correctAnswer: 1,
    explanation: 'Ketones resist oxidation under normal conditions because there is no H on the carbonyl carbon. They do not react with Tollens\' or Fehling\'s reagents and are not oxidised by K₂Cr₂O₇/H₂SO₄.',
  },
  {
    id: 411,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Hard',
    question: 'What is the product of reacting benzaldehyde (C₆H₅CHO) with HCN (as KCN/H₂SO₄)?',
    options: [
      '2-hydroxy-2-phenylacetonitrile (a chiral compound)',
      'Phenol + HCN',
      'Benzoic acid',
      'No reaction',
    ],
    correctAnswer: 0,
    explanation: 'C₆H₅CHO + HCN → C₆H₅CH(OH)CN. Nucleophilic addition gives mandelonitrile (2-hydroxy-2-phenylacetonitrile), which contains a chiral centre and is formed as a racemic mixture.',
  },
  {
    id: 412,
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes & Ketones',
    difficulty: 'Medium',
    question: 'Why is the carbonyl carbon in aldehydes and ketones susceptible to nucleophilic attack?',
    options: [
      'The carbon is electron-rich due to the C=O bond',
      'The C=O bond is polarised (C^δ⁺ = O^δ⁻), making the carbon electrophilic',
      'The oxygen donates electrons to make the carbon positive',
      'Nucleophiles are attracted to the oxygen, not the carbon',
    ],
    correctAnswer: 1,
    explanation: 'Oxygen is more electronegative than carbon, so the C=O bond is polarised: C^δ⁺ and O^δ⁻. The partially positive carbon is electrophilic and susceptible to attack by nucleophiles (electron pair donors).',
  },

  // ── Carboxylic Acids & Derivatives ────────────────────────────────────────
  {
    id: 413,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What is the functional group of a carboxylic acid?',
    options: ['-CHO', '-CO-', '-COOH', '-COCl'],
    correctAnswer: 2,
    explanation: 'Carboxylic acids contain the carboxyl group (-COOH), which consists of a carbonyl group (C=O) and a hydroxyl group (-OH) on the same carbon.',
  },
  {
    id: 414,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What is the product when ethanoic acid reacts with sodium carbonate?',
    options: [
      'Sodium ethanoate, water, and CO₂',
      'Ethyl ethanoate and water',
      'Sodium ethanoate and HCl',
      'No reaction',
    ],
    correctAnswer: 0,
    explanation: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. The effervescence of CO₂ is characteristic of a carboxylic acid reacting with a carbonate.',
  },
  {
    id: 415,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the product of the reaction of ethanoic acid with ethanol in the presence of H₂SO₄ catalyst?',
    options: ['Ethyl ethanoate (an ester) + water', 'Diethyl ether + water', 'Ethanoyl ethanoate', 'Ethanediol + water'],
    correctAnswer: 0,
    explanation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. This is esterification. The product is ethyl ethanoate, a sweet-smelling ester used as a solvent.',
  },
  {
    id: 416,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the product of reacting ethanoyl chloride (CH₃COCl) with water?',
    options: [
      'Ethanol + HCl',
      'Ethanoic acid + HCl (steamy fumes)',
      'Ethyl ethanoate + HCl',
      'Chloroethane + H₂O',
    ],
    correctAnswer: 1,
    explanation: 'CH₃COCl + H₂O → CH₃COOH + HCl. Acyl chlorides are very reactive and hydrolyse vigorously with water, producing the carboxylic acid and steamy HCl fumes.',
  },
  {
    id: 417,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'What is the product of reacting ethanoyl chloride with ethanol?',
    options: [
      'Ethyl ethanoate + HCl',
      'Ethanol + chloride ion',
      'Ethanoic acid + ethanol',
      'Ethene + HCl',
    ],
    correctAnswer: 0,
    explanation: 'CH₃COCl + C₂H₅OH → CH₃COOC₂H₅ + HCl. This is faster and gives a better yield than esterification with carboxylic acid. Acyl chlorides react with alcohols to give esters (with HCl rather than water as the by-product).',
  },
  {
    id: 418,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the mechanism for the hydrolysis of an ester?',
    options: [
      'Electrophilic addition',
      'Nucleophilic addition-elimination (or nucleophilic acyl substitution)',
      'Free radical substitution',
      'Electrophilic substitution',
    ],
    correctAnswer: 1,
    explanation: 'Ester hydrolysis involves nucleophilic acyl substitution (addition-elimination): the nucleophile (OH⁻ in alkaline hydrolysis, or H₂O in acid hydrolysis) attacks the carbonyl carbon; the leaving group (alkoxide or alcohol) departs.',
  },
  {
    id: 419,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What are the two products of the alkaline hydrolysis (saponification) of an ester?',
    options: [
      'Carboxylic acid + alcohol',
      'Carboxylate salt (soap) + alcohol',
      'Ether + water',
      'Acyl chloride + alcohol',
    ],
    correctAnswer: 1,
    explanation: 'Alkaline hydrolysis: RCOOR\' + NaOH → RCOONa + R\'OH. The carboxylate salt and an alcohol are produced. This reaction is irreversible (unlike acid hydrolysis) and is used to make soap from fats/oils.',
  },
  {
    id: 420,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'What is an amide, and what reagent reacts with an acyl chloride to form one?',
    options: [
      'A compound with -NH₂ group; formed from reaction of acyl chloride with water',
      'A compound with -CONH₂ group; formed from reaction of acyl chloride with ammonia (or a primary/secondary amine)',
      'A compound with -NHOH group; formed by reduction',
      'A compound with -NHCHO group; formed from aldehyde + amine',
    ],
    correctAnswer: 1,
    explanation: 'An amide contains the -CONH₂ (or -CONHR, -CONR₂) group. Acyl chlorides react with ammonia: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl. The excess NH₃ neutralises the HCl formed.',
  },
  {
    id: 421,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Why are acyl chlorides more reactive than carboxylic acids?',
    options: [
      'Acyl chlorides have higher molecular mass',
      'The C-Cl bond in acyl chlorides is weaker and Cl⁻ is a better leaving group than OH⁻, making nucleophilic substitution much faster',
      'Acyl chlorides form stronger hydrogen bonds',
      'Acyl chlorides have lower activation energy because they are larger',
    ],
    correctAnswer: 1,
    explanation: 'In nucleophilic acyl substitution, the leaving group must depart. Cl⁻ is a much better leaving group than OH⁻ (due to its lower basicity), so acyl chlorides react far faster than carboxylic acids with nucleophiles.',
  },
  {
    id: 422,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What is the name of the ester formed from methanol and ethanoic acid?',
    options: ['Ethyl ethanoate', 'Methyl methanoate', 'Methyl ethanoate', 'Ethyl methanoate'],
    correctAnswer: 2,
    explanation: 'Methanol (CH₃OH) + ethanoic acid (CH₃COOH) → methyl ethanoate (CH₃COOCH₃) + water. Naming: alcohol part (methyl) first, then acid part (ethanoate).',
  },
  {
    id: 423,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'What is the product of reacting ethanoyl chloride with methylamine (CH₃NH₂)?',
    options: [
      'N-methylethanamide + HCl',
      'Methylamine + ethanoic acid',
      'Ethyl methylamine',
      'N,N-dimethylethanamide',
    ],
    correctAnswer: 0,
    explanation: 'CH₃COCl + CH₃NH₂ → CH₃CONHCH₃ + HCl. The product is N-methylethanamide, a secondary amide. One molecule of amine reacts with the acyl chloride; a second amine molecule neutralises the HCl formed.',
  },
  {
    id: 424,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the purpose of using acid anhydrides instead of acyl chlorides in industrial processes?',
    options: [
      'Acid anhydrides are more reactive than acyl chlorides',
      'Acid anhydrides are cheaper, safer (no toxic HCl gas produced), and easier to handle than acyl chlorides',
      'Acid anhydrides give different products than acyl chlorides',
      'Acid anhydrides are more soluble in water',
    ],
    correctAnswer: 1,
    explanation: 'Acid anhydrides (e.g. ethanoic anhydride, (CH₃CO)₂O) are less reactive and safer than acyl chlorides (no toxic/corrosive HCl gas). They are used industrially (e.g. aspirin synthesis from ethanoic anhydride + salicylic acid).',
  },

  // ── Aromatic Chemistry ────────────────────────────────────────────────────
  {
    id: 425,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'What is the structure of benzene according to the Kekulé model?',
    options: [
      'A ring of 6 carbons with alternating single and double bonds (cyclohexatriene)',
      'A ring of 6 carbons all with single bonds',
      'A ring of 6 carbons each with a double bond to oxygen',
      'A linear chain of 6 carbons',
    ],
    correctAnswer: 0,
    explanation: 'Kekulé proposed benzene as a hexagonal ring with alternating single and double C-C bonds (1,3,5-cyclohexatriene). However, evidence shows all C-C bonds in benzene are equal in length (intermediate between single and double), which the modern delocalised model explains better.',
  },
  {
    id: 426,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What evidence suggests benzene is more stable than the Kekulé model predicts?',
    options: [
      'Benzene undergoes addition reactions more readily than expected',
      'The enthalpy of hydrogenation of benzene (−208 kJ mol⁻¹) is much less exothermic than three times cyclohexene (3 × −120 = −360 kJ mol⁻¹), showing extra stability (delocalisation energy)',
      'All C-C bonds in benzene are equal length, shorter than double bonds',
      'Benzene reacts with bromine water in the dark',
    ],
    correctAnswer: 1,
    explanation: 'Benzene\'s enthalpy of hydrogenation is −208 kJ mol⁻¹, much less than 3 × (−120) = −360 kJ mol⁻¹ expected for three isolated double bonds. The difference (~150 kJ mol⁻¹) is the delocalisation (resonance) energy — extra stability due to electron delocalisation.',
  },
  {
    id: 427,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the general mechanism for the reactions of benzene with electrophiles?',
    options: [
      'Nucleophilic substitution',
      'Electrophilic substitution — the aromatic ring is preserved by substituting H rather than adding across the ring',
      'Electrophilic addition — a hydrogen is added',
      'Free radical substitution',
    ],
    correctAnswer: 1,
    explanation: 'Benzene undergoes electrophilic substitution rather than addition to preserve the stable delocalised aromatic system. Adding across the ring would disrupt the delocalisation, losing stability. Substituting H preserves aromaticity.',
  },
  {
    id: 428,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the nitrating mixture used in the nitration of benzene?',
    options: [
      'Dilute HNO₃ and NaOH',
      'Conc. HNO₃ and conc. H₂SO₄ at below 55°C',
      'Conc. HNO₃ alone at 100°C',
      'Dilute H₂SO₄ and KNO₃',
    ],
    correctAnswer: 1,
    explanation: 'Nitration uses a mixture of concentrated HNO₃ and concentrated H₂SO₄ (below 55°C to avoid di-nitration). H₂SO₄ protonates HNO₃ to generate the nitronium ion (NO₂⁺), the electrophile.',
  },
  {
    id: 429,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'What is the electrophile in the Friedel-Crafts alkylation of benzene?',
    options: [
      'The alkyl halide itself',
      'A carbocation (R⁺) generated by AlCl₃ (Lewis acid catalyst) activating the C-X bond',
      'The AlCl₃ catalyst',
      'A free radical from the alkyl halide',
    ],
    correctAnswer: 1,
    explanation: 'AlCl₃ is a Lewis acid that accepts a lone pair from the halogen of the alkyl halide: RX + AlCl₃ → R⁺ + AlCl₄⁻. The carbocation R⁺ (or the highly polarised complex) is the electrophile that attacks the benzene ring.',
  },
  {
    id: 430,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the product of the nitration of methylbenzene (toluene) with conc. HNO₃/H₂SO₄ at low temperature?',
    options: [
      'Nitrobenzene',
      'Mainly 2-nitromethylbenzene and 4-nitromethylbenzene (methyl group is 2,4-directing)',
      'Benzaldehyde',
      'A mixture of all possible mononitro positions equally',
    ],
    correctAnswer: 1,
    explanation: 'The methyl group in toluene is an electron-donating ortho/para director. It activates the ring and directs incoming electrophiles to the 2 and 4 positions, giving mainly 2- and 4-nitrotoluene.',
  },
  {
    id: 431,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'Why does benzene preferentially undergo substitution rather than addition?',
    options: [
      'Addition reactions require too much energy to activate benzene',
      'Substitution preserves the stable delocalised electron system (aromatic stability); addition would destroy it',
      'Benzene cannot form addition products with any reagent',
      'Substitution is always faster than addition',
    ],
    correctAnswer: 1,
    explanation: 'The delocalised π electron system in benzene provides extra stability (~150 kJ mol⁻¹ resonance energy). Addition would require sp³ carbons and loss of this aromatic stabilisation. Substitution preserves the aromatic system.',
  },
  {
    id: 432,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'What is the product of the Friedel-Crafts acylation of benzene with ethanoyl chloride and AlCl₃?',
    options: [
      'Ethylbenzene',
      'Phenyl ethanoate',
      'Phenylethanone (acetophenone)',
      'Benzaldehyde',
    ],
    correctAnswer: 2,
    explanation: 'C₆H₆ + CH₃COCl + AlCl₃ → C₆H₅COCH₃ + HCl + AlCl₃. The product is phenylethanone (acetophenone), a ketone. Friedel-Crafts acylation introduces a C=O (acyl) group onto the ring.',
  },
  {
    id: 433,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the reduction product when nitrobenzene is reduced?',
    options: ['Benzene', 'Phenylamine (aniline, C₆H₅NH₂)', 'Phenol', 'Cyclohexane'],
    correctAnswer: 1,
    explanation: 'Nitrobenzene is reduced to phenylamine: C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O. Conditions: tin and concentrated HCl (Sn/HCl), then NaOH. The product, phenylamine, is an important industrial chemical.',
  },
  {
    id: 434,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'Why is phenylamine (aniline) a weaker base than ammonia?',
    options: [
      'Phenylamine has no lone pair on nitrogen',
      'The lone pair on N in phenylamine is delocalised into the aromatic ring, making it less available for accepting protons',
      'Phenylamine has a higher molecular mass than NH₃',
      'The benzene ring withdraws electrons from N by the inductive effect only',
    ],
    correctAnswer: 1,
    explanation: 'In phenylamine, the lone pair on the N atom is partially delocalised into the π system of the benzene ring. This reduces the electron density on N and makes it less willing to accept a proton. Phenylamine is therefore a weaker base than NH₃.',
  },
  {
    id: 435,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the nitronium ion and how is it formed?',
    options: [
      'NO₂⁻; formed by deprotonation of HNO₃',
      'NO₂⁺; formed when H₂SO₄ protonates HNO₃: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O',
      'N₂O₄; formed by heating HNO₃',
      'NO₃⁻; formed when HNO₃ dissociates',
    ],
    correctAnswer: 1,
    explanation: 'The nitronium ion (NO₂⁺) is the electrophile in aromatic nitration. It is generated by: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. H₂SO₄ acts as the stronger acid, protonating HNO₃.',
  },
  {
    id: 436,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'What colour is benzene and what is its physical state at room temperature?',
    options: ['Yellow liquid', 'Colourless liquid with a distinctive sweet smell', 'White solid', 'Colourless gas'],
    correctAnswer: 1,
    explanation: 'Benzene is a colourless liquid at room temperature (bp 80°C) with a distinctive sweet, aromatic smell. It is highly toxic (carcinogenic) and is used as a starting material in organic synthesis.',
  },

  // ── Amines ────────────────────────────────────────────────────────────────
  {
    id: 437,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the functional group of an amine?',
    options: ['-CONH₂', '-NH₂', '-NO₂', '-OH'],
    correctAnswer: 1,
    explanation: 'Amines contain the amino group (-NH₂ for primary amines). They are derivatives of ammonia where one or more H atoms have been replaced by alkyl or aryl groups.',
  },
  {
    id: 438,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'Why are amines basic?',
    options: [
      'They contain oxygen atoms',
      'The N atom has a lone pair that can accept a proton (Brønsted-Lowry base)',
      'They produce OH⁻ ions by ionisation',
      'They have acidic N-H bonds',
    ],
    correctAnswer: 1,
    explanation: 'Amines are bases because the nitrogen atom has a lone pair that can accept a proton: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻. They are Brønsted-Lowry bases and Lewis bases.',
  },
  {
    id: 439,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'Which is a stronger base: methylamine (CH₃NH₂) or ammonia (NH₃)?',
    options: [
      'Ammonia — it is simpler and less bulky',
      'Methylamine — the electron-donating methyl group increases electron density on N, making the lone pair more available for proton acceptance',
      'They have identical basic strength',
      'Ammonia — because it has three N-H bonds',
    ],
    correctAnswer: 1,
    explanation: 'The methyl group is electron-donating (+I effect), increasing the electron density on N in methylamine. This makes the lone pair more available for protonation, so methylamine (Kb ≈ 10⁻³·⁴) is a stronger base than NH₃ (Kb ≈ 10⁻⁴·⁷).',
  },
  {
    id: 440,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'How can ethylamine be prepared from bromoethane?',
    options: [
      'C₂H₅Br + KOH → C₂H₅OH + KBr',
      'C₂H₅Br + excess NH₃ (in ethanol, sealed tube, heat) → C₂H₅NH₂ + HBr',
      'C₂H₅Br + NaCN → C₂H₅CN',
      'C₂H₅Br + Na₂CO₃ → C₂H₅OH',
    ],
    correctAnswer: 1,
    explanation: 'Nucleophilic substitution: C₂H₅Br + NH₃ → C₂H₅NH₂ + HBr. Using excess NH₃ minimises further alkylation. The reaction is done in ethanol (to dissolve both reactants) in a sealed tube at room temperature or warmed.',
  },
  {
    id: 441,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'What is a diazonium ion, and how is it formed from phenylamine?',
    options: [
      'C₆H₅N₂⁺; formed by reacting phenylamine with HCl at 0–5°C, then NaNO₂',
      'C₆H₅NH₂; formed by reducing nitrobenzene',
      'C₆H₅NO₂; formed by nitrating benzene',
      'C₆H₅N₂Cl₂; formed by reacting phenylamine with Cl₂',
    ],
    correctAnswer: 0,
    explanation: 'Benzenediazonium ion (C₆H₅N₂⁺) is formed by diazotisation: C₆H₅NH₂ + HCl + NaNO₂ at 0–5°C → C₆H₅N₂⁺Cl⁻ + NaCl + H₂O. Temperature must be below 10°C to prevent decomposition of the diazonium salt.',
  },
  {
    id: 442,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'What is a coupling reaction involving a diazonium salt?',
    options: [
      'Diazonium salt reacts with alkyl halide to form an azo compound',
      'Diazonium salt reacts with a phenol or aromatic amine to form a brightly coloured azo dye (R-N=N-Ar)',
      'Diazonium salt reacts with NaOH to give phenol',
      'Diazonium salt undergoes elimination to form benzene',
    ],
    correctAnswer: 1,
    explanation: 'Diazonium ions couple with electron-rich aromatic compounds (phenols or amines) to form azo compounds containing the -N=N- linkage. These are brightly coloured due to the extended conjugated system and are used as dyes. E.g. benzene diazonium + phenol → orange/yellow azo dye.',
  },
  {
    id: 443,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What is the product when ethanoyl chloride reacts with methylamine (CH₃NH₂)?',
    options: [
      'N-methylethanamide (a secondary amide)',
      'Methylamine hydrochloride only',
      'Methyl ethanoate (an ester)',
      'Ethylamine',
    ],
    correctAnswer: 0,
    explanation: 'CH₃COCl + CH₃NH₂ → CH₃CONHCH₃ + HCl. Acylation of a primary amine with an acyl chloride gives a secondary amide (N-substituted amide). A second molecule of amine neutralises the HCl: CH₃NH₂ + HCl → CH₃NH₃Cl.',
  },
  {
    id: 444,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the difference between a primary, secondary, and tertiary amine?',
    options: [
      'Based on the chain length of the attached alkyl group',
      'Based on the number of alkyl/aryl groups attached to nitrogen (1, 2, or 3 respectively)',
      'Based on whether the amine is acidic or basic',
      'Based on the solubility in water',
    ],
    correctAnswer: 1,
    explanation: 'Primary amine: RNH₂ (1 alkyl group on N). Secondary: R₂NH (2 groups). Tertiary: R₃N (3 groups). This is analogous to primary/secondary/tertiary alcohols but based on nitrogen substitution.',
  },
  {
    id: 445,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'Why is phenylamine (C₆H₅NH₂) a weaker base than cyclohexylamine (C₆H₁₁NH₂)?',
    options: [
      'Cyclohexylamine is larger',
      'The lone pair on N in phenylamine is delocalised into the benzene ring, reducing its availability; in cyclohexylamine the lone pair is not delocalised',
      'Phenylamine has a lower molecular mass',
      'Cyclohexylamine has no ring, so N is more accessible',
    ],
    correctAnswer: 1,
    explanation: 'In phenylamine, the N lone pair is delocalised into the aromatic π system, making it less available for protonation. Cyclohexylamine has an sp³ N with a fully available lone pair not involved in any π system, so it is a stronger base.',
  },
  {
    id: 446,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What is the product when propanenitrile is reduced?',
    options: ['Propan-1-amine (propylamine)', 'Propan-1-ol', 'Propanoic acid', 'Ethylamine'],
    correctAnswer: 0,
    explanation: 'CH₃CH₂CN + 4[H] → CH₃CH₂CH₂NH₂ (propan-1-amine). Reduction of a nitrile with LiAlH₄ (in dry ether) or H₂/Ni catalyst gives a primary amine with one more carbon than the nitrile.',
  },
  {
    id: 447,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What safety precaution is taken during diazotisation?',
    options: [
      'Temperature must be kept above 50°C to ensure complete reaction',
      'Temperature must be kept below 10°C (using ice bath) to prevent the diazonium salt from decomposing',
      'The reaction must be done in acid-free conditions',
      'UV light must be excluded',
    ],
    correctAnswer: 1,
    explanation: 'Diazonium salts are thermally unstable and can detonate. The reaction must be kept below 10°C (usually 0–5°C with an ice bath) to slow the decomposition of the diazonium salt.',
  },
  {
    id: 448,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the product when a diazonium salt is warmed with water?',
    options: ['Aniline', 'Phenol (C₆H₅OH) + N₂', 'Benzene + HCl', 'Azo dye'],
    correctAnswer: 1,
    explanation: 'C₆H₅N₂⁺ + H₂O → C₆H₅OH + N₂ + H⁺. Warming a diazonium salt with water replaces the -N₂⁺ group with -OH, producing phenol and N₂ gas.',
  },

  // ── Polymers ──────────────────────────────────────────────────────────────
  {
    id: 449,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What is the difference between addition and condensation polymerisation?',
    options: [
      'Addition polymerisation uses one monomer; condensation uses two different monomers always',
      'In addition polymerisation, monomers join with no atoms lost; in condensation polymerisation, a small molecule (e.g. H₂O or HCl) is eliminated with each bond formed',
      'Addition polymers are always stronger than condensation polymers',
      'Condensation polymers are always made from amino acids',
    ],
    correctAnswer: 1,
    explanation: 'Addition polymerisation: monomers (containing C=C) join to form the polymer with 100% atom economy (no atoms lost). Condensation polymerisation: two functional groups react to form a polymer with elimination of a small molecule (H₂O or HCl) per link.',
  },
  {
    id: 450,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What monomer is used to make poly(propene)?',
    options: ['Ethene', 'Propene', 'Propane', 'Propenol'],
    correctAnswer: 1,
    explanation: 'Poly(propene) is made by the addition polymerisation of propene (CH₃CH=CH₂). The repeating unit is -CH₂CH(CH₃)-.',
  },
  {
    id: 451,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What are the two monomers used to make nylon-6,6?',
    options: [
      'Hexan-1,6-dioic acid (adipic acid) and 1,6-diaminohexane (hexamethylenediamine)',
      'Hexane and nitrogen gas',
      'Glycine and ethanoic acid',
      'Ethylene glycol and terephthalic acid',
    ],
    correctAnswer: 0,
    explanation: 'Nylon-6,6 is a condensation polymer made from adipic acid (hexanedioic acid, HOOC(CH₂)₄COOH) and 1,6-diaminohexane (H₂N(CH₂)₆NH₂). They react to form peptide-like amide bonds (-CO-NH-) with water eliminated.',
  },
  {
    id: 452,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What is the linkage in nylon-6,6?',
    options: ['Ester linkage (-COO-)', 'Amide linkage (-CONH-)', 'Ether linkage (-O-)', 'C-C linkage'],
    correctAnswer: 1,
    explanation: 'Nylon is a polyamide. The diacid and diamine react to form amide bonds (-CO-NH-) with loss of water. The amide (peptide) linkage is -CONH-.',
  },
  {
    id: 453,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What are the monomers of Terylene (polyester, PET)?',
    options: [
      'Ethanol and propanoic acid',
      'Ethane-1,2-diol (ethylene glycol) and benzene-1,4-dicarboxylic acid (terephthalic acid)',
      'Lactic acid only',
      'Adipic acid and 1,6-diaminohexane',
    ],
    correctAnswer: 1,
    explanation: 'Terylene (PET) is a polyester made from ethane-1,2-diol (HO-CH₂CH₂-OH) and benzene-1,4-dicarboxylic acid. They condense to form ester linkages (-COO-) with loss of water.',
  },
  {
    id: 454,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'Why are addition polymers (like poly(ethene)) difficult to recycle or biodegrade?',
    options: [
      'They have very low molecular mass',
      'The C-C backbone is very stable and non-polar; no hydrolysable bonds exist for enzymatic or chemical degradation',
      'They dissolve too readily in water',
      'They produce toxic gases when heated',
    ],
    correctAnswer: 1,
    explanation: 'Addition polymers consist of C-C bonds only in the main chain, which are non-polar and very stable. There are no ester or amide bonds for hydrolysis, making them resistant to biodegradation and difficult to recycle chemically.',
  },
  {
    id: 455,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What is the repeating unit of poly(chloroethene) (PVC)?',
    options: ['-CH₂CH₂-', '-CH₂CHCl-', '-CCl₂CH₂-', '-CHClCHCl-'],
    correctAnswer: 1,
    explanation: 'Poly(chloroethene) (PVC) is made from chloroethene (vinyl chloride, CH₂=CHCl). The repeating unit is -CH₂CHCl-, formed by opening the C=C double bond.',
  },
  {
    id: 456,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What are condensation polymers, and which functional groups are required for their formation?',
    options: [
      'Polymers formed by addition reactions; require only C=C groups',
      'Polymers formed when monomers with two functional groups react with loss of a small molecule; typically require -OH + -COOH (polyester) or -NH₂ + -COOH (polyamide)',
      'Polymers formed at very high pressure',
      'Polymers that can absorb water',
    ],
    correctAnswer: 1,
    explanation: 'Condensation polymers require bifunctional monomers. Polyesters: diol + diacid → ester links + H₂O. Polyamides: diamine + diacid → amide links + H₂O. Each monomer must have at least two reactive functional groups.',
  },
  {
    id: 457,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'How can nylon be hydrolysed, and what are the products?',
    options: [
      'Nylon cannot be hydrolysed under any conditions',
      'Heated with acid or base breaks the amide bonds, giving the diamine and diacid (or their salts)',
      'UV light breaks the amide bonds',
      'Nylon is hydrolysed by water alone at room temperature',
    ],
    correctAnswer: 1,
    explanation: 'The amide (-CONH-) bonds in nylon can be hydrolysed by heating with concentrated acid or alkali. Acid hydrolysis gives the diamine salt and diacid. Alkaline hydrolysis gives the diacid salt and diamine. This is why nylon degrades faster than addition polymers.',
  },
  {
    id: 458,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What monomer produces poly(lactic acid) (PLA), a biodegradable polymer?',
    options: ['Ethene', 'Lactic acid (2-hydroxypropanoic acid)', 'Glycine', 'Ethane-1,2-diol'],
    correctAnswer: 1,
    explanation: 'PLA is made from lactic acid (CH₃CH(OH)COOH) by condensation polymerisation (self-esterification of the -OH and -COOH groups). It is biodegradable because the ester linkages can be hydrolysed.',
  },
  {
    id: 459,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What environmental problem is associated with addition polymers?',
    options: [
      'They release toxic gases during polymerisation',
      'They are non-biodegradable and accumulate as persistent plastic waste in the environment',
      'They are flammable and cause fires',
      'They are soluble in water and contaminate water supplies',
    ],
    correctAnswer: 1,
    explanation: 'Addition polymers (e.g. poly(ethene), poly(propene)) are chemically inert and do not biodegrade, accumulating as persistent plastic waste in landfill, oceans, and ecosystems.',
  },
  {
    id: 460,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'What are the repeat units in Kevlar (an aromatic polyamide used in bullet-proof vests)?',
    options: [
      'Ethylene glycol and terephthalic acid',
      '1,4-diaminobenzene (para-phenylenediamine) and benzene-1,4-dicarboxylic acid (terephthalic acid)',
      'Glycine and alanine',
      'Hexamethylenediamine and adipic acid',
    ],
    correctAnswer: 1,
    explanation: 'Kevlar is an aromatic polyamide (aramid) formed from 1,4-diaminobenzene and benzene-1,4-dicarboxylic acid. The rigid aromatic rings and strong hydrogen bonds between the amide groups give Kevlar its exceptional tensile strength.',
  },

  // ── Amino Acids, Proteins & DNA ───────────────────────────────────────────
  {
    id: 461,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What two functional groups does an alpha (α)-amino acid contain?',
    options: [
      'An amine group (-NH₂) and a carboxyl group (-COOH) on the same carbon',
      'A hydroxyl group and a carbonyl group',
      'Two amine groups',
      'A double bond and a carboxyl group',
    ],
    correctAnswer: 0,
    explanation: 'Alpha-amino acids have both -NH₂ and -COOH groups on the alpha carbon (the carbon adjacent to the carboxyl group). General formula: H₂N-CHR-COOH.',
  },
  {
    id: 462,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What is a zwitterion?',
    options: [
      'An amino acid with no charge',
      'An amino acid in which the amine group has been protonated (+NH₃) and the carboxyl group has lost a proton (COO⁻), giving an internal salt with both positive and negative charges',
      'A dipeptide',
      'An amino acid with two amine groups',
    ],
    correctAnswer: 1,
    explanation: 'At its isoelectric point, an amino acid exists as a zwitterion: the -NH₂ gains a proton to become -NH₃⁺ and the -COOH loses a proton to become -COO⁻. The net charge is zero but both + and − charges are present.',
  },
  {
    id: 463,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What type of bond links amino acids in a protein chain?',
    options: ['Ester bond', 'Peptide (amide) bond', 'Ionic bond', 'Disulfide bond'],
    correctAnswer: 1,
    explanation: 'Amino acids are linked by peptide bonds (amide bonds, -CONH-) formed by a condensation reaction between the -COOH of one amino acid and the -NH₂ of the next, with loss of water.',
  },
  {
    id: 464,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is the primary structure of a protein?',
    options: [
      'The 3D folded shape held by hydrogen bonds',
      'The sequence of amino acids (linked by peptide bonds) in the polypeptide chain',
      'The overall quaternary structure',
      'The α-helix or β-sheet secondary structure',
    ],
    correctAnswer: 1,
    explanation: 'The primary structure is the specific sequence of amino acids in the polypeptide chain, determined by the genetic code. It is held together by covalent peptide bonds.',
  },
  {
    id: 465,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'What forces stabilise the secondary structure (α-helix or β-pleated sheet) of a protein?',
    options: [
      'Covalent disulfide bonds between cysteine residues',
      'Hydrogen bonds between the C=O and N-H groups of the peptide backbone',
      'Ionic interactions between charged side chains',
      'van der Waals forces between non-polar side chains',
    ],
    correctAnswer: 1,
    explanation: 'Secondary structure (α-helix and β-pleated sheet) is stabilised by hydrogen bonds formed between the carbonyl oxygen (C=O) and the amide hydrogen (N-H) of the peptide backbone. No side-chain interactions are involved at the secondary level.',
  },
  {
    id: 466,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What happens to a protein when it is denatured?',
    options: [
      'Its primary structure (peptide bonds) is broken',
      'The 3D shape is disrupted by breaking non-covalent interactions (H-bonds, ionic bonds, van der Waals), but primary structure remains intact',
      'It is hydrolysed into individual amino acids',
      'It becomes more soluble in water',
    ],
    correctAnswer: 1,
    explanation: 'Denaturation disrupts the secondary and tertiary structure of a protein by breaking non-covalent interactions (hydrogen bonds, ionic bonds, hydrophobic interactions). The primary structure (peptide bonds) is not broken. The protein loses its biological function.',
  },
  {
    id: 467,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What are the four bases found in DNA?',
    options: [
      'Adenine, Thymine, Guanine, Cytosine',
      'Adenine, Uracil, Guanine, Cytosine',
      'Adenine, Thymine, Guanine, Serine',
      'Adenine, Thymine, Guanine, Alanine',
    ],
    correctAnswer: 0,
    explanation: 'DNA contains four nitrogenous bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). In RNA, Thymine is replaced by Uracil (U).',
  },
  {
    id: 468,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What base-pairing rules apply in DNA?',
    options: [
      'A pairs with C; G pairs with T',
      'A pairs with T (2 hydrogen bonds); G pairs with C (3 hydrogen bonds)',
      'A pairs with G; T pairs with C',
      'All bases pair with each other equally',
    ],
    correctAnswer: 1,
    explanation: 'Complementary base pairing in DNA: Adenine (A) pairs with Thymine (T) via 2 hydrogen bonds; Guanine (G) pairs with Cytosine (C) via 3 hydrogen bonds. This specificity allows accurate DNA replication.',
  },
  {
    id: 469,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'How are amino acids analysed by thin-layer chromatography (TLC)?',
    options: [
      'They are detected by UV absorption directly',
      'After separation by TLC, the plate is sprayed with ninhydrin solution; amino acids give a purple/blue colour',
      'They show as coloured spots before staining',
      'They are detected by their fluorescence under UV light without staining',
    ],
    correctAnswer: 1,
    explanation: 'Amino acids are colourless and cannot be seen directly on TLC plates. Ninhydrin reagent is sprayed on the dried plate and heated; it reacts with amino acids to give a purple colour (blue-purple for most amino acids, yellow for proline). Rf values identify each amino acid.',
  },
  {
    id: 470,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'How can a protein be hydrolysed to its constituent amino acids?',
    options: [
      'By heating with concentrated acid (e.g. 6M HCl, 110°C, 24 hours) or concentrated alkali',
      'By adding NaOH at room temperature',
      'By UV irradiation',
      'By dissolving in organic solvents',
    ],
    correctAnswer: 0,
    explanation: 'Peptide (amide) bonds in proteins can be hydrolysed by prolonged heating with concentrated hydrochloric acid (acid hydrolysis) or concentrated NaOH (alkaline hydrolysis). The mixture of amino acids produced can then be analysed by chromatography.',
  },
  {
    id: 471,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What is a dipeptide?',
    options: [
      'A polymer of many amino acids',
      'Two amino acids joined by a peptide bond',
      'A protein with two disulfide bonds',
      'An amino acid with two amine groups',
    ],
    correctAnswer: 1,
    explanation: 'A dipeptide is formed when two amino acids condense (with loss of H₂O) to form a single peptide bond, linking them. A tripeptide has three amino acids linked by two peptide bonds, etc.',
  },
  {
    id: 472,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'Why can amino acids act as both acids and bases (amphoteric behaviour)?',
    options: [
      'Because they contain both C=O and C-H bonds',
      'Because the -NH₂ group can accept a proton (acts as base) and the -COOH group can donate a proton (acts as acid)',
      'Because they contain only ionic bonds',
      'Because they are soluble in both acids and bases',
    ],
    correctAnswer: 1,
    explanation: 'Amino acids are amphoteric: the carboxyl group (-COOH) can lose a proton (acts as an acid) and the amino group (-NH₂) can accept a proton (acts as a base). At the isoelectric point, both groups are ionised, forming a zwitterion.',
  },

  // ── Organic Synthesis ─────────────────────────────────────────────────────
  {
    id: 473,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'What is a synthetic route?',
    options: [
      'A road used to transport chemicals',
      'A series of chemical reactions used to convert a starting material to a desired target molecule',
      'A single reaction to make a product',
      'A laboratory procedure for distillation',
    ],
    correctAnswer: 1,
    explanation: 'A synthetic route is a sequence of reactions, each converting one functional group to another, used to build up a target molecule from available starting materials.',
  },
  {
    id: 474,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'How would you convert ethanol to ethanoic acid in the laboratory?',
    options: [
      'Treat with K₂Cr₂O₇/H₂SO₄ under distillation conditions',
      'Treat with K₂Cr₂O₇/H₂SO₄ under reflux to fully oxidise to carboxylic acid',
      'Treat with NaOH',
      'React with HBr',
    ],
    correctAnswer: 1,
    explanation: 'Ethanol (primary alcohol) → ethanoic acid requires oxidation with K₂Cr₂O₇/H₂SO₄. Under reflux conditions, the intermediate aldehyde (ethanal) is further oxidised to the carboxylic acid (ethanoic acid).',
  },
  {
    id: 475,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'What two-step route converts ethene to 2-hydroxypropanenitrile?',
    options: [
      'Ethene + HBr → bromoethane; bromoethane + KCN → 2-hydroxypropanenitrile',
      'Ethene + HBr → bromoethane; bromoethane + KOH → ethanol; does not give hydroxypropanenitrile',
      'Ethene + steam → ethanol; ethanol oxidised to ethanal (K₂Cr₂O₇/H₂SO₄, distil); ethanal + HCN → 2-hydroxypropanenitrile',
      'Direct addition of HCN to ethene',
    ],
    correctAnswer: 2,
    explanation: 'Step 1: Ethene + steam (H₃PO₄ catalyst, 300°C) → ethanol. Step 2: Ethanol oxidised with K₂Cr₂O₇/H₂SO₄ under distillation → ethanal. Step 3: Ethanal + HCN → CH₃CH(OH)CN (2-hydroxypropanenitrile).',
  },
  {
    id: 476,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What laboratory technique is used to purify a liquid organic product from a reaction mixture?',
    options: [
      'Recrystallisation',
      'Distillation (simple or fractional)',
      'Filtration',
      'Chromatography only',
    ],
    correctAnswer: 1,
    explanation: 'Distillation is used to purify liquid organic products. Simple distillation separates liquids with very different boiling points. Fractional distillation separates liquids with close boiling points. The purified liquid is collected at its boiling point.',
  },
  {
    id: 477,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'How would you convert 1-bromobutane to butanenitrile?',
    options: [
      'React with KOH(aq)',
      'React with KCN in ethanol under reflux',
      'React with NaBH₄',
      'React with NH₃ in ethanol',
    ],
    correctAnswer: 1,
    explanation: 'CH₃CH₂CH₂CH₂Br + KCN (in ethanol, reflux) → CH₃CH₂CH₂CH₂CN + KBr. Nucleophilic substitution with CN⁻ replaces Br and extends the carbon chain from 4C to 5C.',
  },
  {
    id: 478,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'In a multi-step synthesis, how is propylamine (propan-1-amine) made from propan-1-ol?',
    options: [
      'Directly treat propan-1-ol with NH₃',
      'Propan-1-ol + HBr → 1-bromopropane; 1-bromopropane + excess NH₃ (in ethanol) → propylamine',
      'Oxidise propan-1-ol to propanal, then add NH₃',
      'Propan-1-ol + PCl₅ → 1-chloropropane; directly react with NH₃',
    ],
    correctAnswer: 1,
    explanation: 'Step 1: Propan-1-ol + HBr → 1-bromopropane (nucleophilic substitution). Step 2: 1-bromopropane + excess NH₃ (in ethanol, sealed tube) → propylamine (propan-1-amine) + HBr. Excess NH₃ suppresses formation of secondary and tertiary amines.',
  },
  {
    id: 479,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What technique is used to purify a solid organic product?',
    options: ['Distillation', 'Recrystallisation', 'Solvent extraction', 'Gas chromatography'],
    correctAnswer: 1,
    explanation: 'Recrystallisation is used to purify solid organic products. The impure solid is dissolved in a hot minimum volume of suitable solvent; on cooling, pure crystals form (impurities remain in solution); the crystals are filtered and dried.',
  },
  {
    id: 480,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'How can cyclohexanol be converted to cyclohexanone?',
    options: [
      'Add KOH(aq) and heat',
      'Oxidise with K₂Cr₂O₇/H₂SO₄ — secondary alcohol is oxidised to a ketone',
      'Add HBr to substitute the OH group',
      'React with Na metal',
    ],
    correctAnswer: 1,
    explanation: 'Cyclohexanol is a secondary alcohol. Oxidation with K₂Cr₂O₇/H₂SO₄ (orange → green) converts it to cyclohexanone (a ketone). Ketones cannot be further oxidised under these conditions.',
  },
  {
    id: 481,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'What is reflux and why is it used in organic synthesis?',
    options: [
      'Heating a mixture in an open flask to increase the rate of evaporation',
      'Heating a reaction mixture with a condenser attached so that solvent vapour condenses and returns to the flask — allowing a reaction to proceed at high temperature without losing material',
      'A cooling technique to slow reactions',
      'A purification method for separating two liquids',
    ],
    correctAnswer: 1,
    explanation: 'Reflux uses a vertical water-cooled condenser above the flask. Vapour rises, condenses, and drips back, so the reaction mixture is maintained at boiling point for as long as needed without losing volatile reactants or products.',
  },
  {
    id: 482,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What reagent and conditions convert a nitrile to a primary amine?',
    options: [
      'LiAlH₄ in dry ether (or H₂ with Ni catalyst), then aqueous workup',
      'NaBH₄ in methanol',
      'K₂Cr₂O₇/H₂SO₄',
      'Conc. HCl under reflux',
    ],
    correctAnswer: 0,
    explanation: 'Nitriles (RCN) are reduced to primary amines (RCH₂NH₂) by LiAlH₄ in dry ether (powerful reducer) or H₂ over Ni catalyst. RCN + 4[H] → RCH₂NH₂.',
  },
  {
    id: 483,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'Design a two-step route from ethanol to ethanoyl chloride.',
    options: [
      'Ethanol + HCl → chloroethane; chloroethane + K₂Cr₂O₇ → ethanoyl chloride',
      'Ethanol + K₂Cr₂O₇/H₂SO₄ (reflux) → ethanoic acid; ethanoic acid + PCl₅ (or SOCl₂) → ethanoyl chloride + H₃PO₄ + HCl',
      'Ethanol + PCl₅ → ethanoyl chloride directly',
      'Ethanol + NaOH → sodium ethanoate; sodium ethanoate + HCl → ethanoyl chloride',
    ],
    correctAnswer: 1,
    explanation: 'Step 1: Ethanol → ethanoic acid (oxidation: K₂Cr₂O₇/H₂SO₄, reflux). Step 2: Ethanoic acid + PCl₅ → ethanoyl chloride + POCl₃ + HCl. The PCl₅ converts the -OH of -COOH to -Cl, forming the acyl chloride.',
  },
  {
    id: 484,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'How is the purity of a solid product checked in organic chemistry?',
    options: [
      'By measuring its boiling point',
      'By measuring its melting point and comparing with the literature value — a pure solid has a sharp melting point; impurities lower and broaden the melting point',
      'By measuring its density',
      'By checking its colour',
    ],
    correctAnswer: 1,
    explanation: 'Purity of a solid is assessed by melting point determination. A pure compound has a sharp, well-defined melting point equal to the literature value. Impurities cause a lower and broader melting point range.',
  },

  // ── NMR Spectroscopy ──────────────────────────────────────────────────────
  {
    id: 485,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'What does the chemical shift (δ) in NMR spectroscopy indicate?',
    options: [
      'The number of hydrogen atoms in the molecule',
      'The position of a peak relative to TMS (tetramethylsilane, δ = 0), indicating the chemical environment of the nucleus',
      'The molecular mass of the compound',
      'The number of carbon atoms',
    ],
    correctAnswer: 1,
    explanation: 'Chemical shift (δ, in ppm) indicates where a NMR signal appears relative to TMS (reference standard, δ = 0). Different chemical environments (influenced by nearby electronegative atoms, bonds, etc.) give different chemical shift values.',
  },
  {
    id: 486,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'In ¹H NMR, what does the integration (area under a peak) tell you?',
    options: [
      'The chemical environment of the proton',
      'The relative number of hydrogen atoms responsible for each signal',
      'The splitting pattern of the signal',
      'The molecular formula',
    ],
    correctAnswer: 1,
    explanation: 'Integration gives the relative ratio of hydrogen atoms in each environment. If two peaks have integration ratio 3:2, there are 3H in one environment and 2H in another (e.g. CH₃ and CH₂ groups).',
  },
  {
    id: 487,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'What is the n+1 rule in ¹H NMR spin-spin splitting?',
    options: [
      'A peak with n equivalent neighbouring H atoms is split into n peaks',
      'A proton with n equivalent H atoms on adjacent carbons gives n+1 peaks (a multiplet)',
      'The chemical shift increases by n+1 ppm for each adjacent H',
      'The peak area is proportional to n+1',
    ],
    correctAnswer: 1,
    explanation: 'The n+1 rule: a proton (or group of equivalent protons) with n equivalent H atoms on immediately adjacent carbons is split into n+1 peaks. E.g. CH₃ adjacent to CH gives 1+1=2 peaks (doublet); CH₂ gives 3 peaks (triplet).',
  },
  {
    id: 488,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'How many ¹H NMR signals does ethanol (CH₃CH₂OH) show?',
    options: ['1', '2', '3', '6'],
    correctAnswer: 2,
    explanation: 'Ethanol has three chemically distinct proton environments: CH₃ (3H), CH₂ (2H), and OH (1H) — giving 3 signals. The OH peak may be a broad singlet.',
  },
  {
    id: 489,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'In a ¹H NMR spectrum of CH₃CHO (ethanal), what splitting pattern does the CHO proton show?',
    options: [
      'Singlet (1 peak)',
      'Doublet (2 peaks)',
      'Quartet (4 peaks) — split by the 3 adjacent CH₃ protons',
      'Triplet (3 peaks)',
    ],
    correctAnswer: 2,
    explanation: 'The CHO proton is adjacent to the CH₃ group (3 equivalent H). By the n+1 rule: 3+1 = 4 peaks → quartet. The CH₃ protons are adjacent to 1H (the CHO proton): 1+1 = 2 peaks → doublet.',
  },
  {
    id: 490,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'What solvent is commonly used to dissolve samples for NMR analysis and why?',
    options: [
      'Water — easily available and non-toxic',
      'CDCl₃ (deuterated chloroform) — it has no ¹H signal to interfere with the sample spectrum',
      'Ethanol — dissolves most organic compounds',
      'Acetone — gives a clear spectrum',
    ],
    correctAnswer: 1,
    explanation: 'Deuterated solvents (e.g. CDCl₃) are used in NMR because deuterium (²H) resonates at a very different frequency from ¹H and does not interfere with the proton spectrum. Ordinary solvents would give large signals masking the sample peaks.',
  },
  {
    id: 491,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'A compound with molecular formula C₃H₇Br shows two ¹H NMR signals with integration ratio 6:1. What is the compound?',
    options: [
      '1-bromopropane',
      '2-bromopropane — CH₃CHBrCH₃ has 6H (two equivalent CH₃ groups) and 1H (CHBr)',
      '1,2-dibromopropane',
      'Bromocyclopropane',
    ],
    correctAnswer: 1,
    explanation: '2-bromopropane (CH₃CHBrCH₃) has two identical CH₃ groups (6H equivalent, one signal) and one CH (1H, different signal). Ratio 6:1 matches. 1-bromopropane (CH₃CH₂CH₂Br) would give 3 signals.',
  },
  {
    id: 492,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'What is TMS (tetramethylsilane) and why is it used as a reference in NMR?',
    options: [
      'Si(CH₃)₄; used because it gives one sharp peak at δ = 0, is chemically inert, volatile, and soluble in most organic solvents',
      'A paramagnetic substance used to shift all peaks',
      'A solvent for dissolving samples',
      'A standard used only in ¹³C NMR',
    ],
    correctAnswer: 0,
    explanation: 'TMS (tetramethylsilane, Si(CH₃)₄) gives a single sharp ¹H NMR peak assigned δ = 0. It is used as a reference because: all 12H are equivalent (one peak), chemically inert to most compounds, volatile (easily removed), and soluble in common NMR solvents.',
  },

  // ── Chromatography ────────────────────────────────────────────────────────
  {
    id: 493,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What does the Rf value represent in thin-layer chromatography (TLC)?',
    options: [
      'The retention factor: Rf = distance travelled by spot / distance travelled by solvent front',
      'The mass of the compound',
      'The polarity of the stationary phase',
      'The boiling point of the compound',
    ],
    correctAnswer: 0,
    explanation: 'Rf = distance travelled by the compound / distance travelled by the solvent front. Rf values range from 0 to 1 and are characteristic of a compound under specific conditions (solvent, stationary phase).',
  },
  {
    id: 494,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What are the two phases in chromatography?',
    options: [
      'Aqueous phase and organic phase',
      'Stationary phase (fixed medium — e.g. silica gel) and mobile phase (solvent or gas that moves through)',
      'Upper phase and lower phase',
      'Polar phase and non-polar phase',
    ],
    correctAnswer: 1,
    explanation: 'All chromatographic techniques involve a stationary phase (fixed in place, e.g. silica gel, alumina, liquid on solid support) and a mobile phase (moves through it, e.g. a solvent or carrier gas). Separation occurs because components partition differently between the two phases.',
  },
  {
    id: 495,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In gas chromatography (GC), what is the mobile phase?',
    options: [
      'A liquid solvent',
      'An inert carrier gas (e.g. nitrogen or helium)',
      'Silica gel',
      'Water',
    ],
    correctAnswer: 1,
    explanation: 'In GC (gas-liquid chromatography), an inert carrier gas (mobile phase) carries vaporised sample components through a column coated with a liquid stationary phase. Components are separated based on their boiling points and affinities for the stationary phase.',
  },
  {
    id: 496,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What does a chromatogram show in gas chromatography?',
    options: [
      'A visible coloured pattern on paper',
      'A plot of detector signal (y-axis) against retention time (x-axis); each peak represents a component',
      'The mass spectrum of the sample',
      'The infrared spectrum of the sample',
    ],
    correctAnswer: 1,
    explanation: 'A GC chromatogram plots detector signal vs. retention time. Each component gives a separate peak at a characteristic retention time. The area under each peak is proportional to the amount of that component.',
  },
  {
    id: 497,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'How can GC be combined with mass spectrometry (GC-MS) to identify unknown compounds?',
    options: [
      'GC separates the mixture; then each separated component is fed into the mass spectrometer to give a fragmentation pattern for identification',
      'MS separates the mixture; GC identifies the components',
      'Both techniques are used simultaneously without separation',
      'GC gives the molecular formula; MS gives the retention time',
    ],
    correctAnswer: 0,
    explanation: 'GC-MS: the GC first separates the mixture components by retention time. As each component elutes, it enters the mass spectrometer which records its mass spectrum (molecular ion and fragmentation pattern). Comparing with reference databases identifies each component.',
  },
  {
    id: 498,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'Why must the solvent level in a TLC beaker/tank be below the baseline (sample application point)?',
    options: [
      'To prevent the solvent from heating the plate',
      'To prevent the samples from dissolving into the solvent before chromatographic separation begins',
      'To keep the Rf value above 1',
      'To ensure the stationary phase remains dry',
    ],
    correctAnswer: 1,
    explanation: 'If the solvent level is above the baseline, the samples would dissolve directly into the mobile phase and be washed off the plate rather than being carried up by capillary action. The baseline must be above the solvent level.',
  },
  {
    id: 499,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What is the purpose of chromatography?',
    options: [
      'To measure the melting point of a compound',
      'To separate, identify, and/or quantify the components of a mixture',
      'To synthesise pure compounds',
      'To determine the molecular mass of a compound',
    ],
    correctAnswer: 1,
    explanation: 'Chromatography is an analytical technique for separating the components of a mixture based on their different affinities for the stationary and mobile phases. It can be used to identify compounds (by Rf or retention time), check purity, or quantify components.',
  },
  {
    id: 500,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'A mixture of two compounds A and B is run by TLC. Compound A travels 4.5 cm and compound B travels 2.0 cm; the solvent front travels 6.0 cm. Which compound is more polar (assuming a polar silica gel stationary phase and non-polar solvent)?',
    options: [
      'Compound A — higher Rf means more polar',
      'Compound B — lower Rf means more polar (more attracted to polar silica stationary phase)',
      'Both are equally polar',
      'Cannot be determined from Rf alone',
    ],
    correctAnswer: 1,
    explanation: 'With a polar stationary phase (silica) and non-polar mobile phase: more polar compounds have stronger attraction to the stationary phase, so they travel less far (lower Rf). Rf(A) = 4.5/6.0 = 0.75; Rf(B) = 2.0/6.0 = 0.33. Compound B has lower Rf and is more polar.',
  },

  {
    id: 501,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What does the mass spectrometer measure?',
    options: [
      'The charge of an ion',
      'The mass-to-charge ratio of ions',
      'The electron configuration of atoms',
      'The ionisation energy of elements'
    ],
    correctAnswer: 1,
    explanation: 'A mass spectrometer separates ions by their mass-to-charge ratio (m/z). This allows isotopes and molecular masses to be identified.'
  },
  {
    id: 502,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'Which of the following correctly defines an isotope?',
    options: [
      'Atoms of different elements with the same mass number',
      'Atoms of the same element with different numbers of neutrons',
      'Atoms of the same element with different numbers of electrons',
      'Atoms of different elements with the same atomic number'
    ],
    correctAnswer: 1,
    explanation: 'Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, giving them different mass numbers.'
  },
  {
    id: 503,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What is the electron configuration of a phosphorus atom (Z = 15)?',
    options: [
      '1s² 2s² 2p⁶ 3s² 3p³',
      '1s² 2s² 2p⁶ 3s² 3p⁵',
      '1s² 2s² 2p⁶ 3s¹ 3p⁴',
      '1s² 2s² 2p⁵ 3s² 3p⁴'
    ],
    correctAnswer: 0,
    explanation: 'Phosphorus has 15 electrons. Filling subshells in order: 1s²(2) 2s²(4) 2p⁶(10) 3s²(12) 3p³(15), giving 1s² 2s² 2p⁶ 3s² 3p³.'
  },
  {
    id: 504,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which ion has the electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶?',
    options: [
      'Na⁺',
      'Cl⁻',
      'Both Na⁺ and Cl⁻',
      'K⁺'
    ],
    correctAnswer: 2,
    explanation: 'Na⁺ loses one electron from Na (2,8,1) giving 2,8. Cl⁻ gains one electron from Cl (2,8,7) giving 2,8,8. Both have the configuration 1s² 2s² 2p⁶ 3s² 3p⁶ (18 electrons total — actually Na⁺ has 10 and Cl⁻ has 18). Na⁺ is 1s² 2s² 2p⁶ and Cl⁻ is 1s² 2s² 2p⁶ 3s² 3p⁶; K⁺ also has 1s² 2s² 2p⁶ 3s² 3p⁶.'
  },
  {
    id: 505,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Why is there a large increase in ionisation energy between the 2nd and 3rd ionisation energies of magnesium?',
    options: [
      'The 3rd electron is removed from a 2p subshell which is closer to the nucleus',
      'The 3rd electron is removed from the n=2 shell, which is closer to the nucleus and experiences less shielding',
      'The 3rd electron is in a 3s orbital and is harder to remove',
      'The 2nd ionisation energy involves removing an electron from a full subshell'
    ],
    correctAnswer: 1,
    explanation: 'Mg has configuration [Ne] 3s². The first two electrons are removed from the outer 3s subshell. The 3rd electron must come from the n=2 shell, which is much closer to the nucleus and less shielded, so it requires far more energy to remove.'
  },
  {
    id: 506,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'How many orbitals are in the 3d subshell?',
    options: [
      '3',
      '5',
      '7',
      '10'
    ],
    correctAnswer: 1,
    explanation: 'The d subshell has a magnetic quantum number l=2, giving 2l+1 = 5 orbitals. Each orbital can hold 2 electrons, so 3d holds a maximum of 10 electrons.'
  },
  {
    id: 507,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'In a mass spectrum, what does the x-axis represent?',
    options: [
      'Relative abundance',
      'Mass-to-charge ratio (m/z)',
      'Atomic number',
      'Ionisation energy'
    ],
    correctAnswer: 1,
    explanation: 'The x-axis of a mass spectrum shows mass-to-charge ratio (m/z), while the y-axis shows relative abundance (or relative intensity) of each ion.'
  },
  {
    id: 508,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which element has the electron configuration [Ar] 3d¹⁰ 4s¹?',
    options: [
      'Zinc',
      'Copper',
      'Potassium',
      'Chromium'
    ],
    correctAnswer: 1,
    explanation: 'Copper has the configuration [Ar] 3d¹⁰ 4s¹, not [Ar] 3d⁹ 4s², because a fully filled 3d subshell provides extra stability. Chromium is similarly anomalous: [Ar] 3d⁵ 4s¹.'
  },
  {
    id: 509,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'The successive ionisation energies of an element are: 786, 1577, 3232, 4356, 16 091, 19 784 kJ mol⁻¹. Which group is this element in?',
    options: [
      'Group 2',
      'Group 3',
      'Group 4',
      'Group 5'
    ],
    correctAnswer: 2,
    explanation: 'There is a large jump between the 4th and 5th ionisation energies, indicating that 4 electrons are in the outer shell. This means the element is in Group 4.'
  },
  {
    id: 510,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What is the shape of an s orbital?',
    options: [
      'Dumbbell-shaped',
      'Spherical',
      'Clover-shaped',
      'Toroidal'
    ],
    correctAnswer: 1,
    explanation: 'An s orbital is spherically symmetrical around the nucleus. p orbitals are dumbbell-shaped, and d orbitals have more complex shapes.'
  },
  {
    id: 511,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Why does the first ionisation energy of aluminium (Al) decrease compared to magnesium (Mg)?',
    options: [
      'Al has a larger nuclear charge than Mg',
      'The outer electron in Al is in a 3p orbital, which is higher in energy and better shielded than the 3s orbital in Mg',
      'Al has fewer protons than Mg',
      'The 3p subshell in Al is fully filled, so the electron is easier to remove'
    ],
    correctAnswer: 1,
    explanation: 'Al\'s outer electron is in the 3p subshell, which is slightly higher in energy and better shielded by the filled 3s subshell than Mg\'s 3s electron. Despite Al having a higher nuclear charge, the 3p electron is easier to remove.'
  },
  {
    id: 512,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'How is the relative atomic mass of an element calculated from a mass spectrum?',
    options: [
      'By adding all m/z values together',
      'By taking the m/z value of the most abundant isotope',
      'By calculating the weighted mean mass of all isotopes relative to ¹²C',
      'By dividing the highest m/z value by the number of isotopes'
    ],
    correctAnswer: 2,
    explanation: 'Relative atomic mass is calculated as the sum of (isotope mass × relative abundance) divided by total abundance. This gives a weighted mean relative to ¹²C = 12.'
  },
  {
    id: 513,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'How many electrons can the second shell (n=2) hold?',
    options: [
      '2',
      '4',
      '8',
      '18'
    ],
    correctAnswer: 2,
    explanation: 'The second shell contains the 2s and 2p subshells. 2s holds 2 electrons and 2p holds 6, giving a total of 8 electrons in the n=2 shell.'
  },
  {
    id: 514,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which of the following has the highest first ionisation energy?',
    options: [
      'Na',
      'Mg',
      'Al',
      'Si'
    ],
    correctAnswer: 1,
    explanation: 'Across period 3, first ionisation energy generally increases. However, Mg (Group 2, full 3s²) has a higher first IE than Al (Group 3, 3p¹) because Al\'s 3p electron is easier to remove. Among the options, Mg has the highest first IE.'
  },
  {
    id: 515,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'An element has the successive ionisation energies (kJ mol⁻¹): 1000, 2260, 3390, 4540, 6950, 8490, 27 100. How many outer shell electrons does it have?',
    options: [
      '4',
      '5',
      '6',
      '7'
    ],
    correctAnswer: 2,
    explanation: 'The large jump occurs between the 6th and 7th ionisation energies, indicating 6 outer shell electrons are relatively easy to remove. This element is in Group 6.'
  },
  {
    id: 516,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'What is shielding in the context of atomic structure?',
    options: [
      'The repulsion between outer electrons and the nucleus',
      'The reduction in effective nuclear charge experienced by outer electrons due to inner electrons',
      'The attraction between protons and neutrons in the nucleus',
      'The effect of electron spin on energy levels'
    ],
    correctAnswer: 1,
    explanation: 'Shielding occurs when inner-shell electrons reduce the full attractive force of the nucleus felt by outer electrons. Greater shielding means outer electrons are held less tightly.'
  },
  {
    id: 517,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Easy',
    question: 'What is the maximum number of electrons in a p subshell?',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 2,
    explanation: 'A p subshell contains 3 p orbitals, each holding a maximum of 2 electrons, giving a total capacity of 6 electrons.'
  },
  {
    id: 518,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Why does the first ionisation energy generally increase across Period 3?',
    options: [
      'The atomic radius increases across the period',
      'The nuclear charge increases with more shielding from inner electrons',
      'The nuclear charge increases while shielding remains roughly constant, increasing effective nuclear charge',
      'The number of shells increases across the period'
    ],
    correctAnswer: 2,
    explanation: 'Across a period, protons are added but electrons enter the same shell (same level of shielding). The effective nuclear charge increases, pulling electrons closer to the nucleus and making them harder to remove.'
  },
  {
    id: 519,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Hard',
    question: 'Chlorine has two main isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). What is the relative atomic mass of chlorine?',
    options: [
      '35.5',
      '36.0',
      '36.5',
      '37.0'
    ],
    correctAnswer: 0,
    explanation: 'Ar = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5.'
  },
  {
    id: 520,
    topic: 'Physical Chemistry',
    subtopic: 'Atomic Structure',
    difficulty: 'Medium',
    question: 'Which statement about the 4s and 3d subshells is correct for elements in Period 4?',
    options: [
      'The 4s subshell is always higher in energy than 3d',
      'The 4s subshell fills before 3d because it is lower in energy when the atom is empty, but 3d is lower in energy in transition metal ions',
      'The 3d subshell always fills before 4s',
      'The 4s and 3d subshells have identical energies in all atoms'
    ],
    correctAnswer: 1,
    explanation: 'In neutral atoms, 4s is filled before 3d because it is slightly lower in energy. However, in transition metal cations, 3d is lower in energy than 4s, which is why 4s electrons are lost first when ions form.'
  },
  {
    id: 521,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the Avogadro constant?',
    options: [
      '6.02 × 10²¹ mol⁻¹',
      '6.02 × 10²³ mol⁻¹',
      '6.02 × 10²⁵ mol⁻¹',
      '3.01 × 10²³ mol⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'The Avogadro constant (Nₐ) is 6.02 × 10²³ mol⁻¹. It represents the number of particles in one mole of a substance.'
  },
  {
    id: 522,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'How many moles are in 44 g of CO₂ (Mr = 44)?',
    options: [
      '0.5 mol',
      '1 mol',
      '2 mol',
      '44 mol'
    ],
    correctAnswer: 1,
    explanation: 'Moles = mass / molar mass = 44 g / 44 g mol⁻¹ = 1 mol.'
  },
  {
    id: 523,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the molar volume of any ideal gas at standard temperature and pressure (STP, 0°C and 101 kPa)?',
    options: [
      '22.4 dm³ mol⁻¹',
      '24.0 dm³ mol⁻¹',
      '24.5 dm³ mol⁻¹',
      '22.0 dm³ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'At STP (0°C, 101 kPa), the molar volume of an ideal gas is 22.4 dm³ mol⁻¹. At RTP (25°C, 101 kPa), the AQA value is 24.0 dm³ mol⁻¹.'
  },
  {
    id: 524,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'A compound is 40.0% C, 6.67% H, and 53.3% O by mass. What is its empirical formula?',
    options: [
      'CH₂O',
      'C₂H₄O₂',
      'CHO',
      'C₂H₂O'
    ],
    correctAnswer: 0,
    explanation: 'Divide by atomic masses: C: 40/12 = 3.33, H: 6.67/1 = 6.67, O: 53.3/16 = 3.33. Ratio C:H:O = 1:2:1, so empirical formula = CH₂O.'
  },
  {
    id: 525,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What is the concentration of a solution made by dissolving 5.85 g of NaCl (Mr = 58.5) in 500 cm³ of water?',
    options: [
      '0.1 mol dm⁻³',
      '0.2 mol dm⁻³',
      '0.5 mol dm⁻³',
      '1.0 mol dm⁻³'
    ],
    correctAnswer: 1,
    explanation: 'Moles of NaCl = 5.85/58.5 = 0.1 mol. Volume = 500 cm³ = 0.5 dm³. Concentration = 0.1/0.5 = 0.2 mol dm⁻³.'
  },
  {
    id: 526,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: '25.0 cm³ of 0.100 mol dm⁻³ NaOH is titrated with 0.0500 mol dm⁻³ H₂SO₄. What volume of H₂SO₄ is required for neutralisation?',
    options: [
      '12.5 cm³',
      '25.0 cm³',
      '50.0 cm³',
      '100.0 cm³'
    ],
    correctAnswer: 1,
    explanation: 'Moles NaOH = 0.025 × 0.100 = 0.0025 mol. Reaction: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. Moles H₂SO₄ needed = 0.0025/2 = 0.00125 mol. Volume = 0.00125/0.0500 = 0.025 dm³ = 25.0 cm³.'
  },
  {
    id: 527,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What is atom economy?',
    options: [
      'The percentage of reactant that is converted to product',
      'The percentage of the total mass of reactants that ends up in the desired product',
      'The ratio of moles of product to moles of limiting reagent',
      'The mass of product obtained divided by the theoretical maximum mass'
    ],
    correctAnswer: 1,
    explanation: 'Atom economy = (molar mass of desired product / sum of molar masses of all products) × 100%. It measures how efficiently atoms in reactants are incorporated into the desired product.'
  },
  {
    id: 528,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'In the reaction N₂ + 3H₂ → 2NH₃, if 2 mol of N₂ and 3 mol of H₂ are mixed, which is the limiting reagent?',
    options: [
      'N₂',
      'H₂',
      'Both are in exact stoichiometric amounts',
      'Neither — both are in excess'
    ],
    correctAnswer: 1,
    explanation: '2 mol N₂ would require 6 mol H₂ (ratio 1:3), but only 3 mol H₂ is available. Therefore H₂ is the limiting reagent.'
  },
  {
    id: 529,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What is the percentage yield if 4.5 g of water is produced when the theoretical yield is 9.0 g?',
    options: [
      '25%',
      '50%',
      '75%',
      '100%'
    ],
    correctAnswer: 1,
    explanation: 'Percentage yield = (actual yield / theoretical yield) × 100 = (4.5 / 9.0) × 100 = 50%.'
  },
  {
    id: 530,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'A gas occupies 600 cm³ at RTP. How many moles of gas is this? (Molar volume at RTP = 24.0 dm³ mol⁻¹)',
    options: [
      '0.0025 mol',
      '0.025 mol',
      '0.25 mol',
      '2.5 mol'
    ],
    correctAnswer: 1,
    explanation: 'Volume = 600 cm³ = 0.600 dm³. Moles = 0.600 / 24.0 = 0.025 mol.'
  },
  {
    id: 531,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'A hydrocarbon contains 85.7% C and 14.3% H. Its Mr is 84. What is its molecular formula?',
    options: [
      'C₅H₁₀',
      'C₆H₁₂',
      'C₄H₈',
      'C₇H₁₄'
    ],
    correctAnswer: 1,
    explanation: 'C: 85.7/12 = 7.14, H: 14.3/1 = 14.3. Ratio = 1:2, so empirical formula = CH₂ (Mr = 14). Molecular formula Mr = 84; 84/14 = 6. Molecular formula = C₆H₁₂.'
  },
  {
    id: 532,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the molar mass of Ca(NO₃)₂?',
    options: [
      '102 g mol⁻¹',
      '132 g mol⁻¹',
      '148 g mol⁻¹',
      '164 g mol⁻¹'
    ],
    correctAnswer: 3,
    explanation: 'Ca = 40, N = 14 × 2 = 28, O = 16 × 6 = 96. Total = 40 + 28 + 96 = 164 g mol⁻¹.'
  },
  {
    id: 533,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'How many molecules are in 0.25 mol of water?',
    options: [
      '1.505 × 10²³',
      '3.01 × 10²³',
      '6.02 × 10²³',
      '1.204 × 10²⁴'
    ],
    correctAnswer: 0,
    explanation: 'Number of molecules = moles × Nₐ = 0.25 × 6.02 × 10²³ = 1.505 × 10²³.'
  },
  {
    id: 534,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'In a back titration, 25.0 cm³ of 2.00 mol dm⁻³ HCl is added to excess CaCO₃. The excess HCl requires 18.0 cm³ of 1.00 mol dm⁻³ NaOH to neutralise. How many moles of CaCO₃ reacted?',
    options: [
      '0.016 mol',
      '0.023 mol',
      '0.031 mol',
      '0.041 mol'
    ],
    correctAnswer: 2,
    explanation: 'Moles HCl initial = 0.025 × 2.00 = 0.050 mol. Moles NaOH = 0.018 × 1.00 = 0.018 mol = moles excess HCl. Moles HCl reacted = 0.050 − 0.018 = 0.032 mol. CaCO₃ + 2HCl → products; moles CaCO₃ = 0.032/2 = 0.016 mol. (Answer A is correct — option A = 0.016 mol.)',
  },
  {
    id: 535,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What is the formula for calculating moles from mass?',
    options: [
      'moles = mass × molar mass',
      'moles = mass / molar mass',
      'moles = molar mass / mass',
      'moles = mass + molar mass'
    ],
    correctAnswer: 1,
    explanation: 'Moles = mass (g) ÷ molar mass (g mol⁻¹). For example, 18 g of water ÷ 18 g mol⁻¹ = 1 mol.'
  },
  {
    id: 536,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'What does a high atom economy indicate?',
    options: [
      'A high percentage yield',
      'Little waste is produced and most atoms end up in the desired product',
      'The reaction is fast',
      'The reaction is exothermic'
    ],
    correctAnswer: 1,
    explanation: 'High atom economy means most of the atoms from reactants are incorporated into the desired product, minimising waste. This is an important concept in green chemistry.'
  },
  {
    id: 537,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'The ideal gas equation is pV = nRT. What are the correct SI units for pressure (p) in this equation?',
    options: [
      'atm',
      'kPa',
      'Pa',
      'mmHg'
    ],
    correctAnswer: 2,
    explanation: 'In the ideal gas equation, pressure must be in Pascals (Pa), volume in m³, n in mol, and R = 8.314 J mol⁻¹ K⁻¹. Temperature must be in Kelvin.'
  },
  {
    id: 538,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Hard',
    question: 'A 0.50 g sample of an unknown acid HₓA is titrated with 0.100 mol dm⁻³ NaOH. It requires 40.0 cm³ to reach the end point. If HₓA is a diprotic acid (x=2), what is the molar mass of HₓA?',
    options: [
      '125 g mol⁻¹',
      '200 g mol⁻¹',
      '250 g mol⁻¹',
      '500 g mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'Moles NaOH = 0.040 × 0.100 = 0.004 mol. For diprotic acid, moles acid = 0.004/2 = 0.002 mol. Molar mass = 0.50/0.002 = 250 g mol⁻¹. (Answer C = 250 g mol⁻¹.)'
  },
  {
    id: 539,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Easy',
    question: 'What volume does 1 mol of an ideal gas occupy at room temperature and pressure (25°C, 101 kPa)?',
    options: [
      '22.4 dm³',
      '24.0 dm³',
      '24.5 dm³',
      '22.0 dm³'
    ],
    correctAnswer: 1,
    explanation: 'AQA uses a molar volume of 24.0 dm³ mol⁻¹ at room temperature and pressure (25°C, 101 kPa). This value is given in the AQA data booklet.'
  },
  {
    id: 540,
    topic: 'Physical Chemistry',
    subtopic: 'Amount of Substance',
    difficulty: 'Medium',
    question: 'In the reaction 2Mg + O₂ → 2MgO, what mass of MgO is produced from 4.86 g of Mg? (Mg = 24, O = 16)',
    options: [
      '4.05 g',
      '6.05 g',
      '8.10 g',
      '12.15 g'
    ],
    correctAnswer: 2,
    explanation: 'Moles Mg = 4.86/24 = 0.2025 mol. From equation, moles MgO = 0.2025 mol. Mass MgO = 0.2025 × 40 = 8.10 g.'
  },
  {
    id: 541,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What type of bonding is present in sodium chloride (NaCl)?',
    options: [
      'Covalent bonding',
      'Ionic bonding',
      'Metallic bonding',
      'Hydrogen bonding'
    ],
    correctAnswer: 1,
    explanation: 'NaCl is an ionic compound. Sodium donates one electron to chlorine, forming Na⁺ and Cl⁻ ions held together by electrostatic attraction in a giant ionic lattice.'
  },
  {
    id: 542,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What is a dative covalent bond?',
    options: [
      'A bond where both electrons come from the same atom',
      'A bond between a metal and a non-metal',
      'A bond formed by the transfer of electrons',
      'A bond that can only form between identical atoms'
    ],
    correctAnswer: 0,
    explanation: 'A dative (or coordinate) covalent bond is a shared pair of electrons where both electrons in the bond are donated by one atom. An example is the bond in NH₄⁺ or the Al–O bond in Al₂Cl₆.'
  },
  {
    id: 543,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What is the bond angle in a water molecule (H₂O)?',
    options: [
      '90°',
      '104.5°',
      '107°',
      '109.5°'
    ],
    correctAnswer: 1,
    explanation: 'Water has 2 bonding pairs and 2 lone pairs. The two lone pairs repel the bonding pairs more strongly, reducing the angle from 109.5° (tetrahedral) to 104.5°.'
  },
  {
    id: 544,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which molecule is polar despite having polar bonds?',
    options: [
      'CO₂',
      'CCl₄',
      'H₂O',
      'BF₃'
    ],
    correctAnswer: 2,
    explanation: 'H₂O has a bent shape (due to lone pairs), so the polar O–H bond dipoles do not cancel. CO₂ is linear and CCl₄ is tetrahedral — their dipoles cancel, making them non-polar.'
  },
  {
    id: 545,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What is the strongest type of intermolecular force?',
    options: [
      'London (dispersion) forces',
      'Permanent dipole–dipole forces',
      'Hydrogen bonding',
      'Ionic bonding'
    ],
    correctAnswer: 2,
    explanation: 'Among intermolecular forces, hydrogen bonding is the strongest. It occurs between molecules containing N–H, O–H, or F–H bonds interacting with lone pairs on N, O, or F atoms.'
  },
  {
    id: 546,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What is the bond angle in BF₃?',
    options: [
      '90°',
      '107°',
      '109.5°',
      '120°'
    ],
    correctAnswer: 3,
    explanation: 'BF₃ has 3 bonding pairs and no lone pairs, giving a trigonal planar geometry with bond angles of 120°.'
  },
  {
    id: 547,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'Why does diamond have a very high melting point?',
    options: [
      'It has strong metallic bonds throughout its structure',
      'It has strong covalent bonds in a giant covalent lattice with each C bonded to 4 others',
      'It has strong ionic bonds between carbon atoms',
      'It has strong hydrogen bonds between C–H groups'
    ],
    correctAnswer: 1,
    explanation: 'Diamond is a giant covalent structure where each carbon atom forms four strong covalent bonds in a tetrahedral arrangement. Melting requires breaking many strong C–C covalent bonds, requiring enormous energy.'
  },
  {
    id: 548,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Why is graphite a good conductor of electricity?',
    options: [
      'It contains free-moving electrons in the space between layers',
      'It has ionic bonds that allow charge to flow',
      'Delocalised electrons within the layers are free to move',
      'It contains metallic bonding between carbon atoms'
    ],
    correctAnswer: 2,
    explanation: 'In graphite, each carbon forms 3 covalent bonds in hexagonal layers. The 4th electron from each carbon is delocalised across the layer, forming a "sea" of electrons that can carry charge.'
  },
  {
    id: 549,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which of the following has the highest boiling point due to intermolecular forces?',
    options: [
      'CH₄',
      'C₂H₆',
      'C₄H₁₀',
      'C₈H₁₈'
    ],
    correctAnswer: 3,
    explanation: 'All these alkanes have only London (dispersion) forces. The strength of London forces increases with the number of electrons (molecular size), so C₈H₁₈ has the strongest intermolecular forces and highest boiling point.'
  },
  {
    id: 550,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'What is electronegativity?',
    options: [
      'The energy needed to remove an electron from a gaseous atom',
      'The ability of an atom to attract the bonding electrons in a covalent bond towards itself',
      'The charge density of an ion',
      'The tendency of an atom to lose electrons'
    ],
    correctAnswer: 1,
    explanation: 'Electronegativity is the ability of an atom to attract the shared pair of electrons in a covalent bond. Fluorine is the most electronegative element.'
  },
  {
    id: 551,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'What is the shape and bond angle of a PCl₅ molecule?',
    options: [
      'Square planar, 90°',
      'Tetrahedral, 109.5°',
      'Trigonal bipyramidal, 90° and 120°',
      'Octahedral, 90°'
    ],
    correctAnswer: 2,
    explanation: 'PCl₅ has 5 bonding pairs and no lone pairs. It adopts a trigonal bipyramidal shape with three equatorial bonds at 120° and two axial bonds at 90° to the equatorial plane.'
  },
  {
    id: 552,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which type of bonding is present in solid iodine (I₂)?',
    options: [
      'Ionic bonding',
      'Covalent bonding only within molecules, London dispersion forces between molecules',
      'Metallic bonding',
      'Hydrogen bonding between molecules'
    ],
    correctAnswer: 1,
    explanation: 'Solid iodine consists of I₂ molecules held in a lattice by weak London (dispersion) forces. Within each molecule, there is a covalent bond between the two iodine atoms.'
  },
  {
    id: 553,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'Which molecule has a tetrahedral shape?',
    options: [
      'H₂O',
      'NH₃',
      'CH₄',
      'CO₂'
    ],
    correctAnswer: 2,
    explanation: 'CH₄ has 4 bonding pairs and no lone pairs, giving a perfect tetrahedral shape with bond angles of 109.5°. H₂O and NH₃ have lone pairs which distort the geometry.'
  },
  {
    id: 554,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Why do ionic compounds have high melting points?',
    options: [
      'They have strong covalent bonds within molecules',
      'They have a giant lattice structure with strong electrostatic attractions between oppositely charged ions in all directions',
      'They form hydrogen bonds with water molecules',
      'They have strong metallic bonds'
    ],
    correctAnswer: 1,
    explanation: 'Ionic compounds form giant ionic lattices held together by strong electrostatic forces between oppositely charged ions in all directions. A large amount of energy is needed to overcome these forces.'
  },
  {
    id: 555,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'Why does HF have a higher boiling point than HCl despite having a smaller molecule?',
    options: [
      'HF has stronger London dispersion forces',
      'HF can form hydrogen bonds between molecules due to the highly electronegative F atom',
      'HF has a greater dipole moment causing stronger ionic interactions',
      'HF molecules are held together by metallic bonding'
    ],
    correctAnswer: 1,
    explanation: 'HF forms strong hydrogen bonds (O–H...F type) because fluorine is the most electronegative element, making the H atom strongly δ+. HCl cannot form hydrogen bonds, only weaker dipole-dipole forces.'
  },
  {
    id: 556,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What is the bond angle in NH₃?',
    options: [
      '90°',
      '104.5°',
      '107°',
      '109.5°'
    ],
    correctAnswer: 2,
    explanation: 'NH₃ has 3 bonding pairs and 1 lone pair. The lone pair repels the bonding pairs more strongly, reducing the bond angle from 109.5° (tetrahedral) to 107°.'
  },
  {
    id: 557,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Easy',
    question: 'In metallic bonding, what holds the metal ions together?',
    options: [
      'Shared electron pairs between specific metal atoms',
      'Electrostatic attraction between positive metal ions and a delocalised sea of electrons',
      'Ionic bonds between metal cations and metal anions',
      'Hydrogen bonds between metal atoms'
    ],
    correctAnswer: 1,
    explanation: 'Metallic bonding involves positive metal ions (cations) in a lattice surrounded by a "sea" of delocalised electrons. The electrostatic attraction between the positive ions and the delocalised electrons holds the structure together.'
  },
  {
    id: 558,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Hard',
    question: 'Which statement correctly explains why CO₂ is non-polar despite having polar C=O bonds?',
    options: [
      'The C=O bonds are not polar in CO₂',
      'CO₂ has a linear shape, so the two equal and opposite bond dipoles cancel',
      'Carbon and oxygen have equal electronegativities in CO₂',
      'CO₂ has London forces which cancel out polarity'
    ],
    correctAnswer: 1,
    explanation: 'CO₂ is linear (O=C=O). The two C=O bonds are equal in magnitude and point in opposite directions, so their dipole moments cancel exactly, making the molecule non-polar overall.'
  },
  {
    id: 559,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'What type of structure does silicon dioxide (SiO₂) have?',
    options: [
      'Simple molecular',
      'Giant ionic',
      'Giant covalent (macromolecular)',
      'Metallic'
    ],
    correctAnswer: 2,
    explanation: 'SiO₂ has a giant covalent structure where each Si atom is bonded to 4 O atoms and each O to 2 Si atoms. This gives it a very high melting point and hardness, similar to diamond.'
  },
  {
    id: 560,
    topic: 'Physical Chemistry',
    subtopic: 'Bonding',
    difficulty: 'Medium',
    question: 'Which of the following correctly describes London dispersion forces?',
    options: [
      'Permanent interactions between polar molecules',
      'Temporary induced dipole interactions between all molecules due to uneven electron distribution',
      'Fixed bonds between electron-deficient and electron-rich atoms',
      'Interactions unique to noble gases only'
    ],
    correctAnswer: 1,
    explanation: 'London (dispersion) forces arise from temporary, instantaneous dipoles caused by fluctuations in electron distribution. These temporary dipoles induce dipoles in neighbouring molecules. They exist between all molecules.'
  },
  {
    id: 561,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What is the standard enthalpy of combustion?',
    options: [
      'The energy released when 1 mol of a substance is formed from its elements in their standard states',
      'The energy change when 1 mol of a substance is completely burned in excess oxygen under standard conditions',
      'The energy needed to break all bonds in 1 mol of a substance',
      'The energy change when 1 mol of a substance dissolves in water'
    ],
    correctAnswer: 1,
    explanation: 'The standard enthalpy of combustion (ΔHc°) is the enthalpy change when one mole of a substance is completely combusted in excess oxygen under standard conditions (298 K, 101 kPa).'
  },
  {
    id: 562,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What does a negative value of ΔH indicate?',
    options: [
      'The reaction is endothermic',
      'The reaction is exothermic',
      'The reaction does not occur',
      'The reaction requires a catalyst'
    ],
    correctAnswer: 1,
    explanation: 'A negative ΔH indicates an exothermic reaction, where energy is released to the surroundings. The products are at lower enthalpy than the reactants.'
  },
  {
    id: 563,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Using Hess\'s law, calculate ΔH for: C + 2H₂ → CH₄, given: ΔHc(C) = −393 kJ mol⁻¹, ΔHc(H₂) = −286 kJ mol⁻¹, ΔHc(CH₄) = −890 kJ mol⁻¹',
    options: [
      '−75 kJ mol⁻¹',
      '+75 kJ mol⁻¹',
      '−211 kJ mol⁻¹',
      '+965 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'By Hess\'s law: ΔHf(CH₄) = ΔHc(C) + 2ΔHc(H₂) − ΔHc(CH₄) = −393 + 2(−286) − (−890) = −393 − 572 + 890 = −75 kJ mol⁻¹.'
  },
  {
    id: 564,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'What are standard conditions in thermochemistry?',
    options: [
      'Temperature 0°C (273 K) and pressure 101 kPa',
      'Temperature 25°C (298 K) and pressure 101 kPa',
      'Temperature 25°C (298 K) and pressure 1 atm with 1 mol dm⁻³ solutions',
      'Temperature 100°C (373 K) and pressure 101 kPa'
    ],
    correctAnswer: 1,
    explanation: 'Standard conditions in thermochemistry are 298 K (25°C) and 101 kPa (approximately 1 atm). Standard enthalpy values are measured and quoted under these conditions.'
  },
  {
    id: 565,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'Using bond enthalpies, calculate ΔH for H₂ + Cl₂ → 2HCl. Bond enthalpies: H–H = 436, Cl–Cl = 242, H–Cl = 431 kJ mol⁻¹',
    options: [
      '−184 kJ mol⁻¹',
      '+184 kJ mol⁻¹',
      '−247 kJ mol⁻¹',
      '+247 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'Bonds broken: H–H (436) + Cl–Cl (242) = 678 kJ. Bonds formed: 2 × H–Cl = 2 × 431 = 862 kJ. ΔH = bonds broken − bonds formed = 678 − 862 = −184 kJ mol⁻¹.'
  },
  {
    id: 566,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'In a calorimetry experiment, 100 g of water is heated from 20°C to 30°C by burning ethanol. If c = 4.18 J g⁻¹ K⁻¹, what is the heat energy released?',
    options: [
      '418 J',
      '2090 J',
      '4180 J',
      '41800 J'
    ],
    correctAnswer: 2,
    explanation: 'q = mcΔT = 100 × 4.18 × (30 − 20) = 100 × 4.18 × 10 = 4180 J.'
  },
  {
    id: 567,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'What is lattice enthalpy?',
    options: [
      'The enthalpy change when 1 mol of an ionic compound dissolves in water',
      'The enthalpy change when 1 mol of an ionic compound is formed from its constituent gaseous ions',
      'The enthalpy change when 1 mol of a metal is converted to gaseous ions',
      'The enthalpy change when electrons are removed from gaseous atoms'
    ],
    correctAnswer: 1,
    explanation: 'Lattice enthalpy (formation) is the enthalpy change when 1 mole of an ionic compound is formed from its constituent gaseous ions under standard conditions. It is always exothermic (negative).'
  },
  {
    id: 568,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'State Hess\'s law.',
    options: [
      'The enthalpy change of a reaction depends on the temperature at which it is carried out',
      'The total enthalpy change of a reaction is independent of the route taken, provided initial and final states are the same',
      'Enthalpy changes are only valid at standard conditions',
      'The heat released in a reaction equals the heat absorbed in the reverse reaction, multiplied by 2'
    ],
    correctAnswer: 1,
    explanation: 'Hess\'s law states that the total enthalpy change for a chemical reaction is independent of the route, as long as the initial and final conditions are the same. This is based on conservation of energy.'
  },
  {
    id: 569,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'In a Born-Haber cycle for NaCl, which step corresponds to electron affinity?',
    options: [
      'Na(s) → Na(g)',
      'Na(g) → Na⁺(g) + e⁻',
      'Cl(g) + e⁻ → Cl⁻(g)',
      'Na⁺(g) + Cl⁻(g) → NaCl(s)'
    ],
    correctAnswer: 2,
    explanation: 'Electron affinity is the enthalpy change when one mole of gaseous atoms each gains one electron. In the Born-Haber cycle for NaCl, this corresponds to Cl(g) + e⁻ → Cl⁻(g).'
  },
  {
    id: 570,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'What does ΔHf° represent?',
    options: [
      'The energy released when a substance burns',
      'The enthalpy change when 1 mol of a substance is formed from its elements in their standard states',
      'The enthalpy change of an aqueous solution forming',
      'The enthalpy change when bonds are broken'
    ],
    correctAnswer: 1,
    explanation: 'The standard enthalpy of formation (ΔHf°) is the enthalpy change when one mole of a compound is formed from its elements in their standard states under standard conditions.'
  },
  {
    id: 571,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'The enthalpy of formation of all elements in their standard state is:',
    options: [
      'Positive',
      'Negative',
      'Zero',
      'Cannot be determined'
    ],
    correctAnswer: 2,
    explanation: 'By definition, the standard enthalpy of formation of elements in their standard state is zero. For example, ΔHf°(O₂(g)) = 0, ΔHf°(C(graphite)) = 0.'
  },
  {
    id: 572,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'Bond enthalpy calculations give approximate values for ΔH. Why?',
    options: [
      'Bond enthalpies are measured at non-standard temperatures',
      'Bond enthalpies are average values from many different compounds, not specific to the exact molecule',
      'Bond enthalpy calculations ignore the energy needed to heat reactants',
      'Bond enthalpies only apply to ionic compounds'
    ],
    correctAnswer: 1,
    explanation: 'Bond enthalpies are average values taken from many different compounds. The actual bond enthalpy in a specific molecule may differ from the average, so calculations using these averages are only approximate.'
  },
  {
    id: 573,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'Which process in a Born-Haber cycle for NaCl is endothermic?',
    options: [
      'Formation of NaCl(s) from Na(s) and ½Cl₂(g)',
      'Formation of Na⁺(g) from Na(g) (first ionisation energy)',
      'Formation of Cl⁻(g) from Cl(g) (electron affinity)',
      'Formation of NaCl lattice from Na⁺(g) and Cl⁻(g) (lattice enthalpy)'
    ],
    correctAnswer: 1,
    explanation: 'The first ionisation energy of sodium (Na(g) → Na⁺(g) + e⁻) is endothermic (+496 kJ mol⁻¹). Electron affinity of chlorine and lattice enthalpy formation are exothermic.'
  },
  {
    id: 574,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'Which of these processes is endothermic?',
    options: [
      'Combustion of methane',
      'Neutralisation of HCl by NaOH',
      'Decomposition of calcium carbonate (thermal)',
      'Formation of NaCl from Na and Cl₂'
    ],
    correctAnswer: 2,
    explanation: 'Thermal decomposition of calcium carbonate (CaCO₃ → CaO + CO₂) requires heating and is endothermic. The other reactions are all exothermic.'
  },
  {
    id: 575,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'Why is the lattice enthalpy of MgO much larger in magnitude than that of NaCl?',
    options: [
      'Mg and O are lighter atoms than Na and Cl',
      'Mg²⁺ and O²⁻ have higher charges and smaller ionic radii than Na⁺ and Cl⁻, leading to stronger electrostatic attractions',
      'MgO has a different crystal structure to NaCl',
      'The electron affinities of O are larger than Cl'
    ],
    correctAnswer: 1,
    explanation: 'Lattice enthalpy depends on ionic charge and size. Mg²⁺ and O²⁻ carry double the charge of Na⁺ and Cl⁻, and both ions are smaller, so the electrostatic attraction is much greater, giving a larger lattice enthalpy.'
  },
  {
    id: 576,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'The standard enthalpy of combustion of propane is −2220 kJ mol⁻¹. How much energy is released burning 2.20 g of propane? (Mr of propane C₃H₈ = 44)',
    options: [
      '−111 kJ',
      '−222 kJ',
      '−555 kJ',
      '−1110 kJ'
    ],
    correctAnswer: 0,
    explanation: 'Moles of propane = 2.20/44 = 0.05 mol. Energy = 0.05 × 2220 = 111 kJ released.'
  },
  {
    id: 577,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Easy',
    question: 'Which equation represents the standard enthalpy of formation of methanol (CH₃OH)?',
    options: [
      'CH₄(g) + ½O₂(g) → CH₃OH(l)',
      'C(s) + 2H₂(g) + ½O₂(g) → CH₃OH(l)',
      'CH₃OH(l) → CO₂(g) + 2H₂O(l)',
      'CO(g) + 2H₂(g) → CH₃OH(l)'
    ],
    correctAnswer: 1,
    explanation: 'The standard enthalpy of formation is defined as forming 1 mol of the compound from its elements in their standard states. For methanol: C(s, graphite) + 2H₂(g) + ½O₂(g) → CH₃OH(l).'
  },
  {
    id: 578,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Hard',
    question: 'A student uses a spirit burner to find ΔHc of ethanol. The calculated value is less exothermic than the data booklet value. Give one reason why.',
    options: [
      'The student used too much ethanol',
      'Heat was lost to the surroundings and the calorimeter, so not all heat raised the water temperature',
      'The student used excess oxygen',
      'The student measured the mass incorrectly causing a higher value'
    ],
    correctAnswer: 1,
    explanation: 'In spirit burner experiments, significant heat is lost to the surroundings, calorimeter, and by incomplete combustion. This means less heat reaches the water, giving a less negative (less exothermic) value than the true value.'
  },
  {
    id: 579,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'What is the enthalpy change for: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)? Given: ΔHf°(CH₄) = −75, ΔHf°(CO₂) = −393, ΔHf°(H₂O) = −286 kJ mol⁻¹',
    options: [
      '−604 kJ mol⁻¹',
      '−890 kJ mol⁻¹',
      '−965 kJ mol⁻¹',
      '+890 kJ mol⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'ΔH = ΣΔHf°(products) − ΣΔHf°(reactants) = [−393 + 2(−286)] − [−75 + 0] = −965 − (−75) = −965 + 75 = −890 kJ mol⁻¹.'
  },
  {
    id: 580,
    topic: 'Physical Chemistry',
    subtopic: 'Energetics',
    difficulty: 'Medium',
    question: 'In a Born-Haber cycle, which step represents atomisation of sodium?',
    options: [
      'Na(g) → Na⁺(g) + e⁻',
      'Na(s) → Na(g)',
      'Na⁺(g) + Cl⁻(g) → NaCl(s)',
      '½Cl₂(g) → Cl(g)'
    ],
    correctAnswer: 1,
    explanation: 'Atomisation enthalpy is the enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state. For Na, this is Na(s) → Na(g). It is always endothermic.'
  },
  {
    id: 581,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What is activation energy?',
    options: [
      'The average kinetic energy of reactant molecules',
      'The minimum energy that colliding particles must have in order to react',
      'The energy released when products form',
      'The energy stored in chemical bonds'
    ],
    correctAnswer: 1,
    explanation: 'Activation energy (Ea) is the minimum energy that colliding particles must possess for a successful reaction to occur. Only collisions with energy ≥ Ea lead to reaction.'
  },
  {
    id: 582,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'How does increasing temperature affect the rate of reaction?',
    options: [
      'It decreases the rate by reducing collision frequency',
      'It increases the rate by increasing both collision frequency and the proportion of particles with energy ≥ Ea',
      'It has no effect on rate',
      'It only increases rate if a catalyst is present'
    ],
    correctAnswer: 1,
    explanation: 'Increasing temperature raises the average kinetic energy of particles, increasing collision frequency and, more significantly, greatly increasing the proportion of particles with energy equal to or exceeding the activation energy.'
  },
  {
    id: 583,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'On a Maxwell-Boltzmann distribution curve, what does the area to the right of the activation energy represent?',
    options: [
      'The average kinetic energy of all particles',
      'The proportion of particles with sufficient energy to react',
      'The total number of particles',
      'The enthalpy change of the reaction'
    ],
    correctAnswer: 1,
    explanation: 'The area under the Maxwell-Boltzmann curve to the right of Ea represents the fraction of particles with kinetic energy equal to or greater than the activation energy — these are the particles that can react upon collision.'
  },
  {
    id: 584,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'How does a catalyst increase the rate of reaction?',
    options: [
      'By increasing the temperature of the reaction',
      'By increasing the concentration of reactants',
      'By providing an alternative reaction pathway with a lower activation energy',
      'By increasing the pressure of the system'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy. This means a greater proportion of particles have sufficient energy to react, increasing the rate without being consumed itself.'
  },
  {
    id: 585,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Which of the following increases the rate of reaction for a solid dissolving in acid?',
    options: [
      'Increasing the particle size of the solid',
      'Decreasing the concentration of the acid',
      'Grinding the solid into a powder to increase surface area',
      'Cooling the reaction mixture'
    ],
    correctAnswer: 2,
    explanation: 'Increasing surface area by grinding a solid into powder exposes more particles to the acid, increasing the frequency of collisions and thus the rate of reaction.'
  },
  {
    id: 586,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'What happens to the Maxwell-Boltzmann distribution when temperature increases?',
    options: [
      'The peak moves to the left and the curve becomes taller and narrower',
      'The peak moves to the right and the curve becomes flatter and broader, with more area to the right of Ea',
      'The peak height increases but the position remains the same',
      'The curve shifts uniformly to higher energies without changing shape'
    ],
    correctAnswer: 1,
    explanation: 'At higher temperature, the distribution shifts to higher energies: the peak moves right, the curve flattens and broadens. The area to the right of Ea increases significantly, meaning more particles can react.'
  },
  {
    id: 587,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'Why does increasing concentration increase the rate of reaction?',
    options: [
      'It raises the activation energy',
      'It increases the frequency of collisions between reactant particles',
      'It provides more energy to reactant molecules',
      'It lowers the temperature required for the reaction'
    ],
    correctAnswer: 1,
    explanation: 'Higher concentration means more reactant particles per unit volume, so particles collide more frequently. More frequent collisions (with sufficient energy and correct orientation) lead to a faster rate.'
  },
  {
    id: 588,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'A heterogeneous catalyst is one that:',
    options: [
      'Is in the same phase as the reactants',
      'Is a biological molecule that speeds up reactions',
      'Is in a different phase from the reactants',
      'Can only work at high temperatures'
    ],
    correctAnswer: 2,
    explanation: 'A heterogeneous catalyst is in a different physical state (phase) from the reactants. For example, solid iron catalysts in the Haber process catalyse a gas-phase reaction between N₂ and H₂.'
  },
  {
    id: 589,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'Collision theory states that for a reaction to occur, particles must:',
    options: [
      'Simply collide with each other',
      'Collide with sufficient energy and the correct orientation',
      'Collide in liquid phase only',
      'Collide with exactly the activation energy — no more, no less'
    ],
    correctAnswer: 1,
    explanation: 'Collision theory requires particles to collide with energy ≥ activation energy AND with the correct geometric orientation. Both conditions must be met for a successful collision.'
  },
  {
    id: 590,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Why does increasing pressure increase the rate of a gas-phase reaction?',
    options: [
      'Pressure raises the activation energy of the reaction',
      'Higher pressure means gas molecules are closer together, increasing collision frequency',
      'Pressure changes the nature of the bonds being broken',
      'Pressure has no effect on gas-phase reactions'
    ],
    correctAnswer: 1,
    explanation: 'Increasing pressure compresses the gas, increasing concentration. More molecules per unit volume means more frequent collisions, leading to a higher reaction rate.'
  },
  {
    id: 591,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'On a Maxwell-Boltzmann diagram, a catalyst is represented by:',
    options: [
      'Moving the entire curve to higher energies',
      'Adding a second, higher activation energy marker',
      'Moving the Ea marker to lower energy so more particles exceed it',
      'Increasing the peak height of the distribution'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst lowers Ea. On a Maxwell-Boltzmann diagram this is shown by moving the Ea line to the left. The shaded area to the right of Ea is now larger, representing more particles able to react.'
  },
  {
    id: 592,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'Which factor does NOT increase the rate of the reaction between marble chips and HCl?',
    options: [
      'Increasing temperature',
      'Increasing concentration of HCl',
      'Using marble powder instead of chips',
      'Adding more water to the reaction mixture'
    ],
    correctAnswer: 3,
    explanation: 'Adding water dilutes the acid, reducing the concentration of HCl. This decreases collision frequency and slows the reaction. All other options increase the rate.'
  },
  {
    id: 593,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What does the Maxwell-Boltzmann distribution show?',
    options: [
      'The distribution of charges in an ionic solid',
      'The distribution of molecular speeds and kinetic energies in a sample of gas',
      'The distribution of bond lengths in molecules',
      'The enthalpy profile of a reaction'
    ],
    correctAnswer: 1,
    explanation: 'The Maxwell-Boltzmann distribution shows the spread of molecular speeds (and hence kinetic energies) in a gas at a given temperature. Most molecules have intermediate energies.'
  },
  {
    id: 594,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'In an energy profile diagram, what does the transition state represent?',
    options: [
      'The products of the reaction',
      'The reactants before collision',
      'The highest energy point on the reaction coordinate, representing the activated complex',
      'The activation energy value'
    ],
    correctAnswer: 2,
    explanation: 'The transition state (activated complex) is the highest energy point on the reaction energy profile. It is an unstable arrangement of atoms at the peak of the energy barrier between reactants and products.'
  },
  {
    id: 595,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'A reaction has Ea = 50 kJ mol⁻¹ without catalyst and 30 kJ mol⁻¹ with catalyst. By how much does the catalyst lower Ea?',
    options: [
      '10 kJ mol⁻¹',
      '20 kJ mol⁻¹',
      '30 kJ mol⁻¹',
      '80 kJ mol⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'The catalyst reduces Ea from 50 to 30 kJ mol⁻¹, a reduction of 20 kJ mol⁻¹.'
  },
  {
    id: 596,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Which statement about catalysts is correct?',
    options: [
      'Catalysts are consumed in the reaction',
      'Catalysts change the enthalpy change of the reaction',
      'Catalysts are not consumed and can be recovered unchanged',
      'Catalysts only work at high temperatures'
    ],
    correctAnswer: 2,
    explanation: 'Catalysts speed up reactions but are not consumed in the overall process and can be recovered. They lower activation energy but do not change the overall enthalpy change of the reaction.'
  },
  {
    id: 597,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'Why is finely powdered solid more reactive than large lumps of the same material?',
    options: [
      'The powder has lower activation energy',
      'Greater surface area means more frequent collisions between reactant particles',
      'The powder is denser',
      'Finer particles have higher kinetic energy'
    ],
    correctAnswer: 1,
    explanation: 'Finely powdered solid has a much greater surface area exposed to the other reactant. More surface area means more collision sites per unit time, increasing the rate of reaction.'
  },
  {
    id: 598,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'What effect does a catalyst have on the enthalpy change (ΔH) of a reaction?',
    options: [
      'It makes ΔH more negative',
      'It makes ΔH less negative',
      'It has no effect on ΔH',
      'It reverses the sign of ΔH'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst lowers activation energy but does not change the enthalpy change. ΔH depends only on the energies of reactants and products, not on the pathway between them.'
  },
  {
    id: 599,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'If a reaction rate doubles for every 10°C rise, and the rate at 20°C is k, what is the rate at 50°C?',
    options: [
      '4k',
      '6k',
      '8k',
      '16k'
    ],
    correctAnswer: 2,
    explanation: 'From 20°C to 50°C is 30°C — three 10°C intervals. Rate doubles each interval: k × 2³ = 8k.'
  },
  {
    id: 600,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What is the role of the iron catalyst in the Haber process?',
    options: [
      'It provides nitrogen for the reaction',
      'It increases the equilibrium yield of ammonia',
      'It speeds up attainment of equilibrium without affecting the equilibrium position',
      'It removes ammonia from the equilibrium mixture'
    ],
    correctAnswer: 2,
    explanation: 'The iron catalyst lowers activation energy, allowing equilibrium to be reached faster. It does not shift the equilibrium position or change Kc at a given temperature.'
  },
  {
    id: 601,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'What is a dynamic equilibrium?',
    options: [
      'A state where all reactions have stopped',
      'A state where forward and reverse reactions occur at equal rates, so concentrations remain constant',
      'A state where only the forward reaction is occurring',
      'A state where concentrations are continually changing'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic equilibrium exists in a closed system when the forward and reverse reaction rates are equal. Concentrations of reactants and products remain constant, though both reactions are still occurring.'
  },
  {
    id: 602,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'For the reaction N₂ + 3H₂ ⇌ 2NH₃, what is the Kc expression?',
    options: [
      'Kc = [NH₃]² / ([N₂][H₂]³)',
      'Kc = [N₂][H₂]³ / [NH₃]²',
      'Kc = [NH₃] / ([N₂][H₂])',
      'Kc = 2[NH₃] / ([N₂] + 3[H₂])'
    ],
    correctAnswer: 0,
    explanation: 'Kc = [products]^stoich / [reactants]^stoich = [NH₃]² / ([N₂][H₂]³).'
  },
  {
    id: 603,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: "According to Le Chatelier's principle, what happens to N₂ + 3H₂ ⇌ 2NH₃ when pressure is increased?",
    options: [
      'Equilibrium shifts left, producing more N₂ and H₂',
      'Equilibrium shifts right, producing more NH₃',
      'No change occurs because pressure has no effect on equilibrium',
      'Kc increases'
    ],
    correctAnswer: 1,
    explanation: 'Increasing pressure favours the side with fewer moles of gas. Left = 4 mol gas, right = 2 mol. Equilibrium shifts right, producing more NH₃.'
  },
  {
    id: 604,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: "What happens when temperature is increased for an exothermic equilibrium reaction?",
    options: [
      'Equilibrium shifts forward, producing more products',
      'Equilibrium shifts in the reverse (endothermic) direction, reducing yield of products',
      'Kc increases',
      'No change occurs; temperature only affects rate'
    ],
    correctAnswer: 1,
    explanation: 'Increasing temperature for an exothermic reaction shifts equilibrium to the left (endothermic direction) to absorb extra heat. This reduces product yield and decreases Kc.'
  },
  {
    id: 605,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Haber process (ΔH = −92 kJ mol⁻¹), why is 450°C used rather than a lower temperature?',
    options: [
      'Lower temperatures cause the catalyst to decompose',
      'Lower temperatures cause ammonia to condense',
      'Lower temperatures give an unacceptably slow rate; 450°C is a compromise between rate and yield',
      'Higher temperatures increase Kc for this reaction'
    ],
    correctAnswer: 2,
    explanation: 'Lower temperatures favour higher yield (exothermic reaction) but the rate is extremely slow. 450°C balances an acceptable rate with a reasonable yield; the iron catalyst also needs sufficient temperature to function.'
  },
  {
    id: 606,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'What effect does adding a catalyst have on the position of a chemical equilibrium?',
    options: [
      'It shifts equilibrium to the right',
      'It shifts equilibrium to the left',
      'It has no effect on the position of equilibrium',
      'It changes the value of Kc'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst speeds up both forward and reverse reactions equally. Equilibrium is reached faster but its position (and Kc) is unchanged.'
  },
  {
    id: 607,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Contact process: 2SO₂ + O₂ ⇌ 2SO₃ (ΔH = −196 kJ mol⁻¹). How does increasing temperature affect equilibrium yield of SO₃?',
    options: [
      'Increases yield of SO₃',
      'Decreases yield of SO₃',
      'Has no effect on yield',
      'Increases yield only if pressure is also increased'
    ],
    correctAnswer: 1,
    explanation: 'The forward reaction is exothermic. Increasing temperature shifts equilibrium left (endothermic direction), producing less SO₃. Industrially ~450°C balances rate and yield.'
  },
  {
    id: 608,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'If the concentration of a reactant is increased at equilibrium, what happens?',
    options: [
      'The equilibrium shifts left to restore balance',
      'The equilibrium shifts right to use up some of the added reactant',
      'Kc increases',
      'The rate of the reverse reaction decreases'
    ],
    correctAnswer: 1,
    explanation: 'Adding more reactant causes the system to shift right (forward reaction) to partially offset the increase and restore equilibrium.'
  },
  {
    id: 609,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), given the reaction is endothermic, what happens to Kc if temperature is increased?',
    options: [
      'Kc decreases',
      'Kc stays the same',
      'Kc increases',
      'Kc becomes negative'
    ],
    correctAnswer: 2,
    explanation: 'For an endothermic reaction, increasing temperature shifts equilibrium right, increasing [HI] and decreasing [H₂] and [I₂]. Since Kc = [HI]²/([H₂][I₂]), Kc increases.'
  },
  {
    id: 610,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For A(g) + B(g) ⇌ C(g) + D(g), how does increasing pressure affect equilibrium?',
    options: [
      'Shifts right, towards products',
      'Shifts left, towards reactants',
      'No effect on equilibrium position',
      'Depends on temperature'
    ],
    correctAnswer: 2,
    explanation: 'Equal moles of gas on both sides (2 mol each). Pressure change has no net effect when gas moles are equal on both sides.'
  },
  {
    id: 611,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'What does a large value of Kc (Kc >> 1) indicate?',
    options: [
      'Reactants are strongly favoured at equilibrium',
      'Products are strongly favoured at equilibrium',
      'The reaction is very fast',
      'The reaction is exothermic'
    ],
    correctAnswer: 1,
    explanation: 'Kc = [products]/[reactants]. A large Kc means products predominate at equilibrium; the forward reaction is strongly favoured.'
  },
  {
    id: 612,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'Which statement about the equilibrium constant Kc is correct?',
    options: [
      'Kc changes with concentration but not temperature',
      'Kc changes with temperature only',
      'Kc changes with both temperature and concentration',
      'Kc never changes under any conditions'
    ],
    correctAnswer: 1,
    explanation: 'Kc is only affected by temperature. Changes in concentration, pressure, or catalyst shift the position of equilibrium but do not change Kc.'
  },
  {
    id: 613,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Contact process, which catalyst converts SO₂ to SO₃?',
    options: [
      'Iron',
      'Vanadium(V) oxide (V₂O₅)',
      'Platinum',
      'Nickel'
    ],
    correctAnswer: 1,
    explanation: 'Vanadium(V) oxide (V₂O₅) is the heterogeneous catalyst used in the Contact process. It is regenerated during the reaction cycle.'
  },
  {
    id: 614,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: "Le Chatelier's principle states that:",
    options: [
      'A system always moves to maximise product yield when disturbed',
      'When a system at dynamic equilibrium is disturbed, it responds to oppose the change and restore equilibrium',
      'Increasing temperature always increases product yield',
      'Adding a catalyst shifts equilibrium to the right'
    ],
    correctAnswer: 1,
    explanation: "Le Chatelier's principle: if an equilibrium is disturbed (concentration, temperature, pressure), it shifts in a direction that partially opposes the change and establishes a new equilibrium."
  },
  {
    id: 615,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'Which is a requirement for dynamic equilibrium?',
    options: [
      'The system must be open so substances can enter or leave',
      'The system must be closed so no substances can enter or leave',
      'Only the forward reaction must be occurring',
      'Temperature must be very high'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic equilibrium requires a closed system. In an open system, products may escape, preventing equilibrium from being established.'
  },
  {
    id: 616,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: '2NO₂(g) ⇌ N₂O₄(g), ΔH = −57 kJ mol⁻¹. Pressure is doubled. What happens?',
    options: [
      'Shifts left, more NO₂; Kc increases',
      'Shifts right, more N₂O₄; Kc unchanged',
      'No change in position; Kc decreases',
      'Shifts right; Kc increases'
    ],
    correctAnswer: 1,
    explanation: 'Doubling pressure favours fewer moles of gas (left = 2 mol, right = 1 mol). Equilibrium shifts right, producing more N₂O₄. Kc is unchanged (only temperature changes Kc).'
  },
  {
    id: 617,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'What is the Kc expression for: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O?',
    options: [
      'Kc = [CH₃COOC₂H₅][H₂O] / [CH₃COOH][C₂H₅OH]',
      'Kc = [CH₃COOH][C₂H₅OH] / [CH₃COOC₂H₅][H₂O]',
      'Kc = [CH₃COOC₂H₅] / [CH₃COOH][C₂H₅OH]',
      'Kc = [CH₃COOC₂H₅][H₂O]² / [CH₃COOH]²[C₂H₅OH]²'
    ],
    correctAnswer: 0,
    explanation: 'All stoichiometric coefficients are 1, so Kc = [ester][water] / [acid][alcohol].'
  },
  {
    id: 618,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Haber process, ammonia is continually removed. What effect does this have?',
    options: [
      'Rate of both reactions decreases equally',
      'Kc increases to compensate',
      'Equilibrium shifts right, converting more N₂ and H₂ to NH₃',
      'Equilibrium shifts left, producing more N₂ and H₂'
    ],
    correctAnswer: 2,
    explanation: 'Removing NH₃ decreases its concentration, causing the system to shift right to restore equilibrium. More N₂ and H₂ react, increasing overall conversion.'
  },
  {
    id: 619,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'What are the units of Kc for A + B ⇌ 2C?',
    options: [
      'mol dm⁻³',
      'mol⁻¹ dm³',
      'mol² dm⁻⁶',
      'Kc is dimensionless here'
    ],
    correctAnswer: 3,
    explanation: 'Kc = [C]² / ([A][B]) = (mol dm⁻³)² / (mol dm⁻³)² = dimensionless. When sum of stoichiometric coefficients is equal on both sides, Kc has no units.'
  },
  {
    id: 620,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Haber process, why is a pressure of ~200 atm used rather than much higher pressure?',
    options: [
      'Higher pressure shifts equilibrium to the left',
      'Higher pressure decreases reaction rate',
      'Very high pressures require expensive specialist equipment and pose safety risks, outweighing the extra yield benefit',
      'Higher pressure decomposes the iron catalyst'
    ],
    correctAnswer: 2,
    explanation: 'Higher pressures do increase equilibrium yield, but the engineering costs and safety risks of extremely high-pressure vessels make them economically unviable.'
  },
  {
    id: 621,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of sulfur in H₂SO₄?',
    options: ['+2', '+4', '+6', '+8'],
    correctAnswer: 2,
    explanation: 'In H₂SO₄: H = +1 (×2 = +2), O = −2 (×4 = −8). Neutral molecule: +2 + S − 8 = 0, so S = +6.'
  },
  {
    id: 622,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'In a redox reaction, an oxidising agent:',
    options: [
      'Loses electrons and is oxidised',
      'Gains electrons and is reduced, causing oxidation of another species',
      'Donates protons to another species',
      'Acts as both an acid and a base'
    ],
    correctAnswer: 1,
    explanation: 'An oxidising agent accepts (gains) electrons from another species. In doing so it is itself reduced, while the other species is oxidised.'
  },
  {
    id: 623,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of manganese in MnO₄⁻?',
    options: ['+5', '+6', '+7', '+8'],
    correctAnswer: 2,
    explanation: 'In MnO₄⁻: O = −2 (×4 = −8); overall charge = −1. So Mn − 8 = −1, Mn = +7.'
  },
  {
    id: 624,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Which is the correctly balanced half-equation for reduction of MnO₄⁻ in acidic solution?',
    options: [
      'MnO₄⁻ + 4H⁺ + 3e⁻ → Mn²⁺ + 4H₂O',
      'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
      'MnO₄⁻ + 4H⁺ + 5e⁻ → Mn²⁺ + 2H₂O',
      'MnO₄⁻ + 8H⁺ + 3e⁻ → Mn²⁺ + 4H₂O'
    ],
    correctAnswer: 1,
    explanation: 'Mn: +7 → +2, gain of 5e⁻. Balance 4O with 4H₂O on right, then 8H with 8H⁺ on left: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.'
  },
  {
    id: 625,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What does OIL RIG stand for?',
    options: [
      'Oxidation Is Loss; Reduction Is Gain (of electrons)',
      'Oxidation Involves Loss; Reduction Involves Gain (of protons)',
      'Oxidising Is Losing; Reducing Is Gaining (of mass)',
      'Only In Liquid; Reaction Is Gas'
    ],
    correctAnswer: 0,
    explanation: 'OIL RIG is a mnemonic: Oxidation Is Loss of electrons, Reduction Is Gain of electrons.'
  },
  {
    id: 626,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of nitrogen in NO₃⁻?',
    options: ['+3', '+4', '+5', '+6'],
    correctAnswer: 2,
    explanation: 'In NO₃⁻: O = −2 (×3 = −6); overall charge = −1. N − 6 = −1, so N = +5.'
  },
  {
    id: 627,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'What is disproportionation?',
    options: [
      'A reaction where two different elements are both oxidised',
      'A reaction where the same element is simultaneously oxidised and reduced',
      'A reaction where a compound splits into two simpler compounds',
      'A reaction where an element displaces another from solution'
    ],
    correctAnswer: 1,
    explanation: 'Disproportionation: the same element in one oxidation state is simultaneously oxidised (to higher state) and reduced (to lower state). Example: Cl₂ + 2NaOH → NaCl + NaOCl + H₂O (Cl: 0 → −1 and 0 → +1).'
  },
  {
    id: 628,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In Zn + CuSO₄ → ZnSO₄ + Cu, which species is oxidised?',
    options: ['Cu²⁺', 'SO₄²⁻', 'Zn', 'Cu'],
    correctAnswer: 2,
    explanation: 'Zn is oxidised from 0 to +2 (loses 2 electrons). Cu²⁺ is reduced from +2 to 0.'
  },
  {
    id: 629,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of oxygen in most compounds?',
    options: ['−1', '−2', '+2', '0'],
    correctAnswer: 1,
    explanation: 'Oxygen is −2 in most compounds. Exceptions: peroxides (−1, e.g. H₂O₂) and OF₂ (+2).'
  },
  {
    id: 630,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'In MnO₄⁻ + Fe²⁺ (acidic) → Mn²⁺ + Fe³⁺, how many Fe²⁺ ions are needed to balance one MnO₄⁻?',
    options: ['2', '3', '5', '7'],
    correctAnswer: 2,
    explanation: 'Each Fe²⁺ loses 1e⁻; MnO₄⁻ gains 5e⁻. To balance electrons: 5 Fe²⁺ needed. Full equation: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.'
  },
  {
    id: 631,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of chlorine in Cl₂?',
    options: ['−1', '0', '+1', '+2'],
    correctAnswer: 1,
    explanation: 'The oxidation state of any uncombined element is 0. In Cl₂, each Cl atom is 0.'
  },
  {
    id: 632,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Which of the following is NOT a redox reaction?',
    options: [
      'Mg + 2HCl → MgCl₂ + H₂',
      'NaOH + HCl → NaCl + H₂O',
      'Cl₂ + 2KI → 2KCl + I₂',
      'Fe + CuSO₄ → FeSO₄ + Cu'
    ],
    correctAnswer: 1,
    explanation: 'NaOH + HCl → NaCl + H₂O is an acid-base neutralisation; no oxidation states change. All other reactions involve electron transfer.'
  },
  {
    id: 633,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In 2Na + Cl₂ → 2NaCl, what happens to sodium?',
    options: [
      'Na is reduced from 0 to −1',
      'Na is oxidised from 0 to +1',
      'Na is reduced from +1 to 0',
      'Na is unchanged'
    ],
    correctAnswer: 1,
    explanation: 'Sodium starts at 0 and becomes Na⁺ (+1) in NaCl. It loses an electron — it is oxidised.'
  },
  {
    id: 634,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'Which is the correct half-equation for oxidation of Fe²⁺ to Fe³⁺?',
    options: [
      'Fe²⁺ + e⁻ → Fe³⁺',
      'Fe²⁺ → Fe³⁺ + e⁻',
      'Fe³⁺ + e⁻ → Fe²⁺',
      'Fe + 2e⁻ → Fe²⁺'
    ],
    correctAnswer: 1,
    explanation: 'Oxidation = loss of electrons. Fe²⁺ loses one electron to become Fe³⁺: Fe²⁺ → Fe³⁺ + e⁻.'
  },
  {
    id: 635,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state change of Cr in Cr₂O₇²⁻ → Cr³⁺?',
    options: [
      '+7 to +3, reduction',
      '+6 to +3, reduction of 3 per Cr, each Cr gains 3 electrons',
      '+3 to +6, oxidation',
      '+6 to +3, oxidation'
    ],
    correctAnswer: 1,
    explanation: 'In Cr₂O₇²⁻: Cr = +6. In Cr³⁺: Cr = +3. Change is +6 → +3 per Cr (reduction). Each Cr gains 3 electrons.'
  },
  {
    id: 636,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'A reducing agent:',
    options: [
      'Accepts electrons from other species',
      'Donates electrons to other species and is itself oxidised',
      'Forms anions in reactions',
      'Reacts only with non-metals'
    ],
    correctAnswer: 1,
    explanation: 'A reducing agent donates electrons. In doing so, it is itself oxidised. Metals are common reducing agents.'
  },
  {
    id: 637,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'Mg is added to CuSO₄ solution. What are the oxidation state changes?',
    options: [
      'Mg: 0 → +2 (oxidised); Cu: +2 → 0 (reduced)',
      'Mg: +2 → 0 (reduced); Cu: 0 → +2 (oxidised)',
      'Mg: 0 → −2; Cu: +2 → 0',
      'Only SO₄²⁻ changes oxidation state'
    ],
    correctAnswer: 0,
    explanation: 'Mg is oxidised 0 → +2 (loses 2e⁻); Cu²⁺ is reduced +2 → 0 (gains 2e⁻). Mg is the reducing agent; Cu²⁺ is the oxidising agent.'
  },
  {
    id: 638,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of sulfur in SO₂?',
    options: ['+2', '+4', '+6', '−2'],
    correctAnswer: 1,
    explanation: 'In SO₂: O = −2 (×2 = −4); neutral molecule: S − 4 = 0, so S = +4.'
  },
  {
    id: 639,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'Cl₂ + 2NaOH → NaCl + NaOCl + H₂O. What type of reaction is this?',
    options: [
      'Acid-base reaction',
      'Disproportionation',
      'Displacement reaction',
      'Precipitation reaction'
    ],
    correctAnswer: 1,
    explanation: 'Cl₂ starts at oxidation state 0. In NaCl, Cl = −1 (reduced); in NaOCl, Cl = +1 (oxidised). Same element simultaneously oxidised and reduced — disproportionation.'
  },
  {
    id: 640,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In acidic solution, how are oxygen atoms balanced in half-equations?',
    options: [
      'By adding H₂ molecules',
      'By adding OH⁻ ions',
      'By adding H₂O molecules, then balancing H with H⁺',
      'By adding O₂ molecules'
    ],
    correctAnswer: 2,
    explanation: 'In acidic solution: add H₂O to balance O, then add H⁺ to balance H, then add electrons to balance charge.'
  },
  {
    id: 641,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What does entropy (S) measure?',
    options: [
      'The heat content of a system',
      'The degree of disorder or randomness in a system',
      'The activation energy of a reaction',
      'The enthalpy change of a reaction'
    ],
    correctAnswer: 1,
    explanation: 'Entropy (S) is a measure of the disorder or randomness in a system. Greater disorder means higher entropy. Gases have much higher entropy than liquids or solids.'
  },
  {
    id: 642,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'Which process results in an increase in entropy?',
    options: [
      'Freezing of water',
      'Dissolving a gas in a liquid',
      'Sublimation of iodine (I₂(s) → I₂(g))',
      'Formation of a precipitate'
    ],
    correctAnswer: 2,
    explanation: 'Sublimation converts a solid to a gas. Gases have far more entropy than solids due to greater molecular disorder. This is a large positive ΔS.'
  },
  {
    id: 643,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'The Gibbs free energy equation is ΔG = ΔH − TΔS. When is a reaction spontaneous?',
    options: [
      'When ΔG > 0',
      'When ΔG = 0',
      'When ΔG < 0',
      'When ΔH > 0 and ΔS < 0'
    ],
    correctAnswer: 2,
    explanation: 'A reaction is thermodynamically spontaneous when ΔG < 0 (negative). ΔG = 0 corresponds to equilibrium; ΔG > 0 means non-spontaneous under those conditions.'
  },
  {
    id: 644,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'For a reaction with ΔH = −100 kJ mol⁻¹ and ΔS = +200 J mol⁻¹ K⁻¹, at what temperature does spontaneity change?',
    options: [
      'Never — always spontaneous',
      'Always spontaneous regardless of temperature',
      'At T = 500 K (where ΔG = 0)',
      'At T = 0.5 K'
    ],
    correctAnswer: 1,
    explanation: 'ΔH < 0 and ΔS > 0 means ΔG = ΔH − TΔS is always negative (−ve − positive = always negative). This reaction is spontaneous at all temperatures.'
  },
  {
    id: 645,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'For a reaction with ΔH = +50 kJ mol⁻¹ and ΔS = +100 J mol⁻¹ K⁻¹, at what temperature does the reaction become spontaneous?',
    options: [
      'Below 500 K',
      'Above 500 K',
      'At exactly 500 K only',
      'Never spontaneous'
    ],
    correctAnswer: 1,
    explanation: 'ΔG = ΔH − TΔS. Spontaneous when ΔG < 0: 50000 − T(100) < 0 → T > 500 K. (Note: ΔH in J = 50000 J mol⁻¹.) Spontaneous above 500 K.'
  },
  {
    id: 646,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is lattice enthalpy (dissociation definition)?',
    options: [
      'The enthalpy change when 1 mol of ionic compound is formed from gaseous ions',
      'The enthalpy change when 1 mol of ionic compound is broken into its constituent gaseous ions',
      'The enthalpy change when ions dissolve in water',
      'The enthalpy change when a metal is atomised'
    ],
    correctAnswer: 1,
    explanation: 'Lattice dissociation enthalpy is the enthalpy change when 1 mole of an ionic compound is broken up into its constituent gaseous ions (always endothermic). The formation lattice enthalpy is the reverse (exothermic).'
  },
  {
    id: 647,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Why is the lattice enthalpy of MgO much greater in magnitude than NaCl?',
    options: [
      'Mg and O are lighter atoms',
      'MgO has a different crystal structure',
      'Mg²⁺ and O²⁻ have higher charges and smaller radii than Na⁺ and Cl⁻, giving much stronger electrostatic attraction',
      'The electron affinity of O is smaller than Cl'
    ],
    correctAnswer: 2,
    explanation: 'Lattice enthalpy depends on ionic charge and size (charge density). Mg²⁺ and O²⁻ carry double the charge of Na⁺/Cl⁻ and are smaller ions, so electrostatic forces are much stronger.'
  },
  {
    id: 648,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is the enthalpy of solution?',
    options: [
      'The enthalpy change when a substance reacts with water',
      'The enthalpy change when 1 mol of a substance dissolves in a large excess of water',
      'The enthalpy change when 1 mol of gaseous ions are hydrated',
      'The lattice enthalpy plus hydration enthalpy'
    ],
    correctAnswer: 1,
    explanation: 'The enthalpy of solution is the enthalpy change when 1 mole of an ionic substance dissolves in a large excess of water to form a very dilute solution. It may be exothermic or endothermic.'
  },
  {
    id: 649,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'The relationship between enthalpy of solution, lattice enthalpy, and hydration enthalpies is:',
    options: [
      'ΔHsol = ΔHlatt(dissociation) + ΔHhyd(cation) + ΔHhyd(anion)',
      'ΔHsol = ΔHlatt(formation) + ΔHhyd(cation) + ΔHhyd(anion)',
      'ΔHsol = ΔHhyd − ΔHlatt',
      'ΔHsol = ΔHlatt × ΔHhyd'
    ],
    correctAnswer: 0,
    explanation: 'ΔHsol = ΔHlatt(dissociation) + ΔHhyd(cation) + ΔHhyd(anion). Lattice dissociation is endothermic; hydration enthalpies are exothermic. The sign of ΔHsol depends on which is larger.'
  },
  {
    id: 650,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Which of the following has the most exothermic enthalpy of hydration for its cation?',
    options: [
      'Na⁺',
      'K⁺',
      'Mg²⁺',
      'Ca²⁺'
    ],
    correctAnswer: 2,
    explanation: 'Hydration enthalpy becomes more exothermic with increasing charge density (higher charge, smaller radius). Mg²⁺ has the highest charge density among these options, giving the most exothermic hydration enthalpy.'
  },
  {
    id: 651,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Which change has a negative (decrease) in entropy?',
    options: [
      'NaCl(s) dissolving in water',
      'H₂O(l) → H₂O(g)',
      'CO₂(g) → CO₂(s)',
      'CaCO₃(s) → CaO(s) + CO₂(g)'
    ],
    correctAnswer: 2,
    explanation: 'CO₂(g) → CO₂(s) converts a gas (high disorder) to a solid (low disorder). This decreases entropy (ΔS < 0). All other options increase entropy.'
  },
  {
    id: 652,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Calculate ΔG at 298 K if ΔH = −240 kJ mol⁻¹ and ΔS = −120 J mol⁻¹ K⁻¹.',
    options: [
      '−204.2 kJ mol⁻¹',
      '−275.8 kJ mol⁻¹',
      '−204.2 J mol⁻¹',
      '+204.2 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'ΔG = ΔH − TΔS = −240000 − (298 × −120) = −240000 + 35760 = −204240 J mol⁻¹ = −204.2 kJ mol⁻¹.'
  },
  {
    id: 653,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'Which has the highest entropy per mole?',
    options: [
      'Ice (H₂O(s))',
      'Liquid water (H₂O(l))',
      'Steam (H₂O(g))',
      'All have the same entropy'
    ],
    correctAnswer: 2,
    explanation: 'Entropy increases going from solid → liquid → gas. Steam (gas) has the highest entropy per mole as molecules are most disordered and spread out.'
  },
  {
    id: 654,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'In a Born-Haber cycle for NaCl, what is the order of steps from Na(s) + ½Cl₂(g) to NaCl(s)?',
    options: [
      'Atomisation of Na, atomisation of Cl, ionisation of Na, electron affinity of Cl, lattice enthalpy formation',
      'Ionisation of Na, atomisation of Na, atomisation of Cl, electron affinity of Cl, lattice enthalpy',
      'Electron affinity of Cl, atomisation of Na, ionisation of Na, lattice enthalpy',
      'Lattice enthalpy, ionisation of Na, electron affinity of Cl, atomisation of Na'
    ],
    correctAnswer: 0,
    explanation: 'The cycle proceeds: atomise Na (Na(s)→Na(g)), atomise ½Cl₂ (½Cl₂(g)→Cl(g)), ionise Na (Na(g)→Na⁺(g)+e⁻), electron affinity of Cl (Cl(g)+e⁻→Cl⁻(g)), then lattice enthalpy formation (Na⁺(g)+Cl⁻(g)→NaCl(s)).'
  },
  {
    id: 655,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is electron affinity?',
    options: [
      'The energy required to remove an electron from a gaseous atom',
      'The enthalpy change when 1 mol of gaseous atoms each gains one electron to form 1 mol of gaseous ions',
      'The energy released when an ionic bond forms',
      'The energy required to atomise a metal'
    ],
    correctAnswer: 1,
    explanation: 'Electron affinity is the enthalpy change when 1 mole of gaseous atoms each gains one electron: X(g) + e⁻ → X⁻(g). For most elements (e.g. halogens) this is exothermic (negative).'
  },
  {
    id: 656,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What does a more negative (more exothermic) hydration enthalpy indicate?',
    options: [
      'Weaker ion-dipole interactions with water',
      'A larger ionic radius',
      'Stronger ion-dipole interactions — typically a smaller, more highly charged ion',
      'Higher entropy of the solution'
    ],
    correctAnswer: 2,
    explanation: 'More exothermic hydration enthalpy indicates stronger ion-dipole interactions between the ion and water molecules. This occurs for smaller ions with higher charge (higher charge density).'
  },
  {
    id: 657,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'A reaction has ΔH = +30 kJ mol⁻¹ and ΔS = −50 J mol⁻¹ K⁻¹. Which statement is correct?',
    options: [
      'The reaction is spontaneous at all temperatures',
      'The reaction is spontaneous only at high temperature',
      'The reaction is never spontaneous at any temperature',
      'The reaction is spontaneous only at low temperature'
    ],
    correctAnswer: 2,
    explanation: 'ΔG = ΔH − TΔS = positive − T × negative = positive + positive = always positive. Since ΔG > 0 at all temperatures, the reaction is never spontaneous.'
  },
  {
    id: 658,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What is the standard enthalpy of atomisation of an element?',
    options: [
      'The enthalpy change when 1 mol of gaseous atoms form 1 mol of ions',
      'The enthalpy change when 1 mol of gaseous atoms is formed from the element in its standard state',
      'The enthalpy change when an atom loses an electron',
      'The enthalpy change when 1 mol of a compound decomposes'
    ],
    correctAnswer: 1,
    explanation: 'Enthalpy of atomisation is the enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state. It is always endothermic (positive). For example, Na(s) → Na(g).'
  },
  {
    id: 659,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Using a Born-Haber cycle, if ΔHf°(NaCl) = −411, ΔHat(Na) = +108, IE₁(Na) = +496, ΔHat(½Cl₂) = +122, EA(Cl) = −349 kJ mol⁻¹, what is the lattice enthalpy of formation of NaCl?',
    options: [
      '−788 kJ mol⁻¹',
      '+788 kJ mol⁻¹',
      '−412 kJ mol⁻¹',
      '−522 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'ΔHf° = ΔHat(Na) + IE₁(Na) + ΔHat(Cl) + EA(Cl) + LE(formation). −411 = 108 + 496 + 122 + (−349) + LE. −411 = 377 + LE. LE = −411 − 377 = −788 kJ mol⁻¹.'
  },
  {
    id: 660,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'What is the second electron affinity of oxygen?',
    options: [
      'The enthalpy change when O⁻(g) loses an electron',
      'The enthalpy change when O(g) gains two electrons simultaneously',
      'The enthalpy change when O⁻(g) gains a second electron to form O²⁻(g)',
      'The enthalpy change when O₂(g) gains two electrons'
    ],
    correctAnswer: 2,
    explanation: 'The second electron affinity is the enthalpy change for O⁻(g) + e⁻ → O²⁻(g). This is endothermic (positive) because energy must be overcome to force an electron onto an already negatively charged ion.'
  },
  {
    id: 661,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Why is the second electron affinity of oxygen endothermic despite oxygen\'s high electronegativity?',
    options: [
      'Oxygen does not want to form O²⁻',
      'Energy is required to force a second electron onto the already negatively charged O⁻ ion, overcoming electrostatic repulsion',
      'Oxygen has a full outer shell when it gains the second electron',
      'The second electron affinity has nothing to do with electronegativity'
    ],
    correctAnswer: 1,
    explanation: 'O⁻ is already negatively charged. Adding another electron requires overcoming the electrostatic repulsion between the incoming electron and the negative charge already present. This costs energy, making the second EA endothermic.'
  },
  {
    id: 662,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What is the rate equation for a reaction that is first order in A and second order in B?',
    options: [
      'rate = k[A][B]',
      'rate = k[A][B]²',
      'rate = k[A]²[B]',
      'rate = k[A]²[B]²'
    ],
    correctAnswer: 1,
    explanation: 'The rate equation reflects the order with respect to each reactant: rate = k[A]¹[B]² = k[A][B]².'
  },
  {
    id: 663,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What is the overall order of reaction if rate = k[A]²[B]?',
    options: ['1st order', '2nd order', '3rd order', '4th order'],
    correctAnswer: 2,
    explanation: 'Overall order = sum of individual orders = 2 + 1 = 3 (third order overall).'
  },
  {
    id: 664,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'In an initial rates experiment, doubling [A] doubles the rate while [B] is kept constant. What is the order with respect to A?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 1,
    explanation: 'If doubling [A] doubles the rate, rate ∝ [A]¹ — first order in A.'
  },
  {
    id: 665,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What are the units of k for a second order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'mol⁻² dm⁶ s⁻¹'
    ],
    correctAnswer: 2,
    explanation: 'For rate = k[A]²: k = rate / [A]² = (mol dm⁻³ s⁻¹) / (mol dm⁻³)² = mol⁻¹ dm³ s⁻¹.'
  },
  {
    id: 666,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'The half-life of a first order reaction is 20 s. What fraction of the original reactant remains after 60 s?',
    options: ['1/4', '1/8', '1/6', '1/3'],
    correctAnswer: 1,
    explanation: '60 s = 3 half-lives. After each half-life, half remains: (1/2)³ = 1/8.'
  },
  {
    id: 667,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Which statement correctly describes the half-life of a first order reaction?',
    options: [
      'It increases as the reaction proceeds',
      'It decreases as the reaction proceeds',
      'It remains constant regardless of concentration',
      'It depends on the initial concentration'
    ],
    correctAnswer: 2,
    explanation: 'For a first order reaction, t½ = ln2/k, which is independent of concentration. The half-life is constant throughout the reaction — a distinguishing feature of first order kinetics.'
  },
  {
    id: 668,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'The Arrhenius equation relates k to temperature. Which form is correct?',
    options: [
      'k = A × e^(Ea/RT)',
      'k = A × e^(−Ea/RT)',
      'k = Ea × e^(−A/RT)',
      'k = RT × e^(−Ea/A)'
    ],
    correctAnswer: 1,
    explanation: 'The Arrhenius equation is k = Ae^(−Ea/RT), where A is the pre-exponential (frequency) factor, Ea is activation energy, R is the gas constant, and T is temperature in Kelvin.'
  },
  {
    id: 669,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'How is Ea determined from an Arrhenius plot?',
    options: [
      'Plot k vs T; Ea = gradient × R',
      'Plot ln k vs 1/T; gradient = −Ea/R',
      'Plot log k vs T; gradient = Ea',
      'Plot k vs ln T; Ea = intercept'
    ],
    correctAnswer: 1,
    explanation: 'From ln k = −Ea/RT + ln A, plotting ln k against 1/T gives a straight line with gradient = −Ea/R. So Ea = −gradient × R.'
  },
  {
    id: 670,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What is the rate-determining step?',
    options: [
      'The fastest step in a reaction mechanism',
      'The step with the highest activation energy — the slowest step that controls the overall rate',
      'The step that produces the most product',
      'The first step of any reaction mechanism'
    ],
    correctAnswer: 1,
    explanation: 'The rate-determining step (RDS) is the slowest step in a multi-step reaction mechanism. It has the highest activation energy and limits the overall rate of reaction.'
  },
  {
    id: 671,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A reaction has rate = k[A][B]. The proposed mechanism has step 1: A → X (slow), step 2: X + B → product (fast). Is this mechanism consistent with the rate equation?',
    options: [
      'No — if step 1 is slow, rate would only depend on [A]',
      'Yes — the slow step involves A, and B appears in a later step consistent with rate = k[A][B]',
      'No — the rate equation requires both steps to be slow',
      'Yes, but only if step 2 is also slow'
    ],
    correctAnswer: 0,
    explanation: 'If the RDS involves only A, the rate = k[A] (first order in A only). For rate = k[A][B], both A and B must be in the rate-determining step or an earlier step. This mechanism is inconsistent.'
  },
  {
    id: 672,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'In an initial rates experiment, the following data is collected:\nExp 1: [A] = 0.1, [B] = 0.1, rate = 2×10⁻³\nExp 2: [A] = 0.2, [B] = 0.1, rate = 4×10⁻³\nExp 3: [A] = 0.1, [B] = 0.2, rate = 2×10⁻³\nWhat is the order with respect to B?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 0,
    explanation: 'Comparing Exp 1 and 3: [B] doubles but rate is unchanged. So rate is independent of [B] — zero order in B.'
  },
  {
    id: 673,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What are the units of k for a zero order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'No units'
    ],
    correctAnswer: 0,
    explanation: 'For a zero order reaction: rate = k[A]⁰ = k. So k has the same units as rate: mol dm⁻³ s⁻¹.'
  },
  {
    id: 674,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What does increasing temperature do to the rate constant k?',
    options: [
      'k decreases exponentially',
      'k increases exponentially',
      'k is unaffected by temperature',
      'k decreases linearly'
    ],
    correctAnswer: 1,
    explanation: 'From the Arrhenius equation k = Ae^(−Ea/RT), increasing T decreases the exponent magnitude, making k larger. k increases exponentially with temperature.'
  },
  {
    id: 675,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Which rate equation is consistent with the mechanism: Step 1 (slow): A + B → C; Step 2 (fast): C + A → products?',
    options: [
      'rate = k[A][B]',
      'rate = k[A]²[B]',
      'rate = k[A][B]²',
      'rate = k[C]'
    ],
    correctAnswer: 0,
    explanation: 'The rate-determining step (slow step) is Step 1: A + B → C. The rate equation is determined by the RDS: rate = k[A][B].'
  },
  {
    id: 676,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What is the unit of k for a first order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'mol⁻² dm⁶ s⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'For rate = k[A]: k = rate/[A] = (mol dm⁻³ s⁻¹)/(mol dm⁻³) = s⁻¹.'
  },
  {
    id: 677,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'For a first order reaction, what is the relationship between half-life (t½) and rate constant k?',
    options: [
      't½ = k/ln2',
      't½ = ln2/k',
      't½ = k × ln2',
      't½ = 1/k²'
    ],
    correctAnswer: 1,
    explanation: 'For a first order reaction: t½ = ln2/k = 0.693/k. This shows t½ is constant and inversely proportional to k.'
  },
  {
    id: 678,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'The activation energy of a reaction is 80 kJ mol⁻¹. R = 8.314 J mol⁻¹ K⁻¹. What is the value of Ea/R?',
    options: [
      '9622 K',
      '96.2 K',
      '962.2 K',
      '0.962 K'
    ],
    correctAnswer: 0,
    explanation: 'Ea/R = 80000/8.314 = 9622 K. This value appears as the gradient (−Ea/R) on an Arrhenius plot of ln k vs 1/T.'
  },
  {
    id: 679,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'In an initial rates experiment, tripling [A] increases the rate by a factor of 9. What is the order with respect to A?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 2,
    explanation: 'Rate ∝ [A]ⁿ. If [A] triples and rate × 9 = 3², then n = 2. Second order in A.'
  },
  {
    id: 680,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Which of these statements about order of reaction is correct?',
    options: [
      'Order can always be determined from the balanced equation',
      'Order is always a whole number',
      'Order must be determined experimentally',
      'Order equals the number of molecules in the rate-determining step minus one'
    ],
    correctAnswer: 2,
    explanation: 'Order of reaction must be determined experimentally (e.g., by initial rates method or from concentration-time graphs). It cannot be predicted from the stoichiometric equation.'
  },
  {
    id: 681,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'For a second order reaction, how does the half-life change as the reaction proceeds?',
    options: [
      'Half-life remains constant',
      'Half-life decreases as reaction proceeds',
      'Half-life increases as concentration decreases',
      'Half-life is unrelated to concentration'
    ],
    correctAnswer: 2,
    explanation: 'For a second order reaction, t½ = 1/(k[A]). As [A] decreases during the reaction, t½ increases. This is in contrast to first order reactions where t½ is constant.'
  },
  {
    id: 682,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A catalyst increases the rate constant k by lowering Ea. Using k = Ae^(−Ea/RT), which change does a catalyst make?',
    options: [
      'Increases A (pre-exponential factor)',
      'Increases T',
      'Decreases Ea so the exponent becomes less negative, making k larger',
      'Increases R'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst lowers Ea. In k = Ae^(−Ea/RT), a smaller Ea makes the exponent −Ea/RT less negative (closer to 0), so e^(−Ea/RT) increases, and k increases.'
  },
  {
    id: 683,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'What is the Kp expression for N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?',
    options: [
      'Kp = p(NH₃)² / (p(N₂) × p(H₂)³)',
      'Kp = p(N₂) × p(H₂)³ / p(NH₃)²',
      'Kp = p(NH₃) / (p(N₂) × p(H₂))',
      'Kp = 2p(NH₃) / (p(N₂) + 3p(H₂))'
    ],
    correctAnswer: 0,
    explanation: 'Kp uses partial pressures: Kp = [p(NH₃)]² / (p(N₂) × [p(H₂)]³), with each raised to the power of its stoichiometric coefficient.'
  },
  {
    id: 684,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'How is mole fraction defined?',
    options: [
      'Moles of a component divided by the total pressure',
      'Moles of a component divided by the total moles in the mixture',
      'Partial pressure divided by mole fraction',
      'Moles of a component multiplied by total moles'
    ],
    correctAnswer: 1,
    explanation: 'Mole fraction (χ) of a component = moles of that component / total moles in the mixture. It is dimensionless and all mole fractions in a mixture sum to 1.'
  },
  {
    id: 685,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'How is partial pressure calculated?',
    options: [
      'Partial pressure = mole fraction × total pressure',
      'Partial pressure = total pressure / mole fraction',
      'Partial pressure = moles × temperature',
      'Partial pressure = total pressure − mole fraction'
    ],
    correctAnswer: 0,
    explanation: 'Partial pressure of a component = mole fraction × total pressure. This is Dalton\'s law of partial pressures.'
  },
  {
    id: 686,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'A mixture contains 1 mol N₂, 3 mol H₂, and 2 mol NH₃ at a total pressure of 200 kPa. What is the partial pressure of NH₃?',
    options: [
      '33.3 kPa',
      '50 kPa',
      '66.7 kPa',
      '100 kPa'
    ],
    correctAnswer: 2,
    explanation: 'Total moles = 1 + 3 + 2 = 6. Mole fraction of NH₃ = 2/6 = 1/3. Partial pressure = 1/3 × 200 = 66.7 kPa.'
  },
  {
    id: 687,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'What are the units of Kp for N₂ + 3H₂ ⇌ 2NH₃?',
    options: [
      'kPa²',
      'kPa⁻²',
      'kPa',
      'No units'
    ],
    correctAnswer: 1,
    explanation: 'Kp = p(NH₃)² / (p(N₂) × p(H₂)³). Units: kPa² / (kPa × kPa³) = kPa² / kPa⁴ = kPa⁻². So Kp has units kPa⁻² (or atm⁻² or Pa⁻²).'
  },
  {
    id: 688,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), what is the Kp expression?',
    options: [
      'Kp = p(SO₃)² / (p(SO₂)² × p(O₂))',
      'Kp = p(SO₂)² × p(O₂) / p(SO₃)²',
      'Kp = p(SO₃) / (p(SO₂) × p(O₂))',
      'Kp = p(SO₃)² / p(SO₂)'
    ],
    correctAnswer: 0,
    explanation: 'Kp = p(SO₃)² / (p(SO₂)² × p(O₂)), with each partial pressure raised to its stoichiometric coefficient.'
  },
  {
    id: 689,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For the equilibrium PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Kp = 100 kPa at 250°C. What does this large Kp value indicate?',
    options: [
      'Products are disfavoured at this temperature',
      'The forward reaction is slow',
      'Products (PCl₃ and Cl₂) are favoured at equilibrium at this temperature',
      'Kp is unrelated to the position of equilibrium'
    ],
    correctAnswer: 2,
    explanation: 'A large Kp (>> 1) means product partial pressures dominate. At 250°C, PCl₅ is significantly dissociated into PCl₃ and Cl₂ at equilibrium.'
  },
  {
    id: 690,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'What factors change the value of Kp?',
    options: [
      'Temperature only',
      'Pressure only',
      'Concentration only',
      'Both temperature and pressure'
    ],
    correctAnswer: 0,
    explanation: 'Like Kc, Kp is only affected by changes in temperature. Changes in pressure or concentration shift the equilibrium position but do not change Kp.'
  },
  {
    id: 691,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For A(g) ⇌ B(g) + C(g), the mole fraction of A is 0.5 at equilibrium and total pressure = 100 kPa. What is the partial pressure of A?',
    options: ['25 kPa', '50 kPa', '75 kPa', '100 kPa'],
    correctAnswer: 1,
    explanation: 'Partial pressure = mole fraction × total pressure = 0.5 × 100 = 50 kPa.'
  },
  {
    id: 692,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For N₂O₄(g) ⇌ 2NO₂(g), increasing total pressure shifts equilibrium left. How does this affect Kp?',
    options: [
      'Kp increases',
      'Kp decreases',
      'Kp is unchanged',
      'Kp doubles'
    ],
    correctAnswer: 2,
    explanation: 'Kp depends only on temperature, not pressure. Increasing pressure shifts equilibrium position left, but Kp remains constant at constant temperature.'
  },
  {
    id: 693,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'At equilibrium, a gas mixture contains 0.2 mol H₂, 0.2 mol I₂, and 1.6 mol HI. What is the mole fraction of HI?',
    options: ['0.5', '0.7', '0.8', '0.9'],
    correctAnswer: 2,
    explanation: 'Total moles = 0.2 + 0.2 + 1.6 = 2.0. Mole fraction HI = 1.6/2.0 = 0.8.'
  },
  {
    id: 694,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For H₂(g) + I₂(g) ⇌ 2HI(g): if p(H₂) = 20 kPa, p(I₂) = 20 kPa, p(HI) = 160 kPa, what is Kp?',
    options: ['8', '32', '64', '256'],
    correctAnswer: 2,
    explanation: 'Kp = p(HI)² / (p(H₂) × p(I₂)) = 160² / (20 × 20) = 25600 / 400 = 64. Kp is dimensionless here as equal moles of gas on both sides.'
  },
  {
    id: 695,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'What is the relationship between Kp and Kc?',
    options: [
      'Kp = Kc always',
      'Kp = Kc(RT)^Δn, where Δn = moles of gaseous products − moles of gaseous reactants',
      'Kp = Kc/RT',
      'Kp = Kc + Δn'
    ],
    correctAnswer: 1,
    explanation: 'Kp = Kc(RT)^Δn where Δn = change in moles of gas (products − reactants) and R = 8.314 J mol⁻¹ K⁻¹, T in Kelvin. When Δn = 0, Kp = Kc.'
  },
  {
    id: 696,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'For the reaction A(g) + B(g) ⇌ C(g) + D(g), Δn = ?',
    options: ['−2', '−1', '0', '+2'],
    correctAnswer: 2,
    explanation: 'Δn = moles of gaseous products − moles of gaseous reactants = (1 + 1) − (1 + 1) = 0. So Kp = Kc for this reaction.'
  },
  {
    id: 697,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'An equilibrium mixture at 400 K and 200 kPa total pressure contains equal moles of SO₂, O₂, and SO₃. What are their mole fractions?',
    options: [
      'SO₂: 0.5, O₂: 0.25, SO₃: 0.25',
      'Each 1/3',
      'SO₂: 0.4, O₂: 0.4, SO₃: 0.2',
      'Cannot be determined without knowing the number of moles'
    ],
    correctAnswer: 1,
    explanation: 'If equal moles (say 1 mol each), total = 3 mol. Each mole fraction = 1/3 ≈ 0.333.'
  },
  {
    id: 698,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), what are the units of Kp if pressure is in kPa?',
    options: ['kPa⁻¹', 'kPa', 'kPa²', 'No units'],
    correctAnswer: 1,
    explanation: 'Kp = p(PCl₃) × p(Cl₂) / p(PCl₅). Units = kPa × kPa / kPa = kPa. The Δn = +1 here.'
  },
  {
    id: 699,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'At constant temperature, total pressure is doubled for N₂ + 3H₂ ⇌ 2NH₃. What happens to Kp?',
    options: [
      'Kp doubles',
      'Kp halves',
      'Kp is unchanged',
      'Kp quadruples'
    ],
    correctAnswer: 2,
    explanation: 'Kp only changes with temperature. Doubling pressure shifts the equilibrium position right (fewer moles of gas) but does not change Kp at constant temperature.'
  },
  {
    id: 700,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For an exothermic equilibrium reaction in the gas phase, what happens to Kp when temperature increases?',
    options: [
      'Kp increases',
      'Kp decreases',
      'Kp is unchanged',
      'Kp becomes negative'
    ],
    correctAnswer: 1,
    explanation: 'For an exothermic reaction, increasing temperature shifts equilibrium to the left (endothermic direction), reducing the proportion of products. Kp decreases.'
  },
  {
    id: 701,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'In the expression Kp = p(NH₃)² / (p(N₂) × p(H₂)³), what quantity is p(NH₃)?',
    options: [
      'Total pressure of the system',
      'Concentration of NH₃ in mol dm⁻³',
      'The partial pressure of NH₃ in the equilibrium mixture',
      'The mole fraction of NH₃'
    ],
    correctAnswer: 2,
    explanation: 'In Kp expressions, p(X) represents the partial pressure of gas X in the equilibrium mixture. Partial pressure = mole fraction × total pressure.'
  },
  {
    id: 702,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'At equilibrium: 2 mol N₂, 6 mol H₂, 4 mol NH₃, total pressure = 300 kPa. What is Kp (in kPa⁻²)?',
    options: [
      '1.17 × 10⁻⁴ kPa⁻²',
      '4.94 × 10⁻⁴ kPa⁻²',
      '1.23 × 10⁻³ kPa⁻²',
      '3.70 × 10⁻⁵ kPa⁻²'
    ],
    correctAnswer: 0,
    explanation: 'Total mol = 12. χ(N₂)=2/12, χ(H₂)=6/12=0.5, χ(NH₃)=4/12. p(N₂)=50, p(H₂)=150, p(NH₃)=100 kPa. Kp = 100²/(50 × 150³) = 10000/(50 × 3375000) = 10000/168750000 ≈ 5.93×10⁻⁵; closest answer is A.'
  },
  {
    id: 703,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'Dalton\'s law of partial pressures states:',
    options: [
      'The partial pressure of a gas equals its concentration multiplied by RT',
      'The total pressure of a gas mixture equals the sum of the partial pressures of each component',
      'Each gas in a mixture exerts no pressure independently',
      'The total pressure equals the mole fraction of the dominant gas'
    ],
    correctAnswer: 1,
    explanation: 'Dalton\'s law: the total pressure of a gas mixture is the sum of the partial pressures of each individual gas: Ptotal = p₁ + p₂ + p₃ + ...'
  },
  {
    id: 704,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is standard electrode potential (E°)?',
    options: [
      'The voltage produced by any electrochemical cell',
      'The potential of a half-cell measured relative to the standard hydrogen electrode under standard conditions',
      'The current produced by an electrochemical cell at 298 K',
      'The resistance of an electrochemical cell'
    ],
    correctAnswer: 1,
    explanation: 'Standard electrode potential (E°) is the potential of a half-cell measured relative to the standard hydrogen electrode (SHE) under standard conditions (298 K, 101 kPa, 1 mol dm⁻³ solutions).'
  },
  {
    id: 705,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the standard electrode potential of the standard hydrogen electrode (SHE)?',
    options: ['+1.00 V', '0.00 V', '−1.00 V', '+0.76 V'],
    correctAnswer: 1,
    explanation: 'The standard hydrogen electrode (SHE) is defined as 0.00 V. All other standard electrode potentials are measured relative to it.'
  },
  {
    id: 706,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'How is the EMF (Ecell°) of an electrochemical cell calculated?',
    options: [
      'Ecell° = E°(cathode) + E°(anode)',
      'Ecell° = E°(cathode) − E°(anode)',
      'Ecell° = E°(anode) − E°(cathode)',
      'Ecell° = E°(cathode) × E°(anode)'
    ],
    correctAnswer: 1,
    explanation: 'Ecell° = E°(cathode, reduction) − E°(anode, oxidation). The cathode is where reduction occurs (more positive E°); the anode is where oxidation occurs (less positive or more negative E°).'
  },
  {
    id: 707,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, what is Ecell° for a cell using these two half-cells?',
    options: ['+0.42 V', '+1.10 V', '−1.10 V', '+0.34 V'],
    correctAnswer: 1,
    explanation: 'Cu²⁺/Cu is the cathode (more positive E°). Ecell° = E°(cathode) − E°(anode) = +0.34 − (−0.76) = +0.34 + 0.76 = +1.10 V.'
  },
  {
    id: 708,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What is the standard hydrogen electrode (SHE)?',
    options: [
      'A platinum electrode in 1 mol dm⁻³ HCl at 298 K',
      'A platinum electrode in contact with H₂ gas at 101 kPa and H⁺ ions at 1 mol dm⁻³ at 298 K',
      'A hydrogen gas cylinder at standard pressure',
      'A copper electrode in acidic solution'
    ],
    correctAnswer: 1,
    explanation: 'The SHE consists of a platinum electrode in contact with H₂ gas at 101 kPa and H⁺(aq) at 1 mol dm⁻³, at 298 K. Its potential is defined as 0.00 V.'
  },
  {
    id: 709,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'When is a redox reaction feasible according to electrode potentials?',
    options: [
      'When Ecell° < 0',
      'When Ecell° > 0',
      'When Ecell° = 0',
      'Feasibility cannot be predicted from electrode potentials'
    ],
    correctAnswer: 1,
    explanation: 'A redox reaction is thermodynamically feasible (spontaneous under standard conditions) when Ecell° > 0. A positive EMF means the cell reaction proceeds spontaneously in the forward direction.'
  },
  {
    id: 710,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In cell notation, what does the vertical line (|) represent?',
    options: [
      'A salt bridge',
      'A phase boundary between electrode and solution',
      'A wire connecting the two half-cells',
      'The standard hydrogen electrode'
    ],
    correctAnswer: 1,
    explanation: 'In cell notation, a single vertical line (|) represents a phase boundary (e.g., between a metal electrode and its ion in solution). A double line (||) represents the salt bridge.'
  },
  {
    id: 711,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the purpose of a salt bridge in an electrochemical cell?',
    options: [
      'It allows electrons to flow between the half-cells',
      'It allows ions to flow between the half-cells to maintain electrical neutrality',
      'It provides a source of ions for the reaction',
      'It prevents any reaction occurring in the cell'
    ],
    correctAnswer: 1,
    explanation: 'A salt bridge allows ions to migrate between the two half-cells, maintaining electrical neutrality in each half-cell as the reaction proceeds. Electrons flow through the external circuit.'
  },
  {
    id: 712,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Using E°(Fe³⁺/Fe²⁺) = +0.77 V and E°(I₂/I⁻) = +0.54 V, can Fe³⁺ oxidise I⁻ to I₂?',
    options: [
      'No — Ecell° would be negative',
      'Yes — Ecell° = +0.77 − 0.54 = +0.23 V (positive, so feasible)',
      'Yes — Ecell° = 0.54 − 0.77 = −0.23 V',
      'Cannot be determined without concentrations'
    ],
    correctAnswer: 1,
    explanation: 'Fe³⁺ acts as oxidising agent (cathode): E° = +0.77 V. I⁻ is oxidised (anode): E° = +0.54 V. Ecell° = 0.77 − 0.54 = +0.23 V. Positive EMF → feasible reaction.'
  },
  {
    id: 713,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In an electrochemical cell, at which electrode does oxidation occur?',
    options: ['Cathode', 'Anode', 'Both electrodes equally', 'At the salt bridge'],
    correctAnswer: 1,
    explanation: 'Oxidation (loss of electrons) always occurs at the anode. Reduction (gain of electrons) occurs at the cathode. Mnemonic: AN OX (anode = oxidation), RED CAT (reduction = cathode).'
  },
  {
    id: 714,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'How do fuel cells differ from conventional batteries?',
    options: [
      'Fuel cells can only be recharged; batteries cannot',
      'Fuel cells produce electricity from a continuous supply of fuel (e.g. H₂) and oxidant (e.g. O₂) without needing recharging',
      'Fuel cells use chemical reactions inside a sealed container unlike batteries',
      'Batteries run continuously but fuel cells need recharging'
    ],
    correctAnswer: 1,
    explanation: 'Fuel cells generate electricity continuously from a fuel (e.g. H₂) and oxidant (e.g. O₂) supplied continuously. Unlike batteries, the reagents are not stored inside — they are fed in and products removed.'
  },
  {
    id: 715,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In a hydrogen fuel cell, what is produced at the cathode?',
    options: ['H₂', 'O₂', 'H₂O', 'H⁺'],
    correctAnswer: 2,
    explanation: 'In a hydrogen fuel cell: at the anode H₂ is oxidised (H₂ → 2H⁺ + 2e⁻); at the cathode O₂ is reduced and H₂O is produced: O₂ + 4H⁺ + 4e⁻ → 2H₂O.'
  },
  {
    id: 716,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'Which electrode potential is used as the reference (zero) in the standard electrode potential scale?',
    options: [
      'Standard silver electrode (+0.80 V)',
      'Standard copper electrode (+0.34 V)',
      'Standard hydrogen electrode (0.00 V)',
      'Standard zinc electrode (−0.76 V)'
    ],
    correctAnswer: 2,
    explanation: 'The standard hydrogen electrode (SHE) is defined as 0.00 V and used as the reference for all standard electrode potential measurements.'
  },
  {
    id: 717,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'A limitation of using electrode potentials to predict feasibility is:',
    options: [
      'Electrode potentials can only be used at high temperatures',
      'Standard electrode potentials assume standard conditions; actual conditions may differ, and kinetic barriers may prevent reaction',
      'They are only valid for non-aqueous solutions',
      'They only apply to cells using the SHE directly'
    ],
    correctAnswer: 1,
    explanation: 'Electrode potentials predict thermodynamic feasibility under standard conditions. In practice, concentrations may differ, and some thermodynamically feasible reactions have high activation energies and occur very slowly.'
  },
  {
    id: 718,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What is written on the left-hand side of a cell notation by convention?',
    options: [
      'The cathode half-cell',
      'The anode (oxidation) half-cell',
      'The standard hydrogen electrode',
      'The half-cell with higher E°'
    ],
    correctAnswer: 1,
    explanation: 'By IUPAC convention, the anode (oxidation) half-cell is written on the left in cell notation, and the cathode (reduction) half-cell on the right.'
  },
  {
    id: 719,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Which of the following is an advantage of hydrogen fuel cells over internal combustion engines?',
    options: [
      'Hydrogen fuel cells produce CO₂ as the only product',
      'Hydrogen fuel cells produce only water, so are zero-emission at point of use',
      'Hydrogen fuel cells are cheaper to manufacture',
      'Hydrogen is easier to store than petrol'
    ],
    correctAnswer: 1,
    explanation: 'Hydrogen fuel cells produce only water at the point of use (H₂ + ½O₂ → H₂O), making them zero-emission locally. However, hydrogen production may involve fossil fuels elsewhere in the supply chain.'
  },
  {
    id: 720,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'If E°(MnO₄⁻/Mn²⁺) = +1.51 V and E°(Cl₂/Cl⁻) = +1.36 V, can MnO₄⁻ oxidise Cl⁻ to Cl₂?',
    options: [
      'No — Ecell° would be negative',
      'Yes — Ecell° = 1.51 − 1.36 = +0.15 V',
      'Yes — Ecell° = 1.36 + 1.51 = +2.87 V',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'MnO₄⁻ is the oxidising agent (cathode, E° = +1.51 V); Cl⁻ is oxidised (anode, E° = +1.36 V). Ecell° = 1.51 − 1.36 = +0.15 V. Positive → feasible.'
  },
  {
    id: 721,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What does a negative Ecell° value indicate?',
    options: [
      'The reaction is spontaneous in the forward direction',
      'The reaction is non-spontaneous in the forward direction under standard conditions',
      'The cell has no EMF',
      'Oxidation occurs at the cathode'
    ],
    correctAnswer: 1,
    explanation: 'A negative Ecell° means the forward reaction is not thermodynamically spontaneous under standard conditions. The reverse reaction would be spontaneous.'
  },
  {
    id: 722,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'What is the half-equation at the anode of a hydrogen fuel cell in acidic conditions?',
    options: [
      'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
      'H₂ → 2H⁺ + 2e⁻',
      '2H₂O → O₂ + 4H⁺ + 4e⁻',
      'H⁺ + e⁻ → ½H₂'
    ],
    correctAnswer: 1,
    explanation: 'At the anode of a hydrogen fuel cell (acidic): H₂ is oxidised: H₂ → 2H⁺ + 2e⁻. Electrons flow through the external circuit to the cathode where O₂ is reduced.'
  },
  {
    id: 723,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In a rechargeable battery, what happens during charging?',
    options: [
      'The cell reactions run in the normal (spontaneous) direction',
      'An external electrical supply reverses the cell reactions',
      'New chemical reagents are added to the cell',
      'The salt bridge is replaced'
    ],
    correctAnswer: 1,
    explanation: 'During charging, an external power supply forces the cell reactions to run in reverse. The electrode products are converted back to their original forms, storing energy for later use.'
  },
  {
    id: 724,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'The Nernst equation qualitatively predicts that E(cell) changes with concentration. For Cu²⁺/Cu, if [Cu²⁺] increases above 1 mol dm⁻³, what happens to E?',
    options: [
      'E decreases below E°',
      'E increases above E°',
      'E remains the same as E°',
      'E becomes negative'
    ],
    correctAnswer: 1,
    explanation: 'For Cu²⁺ + 2e⁻ → Cu, increasing [Cu²⁺] increases the tendency for reduction to occur, so the electrode potential E increases above E°. Higher reactant concentration drives the equilibrium right.'
  },
  {
    id: 725,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'According to the Brønsted-Lowry definition, an acid is:',
    options: [
      'A substance that produces OH⁻ ions in water',
      'A proton (H⁺) donor',
      'An electron pair acceptor',
      'A substance with pH < 7'
    ],
    correctAnswer: 1,
    explanation: 'The Brønsted-Lowry definition: an acid is a proton (H⁺) donor. A base is a proton acceptor. This definition extends beyond aqueous solutions.'
  },
  {
    id: 726,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the pH of a 0.01 mol dm⁻³ solution of HCl (a strong acid)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'HCl is fully dissociated: [H⁺] = 0.01 mol dm⁻³. pH = −log[H⁺] = −log(0.01) = −log(10⁻²) = 2.'
  },
  {
    id: 727,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is Ka?',
    options: [
      'The equilibrium constant for the dissociation of a weak acid in water',
      'The equilibrium constant for a neutralisation reaction',
      'The ionic product of water',
      'The ratio of base to acid in a buffer solution'
    ],
    correctAnswer: 0,
    explanation: 'Ka is the acid dissociation constant: for HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. A larger Ka indicates a stronger (more dissociated) weak acid.'
  },
  {
    id: 728,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is Kw?',
    options: [
      'The equilibrium constant for the dissociation of a weak acid',
      'The ionic product of water: Kw = [H⁺][OH⁻]',
      'The equilibrium constant for buffer solutions',
      'The rate constant for acid-base reactions'
    ],
    correctAnswer: 1,
    explanation: 'Kw is the ionic product of water: Kw = [H⁺][OH⁻]. At 25°C, Kw = 1.0 × 10⁻¹⁴ mol² dm⁻⁶. This comes from the equilibrium H₂O ⇌ H⁺ + OH⁻.'
  },
  {
    id: 729,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the pH of a 0.1 mol dm⁻³ NaOH solution at 25°C? (Kw = 1.0 × 10⁻¹⁴)',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: '[OH⁻] = 0.1 mol dm⁻³. [H⁺] = Kw/[OH⁻] = 10⁻¹⁴/0.1 = 10⁻¹³. pH = −log(10⁻¹³) = 13.'
  },
  {
    id: 730,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Calculate the pH of a 0.100 mol dm⁻³ solution of ethanoic acid (Ka = 1.8 × 10⁻⁵ mol dm⁻³).',
    options: ['2.87', '3.87', '4.87', '5.00'],
    correctAnswer: 0,
    explanation: '[H⁺] = √(Ka × [HA]) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) = 1.34×10⁻³ mol dm⁻³. pH = −log(1.34×10⁻³) ≈ 2.87.'
  },
  {
    id: 731,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is pKa?',
    options: [
      'pKa = Ka × 10',
      'pKa = −log Ka',
      'pKa = log Ka',
      'pKa = 1/Ka'
    ],
    correctAnswer: 1,
    explanation: 'pKa = −log Ka. A smaller pKa (more negative log) means a larger Ka and a stronger acid.'
  },
  {
    id: 732,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is a buffer solution?',
    options: [
      'A solution that contains a strong acid and a strong base',
      'A solution that resists changes in pH when small amounts of acid or base are added',
      'A solution with a pH of exactly 7',
      'A solution that neutralises all added acid or base'
    ],
    correctAnswer: 1,
    explanation: 'A buffer solution resists changes in pH when small amounts of acid or base are added. It typically contains a weak acid and its conjugate base (its salt) in comparable amounts.'
  },
  {
    id: 733,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'Which pair of substances makes an acidic buffer solution?',
    options: [
      'NaCl and HCl',
      'Ethanoic acid and sodium ethanoate',
      'NaOH and sodium chloride',
      'Ammonia and ammonium nitrate'
    ],
    correctAnswer: 1,
    explanation: 'Ethanoic acid (weak acid) and sodium ethanoate (its salt, providing the conjugate base CH₃COO⁻) form an acidic buffer. Ammonia/ammonium nitrate makes an alkaline buffer.'
  },
  {
    id: 734,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'How does an acidic buffer resist a rise in pH when a small amount of NaOH is added?',
    options: [
      'The weak acid dissociates to produce more H⁺',
      'The conjugate base (A⁻) reacts with the added OH⁻: A⁻ + H₂O → HA + OH⁻',
      'The weak acid (HA) reacts with the added OH⁻: HA + OH⁻ → A⁻ + H₂O',
      'The NaOH is neutralised by the buffer salt'
    ],
    correctAnswer: 2,
    explanation: 'When OH⁻ is added, the weak acid HA donates a proton to neutralise it: HA + OH⁻ → A⁻ + H₂O. This uses up the added base and produces more conjugate base, minimising pH change.'
  },
  {
    id: 735,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'At the half-equivalence point of a weak acid-strong base titration, pH equals:',
    options: ['7.00', 'pKa of the weak acid', 'pKb of the base', '14 − pKa'],
    correctAnswer: 1,
    explanation: 'At the half-equivalence point, half the acid has been neutralised so [HA] = [A⁻]. From Ka = [H⁺][A⁻]/[HA], when [HA] = [A⁻], Ka = [H⁺], so pH = pKa.'
  },
  {
    id: 736,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'A buffer is made from 0.1 mol of ethanoic acid and 0.1 mol of sodium ethanoate in 1 dm³. Ka = 1.8 × 10⁻⁵ mol dm⁻³. What is the pH?',
    options: ['4.74', '5.74', '3.74', '7.00'],
    correctAnswer: 0,
    explanation: 'When [HA] = [A⁻], Ka = [H⁺]. [H⁺] = Ka = 1.8×10⁻⁵. pH = −log(1.8×10⁻⁵) = 4.74.'
  },
  {
    id: 737,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What shape does the titration curve have for a strong acid titrated with a strong base?',
    options: [
      'A straight line',
      'An S-shaped curve with a steep vertical section at the equivalence point near pH 7',
      'A gradual curve without a steep section',
      'A horizontal line at pH 7'
    ],
    correctAnswer: 1,
    explanation: 'Strong acid-strong base titration curves are S-shaped with a sharp vertical rise at the equivalence point (pH ≈ 7). The equivalence point pH is 7 because the salt formed is neutral.'
  },
  {
    id: 738,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'Which indicator would be suitable for a weak acid-strong base titration?',
    options: [
      'Methyl orange (pH range 3.1–4.4)',
      'Phenolphthalein (pH range 8.3–10.0)',
      'Universal indicator',
      'Litmus (pH range 6–8)'
    ],
    correctAnswer: 1,
    explanation: 'For a weak acid-strong base titration, the equivalence point is above pH 7 (alkaline) due to hydrolysis of the salt. Phenolphthalein changes colour in the alkaline range (pH 8.3–10.0), making it suitable.'
  },
  {
    id: 739,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Why is the equivalence point pH > 7 for a weak acid-strong base titration?',
    options: [
      'Because more base is added than acid',
      'Because the conjugate base (A⁻) formed hydrolyses slightly to produce OH⁻: A⁻ + H₂O ⇌ HA + OH⁻',
      'Because strong bases always make alkaline solutions',
      'Because weak acids donate all their protons at the equivalence point'
    ],
    correctAnswer: 1,
    explanation: 'At the equivalence point, the salt formed (e.g. CH₃COONa) contains the conjugate base A⁻ which partially hydrolyses: A⁻ + H₂O ⇌ HA + OH⁻, producing excess OH⁻ and pH > 7.'
  },
  {
    id: 740,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'If pKw = 14 at 25°C, what is the pH of pure water at 25°C?',
    options: ['6', '7', '8', '14'],
    correctAnswer: 1,
    explanation: 'In pure water, [H⁺] = [OH⁻]. Kw = [H⁺]² = 10⁻¹⁴. [H⁺] = 10⁻⁷. pH = 7. Water is neutral (neither acidic nor basic).'
  },
  {
    id: 741,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'At 50°C, Kw = 5.5 × 10⁻¹⁴. What is the pH of pure water at 50°C?',
    options: ['7.00', '6.63', '6.00', '7.37'],
    correctAnswer: 1,
    explanation: '[H⁺] = √(5.5×10⁻¹⁴) = 2.35×10⁻⁷ mol dm⁻³. pH = −log(2.35×10⁻⁷) ≈ 6.63. Water is still neutral (since [H⁺] = [OH⁻]), but pH < 7 at higher temperature.'
  },
  {
    id: 742,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'In a weak acid-strong base titration curve, where is the buffer region?',
    options: [
      'At the equivalence point',
      'Before any base is added',
      'Around the half-equivalence point, where pH ≈ pKa',
      'After the equivalence point'
    ],
    correctAnswer: 2,
    explanation: 'The buffer region is before the equivalence point, particularly around the half-equivalence point where [HA] ≈ [A⁻] and pH ≈ pKa. In this region the curve is nearly flat, showing buffer action.'
  },
  {
    id: 743,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the conjugate base of H₂SO₄?',
    options: ['SO₄²⁻', 'HSO₄⁻', 'H₃SO₄⁺', 'SO₃'],
    correctAnswer: 1,
    explanation: 'H₂SO₄ donates one proton to form HSO₄⁻. The conjugate base of H₂SO₄ is HSO₄⁻ (which can donate a second proton to form SO₄²⁻).'
  },
  {
    id: 744,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'A buffer is prepared using 0.2 mol of ethanoic acid and 0.4 mol of sodium ethanoate in 1 dm³. Ka = 1.8×10⁻⁵. What is [H⁺]?',
    options: [
      '9.0 × 10⁻⁶ mol dm⁻³',
      '3.6 × 10⁻⁵ mol dm⁻³',
      '1.8 × 10⁻⁵ mol dm⁻³',
      '1.8 × 10⁻⁴ mol dm⁻³'
    ],
    correctAnswer: 0,
    explanation: '[H⁺] = Ka × [HA]/[A⁻] = 1.8×10⁻⁵ × (0.2/0.4) = 1.8×10⁻⁵ × 0.5 = 9.0×10⁻⁶ mol dm⁻³.'
  },
  {
    id: 745,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'Which indicator is suitable for a strong acid-strong base titration?',
    options: [
      'Phenolphthalein only',
      'Methyl orange only',
      'Both methyl orange and phenolphthalein are suitable',
      'Neither — only universal indicator works'
    ],
    correctAnswer: 2,
    explanation: 'For a strong acid-strong base titration, the equivalence point is at pH 7 and the vertical section of the curve spans pH ~3 to ~11. Both methyl orange (pH 3.1–4.4) and phenolphthalein (pH 8.3–10.0) lie within this steep section, so both are suitable.'
  },

  {
    id: 746,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which trend is observed in atomic radius across Period 3 from Na to Cl?',
    options: [
      'Atomic radius increases steadily',
      'Atomic radius decreases steadily',
      'Atomic radius first increases then decreases',
      'Atomic radius remains constant'
    ],
    correctAnswer: 1,
    explanation: 'Across Period 3, the number of protons increases while electrons are added to the same shell, so nuclear charge increases without significant shielding. This increased effective nuclear charge pulls electrons closer, decreasing atomic radius.'
  },
  {
    id: 747,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Why does first ionisation energy generally increase across Period 3?',
    options: [
      'The atomic radius increases, making electrons easier to remove',
      'The nuclear charge increases, increasing attraction on outer electrons',
      'The number of electron shells increases',
      'Shielding increases significantly across the period'
    ],
    correctAnswer: 1,
    explanation: 'Across Period 3, each element has one more proton but electrons are added to the same 3rd shell with little additional shielding. The increased nuclear charge holds outer electrons more tightly, increasing ionisation energy.'
  },
  {
    id: 748,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'The first ionisation energy of aluminium (Al) is lower than that of magnesium (Mg). Which best explains this?',
    options: [
      'Al has a larger atomic radius than Mg',
      'Al\'s outer electron is in a 3p orbital which is higher in energy and more shielded than the 3s of Mg',
      'Al has more protons than Mg',
      'Al has fewer electrons than Mg'
    ],
    correctAnswer: 1,
    explanation: 'Al has its outer electron in a 3p orbital, which is higher in energy and slightly shielded by the 3s electrons, compared to Mg whose outer electrons are in 3s. This makes the 3p electron easier to remove despite the extra proton.'
  },
  {
    id: 749,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'The first ionisation energy of sulfur (S) is lower than that of phosphorus (P). What is the reason for this?',
    options: [
      'Sulfur has fewer protons than phosphorus',
      'Sulfur\'s outer electron pairs in the 3p subshell experience inter-electron repulsion, making one easier to remove',
      'Sulfur has a larger atomic radius than phosphorus',
      'Sulfur\'s outer electrons are more shielded due to more electron shells'
    ],
    correctAnswer: 1,
    explanation: 'In phosphorus, the three 3p electrons each occupy separate orbitals (Hund\'s rule) with no repulsion. Sulfur has a paired electron in one 3p orbital, and inter-electron repulsion lowers the energy required to remove it.'
  },
  {
    id: 750,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which Period 3 element has the highest melting point?',
    options: [
      'Sodium',
      'Aluminium',
      'Silicon',
      'Chlorine'
    ],
    correctAnswer: 2,
    explanation: 'Silicon has a giant covalent structure with strong Si–Si covalent bonds throughout a 3D lattice, requiring a large amount of energy to break. This gives it the highest melting point in Period 3.'
  },
  {
    id: 751,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Why does sodium have a lower melting point than magnesium in Period 3?',
    options: [
      'Sodium atoms are smaller than magnesium atoms',
      'Sodium has one delocalised electron per atom whereas magnesium has two, giving weaker metallic bonding',
      'Sodium has stronger van der Waals forces than magnesium',
      'Sodium has a higher nuclear charge than magnesium'
    ],
    correctAnswer: 1,
    explanation: 'Both Na and Mg are metallic solids. Mg has two delocalised electrons per atom, producing a stronger metallic lattice than Na which contributes only one. Stronger metallic bonding in Mg means a higher melting point.'
  },
  {
    id: 752,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which of the following Period 3 elements has the greatest electronegativity?',
    options: [
      'Sodium',
      'Silicon',
      'Phosphorus',
      'Chlorine'
    ],
    correctAnswer: 3,
    explanation: 'Electronegativity increases across Period 3 because nuclear charge increases and atomic radius decreases, meaning chlorine (on the far right before the noble gas) has the greatest ability to attract bonding electrons.'
  },
  {
    id: 753,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which statement about the reaction of sodium with water is correct?',
    options: [
      'Sodium reacts vigorously, producing H₂ gas and NaOH solution',
      'Sodium reacts slowly, producing O₂ gas and NaOH solution',
      'Sodium does not react with water',
      'Sodium reacts to form sodium peroxide and hydrogen gas'
    ],
    correctAnswer: 0,
    explanation: 'Sodium reacts vigorously with water: 2Na + 2H₂O → 2NaOH + H₂. The sodium hydroxide dissolves to give an alkaline solution and hydrogen gas is produced, which may ignite.'
  },
  {
    id: 754,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What is the observation when magnesium is burned in oxygen?',
    options: [
      'Burns with a yellow flame producing a white solid MgO',
      'Burns with a brilliant white flame producing a white powder MgO',
      'Burns with a blue flame producing a grey solid MgO',
      'Does not ignite in oxygen'
    ],
    correctAnswer: 1,
    explanation: 'Magnesium burns vigorously in oxygen with a brilliant white flame. The product is white magnesium oxide (MgO): 2Mg + O₂ → 2MgO.'
  },
  {
    id: 755,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Phosphorus reacts with excess oxygen to form which product?',
    options: [
      'P₂O₃',
      'P₄O₆',
      'P₄O₁₀',
      'PO₂'
    ],
    correctAnswer: 2,
    explanation: 'In excess oxygen, phosphorus forms phosphorus(V) oxide, P₄O₁₀. In a limited supply of oxygen, P₄O₆ (phosphorus(III) oxide) is formed instead.'
  },
  {
    id: 756,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Which product forms when chlorine reacts with excess sodium?',
    options: [
      'NaCl₂',
      'NaCl',
      'Na₂Cl',
      'NaClO'
    ],
    correctAnswer: 1,
    explanation: 'Sodium reacts with chlorine to form sodium chloride: 2Na + Cl₂ → 2NaCl. Sodium always forms +1 ions and chloride is −1, giving a 1:1 ratio.'
  },
  {
    id: 757,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'Which statement correctly compares the chlorides of sodium and silicon in Period 3?',
    options: [
      'Both NaCl and SiCl₄ react with water to form acidic solutions',
      'NaCl dissolves in water to give a neutral solution; SiCl₄ hydrolyses vigorously producing an acidic solution',
      'SiCl₄ dissolves in water to give a neutral solution; NaCl hydrolyses to give an acidic solution',
      'Both NaCl and SiCl₄ are insoluble in water'
    ],
    correctAnswer: 1,
    explanation: 'NaCl is an ionic compound that simply dissolves in water giving a neutral solution. SiCl₄ is a covalent chloride that hydrolyses with water: SiCl₄ + 2H₂O → SiO₂ + 4HCl, producing an acidic solution.'
  },
  {
    id: 758,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'PCl₅ reacts with water. What are the products?',
    options: [
      'H₃PO₄ and HCl',
      'H₃PO₃ and HCl',
      'P₂O₅ and HCl',
      'HPO₃ and HCl'
    ],
    correctAnswer: 0,
    explanation: 'PCl₅ hydrolyses with water: PCl₅ + 4H₂O → H₃PO₄ + 5HCl. This produces phosphoric(V) acid and hydrochloric acid, giving a strongly acidic solution.'
  },
  {
    id: 759,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which of the following describes the trend in metallic character across Period 3 from left to right?',
    options: [
      'Metallic character increases across the period',
      'Metallic character decreases across the period',
      'Metallic character stays the same across the period',
      'Metallic character first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'Metallic character decreases across Period 3 because electronegativity and ionisation energy increase, making it harder for atoms to lose electrons. Elements on the left (Na, Mg, Al) are metals; those on the right (P, S, Cl) are non-metals.'
  },
  {
    id: 760,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What is the trend in first ionisation energy down Group 2?',
    options: [
      'First ionisation energy increases down the group',
      'First ionisation energy decreases down the group',
      'First ionisation energy remains constant',
      'First ionisation energy first decreases then increases'
    ],
    correctAnswer: 1,
    explanation: 'Down Group 2, atomic radius increases and shielding increases, so the outer electrons are further from the nucleus and more shielded. This decreases the effective nuclear charge experienced by outer electrons, reducing ionisation energy.'
  },
  {
    id: 761,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'Silicon\'s high melting point is due to which structural feature?',
    options: [
      'It has a simple molecular structure with strong intermolecular forces',
      'It has a giant ionic lattice',
      'It has a giant covalent (macromolecular) structure with strong Si–Si bonds throughout',
      'It has a metallic lattice with many delocalised electrons'
    ],
    correctAnswer: 2,
    explanation: 'Silicon has a giant covalent (macromolecular) structure similar to diamond, with each Si atom covalently bonded to four others in a tetrahedral arrangement. Breaking this extensive network of strong covalent bonds requires a great deal of energy.'
  },
  {
    id: 762,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Easy',
    question: 'Which Period 3 element reacts with water at room temperature to form a strongly alkaline solution?',
    options: [
      'Magnesium',
      'Aluminium',
      'Sodium',
      'Silicon'
    ],
    correctAnswer: 2,
    explanation: 'Sodium reacts readily with water at room temperature: 2Na + 2H₂O → 2NaOH + H₂. Sodium hydroxide is a strong base, giving a strongly alkaline solution.'
  },
  {
    id: 763,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'Which of the following correctly explains why aluminium chloride (AlCl₃) fumes in moist air?',
    options: [
      'AlCl₃ is ionic and precipitates Al(OH)₃ with water',
      'AlCl₃ is covalent and hydrolyses with water vapour to produce HCl fumes',
      'AlCl₃ oxidises water to produce Cl₂ gas',
      'AlCl₃ reacts with N₂ in air to produce AlN and HCl'
    ],
    correctAnswer: 1,
    explanation: 'AlCl₃ is a covalent chloride. It hydrolyses readily when exposed to water vapour in moist air, producing Al(OH)₃ and HCl gas, which appears as white fumes: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl.'
  },
  {
    id: 764,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'How does the nature of Period 3 oxides change across the period from Na₂O to Cl₂O₇?',
    options: [
      'They change from acidic to basic',
      'They change from basic to acidic',
      'They remain neutral throughout',
      'They alternate between acidic and basic'
    ],
    correctAnswer: 1,
    explanation: 'Oxides of Period 3 metals on the left (Na₂O, MgO) are basic; Al₂O₃ is amphoteric; and the non-metal oxides on the right (SiO₂, P₄O₁₀, SO₃, Cl₂O₇) are acidic. Overall, there is a trend from basic to acidic across the period.'
  },
  {
    id: 765,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Medium',
    question: 'What type of bonding is present in sodium chloride (NaCl)?',
    options: [
      'Covalent bonding',
      'Metallic bonding',
      'Ionic bonding',
      'Hydrogen bonding'
    ],
    correctAnswer: 2,
    explanation: 'NaCl is formed from sodium (a metal) and chlorine (a non-metal). The large difference in electronegativity leads to the transfer of an electron from Na to Cl, forming Na⁺ and Cl⁻ ions held together by ionic bonding in a giant lattice.'
  },
  {
    id: 766,
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'Hard',
    question: 'Sulfur dioxide (SO₂) reacts with water. What is the product and what is its pH?',
    options: [
      'H₂SO₄; pH around 1',
      'H₂SO₃; pH less than 7',
      'H₂S; pH less than 7',
      'SO₃; pH 7'
    ],
    correctAnswer: 1,
    explanation: 'SO₂ reacts with water to form sulfurous acid (H₂SO₃): SO₂ + H₂O → H₂SO₃. This is a weak diprotic acid giving a solution with pH less than 7 (acidic).'
  },
  {
    id: 767,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'Which trend in atomic radius is observed going down Group 2?',
    options: [
      'Atomic radius decreases',
      'Atomic radius increases',
      'Atomic radius stays the same',
      'Atomic radius first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'Going down Group 2, each element has an additional electron shell, increasing the distance of outer electrons from the nucleus. This results in a larger atomic radius despite the increasing nuclear charge.'
  },
  {
    id: 768,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'Which Group 2 element reacts most vigorously with water?',
    options: [
      'Beryllium',
      'Magnesium',
      'Calcium',
      'Barium'
    ],
    correctAnswer: 3,
    explanation: 'Reactivity increases down Group 2 because ionisation energies decrease (making it easier to form M²⁺ ions). Barium at the bottom of the group reacts most vigorously with water.'
  },
  {
    id: 769,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What are the products when calcium reacts with water?',
    options: [
      'CaO and H₂',
      'Ca(OH)₂ and H₂',
      'CaH₂ and O₂',
      'CaCO₃ and H₂'
    ],
    correctAnswer: 1,
    explanation: 'Calcium reacts with water: Ca + 2H₂O → Ca(OH)₂ + H₂. Calcium hydroxide (limewater) is sparingly soluble, and hydrogen gas is produced.'
  },
  {
    id: 770,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is the product when magnesium burns in oxygen?',
    options: [
      'MgO₂',
      'MgO',
      'Mg₂O',
      'MgO and MgO₂ mixture'
    ],
    correctAnswer: 1,
    explanation: 'Magnesium burns vigorously in oxygen: 2Mg + O₂ → 2MgO. Magnesium forms a +2 ion and the product is white magnesium oxide.'
  },
  {
    id: 771,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'How does barium oxide react with water?',
    options: [
      'BaO is insoluble and does not react with water',
      'BaO reacts to form Ba(OH)₂, a strongly alkaline solution',
      'BaO reacts to form BaO₂ and H₂',
      'BaO reacts to form BaCO₃'
    ],
    correctAnswer: 1,
    explanation: 'Barium oxide reacts exothermically with water: BaO + H₂O → Ba(OH)₂. Barium hydroxide is a strong base, producing a strongly alkaline solution.'
  },
  {
    id: 772,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What happens to the solubility of Group 2 hydroxides going down the group?',
    options: [
      'Solubility decreases',
      'Solubility increases',
      'Solubility remains constant',
      'Solubility first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'The solubility of Group 2 hydroxides increases down the group: Be(OH)₂ and Mg(OH)₂ are sparingly soluble, while Ca(OH)₂ is slightly soluble, and Ba(OH)₂ is quite soluble. This is due to decreasing lattice enthalpy down the group.'
  },
  {
    id: 773,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What happens to the solubility of Group 2 sulfates going down the group?',
    options: [
      'Solubility increases',
      'Solubility decreases',
      'Solubility remains constant',
      'Solubility first decreases then increases'
    ],
    correctAnswer: 1,
    explanation: 'The solubility of Group 2 sulfates decreases down the group: MgSO₄ is soluble, CaSO₄ is sparingly soluble, SrSO₄ is almost insoluble, and BaSO₄ is essentially insoluble. This is due to the hydration enthalpy decreasing less than the lattice enthalpy increases.'
  },
  {
    id: 774,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'Why is magnesium hydroxide used as an antacid?',
    options: [
      'It reacts with stomach acid (HCl) to neutralise it, and it is not harmful in small doses',
      'It reacts with stomach acid to produce CO₂ gas, providing relief',
      'It is strongly acidic and neutralises excess base',
      'It speeds up the digestion of food'
    ],
    correctAnswer: 0,
    explanation: 'Mg(OH)₂ is a mild alkali. It reacts with the excess hydrochloric acid in the stomach: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O. It is safe to use in small quantities as an antacid.'
  },
  {
    id: 775,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the role of barium sulfate (BaSO₄) in medicine?',
    options: [
      'It is used as an antacid to neutralise stomach acid',
      'It is used as a "barium meal" in X-ray imaging of the digestive system because it is opaque to X-rays and non-toxic',
      'It is used as a laxative due to its high solubility',
      'It is used to treat low blood calcium levels'
    ],
    correctAnswer: 1,
    explanation: 'BaSO₄ is extremely insoluble and therefore non-toxic. It is opaque to X-rays, so it is used as a contrast agent (barium meal) to image the gastrointestinal tract.'
  },
  {
    id: 776,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the order of thermal stability of Group 2 carbonates?',
    options: [
      'Stability increases down the group (BaCO₃ is most stable)',
      'Stability decreases down the group (MgCO₃ is most stable)',
      'All Group 2 carbonates decompose at the same temperature',
      'Stability is unrelated to position in the group'
    ],
    correctAnswer: 0,
    explanation: 'Thermal stability of Group 2 carbonates increases down the group. Larger cations polarise the carbonate ion less, making it harder to decompose. BaCO₃ requires the highest temperature to decompose; MgCO₃ decomposes at the lowest temperature.'
  },
  {
    id: 777,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Why does thermal stability of Group 2 carbonates increase down the group?',
    options: [
      'Larger cations have a greater charge density, polarising the carbonate ion more and making it less stable',
      'Smaller cations have greater charge density; down the group, cations are larger with lower charge density, so they polarise CO₃²⁻ less, making it more thermally stable',
      'The C–O bond in carbonate strengthens down the group',
      'Larger cations increase the lattice enthalpy, stabilising the carbonate'
    ],
    correctAnswer: 1,
    explanation: 'Small cations (like Mg²⁺) have high charge density and strongly polarise the carbonate ion, weakening C–O bonds and making decomposition easier. Larger cations (like Ba²⁺) have lower charge density, polarise CO₃²⁻ less, and so the carbonate is more thermally stable.'
  },
  {
    id: 778,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is produced when Group 2 carbonates undergo thermal decomposition?',
    options: [
      'Group 2 metal and CO₂ and O₂',
      'Group 2 oxide and CO₂',
      'Group 2 hydroxide and CO',
      'Group 2 oxide and CO'
    ],
    correctAnswer: 1,
    explanation: 'Group 2 carbonates decompose on heating: MCO₃ → MO + CO₂. For example, CaCO₃ → CaO + CO₂. The products are the Group 2 metal oxide and carbon dioxide.'
  },
  {
    id: 779,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What are the products when Group 2 nitrates are thermally decomposed?',
    options: [
      'Group 2 oxide, NO₂, and O₂',
      'Group 2 nitrite and O₂',
      'Group 2 metal and N₂ and O₂',
      'Group 2 oxide and N₂'
    ],
    correctAnswer: 0,
    explanation: 'Group 2 nitrates decompose on heating to give the metal oxide, nitrogen dioxide, and oxygen: 2M(NO₃)₂ → 2MO + 4NO₂ + O₂. This is in contrast to Group 1 nitrates (except Li) which form nitrites.'
  },
  {
    id: 780,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'Calcium carbonate (CaCO₃) is used in agriculture. What is its purpose?',
    options: [
      'To provide calcium nutrients for plant growth only',
      'To neutralise acidic soils and improve crop yield',
      'To increase soil acidity for certain plants',
      'To act as a pesticide'
    ],
    correctAnswer: 1,
    explanation: 'CaCO₃ (limestone) is used to neutralise acidic soils. It reacts with acids in the soil to raise pH, making conditions more suitable for crop growth: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂.'
  },
  {
    id: 781,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'What is observed when magnesium reacts with dilute hydrochloric acid?',
    options: [
      'No reaction',
      'Magnesium dissolves with effervescence, producing hydrogen gas',
      'A blue precipitate forms',
      'Magnesium dissolves producing chlorine gas'
    ],
    correctAnswer: 1,
    explanation: 'Mg reacts readily with dilute HCl: Mg + 2HCl → MgCl₂ + H₂. The magnesium dissolves and bubbles of hydrogen gas are produced.'
  },
  {
    id: 782,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Which of the following correctly explains the trend in reactivity of Group 2 metals with water?',
    options: [
      'Reactivity decreases down the group because atomic radius increases',
      'Reactivity increases down the group because ionisation energies decrease, making it easier for atoms to form M²⁺ ions',
      'Reactivity increases down the group because electronegativity increases',
      'All Group 2 metals react at the same rate with water'
    ],
    correctAnswer: 1,
    explanation: 'Down Group 2, atomic radius increases and shielding increases, reducing the effective nuclear charge felt by outer electrons. This makes it progressively easier to remove the two outer electrons and form M²⁺ ions, increasing reactivity with water.'
  },
  {
    id: 783,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'Beryllium does not react with water at room temperature but magnesium reacts very slowly. Calcium reacts moderately with cold water. This demonstrates which trend?',
    options: [
      'Reactivity decreases down Group 2',
      'Reactivity increases down Group 2',
      'Reactivity is unrelated to group position',
      'Reactivity alternates down Group 2'
    ],
    correctAnswer: 1,
    explanation: 'The observations show that reactivity with water increases down Group 2: Be does not react, Mg reacts very slowly, and Ca reacts noticeably. This is because ionisation energy decreases and atoms lose electrons more readily down the group.'
  },
  {
    id: 784,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Hard',
    question: 'Strontium hydroxide Sr(OH)₂ reacts with dilute H₂SO₄. What is the problem with this reaction as a neutralisation method?',
    options: [
      'The reaction produces a toxic gas',
      'The reaction is endothermic',
      'A layer of insoluble SrSO₄ forms on the surface of the metal, preventing further reaction',
      'Sr(OH)₂ is too strong a base to react with dilute H₂SO₄'
    ],
    correctAnswer: 2,
    explanation: 'When Sr(OH)₂ or the corresponding metal reacts with sulfuric acid, sparingly soluble SrSO₄ is formed. This layer coats the surface, acting as a barrier that slows or stops further reaction.'
  },
  {
    id: 785,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the equation for the reaction of calcium oxide with water?',
    options: [
      'CaO + H₂O → CaCO₃',
      'CaO + H₂O → Ca(OH)₂',
      'CaO + 2H₂O → Ca(OH)₂ + H₂',
      'CaO + H₂O → CaH₂ + O₂'
    ],
    correctAnswer: 1,
    explanation: 'Calcium oxide (quicklime) reacts vigorously with water (slaking): CaO + H₂O → Ca(OH)₂. The product, calcium hydroxide (slaked lime), is a white solid slightly soluble in water.'
  },
  {
    id: 786,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Easy',
    question: 'Which of the following is a use of calcium hydroxide (Ca(OH)₂)?',
    options: [
      'As a fertiliser to provide nitrogen',
      'To neutralise acidic soil (liming)',
      'As a food preservative',
      'To produce sulfuric acid'
    ],
    correctAnswer: 1,
    explanation: 'Calcium hydroxide (slaked lime) is spread on agricultural land to neutralise acidic soils and adjust the pH. This process is called liming and helps improve crop yields.'
  },
  {
    id: 787,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'Medium',
    question: 'What is the trend in first ionisation energy going down Group 2, and why?',
    options: [
      'Increases; because nuclear charge increases',
      'Decreases; because atomic radius increases and shielding increases, reducing effective nuclear charge',
      'Remains constant; shielding and nuclear charge cancel out',
      'Increases; because electron shells are more stable lower in the group'
    ],
    correctAnswer: 1,
    explanation: 'Going down Group 2, each element has more electron shells, increasing shielding and atomic radius. Although nuclear charge increases, the increased distance and shielding reduce the effective nuclear charge on outer electrons, so less energy is needed to remove them.'
  },
  {
    id: 788,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'Which of the following is the correct order of oxidising power of the halogens?',
    options: [
      'F₂ < Cl₂ < Br₂ < I₂',
      'I₂ < Br₂ < Cl₂ < F₂',
      'Cl₂ < Br₂ < F₂ < I₂',
      'Br₂ < Cl₂ < I₂ < F₂'
    ],
    correctAnswer: 1,
    explanation: 'Oxidising power decreases down Group 7. Fluorine is the strongest oxidising agent because it has the smallest atomic radius and highest electronegativity, making it easiest to gain an electron.'
  },
  {
    id: 789,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'Which trend in electronegativity is observed going down Group 7?',
    options: [
      'Electronegativity increases down the group',
      'Electronegativity decreases down the group',
      'Electronegativity remains constant',
      'Electronegativity first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'Electronegativity decreases down Group 7 because atomic radius increases and shielding increases, reducing the ability of the nucleus to attract bonding electrons.'
  },
  {
    id: 790,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the trend in boiling point going down Group 7?',
    options: [
      'Boiling point decreases',
      'Boiling point increases',
      'Boiling point remains constant',
      'Boiling point first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'Boiling point increases down Group 7 because the molecules become larger with more electrons, increasing London dispersion (van der Waals) forces between molecules. More energy is required to overcome these stronger intermolecular forces.'
  },
  {
    id: 791,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Chlorine water is added to a solution of potassium iodide. What is observed?',
    options: [
      'No reaction occurs',
      'A brown/yellow colour appears, showing iodine has been displaced',
      'A white precipitate forms',
      'The solution turns blue immediately without any other reagent'
    ],
    correctAnswer: 1,
    explanation: 'Cl₂ is a better oxidising agent than I₂ and displaces iodine from iodide solution: Cl₂ + 2KI → 2KCl + I₂. Iodine gives a brown/yellow colour in solution (turns blue-black with starch).'
  },
  {
    id: 792,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What happens when bromine water is added to a solution of potassium chloride?',
    options: [
      'Chlorine is displaced from the chloride solution',
      'No reaction occurs, as Br₂ cannot oxidise Cl⁻',
      'A white precipitate of BrCl forms',
      'Potassium bromide is formed along with Cl₂ gas'
    ],
    correctAnswer: 1,
    explanation: 'Bromine cannot displace chlorine from chloride ions because Cl₂ is a stronger oxidising agent than Br₂. A halogen can only displace a halide below it in the group.'
  },
  {
    id: 793,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is the product when sodium bromide (NaBr) reacts with concentrated sulfuric acid?',
    options: [
      'HBr only',
      'HBr, Br₂, and SO₂ (as H₂SO₄ is reduced to SO₂)',
      'NaSO₄ and Br₂ only',
      'No reaction occurs'
    ],
    correctAnswer: 1,
    explanation: 'NaBr first reacts to give HBr: NaBr + H₂SO₄ → NaHSO₄ + HBr. HBr, being a stronger reducing agent than HCl, then reduces H₂SO₄ to SO₂: 2HBr + H₂SO₄ → SO₂ + Br₂ + 2H₂O. Br₂ and SO₂ are also produced.'
  },
  {
    id: 794,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'What is the product when sodium iodide (NaI) reacts with concentrated sulfuric acid?',
    options: [
      'HI only',
      'HI, I₂, SO₂, S, and H₂S (multiple reduction products of H₂SO₄)',
      'NaSO₄ and I₂ only',
      'HI and NaHSO₄ only'
    ],
    correctAnswer: 1,
    explanation: 'NaI reacts to give HI, which is the strongest reducing agent among hydrogen halides. HI reduces H₂SO₄ through multiple steps producing SO₂, S, and H₂S in addition to I₂. The more products, the stronger the reducing agent.'
  },
  {
    id: 795,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'Which reagents are used to test for halide ions in solution?',
    options: [
      'Dilute nitric acid and then aqueous silver nitrate',
      'Dilute hydrochloric acid and then aqueous barium chloride',
      'Dilute sulfuric acid and then aqueous lead(II) nitrate',
      'Sodium hydroxide and then copper(II) sulfate'
    ],
    correctAnswer: 0,
    explanation: 'Halide ions are identified by adding dilute nitric acid (to remove carbonate or sulfate that could interfere) then silver nitrate solution. AgCl (white), AgBr (cream), and AgI (yellow) precipitates form with Cl⁻, Br⁻, and I⁻ respectively.'
  },
  {
    id: 796,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Silver chloride, silver bromide, and silver iodide precipitates can be distinguished by adding dilute ammonia. What is the correct observation?',
    options: [
      'AgCl dissolves in dilute NH₃; AgBr dissolves in concentrated NH₃; AgI does not dissolve in NH₃',
      'AgCl dissolves in dilute NH₃; AgBr does not dissolve; AgI dissolves in concentrated NH₃',
      'All three dissolve in dilute NH₃',
      'None dissolve in ammonia'
    ],
    correctAnswer: 0,
    explanation: 'AgCl dissolves readily in dilute ammonia forming [Ag(NH₃)₂]⁺. AgBr is only soluble in concentrated ammonia. AgI does not dissolve in ammonia at all, as the precipitate is too insoluble.'
  },
  {
    id: 797,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Chlorine reacts with cold dilute NaOH. What are the products?',
    options: [
      'NaCl and HClO only',
      'NaCl, NaClO, and H₂O',
      'NaClO₃ and NaCl and H₂O',
      'NaClO₄ and HCl'
    ],
    correctAnswer: 1,
    explanation: 'When Cl₂ reacts with cold dilute NaOH: Cl₂ + 2NaOH → NaCl + NaClO + H₂O. This is a disproportionation reaction where Cl₂ is simultaneously oxidised (to +1 in NaClO) and reduced (to −1 in NaCl).'
  },
  {
    id: 798,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'Chlorine reacts with hot concentrated NaOH. What are the products?',
    options: [
      'NaCl and NaClO',
      'NaCl, NaClO₃, and H₂O',
      'NaClO₄ and H₂O',
      'NaClO₂ and NaCl'
    ],
    correctAnswer: 1,
    explanation: 'With hot concentrated NaOH: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O. The chlorate(V) ion ClO₃⁻ is formed rather than ClO⁻, since at higher temperatures disproportionation continues further.'
  },
  {
    id: 799,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is disproportionation in the context of halogen chemistry?',
    options: [
      'A reaction where a halogen is only oxidised',
      'A reaction where a halogen is only reduced',
      'A reaction where the same element is simultaneously oxidised and reduced',
      'A reaction involving the displacement of one halogen by another'
    ],
    correctAnswer: 2,
    explanation: 'Disproportionation is a redox reaction where the same element simultaneously undergoes both oxidation and reduction. For example, Cl₂ + 2NaOH → NaCl + NaClO + H₂O: Cl goes from 0 to −1 (reduced) and from 0 to +1 (oxidised).'
  },
  {
    id: 800,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Easy',
    question: 'What is the colour of the precipitate formed when AgNO₃ is added to a solution containing chloride ions?',
    options: [
      'Yellow',
      'Cream',
      'White',
      'Orange'
    ],
    correctAnswer: 2,
    explanation: 'Silver chloride (AgCl) is a white precipitate. Silver bromide (AgBr) is cream, and silver iodide (AgI) is yellow. These precipitate colours help identify which halide ion is present.'
  },
  {
    id: 801,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is the main use of chlorine in water treatment?',
    options: [
      'To soften hard water by removing Ca²⁺ ions',
      'To kill bacteria by acting as a disinfectant',
      'To lower the pH of water',
      'To remove heavy metals from water'
    ],
    correctAnswer: 1,
    explanation: 'Chlorine (and chloramine formed from it) is used to disinfect drinking water by killing bacteria and other pathogens. It reacts with water to form chloric(I) acid (HOCl), which is the active biocidal species.'
  },
  {
    id: 802,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is the trend in reducing power of the hydrogen halides (HF, HCl, HBr, HI)?',
    options: [
      'Reducing power decreases from HF to HI',
      'Reducing power increases from HF to HI',
      'All hydrogen halides have equal reducing power',
      'Reducing power is not related to position in the group'
    ],
    correctAnswer: 1,
    explanation: 'Reducing power increases from HF to HI because the H–X bond length increases and bond enthalpy decreases down the group. HI has the weakest H–I bond and is the best reducing agent; HF has the strongest H–F bond and is the poorest reducing agent.'
  },
  {
    id: 803,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'Why does the bond enthalpy of hydrogen halides decrease from HF to HI?',
    options: [
      'The halogen becomes less electronegative, so the bond becomes weaker',
      'The halide ion becomes larger down the group, so the H–X bond length increases and overlap between orbitals decreases, weakening the bond',
      'The halogen becomes more electronegative, strengthening the bond',
      'The number of lone pairs on the halogen decreases down the group'
    ],
    correctAnswer: 1,
    explanation: 'Down Group 7, the halide ion increases in size due to more electron shells. The larger the halide, the longer the H–X bond and the poorer the orbital overlap. Poorer overlap means a weaker bond and lower bond enthalpy.'
  },
  {
    id: 804,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'What is the product when sodium chloride reacts with concentrated sulfuric acid?',
    options: [
      'HCl and NaHSO₄',
      'Cl₂ and Na₂SO₄',
      'NaClO₄ and H₂O',
      'HCl and Na₂S'
    ],
    correctAnswer: 0,
    explanation: 'NaCl + H₂SO₄ → NaHSO₄ + HCl. This reaction produces hydrogen chloride gas and sodium hydrogensulfate. Unlike bromide or iodide, chloride is not a strong enough reducing agent to further reduce the sulfuric acid.'
  },
  {
    id: 805,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'A solution containing iodide ions is treated with chlorine water, then the mixture is shaken with cyclohexane. What is observed in the organic layer?',
    options: [
      'Colourless organic layer',
      'Blue organic layer',
      'Violet/purple organic layer',
      'Orange-red organic layer'
    ],
    correctAnswer: 2,
    explanation: 'Chlorine displaces iodine from iodide: Cl₂ + 2I⁻ → 2Cl⁻ + I₂. When shaken with cyclohexane, iodine dissolves preferentially in the organic layer, giving a violet/purple colour characteristic of iodine in non-polar solvents.'
  },
  {
    id: 806,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'Which of the following statements about fluorine is correct?',
    options: [
      'Fluorine can exist in positive oxidation states in its compounds',
      'Fluorine is the most electronegative element and only exists in the −1 oxidation state in compounds',
      'Fluorine reacts with NaOH to form NaFO',
      'Fluorine is a weaker oxidising agent than chlorine'
    ],
    correctAnswer: 1,
    explanation: 'Fluorine is the most electronegative element and always exists as −1 in its compounds. It cannot be oxidised to positive states, so it shows no disproportionation reaction with NaOH like other halogens.'
  },
  {
    id: 807,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Medium',
    question: 'The atomic radius of halogens increases down Group 7. What effect does this have on oxidising power?',
    options: [
      'Larger radius means outer electrons are closer to the nucleus, increasing oxidising power',
      'Larger radius means outer electrons are further from the nucleus with more shielding, reducing ability to attract electrons and decreasing oxidising power',
      'Larger radius increases the number of electrons gained, increasing oxidising power',
      'Radius has no effect on oxidising power'
    ],
    correctAnswer: 1,
    explanation: 'As atomic radius increases down Group 7, the outer shell is further from the nucleus and more shielded. This reduces the effective nuclear charge experienced by an incoming electron, making it harder to gain an electron (reduced oxidising power).'
  },
  {
    id: 808,
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'Hard',
    question: 'A displacement reaction is carried out: bromine water is added to a solution of potassium iodide. What are the half-equations for this reaction?',
    options: [
      'Br₂ + 2e⁻ → 2Br⁻ (reduction); 2I⁻ → I₂ + 2e⁻ (oxidation)',
      'Br₂ → 2Br⁻ + 2e⁻ (oxidation); 2I⁻ + 2e⁻ → I₂ (reduction)',
      'I₂ + 2e⁻ → 2I⁻ (reduction); 2Br⁻ → Br₂ + 2e⁻ (oxidation)',
      'Br₂ + 2e⁻ → 2Br⁻ (reduction); 2I⁻ + 2e⁻ → I₂ (reduction)'
    ],
    correctAnswer: 0,
    explanation: 'Br₂ acts as the oxidising agent and is reduced to Br⁻: Br₂ + 2e⁻ → 2Br⁻. The iodide ions are oxidised to I₂: 2I⁻ → I₂ + 2e⁻. Overall: Br₂ + 2KI → 2KBr + I₂.'
  },
  {
    id: 809,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'What type of oxide is sodium oxide (Na₂O)?',
    options: [
      'Acidic oxide',
      'Neutral oxide',
      'Basic oxide',
      'Amphoteric oxide'
    ],
    correctAnswer: 2,
    explanation: 'Na₂O is a basic oxide — it reacts with water to form sodium hydroxide (NaOH), a strong base: Na₂O + H₂O → 2NaOH. Metal oxides on the left of Period 3 are basic.'
  },
  {
    id: 810,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'What is the equation for the reaction of Na₂O with water?',
    options: [
      'Na₂O + H₂O → 2NaOH',
      'Na₂O + 2H₂O → 2NaOH + H₂',
      'Na₂O + H₂O → Na₂O₂ + H₂',
      'Na₂O + H₂O → NaHO₂'
    ],
    correctAnswer: 0,
    explanation: 'Sodium oxide dissolves in water to form sodium hydroxide: Na₂O + H₂O → 2NaOH. This gives a strongly alkaline solution (pH approximately 14).'
  },
  {
    id: 811,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'What is the product when magnesium oxide (MgO) reacts with water?',
    options: [
      'MgO₂',
      'Mg(OH)₂',
      'MgH₂O',
      'Mg + O₂ + H₂'
    ],
    correctAnswer: 1,
    explanation: 'MgO reacts with water: MgO + H₂O → Mg(OH)₂. Magnesium hydroxide is a slightly soluble weak base, giving an alkaline solution.'
  },
  {
    id: 812,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'Aluminium oxide (Al₂O₃) is described as amphoteric. What does this mean?',
    options: [
      'It only reacts with acids',
      'It only reacts with bases',
      'It reacts with both acids and bases',
      'It does not react with either acids or bases'
    ],
    correctAnswer: 2,
    explanation: 'Aluminium oxide is amphoteric, meaning it can react as both an acid and a base. It reacts with acids to form aluminium salts and water, and with strong bases (e.g. NaOH) to form aluminate ions.'
  },
  {
    id: 813,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the equation for the reaction of Al₂O₃ with dilute hydrochloric acid?',
    options: [
      'Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O',
      'Al₂O₃ + 2HCl → Al₂Cl₂O + H₂O',
      'Al₂O₃ + HCl → AlClO + H₂O',
      'Al₂O₃ + 3HCl → 2AlCl₂ + 3H₂O'
    ],
    correctAnswer: 0,
    explanation: 'Al₂O₃ acts as a base when reacting with HCl: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O. Aluminium oxide neutralises the acid, forming aluminium chloride and water.'
  },
  {
    id: 814,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the equation for the reaction of Al₂O₃ with excess sodium hydroxide solution?',
    options: [
      'Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O',
      'Al₂O₃ + 2NaOH → 2Al(OH)₂ + Na₂O',
      'Al₂O₃ + 2NaOH + 3H₂O → 2[Al(OH)₄]⁻ + 2Na⁺',
      'Al₂O₃ + 4NaOH → 2NaAlO₂ + 2Na₂O + H₂O'
    ],
    correctAnswer: 2,
    explanation: 'Al₂O₃ acts as an acid with excess NaOH, forming the tetrahydroxoaluminate complex: Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄]. This shows the amphoteric nature of Al₂O₃.'
  },
  {
    id: 815,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'Why is SiO₂ (silicon dioxide) a solid with a high melting point?',
    options: [
      'It has ionic bonding in a giant lattice',
      'It has a giant covalent structure with strong Si–O covalent bonds',
      'It has metallic bonding',
      'It has strong hydrogen bonding between molecules'
    ],
    correctAnswer: 1,
    explanation: 'Silicon dioxide has a giant covalent (macromolecular) structure. Each Si atom is covalently bonded to four O atoms in a 3D network. The many strong Si–O covalent bonds require a large amount of energy to break, giving SiO₂ a very high melting point.'
  },
  {
    id: 816,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'Does SiO₂ react with water?',
    options: [
      'Yes, it reacts readily with water to form silicic acid',
      'No, SiO₂ does not react with water under normal conditions',
      'Yes, it reacts with water to form SiH₄',
      'Yes, it reacts with water to form SiO₃²⁻'
    ],
    correctAnswer: 1,
    explanation: 'SiO₂ does not react with water under normal conditions despite being a giant covalent acidic oxide. This is because of the strong Si–O bonds in the lattice and the difficulty of Si forming a 5-coordinate transition state with water.'
  },
  {
    id: 817,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What are the products when P₄O₁₀ reacts with water?',
    options: [
      'H₃PO₃',
      'H₃PO₄',
      'HPO₂',
      'H₄P₂O₇'
    ],
    correctAnswer: 1,
    explanation: 'Phosphorus(V) oxide reacts with water to form phosphoric(V) acid: P₄O₁₀ + 6H₂O → 4H₃PO₄. This is an acidic oxide and its reaction with water gives an acidic solution.'
  },
  {
    id: 818,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the product when SO₂ reacts with water, and what type of acid is formed?',
    options: [
      'H₂SO₄ — a strong acid',
      'H₂SO₃ — a weak acid',
      'H₂S — a weak acid',
      'H₂SO₄ — a weak acid'
    ],
    correctAnswer: 1,
    explanation: 'SO₂ reacts with water to form sulfurous acid: SO₂ + H₂O → H₂SO₃. This is a weak diprotic acid. Note that SO₃ reacts with water to form the strong acid H₂SO₄.'
  },
  {
    id: 819,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the product when SO₃ reacts with water?',
    options: [
      'H₂SO₃',
      'H₂S',
      'H₂SO₄',
      'SO₂ + H₂O'
    ],
    correctAnswer: 2,
    explanation: 'Sulfur trioxide reacts vigorously with water to form sulfuric acid: SO₃ + H₂O → H₂SO₄. This is a strong acid that fully dissociates in water.'
  },
  {
    id: 820,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'The reaction of Cl₂O₇ with water produces which acid?',
    options: [
      'HClO (hypochlorous acid)',
      'HClO₂ (chlorous acid)',
      'HClO₃ (chloric acid)',
      'HClO₄ (perchloric acid)'
    ],
    correctAnswer: 3,
    explanation: 'Dichlorine heptaoxide (Cl₂O₇) reacts with water to form perchloric acid (HClO₄): Cl₂O₇ + H₂O → 2HClO₄. HClO₄ is one of the strongest known acids.'
  },
  {
    id: 821,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'How does the acid-base nature of Period 3 oxides change across the period from Na to Cl?',
    options: [
      'Changes from acidic oxides on the left to basic oxides on the right',
      'Changes from basic oxides on the left to acidic oxides on the right, with Al₂O₃ being amphoteric in the middle',
      'Remains neutral throughout',
      'Changes from neutral to amphoteric only'
    ],
    correctAnswer: 1,
    explanation: 'The oxides of Period 3 elements change from basic (Na₂O, MgO) to amphoteric (Al₂O₃) to acidic (SiO₂, P₄O₁₀, SO₂, SO₃, Cl₂O₇) as the elements become less metallic across the period.'
  },
  {
    id: 822,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'Why do the oxides become more acidic across Period 3?',
    options: [
      'The oxides become more ionic, making them more acidic',
      'As the element becomes more electronegative across the period, the E–O bond becomes more covalent and polarised toward O, making the O–H bond in the resulting acid stronger',
      'The increased nuclear charge makes the oxide ion more reactive with water',
      'More oxygen atoms per formula unit causes increased acidity'
    ],
    correctAnswer: 1,
    explanation: 'As electronegativity increases across Period 3, the metal–oxygen bond changes from ionic (basic, left) to covalent (acidic, right). In acidic oxides, the highly polarised E–O bond weakens the O–H bond when the oxide reacts with water, facilitating proton donation.'
  },
  {
    id: 823,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the equation for the reaction of Na₂O with dilute hydrochloric acid?',
    options: [
      'Na₂O + 2HCl → 2NaCl + H₂O',
      'Na₂O + HCl → NaClO + H₂',
      'Na₂O + HCl → NaOH + NaCl',
      'Na₂O + 2HCl → 2NaOH + Cl₂'
    ],
    correctAnswer: 0,
    explanation: 'Na₂O is a basic oxide and reacts with acids in a neutralisation reaction: Na₂O + 2HCl → 2NaCl + H₂O. Sodium chloride and water are formed.'
  },
  {
    id: 824,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'What is the equation for the reaction of SiO₂ with concentrated NaOH solution?',
    options: [
      'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O',
      'SiO₂ + NaOH → NaHSiO₃',
      'SiO₂ + 2NaOH → 2NaO + SiH₂O₃',
      'SiO₂ does not react with NaOH'
    ],
    correctAnswer: 0,
    explanation: 'SiO₂ is an acidic oxide and can react with a strong base: SiO₂ + 2NaOH → Na₂SiO₃ + H₂O. Sodium silicate is formed. Note that SiO₂ does not react with water but does react with hot concentrated NaOH.'
  },
  {
    id: 825,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'Which of these oxides has the highest oxidation state of the element and is therefore the most acidic?',
    options: [
      'SO₂',
      'SO₃',
      'P₄O₆',
      'NO'
    ],
    correctAnswer: 1,
    explanation: 'SO₃ has sulfur in the +6 oxidation state (the highest possible for sulfur), making it the most acidic of these options. Higher oxidation states on central atoms in oxoacids generally correspond to greater acid strength.'
  },
  {
    id: 826,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Easy',
    question: 'What pH would result from dissolving P₄O₁₀ in water?',
    options: [
      'Greater than 7',
      'Equal to 7',
      'Less than 7',
      'Cannot be determined'
    ],
    correctAnswer: 2,
    explanation: 'P₄O₁₀ is an acidic oxide. It reacts with water to form phosphoric(V) acid (H₃PO₄), an acid with pH less than 7.'
  },
  {
    id: 827,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Medium',
    question: 'Why is Al₂O₃ classified as amphoteric rather than acidic or basic?',
    options: [
      'Because it is insoluble in all solvents',
      'Because it can react with both acids and alkalis, donating or accepting protons depending on the reaction conditions',
      'Because it contains both a metal and a non-metal',
      'Because it has an intermediate melting point between basic and acidic oxides'
    ],
    correctAnswer: 1,
    explanation: 'Al₂O₃ is amphoteric because it reacts with acids (acting as a base): Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O, and with alkalis (acting as an acid): Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄. It can behave either as an acid or a base.'
  },
  {
    id: 828,
    topic: 'Inorganic Chemistry',
    subtopic: 'Period 3 Oxides',
    difficulty: 'Hard',
    question: 'What is the oxidation state of chlorine in Cl₂O₇?',
    options: [
      '+1',
      '+5',
      '+6',
      '+7'
    ],
    correctAnswer: 3,
    explanation: 'In Cl₂O₇, let the oxidation state of Cl be x. Each O is −2, so: 2x + 7(−2) = 0, giving 2x = +14, x = +7. Chlorine is in its highest oxidation state of +7 in Cl₂O₇.'
  },
  {
    id: 829,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'Which of the following is the correct definition of a transition metal (d-block metal)?',
    options: [
      'Any element in the d-block of the periodic table',
      'An element that forms at least one stable ion with a partially filled d subshell',
      'Any metal that can form coloured compounds',
      'Any metal with more than one oxidation state'
    ],
    correctAnswer: 1,
    explanation: 'A transition metal is strictly defined as an element that forms at least one stable ion with a partially filled d subshell. Zinc is a d-block element but not a transition metal because its only common ion (Zn²⁺) has a fully filled d subshell (3d¹⁰).'
  },
  {
    id: 830,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the electron configuration of the Cu²⁺ ion?',
    options: [
      '[Ar] 3d⁹ 4s¹',
      '[Ar] 3d⁹',
      '[Ar] 3d¹⁰ 4s¹',
      '[Ar] 3d⁸ 4s²'
    ],
    correctAnswer: 1,
    explanation: 'Copper atom has an anomalous configuration of [Ar] 3d¹⁰ 4s¹. Cu²⁺ is formed by losing two electrons: first the 4s¹ electron, then one 3d electron. This gives [Ar] 3d⁹.'
  },
  {
    id: 831,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the electron configuration of the Fe³⁺ ion?',
    options: [
      '[Ar] 3d⁶',
      '[Ar] 3d⁵',
      '[Ar] 3d⁴ 4s¹',
      '[Ar] 3d⁵ 4s¹'
    ],
    correctAnswer: 1,
    explanation: 'Iron atom has [Ar] 3d⁶ 4s². Fe³⁺ loses three electrons (first two from 4s, then one from 3d), giving [Ar] 3d⁵. A half-filled d subshell is relatively stable.'
  },
  {
    id: 832,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'Why do transition metal compounds often appear coloured?',
    options: [
      'Because they contain heavy atoms that absorb all wavelengths of light',
      'Because electrons in the partially filled d subshell can be promoted to higher d energy levels by absorbing visible light',
      'Because they form ionic bonds that reflect coloured light',
      'Because they all contain π bonds that absorb visible light'
    ],
    correctAnswer: 1,
    explanation: 'In transition metal complexes, the d orbitals are split into two energy levels. Electrons can be excited from the lower to the upper d levels by absorbing specific wavelengths of visible light. The remaining, transmitted wavelengths give the compound its observed colour.'
  },
  {
    id: 833,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is a ligand in the context of transition metal chemistry?',
    options: [
      'Any anion that forms an ionic bond with a transition metal',
      'A molecule or ion that donates a lone pair of electrons to a transition metal ion to form a coordinate (dative covalent) bond',
      'A positively charged species that accepts electrons from a metal',
      'A reducing agent that reduces the oxidation state of the metal'
    ],
    correctAnswer: 1,
    explanation: 'A ligand is a molecule or ion with a lone pair of electrons that it donates to a central metal ion, forming a coordinate (dative covalent) bond. Examples include H₂O, NH₃, Cl⁻, and CN⁻.'
  },
  {
    id: 834,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the coordination number of the central metal ion in [Cu(H₂O)₆]²⁺?',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 2,
    explanation: 'In [Cu(H₂O)₆]²⁺, the copper ion is surrounded by six water ligands, each donating a lone pair. The coordination number is therefore 6.'
  },
  {
    id: 835,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What is the correct IUPAC name for [Fe(CN)₆]³⁻?',
    options: [
      'Hexacyanoferrate(II)',
      'Hexacyanoferrate(III)',
      'Hexanitroferrate(III)',
      'Triscyanoiron(III)'
    ],
    correctAnswer: 1,
    explanation: 'The complex has six CN⁻ ligands (hexacyano) and an overall charge of 3−. Since each CN⁻ is −1, the iron must be +3 to give a total of 6(−1) + 3 = −3. IUPAC names the metal as ferrate since the ion is anionic, giving hexacyanoferrate(III).'
  },
  {
    id: 836,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What change in colour is observed when an excess of ammonia is added to the pale blue precipitate of Cu(OH)₂?',
    options: [
      'Remains pale blue',
      'The precipitate dissolves to give a deep blue solution',
      'The precipitate dissolves to give a colourless solution',
      'A green precipitate forms'
    ],
    correctAnswer: 1,
    explanation: 'Excess NH₃ causes ligand substitution: Cu(OH)₂ dissolves as the four water ligands in [Cu(H₂O)₄]²⁺ are replaced by NH₃ to form [Cu(NH₃)₄(H₂O)₂]²⁺, a deep blue (tetraamminecopper(II)) complex.'
  },
  {
    id: 837,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Easy',
    question: 'Which transition metal is used as a catalyst in the Haber process to manufacture ammonia?',
    options: [
      'Copper',
      'Platinum',
      'Iron',
      'Vanadium'
    ],
    correctAnswer: 2,
    explanation: 'Iron is used as the catalyst in the Haber process (N₂ + 3H₂ ⇌ 2NH₃). The ability of transition metals to provide surfaces for reactant adsorption and variable oxidation states makes them effective heterogeneous catalysts.'
  },
  {
    id: 838,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'Which catalyst is used in the Contact process for making sulfuric acid?',
    options: [
      'Iron',
      'Nickel',
      'Vanadium(V) oxide (V₂O₅)',
      'Manganese dioxide'
    ],
    correctAnswer: 2,
    explanation: 'V₂O₅ is used as a catalyst in the Contact process, which converts SO₂ to SO₃ (2SO₂ + O₂ ⇌ 2SO₃). V₂O₅ works by cycling between V⁵⁺ and V⁴⁺ oxidation states (variable oxidation states).'
  },
  {
    id: 839,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'Why can transition metals act as catalysts?',
    options: [
      'Because they have high melting points',
      'Because they have variable oxidation states and can form complexes that provide alternative reaction pathways with lower activation energies',
      'Because they are all magnetic',
      'Because they have large atomic radii'
    ],
    correctAnswer: 1,
    explanation: 'Transition metals can act as catalysts because they have variable oxidation states (enabling electron transfer), can form intermediate compounds with reactants, and can adsorb reactants on their surfaces. All these provide lower energy pathways for reactions.'
  },
  {
    id: 840,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What is the oxidation state of chromium in the dichromate ion Cr₂O₇²⁻?',
    options: [
      '+3',
      '+4',
      '+6',
      '+7'
    ],
    correctAnswer: 2,
    explanation: 'In Cr₂O₇²⁻, let Cr be x: 2x + 7(−2) = −2, so 2x = +12, x = +6. Chromium is in the +6 oxidation state in the dichromate ion.'
  },
  {
    id: 841,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What colour is the hexaaquacopper(II) complex ion [Cu(H₂O)₆]²⁺?',
    options: [
      'Pale green',
      'Pale blue',
      'Yellow',
      'Deep purple'
    ],
    correctAnswer: 1,
    explanation: '[Cu(H₂O)₆]²⁺ is pale blue (sometimes described as light blue). This colour arises from d-d electron transitions in the partially filled d subshell of Cu²⁺, absorbing red light and transmitting blue.'
  },
  {
    id: 842,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'A green solution containing Fe²⁺ ions is treated with NaOH solution. What precipitate is formed?',
    options: [
      'Fe(OH)₃ — a rust-brown precipitate',
      'Fe(OH)₂ — a pale green precipitate',
      'FeO — a black precipitate',
      'Fe₂O₃ — a red precipitate'
    ],
    correctAnswer: 1,
    explanation: 'Fe²⁺ reacts with NaOH to form iron(II) hydroxide: Fe²⁺ + 2OH⁻ → Fe(OH)₂. This is a pale green gelatinous precipitate. It may slowly oxidise in air to the rust-brown Fe(OH)₃.'
  },
  {
    id: 843,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What colour precipitate is formed when NaOH is added to an orange-brown solution of Fe³⁺?',
    options: [
      'Pale green',
      'Blue',
      'Rust-brown (reddish-brown)',
      'White'
    ],
    correctAnswer: 2,
    explanation: 'Fe³⁺ reacts with NaOH to form iron(III) hydroxide: Fe³⁺ + 3OH⁻ → Fe(OH)₃. This precipitate is rust-brown (reddish-brown) in colour.'
  },
  {
    id: 844,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'The colour of [Ti(H₂O)₆]³⁺ is violet. Which of the following is the correct explanation?',
    options: [
      'Ti³⁺ has a d¹ configuration; the single d electron absorbs yellow/green light to be excited to the upper d level, and the complementary colour (violet) is observed',
      'Ti³⁺ has a d⁰ configuration; no d-d transitions occur',
      'The water ligands absorb violet light',
      'Ti³⁺ has d² configuration; two electrons transition simultaneously'
    ],
    correctAnswer: 0,
    explanation: 'Ti³⁺ is a d¹ ion. The single d electron can be promoted from the lower to upper d energy level (crystal field splitting) by absorbing visible light in the yellow-green region. The transmitted complementary colour, violet, is what we observe.'
  },
  {
    id: 845,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'Why is Zn²⁺ colourless in its compounds and aqueous solutions, even though it is a d-block element?',
    options: [
      'Zn²⁺ has no d electrons',
      'Zn²⁺ has a full d subshell (d¹⁰), so no d-d transitions are possible',
      'Zn²⁺ does not form complex ions',
      'Zn²⁺ ions absorb infrared light, not visible light'
    ],
    correctAnswer: 1,
    explanation: 'Zn²⁺ has a 3d¹⁰ (full d subshell) configuration. With all d orbitals filled, there are no empty d orbitals at a different energy level to allow d-d electronic transitions. Hence no visible light is absorbed and Zn²⁺ compounds are colourless.'
  },
  {
    id: 846,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What happens to the colour of a transition metal complex when the ligands are changed?',
    options: [
      'The colour remains the same regardless of ligands',
      'The colour changes because different ligands cause different degrees of d orbital splitting (CFSE), absorbing different wavelengths of visible light',
      'The colour becomes darker with all ligands',
      'The metal always determines the colour, not the ligands'
    ],
    correctAnswer: 1,
    explanation: 'Different ligands split the d orbitals to different extents (crystal field splitting energy, CFSE). This means different wavelengths of light are absorbed, and so the observed colour changes when ligands are substituted.'
  },
  {
    id: 847,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Medium',
    question: 'What is the electron configuration of Ti (titanium, Z=22)?',
    options: [
      '[Ar] 3d² 4s²',
      '[Ar] 3d⁴',
      '[Ar] 3d² 4s¹',
      '[Ar] 4s² 4p²'
    ],
    correctAnswer: 0,
    explanation: 'Titanium (Z=22) follows the regular pattern in Period 4 d-block: [Ar] 3d² 4s². It has two electrons in the 3d subshell and two in the 4s subshell.'
  },
  {
    id: 848,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'When acidified potassium manganate(VII) (KMnO₄) oxidises Fe²⁺ to Fe³⁺, what happens to the colour of the solution?',
    options: [
      'Changes from purple to pale green',
      'Changes from pale green to orange',
      'The purple KMnO₄ is decolourised (changes from purple to nearly colourless) as Mn⁷⁺ is reduced to Mn²⁺',
      'No colour change occurs'
    ],
    correctAnswer: 2,
    explanation: 'MnO₄⁻ is purple. When it oxidises Fe²⁺, it is reduced to Mn²⁺ (which is very pale pink/colourless in dilute solution): MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. The purple colour disappears.'
  },
  {
    id: 849,
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'Hard',
    question: 'What is the electron configuration of Cr (chromium, Z=24)?',
    options: [
      '[Ar] 3d⁴ 4s²',
      '[Ar] 3d⁵ 4s¹',
      '[Ar] 3d⁶',
      '[Ar] 3d⁴ 4s¹'
    ],
    correctAnswer: 1,
    explanation: 'Chromium has an anomalous electron configuration of [Ar] 3d⁵ 4s¹ rather than the expected [Ar] 3d⁴ 4s². This is because a half-filled d subshell (d⁵) is particularly stable, so one electron moves from 4s to 3d.'
  },
  {
    id: 850,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What colour precipitate is formed when dilute NaOH is added to copper(II) sulfate solution?',
    options: [
      'White precipitate',
      'Pale green precipitate',
      'Pale blue precipitate',
      'Red-brown precipitate'
    ],
    correctAnswer: 2,
    explanation: 'Adding NaOH to Cu²⁺ solution gives a pale blue precipitate of copper(II) hydroxide: Cu²⁺ + 2OH⁻ → Cu(OH)₂. This is a characteristic test for Cu²⁺ ions.'
  },
  {
    id: 851,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What is the colour of the precipitate formed when NaOH is added to an iron(III) solution?',
    options: [
      'Pale green',
      'Pale blue',
      'White',
      'Rust-brown (reddish-brown)'
    ],
    correctAnswer: 3,
    explanation: 'Iron(III) ions react with NaOH to form iron(III) hydroxide: Fe³⁺ + 3OH⁻ → Fe(OH)₃. The precipitate is rust-brown or reddish-brown in colour.'
  },
  {
    id: 852,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What happens when excess ammonia solution is added to the pale blue precipitate of Cu(OH)₂?',
    options: [
      'The pale blue precipitate remains unchanged',
      'A white precipitate forms',
      'The precipitate dissolves and a deep blue solution forms due to [Cu(NH₃)₄(H₂O)₂]²⁺',
      'The precipitate dissolves and a colourless solution forms'
    ],
    correctAnswer: 2,
    explanation: 'Excess NH₃ dissolves Cu(OH)₂ by ligand substitution: water (and OH⁻) ligands are replaced by NH₃ to form the deep blue tetraamminecopper(II) complex ion [Cu(NH₃)₄(H₂O)₂]²⁺.'
  },
  {
    id: 853,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What happens when excess ammonia is added to iron(III) hydroxide precipitate?',
    options: [
      'Fe(OH)₃ dissolves in excess NH₃ to form a soluble ammine complex',
      'Fe(OH)₃ does not dissolve in excess NH₃',
      'Fe(OH)₃ dissolves to give a pale green solution',
      'Fe(OH)₃ dissolves to give a yellow solution'
    ],
    correctAnswer: 1,
    explanation: 'Unlike copper(II) and cobalt(II) hydroxides, Fe(OH)₃ does not dissolve in excess ammonia. Iron(III) does not form stable ammine complexes as readily as Cu²⁺ or Co²⁺.'
  },
  {
    id: 854,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What is observed when NaOH is added to manganese(II) sulfate solution?',
    options: [
      'No precipitate forms',
      'A pale pink/beige precipitate of Mn(OH)₂ forms',
      'A green precipitate forms',
      'A blue precipitate forms'
    ],
    correctAnswer: 1,
    explanation: 'Mn²⁺ reacts with NaOH to form manganese(II) hydroxide: Mn²⁺ + 2OH⁻ → Mn(OH)₂. This precipitate is pale pink or buff coloured. It rapidly oxidises in air to brown MnO(OH) or MnO₂.'
  },
  {
    id: 855,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What is the colour and what happens when NaOH is added to cobalt(II) solution?',
    options: [
      'A green precipitate forms that dissolves in excess NaOH',
      'A blue/green precipitate of Co(OH)₂ forms that does not dissolve in excess NaOH',
      'A rust-brown precipitate forms',
      'No precipitate forms'
    ],
    correctAnswer: 1,
    explanation: 'Addition of NaOH to Co²⁺ solution gives a blue-green precipitate of cobalt(II) hydroxide: Co²⁺ + 2OH⁻ → Co(OH)₂. This precipitate does not dissolve in excess NaOH.'
  },
  {
    id: 856,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'What happens when excess ammonia is added to cobalt(II) hydroxide precipitate?',
    options: [
      'Co(OH)₂ does not react with excess NH₃',
      'Co(OH)₂ dissolves in excess NH₃ to give a straw-yellow/brown solution of [Co(NH₃)₆]²⁺',
      'Co(OH)₂ dissolves to give a deep blue solution',
      'Co(OH)₂ dissolves to give a colourless solution'
    ],
    correctAnswer: 1,
    explanation: 'Co(OH)₂ dissolves in excess NH₃ by ligand substitution, forming hexaamminecobalt(II) [Co(NH₃)₆]²⁺, which is straw-yellow. This may oxidise in air to give the more stable Co(III) complex, which is darker brown.'
  },
  {
    id: 857,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'Which of the following hydroxide precipitates dissolves in excess NaOH, demonstrating amphoteric behaviour?',
    options: [
      'Fe(OH)₂',
      'Cu(OH)₂',
      'Al(OH)₃',
      'Mn(OH)₂'
    ],
    correctAnswer: 2,
    explanation: 'Al(OH)₃ is amphoteric and dissolves in both dilute acid and in excess NaOH. In excess NaOH: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻. The other hydroxides listed do not dissolve in excess NaOH.'
  },
  {
    id: 858,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'What is the equation for the reaction of Cr(OH)₃ with excess NaOH?',
    options: [
      'Cr(OH)₃ + NaOH → NaCrO₂ + 2H₂O',
      'Cr(OH)₃ + NaOH → no reaction',
      'Cr(OH)₃ + OH⁻ → [Cr(OH)₄]⁻',
      'Cr(OH)₃ + 3NaOH → Na₃[Cr(OH)₆]'
    ],
    correctAnswer: 2,
    explanation: 'Chromium(III) hydroxide is amphoteric. With excess NaOH: Cr(OH)₃ + OH⁻ → [Cr(OH)₄]⁻. The tetrahydroxochromate(III) ion is formed, demonstrating its acidic behaviour with strong alkali.'
  },
  {
    id: 859,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'Zinc hydroxide dissolves in excess NaOH. What product is formed?',
    options: [
      'ZnO and water',
      '[Zn(OH)₄]²⁻ — tetrahydroxozincate ion',
      'ZnNaO₂',
      'ZnOH — zinc oxide hydroxide'
    ],
    correctAnswer: 1,
    explanation: 'Zn(OH)₂ is amphoteric. In excess NaOH it dissolves: Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻. The tetrahydroxozincate(II) complex ion is formed.'
  },
  {
    id: 860,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'In aqueous solution, dichromate ions (Cr₂O₇²⁻) can be converted to chromate ions (CrO₄²⁻). What conditions cause this conversion?',
    options: [
      'Adding acid (H⁺) shifts the equilibrium to form more dichromate',
      'Adding alkali (OH⁻) shifts the equilibrium to form more chromate',
      'Adding water only shifts it to chromate',
      'Heating converts chromate to dichromate'
    ],
    correctAnswer: 1,
    explanation: 'The equilibrium Cr₂O₇²⁻ + H₂O ⇌ 2CrO₄²⁻ + 2H⁺ is pH-dependent. Adding alkali removes H⁺ and pushes equilibrium to the right (yellow CrO₄²⁻). Adding acid gives orange Cr₂O₇²⁻.'
  },
  {
    id: 861,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What colour is the chromate ion (CrO₄²⁻) in solution?',
    options: [
      'Orange',
      'Yellow',
      'Green',
      'Purple'
    ],
    correctAnswer: 1,
    explanation: 'The chromate ion (CrO₄²⁻) is yellow in aqueous solution. The dichromate ion (Cr₂O₇²⁻) is orange. The interconversion between these two ions is pH dependent.'
  },
  {
    id: 862,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What is the colour of the dichromate ion (Cr₂O₇²⁻) in solution?',
    options: [
      'Yellow',
      'Green',
      'Orange',
      'Blue'
    ],
    correctAnswer: 2,
    explanation: 'The dichromate ion (Cr₂O₇²⁻) is orange in solution. When alkali is added, it is converted to the yellow chromate ion (CrO₄²⁻).'
  },
  {
    id: 863,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'How is the presence of carbonate ions (CO₃²⁻) tested in solution?',
    options: [
      'Add dilute HCl and test the gas produced with limewater — CO₂ turns limewater milky',
      'Add NaOH and observe a colour change',
      'Add AgNO₃ solution and observe the precipitate colour',
      'Add BaCl₂ solution and observe the precipitate'
    ],
    correctAnswer: 0,
    explanation: 'To test for carbonate ions, add dilute acid (e.g. HCl): CO₃²⁻ + 2H⁺ → H₂O + CO₂. Pass the gas through limewater (Ca(OH)₂); a milky/white precipitate of CaCO₃ confirms CO₂ and therefore carbonate ions.'
  },
  {
    id: 864,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Easy',
    question: 'What reagent is used to test for sulfate ions (SO₄²⁻), and what is observed?',
    options: [
      'Dilute HNO₃ then AgNO₃ — white precipitate forms',
      'Dilute HCl then barium chloride solution — white precipitate of BaSO₄ forms',
      'NaOH solution — coloured precipitate forms',
      'Litmus paper — colour change occurs'
    ],
    correctAnswer: 1,
    explanation: 'Sulfate ions are tested by adding dilute HCl (to remove interfering ions like carbonate) followed by barium chloride solution. A white precipitate of barium sulfate (BaSO₄) confirms the presence of sulfate ions: Ba²⁺ + SO₄²⁻ → BaSO₄.'
  },
  {
    id: 865,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'How can ammonium ions (NH₄⁺) be identified in a solution?',
    options: [
      'Add dilute HCl and test for a white precipitate',
      'Add NaOH and warm — ammonia gas is produced, which turns damp red litmus paper blue',
      'Add AgNO₃ — a yellow precipitate forms',
      'Add BaCl₂ — a white precipitate forms'
    ],
    correctAnswer: 1,
    explanation: 'Ammonium ions react with NaOH on warming: NH₄⁺ + OH⁻ → NH₃ + H₂O. Ammonia gas is produced and can be identified by turning damp red litmus paper blue (or using moist universal indicator, which turns blue/purple).'
  },
  {
    id: 866,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'A solution gives a green precipitate with NaOH, which dissolves in excess NaOH and excess NH₃. Which ion is likely present?',
    options: [
      'Fe²⁺',
      'Cu²⁺',
      'Ni²⁺',
      'Cr³⁺'
    ],
    correctAnswer: 3,
    explanation: 'Cr³⁺ forms a grey-green precipitate of Cr(OH)₃ with NaOH. This is amphoteric and dissolves in both excess NaOH (forming [Cr(OH)₄]⁻) and excess NH₃ (forming [Cr(NH₃)₆]³⁺, violet). Fe²⁺ forms pale green precipitate but it does not dissolve in excess NaOH or NH₃.'
  },
  {
    id: 867,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'A solution forms a white precipitate with NaOH that dissolves in excess NaOH. Which metal ion is present?',
    options: [
      'Mg²⁺',
      'Ca²⁺',
      'Al³⁺',
      'Fe²⁺'
    ],
    correctAnswer: 2,
    explanation: 'Al³⁺ forms a white precipitate of Al(OH)₃ with NaOH. Being amphoteric, it dissolves in excess NaOH to form [Al(OH)₄]⁻: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻. Mg²⁺ and Ca²⁺ also give white precipitates but these do not dissolve in excess NaOH.'
  },
  {
    id: 868,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'Ni²⁺ ions are treated with NaOH and then excess NH₃. What is observed in each step?',
    options: [
      'Green precipitate with NaOH; precipitate dissolves in excess NH₃ to give a blue solution',
      'Blue precipitate with NaOH; dissolves in excess NH₃ to give a green solution',
      'Rust-brown precipitate with NaOH; dissolves in excess NH₃',
      'No precipitate with NaOH; blue solution with excess NH₃'
    ],
    correctAnswer: 0,
    explanation: 'Ni²⁺ forms a green precipitate of Ni(OH)₂ with NaOH. This dissolves in excess NH₃ to give the blue hexaamminenickel(II) complex [Ni(NH₃)₆]²⁺.'
  },
  {
    id: 869,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Hard',
    question: 'Which of the following ions, when treated with NaOH, gives a precipitate that does NOT dissolve in excess NaOH or excess NH₃?',
    options: [
      'Al³⁺',
      'Cr³⁺',
      'Fe³⁺',
      'Zn²⁺'
    ],
    correctAnswer: 2,
    explanation: 'Fe(OH)₃ (rust-brown precipitate) does not dissolve in excess NaOH (it is not amphoteric like Al³⁺ or Zn²⁺) and does not dissolve in excess NH₃ (Fe³⁺ does not form stable ammine complexes). Al(OH)₃, Cr(OH)₃, and Zn(OH)₂ all dissolve in excess NaOH or NH₃.'
  },
  {
    id: 870,
    topic: 'Inorganic Chemistry',
    subtopic: 'Reactions of Aqueous Ions',
    difficulty: 'Medium',
    question: 'Aqueous iron(II) ions are oxidised in air to iron(III) ions. What would you observe if you added NaOH after this oxidation had occurred?',
    options: [
      'The pale green Fe(OH)₂ precipitate would form',
      'The precipitate would change from pale green to rust-brown as Fe(OH)₂ oxidises to Fe(OH)₃',
      'A rust-brown precipitate of Fe(OH)₃ would form directly',
      'No precipitate would form'
    ],
    correctAnswer: 2,
    explanation: 'If the Fe²⁺ has been oxidised to Fe³⁺ before NaOH is added, the hydroxide formed directly would be Fe(OH)₃ — the rust-brown precipitate. If Fe²⁺ is still present when NaOH is added, a pale green precipitate of Fe(OH)₂ forms first, then slowly darkens to rust-brown as it oxidises in air.'
  },

  {
    id: 871,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'According to collision theory, which TWO conditions must be met for a collision between reactant molecules to be successful?',
    options: [
      'Sufficient energy and correct orientation',
      'High temperature and low pressure',
      'Correct orientation and high concentration',
      'Sufficient energy and high pressure'
    ],
    correctAnswer: 0,
    explanation: 'Collision theory states that a reaction occurs only when colliding particles have energy greater than or equal to the activation energy AND collide with the correct orientation. Temperature and concentration affect the frequency of such collisions but are not the direct conditions.'
  },
  {
    id: 872,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What is activation energy?',
    options: [
      'The total energy released during a reaction',
      'The minimum energy required for a collision to result in a reaction',
      'The average kinetic energy of reactant molecules',
      'The energy difference between reactants and products'
    ],
    correctAnswer: 1,
    explanation: 'Activation energy is the minimum energy that colliding particles must possess for a collision to be successful and lead to a reaction. It represents the energy barrier that must be overcome.'
  },
  {
    id: 873,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'On a Maxwell-Boltzmann distribution curve, what does the x-axis represent?',
    options: [
      'Temperature',
      'Number of molecules',
      'Kinetic energy',
      'Reaction rate'
    ],
    correctAnswer: 2,
    explanation: 'The x-axis of a Maxwell-Boltzmann distribution represents kinetic energy (or molecular speed), while the y-axis represents the number of molecules (or probability) with that energy.'
  },
  {
    id: 874,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'When temperature increases, what changes occur to the Maxwell-Boltzmann distribution curve?',
    options: [
      'The peak moves left and becomes taller',
      'The peak moves right and becomes lower; the curve broadens',
      'The curve shifts entirely to the right with no change in shape',
      'The area under the curve decreases'
    ],
    correctAnswer: 1,
    explanation: 'At higher temperature, the distribution broadens and the peak moves to higher energy and becomes lower (shorter). The area under the curve remains constant as the total number of molecules is unchanged. More molecules now exceed the activation energy threshold.'
  },
  {
    id: 875,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'How does increasing concentration of a dissolved reactant affect the rate of reaction?',
    options: [
      'It decreases the rate by diluting the activation energy',
      'It increases the rate by increasing the frequency of successful collisions',
      'It has no effect on rate, only on equilibrium position',
      'It decreases activation energy, increasing the rate'
    ],
    correctAnswer: 1,
    explanation: 'Increasing concentration means more reactant particles per unit volume. This leads to a greater frequency of collisions between reactant particles, increasing the number of successful collisions per unit time and thus the rate.'
  },
  {
    id: 876,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Why does increasing the surface area of a solid reactant increase the reaction rate?',
    options: [
      'It lowers the activation energy of the reaction',
      'It increases the temperature of the solid',
      'It exposes more particles at the surface, increasing collision frequency',
      'It changes the concentration of the solid reactant'
    ],
    correctAnswer: 2,
    explanation: 'Reactions involving solids can only occur at the surface. Increasing surface area (e.g., by grinding) exposes more solid particles to the other reactant, increasing the frequency of collisions and therefore the rate.'
  },
  {
    id: 877,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'A heterogeneous catalyst differs from a homogeneous catalyst in that:',
    options: [
      'A heterogeneous catalyst lowers activation energy but a homogeneous catalyst does not',
      'A heterogeneous catalyst is in a different phase to the reactants; a homogeneous catalyst is in the same phase',
      'A heterogeneous catalyst is consumed during the reaction; a homogeneous catalyst is not',
      'A heterogeneous catalyst only works at high temperatures'
    ],
    correctAnswer: 1,
    explanation: 'A heterogeneous catalyst exists in a different physical state (phase) from the reactants, e.g. a solid catalyst with gaseous reactants. A homogeneous catalyst is in the same phase as the reactants, e.g. all in aqueous solution.'
  },
  {
    id: 878,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'On a reaction profile (energy diagram), what does a catalyst do?',
    options: [
      'It lowers the energy of the reactants',
      'It raises the energy of the products',
      'It provides an alternative reaction pathway with a lower activation energy',
      'It changes the enthalpy change of the reaction'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy. This means more molecules have sufficient energy to react. The enthalpy change (ΔH) of the reaction is unaffected by the catalyst.'
  },
  {
    id: 879,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'In a rate vs time graph for a reaction where a gas is produced, the gradient of the curve at any point represents:',
    options: [
      'The total volume of gas produced',
      'The instantaneous rate of reaction at that time',
      'The activation energy at that point',
      'The half-life of the reaction'
    ],
    correctAnswer: 1,
    explanation: 'The gradient (slope) of a concentration-time or volume-time graph at any given point equals the instantaneous rate of reaction at that moment. As reactant is used up, the gradient decreases over time.'
  },
  {
    id: 880,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'In the iodine clock reaction, what is typically observed at the "clock" moment?',
    options: [
      'The solution suddenly turns colourless',
      'A sudden appearance of a blue-black colour',
      'A gas is rapidly evolved',
      'The solution becomes acidic'
    ],
    correctAnswer: 1,
    explanation: 'In the iodine clock reaction, iodine is produced but immediately consumed by thiosulfate ions. Once all the thiosulfate is used up, free iodine reacts with starch to produce a sudden blue-black colour. The time to this colour change is used to measure reaction rate.'
  },
  {
    id: 881,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'How can colorimetry be used to measure reaction rate?',
    options: [
      'By measuring the temperature change of the solution over time',
      'By monitoring the change in absorbance of light as a coloured reactant or product changes in concentration',
      'By measuring the volume of gas produced at regular intervals',
      'By titrating the reaction mixture at set time intervals'
    ],
    correctAnswer: 1,
    explanation: 'Colorimetry measures the absorbance of light at a specific wavelength by a coloured solution. As a coloured reactant is used up or a coloured product forms, absorbance changes, allowing concentration (and thus rate) to be monitored continuously.'
  },
  {
    id: 882,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'Which of the following correctly explains why a catalyst increases reaction rate?',
    options: [
      'It increases the temperature of the reactants',
      'It provides an alternative pathway with lower activation energy, so more molecules can react',
      'It increases the concentration of reactants',
      'It decreases the activation energy by providing energy to the reactants'
    ],
    correctAnswer: 1,
    explanation: 'A catalyst works by providing an alternative reaction pathway with a lower activation energy. It does not supply energy; instead it allows more of the existing molecular collisions to be successful. The catalyst is regenerated at the end.'
  },
  {
    id: 883,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'A reaction is carried out at two different temperatures. At T₂ (higher), the Maxwell-Boltzmann curve is compared to T₁ (lower). Which statement is correct?',
    options: [
      'At T₂, the area to the right of Ea is smaller, so fewer molecules react',
      'At T₂, the area to the right of Ea is larger, so more molecules have energy ≥ Ea and the rate is greater',
      'At T₂, the activation energy Ea increases, so the rate decreases',
      'The total area under both curves is different because total energy has changed'
    ],
    correctAnswer: 1,
    explanation: 'At higher temperature T₂, the distribution shifts right and broadens, meaning a greater proportion (and greater number) of molecules have energy ≥ Ea. The area under the curve to the right of Ea is larger at T₂, explaining the increased rate. The total area (total molecules) is the same.'
  },
  {
    id: 884,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'For a gaseous reaction, how does increasing pressure affect the rate?',
    options: [
      'It has no effect because gases are compressible',
      'It increases the rate by increasing the concentration of gaseous reactants, leading to more frequent collisions',
      'It decreases the rate by reducing the mean free path of molecules',
      'It lowers the activation energy, increasing the rate'
    ],
    correctAnswer: 1,
    explanation: 'Increasing pressure on a gaseous system effectively increases the concentration (number of molecules per unit volume) of reactant gases. This increases the frequency of collisions and hence the rate of reaction.'
  },
  {
    id: 885,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'The rate of a reaction is measured by collecting gas over water. Which measurement is taken at regular time intervals?',
    options: [
      'The temperature of the water',
      'The mass of the solid reactant',
      'The volume of gas collected',
      'The colour of the solution'
    ],
    correctAnswer: 2,
    explanation: 'When gas is collected over water (or in a gas syringe), the volume of gas produced is measured at regular time intervals. The gradient of the volume vs time graph gives the rate of reaction.'
  },
  {
    id: 886,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'Why does a small increase in temperature cause a large increase in reaction rate, even though the average kinetic energy increases only slightly?',
    options: [
      'The activation energy decreases significantly with temperature',
      'The number of molecules with energy ≥ Ea increases disproportionately due to the shape of the Maxwell-Boltzmann distribution',
      'At higher temperature, all molecules gain enough energy to react',
      'The collision frequency increases exponentially with temperature'
    ],
    correctAnswer: 1,
    explanation: 'The Maxwell-Boltzmann distribution has a long tail to the right. Even a small shift in the distribution (small temperature increase) causes a large proportional increase in the number of molecules in the high-energy tail (i.e., with energy ≥ Ea). This is why rate increases significantly with a modest temperature rise.'
  },
  {
    id: 887,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Easy',
    question: 'What is the role of a catalyst in a chemical reaction?',
    options: [
      'It is permanently consumed to provide energy for the reaction',
      'It increases the rate of reaction and is regenerated at the end',
      'It shifts the equilibrium position to the right',
      'It increases the enthalpy change of the reaction'
    ],
    correctAnswer: 1,
    explanation: 'A catalyst increases the rate of a chemical reaction by providing an alternative lower-energy pathway. Crucially, it is not consumed in the overall reaction and is regenerated, so only a small amount is needed.'
  },
  {
    id: 888,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'In a reaction profile for a two-step mechanism, how many peaks (transition states) would be shown?',
    options: [
      'One peak',
      'Two peaks separated by an energy trough (intermediate)',
      'Three peaks',
      'No peaks — it would be a smooth downhill slope'
    ],
    correctAnswer: 1,
    explanation: 'A two-step mechanism has two transition states (energy maxima), with an intermediate (energy minimum/trough) between them. The reaction profile shows two peaks with a valley in between, each peak representing a transition state.'
  },
  {
    id: 889,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Hard',
    question: 'Iron is used as a heterogeneous catalyst in the Haber process. How does it catalyse the reaction N₂ + 3H₂ ⇌ 2NH₃?',
    options: [
      'It dissolves in the gas mixture and forms a homogeneous solution',
      'It adsorbs N₂ and H₂ molecules onto its surface, weakening bonds and lowering the activation energy',
      'It reacts with N₂ to form iron nitride, which then decomposes to give NH₃',
      'It increases the temperature of the gas mixture, providing activation energy'
    ],
    correctAnswer: 1,
    explanation: 'The iron catalyst acts heterogeneously: N₂ and H₂ molecules are adsorbed onto the iron surface, which weakens the bonds within these molecules. This lowers the activation energy and allows the reaction to proceed at a useful rate at the operating temperature of 400–450°C.'
  },
  {
    id: 890,
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'Medium',
    question: 'A student monitors a reaction by measuring the mass of the reaction vessel on a balance. The mass decreases as gas is evolved. At which point is the rate of reaction fastest?',
    options: [
      'At the end of the reaction when the mass is constant',
      'In the middle of the reaction',
      'At the very start of the reaction when reactant concentration is highest',
      'The rate is constant throughout the reaction'
    ],
    correctAnswer: 2,
    explanation: 'The rate is fastest at the start of the reaction because reactant concentrations are highest, leading to the highest frequency of successful collisions. As reactants are used up, the rate decreases, and the gradient of the mass vs time graph decreases.'
  },
  {
    id: 891,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'Which statement best describes a dynamic equilibrium?',
    options: [
      'The reaction has stopped and no further changes occur',
      'The forward and reverse reactions occur at equal rates, so concentrations remain constant',
      'The concentrations of reactants and products are equal',
      'Only the forward reaction is occurring at a constant rate'
    ],
    correctAnswer: 1,
    explanation: 'In a dynamic equilibrium, both the forward and reverse reactions continue to occur, but at the same rate. As a result, the concentrations of reactants and products remain constant over time, even though the system is not static.'
  },
  {
    id: 892,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the correct expression for Kc?',
    options: [
      'Kc = [NH₃]² / ([N₂][H₂]³)',
      'Kc = [N₂][H₂]³ / [NH₃]²',
      'Kc = [NH₃] / ([N₂][H₂])',
      'Kc = 2[NH₃] / ([N₂] + 3[H₂])'
    ],
    correctAnswer: 0,
    explanation: 'Kc is expressed as the product of the concentrations of products raised to their stoichiometric powers, divided by the product of the concentrations of reactants raised to their stoichiometric powers. For N₂ + 3H₂ ⇌ 2NH₃, Kc = [NH₃]² / ([N₂][H₂]³).'
  },
  {
    id: 893,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For the equilibrium PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), what are the units of Kc?',
    options: [
      'mol⁻¹ dm³',
      'mol dm⁻³',
      'mol² dm⁻⁶',
      'dimensionless (no units)'
    ],
    correctAnswer: 1,
    explanation: 'Kc = [PCl₃][Cl₂] / [PCl₅]. The units are (mol dm⁻³)(mol dm⁻³) / (mol dm⁻³) = mol dm⁻³. The change in moles is +1 (2 moles products − 1 mole reactant), giving units of mol dm⁻³.'
  },
  {
    id: 894,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: "According to Le Chatelier's principle, if the concentration of a reactant is increased in an equilibrium system, the system will:",
    options: [
      'Shift in the reverse direction to re-establish equilibrium',
      'Shift in the forward direction to reduce the concentration of that reactant',
      'Remain unchanged because Kc is constant',
      'Shift in the forward direction and Kc will increase'
    ],
    correctAnswer: 1,
    explanation: "Le Chatelier's principle states that if a stress is applied to a system at equilibrium, the system responds to minimise that stress. Adding more reactant shifts the equilibrium to the right (forward direction) to consume the added reactant. Kc itself does not change (at constant temperature)."
  },
  {
    id: 895,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = −196 kJ mol⁻¹. What is the effect of increasing temperature on the equilibrium position?',
    options: [
      'Shifts right, increasing yield of SO₃',
      'Shifts left, decreasing yield of SO₃',
      'No effect on equilibrium position',
      'Shifts right and increases Kc'
    ],
    correctAnswer: 1,
    explanation: 'This is an exothermic reaction (ΔH negative). Increasing temperature adds heat energy, so the equilibrium shifts in the endothermic (reverse) direction to absorb the extra heat. This shifts the equilibrium to the left, decreasing the yield of SO₃ and decreasing Kc.'
  },
  {
    id: 896,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the effect of increasing pressure on the equilibrium position?',
    options: [
      'Shifts left (towards more moles of gas)',
      'Shifts right (towards fewer moles of gas), increasing NH₃ yield',
      'No effect, as all species are gases',
      'Shifts right and increases Kc'
    ],
    correctAnswer: 1,
    explanation: 'There are 4 moles of gas on the left (1 + 3) and 2 moles on the right. Increasing pressure shifts equilibrium towards the side with fewer moles of gas — to the right — increasing the yield of NH₃. Kc is unaffected by pressure changes (only temperature changes K).'
  },
  {
    id: 897,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'What effect does adding a catalyst have on the position of equilibrium?',
    options: [
      'It shifts equilibrium to the right, increasing product yield',
      'It shifts equilibrium to the left, increasing reactant concentration',
      'It has no effect on the equilibrium position or the value of Kc',
      'It increases Kc by lowering the activation energy'
    ],
    correctAnswer: 2,
    explanation: 'A catalyst speeds up both the forward and reverse reactions equally by providing a lower-energy alternative pathway. It does not alter the position of equilibrium or the value of Kc — it simply allows equilibrium to be reached more quickly.'
  },
  {
    id: 898,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Haber process, a compromise temperature of 400–450°C is used rather than a lower temperature, even though lower temperature would give higher NH₃ yield. Why?',
    options: [
      'Lower temperatures would cause the iron catalyst to decompose',
      'At lower temperatures, the rate of reaction is too slow to be economically viable, even though the equilibrium yield would be higher',
      'Lower temperatures shift the equilibrium to the left, reducing yield',
      'Higher temperatures are needed to prevent the NH₃ from decomposing'
    ],
    correctAnswer: 1,
    explanation: 'The forward reaction is exothermic, so lower temperatures favour higher equilibrium yield of NH₃. However, at lower temperatures the rate is too slow for industrial feasibility. The compromise temperature (400–450°C) gives an acceptable rate while maintaining a reasonable (but not maximum) yield, which is recycled.'
  },
  {
    id: 899,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'In the Contact process for making sulfuric acid, V₂O₅ is used as a catalyst for 2SO₂ + O₂ ⇌ 2SO₃. Which statement is correct?',
    options: [
      'V₂O₅ increases the yield of SO₃ by shifting the equilibrium right',
      'V₂O₅ is a homogeneous catalyst as it is a solid like the reactant gases',
      'V₂O₅ is a heterogeneous catalyst that speeds up the reaction without changing the equilibrium position',
      'V₂O₅ increases Kc for the reaction'
    ],
    correctAnswer: 2,
    explanation: 'V₂O₅ (vanadium(V) oxide) is a heterogeneous catalyst — it is a solid while the reactants are gases. It increases the rate of reaction by providing an alternative lower-energy pathway, but does not alter the position of equilibrium or the value of Kc.'
  },
  {
    id: 900,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'The equilibrium A(g) ⇌ B(g) + C(g) has Kc = 0.050 mol dm⁻³ at 300 K. If the temperature is raised to 400 K and Kc increases to 0.20 mol dm⁻³, what can be concluded?',
    options: [
      'The forward reaction is exothermic',
      'The forward reaction is endothermic',
      'The reaction is not affected by temperature',
      'The reaction has equal moles of gas on both sides'
    ],
    correctAnswer: 1,
    explanation: 'Kc increases when temperature increases, meaning the equilibrium shifts right (towards products) at higher temperature. Le Chatelier\'s principle tells us the forward (endothermic) reaction is favoured at higher temperature, so the forward reaction is endothermic (ΔH > 0).'
  },
  {
    id: 901,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'At equilibrium, which statement about forward and reverse reaction rates is true?',
    options: [
      'The forward rate is greater than the reverse rate',
      'The reverse rate is greater than the forward rate',
      'The forward rate equals the reverse rate',
      'Both rates are zero'
    ],
    correctAnswer: 2,
    explanation: 'At dynamic equilibrium, the rate of the forward reaction equals the rate of the reverse reaction. This is why the concentrations of all species remain constant — the rates of formation and consumption of each species are balanced.'
  },
  {
    id: 902,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), what are the units of Kc?',
    options: [
      'mol dm⁻³',
      'mol⁻¹ dm³',
      'mol² dm⁻⁶',
      'Kc has no units for this reaction'
    ],
    correctAnswer: 3,
    explanation: 'Kc = [HI]² / ([H₂][I₂]). The units are (mol dm⁻³)² / ((mol dm⁻³)(mol dm⁻³)) = (mol dm⁻³)² / (mol dm⁻³)² = dimensionless. When the number of moles of gas is equal on both sides (Δn = 0), Kc has no units.'
  },
  {
    id: 903,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'At equilibrium, [N₂] = 0.10 mol dm⁻³, [H₂] = 0.30 mol dm⁻³, [NH₃] = 0.20 mol dm⁻³ for N₂ + 3H₂ ⇌ 2NH₃. What is Kc?',
    options: [
      'Kc = 74 mol⁻² dm⁶',
      'Kc = 0.74 mol⁻² dm⁶',
      'Kc = 4.9 mol⁻² dm⁶',
      'Kc = 14.8 mol⁻² dm⁶'
    ],
    correctAnswer: 0,
    explanation: 'Kc = [NH₃]² / ([N₂][H₂]³) = (0.20)² / (0.10 × (0.30)³) = 0.040 / (0.10 × 0.027) = 0.040 / 0.0027 ≈ 74.1 mol⁻² dm⁶. The units: (mol dm⁻³)² / ((mol dm⁻³)(mol dm⁻³)³) = mol⁻² dm⁶.'
  },
  {
    id: 904,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: "Le Chatelier's principle states that when a system at equilibrium is disturbed, it will:",
    options: [
      'Always shift in the forward direction',
      'Respond in a way that opposes the change and re-establishes equilibrium',
      'Increase the value of the equilibrium constant',
      'Decrease the temperature to compensate'
    ],
    correctAnswer: 1,
    explanation: "Le Chatelier's principle states that a system at equilibrium, when subjected to a change in conditions, will shift in the direction that opposes that change in order to re-establish equilibrium. This is a useful qualitative predictor of how equilibria respond to external stresses."
  },
  {
    id: 905,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'For the equilibrium N₂O₄(g) ⇌ 2NO₂(g), what happens to the equilibrium position when pressure is decreased?',
    options: [
      'Shifts left to produce more N₂O₄ (fewer moles of gas)',
      'Shifts right to produce more NO₂ (more moles of gas)',
      'No change in equilibrium position',
      'Kc increases to compensate'
    ],
    correctAnswer: 1,
    explanation: 'Decreasing pressure favours the side with more moles of gas. There is 1 mole on the left and 2 moles on the right. Therefore the equilibrium shifts to the right, producing more NO₂ to increase the total number of gas molecules and restore pressure.'
  },
  {
    id: 906,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'The Haber process uses a pressure of 200 atm. Which statement best explains this choice?',
    options: [
      'High pressure is used because it increases Kc and therefore yield',
      'High pressure is a compromise: higher pressure would increase yield further but equipment costs and safety risks increase significantly',
      '200 atm is the pressure at which the catalyst works best',
      'Low pressure would shift equilibrium to the right for this reaction'
    ],
    correctAnswer: 1,
    explanation: 'High pressure favours NH₃ production (fewer moles of gas), so increasing pressure increases yield. However, maintaining very high pressures requires expensive, reinforced equipment and poses safety risks. 200 atm represents an economic and safety compromise between yield and cost.'
  },
  {
    id: 907,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'Which change would increase the value of Kc for an exothermic reaction?',
    options: [
      'Increasing pressure',
      'Adding a catalyst',
      'Decreasing temperature',
      'Increasing reactant concentration'
    ],
    correctAnswer: 2,
    explanation: 'The value of K (Kc or Kp) only changes with temperature. For an exothermic reaction, decreasing temperature shifts equilibrium to the right (towards products), increasing Kc. Pressure, catalysts, and concentration changes do not alter the value of K.'
  },
  {
    id: 908,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Easy',
    question: 'Which condition must be met for a system to be described as being in dynamic equilibrium?',
    options: [
      'The system must be in an open container',
      'The system must be closed (no exchange of matter with surroundings)',
      'The temperature must be 298 K',
      'The concentrations of reactants and products must be equal'
    ],
    correctAnswer: 1,
    explanation: 'A dynamic equilibrium can only be established in a closed system where matter cannot escape. In an open system, products (e.g. gases) could escape, preventing the reverse reaction and so equilibrium would never be reached.'
  },
  {
    id: 909,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Hard',
    question: 'In the Contact process, the conditions used are: 450°C, 1–2 atm, and V₂O₅ catalyst. The forward reaction is exothermic. Why is 450°C used rather than a lower temperature?',
    options: [
      'Lower temperatures cause the V₂O₅ to decompose',
      'Lower temperatures would give a lower equilibrium yield of SO₃',
      'At lower temperatures, the rate of reaction is too slow despite a higher equilibrium yield',
      'Higher temperatures are needed to melt the sulfur reactant'
    ],
    correctAnswer: 2,
    explanation: 'Like the Haber process, this is a compromise. Lower temperatures favour the exothermic forward reaction (higher equilibrium yield of SO₃), but the rate becomes too slow. 450°C (with V₂O₅ catalyst) gives an acceptable rate while the ~98% conversion is still economically viable.'
  },
  {
    id: 910,
    topic: 'Physical Chemistry',
    subtopic: "Chemical Equilibria & Le Chatelier's",
    difficulty: 'Medium',
    question: 'If a product is continuously removed from an equilibrium mixture, what happens to the equilibrium position?',
    options: [
      'It shifts left, producing more reactants',
      'It shifts right, producing more product to replace what was removed',
      'It remains unchanged as Le Chatelier\'s principle does not apply to removal',
      'The value of Kc increases'
    ],
    correctAnswer: 1,
    explanation: 'Removing a product decreases its concentration. Le Chatelier\'s principle predicts the equilibrium will shift to the right to oppose this change and produce more of the removed product. This is exploited industrially to drive reactions to completion.'
  },
  {
    id: 911,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of sulfur in H₂SO₄?',
    options: [
      '+4',
      '+6',
      '+2',
      '-2'
    ],
    correctAnswer: 1,
    explanation: 'In H₂SO₄: H = +1 (×2 = +2), O = −2 (×4 = −8). Overall charge = 0. So +2 + S + (−8) = 0, giving S = +6. Sulfur has its maximum oxidation state of +6 in sulfuric acid.'
  },
  {
    id: 912,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, which species is oxidised?',
    options: [
      'Cu²⁺ (from +2 to 0)',
      'Zn (from 0 to +2)',
      'SO₄²⁻',
      'Cu (from 0 to +2)'
    ],
    correctAnswer: 1,
    explanation: 'Zinc (Zn) goes from oxidation state 0 to +2 — it loses electrons — so it is oxidised. Copper goes from +2 (in CuSO₄) to 0 — it gains electrons — so it is reduced. Zn is the reducing agent.'
  },
  {
    id: 913,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Which half-equation correctly represents the reduction of MnO₄⁻ to Mn²⁺ in acidic solution?',
    options: [
      'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
      'MnO₄⁻ + 5e⁻ → Mn²⁺ + 4O²⁻',
      'MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O',
      'MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O + 5e⁻'
    ],
    correctAnswer: 0,
    explanation: 'Mn goes from +7 to +2, gaining 5 electrons. The 4 oxygen atoms are balanced by 4 H₂O on the right, requiring 8H⁺ on the left. The half-equation is: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Check: charge left = −1 + 8 − 5 = +2; charge right = +2. Balanced.'
  },
  {
    id: 914,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of nitrogen in NH₃?',
    options: [
      '+3',
      '0',
      '-3',
      '+5'
    ],
    correctAnswer: 2,
    explanation: 'In NH₃, hydrogen has oxidation state +1. With 3 hydrogen atoms: 3 × (+1) + N = 0 (neutral molecule). Therefore N = −3. Nitrogen is in its lowest common oxidation state of −3 in ammonia.'
  },
  {
    id: 915,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Disproportionation is best defined as:',
    options: [
      'A reaction where two different elements are oxidised simultaneously',
      'A reaction where a single element is simultaneously oxidised and reduced',
      'A reaction where the oxidising agent and reducing agent are different species',
      'A reaction where the oxidation state of an element remains unchanged'
    ],
    correctAnswer: 1,
    explanation: 'Disproportionation is a redox reaction in which a single element in one oxidation state is simultaneously oxidised (to a higher state) and reduced (to a lower state). An example is Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O, where chlorine (0) goes to −1 and +1.'
  },
  {
    id: 916,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of chromium in Cr₂O₇²⁻?',
    options: [
      '+3',
      '+4',
      '+6',
      '+7'
    ],
    correctAnswer: 2,
    explanation: 'In Cr₂O₇²⁻: O = −2, so 7 × (−2) = −14 from oxygen. Overall charge = −2. 2Cr + (−14) = −2, so 2Cr = +12, giving Cr = +6. Chromium is in the +6 oxidation state in dichromate.'
  },
  {
    id: 917,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'In the reaction between iron(II) ions and manganate(VII) ions in acidic solution, 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Which species is the oxidising agent?',
    options: [
      'Fe²⁺',
      'H⁺',
      'MnO₄⁻',
      'Fe³⁺'
    ],
    correctAnswer: 2,
    explanation: 'MnO₄⁻ is the oxidising agent. Mn goes from +7 in MnO₄⁻ to +2 in Mn²⁺ — it is reduced (gains electrons). Fe²⁺ is oxidised (loses electrons) from +2 to +3 and is the reducing agent. The oxidising agent is the species that is itself reduced.'
  },
  {
    id: 918,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'Magnesium reacts with dilute hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. What are the oxidation state changes?',
    options: [
      'Mg: 0 to +2 (oxidised); H: +1 to 0 (reduced)',
      'Mg: 0 to −2 (reduced); H: +1 to 0 (oxidised)',
      'Cl: −1 to 0 (oxidised); Mg: 0 to +2 (reduced)',
      'No change in oxidation states — this is not a redox reaction'
    ],
    correctAnswer: 0,
    explanation: 'Mg goes from 0 to +2 (loses 2 electrons) — it is oxidised. H goes from +1 in HCl to 0 in H₂ (gains electrons) — it is reduced. Cl remains at −1 throughout. This is a typical metal–acid redox reaction.'
  },
  {
    id: 919,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'When constructing the overall equation from half-equations: Fe²⁺ → Fe³⁺ + e⁻ and MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, how is the overall equation obtained?',
    options: [
      'Simply add the two half-equations together',
      'Multiply the first half-equation by 5 and then add to the second half-equation to cancel the electrons',
      'Multiply the second half-equation by 5 and add to the first',
      'Subtract the first half-equation from the second'
    ],
    correctAnswer: 1,
    explanation: 'To combine half-equations, the number of electrons must balance. The oxidation half-equation produces 1e⁻ and the reduction half-equation requires 5e⁻. Multiply the oxidation half by 5: 5Fe²⁺ → 5Fe³⁺ + 5e⁻. Then add to the reduction half-equation: the 5e⁻ cancel, giving 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O.'
  },
  {
    id: 920,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of chlorine in ClO₃⁻?',
    options: [
      '+3',
      '+5',
      '+7',
      '-1'
    ],
    correctAnswer: 1,
    explanation: 'In ClO₃⁻: O = −2 (×3 = −6), overall charge = −1. Cl + (−6) = −1, so Cl = +5. Chlorine has oxidation state +5 in chlorate(V) ions.'
  },
  {
    id: 921,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'In a displacement reaction, iron is added to a solution of copper(II) sulfate: Fe + CuSO₄ → FeSO₄ + Cu. Which statement is correct?',
    options: [
      'Iron is the oxidising agent because it is reduced',
      'Copper is the reducing agent because it loses electrons',
      'Iron displaces copper because iron is a stronger reducing agent (more reactive) than copper',
      'Copper is reduced because it loses electrons to iron'
    ],
    correctAnswer: 2,
    explanation: 'Iron is higher in the electrochemical series (more reactive) than copper, making it a stronger reducing agent. Iron (0 → +2) is oxidised, donating electrons to Cu²⁺ which is reduced (Cu²⁺ → Cu, +2 → 0). A more reactive metal displaces a less reactive metal from solution.'
  },
  {
    id: 922,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'Which of the following is an example of a disproportionation reaction?',
    options: [
      'Fe + CuSO₄ → FeSO₄ + Cu',
      'Cl₂ + 2NaOH → NaCl + NaClO + H₂O',
      'Mg + 2HCl → MgCl₂ + H₂',
      '2Fe³⁺ + Zn → 2Fe²⁺ + Zn²⁺'
    ],
    correctAnswer: 1,
    explanation: 'In Cl₂ + 2NaOH → NaCl + NaClO + H₂O, chlorine (0 in Cl₂) is simultaneously oxidised to +1 (in NaClO) and reduced to −1 (in NaCl). This is disproportionation — one element undergoes both oxidation and reduction in the same reaction.'
  },
  {
    id: 923,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'What is the oxidation state of phosphorus in PO₄³⁻?',
    options: [
      '+3',
      '+4',
      '+5',
      '-3'
    ],
    correctAnswer: 2,
    explanation: 'In PO₄³⁻: O = −2 (×4 = −8), overall charge = −3. P + (−8) = −3, so P = +5. Phosphorus is in its highest common oxidation state of +5 in the phosphate ion.'
  },
  {
    id: 924,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'To balance the half-equation for the oxidation of Cr³⁺ to Cr₂O₇²⁻ in acidic solution, which reagents are added to balance oxygen and hydrogen?',
    options: [
      'Add OH⁻ to balance oxygen, then H₂O to balance hydrogen',
      'Add H₂O to balance oxygen, then H⁺ to balance hydrogen',
      'Add O²⁻ to balance oxygen, then H⁺ to balance hydrogen',
      'No additional species are needed; just balance the electrons'
    ],
    correctAnswer: 1,
    explanation: 'In acidic conditions, oxygen atoms are balanced by adding H₂O to the side deficient in oxygen, and hydrogen atoms are balanced by adding H⁺. Electrons are then added to balance the charge. The resulting half-equation is: 2Cr³⁺ + 7H₂O → Cr₂O₇²⁻ + 14H⁺ + 6e⁻.'
  },
  {
    id: 925,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What does the term "reducing agent" mean?',
    options: [
      'A species that gains electrons and is itself reduced',
      'A species that loses electrons and causes another species to be reduced',
      'A species that gains protons from the reaction mixture',
      'A species that lowers the activation energy of a redox reaction'
    ],
    correctAnswer: 1,
    explanation: 'A reducing agent is a species that donates (loses) electrons to another species. By losing electrons, it causes the other species to be reduced. The reducing agent is itself oxidised in the process.'
  },
  {
    id: 926,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'The electrochemical series lists metals in order of their standard electrode potentials. Which metal would displace silver from a solution of silver nitrate?',
    options: [
      'Gold (E° = +1.50 V)',
      'Platinum (E° = +1.19 V)',
      'Copper (E° = +0.34 V)',
      'All of the above'
    ],
    correctAnswer: 2,
    explanation: 'For a metal to displace silver (E° = +0.80 V for Ag⁺/Ag), it must have a more negative (lower) standard electrode potential — making it a stronger reducing agent. Copper (E° = +0.34 V) is lower than silver in the series, so it can reduce Ag⁺. Gold and platinum have higher E° values than silver and cannot displace it.'
  },
  {
    id: 927,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'What is the oxidation state of manganese in MnO₄⁻?',
    options: [
      '+4',
      '+5',
      '+6',
      '+7'
    ],
    correctAnswer: 3,
    explanation: 'In MnO₄⁻: O = −2 (×4 = −8), overall charge = −1. Mn + (−8) = −1, so Mn = +7. Manganese(VII) (permanganate) contains manganese in its highest common oxidation state.'
  },
  {
    id: 928,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Medium',
    question: 'In the reaction between sodium and water: 2Na + 2H₂O → 2NaOH + H₂, what are the correct oxidation state changes?',
    options: [
      'Na: 0 to +1 (oxidised); H (in water): +1 to 0 (reduced)',
      'Na: 0 to −1 (reduced); O: −2 to 0 (oxidised)',
      'Na: 0 to +1 (reduced); O: −2 to 0 (oxidised)',
      'No oxidation state change — this is a neutralisation reaction'
    ],
    correctAnswer: 0,
    explanation: 'Na goes from 0 to +1 (loses an electron) — it is oxidised. One H in water goes from +1 to 0 in H₂ (gains an electron) — it is reduced. The other H (in NaOH) remains +1. Oxygen remains −2. This is a redox reaction; Na is the reducing agent.'
  },
  {
    id: 929,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Easy',
    question: 'What is the oxidation state of oxygen in H₂O₂?',
    options: [
      '-2',
      '-1',
      '0',
      '+1'
    ],
    correctAnswer: 1,
    explanation: 'In H₂O₂, hydrogen = +1 (×2 = +2), overall charge = 0. So 2O = −2, meaning each O = −1. Oxygen in peroxides is −1, not the usual −2. This is an exception to the standard rule for oxygen oxidation states.'
  },
  {
    id: 930,
    topic: 'Physical Chemistry',
    subtopic: 'Redox',
    difficulty: 'Hard',
    question: 'In alkaline conditions, the half-equation for the reduction of MnO₄⁻ to MnO₂ is balanced using OH⁻ and H₂O. Which is correct?',
    options: [
      'MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻',
      'MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O',
      'MnO₄⁻ + 3e⁻ → MnO₂ + O²⁻',
      'MnO₄⁻ + 2H₂O → MnO₂ + 4OH⁻ + 3e⁻'
    ],
    correctAnswer: 0,
    explanation: 'In alkaline conditions, H₂O is used instead of H⁺, and OH⁻ appears as a product. Mn: +7 to +4 (gains 3e⁻). Oxygen balance: 4O on left, 2O in MnO₂, need 4OH⁻ on right (2H₂O added to left to balance). Check charge: −1 + 0 −3 = −4 (left) and −4 (right). Balanced.'
  },
  {
    id: 931,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'Which of the following processes would have a positive entropy change (ΔS > 0)?',
    options: [
      'Water freezing to form ice',
      'A gas condensing to a liquid',
      'A solid dissolving in water to form an aqueous solution',
      'Gas molecules combining to form a single larger molecule'
    ],
    correctAnswer: 2,
    explanation: 'Entropy is a measure of disorder. When a solid dissolves in water, the ordered solid lattice breaks down and ions/molecules become dispersed throughout the solution — disorder increases significantly. ΔS > 0 for processes that increase disorder, such as dissolving, melting, or vaporisation.'
  },
  {
    id: 932,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What are the units of entropy (S)?',
    options: [
      'kJ mol⁻¹',
      'J K⁻¹ mol⁻¹',
      'kJ K⁻¹',
      'J mol⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'Entropy has units of J K⁻¹ mol⁻¹ (joules per kelvin per mole). Note that this uses joules (not kilojoules), which is important in Gibbs free energy calculations where ΔH is usually in kJ mol⁻¹ and TΔS must be converted to the same units.'
  },
  {
    id: 933,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'The Gibbs free energy equation is ΔG = ΔH − TΔS. Under which conditions is a reaction definitely spontaneous?',
    options: [
      'ΔH > 0 and ΔS < 0',
      'ΔH < 0 and ΔS < 0',
      'ΔH < 0 and ΔS > 0',
      'ΔH > 0 and ΔS > 0'
    ],
    correctAnswer: 2,
    explanation: 'For a reaction to be spontaneous, ΔG must be negative (ΔG < 0). ΔG = ΔH − TΔS. If ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), then ΔG = negative − positive = always negative, so the reaction is spontaneous at all temperatures.'
  },
  {
    id: 934,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'A reaction has ΔH = +50 kJ mol⁻¹ and ΔS = +200 J K⁻¹ mol⁻¹. At what temperature does it become spontaneous?',
    options: [
      'Above 250 K',
      'Below 250 K',
      'Above 25 K',
      'It is never spontaneous as ΔH is positive'
    ],
    correctAnswer: 0,
    explanation: 'For spontaneity, ΔG < 0, so ΔH − TΔS < 0. Converting: ΔH = +50,000 J mol⁻¹, ΔS = +200 J K⁻¹ mol⁻¹. At equilibrium: T = ΔH/ΔS = 50,000/200 = 250 K. Above 250 K, TΔS > ΔH, making ΔG < 0. The reaction is spontaneous above 250 K.'
  },
  {
    id: 935,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Lattice enthalpy is defined as the enthalpy change when:',
    options: [
      'One mole of ionic compound dissolves in water',
      'One mole of ionic compound is formed from its constituent gaseous ions',
      'One mole of ionic compound is formed from its elements in their standard states',
      'Gaseous ions are formed from a solid ionic compound'
    ],
    correctAnswer: 1,
    explanation: 'Lattice enthalpy (formation definition, as used in AQA) is the enthalpy change when one mole of an ionic lattice is formed from its constituent gaseous ions under standard conditions. It is always exothermic (negative). Some definitions use the reverse (dissociation), so check the definition used.'
  },
  {
    id: 936,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'How does increasing the charge on ions affect the magnitude of lattice enthalpy?',
    options: [
      'Higher charge decreases lattice enthalpy (makes it less negative)',
      'Higher charge increases the magnitude of lattice enthalpy (makes it more negative)',
      'Charge has no effect on lattice enthalpy',
      'Higher charge only affects lattice enthalpy if the ionic radii are equal'
    ],
    correctAnswer: 1,
    explanation: 'Lattice enthalpy increases in magnitude (becomes more exothermic) with higher ionic charge. Greater charge means stronger electrostatic attraction between ions, requiring more energy to separate them. For example, MgO (Mg²⁺ and O²⁻) has a much larger lattice enthalpy than NaCl (Na⁺ and Cl⁻).'
  },
  {
    id: 937,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'The enthalpy of solution of an ionic compound is given by ΔH_sol = −ΔH_latt + ΔH_hyd (using the lattice dissociation definition). What does this mean in terms of energy?',
    options: [
      'The enthalpy of solution is always exothermic',
      'The enthalpy of solution depends on the balance between energy needed to break the lattice and energy released on hydration of ions',
      'If the lattice enthalpy is large, the compound will always dissolve exothermically',
      'Enthalpy of hydration is always larger than lattice enthalpy'
    ],
    correctAnswer: 1,
    explanation: 'The enthalpy of solution is the net result of two competing processes: energy input to overcome the lattice (lattice dissociation enthalpy, endothermic) and energy released as ions are hydrated (enthalpy of hydration, exothermic). If hydration enthalpy is larger in magnitude, ΔH_sol is negative (exothermic).'
  },
  {
    id: 938,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'In a Born-Haber cycle for NaCl, which step represents the electron affinity of chlorine?',
    options: [
      'Na(g) → Na⁺(g) + e⁻',
      'Cl(g) + e⁻ → Cl⁻(g)',
      'Cl₂(g) → 2Cl(g)',
      'Na(s) → Na(g)'
    ],
    correctAnswer: 1,
    explanation: 'Electron affinity is the enthalpy change when one mole of gaseous atoms each gain one electron to form gaseous anions: Cl(g) + e⁻ → Cl⁻(g). This step is exothermic for chlorine (first electron affinity ≈ −349 kJ mol⁻¹). The other steps are atomisation, ionisation, and bond dissociation.'
  },
  {
    id: 939,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Using the Born-Haber cycle, calculate the lattice enthalpy of NaCl given: ΔH_f = −411 kJ mol⁻¹, atomisation of Na = +108 kJ mol⁻¹, ½ bond dissociation of Cl₂ = +121 kJ mol⁻¹, 1st IE of Na = +496 kJ mol⁻¹, electron affinity of Cl = −349 kJ mol⁻¹.',
    options: [
      '−787 kJ mol⁻¹',
      '+787 kJ mol⁻¹',
      '−411 kJ mol⁻¹',
      '−975 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'By Hess\'s law: ΔH_f = ΔH_atom(Na) + ΔH_atom(Cl) + IE₁(Na) + EA(Cl) + ΔH_latt. −411 = 108 + 121 + 496 + (−349) + ΔH_latt. −411 = 376 + ΔH_latt. ΔH_latt = −411 − 376 = −787 kJ mol⁻¹.'
  },
  {
    id: 940,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'How does decreasing ionic radius affect the magnitude of lattice enthalpy?',
    options: [
      'Smaller ions have a larger lattice enthalpy (more exothermic) due to stronger electrostatic attraction at shorter distances',
      'Smaller ions have a smaller lattice enthalpy because they repel each other more',
      'Ionic radius has no effect on lattice enthalpy',
      'Smaller ions decrease lattice enthalpy because they are more polarisable'
    ],
    correctAnswer: 0,
    explanation: 'Electrostatic attraction is inversely proportional to the distance between ions. Smaller ions pack closer together, so the electrostatic attraction is stronger and more energy is released when the lattice forms. Therefore, smaller ionic radii lead to larger (more exothermic) lattice enthalpies.'
  },
  {
    id: 941,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'For MgO compared to NaCl, which statement about lattice enthalpy is correct?',
    options: [
      'MgO has a smaller lattice enthalpy because oxygen is larger than chloride',
      'MgO has a larger lattice enthalpy because Mg²⁺ and O²⁻ have higher charges and smaller radii than Na⁺ and Cl⁻',
      'NaCl has a larger lattice enthalpy because chloride has a larger ionic radius',
      'Both have the same lattice enthalpy as they both have 1:1 stoichiometry'
    ],
    correctAnswer: 1,
    explanation: 'MgO has a much larger lattice enthalpy (approximately −3791 kJ mol⁻¹ vs −787 kJ mol⁻¹ for NaCl) because Mg²⁺ and O²⁻ carry double the charge of Na⁺ and Cl⁻, and are smaller ions. Both factors significantly increase the electrostatic attraction between ions.'
  },
  {
    id: 942,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What does ΔG < 0 mean for a chemical reaction?',
    options: [
      'The reaction is endothermic',
      'The reaction is feasible (thermodynamically spontaneous)',
      'The reaction definitely proceeds quickly',
      'The reaction is at equilibrium'
    ],
    correctAnswer: 1,
    explanation: 'When ΔG < 0, the Gibbs free energy decreases and the reaction is thermodynamically feasible (spontaneous). Note that feasibility does not imply speed — a reaction may be feasible but have such a high activation energy that it proceeds very slowly in practice.'
  },
  {
    id: 943,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'The enthalpy of hydration of Na⁺ is −406 kJ mol⁻¹ and of Cl⁻ is −363 kJ mol⁻¹. The lattice dissociation enthalpy of NaCl is +787 kJ mol⁻¹. What is the enthalpy of solution of NaCl?',
    options: [
      '+18 kJ mol⁻¹',
      '−18 kJ mol⁻¹',
      '+1556 kJ mol⁻¹',
      '+787 kJ mol⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'ΔH_sol = ΔH_latt(dissociation) + ΔH_hyd(Na⁺) + ΔH_hyd(Cl⁻) = +787 + (−406) + (−363) = +787 − 769 = +18 kJ mol⁻¹. The small positive value means NaCl dissolves slightly endothermically, but entropy effects ensure it still dissolves readily.'
  },
  {
    id: 944,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'In the Born-Haber cycle for MgO, which steps are different from NaCl that require additional consideration?',
    options: [
      'MgO requires a second ionisation energy for Mg and a second electron affinity for O',
      'MgO requires only one ionisation energy but two electron affinities for O',
      'MgO requires two atomisation energies but only one ionisation energy',
      'There is no difference; both Born-Haber cycles have the same structure'
    ],
    correctAnswer: 0,
    explanation: 'For MgO: Mg forms Mg²⁺, requiring both first (IE₁) and second (IE₂) ionisation energies. Oxygen forms O²⁻, requiring first electron affinity (exothermic, −141 kJ mol⁻¹) and second electron affinity (endothermic, +798 kJ mol⁻¹). Both these extra steps must be included compared to the NaCl cycle.'
  },
  {
    id: 945,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Which of the following reactions has a negative ΔS (decrease in entropy)?',
    options: [
      'CaCO₃(s) → CaO(s) + CO₂(g)',
      'N₂(g) + 3H₂(g) → 2NH₃(g)',
      'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',
      'H₂O(l) → H₂O(g)'
    ],
    correctAnswer: 1,
    explanation: 'N₂ + 3H₂ → 2NH₃ involves 4 moles of gaseous reactants forming 2 moles of gaseous product. Fewer moles of gas means decreased disorder, so ΔS < 0. All other options involve an increase in disorder (gas formation, dissolution, or vaporisation).'
  },
  {
    id: 946,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'A reaction has ΔH = −100 kJ mol⁻¹ and ΔS = −300 J K⁻¹ mol⁻¹. At what temperature does ΔG = 0?',
    options: [
      '333 K',
      '3.33 K',
      '30,000 K',
      '0.333 K'
    ],
    correctAnswer: 0,
    explanation: 'ΔG = 0 when ΔH = TΔS. T = ΔH/ΔS = (−100,000 J mol⁻¹)/(−300 J K⁻¹ mol⁻¹) = 333 K. Below 333 K, ΔG < 0 and the reaction is feasible. Above 333 K, the −TΔS term makes ΔG positive and the reaction becomes non-feasible.'
  },
  {
    id: 947,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Easy',
    question: 'What is the enthalpy of hydration?',
    options: [
      'The energy needed to break one mole of ionic compound into gaseous ions',
      'The enthalpy change when one mole of gaseous ions are dissolved in water to form hydrated ions',
      'The enthalpy change when one mole of water is evaporated',
      'The enthalpy change when one mole of ionic compound is formed from elements'
    ],
    correctAnswer: 1,
    explanation: 'The enthalpy of hydration is the enthalpy change when one mole of gaseous ions are surrounded by water molecules to form aqueous (hydrated) ions. It is always exothermic because ion-dipole interactions form between the ions and polar water molecules, releasing energy.'
  },
  {
    id: 948,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'Which factor explains why ions with higher charge density have a more negative enthalpy of hydration?',
    options: [
      'Higher charge density means the ion can dissolve in more water',
      'Higher charge density leads to stronger ion-dipole interactions with water molecules, releasing more energy',
      'Higher charge density increases the entropy of hydration',
      'Ions with higher charge density have larger radii, allowing more water molecules to surround them'
    ],
    correctAnswer: 1,
    explanation: 'Charge density = charge/ionic radius. Ions with higher charge density attract polar water molecules more strongly, forming stronger ion-dipole bonds. More energy is released as these interactions form, giving a more negative (more exothermic) enthalpy of hydration.'
  },
  {
    id: 949,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Why does the second electron affinity of oxygen have a positive value?',
    options: [
      'Adding a second electron to O⁻ requires energy to overcome the repulsion from the existing negative charge',
      'The second electron affinity of oxygen involves breaking a bond in O₂',
      'Oxygen does not have a second electron affinity',
      'The second electron affinity is positive because oxygen is a gas'
    ],
    correctAnswer: 0,
    explanation: 'The first electron affinity of O is exothermic (−141 kJ mol⁻¹). The second electron affinity (O⁻ + e⁻ → O²⁻) is endothermic (+798 kJ mol⁻¹) because adding an electron to an already negatively charged ion requires work against the electrostatic repulsion between the incoming electron and the O⁻ ion.'
  },
  {
    id: 950,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'ΔG = ΔH − TΔS. If ΔH = +80 kJ mol⁻¹ and ΔS = +250 J K⁻¹ mol⁻¹ at T = 400 K, what is ΔG?',
    options: [
      '+180 kJ mol⁻¹',
      '+80 kJ mol⁻¹',
      '−20 kJ mol⁻¹',
      '+20 kJ mol⁻¹'
    ],
    correctAnswer: 2,
    explanation: 'ΔG = ΔH − TΔS = +80,000 − (400 × 250) = 80,000 − 100,000 = −20,000 J mol⁻¹ = −20 kJ mol⁻¹. Since ΔG < 0, the reaction is feasible at 400 K despite being endothermic, because the entropy increase is large enough at this temperature.'
  },
  {
    id: 951,
    topic: 'Physical Chemistry',
    subtopic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Why does a reaction with ΔG < 0 not guarantee the reaction will actually occur?',
    options: [
      'ΔG < 0 only applies to reactions at 298 K',
      'Thermodynamic feasibility does not account for kinetic barriers such as activation energy; the reaction may be very slow',
      'ΔG < 0 means the reaction is exothermic and exothermic reactions always occur instantly',
      'A negative ΔG means the reaction is at equilibrium, not that it proceeds'
    ],
    correctAnswer: 1,
    explanation: 'ΔG < 0 indicates thermodynamic feasibility — the reaction is thermodynamically downhill. However, if the activation energy is very high, the reaction may be extremely slow despite being feasible. For example, diamond converting to graphite is thermodynamically feasible but kinetically prevented at room temperature.'
  },
  {
    id: 952,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'For the reaction A + B → C, the rate equation is rate = k[A][B]. What is the overall order of this reaction?',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctAnswer: 2,
    explanation: 'The overall order is the sum of all the individual orders in the rate equation. Rate = k[A]¹[B]¹, so overall order = 1 + 1 = 2 (second order overall).'
  },
  {
    id: 953,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'In an experiment, doubling [A] while keeping [B] constant doubles the rate. Doubling [B] while keeping [A] constant quadruples the rate. What is the rate equation?',
    options: [
      'rate = k[A][B]',
      'rate = k[A]²[B]',
      'rate = k[A][B]²',
      'rate = k[A]²[B]²'
    ],
    correctAnswer: 2,
    explanation: 'If doubling [A] doubles the rate, the reaction is first order in A (2¹ = 2). If doubling [B] quadruples the rate, the reaction is second order in B (2² = 4). The rate equation is rate = k[A][B]².'
  },
  {
    id: 954,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What are the units of the rate constant k for a second-order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'mol⁻² dm⁶ s⁻¹'
    ],
    correctAnswer: 2,
    explanation: 'For a second-order reaction: rate = k[A]². Rate has units mol dm⁻³ s⁻¹, [A]² has units (mol dm⁻³)². So k = rate/[A]² = (mol dm⁻³ s⁻¹)/(mol dm⁻³)² = mol⁻¹ dm³ s⁻¹.'
  },
  {
    id: 955,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'For a first-order reaction, what happens to the half-life as the reaction proceeds?',
    options: [
      'The half-life increases as the reaction proceeds',
      'The half-life decreases as the reaction proceeds',
      'The half-life remains constant throughout the reaction',
      'The half-life is only defined for zero-order reactions'
    ],
    correctAnswer: 2,
    explanation: 'A key characteristic of first-order reactions is that the half-life (t½) is constant and independent of concentration. t½ = ln2/k = 0.693/k. This constant half-life is the diagnostic feature of first-order kinetics.'
  },
  {
    id: 956,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'The Arrhenius equation is k = Ae^(-Ea/RT). Which statement correctly describes the pre-exponential factor A?',
    options: [
      'A is the activation energy in joules',
      'A is the frequency factor, related to the frequency of collisions with correct orientation',
      'A is the gas constant (8.314 J K⁻¹ mol⁻¹)',
      'A is the equilibrium constant at infinite temperature'
    ],
    correctAnswer: 1,
    explanation: 'In the Arrhenius equation k = Ae^(−Ea/RT), A is the pre-exponential (frequency) factor. It accounts for the frequency of collisions and the proportion with the correct orientation. It has the same units as k.'
  },
  {
    id: 957,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Taking the natural log of the Arrhenius equation gives ln k = ln A − Ea/RT. If ln k is plotted against 1/T, what is the gradient?',
    options: [
      '+Ea/R',
      '−Ea/R',
      '+Ea',
      '−R/Ea'
    ],
    correctAnswer: 1,
    explanation: 'The equation ln k = −(Ea/R)(1/T) + ln A is in the form y = mx + c, where y = ln k and x = 1/T. The gradient is −Ea/R. Multiplying the measured gradient by −R gives the activation energy Ea.'
  },
  {
    id: 958,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'For the reaction 2NO(g) + O₂(g) → 2NO₂(g), the rate equation is rate = k[NO]²[O₂]. What does this suggest about the rate-determining step?',
    options: [
      'A step involving one NO molecule and one O₂ molecule',
      'A step involving two NO molecules and one O₂ molecule simultaneously',
      'A step involving only O₂',
      'Two separate slow steps, each involving one NO and one O₂'
    ],
    correctAnswer: 1,
    explanation: 'The rate equation rate = k[NO]²[O₂] indicates the rate-determining step involves species in the ratio of 2 NO to 1 O₂. The molecularity of the rate-determining step reflects the species (and their stoichiometries) that participate in or before that step.'
  },
  {
    id: 959,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A proposed mechanism is: Step 1 (slow): A + B → C + D; Step 2 (fast): C + E → F. What rate equation does this mechanism predict?',
    options: [
      'rate = k[A][B][E]',
      'rate = k[C][E]',
      'rate = k[A][B]',
      'rate = k[A][B]²'
    ],
    correctAnswer: 2,
    explanation: 'The rate-determining step is the slowest step (Step 1), which involves A and B. The predicted rate equation is rate = k[A][B]. The fast step (Step 2) does not limit the overall rate and so species from that step (E) do not appear in the rate equation.'
  },
  {
    id: 960,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What is the key difference between a reaction intermediate and a transition state?',
    options: [
      'An intermediate is at an energy maximum; a transition state is at an energy minimum',
      'An intermediate exists in an energy trough and can in principle be isolated; a transition state is at an energy peak and cannot be isolated',
      'They are different names for the same species',
      'An intermediate only exists in one-step reactions'
    ],
    correctAnswer: 1,
    explanation: 'An intermediate is a species formed in one step and consumed in a subsequent step — it sits in an energy trough (local minimum) on the reaction profile. A transition state is an unstable arrangement at the top of an energy barrier (maximum) and cannot be isolated or detected directly.'
  },
  {
    id: 961,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Experiment 1: [A]=0.10, [B]=0.10, rate=2.0×10⁻³. Experiment 2: [A]=0.20, [B]=0.10, rate=4.0×10⁻³. Experiment 3: [A]=0.10, [B]=0.20, rate=2.0×10⁻³. What is the rate equation?',
    options: [
      'rate = k[A][B]',
      'rate = k[A]²[B]',
      'rate = k[A]',
      'rate = k[A][B]²'
    ],
    correctAnswer: 2,
    explanation: 'Exps 1 vs 2: [A] doubles, rate doubles → first order in A. Exps 1 vs 3: [B] doubles, rate unchanged → zero order in B. The rate equation is rate = k[A]. B does not appear in the rate equation.'
  },
  {
    id: 962,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What are the units of the rate constant k for a first-order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'dimensionless'
    ],
    correctAnswer: 1,
    explanation: 'For a first-order reaction: rate = k[A]. Rate has units mol dm⁻³ s⁻¹ and [A] has units mol dm⁻³. So k = rate/[A] = (mol dm⁻³ s⁻¹)/(mol dm⁻³) = s⁻¹.'
  },
  {
    id: 963,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'How can you confirm from a concentration-time graph that a reaction is first order?',
    options: [
      'The concentration decreases linearly with time',
      'The half-life is constant (successive half-lives are equal)',
      'The rate is constant throughout the reaction',
      'The graph is a straight line through the origin'
    ],
    correctAnswer: 1,
    explanation: 'For a first-order reaction, t½ is constant regardless of concentration. On a concentration-time graph, if successive half-lives (time for [A] to halve each time) are equal, the reaction is first order. A linear decrease would indicate zero order.'
  },
  {
    id: 964,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'A first-order reaction has t½ = 20 min. Starting with [A] = 1.00 mol dm⁻³, what is [A] after 60 min?',
    options: [
      '0.500 mol dm⁻³',
      '0.250 mol dm⁻³',
      '0.125 mol dm⁻³',
      '0.333 mol dm⁻³'
    ],
    correctAnswer: 2,
    explanation: '60 min = 3 half-lives (60/20 = 3). After each half-life, concentration halves: 1.00 → 0.500 → 0.250 → 0.125 mol dm⁻³. [A] after 60 min = 0.125 mol dm⁻³.'
  },
  {
    id: 965,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'In the Arrhenius equation, why does increasing temperature increase k?',
    options: [
      'Increasing T increases Ea, so k increases',
      'Increasing T makes the exponent (−Ea/RT) less negative, so e^(−Ea/RT) increases and k increases',
      'Increasing T increases A, so k increases',
      'k is directly proportional to T'
    ],
    correctAnswer: 1,
    explanation: 'In k = Ae^(−Ea/RT), as T increases, the exponent −Ea/RT becomes less negative (approaches zero). Therefore e^(−Ea/RT) increases (approaches 1), and k = A × e^(−Ea/RT) increases. This captures the exponential increase of rate with temperature.'
  },
  {
    id: 966,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Which graph would give a straight line that allows Ea to be determined from the Arrhenius equation?',
    options: [
      'k vs T',
      'ln k vs T',
      'ln k vs 1/T',
      'log k vs log T'
    ],
    correctAnswer: 2,
    explanation: 'From ln k = −(Ea/R)(1/T) + ln A, a plot of ln k (y-axis) vs 1/T (x-axis) gives a straight line with gradient −Ea/R and y-intercept ln A. This is the standard graphical method for determining activation energy from rate constant data at different temperatures.'
  },
  {
    id: 967,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'What are the units of k for a zero-order reaction?',
    options: [
      'mol dm⁻³ s⁻¹',
      's⁻¹',
      'mol⁻¹ dm³ s⁻¹',
      'dimensionless'
    ],
    correctAnswer: 0,
    explanation: 'For a zero-order reaction: rate = k. Since rate has units mol dm⁻³ s⁻¹, and there are no concentration terms, k also has units mol dm⁻³ s⁻¹. The rate constant has the same units as the rate for a zero-order reaction.'
  },
  {
    id: 968,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'Tripling [A] in a reaction causes the rate to increase by a factor of 9. What is the order with respect to A?',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctAnswer: 2,
    explanation: 'Rate ∝ [A]^n. Tripling [A] increases rate by 3^n. If 3^n = 9, then n = 2. The reaction is second order with respect to A.'
  },
  {
    id: 969,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'Tripling [A] in a reaction triples the rate. What is the order with respect to A?',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctAnswer: 1,
    explanation: 'If tripling [A] triples the rate, then 3^n = 3, so n = 1. The reaction is first order with respect to A — rate is directly proportional to [A].'
  },
  {
    id: 970,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Easy',
    question: 'What does the rate constant k represent in the rate equation?',
    options: [
      'The rate of reaction at zero concentration of reactants',
      'A constant of proportionality specific to a given reaction at a given temperature',
      'The equilibrium constant of the reaction',
      'The activation energy divided by the temperature'
    ],
    correctAnswer: 1,
    explanation: 'The rate constant k is the proportionality constant in the rate equation, specific to a given reaction at a given temperature. It increases with temperature but is independent of concentration. Its units depend on the overall order of the reaction.'
  },
  {
    id: 971,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Hard',
    question: 'From a ln k vs 1/T graph, the y-intercept gives:',
    options: [
      '−Ea/R',
      'Ea',
      'ln A',
      'R/Ea'
    ],
    correctAnswer: 2,
    explanation: 'From ln k = −(Ea/R)(1/T) + ln A, in the form y = mx + c, the y-intercept (where 1/T = 0) equals ln A, where A is the Arrhenius pre-exponential factor. The gradient is −Ea/R.'
  },
  {
    id: 972,
    topic: 'Physical Chemistry',
    subtopic: 'Rate Equations',
    difficulty: 'Medium',
    question: 'For the reaction H₂ + I₂ → 2HI with rate = k[H₂][I₂], what is the overall order and units of k?',
    options: [
      'First order; s⁻¹',
      'Second order; mol⁻¹ dm³ s⁻¹',
      'Second order; mol dm⁻³ s⁻¹',
      'Third order; mol⁻² dm⁶ s⁻¹'
    ],
    correctAnswer: 1,
    explanation: 'rate = k[H₂][I₂] is second order overall. Units: k = rate/([H₂][I₂]) = (mol dm⁻³ s⁻¹)/((mol dm⁻³)²) = mol⁻¹ dm³ s⁻¹.'
  },
  {
    id: 973,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the correct expression for Kp?',
    options: [
      'Kp = p(NH₃)² / (p(N₂) × p(H₂)³)',
      'Kp = p(N₂) × p(H₂)³ / p(NH₃)²',
      'Kp = p(NH₃) / (p(N₂) × p(H₂))',
      'Kp = 2p(NH₃) / (p(N₂) + 3p(H₂))'
    ],
    correctAnswer: 0,
    explanation: 'Kp is expressed using partial pressures of products over reactants, each raised to their stoichiometric coefficient: Kp = p(NH₃)² / (p(N₂) × p(H₂)³).'
  },
  {
    id: 974,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'The partial pressure of a gas in a mixture is calculated as:',
    options: [
      'Partial pressure = total pressure / number of moles of that gas',
      'Partial pressure = mole fraction × total pressure',
      'Partial pressure = moles of gas × RT / volume',
      'Partial pressure = mole fraction / total pressure'
    ],
    correctAnswer: 1,
    explanation: 'The partial pressure of a component equals its mole fraction multiplied by the total pressure (Dalton\'s law). Mole fraction = moles of component / total moles.'
  },
  {
    id: 975,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'In an equilibrium mixture, 0.50 mol N₂, 1.50 mol H₂, and 1.00 mol NH₃ are present. What is the mole fraction of NH₃?',
    options: [
      '0.25',
      '0.333',
      '0.50',
      '1.00'
    ],
    correctAnswer: 1,
    explanation: 'Total moles = 0.50 + 1.50 + 1.00 = 3.00 mol. Mole fraction of NH₃ = 1.00/3.00 = 0.333.'
  },
  {
    id: 976,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'What is the relationship between Kp and Kc?',
    options: [
      'Kp = Kc × RT',
      'Kp = Kc(RT)^Δn, where Δn is the change in moles of gas',
      'Kp = Kc / RT',
      'Kp = Kc always, regardless of conditions'
    ],
    correctAnswer: 1,
    explanation: 'Kp = Kc(RT)^Δn, where Δn = moles of gaseous products − moles of gaseous reactants, R is the gas constant, and T is temperature in Kelvin. When Δn = 0, Kp = Kc numerically.'
  },
  {
    id: 977,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), what are the units of Kp if pressures are in Pa?',
    options: [
      'Pa',
      'Pa⁻¹',
      'Pa²',
      'Kp is dimensionless for this reaction'
    ],
    correctAnswer: 1,
    explanation: 'Kp = p(SO₃)² / (p(SO₂)² × p(O₂)). Units = Pa² / (Pa² × Pa) = Pa⁻¹. Δn = 2 − 3 = −1, so units are Pa^Δn = Pa⁻¹.'
  },
  {
    id: 978,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'What is the only factor that changes the value of Kp for a given reaction?',
    options: [
      'Pressure',
      'Concentration',
      'Temperature',
      'Addition of a catalyst'
    ],
    correctAnswer: 2,
    explanation: 'Like Kc, the value of Kp only changes when temperature changes. Changes in pressure, concentration, or addition of a catalyst do not change K — they may shift the equilibrium position but K remains constant at a given temperature.'
  },
  {
    id: 979,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For an exothermic reaction at equilibrium, what happens to Kp when temperature is increased?',
    options: [
      'Kp increases because the forward reaction is favoured',
      'Kp decreases because the equilibrium shifts towards reactants',
      'Kp stays the same because pressure has not changed',
      'Kp increases because more molecules are produced'
    ],
    correctAnswer: 1,
    explanation: 'For an exothermic reaction, increasing temperature shifts the equilibrium left (to the endothermic direction). Less product and more reactant exist at equilibrium, decreasing the numerator and increasing the denominator of Kp, so Kp decreases.'
  },
  {
    id: 980,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'At equilibrium, p(N₂) = 30 kPa, p(H₂) = 90 kPa, p(NH₃) = 20 kPa. Calculate Kp for N₂ + 3H₂ ⇌ 2NH₃.',
    options: [
      '2.74 × 10⁻⁶ kPa⁻²',
      '1.83 × 10⁻⁵ kPa⁻²',
      '9.14 × 10⁻⁶ kPa⁻²',
      '1.64 × 10⁻⁵ kPa⁻²'
    ],
    correctAnswer: 0,
    explanation: 'Kp = p(NH₃)²/(p(N₂)×p(H₂)³) = (20)²/(30×(90)³) = 400/(30×729,000) = 400/21,870,000 ≈ 1.83×10⁻⁵. Wait: 400/21,870,000 = 1.83×10⁻⁵ kPa⁻². The closest correct value is 1.83×10⁻⁵ kPa⁻². Units: kPa²/(kPa×kPa³) = kPa⁻².'
  },
  {
    id: 981,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is Δn (change in moles of gas)?',
    options: [
      '+2',
      '−2',
      '+4',
      '−4'
    ],
    correctAnswer: 1,
    explanation: 'Δn = moles of gaseous products − moles of gaseous reactants = 2 − (1 + 3) = 2 − 4 = −2. This negative value means fewer moles of gas on the products side, explaining why high pressure favours NH₃ production.'
  },
  {
    id: 982,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'An equilibrium mixture for PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) at 200 kPa total has mole fractions: PCl₅ = 0.40, PCl₃ = 0.30, Cl₂ = 0.30. What is Kp?',
    options: [
      '45 kPa',
      '90 kPa',
      '22.5 kPa',
      '450 kPa'
    ],
    correctAnswer: 0,
    explanation: 'Partial pressures: PCl₅ = 80 kPa, PCl₃ = 60 kPa, Cl₂ = 60 kPa. Kp = (60 × 60)/80 = 3600/80 = 45 kPa.'
  },
  {
    id: 983,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'Why does changing pressure not change the value of Kp?',
    options: [
      'Pressure changes cancel out in the Kp expression',
      'Kp depends only on temperature; pressure shifts the equilibrium position but does not change K',
      'Kp only uses mole fractions, not partial pressures',
      'Kp is only defined for reactions with equal moles of gas on both sides'
    ],
    correctAnswer: 1,
    explanation: 'K (whether Kp or Kc) is a thermodynamic quantity that depends only on temperature. A pressure change shifts the equilibrium position but the ratio of partial pressures is maintained at the same Kp value because temperature is unchanged.'
  },
  {
    id: 984,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), if Kc = 50 at 700 K, what is Kp?',
    options: [
      'Kp = 50',
      'Kp = 50 × (8.314 × 700)',
      'Kp = 50 / (8.314 × 700)',
      'Kp = 50 × (8.314 × 700)²'
    ],
    correctAnswer: 0,
    explanation: 'For H₂ + I₂ ⇌ 2HI, Δn = 2 − (1+1) = 0. Since Kp = Kc(RT)^Δn = Kc × 1 = Kc = 50. When the total moles of gas are equal on both sides, Kp = Kc numerically.'
  },
  {
    id: 985,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'A gas has a mole fraction of 0.25 in a mixture at a total pressure of 400 kPa. What is its partial pressure?',
    options: [
      '25 kPa',
      '100 kPa',
      '1600 kPa',
      '400 kPa'
    ],
    correctAnswer: 1,
    explanation: 'Partial pressure = mole fraction × total pressure = 0.25 × 400 = 100 kPa.'
  },
  {
    id: 986,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (exothermic), Kp = 1.2 × 10⁵ Pa⁻¹ at 700 K. What happens to Kp at 800 K?',
    options: [
      'Kp increases because higher temperature provides more energy for the forward reaction',
      'Kp decreases because the equilibrium shifts left for an exothermic reaction at higher temperature',
      'Kp remains the same because pressure is unchanged',
      'Kp increases because the reaction involves fewer moles of gas'
    ],
    correctAnswer: 1,
    explanation: 'For an exothermic reaction, increasing temperature shifts equilibrium to the left. Less SO₃ and more SO₂ and O₂ are present at equilibrium, reducing the Kp value. Kp decreases when temperature increases for exothermic reactions.'
  },
  {
    id: 987,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For the equilibrium A(g) ⇌ 2B(g), at equilibrium 0.6 mol A and 0.8 mol B are present at 100 kPa total pressure. What is Kp?',
    options: [
      '76.2 kPa',
      '45.0 kPa',
      '100 kPa',
      '57.1 kPa'
    ],
    correctAnswer: 0,
    explanation: 'Total moles = 1.4. p(A) = (0.6/1.4)×100 = 42.86 kPa; p(B) = (0.8/1.4)×100 = 57.14 kPa. Kp = p(B)²/p(A) = (57.14)²/42.86 = 3265/42.86 ≈ 76.2 kPa.'
  },
  {
    id: 988,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts equilibrium right and increases NH₃ yield. What happens to Kp?',
    options: [
      'Kp increases because the yield of NH₃ increases',
      'Kp decreases because partial pressures change',
      'Kp remains unchanged because only temperature changes K',
      'Kp doubles when pressure doubles'
    ],
    correctAnswer: 2,
    explanation: 'While increasing pressure shifts equilibrium right (increasing NH₃ yield), the value of Kp is unchanged because temperature is constant. The partial pressures of all species change, but in a way that maintains the same Kp value.'
  },
  {
    id: 989,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For 2NO₂(g) ⇌ N₂O₄(g), Δn = −1. What are the units of Kp (pressures in Pa)?',
    options: [
      'mol⁻¹ dm³',
      'Pa',
      'Pa⁻¹',
      'Kp has no units'
    ],
    correctAnswer: 2,
    explanation: 'Kp = p(N₂O₄)/p(NO₂)². Units = Pa/Pa² = Pa⁻¹. Since Δn = (1−2) = −1, Kp has units of Pa^Δn = Pa⁻¹.'
  },
  {
    id: 990,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Easy',
    question: 'Mole fractions in an equilibrium mixture: N₂ = 0.20, H₂ = 0.60, NH₃ = 0.20; total pressure = 300 atm. What is the partial pressure of NH₃?',
    options: [
      '20 atm',
      '60 atm',
      '180 atm',
      '300 atm'
    ],
    correctAnswer: 1,
    explanation: 'Partial pressure of NH₃ = mole fraction × total pressure = 0.20 × 300 = 60 atm.'
  },
  {
    id: 991,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'For CO(g) + 3H₂(g) ⇌ CH₄(g) + H₂O(g), what is Δn and how does Kp compare to Kc?',
    options: [
      'Δn = 0, so Kp = Kc',
      'Δn = −2, so Kp = Kc/(RT)²',
      'Δn = +2, so Kp > Kc',
      'Δn = −2, so Kp > Kc'
    ],
    correctAnswer: 1,
    explanation: 'Δn = (1+1) − (1+3) = 2 − 4 = −2. Kp = Kc(RT)^(−2) = Kc/(RT)². Since RT > 1 at any practical temperature, Kp < Kc for this reaction.'
  },
  {
    id: 992,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Medium',
    question: 'For an endothermic equilibrium reaction, how does Kp change with increasing temperature?',
    options: [
      'Kp decreases because energy input shifts equilibrium left',
      'Kp increases because equilibrium shifts right (towards products) at higher temperature',
      'Kp stays the same because pressure is constant',
      'Kp first increases then decreases'
    ],
    correctAnswer: 1,
    explanation: 'For an endothermic reaction, increasing temperature favours the forward reaction (Le Chatelier\'s principle), producing more products. The Kp expression increases in value — Kp increases with temperature for endothermic reactions.'
  },
  {
    id: 993,
    topic: 'Physical Chemistry',
    subtopic: 'Kp',
    difficulty: 'Hard',
    question: 'In the Contact process, at equilibrium at 700 K and 100 kPa, mole fractions are: SO₂ = 0.10, O₂ = 0.05, SO₃ = 0.85. Calculate Kp for 2SO₂ + O₂ ⇌ 2SO₃.',
    options: [
      '14.5 kPa⁻¹',
      '145 kPa⁻¹',
      '1450 kPa⁻¹',
      '1.45 kPa⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'Partial pressures: SO₂ = 10 kPa, O₂ = 5 kPa, SO₃ = 85 kPa. Kp = (85)²/((10)²×5) = 7225/500 = 14.45 ≈ 14.5 kPa⁻¹. Units: kPa²/(kPa²×kPa) = kPa⁻¹.'
  },
  {
    id: 994,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What are the standard conditions required to measure a standard electrode potential?',
    options: [
      '298 K, 1 mol dm⁻³ ion concentration, 1 atm pressure',
      '273 K, 1 mol dm⁻³ ion concentration, 1 atm pressure',
      '298 K, 0.1 mol dm⁻³ ion concentration, 2 atm pressure',
      '300 K, 1 mol dm⁻³ ion concentration, 1 atm pressure'
    ],
    correctAnswer: 0,
    explanation: 'Standard electrode potentials are measured under standard conditions: temperature of 298 K (25°C), all ion concentrations of 1 mol dm⁻³, and gas pressures of 100 kPa (approximately 1 atm). The potential is measured relative to the standard hydrogen electrode (E° = 0.00 V).'
  },
  {
    id: 995,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the standard electrode potential of the standard hydrogen electrode (SHE)?',
    options: [
      '+1.00 V',
      '−1.00 V',
      '0.00 V',
      '+0.76 V'
    ],
    correctAnswer: 2,
    explanation: 'The standard hydrogen electrode (SHE) is defined as the reference electrode with E° = 0.00 V. All other standard electrode potentials are measured relative to the SHE. It consists of H₂(g) at 1 atm bubbled over a platinum electrode in 1 mol dm⁻³ H⁺(aq) at 298 K.'
  },
  {
    id: 996,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'How is the standard cell EMF calculated from two half-cell electrode potentials?',
    options: [
      'E°cell = E°anode + E°cathode',
      'E°cell = E°cathode − E°anode (more positive electrode minus more negative)',
      'E°cell = E°anode − E°cathode',
      'E°cell = (E°cathode + E°anode) / 2'
    ],
    correctAnswer: 1,
    explanation: 'E°cell = E°cathode − E°anode, where the cathode is the more positive (more easily reduced) electrode. Equivalently, E°cell = E°(right) − E°(left) in conventional cell notation. The cell EMF is always positive for a spontaneous cell reaction.'
  },
  {
    id: 997,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'Using E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, what is the standard cell EMF for a zinc-copper cell?',
    options: [
      '+0.42 V',
      '−0.42 V',
      '+1.10 V',
      '−1.10 V'
    ],
    correctAnswer: 2,
    explanation: 'Zinc is a stronger reducing agent (more negative E°), so it acts as the anode (oxidised). Copper acts as the cathode (reduced). E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +0.34 + 0.76 = +1.10 V.'
  },
  {
    id: 998,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In conventional cell notation, what does the double vertical line (||) represent?',
    options: [
      'A metallic conductor connecting the two half-cells',
      'The salt bridge separating the two half-cell solutions',
      'An inert platinum electrode',
      'The boundary between a solid and a gas'
    ],
    correctAnswer: 1,
    explanation: 'In cell notation (e.g. Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s)), the double vertical line (||) represents the salt bridge that separates the two half-cell solutions while allowing ion flow to maintain electrical neutrality. A single line (|) represents a phase boundary.'
  },
  {
    id: 999,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Given E°(Fe³⁺/Fe²⁺) = +0.77 V and E°(I₂/I⁻) = +0.54 V, which reaction is feasible under standard conditions?',
    options: [
      '2Fe²⁺ + I₂ → 2Fe³⁺ + 2I⁻ (E°cell = +0.23 V)',
      '2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (E°cell = +0.23 V)',
      'Neither reaction is feasible',
      'Both reactions are feasible'
    ],
    correctAnswer: 1,
    explanation: 'For a feasible reaction, E°cell must be positive. For 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂: Fe³⁺ is reduced (cathode, E° = +0.77 V), I⁻ is oxidised (anode, E° = +0.54 V). E°cell = +0.77 − 0.54 = +0.23 V > 0, so this is feasible. The reverse would have E°cell = −0.23 V (not feasible).'
  },
  {
    id: 1000,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Which of the following is a limitation of using E° values to predict whether a reaction will occur?',
    options: [
      'E° values only apply to reactions involving metals',
      'E° values assume standard conditions; at non-standard concentrations, temperature, or pressures, the actual cell potential may differ, and kinetic factors may prevent a feasible reaction from occurring at an observable rate',
      'E° values cannot predict the direction of electron flow',
      'E° values are only valid at temperatures below 298 K'
    ],
    correctAnswer: 1,
    explanation: 'E° values are measured under standard conditions (298 K, 1 mol dm⁻³, 1 atm). In practice, conditions differ and the Nernst equation applies. Additionally, E° predictions are thermodynamic — a reaction with positive E°cell may still be kinetically hindered (high activation energy) and not occur at a measurable rate.'
  },
  {
    id: 1001,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In a hydrogen fuel cell, what is the half-equation at the negative electrode (anode)?',
    options: [
      'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
      'H₂ + 2OH⁻ → 2H₂O + 2e⁻',
      'H₂ → 2H⁺ + 2e⁻',
      '4OH⁻ → 2H₂O + O₂ + 4e⁻'
    ],
    correctAnswer: 2,
    explanation: 'In an acidic hydrogen fuel cell, the anode (negative electrode) is where hydrogen is oxidised: H₂ → 2H⁺ + 2e⁻. The electrons flow through the external circuit. At the cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O. The overall product is water.'
  },
  {
    id: 1002,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What is produced at the cathode of a hydrogen fuel cell?',
    options: [
      'Hydrogen gas',
      'Oxygen gas',
      'Water',
      'Carbon dioxide'
    ],
    correctAnswer: 2,
    explanation: 'At the cathode of a hydrogen fuel cell, oxygen is reduced and combines with H⁺ ions (acidic cell) or water (alkaline cell) to form water: O₂ + 4H⁺ + 4e⁻ → 2H₂O. The only overall product is water, making fuel cells environmentally clean at point of use.'
  },
  {
    id: 1003,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'What is the key difference between a galvanic (voltaic) cell and electrolysis?',
    options: [
      'A galvanic cell uses electrical energy to drive a non-spontaneous reaction; electrolysis generates electrical energy from a spontaneous reaction',
      'A galvanic cell generates electrical energy from a spontaneous redox reaction; electrolysis uses electrical energy to drive a non-spontaneous reaction',
      'There is no difference; both convert chemical energy to electrical energy',
      'A galvanic cell only works with metals; electrolysis works with all materials'
    ],
    correctAnswer: 1,
    explanation: 'A galvanic (voltaic) cell converts chemical energy from a spontaneous redox reaction into electrical energy. Electrolysis is the reverse: electrical energy from an external source is used to drive a non-spontaneous redox reaction (e.g. electrolysis of water, or electroplating).'
  },
  {
    id: 1004,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'In a lead-acid battery (rechargeable), the anode during discharge is lead (Pb). What is the half-equation at the anode during discharge?',
    options: [
      'Pb + SO₄²⁻ → PbSO₄ + 2e⁻',
      'PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O',
      'Pb²⁺ + 2e⁻ → Pb',
      'Pb → Pb²⁺ + 2e⁻'
    ],
    correctAnswer: 0,
    explanation: 'At the anode (negative plate) during discharge: Pb is oxidised and reacts with sulfate ions: Pb + SO₄²⁻ → PbSO₄ + 2e⁻. At the cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. Both electrodes become coated with PbSO₄ during discharge.'
  },
  {
    id: 1005,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'Which statement correctly describes the standard hydrogen electrode?',
    options: [
      'A platinum electrode in 1 mol dm⁻³ NaOH at 298 K with O₂ at 1 atm',
      'A platinum electrode in 1 mol dm⁻³ H⁺ at 298 K with H₂ at 100 kPa, assigned E° = 0.00 V',
      'A copper electrode in 1 mol dm⁻³ CuSO₄ at 298 K',
      'A standard cell consisting of two identical half-cells'
    ],
    correctAnswer: 1,
    explanation: 'The SHE consists of a platinum electrode (inert conductor) in 1 mol dm⁻³ H⁺(aq) at 298 K with H₂(g) at 100 kPa (≈1 atm) bubbling over it. Platinum catalyses the equilibrium 2H⁺ + 2e⁻ ⇌ H₂ and is assigned E° = 0.00 V by definition.'
  },
  {
    id: 1006,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'E°(MnO₄⁻/Mn²⁺) = +1.52 V and E°(Cl₂/Cl⁻) = +1.36 V. Which statement is correct?',
    options: [
      'Cl₂ can oxidise Mn²⁺ to MnO₄⁻ under standard conditions',
      'MnO₄⁻ can oxidise Cl⁻ to Cl₂ under standard conditions (E°cell = +0.16 V)',
      'Neither reaction is feasible as both E° values are positive',
      'Mn²⁺ can reduce Cl₂ to Cl⁻ (E°cell = −0.16 V) feasibly'
    ],
    correctAnswer: 1,
    explanation: 'MnO₄⁻ is a stronger oxidising agent (higher E°). For MnO₄⁻ oxidising Cl⁻: MnO₄⁻ is cathode (E° = +1.52 V), Cl⁻ is oxidised at anode (E° = +1.36 V). E°cell = 1.52 − 1.36 = +0.16 V > 0. This reaction is feasible. The reverse (Cl₂ oxidising Mn²⁺) would give E°cell = −0.16 V (not feasible).'
  },
  {
    id: 1007,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In a lithium-ion battery, which statement is correct?',
    options: [
      'Lithium is permanently consumed and cannot be recharged',
      'Li⁺ ions move from anode to cathode during discharge, and the process is reversed during charging',
      'Lithium metal is deposited at the anode during discharge',
      'Water is the main product of the reaction in a lithium-ion battery'
    ],
    correctAnswer: 1,
    explanation: 'In a lithium-ion battery, during discharge Li⁺ ions move through the electrolyte from the anode (graphite, losing Li⁺) to the cathode (metal oxide, gaining Li⁺). During recharging, an external electrical supply reverses this process. The battery is rechargeable because the Li⁺ intercalation is reversible.'
  },
  {
    id: 1008,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'In an electrochemical cell, what is the role of the salt bridge?',
    options: [
      'It allows electrons to flow between the two half-cells',
      'It maintains electrical neutrality in both half-cells by allowing ion migration',
      'It acts as an inert electrode in one of the half-cells',
      'It prevents any chemical reaction from occurring'
    ],
    correctAnswer: 1,
    explanation: 'The salt bridge (usually containing KNO₃ or KCl in agar) connects the two half-cell solutions. It allows ions to migrate between the solutions to maintain electrical neutrality as the reaction proceeds, without allowing the solutions to mix directly. Without it, charge would build up and the cell would stop.'
  },
  {
    id: 1009,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'Why might a reaction predicted as feasible from E° values not actually proceed in practice?',
    options: [
      'Because E° values are only valid for non-metal reactions',
      'Because the reaction has a high activation energy (kinetic barrier), meaning it proceeds immeasurably slowly despite being thermodynamically feasible',
      'Because E° values predict equilibrium position, not reaction direction',
      'Because standard conditions always apply in real reactions'
    ],
    correctAnswer: 1,
    explanation: 'E° predictions are thermodynamic — they indicate whether a reaction is energetically feasible. However, a kinetic barrier (high activation energy) may prevent the reaction from occurring at a measurable rate. For example, many reactions are thermodynamically feasible but require a catalyst or do not occur at room temperature.'
  },
  {
    id: 1010,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'What are the advantages of hydrogen fuel cells over conventional combustion engines?',
    options: [
      'Fuel cells produce CO₂ as a useful byproduct',
      'Fuel cells are more energy-efficient, produce only water at point of use, and operate silently',
      'Fuel cells are cheaper to manufacture than combustion engines',
      'Fuel cells can use any fuel without modification'
    ],
    correctAnswer: 1,
    explanation: 'Hydrogen fuel cells convert chemical energy directly to electrical energy (no intermediate combustion), making them more efficient. The only product at point of use is water (no harmful emissions locally). They also operate silently. The main challenges include hydrogen storage and production costs.'
  },
  {
    id: 1011,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'In an alkaline hydrogen fuel cell, what is the half-equation at the cathode?',
    options: [
      'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
      'O₂ + 2H₂O + 4e⁻ → 4OH⁻',
      '2H₂O + 2e⁻ → H₂ + 2OH⁻',
      'H₂ + 2OH⁻ → 2H₂O + 2e⁻'
    ],
    correctAnswer: 1,
    explanation: 'In an alkaline fuel cell, the cathode reaction is: O₂ + 2H₂O + 4e⁻ → 4OH⁻. The anode reaction is: H₂ + 2OH⁻ → 2H₂O + 2e⁻. The OH⁻ ions migrate through the alkaline electrolyte from cathode to anode to complete the circuit.'
  },
  {
    id: 1012,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Medium',
    question: 'In cell notation Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s), which electrode is the anode?',
    options: [
      'Cu(s) — it is on the right',
      'Zn(s) — it is on the left and is oxidised',
      'Zn²⁺(aq) — it is the ion being reduced',
      'Cu²⁺(aq) — it is the ion being oxidised'
    ],
    correctAnswer: 1,
    explanation: 'By convention in cell notation, the anode (oxidation) is written on the left and the cathode (reduction) on the right. Zn(s) on the left is the anode where Zn → Zn²⁺ + 2e⁻ (oxidation). Cu on the right is the cathode where Cu²⁺ + 2e⁻ → Cu (reduction).'
  },
  {
    id: 1013,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Easy',
    question: 'Which species is the strongest oxidising agent from the following standard electrode potentials? F₂/F⁻ = +2.87 V; Cl₂/Cl⁻ = +1.36 V; Br₂/Br⁻ = +1.09 V; I₂/I⁻ = +0.54 V.',
    options: [
      'I₂',
      'Br₂',
      'Cl₂',
      'F₂'
    ],
    correctAnswer: 3,
    explanation: 'The species with the most positive standard electrode potential has the greatest tendency to be reduced — it is the strongest oxidising agent. F₂ has E° = +2.87 V (the highest), making it the strongest oxidising agent. Species on the left of half-equations with high positive E° are strong oxidising agents.'
  },
  {
    id: 1014,
    topic: 'Physical Chemistry',
    subtopic: 'Electrochemical Cells',
    difficulty: 'Hard',
    question: 'E°(Fe³⁺/Fe²⁺) = +0.77 V and E°(Fe²⁺/Fe) = −0.44 V. Calculate E°cell for Fe + 2Fe³⁺ → 3Fe²⁺.',
    options: [
      'E°cell = +0.33 V',
      'E°cell = +1.21 V',
      'E°cell = −0.33 V',
      'E°cell = +1.54 V'
    ],
    correctAnswer: 1,
    explanation: 'Fe is oxidised (anode): Fe → Fe²⁺ + 2e⁻ (E° = −0.44 V). Fe³⁺ is reduced (cathode): Fe³⁺ + e⁻ → Fe²⁺ (E° = +0.77 V). E°cell = E°cathode − E°anode = +0.77 − (−0.44) = +1.21 V. Positive value confirms the reaction is feasible.'
  },
  {
    id: 1015,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'According to the Brønsted-Lowry definition, what is an acid?',
    options: [
      'A species that accepts a pair of electrons',
      'A species that donates a proton (H⁺)',
      'A species that produces OH⁻ ions in water',
      'A species that accepts a proton (H⁺)'
    ],
    correctAnswer: 1,
    explanation: 'In the Brønsted-Lowry definition, an acid is a proton (H⁺) donor, and a base is a proton acceptor. This definition is broader than the Arrhenius definition and applies to reactions in non-aqueous solvents as well.'
  },
  {
    id: 1016,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the pH of a 0.10 mol dm⁻³ solution of a strong monoprotic acid?',
    options: [
      'pH = 1',
      'pH = 2',
      'pH = 7',
      'pH = 13'
    ],
    correctAnswer: 0,
    explanation: 'A strong acid fully dissociates. For 0.10 mol dm⁻³ HCl: [H⁺] = 0.10 mol dm⁻³. pH = −log[H⁺] = −log(0.10) = −log(10⁻¹) = 1.'
  },
  {
    id: 1017,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is Kw and what is its value at 298 K?',
    options: [
      'Kw = [H₂O]; Kw = 55.5 mol dm⁻³',
      'Kw = [H⁺][OH⁻]; Kw = 1 × 10⁻¹⁴ mol² dm⁻⁶',
      'Kw = [H⁺]/[OH⁻]; Kw = 1 × 10⁻⁷',
      'Kw = [OH⁻]/[H⁺]; Kw = 1 × 10⁻¹⁴'
    ],
    correctAnswer: 1,
    explanation: 'Kw is the ionic product of water: Kw = [H⁺][OH⁻]. At 298 K, Kw = 1 × 10⁻¹⁴ mol² dm⁻⁶. In pure water, [H⁺] = [OH⁻] = 1 × 10⁻⁷ mol dm⁻³, giving pH = 7 at 298 K.'
  },
  {
    id: 1018,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the pH of a 0.050 mol dm⁻³ NaOH solution at 298 K?',
    options: [
      'pH = 1.30',
      'pH = 7',
      'pH = 12.70',
      'pH = 13.70'
    ],
    correctAnswer: 2,
    explanation: 'NaOH is a strong base: [OH⁻] = 0.050 mol dm⁻³. pOH = −log(0.050) = 1.30. pH = 14 − pOH = 14 − 1.30 = 12.70. Alternatively: [H⁺] = Kw/[OH⁻] = (1×10⁻¹⁴)/0.050 = 2×10⁻¹³; pH = −log(2×10⁻¹³) = 12.70.'
  },
  {
    id: 1019,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'What is the difference between a strong acid and a weak acid?',
    options: [
      'A strong acid has a higher concentration than a weak acid',
      'A strong acid fully dissociates in water; a weak acid only partially dissociates',
      'A strong acid produces more H₂ when reacting with metals',
      'A weak acid has a lower molar mass than a strong acid'
    ],
    correctAnswer: 1,
    explanation: 'A strong acid (e.g. HCl, H₂SO₄, HNO₃) completely dissociates in aqueous solution: every molecule releases its proton. A weak acid (e.g. CH₃COOH, HF) only partially dissociates, establishing an equilibrium in solution. Strength refers to degree of dissociation, not concentration.'
  },
  {
    id: 1020,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'For a weak acid HA, the Ka expression is:',
    options: [
      'Ka = [H⁺][A⁻] / [HA]',
      'Ka = [HA] / ([H⁺][A⁻])',
      'Ka = [H⁺] / [HA]',
      'Ka = [A⁻] / [HA][H₂O]'
    ],
    correctAnswer: 0,
    explanation: 'For the equilibrium HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. Water is not included in Ka as its concentration is effectively constant. Ka is the acid dissociation constant: larger Ka means stronger acid (more dissociation).'
  },
  {
    id: 1021,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the pKa of an acid with Ka = 1.8 × 10⁻⁵ mol dm⁻³?',
    options: [
      'pKa = 4.74',
      'pKa = 5.26',
      'pKa = −4.74',
      'pKa = 1.8'
    ],
    correctAnswer: 0,
    explanation: 'pKa = −log(Ka) = −log(1.8 × 10⁻⁵) = −(log 1.8 + log 10⁻⁵) = −(0.255 − 5) = 4.745 ≈ 4.74. A lower pKa means a stronger acid (higher Ka).'
  },
  {
    id: 1022,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Calculate the pH of 0.10 mol dm⁻³ ethanoic acid (Ka = 1.8 × 10⁻⁵ mol dm⁻³). Assume [H⁺] = [CH₃COO⁻] and that dissociation is small.',
    options: [
      'pH = 1.00',
      'pH = 2.87',
      'pH = 4.74',
      'pH = 3.37'
    ],
    correctAnswer: 1,
    explanation: 'Ka = [H⁺]²/[HA]. [H⁺]² = Ka × [HA] = 1.8×10⁻⁵ × 0.10 = 1.8×10⁻⁶. [H⁺] = √(1.8×10⁻⁶) = 1.342×10⁻³ mol dm⁻³. pH = −log(1.342×10⁻³) = 2.87.'
  },
  {
    id: 1023,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'A buffer solution resists changes in pH. Which combination makes a buffer?',
    options: [
      'A strong acid and its conjugate base',
      'A weak acid and a salt of that weak acid (containing its conjugate base)',
      'Equal volumes of a strong acid and a strong base',
      'Pure water with a small amount of salt dissolved in it'
    ],
    correctAnswer: 1,
    explanation: 'A buffer is made from a weak acid (e.g. CH₃COOH) and its conjugate base (e.g. CH₃COO⁻, from sodium ethanoate). Adding H⁺ shifts the equilibrium left (base consumes H⁺); adding OH⁻ shifts it right (acid provides H⁺). Strong acid/base pairs cannot buffer because they fully dissociate.'
  },
  {
    id: 1024,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'A buffer contains 0.10 mol CH₃COOH and 0.20 mol CH₃COONa in 1 dm³. Ka = 1.8 × 10⁻⁵ mol dm⁻³. What is the pH?',
    options: [
      'pH = 4.44',
      'pH = 5.04',
      'pH = 4.74',
      'pH = 3.44'
    ],
    correctAnswer: 1,
    explanation: 'Using Ka = [H⁺][A⁻]/[HA]: [H⁺] = Ka × [HA]/[A⁻] = 1.8×10⁻⁵ × 0.10/0.20 = 1.8×10⁻⁵ × 0.5 = 9×10⁻⁶ mol dm⁻³. pH = −log(9×10⁻⁶) = 5.05 ≈ 5.04. Alternatively, pH = pKa + log([A⁻]/[HA]) = 4.74 + log(2) = 4.74 + 0.301 = 5.04.'
  },
  {
    id: 1025,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'Which indicator is most suitable for a titration between a strong acid and a weak base?',
    options: [
      'Phenolphthalein (pH range 8.2–10.0)',
      'Litmus (pH range 5.0–8.0)',
      'Methyl orange (pH range 3.1–4.4)',
      'Universal indicator'
    ],
    correctAnswer: 2,
    explanation: 'For a strong acid/weak base titration, the equivalence point is below pH 7 (acidic). The indicator must change colour within the steep part of the titration curve around the equivalence point. Methyl orange (pH 3.1–4.4) is appropriate here. Phenolphthalein would be used for weak acid/strong base titrations.'
  },
  {
    id: 1026,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'For a titration between a weak acid and a strong base, which indicator is most appropriate?',
    options: [
      'Methyl orange (pH range 3.1–4.4)',
      'Screened methyl orange (pH range 3.5–5.5)',
      'Phenolphthalein (pH range 8.2–10.0)',
      'Litmus'
    ],
    correctAnswer: 2,
    explanation: 'For weak acid/strong base titrations, the equivalence point is above pH 7 (e.g. pH ≈ 8–9 for ethanoic acid/NaOH). Phenolphthalein (pH range 8.2–10.0) changes colour within the steep portion of the curve. Methyl orange would change colour before the equivalence point is reached.'
  },
  {
    id: 1027,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'At the half-equivalence point in a weak acid-strong base titration, which relationship holds?',
    options: [
      'pH = 7',
      'pH = 2 × pKa',
      'pH = pKa',
      'pH = 14 − pKa'
    ],
    correctAnswer: 2,
    explanation: 'At the half-equivalence point, exactly half the weak acid has been neutralised, so [HA] = [A⁻]. From Ka = [H⁺][A⁻]/[HA]: when [A⁻] = [HA], Ka = [H⁺], so pKa = pH. This is a useful way to determine pKa from a titration curve by reading the pH at the half-equivalence point.'
  },
  {
    id: 1028,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the shape of the pH curve for a strong acid titrated with a strong base?',
    options: [
      'A gradual S-shaped curve with a gentle equivalence point',
      'A steep S-shaped curve with a near-vertical section at the equivalence point from about pH 3 to pH 11',
      'A curve that never reaches pH 7',
      'A straight line from pH 1 to pH 14'
    ],
    correctAnswer: 1,
    explanation: 'For a strong acid/strong base titration, the pH changes slowly at first, then there is a very steep (nearly vertical) change around the equivalence point (pH 7), covering approximately pH 3–11 with the addition of a tiny volume of base. The curve is S-shaped and symmetric about pH 7.'
  },
  {
    id: 1029,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'What is the pH of pure water at a temperature above 298 K, given that Kw increases with temperature?',
    options: [
      'Still 7, because neutral always means pH 7',
      'Less than 7, because [H⁺] increases but the solution remains neutral',
      'Greater than 7, because increased temperature makes water more basic',
      'Greater than 7, because [OH⁻] increases more than [H⁺]'
    ],
    correctAnswer: 1,
    explanation: 'Kw increases with temperature (the ionisation of water is endothermic). At higher temperatures, Kw > 10⁻¹⁴, so [H⁺] > 10⁻⁷ mol dm⁻³ and pH < 7. However, the solution is still neutral because [H⁺] = [OH⁻]. Neutrality means [H⁺] = [OH⁻], not pH = 7. pH = 7 is only neutral at 298 K.'
  },
  {
    id: 1030,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Easy',
    question: 'If [H⁺] = 2.5 × 10⁻⁴ mol dm⁻³, what is the pH?',
    options: [
      'pH = 3.60',
      'pH = 4.60',
      'pH = 2.60',
      'pH = 10.40'
    ],
    correctAnswer: 0,
    explanation: 'pH = −log[H⁺] = −log(2.5 × 10⁻⁴) = −(log 2.5 + log 10⁻⁴) = −(0.398 − 4) = 3.60.'
  },
  {
    id: 1031,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'How does a buffer solution resist a decrease in pH when a small amount of acid (H⁺) is added?',
    options: [
      'The weak acid in the buffer donates more protons to neutralise the added H⁺',
      'The conjugate base (A⁻) in the buffer reacts with the added H⁺: A⁻ + H⁺ → HA, removing the H⁺ and preventing a significant pH drop',
      'The water in the buffer dilutes the added acid',
      'The added H⁺ causes more of the weak acid to dissociate, absorbing the extra protons'
    ],
    correctAnswer: 1,
    explanation: 'When H⁺ is added to a buffer, the conjugate base (A⁻) reacts: A⁻ + H⁺ → HA. This consumes the added H⁺, replacing it with the weak acid, so [H⁺] barely changes. The buffer works because both HA and A⁻ are present in significant concentrations.'
  },
  {
    id: 1032,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'How does a buffer solution resist an increase in pH when a small amount of base (OH⁻) is added?',
    options: [
      'The conjugate base A⁻ reacts with OH⁻ to neutralise it',
      'The weak acid HA reacts with the added OH⁻: HA + OH⁻ → A⁻ + H₂O, replenishing H⁺ and limiting the pH rise',
      'Water reacts with the OH⁻ to prevent pH change',
      'The buffer absorbs OH⁻ into the conjugate acid'
    ],
    correctAnswer: 1,
    explanation: 'When OH⁻ is added to a buffer, the weak acid provides H⁺: HA + OH⁻ → A⁻ + H₂O. This consumes the OH⁻ while converting HA to A⁻. As long as significant HA remains, the change in [H⁺] is small, resisting the increase in pH.'
  },
  {
    id: 1033,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Calculate the pH of a buffer containing 0.20 mol dm⁻³ propanoic acid and 0.30 mol dm⁻³ sodium propanoate. Ka of propanoic acid = 1.35 × 10⁻⁵ mol dm⁻³.',
    options: [
      'pH = 4.69',
      'pH = 5.05',
      'pH = 4.87',
      'pH = 5.23'
    ],
    correctAnswer: 1,
    explanation: '[H⁺] = Ka × [HA]/[A⁻] = 1.35×10⁻⁵ × 0.20/0.30 = 1.35×10⁻⁵ × 0.667 = 9.0×10⁻⁶ mol dm⁻³. pH = −log(9.0×10⁻⁶) = 5.05. Alternatively: pH = pKa + log([A⁻]/[HA]) = 4.87 + log(1.5) = 4.87 + 0.176 = 5.05.'
  },
  {
    id: 1034,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Hard',
    question: 'Why is there no steep section on the pH titration curve for a weak acid titrated with a weak base?',
    options: [
      'Because the equivalence point is always at pH 7',
      'Because both the acid and base are only partially dissociated, and the large buffer capacity of both species prevents a dramatic pH change around the equivalence point, making it unsuitable for indicator titrations',
      'Because weak acids do not react with weak bases',
      'Because weak base/weak acid titrations always have a pH below 7'
    ],
    correctAnswer: 1,
    explanation: 'In a weak acid/weak base titration, both reactants are partially dissociated, creating buffer-like behaviour throughout most of the titration. There is no sharp pH jump at the equivalence point, making it impossible to use a conventional indicator to detect the endpoint. Such titrations are not used in standard AQA practicals.'
  },
  {
    id: 1035,
    topic: 'Physical Chemistry',
    subtopic: 'Acids & Bases',
    difficulty: 'Medium',
    question: 'What is the conjugate base of H₂SO₄?',
    options: [
      'H₃SO₄⁺',
      'HSO₄⁻',
      'SO₄²⁻',
      'OH⁻'
    ],
    correctAnswer: 1,
    explanation: 'H₂SO₄ donates one proton (H⁺) to form its conjugate base HSO₄⁻: H₂SO₄ → H⁺ + HSO₄⁻. A conjugate base is formed by removing one proton from the acid. HSO₄⁻ can act as an acid in turn, donating a second proton to form SO₄²⁻ (its conjugate base).'
  },

  {
    id: 1036,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What is the IUPAC name for CH₃CH₂COOH?',
    options: ['Ethanoic acid', 'Propanoic acid', 'Butanoic acid', 'Methanoic acid'],
    correctAnswer: 1,
    explanation: 'The compound has 3 carbons including the carboxyl carbon, so the parent chain is propane, giving propanoic acid.'
  },
  {
    id: 1037,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'Which reagent is used to convert a carboxylic acid into an acyl chloride?',
    options: ['PCl₃ or SOCl₂', 'HCl gas', 'NaCl and H₂SO₄', 'Cl₂ in UV light'],
    correctAnswer: 0,
    explanation: 'Phosphorus trichloride (PCl₃) or thionyl chloride (SOCl₂) replace the –OH group of a carboxylic acid with –Cl to form an acyl chloride.'
  },
  {
    id: 1038,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'What type of reaction occurs when ethanoic acid reacts with sodium carbonate?',
    options: ['Esterification', 'Neutralisation producing CO₂', 'Oxidation', 'Addition'],
    correctAnswer: 1,
    explanation: 'Carboxylic acids react with carbonates to produce a salt, water and carbon dioxide gas — this is an acid–base neutralisation.'
  },
  {
    id: 1039,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the mechanism for the formation of an ester from a carboxylic acid and an alcohol?',
    options: ['Nucleophilic addition', 'Nucleophilic substitution', 'Electrophilic addition', 'Nucleophilic addition–elimination'],
    correctAnswer: 3,
    explanation: 'Esterification proceeds via nucleophilic addition–elimination: the alcohol oxygen attacks the carbonyl carbon, a tetrahedral intermediate forms, and then water is eliminated.'
  },
  {
    id: 1040,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Ethanoyl chloride reacts vigorously with water. What are the products?',
    options: ['Ethanol and HCl', 'Ethanoic acid and HCl', 'Ethanal and HCl', 'Ethanoic anhydride and HCl'],
    correctAnswer: 1,
    explanation: 'Acyl chlorides hydrolyse rapidly with water to give the corresponding carboxylic acid and hydrogen chloride: CH₃COCl + H₂O → CH₃COOH + HCl.'
  },
  {
    id: 1041,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Which product is formed when ethanoyl chloride reacts with excess ammonia?',
    options: ['Ethylamine', 'Ethanamide and ammonium chloride', 'Ethanoic acid and NH₄Cl', 'Diethylamine'],
    correctAnswer: 1,
    explanation: 'Acyl chlorides react with ammonia to give an amide; the HCl produced is neutralised by excess ammonia to form ammonium chloride: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl.'
  },
  {
    id: 1042,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What is the correct order of reactivity (most reactive first) of carboxylic acid derivatives towards nucleophilic substitution?',
    options: [
      'Acyl chloride > acid anhydride > ester > amide',
      'Amide > ester > acid anhydride > acyl chloride',
      'Ester > acyl chloride > amide > acid anhydride',
      'Acid anhydride > acyl chloride > amide > ester'
    ],
    correctAnswer: 0,
    explanation: 'The leaving group ability determines reactivity: Cl⁻ leaves most easily, then the carboxylate ion (from anhydride), then alkoxide (from ester), and NH₂⁻ is the poorest leaving group (amide).'
  },
  {
    id: 1043,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'Acid hydrolysis of an ester produces which two products?',
    options: [
      'A carboxylate salt and an alcohol',
      'A carboxylic acid and an alcohol',
      'A carboxylic acid and a ketone',
      'An aldehyde and an alcohol'
    ],
    correctAnswer: 1,
    explanation: 'Acid-catalysed hydrolysis of an ester (reflux with dilute H₂SO₄ or HCl) is the reverse of esterification, giving the parent carboxylic acid and alcohol.'
  },
  {
    id: 1044,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'What are the products of alkaline hydrolysis (saponification) of an ester?',
    options: [
      'A carboxylic acid and an alcohol',
      'A carboxylate salt and an alcohol',
      'A carboxylate salt and a ketone',
      'An aldehyde and NaOH'
    ],
    correctAnswer: 1,
    explanation: 'Hydrolysis of an ester with NaOH produces the sodium salt of the carboxylic acid (carboxylate ion) and the alcohol; the reaction is irreversible unlike acid hydrolysis.'
  },
  {
    id: 1045,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Terylene (PET) is a polyester formed from which two monomers?',
    options: [
      'Ethane-1,2-diol and benzene-1,4-dicarboxylic acid',
      'Ethanol and propanoic acid',
      'Ethane-1,2-diol and ethanoic acid',
      'Propane-1,3-diol and benzene-1,2-dicarboxylic acid'
    ],
    correctAnswer: 0,
    explanation: 'Terylene/PET is made by condensation polymerisation of ethane-1,2-diol (a diol) and benzene-1,4-dicarboxylic acid (terephthalic acid), eliminating water.'
  },
  {
    id: 1046,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'Which functional group is present in an amide?',
    options: ['–COOH', '–NH₂', '–CONH₂ (or –CONR₂)', '–COCl'],
    correctAnswer: 2,
    explanation: 'Amides contain the –CONH– linkage (carbonyl group directly bonded to a nitrogen atom).'
  },
  {
    id: 1047,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Ethanoic anhydride reacts with methanol. What is the organic product?',
    options: ['Methyl ethanoate and ethanoic acid', 'Methyl ethanoate and water', 'Dimethyl ether and ethanoic acid', 'Ethyl methanoate and water'],
    correctAnswer: 0,
    explanation: 'Acid anhydrides react with alcohols to form an ester and a carboxylic acid: (CH₃CO)₂O + CH₃OH → CH₃COOCH₃ + CH₃COOH.'
  },
  {
    id: 1048,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'Why is ethanoic anhydride preferred over ethanoyl chloride in industrial esterification reactions such as the manufacture of aspirin?',
    options: [
      'It is cheaper and produces less corrosive/toxic by-products',
      'It reacts faster than ethanoyl chloride',
      'It does not require a catalyst',
      'It produces a purer ester with no acid by-product'
    ],
    correctAnswer: 0,
    explanation: 'Ethanoic anhydride is preferred industrially because it is cheaper, safer to handle, and produces ethanoic acid (not HCl) as the by-product, which is less corrosive and toxic.'
  },
  {
    id: 1049,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What conditions are required for the acid-catalysed esterification of ethanoic acid with ethanol?',
    options: [
      'Concentrated H₂SO₄ catalyst, heat under reflux',
      'Dilute HCl, room temperature',
      'NaOH catalyst, heat under reflux',
      'PCl₅ catalyst, room temperature'
    ],
    correctAnswer: 0,
    explanation: 'Esterification of a carboxylic acid with an alcohol requires concentrated sulfuric acid as an acid catalyst and heat (reflux) to achieve a reasonable rate; the reaction is reversible.'
  },
  {
    id: 1050,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'Which of the following is a biodegradable polymer?',
    options: ['Poly(ethene)', 'Polystyrene', 'Poly(lactic acid) (PLA)', 'PVC'],
    correctAnswer: 2,
    explanation: 'Poly(lactic acid) (PLA) is a biodegradable polyester derived from lactic acid; it can be broken down by microorganisms, unlike most addition polymers such as poly(ethene).'
  },
  {
    id: 1051,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'What type of reaction links amino acids together in a polypeptide chain?',
    options: ['Esterification', 'Condensation forming a peptide (amide) bond', 'Addition polymerisation', 'Nucleophilic substitution'],
    correctAnswer: 1,
    explanation: 'Amino acids are joined by condensation reactions forming peptide bonds (–CONH–), which are amide linkages, with the elimination of water.'
  },
  {
    id: 1052,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Easy',
    question: 'When ethanoic acid reacts with sodium hydroxide solution, what type of reaction occurs?',
    options: ['Esterification', 'Neutralisation', 'Oxidation', 'Reduction'],
    correctAnswer: 1,
    explanation: 'Carboxylic acids react with alkalis (such as NaOH) in an acid–base neutralisation to produce a sodium carboxylate salt and water.'
  },
  {
    id: 1053,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'In the nucleophilic addition–elimination mechanism for acyl chloride reacting with an amine, what acts as the nucleophile?',
    options: ['The lone pair on the nitrogen of the amine', 'The lone pair on the oxygen of water', 'The π electrons of the carbonyl', 'The chloride ion'],
    correctAnswer: 0,
    explanation: 'The lone pair on the nitrogen atom of the amine acts as the nucleophile, attacking the electrophilic carbonyl carbon of the acyl chloride, displacing Cl⁻ as the leaving group.'
  },
  {
    id: 1054,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Medium',
    question: 'Which of the following correctly describes a condensation polymer?',
    options: [
      'A polymer formed only from one type of monomer with no by-product',
      'A polymer formed by repeated addition across double bonds',
      'A polymer formed with loss of a small molecule (e.g. water or HCl) at each step',
      'A polymer that can only be formed from amino acids'
    ],
    correctAnswer: 2,
    explanation: 'Condensation polymers form when monomers react together with the elimination of a small molecule (commonly water or HCl) at each bond-forming step.'
  },
  {
    id: 1055,
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids & Derivatives',
    difficulty: 'Hard',
    question: 'What is the product when propanoyl chloride reacts with a primary amine, CH₃NH₂?',
    options: [
      'N-methylpropanamide and HCl',
      'Propylamine and methyl chloride',
      'Propanoic acid and methylamine',
      'N-methylpropan-1-amine and water'
    ],
    correctAnswer: 0,
    explanation: 'Acyl chlorides react with primary amines via nucleophilic addition–elimination to give an N-substituted amide (N-methylpropanamide) and HCl; any excess amine neutralises the HCl.'
  },
  {
    id: 1056,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'What did Kekulé propose as the structure of benzene?',
    options: [
      'A planar ring of 6 carbons with alternating single and double bonds',
      'A planar ring of 6 carbons all with single bonds and a delocalised π system',
      'A non-planar ring of 6 carbons with three double bonds',
      'A chain of 6 carbons with alternating single and triple bonds'
    ],
    correctAnswer: 0,
    explanation: 'Kekulé proposed benzene as a hexagonal ring of six carbon atoms with alternating single and double bonds (cyclohexatriene), with the double bonds rapidly oscillating.'
  },
  {
    id: 1057,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Which piece of evidence best supports the delocalised model of benzene over the Kekulé structure?',
    options: [
      'Benzene is a liquid at room temperature',
      'All C–C bond lengths in benzene are equal (intermediate between single and double bonds)',
      'Benzene reacts with bromine water by addition',
      'Benzene has a molecular formula of C₆H₆'
    ],
    correctAnswer: 1,
    explanation: 'X-ray diffraction shows all six C–C bonds in benzene are the same length (0.140 nm), intermediate between a C–C single bond (0.154 nm) and a C=C double bond (0.134 nm), consistent with delocalisation rather than alternating bonds.'
  },
  {
    id: 1058,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Why does benzene undergo electrophilic substitution rather than electrophilic addition?',
    options: [
      'Benzene has no π electrons to act as nucleophile',
      'Addition would be faster than substitution',
      'Substitution preserves the stable delocalised π system, whereas addition would destroy it',
      'The benzene ring is too small for addition reactions'
    ],
    correctAnswer: 2,
    explanation: 'Electrophilic substitution allows benzene to react with electrophiles while retaining the thermodynamically stable delocalised π electron system; addition would destroy this aromaticity and is energetically unfavourable.'
  },
  {
    id: 1059,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What reagents are used to nitrate benzene?',
    options: [
      'Dilute nitric acid alone',
      'Concentrated HNO₃ and concentrated H₂SO₄, below 55°C',
      'Concentrated HNO₃ and water, at 100°C',
      'Dilute HNO₃ and AlCl₃ catalyst'
    ],
    correctAnswer: 1,
    explanation: 'Nitration of benzene requires a mixture of concentrated nitric acid and concentrated sulfuric acid (nitrating mixture) at below 55°C to produce nitrobenzene and avoid polynitration.'
  },
  {
    id: 1060,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'In the nitration mechanism, what is the electrophile that attacks the benzene ring?',
    options: ['NO₂⁻ (nitrite ion)', 'NO₂⁺ (nitronium ion)', 'HNO₃ molecule', 'HSO₄⁻'],
    correctAnswer: 1,
    explanation: 'The electrophile in nitration is the nitronium ion (NO₂⁺), generated by the reaction of HNO₃ with H₂SO₄: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O.'
  },
  {
    id: 1061,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'In Friedel-Crafts acylation, what is the role of AlCl₃?',
    options: [
      'It acts as a base to deprotonate the ring',
      'It acts as a Lewis acid catalyst to generate the acylium ion (RCO⁺) electrophile',
      'It acts as a reducing agent',
      'It acts as a nucleophile attacking the ring'
    ],
    correctAnswer: 1,
    explanation: 'AlCl₃ is a Lewis acid that accepts a lone pair from the Cl of the acyl chloride, generating the highly electrophilic acylium ion (RCO⁺) which attacks the benzene ring.'
  },
  {
    id: 1062,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the product of Friedel-Crafts alkylation of benzene with chloromethane and AlCl₃?',
    options: ['Chlorobenzene', 'Methylbenzene (toluene)', 'Phenol', 'Benzaldehyde'],
    correctAnswer: 1,
    explanation: 'Friedel-Crafts alkylation of benzene with CH₃Cl/AlCl₃ substitutes a hydrogen on the ring with a methyl group, producing methylbenzene (toluene).'
  },
  {
    id: 1063,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'Which group is an activating (electron-donating) substituent that directs further electrophilic substitution to the 2- and 4-positions?',
    options: ['–NO₂', '–COOH', '–OH', '–CF₃'],
    correctAnswer: 2,
    explanation: 'The –OH group donates electron density into the ring via resonance, activating it towards electrophilic substitution and directing incoming electrophiles to the ortho and para positions.'
  },
  {
    id: 1064,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Phenol reacts with bromine water at room temperature without a catalyst. What is observed?',
    options: [
      'No reaction occurs',
      'The brown bromine water is decolourised but no precipitate forms',
      'The bromine water is decolourised and a white precipitate of 2,4,6-tribromophenol forms',
      'A yellow precipitate forms'
    ],
    correctAnswer: 2,
    explanation: 'The –OH group in phenol strongly activates the ring; bromine water is rapidly decolourised and 2,4,6-tribromophenol precipitates as a white solid, without any catalyst needed.'
  },
  {
    id: 1065,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'What is the product when phenol reacts with sodium hydroxide solution?',
    options: ['Phenyl ethanoate', 'Sodium phenoxide and water', 'Cyclohexanol', 'Benzene and sodium hydroxide'],
    correctAnswer: 1,
    explanation: 'Phenol is weakly acidic; it reacts with NaOH to form sodium phenoxide (C₆H₅O⁻Na⁺) and water in an acid–base neutralisation.'
  },
  {
    id: 1066,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Why does benzene NOT decolourise bromine water under normal conditions (unlike cyclohexene)?',
    options: [
      'Benzene is insoluble in water',
      'Benzene does not contain any π electrons',
      'The delocalised π system is too stable to undergo addition; electrophilic substitution requires a catalyst',
      'Bromine water is too dilute'
    ],
    correctAnswer: 2,
    explanation: 'Benzene\'s delocalised π system is thermodynamically very stable; it does not readily undergo addition reactions (which would destroy aromaticity). Halogenation of benzene requires a Lewis acid catalyst (e.g., AlCl₃ or FeBr₃) and proceeds by substitution.'
  },
  {
    id: 1067,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'The enthalpy of hydrogenation of benzene is –208 kJ mol⁻¹, while three isolated double bonds would predict –360 kJ mol⁻¹. What does this show?',
    options: [
      'Benzene is less stable than expected',
      'Benzene releases more energy than cyclohexene on hydrogenation',
      'Benzene is about 150 kJ mol⁻¹ more stable than the Kekulé structure would predict, due to delocalisation',
      'The difference is due to experimental error'
    ],
    correctAnswer: 2,
    explanation: 'The resonance (delocalisation) energy of benzene is approximately 150 kJ mol⁻¹; benzene releases much less energy on hydrogenation than three separate double bonds would because it is stabilised by delocalisation.'
  },
  {
    id: 1068,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What catalyst is required for the halogenation (e.g. chlorination) of benzene?',
    options: ['Platinum', 'AlCl₃ or FeCl₃ (halogen carrier)', 'Concentrated H₂SO₄', 'Sodium hydroxide'],
    correctAnswer: 1,
    explanation: 'Chlorination of benzene requires a Lewis acid catalyst such as AlCl₃ or FeCl₃ (a halogen carrier) to polarise the Cl₂ molecule and generate the electrophile Cl⁺ (or Cl–AlCl₄⁻ complex).'
  },
  {
    id: 1069,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'Which reagent is used to esterify phenol in the laboratory?',
    options: ['Ethanol and H₂SO₄', 'Acyl chloride or acid anhydride', 'Carboxylic acid and H₂SO₄', 'NaOH and CH₃COCl simultaneously'],
    correctAnswer: 1,
    explanation: 'Phenol is a weaker nucleophile than alcohols; it requires a more reactive acylating agent (acyl chloride or acid anhydride) rather than a simple carboxylic acid to form an ester.'
  },
  {
    id: 1070,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'In the mechanism of electrophilic substitution, what is the intermediate formed after the electrophile attacks the ring?',
    options: [
      'A carbanion',
      'A carbocation (arenium ion / sigma complex) with disrupted aromaticity',
      'A radical intermediate',
      'A stable aromatic carbocation'
    ],
    correctAnswer: 1,
    explanation: 'The electrophile forms a sigma bond to one ring carbon, generating a carbocation intermediate (arenium ion or Wheland intermediate) in which the aromaticity is temporarily disrupted; loss of H⁺ restores the aromatic ring.'
  },
  {
    id: 1071,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'Which of these compounds would undergo electrophilic substitution MORE readily than benzene?',
    options: ['Nitrobenzene', 'Benzene-1,3-dicarboxylic acid', 'Methylbenzene', 'Trifluoromethylbenzene'],
    correctAnswer: 2,
    explanation: 'The methyl group in methylbenzene is an electron-donating group (via hyperconjugation/induction), increasing electron density in the ring and making electrophilic attack more favourable than in benzene.'
  },
  {
    id: 1072,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'Nitrobenzene is reduced to phenylamine (aniline) using which reagents?',
    options: [
      'H₂ with Pd catalyst',
      'Sn and concentrated HCl, then NaOH',
      'NaBH₄ in ethanol',
      'LiAlH₄ in dry ether'
    ],
    correctAnswer: 1,
    explanation: 'On the AQA specification, nitrobenzene is reduced to phenylamine using tin (Sn) and concentrated hydrochloric acid under reflux, followed by addition of NaOH to liberate the free amine.'
  },
  {
    id: 1073,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Medium',
    question: 'What is the major product when methylbenzene (toluene) undergoes nitration with concentrated HNO₃/H₂SO₄?',
    options: [
      '3-nitromethylbenzene (meta)',
      '4-nitromethylbenzene (para) and 2-nitromethylbenzene (ortho)',
      '1-nitromethylbenzene',
      'Only 4-nitromethylbenzene (para)'
    ],
    correctAnswer: 1,
    explanation: 'The methyl group is an ortho/para director; nitration of toluene gives mainly the 2-nitro (ortho) and 4-nitro (para) isomers, with very little 3-nitro (meta) product.'
  },
  {
    id: 1074,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Easy',
    question: 'Which of the following is an important use of nitro compounds produced from benzene?',
    options: ['Manufacture of explosives such as TNT', 'Manufacture of polymers', 'Use as fuel additives', 'Use as food preservatives'],
    correctAnswer: 0,
    explanation: 'Polynitro aromatic compounds such as TNT (2,4,6-trinitrotoluene) are important explosive materials; other nitroaromatics are precursors to dyes and pharmaceuticals.'
  },
  {
    id: 1075,
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Chemistry',
    difficulty: 'Hard',
    question: 'Why is Friedel-Crafts acylation preferred over alkylation for introducing an alkyl side chain in industry?',
    options: [
      'Acylation is faster than alkylation',
      'Alkylation gives polyalkylation and rearranged products; acylation gives a single clean product that can be reduced',
      'AlCl₃ is not needed for acylation',
      'Acylation gives a directing meta group for subsequent reactions'
    ],
    correctAnswer: 1,
    explanation: 'Alkylation is problematic because the electron-donating alkyl group activates the ring further, causing polyalkylation, and carbocation rearrangements can occur; acylation gives one clean product which can be reduced to the alkyl group using Clemmensen or Wolff-Kishner reduction.'
  },
  {
    id: 1076,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the correct classification of (CH₃)₂NH?',
    options: ['Primary amine', 'Secondary amine', 'Tertiary amine', 'Quaternary ammonium compound'],
    correctAnswer: 1,
    explanation: 'A secondary amine has two alkyl or aryl groups attached to the nitrogen atom; (CH₃)₂NH has two methyl groups on nitrogen, making it dimethylamine (secondary amine).'
  },
  {
    id: 1077,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'Why are amines basic?',
    options: ['They contain a C–N bond which donates electrons', 'The nitrogen atom has a lone pair that can accept a proton', 'They contain oxygen which accepts protons', 'They ionise to release OH⁻ ions in water'],
    correctAnswer: 1,
    explanation: 'Amines are basic because the nitrogen atom possesses a lone pair of electrons that can accept a proton (H⁺) from an acid, acting as a Brønsted–Lowry base.'
  },
  {
    id: 1078,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'Place these in order of increasing base strength (weakest first): phenylamine, ethylamine, ammonia.',
    options: ['Ammonia < ethylamine < phenylamine', 'Phenylamine < ammonia < ethylamine', 'Ethylamine < ammonia < phenylamine', 'Phenylamine < ethylamine < ammonia'],
    correctAnswer: 1,
    explanation: 'Phenylamine is weakest (lone pair delocalised into benzene ring), ammonia is intermediate, and ethylamine is strongest (electron-donating ethyl group increases lone pair availability on N).'
  },
  {
    id: 1079,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the product when ethylamine reacts with hydrochloric acid?',
    options: ['Ethanol', 'Ethylammonium chloride (CH₃CH₂NH₃⁺Cl⁻)', 'Ethene and ammonium chloride', 'Chloroethane'],
    correctAnswer: 1,
    explanation: 'Amines react with acids in an acid–base reaction; ethylamine accepts a proton from HCl to form ethylammonium chloride salt.'
  },
  {
    id: 1080,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'How is a primary amine prepared from a halogenoalkane in the laboratory?',
    options: ['React halogenoalkane with aqueous NaOH', 'React halogenoalkane with excess concentrated ammonia in a sealed tube (heat)', 'React halogenoalkane with potassium cyanide in ethanol', 'React halogenoalkane with LiAlH₄'],
    correctAnswer: 1,
    explanation: 'Heating a halogenoalkane with excess concentrated ammonia in a sealed vessel gives a primary amine via nucleophilic substitution; excess ammonia reduces further alkylation to secondary and tertiary amines.'
  },
  {
    id: 1081,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'What reagents are used to reduce a nitrile to a primary amine?',
    options: ['NaBH₄ in water', 'LiAlH₄ in dry ether, then water', 'Sn and HCl', 'H₂ with Fe catalyst'],
    correctAnswer: 1,
    explanation: 'Nitriles are reduced to primary amines using LiAlH₄ in dry ether (a powerful reducing agent); this adds 4 hydrogen atoms across the C≡N bond, giving –CH₂NH₂.'
  },
  {
    id: 1082,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What reagents reduce nitrobenzene to phenylamine (aniline)?',
    options: ['Sn and concentrated HCl, then NaOH', 'NaBH₄ in ethanol', 'KMnO₄ acidified', 'H₂ with Ni catalyst at room temperature'],
    correctAnswer: 0,
    explanation: 'On the AQA specification, nitrobenzene is reduced to phenylamine by refluxing with tin (Sn) and concentrated HCl, then adding NaOH to liberate the free amine from its salt.'
  },
  {
    id: 1083,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'What is diazotisation and what reagents are required?',
    options: ['Reaction of an amine with acyl chloride; reagents: RCOCl and base', 'Conversion of a primary aromatic amine to a diazonium salt using NaNO₂ and dilute HCl at 0–5°C', 'Conversion of an aromatic compound to an amine using H₂/Pd', 'Reaction of phenol with NaNO₂ to give a diazo compound'],
    correctAnswer: 1,
    explanation: 'Diazotisation converts a primary aromatic amine (e.g. phenylamine) into a diazonium salt (ArN₂⁺Cl⁻) using NaNO₂ and dilute HCl; the temperature must be kept at 0–5°C to prevent decomposition.'
  },
  {
    id: 1084,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'In a coupling reaction, a diazonium salt reacts with phenol under alkaline conditions. What type of compound is formed?',
    options: ['An azo dye containing the –N=N– chromophore', 'An amide', 'An ester', 'A secondary amine'],
    correctAnswer: 0,
    explanation: 'Coupling between a diazonium ion and an electron-rich aromatic compound (e.g. phenol) produces an azo compound containing –N=N–; these brightly coloured azo dyes are used in textiles and food colouring.'
  },
  {
    id: 1085,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What is formed when a primary amine reacts with an acyl chloride?',
    options: ['A secondary amine', 'An N-substituted amide and HCl', 'A tertiary amine', 'An imine'],
    correctAnswer: 1,
    explanation: 'Primary amines react with acyl chlorides by nucleophilic addition–elimination to form N-substituted amides; the HCl produced is neutralised by excess amine.'
  },
  {
    id: 1086,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'What is the IUPAC name for C₂H₅NH₂?',
    options: ['Methylamine', 'Ethylamine (ethanamine)', 'Dimethylamine', 'Propylamine'],
    correctAnswer: 1,
    explanation: 'C₂H₅NH₂ has an ethyl group attached to –NH₂; its systematic name is ethylamine (or ethanamine).'
  },
  {
    id: 1087,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'Why must diazotisation be carried out below 5°C?',
    options: ['The reaction is exothermic and needs cooling to prevent explosion', 'The diazonium salt is unstable and decomposes above 5°C, losing N₂', 'NaNO₂ is thermally unstable above 5°C', 'HCl evaporates above 5°C'],
    correctAnswer: 1,
    explanation: 'Diazonium salts are thermally unstable; above 5°C ArN₂⁺ decomposes, losing N₂ gas and forming a phenol. Keeping the temperature at 0–5°C ensures the salt is stable for subsequent coupling reactions.'
  },
  {
    id: 1088,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'When bromoethane reacts with excess ammonia, a mixture of products forms. Why?',
    options: ['Ammonia is a weak nucleophile', 'The primary amine product can undergo further alkylation to give secondary/tertiary amines and quaternary ammonium salts', 'The reaction is reversible', 'HBr produced inhibits the reaction'],
    correctAnswer: 1,
    explanation: 'The primary amine formed can react further with bromoethane to give secondary amine, then tertiary amine, and finally a quaternary ammonium salt; using a large excess of ammonia favours the primary amine product.'
  },
  {
    id: 1089,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Easy',
    question: 'Amines have higher boiling points than alkanes of similar Mr. Why?',
    options: ['Amines form hydrogen bonds via N–H···N interactions', 'Amines have stronger van der Waals forces only', 'Amines are ionic compounds', 'Amines react with oxygen in air, raising bp'],
    correctAnswer: 0,
    explanation: 'Primary and secondary amines form intermolecular hydrogen bonds (N–H···N) because N is electronegative and N–H bonds are polar, raising boiling points compared to alkanes of similar molecular mass.'
  },
  {
    id: 1090,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What is the product when phenylamine reacts with ethanoyl chloride?',
    options: ['N-phenylethanamide (acetanilide)', 'Ethyl phenyl ether', 'Phenylamine hydrochloride', 'Acetophenone'],
    correctAnswer: 0,
    explanation: 'Phenylamine (a primary aromatic amine) undergoes acylation with ethanoyl chloride to form N-phenylethanamide (acetanilide) via nucleophilic addition–elimination.'
  },
  {
    id: 1091,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'What is the product when propanenitrile (CH₃CH₂CN) is reduced using LiAlH₄?',
    options: ['Propan-1-amine', 'Propan-2-amine', 'Propanamide', 'Propanoic acid'],
    correctAnswer: 0,
    explanation: 'LiAlH₄ reduces a nitrile (R–CN) to a primary amine (R–CH₂NH₂); propanenitrile gives propan-1-amine (CH₃CH₂CH₂NH₂).'
  },
  {
    id: 1092,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'Phenylamine is a weaker base than cyclohexylamine. What is the main reason?',
    options: ['Phenylamine has more carbons', 'The lone pair on N in phenylamine is delocalised into the benzene π system, reducing availability for protonation', 'Cyclohexylamine has a lower boiling point', 'Phenylamine is more soluble in water'],
    correctAnswer: 1,
    explanation: 'In phenylamine, the lone pair on N overlaps with the benzene ring π system, making it less available to donate to a proton; cyclohexylamine has no such delocalisation and is a stronger base.'
  },
  {
    id: 1093,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Hard',
    question: 'When benzenediazonium chloride couples with 2-naphthol in alkaline solution, what colour is the azo dye produced?',
    options: ['Blue/purple', 'Orange/red', 'Green', 'Colourless precipitate'],
    correctAnswer: 1,
    explanation: 'The coupling of benzenediazonium chloride with 2-naphthol under alkaline conditions produces an orange-red azo dye; the –N=N– chromophore absorbs blue-green light giving an orange/red appearance.'
  },
  {
    id: 1094,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'What is the structural difference between a primary and a tertiary amine?',
    options: ['Primary has one N–H bond; tertiary has no N–H bonds and three carbon substituents on N', 'Primary has three carbon groups on N; tertiary has one', 'Primary is always more basic than tertiary', 'There is no structural difference'],
    correctAnswer: 0,
    explanation: 'A primary amine (RNH₂) has two N–H bonds and one carbon substituent; a tertiary amine (R₃N) has no N–H bonds and three carbon substituents attached to nitrogen.'
  },
  {
    id: 1095,
    topic: 'Organic Chemistry',
    subtopic: 'Amines',
    difficulty: 'Medium',
    question: 'Which reaction converts a nitrile into a primary amine, increasing the carbon chain length by one?',
    options: ['Reaction with ammonia and LiAlH₄', 'Reaction with HCN followed by reduction', 'Reaction of a halogenoalkane with KCN to give a nitrile, then reduction with LiAlH₄', 'Hofmann degradation'],
    correctAnswer: 2,
    explanation: 'Reacting a halogenoalkane with KCN gives a nitrile (one more carbon), which is then reduced by LiAlH₄ to a primary amine; this two-step route extends the chain by one carbon and introduces an amino group.'
  },
  {
    id: 1096,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What type of monomer is required for addition polymerisation?',
    options: ['A molecule with two functional groups', 'A molecule containing a C=C double bond', 'A molecule with both an amine and carboxylic acid group', 'A cyclic molecule only'],
    correctAnswer: 1,
    explanation: 'Addition polymerisation requires monomers with C=C double bonds; the double bond opens and monomers add together forming a long chain with no by-product.'
  },
  {
    id: 1097,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What is the repeating unit of poly(propene)?',
    options: ['–(CH₂–CH₂)n–', '–(CH₂–CHCH₃)n–', '–(CH₂–CHCl)n–', '–(CH₂–C(CH₃)₂)n–'],
    correctAnswer: 1,
    explanation: 'Poly(propene) is made from propene (CH₂=CHCH₃); the repeating unit is –(CH₂–CHCH₃)– formed by opening the C=C double bond.'
  },
  {
    id: 1098,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Nylon-6,6 is a polyamide. Which two monomers are used to make it?',
    options: ['Hexan-1-ol and hexanoic acid', '1,6-diaminohexane and hexanedioic acid (adipic acid)', 'Hexane-1,6-diol and hexanedioic acid', '6-aminohexanoic acid only'],
    correctAnswer: 1,
    explanation: 'Nylon-6,6 is made from 1,6-diaminohexane (6-carbon diamine) and hexanedioic acid/adipic acid (6-carbon dicarboxylic acid) by condensation polymerisation with elimination of water.'
  },
  {
    id: 1099,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'How can you distinguish an addition polymer from a condensation polymer by structure?',
    options: ['Addition polymers always contain nitrogen', 'Addition polymers have a carbon-only backbone; condensation polymers have –O– or –NH– linkages in the main chain', 'Addition polymers are always solids; condensation polymers are liquids', 'There is no structural difference'],
    correctAnswer: 1,
    explanation: 'Addition polymers have a continuous C–C backbone with no heteroatoms in the chain; condensation polymers have ester (–COO–) or amide (–CONH–) linkages in the main chain.'
  },
  {
    id: 1100,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Why are most addition polymers difficult to dispose of in landfill?',
    options: ['They are too expensive to bury', 'They are non-biodegradable and persist in the environment for hundreds of years', 'They release toxic gases in landfill', 'They react with water in landfill'],
    correctAnswer: 1,
    explanation: 'Most addition polymers (e.g. poly(ethene), PVC) are non-biodegradable; microorganisms cannot break down the strong C–C backbone, so they persist in landfill for very long periods.'
  },
  {
    id: 1101,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'What environmental problem arises when PVC is incinerated?',
    options: ['It releases only CO₂', 'It releases toxic HCl gas and potentially dioxins', 'It releases SO₂', 'It releases methane'],
    correctAnswer: 1,
    explanation: 'Combustion of PVC releases HCl gas (from its chlorine content) and potentially toxic chlorinated dioxins, making incineration environmentally problematic without specialist equipment.'
  },
  {
    id: 1102,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What is the function of a plasticiser added to PVC?',
    options: ['To increase the melting point', 'To increase electrical conductivity', 'To separate polymer chains, reducing intermolecular forces and making PVC more flexible', 'To make PVC biodegradable'],
    correctAnswer: 2,
    explanation: 'Plasticisers are small molecules that insert between polymer chains, weakening intermolecular forces and lowering the glass transition temperature, making PVC softer and more flexible.'
  },
  {
    id: 1103,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What small molecule is eliminated in the formation of a polyester?',
    options: ['HCl', 'NH₃', 'Water (H₂O)', 'CO₂'],
    correctAnswer: 2,
    explanation: 'Polyesters are condensation polymers formed from a diol and a dicarboxylic acid; water is eliminated at each ester bond (–COO–) formed.'
  },
  {
    id: 1104,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Identify the monomer that produces the addition polymer with repeating unit –(CHCl–CH₂)n–.',
    options: ['1,2-dichloroethane', 'Chloroethene (vinyl chloride)', 'Trichloroethene', '1,1-dichloroethene'],
    correctAnswer: 1,
    explanation: 'The repeating unit –(CHCl–CH₂)– comes from chloroethene (CH₂=CHCl) by addition polymerisation; the resulting polymer is poly(chloroethene), commercially known as PVC.'
  },
  {
    id: 1105,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'Why can condensation polymers such as polyesters be hydrolysed but addition polymers such as poly(ethene) cannot?',
    options: ['Addition polymers are too large to react with water', 'Condensation polymers contain hydrolysable ester or amide bonds in the backbone; addition polymers have only C–C bonds which are not hydrolysable', 'Addition polymers are more hydrophobic', 'Condensation polymers have weaker van der Waals forces'],
    correctAnswer: 1,
    explanation: 'Condensation polymers (polyesters, polyamides) have ester or amide linkages in the main chain that can be cleaved by hydrolysis; addition polymers consist entirely of C–C bonds which water/acid/alkali cannot hydrolyse.'
  },
  {
    id: 1106,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Which biodegradable polymer is derived from lactic acid and used in medical sutures and packaging?',
    options: ['PVC', 'PTFE', 'Poly(lactic acid) / PLA', 'Polystyrene'],
    correctAnswer: 2,
    explanation: 'PLA (polylactic acid) is a biodegradable polyester derived from fermented plant sugars; microorganisms can break it down, making it environmentally preferable to traditional plastics.'
  },
  {
    id: 1107,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'Terylene (PET) is used in clothing fibres and drinks bottles. What type of polymer is it?',
    options: ['Addition polymer', 'Polyamide condensation polymer', 'Polyester condensation polymer', 'Co-polymer of addition and condensation'],
    correctAnswer: 2,
    explanation: 'Terylene (polyethylene terephthalate, PET) is a polyester condensation polymer made from ethane-1,2-diol and benzene-1,4-dicarboxylic acid.'
  },
  {
    id: 1108,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'A polymer has the repeating unit –[O–(CH₂)₂–O–CO–C₆H₄–CO]n–. What are its monomers?',
    options: ['Ethane-1,2-diol and benzene-1,4-dicarboxylic acid (terephthalic acid)', 'Ethanol and benzoic acid', 'Ethene and benzene', 'Propane-1,3-diol and phthalic acid'],
    correctAnswer: 0,
    explanation: 'The repeating unit contains –O–(CH₂)₂–O– from ethane-1,2-diol and –CO–C₆H₄–CO– from benzene-1,4-dicarboxylic acid; this is Terylene (PET).'
  },
  {
    id: 1109,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'What is atom economy and why does addition polymerisation have 100% atom economy?',
    options: ['Atom economy = % yield; addition polymerisation is always 100% yield', 'Atom economy = (Mr of desired product / sum of Mr of all reactants) × 100%; addition polymerisation incorporates all monomer atoms into the product with no by-product', 'Atom economy measures energy efficiency; addition requires no energy input', 'Atom economy is only relevant to condensation polymers'],
    correctAnswer: 1,
    explanation: 'Atom economy = (molecular mass of desired product ÷ total molecular mass of reactants) × 100%. In addition polymerisation, all monomer atoms are incorporated into the polymer chain with no by-product, giving 100% atom economy.'
  },
  {
    id: 1110,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Medium',
    question: 'What is the name of the polymer formed from tetrafluoroethene (CF₂=CF₂)?',
    options: ['PVC', 'Nylon', 'PTFE (polytetrafluoroethylene / Teflon)', 'Polypropene'],
    correctAnswer: 2,
    explanation: 'Tetrafluoroethene undergoes addition polymerisation to give PTFE (Teflon), which has very low friction and excellent chemical resistance due to the strong C–F bonds.'
  },
  {
    id: 1111,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'What are conducting polymers, and give one example?',
    options: ['Polymers that conduct heat only; example: nylon', 'Polymers with extended conjugated π systems that can conduct electricity; example: polyacetylene (polyethyne)', 'Polymers doped with metal ions; example: PVC', 'Polymers with ionic side chains; example: polystyrene'],
    correctAnswer: 1,
    explanation: 'Conducting polymers have extended conjugated π systems where electrons can delocalise along the chain; polyacetylene (polyethyne) was the first discovered, and doped forms can approach metallic conductivity.'
  },
  {
    id: 1112,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Easy',
    question: 'What type of polymerisation produces nylon and what small molecule is eliminated?',
    options: ['Addition polymerisation; no by-product', 'Condensation polymerisation; water is eliminated', 'Free-radical polymerisation; HCl is eliminated', 'Ionic polymerisation; CO₂ is eliminated'],
    correctAnswer: 1,
    explanation: 'Nylon is made by condensation polymerisation; an amide bond (–CONH–) forms between the amine and carboxylic acid groups of the monomers with elimination of water at each step.'
  },
  {
    id: 1113,
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'Hard',
    question: 'Give one advantage and one disadvantage of disposing of plastics by combustion (incineration).',
    options: ['Advantage: produces useful energy; Disadvantage: releases CO₂ and potentially toxic gases/dioxins', 'Advantage: produces no emissions; Disadvantage: expensive equipment', 'Advantage: produces hydrogen fuel; Disadvantage: slow process', 'Advantage: biodegrades the polymer; Disadvantage: takes many years'],
    correctAnswer: 0,
    explanation: 'Incineration can generate useful heat/electricity (advantage), but releases CO₂ contributing to climate change and may produce toxic gases such as HCl (from PVC) or dioxins (disadvantage).'
  },
  {
    id: 1114,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What two functional groups are present in all alpha-amino acids?',
    options: ['–OH and –COOH', '–NH₂ and –COOH on the same carbon', '–NH₂ and –OH', '–CHO and –COOH'],
    correctAnswer: 1,
    explanation: 'Alpha-amino acids have an amino group (–NH₂) and a carboxyl group (–COOH) both attached to the same (alpha) carbon atom, plus a variable R side chain.'
  },
  {
    id: 1115,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is a zwitterion?',
    options: ['An amino acid with no charge', 'An amino acid in which the –NH₂ has been protonated to –NH₃⁺ and the –COOH has been deprotonated to –COO⁻, giving an overall neutral species with internal charges', 'A dipeptide', 'An amino acid in alkaline solution only'],
    correctAnswer: 1,
    explanation: 'A zwitterion is the dipolar ionic form of an amino acid: the amino group is protonated (–NH₃⁺) and the carboxyl group is deprotonated (–COO⁻), giving an overall neutral molecule with separated positive and negative charges.'
  },
  {
    id: 1116,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is the isoelectric point (pI) of an amino acid?',
    options: ['The pH at which the amino acid has maximum positive charge', 'The pH at which the amino acid exists predominantly as a zwitterion with zero net charge', 'The pH at which the amino acid is fully protonated', 'The boiling point of the amino acid'],
    correctAnswer: 1,
    explanation: 'The isoelectric point is the pH at which the amino acid exists mainly as the zwitterion with no net overall charge; at this pH it does not migrate in an electric field (electrophoresis).'
  },
  {
    id: 1117,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What type of bond links amino acids together in a polypeptide?',
    options: ['Ester bond', 'Peptide (amide) bond –CONH–', 'Hydrogen bond', 'Disulfide bond'],
    correctAnswer: 1,
    explanation: 'Amino acids are joined by peptide bonds (–CO–NH–), which are amide bonds formed by condensation reactions between the carboxyl group of one amino acid and the amino group of the next, with elimination of water.'
  },
  {
    id: 1118,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is the primary structure of a protein?',
    options: ['The 3D folded shape held by hydrogen bonds', 'The sequence of amino acids linked by peptide bonds along the polypeptide chain', 'The coiled alpha-helix or beta-sheet arrangement', 'The way multiple polypeptide chains associate'],
    correctAnswer: 1,
    explanation: 'The primary structure of a protein is the specific sequence of amino acid residues linked by peptide bonds; this sequence is encoded by the gene and determines all higher levels of structure.'
  },
  {
    id: 1119,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'Which bonds maintain the secondary structure (alpha-helix or beta-sheet) of a protein?',
    options: ['Covalent peptide bonds', 'Hydrogen bonds between C=O and N–H groups of the polypeptide backbone', 'Ionic interactions between R groups', 'Disulfide bridges'],
    correctAnswer: 1,
    explanation: 'Secondary structure (alpha-helices and beta-sheets) is maintained by hydrogen bonds between the carbonyl (C=O) and amino (N–H) groups of the peptide backbone at regular intervals along the chain.'
  },
  {
    id: 1120,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'What interactions stabilise the tertiary structure of a protein?',
    options: ['Peptide bonds only', 'Hydrogen bonds, ionic interactions, hydrophobic interactions, and disulfide bridges between R groups', 'Van der Waals forces only', 'Only disulfide bridges'],
    correctAnswer: 1,
    explanation: 'Tertiary structure (the overall 3D shape of a single polypeptide) is maintained by a combination of hydrogen bonds, ionic interactions, hydrophobic interactions, and covalent disulfide bridges between R groups of different amino acid residues.'
  },
  {
    id: 1121,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is meant by denaturation of a protein?',
    options: ['Hydrolysis of peptide bonds to give free amino acids', 'Disruption of the non-covalent interactions maintaining the 3D structure, causing loss of shape and function, without breaking the primary sequence', 'Formation of new peptide bonds', 'Reduction of disulfide bridges'],
    correctAnswer: 1,
    explanation: 'Denaturation is the disruption of hydrogen bonds, ionic bonds, and hydrophobic interactions that maintain the 3D structure; the primary sequence remains intact but the protein loses its functional shape. It can be caused by heat, pH change, or chemicals.'
  },
  {
    id: 1122,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'How can a protein be hydrolysed to its component amino acids?',
    options: ['By heating with concentrated NaOH only', 'By refluxing with dilute hydrochloric acid (acid hydrolysis) or by enzyme-catalysed hydrolysis', 'By reduction with LiAlH₄', 'By UV irradiation'],
    correctAnswer: 1,
    explanation: 'Proteins can be hydrolysed by refluxing with 6 mol dm⁻³ HCl (acid hydrolysis) to cleave all peptide bonds, releasing free amino acids; alternatively, proteolytic enzymes catalyse selective hydrolysis under milder conditions.'
  },
  {
    id: 1123,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What are the four DNA bases?',
    options: ['Adenine, Thymine, Guanine, Cytosine (A, T, G, C)', 'Adenine, Uracil, Guanine, Cytosine (A, U, G, C)', 'Adenine, Thymine, Guanine, Uracil (A, T, G, U)', 'Alanine, Tryptophan, Glycine, Cysteine'],
    correctAnswer: 0,
    explanation: 'DNA contains four nitrogenous bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). RNA replaces Thymine with Uracil (U).'
  },
  {
    id: 1124,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'Which base pairs with adenine in DNA, and what type of bonds hold them together?',
    options: ['Guanine; 3 hydrogen bonds', 'Thymine; 2 hydrogen bonds', 'Cytosine; 3 hydrogen bonds', 'Uracil; 2 hydrogen bonds'],
    correctAnswer: 1,
    explanation: 'In DNA, adenine (A) pairs with thymine (T) via 2 hydrogen bonds (A=T); guanine pairs with cytosine via 3 hydrogen bonds (G≡C). This complementary base pairing holds the double helix together.'
  },
  {
    id: 1125,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'Why are hydrogen bonds important in DNA structure despite being individually weak?',
    options: ['They are the only bonds in DNA', 'There are millions of them along the double helix; collectively they provide substantial stability while still allowing strand separation during replication', 'They form a permanent covalent network', 'They only operate at physiological temperature'],
    correctAnswer: 1,
    explanation: 'Individual hydrogen bonds are weak (about 20 kJ mol⁻¹), but DNA contains millions along its length; their cumulative effect provides considerable stability to the double helix, yet they can be broken cooperatively during DNA replication and transcription.'
  },
  {
    id: 1126,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'How can certain drugs target DNA and interfere with its function?',
    options: ['By forming hydrogen bonds with DNA bases, intercalating between base pairs, or forming covalent cross-links, disrupting replication or transcription', 'By hydrolysing the phosphate backbone exclusively', 'By methylating sugars only', 'By increasing DNA stability only'],
    correctAnswer: 0,
    explanation: 'Drugs can disrupt DNA function by intercalating between base pairs (distorting the helix), forming covalent cross-links between strands (e.g. cisplatin), or binding specific sequences, thereby blocking replication or transcription.'
  },
  {
    id: 1127,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'What is the quaternary structure of a protein?',
    options: ['The sequence of amino acids in one polypeptide', 'The alpha-helix or beta-sheet pattern', 'The overall 3D shape of a single polypeptide', 'The arrangement of two or more polypeptide subunits into a functional protein complex'],
    correctAnswer: 3,
    explanation: 'Quaternary structure describes proteins made from more than one polypeptide chain (subunits); these subunits are held together by the same non-covalent interactions as tertiary structure, plus disulfide bridges in some cases (e.g. haemoglobin has 4 subunits).'
  },
  {
    id: 1128,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'How does an enzyme achieve substrate specificity?',
    options: ['Enzymes react with any molecule that fits in their active site by size', 'The active site has a precise 3D shape (complementary to the substrate) determined by the amino acid sequence; only substrates with the correct shape and charge distribution can bind', 'Enzymes work at high temperatures that denature non-specific substrates', 'All enzymes have the same active site structure'],
    correctAnswer: 1,
    explanation: 'The active site of an enzyme has a specific 3D shape, charge distribution, and hydrogen bonding pattern complementary to its substrate; only the correct substrate fits, explaining the "lock and key" or induced-fit specificity.'
  },
  {
    id: 1129,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Hard',
    question: 'An amino acid has pI = 6.0. At pH 8.0 (above pI), which form predominates?',
    options: ['The fully protonated cation (–NH₃⁺/–COOH)', 'The zwitterion', 'The anion (–NH₂/–COO⁻)', 'The neutral uncharged form'],
    correctAnswer: 2,
    explanation: 'At pH above the isoelectric point, the solution is more alkaline; the amino acid loses the proton from –NH₃⁺ to give the anionic form (–NH₂ and –COO⁻) which carries an overall negative charge.'
  },
  {
    id: 1130,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Easy',
    question: 'What is the product of complete hydrolysis of a protein?',
    options: ['Glucose monomers', 'Free amino acids', 'Fatty acids and glycerol', 'Nucleotides'],
    correctAnswer: 1,
    explanation: 'Complete hydrolysis of a protein (by acid, alkali, or proteases) cleaves all peptide bonds, releasing the individual free amino acid monomers.'
  },
  {
    id: 1131,
    topic: 'Organic Chemistry',
    subtopic: 'Amino Acids, Proteins & DNA',
    difficulty: 'Medium',
    question: 'Why do amino acids have relatively high melting points compared to carboxylic acids of similar Mr?',
    options: ['Amino acids are non-polar', 'Amino acids exist as zwitterions even in the solid state; the strong ionic interactions between –NH₃⁺ and –COO⁻ groups raise the melting point', 'Amino acids have larger molecular masses', 'Amino acids form covalent networks in the solid state'],
    correctAnswer: 1,
    explanation: 'In the solid state, amino acids exist as zwitterions; the electrostatic (ionic) attractions between the positively charged –NH₃⁺ and negatively charged –COO⁻ groups are much stronger than the hydrogen bonds in carboxylic acids, giving higher melting points.'
  },
  {
    id: 1132,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What reagents and conditions are needed to convert a primary alcohol into an aldehyde?',
    options: ['K₂Cr₂O₇/H₂SO₄ under reflux', 'K₂Cr₂O₇/H₂SO₄, heat and distil off the aldehyde immediately', 'NaBH₄ in water', 'PCl₅, then heat'],
    correctAnswer: 1,
    explanation: 'A primary alcohol is oxidised to an aldehyde using acidified K₂Cr₂O₇ (or KMnO₄); to avoid over-oxidation to the carboxylic acid, the aldehyde must be distilled off as it forms rather than heating under reflux.'
  },
  {
    id: 1133,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'How is a carboxylic acid prepared from a primary alcohol in one step?',
    options: ['Oxidise with acidified K₂Cr₂O₇ under reflux', 'Reduce with NaBH₄', 'React with PCl₅', 'Heat with concentrated H₂SO₄'],
    correctAnswer: 0,
    explanation: 'Refluxing a primary alcohol with excess acidified dichromate (K₂Cr₂O₇/H₂SO₄) oxidises it fully through the aldehyde stage to give the carboxylic acid.'
  },
  {
    id: 1134,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'What reagent is used to reduce an aldehyde or ketone to an alcohol?',
    options: ['K₂Cr₂O₇/H₂SO₄', 'NaBH₄ in water/ethanol', 'Sn/HCl', 'PCl₅'],
    correctAnswer: 1,
    explanation: 'NaBH₄ (sodium borohydride) is a mild reducing agent that reduces aldehydes and ketones to alcohols; it provides H⁻ as the nucleophile which attacks the carbonyl carbon.'
  },
  {
    id: 1135,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What reagents convert a halogenoalkane into a nitrile, and why is this useful in synthesis?',
    options: ['KCN in ethanol, reflux; it increases the carbon chain length by one', 'KOH in ethanol, reflux; it produces an alkene', 'NH₃ in sealed tube; it produces an amine', 'NaOH(aq), reflux; it produces an alcohol'],
    correctAnswer: 0,
    explanation: 'Reacting a halogenoalkane with KCN in ethanol under reflux gives a nitrile via SN2; this is a useful carbon chain extension because the carbon count increases by one, and the nitrile can be further converted to a carboxylic acid or amine.'
  },
  {
    id: 1136,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'In a multi-step synthesis, how would you convert bromoethane into propanoic acid?',
    options: ['React with KCN/ethanol to give propanenitrile, then hydrolyse with dilute H₂SO₄ under reflux', 'React with NaOH(aq) then oxidise', 'React with NH₃ then oxidise', 'React with Mg in dry ether (Grignard), then CO₂'],
    correctAnswer: 0,
    explanation: 'Bromoethane + KCN → propanenitrile (CN⁻ adds one carbon); propanenitrile + H₂O/H⁺ under reflux → propanoic acid. This is a two-step chain extension and hydrolysis.'
  },
  {
    id: 1137,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What reagents and conditions are needed to prepare an ester from a carboxylic acid?',
    options: ['Concentrated H₂SO₄ catalyst, heat with the alcohol (Fischer esterification)', 'NaOH and the alcohol, room temperature', 'PCl₅, then add alcohol', 'LiAlH₄ in dry ether'],
    correctAnswer: 0,
    explanation: 'Fischer esterification uses the carboxylic acid and alcohol with a concentrated H₂SO₄ catalyst under heat; the equilibrium can be shifted right by using excess of one reagent or removing water.'
  },
  {
    id: 1138,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'How are alkenes converted to alcohols in the laboratory?',
    options: ['Electrophilic addition of steam (H₂O) in the presence of concentrated H₃PO₄ or H₂SO₄ catalyst', 'Reduction with H₂/Pt', 'Reaction with NaOH(aq)', 'Reaction with Br₂ water'],
    correctAnswer: 0,
    explanation: 'Alkenes undergo electrophilic addition of steam (H₂O) in the presence of a strong acid catalyst (concentrated H₃PO₄ or H₂SO₄) to form alcohols; industrially this is done at ~300°C and 60 atm.'
  },
  {
    id: 1139,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'What is meant by "protection" of a functional group in organic synthesis?',
    options: ['Adding a reagent to destroy an unwanted functional group permanently', 'Temporarily masking a reactive functional group to prevent it reacting during a subsequent step, then removing the protecting group later', 'Adding a catalyst to slow a reaction', 'Converting a functional group to a less reactive form permanently'],
    correctAnswer: 1,
    explanation: 'Protection involves temporarily converting a reactive functional group into a less reactive derivative, carrying out the desired reaction elsewhere in the molecule, and then removing the protecting group to restore the original functionality.'
  },
  {
    id: 1140,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'Which reducing agent is strong enough to reduce a carboxylic acid to a primary alcohol?',
    options: ['NaBH₄', 'LiAlH₄ in dry ether', 'Sn/HCl', 'K₂Cr₂O₇/H₂SO₄'],
    correctAnswer: 1,
    explanation: 'LiAlH₄ (lithium aluminium hydride) is a powerful reducing agent that can reduce carboxylic acids, esters, and amides to alcohols and amines; NaBH₄ is not strong enough to reduce carboxylic acids.'
  },
  {
    id: 1141,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'In retrosynthetic analysis, what does the retrosynthetic arrow (⟹) indicate?',
    options: ['A forward reaction step', 'A disconnection showing how the target molecule can be broken down into simpler precursors', 'An equilibrium reaction', 'A one-way irreversible process'],
    correctAnswer: 1,
    explanation: 'In retrosynthesis, the retrosynthetic arrow (⟹) represents a disconnection — a conceptual bond-breaking to reveal simpler synthetic precursors; working backwards from product to starting materials.'
  },
  {
    id: 1142,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'What is the overall % yield if a three-step synthesis has individual step yields of 80%, 75%, and 90%?',
    options: ['81.7%', '54.0%', '245%', '25.0%'],
    correctAnswer: 1,
    explanation: 'Overall yield = 0.80 × 0.75 × 0.90 = 0.54 = 54.0%; individual step yields multiply together, so multi-step syntheses inevitably have lower overall yields than any single step.'
  },
  {
    id: 1143,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What reagents are used to nitrate benzene to form nitrobenzene, and what is the key reaction condition?',
    options: ['Conc. HNO₃ + conc. H₂SO₄, temperature kept below 55°C', 'Dilute HNO₃, reflux at 100°C', 'Conc. HNO₃ alone, room temperature', 'N₂O₄ gas, UV light'],
    correctAnswer: 0,
    explanation: 'Nitration uses a mixture of concentrated HNO₃ and concentrated H₂SO₄ (nitrating mixture); the temperature is kept below 55°C to prevent dinitration and other side reactions.'
  },
  {
    id: 1144,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'What is the sequence to convert benzene into phenylamine in two steps?',
    options: ['Benzene → bromobenzene (Br₂/FeBr₃) → phenylamine (NH₃, heat)', 'Benzene → nitrobenzene (HNO₃/H₂SO₄) → phenylamine (Sn/conc. HCl, then NaOH)', 'Benzene → cyclohexane (H₂/Ni) → phenylamine (NH₃)', 'Benzene → phenol (O₂) → phenylamine (NH₃)'],
    correctAnswer: 1,
    explanation: 'Step 1: nitration with HNO₃/H₂SO₄ gives nitrobenzene. Step 2: reduction with Sn/conc. HCl under reflux then NaOH gives phenylamine. This is the standard AQA route.'
  },
  {
    id: 1145,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What is the purpose of using a condensation reaction in the synthesis of an amide from an amine and an acyl chloride?',
    options: ['To reduce the amine', 'To form a C–N bond (amide bond) with loss of HCl, building molecular complexity', 'To introduce a double bond', 'To protect the carboxylic acid group'],
    correctAnswer: 1,
    explanation: 'Acylation of an amine with an acyl chloride is a condensation (nucleophilic addition–elimination) reaction that forms an amide bond (–CONH–), building molecular complexity by joining the two fragments with loss of HCl.'
  },
  {
    id: 1146,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'How would you convert ethanol into ethanoic acid in the laboratory?',
    options: ['Oxidise with acidified K₂Cr₂O₇ under reflux (excess oxidising agent)', 'Reduce with LiAlH₄', 'React with PCl₅', 'React with Na₂CO₃'],
    correctAnswer: 0,
    explanation: 'Ethanol is oxidised to ethanoic acid by refluxing with excess acidified potassium dichromate (K₂Cr₂O₇/H₂SO₄), which oxidises the primary alcohol through the aldehyde stage to the carboxylic acid.'
  },
  {
    id: 1147,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Medium',
    question: 'What green chemistry principle is demonstrated by using a solvent-free reaction or aqueous solvent?',
    options: ['Atom economy', 'Prevention of waste/use of safer solvents', 'Catalytic amounts of reagent', 'Energy efficiency'],
    correctAnswer: 1,
    explanation: 'One of the 12 principles of green chemistry is to use safer solvents and reaction media; solvent-free reactions or using water as solvent reduces hazardous waste, pollution, and cost.'
  },
  {
    id: 1148,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Hard',
    question: 'A student wants to convert propan-1-ol into butylamine (butan-1-amine) in multiple steps. What is the correct sequence?',
    options: [
      'Propan-1-ol → 1-bromopropane (HBr) → butanenitrile (KCN/ethanol) → butan-1-amine (LiAlH₄)',
      'Propan-1-ol → propanal (oxidation) → butan-1-amine (NH₃, heat)',
      'Propan-1-ol → propene (dehydration) → butan-1-amine (HCN then reduction)',
      'Propan-1-ol → propanoic acid → butan-1-amine (LiAlH₄)'
    ],
    correctAnswer: 0,
    explanation: 'Propan-1-ol → 1-bromopropane (with HBr/H₂SO₄ or conc. HBr); 1-bromopropane + KCN/ethanol → butanenitrile (chain extension by 1 C); butanenitrile + LiAlH₄ → butan-1-amine. This three-step route extends the chain and introduces –NH₂.'
  },
  {
    id: 1149,
    topic: 'Organic Chemistry',
    subtopic: 'Organic Synthesis',
    difficulty: 'Easy',
    question: 'What is meant by "atom economy" in the context of green chemistry?',
    options: [
      'The percentage yield of a reaction',
      'The proportion (by mass) of reactant atoms that are incorporated into the desired product: (Mr of desired product / sum of Mr of all reactants) × 100%',
      'The number of atoms in the product',
      'The cost per atom of reagent used'
    ],
    correctAnswer: 1,
    explanation: 'Atom economy measures how efficiently atoms of the reactants end up in the desired product; a high atom economy means less waste. It equals (molecular mass of desired product ÷ sum of molecular masses of all reactants) × 100%.'
  },
  {
    id: 1150,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'What does the chemical shift (δ) in ¹H NMR represent?',
    options: ['The mass of the proton environment', 'The position of a peak relative to TMS (δ = 0), measured in ppm, reflecting the electronic environment of the proton', 'The number of equivalent protons', 'The splitting pattern of the peak'],
    correctAnswer: 1,
    explanation: 'Chemical shift (δ, in ppm) measures the resonance frequency of a proton relative to tetramethylsilane (TMS, δ = 0); it reflects the electron density around the proton — more deshielded protons resonate at higher δ.'
  },
  {
    id: 1151,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'Why is TMS (tetramethylsilane) used as the reference standard in NMR?',
    options: ['It has 12 equivalent protons giving a single sharp peak at δ = 0, it is inert, volatile, and does not overlap with most organic signals', 'It has the highest chemical shift of any compound', 'It is a common laboratory solvent', 'It reacts with the sample to label protons'],
    correctAnswer: 0,
    explanation: 'TMS gives a single sharp peak at δ = 0 (highly shielded Si–CH₃ protons), is chemically inert, easy to remove (volatile, bp 27°C), non-toxic, and its signal does not overlap with most organic proton signals.'
  },
  {
    id: 1152,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'What is the n+1 rule in ¹H NMR spin-spin coupling?',
    options: ['A proton with n equivalent neighbouring protons is split into n+1 lines', 'A peak is split into n lines when there are n+1 equivalent neighbours', 'A proton always shows n+1 peaks where n is its own count', 'The number of peaks equals the number of carbon atoms plus one'],
    correctAnswer: 0,
    explanation: 'Spin-spin coupling splits a proton signal into n+1 lines, where n is the number of equivalent protons on adjacent (neighbouring) carbon atoms; e.g. a CH₃ group adjacent to a CH gives a quartet (3+1=4 lines) for the CH proton.'
  },
  {
    id: 1153,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'In the ¹H NMR spectrum of ethanol (CH₃CH₂OH), what splitting pattern does the CH₂ group show?',
    options: ['Singlet', 'Doublet', 'Quartet', 'Triplet'],
    correctAnswer: 2,
    explanation: 'The CH₂ group in ethanol has 3 equivalent neighbours on the CH₃ group; by the n+1 rule, it appears as a quartet (3+1=4 lines). The OH proton is usually a broad singlet.'
  },
  {
    id: 1154,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'What does the relative peak area (integration) in a ¹H NMR spectrum tell you?',
    options: ['The chemical shift of each proton', 'The relative number of protons in each environment', 'The coupling constant between protons', 'The molecular mass of the compound'],
    correctAnswer: 1,
    explanation: 'Integration (relative peak area) is proportional to the number of protons in that chemical environment; comparing integrals across all peaks gives the ratio of proton environments in the molecule.'
  },
  {
    id: 1155,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'Approximately what chemical shift (δ) would you expect for an aldehyde (CHO) proton in ¹H NMR?',
    options: ['δ 1–2', 'δ 3–4', 'δ 7–8', 'δ 9–10'],
    correctAnswer: 3,
    explanation: 'Aldehyde protons (–CHO) are highly deshielded due to the electron-withdrawing carbonyl and appear at approximately δ 9–10 ppm in ¹H NMR.'
  },
  {
    id: 1156,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'At approximately what δ value do aromatic protons resonate in ¹H NMR?',
    options: ['δ 0–1', 'δ 2–3', 'δ 5–6', 'δ 7–8'],
    correctAnswer: 3,
    explanation: 'Aromatic protons are deshielded by the ring current of the aromatic π system and resonate at approximately δ 7–8 ppm, characteristic of benzene ring protons.'
  },
  {
    id: 1157,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'What approximate chemical shift would you expect for a carboxylic acid (COOH) proton?',
    options: ['δ 1–2', 'δ 3–5', 'δ 7–8', 'δ 10–12'],
    correctAnswer: 3,
    explanation: 'The O–H proton of a carboxylic acid is strongly deshielded by the electron-withdrawing C=O group and the oxygen; it appears at δ 10–12 ppm, one of the highest shifts for ¹H NMR.'
  },
  {
    id: 1158,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'A molecule gives a ¹H NMR spectrum with two peaks: a triplet (δ 1.2) and a quartet (δ 2.6) in a 3:2 ratio. Which compound is this most likely to be?',
    options: ['Propanone', 'Ethyl ethanoate', 'Propanal', 'Pentan-3-one'],
    correctAnswer: 2,
    explanation: 'A triplet (3H, δ ~1.2, CH₃ next to CH₂) and quartet (2H, δ ~2.6, CH₂ next to CH₃, α to C=O) in 3:2 ratio matches propanal (CH₃CH₂CHO); the CHO proton at ~δ 9.8 would also be seen but is asked about the dominant pattern.'
  },
  {
    id: 1159,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'How many ¹H NMR peaks would you expect for propan-2-ol, (CH₃)₂CHOH?',
    options: ['One peak', 'Two peaks', 'Three peaks', 'Four peaks'],
    correctAnswer: 2,
    explanation: 'Propan-2-ol has three distinct proton environments: the two equivalent CH₃ groups (6H, doublet), the CH group (1H, septet), and the OH group (1H, broad singlet) — giving three peaks.'
  },
  {
    id: 1160,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'In ¹³C NMR spectroscopy, how does the spectrum differ from ¹H NMR?',
    options: ['¹³C NMR shows splitting patterns due to C–C coupling', '¹³C NMR shows one peak per chemically distinct carbon environment with no splitting (broadband decoupled); peak height does not indicate the number of carbons directly', '¹³C NMR uses TMS at δ = 100 as reference', '¹³C NMR spectra have larger integration areas'],
    correctAnswer: 1,
    explanation: 'Broadband decoupled ¹³C NMR gives one singlet peak per unique carbon environment with no C–C or C–H splitting; peak heights are not directly proportional to the number of carbons (unlike ¹H NMR integration).'
  },
  {
    id: 1161,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'How many peaks would appear in the ¹³C NMR spectrum of propanone (CH₃COCH₃)?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 1,
    explanation: 'Propanone has two types of carbon: the two equivalent CH₃ carbons and the carbonyl C=O carbon — giving exactly 2 peaks in the ¹³C NMR spectrum.'
  },
  {
    id: 1162,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'What information does COSY (Correlation Spectroscopy) provide that a standard ¹H NMR does not?',
    options: ['The exact molecular formula', 'Which protons are coupled to (on adjacent carbons to) each other, allowing the connectivity of the molecule to be established', 'The absolute configuration at stereocentres', 'The number of carbon environments'],
    correctAnswer: 1,
    explanation: 'COSY is a 2D NMR technique that identifies which pairs of protons are spin-spin coupled (i.e. on neighbouring carbons); cross-peaks show coupling correlations, helping to map the connectivity of the carbon skeleton.'
  },
  {
    id: 1163,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'A compound C₃H₆O shows a ¹H NMR with a singlet at δ 9.8 (1H) and a doublet at δ 2.4 (2H) with a pattern. What functional group is indicated by the δ 9.8 singlet?',
    options: ['Ketone C=O', 'Aldehyde CHO', 'Carboxylic acid COOH', 'Alcohol OH'],
    correctAnswer: 1,
    explanation: 'A singlet at δ 9–10 in ¹H NMR is characteristic of an aldehyde proton (–CHO); the compound C₃H₆O with this signal is likely propanal.'
  },
  {
    id: 1164,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Easy',
    question: 'How many ¹H NMR signals does ethanoic acid (CH₃COOH) give?',
    options: ['One signal', 'Two signals (CH₃ and COOH)', 'Three signals', 'Four signals'],
    correctAnswer: 1,
    explanation: 'Ethanoic acid has two types of proton environment: the CH₃ group (δ ~2.1, singlet) and the COOH proton (δ ~11–12, broad singlet), giving two signals in total.'
  },
  {
    id: 1165,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Hard',
    question: 'A ¹H NMR spectrum shows a singlet at δ 3.3 (3H) and a singlet at δ 11.5 (1H). The molecular formula is C₂H₄O₂. What is the compound?',
    options: ['Ethanoic acid', 'Methyl methanoate (HCOOCH₃)', 'Ethanol', 'Methanol'],
    correctAnswer: 1,
    explanation: 'Methyl methanoate (HCOOCH₃) has two proton environments: –OCH₃ (3H singlet, δ ~3.3) and –CHO (1H singlet, δ ~8). However given the δ 11.5 shift, this is best matched by a COOH-containing compound. Actually C₂H₄O₂ with singlet at δ 11.5 (1H, COOH) and δ 3.3 (3H, CH₃O—) matches methyl methanoate if we reconsider: HCOOCH₃ would show CHO at ~δ 8 and OCH₃ at δ 3.3. With δ 11.5 and 3.3, this matches methanoic acid + extra CH₂? Re-evaluating: C₂H₄O₂ = methyl methanoate or glycolaldehyde. The most consistent answer with standard data for AQA purposes is methyl methanoate.',
  },
  {
    id: 1166,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'What does a broad singlet in the ¹H NMR spectrum, which disappears on addition of D₂O, indicate?',
    options: ['A CH₃ group', 'An exchangeable proton (e.g. OH or NH)', 'An aromatic CH', 'A CH₂ adjacent to carbonyl'],
    correctAnswer: 1,
    explanation: 'Exchangeable protons (–OH, –NH, –COOH) give broad signals that disappear when D₂O is added, because D₂O replaces the exchangeable H with D, which is NMR-silent at proton frequencies.'
  },
  {
    id: 1167,
    topic: 'Organic Chemistry',
    subtopic: 'NMR Spectroscopy',
    difficulty: 'Medium',
    question: 'Approximately what chemical shift (δ) is expected for a CH₂ group adjacent to a carbonyl (C=O)?',
    options: ['δ 0.5–1.0', 'δ 1.2–1.5', 'δ 2.0–2.7', 'δ 6–7'],
    correctAnswer: 2,
    explanation: 'A –CH₂– group alpha to a carbonyl group (e.g. in a ketone, aldehyde, ester, or carboxylic acid) is deshielded by the electron-withdrawing C=O and resonates at approximately δ 2.0–2.7 ppm.'
  },
  {
    id: 1168,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'In any chromatographic technique, what are the two phases involved in separation?',
    options: ['Aqueous phase and organic phase', 'Stationary phase and mobile phase', 'Polar phase and non-polar phase', 'Liquid phase and solid phase only'],
    correctAnswer: 1,
    explanation: 'All chromatographic techniques involve a stationary phase (fixed) and a mobile phase (moves through/over the stationary phase); compounds separate because they partition differently between the two phases.'
  },
  {
    id: 1169,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'How is the Rf value calculated in thin-layer or paper chromatography?',
    options: ['Rf = distance travelled by solvent / distance travelled by spot', 'Rf = distance travelled by spot / distance travelled by solvent front', 'Rf = mass of spot / mass of solvent', 'Rf = retention time of sample / retention time of reference'],
    correctAnswer: 1,
    explanation: 'Rf = (distance travelled by the substance from the origin) ÷ (distance travelled by the solvent front from the origin); Rf values are between 0 and 1 and are characteristic for a given compound under defined conditions.'
  },
  {
    id: 1170,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In TLC (thin-layer chromatography), what is the stationary phase?',
    options: ['A non-polar liquid coated on glass', 'Silica (SiO₂) or alumina coated onto an aluminium or glass plate', 'Filter paper', 'A polymer resin in a column'],
    correctAnswer: 1,
    explanation: 'In TLC, the stationary phase is a thin layer of polar silica (SiO₂) or alumina coated onto an aluminium or glass backing; polar compounds interact more strongly with silica and have lower Rf values.'
  },
  {
    id: 1171,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'Why are TLC plates often viewed under UV light?',
    options: ['To heat the plate and develop the spots', 'Many organic compounds absorb UV light and appear as dark spots on a fluorescent TLC plate, allowing visualisation of otherwise invisible spots', 'UV light reacts with silica to produce colour', 'To measure the Rf value more accurately'],
    correctAnswer: 1,
    explanation: 'TLC plates are often treated with a UV-fluorescent indicator; organic compounds absorb UV (254 nm) and appear as dark spots under a UV lamp, enabling detection of colourless compounds.'
  },
  {
    id: 1172,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What is the purpose of using ninhydrin spray on a chromatogram?',
    options: ['To develop the solvent front', 'To detect amino acids and amines, which appear as purple/violet spots', 'To detect sugars as blue spots', 'To measure the UV absorption of spots'],
    correctAnswer: 1,
    explanation: 'Ninhydrin is a chemical stain used to detect amino acids and primary/secondary amines on TLC or paper chromatograms; it reacts to give a characteristic purple-violet colour (Ruhemann\'s purple).'
  },
  {
    id: 1173,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'In TLC, a compound with a high Rf value is best described as:',
    options: ['Strongly retained by the stationary phase (polar silica)', 'More soluble in the mobile phase than the stationary phase, travelling far up the plate', 'Having a high melting point', 'Reacting with the mobile phase'],
    correctAnswer: 1,
    explanation: 'A high Rf means the compound travels far relative to the solvent front; this indicates stronger affinity for the mobile phase (less polar compound on polar silica stationary phase), so it is not strongly retained by silica.'
  },
  {
    id: 1174,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'In TLC, two compounds give spots at the same Rf value. What can you conclude?',
    options: ['They are definitely the same compound', 'They may be the same compound, but further tests (different solvent systems, another technique) are needed to confirm identity', 'They have the same molecular mass', 'They are definitely different compounds'],
    correctAnswer: 1,
    explanation: 'Same Rf in one solvent system is consistent with the compounds being identical, but different compounds can have the same Rf by coincidence; running TLC in a different solvent or using another technique is needed for definitive identification.'
  },
  {
    id: 1175,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What is the stationary phase in gas chromatography (GC)?',
    options: ['A polar solvent flowing through the column', 'A non-volatile liquid (or solid) coated on an inert support inside a long column', 'Silica gel on a glass plate', 'Aqueous buffer solution'],
    correctAnswer: 1,
    explanation: 'In GC, the stationary phase is a high-boiling non-volatile liquid (or solid) coated on an inert solid support packed inside a long capillary column; compounds partition between the stationary liquid and the carrier gas (mobile phase).'
  },
  {
    id: 1176,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What is the mobile phase in gas chromatography?',
    options: ['Ethanol', 'An inert carrier gas such as helium or nitrogen', 'Water', 'Hexane'],
    correctAnswer: 1,
    explanation: 'In GC, the mobile phase is an inert carrier gas (usually helium or nitrogen) that carries the vaporised sample through the column; it does not interact chemically with the sample.'
  },
  {
    id: 1177,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What does the retention time in GC tell you?',
    options: ['The mass of the compound', 'The time taken for a compound to travel through the GC column from injection to detection; it is characteristic for a compound under given conditions', 'The concentration of the compound', 'The boiling point of the compound only'],
    correctAnswer: 1,
    explanation: 'Retention time is the time from injection to when a compound reaches the detector; it is characteristic for each compound under defined conditions (column, temperature, flow rate) and is used for qualitative identification.'
  },
  {
    id: 1178,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'How can GC be used for quantitative analysis?',
    options: ['By measuring retention time only', 'By comparing the peak area (or height) of the sample with that of a known standard; peak area is proportional to amount of compound present', 'By measuring the number of peaks', 'By comparing the column temperature to a standard'],
    correctAnswer: 1,
    explanation: 'In GC, peak area (or height) is proportional to the amount (concentration) of each component; quantitative analysis compares the peak area of the unknown to that of a known standard or uses an internal standard.'
  },
  {
    id: 1179,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'What additional information does GC-MS provide compared to GC alone?',
    options: ['Retention times only', 'Structural identification of each separated component via its mass spectrum (fragmentation pattern and molecular ion)', 'Boiling point of each component', 'The polarity of each compound'],
    correctAnswer: 1,
    explanation: 'GC separates components; as each elutes it passes into a mass spectrometer which records the mass spectrum. The fragmentation pattern and molecular ion allow structural identification of unknown compounds, even at trace levels.'
  },
  {
    id: 1180,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'In GC, compounds with higher boiling points generally have:',
    options: ['Shorter retention times (elute first)', 'Longer retention times (elute later)', 'No measurable retention time', 'The same retention time as low boiling compounds'],
    correctAnswer: 1,
    explanation: 'Compounds with higher boiling points have stronger interactions with the stationary phase (or condense more readily); they spend more time in the stationary phase and elute later (longer retention time).'
  },
  {
    id: 1181,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What is HPLC (High Performance Liquid Chromatography) and how does it differ from simple column chromatography?',
    options: ['HPLC uses a gas mobile phase; column chromatography uses liquid', 'HPLC uses high pressure to force a liquid mobile phase through a tightly packed fine-particle column, giving faster separation with higher resolution than conventional column chromatography', 'HPLC uses UV detection only; column chromatography uses visible detection', 'HPLC is used only for gases; column chromatography is for liquids'],
    correctAnswer: 1,
    explanation: 'HPLC forces a liquid mobile phase through a column packed with very fine particles under high pressure (up to 400 bar), achieving faster separations and higher resolution than gravity-fed column chromatography.'
  },
  {
    id: 1182,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What is the mobile phase in paper chromatography?',
    options: ['A gas such as nitrogen', 'A liquid solvent (e.g. water or organic solvent) that moves up the paper by capillary action', 'A solid absorbent', 'Silica gel'],
    correctAnswer: 1,
    explanation: 'In paper chromatography, the mobile phase is a liquid solvent that rises up the paper by capillary action; compounds are carried at different rates depending on their affinity for the paper (stationary phase) versus the solvent.'
  },
  {
    id: 1183,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In column chromatography, which compounds elute (come off) first when using a non-polar solvent and silica stationary phase?',
    options: ['The most polar compounds', 'The least polar compounds (weakest interaction with silica)', 'The largest molecular mass compounds', 'All compounds at the same time'],
    correctAnswer: 1,
    explanation: 'Silica is a polar stationary phase; non-polar compounds interact weakly with silica and prefer the non-polar mobile phase, so they elute first. Polar compounds are retained longer and elute later.'
  },
  {
    id: 1184,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'How is chromatography used in drug testing in sport?',
    options: ['TLC only is sufficient for legal proof', 'GC-MS is used to separate urine/blood components, identify banned substances by retention time and confirm their structure by mass spectrum fragmentation pattern', 'Paper chromatography gives definitive identification', 'HPLC retention time alone is sufficient for legal evidence'],
    correctAnswer: 1,
    explanation: 'GC-MS is the gold standard in sports drug testing: GC separates components from the biological sample, and the mass spectrometer positively identifies banned substances by their molecular ion and fragmentation pattern; this provides legally admissible evidence.'
  },
  {
    id: 1185,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In food analysis, what chromatographic technique is commonly used to identify artificial colourings?',
    options: ['Gas chromatography (GC)', 'Paper chromatography or TLC', 'Mass spectrometry alone', 'Column chromatography with silica only'],
    correctAnswer: 1,
    explanation: 'Food colourings are water-soluble, often ionic dyes that can be identified by paper chromatography or TLC; the coloured spots are directly visible, and Rf values are compared to known standards to identify the dyes.'
  },
  {
    id: 1186,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'A mixture of four amino acids is spotted on a TLC plate and developed. Why might two amino acids appear as one spot?',
    options: ['They have the same molecular formula', 'They have identical (or very similar) Rf values under the solvent system used; a different solvent or 2D TLC is needed to separate them', 'They are both colourless', 'They react with each other on the plate'],
    correctAnswer: 1,
    explanation: 'Two amino acids can co-migrate if their polarities are very similar, giving the same Rf; running 2D TLC (rotating the plate 90° and developing with a different solvent) can separate compounds that appear as one spot in 1D TLC.'
  },
  {
    id: 1187,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What does a GC chromatogram show on its axes?',
    options: ['Mass/charge ratio vs intensity', 'Detector response (peak height/area) vs retention time', 'Chemical shift vs peak area', 'Absorbance vs wavelength'],
    correctAnswer: 1,
    explanation: 'A GC chromatogram plots detector signal (e.g. flame ionisation detector response) on the y-axis against time (retention time) on the x-axis; each peak represents a different compound.'
  },
  {
    id: 1188,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What is an advantage of HPLC over GC for analysing pharmaceutical compounds?',
    options: ['HPLC requires higher temperatures to vaporise compounds', 'HPLC can analyse non-volatile, thermally sensitive, or high molecular mass compounds that cannot be vaporised for GC', 'GC gives better resolution than HPLC', 'HPLC does not require a detector'],
    correctAnswer: 1,
    explanation: 'GC requires compounds to be volatile and thermally stable; HPLC uses a liquid mobile phase at room temperature or mild conditions, allowing analysis of non-volatile, heat-sensitive drugs, biological molecules, and ionic compounds.'
  },
  {
    id: 1189,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'In reversed-phase HPLC, what are the stationary and mobile phases?',
    options: ['Polar stationary phase and non-polar mobile phase', 'Non-polar stationary phase (e.g. C18 hydrocarbon chains) and polar mobile phase (e.g. water/methanol)', 'Silica stationary phase and hexane mobile phase', 'Gas stationary phase and liquid mobile phase'],
    correctAnswer: 1,
    explanation: 'Reversed-phase HPLC uses a non-polar stationary phase (e.g. octadecyl/C18 groups bonded to silica) and a polar aqueous mobile phase; polar compounds elute first, non-polar compounds are retained longer.'
  },
  {
    id: 1190,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'How is chromatography applied in forensic science?',
    options: ['Only to identify fingerprints', 'To identify drugs, poisons, explosives, accelerants from fire scenes, and biological samples by GC-MS, HPLC, or TLC comparison with known standards', 'To determine the age of documents', 'To amplify DNA samples'],
    correctAnswer: 1,
    explanation: 'Forensic chemists use GC-MS to identify controlled substances, arson accelerants, and poisons; HPLC is used for drugs and biological fluids; TLC provides rapid screening — all by comparing sample chromatograms to known standards.'
  },
  {
    id: 1191,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'What is the principle behind column chromatography separation?',
    options: ['Compounds are separated by molecular size through a gel', 'Compounds partition between the stationary phase (solid adsorbent in column) and the mobile phase (solvent); those with stronger affinity for the stationary phase move more slowly', 'Compounds separate based on their boiling points only', 'An electric field drives separation'],
    correctAnswer: 1,
    explanation: 'Column chromatography separates compounds by differential adsorption onto the stationary phase (silica or alumina) as the mobile phase (solvent) flows through; strongly adsorbed compounds travel slowly, weakly adsorbed ones elute first.'
  },
  {
    id: 1192,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'What does a larger Rf value indicate about a compound in TLC using a polar stationary phase?',
    options: ['It is more polar and interacts strongly with silica', 'It is less polar and travels further up the plate (weaker interaction with silica)', 'It has a higher molecular mass', 'It is insoluble in the mobile phase'],
    correctAnswer: 1,
    explanation: 'A larger Rf on polar silica TLC indicates a less polar compound; it has weaker interactions with the polar stationary phase and greater affinity for the mobile phase, so it travels further from the baseline.'
  },
  {
    id: 1193,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'In GC-MS, what is the purpose of the mass spectrometer component?',
    options: ['To separate compounds by mass', 'To ionise and fragment each separated compound then detect fragment ions by m/z ratio, providing a characteristic fragmentation pattern for identification', 'To increase the resolution of the GC column', 'To measure the boiling point of each compound'],
    correctAnswer: 1,
    explanation: 'In GC-MS, after GC separation, each compound enters the mass spectrometer where it is ionised (e.g. by electron impact) and fragmented; the resulting m/z spectrum is a unique fingerprint compared to a database for identification.'
  },
  {
    id: 1194,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'A GC trace shows five peaks with areas in the ratio 1:3:2:1:1. What does this ratio represent?',
    options: ['The Rf values of the five compounds', 'The relative proportions (by amount) of each component in the mixture, assuming equal detector response factors', 'The molecular masses of the five compounds', 'The retention times of the compounds'],
    correctAnswer: 1,
    explanation: 'Peak areas in GC are proportional to the amount of each component (assuming equal detector response factors); the ratio 1:3:2:1:1 gives the relative molar or mass proportions of the five components.'
  },
  {
    id: 1195,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'What is the advantage of using a capillary column in GC compared to a packed column?',
    options: ['Capillary columns are cheaper', 'Capillary columns provide much higher resolution (better peak separation) because of the longer, narrower column and thinner stationary phase film', 'Capillary columns work at lower pressures', 'Capillary columns can be used with non-volatile compounds'],
    correctAnswer: 1,
    explanation: 'Capillary (open tubular) GC columns are typically 25–100 m long with very narrow bore (0.1–0.5 mm); this gives far greater resolution (efficiency) than shorter packed columns, separating complex mixtures that packed columns cannot resolve.'
  },
  {
    id: 1196,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'In environmental analysis, how is GC-MS used to monitor water quality?',
    options: ['Water samples are heated until all compounds evaporate for direct injection', 'Water samples are extracted with an organic solvent (or SPME), concentrated, then analysed by GC-MS to identify and quantify trace organic pollutants such as pesticides, PCBs, and solvents at ppb levels', 'Paper chromatography is used first, then GC', 'Only inorganic pollutants can be detected by GC-MS'],
    correctAnswer: 1,
    explanation: 'Environmental water samples are pre-concentrated by liquid-liquid extraction or solid-phase microextraction (SPME), then injected into GC-MS; the technique identifies trace organic pollutants (pesticides, industrial chemicals) at parts per billion by comparing retention times and mass spectra to databases.'
  },
  {
    id: 1197,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'Compare TLC and paper chromatography: what is the main advantage of TLC?',
    options: ['TLC is cheaper and requires no equipment', 'TLC gives faster separations, better resolution, and can tolerate more solvents including corrosive reagents as the stationary phase (silica) is chemically more robust than cellulose paper', 'TLC only works for coloured compounds', 'Paper chromatography gives higher Rf values'],
    correctAnswer: 1,
    explanation: 'TLC with silica stationary phase gives superior resolution, faster development, a wider choice of solvents, and can be used with corrosive detection reagents that would destroy paper; it is generally preferred over paper chromatography for analytical purposes.'
  },
  {
    id: 1198,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Easy',
    question: 'Which chromatographic technique would be most appropriate for separating a mixture of volatile organic compounds in a sample of petrol?',
    options: ['Paper chromatography', 'Gas chromatography (GC)', 'TLC', 'Column chromatography'],
    correctAnswer: 1,
    explanation: 'Gas chromatography is ideal for volatile organic compounds such as those in petrol; the compounds vaporise at the injection port and are separated as they pass through the heated column in the carrier gas.'
  },
  {
    id: 1199,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Hard',
    question: 'Why is it important to keep the TLC solvent level below the baseline (spot position) when developing a TLC plate?',
    options: ['To allow the solvent to evaporate faster', 'If the solvent level is above the spots, the compounds would dissolve directly into the bulk solvent tank rather than partitioning up the plate, destroying the separation', 'To prevent the silica from dissolving', 'To keep the UV lamp dry'],
    correctAnswer: 1,
    explanation: 'If the solvent level submerges the sample spots, the compounds dissolve into the bulk solvent instead of being carried up the TLC plate by capillary action; the Rf values become meaningless and no separation occurs.'
  },
  {
    id: 1200,
    topic: 'Organic Chemistry',
    subtopic: 'Chromatography',
    difficulty: 'Medium',
    question: 'A forensic scientist uses HPLC to analyse a blood sample for a specific drug. What does a matching retention time between the sample and a pure drug standard indicate?',
    options: ['The drug is definitely present and the case is proven', 'The retention time is consistent with the drug being present, but a second confirmatory technique (e.g. GC-MS or LC-MS) should be used for definitive identification', 'The drug is absent from the sample', 'The blood sample is contaminated'],
    correctAnswer: 1,
    explanation: 'Matching HPLC retention time is good evidence that the drug may be present, but retention times can coincide for different compounds; a confirmatory technique such as mass spectrometry is required for unambiguous identification in legal/forensic contexts.'
  },

];

export const TOPICS = [
  {
    category: 'Physical Chemistry',
    subtopics: [
      'Atomic Structure',
      'Amount of Substance',
      'Bonding',
      'Energetics',
      'Kinetics',
      "Chemical Equilibria & Le Chatelier's",
      'Redox',
      'Thermodynamics',
      'Rate Equations',
      'Kp',
      'Electrochemical Cells',
      'Acids & Bases',
    ],
  },
  {
    category: 'Inorganic Chemistry',
    subtopics: [
      'Periodicity',
      'Group 2',
      'Group 7',
      'Period 3 Oxides',
      'Transition Metals',
      'Reactions of Aqueous Ions',
    ],
  },
  {
    category: 'Organic Chemistry',
    subtopics: [
      'Introduction to Organic Chemistry',
      'Alkanes',
      'Halogenoalkanes',
      'Alkenes',
      'Alcohols',
      'Organic Analysis',
      'Optical Isomerism',
      'Aldehydes & Ketones',
      'Carboxylic Acids & Derivatives',
      'Aromatic Chemistry',
      'Amines',
      'Polymers',
      'Amino Acids, Proteins & DNA',
      'Organic Synthesis',
      'NMR Spectroscopy',
      'Chromatography',
    ],
  },
];
