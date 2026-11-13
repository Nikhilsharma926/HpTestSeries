import { rj } from "../../src/sites/rj";
import { RAJASTHAN_JOB_POSTS } from "./rajasthan-jobs-posts";
import type { PostSeed } from "./types";

const FREE_MOCK = `/tests/${rj.freeMockSlug}`;

// rjtestseries.in posts for the Rajasthan exams coming up from November 2026 to February 2027. Dates are from RSSB's
// revised calendar of 28 September 2026 and RPSC's schedule of October 2026, checked by the owner on 26 October 2026.

const MAIN_POSTS: PostSeed[] = [
  {
    slug: "rssb-exam-calendar-2026-revised-november-february",
    site: "rj",
    seoTitle: "RSSB Exam Calendar 2026 Revised: CET, Teaching Associate, JE Dates",
    seoDescription:
      "RSSB's revised exam calendar: Teaching Associate from 17 Nov, CET 12th level 1-3 Dec 2026, CET Graduation 16-18 Jan 2027, Lab Attendant and JE dates.",
    title: "RSSB Exam Calendar 2026 Revised: CET 12th Level on 1-3 December, CET Graduation in January 2027",
    titleHi: "RSSB परीक्षा कैलेंडर 2026 संशोधित: CET 12वीं स्तर 1-3 दिसंबर, CET स्नातक जनवरी 2027 में",
    excerpt:
      "RSSB has revised its exam calendar because of the local body and Panchayati Raj elections. Here are the new dates for Teaching Associate, CET Senior Secondary, CET Graduation, Lab Attendant and JE, plus RPSC's RAS date.",
    category: "EXAM_DATE",
    exams: ["rssb/cet-senior-secondary", "rssb/cet-graduation", "rssb/teaching-associate", "rpsc/ras"],
    content: `The **Rajasthan Staff Selection Board (RSSB)** issued a **revised exam calendar on 28 September 2026**. Five exams between November 2026 and February 2027 have new dates, because the Board's resources are needed for the **local body and Panchayati Raj elections**. The biggest change: both levels of the **Common Eligibility Test (CET)** have moved.

## RSSB revised exam calendar (November 2026 – February 2027)

| Exam | Type | New date | Shifts |
|---|---|---|---|
| Teaching Associate (contract) 2026, 32 subjects | Non-CET | 17 Nov 2026; 7–21 Dec 2026 | One or two a day |
| CET (Senior Secondary) 2026 | CET | 1–3 Dec 2026 | Two a day |
| CET (Graduation) 2026 | CET | 16–18 Jan 2027 | Two on 16–17 Jan, one on 18 Jan |
| Laboratory Attendant 2025 | Non-CET | 25 Jan 2027 | One |
| Junior Engineer (joint) 2026 | Non-CET | 3–5 Feb 2027 | One a day |

**What moved:** the CET Senior Secondary exam was earlier fixed for 23–25 October 2026, and the CET Graduation exam for 1–3 December 2026.

## RPSC exams in the same months

The **Rajasthan Public Service Commission (RPSC)** runs its own calendar:

| Exam | Date |
|---|---|
| Protection Officer | 15 Nov 2026 |
| **RAS Prelims 2026 (607 posts)** | **6 Dec 2026 (Sunday)** |
| Lecturer (Special Education) | 8 Dec 2026 |
| APO Mains | 27 Dec 2026 |

Read our full guide to the [RAS Prelims 2026](/blog/rpsc-ras-prelims-2026-exam-date-admit-card-pattern) for the pattern and syllabus.

## What the new dates mean for you

- **CET 12th level candidates** get about five more weeks. See the [CET Senior Secondary 2026 guide](/blog/rajasthan-cet-12th-level-2026-exam-date-admit-card-pattern).
- **CET Graduation candidates** get about seven more weeks. See the [CET Graduation 2026 guide](/blog/rajasthan-cet-graduation-2026-exam-date-pattern-syllabus).
- **Teaching Associate candidates** sit Paper I first, on 17 November. See the [Teaching Associate exam schedule](/blog/rssb-teaching-associate-exam-date-2026-paper-1-schedule).
- If you applied for both CET levels, the dates no longer clash with each other or with RAS Prelims on 6 December.

Official websites: [rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in) and [rpsc.rajasthan.gov.in](https://rpsc.rajasthan.gov.in).

## Start practising

Rajasthan GK is common to almost every one of these exams. Revise with the [Rajasthan GK](/rajasthan) page and take the free [Rajasthan GK mock test](${FREE_MOCK}) — no login, real exam interface.`,
    faqs: [
      {
        q: "Why did RSSB change its exam calendar in 2026?",
        a: "RSSB revised the calendar on 28 September 2026 because of the local body and Panchayati Raj elections, which need the same staff and exam centres.",
      },
      {
        q: "What is the new Rajasthan CET exam date?",
        a: "CET Senior Secondary (12th level) is on 1 to 3 December 2026 and CET Graduation is on 16 to 18 January 2027.",
      },
      {
        q: "Where can I see the official RSSB exam calendar?",
        a: "On rssb.rajasthan.gov.in, under the news and exam schedule section. Admit cards are issued through the SSO Rajasthan portal.",
      },
    ],
  },

  {
    slug: "rajasthan-cet-12th-level-2026-exam-date-admit-card-pattern",
    site: "rj",
    seoTitle: "Rajasthan CET 12th Level 2026: New Exam Date 1-3 Dec, Admit Card",
    seoDescription:
      "Rajasthan CET Senior Secondary 2026 is now on 1-3 December 2026. New date, admit card steps, exam pattern, negative marking and a five-week study plan.",
    title: "Rajasthan CET 12th Level 2026: New Exam Date 1-3 December, Admit Card and Exam Pattern",
    titleHi: "राजस्थान CET 12वीं स्तर 2026: नई परीक्षा तिथि 1-3 दिसंबर, एडमिट कार्ड और परीक्षा पैटर्न",
    excerpt:
      "RSSB has moved the CET Senior Secondary exam from 23-25 October to 1-3 December 2026. About 24.5 lakh candidates have applied. New date, admit card steps, pattern and a study plan.",
    category: "EXAM_DATE",
    exams: ["rssb/cet-senior-secondary"],
    content: `The **Rajasthan CET Senior Secondary (12th level) exam 2026** will now be held on **1, 2 and 3 December 2026**, in **two shifts a day**. The **Rajasthan Staff Selection Board (RSSB)** moved it from 23–25 October 2026 in its [revised calendar of 28 September 2026](/blog/rssb-exam-calendar-2026-revised-november-february), because of the local body and Panchayati Raj elections.

About **24.5 lakh candidates** have applied, which makes it one of the largest exams in Rajasthan.

## Rajasthan CET 12th level 2026 at a glance

| Item | Detail |
|---|---|
| Conducting body | Rajasthan Staff Selection Board (RSSB) |
| Exam | CET (Senior Secondary level) 2026 |
| Application window | 24 June – 23 July 2026 (closed) |
| Old exam date | 23–25 October 2026 |
| **New exam date** | **1–3 December 2026, two shifts a day** |
| Applicants | About 24.5 lakh |
| Official website | rssb.rajasthan.gov.in |

## Why CET 12th level matters

CET is an **eligibility test**, not a recruitment. A valid score lets you sit the separate main exam of 12th-level RSSB posts when they are advertised. Posts such as **Junior Assistant / Clerk Grade-II**, Forester and Forest Guard have used the senior secondary CET score in recent drives. Each post's advertisement says which CET level it accepts.

## Exam pattern

| Item | Detail |
|---|---|
| Questions | 150 objective questions |
| Marks | 300 |
| Time | 3 hours |
| Options | Five per question; the fifth is for not attempting |
| Negative marking | One-third of the question's marks per wrong answer |

Leaving more than **10% of the questions without any option marked** can make you ineligible, so mark an option, even the fifth one, for every question.

The paper covers Rajasthan GK (history, art and culture, geography), India and world GK, general science, reasoning, mathematics, General Hindi, General English and basic computer. See the full [CET 12th level syllabus](/rssb/cet-senior-secondary/syllabus).

## How to download the admit card

1. Open [sso.rajasthan.gov.in](https://sso.rajasthan.gov.in) and log in with your SSO ID.
2. Go to **Recruitment Portal** and open your CET Senior Secondary 2026 application.
3. Download the e-admit card when the link is active; RSSB usually releases it a few days before the exam.
4. Check your name, photo, shift and exam centre. Carry a printout and an original photo ID.

RSSB usually puts out an **exam city slip** before the admit card, so watch the website through November.

## A five-week plan for the extra time

- **Weeks 1–2:** Rajasthan GK, district by district. The [Rajasthan GK](/rajasthan) page is a quick start.
- **Week 3:** maths and reasoning every day, plus Hindi grammar.
- **Weeks 4–5:** a full mock every two days with negative marking on, and revision of your weak topics.

Start today with the free [Rajasthan GK mock test](${FREE_MOCK}) — no login, real CBT interface, Hindi and English.`,
    faqs: [
      {
        q: "Is the Rajasthan CET 12th level exam postponed?",
        a: "Yes. RSSB's revised calendar of 28 September 2026 moved it from 23 to 25 October 2026 to 1 to 3 December 2026.",
      },
      {
        q: "When will the CET 12th level admit card come?",
        a: "RSSB usually releases the admit card a few days before the exam, with an exam city slip before that. Download it from the SSO Rajasthan recruitment portal.",
      },
      {
        q: "How many questions are in the CET 12th level paper?",
        a: "150 objective questions for 300 marks in 3 hours, with one-third negative marking for a wrong answer.",
      },
    ],
  },

  {
    slug: "rajasthan-cet-graduation-2026-exam-date-pattern-syllabus",
    site: "rj",
    seoTitle: "Rajasthan CET Graduation 2026: Exam on 16-18 January 2027, Pattern",
    seoDescription:
      "Rajasthan CET Graduation level 2026 exam moved to 16-18 January 2027. Shift schedule, exam pattern, syllabus, which posts need it and a seven-week study plan.",
    title: "Rajasthan CET Graduation Level 2026: Exam Moved to 16-18 January 2027, Pattern and Syllabus",
    titleHi: "राजस्थान CET स्नातक स्तर 2026: परीक्षा अब 16-18 जनवरी 2027 को, पैटर्न और सिलेबस",
    excerpt:
      "The Rajasthan CET Graduation exam is no longer in December. RSSB has moved it to 16-18 January 2027. About 17 lakh candidates have applied. Shifts, pattern, syllabus and a study plan.",
    category: "EXAM_DATE",
    exams: ["rssb/cet-graduation"],
    content: `The **Rajasthan CET Graduation level exam 2026** will now be held on **16, 17 and 18 January 2027**. It was earlier scheduled for 1–3 December 2026; the **Rajasthan Staff Selection Board (RSSB)** moved it in its [revised calendar of 28 September 2026](/blog/rssb-exam-calendar-2026-revised-november-february).

About **17 lakh candidates** have applied.

## Shift schedule

| Date | Shifts |
|---|---|
| 16 January 2027 | Two shifts |
| 17 January 2027 | Two shifts |
| 18 January 2027 | One shift (morning) |

Your shift is printed on the admit card. RSSB releases it on the SSO Rajasthan recruitment portal a few days before the exam.

## Why the graduation CET matters

CET is an **eligibility test**. A valid graduation-level score is what lets you sit the main exam of graduate-level RSSB posts such as **Patwari** when they are advertised. Without it, you cannot apply for those posts at all, so the CET is the real first round.

## Exam pattern

| Item | Detail |
|---|---|
| Questions | 150 objective questions |
| Marks | 300 |
| Time | 3 hours |
| Options | Five per question; the fifth is for not attempting |
| Negative marking | One-third of the question's marks per wrong answer |

Leaving more than 10% of the questions without any option marked can make you ineligible.

## Syllabus in brief

- **Rajasthan GK:** history, art, culture, literature, heritage, geography, polity and economy of Rajasthan
- **General knowledge:** Indian and world history and geography, polity, economy, general science, current affairs
- **Reasoning and maths:** logical reasoning, arithmetic and data interpretation
- **Language and computer:** General Hindi, General English and computer basics

See the full [CET Graduation syllabus](/rssb/cet-graduation/syllabus).

## A seven-week plan for the extra time

- **Weeks 1–3:** Rajasthan GK, one area a week — history and culture, then geography, then polity, economy and schemes. Use the [Rajasthan GK](/rajasthan) page for a quick district-wise refresher.
- **Weeks 4–5:** Indian polity, economy and science, with 30 minutes of maths and reasoning every day.
- **Weeks 6–7:** a full mock every two days with negative marking on, and revision of your mistakes.

If you also applied for the [CET 12th level on 1–3 December](/blog/rajasthan-cet-12th-level-2026-exam-date-admit-card-pattern), that exam is now well clear of this one, so you can prepare for both in order.

Take the free [Rajasthan GK mock test](${FREE_MOCK}) today to see where you stand — no login, real exam interface.`,
    faqs: [
      {
        q: "What is the new Rajasthan CET graduation exam date?",
        a: "16 to 18 January 2027, as per RSSB's revised calendar of 28 September 2026. It was earlier scheduled for 1 to 3 December 2026.",
      },
      {
        q: "Is the Rajasthan CET graduation score needed for Patwari?",
        a: "Yes. Patwari is a graduate-level RSSB post, and only candidates with a valid CET graduation score can sit its main exam when it is advertised.",
      },
      {
        q: "Can I take both CET levels?",
        a: "Yes, if you applied for both. The 12th level is on 1 to 3 December 2026 and the graduation level on 16 to 18 January 2027, so the dates do not clash.",
      },
    ],
  },

  {
    slug: "rpsc-ras-prelims-2026-exam-date-admit-card-pattern",
    site: "rj",
    seoTitle: "RAS Prelims 2026 on 6 December: Admit Card, Pattern, Syllabus",
    seoDescription:
      "RPSC RAS Prelims 2026 for 607 posts is on 6 December 2026. Admit card, exam pattern, one-third negative marking, the 10% blank rule and a six-week revision plan.",
    title: "RPSC RAS Prelims 2026 on 6 December: Admit Card, Exam Pattern, Syllabus and Last-Six-Weeks Plan",
    titleHi: "RPSC RAS प्रारंभिक परीक्षा 2026 6 दिसंबर को: एडमिट कार्ड, परीक्षा पैटर्न और सिलेबस",
    excerpt:
      "The RAS Prelims 2026 for 607 posts is scheduled for 6 December 2026. Admit card steps, the 150-question pattern with one-third negative marking, the 10% blank rule, syllabus and a six-week plan.",
    category: "EXAM_DATE",
    exams: ["rpsc/ras"],
    content: `The **Rajasthan Public Service Commission (RPSC)** will hold the **RAS/RTS Combined Competitive (Preliminary) Exam 2026** on **6 December 2026 (Sunday)**. The 2026 notification has **607 vacancies**, and with about six weeks left, this is the time to switch from reading to revision and mocks.

## RAS 2026 at a glance

| Item | Detail |
|---|---|
| Conducting body | Rajasthan Public Service Commission (RPSC) |
| Vacancies | 607 (192 State Services, 415 Subordinate Services) |
| Application window | 4 June – 3 July 2026 (closed) |
| **Prelims** | **6 December 2026 (Sunday)** |
| Eligibility | Graduation from a recognised university |
| Official website | rpsc.rajasthan.gov.in |

## Admit card

RPSC releases the RAS Prelims admit card online a few days before the exam.

1. Go to [rpsc.rajasthan.gov.in](https://rpsc.rajasthan.gov.in) or log in at [sso.rajasthan.gov.in](https://sso.rajasthan.gov.in) and open the Recruitment Portal.
2. Open the RAS/RTS 2026 admit card link and enter your details.
3. Download and print it; check your name, photo, roll number and centre.

Carry the printout and an original photo ID, and read the instructions on the admit card about reporting time.

## Prelims pattern

| Item | Detail |
|---|---|
| Paper | General Knowledge and General Science |
| Questions | 150 objective questions |
| Marks | 200 |
| Time | 3 hours |
| Options | Five per question; the fifth is for not attempting |
| Negative marking | One-third of the question's marks per wrong answer |

**The 10% rule:** a candidate who leaves more than 10% of the questions without any of the five options marked is **disqualified**. If you do not know an answer and do not want to risk a guess, mark the fifth option; do not leave the row blank.

The prelims is only a **screening test**: its marks decide who reaches the Mains but are not added to the final merit. The Mains has four descriptive papers for 800 marks, followed by an interview.

## Syllabus in brief

- History, art, culture, literature and heritage of Rajasthan
- Indian history and the national movement
- Geography of the world, India and Rajasthan
- Indian constitution, polity and the political and administrative system of Rajasthan
- Indian and Rajasthan economy
- General science and technology, reasoning and mental ability
- Current affairs of Rajasthan, India and the world

See the full [RAS syllabus](/rpsc/ras/syllabus).

## A six-week plan to 6 December

- **Weeks 1–2:** Rajasthan history, art and culture, and Rajasthan geography. These carry a large share of the paper. The [Rajasthan GK](/rajasthan) page is a quick district-wise refresher.
- **Weeks 3–4:** polity, economy and science; 12 months of current affairs, with Rajasthan schemes and budget announcements.
- **Weeks 5–6:** a full 150-question mock every two days in 3 hours, with negative marking on. Analyse every wrong answer.

Start with the free [Rajasthan GK mock test](${FREE_MOCK}) to check your Rajasthan GK in the real exam interface — no login needed.

If you also sit RSSB exams, see the [revised RSSB exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february): CET 12th level ends on 3 December, three days before RAS.`,
    faqs: [
      {
        q: "When is the RAS Prelims 2026?",
        a: "RPSC has scheduled the RAS Prelims 2026 for 6 December 2026, a Sunday. It was earlier listed for 29 November 2026.",
      },
      {
        q: "What happens if I leave questions blank in RAS Prelims?",
        a: "Each question has a fifth option for not attempting it. A candidate who leaves more than 10% of the questions without any option marked is disqualified.",
      },
      {
        q: "How many vacancies are in RAS 2026?",
        a: "607: 192 in State Services and 415 in Subordinate Services.",
      },
    ],
  },

  {
    slug: "rssb-teaching-associate-exam-date-2026-paper-1-schedule",
    site: "rj",
    seoTitle: "RSSB Teaching Associate Exam Date 2026: Paper I on 17 November",
    seoDescription:
      "RSSB Teaching Associate exam for 3,540 posts: Paper I on 17 November 2026, subject-wise Paper II from 7 to 21 December. Full schedule, pattern and admit card.",
    title: "RSSB Teaching Associate Exam Date 2026: Paper I on 17 November, Subject-wise Paper II Schedule",
    titleHi: "RSSB टीचिंग एसोसिएट परीक्षा तिथि 2026: पेपर I 17 नवंबर को, विषयवार पेपर II शेड्यूल",
    excerpt:
      "RSSB will hold Paper I of the Teaching Associate exam (3,540 posts, Advt. No. 06/2026) on 17 November 2026 and subject-wise Paper II from 7 to 21 December. Full schedule, pattern and admit card steps.",
    category: "EXAM_DATE",
    exams: ["rssb/teaching-associate"],
    content: `The **Rajasthan Staff Selection Board (RSSB)** will hold the **Teaching Associate (contract basis) direct recruitment exam 2026** in two parts: **Paper I on 17 November 2026** and **subject-wise Paper II from 7 to 21 December 2026**. The exam is for **3,540 posts** under the **Rajasthan College Education Society (Raj-CES)**, advertised in **Advertisement No. 06/2026**.

## Teaching Associate 2026 at a glance

| Item | Detail |
|---|---|
| Advertisement | No. 06/2026 |
| Posts | 3,540 (contractual) |
| Employer | Rajasthan College Education Society |
| Subjects | 32 |
| CET needed? | No, it is a non-CET exam |
| **Paper I** | **17 November 2026, 11:00 AM – 12:00 noon** |
| **Paper II** | **7 – 21 December 2026, subject-wise** |
| Official website | rssb.rajasthan.gov.in |

## Paper II subject-wise schedule

Morning shift is 10 AM – 12 noon, afternoon shift 3 PM – 5 PM.

| Date | Morning | Afternoon |
|---|---|---|
| 7 Dec | Physics | Botany |
| 9 Dec | English | Chemistry |
| 10 Dec | Entomology; Genetics and Plant Breeding; Soil Science and Agriculture Chemistry | Drawing; Economics; Agronomy |
| 11 Dec | Public Administration; Business Administration; Sociology | Agricultural Economics; Computer Science; Home Science; Mathematics |
| 14 Dec | Plant Pathology; Urdu; Horticulture; Agriculture Engineering; Agriculture Extension and Communication; Animal Science; EAFM | — |
| 15 Dec | Zoology | History |
| 16 Dec | Law | Geography |
| 17 Dec | Political Science | — |
| 18 Dec | Hindi | — |
| 21 Dec | Sanskrit; ABST | — |

## Exam pattern

- **Paper I — General Studies of Rajasthan, 1 hour.** Common to all 32 subjects.
- **Paper II — your subject, 2 hours.**
- Each question has **five options (A to E)**; E is for a question you do not want to attempt. Leaving more than 10% of the questions without any option marked can make you ineligible.

## Admit card

RSSB releases the e-admit card on the SSO Rajasthan recruitment portal a few days before the exam. Log in at [sso.rajasthan.gov.in](https://sso.rajasthan.gov.in), open the Recruitment Portal and download it from your Teaching Associate application. Paper I and Paper II may have separate admit cards, so check for both.

## Three weeks to Paper I

Paper I is the same for everyone, so a good score here is an easy edge before Paper II. In the next three weeks:

- Revise Rajasthan history, art and culture, geography, polity and economy. The [Rajasthan GK](/rajasthan) page is a quick district-wise start.
- Read Rajasthan current affairs and state schemes of the last year.
- Practise one-hour timed papers. The free [Rajasthan GK mock test](${FREE_MOCK}) runs in the real exam interface with no login.

See the full [Teaching Associate syllabus](/rssb/teaching-associate/syllabus), and the [revised RSSB exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february) for the other exams in the same weeks.`,
    faqs: [
      {
        q: "When is the RSSB Teaching Associate Paper I?",
        a: "On 17 November 2026, from 11 AM to 12 noon. It is the General Studies of Rajasthan paper, common to all subjects.",
      },
      {
        q: "When is my subject's Paper II?",
        a: "Paper II runs subject-wise from 7 to 21 December 2026. Physics is on 7 December, Hindi on 18 December and Sanskrit on 21 December, for example; see the full table above.",
      },
      {
        q: "Is RSSB Teaching Associate a permanent post?",
        a: "No. The 3,540 posts are on a contract basis under the Rajasthan College Education Society.",
      },
    ],
  },

  // ───── Added 13 November 2026 from FreeJobAlert's Rajasthan government jobs page and its sidebar. FreeJobAlert is a third-party
  // summary, so each post tells the reader to confirm the facts on the official site. ─────

  {
    slug: "rajasthan-government-jobs-november-2026-new-vacancies-list",
    site: "rj",
    seoTitle: "Rajasthan Govt Jobs November 2026: New Vacancies, Last Dates, Exams",
    seoDescription:
      "Rajasthan govt jobs open 13 Nov 2026: Railway Apprentice 2,008 posts, CURAJ, AIIMS Jodhpur, ESIC and more, with last dates and which have a written exam.",
    title: "Rajasthan Government Jobs November 2026: Full List of New Vacancies, Last Dates and Which Ones Have an Exam",
    titleHi: "राजस्थान सरकारी नौकरी नवंबर 2026: नई भर्तियों की पूरी सूची, अंतिम तिथि और कौन-सी में परीक्षा है",
    excerpt:
      "All the Rajasthan government recruitments open on 13 November 2026 with their last dates, and the one thing most lists skip: which of them have a written exam you can practise for and which are filled by interview or merit.",
    category: "NOTIFICATION",
    exams: ["rpsc/protection-officer", "rssb/patwari", "curaj/lower-division-clerk"],
    content: `This is the list of **new Rajasthan government recruitments open on 13 November 2026**, taken from FreeJobAlert's Rajasthan page, with the last date for each and, for the posts where we could read the notice, how the selection is done. **Most of the 24 recruitments on that page have no written exam**: they are interview, walk-in, contract or merit-list posts. We say which, so you do not spend days preparing for a paper that does not exist.

The facts below are from job-alert summaries. Always confirm the post, the last date and the fee on the official notice before you apply.

**Free mocks:** almost every post below has a free practice mock on rjtestseries.in. Because most notices publish no paper, those mocks are general practice, not the real exam. See the [complete list of mocks and exam pages](/blog/rajasthan-govt-jobs-free-mock-tests-list-all-exams-2026), or the guides for [CURAJ](/blog/curaj-recruitment-november-2026-ldc-office-assistant-sports-coach-jrf), [AIIMS Jodhpur](/blog/aiims-jodhpur-recruitment-november-2026-nurse-scientist-research-assistant-field-investigator), [universities and institutes](/blog/rajasthan-university-institute-jobs-november-2026-mlsu-iit-jodhpur-iim-udaipur-cazri), [RITES, HLL and Oil India](/blog/rites-hll-oil-india-rajasthan-jobs-november-2026-manager-consultant-posts), [IIIT Kota](/blog/iiit-kota-security-supervisor-recruitment-2026-retired-defence-personnel), [KV Ajmer](/blog/pm-shri-kv-ajmer-walk-in-17-november-2026-tgt-english-primary-teacher) and [ESIC Rajasthan](/blog/esic-rajasthan-junior-engineer-assistant-engineer-retired-recruitment-2026).

## Posts where a written test is possible

| Organisation | Post | Vacancies | Last date | Written test? |
|---|---|---|---|---|
| Central University of Rajasthan (CURAJ) | Lower Division Clerk | 1 | 10 Dec 2026 | Not confirmed: the notice says a written, trade or computer test *may* be held. See the [CURAJ LDC guide](/blog/curaj-lower-division-clerk-recruitment-2026-eligibility-last-date) |
| CURAJ Incubation Foundation | Project Coordinator, Project Assistant, Office Assistant | 3 | 15 Nov 2026 | Not confirmed: a written test, skill test, presentation or interview *may* be used |
| IIIT Kota | Security Supervisor (retired defence personnel) | 3 | 4 Dec 2026 | Interview after shortlisting; a selection test *may* be added |

## Posts filled by merit list, interview or walk-in

| Organisation | Post | Vacancies | Last date | Selection |
|---|---|---|---|---|
| RRC North Western Railway | Act Apprentice | 2,008 | 22 Nov 2026 | Merit list from Class 10 and ITI marks, no exam. See the [apprentice guide](/blog/rrc-north-western-railway-act-apprentice-2026-2008-posts-apply-merit) |
| PM SHRI KV No. 1 Ajmer | TGT (English), Primary Teacher, Vocational Instructor | 3 | Walk-in 17 Nov 2026 | Walk-in interview, part-time contract |
| ESIC Rajasthan (Jaipur) | Junior Engineer, Assistant Engineer (retired engineers) | 6 | 30 Nov 2026 | Screening and interview, contract |
| CURAJ | Sports Coach | 9 | 21 Nov 2026 | Interview only |
| RITES | Assistant Manager, Manager and others | 10 | about 19 Nov 2026 | No process stated; apply by email, contract |

## Other recruitments (we did not read their selection process)

These are mostly project, research or contract posts, which are usually filled by interview or walk-in.

| Organisation | Post | Vacancies | Last date |
|---|---|---|---|
| AIIMS Jodhpur | Research Assistant | 1 | 13 Nov 2026 |
| AIIMS Jodhpur | Project Nurse III | 1 | 16 Nov 2026 |
| AIIMS Jodhpur | Scientist C | 1 | 20 Nov 2026 |
| AIIMS Jodhpur | Project Research Scientist-III | 1 | 21 Nov 2026 |
| AIIMS Jodhpur | Field Investigator | 2 | 25 Nov 2026 |
| Mohanlal Sukhadia University (MLSU) | Project Associate, Project Assistant | 2 | 13 Nov 2026 |
| MLSU | Visiting Faculty (walk-in) | 4 | 13 Nov 2026 |
| University of Rajasthan | Post Doctoral Fellow, Project Assistant | 4 | 13 Nov 2026 |
| CBI-SUAPS | Office Assistant | 1 | 17 Nov 2026 |
| HLL | Operations Manager (Biomedical) | 1 | 18 Nov 2026 |
| IIT Jodhpur | Registrar | 1 | 18 Nov 2026 |
| CURAJ | Vice-Chancellor | not stated | 21 Nov 2026 |
| IIM Udaipur | Senior Associate, Programs | 1 | 26 Nov 2026 |
| ICAR CAZRI | Young Professional-I, Field Attendant | 2 | 27 Nov 2026 |
| CURAJ | Junior Research Fellow / Project Associate-I | 1 | 30 Nov 2026 |
| Oil India (OIL) | Consultant (Electrical Engineering) | 1 | 5 Dec 2026 |

## The big Rajasthan exams are on the board's own calendar

The state's large exams do not appear in the table above because they run on RPSC and RSSB calendars. Coming up:

- **RPSC Protection Officer** on 15 November 2026: [admit card and paper timings](/blog/rpsc-protection-officer-exam-15-november-2026-admit-card-paper-timings)
- **CET Senior Secondary** on 1 to 3 December 2026: [exam date and pattern](/blog/rajasthan-cet-12th-level-2026-exam-date-admit-card-pattern)
- **RAS Prelims** on 6 December 2026: [admit card and pattern](/blog/rpsc-ras-prelims-2026-exam-date-admit-card-pattern)
- **CET Graduation** on 16 to 18 January 2027: [date, pattern and syllabus](/blog/rajasthan-cet-graduation-2026-exam-date-pattern-syllabus)
- **Rajasthan Patwari**: date not announced yet; read the [Patwari exam pattern and syllabus](/blog/rajasthan-patwari-exam-pattern-syllabus-2026-150-questions)

See the full [revised RSSB exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february). Rajasthan GK is common to all of them: start with the free [Rajasthan GK mock test](${FREE_MOCK}).

## हिंदी में सार

13 नवंबर 2026 को राजस्थान में 24 नई सरकारी भर्तियाँ खुली हैं। इनमें सबसे बड़ी **रेलवे (उत्तर पश्चिम रेलवे) की 2,008 एक्ट अप्रेंटिस पदों की भर्ती** है, जिसकी अंतिम तिथि 22 नवंबर 2026 है और जिसमें परीक्षा नहीं, मेरिट लिस्ट से चयन होता है। राजस्थान केंद्रीय विश्वविद्यालय (कुराज) के LDC पद की अंतिम तिथि 10 दिसंबर 2026 है। अधिकतर बाकी भर्तियाँ साक्षात्कार, वॉक-इन या संविदा आधारित हैं। आवेदन से पहले आधिकारिक अधिसूचना ज़रूर देखें।`,
    faqs: [
      {
        q: "Which Rajasthan government job has the most vacancies right now?",
        a: "The RRC North Western Railway Act Apprentice recruitment, with 2,008 posts as printed on the job-alert page, and a last date of 22 November 2026. Selection is by merit list, with no written exam.",
      },
      {
        q: "Do these Rajasthan recruitments have a written exam?",
        a: "Mostly not. Of the 24 on FreeJobAlert's Rajasthan page, the notices we read use a merit list, interview or walk-in. Only the CURAJ and IIIT Kota notices say a test may be held, and none gives a pattern.",
      },
      {
        q: "Where are RPSC and RSSB exams in this list?",
        a: "They are on the boards' own calendars. RPSC Protection Officer is on 15 November, CET Senior Secondary on 1 to 3 December, RAS Prelims on 6 December and CET Graduation on 16 to 18 January 2027.",
      },
    ],
  },

  {
    slug: "rpsc-protection-officer-exam-15-november-2026-admit-card-paper-timings",
    site: "rj",
    seoTitle: "RPSC Protection Officer Exam 15 Nov 2026: Admit Card, Paper Timings",
    seoDescription:
      "RPSC Protection Officer exam is on 15 November 2026 for 12 posts. Admit card released 12 November, Paper I 9 AM to 12 noon, Paper II 2:30 to 5:30 PM, OMR-based.",
    title: "RPSC Protection Officer Exam on 15 November 2026: Admit Card Out, Paper Timings and Last-Two-Days Plan",
    titleHi: "RPSC संरक्षण अधिकारी परीक्षा 15 नवंबर 2026: एडमिट कार्ड जारी, पेपर का समय और तैयारी",
    excerpt:
      "RPSC's Protection Officer exam for 12 posts is on 15 November 2026. The admit card is out, Paper I is 9 AM to 12 noon and Paper II 2:30 to 5:30 PM. Here is what is known and how to use the last two days.",
    category: "ADMIT_CARD",
    exams: ["rpsc/protection-officer"],
    content: `The **Rajasthan Public Service Commission (RPSC)** will hold the **Protection Officer Competitive Examination 2025** on **15 November 2026**, a Sunday. The **admit card was released on 12 November 2026**. There are **12 posts** in the Women and Child Development Department of Rajasthan (Advertisement No. 13/Exam/Protection Officer/RPSC/EP-1/2025-26).

## Exam at a glance

| Item | Detail |
|---|---|
| Conducting body | Rajasthan Public Service Commission (RPSC) |
| Department | Women and Child Development, Rajasthan |
| Posts | 12 |
| Exam date | 15 November 2026 (Sunday) |
| Paper I | General Studies, 9:00 AM to 12:00 noon |
| Paper II | Social Work / Law, 2:30 PM to 5:30 PM |
| Mode | Offline, OMR-based |
| Official website | rpsc.rajasthan.gov.in |

Both papers are on the same day, so plan for a full day at the centre.

## How to download the admit card

1. Go to [rpsc.rajasthan.gov.in](https://rpsc.rajasthan.gov.in) or the Rajasthan recruitment portal (recruitment.rajasthan.gov.in).
2. Open the Protection Officer admit card link.
3. Enter your application number and date of birth and download the admit card.
4. Check your name, photo, roll number, centre and reporting time, and print it.

Carry the printout and an original photo ID.

## What we do not know yet

Job-alert sites do not print the **number of questions, the marks, the negative marking or the syllabus split** for each paper. Read the instructions on your admit card and the RPSC notice. RPSC's other OMR papers give five options per question, with the fifth for a question you do not want to attempt, so **mark an option for every question** rather than leaving rows blank.

## Plan for the last two days

- **Today:** one timed General Studies paper. Our free [RPSC Protection Officer mock test](/tests/rpsc-protection-officer-free-mock-1) has 50 questions in 60 minutes, in the real exam interface, with solutions. Its length and marking are ours, not RPSC's, and Paper II is not covered.
- **Day before:** revise polity, history timelines and Rajasthan GK. The free [Rajasthan GK mock test](${FREE_MOCK}) is a quick check.
- **Paper II:** go through your social work and law notes and the laws relating to women and children; no general mock can replace them.
- **Exam day:** reach the centre early, fill the OMR sheet slowly, and use the gap between the papers to eat and rest.

See the [RPSC Protection Officer exam page](/rpsc/protection-officer) for the syllabus and FAQs, and the [Rajasthan exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february) for what comes next.

## हिंदी में सार

RPSC संरक्षण अधिकारी परीक्षा **15 नवंबर 2026** को है। महिला एवं बाल विकास विभाग के **12 पदों** के लिए एडमिट कार्ड 12 नवंबर 2026 को जारी हो चुका है। प्रथम प्रश्न-पत्र (सामान्य अध्ययन) सुबह 9 से दोपहर 12 बजे और द्वितीय प्रश्न-पत्र (सामाजिक कार्य / विधि) दोपहर 2:30 से 5:30 बजे तक है। परीक्षा OMR आधारित है। प्रश्नों की संख्या और अंकन योजना के लिए एडमिट कार्ड और RPSC की अधिसूचना देखें।`,
    faqs: [
      {
        q: "What is the date of the RPSC Protection Officer exam?",
        a: "15 November 2026, a Sunday. Paper I (General Studies) is from 9:00 AM to 12:00 noon and Paper II (Social Work/Law) from 2:30 PM to 5:30 PM.",
      },
      {
        q: "How many posts are in the RPSC Protection Officer recruitment?",
        a: "12 posts in the Women and Child Development Department, Rajasthan, under Advertisement No. 13/Exam/Protection Officer/RPSC/EP-1/2025-26.",
      },
      {
        q: "When was the Protection Officer admit card released?",
        a: "On 12 November 2026. Download it with your application number and date of birth from the RPSC website or the Rajasthan recruitment portal.",
      },
    ],
  },

  {
    slug: "rajasthan-patwari-exam-pattern-syllabus-2026-150-questions",
    site: "rj",
    seoTitle: "Rajasthan Patwari Exam Pattern & Syllabus 2026: 150 Questions, Marks",
    seoDescription:
      "Rajasthan Patwari exam pattern: 150 questions, 300 marks, 3 hours, one-third negative marking, subject-wise marks, syllabus and CET link. Exam date not announced yet.",
    title: "Rajasthan Patwari Exam Pattern and Syllabus 2026: 150 Questions, Subject-wise Marks and Date Status",
    titleHi: "राजस्थान पटवारी परीक्षा पैटर्न और सिलेबस 2026: 150 प्रश्न, विषयवार अंक और परीक्षा तिथि",
    excerpt:
      "The Rajasthan Patwari paper is reported to have 150 questions for 300 marks in 3 hours with one-third negative marking. The subject-wise split, syllabus, the CET link and where the exam date stands.",
    category: "EXAM_PATTERN",
    exams: ["rssb/patwari", "rssb/cet-graduation"],
    content: `The **Rajasthan Staff Selection Board (RSSB)** Patwari exam is **offline and OMR-based: 150 questions for 300 marks in 3 hours**, with one-third of the marks deducted for each wrong answer. **As of 4 November 2026 the exam date had not been announced** and the number of 2026 posts is not known. Patwari also needs a valid **CET Graduation score**, and that exam is on **16 to 18 January 2027**, so the Patwari notice is expected after it.

## Rajasthan Patwari exam pattern

| Subject | Questions | Marks |
|---|---|---|
| General Science, History, Polity and Geography of India; GK and current affairs | 38 | 76 |
| Geography, History, Culture and Polity of Rajasthan | 30 | 60 |
| General Hindi and General English | 22 | 44 |
| Mental ability, reasoning and basic numerical efficiency | 45 | 90 |
| General Computer | 15 | 30 |
| **Total** | **150** | **300** |

- Each correct answer carries **2 marks**; each wrong answer costs **one-third of the marks** for that question.
- Every question has **five options (A to E)**, and the fifth is for a question you do not want to attempt. Mark it instead of leaving the row blank.
- Candidates get about 10 extra minutes to fill the OMR sheet.

This is the reported pattern. RSSB's new Patwari advertisement may change it, so check it when it is out on rssb.rajasthan.gov.in.

## What the pattern means for your preparation

- **Reasoning and maths is 30% of the paper** (90 marks), and **Rajasthan GK is 20%** (60 marks). Together they are half the paper.
- **Computer is 15 questions**, more than many students expect. Hardware, operating systems and MS Office are quick marks.
- Hindi and English are only 22 questions, so a short daily grammar habit is enough.

## Syllabus in brief

- **Rajasthan GK:** history, administration, culture, festivals, freedom movement, geography, rivers, districts and schemes
- **General Hindi:** sandhi, samas, synonyms, antonyms, idioms
- **General English:** idioms, synonyms and antonyms, error correction, comprehension
- **Reasoning:** series, coding-decoding, blood relations, seating arrangement
- **Maths:** averages, percentage, simple and compound interest, profit and loss
- **Computer:** hardware, operating systems, MS Office, internet

The full outline is on the [Patwari syllabus page](/rssb/patwari/syllabus) and the figures on the [exam pattern page](/rssb/patwari/exam-pattern).

## Start with the CET

Because the CET Graduation exam comes first, your preparation for it counts twice. See the [CET Graduation exam date, pattern and syllabus](/blog/rajasthan-cet-graduation-2026-exam-date-pattern-syllabus).

## Practise in the Patwari pattern

Our free [Rajasthan Patwari mock test](/tests/rssb-patwari-free-mock-1) follows this split at one third of the length: 50 questions in 60 minutes, 2 marks each, one-third negative marking, with solutions in Hindi and English. Revise district by district with the [Rajasthan GK](/rajasthan) page.

## हिंदी में सार

राजस्थान पटवारी परीक्षा में **150 प्रश्न, 300 अंक और 3 घंटे** का समय होता है; प्रत्येक सही उत्तर के 2 अंक और गलत उत्तर पर एक-तिहाई अंक की कटौती है। विषयवार प्रश्न: सामान्य विज्ञान, इतिहास, राजव्यवस्था, भूगोल व सामान्य ज्ञान 38, राजस्थान का इतिहास, संस्कृति, भूगोल व राजव्यवस्था 30, सामान्य हिंदी व अंग्रेज़ी 22, मानसिक योग्यता, तर्कशक्ति व संख्यात्मक योग्यता 45 और सामान्य कंप्यूटर 15। 2026 की परीक्षा तिथि अभी घोषित नहीं हुई है; इसके लिए CET स्नातक स्तर (16-18 जनवरी 2027) का वैध स्कोर चाहिए।`,
    faqs: [
      {
        q: "What is the Rajasthan Patwari exam date 2026?",
        a: "Not announced when this post was written (4 November 2026). Patwari needs the CET Graduation score, and that exam is on 16 to 18 January 2027.",
      },
      {
        q: "How many questions are there in the Rajasthan Patwari exam?",
        a: "150 objective questions for 300 marks in 3 hours, 2 marks each, with one-third of the marks deducted for a wrong answer.",
      },
      {
        q: "Which subject has the most weight in Rajasthan Patwari?",
        a: "Reasoning, mental ability and basic numerical efficiency has the most questions (45 questions, 90 marks). Rajasthan GK is next, with 30 questions and 60 marks.",
      },
    ],
  },

  {
    slug: "curaj-lower-division-clerk-recruitment-2026-eligibility-last-date",
    site: "rj",
    seoTitle: "CURAJ Lower Division Clerk Recruitment 2026: Eligibility, Last Date",
    seoDescription:
      "Central University of Rajasthan Lower Division Clerk 2026: one post, any degree plus typing, fee Rs 1,500, apply online by 10 December. Is there a written test?",
    title: "CURAJ Lower Division Clerk Recruitment 2026: Eligibility, Fee, Typing Speed, Last Date 10 December and Exam Status",
    titleHi: "राजस्थान केंद्रीय विश्वविद्यालय LDC भर्ती 2026: पात्रता, शुल्क, अंतिम तिथि 10 दिसंबर",
    excerpt:
      "The Central University of Rajasthan has advertised a Lower Division Clerk post. Eligibility, fee, typing speed, the 10 December last date, and what the notice says about a written test.",
    category: "NOTIFICATION",
    exams: ["curaj/lower-division-clerk"],
    content: `The **Central University of Rajasthan (CURAJ)** has advertised a **Lower Division Clerk (LDC)** post in its non-teaching recruitment (Advertisement No. CURAJ/R./F.179/Rectt./2026/7314, dated 22 October 2026). **Apply online by 10 December 2026, 11:59 PM.**

## Vacancy and eligibility

| Item | Detail |
|---|---|
| Post | Lower Division Clerk (Post Code C-01) |
| Vacancy | 1 (EWS category) |
| Pay level | Level 2 |
| Qualification | Any bachelor's degree |
| Typing speed | 35 wpm in English or 30 wpm in Hindi |
| Age limit | 30 years as on the last date |
| Fee | Rs 1,500 (UR, EWS, OBC); Rs 750 (SC, ST, PwBD) |
| Official website | curaj.ac.in |

## Important dates

- **Online application:** by 10 December 2026, 11:59 PM
- **Hard copy must reach the university:** by 15 December 2026, 5:00 PM (20 December 2026, 5:00 PM for remote regions)

## Is there a written exam?

**Not confirmed.** The notice says the university "may conduct a written test, trade test, computer test or any other test as per the requirement of the post". It gives no pattern, date, marks or negative marking. Typing speed is listed as an eligibility condition. Watch curaj.ac.in for the selection notice before you decide how to prepare.

## How to prepare

If a test is held for a clerk-level post, it usually covers general awareness, reasoning, maths, English and computer. A short daily practice habit is enough for a single-post vacancy. Try the free [CURAJ Lower Division Clerk mock test](/tests/curaj-lower-division-clerk-free-mock-1): 50 questions in 50 minutes on those five subjects, with solutions in Hindi and English. The subjects, length and marking are ours since CURAJ has not published them. See the [LDC exam page](/curaj/lower-division-clerk) for the syllabus outline.

More openings are in our [Rajasthan government jobs list for November 2026](/blog/rajasthan-government-jobs-november-2026-new-vacancies-list).

## हिंदी में सार

राजस्थान केंद्रीय विश्वविद्यालय ने **लोअर डिवीजन क्लर्क (LDC)** का **1 पद** (EWS) निकाला है। किसी भी विषय में स्नातक और टाइपिंग गति अंग्रेज़ी में 35 या हिंदी में 30 शब्द प्रति मिनट चाहिए। ऑनलाइन आवेदन की अंतिम तिथि **10 दिसंबर 2026** है और हार्ड कॉपी 15 दिसंबर 2026 तक पहुँचनी चाहिए। लिखित परीक्षा की पुष्टि नहीं है; विश्वविद्यालय लिखित, ट्रेड या कंप्यूटर टेस्ट ले सकता है।`,
    faqs: [
      {
        q: "What is the last date for CURAJ Lower Division Clerk 2026?",
        a: "10 December 2026, 11:59 PM for the online application. The hard copy must reach the university by 15 December 2026, 5:00 PM.",
      },
      {
        q: "What is the qualification for the CURAJ Lower Division Clerk post?",
        a: "Any bachelor's degree, and a typing speed of 35 words per minute in English or 30 words per minute in Hindi. The age limit is 30 years as on the last date.",
      },
      {
        q: "What is the application fee for the CURAJ LDC post?",
        a: "Rs 1,500 for UR, EWS and OBC candidates and Rs 750 for SC, ST and PwBD candidates.",
      },
    ],
  },

  {
    slug: "rrc-north-western-railway-act-apprentice-2026-2008-posts-apply-merit",
    site: "rj",
    seoTitle: "RRC NWR Act Apprentice 2026: 2,008 Posts, Merit List, Last Date 22 Nov",
    seoDescription:
      "RRC North Western Railway Act Apprentice 2026: 2,008 posts, Class 10 plus ITI, age 15 to 24, merit list from marks (no exam), fee Rs 100, apply by 22 November 2026.",
    title: "RRC North Western Railway Act Apprentice 2026: 2,008 Posts, Eligibility, Merit List and Last Date 22 November",
    titleHi: "RRC उत्तर पश्चिम रेलवे एक्ट अप्रेंटिस भर्ती 2026: 2,008 पद, पात्रता, मेरिट लिस्ट, अंतिम तिथि 22 नवंबर",
    excerpt:
      "RRC North Western Railway (Jaipur) has invited applications for Act Apprentice posts. Eligibility, age, fee, how the merit list is made (there is no exam) and the 22 November 2026 last date.",
    category: "NOTIFICATION",
    exams: [],
    content: `**RRC North Western Railway (RRC Jaipur)** has invited applications for **Act Apprentice** training for 2026-27 (Advertisement No. 04/2026). The notification lists **2,008 slots** across eight units: the DRM offices at Ajmer, Bikaner, Jaipur and Jodhpur, and the carriage and loco workshops at Ajmer, Bikaner and Jodhpur. Job-alert sites note that the unit-wise numbers add up to more than 2,008, and the notice does not explain the difference, so check the official list for your trade and unit. **Apply online at rrcjaipur.in by 22 November 2026.**

**There is no written exam.** Selection is by a **merit list**.

## Eligibility

| Item | Detail |
|---|---|
| Education | Class 10 with at least 50% aggregate, plus an NCVT/SCVT National Trade Certificate (ITI) |
| Age | 15 to 24 years as on 22 November 2026 (relaxation for reserved categories) |
| Fee | Rs 100; nil for SC, ST, PwBD and women |
| Last date | 22 November 2026, 11:59 PM |
| Apply at | rrcjaipur.in |

Trades listed include Electrician, Welder, Fitter, Carpenter, Diesel Mechanic, Electronics Mechanic, Computer Operator and Programming Assistant, Stenographer (English and Hindi) and Draughtsman.

## How the selection works

1. **Merit list:** the average of your Class 10 percentage and your ITI percentage, made unit-wise and trade-wise.
2. **Document verification** and a **medical exam** at the chosen unit.
3. A **Contract of Apprenticeship** is signed before training. Training under the Apprentices Act gives **no right to a railway job**, and the stipend follows the rules in force.

## What to do in the next nine days

- Keep your Class 10 and ITI marksheets and certificates ready, because they are checked at document verification.
- Check the vacancy for your trade and unit in the notification, since the merit list is made trade by trade.
- Apply only on the official site, and confirm the details in the notification PDF.

Looking for jobs that do have an exam? See the [Rajasthan government jobs list for November 2026](/blog/rajasthan-government-jobs-november-2026-new-vacancies-list) and the [RSSB exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february).

## हिंदी में सार

उत्तर पश्चिम रेलवे (RRC जयपुर) ने **2026-27 के लिए एक्ट अप्रेंटिस के 2,008 पदों** पर आवेदन माँगे हैं। 10वीं (कम से कम 50%) और ITI (NCVT/SCVT) चाहिए, आयु 15 से 24 वर्ष (22 नवंबर 2026 तक)। शुल्क 100 रुपये है (SC/ST/दिव्यांग/महिला के लिए शून्य)। **कोई लिखित परीक्षा नहीं** है; 10वीं और ITI के प्रतिशत के औसत से मेरिट लिस्ट बनती है। ऑनलाइन आवेदन की अंतिम तिथि **22 नवंबर 2026** है।`,
    faqs: [
      {
        q: "Is there an exam for the RRC North Western Railway Act Apprentice?",
        a: "No. Selection is a merit list made from the average of the Class 10 and ITI percentages, followed by document verification and a medical exam.",
      },
      {
        q: "What is the last date for the NWR Act Apprentice 2026?",
        a: "22 November 2026, 11:59 PM, on rrcjaipur.in.",
      },
      {
        q: "Does an Act Apprentice get a railway job after training?",
        a: "No. Apprenticeship under the Apprentices Act is training on a contract, and the notice says it gives no right to absorption or employment.",
      },
    ],
  },
];

/** The exam and date posts above plus the per-organisation job posts (rajasthan-jobs-posts.ts). */
export const RAJASTHAN_POSTS: PostSeed[] = [...MAIN_POSTS, ...RAJASTHAN_JOB_POSTS];
