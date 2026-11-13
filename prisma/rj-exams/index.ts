// Free mocks for the Rajasthan exams added on 13 November 2026 from FreeJobAlert's Rajasthan page (and its sidebar), so no
// new Rajasthan exam page is empty: RPSC Protection Officer, RSSB Patwari and the CURAJ Lower Division Clerk. Like the
// Haryana mocks (prisma/hr-exams), only the Patwari Rajasthan GK is written fresh (prisma/rajasthan/patwari-gk.ts); everything
// else (general studies, reasoning, maths, Hindi, English, computer) is not state specific, so it is drawn from the banks
// the other series already hold. The seed matches questions by text hash and reuses the rows.
// RSSB has published the Patwari paper pattern (150 questions, 300 marks, 3 hours, one-third negative marking), so that mock
// follows its section split at one third of the length. RPSC and CURAJ have not published a question-wise split for the other
// two, so those splits, durations and marking are ours and each test's instructions say so. Questions that name Himachal,
// Punjab or Haryana, and current-affairs questions (which go out of date), are left out. A mock claims each question once, so
// the three tests never repeat a question between them.

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
type Pick = (x: PatwariQuestion) => boolean;
const subject =
  (...subjects: string[]): Pick =>
  (x) =>
    subjects.includes(x.subject);
const topic =
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
const GENERAL_POOL = dedupe(
  [...PATWARI_TESTS, ...POLICE_TESTS, ...COURT_CLERK_TESTS, ...POLICE_PAID_TESTS, ...CET_TESTS, ...EXAM_SERIES.flatMap((s) => s.tests)]
    .flatMap((t) => t.questions)
    .concat(HPAS_MOCKS.flat())
    .filter(usable),
);

const RANK: Record<"easy" | "exam" | "hard", Record<Diff, number>> = {
  easy: { M: 0, E: 1, H: 2 },
  exam: { M: 0, H: 1, E: 2 },
  hard: { H: 0, M: 1, E: 2 },
};

const claimed = new Set<string>();

/** Takes `n` questions nobody has claimed yet, in difficulty order (stable by hash), and puts them in section `s`. */
function claim(s: PatwariQuestion["s"], n: number, from: PatwariQuestion[], pick: Pick, level: keyof typeof RANK, label: string): PatwariQuestion[] {
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

const gk = topic("general-studies", "indian-history", "indian-polity", "indian-geography", "indian-economy", "general-science", "static-gk");
const reasoning = subject("reasoning");
const quant = subject("quant");
const english = subject("english");
const hindi = subject("hindi");
const computer = subject("computer");

type Sec = { name: string; nameHi: string; count: number };

const mock = (
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

// ───────── RPSC Protection Officer (Paper I, General Studies) ─────────
export const PROTECTION_OFFICER_FREE_MOCK_SLUG = "rpsc-protection-officer-free-mock-1";
export const PROTECTION_OFFICER_SECTIONS: Sec[] = [
  { name: "History & Polity", nameHi: "इतिहास एवं राजव्यवस्था", count: 20 },
  { name: "Geography & Economy", nameHi: "भूगोल एवं अर्थव्यवस्था", count: 15 },
  { name: "Science & Static GK", nameHi: "विज्ञान एवं स्थिर सामान्य ज्ञान", count: 15 },
];
const protectionOfficerQuestions = [
  ...claim(0, 20, GENERAL_POOL, topic("general-studies", "indian-history", "indian-polity"), "exam", "Protection Officer History & Polity"),
  ...claim(1, 15, GENERAL_POOL, topic("general-studies", "indian-geography", "indian-economy"), "exam", "Protection Officer Geography & Economy"),
  ...claim(2, 15, GENERAL_POOL, topic("general-studies", "general-science", "static-gk"), "exam", "Protection Officer Science & Static GK"),
];
export const PROTECTION_OFFICER_FREE_TEST = mock(
  PROTECTION_OFFICER_FREE_MOCK_SLUG,
  "RPSC Protection Officer Free Mock Test 1 (Paper I General Studies)",
  "आरपीएससी संरक्षण अधिकारी फ़्री मॉक टेस्ट 1 (प्रथम प्रश्न-पत्र सामान्य अध्ययन)",
  60,
  { correct: 1, wrong: 0.33 },
  "RPSC Protection Officer Paper I (General Studies)",
  PROTECTION_OFFICER_SECTIONS,
  protectionOfficerQuestions,
  "RPSC's exam is two papers (General Studies, then Social Work/Law) held on one day, and reports do not give the question count or the syllabus split, so the length, subjects and one-third negative marking here are ours (one-third is what RPSC applies in other exams). Paper II and Rajasthan GK are not covered; practise Rajasthan GK in the free Rajasthan GK mock.",
);

// ───────── RSSB Patwari (the published pattern at one third of the length) ─────────
export const PATWARI_FREE_MOCK_SLUG = "rssb-patwari-free-mock-1";
export const PATWARI_SECTIONS: Sec[] = [
  { name: "General Science, History, Polity, Geography & GK", nameHi: "सामान्य विज्ञान, इतिहास, राजव्यवस्था, भूगोल एवं सामान्य ज्ञान", count: 13 },
  { name: "Rajasthan GK", nameHi: "राजस्थान सामान्य ज्ञान", count: 10 },
  { name: "General Hindi & English", nameHi: "सामान्य हिंदी एवं अंग्रेज़ी", count: 7 },
  { name: "Reasoning & Maths", nameHi: "तर्कशक्ति एवं गणित", count: 15 },
  { name: "General Computer", nameHi: "सामान्य कंप्यूटर", count: 5 },
];
const patwariQuestions = [
  ...claim(0, 13, GENERAL_POOL, gk, "exam", "Patwari General Studies"),
  ...RAJASTHAN_PATWARI_GK.map((x) => ({ ...x, s: 1 as const })),
  ...claim(2, 4, GENERAL_POOL, hindi, "exam", "Patwari Hindi"),
  ...claim(2, 3, GENERAL_POOL, english, "exam", "Patwari English"),
  ...claim(3, 8, GENERAL_POOL, reasoning, "exam", "Patwari Reasoning"),
  ...claim(3, 7, GENERAL_POOL, quant, "exam", "Patwari Maths"),
  ...claim(4, 5, GENERAL_POOL, computer, "exam", "Patwari Computer"),
];
export const PATWARI_FREE_TEST = mock(
  PATWARI_FREE_MOCK_SLUG,
  "Rajasthan Patwari Free Mock Test 1",
  "राजस्थान पटवारी फ़्री मॉक टेस्ट 1",
  60,
  { correct: 2, wrong: 0.67 },
  "RSSB Patwari written exam",
  PATWARI_SECTIONS,
  patwariQuestions,
  "The sections and marking follow the RSSB Patwari pattern (150 questions, 300 marks, 3 hours, 2 marks per question, one-third of the marks deducted for a wrong answer), cut to one third of the length: 50 questions in 60 minutes. RSSB has not announced the 2026 exam date or confirmed the pattern for the new notification, so check the advertisement when it is out. The real paper is offline with five options, the fifth for not attempting; this practice paper shows four.",
);

// ───────── CURAJ Lower Division Clerk (a written or computer test is possible, not confirmed) ─────────
export const CURAJ_LDC_FREE_MOCK_SLUG = "curaj-lower-division-clerk-free-mock-1";
export const CURAJ_LDC_SECTIONS: Sec[] = [
  { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 15 },
  { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10 },
  { name: "Maths", nameHi: "गणित", count: 10 },
  { name: "English", nameHi: "अंग्रेज़ी", count: 10 },
  { name: "Computer", nameHi: "कंप्यूटर", count: 5 },
];
const curajQuestions = [
  ...claim(0, 15, GENERAL_POOL, gk, "easy", "CURAJ General Awareness"),
  ...claim(1, 10, GENERAL_POOL, reasoning, "easy", "CURAJ Reasoning"),
  ...claim(2, 10, GENERAL_POOL, quant, "easy", "CURAJ Maths"),
  ...claim(3, 10, GENERAL_POOL, english, "easy", "CURAJ English"),
  ...claim(4, 5, GENERAL_POOL, computer, "easy", "CURAJ Computer"),
];
export const CURAJ_LDC_FREE_TEST = mock(
  CURAJ_LDC_FREE_MOCK_SLUG,
  "CURAJ Lower Division Clerk Free Mock Test 1",
  "कुराज लोअर डिवीजन क्लर्क फ़्री मॉक टेस्ट 1",
  50,
  { correct: 1, wrong: 0 },
  "CURAJ Lower Division Clerk recruitment",
  CURAJ_LDC_SECTIONS,
  curajQuestions,
  "The CURAJ notice (Advt. CURAJ/R./F.179/Rectt./2026/7314) says the university may conduct a written test, trade test, computer test or any other test, and does not give a pattern, so the subjects, length and marking here are ours and a written test is not confirmed. Typing speed (35 wpm English or 30 wpm Hindi) is an eligibility condition and is not covered.",
);

export const RJ_EXAM_TESTS = {
  protectionOfficer: [PROTECTION_OFFICER_FREE_TEST],
  patwari: [PATWARI_FREE_TEST],
  curaj: [CURAJ_LDC_FREE_TEST],
};
export const ALL_RJ_EXAM_TESTS: TestDef[] = Object.values(RJ_EXAM_TESTS).flat();
