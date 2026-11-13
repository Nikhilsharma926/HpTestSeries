import { DRIVER_FREE_MOCK_SLUG, ETT_FREE_MOCK_SLUG } from "../pb-exams/new-exams";
import type { PostSeed } from "./types";

const DRIVER_MOCK = `/tests/${DRIVER_FREE_MOCK_SLUG}`;
const ETT_MOCK = `/tests/${ETT_FREE_MOCK_SLUG}`;

// pbtestseries.in posts written on 13 November 2026 from the FreeJobAlert Punjab page (freejobalert.com/punjab-government-jobs/)
// and the FreeJobAlert articles it links to for PSSSB Driver, Punjab ETT, MBSPSU and PSOU. None of the notices was read on its
// own official site, so every figure is worded as "reported" and each post sends the reader to the official notice
// (sssb.punjab.gov.in, erd.punjab.gov.in, mbspsu.ac.in, psou.ac.in). Dated claims say "November 2026"; the how-to-prepare
// parts carry no dates.

export const PUNJAB_JOBS_NOV26_POSTS: PostSeed[] = [
  {
    slug: "psssb-driver-syllabus-exam-pattern-2026",
    site: "pb",
    category: "SYLLABUS",
    exams: ["psssb/driver"],
    seoTitle: "PSSSB Driver Syllabus 2026: Exam Pattern, Marks, Negative Marking",
    seoDescription: "PSSSB Driver syllabus and exam pattern 2026 (Advt. 12): qualifying Punjabi paper, 40 general questions, 60 on driving and motor mechanism, quarter-mark negative.",
    title: "PSSSB Driver Syllabus and Exam Pattern 2026: Part A Punjabi, Part B Driving Paper",
    titleHi: "PSSSB ड्राइवर सिलेबस और परीक्षा पैटर्न 2026",
    excerpt: "PSSSB Driver exam (Advt. 12 of 2026): a qualifying Punjabi paper, then 100 questions with 60 on driving technique and motor car mechanism. Pattern, syllabus and negative marking.",
    content: `The **Subordinate Services Selection Board, Punjab (PSSSB)** published the **plan of written examination and syllabus for the Driver post** in November 2026. The Driver post comes under **Advertisement No. 12 of 2026**. The figures below are as summarised by job-alert sites, so check them against the official PDF on [sssb.punjab.gov.in](https://sssb.punjab.gov.in) before you plan your preparation.

## PSSSB Driver exam pattern at a glance

| Part | Subject | Questions | Marks | Counted in merit? |
|---|---|---|---|---|
| A | Punjabi (matriculation standard) | 50 | 50 | No, qualifying only (50%) |
| B (i) | General: GK and current affairs 10, Punjab history and culture 5, reasoning 10, Punjabi 5, English 5, ICT 5 | 40 | 40 | Yes |
| B (ii) | Driving Technique and Motor Car Mechanism | 60 | 60 | Yes |

- **Mode:** objective MCQs on OMR sheets, 1 mark each. The whole exam is reported as **2 hours 30 minutes**.
- **Negative marking:** **0.25 mark** for each wrong answer in Part B; unattempted questions are not penalised.
- **Part B is checked only if you score at least 25 out of 50 in Part A.**
- After the written exam, the reported stages are document verification and a medical examination. No separate driving test is mentioned in the summary, so read the official plan.

## The driving paper decides your rank

**60 of the 100 merit marks** come from Driving Technique and Motor Car Mechanism, so most of your time should go there. The reported syllabus covers:

- Driving skills and driver duties, fuel efficiency, emergency handling
- Traffic rules, signals, signs, hand signals and road markings
- Vehicle systems and assemblies, vehicle types, tools and documents to carry with the vehicle
- Routine maintenance such as tyre pressure, battery water, oil grades, coolant, and belt and hose tension
- Vehicle and environmental pollution for petrol, diesel and CNG vehicles, and noise

## The 40 general questions

- **GK and current affairs:** polity, environment, science and technology, economy, freedom struggle, sports, geography
- **Punjab history and culture:** Sikh Gurus, the Bhakti movement and Sufism, Sikh rulers, freedom movements, language, literature and arts. Revise it with our [Know Your Punjab](/punjab) page.
- **Reasoning and mental ability**, with basic numerical skills and data analysis
- **Punjabi, English and ICT:** grammar, vocabulary and computer basics (Word, Excel, PowerPoint, internet)

## Part A: Punjabi

Part A tests matriculation-level Punjabi: synonyms and antonyms, idioms and proverbs, prefixes and suffixes, gender and number, punctuation, and the lives and works of the Sikh Gurus. You need **25 marks** to have your Part B checked, so treat it as a gate and not an afterthought.

## Practice

Take the free [PSSSB Driver mock test](${DRIVER_MOCK}): 50 questions in the same proportions (20 general and 30 on driving and motor mechanics), with the quarter-mark negative on and a solution for every question in English and Hindi. The exam page has the full outline: [PSSSB Driver](/psssb/driver). The Clerk posts of the same advertisement are covered on the [PSSSB Clerk](/psssb/clerk) page.`,
    faqs: [
      { q: "What is the PSSSB Driver exam pattern 2026?", a: "As summarised from the November 2026 plan of written examination: a qualifying Punjabi Part A of 50 questions, then Part B with 100 questions (40 general and 60 on driving technique and motor car mechanism), 1 mark each, in about 2 hours 30 minutes. Confirm it on sssb.punjab.gov.in." },
      { q: "Is there negative marking in the PSSSB Driver exam?", a: "Reported yes: 0.25 mark is deducted for each wrong answer in Part B. Part A has none, and unattempted questions are not penalised." },
      { q: "Is the Punjabi paper counted in the PSSSB Driver merit list?", a: "No. Part A is qualifying only. You need at least 25 of 50 marks to have Part B checked, but those marks are not added to the merit score." },
      { q: "How many questions are on driving in the PSSSB Driver exam?", a: "Reported 60 of the 100 Part B questions, so the driving paper carries the most weight in the merit list." },
    ],
  },

  {
    slug: "psssb-driver-preparation-strategy-driving-paper",
    site: "pb",
    category: "STRATEGY",
    exams: ["psssb/driver"],
    seoTitle: "PSSSB Driver Preparation 2026: How to Score in the Driving Paper",
    seoDescription: "How to prepare for the PSSSB Driver exam: topic plan for the 60-mark driving and motor mechanism paper, the 40 general questions and the qualifying Punjabi paper.",
    title: "How to Prepare for the PSSSB Driver Exam: A Plan for the 60-Mark Driving Paper",
    titleHi: "PSSSB ड्राइवर परीक्षा की तैयारी कैसे करें",
    excerpt: "A practical plan for the PSSSB Driver exam: how to split time between the 60-question driving paper, the 40 general questions and the qualifying Punjabi Part A, with mock test advice.",
    content: `The PSSSB Driver paper looks short, but it has a catch: a **qualifying Punjabi paper** that can end your chances early, and a **60-question driving paper** that decides your rank. The pattern is as reported in November 2026 (see the [PSSSB Driver syllabus and exam pattern](/blog/psssb-driver-syllabus-exam-pattern-2026)); check it against the official plan on sssb.punjab.gov.in. This is a simple order of work.

## Step 1: Secure Part A (Punjabi)

Part A needs **50%** and its marks do not count for merit, so aim to pass comfortably without spending half your time on it. Ten minutes a day of grammar, idioms, proverbs and synonyms, plus a quick read about the Sikh Gurus, is usually enough for matriculation-level Punjabi.

## Step 2: Make the driving paper your main subject

The reported weightage is **60 of 100 merit marks**. Study it in four blocks:

1. **Road rules and signs:** the three sign families (warning, prohibitory and mandatory, informatory), traffic signals, road markings, hand signals and the basics of the Motor Vehicles Act.
2. **Vehicle systems:** engine, clutch and gearbox, brakes (including ABS), cooling, lubrication, fuel system, battery, tyres and the exhaust system.
3. **Maintenance and emergencies:** tyre pressure, battery water, oil grades, coolant, what to do when the engine overheats, first aid and the emergency number 112.
4. **Pollution and fuel efficiency:** petrol, diesel and CNG emissions, the PUC certificate and fuel-saving driving habits.

## Step 3: Cover the 40 general questions

Ten GK and current-affairs questions, five on Punjab history and culture, ten on reasoning, and five each on Punjabi, English and ICT. Reasoning and Punjab history give the best return for the time. Punjab history is on our [Know Your Punjab](/punjab) page.

## Step 4: Practise with the negative mark on

Part B reportedly deducts **0.25 mark** for each wrong answer. In a mock, attempt only the questions where you can remove at least two options, and see how many marks that costs you. Start with the free [PSSSB Driver mock test](${DRIVER_MOCK}), read every solution, and note which driving topics you miss.

## Quick weekly plan

- **Days 1 to 4:** one driving block per day with 20 questions each
- **Day 5:** general knowledge and Punjab history
- **Day 6:** Punjabi, English and ICT
- **Day 7:** a full mock and review

Official notices appear on [sssb.punjab.gov.in](https://sssb.punjab.gov.in) first, so rely on that site for dates.`,
    faqs: [
      { q: "Which part of the PSSSB Driver exam is most important?", a: "The Driving Technique and Motor Car Mechanism paper, reported as 60 of the 100 merit marks. The Punjabi Part A only needs to be cleared (50%)." },
      { q: "How should I prepare for the driving paper?", a: "Learn road signs and rules, the main systems of a car, routine maintenance, emergency handling and pollution basics, and practise MCQs on each." },
      { q: "Should I attempt all questions given the negative marking?", a: "Not blindly. Part B reportedly deducts 0.25 mark per wrong answer, so skip a question when you cannot remove at least two options." },
    ],
  },

  {
    slug: "punjab-ett-syllabus-exam-pattern-2026",
    site: "pb",
    category: "SYLLABUS",
    exams: ["erb-punjab/ett"],
    seoTitle: "Punjab ETT Syllabus 2026: Exam Pattern, Paper A & Paper B",
    seoDescription: "Punjab ETT syllabus 2026 and exam pattern: qualifying Punjabi Paper A, then Paper B of 100 questions in Punjabi, English, Hindi, science, social studies, maths.",
    title: "Punjab ETT Syllabus and Exam Pattern 2026: Paper A, Paper B, Subject-wise Topics",
    titleHi: "पंजाब ETT सिलेबस और परीक्षा पैटर्न 2026",
    excerpt: "Punjab ETT Teacher exam 2026: Paper A is a qualifying Punjabi paper and Paper B has 100 questions of 2 marks. Subject-wise syllabus, marks and how merit is decided.",
    content: `Elementary Teacher Training (**ETT**) teachers are recruited by the **Education Recruitment Board (ERB), Punjab**. Job-alert sites published the **Punjab ETT syllabus and exam pattern for 2026** in November 2026. This is a summary of that pattern. Vacancies, eligibility and dates for any drive are in the official notification at [erd.punjab.gov.in](https://erd.punjab.gov.in), so confirm every figure there.

## Punjab ETT exam pattern (as reported)

| Paper | Subjects | Questions | Marks | Time |
|---|---|---|---|---|
| Paper A | Punjabi language (qualifying) | 100 | 100 | 100 minutes |
| Paper B | Punjabi 20, English 10, Hindi 10, General Science 20, Social Studies 20, Mathematics 20 | 100 | 200 (2 per question) | 100 minutes |

- **Type:** objective questions, OMR-based
- **Merit:** the merit list is prepared on **Paper B marks**. Paper A is qualifying and its marks are not counted.
- **Negative marking:** none is stated in the summary. Check the notification.

## Syllabus by subject

### Paper A: Punjabi language
Punjabi language, dialects and the Gurmukhi script, vowels and consonants, word formation, prefixes and suffixes, parts of speech, sentence structure, synonyms and antonyms, one-word substitution, idioms, punctuation and spelling.

### Paper B: Punjabi (20)
Punjabi folklore and culture, language and literature, idioms and proverbs, English-to-Punjabi translation, sentence conversion and grammar.

### Paper B: English (10)
Reading comprehension, articles and prepositions, conjunctions and modals, tenses and error correction, active and passive voice, narration, synonyms and antonyms, one-word substitution, idioms and translation both ways between Punjabi and English.

### Paper B: Hindi (10)
Hindi grammar (varna vichar, sangya, sarvanam, visheshan, kriya), paryayvachi and vilom shabd, upsarg and pratyay, muhavare and lokoktiyan, and Hindi-to-Punjabi translation.

### Paper B: General Science (20)
Motion and force, work, energy and sound, light, electricity and magnetism, matter and atoms, acids, bases and salts, metals and non-metals, carbon compounds, cells and tissues, life processes, heredity and evolution, natural resources and the environment.

### Paper B: Social Studies (20)
History, geography and civics. The summary does not list topics, so use the detailed syllabus PDF on the ERB site.

### Paper B: Mathematics (20)
Number system, algebra, arithmetic series, lines and angles, triangles and circles, mensuration, area and volume, statistics and probability.

## Practice

Take the free [Punjab ETT mock test](${ETT_MOCK}): a full 100-question Paper B in the same section split, with solutions in English and Hindi. Its questions are school-level, not the exact ETT syllabus, so also use the official syllabus. The exam page has the full outline: [Punjab ETT Teacher](/erb-punjab/ett).`,
    faqs: [
      { q: "What is the Punjab ETT exam pattern 2026?", a: "As reported in November 2026: Paper A (Punjabi, 100 questions, qualifying) and Paper B (100 questions of 2 marks: Punjabi 20, English 10, Hindi 10, General Science 20, Social Studies 20, Mathematics 20), each of 100 minutes. Confirm it on erd.punjab.gov.in." },
      { q: "Are Paper A marks counted in the ETT merit list?", a: "No. Paper A is qualifying, and merit is prepared on Paper B marks according to the syllabus summary." },
      { q: "Is there negative marking in Punjab ETT?", a: "No negative marking is stated in the summary. Check the official notification of your drive." },
      { q: "Where can I get the detailed Punjab ETT syllabus?", a: "In the recruitment notifications section of the Education Recruitment Board website, erd.punjab.gov.in." },
    ],
  },

  {
    slug: "punjab-ett-preparation-strategy-paper-b",
    site: "pb",
    category: "STRATEGY",
    exams: ["erb-punjab/ett"],
    seoTitle: "Punjab ETT Preparation 2026: Study Plan for Paper A and Paper B",
    seoDescription: "How to prepare for Punjab ETT: a subject-wise plan for the qualifying Punjabi Paper A and the 100-question, 200-mark Paper B, with mock test advice.",
    title: "How to Prepare for Punjab ETT: A Study Plan for Paper A and Paper B",
    titleHi: "पंजाब ETT की तैयारी कैसे करें",
    excerpt: "A subject-wise study plan for the Punjab ETT exam: pass the qualifying Punjabi paper, then score in the 100-question Paper B with science, maths and social studies.",
    content: `The Punjab ETT exam is reported to have two papers: a **qualifying Punjabi Paper A** and a **100-question, 200-mark Paper B** that decides merit (see the [Punjab ETT syllabus and exam pattern](/blog/punjab-ett-syllabus-exam-pattern-2026), and check it against erd.punjab.gov.in). The papers are school level, so a steady plan beats a heavy one.

## Where the marks are

Paper B has 100 questions of 2 marks. **60 of them (General Science, Social Studies and Mathematics) are school subjects**, 20 are Punjabi and 20 are English and Hindi. Whoever is strong in all of them wins, so cover everything but start with the 60.

## A simple order of work

1. **Mathematics (20):** number system, algebra, mensuration, triangles, circles, statistics and probability. Solve 20 questions daily; maths improves only with practice.
2. **General Science (20):** read the class 9 and 10 science topics (motion, force, light, electricity, acids and bases, metals, carbon, cells, life processes) and make one-page notes.
3. **Social Studies (20):** history, geography and civics from the school books, and the official syllabus once you have it.
4. **Punjabi (20 in Paper B and all of Paper A):** grammar, idioms, proverbs, translation and folklore. This is your gate, so practise daily.
5. **English (10) and Hindi (10):** grammar, error spotting, vocabulary, vyakaran and muhavare.

## Mock tests

Start with the free [Punjab ETT mock test](${ETT_MOCK}) as a full Paper B of 100 questions in 100 minutes. Check your section-wise score, find the weakest subject and revise it before the next mock. Take one full mock every week, and review every wrong answer with its solution.

## Habits that help

- Study the Punjabi paper in Gurmukhi script every day
- Keep a notebook of formulas, definitions and idioms
- Use the official notification for the exam date and the final pattern, not social-media posts

Read the [Punjab ETT exam page](/erb-punjab/ett) for the full outline.`,
    faqs: [
      { q: "Which subjects matter most in Punjab ETT Paper B?", a: "General Science, Social Studies and Mathematics carry 60 of the 100 questions. Punjabi has 20 questions in Paper B and also forms the qualifying Paper A." },
      { q: "How long should I prepare for Punjab ETT?", a: "That depends on your starting point. Most candidates need a few months of steady school-level revision plus weekly full mocks." },
      { q: "Should I attempt every question in Paper B?", a: "The syllabus summary states no negative marking, so attempting every question is reasonable if that holds for your drive. Confirm it in the official notification first." },
    ],
  },

  {
    slug: "mbspsu-recruitment-2026-123-posts-clerk-office-superintendent",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "MBSPSU Recruitment 2026: 123 Posts, Clerk, Office Superintendent",
    seoDescription: "MBSPSU Patiala recruitment 2026 (Advt. 04/2026): 123 teaching and non-teaching posts reported, fee, last date 4 December 2026, Punjabi qualifying test and how to apply.",
    title: "MBSPSU Recruitment 2026: 123 Teaching and Non-Teaching Posts, Last Date 4 December",
    titleHi: "MBSPSU भर्ती 2026: 123 पद, अंतिम तिथि 4 दिसंबर",
    excerpt: "The Maharaja Bhupinder Singh Punjab Sports University has advertised 123 posts (Advt. 04/2026), including Clerk, Office Superintendent and Accounts Assistant. Posts, fee, dates and selection.",
    content: `The **Maharaja Bhupinder Singh Punjab Sports University (MBSPSU), Patiala** has advertised **teaching and non-teaching posts under Advertisement No. 04/2026**. Job-alert sites report **123 vacancies** across the university and its two colleges, with the online application running from **9 November to 4 December 2026**. These figures come from a third-party summary, so read the advertisement on [mbspsu.ac.in](https://www.mbspsu.ac.in) before you apply. The same summary notes that the university may revise the vacancy count.

## Where the posts are (reported)

| Institution | Posts |
|---|---|
| MBSPSU, Patiala | 68 |
| Government Arts and Sports College, Jalandhar | 29 (the advertisement PDF is reported to print 28) |
| Guru Nanak Government College, Kala Afghana (Gurdaspur) | 26 |

The teaching posts include Professor, Associate Professor, Assistant Professor (Physical Education and Physiotherapy), Lecturer and Demonstrator. The **non-teaching posts** include Clerk, Office Superintendent, Accounts Assistant, Storekeeper, Technical Assistant, Lab Attendant, Physiotherapist, Dietician, Sports Trainer, Yoga Trainer and Librarian. The Clerk post is reported at Patiala only, with Office Superintendent at all three institutions.

## Key facts for non-teaching posts (reported)

- **Age:** 18 to 37 years as on 1 January 2026, with relaxation as per Punjab Government rules
- **Punjabi:** a pass up to matriculation level is reported as a condition for several posts
- **Pay:** minimum basic pay of ₹19,900 for Clerk, Storekeeper and Lab Attendant, and ₹35,400 for Office Superintendent and Accounts Assistant, on the Punjab pay matrix
- **Fee (including GST):** ₹2,000 for General and ₹1,500 for SC, ST, BC, EWS, Ex-Servicemen and PwD; separate fees for each post or campus, non-refundable
- **Hard copy:** printed application sets must reach the Registrar by **9 December 2026**

## Selection process

The summary says there is **no single written exam for all posts**. For Group C posts it reports a **Punjabi qualifying test (matriculation standard, minimum 50%)**, then a written examination for those who qualify, a skill test where applicable and document verification. The **pattern, syllabus and dates of the written test are "to be announced"**. Teaching posts are shortlisted by academic score and an interview.

## How to prepare

Until the pattern is out, prepare the basics common to clerical exams: Punjab history and culture, general knowledge, reasoning, Punjabi, English and computers. The free [PSSSB Clerk mock test](/tests/psssb-clerk-free-mock-1) follows that mix, and the [PSSSB Clerk exam page](/psssb/clerk) lists the topics.`,
    faqs: [
      { q: "How many posts are in MBSPSU Recruitment 2026?", a: "Job-alert sites report 123 teaching and non-teaching posts under Advt. No. 04/2026 across MBSPSU Patiala and two colleges. The university may revise the count, so read the advertisement on mbspsu.ac.in." },
      { q: "What is the last date to apply for MBSPSU recruitment?", a: "The online application and fee payment close on 4 December 2026, and the hard copy must reach the Registrar by 9 December 2026, as reported." },
      { q: "Is there a written exam for MBSPSU Clerk and Office Superintendent?", a: "Reported yes for Group C posts, after a Punjabi qualifying test. The pattern and dates are yet to be announced." },
      { q: "What is the MBSPSU application fee?", a: "Reported ₹2,000 for General and ₹1,500 for reserved categories and PwD, including GST. Confirm it in the advertisement." },
    ],
  },

  {
    slug: "psou-recruitment-2026-superintendent-senior-assistant-last-date",
    site: "pb",
    category: "NOTIFICATION",
    exams: [],
    seoTitle: "PSOU Recruitment 2026: 10 Posts, Superintendent, Last Date 15 Nov",
    seoDescription: "PSOU Patiala recruitment 2026 (Advt. 01/2026): 10 posts including Superintendent and Senior Assistant, fee, online last date 15 November 2026 and selection process.",
    title: "PSOU Recruitment 2026: 10 Posts Including Superintendent and Senior Assistant",
    titleHi: "PSOU भर्ती 2026: 10 पद, अधीक्षक और वरिष्ठ सहायक",
    excerpt: "Jagat Guru Nanak Dev Punjab State Open University has advertised 10 posts (Advt. 01/2026). Posts, qualifications, fee, the online last date of 15 November 2026 and the selection process.",
    content: `**Jagat Guru Nanak Dev Punjab State Open University (PSOU), Patiala** has advertised **10 teaching and non-teaching posts under Advertisement No. 01/2026**, according to job-alert sites. The **online application closes on 15 November 2026**, and the printed application must reach the Registrar by **5:00 pm on 23 November 2026**. Check the advertisement on [psou.ac.in](https://www.psou.ac.in) before you apply, because these details are from a third-party summary.

## Posts (reported)

| Post | Vacancies |
|---|---|
| Assistant Professor (History and Public Administration) | 2 |
| Assistant Registrar | 1 |
| Superintendent | 2 |
| System Administrator | 1 |
| Programmer | 1 |
| Senior Assistant | 2 |
| Law Researcher (contract) | 1 |

## Eligibility highlights (reported)

- **Senior Assistant:** a Bachelor's degree and a 120-hour computer course (or a DOEACC 'O' level), with five years' experience as a clerk in a university, college or educational institute
- **Superintendent:** a working Superintendent in a state or central government institute or university, or 10 years of regular administrative experience (at least 5 as Senior Assistant)
- **All posts:** Punjabi up to matriculation level is reported as essential
- **Age:** as per UGC and Punjab Government rules; the summary gives no figure

## Fee

Reported **₹2,000 plus 18% GST** for the General category and **₹1,000 plus GST** for SC, ST and PwD candidates of Punjab; others pay the General fee. Payment is online and non-refundable.

## Selection process

- **Superintendent:** shortlisting through a **competitive test**, then an interview. The summary gives no pattern, marks or negative marking.
- **Senior Assistant:** typing tests in Punjabi (Unicode Raavi) and English at 30 words a minute, then a skill test
- **Assistant Professor:** academic score as per UGC rules, then an interview

## How to prepare

For the Superintendent competitive test, general knowledge, Punjab history and culture, reasoning, English, Punjabi and computers are a sensible base. Practise with the free [PSSSB Clerk mock test](/tests/psssb-clerk-free-mock-1), and see the [PSSSB Clerk exam page](/psssb/clerk) for the topic list. For Senior Assistant, add daily typing practice in both scripts.`,
    faqs: [
      { q: "What is the last date for PSOU recruitment 2026?", a: "The online application closes on 15 November 2026, as reported, and the hard copy must reach the Registrar by 5:00 pm on 23 November 2026." },
      { q: "How many posts are in PSOU Advt. 01/2026?", a: "Job-alert sites report 10 posts: 2 Assistant Professors, 1 Assistant Registrar, 2 Superintendents, 1 System Administrator, 1 Programmer, 2 Senior Assistants and 1 Law Researcher on contract." },
      { q: "What is the PSOU application fee?", a: "Reported ₹2,000 plus 18% GST for General and ₹1,000 plus GST for SC, ST and PwD of Punjab. Confirm it in the advertisement." },
      { q: "Is there a typing test for PSOU Senior Assistant?", a: "Yes, reported at 30 words a minute in Punjabi (Unicode Raavi) and English, followed by a skill test." },
    ],
  },

  {
    slug: "punjab-govt-jobs-november-2026-last-dates",
    site: "pb",
    category: "NOTIFICATION",
    exams: ["psssb/driver", "erb-punjab/ett", "psssb/clerk"],
    seoTitle: "Punjab Govt Jobs November 2026: New Vacancies and Last Dates",
    seoDescription: "Punjab government jobs in November 2026: PSSSB Driver and Clerk, Punjab ETT, MBSPSU, PSOU, AIIMS Bathinda, ESIC Ludhiana and more, with vacancies and last dates.",
    title: "Punjab Govt Jobs November 2026: New Vacancies, Exams and Last Dates",
    titleHi: "पंजाब सरकारी नौकरी नवंबर 2026: नई भर्तियां और अंतिम तिथि",
    excerpt: "One page for Punjab government recruitments in November 2026: PSSSB and ERB exams, university posts, AIIMS Bathinda, ESIC Ludhiana, PSU jobs and the last date for each.",
    content: `This page lists the Punjab government recruitments that were live around **13 November 2026**, compiled from the FreeJobAlert Punjab page and PSSSB updates. Vacancy counts and dates are as reported there, so check the official notice before you apply. We update the page when new notices appear.

## State exams and recruitment boards

| Recruitment | Latest update (November 2026) |
|---|---|
| PSSSB Driver, Advt. 12/2026 | Plan of written examination and syllabus published; [pattern here](/blog/psssb-driver-syllabus-exam-pattern-2026) |
| Punjab ETT (Education Recruitment Board) | 2026 syllabus and pattern published; [pattern here](/blog/punjab-ett-syllabus-exam-pattern-2026) |
| PSSSB Group D, Advt. 04/2026 | Exam held in October; admit card, answer key and objections out |
| PSSSB Clerk, Advt. 02/2026 | Exam held in October; answer key out |
| PSSSB Jail Warder | PMT/PET admit card out |
| Punjab Police Constable 2026 | Result and cut-off published |
| PSTCL Lower Division Clerk | Result published |

## Universities and colleges (reported)

| Organisation | Post | Vacancies | Last date |
|---|---|---|---|
| MBSPSU Patiala | Clerk, Office Superintendent and more | 123 | 4 December 2026 |
| PSOU Patiala | Superintendent, Senior Assistant and more | 10 | 15 November 2026 |
| Punjab Agricultural University | Junior Field/Lab Helper | 2 | 30 November 2026 |
| IISER Mohali | Assistant Professor | 21 | 20 November 2026 |

Details: [MBSPSU recruitment](/blog/mbspsu-recruitment-2026-123-posts-clerk-office-superintendent) and [PSOU recruitment](/blog/psou-recruitment-2026-superintendent-senior-assistant-last-date).

## Central institutions and PSUs in Punjab (reported)

| Organisation | Post | Vacancies | Last date |
|---|---|---|---|
| ESIC Ludhiana | Assistant Professor, Senior Resident and more | 112 | 19 November 2026 |
| AIIMS Bathinda | Senior Resident (walk-in) | 33 | 19 November 2026 |
| AIIMS Bathinda | Professor, Assistant Professor and more | 55 | 30 November 2026 |
| SCL Mohali | Technician, Technical Assistant and more | 83 | 30 November 2026 |
| BBMB | Apprentice | 58 | 30 November 2026 |
| ECHS Barnala | Pharmacist, Clerk, Driver and more | 9 | 20 November 2026 |

## How to use this list

1. Open the official notice for each post and check eligibility, age and fee.
2. For state clerical and driver posts, read the [PSSSB Clerk](/psssb/clerk) and [PSSSB Driver](/psssb/driver) pages and start the free mocks.
3. Keep Punjabi (matric level) ready: most PSSSB, university and ERB posts ask for it.
4. Check the last date today, since several posts close this month.

Practise with the [PSSSB Driver mock test](${DRIVER_MOCK}) and the [Punjab ETT mock test](${ETT_MOCK}).`,
    faqs: [
      { q: "Which Punjab government jobs are open in November 2026?", a: "Reported openings include MBSPSU (123 posts, to 4 December), PSOU (10 posts, to 15 November), ESIC Ludhiana (112 posts, to 19 November), AIIMS Bathinda and SCL. Confirm each in its official notice." },
      { q: "What is the latest PSSSB recruitment news?", a: "The plan of written examination and syllabus for the PSSSB Driver post (Advt. 12/2026) was published in November 2026. Official notices are on sssb.punjab.gov.in." },
      { q: "Is the Punjab ETT syllabus out?", a: "Job-alert sites published the 2026 ETT syllabus and pattern in November 2026. The official notification is on erd.punjab.gov.in." },
      { q: "Where should I check official Punjab recruitment notices?", a: "PSSSB on sssb.punjab.gov.in, PPSC on ppsc.gov.in, ETT on erd.punjab.gov.in and the university sites for their own posts." },
    ],
  },
];
