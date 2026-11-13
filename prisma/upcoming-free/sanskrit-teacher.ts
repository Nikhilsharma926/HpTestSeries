// HPRCA Sanskrit Teacher Free Mock 1 — 15 questions (Sanskrit Grammar 6, Literature/Chhand/Teaching 4, Pedagogy 2, Himachal GK 3).

import { q, type PatwariQuestion } from "../patwari/types";

export const sanskritTeacherMock1: PatwariQuestion[] = [
  // ───────── Section 0: Sanskrit Grammar ─────────
  q(0, "sanskrit", "sandhi", "E", 1,
    ["What is the correct sandhi of 'सूर्य + उदयः'?", ["सूर्यउदयः", "सूर्योदयः", "सूर्यौदयः", "सूर्यादयः"], "अ + उ = ओ (गुण सन्धि), so सूर्य + उदयः becomes सूर्योदयः."],
    ["'सूर्य + उदयः' का सही सन्धि-रूप क्या है?", ["सूर्यउदयः", "सूर्योदयः", "सूर्यौदयः", "सूर्यादयः"], "अ + उ = ओ (गुण सन्धि) होता है, इसलिए सूर्य + उदयः = सूर्योदयः।"]),
  q(0, "sanskrit", "sandhi", "M", 1,
    ["What is the correct sandhi of 'महा + ऋषिः'?", ["महारषिः", "महर्षिः", "महार्षिः", "महऋषिः"], "आ + ऋ = अर् (गुण सन्धि), so महा + ऋषिः becomes महर्षिः."],
    ["'महा + ऋषिः' का सही सन्धि-रूप क्या है?", ["महारषिः", "महर्षिः", "महार्षिः", "महऋषिः"], "आ + ऋ = अर् (गुण सन्धि) होता है, इसलिए महा + ऋषिः = महर्षिः।"]),
  q(0, "sanskrit", "samas", "M", 2,
    ["Which samas is 'राजपुरुषः' (राज्ञः पुरुषः)?", ["द्वन्द्व समास", "बहुव्रीहि समास", "तत्पुरुष समास", "अव्ययीभाव समास"], "'राज्ञः पुरुषः' is a sixth-case (षष्ठी) tatpurusha, in which the second member is the main one."],
    ["'राजपुरुषः' (राज्ञः पुरुषः) में कौन-सा समास है?", ["द्वन्द्व समास", "बहुव्रीहि समास", "तत्पुरुष समास", "अव्ययीभाव समास"], "'राज्ञः पुरुषः' षष्ठी तत्पुरुष समास है, जिसमें उत्तर पद प्रधान होता है।"]),
  q(0, "sanskrit", "karak-vibhakti", "E", 1,
    ["In the sentence 'रामः वनं गच्छति', which karak is 'वनम्'?", ["कर्ता कारक", "कर्म कारक", "करण कारक", "अपादान कारक"], "'वनम्' is the object of the action of going, so it is in the accusative (द्वितीया विभक्ति) and is the karma karak."],
    ["'रामः वनं गच्छति' वाक्य में 'वनम्' कौन-सा कारक है?", ["कर्ता कारक", "कर्म कारक", "करण कारक", "अपादान कारक"], "'वनम्' गमन क्रिया का कर्म है, इसलिए यह द्वितीया विभक्ति में है और कर्म कारक है।"]),
  q(0, "sanskrit", "shabd-dhatu-roop", "M", 1,
    ["What is the nominative plural (प्रथमा बहुवचन) of 'बालकः'?", ["बालकौ", "बालकाः", "बालकान्", "बालकैः"], "The प्रथमा forms of बालक are बालकः, बालकौ, बालकाः; the plural is बालकाः."],
    ["'बालकः' शब्द का प्रथमा बहुवचन रूप क्या है?", ["बालकौ", "बालकाः", "बालकान्", "बालकैः"], "बालक के प्रथमा रूप बालकः, बालकौ, बालकाः हैं; बहुवचन बालकाः है।"]),
  q(0, "sanskrit", "pratyay", "M", 2,
    ["Which form is made by adding the pratyay 'क्त्वा' to the root 'कृ'?", ["कृतम्", "कर्तुम्", "कृत्वा", "करणीयम्"], "'क्त्वा' forms the indeclinable of completed action, so कृ + क्त्वा = कृत्वा (having done)."],
    ["धातु 'कृ' में 'क्त्वा' प्रत्यय लगाने से कौन-सा रूप बनता है?", ["कृतम्", "कर्तुम्", "कृत्वा", "करणीयम्"], "'क्त्वा' पूर्वकालिक क्रिया का अव्यय रूप बनाता है, अतः कृ + क्त्वा = कृत्वा (करके)।"]),

  // ───────── Section 1: Literature, Chhand & Teaching ─────────
  q(1, "sanskrit", "sahitya", "E", 0,
    ["Who is the author of the play 'अभिज्ञानशाकुन्तलम्'?", ["कालिदास", "भवभूति", "शूद्रक", "भास"], "Kalidasa wrote Abhijnanashakuntalam, which is regarded as the finest Sanskrit play."],
    ["नाटक 'अभिज्ञानशाकुन्तलम्' के रचयिता कौन हैं?", ["कालिदास", "भवभूति", "शूद्रक", "भास"], "अभिज्ञानशाकुन्तलम् कालिदास की रचना है, जिसे संस्कृत का श्रेष्ठ नाटक माना जाता है।"]),
  q(1, "sanskrit", "sahitya", "E", 3,
    ["The grammar text 'अष्टाध्यायी' was composed by:", ["पतञ्जलि", "वररुचि", "भर्तृहरि", "पाणिनि"], "Panini composed the Ashtadhyayi, which sets out the rules of Sanskrit grammar in about 4,000 sutras."],
    ["व्याकरण ग्रंथ 'अष्टाध्यायी' की रचना किसने की?", ["पतञ्जलि", "वररुचि", "भर्तृहरि", "पाणिनि"], "पाणिनि ने अष्टाध्यायी की रचना की, जिसमें लगभग 4,000 सूत्रों में संस्कृत व्याकरण के नियम दिए गए हैं।"]),
  q(1, "sanskrit", "chhand-alankar", "M", 1,
    ["How many syllables are there in each quarter (पाद) of the 'अनुष्टुप्' metre?", ["6", "8", "11", "12"], "Anushtup has four padas of eight syllables each, 32 syllables in all; the Gita and the Ramayana are largely in this metre."],
    ["'अनुष्टुप्' छन्द के प्रत्येक पाद (चरण) में कितने अक्षर होते हैं?", ["6", "8", "11", "12"], "अनुष्टुप् में आठ-आठ अक्षरों के चार पाद, यानी कुल 32 अक्षर होते हैं; गीता और रामायण अधिकांशतः इसी छन्द में हैं।"]),
  q(1, "sanskrit", "shikshan", "M", 0,
    ["Which is the natural order of the four language skills in language learning?", ["Listening, speaking, reading, writing", "Reading, writing, listening, speaking", "Writing, reading, speaking, listening", "Speaking, writing, listening, reading"], "A child first listens, then speaks, and only later learns to read and write, so teaching follows the order of listening, speaking, reading and writing."],
    ["भाषा सीखने में चार भाषा-कौशलों का स्वाभाविक क्रम क्या है?", ["श्रवण, भाषण, पठन, लेखन", "पठन, लेखन, श्रवण, भाषण", "लेखन, पठन, भाषण, श्रवण", "भाषण, लेखन, श्रवण, पठन"], "बच्चा पहले सुनता है, फिर बोलता है और बाद में पढ़ना-लिखना सीखता है, इसलिए शिक्षण श्रवण, भाषण, पठन और लेखन के क्रम में चलता है।"]),

  // ───────── Section 2: Child Development & Pedagogy ─────────
  q(2, "pedagogy", "learning-theories", "E", 2,
    ["The taxonomy of educational objectives in the cognitive domain was given by:", ["Carl Rogers", "John Dewey", "Benjamin Bloom", "Maria Montessori"], "Benjamin Bloom and his colleagues classified cognitive objectives from remembering up to evaluating and creating."],
    ["संज्ञानात्मक क्षेत्र के शैक्षिक उद्देश्यों का वर्गीकरण (टैक्सोनॉमी) किसने दिया?", ["कार्ल रोजर्स", "जॉन डीवी", "बेंजामिन ब्लूम", "मारिया मांटेसरी"], "बेंजामिन ब्लूम और उनके सहयोगियों ने संज्ञानात्मक उद्देश्यों को स्मरण से लेकर मूल्यांकन और सृजन तक वर्गीकृत किया।"]),
  q(2, "pedagogy", "inclusive-education", "M", 3,
    ["Under the Right to Education Act 2009, free and compulsory education is guaranteed to children of the age group:", ["3 to 10 years", "5 to 12 years", "4 to 16 years", "6 to 14 years"], "The RTE Act 2009 gives every child between 6 and 14 years the right to free and compulsory elementary education."],
    ["शिक्षा का अधिकार अधिनियम 2009 के अंतर्गत किस आयु वर्ग के बच्चों को निःशुल्क एवं अनिवार्य शिक्षा की गारंटी है?", ["3 से 10 वर्ष", "5 से 12 वर्ष", "4 से 16 वर्ष", "6 से 14 वर्ष"], "आरटीई अधिनियम 2009 में 6 से 14 वर्ष के प्रत्येक बच्चे को निःशुल्क एवं अनिवार्य प्रारंभिक शिक्षा का अधिकार दिया गया है।"]),

  // ───────── Section 3: Himachal GK ─────────
  q(3, "hp-gk", "culture-festivals", "M", 0,
    ["The Kangra school of miniature painting reached its peak under which ruler?", ["Raja Sansar Chand", "Raja Balwant Singh", "Maharaja Ranjit Singh", "Raja Udai Singh"], "Raja Sansar Chand of Kangra (reigned 1775 to 1823) was the great patron under whom Kangra painting flourished."],
    ["कांगड़ा लघुचित्र शैली किस शासक के काल में अपने चरम पर पहुँची?", ["राजा संसार चंद", "राजा बलवंत सिंह", "महाराजा रणजीत सिंह", "राजा उदय सिंह"], "कांगड़ा के राजा संसार चंद (शासनकाल 1775 से 1823) महान संरक्षक थे, जिनके काल में कांगड़ा चित्रकला फली-फूली।"]),
  q(3, "hp-gk", "rivers-lakes", "M", 2,
    ["Renuka Lake, the largest natural lake of Himachal Pradesh, is located in which district?", ["Mandi", "Kangra", "Sirmaur", "Kullu"], "Renuka Lake in Sirmaur district is the largest natural lake of the state and is named after the goddess Renuka."],
    ["हिमाचल प्रदेश की सबसे बड़ी प्राकृतिक झील, रेणुका झील, किस ज़िले में स्थित है?", ["मंडी", "कांगड़ा", "सिरमौर", "कुल्लू"], "सिरमौर ज़िले की रेणुका झील राज्य की सबसे बड़ी प्राकृतिक झील है और देवी रेणुका के नाम पर है।"]),
  q(3, "hp-gk", "geography", "M", 1,
    ["The Great Himalayan National Park, a UNESCO World Heritage Site, lies in which district of Himachal Pradesh?", ["Chamba", "Kullu", "Kinnaur", "Shimla"], "The Great Himalayan National Park in Kullu district was inscribed as a UNESCO World Heritage Site in 2014."],
    ["यूनेस्को विश्व धरोहर स्थल 'ग्रेट हिमालयन नेशनल पार्क' हिमाचल प्रदेश के किस ज़िले में है?", ["चंबा", "कुल्लू", "किन्नौर", "शिमला"], "कुल्लू ज़िले का ग्रेट हिमालयन नेशनल पार्क 2014 में यूनेस्को विश्व धरोहर स्थल के रूप में अंकित हुआ।"]),
];
