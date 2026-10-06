import React from 'react';
import { Heart, Leaf, Sun, Sparkles } from 'lucide-react';
import { COVER_PHOTO_URL } from '../data/ebookData';

interface BookCover3DProps {
  edition: 'english' | 'hindi';
  customCoverUrl?: string | null;
  isSelected?: boolean;
  onSelect?: () => void;
  size?: 'md' | 'lg';
}

export const BookCover3D: React.FC<BookCover3DProps> = ({
  edition,
  customCoverUrl,
  isSelected = false,
  onSelect,
  size = 'lg'
}) => {
  const isHindi = edition === 'hindi';

  const dimensions =
    size === 'lg'
      ? 'w-[270px] sm:w-[300px] h-[390px] sm:h-[430px]'
      : 'w-[220px] sm:w-[245px] h-[320px] sm:h-[355px]';

  return (
    <div
      onClick={onSelect}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative select-none transition-transform duration-200 ${
        onSelect ? 'cursor-pointer' : ''
      } ${isSelected ? '-translate-y-1.5' : 'hover:-translate-y-1'}`}
    >
      {/* Subtle Book Spine & Hardcover 3D Depth */}
      <div className={`relative ${dimensions} rounded-r-xl rounded-l-[4px] bg-[#F7F2EA] shadow-[0_20px_40px_-15px_rgba(24,24,27,0.28),0_0_0_1px_rgba(24,24,27,0.1)] overflow-hidden flex flex-col justify-between transition-shadow duration-200 ${
        isSelected ? 'ring-2 ring-[#9E2A2B] ring-offset-4 ring-offset-[#FAF8F5]' : ''
      }`}>
        {/* Left Book Spine Crease & Binding Highlight */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 via-white/30 to-transparent z-30 pointer-events-none border-r border-black/10" />

        {customCoverUrl ? (
          /* If user uploaded their exact poster/cover PNG, display it edge-to-edge */
          <img
            src={customCoverUrl}
            alt={isHindi ? '30 दिनों में बेली फैट कम करें - Hindi Edition Cover' : 'Lose Belly Fat in 30 Days - English Edition Cover'}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Top Cream Editorial Section (Matches attached Hindi & English covers) */}
            <div className="relative pt-4 px-5 pb-2 bg-gradient-to-b from-[#FBF7F0] via-[#F7F1E6] to-[#F3ECE0] z-10">
              {/* Circular Badge Top-Right (Green for English, Crimson for Hindi, matching uploaded covers) */}
              <div
                className={`absolute top-3 right-3 w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full flex flex-col items-center justify-center text-center p-1.5 shadow-md rotate-6 border border-white/40 ${
                  isHindi
                    ? 'bg-[#9E2A2B] text-[#FAF8F5]'
                    : 'bg-[#4E6741] text-[#FAF8F5]'
                }`}
              >
                {isHindi ? (
                  <div className="text-[8.5px] sm:text-[9.5px] leading-[1.2] font-semibold tracking-tight">
                    <div>डाइट चार्ट</div>
                    <div>एक्सरसाइज़</div>
                    <div>रेसिपीज़</div>
                    <div>प्रोग्रेस ट्रैकर</div>
                    <div className="text-[7.5px] opacity-90">और भी बहुत कुछ...</div>
                  </div>
                ) : (
                  <div className="text-[8px] sm:text-[8.5px] leading-[1.2] font-semibold tracking-tight uppercase">
                    <div className="font-bold text-[9.5px]">30-DAY</div>
                    <div>MEAL PLAN</div>
                    <div>WORKOUTS</div>
                    <div>RECIPES</div>
                    <div>TRACKERS</div>
                    <div className="text-[7.5px] opacity-90">&amp; MORE</div>
                  </div>
                )}
              </div>

              {/* Main Cover Title Typography */}
              <div className="pr-16 text-center sm:text-left">
                {isHindi ? (
                  <>
                    <div className="text-[#14281D] font-bold text-xl sm:text-2xl leading-none tracking-tight">
                      30 दिनों में
                    </div>
                    <div className="text-[#9E2A2B] font-extrabold text-3xl sm:text-[34px] leading-[1.08] mt-0.5 font-display">
                      बेली फैट
                    </div>
                    <div className="text-[#14281D] font-bold text-xl sm:text-2xl leading-tight">
                      कम करें
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[#14281D] font-display font-bold text-2xl sm:text-[26px] leading-none">
                      Lose
                    </div>
                    <div className="text-[#B24C43] font-display font-bold text-3xl sm:text-[33px] leading-[1.02]">
                      Belly Fat
                    </div>
                    <div className="text-[#14281D] font-display font-bold text-xl sm:text-[23px] leading-tight">
                      in 30 Days
                    </div>
                  </>
                )}
              </div>

              {/* Pink Brushstroke Banner: "Without Giving Up Roti ♡" / "बिना रोटी छोड़े ♡" */}
              <div className="mt-1.5 inline-flex items-center gap-1.5 bg-[#F6D5D2] px-3 py-0.5 rounded-full border border-[#EAB8B3]">
                <span className="text-[#6E1A1E] font-bold text-xs sm:text-[13px] whitespace-nowrap">
                  {isHindi ? 'बिना रोटी छोड़े' : 'Without Giving Up Roti'}
                </span>
                <Heart className="w-3.5 h-3.5 text-[#9E2A2B] fill-[#9E2A2B]/20 shrink-0" />
              </div>

              {/* Subtitle */}
              <p className="mt-1.5 text-[10px] sm:text-[10.5px] leading-snug font-semibold text-[#18181B]/85">
                {isHindi ? (
                  'भारतीय महिलाओं के लिए एक आसान और व्यावहारिक प्लान'
                ) : (
                  <>
                    A SIMPLE, PRACTICAL PLAN FOR{' '}
                    <span className="text-[#9E2A2B] font-bold">INDIAN WOMEN</span>
                  </>
                )}
              </p>
            </div>

            {/* Center Photography Area (Indian Woman + Wholesome Roti-Dal-Sabzi Thali) */}
            <div className="relative flex-1 overflow-hidden bg-[#E9E0D2]">
              <img
                src={COVER_PHOTO_URL}
                alt={
                  isHindi
                    ? 'भारतीय थाली — रोटी, दाल, सब्ज़ी और स्वस्थ जीवनशैली'
                    : 'Healthy Indian woman with whole wheat roti, dal, and sabzi meal'
                }
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
              />
              {/* Subtle Scrim for Before/After & Meal Tags */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              {/* Before / After Brush Labels matching the covers */}
              <div className="absolute bottom-3 left-4 bg-[#B83B3B] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded shadow-sm">
                {isHindi ? 'पहले' : 'Before'}
              </div>
              <div className="absolute bottom-3 right-4 bg-[#3B5A3A] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded shadow-sm">
                {isHindi ? 'बाद में' : 'After'}
              </div>
            </div>

            {/* Bottom Deep Forest Green Strip (Matches both uploaded covers) */}
            <div className="bg-[#23422B] text-[#FAF8F5] px-3.5 py-2.5 z-10 border-t border-white/15">
              <div className="grid grid-cols-3 gap-1.5 text-[8px] sm:text-[8.5px] leading-tight">
                <div className="flex items-center gap-1 pr-1 border-r border-white/20">
                  <Leaf className="w-3 h-3 text-[#A7D7A9] shrink-0" />
                  <span>{isHindi ? 'वास्तविक भारतीय खाना' : 'REAL FOOD REAL RESULTS'}</span>
                </div>
                <div className="flex items-center gap-1 px-1 border-r border-white/20">
                  <Heart className="w-3 h-3 text-[#F4B8B4] shrink-0" />
                  <span>{isHindi ? 'सकारात्मक और स्थायी तरीके' : 'SIMPLE HABITS FOR YOU'}</span>
                </div>
                <div className="flex items-center gap-1 pl-1">
                  <Sun className="w-3 h-3 text-[#F7D788] shrink-0" />
                  <span>{isHindi ? 'बिना क्रैश डाइट, बिना भूखे' : 'SUSTAINABLE WEIGHT LOSS'}</span>
                </div>
              </div>
              <div className="mt-1.5 pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-[#FAF8F5]/75">
                <span className="font-semibold tracking-wider uppercase">RwH Redwood House</span>
                <span>{isHindi ? 'हिन्दी संस्करण · PDF' : 'English Edition · PDF'}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom Interactive Edition Caption */}
      <div className="mt-3 flex items-center justify-between px-1 text-xs">
        <span className="font-semibold text-[#18181B]">
          {isHindi ? 'Hindi Edition (हिन्दी)' : 'English Edition'}
        </span>
        <span className="text-[#18181B]/60 font-mono-tabular">₹499</span>
      </div>
    </div>
  );
};
