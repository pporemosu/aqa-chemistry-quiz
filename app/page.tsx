'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { questions, TOPICS, type Question, type Difficulty } from '@/data/questions';
import pkg from '../package.json';

const APP_VERSION = pkg.version;

type Screen = 'home' | 'quiz' | 'results';

interface QuizState {
  selectedQuestions: Question[];
  currentIndex: number;
  answers: (number | null)[];
  revealed: boolean[];
  maxRevealedIndex: number;
}

interface SessionRecord {
  date: string;
  score: number;
  total: number;
  pct: number;
  weakSubtopics: string[];
}

interface SavedSet {
  id: string;
  name: string;
  subtopics: string[];
  difficulties: Difficulty[];
  count: number;
  createdAt: string;
}

interface LessonPack {
  name: string;
  emoji: string;
  description: string;
  subtopics: string[]; // empty = all topics
  count: number;
  difficulties: Difficulty[];
}

const HISTORY_KEY = 'aqaChem_history';
const SETS_KEY = 'aqaChem_sets';
const THEME_KEY = 'aqaChem_theme';
const MAX_HISTORY = 20;

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Easy: 'bg-green-100 text-green-800 border-green-300',
  Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Hard: 'bg-red-100 text-red-800 border-red-300',
};

const DIFFICULTY_BADGE: Record<Difficulty, string> = {
  Easy: 'bg-green-500',
  Medium: 'bg-yellow-500',
  Hard: 'bg-red-500',
};

// ── Lesson starter packs ──
const LESSON_PACKS: LessonPack[] = [
  {
    name: 'AS Physical Chemistry',
    emoji: '⚛️',
    description: 'Atomic structure, bonding, energetics, kinetics & equilibria',
    subtopics: ['Atomic Structure', 'Amount of Substance', 'Bonding', 'Energetics', 'Kinetics', "Chemical Equilibria & Le Chatelier's", 'Redox'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'A2 Physical Chemistry',
    emoji: '🔬',
    description: 'Thermodynamics, rate equations, Kp, electrochemistry & acids/bases',
    subtopics: ['Thermodynamics', 'Rate Equations', 'Kp', 'Electrochemical Cells', 'Acids & Bases'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Inorganic Chemistry',
    emoji: '🧪',
    description: 'Period 3, Groups 2 & 7, transition metals & aqueous ions',
    subtopics: ['Periodicity', 'Group 2', 'Group 7', 'Period 3 Oxides', 'Transition Metals', 'Reactions of Aqueous Ions'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Organic Chemistry AS',
    emoji: '🔗',
    description: 'Alkanes, halogenoalkanes, alkenes, alcohols & organic analysis',
    subtopics: ['Introduction to Organic Chemistry', 'Alkanes', 'Halogenoalkanes', 'Alkenes', 'Alcohols', 'Organic Analysis'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Organic Chemistry A2',
    emoji: '💊',
    description: 'Carbonyls, carboxylic acids, aromatics, amines, polymers & synthesis',
    subtopics: ['Optical Isomerism', 'Aldehydes & Ketones', 'Carboxylic Acids & Derivatives', 'Aromatic Chemistry', 'Amines', 'Polymers', 'Amino Acids, Proteins & DNA', 'Organic Synthesis'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Spectroscopy & Analysis',
    emoji: '🔭',
    description: 'NMR, chromatography, mass spec & organic identification',
    subtopics: ['Organic Analysis', 'NMR Spectroscopy', 'Chromatography', 'Amino Acids, Proteins & DNA'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Required Practicals',
    emoji: '⚗️',
    description: 'All 12 AQA required practicals (RP1–RP12)',
    subtopics: [
      'RP1: Acid-Base Titration', 'RP2: Enthalpy Changes', 'RP3: Reaction Rates & Temperature',
      'RP4: Inorganic Qualitative Analysis', 'RP5: Distillation', 'RP6: Organic Functional Group Tests',
      'RP7: Measuring Rates of Reaction', 'RP8: Electrochemical Cells', 'RP9: Chromatography',
      'RP10: Qualitative Organic Analysis', 'RP11: Preparation of Organic Solid', 'RP12: Transition Metal Complexes',
    ],
    count: 12,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Calculation Focus',
    emoji: '🔢',
    description: 'Moles, energetics, rate equations, pH & electrochemistry — Medium/Hard only',
    subtopics: ['Amount of Substance', 'Energetics', 'Thermodynamics', 'Rate Equations', 'Kp', 'Acids & Bases', 'Electrochemical Cells'],
    count: 10,
    difficulties: ['Medium', 'Hard'],
  },
  {
    name: 'Mechanisms & Reactions',
    emoji: '⚡',
    description: 'Reaction mechanisms across all of organic chemistry',
    subtopics: ['Halogenoalkanes', 'Alkenes', 'Alcohols', 'Aldehydes & Ketones', 'Carboxylic Acids & Derivatives', 'Aromatic Chemistry', 'Amines'],
    count: 10,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
  {
    name: 'Full Mixed Paper',
    emoji: '📝',
    description: 'Random questions from all 46 subtopics — like a mock exam',
    subtopics: [],
    count: 20,
    difficulties: ['Easy', 'Medium', 'Hard'],
  },
];

// ── Video resources — one YouTube search link per subtopic ──
interface VideoGroup {
  name: string;
  emoji: string;
  subtopics: { name: string; query: string }[];
}

function ytUrl(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

const VIDEO_GROUPS: VideoGroup[] = [
  {
    name: 'AS Physical Chemistry', emoji: '⚛️',
    subtopics: [
      { name: 'Atomic Structure', query: 'AQA A Level Chemistry Atomic Structure revision' },
      { name: 'Amount of Substance', query: 'AQA A Level Chemistry Amount of Substance moles revision' },
      { name: 'Bonding', query: 'AQA A Level Chemistry Bonding revision' },
      { name: 'Energetics', query: 'AQA A Level Chemistry Energetics enthalpy revision' },
      { name: 'Kinetics', query: 'AQA A Level Chemistry Kinetics revision' },
      { name: "Chemical Equilibria & Le Chatelier's", query: "AQA A Level Chemistry Equilibria Le Chatelier revision" },
      { name: 'Redox', query: 'AQA A Level Chemistry Redox revision' },
    ],
  },
  {
    name: 'A2 Physical Chemistry', emoji: '🔬',
    subtopics: [
      { name: 'Thermodynamics', query: 'AQA A Level Chemistry Thermodynamics entropy revision' },
      { name: 'Rate Equations', query: 'AQA A Level Chemistry Rate Equations revision' },
      { name: 'Kp', query: 'AQA A Level Chemistry Kp equilibrium constant revision' },
      { name: 'Electrochemical Cells', query: 'AQA A Level Chemistry Electrochemical Cells revision' },
      { name: 'Acids & Bases', query: 'AQA A Level Chemistry Acids Bases pH buffers revision' },
    ],
  },
  {
    name: 'Inorganic Chemistry', emoji: '🧪',
    subtopics: [
      { name: 'Periodicity', query: 'AQA A Level Chemistry Periodicity Period 3 revision' },
      { name: 'Group 2', query: 'AQA A Level Chemistry Group 2 alkaline earth metals revision' },
      { name: 'Group 7', query: 'AQA A Level Chemistry Group 7 halogens revision' },
      { name: 'Period 3 Oxides', query: 'AQA A Level Chemistry Period 3 oxides revision' },
      { name: 'Transition Metals', query: 'AQA A Level Chemistry Transition Metals revision' },
      { name: 'Reactions of Aqueous Ions', query: 'AQA A Level Chemistry Reactions Aqueous Ions revision' },
    ],
  },
  {
    name: 'Organic Chemistry AS', emoji: '🔗',
    subtopics: [
      { name: 'Introduction to Organic Chemistry', query: 'AQA A Level Chemistry Introduction Organic Chemistry revision' },
      { name: 'Alkanes', query: 'AQA A Level Chemistry Alkanes revision' },
      { name: 'Halogenoalkanes', query: 'AQA A Level Chemistry Halogenoalkanes revision' },
      { name: 'Alkenes', query: 'AQA A Level Chemistry Alkenes revision' },
      { name: 'Alcohols', query: 'AQA A Level Chemistry Alcohols revision' },
      { name: 'Organic Analysis', query: 'AQA A Level Chemistry Organic Analysis tests revision' },
    ],
  },
  {
    name: 'Organic Chemistry A2', emoji: '💊',
    subtopics: [
      { name: 'Optical Isomerism', query: 'AQA A Level Chemistry Optical Isomerism revision' },
      { name: 'Aldehydes & Ketones', query: 'AQA A Level Chemistry Aldehydes Ketones carbonyl revision' },
      { name: 'Carboxylic Acids & Derivatives', query: 'AQA A Level Chemistry Carboxylic Acids revision' },
      { name: 'Aromatic Chemistry', query: 'AQA A Level Chemistry Aromatic Chemistry benzene revision' },
      { name: 'Amines', query: 'AQA A Level Chemistry Amines revision' },
      { name: 'Polymers', query: 'AQA A Level Chemistry Polymers revision' },
      { name: 'Amino Acids, Proteins & DNA', query: 'AQA A Level Chemistry Amino Acids Proteins DNA revision' },
      { name: 'Organic Synthesis', query: 'AQA A Level Chemistry Organic Synthesis revision' },
    ],
  },
  {
    name: 'Spectroscopy & Analysis', emoji: '🔭',
    subtopics: [
      { name: 'NMR Spectroscopy', query: 'AQA A Level Chemistry NMR Spectroscopy revision' },
      { name: 'Chromatography', query: 'AQA A Level Chemistry Chromatography revision' },
      { name: 'Mass Spectrometry', query: 'AQA A Level Chemistry Mass Spectrometry revision' },
      { name: 'Infrared Spectroscopy', query: 'AQA A Level Chemistry Infrared Spectroscopy revision' },
    ],
  },
  {
    name: 'Required Practicals', emoji: '⚗️',
    subtopics: [
      { name: 'RP1: Acid-Base Titration', query: 'AQA A Level Chemistry Required Practical titration' },
      { name: 'RP2: Enthalpy Changes', query: 'AQA A Level Chemistry Required Practical enthalpy calorimetry' },
      { name: 'RP3: Reaction Rates & Temperature', query: 'AQA A Level Chemistry Required Practical reaction rates temperature' },
      { name: 'RP4: Inorganic Qualitative Analysis', query: 'AQA A Level Chemistry Required Practical inorganic qualitative analysis' },
      { name: 'RP5: Distillation', query: 'AQA A Level Chemistry Required Practical distillation' },
      { name: 'RP6: Organic Functional Group Tests', query: 'AQA A Level Chemistry Required Practical organic functional group tests' },
      { name: 'RP7: Measuring Rates of Reaction', query: 'AQA A Level Chemistry Required Practical measuring rates reaction' },
      { name: 'RP8: Electrochemical Cells', query: 'AQA A Level Chemistry Required Practical electrochemical cells' },
      { name: 'RP9: Chromatography', query: 'AQA A Level Chemistry Required Practical chromatography' },
      { name: 'RP10: Qualitative Organic Analysis', query: 'AQA A Level Chemistry Required Practical qualitative organic analysis' },
      { name: 'RP11: Preparation of Organic Solid', query: 'AQA A Level Chemistry Required Practical preparation organic solid aspirin' },
      { name: 'RP12: Transition Metal Complexes', query: 'AQA A Level Chemistry Required Practical transition metal complexes' },
    ],
  },
  {
    name: 'Calculation Focus', emoji: '🔢',
    subtopics: [
      { name: 'Moles & Amount of Substance', query: 'AQA A Level Chemistry moles calculations revision' },
      { name: 'Enthalpy Calculations', query: 'AQA A Level Chemistry enthalpy calculations Hess law revision' },
      { name: 'Rate Equation Calculations', query: 'AQA A Level Chemistry rate equation calculations revision' },
      { name: 'pH & Ka Calculations', query: 'AQA A Level Chemistry pH Ka calculations revision' },
      { name: 'Kp Calculations', query: 'AQA A Level Chemistry Kp calculations revision' },
      { name: 'Electrode Potential Calculations', query: 'AQA A Level Chemistry electrode potential EMF calculations revision' },
    ],
  },
  {
    name: 'Mechanisms & Reactions', emoji: '⚡',
    subtopics: [
      { name: 'Nucleophilic Substitution', query: 'AQA A Level Chemistry nucleophilic substitution mechanism revision' },
      { name: 'Electrophilic Addition', query: 'AQA A Level Chemistry electrophilic addition mechanism revision' },
      { name: 'Elimination Reactions', query: 'AQA A Level Chemistry elimination mechanism revision' },
      { name: 'Nucleophilic Addition', query: 'AQA A Level Chemistry nucleophilic addition carbonyl mechanism revision' },
      { name: 'Electrophilic Substitution', query: 'AQA A Level Chemistry electrophilic substitution benzene mechanism revision' },
      { name: 'Condensation Reactions', query: 'AQA A Level Chemistry condensation polymerisation reaction revision' },
    ],
  },
  {
    name: 'Full Topic Overview', emoji: '📝',
    subtopics: [
      { name: 'Complete AS Chemistry Overview', query: 'AQA A Level Chemistry AS complete revision overview' },
      { name: 'Complete A2 Chemistry Overview', query: 'AQA A Level Chemistry A2 complete revision overview' },
      { name: 'Paper 1 Topics', query: 'AQA A Level Chemistry Paper 1 revision topics' },
      { name: 'Paper 2 Topics', query: 'AQA A Level Chemistry Paper 2 revision topics' },
      { name: 'Paper 3 Practical Skills', query: 'AQA A Level Chemistry Paper 3 practical skills revision' },
    ],
  },
];

// Split explanation text into step-through sentences
function splitExplanation(text: string): string[] {
  const parts = text.replace(/([.!?])\s+/g, '$1\u0000').split('\u0000');
  return parts.map((s) => s.trim()).filter((s) => s.length > 0);
}

// Round-robin across subtopics so questions don't cluster by topic
function distributedShuffle(pool: Question[], count: number): Question[] {
  const groups: Record<string, Question[]> = {};
  for (const q of pool) {
    if (!groups[q.subtopic]) groups[q.subtopic] = [];
    groups[q.subtopic].push(q);
  }
  for (const key of Object.keys(groups)) {
    groups[key] = [...groups[key]].sort(() => Math.random() - 0.5);
  }
  const keys = Object.keys(groups).sort(() => Math.random() - 0.5);
  const result: Question[] = [];
  let i = 0;
  while (result.length < count) {
    const key = keys[i % keys.length];
    if (groups[key].length > 0) result.push(groups[key].shift()!);
    i++;
    if (keys.every((k) => groups[k].length === 0)) break;
  }
  return result;
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>('home');

  // ── Home settings ──
  const [selectedSubtopics, setSelectedSubtopics] = useState<Set<string>>(new Set());
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<Difficulty>>(
    new Set<Difficulty>(['Easy', 'Medium', 'Hard'])
  );
  const [questionCount, setQuestionCount] = useState(10);
  const [topicsExpanded, setTopicsExpanded] = useState(true);
  const [lessonPacksExpanded, setLessonPacksExpanded] = useState(false);
  const [savedSetsExpanded, setSavedSetsExpanded] = useState(false);
  const [homeTab, setHomeTab] = useState<'quiz' | 'videos'>('quiz');
  const [expandedVideoGroup, setExpandedVideoGroup] = useState<string | null>(null);

  // ── Timer ──
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [timeLeft, setTimeLeft] = useState(0);

  // ── Quiz ──
  const [quiz, setQuiz] = useState<QuizState | null>(null);

  // ── UI modes (12: light mode, 1: presentation mode) ──
  const [lightMode, setLightMode] = useState(false);
  const [presentationMode, setPresentationMode] = useState(false);

  // ── Feature 9: worked explanation step-through ──
  const [explanationStep, setExplanationStep] = useState(0);

  // ── Session history ──
  const [history, setHistory] = useState<SessionRecord[]>([]);
  const savedSession = useRef(false);

  // ── Feature 10: saved sets ──
  const [savedSets, setSavedSets] = useState<SavedSet[]>([]);
  const [saveSetName, setSaveSetName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  // ── Collapsible review cards ──
  const [expandedReviewCards, setExpandedReviewCards] = useState<Set<number>>(new Set());

  // ── Derived ──
  const availableCount = useMemo(() => {
    return questions.filter((q) => {
      const topicMatch = selectedSubtopics.size === 0 || selectedSubtopics.has(q.subtopic);
      return topicMatch && selectedDifficulties.has(q.difficulty);
    }).length;
  }, [selectedSubtopics, selectedDifficulties]);

  const sliderMax = Math.min(50, availableCount);

  // ── Load persisted state on mount ──
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
    try {
      const storedSets = localStorage.getItem(SETS_KEY);
      if (storedSets) setSavedSets(JSON.parse(storedSets));
    } catch {}
    try {
      if (localStorage.getItem(THEME_KEY) === 'light') setLightMode(true);
    } catch {}
  }, []);

  // ── Timer effect ──
  useEffect(() => {
    if (!timerEnabled || screen !== 'quiz' || !quiz) return;
    if (quiz.revealed[quiz.currentIndex]) { setTimeLeft(0); return; }
    setTimeLeft(timerSeconds);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setQuiz((q) => {
            if (!q || q.revealed[q.currentIndex]) return q;
            const answers = [...q.answers];
            const revealed = [...q.revealed];
            answers[q.currentIndex] = -1;
            revealed[q.currentIndex] = true;
            return { ...q, answers, revealed, maxRevealedIndex: Math.max(q.maxRevealedIndex, q.currentIndex) };
          });
          setExplanationStep(1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz?.currentIndex, screen, timerEnabled, timerSeconds]);

  // ── Keyboard navigation ──
  useEffect(() => {
    if (screen !== 'quiz' || !quiz) return;
    const currentQ = quiz.selectedQuestions[quiz.currentIndex];
    if (!currentQ) return;
    function handleKey(e: KeyboardEvent) {
      if (!quiz) return;
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      const answered = quiz.revealed[quiz.currentIndex];
      if (!answered) {
        const keyMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
        const k = e.key.toLowerCase();
        if (k in keyMap && keyMap[k] < currentQ.options.length) { e.preventDefault(); handleAnswer(keyMap[k]); return; }
      }
      if (answered && (e.key === 'Enter' || e.key === 'ArrowRight')) { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goBack(); }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, quiz?.currentIndex, quiz?.revealed]);

  // ── Save session on results ──
  useEffect(() => {
    if (screen !== 'results' || !quiz || savedSession.current) return;
    savedSession.current = true;
    const subtopicStats: Record<string, { correct: number; total: number }> = {};
    quiz.selectedQuestions.forEach((q, i) => {
      if (!subtopicStats[q.subtopic]) subtopicStats[q.subtopic] = { correct: 0, total: 0 };
      subtopicStats[q.subtopic].total++;
      const a = quiz.answers[i];
      if (a !== null && a >= 0 && a === q.correctAnswer) subtopicStats[q.subtopic].correct++;
    });
    const weakSubtopics = Object.entries(subtopicStats)
      .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
      .map(([name]) => name);
    const currentScore = quiz.answers.filter(
      (a, i) => a !== null && a >= 0 && a === quiz.selectedQuestions[i].correctAnswer
    ).length;
    const record: SessionRecord = {
      date: new Date().toISOString(),
      score: currentScore,
      total: quiz.selectedQuestions.length,
      pct: Math.round((currentScore / quiz.selectedQuestions.length) * 100),
      weakSubtopics,
    };
    setHistory((prev) => {
      const updated = [record, ...prev].slice(0, MAX_HISTORY);
      try { localStorage.setItem(HISTORY_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  // ── Helpers ──

  // Feature 12: light mode toggle
  function toggleLightMode() {
    setLightMode((v) => {
      const next = !v;
      try { localStorage.setItem(THEME_KEY, next ? 'light' : 'dark'); } catch {}
      return next;
    });
  }

  // Feature 1: presentation mode toggle (also requests fullscreen)
  async function togglePresentationMode() {
    const next = !presentationMode;
    setPresentationMode(next);
    try {
      if (next) { await document.documentElement.requestFullscreen(); }
      else { if (document.fullscreenElement) await document.exitFullscreen(); }
    } catch {}
  }

  function toggleSubtopic(sub: string) {
    setSelectedSubtopics((prev) => { const next = new Set(prev); next.has(sub) ? next.delete(sub) : next.add(sub); return next; });
  }

  function toggleDifficulty(d: Difficulty) {
    setSelectedDifficulties((prev) => { const next = new Set(prev); next.has(d) ? next.delete(d) : next.add(d); return next; });
  }

  function toggleCategory(category: string) {
    const subs = TOPICS.find((t) => t.category === category)?.subtopics ?? [];
    const allSelected = subs.every((s) => selectedSubtopics.has(s));
    setSelectedSubtopics((prev) => {
      const next = new Set(prev);
      subs.forEach((s) => (allSelected ? next.delete(s) : next.add(s)));
      return next;
    });
  }

  function selectAll() { setSelectedSubtopics(new Set(TOPICS.flatMap((t) => t.subtopics))); }
  function clearAll() { setSelectedSubtopics(new Set()); }

  // Feature 6: load a lesson pack
  function loadLessonPack(pack: LessonPack) {
    setSelectedSubtopics(pack.subtopics.length > 0 ? new Set(pack.subtopics) : new Set());
    setSelectedDifficulties(new Set<Difficulty>(pack.difficulties));
    setQuestionCount(pack.count);
    setLessonPacksExpanded(false);
    window.scrollTo(0, 0);
  }

  // Feature 10: saved sets
  function saveCurrentSet() {
    if (!saveSetName.trim()) return;
    const newSet: SavedSet = {
      id: Date.now().toString(),
      name: saveSetName.trim(),
      subtopics: [...selectedSubtopics],
      difficulties: [...selectedDifficulties] as Difficulty[],
      count: questionCount,
      createdAt: new Date().toISOString(),
    };
    setSavedSets((prev) => {
      const updated = [newSet, ...prev];
      try { localStorage.setItem(SETS_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
    setSaveSetName('');
    setShowSaveDialog(false);
  }

  function loadSet(set: SavedSet) {
    setSelectedSubtopics(set.subtopics.length > 0 ? new Set(set.subtopics) : new Set());
    setSelectedDifficulties(new Set<Difficulty>(set.difficulties));
    setQuestionCount(set.count);
    setSavedSetsExpanded(false);
    window.scrollTo(0, 0);
  }

  function deleteSet(id: string) {
    setSavedSets((prev) => {
      const updated = prev.filter((s) => s.id !== id);
      try { localStorage.setItem(SETS_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  }

  function startQuiz() {
    const pool = questions.filter((q) => {
      const topicMatch = selectedSubtopics.size === 0 || selectedSubtopics.has(q.subtopic);
      return topicMatch && selectedDifficulties.has(q.difficulty);
    });
    if (pool.length === 0) return;
    const count = Math.min(questionCount, pool.length);
    const selected = distributedShuffle(pool, count);
    savedSession.current = false;
    setExpandedReviewCards(new Set());
    setExplanationStep(0);
    setQuiz({
      selectedQuestions: selected,
      currentIndex: 0,
      answers: new Array(selected.length).fill(null),
      revealed: new Array(selected.length).fill(false),
      maxRevealedIndex: -1,
    });
    setScreen('quiz');
    window.scrollTo(0, 0);
  }

  function clearHistory() {
    try { localStorage.removeItem(HISTORY_KEY); } catch {}
    setHistory([]);
  }

  function retryWrongOnly() {
    if (!quiz) return;
    const wrongQuestions = quiz.selectedQuestions.filter((q, i) => {
      const a = quiz.answers[i];
      return a === null || a === -1 || a !== q.correctAnswer;
    });
    if (wrongQuestions.length === 0) return;
    savedSession.current = false;
    setExpandedReviewCards(new Set());
    setExplanationStep(0);
    setQuiz({
      selectedQuestions: wrongQuestions,
      currentIndex: 0,
      answers: new Array(wrongQuestions.length).fill(null),
      revealed: new Array(wrongQuestions.length).fill(false),
      maxRevealedIndex: -1,
    });
    setScreen('quiz');
    window.scrollTo(0, 0);
  }

  function handleAnswer(optionIndex: number) {
    if (!quiz) return;
    if (quiz.revealed[quiz.currentIndex]) return;
    setExplanationStep(1); // start step-through at sentence 1
    setQuiz((prev) => {
      if (!prev) return prev;
      const answers = [...prev.answers];
      const revealed = [...prev.revealed];
      answers[prev.currentIndex] = optionIndex;
      revealed[prev.currentIndex] = true;
      return { ...prev, answers, revealed, maxRevealedIndex: Math.max(prev.maxRevealedIndex, prev.currentIndex) };
    });
  }

  function goNext() {
    if (!quiz) return;
    setExplanationStep(0);
    if (quiz.currentIndex >= quiz.selectedQuestions.length - 1) {
      setScreen('results');
    } else {
      setQuiz((prev) => {
        if (!prev) return prev;
        const nextIndex = prev.currentIndex + 1;
        if (nextIndex >= prev.selectedQuestions.length) return prev;
        return { ...prev, currentIndex: nextIndex };
      });
    }
    window.scrollTo(0, 0);
  }

  function goBack() {
    if (!quiz || quiz.currentIndex === 0) return;
    setExplanationStep(0);
    setQuiz((prev) => prev && { ...prev, currentIndex: prev.currentIndex - 1 });
    window.scrollTo(0, 0);
  }

  function resetToHome() {
    setScreen('home');
    setQuiz(null);
    setExpandedReviewCards(new Set());
    setExplanationStep(0);
    window.scrollTo(0, 0);
  }

  function toggleReviewCard(index: number) {
    setExpandedReviewCards((prev) => { const next = new Set(prev); next.has(index) ? next.delete(index) : next.add(index); return next; });
  }

  // ── Score ──
  const score = useMemo(() => {
    if (!quiz) return 0;
    return quiz.answers.filter((a, i) => a !== null && a >= 0 && a === quiz.selectedQuestions[i].correctAnswer).length;
  }, [quiz]);

  // ── Weak areas ──
  const weakAreas = useMemo(() => {
    if (history.length === 0) return [];
    const counts: Record<string, number> = {};
    history.slice(0, 10).forEach((s) => { s.weakSubtopics.forEach((t) => { counts[t] = (counts[t] ?? 0) + 1; }); });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name]) => name);
  }, [history]);

  const recentTrend = history.slice(0, 10).reverse();

  // ── Theme objects ──

  // Home screen theme (Feature 12)
  const H = {
    page: lightMode
      ? 'from-purple-50 via-white to-indigo-50 text-purple-950'
      : 'from-purple-900 via-purple-800 to-indigo-900 text-white',
    badge: lightMode ? 'bg-purple-100 text-purple-700' : 'bg-white/10 text-purple-200',
    card: lightMode ? 'bg-white shadow-sm border border-purple-100' : 'bg-white/10 backdrop-blur',
    label: lightMode ? 'text-purple-700' : 'text-purple-200',
    muted: lightMode ? 'text-purple-500' : 'text-purple-300',
    veryMuted: lightMode ? 'text-purple-400' : 'text-purple-400',
    btnToggle: lightMode
      ? 'text-purple-600 hover:text-purple-900 hover:bg-purple-100'
      : 'text-purple-300 hover:text-white hover:bg-white/10',
    btnSelectAll: lightMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-500/40 hover:bg-purple-500/60',
    btnClear: lightMode ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-white/10 hover:bg-white/20',
    catActive: lightMode ? 'bg-purple-200 text-purple-900' : 'bg-purple-500/50 text-white',
    catPartial: lightMode ? 'bg-purple-100 text-purple-800' : 'bg-purple-500/30 text-white',
    catInactive: lightMode ? 'text-purple-800 hover:bg-purple-50' : 'bg-white/5 hover:bg-white/10 text-white',
    subActive: lightMode ? 'bg-purple-100 text-purple-900' : 'bg-purple-400/40 text-white',
    subInactive: lightMode ? 'text-purple-700 hover:bg-purple-50' : 'text-purple-200 hover:bg-white/10',
    diffActive: (d: Difficulty) => selectedDifficulties.has(d) ? DIFFICULTY_COLORS[d] + ' border-current scale-105' : (lightMode ? 'bg-gray-100 border-gray-300 text-gray-400' : 'bg-white/5 border-white/20 text-white/50'),
    histCard: lightMode ? 'bg-purple-50 border border-purple-100' : 'bg-white/10 backdrop-blur',
    weakBtn: lightMode ? 'bg-red-50 border border-red-200 text-red-700 hover:bg-red-100' : 'bg-red-500/20 border border-red-500/30 text-red-200 hover:bg-red-500/30',
    clearBtn: lightMode ? 'text-purple-500 hover:text-red-500 hover:bg-red-50' : 'text-purple-400 hover:text-red-300 hover:bg-white/10',
    packCard: lightMode ? 'bg-purple-50 border border-purple-100 hover:bg-purple-100 text-purple-900' : 'bg-white/5 border border-white/10 hover:bg-white/15 text-white',
    packDesc: lightMode ? 'text-purple-600' : 'text-purple-300',
    savedCard: lightMode ? 'bg-gray-50 border border-gray-200 text-gray-800' : 'bg-white/5 border border-white/10 text-white',
    savedMeta: lightMode ? 'text-gray-500' : 'text-gray-400',
    loadBtn: lightMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-400 text-white',
    deleteBtn: lightMode ? 'text-red-400 hover:text-red-600 hover:bg-red-50' : 'text-red-400/60 hover:text-red-300 hover:bg-red-900/20',
    input: lightMode ? 'bg-white border border-purple-200 text-purple-900 placeholder-purple-300 focus:border-purple-500' : 'bg-white/10 border border-white/20 text-white placeholder-purple-400 focus:border-purple-400',
    startBtn: lightMode ? 'bg-purple-700 text-white hover:bg-purple-800' : 'bg-white text-purple-900 hover:bg-purple-100',
    summaryText: lightMode ? 'text-purple-600' : 'text-purple-200',
    summaryVal: lightMode ? 'text-purple-900' : 'text-white',
    timerToggle: (on: boolean) => on ? 'bg-purple-500' : (lightMode ? 'bg-gray-300' : 'bg-gray-600'),
    timerBtn: (active: boolean) => active
      ? 'bg-purple-500 text-white'
      : (lightMode ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/10 text-purple-200 hover:bg-white/20'),
    footer: lightMode ? 'text-purple-400' : 'text-purple-300/60',
    saveDialogBg: lightMode ? 'bg-purple-50 border border-purple-200' : 'bg-white/10 border border-white/20',
  };

  // Quiz / Results screen theme (Feature 12)
  const Q = {
    page: lightMode
      ? 'from-gray-50 via-white to-gray-100 text-gray-900'
      : 'from-gray-900 via-gray-800 to-gray-900 text-white',
    card: lightMode ? 'bg-white shadow border border-gray-100' : 'bg-gray-800',
    homeBtn: lightMode ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white',
    scoreBadge: lightMode ? 'text-green-600' : 'text-green-400',
    counter: lightMode ? 'text-gray-500' : 'text-gray-400',
    progBg: lightMode ? 'bg-gray-200' : 'bg-gray-700',
    reviewBanner: lightMode
      ? 'bg-yellow-50 border border-yellow-200 text-yellow-800'
      : 'bg-yellow-900/30 border border-yellow-600/50 text-yellow-300',
    topicTag: lightMode ? 'bg-purple-100 text-purple-700' : 'bg-purple-900/60 text-purple-300',
    subtopicTag: lightMode ? 'bg-gray-100 text-gray-600' : 'bg-gray-700 text-gray-300',
    questionText: lightMode ? 'text-gray-900' : 'text-white',
    optUnanswered: lightMode
      ? 'border-gray-300 bg-white hover:bg-gray-50 hover:border-purple-400 text-gray-800 cursor-pointer'
      : 'border-gray-600 bg-gray-700/50 hover:bg-gray-700 hover:border-purple-500 text-white cursor-pointer',
    optCorrect: lightMode ? 'border-green-500 bg-green-50 text-green-800' : 'border-green-500 bg-green-900/30 text-green-300',
    optWrong: lightMode ? 'border-red-500 bg-red-50 text-red-800' : 'border-red-500 bg-red-900/30 text-red-300',
    optDim: lightMode ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-default' : 'border-gray-600 bg-gray-700/30 text-gray-500 cursor-default',
    optLetter: lightMode ? 'text-gray-400' : 'text-gray-400',
    expCorrect: lightMode ? 'bg-green-50 border-green-300 text-green-900' : 'bg-green-900/20 border-green-700 text-green-200',
    expWrong: lightMode ? 'bg-red-50 border-red-300 text-red-900' : 'bg-red-900/20 border-red-700 text-red-200',
    expTimeout: lightMode ? 'bg-orange-50 border-orange-300 text-orange-900' : 'bg-orange-900/20 border-orange-700 text-orange-200',
    stepBtn: lightMode ? 'bg-purple-100 hover:bg-purple-200 text-purple-800' : 'bg-white/20 hover:bg-white/30 text-white',
    navBack: lightMode
      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed'
      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed',
    navNext: lightMode
      ? 'bg-purple-700 hover:bg-purple-800 text-white disabled:opacity-30 disabled:cursor-not-allowed'
      : 'bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-30 disabled:cursor-not-allowed',
    kbd: lightMode ? 'bg-gray-100 border border-gray-300 text-gray-500' : 'bg-gray-700/60 text-gray-400',
    kbdText: lightMode ? 'text-gray-400' : 'text-gray-600',
    footer: lightMode ? 'text-gray-400' : 'text-gray-600',
    // Results
    h2: lightMode ? 'text-gray-700' : 'text-gray-300',
    subBar: lightMode ? 'bg-gray-200' : 'bg-gray-700',
    subText: lightMode ? 'text-gray-700' : 'text-gray-300',
    subCount: lightMode ? 'text-gray-500' : 'text-gray-400',
    reviewCorrect: lightMode ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-700/50',
    reviewWrong: lightMode ? 'bg-red-50 border-red-200' : 'bg-red-900/20 border-red-700/50',
    reviewTimeout: lightMode ? 'bg-orange-50 border-orange-200' : 'bg-orange-900/20 border-orange-700/50',
    reviewHeader: lightMode ? 'hover:bg-gray-50' : 'hover:bg-white/5',
    reviewDivider: lightMode ? 'border-gray-100' : 'border-white/5',
    reviewBody: lightMode ? 'text-gray-800' : 'text-gray-200',
    reviewMuted: lightMode ? 'text-gray-500' : 'text-gray-400',
    reviewSubtopic: lightMode ? 'text-purple-600' : 'text-purple-400',
    reviewChevron: lightMode ? 'text-gray-400' : 'text-gray-600',
    backHome: lightMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100',
    retry: lightMode ? 'bg-purple-700 hover:bg-purple-800 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white',
    retryWrong: lightMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-700 hover:bg-red-600 text-white',
    pct: lightMode ? 'text-gray-600' : 'text-gray-400',
    timeout: lightMode ? 'text-orange-500' : 'text-orange-400',
  };

  // Presentation mode sizes (Feature 1)
  const P = {
    questionText: presentationMode ? 'text-2xl md:text-3xl leading-relaxed' : 'text-lg font-medium leading-relaxed',
    optionPad: presentationMode ? 'py-5 px-6' : 'py-3.5 px-4',
    optionText: presentationMode ? 'text-lg' : 'text-sm font-medium',
    optionLetter: presentationMode ? 'text-xl w-8' : 'text-sm w-6',
    meta: presentationMode ? 'text-sm px-3.5 py-1.5' : 'text-xs px-2.5 py-1',
    exp: presentationMode ? 'text-base leading-relaxed' : 'text-sm leading-relaxed',
    counter: presentationMode ? 'text-xl' : 'text-sm',
  };

  // ── Render ──
  if (screen === 'home') return <HomeScreen />;
  if (screen === 'quiz' && quiz) return <QuizScreen />;
  if (screen === 'results' && quiz) return <ResultsScreen />;
  return null;

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // HOME SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  function HomeScreen() {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${H.page}`}>
        <div className="max-w-4xl mx-auto px-4 py-10">

          {/* Header */}
          <div className="text-center mb-10 relative">
            {/* Light/dark toggle — top right */}
            <button
              onClick={toggleLightMode}
              title={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`absolute right-0 top-0 text-xl px-2 py-1 rounded-lg transition-colors ${H.btnToggle}`}
            >
              {lightMode ? '🌙' : '☀️'}
            </button>
            <p className={`text-2xl font-bold mb-3 tracking-wide ${H.muted}`}>Mrs P Oremosu · Loxford School</p>
            <div className={`inline-block rounded-2xl px-6 py-2 mb-4 text-sm font-medium tracking-widest uppercase ${H.badge}`}>
              AQA 7404 / 7405
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">A-level Chemistry Dashboard</h1>
            <p className={`text-lg ${H.muted}`}>Test yourself on every topic from the AQA specification</p>
          </div>

          {/* ── Tab bar: Quiz Setup / Videos ── */}
          <div className={`flex gap-1 p-1 rounded-2xl mb-6 ${lightMode ? 'bg-purple-100' : 'bg-white/10'}`}>
            <button
              onClick={() => setHomeTab('quiz')}
              className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                homeTab === 'quiz'
                  ? (lightMode ? 'bg-white text-purple-900 shadow' : 'bg-white/20 text-white shadow')
                  : (lightMode ? 'text-purple-600 hover:text-purple-900' : 'text-purple-300 hover:text-white')
              }`}
            >
              🎯 Quiz Setup
            </button>
            <button
              onClick={() => setHomeTab('videos')}
              className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                homeTab === 'videos'
                  ? (lightMode ? 'bg-white text-purple-900 shadow' : 'bg-white/20 text-white shadow')
                  : (lightMode ? 'text-purple-600 hover:text-purple-900' : 'text-purple-300 hover:text-white')
              }`}
            >
              📹 Topic Videos
            </button>
          </div>

          {/* ── Videos tab ── */}
          {homeTab === 'videos' && (
            <div className="space-y-3 mb-8">
              <p className={`text-sm mb-4 ${H.muted}`}>
                Click a topic to see revision videos. Each link opens a YouTube search for that subtopic — find the best video for your class.
              </p>
              {VIDEO_GROUPS.map((group) => {
                const isOpen = expandedVideoGroup === group.name;
                return (
                  <div key={group.name} className={`rounded-2xl overflow-hidden ${H.card}`}>
                    <button
                      onClick={() => setExpandedVideoGroup(isOpen ? null : group.name)}
                      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${H.btnToggle}`}
                    >
                      <span className="font-semibold flex items-center gap-2 text-base">
                        <span className="text-xl">{group.emoji}</span> {group.name}
                        <span className={`text-xs font-normal ${H.muted}`}>({group.subtopics.length} topics)</span>
                      </span>
                      <span className="text-sm">{isOpen ? '▲' : '▼'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {group.subtopics.map((sub) => (
                            <a
                              key={sub.name}
                              href={ytUrl(sub.query)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all border group ${H.packCard}`}
                            >
                              <span className="text-base">▶</span>
                              <span className="flex-1">{sub.name}</span>
                              <span className={`text-xs opacity-60 group-hover:opacity-100 ${H.packDesc}`}>YouTube →</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Quiz tab content ── */}
          {homeTab === 'quiz' && <>

          {/* Session history panel */}
          {history.length > 0 && (
            <div className={`rounded-2xl p-5 mb-4 ${H.histCard}`}>
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-1 min-w-[140px]">
                  <div className="flex items-center justify-between mb-2">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${H.muted}`}>Recent Sessions</p>
                    <button onClick={clearHistory} className={`text-xs px-2 py-0.5 rounded transition-colors ${H.clearBtn}`} title="Clear all session history">
                      🗑 Clear
                    </button>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {recentTrend.map((s, i) => (
                      <div
                        key={i}
                        title={`${s.pct}% · ${new Date(s.date).toLocaleDateString()}`}
                        className={`flex-1 rounded-sm ${s.pct >= 70 ? 'bg-green-400' : s.pct >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
                        style={{ height: `${Math.max(12, s.pct)}%` }}
                      />
                    ))}
                  </div>
                  <p className={`text-xs mt-1.5 ${H.veryMuted}`}>
                    Avg: {Math.round(recentTrend.reduce((acc, s) => acc + s.pct, 0) / recentTrend.length)}% · {history.length} session{history.length !== 1 ? 's' : ''}
                  </p>
                </div>
                {weakAreas.length > 0 && (
                  <div className="flex-1 min-w-[180px]">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${H.muted}`}>⚠️ Weak Areas</p>
                    <div className="space-y-1">
                      {weakAreas.map((area) => (
                        <button
                          key={area}
                          onClick={() => { setSelectedSubtopics(new Set([area])); setSelectedDifficulties(new Set<Difficulty>(['Easy', 'Medium', 'Hard'])); }}
                          className={`block w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors truncate ${H.weakBtn}`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                    <p className={`text-xs mt-1.5 ${H.veryMuted}`}>Tap to drill that topic</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Feature 6: Lesson Starter Packs ── */}
          <div className={`rounded-2xl mb-4 overflow-hidden ${H.card}`}>
            <button
              onClick={() => setLessonPacksExpanded((v) => !v)}
              className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${H.btnToggle}`}
            >
              <span className="font-semibold flex items-center gap-2">
                <span className="text-xl">🚀</span> Lesson Starter Packs
              </span>
              <span className="text-xs">{lessonPacksExpanded ? '▲ Collapse' : '▼ Expand'}</span>
            </button>
            {lessonPacksExpanded && (
              <div className="px-6 pb-5">
                <p className={`text-xs mb-3 ${H.muted}`}>One click to load a curated topic set — then hit Start Quiz</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {LESSON_PACKS.map((pack) => (
                    <button
                      key={pack.name}
                      onClick={() => loadLessonPack(pack)}
                      className={`text-left rounded-xl px-4 py-3 transition-all border text-sm ${H.packCard}`}
                    >
                      <div className="font-semibold mb-0.5">
                        {pack.emoji} {pack.name}
                        <span className={`ml-2 text-xs font-normal ${H.packDesc}`}>({pack.count}Q)</span>
                      </div>
                      <div className={`text-xs ${H.packDesc}`}>{pack.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Feature 10: Saved Sets ── */}
          {(savedSets.length > 0 || showSaveDialog) && (
            <div className={`rounded-2xl mb-4 overflow-hidden ${H.card}`}>
              <button
                onClick={() => setSavedSetsExpanded((v) => !v)}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${H.btnToggle}`}
              >
                <span className="font-semibold flex items-center gap-2">
                  <span className="text-xl">💾</span> Saved Sets
                  <span className={`text-xs font-normal ${H.muted}`}>({savedSets.length} saved)</span>
                </span>
                <span className="text-xs">{savedSetsExpanded ? '▲ Collapse' : '▼ Expand'}</span>
              </button>
              {savedSetsExpanded && savedSets.length > 0 && (
                <div className="px-6 pb-5 space-y-2">
                  {savedSets.map((set) => (
                    <div key={set.id} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${H.savedCard}`}>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{set.name}</p>
                        <p className={`text-xs truncate ${H.savedMeta}`}>
                          {set.subtopics.length === 0 ? 'All topics' : `${set.subtopics.length} subtopics`} · {set.difficulties.join(', ')} · {set.count}Q
                        </p>
                      </div>
                      <button onClick={() => loadSet(set)} className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${H.loadBtn}`}>
                        Load
                      </button>
                      <button onClick={() => deleteSet(set.id)} className={`text-xs px-2 py-1.5 rounded-lg transition-colors shrink-0 ${H.deleteBtn}`} title="Delete">
                        🗑
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Main 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left — topics */}
            <div className={`rounded-2xl p-6 ${H.card}`}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-2xl">📚</span> Select Topics
                </h2>
                <button onClick={() => setTopicsExpanded((v) => !v)} className={`text-xs px-2 py-1 rounded transition-colors ${H.btnToggle}`}>
                  {topicsExpanded ? '▲ Collapse' : '▼ Expand'}
                </button>
              </div>
              <p className={`text-xs mb-3 ${H.muted}`}>
                {selectedSubtopics.size === 0 ? '✅ All topics included' : `${selectedSubtopics.size} subtopic${selectedSubtopics.size !== 1 ? 's' : ''} selected`}
              </p>
              <div className="flex gap-2 mb-3">
                <button onClick={selectAll} className={`flex-1 text-xs py-1.5 rounded-lg transition-colors ${H.btnSelectAll}`}>Select All</button>
                <button onClick={clearAll} className={`flex-1 text-xs py-1.5 rounded-lg transition-colors ${H.btnClear}`}>Clear All</button>
              </div>
              {topicsExpanded && (
                <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                  {TOPICS.map((cat) => {
                    const allChecked = cat.subtopics.every((s) => selectedSubtopics.has(s));
                    const someChecked = cat.subtopics.some((s) => selectedSubtopics.has(s));
                    return (
                      <div key={cat.category}>
                        <button
                          onClick={() => toggleCategory(cat.category)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                            allChecked ? H.catActive : someChecked ? H.catPartial : H.catInactive
                          }`}
                        >
                          {allChecked ? '☑' : someChecked ? '⊟' : '☐'} {cat.category}
                        </button>
                        <div className="ml-4 mt-1 space-y-1">
                          {cat.subtopics.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => toggleSubtopic(sub)}
                              className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                                selectedSubtopics.has(sub) ? H.subActive : H.subInactive
                              }`}
                            >
                              {selectedSubtopics.has(sub) ? '☑' : '☐'} {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right — settings */}
            <div className="space-y-5">
              {/* Difficulty */}
              <div className={`rounded-2xl p-6 ${H.card}`}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Difficulty
                </h2>
                <div className="flex gap-3">
                  {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleDifficulty(d)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${H.diffActive(d)}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question count */}
              <div className={`rounded-2xl p-6 ${H.card}`}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔢</span> Questions per Session
                </h2>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="flex-1 accent-purple-500 cursor-pointer"
                    style={{ touchAction: 'none' }}
                  />
                  <span className={`text-3xl font-bold w-10 text-center ${H.muted}`}>
                    {questionCount}
                  </span>
                </div>
                <p className={`text-xs mt-2 ${H.muted}`}>{availableCount} questions available with current filters</p>
              </div>

              {/* Timer */}
              <div className={`rounded-2xl p-6 ${H.card}`}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-2xl">⏱️</span> Timer Mode
                  </h2>
                  <button
                    onClick={() => setTimerEnabled((v) => !v)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${H.timerToggle(timerEnabled)}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${timerEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                {timerEnabled && (
                  <div className="flex gap-2 mt-1">
                    {[30, 60, 90].map((s) => (
                      <button key={s} onClick={() => setTimerSeconds(s)} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${H.timerBtn(timerSeconds === s)}`}>
                        {s}s
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Session summary */}
              <div className={`rounded-2xl p-6 ${H.card}`}>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📋</span> Session Summary
                </h2>
                <ul className={`text-sm space-y-1 ${H.summaryText}`}>
                  <li>Topics: <span className={`font-medium ${H.summaryVal}`}>{selectedSubtopics.size === 0 ? 'All topics' : `${selectedSubtopics.size} selected`}</span></li>
                  <li>Difficulty: <span className={`font-medium ${H.summaryVal}`}>{selectedDifficulties.size === 0 ? 'None' : [...selectedDifficulties].join(', ')}</span></li>
                  <li>Questions: <span className={`font-medium ${H.summaryVal}`}>{Math.min(questionCount, availableCount)}</span></li>
                  {timerEnabled && <li>Timer: <span className={`font-medium ${H.summaryVal}`}>{timerSeconds}s per question</span></li>}
                </ul>
              </div>

              {/* Start Quiz */}
              <button
                onClick={startQuiz}
                disabled={availableCount === 0 || selectedDifficulties.size === 0}
                className={`w-full py-4 rounded-2xl text-lg font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${H.startBtn}`}
              >
                Start Quiz →
              </button>

              {/* Feature 10: Save settings button */}
              {!showSaveDialog ? (
                <button
                  onClick={() => setShowSaveDialog(true)}
                  className={`w-full py-2.5 rounded-2xl text-sm font-medium transition-colors ${H.btnClear}`}
                >
                  💾 Save current settings as a set
                </button>
              ) : (
                <div className={`rounded-2xl p-4 ${H.saveDialogBg}`}>
                  <p className={`text-xs font-semibold mb-2 ${H.muted}`}>Name this set:</p>
                  <input
                    type="text"
                    value={saveSetName}
                    onChange={(e) => setSaveSetName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') saveCurrentSet(); if (e.key === 'Escape') { setShowSaveDialog(false); setSaveSetName(''); } }}
                    placeholder="e.g. Energetics lesson starter"
                    autoFocus
                    className={`w-full text-sm px-3 py-2 rounded-lg mb-3 outline-none transition-colors ${H.input}`}
                  />
                  <div className="flex gap-2">
                    <button onClick={saveCurrentSet} disabled={!saveSetName.trim()} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40 ${H.loadBtn}`}>
                      Save
                    </button>
                    <button onClick={() => { setShowSaveDialog(false); setSaveSetName(''); }} className={`flex-1 py-2 rounded-lg text-sm transition-colors ${H.btnClear}`}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          </>}
        </div>
        <p className={`text-center text-xs mt-8 pb-8 ${H.footer}`}>
          <span className="font-mono">v{APP_VERSION}</span>
        </p>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // QUIZ SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  function QuizScreen() {
    if (!quiz) return null;
    const q = quiz.selectedQuestions[quiz.currentIndex];
    if (!q) return null;
    const answered = quiz.revealed[quiz.currentIndex];
    const userAnswer = quiz.answers[quiz.currentIndex];
    const isTimedOut = userAnswer === -1;
    const isCorrect = !isTimedOut && userAnswer === q.correctAnswer;
    const progress = ((quiz.currentIndex + 1) / quiz.selectedQuestions.length) * 100;
    const isLast = quiz.currentIndex === quiz.selectedQuestions.length - 1;
    const isReviewing = quiz.currentIndex < quiz.maxRevealedIndex;
    const revealedCount = quiz.revealed.filter(Boolean).length;

    const timerPct = timerEnabled && timerSeconds > 0 ? (timeLeft / timerSeconds) * 100 : 0;
    const timerBarColor = timerPct > 50 ? 'bg-green-500' : timerPct > 25 ? 'bg-yellow-500' : 'bg-red-500';
    const timerTextColor = timerPct > 50 ? 'text-green-400' : timerPct > 25 ? 'text-yellow-400' : 'text-red-400';

    // Feature 9: worked explanation step-through
    const expSentences = splitExplanation(q.explanation);
    const visibleCount = isReviewing ? expSentences.length : explanationStep;
    const visibleSentences = expSentences.slice(0, visibleCount);
    const hasMoreSteps = visibleCount < expSentences.length;

    // Explanation box colour
    const expClass = isTimedOut ? Q.expTimeout : isCorrect ? Q.expCorrect : Q.expWrong;
    const expPrefix = isTimedOut ? "⏰ Time's up! " : isCorrect ? '✓ Correct! ' : '✗ Incorrect. ';

    return (
      <div className={`min-h-screen bg-gradient-to-br ${Q.page}`}>
        <div className={`max-w-2xl mx-auto px-4 ${presentationMode ? 'py-6' : 'py-8'}`}>
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={resetToHome} className={`text-sm transition-colors ${Q.homeBtn}`}>
              ← Home
            </button>
            <div className="flex items-center gap-3">
              {/* Feature 12 + 1: light mode & presentation mode toggles */}
              <button
                onClick={toggleLightMode}
                title={lightMode ? 'Dark mode' : 'Light mode'}
                className={`text-sm px-2 py-1 rounded-lg transition-colors ${Q.homeBtn}`}
              >
                {lightMode ? '🌙' : '☀️'}
              </button>
              <button
                onClick={togglePresentationMode}
                title={presentationMode ? 'Exit presentation mode' : 'Presentation mode (fullscreen)'}
                className={`text-sm px-2 py-1 rounded-lg transition-colors ${presentationMode ? 'bg-purple-500 text-white' : Q.homeBtn}`}
              >
                {presentationMode ? '📽️ On' : '📽️'}
              </button>
              {revealedCount > 0 && (
                <span className={`font-medium ${Q.scoreBadge} ${P.counter}`}>
                  ✅ {score}/{revealedCount}
                </span>
              )}
              <span className={P.counter + ' ' + Q.counter}>
                {quiz.currentIndex + 1} / {quiz.selectedQuestions.length}
              </span>
            </div>
          </div>

          {/* Teacher / school name */}
          <p className={`text-center text-xl font-bold mb-3 ${Q.footer}`}>Mrs P Oremosu · Loxford School</p>

          {/* Progress bar */}
          <div className={`w-full rounded-full h-2 mb-2 ${Q.progBg}`}>
            <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          {/* Timer bar */}
          {timerEnabled && !answered && (
            <div className={`w-full rounded-full h-1.5 mb-2 ${Q.progBg}`}>
              <div className={`h-1.5 rounded-full transition-all duration-1000 ${timerBarColor}`} style={{ width: `${timerPct}%` }} />
            </div>
          )}
          {timerEnabled && !answered && (
            <div className={`text-center font-bold mb-4 ${timerTextColor} ${P.counter}`}>⏰ {timeLeft}s</div>
          )}

          {/* Review banner */}
          {isReviewing && (
            <div className={`mb-4 px-4 py-2 rounded-xl text-sm text-center ${Q.reviewBanner}`}>
              👀 Reviewing answered question — your answer is locked in
            </div>
          )}

          {/* Question card */}
          <div className={`rounded-2xl shadow-2xl ${presentationMode ? 'p-8' : 'p-7'} ${Q.card} ${isTimedOut ? 'ring-2 ring-orange-500/40' : ''}`}>
            {/* Meta tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className={`rounded-full ${P.meta} ${Q.topicTag}`}>{q.topic}</span>
              <span className={`rounded-full ${P.meta} ${Q.subtopicTag}`}>{q.subtopic}</span>
              <span className={`rounded-full font-semibold ${P.meta} ${DIFFICULTY_BADGE[q.difficulty]} text-white`}>{q.difficulty}</span>
              {isTimedOut && <span className={`rounded-full font-semibold bg-orange-600 text-white ${P.meta}`}>⏰ Timed Out</span>}
            </div>

            {/* Question text */}
            <p className={`mb-6 ${Q.questionText} ${P.questionText}`}>{q.question}</p>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let style = `w-full text-left rounded-xl border-2 transition-all font-medium ${P.optionPad} ${P.optionText} `;
                if (!answered) style += Q.optUnanswered;
                else if (i === q.correctAnswer) style += Q.optCorrect;
                else if (i === userAnswer && !isCorrect) style += Q.optWrong;
                else style += Q.optDim;
                return (
                  <button key={i} onClick={() => handleAnswer(i)} disabled={answered} className={style}>
                    <span className={`inline-block font-bold mr-2 ${Q.optLetter} ${P.optionLetter}`}>
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                    {answered && i === q.correctAnswer && <span className="ml-2 text-green-500">✓</span>}
                    {answered && i === userAnswer && !isCorrect && !isTimedOut && <span className="ml-2 text-red-500">✗</span>}
                  </button>
                );
              })}
            </div>

            {/* Feature 9: Worked explanation (step-through) */}
            {answered && (
              <div className={`mt-5 p-4 rounded-xl border ${expClass} ${P.exp}`}>
                <span className="font-bold">{expPrefix}</span>
                {visibleSentences.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {visibleSentences.map((sentence, i) => (
                      <p key={i}>{sentence}</p>
                    ))}
                  </div>
                )}
                {hasMoreSteps && (
                  <button
                    onClick={() => setExplanationStep((v) => v + 1)}
                    className={`mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${Q.stepBtn}`}
                  >
                    Show next step →
                  </button>
                )}
                {!hasMoreSteps && expSentences.length > 1 && (
                  <p className="mt-2 text-xs opacity-60">✓ Full explanation shown</p>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={goBack}
              disabled={quiz.currentIndex === 0}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${Q.navBack}`}
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              disabled={!answered}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${Q.navNext}`}
            >
              {isLast ? 'Finish & See Results →' : 'Next Question →'}
            </button>
          </div>

          {/* Keyboard hints */}
          {!presentationMode && (
            <p className={`text-center text-xs mt-4 ${Q.kbdText}`}>
              <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>A</kbd>{' '}
              <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>B</kbd>{' '}
              <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>C</kbd>{' '}
              <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>D</kbd>{' '}
              to answer
              {answered && (
                <> · <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>Enter</kbd>{' '}
                or <kbd className={`px-1.5 py-0.5 rounded text-xs ${Q.kbd}`}>→</kbd> to continue</>
              )}
            </p>
          )}

          <p className={`text-center text-xs mt-3 ${Q.footer}`}>
            <span className="font-mono">v{APP_VERSION}</span>
          </p>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RESULTS SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  function ResultsScreen() {
    if (!quiz) return null;
    const total = quiz.selectedQuestions.length;
    const timedOutCount = quiz.answers.filter((a) => a === -1).length;
    const pct = Math.round((score / total) * 100);
    const wrongCount = quiz.answers.filter((a, i) => a === null || a === -1 || a !== quiz.selectedQuestions[i].correctAnswer).length;

    const grade =
      pct >= 90 ? { label: 'Excellent!', emoji: '🏆', color: 'text-yellow-400' }
      : pct >= 70 ? { label: 'Good Work!', emoji: '🎉', color: 'text-green-400' }
      : pct >= 50 ? { label: 'Getting There', emoji: '📖', color: 'text-blue-400' }
      : { label: 'Keep Revising', emoji: '💪', color: 'text-orange-400' };

    const subtopicStats: Record<string, { correct: number; total: number }> = {};
    quiz.selectedQuestions.forEach((q, i) => {
      if (!subtopicStats[q.subtopic]) subtopicStats[q.subtopic] = { correct: 0, total: 0 };
      subtopicStats[q.subtopic].total++;
      const a = quiz.answers[i];
      if (a !== null && a >= 0 && a === q.correctAnswer) subtopicStats[q.subtopic].correct++;
    });
    const subtopicEntries = Object.entries(subtopicStats).sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total);

    const diffStats: Record<Difficulty, { correct: number; total: number }> = {
      Easy: { correct: 0, total: 0 }, Medium: { correct: 0, total: 0 }, Hard: { correct: 0, total: 0 },
    };
    quiz.selectedQuestions.forEach((q, i) => {
      diffStats[q.difficulty].total++;
      const a = quiz.answers[i];
      if (a !== null && a >= 0 && a === q.correctAnswer) diffStats[q.difficulty].correct++;
    });

    return (
      <div className={`min-h-screen bg-gradient-to-br ${Q.page}`}>
        <div className="max-w-2xl mx-auto px-4 py-10">
          {/* Teacher / school name */}
          <p className={`text-center text-xl font-bold mb-6 ${Q.footer}`}>Mrs P Oremosu · Loxford School</p>

          {/* Score header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h1 className={`text-4xl font-bold mb-1 ${grade.color}`}>{grade.label}</h1>
            <p className={Q.pct}>
              You scored <span className="font-bold text-2xl" style={{ color: 'inherit' }}>{score}/{total}</span> ({pct}%)
            </p>
            {timedOutCount > 0 && (
              <p className={`text-sm mt-1 ${Q.timeout}`}>⏰ {timedOutCount} question{timedOutCount !== 1 ? 's' : ''} timed out</p>
            )}
            <div className={`w-full rounded-full h-4 mt-5 max-w-sm mx-auto ${Q.progBg}`}>
              <div className={`h-4 rounded-full transition-all duration-700 ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
            </div>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((d) => {
                const s = diffStats[d];
                if (s.total === 0) return null;
                const dpct = Math.round((s.correct / s.total) * 100);
                return (
                  <span key={d} className={`text-xs px-3 py-1.5 rounded-full font-semibold ${DIFFICULTY_BADGE[d]} text-white`}>
                    {d}: {s.correct}/{s.total} ({dpct}%)
                  </span>
                );
              })}
            </div>
          </div>

          {/* Topic breakdown */}
          {subtopicEntries.length > 1 && (
            <div className={`rounded-2xl p-6 mb-6 ${Q.card}`}>
              <h2 className={`text-lg font-semibold mb-4 ${Q.h2}`}>📊 Topic Breakdown</h2>
              <div className="space-y-3">
                {subtopicEntries.map(([subtopic, stats]) => {
                  const subPct = Math.round((stats.correct / stats.total) * 100);
                  const barColor = subPct >= 70 ? 'bg-green-500' : subPct >= 50 ? 'bg-yellow-500' : 'bg-red-500';
                  return (
                    <div key={subtopic}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className={`truncate mr-2 ${Q.subText}`}>{subtopic}</span>
                        <span className={`shrink-0 ${Q.subCount}`}>{stats.correct}/{stats.total}</span>
                      </div>
                      <div className={`w-full rounded-full h-2 ${Q.subBar}`}>
                        <div className={`h-2 rounded-full ${barColor}`} style={{ width: `${subPct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Question review */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-lg font-semibold ${Q.h2}`}>Question Review</h2>
              <div className="flex gap-2">
                <button onClick={() => setExpandedReviewCards(new Set(quiz.selectedQuestions.map((_, i) => i)))} className="text-xs text-purple-400 hover:text-purple-300 px-2 py-1 rounded transition-colors">
                  Expand all
                </button>
                <button onClick={() => setExpandedReviewCards(new Set())} className={`text-xs px-2 py-1 rounded transition-colors ${Q.reviewMuted}`}>
                  Collapse all
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {quiz.selectedQuestions.map((q, i) => {
                const ua = quiz.answers[i];
                const isTO = ua === -1;
                const correct = !isTO && ua === q.correctAnswer;
                const expanded = expandedReviewCards.has(i);
                return (
                  <div key={q.id} className={`rounded-xl border overflow-hidden ${isTO ? Q.reviewTimeout : correct ? Q.reviewCorrect : Q.reviewWrong}`}>
                    <button onClick={() => toggleReviewCard(i)} className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${Q.reviewHeader}`}>
                      <span className="text-base shrink-0">{isTO ? '⏰' : correct ? '✅' : '❌'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-1.5 items-center mb-0.5">
                          <span className={`text-xs truncate max-w-[150px] ${Q.reviewSubtopic}`}>{q.subtopic}</span>
                          <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${DIFFICULTY_BADGE[q.difficulty]} text-white`}>{q.difficulty}</span>
                        </div>
                        <p className={`text-xs truncate ${Q.reviewMuted}`}>{q.question}</p>
                      </div>
                      <span className={`text-xs shrink-0 ml-2 ${Q.reviewChevron}`}>{expanded ? '▲' : '▼'}</span>
                    </button>
                    {expanded && (
                      <div className={`px-4 pb-4 pt-2 border-t ${Q.reviewDivider}`}>
                        <p className={`text-sm mb-3 leading-relaxed ${Q.reviewBody}`}>{q.question}</p>
                        {isTO ? (
                          <p className="text-xs text-orange-400 mb-2">⏰ Timed out</p>
                        ) : !correct && ua !== null ? (
                          <p className="text-xs text-red-400 mb-2">Your answer: {q.options[ua]}</p>
                        ) : null}
                        <p className="text-xs text-green-400 mb-2">✓ Correct: {q.options[q.correctAnswer]}</p>
                        <p className={`text-xs leading-relaxed ${Q.reviewMuted}`}>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <button onClick={resetToHome} className={`flex-1 py-3.5 rounded-2xl font-bold transition-colors text-sm ${Q.backHome}`}>
                🏠 Back to Home
              </button>
              <button onClick={startQuiz} className={`flex-1 py-3.5 rounded-2xl font-bold transition-colors text-sm ${Q.retry}`}>
                🔄 Retry Same Settings
              </button>
            </div>
            {wrongCount > 0 && (
              <button onClick={retryWrongOnly} className={`w-full py-3.5 rounded-2xl font-bold transition-colors text-sm ${Q.retryWrong}`}>
                ❌ Retry {wrongCount} Wrong Answer{wrongCount !== 1 ? 's' : ''} Only
              </button>
            )}
          </div>

          <p className={`text-center text-xs mt-6 ${Q.footer}`}>
            <span className="font-mono">v{APP_VERSION}</span>
          </p>
        </div>
      </div>
    );
  }
}
