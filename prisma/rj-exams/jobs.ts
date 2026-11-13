// Free practice mocks and exam pages for the other recruitments on FreeJobAlert's Rajasthan page (13 November 2026), one per
// post family. Almost none of these notices publishes a paper, so each mock is a practice paper in the subjects the post
// would need, drawn from the banks the other series already hold, and each page and test says that the subjects, length and
// marking are ours. Facts about the posts (vacancies, last dates, selection) are only what the job-alert page printed; every
// page tells the reader to confirm them on the official notice. Excluded on purpose: the CURAJ Vice-Chancellor post (a search
// committee appointment) and the MLSU visiting faculty walk-in (a subject lecture), neither of which an MCQ paper practises.

import type { TestDef } from "../patwari/types";
import type { ExamPage } from "../exam-pages/types";
import { rj } from "../../src/sites/rj";
import { claim, computer, english, gk, mock, quant, reasoning, subject, topic, GENERAL_POOL, type Pick } from "./pool";

type JobSection = { name: string; nameHi: string; count: number; pick: Pick; covers: string };

export type JobSpec = {
  body: { slug: string; name: string; nameHi: string };
  exam: { slug: string; name: string; nameHi: string };
  /** Who is hiring, as the page names them. */
  org: string;
  /** The posts, as FreeJobAlert lists them. */
  posts: string;
  vacancies: string;
  lastDate: string;
  /** What the job-alert page says about selection, in one sentence. */
  selection: string;
  /** Whether a written test is part of it, in one sentence. */
  examStatus: string;
  /** One or two sentences of context that make the page specific. */
  about: string;
  level: "easy" | "exam" | "hard";
  minutes: number;
  sections: JobSection[];
  /** Short subject list for the search snippet. */
  snippet: string;
  /** Title of the page for Google, with {year}. */
  seoTitle: string;
};

const T = topic;

export const RJ_JOBS: JobSpec[] = [
  {
    body: { slug: "curaj", name: "Central University of Rajasthan", nameHi: "राजस्थान केंद्रीय विश्वविद्यालय" },
    exam: { slug: "office-assistant", name: "CURAJ Incubation Foundation Office Assistant", nameHi: "कुराज इन्क्यूबेशन फाउंडेशन ऑफिस असिस्टेंट" },
    org: "CURAJ Incubation Foundation",
    posts: "Project Coordinator, Project Assistant and Office Assistant",
    vacancies: "3 posts",
    lastDate: "15 November 2026",
    selection: "The job-alert page says a written test, skill test, presentation or interview may be used, without giving a pattern.",
    examStatus: "Not confirmed. A written test may be one of the tools, but no pattern, date or marks are published.",
    about: "The foundation works with the Central University of Rajasthan at Bandarsindri in Ajmer district. The Office Assistant post is a clerical role, so a clerk-level paper is the nearest thing to practise.",
    level: "easy",
    minutes: 30,
    snippet: "GK, reasoning, maths, English and computer",
    seoTitle: "CURAJ Incubation Foundation Office Assistant Mock Test {year}",
    sections: [
      { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 8, pick: gk, covers: "Indian history, polity, geography, economy, general science and static GK" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 7, pick: reasoning, covers: "Series, analogy, coding-decoding, blood relations and direction sense" },
      { name: "Maths", nameHi: "गणित", count: 5, pick: quant, covers: "Percentage, ratio, profit and loss, simple interest and time and work" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 5, pick: english, covers: "Grammar, vocabulary, error spotting and comprehension" },
      { name: "Computer", nameHi: "कंप्यूटर", count: 5, pick: computer, covers: "Computer basics, MS Office and the internet" },
    ],
  },
  {
    body: { slug: "curaj", name: "Central University of Rajasthan", nameHi: "राजस्थान केंद्रीय विश्वविद्यालय" },
    exam: { slug: "sports-coach", name: "CURAJ Sports Coach", nameHi: "कुराज स्पोर्ट्स कोच" },
    org: "the Central University of Rajasthan (CURAJ)",
    posts: "Sports Coach",
    vacancies: "9 posts",
    lastDate: "21 November 2026",
    selection: "The job-alert page lists interview as the only selection step.",
    examStatus: "No. Selection is by interview, so there is no paper to practise; the mock below is general-awareness practice only.",
    about: "Nine coach posts is the largest count among CURAJ's entries on the job-alert page. Sport-specific skill is judged at the interview; a general paper cannot test it.",
    level: "easy",
    minutes: 25,
    snippet: "general awareness, reasoning and English",
    seoTitle: "CURAJ Sports Coach Recruitment {year}: Interview and Free Practice",
    sections: [
      { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 15, pick: gk, covers: "Indian history, polity, geography, economy, general science and static GK" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 5, pick: reasoning, covers: "Series, analogy and coding-decoding" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 5, pick: english, covers: "Grammar, vocabulary and comprehension" },
    ],
  },
  {
    body: { slug: "curaj", name: "Central University of Rajasthan", nameHi: "राजस्थान केंद्रीय विश्वविद्यालय" },
    exam: { slug: "jrf-project-associate", name: "CURAJ JRF / Project Associate-I", nameHi: "कुराज जेआरएफ / प्रोजेक्ट एसोसिएट-I" },
    org: "the Central University of Rajasthan (CURAJ)",
    posts: "Junior Research Fellow / Project Associate-I",
    vacancies: "1 post",
    lastDate: "30 November 2026",
    selection: "We did not read the selection process; research-project posts like this are usually filled by an interview or a presentation.",
    examStatus: "Not confirmed. Project posts are normally filled by interview, so this mock is research-aptitude practice, not a known paper.",
    about: "This is a research-project post, so the eligibility turns on the subject and the project, which the notice lists.",
    level: "exam",
    minutes: 45,
    snippet: "general science, English, reasoning and statistics",
    seoTitle: "CURAJ JRF Project Associate Mock Test {year} — Free Practice",
    sections: [
      { name: "General Science", nameHi: "सामान्य विज्ञान", count: 10, pick: T("general-studies", "general-science"), covers: "Physics, chemistry and biology at general-awareness level" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: subject("english"), covers: "Comprehension, vocabulary and grammar" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Series, puzzles, ranking and logical reasoning" },
      { name: "Statistics & Probability", nameHi: "सांख्यिकी एवं प्रायिकता", count: 10, pick: T("mathematics", "statistics-probability"), covers: "Mean, median, probability, distributions and data handling" },
    ],
  },
  {
    body: { slug: "iiit-kota", name: "IIIT Kota", nameHi: "आईआईआईटी कोटा" },
    exam: { slug: "security-supervisor", name: "IIIT Kota Security Supervisor", nameHi: "आईआईआईटी कोटा सिक्योरिटी सुपरवाइज़र" },
    org: "IIIT Kota",
    posts: "Security Supervisor, for retired defence personnel",
    vacancies: "3 posts",
    lastDate: "4 December 2026",
    selection: "The job-alert page says candidates are shortlisted and then interviewed, and a selection test may be added.",
    examStatus: "Not confirmed. Interview after shortlisting; a selection test may be added, with no pattern published.",
    about: "The posts are meant for retired defence personnel, so service rank and experience weigh in the shortlist.",
    level: "easy",
    minutes: 30,
    snippet: "defence and security awareness, GK, reasoning, English",
    seoTitle: "IIIT Kota Security Supervisor Recruitment {year} and Free Mock Test",
    sections: [
      { name: "Defence & Security Awareness", nameHi: "रक्षा एवं सुरक्षा जागरूकता", count: 8, pick: subject("defence"), covers: "Armed forces, military history and defence technology" },
      { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 8, pick: gk, covers: "Indian history, polity, geography and static GK" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 7, pick: reasoning, covers: "Series, direction sense and logical reasoning" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 7, pick: english, covers: "Grammar, vocabulary and comprehension" },
    ],
  },
  {
    body: { slug: "rrc-nwr", name: "RRC North Western Railway", nameHi: "आरआरसी उत्तर पश्चिम रेलवे" },
    exam: { slug: "act-apprentice", name: "RRC NWR Act Apprentice", nameHi: "आरआरसी एनडब्ल्यूआर एक्ट अप्रेंटिस" },
    org: "RRC North Western Railway (RRC Jaipur)",
    posts: "Act Apprentice",
    vacancies: "2,008 slots",
    lastDate: "22 November 2026",
    selection: "A merit list from the Class 10 and ITI marks, then document verification and a medical exam.",
    examStatus: "No. There is no written exam, so this mock is Class 10 level practice in maths, science and reasoning only.",
    about: "Apprentices are trained on a contract under the Apprentices Act in the railway workshops and divisional offices; the notice lists the trades, the units and the eligibility.",
    level: "easy",
    minutes: 40,
    snippet: "maths, science, reasoning and GK",
    seoTitle: "RRC NWR Act Apprentice {year}: No Exam, Merit List, Free Practice",
    sections: [
      { name: "Maths", nameHi: "गणित", count: 12, pick: quant, covers: "Percentage, ratio, average, profit and loss, time and work" },
      { name: "General Science", nameHi: "सामान्य विज्ञान", count: 12, pick: T("general-studies", "general-science"), covers: "Class 10 level physics, chemistry and biology" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 8, pick: reasoning, covers: "Series, analogy and coding-decoding" },
      { name: "General Knowledge", nameHi: "सामान्य ज्ञान", count: 8, pick: T("general-studies", "static-gk", "indian-geography"), covers: "Static GK and Indian geography" },
    ],
  },
  {
    body: { slug: "pm-shri-kv-ajmer", name: "PM SHRI Kendriya Vidyalaya No. 1 Ajmer", nameHi: "पीएम श्री केंद्रीय विद्यालय नं. 1 अजमेर" },
    exam: { slug: "teacher", name: "PM SHRI KV Ajmer TGT / Primary Teacher", nameHi: "पीएम श्री केवी अजमेर टीजीटी / प्राथमिक शिक्षक" },
    org: "PM SHRI Kendriya Vidyalaya No. 1, Ajmer",
    posts: "TGT (English), Primary Teacher and Vocational Instructor",
    vacancies: "3 posts",
    lastDate: "17 November 2026 (walk-in)",
    selection: "A walk-in interview for part-time contract posts, as the job-alert page lists.",
    examStatus: "No. Selection is a walk-in interview, so this mock is teaching-aptitude practice (child development, learning, inclusive education, English), not a known paper.",
    about: "Contract teachers at Kendriya Vidyalayas are taken on for the session; bring your documents to the interview and read the notice for the timing.",
    level: "exam",
    minutes: 45,
    snippet: "child development, learning theories, inclusive education, English",
    seoTitle: "PM SHRI KV Ajmer Teacher Walk-in {year}: Free Practice Mock Test",
    sections: [
      { name: "Child Development", nameHi: "बाल विकास", count: 10, pick: T("pedagogy", "child-development"), covers: "Stages of development, theories and individual differences" },
      { name: "Learning & Teaching", nameHi: "अधिगम एवं शिक्षण", count: 10, pick: T("pedagogy", "learning-theories"), covers: "Learning theories, motivation and teaching methods" },
      { name: "Inclusive Education", nameHi: "समावेशी शिक्षा", count: 5, pick: T("pedagogy", "inclusive-education"), covers: "Children with special needs, RTE and inclusion" },
      { name: "Language Pedagogy", nameHi: "भाषा शिक्षण", count: 5, pick: T("pedagogy", "language-pedagogy"), covers: "Teaching of language skills" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: english, covers: "Grammar, vocabulary, error spotting and comprehension" },
    ],
  },
  {
    body: { slug: "esic-rajasthan", name: "ESIC Rajasthan", nameHi: "ईएसआईसी राजस्थान" },
    exam: { slug: "junior-engineer", name: "ESIC Rajasthan Junior / Assistant Engineer (Retired)", nameHi: "ईएसआईसी राजस्थान जूनियर / असिस्टेंट इंजीनियर (सेवानिवृत्त)" },
    org: "ESIC Rajasthan (Jaipur)",
    posts: "Junior Engineer and Assistant Engineer, for retired engineers",
    vacancies: "6 posts",
    lastDate: "30 November 2026",
    selection: "Screening and interview, on contract, as the job-alert page lists.",
    examStatus: "No. Screening and interview, so there is no paper; the mock below is electrical-engineering practice only, because that is the engineering bank we hold (civil is not covered).",
    about: "These are contract posts for retired engineers, so past service and the branch listed in the notice decide who is shortlisted.",
    level: "exam",
    minutes: 45,
    snippet: "electrical circuits, machines, power systems, measurements",
    seoTitle: "ESIC Rajasthan Junior Engineer {year}: Interview and Free Mock Test",
    sections: [
      { name: "Circuits", nameHi: "परिपथ", count: 10, pick: T("electrical-engineering", "circuits"), covers: "Network theorems, AC and DC circuits" },
      { name: "Machines", nameHi: "मशीनें", count: 10, pick: T("electrical-engineering", "machines"), covers: "Transformers, DC and AC machines" },
      { name: "Power Systems", nameHi: "शक्ति प्रणाली", count: 10, pick: T("electrical-engineering", "power-systems"), covers: "Generation, transmission, distribution and protection" },
      { name: "Measurements & Safety", nameHi: "मापन एवं सुरक्षा", count: 10, pick: T("electrical-engineering", "measurements-safety"), covers: "Instruments, measurement and electrical safety" },
    ],
  },
  {
    body: { slug: "rites", name: "RITES", nameHi: "राइट्स" },
    exam: { slug: "assistant-manager", name: "RITES Assistant Manager / Manager", nameHi: "राइट्स असिस्टेंट मैनेजर / मैनेजर" },
    org: "RITES",
    posts: "Assistant Manager, Manager and other posts",
    vacancies: "10 posts",
    lastDate: "about 19 November 2026",
    selection: "The job-alert page states no selection process; applications go by email and the posts are on contract.",
    examStatus: "Not stated. No selection process is given, so this mock is management-aptitude practice, not a known paper.",
    about: "Ten contract posts are listed; the exact branches and the email address are in the notice, so read it before you apply.",
    level: "exam",
    minutes: 45,
    snippet: "economy and business awareness, reasoning, maths, English",
    seoTitle: "RITES Assistant Manager Rajasthan {year}: Free Aptitude Mock Test",
    sections: [
      { name: "Economy & Business Awareness", nameHi: "अर्थव्यवस्था एवं व्यवसाय जागरूकता", count: 10, pick: T("general-studies", "indian-economy"), covers: "Indian economy, budget, banking and business basics" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Puzzles, series, syllogism and logical reasoning" },
      { name: "Quantitative Aptitude", nameHi: "संख्यात्मक अभिक्षमता", count: 10, pick: quant, covers: "Percentage, ratio, interest, time and work, averages" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: english, covers: "Grammar, vocabulary and comprehension" },
    ],
  },
  {
    body: { slug: "aiims-jodhpur", name: "AIIMS Jodhpur", nameHi: "एम्स जोधपुर" },
    exam: { slug: "project-nurse", name: "AIIMS Jodhpur Project Nurse III", nameHi: "एम्स जोधपुर प्रोजेक्ट नर्स III" },
    org: "AIIMS Jodhpur",
    posts: "Project Nurse III",
    vacancies: "1 post",
    lastDate: "16 November 2026",
    selection: "We did not read the selection process; project posts at AIIMS are usually filled by interview or a walk-in.",
    examStatus: "Not confirmed. This is a project post, normally filled by interview, so the nursing mock is subject practice and not a known paper.",
    about: "Project nurses work on a funded research project, so the qualifications and the project are in the notice.",
    level: "exam",
    minutes: 45,
    snippet: "nursing fundamentals, medical-surgical, community health, pharmacology",
    seoTitle: "AIIMS Jodhpur Project Nurse III {year}: Free Nursing Mock Test",
    sections: [
      { name: "Fundamentals of Nursing", nameHi: "नर्सिंग के मूल सिद्धांत", count: 10, pick: T("nursing", "fundamentals"), covers: "Nursing procedures, infection control and basic care" },
      { name: "Medical-Surgical Nursing", nameHi: "चिकित्सा-शल्य नर्सिंग", count: 15, pick: T("nursing", "medical-surgical"), covers: "Care of adult patients with medical and surgical conditions" },
      { name: "Community Health", nameHi: "सामुदायिक स्वास्थ्य", count: 5, pick: T("nursing", "community-health"), covers: "Public health, immunisation and national programmes" },
      { name: "Anatomy & Physiology", nameHi: "शरीर रचना एवं क्रिया विज्ञान", count: 5, pick: T("nursing", "anatomy-physiology"), covers: "Body systems and their functions" },
      { name: "Pharmacology", nameHi: "औषध विज्ञान", count: 5, pick: T("nursing", "pharmacology"), covers: "Drug classes, doses and nursing responsibilities" },
    ],
  },
  {
    body: { slug: "aiims-jodhpur", name: "AIIMS Jodhpur", nameHi: "एम्स जोधपुर" },
    exam: { slug: "research-scientist", name: "AIIMS Jodhpur Research Assistant / Scientist", nameHi: "एम्स जोधपुर रिसर्च असिस्टेंट / साइंटिस्ट" },
    org: "AIIMS Jodhpur",
    posts: "Research Assistant, Scientist C and Project Research Scientist-III",
    vacancies: "3 posts, with last dates on 13, 20 and 21 November 2026",
    lastDate: "13, 20 and 21 November 2026 (by post)",
    selection: "We did not read the selection process; research and scientist project posts at AIIMS are usually filled by interview.",
    examStatus: "Not confirmed. Research-project posts are normally filled by interview, so this life-science and statistics mock is practice only.",
    about: "Each of the three posts has its own last date and its own project, so match your qualification to the one you want before you apply.",
    level: "exam",
    minutes: 45,
    snippet: "physiology, cell biology, genetics and biostatistics",
    seoTitle: "AIIMS Jodhpur Research Scientist {year}: Free Life Science Mock Test",
    sections: [
      { name: "Human Physiology", nameHi: "मानव शरीर क्रिया विज्ञान", count: 10, pick: T("biology", "human-physiology"), covers: "Body systems, hormones and homeostasis" },
      { name: "Cell Biology", nameHi: "कोशिका विज्ञान", count: 10, pick: T("biology", "cell-biology"), covers: "Cell structure, division and biomolecules" },
      { name: "Genetics", nameHi: "आनुवंशिकी", count: 10, pick: T("biology", "genetics-evolution"), covers: "Inheritance, molecular genetics and evolution" },
      { name: "Biostatistics", nameHi: "जैव सांख्यिकी", count: 10, pick: T("mathematics", "statistics-probability"), covers: "Averages, probability, distributions and data handling" },
    ],
  },
  {
    body: { slug: "aiims-jodhpur", name: "AIIMS Jodhpur", nameHi: "एम्स जोधपुर" },
    exam: { slug: "field-investigator", name: "AIIMS Jodhpur Field Investigator", nameHi: "एम्स जोधपुर फील्ड इन्वेस्टिगेटर" },
    org: "AIIMS Jodhpur",
    posts: "Field Investigator",
    vacancies: "2 posts",
    lastDate: "25 November 2026",
    selection: "We did not read the selection process; field-investigator project posts are usually filled by interview.",
    examStatus: "Not confirmed. Project posts are normally filled by interview, so this mock is general practice, not a known paper.",
    about: "Field investigators collect survey data for a study, so basic statistics, English and computer skills matter beyond the interview.",
    level: "easy",
    minutes: 30,
    snippet: "statistics, GK, English and computer",
    seoTitle: "AIIMS Jodhpur Field Investigator {year}: Free Practice Mock Test",
    sections: [
      { name: "Statistics", nameHi: "सांख्यिकी", count: 8, pick: T("economics", "statistics"), covers: "Averages, dispersion, correlation and data presentation" },
      { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 8, pick: gk, covers: "Indian history, polity, geography and general science" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 7, pick: english, covers: "Grammar, vocabulary and comprehension" },
      { name: "Computer", nameHi: "कंप्यूटर", count: 7, pick: computer, covers: "MS Office, internet and computer basics" },
    ],
  },
  {
    body: { slug: "mlsu", name: "Mohanlal Sukhadia University", nameHi: "मोहनलाल सुखाड़िया विश्वविद्यालय" },
    exam: { slug: "project-associate", name: "MLSU Project Associate / Project Assistant", nameHi: "एमएलएसयू प्रोजेक्ट एसोसिएट / प्रोजेक्ट असिस्टेंट" },
    org: "Mohanlal Sukhadia University (MLSU), Udaipur",
    posts: "Project Associate and Project Assistant",
    vacancies: "2 posts",
    lastDate: "13 November 2026",
    selection: "We did not read the selection process; university project posts are usually filled by interview.",
    examStatus: "Not confirmed. Project posts are normally filled by interview, so this science-aptitude mock is practice only.",
    about: "These are project-linked posts, so the project and the subject of your degree are in the notice. The last date is 13 November 2026.",
    level: "exam",
    minutes: 40,
    snippet: "science, reasoning, English and computer",
    seoTitle: "MLSU Project Associate Recruitment {year}: Free Aptitude Mock Test",
    sections: [
      { name: "General Science", nameHi: "सामान्य विज्ञान", count: 10, pick: T("general-studies", "general-science"), covers: "Physics, chemistry and biology" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Series, coding-decoding and logical reasoning" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: english, covers: "Grammar, vocabulary and comprehension" },
      { name: "Computer", nameHi: "कंप्यूटर", count: 10, pick: computer, covers: "MS Office, internet and computer basics" },
    ],
  },
  {
    body: { slug: "university-of-rajasthan", name: "University of Rajasthan", nameHi: "राजस्थान विश्वविद्यालय" },
    exam: { slug: "project-assistant", name: "University of Rajasthan Post Doctoral Fellow / Project Assistant", nameHi: "राजस्थान विश्वविद्यालय पोस्ट डॉक्टरल फेलो / प्रोजेक्ट असिस्टेंट" },
    org: "the University of Rajasthan, Jaipur",
    posts: "Post Doctoral Fellow and Project Assistant",
    vacancies: "4 posts",
    lastDate: "13 November 2026",
    selection: "We did not read the selection process; research-fellow and project-assistant posts are usually filled by interview.",
    examStatus: "Not confirmed. Fellow and project posts are normally filled by interview, so this research-aptitude mock is practice only.",
    about: "A post-doctoral fellowship and a project-assistant post sit at very different levels; check the project, the qualification and the stipend in the notice.",
    level: "exam",
    minutes: 40,
    snippet: "research aptitude, English, reasoning and science",
    seoTitle: "University of Rajasthan Project Assistant {year}: Free Mock Test",
    sections: [
      { name: "English & Comprehension", nameHi: "अंग्रेज़ी एवं गद्यांश", count: 15, pick: subject("english"), covers: "Comprehension, cloze test, grammar and vocabulary" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Series, ranking and logical reasoning" },
      { name: "General Science", nameHi: "सामान्य विज्ञान", count: 10, pick: T("general-studies", "general-science"), covers: "Physics, chemistry and biology" },
      { name: "Statistics & Probability", nameHi: "सांख्यिकी एवं प्रायिकता", count: 5, pick: T("mathematics", "statistics-probability"), covers: "Data handling and probability" },
    ],
  },
  {
    body: { slug: "cbi-suaps", name: "CBI-SUAPS", nameHi: "सीबीआई-एसयूएपीएस" },
    exam: { slug: "office-assistant", name: "CBI-SUAPS Office Assistant", nameHi: "सीबीआई-एसयूएपीएस ऑफिस असिस्टेंट" },
    org: "CBI-SUAPS",
    posts: "Office Assistant",
    vacancies: "1 post",
    lastDate: "17 November 2026",
    selection: "We did not read the selection process; office-assistant posts of this kind are often filled by an interview or a skill test.",
    examStatus: "Not confirmed. No pattern is published, so this clerical-aptitude mock is practice only.",
    about: "An office assistant handles records, correspondence and computer work, so typing and MS Office skills may matter along with the written round, if any.",
    level: "easy",
    minutes: 30,
    snippet: "MS Office, English, maths and GK",
    seoTitle: "CBI-SUAPS Office Assistant {year}: Free Clerical Mock Test",
    sections: [
      { name: "Computer & MS Office", nameHi: "कंप्यूटर एवं एमएस ऑफिस", count: 10, pick: T("computer", "ms-office", "fundamentals", "shortcuts"), covers: "MS Word, Excel, shortcuts and computer basics" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 8, pick: english, covers: "Grammar, vocabulary and comprehension" },
      { name: "Maths", nameHi: "गणित", count: 6, pick: quant, covers: "Percentage, ratio and simple interest" },
      { name: "General Awareness", nameHi: "सामान्य जागरूकता", count: 6, pick: gk, covers: "Indian history, polity, geography and static GK" },
    ],
  },
  {
    body: { slug: "hll", name: "HLL", nameHi: "एचएलएल" },
    exam: { slug: "operations-manager", name: "HLL Operations Manager (Biomedical)", nameHi: "एचएलएल ऑपरेशंस मैनेजर (बायोमेडिकल)" },
    org: "HLL",
    posts: "Operations Manager (Biomedical)",
    vacancies: "1 post",
    lastDate: "18 November 2026",
    selection: "We did not read the selection process; a manager-level post like this is normally filled by interview.",
    examStatus: "Not confirmed. Manager posts are normally filled by interview, so this management-aptitude mock is practice only and does not cover biomedical subjects.",
    about: "The biomedical qualification and experience that the post needs are in the notice; this mock covers only the general management and aptitude side.",
    level: "exam",
    minutes: 45,
    snippet: "business studies, finance, reasoning and English",
    seoTitle: "HLL Operations Manager Biomedical {year}: Free Aptitude Mock Test",
    sections: [
      { name: "Business Studies", nameHi: "व्यवसाय अध्ययन", count: 10, pick: T("commerce", "business-studies"), covers: "Management principles, marketing and organisation" },
      { name: "Finance & Markets", nameHi: "वित्त एवं बाज़ार", count: 10, pick: T("commerce", "finance-markets", "accountancy"), covers: "Financial markets and basic accounting" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Puzzles, series and logical reasoning" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: english, covers: "Grammar, vocabulary and comprehension" },
    ],
  },
  {
    body: { slug: "iit-jodhpur", name: "IIT Jodhpur", nameHi: "आईआईटी जोधपुर" },
    exam: { slug: "registrar", name: "IIT Jodhpur Registrar", nameHi: "आईआईटी जोधपुर रजिस्ट्रार" },
    org: "IIT Jodhpur",
    posts: "Registrar",
    vacancies: "1 post",
    lastDate: "18 November 2026",
    selection: "We did not read the selection process; a senior administrative post like this is normally filled by a selection committee interview.",
    examStatus: "No known paper. Registrar posts go through a selection committee, so this administration-aptitude mock is practice only.",
    about: "The Registrar is the senior administrative officer of an institute; experience in academic administration weighs more than any test.",
    level: "hard",
    minutes: 45,
    snippet: "polity, economy, public administration and English",
    seoTitle: "IIT Jodhpur Registrar Recruitment {year}: Free Administration Mock",
    sections: [
      { name: "Indian Polity", nameHi: "भारतीय राजव्यवस्था", count: 10, pick: T("general-studies", "indian-polity"), covers: "Constitution, institutions and governance" },
      { name: "Indian Economy", nameHi: "भारतीय अर्थव्यवस्था", count: 10, pick: T("general-studies", "indian-economy"), covers: "Economy, budget and policy" },
      { name: "Government & Administration", nameHi: "शासन एवं प्रशासन", count: 10, pick: T("political-science", "indian-government", "public-administration"), covers: "Indian government and public administration" },
      { name: "English", nameHi: "अंग्रेज़ी", count: 10, pick: english, covers: "Grammar, vocabulary and comprehension" },
    ],
  },
  {
    body: { slug: "iim-udaipur", name: "IIM Udaipur", nameHi: "आईआईएम उदयपुर" },
    exam: { slug: "senior-associate-programs", name: "IIM Udaipur Senior Associate, Programs", nameHi: "आईआईएम उदयपुर सीनियर एसोसिएट, प्रोग्राम्स" },
    org: "IIM Udaipur",
    posts: "Senior Associate, Programs",
    vacancies: "1 post",
    lastDate: "26 November 2026",
    selection: "We did not read the selection process; a programme-office post like this is normally filled by interview.",
    examStatus: "Not confirmed. No paper is published, so this English-and-aptitude mock is practice only.",
    about: "A programmes associate coordinates courses and participants, so written English, reasoning and computer skills are the day-to-day tools.",
    level: "exam",
    minutes: 40,
    snippet: "English, reasoning, maths and computer",
    seoTitle: "IIM Udaipur Senior Associate Programs {year}: Free Mock Test",
    sections: [
      { name: "English", nameHi: "अंग्रेज़ी", count: 12, pick: english, covers: "Comprehension, grammar, vocabulary and sentence ordering" },
      { name: "Reasoning", nameHi: "तर्कशक्ति", count: 10, pick: reasoning, covers: "Puzzles, series and logical reasoning" },
      { name: "Quantitative Aptitude", nameHi: "संख्यात्मक अभिक्षमता", count: 10, pick: quant, covers: "Percentage, ratio, interest and data handling" },
      { name: "Computer", nameHi: "कंप्यूटर", count: 8, pick: computer, covers: "MS Office and internet" },
    ],
  },
  {
    body: { slug: "icar-cazri", name: "ICAR-CAZRI", nameHi: "आईसीएआर-काज़्री" },
    exam: { slug: "young-professional", name: "ICAR CAZRI Young Professional-I / Field Attendant", nameHi: "आईसीएआर काज़्री यंग प्रोफेशनल-I / फील्ड अटेंडेंट" },
    org: "ICAR CAZRI",
    posts: "Young Professional-I and Field Attendant",
    vacancies: "2 posts",
    lastDate: "27 November 2026",
    selection: "We did not read the selection process; contract posts of this kind are usually filled by interview.",
    examStatus: "Not confirmed. Contract posts are normally filled by interview, so this ecology and environment mock is practice only.",
    about: "CAZRI is the Central Arid Zone Research Institute at Jodhpur, so arid-zone ecology and environment are the natural subjects to revise.",
    level: "exam",
    minutes: 40,
    snippet: "ecology, forests and wildlife, geography",
    seoTitle: "ICAR CAZRI Young Professional {year}: Free Ecology Mock Test",
    sections: [
      { name: "Environment & Ecology", nameHi: "पर्यावरण एवं पारिस्थितिकी", count: 10, pick: T("forestry", "environment-ecology"), covers: "Ecosystems, pollution and conservation" },
      { name: "Forests & Wildlife", nameHi: "वन एवं वन्यजीव", count: 10, pick: T("forestry", "forests-wildlife"), covers: "Forest types, wildlife and protected areas" },
      { name: "Ecology & Evolution", nameHi: "पारिस्थितिकी एवं विकास", count: 10, pick: T("biology", "ecology-environment"), covers: "Populations, communities and biodiversity" },
      { name: "Indian Geography", nameHi: "भारतीय भूगोल", count: 10, pick: T("general-studies", "indian-geography"), covers: "Climate, soils, rivers and agriculture" },
    ],
  },
  {
    body: { slug: "oil-india", name: "Oil India Limited", nameHi: "ऑयल इंडिया लिमिटेड" },
    exam: { slug: "electrical-consultant", name: "Oil India Consultant (Electrical Engineering)", nameHi: "ऑयल इंडिया कंसल्टेंट (इलेक्ट्रिकल इंजीनियरिंग)" },
    org: "Oil India Limited (OIL)",
    posts: "Consultant (Electrical Engineering)",
    vacancies: "1 post",
    lastDate: "5 December 2026",
    selection: "We did not read the selection process; consultant posts are usually filled by interview.",
    examStatus: "No known paper. Consultant posts are filled by interview, so this electrical-engineering mock is subject practice only.",
    about: "A consultant post at a public-sector company values years of field experience, which the notice spells out.",
    level: "hard",
    minutes: 45,
    snippet: "power systems, machines, circuits and measurements",
    seoTitle: "Oil India Electrical Consultant {year}: Free Engineering Mock Test",
    sections: [
      { name: "Power Systems", nameHi: "शक्ति प्रणाली", count: 10, pick: T("electrical-engineering", "power-systems"), covers: "Generation, transmission, protection and fault analysis" },
      { name: "Machines", nameHi: "मशीनें", count: 10, pick: T("electrical-engineering", "machines"), covers: "Transformers, induction and synchronous machines" },
      { name: "Circuits", nameHi: "परिपथ", count: 10, pick: T("electrical-engineering", "circuits"), covers: "Network analysis and AC circuits" },
      { name: "Measurements & Safety", nameHi: "मापन एवं सुरक्षा", count: 10, pick: T("electrical-engineering", "measurements-safety"), covers: "Instruments, calibration and electrical safety" },
    ],
  },
];

export const jobKey = (j: JobSpec) => `${j.body.slug}/${j.exam.slug}`;
export const jobSlugKey = (j: JobSpec) => `${j.body.slug}-${j.exam.slug}`;
export const jobMockSlug = (j: JobSpec) => `${jobSlugKey(j)}-free-mock-1`;
const total = (j: JobSpec) => j.sections.reduce((n, s) => n + s.count, 0);

/** Builds the tests; called after the three main mocks so their questions are claimed first. */
export function buildJobTests(): Record<string, TestDef[]> {
  const out: Record<string, TestDef[]> = {};
  for (const j of RJ_JOBS) {
    const questions = j.sections.flatMap((s, i) => claim(i as 0 | 1 | 2 | 3 | 4 | 5, s.count, GENERAL_POOL, s.pick, j.level, `${j.exam.slug} ${s.name}`));
    const test = mock(
      jobMockSlug(j),
      `${j.exam.name} Free Mock Test 1`,
      `${j.exam.nameHi} फ़्री मॉक टेस्ट 1`,
      j.minutes,
      { correct: 1, wrong: 0 },
      `${j.exam.name} recruitment`,
      j.sections,
      questions,
      `${j.org} has not published a paper pattern for this recruitment, so the subjects, length and marking are ours and this is general practice. ${j.examStatus} Check the official notice for the real selection process.`,
    );
    out[jobSlugKey(j)] = [test];
  }
  return out;
}

/** The first wording of the search snippet that fits Google's 110 to 170 characters. */
function seoDescription(j: JobSpec): string {
  const date = j.lastDate.replace(/ \(.*\)/, "").replace(/ 2026$/, "");
  const tries = [
    `${j.exam.name}: last date ${date}, how it is filled and a free ${j.snippet} mock test with Hindi and English solutions.`,
    `${j.exam.name}: last date ${date}, how it is filled and a free ${j.snippet} mock test with solutions.`,
    `${j.exam.name}: last date ${date}, how it is filled and a free practice mock test with solutions in Hindi and English.`,
    `${j.exam.name} last date ${date} and a free practice mock test with Hindi and English solutions.`,
  ];
  const fit = tries.find((t) => t.length >= 110 && t.length <= 170);
  if (!fit) throw new Error(`rj-exams: no SEO description fits for ${j.exam.slug}`);
  return fit;
}

/** The exam page: every fact is one the job-alert page printed, and the page says to confirm it on the official notice. */
export function jobPage(j: JobSpec): ExamPage {
  const slug = jobMockSlug(j);
  const subjects = j.sections.map((s) => `${s.name.toLowerCase()} (${s.count})`).join(", ");
  const description = `**${j.org}** has advertised **${j.posts}** (${j.vacancies}). ${j.about}

**Last date: ${j.lastDate}.** ${j.selection} These details come from FreeJobAlert's Rajasthan page, which is a third-party summary, so confirm the post, the qualification, the fee and the date on the official notice before you apply.

**Is there an exam?** ${j.examStatus}

**Our mock:** the free [${j.exam.name} mock test](/tests/${slug}) has ${total(j)} questions in ${j.minutes} minutes on ${subjects}, with solutions in Hindi and English. There is no negative marking. The subjects, length and marking are ours, because the notice does not publish a pattern; use it to warm up, not as a guide to the real selection. For Rajasthan GK, try the free [Rajasthan GK mock test](/tests/${rj.freeMockSlug}).`;
  return {
    seo: {
      title: j.seoTitle,
      description: seoDescription(j),
    },
    description,
    syllabus: `No syllabus is published for this recruitment. The practice mock covers the areas below; the real selection process is in the official notice.\n\n${j.sections.map((s) => `### ${s.name}\n- ${s.covers}`).join("\n\n")}`,
    faqs: [
      { q: `What is the last date for the ${j.exam.name} recruitment?`, a: `${j.lastDate}, as printed on the job-alert page. Confirm it on the official notice.` },
      { q: `Is there a written exam for ${j.exam.name}?`, a: j.examStatus },
      { q: `How many vacancies are there?`, a: `${j.vacancies}, for ${j.posts}. The vacancy count and category split are in the notice.` },
      { q: `Does the free mock follow the real exam?`, a: `No. It is a ${total(j)}-question practice paper in ${j.snippet}, with our own length and marking, because no pattern is published.` },
    ],
  };
}
