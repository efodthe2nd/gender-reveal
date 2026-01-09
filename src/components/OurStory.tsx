"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface StoryCard {
  id: number;
  title: string;
  content: string;
  signOff: string;
  signature: string;
  imagePosition: "left" | "right";
  image: string;
}

const storyCards: StoryCard[] = [
  {
    id: 1,
    title: "Dear Grace",
    content: `From the moment you said 'yes,' my world has been brighter. You've filled my days with laughter, peace, and a kind of love I never knew I was missing. You are my answered prayer, my muse, my calm after every storm.

You make everything, both the ordinary and the wild, feel beautiful. I still can't believe I get to love you, to do life with you, and to call you mine.`,
    signOff: "Forever yours,",
    signature: "David 🖤",
    imagePosition: "left",
    image: "/david_personal.jpg",
  },
  {
    id: 2,
    title: "Dear David",
    content: `From the first time we met to forever, I still can't believe how love snuck up on us and turned into this beautiful story we're living. I can't wait to hold your hand, laugh till it hurts, and dance with you all night.

You're my calm, my laughter, my person, my favorite human in the whole wide world. Here's to a love that's real, steady, and worth more than anything money could ever buy. 🥂`,
    signOff: "With all my love,",
    signature: "Grace 🧡",
    imagePosition: "right",
    image: "/grace_personal.jpg",
  },
  {
    id: 3,
    title: "To Our Family and Friends",
    content: `We're tying the knot and turning up the joy! 💍✨ Thank you for being part of our story.

Your love, support, and friendship mean the world to us, and we can't wait to celebrate this new chapter with you.

Now bring your smiles, dance moves and vibes as we say 'I do' and step into forever together. We can't wait to see you there.`,
    signOff: "With love,",
    signature: "David & Grace 🤍🖤",
    imagePosition: "left",
    image: "/we.jpg",
  },
];

function StoryCardComponent({ card, index }: { card: StoryCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isImageLeft = card.imagePosition === "left";

  return (
    <div
      ref={cardRef}
      className={`opacity-0 flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center mb-16 lg:mb-24`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Decorative border */}
          <div className="absolute inset-4 border-2 border-[#D4AF37]/30 rounded pointer-events-none" />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border border-[#D4AF37]/20">
          <h3 className="font-script text-3xl md:text-4xl text-[#722F37] mb-6">
            {card.title}
          </h3>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {card.content}
          </div>
          <div className="text-right">
            <p className="text-gray-600 italic mb-2">{card.signOff}</p>
            <p className="font-script text-2xl text-[#CC5500]">{card.signature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section id="story" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[#722F37] mb-4">
            The Love Letter
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Story Cards */}
        <div className="space-y-8">
          {storyCards.map((card, index) => (
            <StoryCardComponent key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
