import { catalogue } from "../catalogue";
import type { PostSeed } from "./types";

// SEO posts that close the blog gaps for Himachal exams: the three subject-teacher exams added from Advt 14/2026 (Sanskrit,
// Music, Fine Arts), the six exams that had no post at all (HPPSC AE, HPRCA Language Teacher, JOA Library, Steno Typist,
// Special Educator, Panchayat Secretary) and one pillar post listing every Himachal exam. The older exams' posts only restate
// what their exam page already says (December 2025 advertisement No. 06/2025 and the 2026 drives), so no new figure is
// introduced; the three new ones use the Advt 14/2026 figures as reported by FreeJobAlert on 13 November 2026.

const free = (slug: string) => `/tests/${slug}`;

// One row per Himachal body, built from the catalogue so the list never drifts from the exams that exist.
const hpBodies = catalogue.filter((b) => (!b.sites || b.sites.includes("hp")) && !b.sites?.includes("*"));
const examTable = hpBodies.map((b) => `| ${b.name} | ${b.exams.map((e) => `[${e.name}](/${b.slug}/${e.slug})`).join(", ")} |`).join("\n");
const examCount = hpBodies.reduce((n, b) => n + b.exams.length, 0);

export const HP_ALL_EXAMS_POSTS: PostSeed[] = [
  {
    slug: "himachal-pradesh-govt-exams-list-2026-hprca-hppsc-police-tet",
    seoTitle: "HP Govt Exams List 2026: HPRCA, HPPSC, Police, TET and More",
    seoDescription: "Complete list of Himachal Pradesh government exams 2026: HPPSC, HPRCA, HP Police, High Court, HP TET, Patwari, HPSEBL and more, each with a mock test.",
    title: "Himachal Pradesh Government Exams List 2026: All HPRCA, HPPSC, Police, TET and Other Exams",
    titleHi: "हिमाचल प्रदेश सरकारी परीक्षाओं की सूची 2026: HPRCA, HPPSC, पुलिस, TET और अन्य",
    excerpt: `Himachal ke ${examCount} sarkari exams ek jagah: kaun si body kaun sa exam leti hai, aur har exam ka syllabus, pattern aur mock test kahan milega.`,
    category: "NOTIFICATION",
    exams: ["hppsc/hpas", "hprca/clerk", "hp-police/constable", "hpbose/hp-tet", "hp-revenue/patwari"],
    content: `Himachal Pradesh me sarkari naukri ke liye **${examCount} exams** is list me hain. Har exam par click karke uska syllabus, exam pattern aur mock test dekh sakte ho. Vacancy, last date aur eligibility har notification me badalti hai, isliye apply karne se pehle official site par notification padhein.

## Kaun si body kya bharti karti hai

- **HPPSC (Shimla):** HPAS, Assistant Professor, ADO, Assistant Engineer, Medical Officer jaise officer-level posts.
- **HPRCA (Hamirpur):** Clerk, JOA IT, teachers, Junior Engineer, nursing aur health posts, Forest Guard, Patwari-level aur office posts.
- **HP Police:** Constable, Head Constable, Sub-Inspector, Driver Constable.
- **HP High Court:** Clerk, Stenographer, Process Server.
- **HPBOSE:** HP TET (eligibility test, bharti nahi).
- **Boards aur universities:** HPSEBL, cooperative banks, HPU (HP SET), WCD department.

## Poori exam list

| Body | Exams |
|---|---|
${examTable}

## Kahan se shuru karein

1. **Graduate, general posts:** [HPRCA Clerk](/hprca/clerk), [JOA IT](/hprca/joa-it), [Patwari](/hp-revenue/patwari).
2. **Teaching:** [HP TET](/hpbose/hp-tet), [JBT](/hprca/jbt), [TGT](/hprca/tgt), [PGT / Lecturer](/hprca/pgt-lecturer) aur 2026 ke naye subject-teacher posts.
3. **Uniformed:** [Police Constable](/hp-police/constable), [Sub-Inspector](/hp-police/sub-inspector), [Forest Guard](/hprca/forest-guard).
4. **Officer level:** [HPAS](/hppsc/hpas), [Naib Tehsildar](/hppsc/naib-tehsildar), [Assistant Engineer](/hppsc/assistant-engineer).

Har exam me **Himachal GK** common hai, isliye [Himachal GK](/himachal) pehle pakka karein aur [free Himachal GK mock](/himachal-gk-mock-test) se CBT screen ki aadat banayein. Taza bhartiyon ke liye [13 November ka open-vacancies roundup](/blog/hp-govt-jobs-last-date-open-vacancies-13-november-2026) dekhein.`,
    faqs: [
      { q: "Himachal me sarkari naukri ke liye kaun se exams hote hain?", a: "HPPSC ke officer exams (HPAS, Assistant Professor, ADO), HPRCA ke Clerk, JOA IT, teacher aur health posts, HP Police, High Court, HP TET, Patwari aur HPSEBL jaise exams. Poori list is page par hai." },
      { q: "Which body conducts Himachal Pradesh government recruitment exams?", a: "Mainly the HPPSC (Shimla) for officer posts and the HPRCA (Hamirpur) for most other posts, plus the HP Police, High Court, HPSEBL and cooperative banks for their own recruitments." },
      { q: "Kya sabhi HP exams ke mock test uplabdh hain?", a: "Is list ke har exam ke page par mock test hai, free ya paid series ke roop me. Exam page par jaakar test dekh sakte ho." },
    ],
  },

  {
    slug: "hprca-sanskrit-teacher-2026-syllabus-eligibility-187-posts",
    seoTitle: "HPRCA Sanskrit Teacher 2026: 187 Posts, Syllabus, Eligibility",
    seoDescription: "HPRCA Sanskrit Teacher 2026: 187 posts, Master's in Sanskrit with B.Ed and TET, 120-MCQ CBT, topic-wise syllabus and a free mock test to start preparing.",
    title: "HPRCA Sanskrit Teacher 2026: 187 Posts, Eligibility, Syllabus and Exam Pattern",
    titleHi: "एचपीआरसीए संस्कृत शिक्षक 2026: 187 पद, पात्रता, सिलेबस और परीक्षा पैटर्न",
    excerpt: "HPRCA Sanskrit Teacher ke 187 posts: qualification, exam pattern, vyakaran se sahitya tak ka syllabus aur taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/sanskrit-teacher"],
    content: `**Sanskrit Teacher** ke liye HPRCA ne **Advt No. 14/2026** me reports ke mutabik **187 posts (Post Code 26055)** rakhe hain. Last date **5 December 2026**. Baaki subjects ki vacancy [yahan](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) dekhein.

## Eligibility aur pattern (reported)

- **Qualification:** Sanskrit me Master's degree, **B.Ed.** aur qualifying **TET**. Exact marks advertisement me hain.
- **Age:** 18 se 45 saal (1 January 2026 tak).
- **Pattern:** CBT ya written screening test, 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai.

## Syllabus

| Part | Topics |
|---|---|
| Vyakaran | Sandhi, samas, karak-vibhakti, shabd roop, dhatu roop, pratyay |
| Sahitya | Kalidasa, Bhavabhuti, Bana, Panini aur mahakavya |
| Chhand aur alankar | Anushtup, upajati, upma, rupak aadi |
| Shikshan | Sanskrit teaching ke tareeke, anuvad |
| Pedagogy | Child development, learning theories |
| General | Himachal GK, current affairs, reasoning, English, Hindi |

## Jaldi poochhe jaane wale facts

- **Anushtup** chhand ke har pad me **8 akshar**, kul 32.
- **Abhigyanshakuntalam** ke rachayita **Kalidasa**; **Ashtadhyayi** ke **Panini**.
- 'सूर्य + उदयः' = सूर्योदयः (guna sandhi), 'महा + ऋषिः' = महर्षिः.

## Taiyari plan

Pehle 2 hafte sandhi, samas aur shabd-dhatu roop, phir sahitya aur chhand, aakhri hafte pedagogy, [Himachal GK](/himachal) aur timed mocks. Shuruaat [free Sanskrit Teacher mock](${free("hprca-sanskrit-teacher-free-mock-1")}) se karein. Exam page: [HPRCA Sanskrit Teacher](/hprca/sanskrit-teacher). Figures job-listing site se hain, final jaankari **hprca.hp.gov.in** se confirm karein.`,
    faqs: [
      { q: "HPRCA Sanskrit Teacher ke kitne posts hain?", a: "Reports ke mutabik Advt 14/2026 me 187 posts (Post Code 26055). Number tentative hai." },
      { q: "What is the qualification for HPRCA Sanskrit Teacher?", a: "A Master's degree in Sanskrit, a B.Ed. and a qualifying TET, as listed in the advertisement." },
      { q: "Sanskrit Teacher ka exam pattern kya hai?", a: "Reports ke mutabik 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai, official advertisement dekhein." },
      { q: "Is there a free Sanskrit Teacher mock test?", a: "Yes. The HPRCA Sanskrit Teacher page has a free 15-question mock with Hindi and English solutions." },
    ],
  },

  {
    slug: "hprca-music-teacher-2026-syllabus-eligibility-95-posts",
    seoTitle: "HPRCA Music Teacher 2026: 95 Posts, Syllabus, Eligibility",
    seoDescription: "HPRCA Music Teacher 2026: 95 posts, Master's in music with B.Ed and TET, 120-MCQ CBT, topic-wise syllabus (raga, taal, instruments) and a free mock test.",
    title: "HPRCA Music Teacher 2026: 95 Posts, Eligibility, Syllabus and Exam Pattern",
    titleHi: "एचपीआरसीए संगीत शिक्षक 2026: 95 पद, पात्रता, सिलेबस और परीक्षा पैटर्न",
    excerpt: "HPRCA Music Teacher ke 95 posts: qualification, exam pattern, raga-taal-vadya ka syllabus aur taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/music-teacher"],
    content: `**Music Teacher** ke liye HPRCA ne **Advt No. 14/2026** me reports ke mutabik **95 posts (Post Code 26057)** rakhe hain. Last date **5 December 2026**. Baaki subjects ki vacancy [yahan](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) dekhein.

## Eligibility aur pattern (reported)

- **Qualification:** Vocal ya Instrumental Music me Master's degree, **B.Ed.** aur qualifying **TET**. Exact marks advertisement me hain.
- **Age:** 18 se 45 saal (1 January 2026 tak).
- **Pattern:** CBT ya written screening test, 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai.

## Syllabus

| Part | Topics |
|---|---|
| Theory | Swara, shruti, saptak, thaat, raga (vadi, samvadi, samay siddhant) |
| Taal aur laya | Matra, vibhag, tali-khali, Teentaal, Jhaptaal, Ektaal |
| Vadya | Tat, sushir, avanaddha, ghan; sitar, tabla, harmonium |
| Itihas | Natya Shastra, Sangeet Ratnakar, pramukh kalakar aur gharane |
| Pedagogy | Child development, learning theories, assessment |
| General | Himachal GK (lok sangeet, mele), current affairs, reasoning, English, Hindi |

## Jaldi poochhe jaane wale facts

- Ek saptak me **7 shuddha swar** aur **22 shrutiyan**.
- Bhatkhande ne ragon ko **10 thaat** me baanta.
- **Teentaal** me **16 matra** (4-4-4-4).
- Tabla **avanaddha vadya** hai.

## Taiyari plan

Pehle swara, thaat aur raga-samay, phir taal aur vadya, aakhri hafte itihas, pedagogy aur [Himachal GK](/himachal). Shuruaat [free Music Teacher mock](${free("hprca-music-teacher-free-mock-1")}) se karein. Exam page: [HPRCA Music Teacher](/hprca/music-teacher). Figures job-listing site se hain, final jaankari **hprca.hp.gov.in** se confirm karein.`,
    faqs: [
      { q: "HPRCA Music Teacher ke kitne posts hain?", a: "Reports ke mutabik Advt 14/2026 me 95 posts (Post Code 26057). Number tentative hai." },
      { q: "What is the qualification for HPRCA Music Teacher?", a: "A Master's degree in vocal or instrumental music, a B.Ed. and a qualifying TET, as listed in the advertisement." },
      { q: "Music Teacher ka exam pattern kya hai?", a: "Reports ke mutabik 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai, official advertisement dekhein." },
      { q: "Is there a free Music Teacher mock test?", a: "Yes. The HPRCA Music Teacher page has a free 15-question mock with Hindi and English solutions." },
    ],
  },

  {
    slug: "hprca-fine-arts-teacher-2026-syllabus-eligibility-172-posts",
    seoTitle: "HPRCA Fine Arts Teacher 2026: 172 Posts, Syllabus, Eligibility",
    seoDescription: "HPRCA Fine Arts Teacher 2026: 172 posts, Master's or diploma in fine arts, 120-MCQ CBT, topic-wise syllabus (art history, colour, painting) and a free mock test.",
    title: "HPRCA Fine Arts Teacher 2026: 172 Posts, Eligibility, Syllabus and Exam Pattern",
    titleHi: "एचपीआरसीए ललित कला शिक्षक 2026: 172 पद, पात्रता, सिलेबस और परीक्षा पैटर्न",
    excerpt: "HPRCA Fine Arts Teacher ke 172 posts: qualification, exam pattern, art history aur colour theory ka syllabus aur taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/fine-arts-teacher"],
    content: `**Fine Arts Teacher** ke liye HPRCA ne **Advt No. 14/2026** me reports ke mutabik **172 posts (Post Code 26060)** rakhe hain. Last date **5 December 2026**. Baaki subjects ki vacancy [yahan](/blog/hprca-teacher-recruitment-2026-2423-posts-subject-wise-vacancy) dekhein.

## Eligibility aur pattern (reported)

- **Qualification:** Fine Arts/Visual Arts me Master's degree, ya higher secondary ke baad recognised Fine Arts/Painting diploma (duration aur marks advertisement me).
- **Age:** 18 se 45 saal (1 January 2026 tak).
- **Pattern:** CBT ya written screening test, 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai.

## Syllabus

| Part | Topics |
|---|---|
| Kala ka itihas | Prehistoric, Indus, Mauryan-Gupta, Ajanta, mandir moortikala |
| Painting schools | Mughal, Rajasthani, Pahari (Basohli, Guler, Kangra), Bengal school |
| Theory | Rang chakra, primary-secondary-complementary colours, design ke principles |
| Techniques | Oil, water colour, tempera, fresco, perspective, composition |
| Pedagogy | Child development, learning theories, art education |
| General | Himachal GK (Kangra painting, Chamba Rumal), current affairs, reasoning, English, Hindi |

## Jaldi poochhe jaane wale facts

- Ajanta guphayen **Maharashtra** me; Bhimbetka **Madhya Pradesh** me.
- **Bharat Mata** chitra **Abanindranath Tagore** ka; **Bani Thani** Kishangarh shaili ka.
- Neele rang ka poorak rang **narangi**; fresco **geele plaster** par.
- Spiti ka **Tabo monastery** apne bhitti chitron ke liye 'Himalaya ka Ajanta' kahlata hai.

## Taiyari plan

Pehle art history aur painting schools, phir colour theory aur techniques, aakhri hafte pedagogy, [Himachal GK](/himachal) aur timed mocks. Shuruaat [free Fine Arts Teacher mock](${free("hprca-fine-arts-teacher-free-mock-1")}) se karein. Exam page: [HPRCA Fine Arts Teacher](/hprca/fine-arts-teacher). Figures job-listing site se hain, final jaankari **hprca.hp.gov.in** se confirm karein.`,
    faqs: [
      { q: "HPRCA Fine Arts Teacher ke kitne posts hain?", a: "Reports ke mutabik Advt 14/2026 me 172 posts (Post Code 26060). Number tentative hai." },
      { q: "What is the qualification for HPRCA Fine Arts Teacher?", a: "A Master's degree in fine or visual arts, or a recognised painting or fine arts diploma after higher secondary, as listed in the advertisement." },
      { q: "Fine Arts Teacher ka exam pattern kya hai?", a: "Reports ke mutabik 120 MCQs, 120 marks, 90 minutes. Negative marking specified nahi hai, official advertisement dekhein." },
      { q: "Is there a free Fine Arts Teacher mock test?", a: "Yes. The HPRCA Fine Arts Teacher page has a free 15-question mock with Hindi and English solutions." },
    ],
  },

  {
    slug: "hppsc-assistant-engineer-syllabus-exam-pattern-civil-electrical-mechanical",
    seoTitle: "HPPSC Assistant Engineer Syllabus: Civil, Electrical, Mechanical",
    seoDescription: "HPPSC Assistant Engineer (AE) syllabus for Civil, Electrical and Mechanical branches, qualification, HPSEBL difference and how to prepare with a free mock.",
    title: "HPPSC Assistant Engineer (AE) Syllabus: Civil, Electrical and Mechanical Branches, Eligibility and Preparation",
    titleHi: "एचपीपीएससी सहायक अभियंता (AE) सिलेबस: सिविल, इलेक्ट्रिकल और मैकेनिकल",
    excerpt: "HPPSC Assistant Engineer ka branch-wise syllabus, qualification, HPSEBL AE se farq aur taiyari ka tareeka.",
    category: "SYLLABUS",
    exams: ["hppsc/assistant-engineer", "hpsebl/assistant-engineer"],
    content: `**Assistant Engineer (AE)** Himachal ke PWD aur Jal Shakti Vibhag jaise departments me technical officer post hai, jo **Civil, Electrical aur Mechanical** branches me aati hai. In departments ke AE posts **HPPSC, Shimla** advertise karta hai. **HPSEBL** (bijli board) apne AE khud alag notification se bharta hai, uske liye [HPSEBL Assistant Engineer](/hpsebl/assistant-engineer) page dekhein.

## Eligibility

Relevant branch me **B.E./B.Tech.** Percentage, age limit aur selection stages (written test, jahan notified ho wahan interview) advertisement me di jaati hain. Vacancy kam hoti hai, isliye written test demanding hota hai.

## Branch-wise syllabus

| Branch | Mukhya topics |
|---|---|
| Civil | Structural analysis, RCC aur steel design, geotechnical, fluid mechanics, hydrology, transportation, surveying, estimating-costing, environmental engineering |
| Electrical | Circuits, machines aur transformers, power systems, protection, control systems, measurements, power electronics |
| Mechanical | Thermodynamics, fluid machinery, heat transfer, strength of materials, theory of machines, machine design, manufacturing, IC engines |
| General | General studies, Himachal GK aur current affairs, English comprehension |

## Taiyari kaise karein

- Apni branch ke core subjects degree books se revise karein aur GATE-style numericals practise karein.
- Himachal GK ka chhota notebook banayein; engineers ke liye **hydropower projects aur rivers** zaroori hain. [Himachal GK](/himachal) padhein.
- Shuruaat [free HPPSC Assistant Engineer mock](${free("hppsc-assistant-engineer-free-mock-1")}) se karein, phir har hafte ek timed mock.

Exam page: [HPPSC Assistant Engineer](/hppsc/assistant-engineer). Syllabus aur pattern ke liye hamesha latest advertisement hppsc.hp.gov.in par dekhein.`,
    faqs: [
      { q: "HPPSC AE ke liye qualification kya hai?", a: "Relevant branch (Civil, Electrical ya Mechanical) me B.E./B.Tech. Percentage aur age limit advertisement me hoti hai." },
      { q: "Is HPSEBL Assistant Engineer recruited by HPPSC?", a: "No. HPSEBL recruits its own engineers through its own notifications. HPPSC advertises AE posts of departments like PWD and Jal Shakti." },
      { q: "Which branches have AE posts?", a: "Civil, Electrical and Mechanical, depending on the departments' vacancies. Each advertisement lists branch-wise posts." },
    ],
  },

  {
    slug: "hprca-language-teacher-syllabus-hindi-punjabi-urdu-eligibility",
    seoTitle: "HPRCA Language Teacher Syllabus: Hindi, Punjabi, Urdu, TET",
    seoDescription: "HPRCA Language Teacher (LT) syllabus for Hindi, Punjabi and Urdu, eligibility with B.Ed and HP TET, selection process and a preparation plan with a free mock.",
    title: "HPRCA Language Teacher (LT) Syllabus: Hindi, Punjabi, Urdu, Eligibility and Preparation",
    titleHi: "एचपीआरसीए भाषा अध्यापक (LT) सिलेबस: हिंदी, पंजाबी, उर्दू, पात्रता और तैयारी",
    excerpt: "Language Teacher ka syllabus, qualification (B.Ed aur TET), selection process aur Hindi LT ki taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/language-teacher", "hpbose/hp-tet"],
    content: `**Language Teacher (LT)** posts Himachal ke government schools me **Hindi, Punjabi aur Urdu** ke liye hote hain. Sanskrit teachers (Shastri) **TGT (Sanskrit)** category me aate hain. Recruitment **HPRCA, Hamirpur** karta hai.

## Eligibility

- Language ke saath bachelor's degree, **B.Ed.**
- Matching **HP TET** language category pass. [HP TET ki jaankari](/hpbose/hp-tet) padhein.
- Age limit aur vacancy har notification me alag, language-wise.

## Selection

Recent drives me **computer-based test** aur document verification. Final process post-wise notification me hota hai.

## Syllabus

| Part | Topics |
|---|---|
| Language aur literature | **Hindi:** vyakaran, shabd-bhandar, ras, alankar, chhand, Hindi sahitya ka itihas, gadya-padya. **Punjabi/Urdu:** grammar, vocabulary, literature, comprehension |
| Teaching | Unseen passage, language-teaching methods |
| Pedagogy | Language acquisition, learning theories, inclusive education, assessment, classroom management |
| General | Himachal GK, current affairs, GK, reasoning, English |

## Hindi LT ki taiyari

Vyakaran, ras, alankar, chhand aur sahitya ka itihas pakka karein, phir pedagogy aur [Himachal GK](/himachal). Har hafte ek timed mock dein. Shuruaat [free HPRCA Language Teacher mock](${free("hprca-language-teacher-free-mock-1")}) se karein.

Exam page: [HPRCA Language Teacher](/hprca/language-teacher). Latest notification hprca.hp.gov.in par dekhein.`,
    faqs: [
      { q: "Which languages are covered under Language Teacher?", a: "Hindi, Punjabi and Urdu are advertised as Language Teacher (LT). Sanskrit (Shastri) teachers come under the TGT (Sanskrit) category." },
      { q: "Language Teacher ke liye TET zaroori hai?", a: "Haan, matching language category ka HP TET pass hona chahiye, saath me B.Ed aur language ke saath bachelor's degree." },
      { q: "What is the selection process for HPRCA Language Teacher?", a: "Recent drives use a computer-based test followed by document verification. The post-wise notification states the final process." },
    ],
  },

  {
    slug: "hprca-joa-library-syllabus-eligibility-78-posts-job-trainee",
    seoTitle: "HPRCA JOA Library: Syllabus, Eligibility, 78 Posts, Prep Plan",
    seoDescription: "HPRCA JOA (Library) syllabus, eligibility (10+2 with library science diploma), the 78-post Dec 2025 advertisement, Job Trainee terms and how to prepare.",
    title: "HPRCA JOA (Library) 2026: Syllabus, Eligibility, 78 Posts and Preparation Plan",
    titleHi: "एचपीआरसीए जेओए (लाइब्रेरी): सिलेबस, पात्रता, 78 पद और तैयारी",
    excerpt: "JOA Library ka syllabus, qualification, December 2025 ke 78 posts, Job Trainee appointment aur library science ki taiyari.",
    category: "SYLLABUS",
    exams: ["hprca/joa-library"],
    content: `**Junior Office Assistant (Library)**, yaani **JOA Library**, Himachal ke government offices, colleges aur institutions ka library-side clerical post hai. Posts **HPRCA, Hamirpur** **Job Trainee** appointments ke roop me bharta hai. December 2025 ke advertisement (No. 06/2025) me **78 JOA (Library) posts** nikle the.

## Eligibility

**10+2 (kam se kam 50% marks)** ke saath **Library Science / Library and Information Science me one-year diploma**, ya Library Science me bachelor's degree. Age limit, relaxation aur selection stages notification me hain; selection written test aur document verification se.

## Syllabus

| Part | Topics |
|---|---|
| Library science | Ranganathan ke five laws, libraries ke types, DDC aur Colon classification, cataloguing, library management, reference service, automation (Koha), library legislation |
| General | Himachal GK, current affairs, GK, reasoning |
| Language | English aur Hindi |

## Taiyari

Technical part me library science wale candidates ke marks aasaan hote hain, isliye **general part me speed** fark banati hai. Ranganathan ke five laws, DDC aur Colon classification, cataloguing rules aur library automation revise karein, phir [Himachal GK](/himachal) aur reasoning jodein. [Free Himachal GK mock](/himachal-gk-mock-test) se CBT screen ki aadat banayein.

Exam page: [HPRCA JOA Library](/hprca/joa-library). Naya notification hprca.hp.gov.in par dekhein.`,
    faqs: [
      { q: "JOA Library ke liye qualification kya hai?", a: "10+2 (kam se kam 50% marks) ke saath Library Science / LIS ka one-year diploma, ya Library Science me bachelor's degree." },
      { q: "How many JOA (Library) posts were advertised?", a: "The December 2025 HPRCA advertisement (No. 06/2025) invited applications for 78 JOA (Library) posts as Job Trainee." },
      { q: "Is the JOA Library paper only library science?", a: "No. Besides library science it tests Himachal GK, current affairs, reasoning, English and Hindi." },
    ],
  },

  {
    slug: "hprca-steno-typist-syllabus-typing-test-eligibility",
    seoTitle: "HPRCA Steno Typist: Syllabus, Typing Test, Eligibility, Prep",
    seoDescription: "HPRCA Steno Typist syllabus, 10+2 eligibility, typing and shorthand skill test, Job Trainee terms and a daily practice plan for the written test.",
    title: "HPRCA Steno Typist: Syllabus, Typing and Shorthand Skill Test, Eligibility and Preparation",
    titleHi: "एचपीआरसीए स्टेनो टाइपिस्ट: सिलेबस, टाइपिंग टेस्ट, पात्रता और तैयारी",
    excerpt: "Steno Typist ka written test syllabus, typing aur shorthand skill test, qualification aur roz ki practice ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/steno-typist"],
    content: `**Steno Typist** Himachal ke government offices me dictation lene, letters type karne aur documents banane wala clerical post hai. Posts **HPRCA, Hamirpur** **Job Trainee** appointments ke roop me bharta hai. December 2025 ke advertisement me Steno Typist ka ek post tha aur **recognised Board se 10+2** maangi gayi thi. Vacancies kam aur har notification me alag hoti hain.

## Selection

Written test ke baad stenography posts me aam taur par **skill test** hota hai. Shorthand/typing speed aur age limit notification me dekhein.

## Syllabus

| Stage | Topics |
|---|---|
| Written test | English (grammar, vocabulary, comprehension, error spotting), Hindi (vyakaran, shabd-gyan, comprehension), Himachal GK aur current affairs, GK aur reasoning, basic computer awareness |
| Skill test | English aur/ya Hindi typing speed, shorthand dictation aur transcription (jahan post ke liye zaroori) |

## Taiyari

- Roz **20 minute typing practice** ko routine banayein.
- English aur Hindi grammar revise karein.
- [Himachal GK](/himachal) ke notes banayein aur [free Himachal GK mock](/himachal-gk-mock-test) se CBT screen ki aadat banayein.

Exam page: [HPRCA Steno Typist](/hprca/steno-typist). Notification hprca.hp.gov.in par dekhein.`,
    faqs: [
      { q: "Steno Typist ke liye qualification kya hai?", a: "December 2025 ke HPRCA advertisement me recognised Board se 10+2 maangi gayi thi. Speed aur age limit notification me dekhein." },
      { q: "Is there a typing test for Steno Typist?", a: "Stenography posts normally include a skill test after the written test. The exact speed and format are in the notification." },
      { q: "Who recruits Steno Typist in Himachal?", a: "The HPRCA, Hamirpur, as Job Trainee appointments." },
    ],
  },

  {
    slug: "hp-special-educator-recruitment-syllabus-rpwd-act-108-posts",
    seoTitle: "HP Special Educator Syllabus: RPwD Act, TET, 108 Posts, Prep",
    seoDescription: "HP Special Educator syllabus, RPwD Act 2016 topics, HP TET requirement, the 108-post Dec 2025 HPRCA advertisement and how to prepare with a free mock.",
    title: "HP Special Educator Recruitment: Syllabus, RPwD Act 2016, TET Requirement and 108 Posts",
    titleHi: "हिमाचल स्पेशल एजुकेटर भर्ती: सिलेबस, RPwD एक्ट 2016, TET और 108 पद",
    excerpt: "Special Educator ka syllabus, RPwD Act 2016, HP TET ki shart, December 2025 ke 108 posts aur taiyari ka tareeka.",
    category: "SYLLABUS",
    exams: ["hprca/special-educator", "hpbose/hp-tet"],
    content: `**Special Educator** ye teachers hain jo special needs wale bachchon ke saath kaam karte hain, do levels me: **Pre-Primary se Class V** aur **Class VI se XII**. Recruitment **HPRCA, Hamirpur** karta hai aur dono levels ki **HP TET** me bhi alag category hai. December 2025 ke advertisement (No. 06/2025) me **108 Special Educator (Pre-Primary to Class V)** posts nikle the.

## Eligibility

Recognised special-education qualification (aam taur par **Rehabilitation Council of India** se recognised course) aur matching **HP TET** category pass. Selection **CBT** aur document verification se hota hai. [HP TET ki jaankari](/hpbose/hp-tet) padhein.

## Syllabus

| Part | Topics |
|---|---|
| Special education | Disability ke types aur categories, early intervention, **RPwD Act 2016**, RCI Act, inclusive education, IEP, assistive devices, curriculum adaptation |
| Pedagogy | Development, learning theories, motivation, assessment |
| General | Hindi, English, Himachal GK, current affairs, level ka subject knowledge |

## Sabse zaroori topic

**RPwD Act 2016** se seedhe questions aate hain: Act ke sections aur disability ki categories zaroor yaad karein.

## Taiyari

RPwD Act aur disability definitions padhein, pedagogy aur inclusive education revise karein, phir timed mocks dein. [Free Himachal GK mock](/himachal-gk-mock-test) aur [HP TET free mock](${free("hp-tet-free-mock-1")}) se shuruaat karein.

Exam page: [HPRCA Special Educator](/hprca/special-educator). Latest drive hprca.hp.gov.in par dekhein.`,
    faqs: [
      { q: "Special Educator ke liye kaun se levels hain?", a: "Do levels: Pre-Primary to Class V aur Class VI to XII. Dono ki recruitment aur HP TET category alag hoti hai." },
      { q: "Is HP TET required for Special Educator?", a: "Yes. HP TET has separate Special Educator categories for both levels, and a pass in the matching category is required." },
      { q: "Which law matters most for the Special Educator exam?", a: "The RPwD Act 2016. Direct questions on its sections and the categories of disability are common." },
    ],
  },

  {
    slug: "hprca-panchayat-secretary-syllabus-73rd-amendment-preparation",
    seoTitle: "HPRCA Panchayat Secretary Syllabus: Panchayati Raj, Prep Plan",
    seoDescription: "HPRCA Panchayat Secretary syllabus: Panchayati Raj, 73rd Amendment, HP Panchayati Raj Act, rural schemes, Himachal GK, plus a preparation plan and free mock.",
    title: "HPRCA Panchayat Secretary Syllabus: Panchayati Raj, 73rd Amendment, Eligibility and Preparation",
    titleHi: "एचपीआरसीए पंचायत सचिव सिलेबस: पंचायती राज, 73वां संशोधन और तैयारी",
    excerpt: "Panchayat Secretary ka syllabus, Panchayati Raj ke scoring topics aur taiyari ka plan.",
    category: "SYLLABUS",
    exams: ["hprca/panchayat-secretary"],
    content: `**Panchayat Secretary** gram panchayat level ka mukhya administrative post hai. Secretary panchayat ke records aur accounts rakhta hai, gram sabha ki meetings me madad karta hai aur rural development schemes zameen par chalata hai. Recruitment **HPRCA, Hamirpur** objective written test se karta hai. Eligibility, vacancy aur age limit har notification me badalti hai, isliye latest advertisement hprca.hp.gov.in par dekhein.

## Syllabus

| Part | Topics |
|---|---|
| Post ka subject | Panchayati Raj: **73rd Constitutional Amendment**, three-tier system, gram sabha, committees; **HP Panchayati Raj Act** aur rules; rural development schemes; panchayat accounts aur records |
| General awareness | Himachal GK (history, geography, culture, economy, administration), social science (Indian history, geography, polity, economy), everyday science, current affairs |
| Aptitude aur language | Reasoning, basic maths, Hindi aur English |

## Scoring topic

**Panchayati Raj** sabse zyada scoring hai, kyunki zyada candidates ise seriously nahi lete. 73rd Amendment, three-tier structure aur main rural schemes ke short notes banayein.

## Taiyari plan

1. Panchayati Raj aur HP Panchayati Raj Act ke short notes.
2. Roz [Himachal GK](/himachal) revise karein.
3. Timed mocks; shuruaat [free Himachal GK mock](/himachal-gk-mock-test) se.

Exam page: [HPRCA Panchayat Secretary](/hprca/panchayat-secretary), jahan poori series milegi.`,
    faqs: [
      { q: "Panchayat Secretary ke liye qualification kya hai?", a: "Qualification, age limit aur vacancies har notification me alag hoti hain. Latest advertisement hprca.hp.gov.in par dekhein." },
      { q: "Which topics matter most in the Panchayat Secretary exam?", a: "Panchayati Raj (73rd Amendment, HP Panchayati Raj Act), rural development schemes and Himachal GK carry the most weight." },
      { q: "What is the selection process for Panchayat Secretary?", a: "HPRCA holds an objective written test as laid down in the post-wise notification. Check hprca.hp.gov.in for the current stages." },
    ],
  },
];
