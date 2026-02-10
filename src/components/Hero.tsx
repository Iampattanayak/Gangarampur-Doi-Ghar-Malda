import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <motion.section 
      className="relative bg-gradient-to-br from-brand-50 via-accent-50 to-orange-50 overflow-hidden"
    >
      {/* Simplified animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-200/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fadeIn">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Gangarampur Doi Ghar" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-2xl"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
            <span className="block text-brand-600 mb-2">
              গঙ্গারামপুর
            </span>
            <span className="block text-amber-600">
              দই ঘর
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-base md:text-2xl mb-6 text-gray-700 font-bold px-4">
            Traditional Taste & Timeless Quality
          </p>

          {/* Features */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-8 px-4">
            <div className="group relative overflow-hidden flex-1 transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-amber-50 to-yellow-50 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-medium border-2 border-amber-200 justify-center group-hover:border-amber-300 transition-all duration-200">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg sm:rounded-xl shadow-soft flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <span className="font-black text-xs sm:text-base text-gray-900 block leading-tight">Premium Quality</span>
                  <span className="text-[10px] sm:text-xs text-amber-700 font-semibold hidden sm:block">Certified Excellence</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden flex-1 transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-emerald-50 to-green-50 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-medium border-2 border-emerald-200 justify-center group-hover:border-emerald-300 transition-all duration-200">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg sm:rounded-xl shadow-soft flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <span className="font-black text-xs sm:text-base text-gray-900 block leading-tight">Fresh Daily</span>
                  <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold hidden sm:block">Made Every Morning</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 flex flex-row gap-2 sm:gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9475711559"
              className="flex items-center justify-center gap-2 bg-brand-600 text-white px-4 sm:px-8 py-5 sm:py-6 rounded-2xl font-black text-sm sm:text-xl shadow-glow hover:shadow-strong transition-all duration-300 border-4 border-brand-800 flex-1"
              style={{
                background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
                boxShadow: '0 0 40px rgba(230, 57, 70, 0.5), 0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              <Phone className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={3} />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-brand-600 px-4 sm:px-8 py-5 rounded-2xl font-black text-sm sm:text-lg shadow-medium hover:shadow-strong transition-all duration-300 border-3 border-brand-200 flex-1"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              <span>Location</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </motion.section>
  );
};

export default Hero;
