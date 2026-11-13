import { describe, expect, it } from "vitest";
import { ALL_HR_EXAM_TESTS } from "../../../prisma/hr-exams";
import { balanceAnswers } from "../../../prisma/patwari/types";
import { taxonomy } from "../../../prisma/taxonomy";
import { questionTextHash } from "./text-hash";

const topics = new Set(taxonomy.flatMap((s) => s.topics.map(([slug]) => `${s.slug}/${slug}`)));
const COUNTS: Record<string, { total: number; sections: number[]; minutes: number; marksWrong: number }> = {
  "haryana-police-constable-free-mock-1": { total: 100, sections: [15, 25, 25, 25, 10], minutes: 90, marksWrong: 0 },
  "hpsc-hcs-prelims-free-mock-1": { total: 100, sections: [20, 30, 25, 25], minutes: 120, marksWrong: 0.25 },
  "bseh-htet-free-mock-1": { total: 150, sections: [30, 30, 30, 30, 30], minutes: 150, marksWrong: 0 },
  "svsu-assistant-free-mock-1": { total: 50, sections: [15, 10, 10, 10, 5], minutes: 50, marksWrong: 0 },
  "hartron-deo-free-mock-1": { total: 50, sections: [10, 15, 10, 15], minutes: 60, marksWrong: 0 },
  "haryana-court-steno-free-mock-1": { total: 40, sections: [15, 15, 10], minutes: 40, marksWrong: 0 },
};

describe("Haryana free mocks (Police, HCS, HTET, SVSU, HARTRON, Court Steno)", () => {
  it("covers exactly the six planned tests", () => {
    expect(ALL_HR_EXAM_TESTS.map((t) => t.slug).sort()).toEqual(Object.keys(COUNTS).sort());
  });

  it("never repeats a question between the tests", () => {
    const seen = new Set<string>();
    for (const t of ALL_HR_EXAM_TESTS)
      for (const x of t.questions) {
        const h = questionTextHash(x.en[0]);
        expect(seen.has(h), `${t.slug}: ${x.en[0].slice(0, 60)}`).toBe(false);
        seen.add(h);
      }
  });
});

describe.each(ALL_HR_EXAM_TESTS.map((t) => [t.slug, t] as const))("%s", (slug, def) => {
  const want = COUNTS[slug];
  const qs = balanceAnswers(def.questions);

  it("is free, with the planned length and marking", () => {
    expect(def.isFree).toBe(true);
    expect(def.durationSec).toBe(want.minutes * 60);
    expect(def.marksWrong).toBe(want.marksWrong);
  });

  it("follows the section pattern in order", () => {
    expect(qs).toHaveLength(want.total);
    expect(def.sections).toHaveLength(want.sections.length);
    want.sections.forEach((count, i) => expect(qs.filter((x) => x.s === i), def.sections[i].name).toHaveLength(count));
    const order = qs.map((x) => x.s);
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it("repeats no question within the test", () => {
    expect(new Set(qs.map((x) => questionTextHash(x.en[0]))).size).toBe(qs.length);
  });

  it("only uses subjects and topics that exist in the taxonomy", () => {
    for (const x of qs) expect(topics.has(`${x.subject}/${x.topic}`), `${x.subject}/${x.topic}`).toBe(true);
  });

  it("has 4 distinct options per language and a valid answer", () => {
    qs.forEach((x, i) => {
      const where = `#${i + 1} ${x.en[0].slice(0, 50)}`;
      for (const lang of [x.en, x.hi]) {
        expect(lang[0].trim().length, where).toBeGreaterThan(5);
        expect(lang[2].trim().length, where).toBeGreaterThan(5);
        expect(lang[1], where).toHaveLength(4);
        expect(new Set(lang[1].map((o) => o.trim())).size, `${where} duplicate options`).toBe(4);
      }
      expect([0, 1, 2, 3]).toContain(x.a);
    });
  });

  it("spreads the correct answer over A–D", () => {
    const min = Math.floor(want.total * 0.15);
    const max = Math.ceil(want.total * 0.35);
    [0, 1, 2, 3].map((p) => qs.filter((x) => x.a === p).length).forEach((c) => {
      expect(c).toBeGreaterThanOrEqual(min);
      expect(c).toBeLessThanOrEqual(max);
    });
  });

  it("has no question about another state or about current affairs", () => {
    for (const x of qs) {
      expect(x.subject, x.en[0].slice(0, 60)).not.toMatch(/^(hp-gk|punjab-gk|rajasthan-gk)$/);
      expect(x.topic, x.en[0].slice(0, 60)).not.toBe("current-affairs");
      const text = `${x.en[0]} ${x.hi[0]}`.replace(/(punjab|haryana) (and|&) (haryana|punjab)|पंजाब एवं हरियाणा|पंजाब और हरियाणा|हरियाणा एवं पंजाब|हरियाणा और पंजाब/gi, "");
      expect(text, x.en[0].slice(0, 60)).not.toMatch(/himachal|shimla|punjab|rajasthan|हिमाचल|पंजाब|राजस्थान/i);
    }
  });
});
