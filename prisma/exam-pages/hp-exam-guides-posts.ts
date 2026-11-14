import type { PostSeed } from "./types";

// Evergreen SEO guides for the Himachal exams whose only coverage was a roundup or one syllabus post: HPPSC Assistant Professor
// and ADO (no dedicated post at all), Naib Tehsildar, Head Constable, Driver Constable, Lab Assistant, PGIMER Nursing Officer,
// HP SET, Anganwadi Supervisor, KCCB / JCCB Clerk, HP Current Affairs, the HPRCA Clerk typing test and the five new HPRCA
// subject-teacher exams. Each post takes a search intent the existing posts do not (selection stages, revenue terms, rank
// ladder, road signs, comparisons, revision systems). Facts come only from the exam pages in this folder; no date, vacancy
// count or fee is introduced, and every post sends the reader to the official notification for those.

const free = (slug: string) => `/tests/${slug}`;

export const HP_EXAM_GUIDES_POSTS: PostSeed[] = [
  {
    slug: "hppsc-assistant-professor-2026-paper-1-paper-2-personality-test-selection",
    seoTitle: "HPPSC Assistant Professor 2026: Paper I, Paper II and Interview",
    seoDescription: "HPPSC Assistant Professor 2026 selection: Paper I screening (100 marks, qualifying), Paper II subject test (120 marks), 30-mark personality test and how merit is made.",
    title: "HPPSC Assistant Professor 2026: Paper I, Paper II, Personality Test and How Final Merit Is Made",
    titleHi: "एचपीपीएससी असिस्टेंट प्रोफेसर 2026: पेपर I, पेपर II, पर्सनैलिटी टेस्ट और फाइनल मेरिट",
    excerpt: "HPPSC Assistant Professor me Paper I sirf qualifying hai, merit Paper II aur interview se banti hai. Teeno stages, qualification aur taiyari ka sahi order.",
    category: "EXAM_PATTERN",
    exams: ["hppsc/assistant-professor"],
    content: `**Assistant Professor** (College Cadre) ki bharti **HPPSC, Shimla** subject-wise karta hai. Sabse badi galti jo aspirants karte hain: Paper I par saara time laga dena, jabki 2026 scheme me merit kahin aur se banti hai.

## Teen stages, 2026 scheme (reports ke mutabik)

| Stage | Marks | Role |
|---|---|---|
| Paper I (screening) | 100 | **Sirf qualifying**, merit me nahi judta |
| Paper II (subject aptitude test) | 120 | Descriptive, 3 ghante, merit me judta hai |
| Personality test | 30 | Merit me judta hai |

**Final merit = Paper II + personality test.** Paper I sirf yeh decide karta hai ki aapka Paper II check hoga ya nahi.

## Paper I me kya aata hai

Reports ke mutabik split: **Himachal GK (30), national aur international affairs (30), Hindi (20), English (20)**. Ek report me **0.25 negative marking** bataya gaya hai. Yeh figures confirm karne ke liye HPPSC ka advertisement dekhein.

## Qualification

**Master's degree, kam se kam 55% marks (reserved categories ke liye 50%), plus UGC NET / SLET / SET, ya PhD** as per UGC rules. 2026 me advertisement lagbhag **369 posts, 22 subjects** ka tha (reports 369 se 410 tak batati hain) aur har subject ke liye alag online application thi. Subject-wise conditions aur age limit advertisement me hain.

## Taiyari ka order

1. **Subject (Paper II):** UGC NET level par poora syllabus, answer writing ki practice, kyunki Paper II descriptive hai.
2. **Paper I cut-off:** roz thoda Himachal GK aur current affairs. Qualifying hai, isliye 100% nahi, safe cut-off ka target rakho.
3. **Interview:** apna subject, teaching approach aur higher education ke current issues.

Paper I ki practice ke liye free [HPPSC Assistant Professor mock](${free("hppsc-assistant-professor-free-mock-1")}) do aur [Himachal GK](/himachal) revise karo. Poora exam page: [Assistant Professor](/hppsc/assistant-professor). Ek hi jagah ki open vacancies: [HPPSC vacancies roundup](/blog/hppsc-recruitment-2026-open-vacancies-ado-hpas-assistant-professor).

Mocks: abhi is exam ke liye **free Paper I mock** (15 questions) hai. Medical Education (DMER) ke Assistant Professor posts alag advertise hote hain, yeh page College Cadre ke liye hai.`,
    faqs: [
      { q: "Does Paper I count in HPPSC Assistant Professor final merit?", a: "In the 2026 scheme as reported, no. Paper I (100 marks) is a qualifying screening test, and final merit is made from Paper II (120 marks) plus the 30-mark personality test. Check the current advertisement for any change." },
      { q: "HPPSC Assistant Professor ke liye qualification kya hai?", a: "Subject me Master's degree (kam se kam 55%, reserved categories ke liye 50%) aur UGC NET/SLET/SET, ya PhD as per UGC rules. Subject-wise shartein HPPSC ke advertisement me hoti hain." },
      { q: "Is Paper II of HPPSC Assistant Professor objective or descriptive?", a: "As reported for 2026, Paper II is a descriptive subject aptitude test of 120 marks and 3 hours. Confirm the format in the HPPSC advertisement." },
      { q: "Himachal GK kitna zaroori hai Assistant Professor ke liye?", a: "Paper I me Himachal GK ek alag section hai, aur Paper I clear kiye bina Paper II check nahi hota. Isliye roz thoda revision zaroor karein." },
    ],
  },

  {
    slug: "hppsc-ado-agriculture-development-officer-eligibility-syllabus-himachal-agriculture",
    seoTitle: "HPPSC ADO: Eligibility, Syllabus and Himachal Agriculture Topics",
    seoDescription: "HPPSC Agriculture Development Officer: B.Sc and M.Sc Agriculture eligibility, selection stages, syllabus areas and Himachal crop, apple and natural farming topics.",
    title: "HPPSC ADO (Agriculture Development Officer): Eligibility, Selection Process, Syllabus and Himachal Agriculture Topics",
    titleHi: "एचपीपीएससी एडीओ (कृषि विकास अधिकारी): पात्रता, चयन प्रक्रिया, सिलेबस",
    excerpt: "HPPSC ADO ki qualification, selection stages, syllabus aur woh Himachal-specific agriculture topics jo paper me seedhe poochhe jaate hain.",
    category: "SYLLABUS",
    exams: ["hppsc/ado"],
    content: `**Agriculture Development Officer (ADO)** Himachal ke Agriculture Department me block level par kisanon ko fasal, mitti, inputs, pest management aur sarkari yojanaon par guide karta hai. Bharti **HPPSC, Shimla** karta hai.

## 2026 advertisement: pehle yeh jaan lo

September 2026 me HPPSC ne **23 ADO posts (Advt. No. 63/9-2026)** nikaale. Reports ke mutabik yeh **backlog posts the aur sirf Himachal ke ex-servicemen ke wards** (dependent son, daughter, wife) ke liye reserved the; split **19 UR-ExSM, 3 SC-ExSM aur 1 OBC-ExSM** bataya gaya. Applications **22 October 2026** ko band ho gayi. General candidates ke liye general ADO notification ka intezaar karna hoga, jo HPPSC ki site par aayegi.

## Qualification aur selection (reports ke mutabik)

- **4-year B.Sc. (Agriculture)** aur **second-class M.Sc. (Agriculture)** (first class desirable).
- Age **18 se 45 saal**, 1 January 2026 ko.
- **Computer-based Paper I screening test**, phir **personality test**. Marks aur duration advertisement me dekhein.

## Syllabus ke areas

| Area | Topics |
|---|---|
| Agronomy | Fasal, cropping systems, weed aur water management |
| Soil science | Soil fertility, fertilisers, soil testing |
| Horticulture | Fruit, vegetables, floriculture, post-harvest |
| Plant protection | Entomology, plant pathology, IPM |
| Extension aur economics | Extension methods, farmer schemes, marketing, statistics |
| Breeding | Genetics, plant breeding, seed technology |
| Himachal agriculture | Fruit belts, major crops, natural farming, state schemes |
| General awareness | Himachal GK, current affairs, English |

## Himachal-specific topics jo yaad rakhne hain

Himachal ki **fasalon aur fruit zones**, apple aur sabzi ki kheti, seed potato, **natural farming** aur state ki agriculture-horticulture schemes. Yeh woh marks hain jo degree notes se nahi aate, isliye iski alag notebook banao.

Practice ke liye free [HPPSC ADO mock](${free("hppsc-ado-free-mock-1")}) do. Poora exam page: [ADO](/hppsc/ado), syllabus: [ADO syllabus](/hppsc/ado/syllabus). Mocks: abhi free mock (15 questions) uplabdh hai.`,
    faqs: [
      { q: "Can general candidates apply for HPPSC ADO?", a: "Not in the 2026 advertisement. As reported, all 23 posts (Advt. 63/9-2026) were backlog posts for wards of Himachal ex-servicemen. Watch hppsc.hp.gov.in for a general ADO notification." },
      { q: "ADO ke liye qualification kya hai?", a: "2026 ke advertisement ke mutabiq 4-year B.Sc. (Agriculture) aur second-class M.Sc. (Agriculture), age 18 se 45 saal (1 January 2026 ko). Exact conditions HPPSC ke advertisement me dekho." },
      { q: "Does the ADO paper ask Himachal-specific agriculture?", a: "Yes. Himachal's crops, fruit zones, horticulture and natural farming schemes are regularly asked along with Himachal GK and current affairs." },
      { q: "ADO ki taiyari kaise karein?", a: "Degree notes se agronomy, soil aur extension revise karo, Himachal ki fasalon aur schemes ki alag copy banao aur timed mocks do." },
    ],
  },

  {
    slug: "naib-tehsildar-revenue-terms-jamabandi-khasra-girdawari-intkal-explained",
    seoTitle: "Revenue Terms: Jamabandi, Khasra, Girdawari, Intkal Explained",
    seoDescription: "Naib Tehsildar aur Patwari exam ke revenue terms: jamabandi, khasra, girdawari, intkal, fard, shajra aur revenue officers ki hierarchy, aasan bhasha me.",
    title: "Revenue Terms for Naib Tehsildar and Patwari Exams: Jamabandi, Khasra, Girdawari, Intkal, Fard and Shajra Explained",
    titleHi: "नायब तहसीलदार परीक्षा के राजस्व शब्द: जमाबंदी, खसरा, गिरदावरी, इंतकाल",
    excerpt: "Revenue ke woh terms jo Naib Tehsildar aur Patwari paper me baar-baar aate hain, ek table me, officers ki hierarchy ke saath.",
    category: "STRATEGY",
    exams: ["hppsc/naib-tehsildar", "hp-revenue/patwari"],
    content: `Naib Tehsildar paper me **Himachal GK ke baad sabse zyada weight revenue knowledge** ka hota hai, aur yehi hissa degree notes se nahi aata. Yeh terms ek baar pakke ho gaye to marks pakke.

## Land records ke terms

| Term | Matlab |
|---|---|
| **Jamabandi** | Record of rights: zameen ka maalik kaun hai aur kitni zameen |
| **Khasra** | Plot (khasra number) ka record |
| **Girdawari** | Fasal ki inspection ka record |
| **Intkal** | Mutation: maalikana haq badalne par record me naam badalna |
| **Fard** | Record ki copy |
| **Shajra** | Map ya family tree |

## Revenue officers ki hierarchy

**Patwari → Kanungo → Naib Tehsildar → Tehsildar → SDM → Deputy Commissioner.**

Naib Tehsildar, Tehsildar ke neeche tehsil ya sub-tehsil ka revenue kaam dekhta hai: land records, mutation, girdawari, certificates aur land revenue ki vasooli. Yeh Tehsildar aur ucche revenue service ka stepping stone hai.

## Kaise yaad rakhein

1. Har term ke saath **ek line ka example** likho (jaise "zameen bechi gayi to intkal hoga").
2. Hierarchy ko **neeche se upar** ratta maaro aur ulta bhi.
3. Himachal ke land laws ka outline padho: land revenue, tenancy aur land reforms.
4. Fir Himachal [history, geography aur administration](/himachal) revise karo.

## Mock practice

Free [Naib Tehsildar mock](${free("hppsc-naib-tehsildar-free-mock-1")}) me revenue ke questions bhi hain. Bharti ki status aur eligibility ke liye [Naib Tehsildar recruitment post](/blog/hp-naib-tehsildar-recruitment-2026-status-eligibility-syllabus) dekhein, aur exam page: [Naib Tehsildar](/hppsc/naib-tehsildar). Patwari ki taiyari ke liye [Patwari exam page](/hp-revenue/patwari).`,
    faqs: [
      { q: "Jamabandi aur khasra me kya fark hai?", a: "Jamabandi zameen ke maalik aur haq ka record hai (record of rights), jabki khasra ek plot ka number aur uska record hai." },
      { q: "What is intkal in revenue records?", a: "Intkal means mutation: when ownership changes by sale, inheritance or gift, the name in the revenue record is changed through intkal." },
      { q: "Girdawari kya hoti hai?", a: "Girdawari fasal ki inspection ka record hai, jise revenue staff khet par jaakar likhta hai." },
      { q: "Are these terms useful for the Patwari exam too?", a: "Yes. Patwari works with these records daily, so the same terms are asked in both Patwari and Naib Tehsildar papers." },
    ],
  },

  {
    slug: "hp-police-constable-head-constable-asi-si-rank-ladder-which-exam-to-prepare",
    seoTitle: "HP Police Ranks: Constable to SI and Which Exam to Prepare",
    seoDescription: "HP Police rank ladder from Constable, Head Constable and ASI to Sub-Inspector, how each is filled and how to plan preparation across Constable, HC and SI papers.",
    title: "HP Police Rank Ladder: Constable, Head Constable, ASI and SI, and Which Exam to Prepare First",
    titleHi: "एचपी पुलिस रैंक: कांस्टेबल, हेड कांस्टेबल, एएसआई और एसआई, पहले कौन सी परीक्षा",
    excerpt: "Constable se Sub-Inspector tak ka rank ladder, kaun si post direct bharti aur kaun si promotion se, aur ek hi taiyari se kitne papers cover hote hain.",
    category: "STRATEGY",
    exams: ["hp-police/head-constable", "hp-police/constable", "hp-police/sub-inspector"],
    content: `HP Police me career ka seedha raasta hai: **Constable → Head Constable → Assistant Sub-Inspector (ASI) → Sub-Inspector (SI)**. Har rank ka paper alag hota hai, lekin taiyari kaafi had tak common hai.

## Har rank kya karta hai

| Rank | Kaam |
|---|---|
| Constable | Field duty, law and order, patrolling |
| Head Constable | Constables ki nigrani, station ke records aur likhit kaam, SI ki madad |
| ASI | Investigation me madad aur station ka supervision |
| Sub-Inspector | Investigation aur station-level command |

**Head Constable** ki post direct recruitment ya **promotion** dono se bhari ja sakti hai, aur ministerial (clerical) stream me computer ka kaam bhi hota hai. 2026 ke liye hum Head Constable ka koi confirmed advertisement nahi verify kar paaye, isliye hppolice.gov.in aur hprca.hp.gov.in dekhte rahein.

## Ek taiyari, teen papers

Teeno papers me ye common hai:

- **Himachal GK:** history, geography, rivers, districts, culture, administration
- **General studies:** polity, geography, general science, current affairs, criminal law ki basics
- **Reasoning aur maths:** series, coding-decoding, percentage, ratio, speed-distance
- **English aur Hindi**

Head Constable me upar se **computer basics** aur thoda higher level aata hai. SI ka level aur bhi upar hota hai, jiske liye [SI syllabus post](/blog/hp-police-sub-inspector-syllabus-exam-pattern-preparation) dekhein.

## Kahan se shuru karein

1. Agar bharti open hai to usi rank ki taiyari karo.
2. Warna **Constable level** ka base pakka karo, kyunki wahi baaki ranks ki neev hai.
3. Physical standards aur efficiency tests ki taiyari written ke saath chalate raho.

Free mocks: [Head Constable](${free("hp-police-head-constable-free-mock-1")}), [Sub-Inspector](${free("hp-police-sub-inspector-free-mock-1")}). Exam pages: [Constable](/hp-police/constable), [Head Constable](/hp-police/head-constable), [SI](/hp-police/sub-inspector). Head Constable ki alag detail: [Head Constable post](/blog/hp-police-head-constable-recruitment-promotion-syllabus).`,
    faqs: [
      { q: "Head Constable aur Constable me kya antar hai?", a: "Head Constable constable se upar ka rank hai: wo constables ki nigrani karta hai aur station ke records aur likhit kaam sambhalta hai. Bharti aur promotion dono raaste ho sakte hain." },
      { q: "Can Constable preparation be used for Head Constable?", a: "Yes. Himachal GK, reasoning and maths are common. Add computer basics and aim for a slightly higher difficulty level." },
      { q: "What comes after Head Constable in HP Police?", a: "The usual ladder is Head Constable, then Assistant Sub-Inspector (ASI), then Sub-Inspector (SI). Promotion rules are in the department's service rules." },
    ],
  },

  {
    slug: "hp-police-driver-constable-road-signs-motor-vehicles-act-engine-basics",
    seoTitle: "HP Police Driver Constable: Road Signs, MV Act and Engine Basics",
    seoDescription: "HP Police Driver Constable paper me road signs, Motor Vehicles Act 1988 aur engine ke basics kaise padhein, saath me driving test aur constable subjects ki taiyari.",
    title: "HP Police Driver Constable: How to Prepare Road Signs, Motor Vehicles Act and Engine Basics",
    titleHi: "एचपी पुलिस ड्राइवर कांस्टेबल: रोड साइन, मोटर व्हीकल एक्ट और इंजन की तैयारी",
    excerpt: "Driver Constable paper constable jaisa hai, bas upar se driving aur vehicle ka gyan. Road signs, MV Act aur engine basics ka seedha study plan.",
    category: "STRATEGY",
    exams: ["hp-police/driver-constable", "hp-police/constable"],
    content: `**Driver Constable** wo constable hai jo police vehicle chalata hai. Usse valid driving licence, traffic rules ka gyan aur gaadi ko chalu halat me rakhna aana chahiye. Written paper constable jaisa hota hai (Himachal GK, general knowledge, reasoning, maths), lekin upar se **driving aur vehicle ke questions** bhi aa sakte hain.

2026 ke liye hum Driver Constable ka koi confirmed advertisement verify nahi kar paaye. Licence ki type, physical standards, driving test aur written paper advertisement me diye jaate hain, isliye hppolice.gov.in aur hprca.hp.gov.in zaroor dekhein.

## Teen extra topics

### 1. Road signs
Signs teen groups me padhein:

- **Mandatory (regulatory) signs:** jo karna zaroori hai, jaise stop, speed limit, no entry
- **Cautionary (warning) signs:** aage kya hone wala hai, jaise curve, school, crossing
- **Informatory signs:** jaankari, jaise petrol pump, hospital, parking

Himachal me **hill road** ke signs (sharp curve, falling rocks, hairpin bend) ko alag se dekhein.

### 2. Motor Vehicles Act
**Motor Vehicles Act, 1988** ki basics: driving licence, registration, insurance, traffic offences aur penalties ka outline. Exact penalty amounts amendments ke saath badalte hain, isliye latest figure official source se check karein.

### 3. Engine aur maintenance
- Four-stroke engine ke chaar stroke: **suction, compression, power, exhaust**
- Petrol aur diesel engine ka basic fark
- Daily checks: tyre pressure, engine oil, coolant, brake, lights

## Baaki taiyari

Constable subjects, yaani [Himachal GK](/himachal), reasoning aur maths, roz ek ghanta. Driving test aur physical test ki practice written ke saath chalate raho.

Free mock: [Driver Constable mock](${free("hp-police-driver-constable-free-mock-1")}). Exam pages: [Driver Constable](/hp-police/driver-constable) aur [Constable](/hp-police/constable). Physical test ki planning ke liye [HP Police physical test preparation plan](/blog/hp-police-physical-test-preparation-plan-running-fitness) dekhein.`,
    faqs: [
      { q: "Driver Constable paper me kya extra aata hai?", a: "Constable ke subjects ke saath road signs, Motor Vehicles Act, engine ke parts aur basic maintenance. Written ke baad driving aur physical test bhi hote hain." },
      { q: "What are the three groups of road signs?", a: "Mandatory (regulatory), cautionary (warning) and informatory signs." },
      { q: "How many strokes does a four-stroke engine have?", a: "Four: suction, compression, power (combustion) and exhaust." },
      { q: "Is a driving licence required for Driver Constable?", a: "Yes, a valid driving licence of the type given in the advertisement is required. Check the notification for the exact licence and experience condition." },
    ],
  },

  {
    slug: "hprca-lab-assistant-ncert-physics-chemistry-biology-lab-safety-study-plan",
    seoTitle: "HPRCA Lab Assistant: NCERT Science and Lab Safety Study Plan",
    seoDescription: "Lab Assistant exam ke liye NCERT physics, chemistry, biology, lab apparatus aur safety rules ka subject-wise study plan, free mock test ke saath.",
    title: "HPRCA Lab Assistant: NCERT Physics, Chemistry, Biology and Lab Safety Study Plan",
    titleHi: "लैब असिस्टेंट परीक्षा: NCERT फिजिक्स, केमिस्ट्री, बायोलॉजी और लैब सेफ्टी की तैयारी",
    excerpt: "Lab Assistant paper 10+2 science level ka hota hai. Subject-wise plan, jaruri apparatus aur safety rules, jo seedhe questions ban jaate hain.",
    category: "STRATEGY",
    exams: ["hprca/lab-assistant"],
    content: `**Lab Assistant** school aur college laboratories ki technical support post hai: apparatus aur chemicals taiyar karna, stock aur records rakhna, safety rules follow karna aur practicals me madad. Paper isi kaam ke hisaab se **science-based** hota hai.

Is post ka maqsad hai ki aap NCERT se kya padhein, kya chhodein aur kaise revise karein. Bharti ki status ke liye hprca.hp.gov.in aur department notice dekhein, aur [Lab Assistant syllabus post](/blog/hprca-lab-assistant-syllabus-exam-pattern-preparation) me syllabus ka poora outline hai.

## Subject-wise plan

| Subject | Kya padhein | Kya yaad rakhein |
|---|---|---|
| Physics | Mechanics, heat, light, sound, electricity, magnetism | Units, formulae, simple apparatus |
| Chemistry | Atomic structure, periodic table, acids-bases-salts | Common compounds ke formulae |
| Biology | Cell, human body, plants, ecology, health | Nutrition aur common diseases |
| Maths | Average, ratio, percentage, basic algebra | Roz 10 sawal |
| Himachal GK | Geography, history, polity | Rivers, districts |

NCERT ke **class 9 se 12** ke chapters ek baar revise karo. Questions seedhe NCERT level ke hote hain, isliye bahut advanced books ki zaroorat nahi.

## Lab ka gyan (easy marks)

- **Apparatus:** beaker, conical flask, burette, pipette, Bunsen burner, condenser, microscope ke parts
- **Safety:** acid ko paani me dheere dheere milate hain, paani ko acid me nahi; chemicals ki labelling aur safe storage; first aid ki basics
- Goggles, gloves aur lab coat ka matlab aur upyog

## Hafte ka plan

1. Din 1 se 4: ek ek subject ka NCERT revision aur short notes
2. Din 5: lab apparatus aur safety
3. Din 6: maths aur Himachal GK
4. Din 7: ek timed mock aur galtiyan notebook me

Free [Lab Assistant mock](${free("hprca-lab-assistant-free-mock-1")}) se format samajh lo. Exam page: [Lab Assistant](/hprca/lab-assistant). Abhi free mock (15 questions) hi uplabdh hai.`,
    faqs: [
      { q: "Lab Assistant ke liye qualification kya hoti hai?", a: "Aam taur par science ke saath 10+2 maangi jaati hai, lekin exact qualification advertisement me likhi hoti hai. Apply karne se pehle latest notification dekhein." },
      { q: "Which science level are the questions?", a: "Mostly school science up to class 10+2, based on NCERT books, plus laboratory apparatus and safety." },
      { q: "Is there negative marking in the Lab Assistant exam?", a: "That depends on the advertisement. Our free mock uses 0.25 negative marking for practice; always check the official pattern." },
    ],
  },

  {
    slug: "pgimer-nursing-officer-vs-hprca-staff-nurse-which-exam-to-prepare-himachal",
    seoTitle: "PGIMER Nursing Officer vs HPRCA Staff Nurse: Which to Prepare",
    seoDescription: "PGIMER Nursing Officer aur HPRCA Staff Nurse me fark: kaun bharti karta hai, qualification, exam aur ek hi taiyari se dono kaise cover karein.",
    title: "PGIMER Nursing Officer vs HPRCA Staff Nurse: Differences and How to Prepare for Both",
    titleHi: "पीजीआईएमईआर नर्सिंग ऑफिसर बनाम एचपीआरसीए स्टाफ नर्स: कौन सी तैयारी करें",
    excerpt: "Himachal ke nursing graduates ke liye do popular raaste: PGIMER Chandigarh aur HPRCA Staff Nurse. Dono me fark aur common taiyari ek table me.",
    category: "STRATEGY",
    exams: ["pgimer/nursing-officer", "hprca/staff-nurse"],
    content: `Himachal ke nursing graduates aam taur par do raaste dekhte hain: **PGIMER Chandigarh ka Nursing Officer** aur **Himachal sarkar ka Staff Nurse (HPRCA)**. Dono me nursing subjects common hain, lekin bharti alag hoti hai.

## Do exams, ek nazar me

| | PGIMER Nursing Officer | HPRCA Staff Nurse |
|---|---|---|
| Recruiter | PGIMER, Chandigarh (central institute) | HPRCA, Hamirpur |
| Kya hai | Apni alag bharti aur apna online exam | Himachal sarkar ki bharti |
| Qualification | Aam taur par B.Sc. Nursing (ya GNM with experience, notification ke hisaab se) aur Nursing Council registration | Notification me diya jaata hai |
| Exam | Computer-based test | Notification me diya jaata hai |

**Zaroori:** PGIMER Himachal government ki bharti **nahi** hai. Yeh central institute hai jo apni notification aur apna exam khud chalata hai. Himachal ke bahut se nursing graduates Chandigarh ki nazdeeki aur pay ki wajah se apply karte hain. Age limit, vacancies aur pay level har notification me alag hote hain.

## Common taiyari

Dono papers ka bada hissa **nursing subjects** ka hota hai:

- Fundamentals of nursing, first aid aur procedures
- Medical-surgical nursing
- Community health nursing aur nutrition
- Child health (paediatric) nursing
- Obstetrics, gynaecology aur midwifery
- Mental health nursing

Standard nursing textbooks chapter-wise revise karo aur **scenario-based MCQs** aur drug-related questions ki practice karo. HPRCA Staff Nurse me upar se **Himachal GK** ki taiyari alag se karni hogi.

## Mocks

- PGIMER ke liye: [PGIMER Nursing Officer mock](${free("pgimer-nursing-officer-free-mock-1")}) aur [exam page](/pgimer/nursing-officer)
- HPRCA ke liye: [Staff Nurse mock](${free("hprca-staff-nurse-free-mock-1")}) aur [exam page](/hprca/staff-nurse)

Dono ka detail: [PGIMER syllabus post](/blog/pgimer-nursing-officer-syllabus-mock-test) aur [Staff Nurse recruitment post](/blog/hprca-assistant-staff-nurse-recruitment-2026-eligibility-exam-pattern).`,
    faqs: [
      { q: "Is PGIMER Nursing Officer a Himachal government job?", a: "No. PGIMER is a central institute in Chandigarh with its own recruitment and its own online exam." },
      { q: "Kya ek hi taiyari se dono exams ho sakte hain?", a: "Nursing subjects dono me common hain, isliye taiyari ka bada hissa common hai. HPRCA Staff Nurse ke liye Himachal GK alag se jodna hoga." },
      { q: "PGIMER Nursing Officer ke liye qualification kya hai?", a: "B.Sc. Nursing (ya GNM with experience jaisa notification me ho) aur Nursing Council me registration. Age limit aur experience notification me dekhein." },
    ],
  },

  {
    slug: "hp-set-paper-1-teaching-aptitude-research-aptitude-topic-wise-preparation",
    seoTitle: "HP SET Paper I: Teaching and Research Aptitude Topic-wise Plan",
    seoDescription: "HP SET Paper I ki topic-wise taiyari: teaching aptitude, research aptitude, reasoning, comprehension aur general awareness, UGC NET Paper I ke saath common.",
    title: "HP SET Paper I: Topic-wise Preparation of Teaching Aptitude, Research Aptitude, Reasoning and General Awareness",
    titleHi: "एचपी सेट पेपर I: टीचिंग एप्टीट्यूड, रिसर्च एप्टीट्यूड और रीजनिंग की तैयारी",
    excerpt: "HP SET ka Paper I har candidate ke liye common hai. Topic-wise plan jo UGC NET Paper I ki taiyari me bhi kaam aata hai.",
    category: "SYLLABUS",
    exams: ["hpu/hp-set", "hppsc/assistant-professor"],
    content: `**HP SET** State Eligibility Test hai jo **Himachal Pradesh University, Shimla** karti hai. Yeh Assistant Professor banne ki **eligibility** deta hai, seedha job nahi, bilkul UGC NET ki tarah. Date, application window aur subject list university ki website hpuniv.ac.in par aati hai, isliye wahi dekhein.

## Paper I har candidate ke liye common hai

Paper II aapka chuna hua subject hai, lekin **Paper I sabke liye same** hai. Iska structure UGC NET Paper I jaisa hai, isliye ek taiyari dono me kaam aati hai. Syllabus hamesha HP SET brochure ke hisaab se confirm karein.

## Topic-wise plan

| Unit | Kya padhein |
|---|---|
| Teaching aptitude | Teaching ka nature aur objectives, learner characteristics, teaching methods, teaching aids aur ICT, evaluation (formative aur summative), Bloom's taxonomy |
| Research aptitude | Research ka meaning aur types, research ke steps, hypothesis, sampling, data collection, thesis writing, research ethics |
| Reasoning | Verbal aur numerical reasoning, series, syllogism |
| Comprehension | Passage padhkar sawal |
| General awareness | Higher education in India, National Education Policy, environment, people aur development, general knowledge |

UGC NET Paper I me aam taur par 10 units hote hain (teaching, research, comprehension, communication, reasoning, data interpretation, ICT, people-development-environment, higher education). HP SET ka outline brochure me alag ho sakta hai, isliye dono ko milaakar dekhein.

## Hafte ka plan

1. **Teaching aur research** pe 3 din: yeh theory-based hai aur concepts yaad karne se marks aate hain.
2. **Reasoning aur comprehension** pe roz 30 minute.
3. **General awareness** ke liye NEP aur higher education ke latest changes.
4. Ek timed Paper I mock har hafte.

Free [HP SET Paper I mock](${free("hpu-hp-set-free-mock-1")}) ke saath shuru karein. Exam page: [HP SET](/hpu/hp-set). HPPSC Assistant Professor ki selection process ke liye [HPPSC Assistant Professor guide](/blog/hppsc-assistant-professor-2026-paper-1-paper-2-personality-test-selection) dekhein. Abhi free mock (15 questions) uplabdh hai.`,
    faqs: [
      { q: "HP SET kaun conduct karta hai?", a: "HP SET ka aayojan Himachal Pradesh University, Shimla karti hai. Date aur brochure university ki website par aate hain." },
      { q: "Is Paper I of HP SET the same as UGC-NET Paper I?", a: "The two are very similar: teaching aptitude, research aptitude, reasoning, comprehension and general awareness. Always follow the syllabus given in the HP SET brochure." },
      { q: "Does clearing HP SET give a government job?", a: "No. It gives eligibility for the post of assistant professor; the appointment is made separately through the recruiting body's selection process." },
    ],
  },

  {
    slug: "anganwadi-supervisor-icds-six-services-nutrition-vitamins-deficiency-diseases-notes",
    seoTitle: "Anganwadi Supervisor Notes: ICDS Services, Vitamins, Nutrition",
    seoDescription: "Anganwadi Supervisor exam ke short notes: ICDS ki 6 services, vitamins aur deficiency diseases, nutrition aur bal vikas, Himachal GK ke saath taiyari plan.",
    title: "Anganwadi Supervisor Exam Notes: ICDS Six Services, Vitamins and Deficiency Diseases, Nutrition and Child Development",
    titleHi: "आंगनवाड़ी पर्यवेक्षक नोट्स: ICDS की 6 सेवाएं, विटामिन और कुपोषण",
    excerpt: "Anganwadi Supervisor paper ke sabse scoring topics: ICDS ki chhe services, vitamins aur unki kami se hone wali bimariyan, nutrition aur child development.",
    category: "SYLLABUS",
    exams: ["hp-wcd/anganwadi-supervisor"],
    content: `**Anganwadi Supervisor** (Mukhya Sevika) kai Anganwadi centres ki nigrani karta hai: poshan aahar, pre-school shiksha, tikakaran aur health services ki jaanch, aur Anganwadi workers ki training. Isiliye paper me **ICDS, nutrition aur bal vikas** ka bada hissa hota hai.

Bharti ki taarikh aur qualification women and child development department ki notification aur hprca.hp.gov.in par dekhein. Kuch drives me **experienced Anganwadi workers** ke liye quota ya chhoot hoti hai, lekin yeh advertisement par depend karta hai.

## ICDS ki chhe services

**ICDS (Integrated Child Development Services)** 2 October 1975 ko shuru hui. Iski chhe services:

1. Supplementary nutrition
2. Pre-school non-formal education
3. Nutrition aur health education
4. Immunisation
5. Health check-up
6. Referral services

## Vitamins aur deficiency diseases

| Vitamin / Mineral | Kami se bimari |
|---|---|
| Vitamin A | Night blindness |
| Vitamin B1 | Beriberi |
| Vitamin C | Scurvy |
| Vitamin D | Rickets (bachchon me) |
| Vitamin B12 | Pernicious anaemia |
| Iodine | Goitre |
| Iron | Anaemia |

## Baaki topics

- **Bal vikas:** growth aur development, early childhood care and education
- **Mother aur child health:** breastfeeding, immunisation, antenatal care
- **Schemes:** Poshan Abhiyaan aur doosri child aur women welfare schemes
- **Himachal GK, general studies, reasoning, Hindi aur English**

## Study plan

Pehle hafte me ICDS aur nutrition ke notes banao, doosre me Himachal GK, aur teesre me timed mocks. Vitamin table ko roz ek baar dohrao.

Free [Anganwadi Supervisor mock](${free("hp-wcd-anganwadi-supervisor-free-mock-1")}) do. Exam page: [Anganwadi Supervisor](/hp-wcd/anganwadi-supervisor). Abhi free mock (15 questions) uplabdh hai. Anganwadi ki detail [syllabus post](/blog/hp-anganwadi-supervisor-syllabus-icds-nutrition-preparation) me bhi hai.`,
    faqs: [
      { q: "What are the six services of ICDS?", a: "Supplementary nutrition, pre-school non-formal education, nutrition and health education, immunisation, health check-up and referral services." },
      { q: "Anganwadi Supervisor ka kaam kya hota hai?", a: "Supervisor kai Anganwadi centres ki nigrani karta hai: poshan aahar, pre-school shiksha, tikakaran aur health services ki jaanch, aur Anganwadi workers ki training." },
      { q: "Can Anganwadi workers apply for the Supervisor post?", a: "Some drives keep a quota or relaxation for experienced Anganwadi workers. It depends on the advertisement, so read the eligibility section of the latest notification." },
    ],
  },

  {
    slug: "kccb-jccb-vs-hpscb-clerk-cooperative-bank-three-tier-structure-nabard-notes",
    seoTitle: "KCCB JCCB vs HPSCB Clerk: Cooperative Bank Structure and Notes",
    seoDescription: "KCCB, JCCB aur HPSCB Clerk me fark, cooperative bank ka three-tier structure, PACS aur NABARD ke notes aur banking-style paper ki taiyari.",
    title: "KCCB / JCCB Clerk vs HPSCB Clerk: Differences, Three-Tier Cooperative Structure, PACS and NABARD Notes",
    titleHi: "केसीसीबी / जेसीसीबी क्लर्क बनाम एचपीएससीबी क्लर्क: सहकारी बैंक के नोट्स",
    excerpt: "Himachal ke teen cooperative bank exams me kya alag hai, cooperative bank ka three-tier structure aur woh topics jo bank paper me baar-baar aate hain.",
    category: "STRATEGY",
    exams: ["kccb-jccb/clerk", "hpscb/clerk"],
    content: `Himachal me cooperative banks ke clerk exams ko log aksar ek hi samajh lete hain. Asal me **KCCB**, **JCCB** aur **HPSCB** alag banks hain jo apni bharti alag nikalte hain.

## Teeno me fark

| Bank | Kya hai |
|---|---|
| **KCCB** | Kangra Central Co-operative Bank (district central bank) |
| **JCCB** | Jogindra Central Co-operative Bank (district central bank) |
| **HPSCB** | Himachal Pradesh State Cooperative Bank (apex bank) |

Har bank apna notification, vacancies, qualification, age limit aur written test khud tay karta hai, aur exam bahari agency se bhi karwa sakta hai. Isliye bank ki official website dekhna zaroori hai. 2026 ke liye hum KCCB ya JCCB Clerk ka koi confirmed advertisement verify nahi kar paaye.

## Three-tier cooperative credit structure

1. **State level:** State Cooperative Bank (apex)
2. **District level:** District Central Cooperative Banks (jaise KCCB, JCCB)
3. **Village level:** Primary Agricultural Credit Societies (**PACS**)

**NABARD** is structure ko refinance aur supervise karta hai. Yeh sawal cooperative bank papers me baar-baar aate hain.

## Paper me kya aata hai

Paper banking-style objective hota hai:

- **Reasoning:** series, coding-decoding, blood relations, inequality, syllogism, puzzles aur seating arrangement
- **Numerical ability:** simplification, percentage, ratio, average, interest, profit-loss, time-work, data interpretation
- **English:** grammar, vocabulary, comprehension, error spotting
- **Banking aur cooperative awareness:** RBI, monetary policy terms, three-tier structure, PACS, NABARD, cooperative laws
- **Himachal GK** aur current affairs

## Taiyari

Roz banking-style reasoning aur quant ka ek set, English grammar ka revision, aur cooperative notes ek page me. Ek hi taiyari teeno banks ke liye kaam aati hai.

Free mocks: [KCCB / JCCB Clerk](${free("kccb-jccb-clerk-free-mock-1")}) aur [HPSCB Clerk](${free("hpscb-clerk-free-mock-1")}). Exam pages: [KCCB / JCCB Clerk](/kccb-jccb/clerk), [HPSCB Clerk](/hpscb/clerk). HPSCB ka syllabus: [HPSCB junior clerk post](/blog/hpscb-junior-clerk-syllabus-cooperative-societies-act-preparation).`,
    faqs: [
      { q: "KCCB aur JCCB kya hain?", a: "Ye Himachal ke district central cooperative banks hain: Kangra Central Co-operative Bank (KCCB) aur Jogindra Central Co-operative Bank (JCCB). Dono apni bharti alag nikalte hain." },
      { q: "Is this the same exam as the HPSCB Clerk?", a: "No. HPSCB is the State Cooperative Bank and has its own recruitment. The paper style is similar, so the preparation is largely common." },
      { q: "What is the three-tier cooperative credit structure?", a: "State Cooperative Bank at the state level, District Central Cooperative Banks at the district level, and Primary Agricultural Credit Societies (PACS) at the village level." },
    ],
  },

  {
    slug: "himachal-current-affairs-revision-system-state-national-international-weekly-tracker",
    seoTitle: "HP Current Affairs: Weekly Revision System for All HP Exams",
    seoDescription: "Himachal current affairs ka weekly revision system: state, national, international, sports aur awards ka tracker, 6 se 12 mahine ka plan aur free mock practice.",
    title: "Himachal Current Affairs Revision System: A Weekly Tracker for State, National and International Events",
    titleHi: "हिमाचल समसामयिकी रिविजन सिस्टम: राज्य, राष्ट्रीय और अंतरराष्ट्रीय का साप्ताहिक ट्रैकर",
    excerpt: "Current affairs padhna kaafi nahi, dohrana zaroori hai. Ek simple weekly tracker jo HPAS se Clerk tak har HP exam ke liye kaam karta hai.",
    category: "CURRENT_AFFAIRS",
    exams: ["hp-gk-ca/current-affairs", "hppsc/hpas", "hprca/clerk"],
    content: `Current affairs HP ke **har exam** me aata hai: HPAS, Clerk, Patwari, Police, JBT, TGT. Aam taur par 5 se 15 questions state aur national current affairs ke hote hain, lekin exact number har exam ki notification me dekhein. Is post me **padhne se zyada dohrane** ka system hai.

## Last 6 se 12 mahine

Exam se pehle ke **6 se 12 mahine** ki ghatnayein cover karo, aur exam ke 2 se 3 hafte pehle tak ki news bhi dekho. Hamare mock tests fixed hain aur sirf ho chuki ghatnaon par hain, isliye latest news ke liye monthly summary saath me padhein.

## Teen shreniyon ka tracker

| Shreni | Kya note karein |
|---|---|
| **Himachal** | Sarkari schemes, projects aur policies; awards, recognitions, festivals, fairs, tourism; roads, tunnels, hydro projects |
| **National** | Laws aur amendments, schemes aur missions, appointments, awards, reports aur indices, science aur space |
| **International** | Summits, organisations aur agreements, sports events aur records |

Har entry me **kaun, kya, kahan, kab aur number** likho. Static background (jaise kisi jagah ya person ka link) saath me jodo, kyunki wahi sawal ban jaata hai.

## Weekly routine

1. **Roz 20 minute:** din ki khabron se 5 points
2. **Weekend:** hafte ke notes ka revision aur 10 sawal khud banao
3. **Mahine ke ant me:** monthly summary se match karke gaps bharo

Yeh routine paper ke 8 se 12 marks surakshit kar sakti hai. Mahine ka example: [October 2026 Himachal current affairs](/blog/himachal-current-affairs-october-2026), aur mahine ki planning ke liye [monthly plan post](/blog/how-to-prepare-current-affairs-for-himachal-exams-monthly-plan).

Free [HP Current Affairs mock](${free("hp-current-affairs-free-mock-1")}) se shuru karo aur static hisse ke liye [Himachal GK](/himachal) padho. Exam page: [HP Current Affairs](/hp-gk-ca/current-affairs). Abhi free mock (15 questions) uplabdh hai.`,
    faqs: [
      { q: "Himachal ke exams me current affairs ke kitne questions aate hain?", a: "Har exam me alag hota hai, par aam taur par 5 se 15 questions state aur national current affairs ke hote hain. Pattern ke liye apne exam ki notification dekhein." },
      { q: "How many months of current affairs should I read?", a: "The last 6 to 12 months before the exam, plus the news of the last 2 to 3 weeks." },
      { q: "Are these tests useful for HPAS and Clerk both?", a: "Yes. State and national current affairs are common to all HP exams; the difficulty is higher in HPAS." },
    ],
  },

  {
    slug: "hprca-clerk-typing-test-30-wpm-english-25-wpm-hindi-practice-plan",
    seoTitle: "HPRCA Clerk Typing Test: 30 WPM English, 25 WPM Hindi Practice",
    seoDescription: "HPRCA Clerk typing skill test (30 wpm English ya 25 wpm Hindi, qualifying): speed aur accuracy ka practice plan, free typing tools aur written test ke saath time-table.",
    title: "HPRCA Clerk Typing Test: How to Reach 30 WPM in English or 25 WPM in Hindi with a 4-Week Practice Plan",
    titleHi: "एचपीआरसीए क्लर्क टाइपिंग टेस्ट: 30 WPM अंग्रेज़ी या 25 WPM हिंदी का 4 हफ्ते का प्लान",
    excerpt: "Clerk ke CBT ke baad qualifying typing test aata hai. 30 wpm English ya 25 wpm Hindi tak pahunchne ka 4 hafte ka plan, written test ke saath.",
    category: "STRATEGY",
    exams: ["hprca/clerk"],
    content: `HPRCA Clerk me written screening ke baad ek **qualifying typing skill test** hota hai. **2026 notification me** CBT **120 marks** ka tha aur typing ki speed **30 wpm (English) ya 25 wpm (Hindi)** maangi gayi thi. Commission applications zyada hone par ek preliminary screening bhi kara sakta hai. Current pattern hamesha HPRCA ke notification me confirm karein.

Typing **qualifying** hai, yaani marks merit me nahi judte, lekin fail hue to selection nahi hoga. Isliye isse last month tak mat taalo.

## WPM kya hota hai

Standard me **5 characters = 1 word**, aur **WPM = (total characters / 5) / minutes**. Accuracy bhi utni hi important hai: bahut galtiyon wali fast typing ki jagah saaf aur sahi typing behtar hai.

## 4 hafte ka plan

| Hafte | Focus | Roz ka time |
|---|---|---|
| 1 | Home row aur sahi finger placement, speed ki chinta nahi | 20 minute |
| 2 | Poore alphabets aur punctuation, accuracy 95% ke upar | 25 minute |
| 3 | Passages typing, speed badhana, galtiyan likhna | 30 minute |
| 4 | Timed tests, 5 minute ke passages, lagatar 30 wpm (Hindi ke liye 25 wpm) | 30 minute |

**Hindi typing** ke liye keyboard layout (Inscript ya Remington) wahi chuno jo notification me bataya gaya ho aur usi par practice karo.

## Written test ke saath balance

Typing ke liye roz 20 se 30 minute rakho aur baaki time written CBT ko do: Himachal GK, general studies, reasoning, maths, English, Hindi aur computer basics. Poori notification ki detail [HPRCA Clerk post](/blog/hprca-clerk-job-trainee-2026-40-posts-cbt-typing-test) me hai.

## Mocks

Written ke liye free [HPRCA Clerk mock](${free("hprca-clerk-free-mock-1")}) aur exam page [HPRCA Clerk](/hprca/clerk) dekhein. Clerk ki paid mock series bhi exam page par uplabdh hai.`,
    faqs: [
      { q: "What typing speed is required for HPRCA Clerk?", a: "In the 2026 notification the qualifying typing skill test asked for 30 wpm in English or 25 wpm in Hindi. Confirm the current requirement in the HPRCA notification." },
      { q: "Are typing marks added to the HPRCA Clerk merit?", a: "No. The typing skill test is qualifying, so it decides eligibility but is not added to the CBT marks." },
      { q: "WPM kaise ginte hain?", a: "Total characters ko 5 se divide karke minutes se divide karte hain, yaani 5 characters ek word maane jaate hain." },
    ],
  },

  {
    slug: "hprca-subject-teacher-2026-pe-computer-sanskrit-music-fine-arts-preparation-plan",
    seoTitle: "HPRCA Subject Teacher 2026: PE, Computer, Sanskrit, Music, Arts",
    seoDescription: "HPRCA PE, Computer, Sanskrit, Music aur Fine Arts Teacher ke liye ek common taiyari plan: subject paper aur common section ka time-table, free mocks ke saath.",
    title: "HPRCA Subject Teacher 2026: One Preparation Plan for PE, Computer, Sanskrit, Music and Fine Arts Teacher",
    titleHi: "एचपीआरसीए विषय शिक्षक 2026: PE, कंप्यूटर, संस्कृत, संगीत और ललित कला की तैयारी",
    excerpt: "Advt 14/2026 ke paanch subject-teacher exams ek hi pattern par hain. Subject aur common sections ke beech time kaise baantein, plan aur free mocks.",
    category: "STRATEGY",
    exams: ["hprca/physical-education-teacher", "hprca/computer-teacher", "hprca/sanskrit-teacher", "hprca/music-teacher", "hprca/fine-arts-teacher"],
    content: `HPRCA ke **Advt No. 14/2026** me **2,423 teacher posts** hain, jinme Physical Education, Computer, Sanskrit, Music aur Fine Arts Teacher bhi shamil hain. Subject-wise vacancy table [yahan](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) hai. Is post me paanchon ka ek **common taiyari plan** hai.

## Pattern (reports ke mutabik)

Computer-based ya written screening test, **120 MCQs, 120 marks, 90 minute**. Negative marking notification me specify nahi hai. Age **18 se 45 saal** (1 January 2026 tak). Sab figures hprca.hp.gov.in par confirm karein.

## Do hisse: subject aur common

| Hissa | Kya hai |
|---|---|
| **Subject paper** | Aapke subject ke technical sawal, jinka weight sabse zyada hai |
| **Common hissa** | Pedagogy, Himachal GK, current affairs, reasoning, English aur Hindi |

Subject ke hisse ki taiyari alag hai, common hissa paanchon me same hai.

## Subject-wise focus

- **Physical Education:** games ke rules aur measurements, anatomy aur physiology, fitness aur training, yoga, first aid, sports awards
- **Computer:** [syllabus aur exam page](/hprca/computer-teacher) ke hisaab se computer fundamentals aur pedagogy
- **Sanskrit:** sandhi, samas, karak, shabd aur dhatu roop, pratyay, sahitya aur chhand
- **Music aur Fine Arts:** apne subject ke theory aur practical-theory topics; detail exam pages par

## Time-table (hamara suggestion)

1. Roz ka **60%** time subject ko
2. **40%** common hisse ko: pedagogy, Himachal GK aur current affairs, reasoning, English, Hindi
3. Hafte me ek timed mock, 90 minute me

## Free mocks aur pages

- [Physical Education Teacher](${free("hprca-physical-education-teacher-free-mock-1")}) | [exam page](/hprca/physical-education-teacher)
- [Computer Teacher](${free("hprca-computer-teacher-free-mock-1")}) | [exam page](/hprca/computer-teacher)
- [Sanskrit Teacher](${free("hprca-sanskrit-teacher-free-mock-1")}) | [exam page](/hprca/sanskrit-teacher)
- [Music Teacher](${free("hprca-music-teacher-free-mock-1")}) | [exam page](/hprca/music-teacher)
- [Fine Arts Teacher](${free("hprca-fine-arts-teacher-free-mock-1")}) | [exam page](/hprca/fine-arts-teacher)

Abhi har exam ke liye free mock (15 questions) uplabdh hai. Naye hone par full-length series exam pages par jodi jaayengi.`,
    faqs: [
      { q: "What is the exam pattern for HPRCA subject teachers?", a: "As reported, a computer-based or written screening test of 120 MCQs for 120 marks in 90 minutes. Negative marking is not specified, so check the official advertisement." },
      { q: "Kya paanchon teacher posts ka common hissa same hai?", a: "Reports ke mutabik haan: pedagogy, Himachal GK, current affairs, reasoning, English aur Hindi common hain, aur subject ka paper alag hota hai." },
      { q: "Age limit kya hai in teacher posts ke liye?", a: "Reports ke mutabik 18 se 45 saal, 1 January 2026 tak. Relaxation aur exact conditions HPRCA ke advertisement me hain." },
    ],
  },
];
