import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  PlusCircle, 
  X 
} from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/companyData';
import { ReviewItem } from '../types';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(CUSTOMER_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    rating: 5,
    comment: ''
  });

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Valued Customer, Rangpur',
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just now',
      verified: true
    };

    setReviews([item, ...reviews]);
    setCurrentIndex(0);
    setIsModalOpen(false);
    setNewReview({ name: '', role: '', rating: 5, comment: '' });
  };

  const current = reviews[currentIndex] || reviews[0];

  return (
    <section className="relative py-16 bg-gradient-to-b from-sky-50/90 via-blue-100/60 to-sky-100/70 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-cyan-400/20 via-sky-400/20 to-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Add Review button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech">
              Customer Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Verified feedback from homeowners, retail shops, and corporate clients in Rangpur.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-500/25 cursor-pointer transform hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Customer Review</span>
            </button>

            {/* Next/Prev Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-xl bg-white border-2 border-sky-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 transition-colors cursor-pointer shadow-sm"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-xl bg-white border-2 border-sky-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 transition-colors cursor-pointer shadow-sm"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        {current && (
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1a30] via-[#09152b] to-[#040c1a] border-2 border-cyan-400/50 p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-tech font-bold text-xl shrink-0 shadow-lg shadow-cyan-500/30">
                {current.name.slice(0, 2).toUpperCase()}
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < current.rating 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-slate-600'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-mono">5.0 / 5.0</span>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">
                  "{current.comment}"
                </blockquote>

                <div className="pt-3 border-t border-cyan-950/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-1">
                  <div>
                    <strong className="text-white font-tech text-sm">{current.name}</strong>
                    <span className="mx-2">•</span>
                    <span>{current.role}</span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Installation Client ({current.date})</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-6 bg-cyan-500' 
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div 
              className="relative w-full max-w-md rounded-2xl bg-[#081226] border border-cyan-500/40 p-6 shadow-2xl text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white font-tech mb-1">
                Add Client Feedback
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Enter your experience with Shamim Tech Solution CCTV & Security installation.
              </p>

              <form onSubmit={handleAddReview} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Md. Shahidul Islam"
                    className="w-full bg-[#040815] rounded-xl px-3 py-2 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Role / Area</label>
                  <input
                    type="text"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="e.g. Shop Owner, Haragach"
                    className="w-full bg-[#040815] rounded-xl px-3 py-2 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Star Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-[#040815] rounded-xl px-3 py-2 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none cursor-pointer"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 - Good)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Review Comment *</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe how the installation went, video clarity, remote view, cable fitting..."
                    className="w-full bg-[#040815] rounded-xl px-3 py-2 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold cursor-pointer shadow-lg shadow-cyan-500/25"
                  >
                    Save Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
