import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Quote, Upload, CheckCircle2, X } from 'lucide-react';
import { INITIAL_TESTIMONIALS, ReaderTestimonial } from '../data/ebookData';

const STORAGE_KEY = 'rwh_redwood_reader_testimonials_v1';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ReaderTestimonial[]>(INITIAL_TESTIMONIALS);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form states for adding a new reader testimonial
  const [name, setName] = useState('');
  const [roleAndCity, setRoleAndCity] = useState('');
  const [editionRead, setEditionRead] = useState<'Hindi Edition' | 'English Edition' | 'Both Editions'>('Hindi Edition');
  const [outcomeMetric, setOutcomeMetric] = useState('');
  const [quote, setQuote] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTestimonials(parsed);
        }
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPhotoPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const newEntry: ReaderTestimonial = {
      id: `reader-${Date.now()}`,
      name: name.trim(),
      roleAndCity: roleAndCity.trim() || 'Verified Reader · India',
      editionRead,
      outcomeMetric: outcomeMetric.trim() || '30-Day Roti-Friendly Plan Reader',
      quote: quote.trim(),
      photoUrl: photoPreview || undefined,
      verifiedVia: 'Reader Story · RwH Redwood House Community'
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore quota errors
    }

    setName('');
    setRoleAndCity('');
    setOutcomeMetric('');
    setQuote('');
    setPhotoPreview('');
    setIsFormOpen(false);
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 4500);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 border-t border-[#18181B]/10 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#9E2A2B] font-semibold tracking-wide mb-3">
              <span>Reader Stories</span>
              <span aria-hidden="true">·</span>
              <span>पाठकों के अनुभव</span>
              <span aria-hidden="true">·</span>
              <span>Real Indian Kitchens</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] tracking-tight">
              Women Who Kept Their Roti &amp; Lost the Inches
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#18181B]/75">
              Read how homemakers, mothers, and working professionals across India used the Hindi and English editions to transform their waistlines without crash dieting.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#18181B]/20 bg-[#F2EFE9] hover:bg-[#18181B] hover:text-[#FAF8F5] text-xs font-semibold text-[#18181B] transition-colors whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{isFormOpen ? 'Close Review Form' : 'Share Your Reader Review'}</span>
            </button>
          </div>
        </div>

        {submittedNotice && (
          <div className="mb-8 p-4 rounded-xl bg-[#1C3829] text-[#FAF8F5] flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#A7D7A9] shrink-0" />
              <span>Thank you! Your reader testimonial has been added to the RwH Redwood House showcase.</span>
            </div>
            <button
              type="button"
              onClick={() => setSubmittedNotice(false)}
              className="text-xs underline opacity-80 hover:opacity-100"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Interactive Add Testimonial Drawer */}
        {isFormOpen && (
          <form
            onSubmit={handleSubmit}
            className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#F2EFE9] border border-[#18181B]/12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-display font-bold text-[#18181B]">
                  Add Your Reader Testimonial
                </h3>
                <p className="text-xs text-[#18181B]/65 mt-0.5">
                  Share your experience with the Hindi or English edition. Photo is optional.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="p-1.5 rounded-lg text-[#18181B]/60 hover:text-[#18181B]"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Reader Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Neha Gupta (नेहा गुप्ता)"
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#FAF8F5] border border-[#18181B]/15 focus:outline-none focus:border-[#9E2A2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Role &amp; City
                </label>
                <input
                  type="text"
                  value={roleAndCity}
                  onChange={(e) => setRoleAndCity(e.target.value)}
                  placeholder="e.g., Architect · Delhi"
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#FAF8F5] border border-[#18181B]/15 focus:outline-none focus:border-[#9E2A2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Edition Read
                </label>
                <select
                  value={editionRead}
                  onChange={(e) =>
                    setEditionRead(
                      e.target.value as 'Hindi Edition' | 'English Edition' | 'Both Editions'
                    )
                  }
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#FAF8F5] border border-[#18181B]/15 focus:outline-none focus:border-[#9E2A2B]"
                >
                  <option value="Hindi Edition">Hindi Edition (हिन्दी)</option>
                  <option value="English Edition">English Edition</option>
                  <option value="Both Editions">Both Editions (Combo)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Key Result / Outcome
                </label>
                <input
                  type="text"
                  value={outcomeMetric}
                  onChange={(e) => setOutcomeMetric(e.target.value)}
                  placeholder="e.g., Lost 2.8 inches in 30 days"
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#FAF8F5] border border-[#18181B]/15 focus:outline-none focus:border-[#9E2A2B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div className="lg:col-span-2">
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Your Review / Quote (English or Hindi) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Share how the 30-day meal plan, roti pairing, or home workouts helped you..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#FAF8F5] border border-[#18181B]/15 focus:outline-none focus:border-[#9E2A2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Reader Photo (Optional)
                </label>
                <label className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-dashed border-[#18181B]/25 bg-[#FAF8F5] hover:border-[#9E2A2B] cursor-pointer text-xs font-medium text-[#18181B]/75 transition-colors">
                  <Upload className="w-4 h-4 text-[#9E2A2B]" />
                  <span>{photoPreview ? 'Photo Attached (Change)' : 'Upload Optional Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>

                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#18181B]/70 hover:text-[#18181B]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#9E2A2B] hover:bg-[#822021] text-white text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    Publish Testimonial
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Testimonials 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => {
            const initials = item.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#F2EFE9]/65 border border-[#18181B]/10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  {/* Unboxed clean metadata kicker (Zero-Pill Discipline) */}
                  <div className="flex items-center justify-between text-xs text-[#18181B]/60 pb-4 mb-4 border-b border-[#18181B]/10">
                    <span className="font-semibold text-[#9E2A2B]">{item.editionRead}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular font-medium text-[#1C3829]">
                      {item.outcomeMetric}
                    </span>
                  </div>

                  {/* Reader Quote */}
                  <div className="relative">
                    <Quote className="w-5 h-5 text-[#9E2A2B]/30 mb-2" />
                    <p className="text-[15px] leading-[1.7] text-[#18181B]/85">
                      “{item.quote}”
                    </p>
                  </div>
                </div>

                {/* Reader Profile Footer (Photo + Name + Role/City) */}
                <div className="mt-6 pt-4 border-t border-[#18181B]/10 flex items-center gap-3.5">
                  {item.photoUrl ? (
                    <img
                      src={item.photoUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-[#18181B]/15 shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#1C3829] text-[#FAF8F5] flex items-center justify-center font-display font-bold text-sm shrink-0">
                      {initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="font-display font-bold text-base text-[#18181B] truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#18181B]/65 truncate">{item.roleAndCity}</div>
                    <div className="text-[11px] text-[#18181B]/50 mt-0.5 truncate">
                      {item.verifiedVia}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
