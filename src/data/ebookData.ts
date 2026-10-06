export interface BookEdition {
  id: 'english' | 'hindi' | 'bundle';
  languageLabel: string;
  nativeLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  badgeText: string[];
  price: number;
  originalPrice: number;
  pages: number;
  format: string;
  bottomPillars: string[];
  telegramPrefill: string;
}

export interface BookMerit {
  number: string;
  titleEn: string;
  titleHi: string;
  subtitle: string;
  description: string;
  highlights: string[];
  spanClass: string;
}

export interface ExcerptChapter {
  id: string;
  chapterNumber: string;
  readingTime: string;
  titleEn: string;
  titleHi: string;
  kickerEn: string;
  kickerHi: string;
  contentEn: {
    dropCapParagraph: string;
    bodyParagraphs: string[];
    pullQuote: string;
    keyTakeawayTitle: string;
    keyTakeaways: string[];
  };
  contentHi: {
    dropCapParagraph: string;
    bodyParagraphs: string[];
    pullQuote: string;
    keyTakeawayTitle: string;
    keyTakeaways: string[];
  };
}

export interface ReaderTestimonial {
  id: string;
  name: string;
  roleAndCity: string;
  editionRead: 'Hindi Edition' | 'English Edition' | 'Both Editions';
  outcomeMetric: string;
  quote: string;
  photoUrl?: string;
  verifiedVia: string;
}

export interface FaqItem {
  id: string;
  category: 'content' | 'formats' | 'purchase';
  categoryLabel: string;
  question: string;
  questionHi: string;
  answer: string;
}

export const TELEGRAM_URL = 'https://t.me/RedwoodHouse';
export const TELEGRAM_HANDLE = '@RedwoodHouse';
export const PUBLISHER_NAME = 'RwH Redwood House';

export const COVER_PHOTO_URL = '/src/assets/images/indian_wellness_cover_photo_1791299964338.jpg';
export const ATELIER_PHOTO_URL = '/src/assets/images/redwood_house_atelier_1791299816452.jpg';

export const BOOK_EDITIONS: Record<'english' | 'hindi' | 'bundle', BookEdition> = {
  english: {
    id: 'english',
    languageLabel: 'English Edition',
    nativeLabel: 'English PDF Edition',
    title: 'Lose Belly Fat in 30 Days',
    subtitle: 'Without Giving Up Roti',
    tagline: 'A Simple, Practical Plan for Indian Women',
    badgeText: ['30-DAY MEAL PLAN', 'WORKOUTS', 'RECIPES', 'TRACKERS & MORE'],
    price: 499,
    originalPrice: 799,
    pages: 148,
    format: 'Instant High-Resolution PDF (Mobile, Tablet & Printable Trackers)',
    bottomPillars: [
      'Real Food, Real Results',
      'Simple Habits for a Healthier You',
      'Sustainable Weight Loss'
    ],
    telegramPrefill: 'Hello RwH Redwood House! I would like to purchase the English Edition of "Lose Belly Fat in 30 Days Without Giving Up Roti" (₹499).'
  },
  hindi: {
    id: 'hindi',
    languageLabel: 'Hindi Edition (हिन्दी)',
    nativeLabel: 'हिन्दी संस्करण (PDF)',
    title: '30 दिनों में बेली फैट कम करें',
    subtitle: 'बिना रोटी छोड़े',
    tagline: 'भारतीय महिलाओं के लिए एक आसान और व्यावहारिक प्लान',
    badgeText: ['डाइट चार्ट', 'एक्सरसाइज़', 'रेसिपीज़', 'प्रोग्रेस ट्रैकर'],
    price: 499,
    originalPrice: 799,
    pages: 152,
    format: 'तुरंत हाई-रेज़ोल्यूशन PDF डाउनलोड (मोबाइल, टैबलेट और प्रिंट करने योग्य ट्रैकर)',
    bottomPillars: [
      'वास्तविक भारतीय खाना',
      'सकारात्मक और स्थायी तरीके',
      'बिना क्रैश डाइट, बिना भूखे रहे'
    ],
    telegramPrefill: 'नमस्ते RwH Redwood House! मैं "30 दिनों में बेली फैट कम करें — बिना रोटी छोड़े" का हिन्दी संस्करण (₹499) खरीदना चाहती/चाहता हूँ।'
  },
  bundle: {
    id: 'bundle',
    languageLabel: 'Dual-Language Combo (EN + हिं)',
    nativeLabel: 'Both English + Hindi Editions',
    title: 'Complete Bilingual Edition Set (English + हिन्दी)',
    subtitle: 'Lose Belly Fat in 30 Days · 30 दिनों में बेली फैट कम करें',
    tagline: 'Ideal for reading in your preferred language or sharing with family members at home',
    badgeText: ['ENGLISH + HINDI PDFS', 'PRINTABLE TRACKERS', 'DIRECT READER SUPPORT'],
    price: 699,
    originalPrice: 1598,
    pages: 300,
    format: '2 Complete Digital PDF Books + Printable 30-Day Habit & Waist Trackers',
    bottomPillars: [
      'Both Hindi & English PDFs',
      'Shareable Within Household',
      'Direct Telegram Author Access'
    ],
    telegramPrefill: 'Hello RwH Redwood House! I would like to purchase the Dual-Language Combo (Both Hindi & English Editions) of "Lose Belly Fat in 30 Days" (₹699).'
  }
};

export const BOOK_MERITS: BookMerit[] = [
  {
    number: '01',
    titleEn: '30-Day Indian Meal Plan (Keep Your Daily Roti)',
    titleHi: '30 दिनों का भारतीय डाइट प्लान (रोज़ के खाने के साथ)',
    subtitle: 'No separate diet cooking or expensive imported ingredients',
    description:
      'Designed around real Indian kitchens. You continue eating home-cooked wheat phulkas, dal tadka, seasonal sabzi, curd, and rice—restructured with precise plate proportions and protein-fiber pairing so insulin spikes drop and stubborn belly fat is mobilized steadily.',
    highlights: [
      'Week-by-week breakfast, lunch, evening chai, and dinner charts',
      'Vegetarian & eggetarian/non-veg Indian protein swaps (paneer, sattu, sprouts, dal combinations)',
      'Exact roti-to-sabzi ratio so you stay full without counting every calorie'
    ],
    spanClass: 'lg:col-span-7'
  },
  {
    number: '02',
    titleEn: 'Easy 20-Minute Home Workouts (No Gym Required)',
    titleHi: 'घर पर करने वाली आसान एक्सरसाइज (कोई जिम नहीं)',
    subtitle: 'Low-impact, joint-friendly movement designed for Indian women',
    description:
      'Forget exhausting high-impact jumps or intimidating gym machines. Our progressive 20-minute bedroom-friendly routines activate deep abdominal core muscles, improve posture, and boost post-meal metabolic rate with zero equipment.',
    highlights: [
      'Knee-friendly & diastasis-safe core activation sequences',
      '10-minute post-dinner digestive walks & morning mobility flows',
      'Visual step-by-step posture cues in both English and Hindi'
    ],
    spanClass: 'lg:col-span-5'
  },
  {
    number: '03',
    titleEn: 'Hunger & Evening Craving Control Protocols',
    titleHi: 'भूख और क्रेविंग कंट्रोल करने के तरीके',
    subtitle: 'Conquer 4 PM chai-time namkeen & late-night sugar urges',
    description:
      'Most crash diets fail between 4:00 PM and 7:00 PM when cortisol and blood sugar dip. Learn practical kitchen swaps and hydration timing that silence cravings naturally—without willpower battles or starving yourself.',
    highlights: [
      'Smart Indian evening snacks under 120 kcal (roasted makhana, spiced chana, buttermilk infusions)',
      'Hormonal hunger vs. emotional boredom checklist',
      'Festival, wedding & family dinner survival blueprint'
    ],
    spanClass: 'lg:col-span-4'
  },
  {
    number: '04',
    titleEn: 'Structured Progress Trackers & Daily Checklists',
    titleHi: 'प्रोग्रेस ट्रैकर और चेकलिस्ट',
    subtitle: 'Measure waist inches, energy, digestion, and daily consistency',
    description:
      'Weight scales fluctuate daily due to water retention. Our dedicated 30-day printable and digital checklists track your waist circumference, morning bloating relief, sleep quality, and daily non-scale victories.',
    highlights: [
      'Weekly waist & hip measurement log sheets',
      'Daily 5-habit tick-box tracker (water, protein, steps, sleep, home movement)',
      'Day 1 vs. Day 15 vs. Day 30 reflection templates'
    ],
    spanClass: 'lg:col-span-4'
  },
  {
    number: '05',
    titleEn: 'Sustainable Habits That Last a Lifetime',
    titleHi: 'स्वस्थ आदतें जो हमेशा काम आएंगी',
    subtitle: 'No crash diets · No starvation · No rebound weight gain',
    description:
      'Published by RwH Redwood House with one core philosophy: if a plan cannot fit into a busy Indian family household for the next five years, it is not worth doing for 30 days. Build calm, confident food freedom.',
    highlights: [
      'Post-30-day maintenance guide so lost belly inches stay off permanently',
      'Hormone-supportive sleep and stress reset rituals for busy mothers & professionals',
      'Direct community & editorial support via Telegram (@RedwoodHouse)'
    ],
    spanClass: 'lg:col-span-4'
  }
];

export const EXCERPT_CHAPTERS: ExcerptChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 'Chapter 01 · अध्याय 01',
    readingTime: '3 min read',
    titleEn: 'Why Roti Was Never Your Enemy',
    titleHi: 'रोटी आपकी दुश्मन कभी नहीं थी',
    kickerEn: 'From Part I: The Indian Metabolism Myth',
    kickerHi: 'भाग I से: भारतीय मेटाबॉलिज़्म का सच',
    contentEn: {
      dropCapParagraph:
        'Every Monday morning across thousands of Indian homes, the same quiet promise is made in the kitchen: "Starting today, I am quitting roti." For four days, you survive on watery soups, plain salads, or expensive imported oats that leave you staring at the clock by 4:30 PM. By Friday evening, exhaustion wins. You eat three hot phulkas at dinner, feel a wave of guilt, and conclude that your willpower is broken.',
      bodyParagraphs: [
        'Your willpower was never broken. What failed you was a borrowed Western diet rule that ignores how Indian meals are constructed. A freshly made whole-wheat phulka is not junk food—it is a complex carbohydrate rich in dietary fiber, B-vitamins, and trace minerals.',
        'Belly fat does not accumulate because you ate a roti at lunch. It accumulates when three rotis sit on a plate next to a tiny spoonful of potato sabzi and zero protein—causing a rapid glucose spike followed by an afternoon insulin crash that signals your midsection to store energy as visceral fat.',
        'When you apply the "Golden Thali Geometry"—pairing 1 to 2 rotis with a generous katori of fiber-rich seasonal vegetable and a dedicated Indian protein source (thick dal, paneer bhurji, curd, chana, or eggs) eaten in the right sequence—your blood sugar curve flattens by up to 42%. You leave the table deeply satisfied, and your body shifts from fat storage to steady fat mobilization.'
      ],
      pullQuote:
        '“You do not lose belly fat by fighting your kitchen. You lose it when your everyday roti, dal, and sabzi start working for your metabolism instead of against it.”',
      keyTakeawayTitle: 'The 3-Step Roti Reset Rule (Starts Day 1):',
      keyTakeaways: [
        'Sequence Matters: Begin lunch and dinner with 5 bites of cucumber-carrot salad or fiber-rich sabzi before your first bite of roti.',
        'Upgrade the Flour Naturally: Mix 1 tablespoon of roasted chana sattu or flaxseed powder into your regular wheat atta dough to boost protein and slow digestion.',
        'Keep Dinner Light, Not Empty: Enjoy 1 warm phulka with moong dal or lauki-paneer 2.5 hours before sleep—no starving required.'
      ]
    },
    contentHi: {
      dropCapParagraph:
        'हर सोमवार की सुबह हज़ारों भारतीय घरों की रसोई में एक ही संकल्प लिया जाता है— "आज से मैं रोटी बिल्कुल छोड़ दूँगी।" चार दिनों तक आप फीके सूप, उबली सब्ज़ियों या महँगे ओट्स के सहारे रहती हैं, और शाम 4:30 बजते ही थकान व तेज़ भूख हावी होने लगती है। शुक्रवार की रात तक संयम टूट जाता है, आप तीन गरमा-गरम रोटियाँ खा लेती हैं, और फिर अपराधबोध में सोचती हैं कि आपकी इच्छाशक्ति कमज़ोर है।',
      bodyParagraphs: [
        'सच यह है कि आपकी इच्छाशक्ति कभी कमज़ोर नहीं थी। गलती उस उधार लिए गए डाइट नियम में थी जो भारतीय खान-पान की संरचना को समझता ही नहीं। घर के गेहूँ के आटे से बनी ताज़ी फुल्का कोई जंक फ़ूड नहीं है—यह फाइबर, विटामिन-बी और आवश्यक खनिजों से भरपूर ऊर्जा का स्रोत है।',
        'बेली फैट इसलिए नहीं बढ़ता कि आपने दोपहर में रोटी खाई। यह तब बढ़ता है जब थाली में तीन रोटियों के साथ सिर्फ़ थोड़ी-सी आलू की सब्ज़ी हो और प्रोटीन बिल्कुल न हो। इससे ब्लड शुगर तेज़ी से बढ़ता है और इंसुलिन आपके शरीर को पेट के हिस्से में चर्बी जमा करने का संकेत देता है।',
        'जब आप इस पुस्तक के "गोल्डन थाली नियम" को अपनाती हैं—यानी 1 से 2 रोटी के साथ भरपूर मौसमी हरी सब्ज़ी और एक कटोरी गाढ़ी दाल, पनीर, दही या चना सही क्रम में खाती हैं—तो आपका पेट लंबे समय तक भरा रहता है और शरीर बिना कमज़ोरी के जमा फैट को बर्न करना शुरू कर देता है।'
      ],
      pullQuote:
        '“अपनी रसोई से लड़कर कभी स्थायी वज़न कम नहीं होता। जब आपकी रोज़ की रोटी, दाल और सब्ज़ी सही अनुपात में आपकी थाली में आती हैं, तब बेली फैट अपने आप घटने लगता है।”',
      keyTakeawayTitle: 'रोटी रीसेट के 3 आसान नियम (पहले दिन से लागू):',
      keyTakeaways: [
        'खाने का सही क्रम: रोटी का पहला निवाला लेने से पहले खीरा-गाजर सलाद या हरी सब्ज़ी के 4–5 निवाले खाएँ।',
        'आटे को बनाएँ प्रोटीन-युक्त: अपने रोज़ के गेहूँ के आटे में एक चम्मच भुना चना सत्तू या अलसी पाउडर मिलाएँ।',
        'रात का खाना हल्का रखें, भूखे न सोएँ: सोने से 2.5 घंटे पहले 1 गरम रोटी और मूंग दाल या लौकी-पनीर का आनंद लें।'
      ]
    }
  },
  {
    id: 'chapter-4',
    chapterNumber: 'Chapter 04 · अध्याय 04',
    readingTime: '2.5 min read',
    titleEn: 'The 4 PM Chai-Time Trap & How to Break It',
    titleHi: 'शाम 4 बजे की चाय और क्रेविंग का रहस्य',
    kickerEn: 'From Part II: Mastering Hunger & Hormones',
    kickerHi: 'भाग II से: भूख और क्रेविंग पर नियंत्रण',
    contentEn: {
      dropCapParagraph:
        'Ask any Indian woman when her healthy eating plan unravels, and nine out of ten will point to the exact same window: between 4:00 PM and 6:30 PM. Lunch was at 1:30 PM, the household or office tasks are peaking, and a steaming cup of masala chai calls out for two Marie biscuits or a handful of bhujia.',
      bodyParagraphs: [
        'Two biscuits look harmless on paper, yet refined maida, hydrogenated palm oil, and sugar sitting in hot tea create the sharpest insulin surge of your entire day. Worse, because they contain zero protein or fiber, you feel hungry again just forty minutes later.',
        'In this chapter, we do not ask you to give up your beloved evening chai. Instead, we pair your tea with a "Protein-First Buffer" 10 minutes prior—turning an afternoon fat-storage trigger into a steady metabolic bridge until dinner.'
      ],
      pullQuote:
        '“Never drink evening tea on an empty stomach. Pair it with 7 grams of crunchy roasted protein, and evening cravings vanish within 72 hours.”',
      keyTakeawayTitle: '3 Instant Indian Chai-Time Upgrades:',
      keyTakeaways: [
        '1 Katori Ghee-Roasted Makhana with black pepper, turmeric, and rock salt.',
        '1 Fistful of Roasted Kala Chana tossed with chopped onion, coriander, lemon juice, and chaat masala.',
        'Spiced Chaas (Buttermilk) with roasted jeera & mint on warm afternoons before tea.'
      ]
    },
    contentHi: {
      dropCapParagraph:
        'यदि किसी भी भारतीय महिला से पूछा जाए कि उनका डाइट प्लान दिन के किस समय सबसे ज़्यादा बिगड़ता है, तो दस में से नौ का जवाब एक ही होगा—शाम 4:00 बजे से 6:30 बजे के बीच। दोपहर का खाना 1:30 बजे हुआ था, काम की थकान चरम पर होती है, और एक कप गरम चाय के साथ दो बिस्किट या नमकीन अपने आप हाथ में आ जाते हैं।',
      bodyParagraphs: [
        'देखने में दो बिस्किट बहुत छोटे लगते हैं, लेकिन मैदा, चीनी और रिफाइंड तेल जब खाली पेट चाय के साथ जाते हैं, तो वे पूरे दिन का सबसे तेज़ इंसुलिन स्पाइक पैदा करते हैं। यही छोटी-सी आदत कमर के आसपास की चर्बी (Belly Fat) को कम होने से रोकती है।',
        'इस अध्याय में हम आपसे आपकी शाम की प्यारी चाय छोड़ने को नहीं कहते। इसके बजाय, हम चाय से 10 मिनट पहले एक "प्रोटीन-फाइबर बफ़र" जोड़ते हैं, जिससे शाम की सुस्ती और मीठा खाने की तलब दोनों जड़ से खत्म हो जाती हैं।'
      ],
      pullQuote:
        '“शाम की चाय कभी खाली पेट न पिएँ। बिस्किट की जगह भुना मखाना या चना अपनाएँ—सिर्फ़ 3 दिनों में शाम की क्रेविंग शांत हो जाएगी।”',
      keyTakeawayTitle: 'शाम की चाय के लिए 3 स्वादिष्ट भारतीय विकल्प:',
      keyTakeaways: [
        '1 कटोरी हल्के घी और काली मिर्च-सेंधा नमक में भुने कुरकुरे मखाने।',
        '1 मुट्ठी भुना काला चना—बारीक प्याज़, हरा धनिया, नींबू और चाट मसाला के साथ।',
        'भुना जीरा और पुदीना डाली हुई ताज़ी छाछ या सत्तू ड्रिंक।'
      ]
    }
  },
  {
    id: 'day-7-plan',
    chapterNumber: 'Blueprint · दिनचर्या अंश',
    readingTime: '2 min read',
    titleEn: 'Inside Day 7: A Complete Home-Food Day',
    titleHi: 'दिन 7 की झलक: पूरे दिन का व्यावहारिक डाइट चार्ट',
    kickerEn: 'From Part III: The 30-Day Indian Meal Matrix',
    kickerHi: 'भाग III से: 30-दिवसीय भारतीय मील प्लान',
    contentEn: {
      dropCapParagraph:
        'What does a real fat-loss day look like when you don’t have time to cook separate meals from the rest of your family? Here is the exact Day 7 schedule from the eBook—using ingredients already sitting on your kitchen shelf right now.',
      bodyParagraphs: [
        'Morning (7:30 AM): 1 glass warm water with 1 tsp soaked methi (fenugreek) seeds + 5 soaked almonds. Breakfast (8:45 AM): 2 Moong Dal Chillas (or Besan-Vegetable Chillas) stuffed with grated paneer and coriander, served with homemade mint chutney.',
        'Lunch (1:30 PM): 1 plate fresh cucumber-tomato kachumber salad (eat first) + 1 to 2 whole-wheat phulkas + 1 bowl palak/seasonal sabzi + 1 thick bowl arhar/toor dal + 1 small katori homemade curd.',
        'Evening (4:45 PM): 1 cup less-sugar adrak chai paired with 1 bowl roasted makhana & peanuts. Dinner (7:45 PM): 1 warm multigrain/wheat roti + 1 bowl lauki-chana dal or grilled paneer-bell pepper sabzi + 15-minute relaxed family walk.'
      ],
      pullQuote:
        '“Notice what is missing: no starvation, no bland boiled cabbage, and zero separate grocery bills. Just familiar Indian flavours arranged with metabolic precision.”',
      keyTakeawayTitle: 'Why Day 7 Works So Effectively:',
      keyTakeaways: [
        'Delivers 58g+ of natural vegetarian protein without artificial shakes.',
        'Keeps fiber above 28g to naturally flatten waist bloating within the first 7 days.',
        'Uses the exact same dal and sabzi cooked for the entire family.'
      ]
    },
    contentHi: {
      dropCapParagraph:
        'जब आपके पास परिवार से अलग खाना बनाने का समय न हो, तब बेली फैट कम करने वाला एक आदर्श दिन कैसा दिखता है? यहाँ पुस्तक के 7वें दिन (Day 7) का पूरा चार्ट दिया गया है—जिसमें हर चीज़ आपकी अपनी रसोई से है।',
      bodyParagraphs: [
        'सुबह (7:30 AM): 1 गिलास गुनगुना मेथी दाना पानी + 5 भीगे बादाम। नाश्ता (8:45 AM): पनीर और बारीक सब्ज़ियों से भरे 2 मूंग दाल चीला (या बेसन चीला) हरी धनिये-पुदीने की चटनी के साथ।',
        'दोपहर का खाना (1:30 PM): 1 प्लेट खीरा-टमाटर सलाद (सबसे पहले खाएँ) + 1 से 2 गेहूँ की ताज़ी रोटी + 1 कटोरी मौसमी हरी सब्ज़ी + 1 कटोरी गाढ़ी दाल + 1 छोटी कटोरी घर का दही।',
        'शाम (4:45 PM): 1 कप कम चीनी वाली अदरक चाय + 1 कटोरी भुना मखाना और मूंगफली। रात का खाना (7:45 PM): 1 गरम रोटी + 1 कटोरी लौकी-चना दाल या पनीर-शिमला मिर्च सब्ज़ी + खाने के बाद 15 मिनट की सहज सैर।'
      ],
      pullQuote:
        '“न भूखे रहना, न उबला बेस्वाद खाना, और न ही अलग से महँगी खरीदारी—सिर्फ़ घर के खाने का सही वैज्ञानिक संतुलन।”',
      keyTakeawayTitle: 'यह दिनचर्या क्यों कारगर है:',
      keyTakeaways: [
        'बिना किसी सप्लीमेंट के 58 ग्राम से अधिक प्राकृतिक शाकाहारी प्रोटीन मिलता है।',
        'भरपूर फाइबर के कारण पहले ही सप्ताह में पेट का भारीपन और ब्लोटिंग कम होती है।',
        'पूरे परिवार के लिए बनने वाली दाल-सब्ज़ी और रोटी का ही उपयोग होता है।'
      ]
    }
  }
];

export const INITIAL_TESTIMONIALS: ReaderTestimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma (प्रिया शर्मा)',
    roleAndCity: 'School Teacher & Mother of Two · Jaipur',
    editionRead: 'Hindi Edition',
    outcomeMetric: 'Lost 3.4 inches off waist in 30 days',
    quote:
      'मैंने पहले दो बार डाइट शुरू की थी पर रोटी छोड़ने की वजह से मुझे चक्कर और चिड़चिड़ापन होने लगता था। RwH Redwood House की इस हिन्दी ई-बुक ने मेरी थाली का संतुलन बदल दिया। मैंने रोज़ दोपहर और रात को अपनी रोटी खाई, बस सलाद और दाल-पनीर का अनुपात इस गाइड के अनुसार रखा। 30 दिनों में मेरी कमर से 3.4 इंच कम हुए और पुरानी कुर्तियाँ फिर से फिट आने लगीं!',
    photoUrl: '/src/assets/images/reader_priya_sharma_1791299984525.jpg',
    verifiedVia: 'Purchased Hindi PDF via Telegram @RedwoodHouse'
  },
  {
    id: 'test-2',
    name: 'Ananya Verma',
    roleAndCity: 'Senior Software Analyst · Bengaluru',
    editionRead: 'English Edition',
    outcomeMetric: '4.2 kg weight loss & zero evening sugar cravings',
    quote:
      'Sitting 9 hours at a desk gave me stubborn lower belly fat that wouldn’t budge. What makes this eBook so refreshing is how practical it is for an Indian kitchen. The 4 PM chai-time protein swaps and the 20-minute home workouts fit right into my WFH routine without a gym. I lost 4.2 kg in 30 days while eating hot phulkas every single day.',
    photoUrl: '/src/assets/images/reader_ananya_verma_1791299999422.jpg',
    verifiedVia: 'Purchased English PDF via Telegram @RedwoodHouse'
  },
  {
    id: 'test-3',
    name: 'Meera Joshi',
    roleAndCity: 'Homemaker & Entrepreneur · Pune',
    editionRead: 'Both Editions',
    outcomeMetric: 'Down 3 inches · Entire family eats healthier',
    quote:
      'I ordered the Bilingual Combo on Telegram so I could read the English edition on my iPad and share the Hindi edition with my mother-in-law. Within 2 minutes of payment on t.me/RedwoodHouse, we received both PDFs and printable trackers. My bloating vanished in Week 1, and I dropped 3 inches around my midsection without cooking separate diet meals!',
    photoUrl: '/src/assets/images/reader_meera_joshi_1791300014974.jpg',
    verifiedVia: 'Purchased Dual Combo via Telegram @RedwoodHouse'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'content',
    categoryLabel: 'Content & Diet Plan',
    question: 'Do I really not have to give up roti or cook separate meals from my family?',
    questionHi: 'क्या मुझे वाकई रोटी नहीं छोड़नी पड़ेगी और परिवार से अलग खाना नहीं बनाना होगा?',
    answer:
      'Yes, 100%. The entire foundation of this book is built around everyday Indian household food—whole-wheat phulkas/rotis, dal, seasonal sabzi, curd, chana, paneer, and rice. Instead of banning roti, the book teaches you exact portion pairing, meal sequencing, and simple atta upgrades so you burn belly fat eating the same dishes cooked for your family.'
  },
  {
    id: 'faq-2',
    category: 'formats',
    categoryLabel: 'Formats & Languages',
    question: 'Is the eBook available in both Hindi and English? Are the contents identical?',
    questionHi: 'क्या यह ई-बुक हिन्दी और अंग्रेज़ी दोनों में उपलब्ध है?',
    answer:
      'Yes! RwH Redwood House publishes the complete book in both Hindi ("30 दिनों में बेली फैट कम करें — बिना रोटी छोड़े") and English ("Lose Belly Fat in 30 Days — Without Giving Up Roti"). Both editions contain the complete 30-day Indian meal plan, home workout guides, recipes, craving control methods, and printable progress trackers. You can purchase either language for ₹499 or get the Dual-Language Combo for ₹699.'
  },
  {
    id: 'faq-3',
    category: 'purchase',
    categoryLabel: 'Purchase & Delivery',
    question: 'How does the purchasing process work on Telegram (t.me/RedwoodHouse)?',
    questionHi: 'टेलीग्राम (t.me/RedwoodHouse) के माध्यम से खरीदने की प्रक्रिया क्या है?',
    answer:
      'We use direct reader-to-publisher fulfillment on Telegram (t.me/RedwoodHouse) for instant, hassle-free delivery and personal communication. Simply click any "Buy on Telegram" button on this website, let us know whether you want the Hindi Edition, English Edition, or Combo, complete your ₹499 payment via UPI (GPay, PhonePe, Paytm, or QR), and receive your high-resolution PDF eBook directly in your Telegram chat within minutes.'
  },
  {
    id: 'faq-4',
    category: 'formats',
    categoryLabel: 'Formats & Languages',
    question: 'What format is the eBook in, and which devices can I read it on?',
    questionHi: 'ई-बुक किस फ़ॉर्मेट में मिलेगी और मैं इसे किस डिवाइस पर पढ़ सकती हूँ?',
    answer:
      'You receive an instant, DRM-free High-Resolution PDF file formatted specifically for comfortable reading on any Android phone, iPhone, iPad, tablet, Kindle, or laptop. In addition, the 30-Day Progress Trackers, Weekly Grocery Lists, and Daily Habit Checklists are formatted so you can either fill them digitally or print them out for your kitchen or wardrobe.'
  },
  {
    id: 'faq-5',
    category: 'content',
    categoryLabel: 'Content & Diet Plan',
    question: 'Do the workouts require a gym membership, dumbbells, or high-impact jumping?',
    questionHi: 'क्या एक्सरसाइज़ के लिए जिम, डम्बल या कठिन उछल-कूद की ज़रूरत है?',
    answer:
      'Not at all. Every workout inside the guide is a 15-to-20-minute home routine requiring zero gym equipment. They are specifically designed for Indian women—including beginners, busy mothers, and women with sensitive knees—focusing on low-impact core engagement, posture correction, and metabolic movement.'
  },
  {
    id: 'faq-6',
    category: 'content',
    categoryLabel: 'Content & Diet Plan',
    question: 'Is this plan suitable for both vegetarian and non-vegetarian Indian women?',
    questionHi: 'क्या यह प्लान शाकाहारी और मांसाहारी दोनों महिलाओं के लिए उपयुक्त है?',
    answer:
      'Yes! The primary 30-day meal plan is 100% Indian vegetarian friendly (utilizing everyday dals, paneer, curd, roasted chana, sattu, soya, and sprouts), and it also includes optional eggetarian and lean non-vegetarian swap tables for readers who enjoy eggs, chicken, or fish.'
  },
  {
    id: 'faq-7',
    category: 'purchase',
    categoryLabel: 'Purchase & Delivery',
    question: 'Can I communicate directly with RwH Redwood House if I have questions after buying?',
    questionHi: 'क्या किताब खरीदने के बाद मैं सीधे प्रकाशक (RwH Redwood House) से सवाल पूछ सकती हूँ?',
    answer:
      'Absolutely—that is the biggest benefit of purchasing directly through our official Telegram channel (t.me/RedwoodHouse). Unlike anonymous e-commerce checkouts, our editorial and wellness support desk responds directly to readers on Telegram for edition support, tracker tips, and reading guidance.'
  }
];
