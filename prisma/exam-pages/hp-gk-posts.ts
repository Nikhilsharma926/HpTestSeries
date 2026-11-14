import type { PostSeed } from "./types";

// Evergreen Himachal GK topic posts (districts, rivers, passes and lakes, fairs, history, wildlife, culture, polity, MCQ
// revision). Every HP exam carries a Himachal GK section, so these target the searches aspirants make most. They state only
// facts that do not change between notifications (geography, history, Census 2011 figures) and carry no dates, vacancy
// counts or office-holder names. Census figures say "Census 2011"; the reader is told to check the newest source for them.

const GK_EXAMS = ["hp-gk-ca/current-affairs", "hp-revenue/patwari", "hp-police/constable", "hprca/joa-it", "hprca/clerk"];
const MOCK = "[free Himachal GK mock test](/himachal-gk-mock-test)";
const FREE = "[free Himachal GK mock](/tests/hp-gk-free-mock-1)";

export const HP_GK_POSTS: PostSeed[] = [
  {
    slug: "himachal-pradesh-districts-list-headquarters-area-population-gk",
    seoTitle: "Himachal Pradesh Districts List: HQ, Divisions, Area, Census Facts",
    seoDescription: "Himachal ke 12 districts ki list: headquarters, 3 divisions, sabse bada/chhota, zyada/kam aabadi aur literacy ke facts. HP GK exams ke liye quick revision.",
    title: "Himachal Pradesh Districts List: 12 Districts, Headquarters, Divisions and Census Facts",
    titleHi: "हिमाचल प्रदेश के 12 जिले: मुख्यालय, संभाग और जनगणना तथ्य",
    excerpt: "Himachal ke 12 districts, unke headquarters, 3 divisions aur Census 2011 ke wo facts jo Patwari, Police aur HPRCA exams me baar baar poochhe jaate hain.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Himachal GK me **districts** se har exam me kam se kam 2 se 4 sawaal aate hain: headquarters, sabse bada district, sabse zyada aabadi, kis district me kaun sa mela. Ye post ek hi jagah par wo sab de rahi hai.

## Himachal Pradesh ke 12 districts aur headquarters

| District | Headquarters | Division |
|---|---|---|
| Shimla | Shimla | Shimla |
| Sirmaur | Nahan | Shimla |
| Solan | Solan | Shimla |
| Kinnaur | Reckong Peo | Shimla |
| Mandi | Mandi | Mandi |
| Kullu | Kullu | Mandi |
| Bilaspur | Bilaspur | Mandi |
| Lahaul & Spiti | Kyelang | Mandi |
| Kangra | Dharamshala | Kangra |
| Chamba | Chamba | Kangra |
| Hamirpur | Hamirpur | Kangra |
| Una | Una | Kangra |

Rajya me **3 divisions** hain: **Shimla, Mandi aur Kangra**, aur har division me 4 districts. Division headquarters: Shimla, Mandi aur Dharamshala.

## Capital

- **Shimla** rajya ki capital hai (British samay se summer capital).
- **Dharamshala** ko 2017 me rajya ki doosri (winter) capital ka darja mila. Yahan Tapovan me Vidhan Sabha ka winter session hota hai.

## Census 2011 ke important facts

| Fact | District |
|---|---|
| Sabse bada district (area) | Lahaul & Spiti |
| Sabse chhota district (area) | Hamirpur |
| Sabse zyada aabadi | Kangra |
| Sabse kam aabadi | Lahaul & Spiti |
| Sabse zyada literacy | Hamirpur |
| Sabse kam literacy | Chamba |
| Sabse zyada aabadi ghanatva (density) | Hamirpur |
| Sabse kam aabadi ghanatva | Lahaul & Spiti |

Rajya ka kul kshetrafal **55,673 sq km** hai aur Census 2011 ke mutabik aabadi lagbhag **68.65 lakh**. Naye Census ke figures aate hi purane figures exam me badal sakte hain, isliye jis saal ka exam ho, uski latest notification aur book dekh lein.

## Districts ko yaad rakhne ke tareeke

- **Border districts:** Kinnaur aur Lahaul & Spiti ki seemayein Tibet (China) se lagti hain.
- **Lahaul & Spiti** ko tribal district ke roop me jaana jata hai, aur Kinnaur ko bhi. Pangi aur Bharmour (Chamba) bhi tribal kshetra hain.
- **Chamba, Kangra, Hamirpur, Una** ek division (Kangra) me hain, to Kangra division ko "plain-side + Dhauladhar" ke roop me yaad rakhein.
- **Mandi** ko "Chhoti Kashi" kaha jata hai (mandir ki sankhya ki wajah se).

## Practice kaise karein

1. Table ko 3 baar likhkar yaad karein: district, HQ, division.
2. Har district ke saath ek mela, ek nadi aur ek mandir jodein (agli posts me ye sab diya gaya hai).
3. Phir ${MOCK} dekar check karein ki kitna yaad hai.

Related: [Himachal ki nadiyan aur hydro projects](/blog/himachal-pradesh-rivers-tributaries-hydro-projects-gk-notes) aur [mele aur tyohar district-wise](/blog/himachal-pradesh-fairs-festivals-list-district-wise-gk).`,
    faqs: [
      { q: "Himachal Pradesh me kitne district hain?", a: "Himachal Pradesh me 12 districts hain: Bilaspur, Chamba, Hamirpur, Kangra, Kinnaur, Kullu, Lahaul & Spiti, Mandi, Shimla, Sirmaur, Solan aur Una." },
      { q: "Himachal Pradesh ka sabse bada district kaun sa hai?", a: "Area ke hisaab se Lahaul & Spiti sabse bada district hai. Aabadi me Kangra sabse bada hai." },
      { q: "Himachal ki winter capital kaun si hai?", a: "Dharamshala (Kangra) ko 2017 me rajya ki doosri capital banaya gaya. Shimla mukhya capital hai." },
      { q: "Himachal me kitne divisions hain?", a: "3 divisions: Shimla, Mandi aur Kangra, har ek me 4 districts." },
    ],
  },
  {
    slug: "himachal-pradesh-rivers-tributaries-hydro-projects-gk-notes",
    seoTitle: "Himachal Rivers: Satluj, Beas, Ravi, Chenab, Yamuna Notes + Dams",
    seoDescription: "Himachal ki 5 badi nadiyan: udgam, tributaries, districts, dams aur hydro projects (Bhakra, Pong, Nathpa Jhakri). HP GK notes Patwari, Police, HPRCA ke liye.",
    title: "Himachal Pradesh Rivers GK: Satluj, Beas, Ravi, Chenab, Yamuna, Tributaries and Hydro Projects",
    titleHi: "हिमाचल की नदियां: सतलुज, ब्यास, रावी, चिनाब, यमुना और जलविद्युत परियोजनाएं",
    excerpt: "Himachal ki paanch badi nadiyan, unke udgam, sahayak nadiyan aur un par bane dam aur hydro projects ka exam-oriented revision.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Himachal ko "**Jal Shakti ka rajya**" kaha jata hai. Paanch badi nadiyan (**Satluj, Beas, Ravi, Chenab aur Yamuna**) isi pahadi kshetra se nikalti ya guzarti hain, isliye har exam me nadi aur dam ke 3 se 5 sawaal pakke maane jaate hain.

## Paanch badi nadiyan ek nazar me

| Nadi | Udgam | Himachal me se guzarti hai | Pramukh sahayak nadiyan |
|---|---|---|---|
| **Satluj** | Rakshastal (Mansarovar ke paas, Tibet) | Shipki La se Himachal me ghusti hai: Kinnaur, Shimla, Kullu, Solan, Mandi, Bilaspur | Spiti, Baspa, Nogli |
| **Beas** | Beas Kund (Rohtang Pass ke paas) | Kullu, Mandi, Kangra, Hamirpur | Parvati, Sainj, Tirthan, Banganga, Uhl |
| **Ravi** | Bara Bhangal (Kangra) ke Dhauladhar | Chamba (aur kuch hissa Kangra) | Budhil, Tundah |
| **Chenab** (Chandrabhaga) | Chandra aur Bhaga ka milan Tandi (Lahaul) me | Lahaul & Spiti, phir Chamba (Pangi) | Chandra, Bhaga |
| **Yamuna** | Yamunotri (Uttarakhand) | Sirmaur ki seema chhooti hai | Giri, Tons (Pabbar ke saath) |

**Chandra** nadi Baralacha La ke paas se aur **Bhaga** Surya Taal se nikalti hai. Dono Tandi me mil kar Chenab banti hain, isliye Chenab ko Chandrabhaga bhi kehte hain.

## Pramukh dam aur hydro projects

| Project | Nadi | Jagah |
|---|---|---|
| Bhakra Dam (Gobind Sagar lake) | Satluj | Bilaspur |
| Kol Dam | Satluj | Bilaspur |
| Nathpa Jhakri | Satluj | Shimla / Kinnaur kshetra |
| Karcham Wangtoo | Satluj | Kinnaur |
| Baspa | Baspa | Kinnaur |
| Pong Dam (Maharana Pratap Sagar) | Beas | Kangra |
| Pandoh Dam | Beas | Mandi |
| Larji | Beas | Kullu / Mandi |
| Chamera | Ravi | Chamba |

Gobind Sagar Bhakra Dam ki artificial lake hai, aur **Pong Dam** wetland ek Ramsar site hai. **Pandoh Dam** Beas ke paani ko Satluj ki taraf mod kar Beas–Satluj link se Dehar power house tak le jata hai.

## Exam me aane wale typical sawaal

- Himachal me sabse lambi nadi kaun si hai? **Satluj**.
- Satluj Himachal me kahan se ghusti hai? **Shipki La (Kinnaur)**.
- Beas ka udgam? **Beas Kund (Rohtang ke paas)**.
- Chenab kis do nadiyon se banti hai? **Chandra aur Bhaga**.
- Bhakra Nangal Dam kis nadi par hai? **Satluj**.

## Yaad karne ka trick

"**SBRCY**" (Satluj, Beas, Ravi, Chenab, Yamuna) ek order me yaad karein, phir har nadi ke saath ek district aur ek dam jod dein. Table ko 3 baar likhne se ye lagbhag pakka ho jata hai.

Pass aur lakes ke liye [ye post](/blog/himachal-pradesh-passes-lakes-glaciers-gk-notes) dekhein, aur practice ke liye ${MOCK}.`,
    faqs: [
      { q: "Himachal ki sabse lambi nadi kaun si hai?", a: "Himachal me Satluj sabse lambi nadi maani jaati hai. Ye Shipki La (Kinnaur) se rajya me pravesh karti hai." },
      { q: "Chandra aur Bhaga nadi kahan milti hain?", a: "Tandi (Lahaul) me. Is sangam ke baad nadi Chenab (Chandrabhaga) kehlati hai." },
      { q: "Gobind Sagar kis dam ki lake hai?", a: "Gobind Sagar Bhakra Dam (Satluj nadi, Bilaspur) ki lake hai." },
    ],
  },
  {
    slug: "himachal-pradesh-passes-lakes-glaciers-gk-notes",
    seoTitle: "Himachal Passes, Lakes and Himalayan Ranges: HP GK Notes",
    seoDescription: "Himachal ke pramukh pass (Rohtang, Baralacha La, Kunzum, Shipki La), jheelein (Renuka, Chandratal, Khajjiar) aur Himalaya ki 3 ranges ka revision, table ke saath.",
    title: "Himachal Pradesh Passes, Lakes and Mountain Ranges: Quick GK Notes",
    titleHi: "हिमाचल के दर्रे, झीलें और पर्वत श्रेणियां: GK नोट्स",
    excerpt: "Himalaya ki teen ranges, Himachal ke pramukh pass aur jheelein, kis district me kaun si hai, ek table me taaki exam se pehle jaldi revision ho sake.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Himachal ki geography ke sawaal aksar teen cheezon se aate hain: **pahadi ranges, pass (dara) aur lakes**. Neeche inka revision-style summary hai.

## Himachal ki teen pahadi ranges

| Range | Kahan | Visheshta |
|---|---|---|
| Outer Himalaya (**Shivalik**) | Nichle hisse: Una, Bilaspur, Solan, Sirmaur, nichla Kangra | Sabse kam oonchai, Duns aur chhoti vadiyan |
| Lesser / Inner Himalaya (**Dhauladhar, Pir Panjal** etc.) | Beech ka hissa | Kangra me Dhauladhar, Chamba aur Kullu me Pir Panjal |
| Greater Himalaya (**Zanskar** range ka hissa) | Kinnaur, Lahaul & Spiti | Sabse oonchi chotiyan, barfeela kshetra |

## Pramukh pass (dare)

| Pass | Kahan se kahan |
|---|---|
| **Rohtang** | Kullu aur Lahaul ko jodta hai (Manali ke paas) |
| **Baralacha La** | Lahaul aur Ladakh ke beech |
| **Kunzum** | Lahaul aur Spiti ke beech |
| **Shipki La** | Kinnaur se Tibet (Satluj yahin se Bharat me aati hai) |
| **Jalori** | Kullu aur Shimla ke beech (Anni aur Rampur kshetra) |
| **Bhabha** | Kinnaur aur Spiti ke beech |
| **Sach Pass** | Chamba (Pangi) aur Lahaul ko jodta hai |

## Pramukh jheelein

| Lake | District | Note |
|---|---|---|
| **Renuka** | Sirmaur | Himachal ki sabse badi prakritik jheel, Ramsar site |
| **Chandratal** | Lahaul & Spiti | Ramsar site, Kunzum ke paas |
| **Pong Dam** | Kangra | Beas par bani artificial lake, Ramsar site |
| **Gobind Sagar** | Bilaspur | Bhakra Dam ki lake |
| **Khajjiar** | Chamba | "Mini Switzerland" ke naam se mashhoor |
| **Mahakali** | Chamba | Bharmour kshetra |
| **Manimahesh** | Chamba | Dharmik mahatva, yatra ke liye mashhoor |
| **Prashar** | Mandi | Prashar Rishi mandir ke saath |
| **Rewalsar** | Mandi | Hindu, Sikh aur Buddhist teeno ke liye pavitra |
| **Dal Lake** | Kangra | Dharamshala ke paas |
| **Brighu Lake** | Kullu | Rohtang ke paas |

Himachal me **teen Ramsar sites** hain: **Renuka, Chandratal aur Pong Dam**.

## Exam tips

- Pass ke sawaal "X pass kin do jagahon ko jodta hai" ke type ke hote hain. Table ke dono sides ko yaad karein.
- Lakes ke sawaal "district + visheshta" ke type ke hote hain, jaise "Himachal ki sabse badi prakritik jheel".
- Naya adhyayan karte waqt [nadiyon wali post](/blog/himachal-pradesh-rivers-tributaries-hydro-projects-gk-notes) bhi saath me dekhein, kyunki kai pass aur jheelein nadiyon ke udgam se judi hain.

Practice ke liye ${FREE} dekar apni taiyari check karein.`,
    faqs: [
      { q: "Himachal ki sabse badi prakritik jheel kaun si hai?", a: "Renuka Lake (Sirmaur) Himachal ki sabse badi prakritik jheel maani jaati hai." },
      { q: "Himachal me kitni Ramsar sites hain?", a: "Teen: Renuka Lake, Chandratal aur Pong Dam Lake." },
      { q: "Rohtang Pass kin do jagahon ko jodta hai?", a: "Rohtang Pass Kullu vadi ko Lahaul vadi se jodta hai." },
    ],
  },
  {
    slug: "himachal-pradesh-fairs-festivals-list-district-wise-gk",
    seoTitle: "Himachal Fairs and Festivals List District-wise: HP GK Notes",
    seoDescription: "Himachal ke pramukh mele aur tyohar district-wise: Kullu Dussehra, Mandi Shivratri, Minjar, Lavi, Renuka, Phulaich. Exam me aane wale facts ek table me.",
    title: "Himachal Pradesh Fairs and Festivals List: District-wise Table for Exams",
    titleHi: "हिमाचल के मेले और त्योहार: जिलेवार सूची",
    excerpt: "Himachal ke pramukh mele aur tyohar district ke saath, kab lagte hain aur kis liye mashhoor hain, taaki GK me mele wale sawaal aasani se lagein.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `**Mele aur tyohar** Himachal GK ka sabse zyada poochha jaane wala culture topic hai. Sawaal aksar "Ye mela kis district me lagta hai" ke type ka hota hai. Neeche pramukh mele ek table me hain. Dates har saal badal sakti hain, isliye yahan sirf mahina/mausam diya gaya hai.

## Pramukh mele

| Mela | District | Kab / kis liye |
|---|---|---|
| **Kullu Dussehra** | Kullu | Dussehra ke din se shuru, Bhagwan Raghunath ji ki rath yatra, International festival ka darja |
| **Mandi Shivratri** | Mandi | Mahashivratri par, devi-devtaon ka milan, International festival |
| **Minjar** | Chamba | Ravi ke tat par, Shravan (July-August), Minjar ki maala nadi me pravahit hoti hai |
| **Lavi** | Shimla (Rampur Bushahr) | November, Satluj ke tat par vyapaarik mela |
| **Renuka** | Sirmaur | November, Parshuram aur maa Renuka ke milan ki yaad me |
| **Shoolini** | Solan | June, Shoolini Devi ke naam par |
| **Nalwari** | Bilaspur | March-April, pashu (cattle) mela |
| **Holi Mela** | Hamirpur (Sujanpur) | Holi par |
| **Phulaich** (Ukhyang) | Kinnaur | September, phoolon ka mela |
| **Sipi** | Shimla (Mashobra) | May |
| **Halda** | Lahaul & Spiti | January, Lahaul ka tyohar |
| **Losar** | Lahaul & Spiti | Tibetan/Buddhist naya saal |

## Yaad karne ke tareeke

- **International festival ka darja:** Kullu Dussehra aur Mandi Shivratri. Dono me devi-devtaon ka milan hota hai.
- **Nadi se jude mele:** Minjar (Ravi), Lavi (Satluj).
- **Pashu aur vyapaar mele:** Nalwari (Bilaspur) pashu mela hai, aur Lavi vyapaarik mela hai jisme ooni saamaan aur pashu ka lena-dena hota hai.
- **Buddhist tyohar:** Losar, Halda aur Chham (Lahaul-Spiti, Kinnaur).

## Exam ke liye sahi approach

1. Har mele ke saath **district aur mahina** zaroor yaad karein. Exam me ye 90% sawaalon ka answer hota hai.
2. Kullu Dussehra ko Dussehra ke baad ke din se shuru hone wala mela samjhein (baaki Bharat me Dussehra khatam hota hai).
3. District ki list ke liye [districts wali post](/blog/himachal-pradesh-districts-list-headquarters-area-population-gk) dekhein.

Ab ${MOCK} dekar mele wale sawaal try karein, aur galat jawabon ko is table me jodte jaayein.`,
    faqs: [
      { q: "Kullu Dussehra kab shuru hota hai?", a: "Dussehra ke din se, jab baaki Bharat me Dussehra khatam hota hai. Isme Bhagwan Raghunath ji ki rath yatra nikalti hai." },
      { q: "Minjar mela kis district me lagta hai?", a: "Chamba me, Ravi nadi ke tat par, Shravan ke mahine me." },
      { q: "Lavi mela kahan lagta hai?", a: "Rampur Bushahr (Shimla district) me, Satluj ke tat par, November me." },
    ],
  },
  {
    slug: "himachal-pradesh-formation-history-statehood-timeline-gk",
    seoTitle: "Himachal Pradesh History: Formation to Statehood Timeline (1948-1971)",
    seoDescription: "HP ka itihas: 1948 me 30 riyasaton se gathan, 1956 UT, 1966 Punjab ke pahadi ilake ka vilay aur 25 January 1971 full statehood. Exam-ready timeline.",
    title: "Himachal Pradesh Formation and Statehood Timeline: 1948 to 1971, with Exam Facts",
    titleHi: "हिमाचल प्रदेश का गठन और पूर्ण राज्यत्व: 1948 से 1971 तक",
    excerpt: "15 April 1948 se 25 January 1971 tak ka Himachal ka safar: 30 riyasaton ka vilay, Union Territory, Punjab ke hisse ka vilay aur 18th state banna.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Himachal Pradesh ke **gathan ka itihas** har exam me poochha jata hai, aur sawaal aksar sirf ek date ya ek number ke hote hain. Neeche key milestones ek timeline me hain.

## Gathan se pehle

- Pahadi kshetra me bahut chhoti-chhoti riyasatein thin (Chamba, Mandi, Suket, Sirmaur, Bushahr, Bilaspur/Kehlur aadi).
- **1815 ke Anglo-Gorkha yuddh aur Sugauli ki sandhi** ke baad Gorkhaon ke haath se ye kshetra British ke prabhav me aaya.
- **Shimla** ko British ne **1864** me ghoshit roop se grishmakaleen (summer) capital banaya.
- **Kalka–Shimla railway** 1903 me shuru hui; ise UNESCO ne 2008 me World Heritage ka darja diya.
- Azaadi ke aandolan me **Praja Mandal** aandolan aur **Dhami goli kand (1939)** jaisi ghatnayein pahadi riyasaton me hui.

## Timeline

| Tarikh | Ghatna |
|---|---|
| **15 April 1948** | 30 pahadi riyasaton ko milakar Himachal Pradesh ka gathan (Chief Commissioner's Province) |
| **1952** | Pehle chunav; Himachal Part C state bana |
| **1 November 1956** | States Reorganisation ke baad **Union Territory** bana |
| **1 November 1966** | Punjab ke pahadi ilake (jaise Kangra, Kullu, Lahaul-Spiti, Shimla ke hisse, Nalagarh, Una) Himachal me mile |
| **25 January 1971** | **Poorna Rajya** (full statehood), Bharat ka **18th** rajya |

## Pramukh points jo repeat hote hain

- Himachal ka pehla mukhyamantri **Dr. Y.S. Parmar** thay (1952 me, aur 1971 me poorna rajya banne par bhi). Unhe "**Himachal ka nirmata**" kaha jata hai.
- 15 April ko Himachal Day (Himachal Diwas) manaya jata hai.
- 25 January ko **Statehood Day** manaya jata hai.
- Rajya me 68 Vidhan Sabha seats hain.

## Padhne ka tareeka

1. Timeline ko 4 line me likhkar yaad karein: 1948, 1956, 1966, 1971.
2. Har date ke saath ek number jodein: 30 (riyasatein), 18th (state).
3. Phir ${MOCK} me history ke sawaal try karein.

District-wise sthan ke liye [districts wali post](/blog/himachal-pradesh-districts-list-headquarters-area-population-gk) dekhein.

Notes: Exact reorganisation details aur kuch jilon ke transfer ke sawaal ke liye apni standard Himachal GK book se bhi cross-check karein.`,
    faqs: [
      { q: "Himachal Pradesh ka gathan kab hua?", a: "15 April 1948 ko, 30 pahadi riyasaton ko milakar." },
      { q: "Himachal ko poorna rajya kab mila?", a: "25 January 1971 ko. Ye Bharat ka 18th rajya bana." },
      { q: "Himachal ka nirmata kise kaha jata hai?", a: "Dr. Yashwant Singh Parmar ko, jo rajya ke pehle mukhyamantri thay." },
    ],
  },
  {
    slug: "himachal-pradesh-national-parks-wildlife-sanctuaries-state-symbols",
    seoTitle: "Himachal National Parks, Wildlife Sanctuaries and State Symbols",
    seoDescription: "Himachal ke 5 national parks, pramukh sanctuaries aur state animal, bird, flower, tree. GHNP World Heritage aur Ramsar sites ka quick revision table.",
    title: "Himachal National Parks, Wildlife Sanctuaries and State Symbols: GK Notes",
    titleHi: "हिमाचल के राष्ट्रीय उद्यान, वन्यजीव अभयारण्य और राज्य चिन्ह",
    excerpt: "Himachal ke paanch national parks, pramukh sanctuaries aur state animal/bird/flower/tree ka ek table, taaki environment aur GK ke sawaal aasaan hon.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Forest Guard, Patwari, Police aur HPRCA ke exams me **national parks aur state symbols** ke sawaal lagbhag pakka hote hain. Ye post sirf wahi cheezein deti hai jo repeat hoti hain.

## Himachal ke 5 national parks

| National Park | District | Note |
|---|---|---|
| **Great Himalayan National Park (GHNP)** | Kullu | UNESCO World Heritage Site (2014) |
| **Pin Valley National Park** | Lahaul & Spiti | Cold desert, snow leopard ka habitat |
| **Inderkilla National Park** | Kullu | Parvati vadi kshetra |
| **Khirganga National Park** | Kullu | Parvati vadi, garam paani ke strote ke liye mashhoor Khirganga trek |
| **Simbalbara National Park** | Sirmaur | Shivalik kshetra ka sabse chhota park |

## Pramukh wildlife sanctuaries (kuch udaharan)

- **Kibber** (Spiti), **Chail** (Solan), **Pong Dam** (Kangra), **Gamgul Siahbehi** (Chamba), **Kugti** (Chamba), **Tirthan** (Kullu), **Sainj** (Kullu), **Manali** (Kullu), **Rupi Bhaba** (Kinnaur), **Dhauladhar** (Kangra).

Sanctuary ki exact sankhya notification ke saath badal sakti hai, isliye yahan sirf pramukh naam diye gaye hain.

## Himachal ke state symbols

| Symbol | Naam |
|---|---|
| State animal | **Snow leopard** (Himalayan) |
| State bird | **Western Tragopan** (Jujurana) |
| State flower | **Pink Rhododendron** (Burans) |
| State tree | **Deodar** |
| State language | Hindi (Sanskrit doosri official bhasha) |

## Ramsar sites aur World Heritage

- **Ramsar:** Renuka, Chandratal, Pong Dam.
- **World Heritage:** Great Himalayan National Park (2014) aur Kalka–Shimla Railway (2008, Mountain Railways of India ka hissa).

## Yaad rakhne ka tareeka

1. Kullu ke 3 national parks (**GHNP, Inderkilla, Khirganga**) ek saath yaad karein.
2. Pin Valley ko Spiti se jodein, Simbalbara ko Sirmaur se.
3. State symbols ko "Snow Leopard – Tragopan – Burans – Deodar" ke ek line me ratt lein.

Notes ko environment aur [nadiyon wali post](/blog/himachal-pradesh-rivers-tributaries-hydro-projects-gk-notes) ke saath padhein, aur ${FREE} se check karein.`,
    faqs: [
      { q: "Himachal me kitne national parks hain?", a: "Paanch: Great Himalayan, Pin Valley, Inderkilla, Khirganga aur Simbalbara." },
      { q: "Himachal ka rajya pakshi kaun sa hai?", a: "Western Tragopan (Jujurana)." },
      { q: "Himachal ka rajya pashu kaun sa hai?", a: "Snow leopard (Himalayan)." },
    ],
  },
  {
    slug: "himachal-pradesh-temples-folk-dance-painting-culture-gk",
    seoTitle: "Himachal Culture GK: Temples, Folk Dance, Painting, Languages",
    seoDescription: "Himachal ke pramukh mandir, lok nritya (Nati, Chham), Kangra painting, Chamba rumal aur bhashayein ek table me. Culture topic ka exam revision.",
    title: "Himachal Pradesh Culture GK: Temples, Folk Dances, Painting, Handicraft and Languages",
    titleHi: "हिमाचल की संस्कृति: मंदिर, लोक नृत्य, चित्रकला, हस्तशिल्प और बोलियां",
    excerpt: "Himachal ke pramukh mandir, lok nritya, Kangra painting, Chamba rumal, hastshilp aur boliyon ka ek hi jagah par exam-oriented summary.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `**Culture** wale sawaal Himachal exams me 4 se 6 marks ke hote hain, aur zyadatar "kis jagah kaun sa mandir / kala" ke type ke. Ye post usi ko table me deti hai.

## Pramukh mandir

| Mandir | District |
|---|---|
| **Jwalamukhi** (jwala ki lau) | Kangra |
| **Brajeshwari Devi** | Kangra |
| **Chamunda Devi** | Kangra |
| **Baijnath** (Shiv mandir) | Kangra |
| **Masroor** (chattan kate mandir) | Kangra |
| **Naina Devi** | Bilaspur |
| **Chintpurni** | Una |
| **Hidimba Devi** | Kullu (Manali) |
| **Bijli Mahadev** | Kullu |
| **Bhimakali** | Shimla (Sarahan) |
| **Tara Devi** | Shimla |
| **Renuka Ji** | Sirmaur |
| **Lakshana Devi, Manimahesh** | Chamba |

Kangra ko aksar "**Mandiron ki ghati**" ke roop me yaad kiya jata hai, kyonki Shakti Peethon me se kai yahi hain.

## Lok nritya aur sangeet (udaharan)

| Nritya | Kshetra |
|---|---|
| **Nati** | Kullu, Mandi aur Shimla ke pahadi ilake ka pramukh lok nritya |
| **Chham** | Lahaul-Spiti aur Kinnaur ka Buddhist mukhaute wala nritya |
| **Gaddi** | Gaddi samudaay (Chamba, Kangra) ka nritya |

Alag-alag boli aur nritya ke sawaalon ke liye ek standard Himachal GK book se bhi dekhein, kyunki naamon me upbhed ho sakte hain.

## Chitrakala aur hastshilp

- **Kangra painting** (Pahari school ka hissa): Guler, Nurpur aur Kangra se judi.
- **Chamba rumal:** Chamba ka mashhoor kadhai wala rumal.
- **Kullu shawl:** Kullu ki pehchaan, Bushahr aur Kinnaur ki topi bhi mashhoor.
- **Pahari miniature** aur **Thangka** (Buddhist kshetra) bhi poochhe jaate hain.

## Bhasha

- **Hindi** rajya ki official bhasha hai, aur **Sanskrit** ko 2019 me doosri official bhasha ka darja mila.
- Pahadi boliyan: Kangri, Mandyali, Kului, Chambeali, Mahasui, Kinnauri, Bhoti, Pangwali aadi.

## Padhne ka tareeka

1. Mandir table me sirf district yaad karein (naam ke saath).
2. Mele aur tyohar ke liye [alag post](/blog/himachal-pradesh-fairs-festivals-list-district-wise-gk) dekhein.
3. Phir ${MOCK} se practice karein.`,
    faqs: [
      { q: "Jwalamukhi mandir kis district me hai?", a: "Kangra district me." },
      { q: "Chamba rumal kis liye mashhoor hai?", a: "Chamba ka kadhai wala rumal, jo Pahari kala ka hissa hai." },
      { q: "Himachal ki doosri official bhasha kaun si hai?", a: "Sanskrit, jise 2019 me doosri official bhasha ka darja mila." },
    ],
  },
  {
    slug: "himachal-pradesh-polity-administration-panchayati-raj-gk-notes",
    seoTitle: "Himachal Polity and Administration: Vidhan Sabha, Panchayati Raj Notes",
    seoDescription: "HP ki polity ke facts: 68 Vidhan Sabha seats, Lok Sabha/Rajya Sabha seats, High Court Shimla, 3-tier Panchayati Raj, divisions aur Himachal GK ka polity revision.",
    title: "Himachal Pradesh Polity and Administration: Vidhan Sabha, High Court, Panchayati Raj Notes",
    titleHi: "हिमाचल की राजव्यवस्था: विधानसभा, उच्च न्यायालय, पंचायती राज",
    excerpt: "Himachal ki rajvyavastha ke wo facts jo Patwari, Naib Tehsildar aur clerk exams me aate hain: seats, High Court, Panchayati Raj ka dhancha aur prashasan.",
    category: "STRATEGY",
    exams: [...GK_EXAMS, "hppsc/naib-tehsildar", "hprca/panchayat-secretary"],
    content: `Himachal ki **polity aur administration** chhota topic hai par scoring hai. Ye post wahi facts deti hai jo exam me baar baar aate hain, aur office-holders ke naam jaan-boojhkar nahi diye, kyonki wo badalte rehte hain.

## Rajya ka dhancha

| Cheez | Fact |
|---|---|
| Vidhan Sabha seats | **68** (ek sadan wali Vidhan Sabha) |
| Lok Sabha seats | **4** |
| Rajya Sabha seats | **3** |
| High Court | **Shimla** me |
| Capital | **Shimla** (winter capital: Dharamshala) |
| Divisions | **3**: Shimla, Mandi, Kangra |
| Districts | **12** |

Vidhan Sabha ka winter session Dharamshala (Tapovan) me hota hai.

## Panchayati Raj

- **73rd Constitutional Amendment (1992)** ke baad Himachal me **Himachal Pradesh Panchayati Raj Act, 1994** laagu hua.
- Teen star ka dhancha: **Gram Panchayat, Panchayat Samiti (Block), Zila Parishad**.
- Gram Sabha gaon ke sabhi matadaaon ki sabha hoti hai.
- Panchayat Secretary ka kaam Gram Panchayat ke records aur yojanaon ke implementation me madad karna hai; iske liye [Panchayat Secretary ki syllabus post](/blog/hprca-panchayat-secretary-syllabus-73rd-amendment-preparation) dekhein.

## Revenue prashasan

- Rajya ke **district** ke neeche **tehsil**, aur tehsil ke neeche **patwar circle** (Patwari ke jimme) hote hain.
- Revenue records ke shabd (jamabandi, khasra, girdawari, intkal) ke liye [Naib Tehsildar wali post](/blog/naib-tehsildar-revenue-terms-jamabandi-khasra-girdawari-intkal-explained) dekhein.

## Exam me aane wale type ke sawaal

- Himachal Vidhan Sabha me kitni seats hain? **68**.
- Himachal ka High Court kahan hai? **Shimla**.
- Himachal me Panchayati Raj Act kab laagu hua? **1994**.
- Himachal ke kitne Lok Sabha / Rajya Sabha seats? **4 / 3**.

## Revision

Ye facts ek flash card me likhkar rozana ek baar dekhein. Phir ${MOCK} me polity wale sawaal try karein.

Note: Seats aur sansthaon ki sankhya delimitation ya naye kanoon se badal sakti hai, isliye latest notification ya official site se bhi check kar lein.`,
    faqs: [
      { q: "Himachal Vidhan Sabha me kitni seats hain?", a: "68 seats." },
      { q: "Himachal ka High Court kahan hai?", a: "Shimla me." },
      { q: "Himachal me Panchayati Raj Act kab laagu hua?", a: "Himachal Pradesh Panchayati Raj Act 1994 me laagu hua, 73rd Constitutional Amendment ke baad." },
    ],
  },
  {
    slug: "himachal-gk-40-most-important-questions-with-answers-for-hp-exams",
    seoTitle: "Himachal GK: 40 Most Important Questions with Answers for HP Exams",
    seoDescription: "Himachal GK ke 40 important sawal-jawab: gathan, districts, nadiyan, pass, jheelein, mele, national parks aur polity. Patwari, Police, HPRCA ke liye quick revision.",
    title: "Himachal GK: 40 Most Important Questions with Answers for HP Government Exams",
    titleHi: "हिमाचल GK: 40 सबसे महत्वपूर्ण प्रश्न और उत्तर",
    excerpt: "Himachal GK ke 40 important sawal-jawab, topic-wise, jo Patwari, Police Constable, Clerk aur JOA IT jaise exams me baar baar aate hain.",
    category: "STRATEGY",
    exams: GK_EXAMS,
    content: `Ye 40 sawal-jawab pichhli posts ke facts par bane hain. Exam se ek din pehle inko ek baar padhein, aur phir ${MOCK} dekar check karein.

## Itihas aur gathan

1. Himachal Pradesh ka gathan kab hua? **15 April 1948**.
2. Gathan me kitni riyasatein mili? **30**.
3. Himachal poorna rajya kab bana? **25 January 1971**.
4. Himachal Bharat ka kaun sa rajya bana? **18th**.
5. Himachal ka pehla mukhyamantri kaun tha? **Dr. Y.S. Parmar**.
6. Punjab ke pahadi ilake Himachal me kab mile? **1 November 1966**.

## Districts

7. Himachal me kitne districts hain? **12**.
8. Himachal ke kitne divisions hain? **3** (Shimla, Mandi, Kangra).
9. Sabse bada district (area)? **Lahaul & Spiti**.
10. Sabse zyada aabadi wala district? **Kangra**.
11. Kangra ka headquarters? **Dharamshala**.
12. Sirmaur ka headquarters? **Nahan**.
13. Kinnaur ka headquarters? **Reckong Peo**.
14. Lahaul & Spiti ka headquarters? **Kyelang**.

## Nadiyan aur dam

15. Himachal ki sabse lambi nadi? **Satluj**.
16. Satluj Himachal me kahan se aati hai? **Shipki La (Kinnaur)**.
17. Beas ka udgam? **Beas Kund (Rohtang ke paas)**.
18. Ravi Himachal ke kis district me mukhya roop se bahti hai? **Chamba**.
19. Chenab kin do nadiyon se banti hai? **Chandra aur Bhaga**.
20. Bhakra Dam kis nadi par hai? **Satluj**.
21. Pong Dam kis nadi par hai? **Beas**.
22. Gobind Sagar kis dam ki lake hai? **Bhakra**.

## Pass, lakes aur parks

23. Rohtang Pass kin do ghatiyon ko jodta hai? **Kullu aur Lahaul**.
24. Shipki La kahan hai? **Kinnaur (Tibet seema)**.
25. Himachal ki sabse badi prakritik jheel? **Renuka (Sirmaur)**.
26. Himachal ki teen Ramsar sites? **Renuka, Chandratal, Pong Dam**.
27. Great Himalayan National Park kis district me hai? **Kullu**.
28. Himachal ke kitne national parks hain? **5**.
29. Himachal ka rajya pashu? **Snow leopard**.
30. Himachal ka rajya pakshi? **Western Tragopan**.

## Mele aur culture

31. Kullu Dussehra kab shuru hota hai? **Dussehra ke din se**.
32. Minjar mela kahan lagta hai? **Chamba**.
33. Lavi mela kahan lagta hai? **Rampur Bushahr (Shimla)**.
34. Jwalamukhi mandir kahan hai? **Kangra**.
35. Naina Devi mandir kahan hai? **Bilaspur**.
36. Chintpurni mandir kahan hai? **Una**.

## Polity

37. Himachal Vidhan Sabha me kitni seats hain? **68**.
38. Himachal ka High Court kahan hai? **Shimla**.
39. Himachal Panchayati Raj Act kab laagu hua? **1994**.
40. Himachal ki doosri official bhasha? **Sanskrit**.

## Agla kadam

Jis sawal me galti hui, uska topic wali post kholkar padhein:
- [Districts](/blog/himachal-pradesh-districts-list-headquarters-area-population-gk)
- [Nadiyan aur dam](/blog/himachal-pradesh-rivers-tributaries-hydro-projects-gk-notes)
- [Pass aur lakes](/blog/himachal-pradesh-passes-lakes-glaciers-gk-notes)
- [Mele](/blog/himachal-pradesh-fairs-festivals-list-district-wise-gk)
- [Itihas](/blog/himachal-pradesh-formation-history-statehood-timeline-gk)

Aur roz ek ${FREE} dekar speed aur accuracy badhayein.`,
    faqs: [
      { q: "Himachal GK kitne din me ready ho sakta hai?", a: "Roz 1 se 2 ghante dene par 3 se 4 hafton me basic Himachal GK ki revision ho sakti hai. Har hafte ek topic aur ek mock ka plan achha rehta hai." },
      { q: "Kya ye sawal exam me aate hain?", a: "Ye sawal Himachal GK ke core topics se hain jo har exam me repeat hote hain. Exact sawal alag ho sakte hain, isliye concept samajhna zaroori hai." },
    ],
  },
];
