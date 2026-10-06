import React, { useState, useEffect } from 'react';
import {
  Send,
  Check,
  Copy,
  BookOpen,
  Upload,
  RotateCcw,
  ArrowUpRight,
  FileText,
  Smartphone,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import {
  BOOK_EDITIONS,
  BOOK_MERITS,
  TELEGRAM_URL,
  TELEGRAM_HANDLE,
  PUBLISHER_NAME,
  ATELIER_PHOTO_URL
} from './data/ebookData';
import { BookCover3D } from './components/BookCover3D';
import { FeaturedExcerpt } from './components/FeaturedExcerpt';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';

const CUSTOM_COVER_EN_KEY = 'rwh_custom_cover_en_v1';
const CUSTOM_COVER_HI_KEY = 'rwh_custom_cover_hi_v1';

const WEEKLY_ROADMAP = [
  {
    week: 'Week 01',
    titleEn: 'Digestive Reset & Bloating Relief',
    titleHi: 'पाचन सुधार और पेट फूलना (Bloating) कम करना',
    summary:
      'Establish the Golden Thali ratio without cutting roti. Replace refined morning biscuits with high-protein Indian breakfasts (moong chilla, poha-sprouts, paneer paratha with curd) and start 15-minute gentle core activation.',
    expectedOutcome: 'Noticeably flatter morning stomach & steady afternoon energy within 7 days.'
  },
  {
    week: 'Week 02',
    titleEn: 'Smart Atta Upgrades & Evening Craving Control',
    titleHi: 'आटे का पोषण बढ़ाना और शाम की क्रेविंग पर नियंत्रण',
    summary:
      'Introduce natural protein-fiber boosters (roasted chana sattu or flaxseed) into your regular wheat atta. Implement the 4 PM Chai Buffer protocol so evening hunger never turns into overeating at dinner.',
    expectedOutcome: 'Evening sugar & namkeen cravings drop by 80%; first 1–1.5 inch waist reduction.'
  },
  {
    week: 'Week 03',
    titleEn: 'Visceral Fat Mobilization & Home Core Sculpting',
    titleHi: 'जमा बेली फैट घटाना और 20-मिनट होम वर्कआउट',
    summary:
      'Progress to the 20-minute low-impact home movement flows (zero jumping, knee-safe) paired with light, protein-rich Indian dinners eaten 2.5 hours before sleep.',
    expectedOutcome: 'Kurti and blouse fit loosens visibly around the midsection and waist.'
  },
  {
    week: 'Week 04',
    titleEn: 'Lifestyle Lock-In & Festival/Social Freedom',
    titleHi: 'स्थायी आदतें और बिना डाइट डर के सामान्य जीवन',
    summary:
      'Learn the 80/20 Indian family celebration rule—how to enjoy weddings, guests, or weekend special meals and reset the very next morning without guilt or rebound weight gain.',
    expectedOutcome: '2.5 to 4 inches total waist loss and a sustainable routine you can follow for life.'
  }
];

export default function App() {
  const [selectedEdition, setSelectedEdition] = useState<'english' | 'hindi'>('hindi');
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [activeWeek, setActiveWeek] = useState(0);
  const [showCoverUploader, setShowCoverUploader] = useState(false);
  const [customCoverEn, setCustomCoverEn] = useState<string | null>(null);
  const [customCoverHi, setCustomCoverHi] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedEn = localStorage.getItem(CUSTOM_COVER_EN_KEY);
      const savedHi = localStorage.getItem(CUSTOM_COVER_HI_KEY);
      if (savedEn) setCustomCoverEn(savedEn);
      if (savedHi) setCustomCoverHi(savedHi);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleCoverUpload = (
    lang: 'english' | 'hindi',
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        if (lang === 'english') {
          setCustomCoverEn(reader.result);
          try {
            localStorage.setItem(CUSTOM_COVER_EN_KEY, reader.result);
          } catch {
            // Ignore quota
          }
        } else {
          setCustomCoverHi(reader.result);
          try {
            localStorage.setItem(CUSTOM_COVER_HI_KEY, reader.result);
          } catch {
            // Ignore quota
          }
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const resetCustomCovers = () => {
    setCustomCoverEn(null);
    setCustomCoverHi(null);
    try {
      localStorage.removeItem(CUSTOM_COVER_EN_KEY);
      localStorage.removeItem(CUSTOM_COVER_HI_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const currentEdition = BOOK_EDITIONS[selectedEdition];

  const handleCopyOrderNote = () => {
    navigator.clipboard?.writeText(currentEdition.telegramPrefill);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B]">
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#18181B]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#editions"
            className="text-lg sm:text-xl font-display font-bold tracking-tight text-[#18181B] whitespace-nowrap shrink-0"
          >
            RwH
          </a>

          {/* Zone 2: 5 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#18181B]/75">
            <a
              href="#editions"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Editions
            </a>
            <a
              href="#merits"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Book Merits
            </a>
            <a
              href="#excerpt"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Excerpt
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Reviews
            </a>
            <a
              href="#about"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              About Us
            </a>
            <a
              href="#faq"
              className="hover:text-[#9E2A2B] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() =>
                setSelectedEdition(selectedEdition === 'hindi' ? 'english' : 'hindi')
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#18181B]/15 bg-[#F2EFE9] hover:border-[#9E2A2B] text-[#18181B] transition-colors whitespace-nowrap"
            >
              {selectedEdition === 'hindi' ? 'Switch to English' : 'हिन्दी में देखें'}
            </button>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#9E2A2B] hover:bg-[#822021] rounded-lg transition-colors whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Buy on Telegram</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO & CONTIGUOUS BILINGUAL PURCHASE MODULE */}
        <section id="editions" className="pt-10 pb-20 sm:pt-14 sm:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
              {/* LEFT 7 COLUMNS: Dual Book Cover Stage (Hindi + English Editions) */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-10 rounded-3xl bg-[#F2EFE9] border border-[#18181B]/10">
                  {/* Top Stage Kicker (Zero-Pill Clean Metadata) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#18181B]/65 mb-8 pb-4 border-b border-[#18181B]/10">
                    <div>
                      <span className="font-semibold text-[#9E2A2B]">
                        Available in Both Hindi &amp; English
                      </span>
                      <span className="mx-2" aria-hidden="true">
                        ·
                      </span>
                      <span>हिन्दी और अंग्रेज़ी दोनों भाषाओं में उपलब्ध</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCoverUploader(!showCoverUploader)}
                      className="text-xs font-medium text-[#18181B]/70 hover:text-[#9E2A2B] underline underline-offset-4 inline-flex items-center gap-1 whitespace-nowrap"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{showCoverUploader ? 'Hide Cover Studio' : 'Use Custom Cover Images'}</span>
                    </button>
                  </div>

                  {/* Optional Custom Cover Uploader Bar (Lets user drop in their exact poster PNGs) */}
                  {showCoverUploader && (
                    <div className="mb-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#18181B]/15 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-semibold text-[#18181B]">
                          Upload Your Exact Hindi &amp; English Cover Posters (Optional):
                        </span>
                        {(customCoverEn || customCoverHi) && (
                          <button
                            type="button"
                            onClick={resetCustomCovers}
                            className="inline-flex items-center gap-1 text-[#9E2A2B] hover:underline font-medium"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reset to Default Covers</span>
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-dashed border-[#18181B]/25 hover:border-[#9E2A2B] cursor-pointer bg-[#F2EFE9]/50 transition-colors">
                          <Upload className="w-3.5 h-3.5 text-[#9E2A2B]" />
                          <span className="truncate">
                            {customCoverHi
                              ? 'Hindi Cover Loaded (Change)'
                              : 'Upload Hindi Cover (30 दिनों में बेली फैट...)'}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleCoverUpload('hindi', e)}
                            className="hidden"
                          />
                        </label>
                        <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-dashed border-[#18181B]/25 hover:border-[#9E2A2B] cursor-pointer bg-[#F2EFE9]/50 transition-colors">
                          <Upload className="w-3.5 h-3.5 text-[#1C3829]" />
                          <span className="truncate">
                            {customCoverEn
                              ? 'English Cover Loaded (Change)'
                              : 'Upload English Cover (Lose Belly Fat...)'}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleCoverUpload('english', e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Dual 3D Cover Display: Hindi & English Side-by-Side */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 py-2">
                    <BookCover3D
                      edition="hindi"
                      customCoverUrl={customCoverHi}
                      isSelected={selectedEdition === 'hindi'}
                      onSelect={() => setSelectedEdition('hindi')}
                    />
                    <BookCover3D
                      edition="english"
                      customCoverUrl={customCoverEn}
                      isSelected={selectedEdition === 'english'}
                      onSelect={() => setSelectedEdition('english')}
                    />
                  </div>

                  {/* 4 Trust Pillars from bottom of both cover posters */}
                  <div className="mt-8 pt-6 border-t border-[#18181B]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                    <div>
                      <div className="text-xs font-semibold text-[#18181B]">
                        Instant PDF Download
                      </div>
                      <div className="text-[11px] text-[#18181B]/65 mt-0.5">
                        तुरंत PDF डाउनलोड
                      </div>
                    </div>
                    <div className="sm:border-l sm:border-[#18181B]/10 sm:pl-4">
                      <div className="text-xs font-semibold text-[#18181B]">
                        Read on Any Device
                      </div>
                      <div className="text-[11px] text-[#18181B]/65 mt-0.5">
                        किसी भी डिवाइस पर पढ़ें
                      </div>
                    </div>
                    <div className="sm:border-l sm:border-[#18181B]/10 sm:pl-4">
                      <div className="text-xs font-semibold text-[#18181B]">
                        Simple &amp; Practical Plan
                      </div>
                      <div className="text-[11px] text-[#18181B]/65 mt-0.5">
                        सरल और व्यावहारिक प्लान
                      </div>
                    </div>
                    <div className="sm:border-l sm:border-[#18181B]/10 sm:pl-4">
                      <div className="text-xs font-semibold text-[#18181B]">
                        Real Indian Food
                      </div>
                      <div className="text-[11px] text-[#18181B]/65 mt-0.5">
                        वास्तविक भारतीय खाना
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT 5 COLUMNS: Contiguous Purchase & Direct Telegram Communication Module */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                {/* Clean Unboxed Kicker */}
                <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
                  <span>Official Publisher Release</span>
                  <span aria-hidden="true">·</span>
                  <span>{PUBLISHER_NAME}</span>
                </div>

                {/* Primary Display Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-bold text-[#18181B] leading-[1.12] tracking-tight">
                  Lose Belly Fat in 30 Days —{' '}
                  <span className="text-[#9E2A2B]">Without Giving Up Roti</span>
                </h1>

                {/* Bilingual Hindi Title */}
                <p className="mt-2.5 text-lg sm:text-xl font-display font-semibold text-[#1C3829]">
                  30 दिनों में बेली फैट कम करें — बिना रोटी छोड़े
                </p>

                <p className="mt-3 text-[15px] leading-relaxed text-[#18181B]/75">
                  A simple, practical 30-day Indian meal plan, 20-minute home workout guide, craving control handbook, and progress tracker designed specifically for Indian women. Available in both{' '}
                  <strong className="text-[#18181B] font-semibold">Hindi (हिन्दी)</strong> and{' '}
                  <strong className="text-[#18181B] font-semibold">English</strong> editions.
                </p>

                {/* Edition Selector Controls */}
                <div className="mt-6">
                  <label className="block text-xs font-semibold text-[#18181B]/75 mb-2">
                    Select Your Preferred Language Edition:
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F2EFE9] border border-[#18181B]/12 rounded-xl">
                    {(['hindi', 'english'] as const).map((edKey) => {
                      const ed = BOOK_EDITIONS[edKey];
                      const active = selectedEdition === edKey;
                      return (
                        <button
                          key={edKey}
                          type="button"
                          onClick={() => setSelectedEdition(edKey)}
                          className={`py-2.5 px-3 rounded-lg text-left transition-all duration-150 ${
                            active
                              ? 'bg-[#FAF8F5] text-[#18181B] shadow-sm border border-[#9E2A2B]/40'
                              : 'text-[#18181B]/70 hover:text-[#18181B]'
                          }`}
                        >
                          <div className="text-xs font-bold truncate">
                            {edKey === 'hindi' ? 'हिन्दी Edition' : 'English Edition'}
                          </div>
                          <div className="text-[11px] font-mono-tabular text-[#9E2A2B] font-semibold mt-0.5">
                            ₹{ed.price}{' '}
                            <span className="line-through text-[#18181B]/45 font-normal">
                              ₹{ed.originalPrice}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Edition Details & Price Card */}
                <div className="mt-5 p-6 rounded-2xl bg-[#F2EFE9]/75 border border-[#18181B]/12">
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#18181B]/10">
                    <div>
                      <div className="text-xs text-[#18181B]/65 font-medium">
                        {currentEdition.nativeLabel}
                      </div>
                      <div className="font-display font-bold text-lg text-[#18181B] mt-0.5">
                        {currentEdition.title}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-[#18181B]/50 line-through font-mono-tabular">
                        MRP ₹{currentEdition.originalPrice}
                      </div>
                      <div className="text-3xl font-mono-tabular font-bold text-[#9E2A2B]">
                        ₹{currentEdition.price}
                      </div>
                    </div>
                  </div>

                  {/* Included Highlights for Selected Edition */}
                  <ul className="my-4 space-y-2 text-xs sm:text-[13px] text-[#18181B]/80">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1C3829] shrink-0" />
                      <span>
                        <strong>Format:</strong> {currentEdition.format}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1C3829] shrink-0" />
                      <span>
                        <strong>Includes:</strong> 30-Day Indian Meal Chart, Home Workouts, Recipes &amp; Checklists
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1C3829] shrink-0" />
                      <span>
                        <strong>Direct Support:</strong> 1-on-1 reader communication with {PUBLISHER_NAME}
                      </span>
                    </li>
                  </ul>

                  {/* Primary Redirect Button to Telegram t.me/RedwoodHouse */}
                  <div className="space-y-2.5 pt-2">
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#9E2A2B] hover:bg-[#822021] text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-sm transition-colors whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        Buy Now on Telegram ({TELEGRAM_HANDLE}) — ₹{currentEdition.price}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyOrderNote}
                        className="flex-1 py-2 px-3 rounded-lg border border-[#18181B]/15 bg-[#FAF8F5] hover:border-[#18181B]/35 text-xs font-medium text-[#18181B]/80 flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        {copiedMessage ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#1C3829]" />
                            <span className="text-[#1C3829] font-semibold">
                              Order Message Copied! Paste in Telegram
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Ready-to-Send Order Message</span>
                          </>
                        )}
                      </button>

                      <a
                        href="#excerpt"
                        className="py-2 px-3.5 rounded-lg border border-[#18181B]/15 bg-[#FAF8F5] hover:border-[#18181B]/35 text-xs font-medium text-[#18181B]/80 inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Excerpt</span>
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-[#18181B]/60 text-center">
                    Direct redirect to{' '}
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium text-[#18181B]"
                    >
                      t.me/RedwoodHouse
                    </a>{' '}
                    for instant UPI checkout, immediate PDF delivery &amp; direct reader chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK MERITS & 30-DAY TRANSFORMATION ARCHITECTURE */}
        <section
          id="merits"
          className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#FAF8F5]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="max-w-2xl mb-14">
              <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
                <span>Why This Book Works</span>
                <span aria-hidden="true">·</span>
                <span>पुस्तक की 5 मुख्य विशेषताएँ</span>
                <span aria-hidden="true">·</span>
                <span>Studied From Both Editions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
                Five Practical Merits Inside Every Copy
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[#18181B]/75">
                Unlike generic Western diet books that demand expensive avocados, quinoa, or exhausting gym memberships, this handbook is engineered around the rhythm of an Indian woman’s home.
              </p>
            </div>

            {/* Asymmetric Bento Grid of the 5 Cover Merits */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {BOOK_MERITS.map((merit) => (
                <article
                  key={merit.number}
                  className={`${merit.spanClass} p-7 sm:p-8 rounded-2xl bg-[#F2EFE9]/70 border border-[#18181B]/10 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#18181B]/60 mb-3 pb-3 border-b border-[#18181B]/10">
                      <span className="font-mono-tabular font-bold text-sm text-[#9E2A2B]">
                        {merit.number}.
                      </span>
                      <span>{merit.subtitle}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18181B]">
                      {merit.titleEn}
                    </h3>
                    <div className="text-sm font-display font-semibold text-[#1C3829] mt-1">
                      {merit.titleHi}
                    </div>

                    <p className="mt-3.5 text-[15px] leading-relaxed text-[#18181B]/80">
                      {merit.description}
                    </p>
                  </div>

                  <ul className="mt-6 pt-4 border-t border-[#18181B]/10 space-y-2 text-xs sm:text-[13px] text-[#18181B]/80">
                    {merit.highlights.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Interactive 4-Week Transformation Roadmap */}
            <div className="mt-14 p-7 sm:p-10 rounded-3xl bg-[#1C3829] text-[#FAF8F5]">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/15">
                <div>
                  <div className="text-xs font-semibold text-[#A7D7A9] tracking-wide mb-2">
                    30-Day Curriculum · 4-सप्ताह का रोडमैप
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold">
                    How Your 30 Days Unfold Week by Week
                  </h3>
                </div>

                {/* Week Selector Tabs */}
                <div className="flex flex-wrap gap-1.5 p-1 bg-white/10 rounded-xl">
                  {WEEKLY_ROADMAP.map((wk, idx) => (
                    <button
                      key={wk.week}
                      type="button"
                      onClick={() => setActiveWeek(idx)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                        activeWeek === idx
                          ? 'bg-[#FAF8F5] text-[#18181B]'
                          : 'text-[#FAF8F5]/75 hover:text-white'
                      }`}
                    >
                      {wk.week}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Week Content */}
              <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="text-xs font-mono-tabular text-[#A7D7A9] mb-1">
                    {WEEKLY_ROADMAP[activeWeek].week} Focus
                  </div>
                  <h4 className="text-2xl font-display font-bold">
                    {WEEKLY_ROADMAP[activeWeek].titleEn}
                  </h4>
                  <div className="text-base text-[#FAF8F5]/85 font-medium mt-1">
                    {WEEKLY_ROADMAP[activeWeek].titleHi}
                  </div>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-[#FAF8F5]/85">
                    {WEEKLY_ROADMAP[activeWeek].summary}
                  </p>
                </div>

                <div className="lg:col-span-4 p-5 rounded-2xl bg-white/10 border border-white/15">
                  <div className="text-xs font-semibold text-[#A7D7A9] uppercase tracking-wider mb-2">
                    Expected Milestone
                  </div>
                  <p className="text-sm leading-relaxed text-[#FAF8F5]">
                    {WEEKLY_ROADMAP[activeWeek].expectedOutcome}
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F7D788] hover:underline"
                  >
                    <span>Start Day 1 Today on Telegram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EXCERPT SECTION (Bilingual Interactive Reader) */}
        <FeaturedExcerpt />

        {/* READER TESTIMONIALS SECTION (With Photos & Interactive Submission) */}
        <TestimonialsSection />

        {/* ABOUT US — PUBLISHER: RwH REDWOOD HOUSE */}
        <section
          id="about"
          className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#FAF8F5]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left 6 Columns: Editorial Story & Bilingual Mission */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
                  <span>About the Publisher</span>
                  <span aria-hidden="true">·</span>
                  <span>प्रकाशक के बारे में</span>
                  <span aria-hidden="true">·</span>
                  <span>{PUBLISHER_NAME}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
                  Published by {PUBLISHER_NAME}: Practical Wisdom in Hindi &amp; English
                </h2>

                <p className="mt-4 text-[15.5px] leading-[1.75] text-[#18181B]/80">
                  <strong>{PUBLISHER_NAME}</strong> is an independent bilingual publishing house dedicated to creating deeply researched, culturally grounded non-fiction and wellness guides for Indian households.
                </p>

                <p className="mt-4 text-[15.5px] leading-[1.75] text-[#18181B]/80">
                  For too long, practical nutrition and fitness books were written either for Western grocery stores or only in academic English. At <strong>{PUBLISHER_NAME}</strong>, every flagship title is crafted simultaneously in lucid, natural <strong>Hindi (हिन्दी)</strong> and <strong>English</strong>—so mothers, daughters, working professionals, and homemakers across India can access evidence-based health transformation in the language they think and cook in.
                </p>

                {/* Why We Use Direct Telegram Fulfillment */}
                <div className="mt-7 p-6 rounded-2xl bg-[#F2EFE9] border border-[#18181B]/10">
                  <div className="flex items-center gap-2 text-sm font-display font-bold text-[#18181B]">
                    <MessageCircle className="w-4 h-4 text-[#9E2A2B]" />
                    <span>Why We Connect Directly With Readers on Telegram ({TELEGRAM_HANDLE})</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#18181B]/75">
                    Instead of hiding behind third-party marketplace paywalls that add 40% platform fees, {PUBLISHER_NAME} distributes directly to readers via Telegram. This allows us to offer the complete ₹799 guide for just <strong>₹499</strong>, deliver your PDF within moments, and keep an open line of direct communication with our readers.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9E2A2B] hover:bg-[#822021] text-white text-xs font-semibold transition-colors whitespace-nowrap"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Connect With RwH Redwood House on Telegram</span>
                    </a>
                    <span className="text-xs text-[#18181B]/60 font-mono-tabular">
                      t.me/RedwoodHouse
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 6 Columns: Publisher Atelier Image & Imprint Facts */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-[#18181B]/12 bg-[#F2EFE9]">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={ATELIER_PHOTO_URL}
                      alt="RwH Redwood House Editorial Archive and Reading Room"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                      <div className="text-[#FAF8F5]">
                        <div className="text-xs uppercase tracking-widest text-[#FAF8F5]/75">
                          Independent Bilingual Imprint
                        </div>
                        <div className="text-xl font-display font-bold mt-0.5">
                          {PUBLISHER_NAME} Editorial Desk
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Publisher Imprint Metadata Strip */}
                  <div className="p-6 grid grid-cols-3 gap-4 divide-x divide-[#18181B]/10 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-mono-tabular font-bold text-[#9E2A2B]">
                        2 Editions
                      </div>
                      <div className="text-xs text-[#18181B]/70 mt-1">
                        Hindi &amp; English Complete Texts
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="text-xl sm:text-2xl font-mono-tabular font-bold text-[#1C3829]">
                        30 Days
                      </div>
                      <div className="text-xs text-[#18181B]/70 mt-1">
                        Structured Indian Meal &amp; Workout Plan
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="text-xl sm:text-2xl font-mono-tabular font-bold text-[#18181B]">
                        100% Direct
                      </div>
                      <div className="text-xs text-[#18181B]/70 mt-1">
                        Reader Support via @RedwoodHouse
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FaqSection />

        {/* FINAL CONVERSION BANNER (Direct Telegram Redirect) */}
        <section className="py-16 sm:py-20 bg-[#18181B] text-[#FAF8F5]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="text-xs font-semibold text-[#F4B8B4] tracking-wide mb-2">
                  {PUBLISHER_NAME} · Official Direct Order
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wide">
                  Start Your 30-Day Transformation Today — Without Giving Up Your Daily Roti
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#FAF8F5]/75 leading-relaxed">
                  Available immediately in both <strong>Hindi (30 दिनों में बेली फैट कम करें)</strong> and <strong>English (Lose Belly Fat in 30 Days)</strong> for just <strong>₹499</strong> (MRP ₹799). Click below to message us on Telegram for instant PDF download.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl bg-[#9E2A2B] hover:bg-[#B33234] text-white font-semibold text-sm inline-flex items-center gap-2.5 shadow-lg transition-colors whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Buy &amp; Chat on Telegram (t.me/RedwoodHouse)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET EDITORIAL FOOTER */}
      <footer className="bg-[#FAF8F5] border-t border-[#18181B]/10 py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#18181B]/65">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display font-bold text-sm text-[#18181B]">
              {PUBLISHER_NAME}
            </span>
            <span aria-hidden="true">·</span>
            <span>Bilingual Wellness &amp; Non-Fiction Publishing (Hindi &amp; English)</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#editions" className="hover:text-[#18181B] transition-colors">
              Editions
            </a>
            <a href="#merits" className="hover:text-[#18181B] transition-colors">
              Merits
            </a>
            <a href="#excerpt" className="hover:text-[#18181B] transition-colors">
              Excerpt
            </a>
            <a href="#testimonials" className="hover:text-[#18181B] transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-[#18181B] transition-colors">
              FAQ
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#9E2A2B] hover:underline inline-flex items-center gap-1"
            >
              <span>Telegram: t.me/RedwoodHouse</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
