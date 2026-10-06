import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Check, Type, Languages } from 'lucide-react';
import { EXCERPT_CHAPTERS, TELEGRAM_URL } from '../data/ebookData';

export const FeaturedExcerpt: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(EXCERPT_CHAPTERS[0].id);
  const [languageMode, setLanguageMode] = useState<'english' | 'hindi' | 'both'>('both');
  const [fontScale, setFontScale] = useState<'normal' | 'large'>('normal');
  const [darkReader, setDarkReader] = useState<boolean>(false);

  const activeChapter =
    EXCERPT_CHAPTERS.find((ch) => ch.id === selectedChapterId) || EXCERPT_CHAPTERS[0];

  const bodyTextSize = fontScale === 'large' ? 'text-[17px] leading-[1.85]' : 'text-[15.5px] leading-[1.75]';

  return (
    <section
      id="excerpt"
      className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#F2EFE9]/60"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
              <span>Featured Excerpt</span>
              <span aria-hidden="true">·</span>
              <span>पुस्तक का विशेष अंश</span>
              <span aria-hidden="true">·</span>
              <span>Inside the Pages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
              Read a Passage Before You Buy
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#18181B]/75">
              Experience the practical, compassionate tone of RwH Redwood House. Switch between the English Edition, Hindi Edition (हिन्दी संस्करण), or read both side-by-side.
            </p>
          </div>

          {/* Interactive Reader Controls: Language Switcher & Font Size */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Excerpt Language Mode"
              className="flex items-center gap-1 p-1 bg-[#FAF8F5] border border-[#18181B]/10 rounded-lg"
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

            <div className="flex items-center gap-1 p-1 bg-[#FAF8F5] border border-[#18181B]/10 rounded-lg">
              <button
                type="button"
                onClick={() => setFontScale(fontScale === 'normal' ? 'large' : 'normal')}
                className="px-3 py-1.5 text-xs font-medium text-[#18181B]/80 hover:text-[#18181B] rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1"
                title="Toggle larger reading text"
              >
                <Type className="w-3.5 h-3.5" />
                <span>{fontScale === 'large' ? 'Text: Large' : 'Text: Standard'}</span>
              </button>
              <button
                type="button"
                onClick={() => setDarkReader(!darkReader)}
                className="px-3 py-1.5 text-xs font-medium text-[#18181B]/80 hover:text-[#18181B] rounded-md transition-colors whitespace-nowrap"
              >
                {darkReader ? 'Warm Paper' : 'Night Ink'}
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {EXCERPT_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === selectedChapterId;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => setSelectedChapterId(chapter.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-150 ${
                  isActive
                    ? 'bg-[#FAF8F5] border-[#9E2A2B] shadow-sm'
                    : 'bg-[#FAF8F5]/60 border-[#18181B]/10 hover:bg-[#FAF8F5] hover:border-[#18181B]/25'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-[#18181B]/60 mb-1">
                  <span className="font-mono-tabular font-semibold text-[#9E2A2B]">
                    {chapter.chapterNumber}
                  </span>
                  <span>{chapter.readingTime}</span>
                </div>
                <div className="font-display font-semibold text-base text-[#18181B] line-clamp-1">
                  {chapter.titleEn}
                </div>
                <div className="text-xs text-[#18181B]/70 mt-0.5 line-clamp-1">
                  {chapter.titleHi}
                </div>
              </button>
            );
          })}
        </div>

        {/* Book Page Excerpt Frame */}
        <div
          className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
            darkReader
              ? 'bg-[#18181B] text-[#FAF8F5] border-white/10'
              : 'bg-[#FAF8F5] text-[#18181B] border-[#18181B]/12 shadow-[0_12px_32px_-12px_rgba(24,24,27,0.08)]'
          }`}
        >
          {/* Top Book Running Header */}
          <div
            className={`px-6 sm:px-10 py-4 border-b flex flex-wrap items-center justify-between gap-2 text-xs ${
              darkReader
                ? 'border-white/10 text-[#FAF8F5]/60 bg-white/[0.02]'
                : 'border-[#18181B]/10 text-[#18181B]/60 bg-[#F2EFE9]/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#9E2A2B]" />
              <span>RwH Redwood House Official Excerpt</span>
              <span aria-hidden="true">·</span>
              <span>{activeChapter.chapterNumber}</span>
            </div>
            <div>
              <span>Lose Belly Fat in 30 Days · 30 दिनों में बेली फैट कम करें</span>
            </div>
          </div>

          {/* Reading Spread Grid */}
          <div
            className={`grid grid-cols-1 ${
              languageMode === 'both'
                ? 'lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x'
                : 'max-w-3xl mx-auto'
            } ${darkReader ? 'divide-white/10' : 'divide-[#18181B]/10'}`}
          >
            {/* ENGLISH PASSAGE COLUMN */}
            {(languageMode === 'english' || languageMode === 'both') && (
              <article className="p-6 sm:p-10 lg:p-12">
                <div className="text-xs font-medium text-[#9E2A2B] mb-2">
                  {activeChapter.kickerEn} · English Edition
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6">
                  {activeChapter.titleEn}
                </h3>

                {/* Drop-cap opening paragraph */}
                <p
                  className={`${bodyTextSize} mb-5 ${
                    darkReader ? 'text-[#FAF8F5]/90 tracking-wide' : 'text-[#18181B]/85'
                  } first-letter:float-left first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:pr-3 first-letter:leading-none first-letter:text-[#9E2A2B]`}
                >
                  {activeChapter.contentEn.dropCapParagraph}
                </p>

                {activeChapter.contentEn.bodyParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${bodyTextSize} mb-5 ${
                      darkReader ? 'text-[#FAF8F5]/85 tracking-wide' : 'text-[#18181B]/80'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Editorial Pull Quote */}
                <blockquote
                  className={`my-7 pl-5 border-l-2 border-[#9E2A2B] font-display italic text-lg sm:text-xl leading-relaxed ${
                    darkReader ? 'text-[#FAF8F5]' : 'text-[#18181B]'
                  }`}
                >
                  {activeChapter.contentEn.pullQuote}
                </blockquote>

                {/* Actionable Takeaway Box */}
                <div
                  className={`mt-6 p-5 rounded-xl border ${
                    darkReader
                      ? 'bg-white/[0.04] border-white/10'
                      : 'bg-[#F2EFE9]/70 border-[#18181B]/10'
                  }`}
                >
                  <div className="text-sm font-semibold mb-3 text-[#9E2A2B]">
                    {activeChapter.contentEn.keyTakeawayTitle}
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {activeChapter.contentEn.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1C3829] dark:text-[#6EE7B7] shrink-0 mt-0.5" />
                        <span className={darkReader ? 'text-[#FAF8F5]/85' : 'text-[#18181B]/85'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}

            {/* HINDI PASSAGE COLUMN */}
            {(languageMode === 'hindi' || languageMode === 'both') && (
              <article className="p-6 sm:p-10 lg:p-12">
                <div className="text-xs font-medium text-[#9E2A2B] mb-2">
                  {activeChapter.kickerHi} · हिन्दी संस्करण
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6">
                  {activeChapter.titleHi}
                </h3>

                {/* Opening paragraph in Hindi */}
                <p
                  className={`${bodyTextSize} mb-5 ${
                    darkReader ? 'text-[#FAF8F5]/90 tracking-wide' : 'text-[#18181B]/85'
                  }`}
                >
                  {activeChapter.contentHi.dropCapParagraph}
                </p>

                {activeChapter.contentHi.bodyParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${bodyTextSize} mb-5 ${
                      darkReader ? 'text-[#FAF8F5]/85 tracking-wide' : 'text-[#18181B]/80'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Editorial Pull Quote in Hindi */}
                <blockquote
                  className={`my-7 pl-5 border-l-2 border-[#9E2A2B] font-display text-lg sm:text-xl leading-relaxed ${
                    darkReader ? 'text-[#FAF8F5]' : 'text-[#18181B]'
                  }`}
                >
                  {activeChapter.contentHi.pullQuote}
                </blockquote>

                {/* Actionable Takeaway Box in Hindi */}
                <div
                  className={`mt-6 p-5 rounded-xl border ${
                    darkReader
                      ? 'bg-white/[0.04] border-white/10'
                      : 'bg-[#F2EFE9]/70 border-[#18181B]/10'
                  }`}
                >
                  <div className="text-sm font-semibold mb-3 text-[#9E2A2B]">
                    {activeChapter.contentHi.keyTakeawayTitle}
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {activeChapter.contentHi.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1C3829] dark:text-[#6EE7B7] shrink-0 mt-0.5" />
                        <span className={darkReader ? 'text-[#FAF8F5]/85' : 'text-[#18181B]/85'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}
          </div>

          {/* Bottom Excerpt Footer CTA */}
          <div
            className={`px-6 sm:px-10 py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              darkReader
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-[#18181B]/10 bg-[#F2EFE9]/80'
            }`}
          >
            <div className="text-sm">
              <span className="font-semibold">Enjoyed this excerpt?</span>{' '}
              <span className={darkReader ? 'text-[#FAF8F5]/75' : 'text-[#18181B]/75'}>
                Get all 30 daily meal charts, recipes, and home workout routines in Hindi or English for ₹499.
              </span>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9E2A2B] hover:bg-[#822021] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <span>Order Full eBook on Telegram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
