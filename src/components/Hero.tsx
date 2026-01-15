"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    gradient: "gradient-hero-1",
    subtitle: "Our Forever Begins",
    video: "/hero-bg-video.mp4",
  },
  {
    id: 2,
    gradient: "gradient-hero-2",
    subtitle: "Save the Date",
    video: "/grok-video-swirl.mp4",
    blur: true,
  },
  {
    id: 3,
    gradient: "gradient-hero-3",
    subtitle: "#TheFairyTale",
    video: "/hero-run.mp4",
    blur: true,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${!slide.video ? slide.gradient : ""}`}
        >
          {/* Video Background */}
          {slide.video && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover ${slide.blur ? "blur-sm scale-105" : ""}`}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="animate-fade-in">
          <p className="text-lg md:text-xl mb-4 tracking-widest uppercase opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-lg">
            Grace & David
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4">
            We&apos;re Getting Married!
          </p>
          <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl font-light tracking-wider">
            <span>18</span>
            <span className="text-[#D4AF37]">•</span>
            <span>04</span>
            <span className="text-[#D4AF37]">•</span>
            <span>2026</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse-slow" />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#D4AF37] w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
