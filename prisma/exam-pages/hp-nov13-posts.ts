import type { PostSeed } from "./types";

// Blog posts for the HP notifications on the FreeJobAlert Himachal page as of 13 November 2026: HPRCA Teacher (Advt 14/2026),
// HPRCA Radiographer (Advt 15/2026), the two new exam pages they created (Physical Education Teacher, Computer Teacher) and a
// roundup of what is open. Facts come from the FreeJobAlert listing and its detail pages, not from the official PDFs, so each
// post says "reports ke mutabik" and sends the reader to hprca.hp.gov.in. Figures the sources gave only loosely (negative
// marking, exam dates) are left out rather than guessed.

const free = (slug: string) => `/tests/${slug}`;

export const HP_NOV13_POSTS: PostSeed[] = [
  {
    slug: "hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy",
    seoTitle: "HPRCA Teacher Recruitment 2026: 2423 Posts, Subject-wise Vacancy",
    seoDescription: "HPRCA Teacher 2026 (Advt 14/2026): 2,423 posts in 15 subjects, apply 10 Nov to 5 Dec, Rs 800 fee, age 18-45, 120-MCQ CBT. Subject-wise vacancy table.",
    title: "HPRCA Teacher Recruitment 2026: 2,423 Posts, Subject-wise Vacancy, Dates and Fee",
    titleHi: "एचपीआरसीए शिक्षक भर्ती 2026: 2,423 पद, विषयवार रिक्तियां, तिथि और शुल्क",
    excerpt: "HPRCA Advt 14/2026 ke 2,423 teacher posts: 15 subjects ki vacancy, last date 5 December, fee, age limit, qualification aur exam pattern ek jagah.",
    category: "NOTIFICATION",
    exams: ["hprca/pgt-lecturer", "hprca/physical-education-teacher", "hprca/computer-teacher"],
    content: `Reports ke mutabik **HPRCA (Himachal Pradesh Rajya Chayan Aayog, Hamirpur)** ne **Advt No. 14/2026** (2 November 2026) me **Teacher (Various Subjects)** ke **2,423 posts** nikale hain. Posts **15 subjects** me hain (post codes 26046 se 26060). Online form **10 November** se chalu hai aur **5 December 2026, raat 11:59 baje** tak bhare ja sakte hain. Vacancy ka number tentative hai, isliye final figure official advertisement se dekhein.

## Important dates

| Event | Date |
|---|---|
| Notification | 2 November 2026 |
| Online form shuru | 10 November 2026, 10:00 AM |
| Last date | **5 December 2026, 11:59 PM** |
| Qualification ke liye cut-off date | 5 December 2026 |
| Age ginne ki date | 1 January 2026 |
| Correction window | Closing ke baad 4 din (dates abhi confirm nahi) |
| CBT aur admit card | Abhi announce nahi hue |

## Subject-wise vacancy

| Post code | Subject | Posts |
|---|---|---|
| 26046 | English | 187 |
| 26047 | Mathematics | 281 |
| 26048 | Hindi | 187 |
| 26049 | Political Science | 156 |
| 26050 | History | 156 |
| 26051 | Economics | 156 |
| 26052 | Physics | 95 |
| 26053 | Chemistry | 95 |
| 26054 | Biology | 187 |
| 26055 | Sanskrit | 187 |
| 26056 | Computer | 95 |
| 26057 | Music | 95 |
| 26058 | Commerce | 187 |
| 26059 | Physical Education | 187 |
| 26060 | Fine Arts | 172 |
| | **Total** | **2,423** |

Category-wise (reports ke mutabik): General 928, EWS 310, SC 582, OBC 484, ST 119.

## Fee, age aur qualification

- **Fee:** Rs 800 sabhi categories ke liye (Rs 100 exam fee + Rs 700 processing fee), non-refundable. Correction fee Rs 100.
- **Age:** 18 se 45 saal (1 January 2026 tak). Reserved categories ko HP government ke niyam ke hisaab se chhoot.
- **Qualification:** zyadatar subjects me us subject me Master's degree, **B.Ed. aur qualifying TET**. Physical Education ke liye B.P.Ed., B.P.E. ya integrated physical education degree (table me TET ka zikr nahi). Computer ke liye computer science/IT degree ya MCA, M.Sc., PG diploma, DOEACC jaisa route. Fine Arts ke liye Fine Arts me Master's ya recognised diploma.
- Matric aur 10+2 Himachal ke institution se hona chahiye (bona fide Himachali par ye shart nahi lagti).
- Pehle **One Time Registration (OTR)** karna hota hai, phir ek post ke liye ek application.

TET ke bare me [HP TET ki poori jaankari](/hpbose/hp-tet) padhein.

## Selection process aur exam pattern

Reports ke mutabik pehle stage me **CBT ya written screening test: 120 MCQs, 120 marks, 90 minutes**. Negative marking notification me specified nahi hai, isliye official advertisement dekhein. Syllabus me post ke subject ke saath **HP GK, current affairs, everyday science, logical reasoning, social science, general English aur Hindi** (matric level) aate hain. Uske baad merit, document verification aur waiting panel; alag interview nahi bataya gaya.

## Pay aur engagement

Reports ke mutabik fixed honorarium **Rs 30,000 per month, 10 mahine** (academic year), temporary engagement 5 saal ke liye, scheme-based. Ye regular government teacher pay scale nahi hai aur regularisation ka haq nahi diya gaya. Apply karne se pehle advertisement ki shartein zaroor padhein.

## Taiyari kaise shuru karein

- Apne subject ka post code aur qualification advertisement me match karein.
- General section ke liye [Himachal GK](/himachal) roz revise karein.
- Subject-wise taiyari: [PGT / Lecturer](/hprca/pgt-lecturer), [Physical Education Teacher](/hprca/physical-education-teacher) aur [Computer Teacher](/hprca/computer-teacher) pages par syllabus aur free mock milega.
- Physical Education ke liye [free mock](${free("hprca-physical-education-teacher-free-mock-1")}) aur Computer ke liye [free mock](${free("hprca-computer-teacher-free-mock-1")}) try karein.

Official site: **hprca.hp.gov.in**. Is page ke figures job-listing sites se hain, final jaankari wahin se confirm karein.`,
    faqs: [
      { q: "HPRCA Teacher 2026 me kitne posts hain?", a: "Reports ke mutabik Advt No. 14/2026 me 15 subjects ke 2,423 posts hain. Number tentative hai, official advertisement se confirm karein." },
      { q: "HPRCA Teacher 2026 ki last date kya hai?", a: "Online application 10 November 2026 se 5 December 2026 raat 11:59 baje tak. Fee Rs 800 (Rs 100 exam fee aur Rs 700 processing fee) hai." },
      { q: "Is the HPRCA Teacher 2026 exam negative marked?", a: "The reported pattern is 120 MCQs for 120 marks in 90 minutes. Negative marking is not specified in the notification, so check the official advertisement." },
      { q: "Kya HP TET zaroori hai?", a: "Zyadatar subject-teacher posts ke liye qualifying TET maanga gaya hai. Physical Education ke liye B.P.Ed. jaisi qualification di gayi hai aur table me TET ka zikr nahi hai. Post ke hisaab se advertisement dekhein." },
      { q: "Kaun se subjects ke sabse zyada posts hain?", a: "Mathematics ke 281 posts sabse zyada hain. English, Hindi, Biology, Sanskrit, Commerce aur Physical Education ke 187-187 posts hain." },
    ],
  },

  {
    slug: "hprca-radiographer-job-trainee-2026-43-posts-eligibility-last-date",
    seoTitle: "HPRCA Radiographer 2026: 43 Posts, Eligibility, Fee, Last Date",
    seoDescription: "HPRCA Radiographer (Job Trainee) 2026, Advt 15/2026: 43 posts, apply 12 Nov to 7 Dec, Rs 800 fee, B.Sc radiography, Rs 18,000 pay and 120-MCQ test.",
    title: "HPRCA Radiographer (Job Trainee) 2026: 43 Posts, Eligibility, Fee and Last Date",
    titleHi: "एचपीआरसीए रेडियोग्राफर (जॉब ट्रेनी) 2026: 43 पद, पात्रता, शुल्क और अंतिम तिथि",
    excerpt: "HPRCA Advt 15/2026 ke 43 Radiographer Job Trainee posts: department-wise vacancy, qualification, fee, last date 7 December aur exam pattern.",
    category: "NOTIFICATION",
    exams: ["hprca/radiographer"],
    content: `Reports ke mutabik **HPRCA, Hamirpur** ne **Advt No. 15/2026** (3 November 2026) me **Radiographer (Job Trainee)**, **Post Code 26061**, ke **43 posts** nikale hain. Application **12 November 2026** se chalu hai aur **7 December 2026, raat 11:59 baje** tak chalegi.

## Vacancy aur dates

| Detail | Reported |
|---|---|
| Health & Family Welfare Department | 19 posts |
| Medical Education & Research Department | 24 posts |
| Total | **43** |
| Online form shuru | 12 November 2026, 10:00 AM |
| Last date | **7 December 2026, 11:59 PM** |
| CBT date, admit card | Abhi announce nahi hue |

Category-wise breakup abhi page par nahi mila, isliye official advertisement dekhein.

## Eligibility

- **10+2 Science** aur recognised **B.Sc.** (Medical Radiology & Imaging, Radiography, Radiation Technology, Medical Imaging Technology ya advertisement me di gayi equivalent degree).
- **HP Para Medical Council, Shimla** (ab State Allied Health Care Council, HP) me registration.
- Matric aur 10+2 Himachal ke institution se (bona fide Himachali ko chhoot).
- **Age:** 18 se 45 saal (1 January 2026 tak), HP SC/ST/OBC/PwD, HP government employees aur ex-servicemen ko 5 saal tak chhoot.
- Form bharne se pehle **One Time Registration (OTR)** zaroori hai.

## Fee

Rs 800 sabhi categories ke liye (Rs 100 exam fee + Rs 700 processing fee). Correction fee Rs 100. Payment online hoti hai. Dusre rajya ke reserved category candidates General maane jaate hain, unhe fee chhoot nahi milti.

## Pay aur selection

- **Pay:** consolidated Rs 18,000 per month, HP Job Trainee Policy ke tahat.
- **Selection:** CBT ya written screening test, phir document verification.
- **Pattern (reported):** 120 MCQs, 120 marks, 90 minutes. Technical subjects post ki qualification par aadharit aur general section me HP GK, current affairs, everyday science, reasoning, social science, English aur Hindi.

## Taiyari

Technical part me **radiographic techniques, anatomy, radiation physics, radiation safety aur imaging equipment** (X-ray, CT, MRI, ultrasound) sabse zyada scoring hain. General part ke liye [Himachal GK](/himachal) roz revise karein. Syllabus aur free mock ke liye [HPRCA Radiographer page](/hprca/radiographer) dekhein, aur CBT screen se aadat banane ke liye [free Himachal GK mock](/himachal-gk-mock-test) lagayein.

Official site: **hprca.hp.gov.in**. Figures job-listing site se hain, apply karne se pehle notification PDF padhein.`,
    faqs: [
      { q: "HPRCA Radiographer 2026 me kitne posts hain?", a: "Reports ke mutabik 43: Health & Family Welfare ke 19 aur Medical Education & Research ke 24 (Advt No. 15/2026, Post Code 26061)." },
      { q: "HPRCA Radiographer 2026 ki last date kya hai?", a: "Online form 12 November 2026 se 7 December 2026 raat 11:59 baje tak bhare ja sakte hain." },
      { q: "What is the qualification for HPRCA Radiographer 2026?", a: "10+2 Science and a recognised B.Sc. in Radiography, Medical Radiology & Imaging or an equivalent listed discipline, plus registration with the HP Para Medical Council (now the State Allied Health Care Council)." },
      { q: "Radiographer Job Trainee ki salary kitni hai?", a: "Reports ke mutabik consolidated Rs 18,000 per month, HP Job Trainee Policy ke tahat." },
      { q: "What is the Radiographer exam pattern?", a: "As reported, 120 MCQs for 120 marks in 90 minutes: technical subjects from the qualification plus HP GK, current affairs, reasoning, English and Hindi. Check the official notification for negative marking." },
    ],
  },

  {
    slug: "hprca-physical-education-teacher-2026-syllabus-exam-pattern-187-posts",
    seoTitle: "HPRCA PE Teacher 2026: 187 Posts, Syllabus and Exam Pattern",
    seoDescription: "HPRCA Physical Education Teacher 2026: 187 posts, B.P.Ed qualification, 120-MCQ CBT, topic-wise syllabus and a free mock to start preparing.",
    title: "HPRCA Physical Education Teacher 2026: 187 Posts, Syllabus, Exam Pattern and Preparation",
    titleHi: "एचपीआरसीए शारीरिक शिक्षा शिक्षक 2026: 187 पद, सिलेबस, परीक्षा पैटर्न और तैयारी",
    excerpt: "HPRCA Physical Education Teacher ke 187 posts, qualification, exam pattern, topic-wise syllabus aur 30 din ka preparation plan.",
    category: "SYLLABUS",
    exams: ["hprca/physical-education-teacher"],
    content: `**Physical Education Teacher** ke liye HPRCA ne November 2026 ki **Advt No. 14/2026** me reports ke mutabik **187 posts (Post Code 26059)** rakhe hain. Last date **5 December 2026** hai. Purane teacher notifications me bhi Physical Education ke alag posts the aur unka CBT 27 October 2026 ko announce hua tha. Poori vacancy list ke liye [HPRCA Teacher 2026: 2,423 posts](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) padhein.

## Qualification aur pattern

- **Qualification:** B.P.Ed., B.P.E., integrated physical education degree ya koi NCTE-recognised qualification (advertisement dekhein).
- **Age:** 18 se 45 saal (1 January 2026 tak).
- **Pattern (reported):** CBT ya written screening test, 120 MCQs, 120 marks, 90 minutes. Negative marking notification me specified nahi hai.
- Uske baad merit aur document verification.

## Syllabus: kya padhna hai

| Part | Topics |
|---|---|
| Physical education aur sports | Aims aur history, Olympic aur Asian Games, games ke rules aur court ke measurements, sports awards |
| Anatomy aur physiology | Skeletal aur muscular system, circulation, respiration |
| Fitness aur training | Strength, speed, endurance, flexibility, agility, warm-up, training methods, injuries |
| Yoga aur health | Asanas, pranayama, nutrition, hygiene, first aid |
| Pedagogy | Child development, learning theories, teaching methods |
| General | Himachal GK, current affairs, reasoning, English, Hindi |

## Kaun se facts yaad rakhne chahiye

- Football me ek team ke **11** khiladi, marathon **42.195 km**, vayask insaan me **206** haddiyan.
- Pehle aadhunik Olympic **1896, Athens** me hue.
- Bharat ka sabse bada khel sammaan **Major Dhyan Chand Khel Ratna**.
- International Yoga Day **21 June**; yogasutra ke rachayita **Patanjali**.
- Himachal se jude sports facts, jaise **Dharamshala ka HPCA stadium**, general section me aate hain.

## 30 din ka plan

1. **Week 1:** sports rules aur measurements (athletics, volleyball, basketball, kabaddi, kho-kho).
2. **Week 2:** anatomy, physiology aur fitness components.
3. **Week 3:** yoga, first aid aur pedagogy ke short notes.
4. **Week 4:** Himachal GK, current affairs aur timed mocks. Shuruaat [free Physical Education Teacher mock](${free("hprca-physical-education-teacher-free-mock-1")}) se karein.

Exam page: [HPRCA Physical Education Teacher](/hprca/physical-education-teacher). Figures job-listing sites se hain, final jaankari **hprca.hp.gov.in** se dekhein.`,
    faqs: [
      { q: "HPRCA Physical Education Teacher ke kitne posts hain?", a: "Reports ke mutabik Advt 14/2026 me 187 posts (Post Code 26059). Number tentative hai." },
      { q: "What is the Physical Education Teacher syllabus?", a: "Sports and physical education, anatomy and physiology, fitness and training, yoga and first aid, pedagogy, Himachal GK, current affairs, reasoning, English and Hindi." },
      { q: "Kya Physical Education Teacher ke liye TET chahiye?", a: "Reports ke mutabik post ke table me B.P.Ed. jaisi qualification di gayi hai aur TET ka zikr nahi hai. Official advertisement se confirm karein." },
      { q: "Physical Education Teacher ka free mock kahan milega?", a: "HPRCA Physical Education Teacher page par 15 questions ka free mock hai, Hindi aur English solutions ke saath." },
    ],
  },

  {
    slug: "hprca-computer-teacher-2026-syllabus-eligibility-95-posts",
    seoTitle: "HPRCA Computer Teacher 2026: 95 Posts, Syllabus, Eligibility",
    seoDescription: "HPRCA Computer Teacher 2026: 95 posts, qualification routes, 120-MCQ CBT, topic-wise syllabus and a free mock test to start preparing today.",
    title: "HPRCA Computer Teacher 2026: 95 Posts, Eligibility, Syllabus and Exam Pattern",
    titleHi: "एचपीआरसीए कंप्यूटर शिक्षक 2026: 95 पद, पात्रता, सिलेबस और परीक्षा पैटर्न",
    excerpt: "HPRCA Computer Teacher ke 95 posts: qualification ke routes, exam pattern, topic-wise syllabus aur taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/computer-teacher"],
    content: `**Computer Teacher** ke liye HPRCA ne **Advt No. 14/2026** me reports ke mutabik **95 posts (Post Code 26056)** nikale hain. Last date **5 December 2026**. Baaki subjects ki vacancy [yahan](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) dekhein.

## Eligibility (reported)

Computer science ya IT me degree, ya in me se koi ek route: **B.E./B.Tech. (CS/IT)**, B.E./B.Tech. ke saath recognised PG diploma, **M.Sc. computer science ya MCA**, Maths/Physics me PG ke saath PG diploma in computer science, ya **DOEACC 'B' / 'C' level**. Hindi aur English me padhane ki yogyata bhi chahiye. Age 18 se 45 saal (1 January 2026 tak). Exact marks advertisement me hain.

## Exam pattern

Reports ke mutabik CBT ya written screening test: **120 MCQs, 120 marks, 90 minutes**. Negative marking notification me specified nahi hai. Uske baad merit aur document verification.

## Syllabus

| Part | Topics |
|---|---|
| Fundamentals | Computer generations, memory (RAM/ROM), input/output devices, number systems, logic gates |
| Software | Operating systems, MS Office, programming basics (C/C++/Python), algorithms, data structures |
| DBMS | Keys, normalisation, SQL queries |
| Networking aur web | Topologies, protocols, IP addressing, internet, HTML, cyber security |
| Pedagogy | Child development, learning theories, ICT in education |
| General | Himachal GK, current affairs, reasoning, English, Hindi |

## Jaldi poochhe jaane wale facts

- **1 KB = 1024 bytes**; decimal 10 ka binary **1010**.
- **RAM volatile** hai, ROM non-volatile.
- **SQL** ka matlab Structured Query Language; **primary key** har record ko unique pehchaan deti hai.
- **IPv4** 32 bit ka hota hai, **IPv6** 128 bit ka.

## Taiyari plan

Pehle 2 hafte computer concepts aur SQL, phir programming aur networking, aakhri hafte pedagogy, [Himachal GK](/himachal) aur timed mocks. Shuruaat [free Computer Teacher mock](${free("hprca-computer-teacher-free-mock-1")}) se karein. Exam page: [HPRCA Computer Teacher](/hprca/computer-teacher). Final jaankari **hprca.hp.gov.in** se confirm karein.`,
    faqs: [
      { q: "HPRCA Computer Teacher ke kitne posts hain?", a: "Reports ke mutabik Advt 14/2026 me 95 posts (Post Code 26056). Number tentative hai." },
      { q: "What is the qualification for HPRCA Computer Teacher?", a: "A computer science or IT degree, or an equivalent route such as MCA, M.Sc. computer science, a PG diploma or DOEACC B/C level, as listed in the advertisement." },
      { q: "Computer Teacher ka exam pattern kya hai?", a: "Reports ke mutabik 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai, official advertisement dekhein." },
      { q: "Is there a free Computer Teacher mock test?", a: "Yes. The HPRCA Computer Teacher page has a free 15-question mock with Hindi and English solutions." },
    ],
  },

  {
    slug: "hp-govt-jobs-last-date-open-vacancies-13-november-2026",
    seoTitle: "HP Govt Jobs Last Date: Open Vacancies, 13 November 2026 Update",
    seoDescription: "HP govt jobs open on 13 November 2026: HPRCA Teacher (5 Dec), Radiographer (7 Dec), Naib Tehsildar Kinnaur, AIIMS Bilaspur, NIT Hamirpur and more.",
    title: "HP Govt Jobs 13 November 2026: Open Vacancies and Last Dates (Teacher, Radiographer and More)",
    titleHi: "हिमाचल सरकारी नौकरी 13 नवंबर 2026: खुली भर्तियां और अंतिम तिथियां",
    excerpt: "13 November 2026 tak ki khuli Himachal bhartiyan: HPRCA Teacher aur Radiographer samet, last date ke order me, aur kin par jaldi apply karna hai.",
    category: "NOTIFICATION",
    exams: ["hprca/pgt-lecturer", "hprca/radiographer", "hppsc/ado", "hppsc/naib-tehsildar"],
    content: `Last update: **13 November 2026**. Dates FreeJobAlert jaise job-listing sites se hain, isliye apply karne se pehle official site par notification padhein. 9 November ki list ke liye [pichhla roundup](/blog/hp-govt-jobs-november-2026-open-vacancies-last-dates) dekhein.

## Exam wali badi bhartiyan

| Bharti | Posts | Last date |
|---|---|---|
| HPRCA Teacher, 15 subjects (Advt 14/2026) | 2,423 | **5 December 2026** |
| HPRCA Radiographer, Job Trainee (Advt 15/2026) | 43 | **7 December 2026** |
| HPPSC Agriculture Development Officer (Advt 63/9-2026) | 23 | 30 November 2026 (listing ke mutabik) |
| Deputy Commissioner Kinnaur: Naib Tehsildar | 3 | 23 November 2026 |

- HPRCA Teacher: [subject-wise vacancy aur dates](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy).
- HPRCA Radiographer: [eligibility aur fee](/blog/hprca-radiographer-job-trainee-2026-43-posts-eligibility-last-date).
- HPPSC ADO ki last date pehle 22 October report hui thi, jabki ab listing 30 November dikha rahi hai. Isliye [HPPSC ADO page](/hppsc/ado) aur hppsc.hp.gov.in par confirm karein.
- Kinnaur Naib Tehsildar district level ki bharti hai. Taiyari ke liye [Naib Tehsildar page](/hppsc/naib-tehsildar) dekhein.

## Jaldi band hone wali (research, walk-in aur offline)

| Bharti | Last date |
|---|---|
| AIIMS Bilaspur: Registrar (1 post, offline) | 15 November |
| UHF (Solan): Senior Research Fellow, Young Professional (5 posts, offline) | 16 November |
| CSKHPKV: Senior Research Fellow (1 post) | 18 November |
| CSIR-IHBT: walk-in, Project Associate/Assistant (12 posts) | 19 November |
| NIT Hamirpur: Project Assistant (1 post) | 20 November |
| HPNLU: Professor of Law (2 posts) | 21 November |
| Governor's Secretariat HP: Vice-Chancellor (1 post) | 26 November |
| HPNLU: Counsellor (1 post) | 27 November |

Jal Shakti Vibhag ke 20 para posts (Multi Purpose Worker, Para Fitter) ki last date 13 November, yani aaj thi.

## Ab kya karein

1. Agar teacher ya radiographer ki qualification hai to **OTR** abhi karein, last week ke rush se bachein.
2. Qualification, age aur post code advertisement se match karein.
3. Taiyari ke liye [Himachal GK](/himachal) aur free mocks lagayein. Teacher ke liye [Physical Education](${free("hprca-physical-education-teacher-free-mock-1")}) aur [Computer](${free("hprca-computer-teacher-free-mock-1")}) ke free mocks hain.`,
    faqs: [
      { q: "Is waqt Himachal me sabse badi bharti kaun si hai?", a: "13 November 2026 tak HPRCA Teacher (Advt 14/2026) ke 2,423 posts sabse badi bharti hai. Last date 5 December 2026 hai." },
      { q: "HPRCA Radiographer 2026 ki last date kya hai?", a: "7 December 2026, raat 11:59 baje. Form 12 November se chalu hai." },
      { q: "Which HP recruitments close in the next week?", a: "AIIMS Bilaspur Registrar (15 Nov), UHF research posts (16 Nov), CSKHPKV SRF (18 Nov), CSIR-IHBT walk-in (19 Nov) and NIT Hamirpur Project Assistant (20 Nov), per the listing." },
    ],
  },
];
