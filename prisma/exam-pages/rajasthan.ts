import { rj } from "../../src/sites/rj";
import type { ExamPages } from "./types";

const FREE_MOCK = `/tests/${rj.freeMockSlug}`;

// Rajasthan exams, shown on rjtestseries.in only. Dates come from the RSSB calendar revised on 28 September 2026 and the
// RPSC schedule of October 2026, checked by the owner on 26 October 2026.

export const RAJASTHAN_PAGES: ExamPages = {
  "rssb/cet-senior-secondary": {
    seo: {
      title: "Rajasthan CET 12th Level Mock Test {year} — Rajasthan GK & More",
      description:
        "Rajasthan CET Senior Secondary (12th level) mock tests in the real exam format: Rajasthan GK, reasoning, maths, Hindi, English and computer. Free test, no login.",
    },
    description: `The **Common Eligibility Test (CET) — Senior Secondary level** is the first step to most 12th-pass jobs in Rajasthan. The **Rajasthan Staff Selection Board (RSSB)** holds it once for many posts, and only those with a valid CET score can sit the separate main exam of a post such as **Junior Assistant / Clerk Grade-II**, Forester or Forest Guard when it is advertised.

The 2026 CET Senior Secondary exam is scheduled for **1 to 3 December 2026** in two shifts a day. It was earlier fixed for 23 to 25 October 2026 and moved in RSSB's revised calendar of 28 September 2026 because of the local body and Panchayati Raj elections. About **24.5 lakh candidates** have applied, which makes it one of the largest exams in the state.

The paper is objective: **150 questions for 300 marks in 3 hours**. RSSB papers carry five options per question, where the fifth option is for a question you do not want to attempt; a wrong answer costs a third of the question's marks, and leaving more than 10% of the questions without any option marked can make you ineligible.

**How to prepare:** Rajasthan GK (history, art and culture, geography) carries the most weight, so revise it district by district (our [Rajasthan GK](/rajasthan) page is a quick start), keep maths and reasoning in daily practice and take a timed mock every few days. Begin with the free [Rajasthan GK mock test](${FREE_MOCK}) to see the exam interface and your starting score.`,
    syllabus: `The detailed syllabus is in the RSSB notification. The usual areas are:

### Rajasthan GK
- History, art, culture, literature, traditions and heritage of Rajasthan
- Geography of Rajasthan: physical regions, rivers, lakes, climate, soils, minerals, wildlife
- Polity and economy of Rajasthan, state schemes

### General knowledge
- Indian history and the freedom struggle
- Geography of India and the world
- Indian polity and constitution, economy
- General science and current affairs

### Reasoning and mathematics
- Series, analogy, coding-decoding, blood relations, direction sense
- Percentage, ratio, profit and loss, simple and compound interest, time and work, mensuration

### Language and computer
- General Hindi and General English: grammar, vocabulary and comprehension
- Basic computer knowledge`,
    faqs: [
      {
        q: "When is the Rajasthan CET Senior Secondary exam in 2026?",
        a: "RSSB's revised calendar of 28 September 2026 puts it on 1 to 3 December 2026, in two shifts a day. It was earlier scheduled for 23 to 25 October 2026. The admit card shows your shift.",
      },
      {
        q: "Does a CET score give me a job?",
        a: "No. CET is an eligibility test. A valid score lets you apply for and sit the main exam of a post when RSSB advertises it; selection is decided by that main exam.",
      },
      {
        q: "Is there negative marking in Rajasthan CET?",
        a: "RSSB papers deduct a third of the question's marks for a wrong answer, and each question has a fifth option for not attempting it. Leaving more than 10% of the questions unmarked can make you ineligible, so mark an option for every question.",
      },
      {
        q: "Who can take the CET Senior Secondary level?",
        a: "Candidates who have passed Class 12 (Senior Secondary) can apply. The 2026 application window closed in July 2026, so the next chance is the next CET notification.",
      },
    ],
  },

  "rssb/cet-graduation": {
    seo: {
      title: "Rajasthan CET Graduation Level Mock Test {year} — Full Pattern",
      description:
        "Rajasthan CET graduation level mock tests: Rajasthan GK, India GK, reasoning, maths, Hindi, English and computer in the real CBT format. Free Rajasthan GK test.",
    },
    description: `The **Common Eligibility Test (CET) — Graduation level** is the gateway to graduate-level jobs under the **Rajasthan Staff Selection Board (RSSB)**. A valid score is needed to sit the main exam of posts such as **Patwari** when they are advertised, so lakhs of graduates take it every cycle.

The 2026 CET Graduation exam is now scheduled for **16 to 18 January 2027**, with two shifts on 16 and 17 January and one morning shift on 18 January. It was earlier fixed for 1 to 3 December 2026 and moved in RSSB's revised calendar of 28 September 2026. About **17 lakh candidates** have applied.

The paper is objective: **150 questions for 300 marks in 3 hours**. Each question has five options, the fifth being for a question you do not want to attempt; a wrong answer costs a third of the marks, and leaving more than 10% of the questions without any option marked can make you ineligible.

**How to prepare:** the extra weeks from the date change are best spent on Rajasthan GK, which carries the most weight, and on a mock every few days with negative marking on. Our [Rajasthan GK](/rajasthan) page is a quick district-wise revision, and the free [Rajasthan GK mock test](${FREE_MOCK}) shows the exam interface with no login.`,
    syllabus: `The detailed syllabus is in the RSSB notification. The usual areas are:

### Rajasthan GK
- History, art, culture, literature, traditions and heritage of Rajasthan
- Geography, polity and economy of Rajasthan
- Rajasthan government schemes and current affairs

### General knowledge
- Indian and world history, geography of India and the world
- Indian constitution and polity, Indian economy
- General science and current affairs

### Reasoning and mathematics
- Verbal and non-verbal reasoning, logical deduction
- Arithmetic: percentage, ratio, averages, profit and loss, interest, time and distance; data interpretation

### Language and computer
- General Hindi and General English
- Computer fundamentals, MS Office and internet basics`,
    faqs: [
      {
        q: "When is the Rajasthan CET Graduation exam in 2026-27?",
        a: "RSSB's revised calendar of 28 September 2026 moved it from 1 to 3 December 2026 to 16 to 18 January 2027. Admit cards are issued online through the SSO portal before the exam.",
      },
      {
        q: "Which posts need the CET graduation level score?",
        a: "Graduate-level RSSB posts such as Patwari need a valid CET graduation score. Each post's own advertisement says whether it uses the graduation or senior secondary level score.",
      },
      {
        q: "How many questions are in the Rajasthan CET graduation paper?",
        a: "150 objective questions for 300 marks in 3 hours. A wrong answer costs a third of the question's marks, so do not guess blindly.",
      },
    ],
  },

  "rssb/teaching-associate": {
    seo: {
      title: "RSSB Teaching Associate Mock Test {year} — Paper I Rajasthan GK",
      description:
        "RSSB Teaching Associate exam practice: Paper I on General Studies of Rajasthan plus subject Paper II. Real exam format, Hindi and English. Free Rajasthan GK mock.",
    },
    description: `**RSSB Teaching Associate** posts are contractual teaching posts in government colleges under the **Rajasthan College Education Society (Raj-CES)**. The **Rajasthan Staff Selection Board (RSSB)** advertised **3,540 posts** in 2026 (Advertisement No. 06/2026), in 32 subjects from Physics and Hindi to Agriculture and Law. It is a non-CET exam, so no CET score is needed.

The written exam has two papers. **Paper I is common to all subjects: General Studies of Rajasthan, 1 hour.** It is scheduled for **17 November 2026, 11:00 AM to 12:00 noon**. **Paper II is on your own subject, 2 hours**, held subject-wise between **7 and 21 December 2026** in morning (10 AM–12 noon) and afternoon (3 PM–5 PM) shifts.

As in other RSSB papers, each question has five options, the fifth being for a question you do not want to attempt, and leaving more than 10% of the questions without any option marked can make you ineligible.

**How to prepare:** Paper I comes first and is the same for everyone, so a strong Rajasthan GK score gives you an edge before Paper II starts. Revise with our [Rajasthan GK](/rajasthan) page and take the free [Rajasthan GK mock test](${FREE_MOCK}) to practise speed in a one-hour paper.`,
    syllabus: `The detailed syllabus for each subject is in the RSSB notification. In outline:

### Paper I — General Studies of Rajasthan
- History, art, culture, literature, traditions and heritage of Rajasthan
- Geography of Rajasthan: physical features, rivers, climate, natural resources
- Polity and administration of Rajasthan
- Economy of Rajasthan and state government schemes
- Current affairs of Rajasthan

### Paper II — Subject concerned
- The subject of the post you applied for, at postgraduate level
- Subjects include Physics, Chemistry, Botany, Zoology, Mathematics, English, Hindi, Sanskrit, Urdu, History, Geography, Political Science, Economics, Sociology, Public Administration, Law, Computer Science, Home Science, Drawing, ABST, Business Administration and agriculture subjects`,
    faqs: [
      {
        q: "When is the RSSB Teaching Associate exam?",
        a: "Paper I (General Studies of Rajasthan) is on 17 November 2026 from 11 AM to 12 noon. Paper II is held subject-wise from 7 to 21 December 2026 in morning and afternoon shifts.",
      },
      {
        q: "How many Teaching Associate posts are there?",
        a: "3,540 contractual posts under the Rajasthan College Education Society, advertised by RSSB in Advertisement No. 06/2026.",
      },
      {
        q: "Is a CET score needed for Teaching Associate?",
        a: "No. It is a non-CET exam: you need only the qualification the advertisement asks for in your subject.",
      },
    ],
  },

  "rpsc/ras": {
    seo: {
      title: "RAS Prelims Mock Test {year} — RPSC Pattern, Rajasthan GK & GS",
      description:
        "RPSC RAS Prelims mock tests: 150 questions, 200 marks, one-third negative marking, Rajasthan GK and General Science in the real exam format. Free Rajasthan GK test.",
    },
    description: `The **RAS/RTS Combined Competitive Exam** of the **Rajasthan Public Service Commission (RPSC)** fills the Rajasthan Administrative Service and other state and subordinate services. The 2026 notification has **607 vacancies: 192 in State Services and 415 in Subordinate Services**. Applications ran from 4 June to 3 July 2026.

The **RAS Prelims 2026 is scheduled for 6 December 2026 (Sunday)**. It is a screening test: you need a graduation degree to apply, and prelims marks only decide who goes on to the Mains; they are not added to the final merit.

**Prelims pattern:** one objective paper on General Knowledge and General Science, **150 questions for 200 marks in 3 hours**. Each question has five options, the fifth being for a question you do not want to attempt. A wrong answer costs **one-third** of the question's marks, and a candidate who leaves more than 10% of the questions without any option marked is disqualified. The **Mains** has four descriptive papers (General Studies I, II and III, and General Hindi and General English) for 800 marks, followed by an interview.

**How to prepare:** Rajasthan history, art and culture and Rajasthan geography carry a large share of the prelims, so revise them alongside Indian polity, economy and science. Our [Rajasthan GK](/rajasthan) page is a quick district-wise refresher, and the free [Rajasthan GK mock test](${FREE_MOCK}) shows the exam interface with no login.`,
    syllabus: `The full syllabus is on the RPSC website. The prelims covers:

### History, art and culture of Rajasthan
- Major landmarks and dynasties, freedom movement and integration of Rajasthan
- Architecture, paintings, handicrafts, fairs, festivals, folk music and dance, language and literature, saints and folk deities

### Indian history
- Ancient, medieval and modern India, the national movement

### Geography
- World and India: physical features, climate, resources
- Rajasthan: physical regions, climate, rivers and lakes, natural vegetation, minerals, population, agriculture

### Indian constitution and polity
- Constitution, Parliament, executive, judiciary, federalism
- Political and administrative system of Rajasthan: Governor, Chief Minister, State Assembly, panchayati raj

### Economy
- Indian economy, budgeting, banking, schemes
- Economy of Rajasthan: agriculture, industry, infrastructure, welfare schemes

### Science, reasoning and current affairs
- General science and technology, environment
- Logical reasoning, mental ability and basic numeracy
- Current events of Rajasthan, India and the world`,
    faqs: [
      {
        q: "When is the RAS Prelims exam in 2026?",
        a: "RPSC has scheduled the RAS Prelims 2026 for 6 December 2026 (Sunday). The admit card is released online at rpsc.rajasthan.gov.in a few days before the exam.",
      },
      {
        q: "How many vacancies are in RAS 2026?",
        a: "607 in total: 192 in State Services and 415 in Subordinate Services.",
      },
      {
        q: "Is there negative marking in RAS Prelims?",
        a: "Yes. A wrong answer costs one-third of the question's marks. Each question also has a fifth option for not attempting it, and leaving more than 10% of the questions without any option marked leads to disqualification.",
      },
      {
        q: "Do RAS Prelims marks count in the final merit?",
        a: "No. The prelims is a screening test. The final merit is made from the Mains and the interview.",
      },
    ],
  },

  // The three pages below were added on 13 November 2026 from FreeJobAlert's Rajasthan page and its sidebar. FreeJobAlert is a
  // third-party summary, so each page tells the reader to confirm the facts on the official site.

  "rpsc/protection-officer": {
    seo: {
      title: "RPSC Protection Officer Mock Test {year} — Free Practice, Paper I GS",
      description:
        "RPSC Protection Officer exam on 15 November 2026: two papers, OMR-based, 12 posts. Free Paper I General Studies mock test with solutions in Hindi and English.",
    },
    description: `The **Rajasthan Public Service Commission (RPSC)** is filling **12 Protection Officer posts** in the Women and Child Development Department of Rajasthan (Advertisement No. 13/Exam/Protection Officer/RPSC/EP-1/2025-26, Protection Officer Competitive Examination 2025).

The written exam is on **15 November 2026**, a Sunday. Both papers are held on the same day in offline, OMR-based mode: **Paper I (General Studies) from 9:00 AM to 12:00 noon** and **Paper II (Social Work / Law) from 2:30 PM to 5:30 PM**. The admit card was released on 12 November 2026 and can be downloaded with your application number and date of birth from the RPSC recruitment portal at recruitment.rajasthan.gov.in. Job-alert sites have not printed the number of questions, the marks or the negative marking for each paper, so read the admit card and the RPSC notice for the exact rules.

**How to prepare in the last days:** Paper I is a general studies paper, so revise Indian history, polity, geography, economy and science, and brush up Rajasthan GK. Paper II needs your social work and law material, which a general mock cannot replace. Use a timed mock to practise marking answers carefully: RPSC papers have five options and a fifth option for a question you do not want to attempt, and leaving too many questions unmarked can cost you the paper, so always mark an option.

Our free [RPSC Protection Officer mock test](/tests/rpsc-protection-officer-free-mock-1) is a 50-question General Studies paper in the real exam interface, with solutions in Hindi and English. The length, split and marking are ours, because RPSC's figures are not public in the sources we checked; Paper II is not covered. Pair it with the free [Rajasthan GK mock test](${FREE_MOCK}).`,
    syllabus: `RPSC publishes the syllabus on rpsc.rajasthan.gov.in; check it there first. The areas to cover are:

### Paper I — General Studies
- Indian history, the freedom struggle, art and culture
- Indian constitution, polity and governance
- Geography of India and the world, and of Rajasthan
- Indian economy, welfare schemes
- General science, environment and static GK
- Rajasthan GK: history, culture, geography, administration

### Paper II — Social Work / Law
- Social work, social welfare and child and women development subjects
- Laws and schemes related to women and children
- Take the exact topic list from the RPSC notice, as job-alert sites do not give it`,
    faqs: [
      {
        q: "When is the RPSC Protection Officer exam?",
        a: "On 15 November 2026. Paper I (General Studies) is from 9:00 AM to 12:00 noon and Paper II (Social Work/Law) from 2:30 PM to 5:30 PM, both on the same day. Confirm timings on your admit card.",
      },
      {
        q: "How many Protection Officer posts are there?",
        a: "12 posts in the Women and Child Development Department, Rajasthan, under RPSC Advertisement No. 13/Exam/Protection Officer/RPSC/EP-1/2025-26.",
      },
      {
        q: "Is the RPSC Protection Officer exam online or offline?",
        a: "Offline. It is OMR-based, so practise filling the sheet carefully; our mock uses the on-screen exam interface for the questions themselves.",
      },
      {
        q: "Does the free mock cover both papers?",
        a: "No. It is a 50-question General Studies paper in the style of Paper I. Paper II (Social Work / Law) is not covered, and its length and marking are ours, not RPSC's.",
      },
    ],
  },

  "rssb/patwari": {
    seo: {
      title: "Rajasthan Patwari Mock Test {year} — RSSB Pattern & Free Test",
      description:
        "Rajasthan Patwari mock test in the RSSB pattern: Rajasthan GK, GK, Hindi and English, reasoning, maths and computer. Free test with Hindi and English solutions.",
    },
    description: `**Patwari** is a revenue post in Rajasthan, and the **Rajasthan Staff Selection Board (RSSB)** recruits it through a written test. Graduates apply, and the post needs a valid score in the **CET Graduation level** (see our [CET Graduation page](/rssb/cet-graduation)): the CET lists Patwari among its posts. The CET Graduation exam is on 16 to 18 January 2027, so the Patwari recruitment itself will come after that.

**As of 4 November 2026 RSSB had not announced a 2026 Patwari exam date**, and the number of posts is not yet known. The last exam, reported by news sites, was held on 17 August 2025 for 3,705 posts. Preparation for the next cycle can start now, because most of the paper is Rajasthan GK and general knowledge.

**The paper pattern** reported for RSSB Patwari is **150 questions for 300 marks in 3 hours**, offline and OMR-based, with five options per question (the fifth for a question you do not want to attempt), 2 marks for each correct answer and **one-third of the marks deducted for each wrong answer**. The split is: General Science, History, Polity and Geography of India with GK and current affairs 38 questions, Rajasthan history, culture, geography and polity 30, General Hindi and English 22, reasoning, mental ability and basic numeracy 45, and General Computer 15.

**How to prepare:** Rajasthan GK is 20% of the paper and the reasoning-and-maths block is 30%, so these two decide the score. Revise district by district with our [Rajasthan GK](/rajasthan) page. Our free [Rajasthan Patwari mock test](/tests/rssb-patwari-free-mock-1) follows this split at one third of the length (50 questions in 60 minutes, same marking), with solutions in Hindi and English. Check the pattern against the RSSB advertisement when it is out.`,
    syllabus: `The detailed syllabus is in the RSSB notification. The reported areas are:

### General Science, History, Polity and Geography of India; GK and current affairs
- Indian history, polity and constitution, geography of India and the world
- General science, economy and general knowledge

### Rajasthan GK
- History, administration, culture, festivals and the freedom movement of Rajasthan
- Geography, rivers and lakes, districts, economy and schemes of Rajasthan

### General Hindi and General English
- Hindi: sandhi, samas, synonyms, antonyms, idioms and proverbs
- English: idioms, synonyms and antonyms, error correction and comprehension

### Reasoning, mental ability and basic numeracy
- Series, coding-decoding, blood relations, seating arrangement and direction sense
- Averages, percentage, simple and compound interest, profit and loss

### General Computer
- Hardware, operating systems, MS Office and the internet`,
    pattern: {
      sections: [
        { name: "General Science, History, Polity, Geography of India; GK & current affairs", questions: 38, marks: 76 },
        { name: "Rajasthan history, culture, geography & polity", questions: 30, marks: 60 },
        { name: "General Hindi & General English", questions: 22, marks: 44 },
        { name: "Reasoning, mental ability & basic numeracy", questions: 45, marks: 90 },
        { name: "General Computer", questions: 15, marks: 30 },
      ],
      durationMin: 180,
      negativeMarking: "One-third of the question's marks per wrong answer",
      note: "Offline OMR paper with five options (the fifth is for not attempting) and 10 extra minutes to fill the OMR sheet. Reported pattern; no 2026 exam date or notice yet, so confirm it in the RSSB advertisement.",
    },
    faqs: [
      {
        q: "When is the Rajasthan Patwari exam 2026?",
        a: "RSSB had not announced a date when this page was written (4 November 2026). Patwari needs the CET Graduation score, and that exam is on 16 to 18 January 2027, so expect the Patwari notice after it.",
      },
      {
        q: "What is the Rajasthan Patwari exam pattern?",
        a: "150 questions for 300 marks in 3 hours, OMR-based, with one-third negative marking. 30 questions are on Rajasthan GK, 45 on reasoning and maths, 38 on general knowledge, 22 on Hindi and English and 15 on computer. Check the new advertisement for any change.",
      },
      {
        q: "Do I need the CET to apply for Patwari?",
        a: "Yes. The graduation-level CET lists Patwari among its posts, so a valid CET Graduation score is needed to apply. Read the advertisement for the exact eligibility.",
      },
      {
        q: "Does the free Patwari mock have 150 questions?",
        a: "No. It has 50 questions in 60 minutes in the same section split and marking, so you can try the pattern quickly. The real paper is longer and offline.",
      },
    ],
  },

  "curaj/lower-division-clerk": {
    seo: {
      title: "CURAJ Lower Division Clerk Mock Test {year} — Free Practice",
      description:
        "Central University of Rajasthan Lower Division Clerk recruitment 2026: eligibility, last date 10 December and a free mock test on GK, reasoning, maths, English, computer.",
    },
    description: `The **Central University of Rajasthan (CURAJ)**, at Bandarsindri in Ajmer district, advertised non-teaching posts on **22 October 2026** (Advertisement No. CURAJ/R./F.179/Rectt./2026/7314). One of them is **Lower Division Clerk (LDC), a single post** (Post Code C-01, EWS category) at **Pay Level 2**.

You need **any bachelor's degree** and a typing speed of **35 words per minute in English or 30 in Hindi**. The age limit is 30 years as on the last date. The fee is Rs 1,500 for UR, EWS and OBC candidates and Rs 750 for SC, ST and PwBD candidates. **Apply online by 10 December 2026, 11:59 PM**, and send the hard copy so that it reaches the university by 15 December 2026, 5:00 PM (20 December for remote regions). The official website is curaj.ac.in.

**Is there an exam?** The notice says only that the university "may conduct a written test, trade test, computer test or any other test as per the requirement of the post". It does not give a pattern, a date, marks or negative marking, so **a written test is not confirmed**. If one is held, a clerk-level paper normally covers general awareness, reasoning, maths, English and computer.

**Our mock:** the free [CURAJ Lower Division Clerk mock test](/tests/curaj-lower-division-clerk-free-mock-1) has 50 questions in 50 minutes on those five subjects, with solutions in Hindi and English. The subjects, length and marking are ours, since the university has not published them, and typing is not covered. Confirm everything in the notice on curaj.ac.in.`,
    syllabus: `CURAJ has not published a syllabus for the Lower Division Clerk post. If a written or computer test is held, a clerk-level paper usually covers:

### General awareness
- Indian history, polity, geography, economy and general science
- Static GK; Rajasthan GK and current affairs help in a Rajasthan university

### Reasoning and maths
- Series, analogy, coding-decoding, blood relations and direction sense
- Percentage, ratio, profit and loss, simple interest, time and work

### English
- Grammar, vocabulary, error spotting and comprehension

### Computer and typing
- Computer basics, MS Office and the internet
- Typing: 35 wpm in English or 30 wpm in Hindi is an eligibility condition`,
    faqs: [
      {
        q: "What is the last date for the CURAJ Lower Division Clerk post?",
        a: "Online applications close on 10 December 2026 at 11:59 PM. The hard copy must reach the university by 15 December 2026, 5:00 PM, or 20 December 2026 for remote regions.",
      },
      {
        q: "Is there a written exam for CURAJ Lower Division Clerk?",
        a: "Not confirmed. The notice says the university may conduct a written test, trade test, computer test or any other test. There is no pattern or date yet, so watch curaj.ac.in.",
      },
      {
        q: "How many Lower Division Clerk posts are there?",
        a: "One post (Post Code C-01, EWS category) at Pay Level 2, as shown in the notice dated 22 October 2026.",
      },
      {
        q: "What qualification and typing speed do I need?",
        a: "Any bachelor's degree, and typing speed of 35 words per minute in English or 30 words per minute in Hindi. The age limit is 30 years as on the last date.",
      },
    ],
  },
};
