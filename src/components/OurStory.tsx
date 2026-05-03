"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Countdown from "./Countdown";

interface StoryCard {
  id: number;
  title: string;
  content: string;
  signOff: string;
  signature: string;
  imagePosition: "left" | "right";
  image?: string;
  showCountdown?: boolean;
}

const storyCards: StoryCard[] = [
  {
    id: 1,
    title: "A New Adventure Begins",
    content: `Life has a beautiful way of surprising us with the most wonderful gifts. We are beyond thrilled to share that our family is growing! This journey has already brought us so much joy, and we can't wait to see what the future holds.

From the first moment we saw that tiny heartbeat, we knew our lives were changed forever. We are so excited to embark on this incredible path of parenthood and to share this special chapter with all of you.`,
    signOff: "With so much joy,",
    signature: "Victor & Whitney ❤️",
    imagePosition: "left",
    image: "/new_adventure.png",
  },
  {
    id: 2,
    title: "Counting Down the Days",
    content: `Every day brings us closer to meeting our little one, and the anticipation is more than we can put into words. We've been busy dreaming of tiny toes, sweet lullabies, and the many firsts that await us.

This season of waiting has been filled with reflection, love, and a deep sense of gratitude. We are so blessed to have a community of family and friends who will be part of our child's life, teaching them, loving them, and watching them grow.`,
    signOff: "Can't wait to meet you,",
    signature: "Mom & Dad 🧡",
    imagePosition: "right",
    showCountdown: true,
  },
  {
    id: 3,
    title: "The Big Reveal",
    content: `The secret is out—there's a baby on the way! But there's still one big question left to answer... Will it be pink or will it be blue?

We invite you to join us for this special moment as we reveal the gender of our little bundle of joy. Your love and support have always been the foundation of our story, and we couldn't imagine celebrating this milestone without you.

Get ready for some surprises, some cheers, and a whole lot of love!`,
    signOff: "With love,",
    signature: "Victor & Whitney 🤍❤️",
    imagePosition: "left",
    image: "/big_reveal.png",
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
  const hasImage = !!card.image;

  return (
    <div
      ref={cardRef}
      className={`opacity-0 flex flex-col ${
        hasImage 
          ? (isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse") 
          : "items-center text-center"
      } gap-8 lg:gap-12 items-center mb-16 lg:mb-24`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Image with gradient frame - square postcard style */}
      {hasImage && (
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#EC4899] to-[#3B82F6] p-3 md:p-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={card.image!}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      )}

      {/* Text Content */}
      <div className={hasImage ? "w-full lg:w-1/2" : "w-full max-w-3xl"}>
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border border-[#D4AF37]/20">
          <h3 className="font-script text-3xl md:text-4xl text-[#EC4899] mb-6">
            {card.title}
          </h3>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {card.content}
          </div>
          
          {card.showCountdown && (
            <div className="mb-8">
              <p className="text-center text-sm uppercase tracking-widest text-[#D4AF37] font-bold mb-2">Countdown to Reveal</p>
              <Countdown targetDate="2026-05-23T12:00:00" />
            </div>
          )}

          <div className={hasImage ? "text-right" : "text-center mt-6"}>
            <p className="text-gray-600 italic mb-2">{card.signOff}</p>
            <p className="font-script text-2xl text-[#3B82F6]">{card.signature}</p>
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
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[#EC4899] mb-4">
            We&apos;re Expecting!
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
