import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-50 via-accent-50 to-orange-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={logo} 
              alt="Gangarampur Doi Ghar" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-lg"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
          >
            <span className="block text-brand-600 mb-2">
              গঙ্গারামপুর
            </span>
            <span className="block text-accent-600">
              দই ঘর
            </span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl mb-12 text-gray-700 font-semibold"
          >
            Traditional Taste & Timeless Quality
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 gap-3 sm:gap-6 mb-12 max-w-2xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border-2 border-brand-100"
            >
              <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <span className="font-bold text-sm sm:text-lg text-gray-900 block leading-tight">Premium Quality</span>
                <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">Certified Excellence</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border-2 border-brand-100"
            >
              <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <span className="font-bold text-sm sm:text-lg text-gray-900 block leading-tight">Fresh Daily</span>
                <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">Made Every Morning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-row gap-3 sm:gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9932552763"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg shadow-xl transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Call to Order</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 text-brand-600 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg shadow-xl transition-colors border-2 border-brand-200"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Visit Us</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
