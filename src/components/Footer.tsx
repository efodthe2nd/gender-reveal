"use client";

import { Heart, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="font-script text-4xl md:text-5xl mb-4">
            David & Grace
          </h2>
          <p className="text-[#D4AF37] text-lg mb-2">#GraceOfDavid</p>
          <p className="text-gray-400">14th February 2026 • Lagos, Nigeria</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-8" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CC5500] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CC5500] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:davidandgrace2026@email.com"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CC5500] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-[#D4AF37] transition-colors">
            Home
          </a>
          <a href="#story" className="hover:text-[#D4AF37] transition-colors">
            Our Story
          </a>
          <a href="#details" className="hover:text-[#D4AF37] transition-colors">
            Details
          </a>
          <a href="#gifts" className="hover:text-[#D4AF37] transition-colors">
            Gifting
          </a>
          <a href="#wishes" className="hover:text-[#D4AF37] transition-colors">
            Wishes
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#CC5500]" /> for David & Grace
          </p>
          <p className="mt-2">© {currentYear} #GraceOfDavid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
