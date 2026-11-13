// Free mocks for the two Punjab exams that appeared on the FreeJobAlert Punjab page (13 November 2026) and had no page on
// pbtestseries.in: the PSSSB Driver written exam (Advt. 12 of 2026) and the Punjab ETT (Elementary Teacher Training) written
// exam of the Education Recruitment Board. The Driver plan and the ETT pattern were read from the FreeJobAlert syllabus
// articles of 11 and 12 November 2026, which summarise the official notices (sssb.punjab.gov.in, erd.punjab.gov.in); the
// official PDFs were not opened, so each test's instructions say the split should be checked against the notice.
//
// Driver: Part B is 100 questions, 40 general (GK, Punjab history, reasoning, Punjabi, English, ICT) and 60 Driving Technique
// & Motor Car Mechanism, with a quarter-mark negative. This free mock is half that length in the same proportions (20 + 30).
// The six driving questions of the HP Driver Constable mock are reused and 24 more are written fresh (./driving.ts).
// ETT: Paper B is 100 questions of 2 marks in 100 minutes (Punjabi 20, English 10, Hindi 10, General Science 20, Social
// Studies 20, Mathematics 20); the summary states no negative marking, so this mock has none. It is the full Paper B.
//
// Nothing else is written fresh: general questions come from the banks the other series already hold, minus questions that
// name another state, current-affairs questions (they go out of date) and every question already used in a Punjab free mock.
// The qualifying Punjabi papers (Part A of the Driver exam, Paper A of ETT) are not covered. Reused Gurmukhi questions still
// need a Punjabi speaker to check them.

import { EXAM_SERIES } from "../exam-series";
import { HPAS_MOCKS } from "../hpas-series";
import { PATWARI_TESTS } from "../patwari";
import { COURT_CLERK_TESTS } from "../pb-court-clerk";
import { PB_PATWARI_TESTS } from "../pb-patwari";
import { POLICE_FREE_TEST, POLICE_PAID_TESTS } from "../pb-police";
import { PB_PATWARI_SECTIONALS, PB_POLICE_SECTIONALS } from "../pb-reuse";
import { POLICE_TESTS } from "../police";
import type { Diff, PatwariQuestion, TestDef } from "../patwari/types";
import { driverConstableMock1 } from "../upcoming-free/driver-constable";
import { questionTextHash } from "../../src/modules/content/text-hash";
import { PB_DRIVING_QUESTIONS } from "./driving";
import { ALL_PB_EXAM_TESTS } from "./index";

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

/** Questions naming another state, and questions that date quickly, do not belong in these mocks. */
const OTHER_STATE = /himachal|\bhp\b|shimla|rajasthan|haryana|हिमाचल|शिमला|राजस्थान|हरियाणा/i;
/** The shared High Court is a Punjab topic too, so "Punjab and Haryana" is not another-state wording. */
const SHARED = /punjab (and|&) haryana|haryana (and|&) punjab|पंजाब एवं हरियाणा|पंजाब और हरियाणा|हरियाणा एवं पंजाब|हरियाणा और पंजाब/gi;
const usable = (x: PatwariQuestion) =>
  x.topic !== "current-affairs" && !OTHER_STATE.test(`${x.en[0]} ${x.en[2]} ${x.hi[0]} ${x.hi[2]}`.replace(SHARED, ""));

/** Questions already used in a Punjab free mock, which these tests must not repeat. */
const inOtherMock = new Set(
  [...ALL_PB_EXAM_TESTS, ...PB_PATWARI_TESTS.filter((t) => t.isFree), POLICE_FREE_TEST, ...COURT_CLERK_TESTS.filter((t) => t.isFree)].flatMap((t) => t.questions.map(hash)),
);

/** Every question the existing series hold that these mocks may use, deduplicated. */
const POOL: PatwariQuestion[] = (() => {
  const seen = new Set<string>();
  const out: PatwariQuestion[] = [];
  const all = [
    ...EXAM_SERIES.flatMap((s) => s.tests),
    ...PATWARI_TESTS,
    ...POLICE_TESTS,
    ...COURT_CLERK_TESTS,
    ...PB_PATWARI_TESTS,
    ...POLICE_PAID_TESTS,
    ...PB_PATWARI_SECTIONALS,
    ...PB_POLICE_SECTIONALS,
  ]
    .flatMap((t) => t.questions)
    .concat(HPAS_MOCKS.flat());
  for (const x of all) {
    const h = hash(x);
    if (seen.has(h) || inOtherMock.has(h) || !usable(x)) continue;
    seen.add(h);
    out.push(x);
  }
  return out;
})();

const RANK: Record<"easy" | "exam", Record<Diff, number>> = {
  easy: { M: 0, E: 1, H: 2 },
  exam: { M: 0, H: 1, E: 2 },
};

const claimed = new Set<string>();

/** Takes `n` questions nobody has claimed yet, in difficulty order (stable by hash), and puts them in section `s`. */
function claim(s: PatwariQuestion["s"], n: number, pick: Pick, level: keyof typeof RANK, label: string): PatwariQuestion[] {
  const out: PatwariQuestion[] = [];
  const order = [...POOL].sort((a, b) => RANK[level][a.d] - RANK[level][b.d] || (hash(a) < hash(b) ? -1 : 1));
  for (const x of order) {
    if (out.length === n) break;
    if (claimed.has(hash(x)) || !pick(x)) continue;
    claimed.add(hash(x));
    out.push({ ...x, s });
  }
  if (out.length < n) throw new Error(`pb-new-exams: only ${out.length} of ${n} questions left for ${label}`);
  return out;
}

const gk = topic("general-studies", "indian-history", "indian-polity", "indian-geography", "indian-economy", "general-science", "static-gk");
const punjabHistory = topic("punjab-gk", "history", "culture-religion");
const reasoning = subject("reasoning");
const quant = subject("quant");
const english = subject("english");
const hindi = subject("hindi");
const punjabi = subject("punjabi");
const computer = subject("computer");
const science = topic("general-studies", "general-science");
const socialStudies = topic("general-studies", "indian-history", "indian-geography", "indian-polity");

type Sec = { name: string; nameHi: string; count: number };

const mock = (
  slug: string,
  title: string,
  titleHi: string,
  minutes: number,
  marksCorrect: number,
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
  marksCorrect,
  marksWrong,
  instructions:
    `Practice paper for the ${exam}: ${questions.length} questions, ${questions.length * marksCorrect} marks, ${minutes} minutes. ` +
    `${note} Sections: ${secs.map((x) => `${x.name} ${x.count}`).join(", ")}. ` +
    `Each correct answer gives ${marksCorrect} ${marksCorrect === 1 ? "mark" : "marks"} and ${marksWrong === 0 ? "there is no negative marking" : `each wrong answer deducts ${marksWrong} marks`}. ` +
    "You can switch between English and Hindi at any time.",
  sections: secs.map(({ name, nameHi }) => ({ name, nameHi })),
  questions,
});

// ───────── PSSSB Driver (Part B, half length) ─────────
export const DRIVER_SECTIONS: Sec[] = [
  { name: "General Knowledge", nameHi: "सामान्य ज्ञान", count: 5 },
  { name: "Punjab History & Culture", nameHi: "पंजाब इतिहास एवं संस्कृति", count: 3 },
  { name: "Reasoning", nameHi: "तर्कशक्ति", count: 5 },
  { name: "Punjabi, English & ICT", nameHi: "पंजाबी, अंग्रेज़ी एवं आईसीटी", count: 7 },
  { name: "Driving Technique & Motor Car Mechanism", nameHi: "ड्राइविंग तकनीक एवं मोटर कार यांत्रिकी", count: 30 },
];
export const DRIVER_FREE_MOCK_SLUG = "psssb-driver-free-mock-1";
const drivingQuestions: PatwariQuestion[] = [
  ...driverConstableMock1.filter((x) => x.subject === "driving"),
  ...PB_DRIVING_QUESTIONS,
].map((x) => ({ ...x, s: 4 as const }));
for (const x of drivingQuestions) claimed.add(hash(x));
const driverQuestions: PatwariQuestion[] = [
  ...claim(0, 5, gk, "easy", "Driver General Knowledge"),
  ...claim(1, 3, punjabHistory, "easy", "Driver Punjab history"),
  ...claim(2, 5, reasoning, "easy", "Driver Reasoning"),
  ...claim(3, 3, punjabi, "easy", "Driver Punjabi"),
  ...claim(3, 2, english, "easy", "Driver English"),
  ...claim(3, 2, computer, "easy", "Driver ICT"),
  ...drivingQuestions,
];
export const DRIVER_FREE_TEST = mock(
  DRIVER_FREE_MOCK_SLUG,
  "PSSSB Driver Free Mock Test 1",
  "पीएसएसएसबी ड्राइवर फ़्री मॉक टेस्ट 1",
  60,
  1,
  0.25,
  "PSSSB Driver written exam (Part B)",
  DRIVER_SECTIONS,
  driverQuestions,
  "As summarised from the exam plan for Advt. No. 12 of 2026, Part B has 100 questions: 40 general (GK, Punjab history and culture, reasoning, Punjabi, English, ICT) and 60 on driving technique and motor car mechanism, with a quarter-mark negative. This free mock is half that length in the same proportions, so check the split against the official plan on sssb.punjab.gov.in. The qualifying Punjabi paper (Part A) is not covered.",
);

// ───────── Punjab ETT (Paper B, full length) ─────────
export const ETT_SECTIONS: Sec[] = [
  { name: "Punjabi", nameHi: "पंजाबी", count: 20 },
  { name: "English", nameHi: "अंग्रेज़ी", count: 10 },
  { name: "Hindi", nameHi: "हिंदी", count: 10 },
  { name: "General Science", nameHi: "सामान्य विज्ञान", count: 20 },
  { name: "Social Studies", nameHi: "सामाजिक विज्ञान", count: 20 },
  { name: "Mathematics", nameHi: "गणित", count: 20 },
];
export const ETT_FREE_MOCK_SLUG = "erb-punjab-ett-free-mock-1";
const ettQuestions: PatwariQuestion[] = [
  ...claim(0, 20, punjabi, "easy", "ETT Punjabi"),
  ...claim(1, 10, english, "easy", "ETT English"),
  ...claim(2, 10, hindi, "easy", "ETT Hindi"),
  ...claim(3, 20, science, "easy", "ETT General Science"),
  ...claim(4, 20, socialStudies, "easy", "ETT Social Studies"),
  ...claim(5, 20, quant, "easy", "ETT Mathematics"),
];
export const ETT_FREE_TEST = mock(
  ETT_FREE_MOCK_SLUG,
  "Punjab ETT Free Mock Test 1 (Paper B)",
  "पंजाब ईटीटी फ़्री मॉक टेस्ट 1 (पेपर बी)",
  100,
  2,
  0,
  "Punjab ETT written exam (Paper B)",
  ETT_SECTIONS,
  ettQuestions,
  "As summarised for the 2026 ETT syllabus, Paper B has 100 questions of 2 marks in 100 minutes: Punjabi 20, English 10, Hindi 10, General Science 20, Social Studies 20 and Mathematics 20; no negative marking is stated, so none is applied here. Check the pattern against the notification on erd.punjab.gov.in. Paper A, the qualifying Punjabi paper, is not covered, and the questions are school-level GK, not the exact ETT syllabus.",
);

export const PB_NEW_EXAM_TESTS = {
  driver: [DRIVER_FREE_TEST],
  ett: [ETT_FREE_TEST],
};
export const ALL_PB_NEW_EXAM_TESTS: TestDef[] = Object.values(PB_NEW_EXAM_TESTS).flat();
