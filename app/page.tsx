'use client';

import { useState, useMemo } from 'react';
import { questions, TOPICS, type Question, type Difficulty } from '@/data/questions';

type Screen = 'home' | 'quiz' | 'results';

interface QuizState {
  selectedQuestions: Question[];
  currentIndex: number;
  answers: (number | null)[];
  revealed: boolean[];
}

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

export default function Home() {
  const [screen, setScreen] = useState<Screen>('home');

  // ── Home screen settings ──
  const [selectedSubtopics, setSelectedSubtopics] = useState<Set<string>>(new Set());
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<Difficulty>>(
    new Set(['Easy', 'Medium', 'Hard'])
  );
  const [questionCount, setQuestionCount] = useState(10);

  // ── Quiz state ──
  const [quiz, setQuiz] = useState<QuizState | null>(null);

  // ── Derived ──
  const allSubtopics = useMemo(
    () => TOPICS.flatMap((t) => t.subtopics),
    []
  );

  const availableCount = useMemo(() => {
    const pool = questions.filter((q) => {
      const topicMatch = selectedSubtopics.size === 0 || selectedSubtopics.has(q.subtopic);
      const diffMatch = selectedDifficulties.has(q.difficulty);
      return topicMatch && diffMatch;
    });
    return pool.length;
  }, [selectedSubtopics, selectedDifficulties]);

  // ── Helpers ──
  function toggleSubtopic(sub: string) {
    setSelectedSubtopics((prev) => {
      const next = new Set(prev);
      next.has(sub) ? next.delete(sub) : next.add(sub);
      return next;
    });
  }

  function toggleDifficulty(d: Difficulty) {
    setSelectedDifficulties((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });
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

  function startQuiz() {
    const pool = questions.filter((q) => {
      const topicMatch = selectedSubtopics.size === 0 || selectedSubtopics.has(q.subtopic);
      const diffMatch = selectedDifficulties.has(q.difficulty);
      return topicMatch && diffMatch;
    });
    if (pool.length === 0) return;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setQuiz({
      selectedQuestions: selected,
      currentIndex: 0,
      answers: new Array(selected.length).fill(null),
      revealed: new Array(selected.length).fill(false),
    });
    setScreen('quiz');
  }

  function handleAnswer(optionIndex: number) {
    if (!quiz) return;
    if (quiz.revealed[quiz.currentIndex]) return; // already answered
    setQuiz((prev) => {
      if (!prev) return prev;
      const answers = [...prev.answers];
      const revealed = [...prev.revealed];
      answers[prev.currentIndex] = optionIndex;
      revealed[prev.currentIndex] = true;
      return { ...prev, answers, revealed };
    });
  }

  function goNext() {
    if (!quiz) return;
    if (quiz.currentIndex < quiz.selectedQuestions.length - 1) {
      setQuiz((prev) => prev && { ...prev, currentIndex: prev.currentIndex + 1 });
    } else {
      setScreen('results');
    }
  }

  function goBack() {
    if (!quiz || quiz.currentIndex === 0) return;
    setQuiz((prev) => prev && { ...prev, currentIndex: prev.currentIndex - 1 });
  }

  function resetToHome() {
    setScreen('home');
    setQuiz(null);
  }

  // ── Score ──
  const score = useMemo(() => {
    if (!quiz) return 0;
    return quiz.answers.filter(
      (a, i) => a === quiz.selectedQuestions[i].correctAnswer
    ).length;
  }, [quiz]);

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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-white/10 backdrop-blur rounded-2xl px-6 py-2 mb-4 text-sm font-medium tracking-widest uppercase text-purple-200">
              AQA 7404 / 7405
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              A-Level Chemistry Quiz
            </h1>
            <p className="text-purple-200 text-lg">
              Test yourself on every topic from the AQA specification
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column — topics */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Select Topics
                <span className="ml-auto text-xs text-purple-300 font-normal">
                  (all = leave unchecked)
                </span>
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                {TOPICS.map((cat) => {
                  const allChecked = cat.subtopics.every((s) => selectedSubtopics.has(s));
                  const someChecked = cat.subtopics.some((s) => selectedSubtopics.has(s));
                  return (
                    <div key={cat.category}>
                      <button
                        onClick={() => toggleCategory(cat.category)}
                        className={`w-full text-left px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                          allChecked
                            ? 'bg-purple-500/50'
                            : someChecked
                            ? 'bg-purple-500/30'
                            : 'bg-white/5 hover:bg-white/10'
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
                              selectedSubtopics.has(sub)
                                ? 'bg-purple-400/40 text-white'
                                : 'text-purple-200 hover:bg-white/10'
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
            </div>

            {/* Right column — settings */}
            <div className="space-y-5">
              {/* Difficulty */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Difficulty
                </h2>
                <div className="flex gap-3">
                  {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleDifficulty(d)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                        selectedDifficulties.has(d)
                          ? DIFFICULTY_COLORS[d] + ' border-current scale-105'
                          : 'bg-white/5 border-white/20 text-white/50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question count */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔢</span> Questions per Session
                </h2>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="flex-1 accent-purple-400"
                  />
                  <span className="text-3xl font-bold text-purple-200 w-10 text-center">
                    {questionCount}
                  </span>
                </div>
                <p className="text-xs text-purple-300 mt-2">
                  {availableCount} questions available with current filters
                </p>
              </div>

              {/* Summary */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📋</span> Session Summary
                </h2>
                <ul className="text-sm text-purple-200 space-y-1">
                  <li>
                    Topics:{' '}
                    <span className="text-white font-medium">
                      {selectedSubtopics.size === 0
                        ? 'All topics'
                        : `${selectedSubtopics.size} selected`}
                    </span>
                  </li>
                  <li>
                    Difficulty:{' '}
                    <span className="text-white font-medium">
                      {selectedDifficulties.size === 0
                        ? 'None selected'
                        : [...selectedDifficulties].join(', ')}
                    </span>
                  </li>
                  <li>
                    Questions:{' '}
                    <span className="text-white font-medium">
                      {Math.min(questionCount, availableCount)}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Start button */}
              <button
                onClick={startQuiz}
                disabled={availableCount === 0 || selectedDifficulties.size === 0}
                className="w-full py-4 rounded-2xl text-lg font-bold transition-all bg-white text-purple-900 hover:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Quiz →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // QUIZ SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  function QuizScreen() {
    if (!quiz) return null;
    const q = quiz.selectedQuestions[quiz.currentIndex];
    const answered = quiz.revealed[quiz.currentIndex];
    const userAnswer = quiz.answers[quiz.currentIndex];
    const isCorrect = userAnswer === q.correctAnswer;
    const progress = ((quiz.currentIndex + 1) / quiz.selectedQuestions.length) * 100;
    const isLast = quiz.currentIndex === quiz.selectedQuestions.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={resetToHome}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              ← Home
            </button>
            <span className="text-sm text-gray-400">
              {quiz.currentIndex + 1} / {quiz.selectedQuestions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question card */}
          <div className="bg-gray-800 rounded-2xl p-7 shadow-2xl">
            {/* Meta */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs px-2.5 py-1 bg-purple-900/60 text-purple-300 rounded-full">
                {q.topic}
              </span>
              <span className="text-xs px-2.5 py-1 bg-gray-700 text-gray-300 rounded-full">
                {q.subtopic}
              </span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${DIFFICULTY_BADGE[q.difficulty]} text-white`}
              >
                {q.difficulty}
              </span>
            </div>

            {/* Question text */}
            <p className="text-lg font-medium leading-relaxed mb-6">{q.question}</p>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let style =
                  'w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm font-medium ';
                if (!answered) {
                  style +=
                    'border-gray-600 bg-gray-700/50 hover:bg-gray-700 hover:border-purple-500 cursor-pointer';
                } else if (i === q.correctAnswer) {
                  style += 'border-green-500 bg-green-900/30 text-green-300';
                } else if (i === userAnswer && !isCorrect) {
                  style += 'border-red-500 bg-red-900/30 text-red-300';
                } else {
                  style += 'border-gray-600 bg-gray-700/30 text-gray-500 cursor-default';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                    className={style}
                  >
                    <span className="inline-block w-6 font-bold mr-2 text-gray-400">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                    {answered && i === q.correctAnswer && (
                      <span className="ml-2 text-green-400">✓</span>
                    )}
                    {answered && i === userAnswer && !isCorrect && (
                      <span className="ml-2 text-red-400">✗</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {answered && (
              <div
                className={`mt-5 p-4 rounded-xl text-sm leading-relaxed border ${
                  isCorrect
                    ? 'bg-green-900/20 border-green-700 text-green-200'
                    : 'bg-red-900/20 border-red-700 text-red-200'
                }`}
              >
                <span className="font-bold">
                  {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                </span>
                {q.explanation}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={goBack}
              disabled={quiz.currentIndex === 0}
              className="px-5 py-2.5 rounded-xl bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              disabled={!answered}
              className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold transition-colors"
            >
              {isLast ? 'Finish & See Results →' : 'Next Question →'}
            </button>
          </div>
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
    const pct = Math.round((score / total) * 100);

    const grade =
      pct >= 90
        ? { label: 'Excellent!', emoji: '🏆', color: 'text-yellow-400' }
        : pct >= 70
        ? { label: 'Good Work!', emoji: '🎉', color: 'text-green-400' }
        : pct >= 50
        ? { label: 'Getting There', emoji: '📖', color: 'text-blue-400' }
        : { label: 'Keep Revising', emoji: '💪', color: 'text-orange-400' };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 py-10">
          {/* Score header */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h1 className={`text-4xl font-bold mb-1 ${grade.color}`}>{grade.label}</h1>
            <p className="text-gray-400">
              You scored{' '}
              <span className="text-white font-bold text-2xl">
                {score}/{total}
              </span>{' '}
              ({pct}%)
            </p>

            {/* Score bar */}
            <div className="w-full bg-gray-700 rounded-full h-4 mt-6 max-w-sm mx-auto">
              <div
                className={`h-4 rounded-full transition-all duration-700 ${
                  pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Question review */}
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold text-gray-300">Question Review</h2>
            {quiz.selectedQuestions.map((q, i) => {
              const ua = quiz.answers[i];
              const correct = ua === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`rounded-xl p-5 border ${
                    correct
                      ? 'bg-green-900/20 border-green-700/50'
                      : 'bg-red-900/20 border-red-700/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{correct ? '✅' : '❌'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs text-purple-400">{q.subtopic}</span>
                        <span
                          className={`text-xs font-semibold px-1.5 rounded ${DIFFICULTY_BADGE[q.difficulty]} text-white`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-200 mb-2">{q.question}</p>
                      {!correct && ua !== null && (
                        <p className="text-xs text-red-300 mb-1">
                          Your answer: {q.options[ua]}
                        </p>
                      )}
                      <p className="text-xs text-green-300 mb-2">
                        Correct: {q.options[q.correctAnswer]}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={resetToHome}
              className="flex-1 py-3.5 rounded-2xl bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors text-sm"
            >
              🏠 Back to Home
            </button>
            <button
              onClick={startQuiz}
              className="flex-1 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 font-bold transition-colors text-sm"
            >
              🔄 Retry Same Settings
            </button>
          </div>
        </div>
      </div>
    );
  }
}
