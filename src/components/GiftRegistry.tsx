"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, X } from "lucide-react";
import Image from "next/image";
import { gifts, Gift } from "@/lib/gifts";

function GiftCard({ gift, index }: { gift: Gift; index: number }) {
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className={`opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 ${
          gift.featured ? "ring-2 ring-[#D4AF37]" : ""
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {gift.featured && (
          <div className="bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1 text-center">
            Featured Gift
          </div>
        )}
        {/* Image */}
        <div className="aspect-square relative">
          <Image
            src={gift.image}
            alt={gift.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {gift.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {gift.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#CC5500] font-semibold">{gift.price}</span>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-[#722F37] text-white text-sm rounded-full hover:bg-[#CC5500] transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Gift This
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#722F37] to-[#CC5500] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-script text-2xl text-[#722F37] mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-4">
                You&apos;ve selected <strong>{gift.name}</strong> ({gift.price})
              </p>
              <p className="text-gray-600 mb-4">
                Please send your gift to the account below:
              </p>

              {/* Bank Details */}
              <div className="bg-[#FAF9F6] rounded-lg p-4 mb-6 text-left">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Bank</p>
                    <p className="font-semibold text-gray-900">Opay</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Account Number</p>
                    <p className="font-semibold text-gray-900 text-lg">8132793301</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Account Name</p>
                    <p className="font-semibold text-gray-900">Grace Emeh</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                We truly appreciate your generosity!
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-[#722F37] text-white rounded-full hover:bg-[#CC5500] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function GiftRegistry() {
  return (
    <section id="gifts" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[#722F37] mb-4">
            Wedding Gifts
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600">
            Your presence is the greatest gift, but if you love love and you love US then you&apos;d get us an amazing gift by contributing to our new journey together, here are some items that would mean the
            world to us.
          </p>
        </div>

        {/* Gifts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gifts.map((gift, index) => (
            <GiftCard key={gift.id} gift={gift} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
