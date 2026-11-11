import type { ExamPages } from "./types";

// Haryana exams, shown on hrtestseries.in only. The facts come from aggregator sites found on 9 November 2026 and are NOT
// yet checked against hssc.gov.in (docs/HR-TEST-SERIES-PLAN.md §1): they are worded as "reported", and no exam pattern is
// given until the 2026 advertisement is confirmed, so the exam has no /exam-pattern page yet.

export const HARYANA_PAGES: ExamPages = {
  "hssc/cet-group-c": {
    seo: {
      title: "HSSC CET Group C Mock Test {year} — Haryana GK & Practice Papers",
      description:
        "HSSC CET Group C mock tests for the Haryana Common Eligibility Test: Haryana GK sectionals with solutions in English and Hindi, in the real online exam format.",
    },
    description: `The **Haryana Staff Selection Commission (HSSC)** fills Group C posts in Haryana through the **Common Eligibility Test (CET)**. The CET score decides eligibility for a large share of state recruitments, including Police, Patwari, Clerk and many other Group C posts, which is why this one exam matters to most Haryana job seekers.

In the 2026 drive (Advertisement No. 02/2026) about **7,300 Group C vacancies** were reported by exam-prep sites, with the Mains date still to be announced. These figures are not yet checked against the official notice on hssc.gov.in, so confirm the posts, dates and eligibility there before you apply.

The CET is an **online objective test**. Reports describe about 100 questions in roughly 105 minutes, covering Haryana GK, general awareness and current affairs, reasoning, maths, English, Hindi and computer. Reports also disagree on negative marking, so read the marking scheme in the official advertisement before relying on any figure.

**How to prepare:** Haryana GK is the part that students from other states lack and that local students can score fully in, so start there: history, geography and districts, rivers and wildlife, culture and fairs, economy, polity and sports personalities. Then build general awareness, reasoning and maths, and practise Hindi and English grammar. Take a sectional test each day and a full mock every few days.

**Our mocks:** we are adding the CET series in stages. The Haryana GK sectionals are first, each with 25 questions, 20 minutes and a detailed solution in English and Hindi for every question. The Haryana GK facts are written in-house and are being spot-checked, so tell us if you find an error.`,
    syllabus: `The 2026 notice gives the scheme; the topics below are what the CET usually covers.

### Haryana GK
- History of Haryana: Indus Valley sites, Panipat and Tarain, the 1857 revolt, formation in 1966
- Geography: hills, plains, rivers, canals, soils, wildlife
- Districts, towns and places of interest
- Culture: folk theatre, dances, dialects, fairs and festivals
- Economy: agriculture, industry, institutions and transport
- Polity and administration; sports and personalities

### General Awareness
- Indian history, polity, geography and economy
- General science and environment
- Current affairs, awards, books and sports

### Reasoning and Maths
- Series, analogy, coding-decoding, blood relations, direction sense
- Arithmetic: percentage, ratio, profit and loss, time and work, average

### Languages and Computer
- English grammar, vocabulary and comprehension
- Hindi grammar, vocabulary and comprehension
- Computer basics, MS Office and internet`,
    faqs: [
      {
        q: "What is the HSSC CET and who needs it?",
        a: "The Common Eligibility Test is the first screening exam the Haryana Staff Selection Commission holds for Group C and D posts. Its score is used by most Haryana recruitments, so most applicants for Group C posts have to take it.",
      },
      {
        q: "How many posts are in the HSSC CET Group C 2026 drive?",
        a: "Exam-prep sites report about 7,300 Group C vacancies under Advertisement No. 02/2026. This has not been checked against the official notice yet, so confirm on hssc.gov.in.",
      },
      {
        q: "Is there negative marking in the HSSC CET?",
        a: "Sources disagree. Some reports say there is no negative marking for wrong answers, while an advertisement PDF mentions a deduction for unattempted questions. Read the 2026 advertisement. Our sectionals apply no negative marking.",
      },
      {
        q: "Are the Haryana GK sectionals enough for the CET?",
        a: "They cover the Haryana part, which is the most state-specific. You also need general awareness, reasoning, maths, English, Hindi and computer; more sectionals and full mocks are being added to this series.",
      },
    ],
  },
  "haryana-police/constable": {
    seo: {
      title: "Haryana Police Constable Mock Test {year} — Free Practice Paper",
      description:
        "Free Haryana Police Constable mock test: Haryana GK, general awareness, reasoning, maths and English in the real online exam format, with Hindi and English solutions.",
    },
    description: `**Haryana Police Constable** is among the largest recruitments in the state, and it draws lakhs of applicants for a few thousand posts. Reports found on exam-prep sites say the 2026 drive (Advertisement No. 01/2026) offered about **5,500 posts** across male general duty, female general duty and GRP, with the form closed in January 2026. These figures are not yet checked against the official notice, so confirm the posts, dates and eligibility on the Haryana Staff Selection Commission site (hssc.gov.in) before you rely on them.

Selection is reported to go through the **HSSC Common Eligibility Test (CET) score**, followed by the **physical standard and physical efficiency tests**, and then document verification and a medical examination. No constable-specific written pattern has been confirmed for us, so we do not publish an exam-pattern page for this exam yet; read the advertisement for the stages and marks.

**How to prepare:** The written part rewards the same subjects as the CET: Haryana GK, general awareness, reasoning, maths and English. Start with Haryana GK (history, districts, rivers, culture and polity), then build speed in maths and reasoning. In parallel, prepare for the running and other physical tests, because a good written score does not help if you miss the physical cut.

**Our mocks:** the free paper is [Haryana Police Constable Free Mock Test 1](/tests/haryana-police-constable-free-mock-1): 100 questions in 90 minutes with Haryana GK, general awareness, reasoning, maths and English. The length and section split are our own, since no constable-specific pattern is confirmed, and every question has a solution in English and Hindi.`,
    syllabus: `The topics below are what the written part usually covers; the advertisement gives the final scheme.

### Haryana GK
- History of Haryana, formation in 1966, Panipat and Kurukshetra
- Geography, districts, rivers and wildlife
- Culture, fairs, folk traditions and sports
- Economy, polity and administration

### General Awareness
- Indian history, polity, geography and economy
- General science

### Reasoning and Maths
- Series, analogy, coding-decoding, blood relations, direction sense
- Percentage, ratio, average, profit and loss, time and work, simple and compound interest

### English
- Grammar, vocabulary and comprehension

### Physical tests
- Height and chest standards and the physical efficiency tests, as set in the advertisement`,
    faqs: [
      {
        q: "How many posts are in the Haryana Police Constable 2026 recruitment?",
        a: "Exam-prep sites report about 5,500 posts under Advertisement No. 01/2026 (male general duty, female general duty and GRP). We have not checked this against the official notice, so confirm it on hssc.gov.in.",
      },
      {
        q: "Is the HSSC CET needed for Haryana Police Constable?",
        a: "Reports say the CET score is used for the written stage of the constable recruitment, followed by physical tests. Confirm the stages in the advertisement.",
      },
      {
        q: "Is there negative marking in the Haryana Police Constable written test?",
        a: "We have not confirmed it for the constable exam. Our free mock applies no negative marking; read the marking scheme in the official advertisement.",
      },
      {
        q: "Which subjects does the free mock cover?",
        a: "Haryana GK, general awareness, reasoning, maths and English. The split and length are ours, since the real constable pattern is not confirmed.",
      },
    ],
  },
  "hpsc/hcs": {
    seo: {
      title: "HPSC HCS Mock Test {year} — Free Prelims Practice Paper",
      description:
        "Free HPSC HCS Prelims mock test: Haryana GK, history, polity, geography, economy and science at exam level, with solutions in Hindi and English in a real CBT format.",
    },
    description: `The **Haryana Civil Services (Executive Branch) examination, HCS**, is conducted by the **Haryana Public Service Commission (HPSC)** to recruit officers for the HCS and allied services. It is the state's highest-level civil services exam, with a **Preliminary** stage that screens candidates, a **Main** stage and an **interview**.

Exam-prep sites reported about **102 posts** in the latest drive, with the prelims held on 26 April 2026 and the next cycle not announced. These figures are not yet checked against the official notice, so confirm the number of posts, the dates and the eligibility on hpsc.gov.in. We have not confirmed the prelims marking or the aptitude paper either, so we publish no exam-pattern page for this exam yet.

**How to prepare:** The prelims is a general studies paper, so the base is the standard syllabus: Indian history, polity, geography, economy and science. On top of that, the commission asks Haryana-specific questions, so the Haryana GK topics (history, districts, rivers, culture, economy and administration) can decide the cut-off. Read a few standard books, then practise questions at exam level, because the questions are usually harder than clerical exams.

**Our mocks:** the free paper is [HPSC HCS Prelims Free Mock Test 1](/tests/hpsc-hcs-prelims-free-mock-1): 100 questions in 120 minutes with Haryana GK, history and polity, geography and economy, and science and static GK, set at a hard level on purpose. The section split, length and quarter-mark negative are our assumption, and the aptitude paper is not covered.`,
    syllabus: `The 2026 notice gives the scheme; the topics below are what the HCS prelims usually covers.

### Haryana GK
- History of Haryana, districts, rivers, culture and economy
- Polity, administration and schemes

### History and Polity
- Ancient, medieval and modern Indian history, the freedom movement
- Constitution, Parliament, judiciary, federalism and rights

### Geography and Economy
- Physical, economic and human geography of India and the world
- Planning, banking, budget, agriculture and industry

### Science and Static GK
- General science, environment and ecology
- Books, awards, sports and important institutions`,
    faqs: [
      {
        q: "What are the stages of the HPSC HCS exam?",
        a: "A Preliminary exam that screens candidates, a Main exam and an interview. Check the HPSC advertisement for the marks and subjects of each stage.",
      },
      {
        q: "How many posts were in the latest HCS recruitment?",
        a: "Exam-prep sites report about 102 posts, with the prelims held on 26 April 2026. This is not checked against the official notice yet, so confirm it on hpsc.gov.in.",
      },
      {
        q: "Does the free mock cover the aptitude paper?",
        a: "No. It covers the general studies part only, with Haryana GK included. The section split, the length and the negative marking are our assumption; read the HPSC notification.",
      },
      {
        q: "Is Haryana GK important for the HCS prelims?",
        a: "Yes. The paper is mostly standard general studies, but Haryana questions are asked on top of it, and they are the part a state-trained candidate can score fully in.",
      },
    ],
  },
  "bseh/htet": {
    seo: {
      title: "HTET Mock Test {year} — Free Haryana TET Practice Paper",
      description:
        "Free HTET mock test with child development and pedagogy, Hindi, English, maths and environmental studies in a real CBT format, with solutions in Hindi and English.",
    },
    description: `The **Haryana Teacher Eligibility Test (HTET)** is conducted by the **Board of School Education Haryana (BSEH)**. Passing it makes a candidate eligible to be considered for teacher posts in Haryana schools, and it is held at more than one level, usually for primary (PRT), trained graduate (TGT) and post graduate (PGT) teachers. It is only an eligibility test, so a pass does not itself give a job.

We could not find a 2026 exam date for HTET when this page was written, so the dates, fee and the exact pattern are not stated here. The marks, the number of questions, negative marking and the optional subject sections differ by level, so read the BSEH notification and information bulletin before you apply.

**How to prepare:** Child development and pedagogy is common to every level and is the first thing to master: development stages, learning theories, inclusive education and teaching methods. Then work on the language papers (Hindi and English), maths and environmental studies for the primary level, or your teaching subject for the higher levels. Take a full mock every few days to build speed.

**Our mocks:** the free paper is [HTET Free Mock Test 1](/tests/bseh-htet-free-mock-1), in Level 1 style: five sections of 30 questions in 150 minutes, covering pedagogy, Hindi, English, maths, and environmental and general studies. The section split is ours and no negative marking is applied; the TGT and PGT subject papers are not covered.`,
    syllabus: `The topics below are what the HTET usually covers; the BSEH bulletin gives the final syllabus for each level.

### Child Development and Pedagogy
- Development, learning theories, motivation, intelligence
- Inclusive education, individual differences, assessment

### Languages
- Hindi and English grammar, vocabulary and comprehension
- Language teaching methods

### Maths and Environmental Studies
- Arithmetic, geometry and everyday mathematics
- Environment, science, society and the natural world

### Subject papers (higher levels)
- The teaching subject for TGT and PGT, as set in the bulletin`,
    faqs: [
      {
        q: "Who conducts the HTET?",
        a: "The Board of School Education Haryana (BSEH) conducts the Haryana Teacher Eligibility Test.",
      },
      {
        q: "Is there a 2026 HTET date?",
        a: "We could not find a confirmed 2026 date when this page was written. Check the BSEH website for the notification.",
      },
      {
        q: "Is there negative marking in the HTET?",
        a: "Check the BSEH information bulletin for your level. Our free mock applies no negative marking.",
      },
      {
        q: "Does the free mock cover the TGT and PGT subject papers?",
        a: "No. It is a Level 1 style paper with pedagogy, Hindi, English, maths and environmental studies. The subject papers for the higher levels are not covered.",
      },
    ],
  },
  "svsu/assistant-steno-typist": {
    seo: {
      title: "SVSU Assistant & Steno-typist Mock Test {year} — Free Practice",
      description:
        "Free SVSU Assistant and Steno-typist mock test with general awareness, reasoning, maths, English and computer questions in the real online format, with solutions.",
    },
    description: `**Shri Vishwakarma Skill University (SVSU)**, at Dudhola in Palwal, Haryana, advertised regular non-teaching posts in November 2026 under Advertisement No. SVSU/2026/Estt./NT/C&D/25-31. Reports on job-alert sites list **10 posts**, including **Assistant** and **Steno-typist (Hindi and English)**, along with posts such as Hostel Attendant, Sanitary Officer, Plumber, Restorer and Carpenter. These figures come from a third-party summary and are not checked against the notice on svsu.ac.in, so confirm everything there.

The same reports say the selection for these posts combines a **written test of 50 marks** with a **skill test**, followed by an interview of the shortlisted candidates, and that the structure and syllabus of the test would be uploaded on the university website later. The steno-typist post is reported to need a qualifying shorthand test after the written test. Applications are offline, by post, and the last date is reported as 26 November 2026, so check the notice at once.

**How to prepare:** Because the syllabus is not published yet, prepare the usual clerical-level subjects: general awareness, reasoning, basic maths, English and computer basics. For the Steno-typist post, also practise shorthand and typing speed, because that test is separate from our mocks.

**Our mocks:** the free paper is [SVSU Assistant & Steno-typist Free Mock Test 1](/tests/svsu-assistant-free-mock-1): 50 questions in 50 minutes covering general awareness, reasoning, maths, English and computer. The subjects, length and marking are our own, since the university has not published them, and the skill and shorthand tests are not covered.`,
    syllabus: `The university had not published the written-test syllabus when this page was written. The topics below are what clerical-level written tests usually cover.

### General Awareness
- Indian history, polity, geography and economy
- General science and static GK

### Reasoning and Maths
- Series, analogy, coding-decoding, blood relations
- Percentage, ratio, average, profit and loss, time and work

### English
- Grammar, vocabulary and comprehension

### Computer
- Computer basics, MS Office and internet

### Skill test (not covered by our mocks)
- Typing or shorthand, as set in the notice`,
    faqs: [
      {
        q: "What is the selection process for the SVSU Assistant and Steno-typist?",
        a: "Reports say a written test of 50 marks and a skill test, followed by an interview of shortlisted candidates. Confirm the process in the notice on svsu.ac.in.",
      },
      {
        q: "Has SVSU published the syllabus?",
        a: "Not when this page was written. The reports say the structure and syllabus would be uploaded on the university website later. Check svsu.ac.in.",
      },
      {
        q: "How do I apply for the SVSU posts?",
        a: "Reports say the application is offline, by post, to the Assistant Registrar (Estt.) at the university. Read the notice for the form, the fee and the exact address.",
      },
      {
        q: "Does the free mock cover the shorthand or typing test?",
        a: "No. It covers the written part only. Practise shorthand and typing separately for the Steno-typist post.",
      },
    ],
  },
};
