// Free mocks for the Haryana exams on hrtestseries.in, so no Haryana exam page is empty: Haryana Police
// Constable, HPSC HCS (Prelims), HTET and the SVSU Assistant / Steno-typist written test. Nothing here is written fresh:
// Haryana GK comes from the HSSC CET Haryana GK sectionals, and the rest (general studies, reasoning, maths, English,
// Hindi, computer, pedagogy) is not state specific, so it is drawn from the banks the other series already hold. The seed
// matches questions by text hash and reuses the rows.
// None of these boards publishes a section-wise split that we have confirmed (docs/HR-TEST-SERIES-PLAN.md §2), so the
// splits, durations and marking below are ours and each test's instructions say so. Questions that name Himachal,
// Punjab or Rajasthan, and current-affairs questions (which go out of date), are left out. A mock claims each question
// once, so the four tests never repeat a question between them.
// The Haryana GK facts are AI-written and still need a human spot-check, like the rest of the Haryana GK bank.

import { EXAM_SERIES } from "../exam-series";
import { HPAS_MOCKS } from "../hpas-series";
import { CET_TESTS } from "../hr-cet";
import { PATWARI_TESTS } from "../patwari";
import { COURT_CLERK_TESTS } from "../pb-court-clerk";
import { POLICE_PAID_TESTS } from "../pb-police";
import { POLICE_TESTS } from "../police";
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

/** Questions that name another state, or that date quickly, do not belong in a Haryana mock. */
const OTHER_STATE = /himachal|\bhp\b|shimla|punjab|rajasthan|chandigarh|हिमाचल|शिमला|पंजाब|राजस्थान|चंडीगढ़/i;
/** The shared High Court is a Haryana topic too, so "Punjab and Haryana" is not another-state wording. */
const SHARED = /punjab (and|&) haryana|पंजाब एवं हरियाणा|पंजाब और हरियाणा/gi;
const usable = (x: PatwariQuestion) =>
  x.topic !== "current-affairs" && !OTHER_STATE.test(`${x.en[0]} ${x.en[2]} ${x.hi[0]} ${x.hi[2]}`.replace(SHARED, ""));

function dedupe(qs: PatwariQuestion[]): PatwariQuestion[] {
  const seen = new Set<string>();
  return qs.filter((x) => {
    const h = hash(x);
    if (seen.has(h)) return false;
    seen.add(h);
    return true;
  });
}

/** Haryana GK: the four CET sectionals. */
const HARYANA_GK_POOL = dedupe(CET_TESTS.flatMap((t) => t.questions).filter((x) => x.subject === "haryana-gk"));

/** Everything else the existing series hold, minus other-state and current-affairs questions. */
const GENERAL_POOL = dedupe(
  [
    ...PATWARI_TESTS,
    ...POLICE_TESTS,
    ...COURT_CLERK_TESTS,
    ...POLICE_PAID_TESTS,
    ...EXAM_SERIES.flatMap((s) => s.tests),
  ]
    .flatMap((t) => t.questions)
    .concat(HPAS_MOCKS.flat())
    .filter((x) => x.subject !== "haryana-gk" && usable(x)),
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
  if (out.length < n) throw new Error(`hr-exams: only ${out.length} of ${n} questions left for ${label}`);
  return out;
}

const haryanaGk = subject("haryana-gk");
const gk = topic("general-studies", "indian-history", "indian-polity", "indian-geography", "indian-economy", "general-science", "static-gk");
const reasoning = subject("reasoning");
const quant = subject("quant");
const english = subject("english");
const hindi = subject("hindi");
const computer = subject("computer");
const pedagogy = subject("pedagogy");

type Sec = { name: string; nameHi: string; count: number };

const mock = (
  slug: string,
  title: string,
  titleHi: string,
  minutes: number,
  marksWrong: number,
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
  marksWrong,
  instructions:
    `Practice paper for the ${exam}: ${questions.length} questions, ${questions.length} marks, ${minutes} minutes. ` +
    `${note} Sections: ${secs.map((x) => `${x.name} ${x.count}`).join(", ")}. ` +
    `Each correct answer gives 1 mark and ${marksWrong === 0 ? "there is no negative marking" : `each wrong answer deducts ${marksWrong} marks`}. ` +
    "You can switch between English and Hindi at any time.",
  sections: secs.map(({ name, nameHi }) => ({ name, nameHi })),
  questions,
});

const HGK: Omit<Sec, "count"> = { name: "Haryana GK", nameHi: "हरियाणा सामान्य ज्ञान" };
const GA: Omit<Sec, "count"> = { name: "General Awareness", nameHi: "सामान्य जागरूकता" };
const REASONING: Omit<Sec, "count"> = { name: "Reasoning", nameHi: "तर्कशक्ति" };
const MATHS: Omit<Sec, "count"> = { name: "Maths", nameHi: "गणित" };
const ENGLISH: Omit<Sec, "count"> = { name: "English", nameHi: "अंग्रेज़ी" };
const HINDI: Omit<Sec, "count"> = { name: "Hindi", nameHi: "हिंदी" };
const COMPUTER: Omit<Sec, "count"> = { name: "Computer", nameHi: "कंप्यूटर" };

// ───────── Haryana Police Constable ─────────
export const POLICE_FREE_MOCK_SLUG = "haryana-police-constable-free-mock-1";
export const POLICE_SECTIONS: Sec[] = [
  { ...HGK, count: 15 },
  { ...GA, count: 25 },
  { ...REASONING, count: 25 },
  { ...MATHS, count: 25 },
  { ...ENGLISH, count: 10 },
];
const policeQuestions = [
  ...claim(0, 15, HARYANA_GK_POOL, haryanaGk, "easy", "Police Haryana GK"),
  ...claim(1, 25, GENERAL_POOL, gk, "easy", "Police General Awareness"),
  ...claim(2, 25, GENERAL_POOL, reasoning, "easy", "Police Reasoning"),
  ...claim(3, 25, GENERAL_POOL, quant, "easy", "Police Maths"),
  ...claim(4, 10, GENERAL_POOL, english, "easy", "Police English"),
];
export const POLICE_FREE_TEST = mock(
  POLICE_FREE_MOCK_SLUG,
  "Haryana Police Constable Free Mock Test 1",
  "हरियाणा पुलिस कांस्टेबल फ़्री मॉक टेस्ट 1",
  90,
  0,
  "Haryana Police Constable written test",
  POLICE_SECTIONS,
  policeQuestions,
  "Haryana Police Constable recruitment is reported to run through the HSSC CET score followed by physical tests, and no constable-specific written pattern has been confirmed, so the length, subjects and split here are ours.",
);

// ───────── HPSC HCS Prelims (General Studies, hardest questions first) ─────────
export const HCS_FREE_MOCK_SLUG = "hpsc-hcs-prelims-free-mock-1";
export const HCS_SECTIONS: Sec[] = [
  { ...HGK, count: 20 },
  { name: "History & Polity", nameHi: "इतिहास एवं राजव्यवस्था", count: 30 },
  { name: "Geography & Economy", nameHi: "भूगोल एवं अर्थव्यवस्था", count: 25 },
  { name: "Science & Static GK", nameHi: "विज्ञान एवं स्थिर सामान्य ज्ञान", count: 25 },
];
const hcsQuestions = [
  ...claim(0, 20, HARYANA_GK_POOL, haryanaGk, "hard", "HCS Haryana GK"),
  ...claim(1, 30, GENERAL_POOL, topic("general-studies", "indian-history", "indian-polity"), "hard", "HCS History & Polity"),
  ...claim(2, 25, GENERAL_POOL, topic("general-studies", "indian-geography", "indian-economy"), "hard", "HCS Geography & Economy"),
  ...claim(3, 25, GENERAL_POOL, topic("general-studies", "general-science", "static-gk"), "hard", "HCS Science & Static GK"),
];
export const HCS_FREE_TEST = mock(
  HCS_FREE_MOCK_SLUG,
  "HPSC HCS Prelims Free Mock Test 1 (General Studies)",
  "एचपीएससी एचसीएस प्रीलिम्स फ़्री मॉक टेस्ट 1 (सामान्य अध्ययन)",
  120,
  0.25,
  "HPSC HCS Preliminary exam (General Studies)",
  HCS_SECTIONS,
  hcsQuestions,
  "The subject split, length and quarter-mark negative are our assumption, so check them against the HPSC notification. Questions are set at a hard level on purpose. The aptitude paper, if the notice has one, is not covered in this test.",
);

// ───────── HTET (BSEH): Level 1 style, five 30-question sections ─────────
export const HTET_FREE_MOCK_SLUG = "bseh-htet-free-mock-1";
export const HTET_SECTIONS: Sec[] = [
  { name: "Child Development & Pedagogy", nameHi: "बाल विकास एवं शिक्षाशास्त्र", count: 30 },
  { ...HINDI, count: 30 },
  { ...ENGLISH, count: 30 },
  { ...MATHS, count: 30 },
  { name: "Environmental Studies & General Studies", nameHi: "पर्यावरण अध्ययन एवं सामान्य अध्ययन", count: 30 },
];
const htetQuestions = [
  ...claim(0, 30, GENERAL_POOL, pedagogy, "exam", "HTET Pedagogy"),
  ...claim(1, 30, GENERAL_POOL, hindi, "exam", "HTET Hindi"),
  ...claim(2, 30, GENERAL_POOL, english, "exam", "HTET English"),
  ...claim(3, 30, GENERAL_POOL, quant, "exam", "HTET Maths"),
  ...claim(4, 30, GENERAL_POOL, topic("general-studies", "general-science", "indian-geography", "static-gk"), "exam", "HTET EVS & GS"),
];
export const HTET_FREE_TEST = mock(
  HTET_FREE_MOCK_SLUG,
  "HTET Free Mock Test 1 (Level 1 Style)",
  "एचटेट फ़्री मॉक टेस्ट 1 (लेवल 1 शैली)",
  150,
  0,
  "Haryana Teacher Eligibility Test (HTET)",
  HTET_SECTIONS,
  htetQuestions,
  "HTET is reported to have 150 questions in 150 minutes with no negative marking, but the subject split is ours and the real paper differs by level (PRT, TGT, PGT), so check the BSEH notification. The optional subject sections are not covered.",
);

// ───────── SVSU Assistant and Steno-typist (written test) ─────────
export const SVSU_FREE_MOCK_SLUG = "svsu-assistant-free-mock-1";
export const SVSU_SECTIONS: Sec[] = [
  { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 15 },
  { ...REASONING, count: 10 },
  { ...MATHS, count: 10 },
  { ...ENGLISH, count: 10 },
  { ...COMPUTER, count: 5 },
];
const svsuQuestions = [
  ...claim(0, 15, GENERAL_POOL, gk, "easy", "SVSU General Awareness"),
  ...claim(1, 10, GENERAL_POOL, reasoning, "easy", "SVSU Reasoning"),
  ...claim(2, 10, GENERAL_POOL, quant, "easy", "SVSU Maths"),
  ...claim(3, 10, GENERAL_POOL, english, "easy", "SVSU English"),
  ...claim(4, 5, GENERAL_POOL, computer, "easy", "SVSU Computer"),
];
export const SVSU_FREE_TEST = mock(
  SVSU_FREE_MOCK_SLUG,
  "SVSU Assistant & Steno-typist Free Mock Test 1",
  "एसवीएसयू असिस्टेंट एवं स्टेनो-टाइपिस्ट फ़्री मॉक टेस्ट 1",
  50,
  0,
  "SVSU Assistant and Steno-typist written test",
  SVSU_SECTIONS,
  svsuQuestions,
  "The SVSU notice (Advt. SVSU/2026/Estt./NT/C&D/25-31) gives the written test 50 marks, followed by a skill test, but says the structure and syllabus will be uploaded later. The subjects, duration and marking here are ours. The skill and shorthand tests are not covered.",
);

// ───────── HARTRON Data Entry Operator (added 13 November 2026; claimed after the four tests above so their questions do not move) ─────────
export const HARTRON_FREE_MOCK_SLUG = "hartron-deo-free-mock-1";
export const HARTRON_SECTIONS: Sec[] = [
  { ...REASONING, count: 10 },
  { ...MATHS, count: 15 },
  { ...ENGLISH, count: 10 },
  { ...COMPUTER, count: 15 },
];
const hartronQuestions = [
  ...claim(0, 10, GENERAL_POOL, reasoning, "easy", "HARTRON Reasoning"),
  ...claim(1, 15, GENERAL_POOL, quant, "easy", "HARTRON Maths"),
  ...claim(2, 10, GENERAL_POOL, english, "easy", "HARTRON English"),
  ...claim(3, 15, GENERAL_POOL, computer, "easy", "HARTRON Computer"),
];
export const HARTRON_FREE_TEST = mock(
  HARTRON_FREE_MOCK_SLUG,
  "HARTRON Data Entry Operator Free Mock Test 1",
  "हार्ट्रोन डेटा एंट्री ऑपरेटर फ़्री मॉक टेस्ट 1",
  60,
  0,
  "HARTRON Data Entry Operator written test",
  HARTRON_SECTIONS,
  hartronQuestions,
  "Reports say the selection is a written test followed by a typing or skill test, but we have not seen a section-wise split from HARTRON, so the subjects, length and marking here are ours. The typing test is not covered.",
);

// ───────── Haryana District Court Stenographer Grade III (computer and English proficiency part only) ─────────
export const COURT_STENO_FREE_MOCK_SLUG = "haryana-court-steno-free-mock-1";
export const COURT_STENO_SECTIONS: Sec[] = [
  { ...ENGLISH, count: 15 },
  { ...COMPUTER, count: 15 },
  { ...GA, count: 10 },
];
const courtStenoQuestions = [
  ...claim(0, 15, GENERAL_POOL, english, "exam", "Court Steno English"),
  ...claim(1, 15, GENERAL_POOL, computer, "exam", "Court Steno Computer"),
  ...claim(2, 10, GENERAL_POOL, gk, "easy", "Court Steno General Awareness"),
];
export const COURT_STENO_FREE_TEST = mock(
  COURT_STENO_FREE_MOCK_SLUG,
  "Haryana Court Stenographer Grade III Free Mock Test 1",
  "हरियाणा कोर्ट स्टेनोग्राफर ग्रेड III फ़्री मॉक टेस्ट 1",
  40,
  0,
  "Haryana District Court Stenographer Grade III recruitment",
  COURT_STENO_SECTIONS,
  courtStenoQuestions,
  "The 2026 Nuh notice is reported to select on skill tests (English shorthand at 80 wpm and computer transcription at 20 wpm) and does not publish an MCQ paper, so this test only practises the English, computer and general-awareness knowledge around the skill tests. The shorthand and transcription tests are not covered.",
);

export const HR_EXAM_TESTS = {
  police: [POLICE_FREE_TEST],
  hcs: [HCS_FREE_TEST],
  htet: [HTET_FREE_TEST],
  svsu: [SVSU_FREE_TEST],
  hartron: [HARTRON_FREE_TEST],
  courtSteno: [COURT_STENO_FREE_TEST],
};
export const ALL_HR_EXAM_TESTS: TestDef[] = Object.values(HR_EXAM_TESTS).flat();
