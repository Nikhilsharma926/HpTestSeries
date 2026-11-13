// Shared question pool, claim() and mock() builder for the Rajasthan exam mocks (index.ts and jobs.ts).

import { EXAM_SERIES } from "../exam-series";
import { HPAS_MOCKS } from "../hpas-series";
import { CET_TESTS } from "../hr-cet";
import { PATWARI_TESTS } from "../patwari";
import { COURT_CLERK_TESTS } from "../pb-court-clerk";
import { POLICE_PAID_TESTS } from "../pb-police";
import { POLICE_TESTS } from "../police";
import { RAJASTHAN_PATWARI_GK } from "../rajasthan/patwari-gk";
import type { Diff, PatwariQuestion, TestDef } from "../patwari/types";
import { questionTextHash } from "../../src/modules/content/text-hash";

const hash = (x: PatwariQuestion) => questionTextHash(x.en[0]);
export type Pick = (x: PatwariQuestion) => boolean;
export const subject =
  (...subjects: string[]): Pick =>
  (x) =>
    subjects.includes(x.subject);
export const topic =
  (subj: string, ...topics: string[]): Pick =>
  (x) =>
    x.subject === subj && topics.includes(x.topic);

/** Questions that name another state, or that date quickly, do not belong in a Rajasthan mock. */
const OTHER_STATE = /himachal|\bhp\b|shimla|punjab|haryana|chandigarh|हिमाचल|शिमला|पंजाब|हरियाणा|चंडीगढ़/i;
/** The shared High Court is not another-state wording for a Rajasthan reader either way, so "Punjab and Haryana" is left alone. */
const SHARED = /punjab (and|&) haryana|पंजाब एवं हरियाणा|पंजाब और हरियाणा/gi;
const STATE_GK = /^(hp-gk|punjab-gk|haryana-gk|rajasthan-gk)$/;
const usable = (x: PatwariQuestion) =>
  !STATE_GK.test(x.subject) && x.topic !== "current-affairs" && !OTHER_STATE.test(`${x.en[0]} ${x.en[2]} ${x.hi[0]} ${x.hi[2]}`.replace(SHARED, ""));

function dedupe(qs: PatwariQuestion[]): PatwariQuestion[] {
  const seen = new Set<string>();
  return qs.filter((x) => {
    const h = hash(x);
    if (seen.has(h)) return false;
    seen.add(h);
    return true;
  });
}

/** Everything the existing series hold, minus other-state, state-GK and current-affairs questions. */
export const GENERAL_POOL = dedupe(
  [...PATWARI_TESTS, ...POLICE_TESTS, ...COURT_CLERK_TESTS, ...POLICE_PAID_TESTS, ...CET_TESTS, ...EXAM_SERIES.flatMap((s) => s.tests)]
    .flatMap((t) => t.questions)
    .concat(HPAS_MOCKS.flat())
    .filter(usable),
);

export const RANK: Record<"easy" | "exam" | "hard", Record<Diff, number>> = {
  easy: { M: 0, E: 1, H: 2 },
  exam: { M: 0, H: 1, E: 2 },
  hard: { H: 0, M: 1, E: 2 },
};

const claimed = new Set<string>();

/** Takes `n` questions nobody has claimed yet, in difficulty order (stable by hash), and puts them in section `s`. */
export function claim(s: PatwariQuestion["s"], n: number, from: PatwariQuestion[], pick: Pick, level: keyof typeof RANK, label: string): PatwariQuestion[] {
  const out: PatwariQuestion[] = [];
  const order = [...from].sort((a, b) => RANK[level][a.d] - RANK[level][b.d] || (hash(a) < hash(b) ? -1 : 1));
  for (const x of order) {
    if (out.length === n) break;
    if (claimed.has(hash(x)) || !pick(x)) continue;
    claimed.add(hash(x));
    out.push({ ...x, s });
  }
  if (out.length < n) throw new Error(`rj-exams: only ${out.length} of ${n} questions left for ${label}`);
  return out;
}

export const gk = topic("general-studies", "indian-history", "indian-polity", "indian-geography", "indian-economy", "general-science", "static-gk");
export const reasoning = subject("reasoning");
export const quant = subject("quant");
export const english = subject("english");
export const hindi = subject("hindi");
export const computer = subject("computer");

export type Sec = { name: string; nameHi: string; count: number };

export const mock = (
  slug: string,
  title: string,
  titleHi: string,
  minutes: number,
  marks: { correct: number; wrong: number },
  exam: string,
  secs: Sec[],
  questions: PatwariQuestion[],
  note: string,
): TestDef => ({
  slug,
  title,
  titleHi,
  type: "MOCK",
  durationSec: minutes * 60,
  isFree: true,
  marksCorrect: marks.correct,
  marksWrong: marks.wrong,
  instructions:
    `Practice paper for the ${exam}: ${questions.length} questions, ${questions.length * marks.correct} marks, ${minutes} minutes. ` +
    `${note} Sections: ${secs.map((x) => `${x.name} ${x.count}`).join(", ")}. ` +
    `Each correct answer gives ${marks.correct} ${marks.correct === 1 ? "mark" : "marks"} and ${marks.wrong === 0 ? "there is no negative marking" : `each wrong answer deducts ${marks.wrong} marks`}. ` +
    "You can switch between English and Hindi at any time.",
  sections: secs.map(({ name, nameHi }) => ({ name, nameHi })),
  questions,
});
