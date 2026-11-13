// HPRCA Music Teacher Free Mock 1 — 15 questions (Swara, Raga & Theory 6, Instruments/Taal/History 4, Pedagogy 2, Himachal GK 3).

import { q, type PatwariQuestion } from "../patwari/types";

export const musicTeacherMock1: PatwariQuestion[] = [
  // ───────── Section 0: Swara, Raga & Theory ─────────
  q(0, "music", "theory-ragas", "E", 2,
    ["How many shuddha (natural) swaras are there in an octave (saptak) of Indian music?", ["5", "6", "7", "12"], "The seven shuddha swaras are Sa, Re, Ga, Ma, Pa, Dha and Ni; with the komal and tivra forms they make twelve notes."],
    ["भारतीय संगीत के एक सप्तक में कितने शुद्ध स्वर होते हैं?", ["5", "6", "7", "12"], "सात शुद्ध स्वर सा, रे, ग, म, प, ध और नि हैं; कोमल और तीव्र रूपों को मिलाकर बारह स्वर बनते हैं।"]),
  q(0, "music", "theory-ragas", "M", 3,
    ["According to ancient texts, how many shrutis are there in an octave?", ["7", "12", "16", "22"], "Indian music theory counts 22 shrutis, the smallest audible intervals, within one saptak."],
    ["प्राचीन ग्रंथों के अनुसार एक सप्तक में कितनी श्रुतियाँ होती हैं?", ["7", "12", "16", "22"], "भारतीय संगीत शास्त्र एक सप्तक में 22 श्रुतियाँ मानता है, जो सबसे सूक्ष्म श्रव्य अंतराल हैं।"]),
  q(0, "music", "theory-ragas", "M", 1,
    ["Raga Yaman is traditionally performed at which time?", ["Early morning", "Early night (evening)", "Noon", "Late night"], "Yaman is an evening raga of the first prahar of night, sung just after sunset."],
    ["राग यमन परंपरागत रूप से किस समय गाया जाता है?", ["प्रातःकाल", "संध्या / रात्रि का प्रथम प्रहर", "दोपहर", "देर रात्रि"], "यमन रात्रि के प्रथम प्रहर का राग है, जो सूर्यास्त के ठीक बाद गाया जाता है।"]),
  q(0, "music", "theory-ragas", "E", 0,
    ["The most important swara of a raga is called its:", ["Vadi", "Samvadi", "Anuvadi", "Vivadi"], "The vadi is the 'king' note of a raga, the one used most and given the most stress."],
    ["किसी राग का सबसे महत्वपूर्ण स्वर क्या कहलाता है?", ["वादी", "संवादी", "अनुवादी", "विवादी"], "वादी राग का 'राजा' स्वर है, जिसका प्रयोग सबसे अधिक होता है और जिस पर सबसे अधिक बल दिया जाता है।"]),
  q(0, "music", "theory-ragas", "M", 2,
    ["Into how many thaats did Pandit V. N. Bhatkhande classify the ragas of Hindustani music?", ["5", "7", "10", "12"], "Bhatkhande grouped ragas into ten parent scales, or thaats, such as Bilawal, Kalyan and Bhairav."],
    ["पं. वी. एन. भातखंडे ने हिंदुस्तानी संगीत के रागों को कितने थाटों में वर्गीकृत किया?", ["5", "7", "10", "12"], "भातखंडे ने रागों को बिलावल, कल्याण, भैरव जैसे दस मूल थाटों में वर्गीकृत किया।"]),
  q(0, "music", "taal-laya", "E", 3,
    ["How many matras does Teentaal have?", ["8", "10", "12", "16"], "Teentaal has 16 matras divided into four vibhags of four matras each."],
    ["तीनताल में कितनी मात्राएँ होती हैं?", ["8", "10", "12", "16"], "तीनताल में 16 मात्राएँ होती हैं, जो चार-चार मात्राओं के चार विभागों में बँटी होती हैं।"]),

  // ───────── Section 1: Instruments, Taal & History ─────────
  q(1, "music", "instruments", "M", 2,
    ["The tabla belongs to which class of instruments?", ["Tat vadya (stringed)", "Sushir vadya (wind)", "Avanaddha vadya (membrane percussion)", "Ghan vadya (solid percussion)"], "The tabla has stretched skin membranes and is therefore an avanaddha vadya."],
    ["तबला किस श्रेणी का वाद्य है?", ["तत् वाद्य (तार)", "सुषिर वाद्य (फूँक)", "अवनद्ध वाद्य (चर्म-ताल)", "घन वाद्य (ठोस)"], "तबले पर खिंची हुई चमड़े की झिल्ली होती है, इसलिए यह अवनद्ध वाद्य है।"]),
  q(1, "music", "history-personalities", "M", 0,
    ["Which sitar maestro was awarded the Bharat Ratna in 1999?", ["Pandit Ravi Shankar", "Ustad Bismillah Khan", "Ustad Zakir Hussain", "Pandit Hariprasad Chaurasia"], "Pandit Ravi Shankar received the Bharat Ratna in 1999; Bismillah Khan, a shehnai player, received it in 2001."],
    ["1999 में किस सितार वादक को भारत रत्न से सम्मानित किया गया?", ["पं. रविशंकर", "उस्ताद बिस्मिल्लाह खाँ", "उस्ताद ज़ाकिर हुसैन", "पं. हरिप्रसाद चौरसिया"], "पं. रविशंकर को 1999 में भारत रत्न मिला; शहनाई वादक बिस्मिल्लाह खाँ को यह 2001 में मिला।"]),
  q(1, "music", "history-personalities", "E", 1,
    ["The ancient treatise 'Natya Shastra', which also deals with music, was written by:", ["Sharangadeva", "Bharata Muni", "Matanga", "Narada"], "Bharata Muni is credited with the Natya Shastra, the oldest surviving text on drama, dance and music."],
    ["संगीत से भी संबंधित प्राचीन ग्रंथ 'नाट्यशास्त्र' के रचयिता कौन हैं?", ["शार्ङ्गदेव", "भरत मुनि", "मतंग", "नारद"], "नाट्यशास्त्र भरत मुनि की रचना माना जाता है, जो नाटक, नृत्य और संगीत पर सबसे प्राचीन उपलब्ध ग्रंथ है।"]),
  q(1, "music", "history-personalities", "E", 3,
    ["The famous musician Tansen was a court musician of which Mughal emperor?", ["Babur", "Humayun", "Shah Jahan", "Akbar"], "Tansen was one of the 'Navaratnas' in the court of Akbar."],
    ["प्रसिद्ध संगीतज्ञ तानसेन किस मुगल बादशाह के दरबारी गायक थे?", ["बाबर", "हुमायूँ", "शाहजहाँ", "अकबर"], "तानसेन अकबर के दरबार के 'नवरत्नों' में से एक थे।"]),

  // ───────── Section 2: Child Development & Pedagogy ─────────
  q(2, "pedagogy", "child-development", "M", 1,
    ["The theory of moral development with three levels (pre-conventional, conventional and post-conventional) was proposed by:", ["Erik Erikson", "Lawrence Kohlberg", "Albert Bandura", "Carl Jung"], "Lawrence Kohlberg described moral reasoning in three levels, each with two stages."],
    ["तीन स्तरों (पूर्व-परंपरागत, परंपरागत और उत्तर-परंपरागत) वाला नैतिक विकास सिद्धांत किसने दिया?", ["एरिक एरिक्सन", "लॉरेंस कोहलबर्ग", "अल्बर्ट बंडूरा", "कार्ल युंग"], "लॉरेंस कोहलबर्ग ने नैतिक चिंतन को तीन स्तरों में बाँटा, जिनमें से प्रत्येक के दो चरण हैं।"]),
  q(2, "pedagogy", "learning-theories", "M", 0,
    ["Formative assessment is carried out:", ["During the learning process to improve it", "Only at the end of the year", "Only after the board examination", "Only at the time of admission"], "Formative assessment is continuous and gives feedback while learning is going on, so teaching can be improved."],
    ["रचनात्मक (फॉर्मेटिव) मूल्यांकन कब किया जाता है?", ["सीखने की प्रक्रिया के दौरान, उसे सुधारने के लिए", "केवल वर्ष के अंत में", "केवल बोर्ड परीक्षा के बाद", "केवल प्रवेश के समय"], "रचनात्मक मूल्यांकन सतत होता है और सीखने के दौरान प्रतिपुष्टि देता है, जिससे शिक्षण में सुधार किया जा सके।"]),

  // ───────── Section 3: Himachal GK ─────────
  q(3, "hp-gk", "culture-festivals", "M", 1,
    ["Which of the following is a traditional folk dance of Himachal Pradesh?", ["Bihu", "Nati", "Garba", "Ghoomar"], "Nati is the best-known folk dance of Himachal Pradesh, performed in Kullu, Shimla and Sirmaur; Bihu belongs to Assam, Garba to Gujarat and Ghoomar to Rajasthan."],
    ["निम्नलिखित में से कौन-सा हिमाचल प्रदेश का पारंपरिक लोक नृत्य है?", ["बिहू", "नाटी", "गरबा", "घूमर"], "नाटी हिमाचल का सबसे प्रसिद्ध लोक नृत्य है, जो कुल्लू, शिमला और सिरमौर में किया जाता है; बिहू असम का, गरबा गुजरात का और घूमर राजस्थान का है।"]),
  q(3, "hp-gk", "culture-festivals", "M", 3,
    ["The Minjar fair, celebrated every year in the monsoon season, is associated with which district?", ["Kangra", "Mandi", "Solan", "Chamba"], "The Minjar fair is a week-long festival of Chamba town, held on the banks of the Ravi, in which a minjar (maize or silk tassel) is offered to the river."],
    ["हर वर्ष वर्षा ऋतु में मनाया जाने वाला मिंजर मेला किस ज़िले से जुड़ा है?", ["कांगड़ा", "मंडी", "सोलन", "चंबा"], "मिंजर मेला चंबा नगर का सप्ताह-भर चलने वाला उत्सव है, जो रावी के तट पर मनाया जाता है और जिसमें नदी को मिंजर (मक्का या रेशम की झालर) अर्पित की जाती है।"]),
  q(3, "hp-gk", "rivers-lakes", "M", 2,
    ["The Pong Dam (Maharana Pratap Sagar) in Himachal Pradesh is built on which river?", ["Sutlej", "Ravi", "Beas", "Chenab"], "The Pong Dam in Kangra district is built across the Beas and its reservoir is the Maharana Pratap Sagar wetland."],
    ["हिमाचल प्रदेश का पोंग बाँध (महाराणा प्रताप सागर) किस नदी पर बना है?", ["सतलुज", "रावी", "ब्यास", "चिनाब"], "कांगड़ा ज़िले का पोंग बाँध ब्यास नदी पर बना है और उसका जलाशय महाराणा प्रताप सागर वेटलैंड है।"]),
];
