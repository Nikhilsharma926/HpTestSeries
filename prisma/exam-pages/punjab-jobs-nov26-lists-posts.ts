import type { PostSeed } from "./types";

// More pbtestseries.in posts written on 13 November 2026, from the FreeJobAlert Punjab page (freejobalert.com/punjab-government-jobs/),
// read in full on that day, and from what the site itself holds (its exam pages and free mocks). Vacancy counts, advertisement numbers
// and last dates are copied from that page's tables and are worded as "reported"; no official notice was opened, so each post sends the
// reader to the issuing body. Where the table gives no qualification, age or selection detail, the post says so and does not fill it in.

export const PUNJAB_JOBS_NOV26_LISTS_POSTS: PostSeed[] = [
  {
    slug: "punjab-government-exams-list-2026-psssb-ppsc-erb-police",
    site: "pb",
    category: "NOTIFICATION",
    exams: ["psssb/clerk", "psssb/group-d", "psssb/driver", "erb-punjab/ett", "ppsc/pcs"],
    seoTitle: "Punjab Government Exams 2026: Full List with Free Mock Tests",
    seoDescription: "All Punjab government exams in 2026: PSSSB Clerk, Group D, JE, Driver and Patwari, PPSC PCS, Punjab ETT, Police and Court Clerk, with exam pages and free mocks.",
    title: "Punjab Government Exams 2026: Complete List by Recruitment Board",
    titleHi: "पंजाब सरकारी परीक्षाएं 2026: भर्ती बोर्ड के अनुसार पूरी सूची",
    excerpt: "Every Punjab government exam we cover in 2026, grouped by the board that runs it (PSSSB, PPSC, ERB, Punjab Police and district courts), with its exam page and a free mock test for each.",
    content: `Punjab fills its government posts through a handful of boards. This page lists the exams we cover on pbtestseries.in, grouped by board, with the page that explains each one and a free mock to try. Status notes are as reported by job-alert sites in **November 2026**, so check the board's website for the latest notice.

## Subordinate Services Selection Board (PSSSB)

PSSSB runs most Group B, C and D recruitment of the state. Its website is [sssb.punjab.gov.in](https://sssb.punjab.gov.in).

| Exam | What the written paper tests | Exam page | Free mocks |
|---|---|---|---|
| PSSSB Clerk | Punjab history and culture, GK, reasoning, English, Punjabi, ICT, after a qualifying Punjabi paper | [PSSSB Clerk](/psssb/clerk) | [Mock 1](/tests/psssb-clerk-free-mock-1), [Mock 2](/tests/psssb-clerk-free-mock-2) |
| PSSSB Group D | Punjab GK, general knowledge, reasoning, maths, English, after a qualifying Punjabi paper | [PSSSB Group D](/psssb/group-d) | [Mock 1](/tests/psssb-group-d-free-mock-1), [Mock 2](/tests/psssb-group-d-free-mock-2) |
| PSSSB Junior Engineer | Civil or electrical technical questions plus a short general part | [PSSSB Junior Engineer](/psssb/junior-engineer) | [Civil](/tests/psssb-je-civil-free-mock-1), [Electrical](/tests/psssb-je-electrical-free-mock-1) |
| PSSSB Driver (Advt. 12/2026) | General questions plus driving technique and motor car mechanism | [PSSSB Driver](/psssb/driver) | [Mock 1](/tests/psssb-driver-free-mock-1), [Mock 2](/tests/psssb-driver-free-mock-2) |
| PSSSB Patwari | Punjab revenue-department clerical exam | [PSSSB Patwari](/psssb/patwari) | [Free mock](/tests/psssb-patwari-free-mock-1) |

## Punjab Public Service Commission (PPSC)

| Exam | Stages | Exam page | Free mock |
|---|---|---|---|
| PCS Combined Competitive Exam | Prelims and Mains | [PPSC PCS](/ppsc/pcs) | [Prelims mock](/tests/ppsc-pcs-prelims-free-mock-1) |

## Education Recruitment Board (ERB), Punjab

| Exam | What the written paper tests | Exam page | Free mocks |
|---|---|---|---|
| Punjab ETT Teacher | A qualifying Punjabi paper, then Paper B: Punjabi, English, Hindi, science, social studies, maths | [Punjab ETT](/erb-punjab/ett) | [Mock 1](/tests/erb-punjab-ett-free-mock-1), [Mock 2](/tests/erb-punjab-ett-free-mock-2) |

## Punjab Police and the district courts

| Exam | Exam page | Free mock |
|---|---|---|
| Punjab Police Constable | [Punjab Police Constable](/punjab-police/constable) | [Free mock](/tests/punjab-police-constable-free-mock-1) |
| Punjab District Court Clerk (SSSC) | [District Court Clerk](/punjab-courts/clerk) | [Free mock](/tests/punjab-court-clerk-free-mock-1) |

## Where each recruitment stands (reported, November 2026)

- **PSSSB Driver:** plan of written examination and syllabus published. See the [Driver pattern](/blog/psssb-driver-syllabus-exam-pattern-2026).
- **Punjab ETT:** 2026 syllabus and pattern published. See the [ETT pattern](/blog/punjab-ett-syllabus-exam-pattern-2026).
- **PSSSB Group D and Clerk:** written exams held in October, with answer keys out.
- **Punjab Police Constable:** result and cut-off published.
- **PSSSB Jail Warder, PSPCL JE, PSTCL Lower Division Clerk and Punjab Lecturer:** at the admit-card, result or cut-off stage.

Live vacancies and last dates are on our [Punjab govt jobs November 2026 page](/blog/punjab-govt-jobs-november-2026-last-dates). Revise the state-specific part with the [Know Your Punjab](/punjab) page.`,
    faqs: [
      { q: "Which boards recruit for Punjab government jobs?", a: "Mainly the Subordinate Services Selection Board (PSSSB) for Group B, C and D posts, the Punjab Public Service Commission (PPSC) for PCS and other gazetted posts, the Education Recruitment Board (ERB) for teachers such as ETT, Punjab Police for constables and the SSSC for district court staff." },
      { q: "Is there a free mock test for each Punjab exam?", a: "Yes. Every exam in this list has at least one free mock on pbtestseries.in; Group D, Clerk, Driver and ETT have two each." },
      { q: "Is Punjabi compulsory for Punjab government exams?", a: "Most PSSSB, university and ERB recruitments ask for Punjabi up to matriculation level, often as a qualifying paper. Check the notification of the exam you are applying for." },
    ],
  },

  {
    slug: "punjab-free-mock-tests-2026-all-exams",
    site: "pb",
    category: "STRATEGY",
    exams: ["psssb/clerk", "psssb/group-d", "psssb/driver", "erb-punjab/ett", "ppsc/pcs"],
    seoTitle: "Punjab Free Mock Tests 2026: PSSSB, PPSC, ETT, Police, Court Clerk",
    seoDescription: "Every free Punjab mock test in one list: PSSSB Clerk, Group D, JE, Driver, Patwari, PPSC PCS, Punjab ETT, Police Constable and Court Clerk, with questions and time.",
    title: "Punjab Free Mock Tests 2026: Full List of PSSSB, PPSC, ETT and Police Mocks",
    titleHi: "पंजाब फ्री मॉक टेस्ट 2026: PSSSB, PPSC, ETT और पुलिस की पूरी सूची",
    excerpt: "All the free mock tests on pbtestseries.in in one place: the number of questions, the time and marking of each, in English and Hindi, with a solution for every question.",
    content: `All of these tests are **free**, need no payment, and have a solution for every question in English and Hindi. You can switch language at any time during a test.

| Mock test | Questions | Time | Negative marking |
|---|---|---|---|
| [PSSSB Group D Free Mock 1](/tests/psssb-group-d-free-mock-1) | 100 | 100 min | 0.25 |
| [PSSSB Group D Free Mock 2](/tests/psssb-group-d-free-mock-2) | 100 | 100 min | 0.25 |
| [PSSSB Clerk Free Mock 1](/tests/psssb-clerk-free-mock-1) | 100 | 100 min | 0.25 |
| [PSSSB Clerk Free Mock 2](/tests/psssb-clerk-free-mock-2) | 100 | 100 min | 0.25 |
| [PSSSB JE Civil Free Mock 1](/tests/psssb-je-civil-free-mock-1) | 50 | 60 min | 0.25 |
| [PSSSB JE Electrical Free Mock 1](/tests/psssb-je-electrical-free-mock-1) | 50 | 60 min | 0.25 |
| [PSSSB Driver Free Mock 1](/tests/psssb-driver-free-mock-1) | 50 | 60 min | 0.25 |
| [PSSSB Driver Free Mock 2](/tests/psssb-driver-free-mock-2) | 50 | 60 min | 0.25 |
| [PSSSB Patwari Free Mock 1](/tests/psssb-patwari-free-mock-1) | 100 | See the test page | See the test page |
| [PPSC PCS Prelims Free Mock 1](/tests/ppsc-pcs-prelims-free-mock-1) | 100 | 120 min | 0.25 |
| [Punjab ETT Free Mock 1 (Paper B)](/tests/erb-punjab-ett-free-mock-1) | 100 (2 marks each) | 100 min | None |
| [Punjab ETT Free Mock 2 (Paper B)](/tests/erb-punjab-ett-free-mock-2) | 100 (2 marks each) | 100 min | None |
| [Punjab Police Constable Free Mock 1](/tests/punjab-police-constable-free-mock-1) | 100 | See the test page | See the test page |
| [Punjab Court Clerk Free Mock 1](/tests/punjab-court-clerk-free-mock-1) | 70 | See the test page | See the test page |

## How the splits are set

PSSSB does not publish a section-wise split for every paper, so where it is missing the split is ours and each test says so in its instructions. The Driver and ETT mocks follow the pattern as reported by job-alert sites in November 2026; the [Driver pattern](/blog/psssb-driver-syllabus-exam-pattern-2026) and the [ETT pattern](/blog/punjab-ett-syllabus-exam-pattern-2026) explain them. The qualifying Punjabi papers are not covered by the mocks.

## How to use them

1. Take the first mock cold, in one sitting, to find your weak sections.
2. Read the solutions, then revise those topics from the exam page ([PSSSB Clerk](/psssb/clerk), [PSSSB Group D](/psssb/group-d), [PSSSB Driver](/psssb/driver), [Punjab ETT](/erb-punjab/ett)).
3. Take the second mock a week later and compare your section-wise score.
4. Revise Punjab history and culture with the [Know Your Punjab](/punjab) page.

The full list of exams is on our [Punjab government exams 2026](/blog/punjab-government-exams-list-2026-psssb-ppsc-erb-police) page.`,
    faqs: [
      { q: "Are the Punjab mock tests on pbtestseries.in free?", a: "Yes, every test in this list is free, with a solution for each question in English and Hindi." },
      { q: "Do the mocks follow the real PSSSB pattern?", a: "Where a pattern is published, as for Driver and ETT, the mock follows it as reported. For the other exams PSSSB gives no section-wise split, so the split is ours and the test instructions say so." },
      { q: "Do the mocks cover the qualifying Punjabi paper?", a: "No. The mocks cover the merit paper only; practise the qualifying Punjabi paper separately." },
    ],
  },

  {
    slug: "scl-mohali-recruitment-2026-83-posts-technician-technical-assistant",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "SCL Mohali Recruitment 2026: 83 Posts, Technician, Last Date 30 Nov",
    seoDescription: "SCL Mohali recruitment 2026 (Advt. SCL:01/2026): 83 posts including Technician and Technical Assistant reported, last date 30 November 2026 and what to check.",
    title: "SCL Mohali Recruitment 2026: 83 Technician, Technical Assistant and Other Posts",
    titleHi: "SCL मोहाली भर्ती 2026: 83 पद, तकनीशियन और तकनीकी सहायक",
    excerpt: "The Semi-Conductor Laboratory (SCL), Mohali has advertised 83 posts under Advt. SCL:01/2026, including Technician and Technical Assistant, with 30 November 2026 as the last date. What is reported and what to check.",
    content: `The **Semi-Conductor Laboratory (SCL), Mohali** has advertised **83 posts under Advertisement No. SCL:01/2026**, including **Technician** and **Technical Assistant**, according to the FreeJobAlert Punjab page. The notice was listed on **2 November 2026** and the last date to apply is **30 November 2026**. This is a third-party summary, so read the advertisement on the SCL website before you apply.

## At a glance (reported)

| Item | Detail |
|---|---|
| Organisation | Semi-Conductor Laboratory, Mohali |
| Advertisement | SCL:01/2026 |
| Posts | Technician, Technical Assistant and more |
| Vacancies | 83 |
| Notice listed | 2 November 2026 |
| Last date | 30 November 2026 |

## What the listing does not show

The summary gives no qualification, age limit, pay, fee or selection process for these posts, and we have not seen the advertisement, so we do not state them here. Before you apply, read in the official notice:

- The **trade or discipline** asked for each post and whether an ITI or diploma is required
- The **age limit** and the relaxation rules
- The **selection stages** (written test, skill or trade test, interview) and the syllabus if a written test is held
- The **mode of applying** and the last date for the printed copy, if any

## Preparation

Technical posts of this kind usually test the trade or discipline first, with some reasoning, maths and general awareness. Until the pattern is published, practise the general part with the free [PSSSB Group D mock test](/tests/psssb-group-d-free-mock-1), and see the [live Punjab vacancy list](/blog/punjab-govt-jobs-november-2026-last-dates) for other posts closing this month.`,
    faqs: [
      { q: "How many posts are in SCL Mohali recruitment 2026?", a: "The FreeJobAlert Punjab page lists 83 posts under Advt. SCL:01/2026, including Technician and Technical Assistant. Confirm the number in the official advertisement." },
      { q: "What is the last date for SCL recruitment 2026?", a: "30 November 2026, as listed on 2 November 2026. Check the SCL website for any change." },
      { q: "What is the qualification for SCL Technician?", a: "The summary we read does not state it. Read the advertisement for the qualification of each post." },
    ],
  },

  {
    slug: "bbmb-apprentice-recruitment-2026-58-posts-last-date",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "BBMB Apprentice Recruitment 2026: 58 Posts, Last Date 30 November",
    seoDescription: "BBMB Apprentice recruitment 2026 (Advt. 01/2026): 58 apprentice posts reported, last date 30 November 2026. What the listing shows and what to confirm before you apply.",
    title: "BBMB Apprentice Recruitment 2026: 58 Posts, Last Date 30 November",
    titleHi: "BBMB अप्रेंटिस भर्ती 2026: 58 पद, अंतिम तिथि 30 नवंबर",
    excerpt: "The Bhakra Beas Management Board (BBMB) has listed 58 Apprentice posts under Advt. 01/2026, with 30 November 2026 as the last date. What is reported, and what to confirm in the official notice.",
    content: `The **Bhakra Beas Management Board (BBMB)** has advertised **58 Apprentice posts under Advertisement No. 01/2026**, according to the FreeJobAlert Punjab page. The notice was listed on **30 October 2026** and the last date to apply is **30 November 2026**. Check the official notice before you apply, because these details come from a third-party listing.

## At a glance (reported)

| Item | Detail |
|---|---|
| Organisation | Bhakra Beas Management Board (BBMB) |
| Advertisement | 01/2026 |
| Post | Apprentice |
| Vacancies | 58 |
| Notice listed | 30 October 2026 |
| Last date | 30 November 2026 |

## Apprenticeship basics

An apprenticeship is a training engagement, not a regular government post: the apprentice receives a stipend for the training period and a certificate at the end, and it carries no promise of a job. The trades, qualification, age limit, stipend and training period for this notice are not in the listing we read, so confirm them in the BBMB advertisement.

## Before you apply

- Check the **trades** and the **qualification** asked for each
- Check how the **selection** is made (merit from marks, or a test) and whether documents must be uploaded or posted
- Keep your mark sheets, ID proof and photograph ready, and apply before the last date

For other Punjab recruitments closing this month, see the [November 2026 vacancy list](/blog/punjab-govt-jobs-november-2026-last-dates).`,
    faqs: [
      { q: "How many Apprentice posts are in BBMB recruitment 2026?", a: "The FreeJobAlert Punjab page lists 58 posts under Advt. 01/2026. Confirm the number in the official notice." },
      { q: "What is the last date for BBMB Apprentice 2026?", a: "30 November 2026, as listed. Check the BBMB website for the official date." },
      { q: "Is an apprentice a permanent government employee?", a: "No. An apprenticeship is a training engagement with a stipend; it does not guarantee a regular job." },
    ],
  },

  {
    slug: "punjab-medical-jobs-november-2026-aiims-bathinda-esic-ludhiana",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "Punjab Medical Jobs November 2026: AIIMS Bathinda, ESIC Ludhiana",
    seoDescription: "Punjab medical and hospital jobs in November 2026: AIIMS Bathinda, ESIC Ludhiana and HBCH & RC hospital posts, with vacancies, advertisement numbers and last dates.",
    title: "Punjab Medical and Hospital Jobs November 2026: AIIMS Bathinda, ESIC Ludhiana, HBCH & RC",
    titleHi: "पंजाब मेडिकल जॉब्स नवंबर 2026: AIIMS बठिंडा, ESIC लुधियाना",
    excerpt: "Doctor, faculty and hospital-staff vacancies in Punjab in November 2026: AIIMS Bathinda, ESIC Ludhiana and the HBCH & RC hospital posts, with vacancies, advertisement numbers and last dates.",
    content: `These medical and hospital recruitments in Punjab were listed on the FreeJobAlert Punjab page around **13 November 2026**. Vacancy counts, advertisement numbers and dates are as reported there. None of these is an MCQ exam run by a Punjab board; most are filled by walk-in, interview or document-based selection, so read each notice for the selection process.

## ESIC and AIIMS (larger notices)

| Organisation | Post | Vacancies | Last date | Advertisement |
|---|---|---|---|---|
| ESIC Ludhiana | Assistant Professor, Senior Resident and more | 112 | 19 November 2026 | Z/121/2023-MED ADMN-Part(1) |
| AIIMS Bathinda | Senior Resident | 33 | 19 November 2026 | AIIMS/BTI/RC/SR(Adhoc)/2487 |
| AIIMS Bathinda | Professor, Assistant Professor and more | 55 | 30 November 2026 | AIIMS/BTI/RC/Faculty/2026/2490 |

## HBCH & RC posts (smaller notices)

| Post | Vacancies | Last date |
|---|---|---|
| Senior Resident, One Year Fellow | 2 | 25 November 2026 |
| Clinical Specialist | 1 | 19 November 2026 |
| Research Assistant | 1 | 17 November 2026 |
| Project Assistant | 1 | 17 November 2026 |
| IT Assistant, Scientific Officer and more | 4 | 17 November 2026 |
| Assistant Dietician | 1 | 16 November 2026 |
| Assistant Dietician, ELV Technician | 3 | 16 November 2026 |
| Psychologist, Tutor | 2 | 13 November 2026 |

The same page also lists **ECHS Barnala** (Pharmacist, Clerk, Driver and more; 9 posts; last date 20 November 2026). For all of them, check the qualification, age limit and mode of selection in the notice.

## What to do next

1. Open the official notice of the post you want; the advertisement number above helps you find it.
2. Check the last date today: several of these close within a week.
3. For state clerical and driver posts, see the [Punjab government jobs list](/blog/punjab-govt-jobs-november-2026-last-dates), or the [Punjab exams page](/blog/punjab-government-exams-list-2026-psssb-ppsc-erb-police).`,
    faqs: [
      { q: "What is the last date for ESIC Ludhiana recruitment 2026?", a: "19 November 2026, as listed on the FreeJobAlert Punjab page, for 112 posts including Assistant Professor and Senior Resident." },
      { q: "How many AIIMS Bathinda vacancies are there in November 2026?", a: "Two notices are listed: 33 Senior Resident posts (last date 19 November 2026) and 55 Professor, Assistant Professor and other posts (last date 30 November 2026)." },
      { q: "Is there a written exam for these medical posts?", a: "Most of these are filled by interview, walk-in or document-based selection, not a state MCQ exam. The notice of each post gives the process." },
    ],
  },

  {
    slug: "punjab-govt-jobs-last-date-13-20-november-2026",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "Punjab Govt Jobs Last Date: 13 to 20 November 2026 (Closing Soon)",
    seoDescription: "Punjab government jobs closing between 13 and 20 November 2026: PSOU, ECHS Barnala, ESIC Ludhiana, AIIMS Bathinda, IISER Mohali, HBCH & RC and more, with posts and dates.",
    title: "Punjab Govt Jobs Closing Soon: Last Date 13 to 20 November 2026",
    titleHi: "पंजाब सरकारी नौकरी: 13 से 20 नवंबर 2026 तक अंतिम तिथि",
    excerpt: "Punjab government recruitments whose last date falls between 13 and 20 November 2026, in date order, with the post and the number of vacancies as listed. Apply before the date.",
    content: `These Punjab recruitments close **between 13 and 20 November 2026**, according to the FreeJobAlert Punjab page of 13 November 2026. Dates and vacancies are as listed there, so confirm the last date in the official notice before you apply.

| Last date | Organisation | Post | Vacancies |
|---|---|---|---|
| 13 Nov | District AYUSH Society, Sangrur | Male Yoga Instructor | 1 |
| 13 Nov | HBCH | Psychologist, Tutor | 2 |
| 14 Nov | APS Sangrur | PRT, TGT and more | 7 |
| 14 Nov | APS Old Amritsar Cantt | Principal | Not listed |
| 14 Nov | INST | Junior Research Fellow | 1 |
| 15 Nov | PSOU, Patiala | Superintendent, Senior Assistant and more | 10 |
| 15 Nov | DCPU Fazilka | Support Person | 2 |
| 15 Nov | IIT Ropar | BEE certified Energy Manager | 1 |
| 15 Nov | IIT Ropar | Postdoctoral Fellow | 1 |
| 16 Nov | HBCHRC | Assistant Dietician | 1 |
| 16 Nov | HBCHRC | Assistant Dietician, ELV Technician | 3 |
| 16 Nov | IISER Mohali | Counsellor, Junior Engineer (Civil) | 2 |
| 17 Nov | Tehsildar Nawanshahr | Nambardar | 1 |
| 17 Nov | HBCHRC Punjab | Research Assistant, Project Assistant | 1 each |
| 17 Nov | IISER Mohali | Internal Audit Officer / Consultant | 1 |
| 17 Nov | PRSC | Research Associate, Research Fellow and more | 26 |
| 17 Nov | HBCH&RC | IT Assistant, Scientific Officer and more | 4 |
| 18 Nov | HLL | Associate Manager / Operations Manager (Civil/Structural) | 1 |
| 19 Nov | ESIC Ludhiana | Assistant Professor, Senior Resident and more | 112 |
| 19 Nov | AIIMS Bathinda | Senior Resident | 33 |
| 19 Nov | HBCH & RC Punjab | Clinical Specialist | 1 |
| 20 Nov | ECHS Barnala | Pharmacist, Clerk, Driver and more | 9 |
| 20 Nov | IISER Mohali | Assistant Professor | 21 |
| 20 Nov | IIT Ropar | Junior Research Fellow / Project Assistant | 1 |

## Closing a little later

Other notices stay open into late November and December: PBTI, MBSPSU (4 December) and SCL and BBMB (30 November). Read [MBSPSU recruitment](/blog/mbspsu-recruitment-2026-123-posts-clerk-office-superintendent), [SCL Mohali recruitment](/blog/scl-mohali-recruitment-2026-83-posts-technician-technical-assistant) and [BBMB Apprentice recruitment](/blog/bbmb-apprentice-recruitment-2026-58-posts-last-date). The PSOU notice is explained in our [PSOU recruitment post](/blog/psou-recruitment-2026-superintendent-senior-assistant-last-date), and the medical posts are in the [Punjab medical jobs list](/blog/punjab-medical-jobs-november-2026-aiims-bathinda-esic-ludhiana).

## Tip

Most of these posts are interview-based or contract posts. For the Punjab state exams that do have an MCQ paper, start with the [free Punjab mock tests](/blog/punjab-free-mock-tests-2026-all-exams).`,
    faqs: [
      { q: "Which Punjab government jobs close on 15 November 2026?", a: "As listed: PSOU Patiala (10 posts including Superintendent and Senior Assistant), DCPU Fazilka (Support Person) and two IIT Ropar notices." },
      { q: "Which Punjab recruitment has the most vacancies closing soon?", a: "ESIC Ludhiana, with 112 posts and a last date of 19 November 2026, according to the listing." },
      { q: "Is this list complete?", a: "It follows the tables on the FreeJobAlert Punjab page on 13 November 2026 and may miss notices published elsewhere. Check the official websites for the latest." },
    ],
  },
];
