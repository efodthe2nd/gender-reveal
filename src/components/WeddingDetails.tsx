"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, Shirt } from "lucide-react";

interface DetailCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
}

const detailCards: DetailCard[] = [
  {
    id: 1,
    icon: <Calendar className="w-10 h-10 md:w-12 md:h-12" />,
    title: "When",
    content: (
      <>
        <p className="text-xl md:text-2xl font-semibold mb-2">Saturday,</p>
        <p className="text-2xl md:text-3xl font-script text-[#CC5500] mb-4">
          18th April 2026
        </p>
        <div className="text-gray-600">
          <p>Wedding Vows: 10:00 AM</p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    icon: <MapPin className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Where",
    content: (
      <>
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Lagos Presbyterian Church Of Nigeria
        </p>
        <p className="text-lg text-[#722F37] mb-2">Yaba Parish</p>
        <p className="text-gray-600 mb-4">
          394, Murtala Mohammed Way, Yaba, Lagos
        </p>
      </>
    ),
    action: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Presbyterian+Church+of+Nigeria+Yaba+394+Murtala+Mohammed+Way+Lagos",
    },
  },
  {
    id: 3,
    icon: <Shirt className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Dress Code",
    content: (
      <>
        <p className="text-xl md:text-2xl font-semibold mb-4">Formal Elegance</p>
        <p className="text-gray-600 mb-3">Kindly wear tones of...</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <span className="px-3 py-1 bg-white text-black border border-gray-300 rounded-full text-sm">
            White
          </span>
          <span className="px-3 py-1 bg-[#CC5500] text-white rounded-full text-sm">
            Burnt Orange
          </span>
          <span className="px-3 py-1 bg-[#722F37] text-white rounded-full text-sm">
            Wine
          </span>
          <span className="px-3 py-1 bg-[#D4AF37] text-black rounded-full text-sm">
            Gold
          </span>
        </div>
        <div className="text-sm text-gray-500 space-y-1">
          <p>Ladies: Gele or fascinators welcome</p>
          <p>Gentlemen: Traditional or suits</p>
        </div>
      </>
    ),
  },
];

function DetailCardComponent({ card, index }: { card: DetailCard; index: number }) {
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
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#722F37] to-[#CC5500] text-white mb-6">
        {card.icon}
      </div>
      <h3 className="font-script text-2xl md:text-3xl text-[#722F37] mb-4">
        {card.title}
      </h3>
      <div className="text-gray-700">{card.content}</div>
      {card.action && (
        <a
          href={card.action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-[#722F37] text-white rounded-full hover:bg-[#CC5500] transition-colors"
        >
          {card.action.label}
        </a>
      )}
    </div>
  );
}

export default function WeddingDetails() {
  return (
    <section id="details" className="py-20 bg-[#FFFDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[#722F37] mb-4">
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Detail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailCards.map((card, index) => (
            <DetailCardComponent key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
