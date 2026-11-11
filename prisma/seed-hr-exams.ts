// Free mocks and hidden series for the Haryana Police Constable, HPSC HCS, HTET and SVSU exams on hrtestseries.in (the
// HSSC CET free mock is in the CET series, prisma/hr-cet/mocks.ts). Each product is created hidden until there are paid mocks to
// sell; switch it on in /admin/products. Adding a new test = adding it to prisma/hr-exams/index.ts.

import type { PrismaClient } from "../src/generated/prisma/client";
import { HR_EXAM_TESTS } from "./hr-exams";
import { seedSeries, type SeriesSeed } from "./seed-series";

const VALIDITY_DAYS = 180;
const PRICE_IN_PAISE = 149_00; // same proposal as the CET series (docs/HR-TEST-SERIES-PLAN.md §3.1); not owner-confirmed, editable in admin

type Cfg = { key: string; bodySlug: string; examSlug: string; stageSlug?: string; name: string; nameHi: string; description: string; tests: SeriesSeed["tests"] };

const CONFIGS: Cfg[] = [
  {
    key: "haryana-police-constable",
    bodySlug: "haryana-police",
    examSlug: "constable",
    name: "Haryana Police Constable",
    nameHi: "हरियाणा पुलिस कांस्टेबल",
    description: "Mocks for the Haryana Police Constable written test: Haryana GK, General Awareness, Reasoning, Maths and English.",
    tests: HR_EXAM_TESTS.police,
  },
  {
    key: "hpsc-hcs-prelims",
    bodySlug: "hpsc",
    examSlug: "hcs",
    stageSlug: "prelims",
    name: "HPSC HCS Prelims",
    nameHi: "एचपीएससी एचसीएस प्रीलिम्स",
    description: "Mocks for the HPSC HCS Preliminary exam (General Studies): Haryana GK, History & Polity, Geography & Economy, Science & Static GK at exam level.",
    tests: HR_EXAM_TESTS.hcs,
  },
  {
    key: "bseh-htet",
    bodySlug: "bseh",
    examSlug: "htet",
    name: "HTET",
    nameHi: "एचटेट",
    description: "Mocks for the Haryana Teacher Eligibility Test: child development & pedagogy, Hindi, English, Maths and environmental studies.",
    tests: HR_EXAM_TESTS.htet,
  },
  {
    key: "svsu-assistant",
    bodySlug: "svsu",
    examSlug: "assistant-steno-typist",
    name: "SVSU Assistant & Steno-typist",
    nameHi: "एसवीएसयू असिस्टेंट एवं स्टेनो-टाइपिस्ट",
    description: "Mocks for the SVSU Assistant and Steno-typist written test: General Awareness, Reasoning, Maths, English and Computer.",
    tests: HR_EXAM_TESTS.svsu,
  },
];

export async function seedHrExams(db: PrismaClient) {
  let createdTests = 0;
  for (const c of CONFIGS) {
    const title = `${c.name} Mock Test Series`;
    const titleHi = `${c.nameHi} मॉक टेस्ट सीरीज़`;
    const r = await seedSeries(db, {
      label: `${c.name} seed`,
      bodySlug: c.bodySlug,
      examSlug: c.examSlug,
      stageSlug: c.stageSlug,
      tests: c.tests,
      series: { slug: `${c.key}-mock-test-series`, title, titleHi, description: `${c.description} Every question has a detailed solution in English and Hindi.` },
      product: { slug: `${c.key}-mock-series`, title, titleHi, priceInPaise: PRICE_IN_PAISE, validityDays: VALIDITY_DAYS, isActive: false },
    });
    createdTests += r.createdTests;
  }
  return { createdTests };
}
