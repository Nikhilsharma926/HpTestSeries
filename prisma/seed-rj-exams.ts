// Free mocks and hidden series for the Rajasthan exams added on 13 November 2026 (RPSC Protection Officer, RSSB Patwari,
// CURAJ Lower Division Clerk) on rjtestseries.in. Each product is created hidden until there are paid mocks to sell; switch
// it on in /admin/products. Adding a new test = adding it to prisma/rj-exams/index.ts.

import type { PrismaClient } from "../src/generated/prisma/client";
import { RJ_EXAM_TESTS } from "./rj-exams";
import { seedSeries, type SeriesSeed } from "./seed-series";

const VALIDITY_DAYS = 180;
const PRICE_IN_PAISE = 99_00; // the Rs 99 proposed for rj mocks in docs/RJ-TESTSERIES-PLAN.md §4; not owner-confirmed, editable in admin

type Cfg = { key: string; bodySlug: string; examSlug: string; name: string; nameHi: string; description: string; tests: SeriesSeed["tests"] };

const CONFIGS: Cfg[] = [
  {
    key: "rpsc-protection-officer",
    bodySlug: "rpsc",
    examSlug: "protection-officer",
    name: "RPSC Protection Officer",
    nameHi: "आरपीएससी संरक्षण अधिकारी",
    description: "Mocks for the RPSC Protection Officer exam: Paper I General Studies (history, polity, geography, economy, science and static GK).",
    tests: RJ_EXAM_TESTS.protectionOfficer,
  },
  {
    key: "rssb-patwari",
    bodySlug: "rssb",
    examSlug: "patwari",
    name: "Rajasthan Patwari",
    nameHi: "राजस्थान पटवारी",
    description: "Mocks for the RSSB Patwari exam in its published section split: general knowledge, Rajasthan GK, Hindi and English, reasoning and maths, and computer.",
    tests: RJ_EXAM_TESTS.patwari,
  },
  {
    key: "curaj-lower-division-clerk",
    bodySlug: "curaj",
    examSlug: "lower-division-clerk",
    name: "CURAJ Lower Division Clerk",
    nameHi: "कुराज लोअर डिवीजन क्लर्क",
    description: "Mocks for the Central University of Rajasthan Lower Division Clerk recruitment: General Awareness, Reasoning, Maths, English and Computer.",
    tests: RJ_EXAM_TESTS.curaj,
  },
];

export async function seedRjExams(db: PrismaClient) {
  let createdTests = 0;
  for (const c of CONFIGS) {
    const title = `${c.name} Mock Test Series`;
    const titleHi = `${c.nameHi} मॉक टेस्ट सीरीज़`;
    const r = await seedSeries(db, {
      label: `${c.name} seed`,
      bodySlug: c.bodySlug,
      examSlug: c.examSlug,
      tests: c.tests,
      series: { slug: `${c.key}-mock-test-series`, title, titleHi, description: `${c.description} Every question has a detailed solution in English and Hindi.` },
      product: { slug: `${c.key}-mock-series`, title, titleHi, priceInPaise: PRICE_IN_PAISE, validityDays: VALIDITY_DAYS, isActive: false },
    });
    createdTests += r.createdTests;
  }
  return { createdTests };
}
