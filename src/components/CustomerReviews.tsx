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
    <section className="relative py-16 bg-[#F7FAFC] border-b border-[#DCE7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Add Review button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6EF] border border-[#DCE7F2] text-[#147A43] text-xs font-bold font-tech uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2937] font-tech">
              Customer Reviews
            </h2>
            <p className="text-[#4B5563] text-sm mt-1">
              Verified feedback from homeowners, retail shops, and corporate clients in Rangpur.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white text-xs font-bold transition-all shadow-xs cursor-pointer transform hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Customer Review</span>
            </button>

            {/* Next/Prev Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-xl bg-white border border-[#DCE7F2] text-[#1F2937] hover:text-[#123A70] hover:border-[#123A70]/45 transition-colors cursor-pointer shadow-xs"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-xl bg-white border border-[#DCE7F2] text-[#1F2937] hover:text-[#123A70] hover:border-[#123A70]/45 transition-colors cursor-pointer shadow-xs"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        {current && (
          <div className="relative rounded-2xl bg-white border border-[#DCE7F2] p-6 sm:p-8 shadow-sm max-w-4xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#123A70]" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#123A70] text-white flex items-center justify-center font-tech font-bold text-xl shrink-0 shadow-xs">
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
                          : 'text-[#DCE7F2]'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-[#64748B] ml-2 font-mono">5.0 / 5.0</span>
                </div>

                <blockquote className="text-base sm:text-lg text-[#1F2937] italic font-medium leading-relaxed">
                  "{current.comment}"
                </blockquote>

                <div className="pt-3 border-t border-[#DCE7F2] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#4B5563] gap-1">
                  <div>
                    <strong className="text-[#1F2937] font-tech text-sm">{current.name}</strong>
                    <span className="mx-2">•</span>
                    <span>{current.role}</span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EF] border border-[#DCE7F2] text-[#147A43] font-semibold">
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
                      ? 'w-6 bg-[#123A70]' 
                      : 'w-2 bg-[#DCE7F2] hover:bg-[#123A70]/40'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2937]/60 backdrop-blur-sm animate-fadeIn">
            <div 
              className="relative w-full max-w-md rounded-2xl bg-white border border-[#DCE7F2] p-6 shadow-xl text-[#1F2937]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#64748B] hover:text-[#1F2937] p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-[#1F2937] font-tech mb-1">
                Add Client Feedback
              </h3>
              <p className="text-xs text-[#4B5563] mb-4">
                Enter your experience with Shamim Tech Solution CCTV & Security installation.
              </p>

              <form onSubmit={handleAddReview} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#1F2937] font-bold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Md. Shahidul Islam"
                    className="w-full bg-[#F7FAFC] rounded-xl px-3 py-2 border border-[#DCE7F2] text-[#1F2937] placeholder-[#64748B] focus:border-[#123A70] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1F2937] font-bold mb-1">Role / Area</label>
                  <input
                    type="text"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="e.g. Shop Owner, Rangpur"
                    className="w-full bg-[#F7FAFC] rounded-xl px-3 py-2 border border-[#DCE7F2] text-[#1F2937] placeholder-[#64748B] focus:border-[#123A70] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1F2937] font-bold mb-1">Star Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-[#F7FAFC] rounded-xl px-3 py-2 border border-[#DCE7F2] text-[#1F2937] focus:border-[#123A70] focus:outline-none cursor-pointer"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 - Good)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1F2937] font-bold mb-1">Review Comment *</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe how the installation went, video clarity, remote view, cable fitting..."
                    className="w-full bg-[#F7FAFC] rounded-xl px-3 py-2 border border-[#DCE7F2] text-[#1F2937] placeholder-[#64748B] focus:border-[#123A70] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold cursor-pointer shadow-xs"
                  >
                    Save Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2.5 px-4 rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] border border-[#DCE7F2] text-[#1F2937] cursor-pointer"
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
