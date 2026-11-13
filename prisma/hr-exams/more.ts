// The rest of the Haryana recruitments on the FreeJobAlert Haryana page (freejobalert.com/haryana-government-jobs, read on
// 13 November 2026): RITES, SVSU Skill Instructor, CCS HAU, RECPDCL, WAPCOS, NHPC, NPCC, BBMB and IIIT Sonepat. Each gets an
// exam listing, an exam page and one free general-aptitude mock. Plain data only, so the catalogue, the exam pages, the seed
// and the tests can all read it without importing each other.
//
// None of these notices was read on its own official site, and none is known to hold an MCQ written test: most select on
// merit, an interview or a trade/skill test. So every page says the figures are "reported", and every mock says its subjects,
// length and marking are ours and that the technical part of the post is not covered.

export type HrMoreSpec = {
  /** "bodySlug/examSlug" */
  bodySlug: string;
  examSlug: string;
  /** Present only when the body is new; SVSU already exists in the catalogue. */
  body?: { name: string; nameHi: string };
  name: string;
  nameHi: string;
  org: string;
  /** What the page reports: post name, vacancies, qualification, last date. */
  post: string;
  vacancies: number;
  qualification: string;
  lastDate: string;
  /** How the notice is reported to select (or "not confirmed"). */
  selection: string;
  /** The official site to confirm everything on. */
  official: string;
  mockSlug: string;
  /** Sections of the general mock; counts add up to `questions`. */
  minutes: number;
  /** "ga" adds a general-awareness section instead of computer. */
  includeComputer: boolean;
  /** Our own wording of what the mock does not cover. */
  notCovered: string;
  /** Distinct SEO phrase for the exam-page title. */
  seoName: string;
};

export const HR_MORE_SPECS: HrMoreSpec[] = [
  {
    bodySlug: "rites",
    examSlug: "apprentice",
    body: { name: "RITES Limited", nameHi: "राइट्स लिमिटेड" },
    name: "RITES Apprentice",
    nameHi: "राइट्स अप्रेंटिस",
    org: "RITES Limited (Gurugram)",
    post: "Graduate, Diploma and Trade Apprentice",
    vacancies: 281,
    qualification: "a graduate, diploma or trade (ITI) qualification, depending on the apprentice category",
    lastDate: "25 November 2026",
    selection: "merit of the qualifying marks and document verification, not a written test",
    official: "rites.com",
    mockSlug: "rites-apprentice-free-mock-1",
    minutes: 25,
    includeComputer: false,
    notCovered: "Apprentice selection is reported to go by qualifying marks, so no written test is known; the trade or technical part is not covered.",
    seoName: "RITES Apprentice",
  },
  {
    bodySlug: "rites",
    examSlug: "senior-technical-assistant",
    name: "RITES Senior Technical Assistant",
    nameHi: "राइट्स सीनियर टेक्निकल असिस्टेंट",
    org: "RITES Limited (Gurugram)",
    post: "Senior Technical Assistant",
    vacancies: 31,
    qualification: "a diploma in the relevant engineering branch",
    lastDate: "22 November 2026",
    selection: "not confirmed on the page; RITES technical posts are often filled by a written or skill test and an interview",
    official: "rites.com",
    mockSlug: "rites-senior-technical-assistant-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The engineering and technical subjects of the post are not covered.",
    seoName: "RITES Sr Technical Assistant",
  },
  {
    bodySlug: "svsu",
    examSlug: "skill-instructor",
    name: "SVSU Skill Instructor",
    nameHi: "एसवीएसयू स्किल इंस्ट्रक्टर",
    org: "Shri Vishwakarma Skill University (Palwal)",
    post: "Skill Instructor",
    vacancies: 45,
    qualification: "the trade or skill qualification set in the notice",
    lastDate: "23 November 2026",
    selection: "not confirmed on the page; skill-instructor posts are usually filled by a trade or skill test and an interview",
    official: "svsu.ac.in",
    mockSlug: "svsu-skill-instructor-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The trade or skill test of the post is not covered.",
    seoName: "SVSU Skill Instructor",
  },
  {
    bodySlug: "ccs-hau",
    examSlug: "faculty-research-posts",
    body: { name: "CCS Haryana Agricultural University", nameHi: "चौधरी चरण सिंह हरियाणा कृषि विश्वविद्यालय" },
    name: "CCS HAU Faculty and Research Posts",
    nameHi: "सीसीएस एचएयू फैकल्टी एवं रिसर्च पद",
    org: "CCS Haryana Agricultural University (Hisar)",
    post: "Dean, Associate Professor and other faculty posts",
    vacancies: 92,
    qualification: "a postgraduate degree, M.Phil or Ph.D in the relevant subject",
    lastDate: "7 December 2026",
    selection: "an application and interview process rather than a written test",
    official: "hau.ac.in",
    mockSlug: "ccs-hau-faculty-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The subject knowledge of the post and the interview are not covered; this paper only practises general aptitude.",
    seoName: "CCS HAU Faculty",
  },
  {
    bodySlug: "recpdcl",
    examSlug: "executive",
    body: { name: "REC Power Development and Consultancy Limited", nameHi: "आरईसी पावर डेवलपमेंट एंड कंसल्टेंसी लिमिटेड" },
    name: "RECPDCL Executive",
    nameHi: "आरईसीपीडीसीएल एक्ज़ीक्यूटिव",
    org: "REC Power Development and Consultancy Limited (Gurugram)",
    post: "Senior Executive, Deputy Executive and Assistant Executive",
    vacancies: 32,
    qualification: "an engineering or relevant professional degree, depending on the post",
    lastDate: "17 November 2026",
    selection: "not confirmed on the page; PSU executive posts are usually filled by shortlisting and an interview, sometimes a written test",
    official: "recpdcl.in",
    mockSlug: "recpdcl-executive-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The technical and professional subjects of the post are not covered.",
    seoName: "RECPDCL Executive",
  },
  {
    bodySlug: "wapcos",
    examSlug: "office-assistant-project-accountant",
    body: { name: "WAPCOS Limited", nameHi: "वाप्कोस लिमिटेड" },
    name: "WAPCOS Office Assistant and Project Accountant",
    nameHi: "वाप्कोस ऑफिस असिस्टेंट एवं प्रोजेक्ट अकाउंटेंट",
    org: "WAPCOS Limited (Gurugram)",
    post: "Office Assistant, Project Accountant and other project posts",
    vacancies: 29,
    qualification: "the qualification set for each post in the notice",
    lastDate: "25 November 2026",
    selection: "not confirmed on the page; WAPCOS project posts are usually filled by shortlisting and an interview",
    official: "wapcos.co.in",
    mockSlug: "wapcos-office-assistant-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The accounts and project knowledge of the post are not covered.",
    seoName: "WAPCOS Office Assistant",
  },
  {
    bodySlug: "nhpc",
    examSlug: "industrial-trainee",
    body: { name: "NHPC Limited", nameHi: "एनएचपीसी लिमिटेड" },
    name: "NHPC Industrial Trainee",
    nameHi: "एनएचपीसी इंडस्ट्रियल ट्रेनी",
    org: "NHPC Limited (Faridabad)",
    post: "Industrial Trainee (CS, ICMAI, ICSI)",
    vacancies: 23,
    qualification: "a CS, ICMAI or ICSI qualification, as set in the notice",
    lastDate: "20 November 2026",
    selection: "not confirmed on the page; trainee posts are usually filled by merit and an interview",
    official: "nhpcindia.com",
    mockSlug: "nhpc-industrial-trainee-free-mock-1",
    minutes: 25,
    includeComputer: false,
    notCovered: "The company-secretary, cost and management accounting subjects are not covered.",
    seoName: "NHPC Industrial Trainee",
  },
  {
    bodySlug: "npcc",
    examSlug: "manager",
    body: { name: "National Projects Construction Corporation", nameHi: "नेशनल प्रोजेक्ट्स कंस्ट्रक्शन कॉर्पोरेशन" },
    name: "NPCC Manager and Deputy Manager",
    nameHi: "एनपीसीसी मैनेजर एवं डिप्टी मैनेजर",
    org: "National Projects Construction Corporation (NPCC)",
    post: "General Manager, Manager and Deputy Manager",
    vacancies: 12,
    qualification: "an engineering or professional degree and experience, as set in the notice",
    lastDate: "22 November 2026",
    selection: "not confirmed on the page; senior PSU posts are usually filled by shortlisting and an interview, often on deputation",
    official: "npcc.gov.in",
    mockSlug: "npcc-manager-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The technical and managerial subjects of the post are not covered.",
    seoName: "NPCC Manager",
  },
  {
    bodySlug: "bbmb",
    examSlug: "lineman-apprentice",
    body: { name: "Bhakra Beas Management Board", nameHi: "भाखड़ा ब्यास प्रबंधन बोर्ड" },
    name: "BBMB Lineman Apprentice",
    nameHi: "बीबीएमबी लाइनमैन अप्रेंटिस",
    org: "Bhakra Beas Management Board (BBMB)",
    post: "Lineman Apprentice",
    vacancies: 7,
    qualification: "an ITI trade certificate for lineman or electrician, as set in the notice",
    lastDate: "3 December 2026",
    selection: "not confirmed on the page; apprentices are usually selected on ITI marks and document verification",
    official: "bbmb.gov.in",
    mockSlug: "bbmb-lineman-apprentice-free-mock-1",
    minutes: 25,
    includeComputer: false,
    notCovered: "The ITI electrical trade and any field test are not covered.",
    seoName: "BBMB Lineman Apprentice",
  },
  {
    bodySlug: "iiit-sonepat",
    examSlug: "faculty",
    body: { name: "IIIT Sonepat", nameHi: "आईआईआईटी सोनीपत" },
    name: "IIIT Sonepat Faculty",
    nameHi: "आईआईआईटी सोनीपत फैकल्टी",
    org: "Indian Institute of Information Technology Sonepat",
    post: "Associate Professor and Assistant Professor",
    vacancies: 7,
    qualification: "a Ph.D in the relevant discipline with the experience set in the notice",
    lastDate: "21 November 2026",
    selection: "shortlisting, a presentation and an interview rather than a written test",
    official: "iiitsonepat.ac.in",
    mockSlug: "iiit-sonepat-faculty-free-mock-1",
    minutes: 25,
    includeComputer: true,
    notCovered: "The subject knowledge, teaching demonstration and interview are not covered; this paper only practises general aptitude.",
    seoName: "IIIT Sonepat Faculty",
  },
];

/** Bodies that are new to the catalogue (SVSU already exists). */
export const HR_MORE_BODIES = HR_MORE_SPECS.filter((s) => s.bodySlug !== "svsu").reduce<{ slug: string; name: string; nameHi: string; sites: string[]; exams: { slug: string; name: string; nameHi: string }[] }[]>((acc, s) => {
  const found = acc.find((b) => b.slug === s.bodySlug);
  const exam = { slug: s.examSlug, name: s.name, nameHi: s.nameHi };
  if (found) found.exams.push(exam);
  else {
    const body = HR_MORE_SPECS.find((x) => x.bodySlug === s.bodySlug && x.body)?.body;
    if (!body) throw new Error(`hr-exams/more: no body details for ${s.bodySlug}`);
    acc.push({ slug: s.bodySlug, name: body.name, nameHi: body.nameHi, sites: ["hr"], exams: [exam] });
  }
  return acc;
}, []);
