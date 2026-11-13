// HPRCA Computer Teacher Free Mock 1 — 15 questions (Computer Fundamentals & Hardware 4, Programming 3, DBMS & Networking 3, Pedagogy 2, Himachal GK 3).

import { q, type PatwariQuestion } from "../patwari/types";

export const computerTeacherMock1: PatwariQuestion[] = [
  // ───────── Section 0: Computer Fundamentals & Hardware ─────────
  q(0, "computer", "fundamentals", "E", 0,
    ["Which part of a computer is called its 'brain'?", ["CPU", "Monitor", "Keyboard", "Mouse"], "The Central Processing Unit (CPU) executes instructions and controls all other parts, so it is called the brain of the computer."],
    ["कंप्यूटर के किस भाग को उसका 'मस्तिष्क' कहा जाता है?", ["सीपीयू", "मॉनिटर", "कीबोर्ड", "माउस"], "केंद्रीय प्रोसेसिंग इकाई (सीपीयू) निर्देशों को निष्पादित करती है और अन्य सभी भागों को नियंत्रित करती है, इसलिए इसे कंप्यूटर का मस्तिष्क कहते हैं।"]),
  q(0, "computer", "hardware", "E", 1,
    ["Which of the following is volatile memory?", ["ROM", "RAM", "Hard disk", "Pen drive"], "RAM loses its contents when power is switched off, so it is volatile; ROM, hard disks and pen drives keep data without power."],
    ["निम्नलिखित में से कौन-सी वाष्पशील (वोलेटाइल) स्मृति है?", ["रोम", "रैम", "हार्ड डिस्क", "पेन ड्राइव"], "बिजली बंद होने पर रैम की सामग्री मिट जाती है, इसलिए वह वाष्पशील है; रोम, हार्ड डिस्क और पेन ड्राइव बिना बिजली के भी डेटा रखते हैं।"]),
  q(0, "computer", "hardware", "M", 2,
    ["1 kilobyte (KB) is equal to:", ["1000 bits", "100 bytes", "1024 bytes", "1024 bits"], "In computing, 1 KB = 1024 bytes."],
    ["1 किलोबाइट (KB) किसके बराबर होता है?", ["1000 बिट", "100 बाइट", "1024 बाइट", "1024 बिट"], "कंप्यूटिंग में 1 KB = 1024 बाइट होता है।"]),
  q(0, "computer", "number-system", "M", 1,
    ["The binary equivalent of the decimal number 10 is:", ["1001", "1010", "1100", "1110"], "10 = 8 + 2 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰, which is 1010."],
    ["दशमलव संख्या 10 का द्विआधारी (बाइनरी) रूप क्या है?", ["1001", "1010", "1100", "1110"], "10 = 8 + 2 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰, अर्थात 1010।"]),

  // ───────── Section 1: Programming ─────────
  q(1, "computer", "programming-basics", "E", 3,
    ["Which of the following is a high-level programming language?", ["Machine language", "Assembly language", "Binary code", "Python"], "Python is a high-level language; machine and assembly languages are low-level and close to the hardware."],
    ["निम्नलिखित में से कौन-सी उच्च-स्तरीय प्रोग्रामिंग भाषा है?", ["मशीन भाषा", "असेंबली भाषा", "बाइनरी कोड", "पायथन"], "पायथन उच्च-स्तरीय भाषा है; मशीन और असेंबली भाषाएँ निम्न-स्तरीय हैं और हार्डवेयर के निकट होती हैं।"]),
  q(1, "computer", "programming-basics", "M", 0,
    ["A compiler translates a program:", ["Whole source code into machine code before it runs", "One line at a time while it runs", "Only the comments of the program", "Machine code back into source code"], "A compiler translates the entire source program in one go, whereas an interpreter translates and runs it line by line."],
    ["कंपाइलर किसी प्रोग्राम का अनुवाद कैसे करता है?", ["चलाने से पहले पूरे स्रोत कोड को मशीन कोड में", "चलते समय एक-एक पंक्ति करके", "केवल प्रोग्राम की टिप्पणियों का", "मशीन कोड को वापस स्रोत कोड में"], "कंपाइलर पूरे स्रोत प्रोग्राम का एक साथ अनुवाद करता है, जबकि इंटरप्रेटर उसे एक-एक पंक्ति करके अनुवादित कर चलाता है।"]),
  q(1, "computer", "programming-basics", "E", 2,
    ["In the C language, every statement normally ends with a:", ["Colon", "Full stop", "Semicolon", "Comma"], "A statement in C is terminated by a semicolon (;)."],
    ["C भाषा में प्रत्येक कथन (स्टेटमेंट) सामान्यतः किससे समाप्त होता है?", ["कोलन", "पूर्णविराम", "अर्धविराम (सेमीकोलन)", "कॉमा"], "C भाषा में कथन अर्धविराम (;) से समाप्त होता है।"]),

  // ───────── Section 2: DBMS & Networking ─────────
  q(2, "computer", "dbms", "E", 1,
    ["In database management, SQL stands for:", ["Simple Query Language", "Structured Query Language", "Sequential Query Logic", "Standard Question Language"], "SQL stands for Structured Query Language and is used to create, query and update relational databases."],
    ["डेटाबेस प्रबंधन में SQL का पूर्ण रूप क्या है?", ["सिंपल क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सीक्वेंशियल क्वेरी लॉजिक", "स्टैंडर्ड क्वेश्चन लैंग्वेज"], "SQL का पूर्ण रूप स्ट्रक्चर्ड क्वेरी लैंग्वेज है, जिससे संबंधपरक डेटाबेस बनाए, खोजे और अद्यतन किए जाते हैं।"]),
  q(2, "computer", "dbms", "M", 3,
    ["A primary key in a table is used to:", ["Store images", "Encrypt the table", "Sort the data alphabetically", "Identify each record uniquely"], "A primary key holds unique, non-null values that identify every record in a table."],
    ["किसी तालिका में प्राइमरी की (मुख्य कुंजी) का उपयोग किसलिए होता है?", ["चित्र संग्रहीत करने के लिए", "तालिका को एन्क्रिप्ट करने के लिए", "डेटा को वर्णानुक्रम में लगाने के लिए", "प्रत्येक रिकॉर्ड की अद्वितीय पहचान के लिए"], "प्राइमरी की में अद्वितीय और रिक्त-रहित मान होते हैं जो तालिका के प्रत्येक रिकॉर्ड की पहचान करते हैं।"]),
  q(2, "computer", "internet-networking", "M", 1,
    ["An IPv4 address is made up of how many bits?", ["16", "32", "64", "128"], "IPv4 addresses are 32 bits long, usually written as four decimal numbers such as 192.168.1.1; IPv6 uses 128 bits."],
    ["आईपीवी4 (IPv4) पता कितने बिट का होता है?", ["16", "32", "64", "128"], "आईपीवी4 पता 32 बिट का होता है और आम तौर पर 192.168.1.1 जैसी चार दशमलव संख्याओं में लिखा जाता है; आईपीवी6 में 128 बिट होते हैं।"]),

  // ───────── Section 3: Child Development & Pedagogy ─────────
  q(3, "pedagogy", "child-development", "E", 2,
    ["The four stages of cognitive development, beginning with the sensorimotor stage, were given by:", ["Sigmund Freud", "B. F. Skinner", "Jean Piaget", "Abraham Maslow"], "Jean Piaget described four stages: sensorimotor, pre-operational, concrete operational and formal operational."],
    ["संवेदी-गामक अवस्था से शुरू होने वाली संज्ञानात्मक विकास की चार अवस्थाएँ किसने दीं?", ["सिगमंड फ्रायड", "बी. एफ. स्किनर", "जीन पियाजे", "अब्राहम मैस्लो"], "जीन पियाजे ने चार अवस्थाएँ बताईं: संवेदी-गामक, पूर्व-संक्रियात्मक, मूर्त-संक्रियात्मक और औपचारिक-संक्रियात्मक।"]),
  q(3, "pedagogy", "learning-theories", "M", 0,
    ["The concept of the 'Zone of Proximal Development' is associated with:", ["Lev Vygotsky", "John Watson", "Edward Thorndike", "Noam Chomsky"], "Vygotsky's Zone of Proximal Development is the gap between what a learner can do alone and what they can do with guidance."],
    ["'समीपस्थ विकास का क्षेत्र' (ZPD) की अवधारणा किससे जुड़ी है?", ["लेव वाइगोत्स्की", "जॉन वॉटसन", "एडवर्ड थॉर्नडाइक", "नोम चॉम्स्की"], "वाइगोत्स्की का समीपस्थ विकास क्षेत्र वह अंतर है जो बच्चा अकेले कर सकता है और मार्गदर्शन के साथ कर सकता है, इन दोनों के बीच होता है।"]),

  // ───────── Section 4: Himachal GK ─────────
  q(4, "hp-gk", "districts", "M", 3,
    ["Which district of Himachal Pradesh has the largest area and also the lowest population density?", ["Kinnaur", "Chamba", "Kullu", "Lahaul and Spiti"], "Lahaul and Spiti is the largest district of Himachal Pradesh by area (about 13,835 sq km) and the least densely populated."],
    ["हिमाचल प्रदेश के किस ज़िले का क्षेत्रफल सबसे अधिक और जनसंख्या घनत्व सबसे कम है?", ["किन्नौर", "चंबा", "कुल्लू", "लाहौल एवं स्पीति"], "लाहौल एवं स्पीति क्षेत्रफल (लगभग 13,835 वर्ग किमी) की दृष्टि से हिमाचल का सबसे बड़ा और सबसे कम जनसंख्या घनत्व वाला ज़िला है।"]),
  q(4, "hp-gk", "rivers-lakes", "M", 1,
    ["Which river of Himachal Pradesh was known in ancient times as 'Vipasha'?", ["Ravi", "Beas", "Sutlej", "Chenab"], "The Beas was called Vipasha (Hyphasis to the Greeks) in ancient times."],
    ["हिमाचल प्रदेश की किस नदी को प्राचीन काल में 'विपाशा' कहा जाता था?", ["रावी", "ब्यास", "सतलुज", "चिनाब"], "ब्यास नदी को प्राचीन काल में विपाशा (यूनानियों के लिए हाइफेसिस) कहा जाता था।"]),
  q(4, "hp-gk", "history", "E", 0,
    ["On which date was Himachal Pradesh granted full statehood as the 18th state of India?", ["25 January 1971", "15 April 1948", "1 November 1956", "26 January 1950"], "Himachal Pradesh was granted full statehood on 25 January 1971 and became the 18th state of India."],
    ["हिमाचल प्रदेश को भारत के 18वें राज्य के रूप में पूर्ण राज्यत्व किस तिथि को दिया गया?", ["25 जनवरी 1971", "15 अप्रैल 1948", "1 नवंबर 1956", "26 जनवरी 1950"], "हिमाचल प्रदेश को 25 जनवरी 1971 को पूर्ण राज्य का दर्जा मिला और यह भारत का 18वाँ राज्य बना।"]),
];
