"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Heart, MessageCircle } from "lucide-react";

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const sampleWishes: Wish[] = [
  {
    id: 1,
    name: "Pastor & Mrs. Johnson",
    message: "May the Lord bless your new journey with joy, peace, and everlasting love as you prepare to welcome your little one. Congratulations!",
    timestamp: new Date("2026-01-15"),
  },
  {
    id: 2,
    name: "The Adeyemi Family",
    message: "Wishing Victor and Whitney a lifetime of happiness and beautiful memories with your bundle of joy. We can't wait to celebrate the reveal with you!",
    timestamp: new Date("2026-01-20"),
  },
  {
    id: 3,
    name: "Uncle & Aunty Chukwu",
    message: "Victor and Whitney, your story is so beautiful! May this new chapter of parenthood be filled with laughter and prosperity. God bless your growing family!",
    timestamp: new Date("2026-01-25"),
  },
];

function WishCard({ wish }: { wish: Wish }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC4899] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{wish.name}</h4>
          <p className="text-gray-600 mt-2">{wish.message}</p>
        </div>
      </div>
    </div>
  );
}

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(sampleWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="wishes" className="py-20 bg-[#FFFDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[#EC4899] mb-4">
            Send Your Wishes
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600">
            Share your love and blessings with Victor & Whitney as they embark on this new chapter. Your kind words mean
            the world to us!
          </p>
        </div>

        <div
          ref={sectionRef}
          className="opacity-0 grid lg:grid-cols-2 gap-12"
        >
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-[#EC4899]" />
              <h3 className="font-semibold text-xl">Leave a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EC4899] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EC4899] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your wishes for Victor & Whitney..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-[#EC4899] to-[#3B82F6] text-white rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Wishes
                  </>
                )}
              </button>

              {showSuccess && (
                <div className="text-center text-green-600 font-medium animate-fade-in">
                  Thank you for your wishes! 💕
                </div>
              )}
            </form>
          </div>

          {/* Wishes List */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#3B82F6]" />
              Messages from Loved Ones
            </h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {wishes.map((wish) => (
                <WishCard key={wish.id} wish={wish} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
