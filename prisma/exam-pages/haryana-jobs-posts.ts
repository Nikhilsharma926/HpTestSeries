import type { PostSeed } from "./types";

// hrtestseries.in posts written on 13 November 2026 from the FreeJobAlert Haryana page (freejobalert.com/haryana-government-jobs)
// plus a quick web search. None of the notices was read on its own official site, so every figure is worded as "reported" and
// each post sends the reader to the official notice (hartron.org.in, the district court site, svsu.ac.in). Dated claims say
// "November 2026"; the evergreen parts (how to prepare) carry no dates.

const DEO_MOCK = "/tests/hartron-deo-free-mock-1";
const STENO_MOCK = "/tests/haryana-court-steno-free-mock-1";

export const HARYANA_JOBS_POSTS: PostSeed[] = [
  {
    slug: "hartron-data-entry-operator-recruitment-2026-110-posts",
    site: "hr",
    category: "NOTIFICATION",
    exams: ["hartron/data-entry-operator"],
    seoTitle: "HARTRON DEO Recruitment 2026: 110 Posts, Eligibility, Last Date",
    seoDescription: "HARTRON Data Entry Operator recruitment 2026: 110 posts reported, BCA/B.Sc/Diploma eligibility, last date 22 November 2026, selection stages and how to prepare.",
    title: "HARTRON Data Entry Operator Recruitment 2026: 110 Posts, Eligibility and Last Date",
    titleHi: "हार्ट्रोन डेटा एंट्री ऑपरेटर भर्ती 2026: 110 पद, योग्यता और अंतिम तिथि",
    excerpt: "HARTRON ne Data Entry Operator ke 110 posts nikaale hain (reported) — eligibility, last date 22 November 2026, selection process aur taiyari ka tareeka.",
    content: `**HARTRON** (Haryana State Electronics Development Corporation) ne November 2026 mein **Data Entry Operator (DEO)** ki bharti nikali hai. Job-alert sites ke mutabik **110 posts** hain aur online form ki **last date 22 November 2026** hai. Yeh figures third-party summary se hain, isliye apply karne se pehle [hartron.org.in](https://hartron.org.in) par official notice zaroor padho.

## HARTRON DEO bharti ek nazar mein

| Point | Reported detail |
|---|---|
| Organisation | HARTRON, Haryana |
| Post | Data Entry Operator |
| Vacancies | 110 (reported) |
| Qualification | BCA, B.Sc ya Diploma (reported) |
| Last date | 22 November 2026 (reported) |
| Selection | Written test + typing/skill test + document verification (pichle rounds ke hisaab se) |

**Dhyan do:** HARTRON ke pichle DEO notices mein posts ki sankhya alag-alag rahi hai, aur kuch sites alag figures dikha rahi hain. Isliye vacancies, age limit, fee aur qualification ke liye sirf official notice ko final maano.

## Eligibility kaise check karein

1. Notice mein **qualification** (BCA / B.Sc / Diploma, kaun si stream) padho.
2. **Age limit** aur category-wise relaxation dekho.
3. **Haryana domicile** ya CET jaisi koi shart ho to confirm karo.
4. **Typing speed** ki requirement likhi ho to usse apni practice match karo.

## Selection process aur taiyari

Pichle HARTRON DEO rounds mein **written objective test** ke baad **typing test** aur phir document verification bataya gaya hai. 2026 ka exact pattern notice mein dekho. Taiyari ke liye syllabus aur strategy yahan hai:

- [HARTRON DEO syllabus aur exam pattern](/blog/hartron-deo-syllabus-exam-pattern-2026)
- [DEO preparation strategy: computer aur typing](/blog/hartron-data-entry-operator-preparation-strategy)

## Practice shuru karo

[HARTRON DEO free mock test](${DEO_MOCK}) bina login ke do — 50 questions, reasoning, maths, English aur computer, Hindi aur English dono mein, detailed solution ke saath. Exam page: [HARTRON Data Entry Operator](/hartron/data-entry-operator).`,
    faqs: [
      { q: "HARTRON DEO bharti 2026 mein kitne posts hain?", a: "Job-alert sites ne November 2026 mein 110 posts bataye hain. Pichle notices mein sankhya alag rahi hai, isliye hartron.org.in par official notice se confirm karein." },
      { q: "HARTRON DEO ke liye qualification kya chahiye?", a: "Reported qualification BCA, B.Sc ya Diploma hai. Exact degree aur age limit official notice mein dekhein." },
      { q: "HARTRON DEO form ki last date kya hai?", a: "Job-alert summary ke mutabik 22 November 2026. Official notice se confirm karein." },
      { q: "Kya HARTRON DEO mein typing test hota hai?", a: "Pichle rounds mein written test ke baad typing ya skill test bataya gaya hai. 2026 ke stages notice mein dekhein." },
    ],
  },
  {
    slug: "hartron-deo-syllabus-exam-pattern-2026",
    site: "hr",
    category: "SYLLABUS",
    exams: ["hartron/data-entry-operator"],
    seoTitle: "HARTRON DEO Syllabus 2026: Topics, Exam Pattern, Typing Test",
    seoDescription: "HARTRON Data Entry Operator syllabus 2026: computer, maths, reasoning and English topics, expected exam pattern, the typing test and what to confirm on the notice.",
    title: "HARTRON DEO Syllabus 2026: Written Test Topics, Expected Pattern and Typing Test",
    titleHi: "हार्ट्रोन DEO सिलेबस 2026: लिखित परीक्षा के टॉपिक, संभावित पैटर्न और टाइपिंग टेस्ट",
    excerpt: "HARTRON Data Entry Operator ka syllabus — computer, maths, reasoning aur English — expected pattern aur typing test, aur kya official notice se confirm karna hai.",
    content: `HARTRON ne 2026 ke Data Entry Operator notice ke saath abhi tak koi confirmed section-wise syllabus hamein nahi mila. Neeche ke topics wo hain jo **DEO level ke tests mein aam taur par aate hain**. Final syllabus aur pattern ke liye [hartron.org.in](https://hartron.org.in) ka notice dekho.

## Expected written test topics

| Section | Kya aata hai |
|---|---|
| Computer | fundamentals, hardware-software, MS Word/Excel/PowerPoint, keyboard shortcuts, internet, number systems |
| Maths | percentage, ratio, average, profit-loss, simple interest, time-work, speed-distance |
| Reasoning | series, analogy, coding-decoding, blood relations, direction sense |
| English | grammar, vocabulary, synonyms-antonyms, comprehension |

## Typing / skill test

Pichle HARTRON DEO rounds mein written test ke baad **typing test** bataya gaya hai. Speed, accuracy aur language (English/Hindi) notice mein likhi hoti hai. Roz 30 minute typing practice rakho, kyunki yeh stage final merit mein bada role nibhata hai.

## Exam pattern mein kya confirm karein

- Kul questions, marks aur duration
- Negative marking hai ya nahi
- Typing test ki speed aur uska weightage
- Qualifying marks aur category-wise relaxation

Pattern ke liye sirf official notice ko final maano; kuch websites alag-alag figures dikha rahi hain.

## Pehle kya padhein

1. Computer basics (sabse zyada scoring aur sabse kam time mein).
2. Maths ke basic topics, roz 45 minute.
3. Reasoning aur English grammar.
4. Typing practice, roz.

Poori strategy: [HARTRON DEO preparation strategy](/blog/hartron-data-entry-operator-preparation-strategy). Exam page: [HARTRON Data Entry Operator syllabus](/hartron/data-entry-operator/syllabus).

## Practice shuru karo

[HARTRON DEO free mock test](${DEO_MOCK}) do — real CBT format, Hindi aur English dono mein, detailed solution ke saath. Typing test is mock mein nahi hai.`,
    faqs: [
      { q: "HARTRON DEO ka syllabus kya hai?", a: "Confirmed syllabus notice mein dekhein. Aam taur par computer, maths, reasoning aur English aate hain, aur uske baad typing test." },
      { q: "HARTRON DEO mein negative marking hai?", a: "Notice ke hisaab se alag ho sakta hai. Official notice mein marking scheme padhein." },
      { q: "HARTRON DEO mein sabse important section kaun sa hai?", a: "Computer aur typing sabse important hain, kyunki post data entry ki hai. Maths aur reasoning se written test ka score banta hai." },
    ],
  },
  {
    slug: "hartron-data-entry-operator-preparation-strategy",
    site: "hr",
    category: "STRATEGY",
    exams: ["hartron/data-entry-operator"],
    seoTitle: "HARTRON DEO Preparation: Computer, Maths & Typing Plan",
    seoDescription: "How to prepare for the HARTRON Data Entry Operator exam: a 30-day plan for computer basics, maths, reasoning, English and daily typing practice, with mock tests.",
    title: "HARTRON Data Entry Operator Preparation: 30-Day Plan for Computer, Maths and Typing",
    titleHi: "हार्ट्रोन डेटा एंट्री ऑपरेटर की तैयारी: कंप्यूटर, गणित और टाइपिंग का 30 दिन का प्लान",
    excerpt: "HARTRON DEO ki taiyari ka 30 din ka plan — computer basics, maths, reasoning, English aur roz typing practice, mock tests ke saath.",
    content: `Data Entry Operator ki bharti mein **written test** aur **typing test** dono ka role hota hai. Yeh 30 din ka plan clerical-level exams ke hisaab se hai; exact pattern ke liye [hartron.org.in](https://hartron.org.in) ka notice dekho. Syllabus ke topics: [HARTRON DEO syllabus](/blog/hartron-deo-syllabus-exam-pattern-2026).

## Roz ka routine (2.5 se 3 ghante)

| Time | Kaam |
|---|---|
| 45 min | Computer basics ya MS Office |
| 45 min | Maths |
| 30 min | Reasoning ya English |
| 30 min | Typing practice |
| 15 min | Pichle din ke galat sawal revise |

## 30 din ka plan

1. **Din 1-10:** computer fundamentals, shortcuts, number systems; maths ke basic chapters (percentage, ratio, average).
2. **Din 11-20:** MS Excel/Word ke functions, internet; profit-loss, time-work, simple interest; reasoning series aur coding.
3. **Din 21-30:** roz ek sectional ya full mock, galat sawalon ki copy, aur typing speed test.

## Typing ke tips

- Home-row position seekho aur screen dekh kar type karo.
- Pehle **accuracy**, phir speed badhao.
- Roz ek hi passage 2-3 baar type karo aur errors count karo.

## Mock test kaise dein

Pehle ek mock bina timer ke karke pattern samjho, phir timed mocks do. Shuruaat [HARTRON DEO free mock](${DEO_MOCK}) se karo — 50 questions, 60 minute. Mock ka split hamara apna hai, official pattern se match zaroor karo.

Bharti ki jaankari: [HARTRON DEO recruitment 2026](/blog/hartron-data-entry-operator-recruitment-2026-110-posts).`,
    faqs: [
      { q: "HARTRON DEO ki taiyari kitne din mein ho sakti hai?", a: "Basics clear hon to 30 din ka regular plan kaafi hota hai. Typing speed ke liye roz practice zaroori hai." },
      { q: "Typing speed kitni honi chahiye?", a: "Exact speed notice mein likhi hoti hai. Notice ki requirement se zyada speed par practice karo." },
      { q: "Kya sirf computer padhna kaafi hai?", a: "Nahi. Written test mein maths, reasoning aur English bhi aa sakte hain, isliye sabhi sections ki practice karo." },
    ],
  },
  {
    slug: "nuh-district-court-stenographer-recruitment-2026-8-posts",
    site: "hr",
    category: "NOTIFICATION",
    exams: ["haryana-district-courts/stenographer-grade-3"],
    seoTitle: "Nuh District Court Stenographer Recruitment 2026: 8 Posts",
    seoDescription: "Nuh District Court Stenographer Grade III recruitment 2026: 8 posts reported, graduate eligibility, shorthand 80 wpm, last date 25 November 2026 and how to apply offline.",
    title: "Nuh District Court Stenographer Grade III Recruitment 2026: 8 Posts, Eligibility and Last Date",
    titleHi: "नूंह जिला न्यायालय स्टेनोग्राफर ग्रेड III भर्ती 2026: 8 पद, योग्यता और अंतिम तिथि",
    excerpt: "Nuh District Court ne Stenographer Grade-III ke 8 posts nikaale hain (reported) — eligibility, shorthand 80 wpm, last date 25 November 2026 aur offline apply kaise karein.",
    content: `**District Court Nuh** (Haryana) ne **Stenographer Grade-III** ke posts ke liye notice nikala hai. Job-alert sites ke mutabik **8 posts** (ad-hoc basis), notice date **6 November 2026** aur application ki **last date 25 November 2026** hai. Yeh third-party summary hai; apply karne se pehle district court ki official website par notice zaroor padho.

## Bharti ek nazar mein

| Point | Reported detail |
|---|---|
| Organisation | District Court Nuh, Haryana |
| Post | Stenographer Grade-III |
| Vacancies | 8 (reported) |
| Qualification | Graduate + computer knowledge |
| Skill | English shorthand 80 wpm, computer transcription 20 wpm |
| Apply | Offline, post ya haath se |
| Last date | 25 November 2026 (reported) |

## Selection process

Is notice ke baare mein reports **skill tests** (shorthand aur transcription) aur document verification bata rahi hain. Pichle court rounds ke baare mein alag stages bhi report hue hain (jaise written test ya interview), isliye 2026 ka process notice se hi confirm karo.

## Kaise apply karein

1. Official notice ka form download karo.
2. Documents, photo aur certificates attach karo.
3. Notice mein diye address par registered post ya haath se bhejo.
4. **Last date se pehle** form pahunchna chahiye, post mein deri ka risk na lo.

## Taiyari

Shorthand aur transcription ka practice roz karo: [Court Stenographer ki taiyari kaise karein](/blog/haryana-court-stenographer-shorthand-transcription-preparation). English, computer aur general awareness ke liye [free court steno mock](${STENO_MOCK}) hai. Exam page: [Haryana Court Stenographer Grade III](/haryana-district-courts/stenographer-grade-3).`,
    faqs: [
      { q: "Nuh District Court Stenographer bharti mein kitne posts hain?", a: "Job-alert sites ne 8 Stenographer Grade-III posts bataye hain. Official notice se confirm karein." },
      { q: "Nuh Court Stenographer ke liye qualification kya hai?", a: "Reports ke mutabik graduate degree, English shorthand 80 wpm aur computer par transcription 20 wpm. Notice mein exact shart dekhein." },
      { q: "Nuh Court Stenographer form online bharna hai?", a: "Reports ke mutabik application offline hai, post ya haath se. Address aur form notice mein hota hai." },
      { q: "Last date kya hai?", a: "Job-alert summary ke mutabik 25 November 2026. Official notice se confirm karein." },
    ],
  },
  {
    slug: "haryana-court-stenographer-shorthand-transcription-preparation",
    site: "hr",
    category: "STRATEGY",
    exams: ["haryana-district-courts/stenographer-grade-3"],
    seoTitle: "Court Stenographer Preparation: Shorthand 80 WPM Plan",
    seoDescription: "How to prepare for the Haryana court Stenographer Grade III skill tests: a daily plan for English shorthand 80 wpm, computer transcription 20 wpm, English and computer.",
    title: "Haryana Court Stenographer Preparation: Shorthand 80 WPM and Transcription Plan",
    titleHi: "हरियाणा कोर्ट स्टेनोग्राफर की तैयारी: शॉर्टहैंड 80 WPM और ट्रांसक्रिप्शन प्लान",
    excerpt: "Court Stenographer Grade-III ki taiyari — English shorthand 80 wpm, computer transcription 20 wpm, English aur computer ka daily plan.",
    content: `Haryana court Stenographer Grade-III ki bharti mein selection **skill par** hota hai: reports ke mutabik **English shorthand 80 wpm** aur **computer transcription 20 wpm**. Exact test conditions ke liye har notice padho; yeh plan evergreen hai. Ek bharti ki jaankari: [Nuh District Court Stenographer 2026](/blog/nuh-district-court-stenographer-recruitment-2026-8-posts).

## Daily plan (3 ghante)

| Time | Kaam |
|---|---|
| 60 min | Shorthand dictation (target speed se thoda upar) |
| 45 min | Outlines aur phrases ki revision |
| 45 min | Computer par transcription |
| 30 min | English grammar aur spelling |

## Shorthand ke tips

- Pehle outlines pakke karo, phir speed badhao: 60, 70, phir 80 wpm se upar.
- Roz dictation lo aur apna transcript check karo.
- Kam speed par **accuracy** badhao; speed baad mein aati hai.

## Transcription ke tips

- Typing ke saath **spelling aur punctuation** ka dhyan rakho; errors marks kaat sakte hain.
- Court ke legal terms ki list banao aur revise karo.

## English, computer aur general awareness

Kisi bhi written ya interview stage ke liye grammar, MS Word aur basic GK taiyar rakho. [Free court steno mock](${STENO_MOCK}) mein 40 questions hain (English, computer, general awareness). Yeh shorthand practice ka vikalp nahi hai. Exam page: [Haryana Court Stenographer Grade III](/haryana-district-courts/stenographer-grade-3).`,
    faqs: [
      { q: "Shorthand 80 wpm kitne mahine mein ho jaata hai?", a: "Yeh practice par nirbhar karta hai. Roz 2-3 ghante ke dictation se kai students kuch mahine mein pahunch jaate hain." },
      { q: "Kya court steno ke liye computer knowledge zaroori hai?", a: "Haan, reports ke mutabik transcription computer par hota hai, isliye typing aur MS Word aana zaroori hai." },
      { q: "Kya court steno ka written paper hota hai?", a: "Kuch rounds mein written test report hua hai, par 2026 Nuh notice skill-based bataya gaya hai. Notice padho." },
    ],
  },
  {
    slug: "haryana-government-jobs-november-2026-latest-vacancies",
    site: "hr",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "Haryana Government Jobs November 2026: Open Vacancies List",
    seoDescription: "Haryana government jobs in November 2026: HARTRON DEO (110), SVSU, RITES, Nuh Court Steno and more, with posts and last dates reported by job-alert sites.",
    title: "Haryana Government Jobs November 2026: Latest Vacancies and Last Dates",
    titleHi: "हरियाणा सरकारी नौकरी नवंबर 2026: ताज़ा वैकेंसी और अंतिम तिथि",
    excerpt: "November 2026 mein Haryana ki open sarkari vacancies — HARTRON DEO, SVSU, RITES, Nuh Court Steno aur aur — posts aur last dates ke saath.",
    content: `Yeh list **13 November 2026** ko FreeJobAlert ke Haryana page par dikh rahe notices par based hai. Posts aur last dates third-party summary se hain, isliye apply karne se pehle har official notice padho. Last date nikal jaaye to wo post hata do.

## Written test wali bhartiyan (practice kar sakte ho)

| Organisation | Post | Posts | Last date |
|---|---|---|---|
| HARTRON | Data Entry Operator | 110 | 22 Nov 2026 |
| SVSU | Assistant, Steno-typist aur non-teaching | 10 | 26 Nov 2026 |
| District Court Nuh | Stenographer Grade-III | 8 | 25 Nov 2026 |

- [HARTRON DEO bharti ki poori jaankari](/blog/hartron-data-entry-operator-recruitment-2026-110-posts)
- [SVSU Assistant & Steno-typist mock test](/svsu/assistant-steno-typist)
- [Nuh Court Stenographer bharti](/blog/nuh-district-court-stenographer-recruitment-2026-8-posts)

## Doosri open vacancies (aam taur par interview ya merit par)

| Organisation | Post | Posts | Last date |
|---|---|---|---|
| RITES | Graduate, Diploma, Trade Apprentice | 281 | 25 Nov 2026 |
| RITES | Senior Technical Assistant | 31 | 22 Nov 2026 |
| SVSU | Skill Instructor | 45 | 23 Nov 2026 |
| CCS HAU | Dean, Associate Professor aur aur | 92 | 7 Dec 2026 |
| RECPDCL | Senior/Deputy/Assistant Executive | 32 | 17 Nov 2026 |
| WAPCOS | Office Assistant, Project Accountant aur aur | 29 | 25 Nov 2026 |
| NHPC | Industrial Trainee | 23 | 20 Nov 2026 |
| NPCC | General Manager, Manager, Dy. Manager | 12 | 22 Nov 2026 |
| BBMB | Lineman Apprentice | 7 | 3 Dec 2026 |
| IIIT Sonepat | Associate/Assistant Professor | 7 | 21 Nov 2026 |

## HSSC aur CET ke baare mein

Haryana ki zyadatar Group C aur D bharti **HSSC CET** se hoti hai: [HSSC CET Group C mock tests](/hssc/cet-group-c) aur [Haryana GK](/haryana) se taiyari shuru karo.

## Apply karne se pehle

1. Official notice se qualification, age aur fee confirm karo.
2. Online ya offline apply ka tareeka dekho.
3. Last date se kuch din pehle form bhej do.

Mock tests ke liye [saare tests](/tests) dekho.`,
    faqs: [
      { q: "Haryana mein abhi kaun si sarkari naukri open hai?", a: "13 November 2026 tak job-alert sites par HARTRON DEO, SVSU, RITES aur Nuh District Court ke notices open the. Last dates ke liye official notice dekhein." },
      { q: "Is list ki jaankari kitni sahi hai?", a: "Yeh third-party summary par based hai. Posts, qualification aur last date official website se confirm karein." },
      { q: "Haryana ki Group C/D bharti ke liye kaun si exam chahiye?", a: "Zyadatar posts ke liye HSSC CET score chahiye. Notice mein dekhein ki post CET se bhari ja rahi hai ya nahi." },
    ],
  },
  {
    slug: "computer-awareness-important-topics-haryana-clerical-exams",
    site: "hr",
    category: "SYLLABUS",
    exams: ["hartron/data-entry-operator"],
    seoTitle: "Computer Awareness Topics for Haryana Clerk, DEO & CET Exams",
    seoDescription: "Important computer awareness topics for Haryana clerical exams (HARTRON DEO, HSSC CET, SVSU, court posts): MS Office, shortcuts, internet, hardware and number systems.",
    title: "Computer Awareness for Haryana Exams: Important Topics for DEO, Clerk and CET",
    titleHi: "हरियाणा परीक्षाओं के लिए कंप्यूटर जागरूकता: DEO, क्लर्क और CET के महत्वपूर्ण टॉपिक",
    excerpt: "Haryana ke clerical exams (HARTRON DEO, HSSC CET, SVSU, court posts) ke liye computer awareness ke important topics aur kaise padhein.",
    content: `HARTRON DEO, HSSC CET, SVSU aur court jaisi bhartiyon mein **computer awareness** ke sawal aam taur par aate hain. Yeh sabse kam time mein cover hone wala aur scoring section hai. Exact syllabus har notice mein alag hota hai, isliye official notice dekho.

## Important topics

| Topic | Kya padhein |
|---|---|
| Fundamentals | computer ke generations, CPU, memory, input-output devices |
| Hardware-software | system software, application software, operating system |
| MS Office | Word, Excel, PowerPoint ke features aur formulas |
| Shortcuts | Ctrl+C, V, X, Z, Y, S, P, F-keys |
| Internet | browser, email, URL, search engine, safety |
| Number systems | binary, octal, hexadecimal ke basic conversions |
| Storage | RAM, ROM, hard disk, SSD, units (KB, MB, GB) |

## Kaise padhein

1. Pehle fundamentals aur shortcuts yaad karo.
2. Excel ke basic formulas (SUM, AVERAGE, IF) practice karo.
3. Roz 20 questions solve karo aur galat sawal likho.

## Practice

[HARTRON DEO free mock](${DEO_MOCK}) mein 15 computer questions hain. Court steno ke liye [Court Steno free mock](${STENO_MOCK}) hai. Poori bharti ki jaankari: [Haryana govt jobs November 2026](/blog/haryana-government-jobs-november-2026-latest-vacancies).`,
    faqs: [
      { q: "Computer awareness mein kitne sawal aate hain?", a: "Yeh exam par nirbhar karta hai. Notice ya syllabus mein section-wise sankhya dekhein." },
      { q: "Kya computer awareness ke liye alag se padhna zaroori hai?", a: "Haan, kyunki yeh section chhota par aasan hota hai, aur kam time mein achha score deta hai." },
    ],
  },
];
