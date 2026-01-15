"use client";

import { useState, useEffect } from "react";
import { Menu, X, Gift } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#gifts", label: "Gifting" },
  { href: "#wishes", label: "Wishes" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-script text-2xl md:text-3xl text-white hover:text-[#D4AF37] transition-colors"
          >
            Our Fairytale Wedding
          </a>

          {/* Center Text - Hidden on mobile */}
          <div className="hidden md:block font-script text-xl lg:text-2xl text-white">
            Grace & David
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-sm font-medium hover:text-[#D4AF37] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-sm px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-white text-lg font-medium hover:text-[#D4AF37] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>

      {/* Sticky Gift Button */}
      <a
        href="#gifts"
        onClick={(e) => handleNavClick(e, "#gifts")}
        className="fixed top-20 md:top-24 right-4 z-40 flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black rounded-full shadow-lg hover:bg-[#CC5500] hover:text-white transition-all duration-300 animate-pulse-slow hover:animate-none hover:scale-105"
      >
        <Gift className="w-4 h-4" />
        <span className="font-medium text-sm">Bless Our Union</span>
      </a>
    </>
  );
}
