import React, { useState } from 'react';
import { ChevronDown, Send, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, TELEGRAM_URL, TELEGRAM_HANDLE } from '../data/ebookData';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'content' | 'formats' | 'purchase'>('all');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#F2EFE9]/50"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Header, Category Filter & Direct Telegram Help Box */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
              <span>Frequently Asked Questions</span>
              <span aria-hidden="true">·</span>
              <span>अक्सर पूछे जाने वाले सवाल</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
              Clear Answers on Content, Formats &amp; Telegram Delivery
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#18181B]/75">
              Everything you need to know about the 30-day Indian meal plan, Hindi and English PDF editions, device compatibility, and instant ordering via RwH Redwood House.
            </p>

            {/* Interactive Category Filter Buttons */}
            <div className="mt-6 flex flex-wrap gap-1.5 p-1.5 bg-[#FAF8F5] border border-[#18181B]/10 rounded-xl">
              {[
                { id: 'all', label: 'All Questions' },
                { id: 'content', label: 'Diet & Workouts' },
                { id: 'formats', label: 'Formats & Hindi/EN' },
                { id: 'purchase', label: 'Telegram Purchase' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(tab.id as 'all' | 'content' | 'formats' | 'purchase')
                  }
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === tab.id
                      ? 'bg-[#18181B] text-[#FAF8F5]'
                      : 'text-[#18181B]/70 hover:text-[#18181B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Direct Reader Communication Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#1C3829] text-[#FAF8F5]">
              <div className="flex items-center gap-2 text-xs text-[#A7D7A9] font-medium mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Direct Publisher Support · RwH Redwood House</span>
              </div>
              <h3 className="text-xl font-display font-bold">
                Have a question before ordering?
              </h3>
              <p className="mt-2 text-sm text-[#FAF8F5]/80 leading-relaxed">
                Message our editorial team directly on Telegram ({TELEGRAM_HANDLE}). Ask about the Hindi or English edition, sample pages, or UPI payment assistance.
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF8F5] text-[#18181B] hover:bg-[#F2EFE9] text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5 text-[#9E2A2B]" />
                <span>Chat Directly on Telegram ({TELEGRAM_HANDLE})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-colors duration-150 ${
                    isOpen
                      ? 'bg-[#FAF8F5] border-[#9E2A2B]/40 shadow-sm'
                      : 'bg-[#FAF8F5]/75 border-[#18181B]/10 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#18181B]/55 mb-1">
                        <span className="font-mono-tabular font-semibold text-[#9E2A2B]">
                          0{index + 1}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{faq.categoryLabel}</span>
                      </div>
                      <h3 className="font-display font-semibold text-base sm:text-lg text-[#18181B]">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-[#18181B]/65 mt-1">{faq.questionHi}</p>
                    </div>
                    <span
                      className={`mt-1 p-1.5 rounded-lg border border-[#18181B]/10 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#9E2A2B] text-white border-[#9E2A2B]' : 'text-[#18181B]/70'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-[#18181B]/5">
                      <p className="text-[15px] leading-[1.7] text-[#18181B]/80">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
