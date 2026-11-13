import { DRIVER_FREE_MOCK_SLUG, ETT_FREE_MOCK_SLUG } from "../pb-exams/new-exams";
import type { ExamPages } from "./types";

const DRIVER_MOCK = `/tests/${DRIVER_FREE_MOCK_SLUG}`;
const ETT_MOCK = `/tests/${ETT_FREE_MOCK_SLUG}`;

// Exam pages added on 13 November 2026 from the FreeJobAlert Punjab page (freejobalert.com/punjab-government-jobs/) and its
// PSSSB Driver and Punjab ETT syllabus articles of 11 and 12 November 2026. Those articles summarise the official notices;
// the official PDFs were not opened. The figures below are therefore worded as "reported" and each page sends the reader to
// the official notice. No `pattern` block is given for the same reason (the pattern page is only for exams whose figures
// were read in the notification).

export const PUNJAB_JOBS_PAGES: ExamPages = {
  "psssb/driver": {
    seo: {
      title: "PSSSB Driver Mock Test {year} — Syllabus, Pattern & Free Test",
      description:
        "PSSSB Driver exam practice: Punjabi qualifying paper, GK, Punjab history, reasoning and driving & motor mechanism. Start a free Driver mock test, no login needed.",
    },
    description: `**PSSSB Driver** is a Group C post that the **Subordinate Services Selection Board, Punjab** advertised under **Advertisement No. 12 of 2026**, along with Clerk (Legal), Clerk (Accounts), Clerk (I.T.), Translator and Field Artist posts. Job-alert sites report **5 Driver posts** in that advertisement, and the applications for it ran from 25 September to 19 October 2026. Check the post count, qualification, age limit and pay in the official advertisement on sssb.punjab.gov.in.

In November 2026 the Board put out the **plan of written examination and syllabus for Driver**. As summarised by job-alert sites, the paper is an **OMR-based objective test in two parts**:

- **Part A: Punjabi (matriculation standard)**: 50 questions, 50 marks, **qualifying only** (50% needed) and not counted for merit.
- **Part B**: 100 questions of 1 mark, checked only if you clear Part A. **40 questions are general** (GK and current affairs, Punjab history and culture, reasoning and mental ability, Punjabi, English, ICT) and **60 questions are on Driving Technique and Motor Car Mechanism**.
- **Negative marking:** a quarter mark for each wrong answer in Part B, nothing for unattempted questions. The whole exam is reported as 2 hours 30 minutes, followed by document verification and a medical examination. The summary mentions no separate driving test, so confirm the stages in the official plan.

**How to prepare:** 60% of Part B is the driving paper, so it decides your merit. Learn the road signs and traffic rules, the Motor Vehicles Act basics, the main systems of a car (engine, clutch, brakes, cooling, battery, tyres), and routine maintenance and emergency handling. Keep a daily Punjabi habit for Part A, then revise Punjab history and basic reasoning for the remaining 40 marks.

Try the free [PSSSB Driver mock test](${DRIVER_MOCK}) to see the pattern in practice: 20 general questions and 30 on driving technique and motor mechanics, with the quarter-mark negative on. Our [Know Your Punjab](/punjab) page covers the Punjab history and culture part.`,
    syllabus: `As summarised from the Driver syllabus notice (November 2026). The official plan of written examination on sssb.punjab.gov.in is the final word.

### Part A — Punjabi (qualifying)
- Matriculation-standard grammar: synonyms and antonyms, idioms and proverbs, prefixes and suffixes, number and gender, punctuation
- Sikh Gurus' lives and works, and basic Punjab history and culture

### Part B (i) — General (40 questions)
- General knowledge and current affairs: polity, economy, geography, science and technology, sports, awards
- Punjab history and culture: ancient history, Bhakti movement and Sufism, Sikh Gurus, Sikh rulers, freedom movements, language, literature and arts
- Logical reasoning, mental ability, basic numerical skills and data analysis
- Punjabi, English (grammar, vocabulary, sentence correction) and ICT (computer basics, MS Word, Excel, PowerPoint, internet)

### Part B (ii) — Driving Technique & Motor Car Mechanism (60 questions)
- Driving skills and driver duties, fuel efficiency, emergency handling
- Traffic rules, signals, signs, hand signals and road markings
- Vehicle systems and assemblies, tools and documents to carry with the vehicle
- Routine maintenance: tyre pressure, battery water, oil grades, coolant, belt and hose tension
- Vehicle and environmental pollution (petrol, diesel, CNG and noise)`,
    faqs: [
      {
        q: "How many questions does the PSSSB Driver written exam have?",
        a: "As summarised from the November 2026 plan of written examination: 50 Punjabi questions in the qualifying Part A and 100 questions in Part B, of which 40 are general and 60 are on driving technique and motor car mechanism. Confirm the figures in the official plan on sssb.punjab.gov.in.",
      },
      {
        q: "Is there negative marking in the PSSSB Driver exam?",
        a: "Reported yes for Part B: a quarter mark (0.25) is deducted for each wrong answer and nothing for unattempted questions. Part A, the qualifying Punjabi paper, carries no negative marking. Check the official plan for your drive.",
      },
      {
        q: "Is Part A Punjabi counted in the merit list?",
        a: "No. Part A is qualifying only; you need at least 25 of 50 marks to have Part B checked, but those marks are not added to your merit score.",
      },
      {
        q: "How many Driver posts are there in Advt. 12 of 2026?",
        a: "Job-alert sites report 5 Driver posts. The advertisement covers about 70 posts across Driver, Clerk (Legal), Clerk (Accounts), Clerk (I.T.), Translator and Field Artist, so read the Driver row in the official advertisement before you rely on the number.",
      },
    ],
  },

  "erb-punjab/ett": {
    seo: {
      title: "Punjab ETT Mock Test {year} — Syllabus, Pattern & Free Test",
      description:
        "Punjab ETT Teacher exam practice: qualifying Punjabi paper plus Paper B in Punjabi, English, Hindi, science, social studies and maths. Start a free ETT mock test.",
    },
    description: `**Punjab ETT** (Elementary Teacher Training) teachers teach classes 1 to 5 in government primary schools of Punjab. They are recruited by the **Education Recruitment Board (ERB), Punjab**, under the School Education Department, and the Board's recruitment notices are published at erd.punjab.gov.in. Earlier ETT drives in 2025 and 2026 were large, with thousands of posts reported across the notices, and the ETT syllabus and exam pattern for 2026 were published on job-alert sites in November 2026. Vacancies, eligibility and dates for any new drive are in the official notification, so check it before you apply.

As summarised on job-alert sites, the written exam is an **objective, OMR-based test of two papers**:

- **Paper A: Punjabi language**: 100 questions, 100 marks, 100 minutes, **qualifying only** and not counted in merit.
- **Paper B**: 100 questions of **2 marks each** (200 marks) in 100 minutes: **Punjabi 20, English 10, Hindi 10, General Science 20, Social Studies 20 and Mathematics 20**. The **merit list is prepared on Paper B marks**.
- No negative marking is stated in the summary. Confirm this in the notification.

**How to prepare:** Paper B is school-level, so strong NCERT and PSEB basics in science, maths and social studies win the most marks (60 of 100 questions). Punjabi appears twice, as the qualifying Paper A and again for 20 questions in Paper B, so grammar, idioms and translation need daily practice. Add English grammar and Hindi vyakaran for the remaining 20 questions.

Start with the free [Punjab ETT mock test](${ETT_MOCK}): a full 100-question Paper B in the same section split, in English and Hindi. It uses general school-level questions, so also read the official syllabus PDF for the exact topics.`,
    syllabus: `As summarised from the 2026 ETT syllabus article (November 2026). Download the detailed syllabus PDF from erd.punjab.gov.in for the full list.

### Paper A — Punjabi language (qualifying)
- Punjabi language, dialects and the Gurmukhi script; vowels, consonants, word formation, prefixes and suffixes
- Noun, pronoun, adjective, verb, adverb and conjunction; sentence structure
- Synonyms, antonyms, one-word substitution, idioms, punctuation and spelling

### Paper B — Punjabi (20 questions)
- Punjabi folklore, culture, language and literature
- Idioms and proverbs, English-to-Punjabi translation, sentence conversion and grammar

### Paper B — English (10 questions)
- Reading comprehension, articles, prepositions, conjunctions and modals
- Tenses, error correction, active and passive voice, direct and indirect narration
- Synonyms, antonyms, idioms and Punjabi-English translation

### Paper B — Hindi (10 questions)
- Hindi grammar: varna and shabd vichar, sangya, sarvanam, visheshan, kriya
- Paryayvachi and vilom, upsarg and pratyay, muhavare and lokoktiyan, Hindi-to-Punjabi translation

### Paper B — General Science (20 questions)
- Motion, force, work, energy, sound, light, electricity and magnetism
- Matter, atoms, acids, bases and salts, metals and non-metals, carbon compounds
- Cells and tissues, life processes, reproduction and heredity, natural resources

### Paper B — Social Studies (20 questions)
- History, geography and civics; the summary lists no topics, so use the official syllabus PDF

### Paper B — Mathematics (20 questions)
- Number system, algebra, arithmetic series, lines and angles, triangles and circles
- Mensuration, area and volume, statistics and probability`,
    faqs: [
      {
        q: "What is the Punjab ETT exam pattern?",
        a: "As summarised on job-alert sites in November 2026: Paper A is a qualifying Punjabi paper of 100 questions, and Paper B has 100 questions of 2 marks (Punjabi 20, English 10, Hindi 10, General Science 20, Social Studies 20, Mathematics 20), each paper of 100 minutes. Confirm it in the official notification on erd.punjab.gov.in.",
      },
      {
        q: "Is Paper A counted in the ETT merit list?",
        a: "No. Paper A (Punjabi) is qualifying, and the merit list is prepared on Paper B marks, according to the summary of the syllabus notice.",
      },
      {
        q: "Is there negative marking in Punjab ETT?",
        a: "The syllabus summary states no negative marking. Check the official notification for your drive before you rely on this.",
      },
      {
        q: "Who conducts the Punjab ETT recruitment?",
        a: "The Education Recruitment Board (ERB), Punjab, under the School Education Department. Notices are published at erd.punjab.gov.in.",
      },
    ],
  },
};
