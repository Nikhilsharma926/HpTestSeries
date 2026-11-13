import { rj } from "../../src/sites/rj";
import { RJ_JOBS, jobKey, jobMockSlug } from "../rj-exams/jobs";
import type { PostSeed } from "./types";

const FREE_MOCK = `/tests/${rj.freeMockSlug}`;
const ROUNDUP = "/blog/rajasthan-government-jobs-november-2026-new-vacancies-list";
const mock = (key: string) => {
  const j = RJ_JOBS.find((x) => jobKey(x) === key);
  if (!j) throw new Error(`rajasthan-jobs-posts: no job for ${key}`);
  return `/tests/${jobMockSlug(j)}`;
};

// One post per organisation or cluster of recruitments on FreeJobAlert's Rajasthan page (13 November 2026), plus a hub that
// lists every free mock. The page is a third-party summary, so each post gives only the facts it printed (posts, vacancies,
// last date, how selection works) and tells the reader to confirm them on the official notice. Where a notice has no written
// exam, the post says so and calls the mock practice.

export const RAJASTHAN_JOB_POSTS: PostSeed[] = [
  {
    slug: "curaj-recruitment-november-2026-ldc-office-assistant-sports-coach-jrf",
    site: "rj",
    seoTitle: "CURAJ Recruitment Nov 2026: LDC, Office Assistant, Sports Coach, JRF",
    seoDescription:
      "Central University of Rajasthan openings in November 2026: LDC, Office Assistant, 9 Sports Coach posts, JRF and the VC post, with last dates and which have a test.",
    title: "CURAJ Recruitment November 2026: Lower Division Clerk, Office Assistant, Sports Coach, JRF and Vice-Chancellor",
    titleHi: "कुराज भर्ती नवंबर 2026: एलडीसी, ऑफिस असिस्टेंट, स्पोर्ट्स कोच, जेआरएफ और कुलपति पद",
    excerpt:
      "Every opening at the Central University of Rajasthan on 13 November 2026, with its last date, number of posts and how selection works, and a free practice mock for each post that can have a test.",
    category: "NOTIFICATION",
    exams: ["curaj/lower-division-clerk", "curaj/office-assistant", "curaj/sports-coach", "curaj/jrf-project-associate"],
    content: `The **Central University of Rajasthan (CURAJ)**, at Bandarsindri in Ajmer district, has several openings on FreeJobAlert's Rajasthan page. This is the one list with the last date for each, how selection works as far as the notices say, and the practice mock for the posts where one makes sense.

The facts below are from a job-alert summary. Confirm the post, the qualification, the fee and the date on curaj.ac.in before you apply.

| Post | Vacancies | Last date | How it is filled |
|---|---|---|---|
| [Lower Division Clerk](/curaj/lower-division-clerk) | 1 | 10 Dec 2026 | The notice says a written, trade or computer test *may* be held; not confirmed |
| [Incubation Foundation: Project Coordinator, Project Assistant, Office Assistant](/curaj/office-assistant) | 3 | 15 Nov 2026 | A written test, skill test, presentation or interview *may* be used |
| [Sports Coach](/curaj/sports-coach) | 9 | 21 Nov 2026 | Interview only |
| [Junior Research Fellow / Project Associate-I](/curaj/jrf-project-associate) | 1 | 30 Nov 2026 | We did not read the process; project posts are usually filled by interview |
| Vice-Chancellor | not stated | 21 Nov 2026 | Appointed by a search committee; no paper |

## Which posts can have a written test

Only the **Lower Division Clerk** notice mentions a test, and even there it is a "may". Read the full [CURAJ LDC guide](/blog/curaj-lower-division-clerk-recruitment-2026-eligibility-last-date) for the qualification, typing speed and fee. The Office Assistant post at the Incubation Foundation is the next most likely to have one.

## Free practice mocks

None of these notices publishes a paper pattern, so every mock below is general practice with our own length and marking, and it says so in its instructions.

- [CURAJ Lower Division Clerk mock](/tests/curaj-lower-division-clerk-free-mock-1): 50 questions, 50 minutes
- [Incubation Foundation Office Assistant mock](${mock("curaj/office-assistant")}): 30 questions in GK, reasoning, maths, English and computer
- [Sports Coach practice mock](${mock("curaj/sports-coach")}): general awareness, reasoning and English. The selection is an interview, so this is only warm-up.
- [JRF / Project Associate-I practice mock](${mock("curaj/jrf-project-associate")}): general science, English, reasoning and statistics

For Rajasthan GK, start with the free [Rajasthan GK mock test](${FREE_MOCK}). The full November list is on the [Rajasthan government jobs page](${ROUNDUP}).

## हिंदी में सार

राजस्थान केंद्रीय विश्वविद्यालय (कुराज, बांदरसिंदरी, अजमेर) की भर्तियाँ: **LDC** (1 पद, अंतिम तिथि 10 दिसंबर 2026), **इन्क्यूबेशन फाउंडेशन** ऑफिस असिस्टेंट आदि (3 पद, 15 नवंबर), **स्पोर्ट्स कोच** (9 पद, 21 नवंबर, केवल साक्षात्कार), **JRF/प्रोजेक्ट एसोसिएट-I** (1 पद, 30 नवंबर) और **कुलपति** का पद (21 नवंबर)। केवल LDC की अधिसूचना में लिखित परीक्षा की संभावना बताई गई है, वह भी पक्की नहीं। आवेदन से पहले curaj.ac.in पर अधिसूचना देखें।`,
    faqs: [
      { q: "What is the last date for the CURAJ Lower Division Clerk post?", a: "10 December 2026 for the online application, as printed on the job-alert page. Confirm it on curaj.ac.in." },
      { q: "Which CURAJ post has the most vacancies?", a: "Sports Coach, with 9 posts and a last date of 21 November 2026. Selection is by interview only." },
      { q: "Is there a written exam for CURAJ posts?", a: "Not confirmed for any of them. The LDC notice says a written, trade or computer test may be held, and the Incubation Foundation posts may use a written test, skill test, presentation or interview. No pattern is published." },
    ],
  },

  {
    slug: "iiit-kota-security-supervisor-recruitment-2026-retired-defence-personnel",
    site: "rj",
    seoTitle: "IIIT Kota Security Supervisor 2026: 3 Posts, Last Date 4 Dec",
    seoDescription:
      "IIIT Kota Security Supervisor recruitment 2026 for retired defence personnel: 3 posts, last date 4 December, interview after shortlisting, and a free practice mock test.",
    title: "IIIT Kota Security Supervisor Recruitment 2026: 3 Posts for Retired Defence Personnel, Last Date 4 December",
    titleHi: "आईआईआईटी कोटा सिक्योरिटी सुपरवाइज़र भर्ती 2026: सेवानिवृत्त रक्षाकर्मियों के लिए 3 पद, अंतिम तिथि 4 दिसंबर",
    excerpt: "IIIT Kota has invited retired defence personnel for 3 Security Supervisor posts. Last date, how the shortlist and interview work, whether a test may be added, and a free practice mock.",
    category: "NOTIFICATION",
    exams: ["iiit-kota/security-supervisor"],
    content: `**IIIT Kota** (Indian Institute of Information Technology, Kota) has invited applications for **3 Security Supervisor posts**, meant for **retired defence personnel**. The last date on the job-alert page is **4 December 2026**.

The facts here are from a job-alert summary; check the notice on the institute's website for the age limit, the rank required, the pay and how to apply.

| Item | Detail |
|---|---|
| Post | Security Supervisor |
| Who can apply | Retired defence personnel |
| Vacancies | 3 |
| Last date | 4 December 2026 |
| Selection | Shortlisting, then an interview; a selection test *may* be added |

## Is there an exam?

Not confirmed. The page says candidates are shortlisted and then interviewed, and that a selection test may be added. No pattern, date or marks are published, so do not prepare for a paper that may not exist. If a test is held for this kind of post, it normally covers general awareness, reasoning and basic English, along with security and defence knowledge.

## Free practice

Our [IIIT Kota Security Supervisor mock test](${mock("iiit-kota/security-supervisor")}) has 30 questions in 30 minutes: defence and security awareness, general awareness, reasoning and English, with Hindi and English solutions. The subjects and marking are ours, because the institute publishes no pattern. It is warm-up practice, not a guide to the interview.

See the full [Rajasthan government jobs list](${ROUNDUP}) for other openings.

## हिंदी में सार

आईआईआईटी कोटा ने **सेवानिवृत्त रक्षाकर्मियों** के लिए **सिक्योरिटी सुपरवाइज़र के 3 पदों** पर आवेदन माँगे हैं। अंतिम तिथि **4 दिसंबर 2026** है। चयन शॉर्टलिस्टिंग और साक्षात्कार से होगा; चयन परीक्षा जोड़ी जा सकती है, पर पक्का नहीं है। आवेदन से पहले संस्थान की अधिसूचना देखें।`,
    faqs: [
      { q: "Who can apply for the IIIT Kota Security Supervisor post?", a: "Retired defence personnel, as the job-alert page puts it. The rank, age limit and service needed are in the official notice." },
      { q: "What is the last date?", a: "4 December 2026, as printed on the job-alert page. Confirm it on the IIIT Kota website." },
      { q: "Will there be a written test?", a: "Not confirmed. Candidates are shortlisted and interviewed, and a selection test may be added. No pattern is published." },
    ],
  },

  {
    slug: "pm-shri-kv-ajmer-walk-in-17-november-2026-tgt-english-primary-teacher",
    site: "rj",
    seoTitle: "PM SHRI KV Ajmer Walk-in 17 Nov 2026: TGT English, Primary Teacher",
    seoDescription:
      "PM SHRI Kendriya Vidyalaya No. 1 Ajmer walk-in on 17 November 2026 for TGT English, Primary Teacher and Vocational Instructor: 3 part-time posts, plus free practice.",
    title: "PM SHRI KV No. 1 Ajmer Walk-in Interview 17 November 2026: TGT English, Primary Teacher, Vocational Instructor",
    titleHi: "पीएम श्री केवी नं. 1 अजमेर वॉक-इन 17 नवंबर 2026: टीजीटी अंग्रेज़ी, प्राथमिक शिक्षक, वोकेशनल इंस्ट्रक्टर",
    excerpt: "A walk-in interview for part-time contract teachers at PM SHRI Kendriya Vidyalaya No. 1, Ajmer on 17 November 2026: the posts, how selection works, and teaching-aptitude practice.",
    category: "NOTIFICATION",
    exams: ["pm-shri-kv-ajmer/teacher"],
    content: `**PM SHRI Kendriya Vidyalaya No. 1, Ajmer** is holding a **walk-in interview on 17 November 2026** for part-time contract teachers: **TGT (English), Primary Teacher and Vocational Instructor**, **3 posts** in all.

The facts here are from a job-alert summary. The reporting time, the venue inside the school, the documents and the qualification are in the vidyalaya's notice, so read it before you go.

| Item | Detail |
|---|---|
| School | PM SHRI Kendriya Vidyalaya No. 1, Ajmer |
| Posts | TGT (English), Primary Teacher, Vocational Instructor |
| Vacancies | 3 |
| Date | 17 November 2026 (walk-in) |
| Selection | Walk-in interview, part-time contract |

## Is there a written exam?

No written exam is listed; selection is by the walk-in interview. Contract teaching interviews usually include a short demonstration lesson and questions on child development, learning and your subject, so revise those.

## Teaching-aptitude practice

Our [PM SHRI KV Ajmer teacher mock test](${mock("pm-shri-kv-ajmer/teacher")}) has 40 questions in 45 minutes on child development, learning and teaching, inclusive education, language pedagogy and English. It is practice only, with our own marking, and does not claim to be the school's test.

More Rajasthan openings: [November 2026 jobs list](${ROUNDUP}).

## हिंदी में सार

पीएम श्री केंद्रीय विद्यालय नं. 1, अजमेर में **17 नवंबर 2026** को **वॉक-इन इंटरव्यू** है: **टीजीटी (अंग्रेज़ी), प्राथमिक शिक्षक और वोकेशनल इंस्ट्रक्टर** के कुल **3 पद**, अंशकालिक संविदा पर। कोई लिखित परीक्षा नहीं बताई गई है। समय, स्थान और दस्तावेज़ों के लिए विद्यालय की अधिसूचना देखें।`,
    faqs: [
      { q: "When is the PM SHRI KV Ajmer walk-in interview?", a: "17 November 2026, as printed on the job-alert page. Confirm the time and venue in the vidyalaya's notice." },
      { q: "How many posts are there?", a: "3 posts in all: TGT (English), Primary Teacher and Vocational Instructor, on a part-time contract." },
      { q: "Is there a written exam for these posts?", a: "No written exam is listed. Selection is a walk-in interview." },
    ],
  },

  {
    slug: "esic-rajasthan-junior-engineer-assistant-engineer-retired-recruitment-2026",
    site: "rj",
    seoTitle: "ESIC Rajasthan JE and AE Recruitment 2026: 6 Posts, Last Date 30 Nov",
    seoDescription:
      "ESIC Rajasthan (Jaipur) Junior and Assistant Engineer posts for retired engineers: 6 contract posts, last date 30 November 2026, interview, plus a free electrical mock.",
    title: "ESIC Rajasthan Junior Engineer and Assistant Engineer Recruitment 2026: 6 Posts for Retired Engineers, Last Date 30 November",
    titleHi: "ईएसआईसी राजस्थान जूनियर इंजीनियर एवं असिस्टेंट इंजीनियर भर्ती 2026: सेवानिवृत्त इंजीनियरों के 6 पद, अंतिम तिथि 30 नवंबर",
    excerpt: "ESIC Rajasthan has invited retired engineers for 6 contract posts of Junior and Assistant Engineer. Last date, screening and interview, and free electrical-engineering practice.",
    category: "NOTIFICATION",
    exams: ["esic-rajasthan/junior-engineer"],
    content: `**ESIC Rajasthan** (Jaipur) has invited retired engineers for **6 contract posts of Junior Engineer and Assistant Engineer**. The last date on the job-alert page is **30 November 2026**.

The facts here are from a job-alert summary. The branch (civil, electrical or other), the age limit, the pay and the application address are in the notice, so read it before you apply.

| Item | Detail |
|---|---|
| Posts | Junior Engineer, Assistant Engineer |
| Who can apply | Retired engineers |
| Vacancies | 6 |
| Last date | 30 November 2026 |
| Selection | Screening and interview, on contract |

## Is there an exam?

No. Selection is screening of the applications and an interview, so there is no paper to practise. Retired engineers are judged mainly on past service and the branch they worked in.

## Free practice

If your branch is electrical, our [ESIC Rajasthan engineer mock test](${mock("esic-rajasthan/junior-engineer")}) has 40 questions in 45 minutes on circuits, machines, power systems and measurements. It is subject practice only: we hold no civil or mechanical bank, and the notice publishes no paper.

More openings: [Rajasthan government jobs, November 2026](${ROUNDUP}).

## हिंदी में सार

ईएसआईसी राजस्थान (जयपुर) ने **सेवानिवृत्त इंजीनियरों** से **जूनियर इंजीनियर और असिस्टेंट इंजीनियर के 6 संविदा पदों** पर आवेदन माँगे हैं। अंतिम तिथि **30 नवंबर 2026** है। चयन स्क्रीनिंग और साक्षात्कार से होगा, कोई परीक्षा नहीं है। शाखा और अन्य शर्तों के लिए अधिसूचना देखें।`,
    faqs: [
      { q: "Who can apply for the ESIC Rajasthan engineer posts?", a: "Retired engineers, as the job-alert page puts it. The branch, age and service conditions are in the official notice." },
      { q: "What is the last date?", a: "30 November 2026, as printed on the job-alert page. Confirm it on the official notice." },
      { q: "Is there a written exam?", a: "No. Selection is by screening and interview, on contract." },
    ],
  },

  {
    slug: "aiims-jodhpur-recruitment-november-2026-nurse-scientist-research-assistant-field-investigator",
    site: "rj",
    seoTitle: "AIIMS Jodhpur Recruitment Nov 2026: Nurse, Scientist, Field Inv.",
    seoDescription:
      "AIIMS Jodhpur project posts in November 2026: Project Nurse III, Scientist C, Research Assistant, Field Investigator and more, with last dates and free practice mocks.",
    title: "AIIMS Jodhpur Recruitment November 2026: Project Nurse, Scientist C, Research Assistant, Field Investigator",
    titleHi: "एम्स जोधपुर भर्ती नवंबर 2026: प्रोजेक्ट नर्स, साइंटिस्ट सी, रिसर्च असिस्टेंट, फील्ड इन्वेस्टिगेटर",
    excerpt: "Five AIIMS Jodhpur project posts open in November 2026, each with its own last date, and free practice mocks in nursing, life science and general aptitude.",
    category: "NOTIFICATION",
    exams: ["aiims-jodhpur/project-nurse", "aiims-jodhpur/research-scientist", "aiims-jodhpur/field-investigator"],
    content: `**AIIMS Jodhpur** has several project posts open in November 2026. Each has its own last date, so check the one you want first.

The facts below are from a job-alert summary. The qualification, the project, the pay and how to apply are in each notice on aiimsjodhpur.edu.in.

| Post | Vacancies | Last date |
|---|---|---|
| Research Assistant | 1 | 13 Nov 2026 |
| Project Nurse III | 1 | 16 Nov 2026 |
| Scientist C | 1 | 20 Nov 2026 |
| Project Research Scientist-III | 1 | 21 Nov 2026 |
| Field Investigator | 2 | 25 Nov 2026 |

## How these posts are filled

We did not read the selection process. Project posts at AIIMS are usually filled by interview or a walk-in, so a written test is not confirmed for any of these. The mocks below are subject practice, with our own length and marking.

## Free practice mocks

- [Project Nurse III mock](${mock("aiims-jodhpur/project-nurse")}): 40 questions on nursing fundamentals, medical-surgical nursing, community health, anatomy and pharmacology
- [Research Assistant / Scientist mock](${mock("aiims-jodhpur/research-scientist")}): 40 questions on physiology, cell biology, genetics and biostatistics
- [Field Investigator mock](${mock("aiims-jodhpur/field-investigator")}): 30 questions on statistics, general awareness, English and computer

See the [full Rajasthan jobs list](${ROUNDUP}) for other openings.

## हिंदी में सार

एम्स जोधपुर में नवंबर 2026 में प्रोजेक्ट पद खुले हैं: **रिसर्च असिस्टेंट** (13 नवंबर), **प्रोजेक्ट नर्स III** (16 नवंबर), **साइंटिस्ट सी** (20 नवंबर), **प्रोजेक्ट रिसर्च साइंटिस्ट-III** (21 नवंबर) और **फील्ड इन्वेस्टिगेटर** के 2 पद (25 नवंबर)। चयन प्रक्रिया हमने नहीं पढ़ी; ऐसे पद अक्सर साक्षात्कार से भरे जाते हैं। योग्यता के लिए अधिसूचना देखें।`,
    faqs: [
      { q: "Which AIIMS Jodhpur post closes first?", a: "The Research Assistant post, with a last date of 13 November 2026 on the job-alert page, followed by Project Nurse III on 16 November." },
      { q: "How many Field Investigator posts are there?", a: "2 posts, with a last date of 25 November 2026." },
      { q: "Is there a written test for the AIIMS Jodhpur project posts?", a: "Not confirmed. We did not read the selection process; project posts are usually filled by interview, so check each notice." },
    ],
  },

  {
    slug: "rajasthan-university-institute-jobs-november-2026-mlsu-iit-jodhpur-iim-udaipur-cazri",
    site: "rj",
    seoTitle: "Rajasthan University Jobs Nov 2026: MLSU, IIT, IIM, CAZRI",
    seoDescription:
      "Openings at MLSU, University of Rajasthan, IIT Jodhpur, IIM Udaipur, CBI-SUAPS and ICAR CAZRI in November 2026, with last dates and free practice mock tests.",
    title: "Rajasthan University and Institute Jobs November 2026: MLSU, University of Rajasthan, IIT Jodhpur, IIM Udaipur, CAZRI",
    titleHi: "राजस्थान विश्वविद्यालय और संस्थान भर्ती नवंबर 2026: एमएलएसयू, राजस्थान विश्वविद्यालय, आईआईटी जोधपुर, आईआईएम उदयपुर, काज़्री",
    excerpt: "Project, administrative and field posts at six Rajasthan universities and institutes open in November 2026, each with its last date and a free practice mock.",
    category: "NOTIFICATION",
    exams: ["mlsu/project-associate", "university-of-rajasthan/project-assistant", "cbi-suaps/office-assistant", "iit-jodhpur/registrar", "iim-udaipur/senior-associate-programs", "icar-cazri/young-professional"],
    content: `Six universities and institutes in Rajasthan have openings on FreeJobAlert's Rajasthan page in November 2026. Here are the posts, the last dates and a free practice mock for each.

The facts below are from a job-alert summary. We did not read the selection process for any of these, and most project or contract posts are filled by interview. Confirm the qualification, the fee and the date on each official notice.

| Organisation | Post | Vacancies | Last date | Practice mock |
|---|---|---|---|---|
| Mohanlal Sukhadia University (MLSU), Udaipur | Project Associate, Project Assistant | 2 | 13 Nov 2026 | [MLSU mock](${mock("mlsu/project-associate")}) |
| MLSU | Visiting Faculty (walk-in) | 4 | 13 Nov 2026 | none: a subject lecture is judged |
| University of Rajasthan, Jaipur | Post Doctoral Fellow, Project Assistant | 4 | 13 Nov 2026 | [Uni of Rajasthan mock](${mock("university-of-rajasthan/project-assistant")}) |
| CBI-SUAPS | Office Assistant | 1 | 17 Nov 2026 | [Office Assistant mock](${mock("cbi-suaps/office-assistant")}) |
| IIT Jodhpur | Registrar | 1 | 18 Nov 2026 | [Registrar mock](${mock("iit-jodhpur/registrar")}) |
| IIM Udaipur | Senior Associate, Programs | 1 | 26 Nov 2026 | [IIM Udaipur mock](${mock("iim-udaipur/senior-associate-programs")}) |
| ICAR CAZRI | Young Professional-I, Field Attendant | 2 | 27 Nov 2026 | [CAZRI mock](${mock("icar-cazri/young-professional")}) |

## What the mocks are

None of these notices publishes a paper, so each mock is general practice in the subjects the post would use: science, reasoning and English for the project posts, polity and administration for the Registrar, English and aptitude for the IIM programme post, and ecology for CAZRI. They have our own length and marking, which each test says.

## Rajasthan GK and more

Warm up with the free [Rajasthan GK mock test](${FREE_MOCK}). The full list is on the [Rajasthan government jobs page](${ROUNDUP}).

## हिंदी में सार

नवंबर 2026 में राजस्थान के छह विश्वविद्यालयों और संस्थानों में भर्तियाँ खुली हैं: **एमएलएसयू** (प्रोजेक्ट एसोसिएट/असिस्टेंट, 13 नवंबर), **राजस्थान विश्वविद्यालय** (पोस्ट डॉक्टरल फेलो/प्रोजेक्ट असिस्टेंट, 13 नवंबर), **CBI-SUAPS** (ऑफिस असिस्टेंट, 17 नवंबर), **आईआईटी जोधपुर** (रजिस्ट्रार, 18 नवंबर), **आईआईएम उदयपुर** (सीनियर एसोसिएट, 26 नवंबर) और **ICAR काज़्री** (यंग प्रोफेशनल-I/फील्ड अटेंडेंट, 27 नवंबर)। चयन प्रक्रिया हमने नहीं पढ़ी; अधिसूचना देखकर आवेदन करें।`,
    faqs: [
      { q: "Which of these Rajasthan posts closes first?", a: "The MLSU and University of Rajasthan posts, both with a last date of 13 November 2026 on the job-alert page." },
      { q: "How many vacancies are there at the University of Rajasthan?", a: "4 posts of Post Doctoral Fellow and Project Assistant, as printed on the job-alert page." },
      { q: "Are there written exams for these posts?", a: "Not confirmed. We did not read the selection process; project, fellow and administrative posts like these are usually filled by interview or a selection committee." },
    ],
  },

  {
    slug: "rites-hll-oil-india-rajasthan-jobs-november-2026-manager-consultant-posts",
    site: "rj",
    seoTitle: "RITES, HLL, Oil India Jobs Nov 2026: Manager and Consultant Posts",
    seoDescription:
      "RITES Assistant Manager and Manager (10 posts), HLL Operations Manager and Oil India Consultant (Electrical): last dates, how to apply and free practice mocks.",
    title: "RITES, HLL and Oil India Jobs November 2026: Assistant Manager, Operations Manager and Electrical Consultant",
    titleHi: "राइट्स, एचएलएल और ऑयल इंडिया भर्ती नवंबर 2026: असिस्टेंट मैनेजर, ऑपरेशंस मैनेजर और इलेक्ट्रिकल कंसल्टेंट",
    excerpt: "Three public-sector recruitments on FreeJobAlert's Rajasthan page for November 2026: RITES, HLL and Oil India, with last dates, how selection works and free practice mocks.",
    category: "NOTIFICATION",
    exams: ["rites/assistant-manager", "hll/operations-manager", "oil-india/electrical-consultant"],
    content: `Three public-sector organisations have manager and consultant openings on FreeJobAlert's Rajasthan page for November and December 2026.

The facts below are from a job-alert summary. Confirm the post, the qualification, the experience, the pay and how to apply on each organisation's notice.

| Organisation | Post | Vacancies | Last date | How it is filled |
|---|---|---|---|---|
| RITES | Assistant Manager, Manager and other posts | 10 | about 19 Nov 2026 | No process stated; apply by email, contract |
| HLL | Operations Manager (Biomedical) | 1 | 18 Nov 2026 | We did not read the process; manager posts are usually interviewed |
| Oil India (OIL) | Consultant (Electrical Engineering) | 1 | 5 Dec 2026 | We did not read the process; consultant posts are usually interviewed |

## Is there an exam?

Not for any of them, as far as the summary shows. Senior and consultant posts are chosen on experience and an interview, so use the mocks below as practice, not as a guide to the process.

## Free practice mocks

- [RITES Assistant Manager mock](${mock("rites/assistant-manager")}): 40 questions on economy and business, reasoning, quantitative aptitude and English
- [HLL Operations Manager mock](${mock("hll/operations-manager")}): 40 questions on business studies, finance, reasoning and English. The biomedical subject itself is not covered.
- [Oil India Electrical Consultant mock](${mock("oil-india/electrical-consultant")}): 40 electrical-engineering questions on power systems, machines, circuits and measurements

More Rajasthan openings: [November 2026 jobs list](${ROUNDUP}).

## हिंदी में सार

**राइट्स** (असिस्टेंट मैनेजर, मैनेजर आदि, 10 पद, लगभग 19 नवंबर), **एचएलएल** (ऑपरेशंस मैनेजर, बायोमेडिकल, 18 नवंबर) और **ऑयल इंडिया** (इलेक्ट्रिकल इंजीनियरिंग कंसल्टेंट, 5 दिसंबर) की भर्तियाँ खुली हैं। इनमें कोई लिखित परीक्षा नहीं बताई गई है; अनुभव और साक्षात्कार से चयन होता है। आवेदन से पहले हर संगठन की अधिसूचना देखें।`,
    faqs: [
      { q: "How many posts does RITES have?", a: "10 posts, as printed on the job-alert page, with a last date of about 19 November 2026. Applications go by email, on contract." },
      { q: "What is the last date for the Oil India Electrical Consultant post?", a: "5 December 2026, as printed on the job-alert page. Confirm it on the Oil India notice." },
      { q: "Do these posts have a written exam?", a: "Not as far as the summary shows. RITES states no process, and we did not read the HLL and Oil India processes; manager and consultant posts are usually interviewed." },
    ],
  },

  {
    slug: "rajasthan-govt-jobs-free-mock-tests-list-all-exams-2026",
    site: "rj",
    seoTitle: "Rajasthan Govt Jobs Free Mock Tests 2026: List of All Exams",
    seoDescription:
      "Every Rajasthan exam and recruitment with a free mock test on rjtestseries.in: RPSC, RSSB Patwari, CURAJ, AIIMS Jodhpur, ESIC, KV Ajmer and more, in one list.",
    title: "Rajasthan Govt Jobs Free Mock Tests 2026: Complete List of Exams With a Free Mock for Each",
    titleHi: "राजस्थान सरकारी नौकरी फ्री मॉक टेस्ट 2026: सभी परीक्षाओं की पूरी सूची",
    excerpt: "One list of every Rajasthan exam and recruitment from November 2026 that has a free mock test, with the exam page and the mock for each, and an honest note on which have a real written paper.",
    category: "NOTIFICATION",
    exams: ["rpsc/protection-officer", "rssb/patwari", "curaj/lower-division-clerk", ...RJ_JOBS.map(jobKey)],
    content: `This is the **list of every Rajasthan recruitment from November 2026 that has a free mock test** on rjtestseries.in. Each row links to the exam page and to the mock.

**An honest note first:** only the RPSC Protection Officer, the RSSB Patwari and (possibly) the CURAJ Lower Division Clerk have a written exam you can really practise for. For the rest, the notice says interview, walk-in, contract or merit list, or does not say. Those mocks are **general practice** in the subjects the post would use, with our own length and marking, and every test says so.

## Exams with a written paper

| Exam | Exam page | Free mock |
|---|---|---|
| RPSC Protection Officer (15 Nov 2026) | [exam page](/rpsc/protection-officer) | [Protection Officer mock](/tests/rpsc-protection-officer-free-mock-1) |
| RSSB Patwari (date not announced) | [exam page](/rssb/patwari) | [Patwari mock](/tests/rssb-patwari-free-mock-1) |
| CURAJ Lower Division Clerk (test not confirmed) | [exam page](/curaj/lower-division-clerk) | [LDC mock](/tests/curaj-lower-division-clerk-free-mock-1) |

## Recruitments filled by interview, merit or walk-in (practice mocks)

| Recruitment | Exam page | Practice mock |
|---|---|---|
${RJ_JOBS.map((j) => `| ${j.exam.name} | [exam page](/${jobKey(j)}) | [free mock](/tests/${jobMockSlug(j)}) |`).join("\n")}

## Without a mock

The CURAJ Vice-Chancellor post is a search-committee appointment and the MLSU visiting-faculty walk-in judges a subject lecture, so an MCQ paper does not practise either.

## Where to start

Rajasthan GK is common to every state exam: begin with the free [Rajasthan GK mock test](${FREE_MOCK}). For the dates and last dates, see the [Rajasthan government jobs list for November 2026](${ROUNDUP}) and the [revised RSSB exam calendar](/blog/rssb-exam-calendar-2026-revised-november-february).

## हिंदी में सार

यहाँ नवंबर 2026 की उन सभी राजस्थान भर्तियों की सूची है जिनका फ्री मॉक टेस्ट rjtestseries.in पर है। **सच यह है** कि लिखित परीक्षा असल में केवल आरपीएससी संरक्षण अधिकारी, आरएसएसबी पटवारी और (संभवतः) कुराज LDC की है। बाकी भर्तियाँ साक्षात्कार, वॉक-इन, संविदा या मेरिट से भरी जाती हैं; उनके मॉक सामान्य अभ्यास के लिए हैं और हर टेस्ट में यह लिखा है।`,
    faqs: [
      { q: "Which Rajasthan exams have a free mock test on rjtestseries.in?", a: "RPSC Protection Officer, RSSB Patwari, CURAJ Lower Division Clerk, and practice mocks for the other recruitments on the November 2026 job list, each linked above." },
      { q: "Are the mocks the same as the real exam?", a: "Only the Patwari mock follows a published pattern, at one third of the length. For the others the notice publishes no paper, so the mock is general practice with our own length and marking." },
      { q: "Are the free mocks really free?", a: "Yes. Every mock on this list is free to take, with solutions in Hindi and English." },
    ],
  },
];
