import React, { Component, useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text as DreiText } from '@react-three/drei';
import * as THREE from 'three';
import { getLesson, runLesson } from '../engine/lessons/lessons';
import type { LessonDefinition, Step } from '../engine/lessons/lessons';
import { STARTERS } from '../engine/lessons/starters';
import { SOLUTIONS } from '../engine/lessons/solutions';
import { api } from '../lib/api';
import { useAuth } from '../stores/auth';

const COLOR_DEFAULT = '#56b4e9';
const COLOR_MUTED = '#566482';
const COLOR_OK = '#36c99b';
const COLOR_HIGHLIGHT = '#efb842';
const COLOR_ACCENT2 = '#eb77a8';

function fmtVal(v: any): string {
  if (typeof v === 'number') {
    return Number.isInteger(v) ? String(v) : v.toPrecision(3);
  }
  if (v == null) return '–';
  return String(v);
}

interface SceneNode {
  id: string;
  label?: string;
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  shape?: 'box' | 'sphere';
}

interface SceneEdge {
  from: string;
  to: string;
  label?: string;
  directed?: boolean;
}

interface SceneData {
  nodes: SceneNode[];
  edges: SceneEdge[];
  title: string;
  explanation: string;
  cropped?: boolean;
}

function buildScene(
  def: LessonDefinition,
  input: any,
  currentStep?: Step,
  visual?: any,
  stepHistory: Step[] = [],
): SceneData {
  const scene: SceneData = {
    nodes: [],
    edges: [],
    title: def.name,
    explanation: currentStep?.message ?? 'Starting example',
  };

  const addNode = (
    id: string,
    label: string,
    x: number,
    y: number,
    z: number,
    color = COLOR_DEFAULT,
    size?: [number, number, number],
    shape: 'box' | 'sphere' = 'box',
  ) => {
    scene.nodes.push({ id, label, position: [x, y, z], color, size, shape });
  };

  if (def.id === 'trie') {
    const inserted = stepHistory
      .filter((s) => s.message.startsWith('Insert '))
      .map((s) => String(s.state));
    const prefixSteps = stepHistory.filter((s) =>
      s.message.startsWith('Follow prefix character'),
    ).length;
    const currentPrefix = String(input.prefix ?? '').slice(0, prefixSteps);
    const prefixes = new Set(['']);
    const fullWords = new Set(inserted);

    for (const w of inserted) {
      for (let i = 1; i <= w.length; i++) {
        prefixes.add(w.slice(0, i));
      }
    }

    const byLen = new Map<number, string[]>();
    for (const p of prefixes) {
      const list = byLen.get(p.length) ?? [];
      list.push(p);
      byLen.set(p.length, list);
    }

    for (const [len, words] of byLen) {
      words.forEach((w, idx) => {
        const isCurrent = w === currentPrefix && prefixSteps > 0;
        const color = isCurrent ? COLOR_HIGHLIGHT : fullWords.has(w) ? COLOR_OK : COLOR_DEFAULT;
        const label = w ? (w.at(-1) ?? '') + (fullWords.has(w) ? ' ✓' : '') : 'root';
        addNode(
          'trie:' + w,
          label,
          (idx - (words.length - 1) / 2) * 1.8,
          -len * 1.5,
          0,
          color,
          [0.55, 0.55, 0.55],
          'sphere',
        );
        if (w) {
          scene.edges.push({ from: 'trie:' + w.slice(0, -1), to: 'trie:' + w, directed: true });
        }
      });
    }
    scene.title = `Trie • prefix: ${input.prefix}`;
    return scene;
  }

  if (visual?.kind === 'dp') {
    scene.title = visual.title;
    scene.explanation = visual.explanation;
    const rows = visual.table.length;
    const cols = Math.max(1, ...visual.table.map((r: any[]) => r.length));
    const startRow = Math.max(0, Math.min((visual.active?.[0] ?? 0) - 4, rows - 10));
    const startCol = Math.max(0, Math.min((visual.active?.[1] ?? 0) - 6, cols - 14));
    scene.cropped = rows > 10 || cols > 14;

    for (let r = startRow; r < Math.min(rows, startRow + 10); r++) {
      for (let c = startCol; c < Math.min(cols, startCol + 14); c++) {
        const isActive = visual.active?.[0] === r && visual.active?.[1] === c;
        const isDep = visual.dependencies?.some(([dr, dc]: [number, number]) => dr === r && dc === c);
        const color = isActive ? COLOR_HIGHLIGHT : isDep ? COLOR_ACCENT2 : COLOR_MUTED;
        addNode(
          `${r}:${c}`,
          fmtVal(visual.table[r][c]),
          (c - startCol) * 1.4,
          isActive ? 0.5 : 0.15,
          (r - startRow) * 1.4,
          color,
          [1.15, isActive ? 0.8 : 0.2, 1.15],
        );
        if (isActive && visual.dependencies) {
          for (const [dr, dc] of visual.dependencies) {
            if (dr >= startRow && dc >= startCol && dr < startRow + 10 && dc < startCol + 14) {
              scene.edges.push({ from: `${dr}:${dc}`, to: `${r}:${c}`, directed: true });
            }
          }
        }
      }
    }
    return scene;
  }

  // General array or object representation
  const st = currentStep?.state ?? input;
  if (Array.isArray(st)) {
    const maxVal = Math.max(1, ...st.filter((x) => typeof x === 'number').map((x) => Math.abs(x)));
    st.forEach((v, idx) => {
      const h = typeof v === 'number' ? 0.3 + (Math.abs(v) / maxVal) * 3 : 0.6;
      addNode(
        String(idx),
        `${fmtVal(v)}\n[${idx}]`,
        idx * 1.2 - (st.length * 1.2) / 2,
        h / 2,
        0,
        COLOR_DEFAULT,
        [0.85, h, 0.85],
      );
      if (idx > 0 && def.topic === 'linked-lists') {
        scene.edges.push({ from: String(idx - 1), to: String(idx), directed: true });
      }
    });
    return scene;
  }

  if (st && typeof st === 'object') {
    const entries = Object.entries(st).filter(([, val]) =>
      ['number', 'string', 'boolean'].includes(typeof val),
    );
    entries.slice(0, 16).forEach(([key, val], idx) => {
      addNode(
        key,
        `${key}\n${fmtVal(val)}`,
        (idx % 4) * 2 - 3,
        0.3,
        Math.floor(idx / 4) * 2 - 2,
        idx === 0 ? COLOR_HIGHLIGHT : COLOR_DEFAULT,
        [1.6, 0.6, 1.2],
      );
    });
    return scene;
  }

  addNode('res', `Result:\n${fmtVal(st)}`, 0, 0.5, 0, COLOR_OK, [2, 1, 1]);
  return scene;
}

class SceneErrorBoundary extends Component<{ fallback: React.ReactNode; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function SceneCanvas({ scene, fallback }: { scene: SceneData; fallback: React.ReactNode }) {
  const { center, extent } = useMemo(() => {
    if (!scene.nodes.length) {
      return { center: [0, 0, 0] as [number, number, number], extent: 10 };
    }
    const xs = scene.nodes.map((n) => n.position[0]);
    const ys = scene.nodes.map((n) => n.position[1]);
    const zs = scene.nodes.map((n) => n.position[2]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const minZ = Math.min(...zs), maxZ = Math.max(...zs);
    return {
      center: [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2] as [number, number, number],
      extent: Math.max(7, maxX - minX, maxY - minY, maxZ - minZ),
    };
  }, [scene]);

  const nodeMap = useMemo(() => new Map(scene.nodes.map((n) => [n.id, n])), [scene]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-surface-3 bg-surface-1">
      <div className="pointer-events-none absolute left-3 top-3 z-10 max-w-[80%] text-xs text-ink-muted">
        <span className="font-medium text-ink">{scene.title}</span>
        {scene.cropped && (
          <span className="block text-warn">Showing a bounded view; switch to Guided mode for full state.</span>
        )}
      </div>

      <SceneErrorBoundary fallback={fallback}>
        <Canvas
          camera={{
            position: [center[0] + extent * 0.4, center[1] + extent * 0.9, center[2] + extent * 1.3],
            fov: 45,
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 18, 10]} intensity={1.5} />
          <OrbitControls makeDefault />

          {scene.nodes.map((n) => (
            <group key={n.id} position={n.position}>
              <mesh>
                {n.shape === 'sphere' ? (
                  <sphereGeometry args={[(n.size?.[0] ?? 0.7) / 2, 20, 16]} />
                ) : (
                  <boxGeometry args={n.size ?? [1, 0.6, 1]} />
                )}
                <meshStandardMaterial color={n.color} roughness={0.4} metalness={0.1} />
              </mesh>
              {n.label && (
                <DreiText
                  position={[0, (n.size?.[1] ?? 0.6) / 2 + 0.35, 0]}
                  fontSize={0.28}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                >
                  {n.label}
                </DreiText>
              )}
            </group>
          ))}

          {scene.edges.map((e, idx) => {
            const from = nodeMap.get(e.from);
            const to = nodeMap.get(e.to);
            if (!from || !to) return null;
            const p1 = new THREE.Vector3(...from.position);
            const p2 = new THREE.Vector3(...to.position);
            const dir = p2.clone().sub(p1);
            const len = dir.length();
            if (len < 0.1) return null;
            dir.normalize();

            return (
              <group key={idx}>
                {e.directed ? (
                  <primitive
                    object={new THREE.ArrowHelper(dir, p1, len, 0x9cabca, Math.min(0.35, len * 0.25), 0.15)}
                  />
                ) : (
                  <line>
                    <bufferGeometry
                      attach="geometry"
                      {...new THREE.BufferGeometry().setFromPoints([p1, p2])}
                    />
                    <lineBasicMaterial attach="material" color="#9cabca" linewidth={2} />
                  </line>
                )}
              </group>
            );
          })}
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}

function generateExamples(def: LessonDefinition) {
  const list = [{ input: structuredClone(def.input), expected: def.expected, label: 'Worked example' }];
  const candidates: any[] = [];

  for (const [key, val] of Object.entries(def.input)) {
    const variations =
      typeof val === 'number'
        ? [val + 1, val > 0 ? val - 1 : val + 2, 0]
        : typeof val === 'string'
        ? ['', val + val[0], val.slice(0, -1)]
        : Array.isArray(val)
        ? [[], val.slice(0, -1), [...val].reverse()]
        : [];
    for (const v of variations) {
      candidates.push({ ...structuredClone(def.input), [key]: v });
    }
  }

  const seen = new Set([JSON.stringify(def.input)]);
  for (const c of candidates) {
    const s = JSON.stringify(c);
    if (!seen.has(s)) {
      seen.add(s);
      try {
        const { output } = runLesson(def, c);
        list.push({ input: c, expected: output, label: `Extra example ${list.length}` });
      } catch {}
      if (list.length === 5) break;
    }
  }
  return list;
}

export function LabPage() {
  const { id } = useParams<{ id: string }>();
  const def = getLesson(id ?? '');

  if (!def) {
    return (
      <div className="p-8">
        <p className="text-sm text-ink-muted">Lesson not found.</p>
        <Link to="/" className="mt-2 inline-block text-accent hover:underline">
          Open catalog
        </Link>
      </div>
    );
  }

  return <LessonWorkbench def={def} />;
}

function LessonWorkbench({ def }: { def: LessonDefinition }) {
  const [currentInput, setCurrentInput] = useState(def.input);
  const examples = useMemo(() => generateExamples(def), [def]);
  const [activeTab, setActiveTab] = useState<'Code' | 'Examples' | 'Complexity' | 'Practice' | 'AI Tutor'>('Code');
  const [language, setLanguage] = useState<'python' | 'cpp' | 'java'>('python');

  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'3d' | 'guided'>('3d');
  const [errorMsg, setErrorMsg] = useState('');

  const loadInput = useCallback(
    (newIn: any) => {
      setIsPlaying(false);
      setErrorMsg('');
      try {
        const res = runLesson(def, newIn);
        setCurrentInput(newIn);
        setSteps(res.steps);
        setStepIndex(0);
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : 'Could not run input.');
      }
    },
    [def],
  );

  useEffect(() => {
    loadInput(def.input);
  }, [def, loadInput]);

  useEffect(() => {
    if (!isPlaying) return;
    if (stepIndex >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      setStepIndex((i) => i + 1);
    }, 1000 / speed);
    return () => clearTimeout(timer);
  }, [isPlaying, stepIndex, steps.length, speed]);

  const currentStep = steps[stepIndex];
  const lastVisual = steps.slice(0, stepIndex + 1).findLast((s) => s.visual)?.visual;
  const sceneData = useMemo(
    () => buildScene(def, currentInput, currentStep, lastVisual, steps.slice(0, stepIndex + 1)),
    [def, currentInput, currentStep, lastVisual, steps, stepIndex],
  );

  const fallbackView = (
    <div className="h-full overflow-auto p-4 text-xs font-mono">
      <pre className="text-ink">{JSON.stringify(currentStep?.state ?? currentInput, null, 2)}</pre>
    </div>
  );

  // Review status
  const user = useAuth((s) => s.user);
  const [reviewMsg, setReviewMsg] = useState('');
  const [reviewLoading, setReviewLoading] = useState(false);

  const handleReview = async (rating: number) => {
    setReviewLoading(true);
    try {
      const res = await api.post<{ due_at: string }>('/learning/reviews', {
        algorithm_id: def.id,
        rating,
      });
      setReviewMsg(`Saved. Next review: ${new Date(res.due_at).toLocaleDateString()}`);
    } catch (e) {
      setReviewMsg(e instanceof Error ? e.message : 'Could not save review.');
    } finally {
      setReviewLoading(false);
    }
  };

  // Practice code
  const starterCode = STARTERS[def.id]?.[language] ?? '';
  const [practiceCode, setPracticeCode] = useState(() => {
    try {
      return localStorage.getItem(`studio-native:${def.id}:${language}`) ?? starterCode;
    } catch {
      return starterCode;
    }
  });

  const handleCodeChange = (val: string | undefined) => {
    const code = val ?? '';
    setPracticeCode(code);
    try {
      localStorage.setItem(`studio-native:${def.id}:${language}`, code);
    } catch {}
  };

  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);

  const handleSubmitCode = async () => {
    setSubmitting(true);
    setSubmissionResult(null);
    try {
      const res = await api.post('/submissions', {
        algorithm_id: def.id,
        language,
        code: practiceCode,
      });
      setSubmissionResult(res);
    } catch (err) {
      setSubmissionResult({ error: err instanceof Error ? err.message : 'Submission failed.' });
    } finally {
      setSubmitting(false);
    }
  };

  // Tutor chat
  const [tutorMessages, setTutorMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: `Hi! I am your AI tutor for **${def.name}**. Ask me questions about how this algorithm works, complexity analysis, or how to implement your solution.`,
    },
  ]);
  const [tutorInput, setTutorInput] = useState('');
  const [tutorStreaming, setTutorStreaming] = useState(false);

  const handleSendTutor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutorInput.trim() || tutorStreaming) return;
    const q = tutorInput.trim();
    setTutorInput('');
    const newHistory = [...tutorMessages, { role: 'user' as const, content: q }];
    setTutorMessages(newHistory);
    setTutorStreaming(true);

    try {
      const res = await api.post<{ reply: string }>('/tutor/chat', {
        algorithm_id: def.id,
        messages: newHistory,
        context: {
          step: stepIndex,
          message: currentStep?.message,
          code: practiceCode,
        },
      });
      setTutorMessages([...newHistory, { role: 'assistant', content: res.reply }]);
    } catch {
      setTutorMessages([
        ...newHistory,
        {
          role: 'assistant',
          content: 'The AI tutor is currently offline or unconfigured. Check ANTHROPIC_API_KEY in the backend.',
        },
      ]);
    } finally {
      setTutorStreaming(false);
    }
  };

  return (
    <div className="studio-workspace">
      {/* Left visual column */}
      <section className="studio-visual-column">
        <div className="studio-heading">
          <Link to={`/?topic=${def.topic}`} className="text-xs text-accent hover:underline">
            ← Back to topic
          </Link>
          <div className="mt-1 flex items-baseline gap-3">
            <h1 className="text-xl font-semibold tracking-tight">{def.name}</h1>
            <span className="text-xs text-ink-muted font-mono">{def.time}</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">{def.summary}</p>
        </div>

        {/* Input Bar */}
        <div className="studio-input-bar">
          <span className="text-[10px] uppercase tracking-wider text-ink-muted font-medium">Input</span>
          <select
            aria-label="Example preset"
            defaultValue=""
            onChange={(e) => {
              const idx = Number(e.target.value);
              if (!isNaN(idx) && examples[idx]) {
                loadInput(examples[idx].input);
              }
            }}
            className="rounded bg-surface-2 px-2 py-1.5 text-xs text-ink focus:outline-none"
          >
            <option value="" disabled>
              Load preset example
            </option>
            {examples.map((ex, idx) => (
              <option key={idx} value={idx}>
                {ex.label}
              </option>
            ))}
          </select>

          <button onClick={() => loadInput(def.input)}>Reset</button>

          <span className="ml-auto hidden text-[10px] text-ink-muted lg:inline font-mono">
            {Object.keys(currentInput)
              .map(
                (k) =>
                  `${k}: ${
                    Array.isArray(currentInput[k])
                      ? `[${currentInput[k].length}]`
                      : String(currentInput[k]).slice(0, 20)
                  }`,
              )
              .join(' | ')}
          </span>
        </div>

        {errorMsg && <p className="text-xs text-danger">{errorMsg}</p>}

        {/* Visual area */}
        <div className="studio-visual-area">
          <div className="studio-view-switch" role="group">
            <button aria-pressed={viewMode === '3d'} onClick={() => setViewMode('3d')}>
              3D visualizer
            </button>
            <button aria-pressed={viewMode === 'guided'} onClick={() => setViewMode('guided')}>
              State inspector
            </button>
          </div>

          <div className="min-h-0 flex-1">
            {viewMode === '3d' ? (
              <SceneCanvas scene={sceneData} fallback={fallbackView} />
            ) : (
              fallbackView
            )}
          </div>

          <div className="studio-narration">
            <p className="font-medium text-ink">{currentStep?.message ?? 'Starting example...'}</p>
            {lastVisual?.explanation && (
              <span className="mt-1 block text-[11px] text-ink-muted">{lastVisual.explanation}</span>
            )}
          </div>
        </div>

        {/* Playback Controls */}
        <div className="studio-playback">
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 font-mono text-xs text-ink-muted">
              {stepIndex} / {Math.max(0, steps.length - 1)}
            </span>
            <input
              type="range"
              min={0}
              max={Math.max(0, steps.length - 1)}
              value={stepIndex}
              disabled={!steps.length}
              onChange={(e) => {
                setIsPlaying(false);
                setStepIndex(Number(e.target.value));
              }}
              className="timeline"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button onClick={() => { setIsPlaying(false); setStepIndex(0); }} disabled={!steps.length}>
              Restart
            </button>
            <button
              onClick={() => { setIsPlaying(false); setStepIndex((i) => Math.max(0, i - 1)); }}
              disabled={stepIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (stepIndex === steps.length - 1) setStepIndex(0);
                setIsPlaying((p) => !p);
              }}
              disabled={!steps.length}
              className={isPlaying ? 'bg-accent text-surface-0 font-medium' : ''}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={() => { setIsPlaying(false); setStepIndex((i) => Math.min(steps.length - 1, i + 1)); }}
              disabled={!steps.length || stepIndex === steps.length - 1}
            >
              Next
            </button>

            {[0.25, 0.5, 1, 2, 4].map((s: number) => (
              <button
                key={s}
                aria-pressed={speed === s}
                onClick={() => setSpeed(s)}
                className="speed-button"
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Right learning column */}
      <section className="studio-learning">
        <div role="tablist" className="studio-tabs">
          {(['Code', 'Examples', 'Complexity', 'Practice', 'AI Tutor'] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'selected' : ''}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="studio-panel-content">
          {(activeTab === 'Code' || activeTab === 'Practice') && (
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-ink-muted font-medium">Language</span>
              <div className="flex gap-1">
                {(['python', 'cpp', 'java'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`rounded px-2.5 py-1 text-xs capitalize ${
                      language === l ? 'bg-surface-3 text-ink font-medium' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {l === 'cpp' ? 'C++' : l}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Code' && (
            <div className="h-[480px] overflow-hidden rounded-md border border-surface-3">
              <Editor
                height="100%"
                language={language === 'cpp' ? 'cpp' : language}
                theme="vs-dark"
                value={SOLUTIONS[def.id]?.[language] ?? '# Reference solution coming soon.'}
                options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13 }}
              />
            </div>
          )}

          {activeTab === 'Examples' && (
            <div className="space-y-4">
              <h2 className="font-semibold text-ink">Worked examples</h2>
              {examples.map((ex, idx) => (
                <article key={idx} className="rounded-lg border border-surface-3 bg-surface-2/40 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-accent">{ex.label}</h3>
                    <button
                      onClick={() => loadInput(ex.input)}
                      className="rounded bg-accent/15 px-2.5 py-1 text-xs text-accent hover:bg-accent/25"
                    >
                      Load in visualizer
                    </button>
                  </div>
                  <pre className="overflow-x-auto text-xs text-ink-muted">
                    Input: {JSON.stringify(ex.input)}
                  </pre>
                  <pre className="mt-1 overflow-x-auto text-xs text-ok">
                    Result: {JSON.stringify(ex.expected)}
                  </pre>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'Complexity' && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold tracking-tight">How this algorithm scales</h2>
              <div className="complexity-cards">
                <div>
                  <span>Time complexity</span>
                  <strong className="font-mono text-accent">{def.time}</strong>
                </div>
                <div>
                  <span>Extra space</span>
                  <strong className="font-mono text-accent-2">{def.space}</strong>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{def.summary}</p>

              {/* Spaced repetition review */}
              <div className="mt-6 rounded-xl border border-surface-3 bg-surface-2/30 p-4">
                <h3 className="text-sm font-medium text-ink">How well can you explain this?</h3>
                <p className="mt-1 text-xs text-ink-muted">
                  Rate your confidence to schedule a spaced repetition review.
                </p>
                {user ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Need to relearn', 'With help', 'On my own', 'Could teach it'].map((label, rIdx) => (
                      <button
                        key={label}
                        disabled={reviewLoading}
                        onClick={() => handleReview(rIdx)}
                        className="rounded-md border border-surface-3 bg-surface-1 px-3 py-1.5 text-xs text-ink hover:border-accent disabled:opacity-50"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-xs text-ink-muted">
                    <Link to="/login" className="text-accent underline">
                      Sign in
                    </Link>{' '}
                    to save spaced reviews.
                  </p>
                )}
                {reviewMsg && <p className="mt-2 text-xs text-accent">{reviewMsg}</p>}
              </div>
            </div>
          )}

          {activeTab === 'Practice' && (
            <div className="space-y-3">
              <p className="text-xs text-ink-muted">
                Complete the <code className="text-accent">solve</code> function. You can run test submissions against backend test cases.
              </p>
              <div className="h-[360px] overflow-hidden rounded-md border border-surface-3">
                <Editor
                  height="100%"
                  language={language === 'cpp' ? 'cpp' : language}
                  theme="vs-dark"
                  value={practiceCode}
                  onChange={handleCodeChange}
                  options={{ minimap: { enabled: false }, fontSize: 13 }}
                />
              </div>
              <button
                disabled={submitting}
                onClick={handleSubmitCode}
                className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-surface-0 hover:bg-accent/90 disabled:opacity-50"
              >
                {submitting ? 'Running tests…' : 'Submit solution'}
              </button>

              {submissionResult && (
                <div className="mt-2 rounded-md border border-surface-3 bg-surface-2 p-3 text-xs">
                  {submissionResult.error ? (
                    <p className="text-danger">{submissionResult.error}</p>
                  ) : (
                    <div>
                      <p className={submissionResult.passed ? 'text-ok font-semibold' : 'text-warn font-semibold'}>
                        {submissionResult.passed ? 'All tests passed!' : 'Some tests failed'}
                      </p>
                      <pre className="mt-2 max-h-36 overflow-auto text-[11px] text-ink-muted">
                        {JSON.stringify(submissionResult, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'AI Tutor' && (
            <div className="flex h-full flex-col">
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
                {tutorMessages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-3 text-xs leading-relaxed ${
                      m.role === 'user'
                        ? 'ml-6 bg-accent/20 border border-accent/40 text-ink'
                        : 'mr-6 bg-surface-2 border border-surface-3 text-ink-muted'
                    }`}
                  >
                    <span className="mb-1 block font-semibold uppercase tracking-wider text-[10px] text-ink">
                      {m.role === 'user' ? 'You' : 'AI Tutor'}
                    </span>
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                ))}
                {tutorStreaming && (
                  <div className="mr-6 rounded-lg border border-surface-3 bg-surface-2 p-3 text-xs text-ink-muted">
                    AI Tutor is thinking…
                  </div>
                )}
              </div>

              <form onSubmit={handleSendTutor} className="mt-3 flex gap-2">
                <input
                  value={tutorInput}
                  onChange={(e) => setTutorInput(e.target.value)}
                  placeholder={`Ask about ${def.name}…`}
                  className="min-w-0 flex-1 rounded-md border border-surface-3 bg-surface-1 px-3 py-2 text-xs text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={tutorStreaming || !tutorInput.trim()}
                  className="rounded-md bg-accent px-4 py-2 text-xs font-medium text-surface-0 hover:bg-accent/90 disabled:opacity-50"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
