import { HR_MORE_SPECS, type HrMoreSpec } from "../hr-exams/more";
import type { ExamPage, ExamPages } from "./types";

// Exam pages for the other recruitments on the FreeJobAlert Haryana page (13 November 2026), built from prisma/hr-exams/more.ts.
// Every figure is "reported" by a third-party summary and not checked against the official site (named in the spec), and the
// pages say plainly that no written paper is confirmed and that the free mock is general-aptitude practice only.

const section = (s: HrMoreSpec) => (s.includeComputer ? "computer" : "general awareness");

function page(s: HrMoreSpec): ExamPage {
  const last = section(s);
  return {
    seo: {
      title: `${s.seoName} Mock Test {year} — Free Practice`,
      description: `Free ${s.seoName} mock test: reasoning, maths, English and ${last} questions with English and Hindi solutions, plus reported selection steps.`,
    },
    description: `**${s.org}** advertised the post of **${s.post}** in November 2026. The FreeJobAlert Haryana page lists **${s.vacancies} vacancies** and shows the last date as **${s.lastDate}**. The qualification reported is ${s.qualification}. These details come from a third-party summary and are not checked against ${s.official}, so confirm the vacancies, eligibility, age limit and last date on the official notice before you apply.

**Selection:** the page reports ${s.selection}. We could not confirm an MCQ written paper for this notice, so do not treat any "syllabus" you see online as official. Read the notice for the exact stages, and keep your documents and certificates ready for verification.

**How to prepare:** Whatever the stages are, a general-aptitude base helps in any shortlisting test or interview round: reasoning, basic maths, English grammar and ${last}. Spend your main time on what the post actually tests, which is set in the notice, and use the free paper below for quick practice on the aptitude part.

**Our mock:** the free paper is [${s.name} Free Mock Test 1](/tests/${s.mockSlug}): 20 questions in ${s.minutes} minutes covering reasoning, maths, English and ${last}, with a solution in English and Hindi for every question. ${s.notCovered} The subjects, length and marking are our own, since no paper has been published for this notice.`,
    syllabus: `No written-test syllabus has been confirmed for this notice. The topics below are general aptitude that our free mock practises; the real requirements are in the official notice.

### Reasoning
- Series, analogy, coding-decoding, blood relations, direction sense

### Maths
- Percentage, ratio, average, profit and loss, time and work

### English
- Grammar, vocabulary, synonyms and antonyms, comprehension

### ${last === "computer" ? "Computer" : "General Awareness"}
- ${last === "computer" ? "Computer basics, MS Office, internet and keyboard shortcuts" : "Indian polity, history, geography and basic general science"}

### Post-specific part (not covered by our mock)
- ${s.notCovered}`,
    faqs: [
      {
        q: `How many posts are in the ${s.name} recruitment?`,
        a: `A job-alert site listed ${s.vacancies} vacancies in November 2026 for ${s.post}. Confirm the number on ${s.official}.`,
      },
      {
        q: `What is the last date for the ${s.name} post?`,
        a: `The summary we saw shows ${s.lastDate}. Check the official notice on ${s.official} for the exact date and how to apply.`,
      },
      {
        q: `Is there a written exam for the ${s.name} post?`,
        a: `We could not confirm one. The page reports ${s.selection}. Read the notice for the stages.`,
      },
      {
        q: "What does the free mock cover?",
        a: `It is a 20-question general-aptitude paper (reasoning, maths, English and ${last}). ${s.notCovered}`,
      },
    ],
  };
}

export const HARYANA_MORE_PAGES: ExamPages = Object.fromEntries(HR_MORE_SPECS.map((s) => [`${s.bodySlug}/${s.examSlug}`, page(s)]));
