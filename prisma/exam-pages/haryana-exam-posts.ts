import { HR_MORE_SPECS, type HrMoreSpec } from "../hr-exams/more";
import type { PostSeed } from "./types";

// One SEO post for every Haryana exam on hrtestseries.in that did not have one (13 November 2026): HPSC HCS, HTET, the SVSU
// Assistant and Steno-typist, and the ten recruitments built from prisma/hr-exams/more.ts. Facts come from the FreeJobAlert
// Haryana page, the exam pages and a quick web search; none is checked against an official site, so each is worded as
// "reported" and sends the reader to the official notice.

const JOBS_POST = "/blog/haryana-government-jobs-november-2026-latest-vacancies";

const recruitmentPost = (s: HrMoreSpec): PostSeed => {
  const last = s.includeComputer ? "computer" : "general awareness";
  const page = `/${s.bodySlug}/${s.examSlug}`;
  return {
    slug: `${s.bodySlug}-${s.examSlug}-recruitment-2026`,
    site: "hr",
    category: "NOTIFICATION",
    exams: [`${s.bodySlug}/${s.examSlug}`],
    seoTitle: `${s.seoName} Recruitment 2026: ${s.vacancies} Posts, Last Date`,
    seoDescription: `${s.seoName} recruitment 2026: ${s.vacancies} posts reported, last date ${s.lastDate}, eligibility, selection process and a free general-aptitude mock test.`,
    title: `${s.name} Recruitment 2026: ${s.vacancies} Posts, Eligibility and Last Date`,
    titleHi: `${s.nameHi} भर्ती 2026: ${s.vacancies} पद, योग्यता और अंतिम तिथि`,
    excerpt: `${s.org} ne ${s.post} ke ${s.vacancies} posts nikaale hain (reported) — eligibility, last date ${s.lastDate}, selection process aur taiyari ka tareeka.`,
    content: `**${s.org}** ne November 2026 mein **${s.post}** ki bharti nikali hai. Job-alert sites ke mutabik **${s.vacancies} posts** hain aur last date **${s.lastDate}** hai. Yeh third-party summary hai, isliye apply karne se pehle [${s.official}](https://${s.official}) par official notice zaroor padho.

## Bharti ek nazar mein

| Point | Reported detail |
|---|---|
| Organisation | ${s.org} |
| Post | ${s.post} |
| Vacancies | ${s.vacancies} (reported) |
| Qualification | ${s.qualification} |
| Last date | ${s.lastDate} (reported) |

## Selection process

Reports ke mutabik selection ${s.selection}. Is notice ke liye koi written MCQ paper confirm nahi hua hai, isliye koi bhi "syllabus" jo online dikhe use official mat maano. Stages aur marks ke liye notice dekho.

## Apply karne se pehle

1. Notice se **qualification** aur **age limit** confirm karo.
2. Online ya offline apply ka tareeka dekho aur **fee** check karo.
3. Documents aur certificates taiyar rakho.
4. Last date se kuch din pehle form bhej do.

## Taiyari

Jo bhi stage ho, reasoning, basic maths, English grammar aur ${last} ka base kaam aata hai. ${s.notCovered} Quick practice ke liye [${s.name} free mock](/tests/${s.mockSlug}) do — 20 questions, ${s.minutes} minute, Hindi aur English dono mein, solution ke saath. Exam page: [${s.name}](${page}).

Aur open vacancies: [Haryana government jobs November 2026](${JOBS_POST}).`,
    faqs: [
      { q: `${s.name} bharti mein kitne posts hain?`, a: `Job-alert sites ne November 2026 mein ${s.vacancies} posts bataye hain. ${s.official} par official notice se confirm karein.` },
      { q: `${s.name} ki last date kya hai?`, a: `Job-alert summary ke mutabik ${s.lastDate}. Official notice se confirm karein.` },
      { q: `Kya ${s.name} mein written exam hota hai?`, a: `Written paper confirm nahi hua hai. Reports ke mutabik selection ${s.selection}. Notice padhein.` },
    ],
  };
};

export const HARYANA_EXAM_POSTS: PostSeed[] = [
  {
    slug: "hpsc-hcs-prelims-syllabus-preparation-strategy",
    site: "hr",
    category: "SYLLABUS",
    exams: ["hpsc/hcs"],
    seoTitle: "HPSC HCS Prelims Syllabus & Preparation Strategy 2026",
    seoDescription: "HPSC HCS prelims syllabus: Haryana GK, history, polity, geography, economy and science, with a preparation plan and what to confirm on the official notice.",
    title: "HPSC HCS Prelims Syllabus and Preparation Strategy: Haryana GK and General Studies",
    titleHi: "HPSC HCS प्रीलिम्स सिलेबस और तैयारी की रणनीति: हरियाणा GK और सामान्य अध्ययन",
    excerpt: "HCS prelims ka syllabus — Haryana GK, history, polity, geography, economy aur science — aur taiyari ka plan, official notice ke saath.",
    content: `**Haryana Civil Services (Executive Branch), HCS**, ki exam **Haryana Public Service Commission (HPSC)** leta hai. Exam-prep sites ke mutabik pichle drive mein lagbhag **102 posts** the aur prelims **26 April 2026** ko hua; agla cycle abhi announce nahi hua. Yeh figures official notice se match nahi kiye hain, isliye posts, dates aur eligibility ke liye hpsc.gov.in dekho.

## Stages

Preliminary (screening), Main aur interview. Marks, subjects aur marking scheme har stage ke liye HPSC ke notice mein dekho; hamne prelims ka marking confirm nahi kiya.

## Prelims syllabus (general studies)

| Section | Kya aata hai |
|---|---|
| Haryana GK | itihaas, districts, nadiyan, sanskriti, economy, administration |
| History aur Polity | ancient-medieval-modern history, freedom movement, Constitution, Parliament, judiciary |
| Geography aur Economy | India aur world geography, planning, banking, budget, agriculture |
| Science aur Static GK | general science, environment, awards, books, institutions |

## Taiyari ka plan

1. Pehle standard books se base banao: history, polity, geography, economy.
2. **Haryana GK** alag se padho, kyunki yeh woh hissa hai jahan state ke candidate pura score kar sakte hain.
3. Roz current affairs aur ek topic-wise test.
4. Mock exam-level par do, kyunki questions clerical exams se kaafi kathin hote hain.

## Practice

[HPSC HCS Prelims free mock](/tests/hpsc-hcs-prelims-free-mock-1) mein 100 questions, 120 minute hain, hard level par. Section split, length aur marking hamara apna hai, aur aptitude paper cover nahi hai. Exam page: [HPSC HCS](/hpsc/hcs), syllabus: [HCS syllabus](/hpsc/hcs/syllabus). Haryana GK ki taiyari: [Haryana GK important topics](/blog/haryana-gk-important-topics-district-wise-history-rivers).`,
    faqs: [
      { q: "HCS prelims mein kaun se subjects aate hain?", a: "General studies: Haryana GK, history, polity, geography, economy aur science. Exact scheme HPSC ke notice mein dekhein." },
      { q: "HCS mein kitne posts hain?", a: "Exam-prep sites ne lagbhag 102 posts bataye the. Official notice se hpsc.gov.in par confirm karein." },
      { q: "Kya Haryana GK HCS prelims mein important hai?", a: "Haan. Paper mostly standard general studies hota hai, par Haryana ke sawal alag se aate hain." },
    ],
  },
  {
    slug: "htet-syllabus-exam-pattern-preparation-haryana-tet",
    site: "hr",
    category: "SYLLABUS",
    exams: ["bseh/htet"],
    seoTitle: "HTET Syllabus 2026: Pedagogy, Languages, Maths & EVS Topics",
    seoDescription: "HTET syllabus and preparation: child development and pedagogy, Hindi, English, maths and environmental studies, how levels differ and what to check on the BSEH notice.",
    title: "HTET Syllabus and Preparation: Pedagogy, Languages, Maths and Environmental Studies",
    titleHi: "HTET सिलेबस और तैयारी: पेडागॉजी, भाषा, गणित और पर्यावरण अध्ययन",
    excerpt: "HTET (Haryana TET) ka syllabus aur taiyari — child development, pedagogy, Hindi, English, maths aur EVS — aur levels ka farq.",
    content: `**HTET (Haryana Teacher Eligibility Test)** ko **Board of School Education Haryana (BSEH)** conduct karta hai. Yeh sirf eligibility test hai: pass hone se job nahi milti, par Haryana ke schools mein teacher posts ke liye consider hone ki eligibility milti hai. Test aam taur par PRT, TGT aur PGT levels par hota hai. Hamein 2026 ki koi confirmed exam date nahi mili, isliye dates, fee aur exact pattern ke liye BSEH ka notification aur information bulletin dekho.

## Syllabus ek nazar mein

| Section | Kya aata hai |
|---|---|
| Child Development aur Pedagogy | development stages, learning theories, motivation, inclusive education, assessment |
| Hindi aur English | grammar, vocabulary, comprehension, language teaching methods |
| Maths | arithmetic, geometry, everyday mathematics |
| Environmental Studies | environment, science, society, natural world |
| Subject paper (TGT/PGT) | teaching subject, bulletin ke hisaab se |

## Levels ka farq

Marks, questions, negative marking aur optional subject sections level ke hisaab se alag hote hain; yeh sab bulletin mein dekho.

## Taiyari

1. **Child development aur pedagogy** pehle padho, kyunki yeh har level mein common hai.
2. Hindi aur English grammar roz 30 minute.
3. Maths aur EVS ke basics NCERT se.
4. Har kuch din mein full mock.

## Practice

[HTET free mock](/tests/bseh-htet-free-mock-1) Level 1 style mein hai: 5 sections, 150 questions, 150 minute, bina negative marking ke. Split hamara apna hai aur TGT-PGT subject papers cover nahi hote. Exam page: [HTET](/bseh/htet), syllabus: [HTET syllabus](/bseh/htet/syllabus).`,
    faqs: [
      { q: "HTET kaun conduct karta hai?", a: "Board of School Education Haryana (BSEH)." },
      { q: "Kya HTET 2026 ki date aa gayi hai?", a: "Hamein page likhte samay koi confirmed date nahi mili. BSEH ki website par notification dekhein." },
      { q: "HTET mein negative marking hai?", a: "Level ke hisaab se BSEH ke bulletin mein dekhein. Hamara free mock negative marking nahi lagata." },
    ],
  },
  {
    slug: "svsu-assistant-steno-typist-recruitment-2026-syllabus",
    site: "hr",
    category: "NOTIFICATION",
    exams: ["svsu/assistant-steno-typist"],
    seoTitle: "SVSU Assistant & Steno-typist Recruitment 2026: Syllabus, Dates",
    seoDescription: "SVSU Assistant and Steno-typist recruitment 2026: 10 posts reported, written test of 50 marks, skill test, offline application and last date 26 November 2026.",
    title: "SVSU Assistant and Steno-typist Recruitment 2026: Posts, Selection Process and Syllabus",
    titleHi: "SVSU असिस्टेंट और स्टेनो-टाइपिस्ट भर्ती 2026: पद, चयन प्रक्रिया और सिलेबस",
    excerpt: "Shri Vishwakarma Skill University ke Assistant aur Steno-typist posts — 10 posts (reported), 50 marks ka written test aur skill test, last date 26 November 2026.",
    content: `**Shri Vishwakarma Skill University (SVSU)**, Dudhola (Palwal), ne Advertisement No. SVSU/2026/Estt./NT/C&D/25-31 ke tahat non-teaching posts nikaale hain. Reports ke mutabik kul **10 posts** hain, jinme **Assistant** aur **Steno-typist (Hindi aur English)** shamil hain. Yeh figures third-party summary se hain; [svsu.ac.in](https://svsu.ac.in) par notice se confirm karo.

## Selection process (reported)

| Stage | Kya hota hai |
|---|---|
| Written test | 50 marks |
| Skill test | typing ya shorthand |
| Interview | shortlisted candidates ka |

Reports kehte hain ki test ka structure aur syllabus baad mein university website par upload hoga. Steno-typist ke liye shorthand test alag se hota hai.

## Apply kaise karein

Application **offline** hai, post se Assistant Registrar (Estt.) ko. Last date reported **26 November 2026** hai. Form, fee aur address notice mein dekho.

## Syllabus (clerical-level, expected)

- General awareness: Indian history, polity, geography, economy, general science
- Reasoning aur maths: series, coding-decoding, percentage, ratio, time-work
- English grammar aur computer basics

## Practice

[SVSU Assistant & Steno-typist free mock](/tests/svsu-assistant-free-mock-1): 50 questions, 50 minute. Subjects aur marking hamare hain, aur skill/shorthand test cover nahi hai. Exam page: [SVSU Assistant & Steno-typist](/svsu/assistant-steno-typist). Dusri SVSU bharti: [SVSU Skill Instructor](/blog/svsu-skill-instructor-recruitment-2026).`,
    faqs: [
      { q: "SVSU Assistant bharti mein kitne posts hain?", a: "Reports ke mutabik 10 posts (Assistant, Steno-typist aur anya). svsu.ac.in par notice se confirm karein." },
      { q: "SVSU ke liye kaise apply karein?", a: "Reports ke mutabik offline, post se. Address aur form notice mein hota hai." },
      { q: "Kya syllabus aa gaya hai?", a: "Reports ke mutabik syllabus baad mein upload hoga. svsu.ac.in dekhte rahein." },
    ],
  },
  ...HR_MORE_SPECS.map(recruitmentPost),
];
