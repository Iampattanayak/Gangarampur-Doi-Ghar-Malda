import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [product1, product2, product3];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <motion.section 
      className="relative bg-gradient-to-br from-brand-50 via-accent-50 to-orange-50 overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      {/* Advanced Image Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          {carouselImages.map((image, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1.05,
                }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ 
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 10, ease: "linear" }
                }}
                className="absolute inset-0"
              >
                {/* Image with Ken Burns effect */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    filter: 'blur(3px)',
                  }}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Multi-layer Overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/40 via-transparent to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/30 via-transparent to-accent-50/30" />
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2 bg-white shadow-lg' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo with enhanced shadow for visibility */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={logo} 
              alt="Gangarampur Doi Ghar" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(255,255,255,0.5))'
              }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>

          {/* Main Heading with text shadow for readability */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)' }}
          >
            <span className="block text-white mb-2 drop-shadow-lg">
              গঙ্গারামপুর
            </span>
            <span className="block text-amber-300 drop-shadow-lg">
              দই ঘর
            </span>
          </motion.h1>
          
          {/* Tagline with enhanced visibility */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base md:text-2xl mb-8 text-white font-bold px-4"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Traditional Taste & Timeless Quality
          </motion.p>

          {/* Features with glass morphism effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-8 px-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden flex-1 max-w-xs"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-md px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/50 justify-center group-hover:border-amber-300 transition-all duration-200">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg sm:rounded-xl shadow-soft flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <span className="font-black text-xs sm:text-base text-gray-900 block leading-tight">Premium Quality</span>
                  <span className="text-[10px] sm:text-xs text-amber-700 font-semibold hidden sm:block">Certified Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden flex-1 max-w-xs"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-md px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/50 justify-center group-hover:border-emerald-300 transition-all duration-200">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg sm:rounded-xl shadow-soft flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <span className="font-black text-xs sm:text-base text-gray-900 block leading-tight">Fresh Daily</span>
                  <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold hidden sm:block">Made Every Morning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="px-4 flex flex-row gap-2 sm:gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9932552763"
              className="flex items-center justify-center gap-2 text-white px-4 sm:px-8 py-5 sm:py-6 rounded-2xl font-black text-sm sm:text-xl shadow-2xl hover:shadow-glow transition-all duration-300 border-4 border-white/30 backdrop-blur-sm flex-1"
              style={{
                background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
                boxShadow: '0 0 60px rgba(230, 57, 70, 0.6), 0 12px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Phone className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={3} />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/95 backdrop-blur-md text-brand-600 px-4 sm:px-8 py-5 sm:py-6 rounded-2xl font-black text-sm sm:text-lg shadow-2xl hover:shadow-strong transition-all duration-300 border-4 border-brand-200/50 flex-1"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              <span>Location</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;
