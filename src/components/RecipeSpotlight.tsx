import React, { useState } from 'react';
import {
  Utensils,
  Check,
  ArrowUpRight,
  Languages,
  Flame,
  Clock,
  Users
} from 'lucide-react';
import { TELEGRAM_URL, PUBLISHER_NAME, RECIPE_SPOTLIGHT_IMAGE_URL } from '../data/ebookData';

interface IngredientItem {
  id: string;
  baseAmount: number;
  unitEn: string;
  unitHi: string;
  nameEn: string;
  nameHi: string;
  noteEn: string;
  noteHi: string;
}

const RECIPE_INGREDIENTS: IngredientItem[] = [
  {
    id: 'ing-1',
    baseAmount: 1,
    unitEn: 'katori (60g)',
    unitHi: 'कटोरी (60 ग्राम)',
    nameEn: 'Whole-wheat chakki atta',
    nameHi: 'गेहूँ का चोकर-युक्त आटा',
    noteEn: 'Keeps your daily roti intact with natural complex fiber',
    noteHi: 'बिना मैदा, प्राकृतिक फाइबर से भरपूर'
  },
  {
    id: 'ing-2',
    baseAmount: 2.5,
    unitEn: 'tbsp (25g)',
    unitHi: 'बड़े चम्मच (25 ग्राम)',
    nameEn: 'Roasted chana sattu (or besan)',
    nameHi: 'भुना चना सत्तू (या बेसन)',
    noteEn: 'Boosts plant protein & flattens post-meal insulin spike',
    noteHi: 'प्रोटीन बढ़ाता है और ब्लड शुगर को नियंत्रित रखता है'
  },
  {
    id: 'ing-3',
    baseAmount: 1,
    unitEn: 'cup',
    unitHi: 'कप',
    nameEn: 'Finely chopped fresh palak (spinach) & coriander',
    nameHi: 'बारीक कटा ताज़ा पालक और हरा धनिया',
    noteEn: 'Adds iron, magnesium, and volume without extra calories',
    noteHi: 'आयरन और एंटीऑक्सीडेंट से भरपूर'
  },
  {
    id: 'ing-4',
    baseAmount: 0.5,
    unitEn: 'tsp',
    unitHi: 'छोटा चम्मच',
    nameEn: 'Carom seeds (ajwain), roasted jeera & grated ginger',
    nameHi: 'अजवाइन, भुना जीरा पाउडर और कद्दूकस अदरक',
    noteEn: 'Prevents bloating and activates digestive enzymes',
    noteHi: 'पाचन तेज़ करे और पेट फूलने (Bloating) से बचाए'
  },
  {
    id: 'ing-5',
    baseAmount: 1,
    unitEn: 'small bowl (100g)',
    unitHi: 'छोटी कटोरी (100 ग्राम)',
    nameEn: 'Homemade curd with grated cucumber & mint',
    nameHi: 'खीरा और पुदीना मिला घर का ताज़ा दही (रायता)',
    noteEn: 'Probiotic pairing for gut health and lasting satiety',
    noteHi: 'गट हेल्थ और लंबे समय तक पेट भरा रखने के लिए'
  },
  {
    id: 'ing-6',
    baseAmount: 1,
    unitEn: 'tsp',
    unitHi: 'छोटा चम्मच',
    nameEn: 'Pure cow ghee for brushing on hot phulkas',
    nameHi: 'गरम रोटी पर लगाने के लिए शुद्ध देसी घी',
    noteEn: 'Lowers glycemic index and supports fat-soluble vitamins',
    noteHi: 'रोटी का ग्लाइसेमिक इंडेक्स कम करता है'
  }
];

const BENEFITS_EN = [
  {
    title: '42% Lower Glucose Spike Than Plain Wheat Roti',
    detail:
      'Blending roasted sattu and spinach directly into your wheat dough slows down carbohydrate absorption, stopping afternoon belly-fat storage.'
  },
  {
    title: '18.4g Natural Vegetarian Protein in One Meal',
    detail:
      'Delivers complete amino acids from the classic Indian grain-plus-legume (wheat + chana + curd) combination—keeping you full until evening.'
  },
  {
    title: 'Zero Bloating & Morning Waist Lightness',
    detail:
      'Ajwain, ginger, and probiotic cucumber raita soothe gut inflammation and eliminate water retention around the lower abdomen.'
  },
  {
    title: 'Loved by the Entire Family (No Separate Cooking)',
    detail:
      'Soft, flavorful, and aromatic—your spouse, children, and parents can enjoy the exact same rotis straight off the tawa.'
  }
];

const BENEFITS_HI = [
  {
    title: 'साधारण रोटी की तुलना में 42% कम शुगर स्पाइक',
    detail:
      'गेहूँ के आटे में भुना सत्तू और पालक मिलाने से कार्बोहाइड्रेट धीरे पचता है, जिससे कमर और पेट पर चर्बी जमा नहीं होती।'
  },
  {
    title: 'एक ही थाली से 18.4 ग्राम प्राकृतिक शाकाहारी प्रोटीन',
    detail:
      'गेहूँ + चना सत्तू + दही का पारंपरिक भारतीय मेल शरीर को संपूर्ण प्रोटीन देता है और शाम की अनावश्यक भूख को रोकता है।'
  },
  {
    title: 'पेट फूलना (Bloating) और भारीपन तुरंत कम करे',
    detail:
      'अजवाइन, अदरक और खीरे का प्रोबायोटिक रायता पाचन को हल्का रखते हैं, जिससे सुबह पेट सपाट और ऊर्जावान महसूस होता है।'
  },
  {
    title: 'पूरे परिवार के लिए स्वादिष्ट (अलग खाना बनाने की ज़रूरत नहीं)',
    detail:
      'ये रोटियाँ इतनी मुलायम और स्वादिष्ट बनती हैं कि घर के सभी सदस्य इन्हें चाव से खा सकते हैं।'
  }
];

const STEPS_EN = [
  'In a mixing bowl, combine whole-wheat atta, roasted chana sattu, finely chopped spinach, ajwain, grated ginger, and rock salt. Knead into a soft, pliable dough using warm water and rest for 10 minutes.',
  'Divide into 2 medium pedas, roll gently on your chakla-belan, and cook on a hot iron tawa until golden brown spots appear on both sides. Brush lightly with 1/2 tsp pure ghee.',
  'Serve hot alongside chilled cucumber-mint curd raita. Eat 4–5 spoons of cucumber raita first before your first bite of roti for optimal metabolic response.'
];

const STEPS_HI = [
  'एक परात में गेहूँ का आटा, भुना चना सत्तू, बारीक कटा पालक, अजवाइन, अदरक और सेंधा नमक मिलाएँ। गुनगुने पानी से नरम आटा गूँथ लें और 10 मिनट के लिए ढककर रखें।',
  'आटे की 2 मध्यम लोइयाँ बनाएँ, हल्के हाथ से बेलें और गरम लोहे के तवे पर दोनों तरफ़ से सुनहरा होने तक सेकें। ऊपर से थोड़ा शुद्ध देसी घी लगाएँ।',
  'ठंडे खीरा-पुदीना दही रायते के साथ गरमा-गरम परोसें। रोटी का पहला निवाला लेने से पहले 3–4 चम्मच रायता या सलाद खाएँ।'
];

export const RecipeSpotlight: React.FC = () => {
  const [languageMode, setLanguageMode] = useState<'english' | 'hindi' | 'both'>('both');
  const [servings, setServings] = useState<1 | 2 | 4>(1);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleIngredient = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatAmount = (amount: number) => {
    const scaled = amount * servings;
    return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1);
  };

  return (
    <section
      id="recipe-spotlight"
      className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#FAF8F5]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Featured Excerpt Aesthetic) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
              <span>Recipe Spotlight</span>
              <span aria-hidden="true">·</span>
              <span>पुस्तक से विशेष भारतीय रेसिपी</span>
              <span aria-hidden="true">·</span>
              <span>Recipe #07 of 35</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
              A Taste Inside the 30-Day Indian Kitchen Plan
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#18181B]/75">
              See how the eBook upgrades your everyday home-cooked roti into a high-protein, belly-fat-burning meal using simple ingredients already in your kitchen.
            </p>
          </div>

          {/* Interactive Controls: Servings Scaler & Language Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Servings Multiplier */}
            <div
              role="group"
              aria-label="Recipe Servings"
              className="flex items-center gap-1 p-1 bg-[#F2EFE9] border border-[#18181B]/10 rounded-lg"
            >
              <span className="px-2.5 text-xs font-medium text-[#18181B]/70 inline-flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#9E2A2B]" />
                <span>Servings:</span>
              </span>
              {([1, 2, 4] as const).map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setServings(count)}
                  className={`px-2.5 py-1 text-xs font-mono-tabular font-semibold rounded-md transition-colors whitespace-nowrap ${
                    servings === count
                      ? 'bg-[#FAF8F5] text-[#9E2A2B] shadow-sm border border-[#18181B]/10'
                      : 'text-[#18181B]/70 hover:text-[#18181B]'
                  }`}
                >
                  {count}x
                </button>
              ))}
            </div>

            {/* Bilingual Mode Switcher */}
            <div
              role="group"
              aria-label="Recipe Language Mode"
              className="flex items-center gap-1 p-1 bg-[#F2EFE9] border border-[#18181B]/10 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setLanguageMode('english')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  languageMode === 'english'
                    ? 'bg-[#18181B] text-[#FAF8F5]'
                    : 'text-[#18181B]/70 hover:text-[#18181B]'
                }`}
              >
                English Only
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode('hindi')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  languageMode === 'hindi'
                    ? 'bg-[#9E2A2B] text-[#FAF8F5]'
                    : 'text-[#18181B]/70 hover:text-[#18181B]'
                }`}
              >
                केवल हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode('both')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                  languageMode === 'both'
                    ? 'bg-[#1C3829] text-[#FAF8F5]'
                    : 'text-[#18181B]/70 hover:text-[#18181B]'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>Side-by-Side (EN + हिं)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Recipe Card Frame (Matching Featured Excerpt Card) */}
        <div className="rounded-2xl border border-[#18181B]/12 bg-[#FAF8F5] text-[#18181B] shadow-[0_12px_32px_-12px_rgba(24,24,27,0.08)] overflow-hidden">
          {/* Top Book Running Header */}
          <div className="px-6 sm:px-10 py-4 border-b border-[#18181B]/10 bg-[#F2EFE9]/60 flex flex-wrap items-center justify-between gap-3 text-xs text-[#18181B]/65">
            <div className="flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5 text-[#9E2A2B]" />
              <span className="font-semibold text-[#18181B]">
                {PUBLISHER_NAME} Recipe Card
              </span>
              <span aria-hidden="true">·</span>
              <span>Section IV: Roti Upgrades &amp; Lunch Bowls</span>
            </div>

            {/* Clean Unboxed Nutritional & Prep Metadata */}
            <div className="flex flex-wrap items-center gap-2 font-mono-tabular text-[#18181B]/80">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#1C3829]" />
                <span>15 Mins Prep</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#9E2A2B]" />
                <span>295 kcal / serving</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#1C3829]">18.4g Protein</span>
              <span aria-hidden="true">·</span>
              <span>9.2g Fiber</span>
            </div>
          </div>

          {/* Recipe Title & Photography Banner */}
          <div className="px-6 sm:px-10 lg:px-12 py-8 border-b border-[#18181B]/10 bg-gradient-to-r from-[#FAF8F5] via-[#F2EFE9]/40 to-[#FAF8F5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold text-[#9E2A2B] mb-2">
                  Signature Lunch &amp; Dinner Staple · दोपहर या रात के खाने के लिए
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18181B] tracking-tight">
                  High-Protein Sattu-Palak Roti with Cucumber Mint Raita
                </h3>
                <p className="text-lg sm:text-xl font-display font-semibold text-[#1C3829] mt-1.5">
                  प्रोटीन-युक्त सत्तू-पालक रोटी और ठंडा खीरा-पुदीना रायता
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#18181B]/75">
                  Soft, golden whole-wheat rotis enriched with roasted chana sattu and fresh spinach leaves, served hot off the tawa with probiotic cucumber-mint curd raita.
                </p>
                <div className="mt-4 inline-block text-left px-4 py-3 rounded-xl bg-[#F2EFE9] border border-[#18181B]/10">
                  <div className="text-[11px] text-[#9E2A2B] font-semibold">
                    Why Readers Love This Recipe · पाठकों की पसंद
                  </div>
                  <div className="text-xs font-medium text-[#18181B] mt-0.5">
                    Tastes like classic home parathas/phulkas while cutting net glycemic load by 42%.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#18181B]/12 aspect-[4/3] bg-[#E9E0D2] shadow-sm">
                  <img
                    src={RECIPE_SPOTLIGHT_IMAGE_URL}
                    alt="High-Protein Sattu-Palak Roti served with chilled Cucumber Mint Raita"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-4">
                    <div className="text-xs text-[#FAF8F5] flex items-center justify-between w-full">
                      <span className="font-semibold">2 Rotis + 1 Bowl Raita</span>
                      <span className="font-mono-tabular text-[#A7D7A9] font-semibold">
                        18.4g Protein · 295 kcal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Recipe Spread Grid */}
          <div
            className={`grid grid-cols-1 ${
              languageMode === 'both'
                ? 'lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x'
                : 'max-w-3xl mx-auto'
            } divide-[#18181B]/10`}
          >
            {/* ENGLISH RECIPE COLUMN */}
            {(languageMode === 'english' || languageMode === 'both') && (
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-display font-bold text-[#18181B]">
                      01. Ingredients ({servings} {servings === 1 ? 'Serving' : 'Servings'} — {servings * 2} Rotis)
                    </h4>
                    <span className="text-xs text-[#18181B]/55">Click to check off</span>
                  </div>

                  {/* Interactive Ingredients Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {RECIPE_INGREDIENTS.map((ing) => {
                      const isChecked = !!checkedIds[ing.id];
                      return (
                        <li
                          key={ing.id}
                          onClick={() => toggleIngredient(ing.id)}
                          role="checkbox"
                          aria-checked={isChecked}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleIngredient(ing.id);
                            }
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${
                            isChecked
                              ? 'bg-[#F2EFE9]/40 border-[#18181B]/10 opacity-65'
                              : 'bg-[#F2EFE9]/70 border-[#18181B]/10 hover:border-[#9E2A2B]/40'
                          }`}
                        >
                          <span
                            className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#1C3829] border-[#1C3829] text-white'
                                : 'border-[#18181B]/30 bg-[#FAF8F5]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <div className="text-sm flex-1">
                            <div className={isChecked ? 'line-through text-[#18181B]/60' : 'text-[#18181B]'}>
                              <span className="font-mono-tabular font-semibold text-[#9E2A2B]">
                                {formatAmount(ing.baseAmount)} {ing.unitEn}
                              </span>{' '}
                              <span className="font-semibold">{ing.nameEn}</span>
                            </div>
                            <div className="text-xs text-[#18181B]/65 mt-0.5">{ing.noteEn}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Quick Preparation Steps */}
                  <h4 className="text-lg font-display font-bold text-[#18181B] mb-3">
                    02. Simple Kitchen Method
                  </h4>
                  <ol className="space-y-3 mb-8 text-[14.5px] leading-relaxed text-[#18181B]/80">
                    {STEPS_EN.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-mono-tabular font-bold text-xs text-[#9E2A2B] mt-1 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Belly-Fat & Metabolic Benefits Box */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#F2EFE9]/80 border border-[#18181B]/10">
                  <div className="text-sm font-semibold text-[#9E2A2B] mb-3">
                    03. Why This Recipe Melts Belly Fat (Metabolic Benefits):
                  </div>
                  <ul className="space-y-3 text-sm">
                    {BENEFITS_EN.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1C3829] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#18181B]">{item.title}:</span>{' '}
                          <span className="text-[#18181B]/80">{item.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* HINDI RECIPE COLUMN */}
            {(languageMode === 'hindi' || languageMode === 'both') && (
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-display font-bold text-[#18181B]">
                      01. आवश्यक सामग्री ({servings} सदस्य के लिए — {servings * 2} रोटियाँ)
                    </h4>
                    <span className="text-xs text-[#18181B]/55">टिक करने के लिए क्लिक करें</span>
                  </div>

                  {/* Interactive Ingredients Checklist in Hindi */}
                  <ul className="space-y-2.5 mb-8">
                    {RECIPE_INGREDIENTS.map((ing) => {
                      const isChecked = !!checkedIds[ing.id];
                      return (
                        <li
                          key={ing.id}
                          onClick={() => toggleIngredient(ing.id)}
                          role="checkbox"
                          aria-checked={isChecked}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleIngredient(ing.id);
                            }
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${
                            isChecked
                              ? 'bg-[#F2EFE9]/40 border-[#18181B]/10 opacity-65'
                              : 'bg-[#F2EFE9]/70 border-[#18181B]/10 hover:border-[#9E2A2B]/40'
                          }`}
                        >
                          <span
                            className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#1C3829] border-[#1C3829] text-white'
                                : 'border-[#18181B]/30 bg-[#FAF8F5]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <div className="text-sm flex-1">
                            <div className={isChecked ? 'line-through text-[#18181B]/60' : 'text-[#18181B]'}>
                              <span className="font-mono-tabular font-semibold text-[#9E2A2B]">
                                {formatAmount(ing.baseAmount)} {ing.unitHi}
                              </span>{' '}
                              <span className="font-semibold">{ing.nameHi}</span>
                            </div>
                            <div className="text-xs text-[#18181B]/65 mt-0.5">{ing.noteHi}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Quick Preparation Steps in Hindi */}
                  <h4 className="text-lg font-display font-bold text-[#18181B] mb-3">
                    02. बनाने की आसान विधि
                  </h4>
                  <ol className="space-y-3 mb-8 text-[14.5px] leading-relaxed text-[#18181B]/80">
                    {STEPS_HI.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-mono-tabular font-bold text-xs text-[#9E2A2B] mt-1 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Belly-Fat & Metabolic Benefits Box in Hindi */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#F2EFE9]/80 border border-[#18181B]/10">
                  <div className="text-sm font-semibold text-[#9E2A2B] mb-3">
                    03. बेली फैट कम करने में इसके मुख्य फायदे:
                  </div>
                  <ul className="space-y-3 text-sm">
                    {BENEFITS_HI.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1C3829] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#18181B]">{item.title}:</span>{' '}
                          <span className="text-[#18181B]/80">{item.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Recipe Card Footer CTA (Matching Featured Excerpt Footer) */}
          <div className="px-6 sm:px-10 py-5 border-t border-[#18181B]/10 bg-[#F2EFE9]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <span className="font-semibold">Want all 35+ quick Indian fat-loss recipes?</span>{' '}
              <span className="text-[#18181B]/75">
                Included inside both the Hindi &amp; English editions along with your 30-day meal chart.
              </span>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C3829] hover:bg-[#14291E] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <span>Unlock All 35+ Recipes on Telegram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
