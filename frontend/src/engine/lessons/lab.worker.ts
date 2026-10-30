import { getLesson, runLesson } from './lessons';

self.onmessage = (e: MessageEvent<{ id: string; input: any }>) => {
  try {
    const lesson = getLesson(e.data.id);
    if (!lesson) {
      throw new Error(`Unknown lesson: ${e.data.id}`);
    }
    const result = runLesson(lesson, e.data.input);
    self.postMessage({ ok: true, ...result });
  } catch (err) {
    self.postMessage({
      ok: false,
      error: err instanceof Error ? err.message : 'Could not run this input.',
    });
  }
};
