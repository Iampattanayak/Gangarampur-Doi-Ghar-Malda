import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselImages = [product1, product2, product3];

  // Auto-advance carousel every 5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length, isPaused]);

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Elegant Image Carousel - Light Overlay Approach */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Product Image - Crisp and Clear */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${carouselImages[currentSlide]})`,
                backgroundPosition: 'center',
              }}
            />
            
            {/* Light Warm Overlay - Ensures readability without hiding products */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-orange-50/80 to-amber-50/85" />
            
            {/* Subtle vignette for depth */}
            <div 
              className="absolute inset-0" 
              style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.3) 100%)'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-[650px] md:min-h-[700px] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto w-full">
          
          {/* Frosted Glass Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative backdrop-blur-2xl bg-white/40 border border-white/60 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-400 rounded-tl-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400 rounded-br-3xl opacity-30" />
            
            <div className="text-center relative"
              
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <img 
                  src={logo} 
                  alt="Gangarampur Doi Ghar" 
                  className="h-28 sm:h-36 md:h-40 lg:h-48 w-auto drop-shadow-lg"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>

              {/* Bengali Brand Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 leading-tight"
              >
                <span className="block bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent mb-2">
                  গঙ্গারামপুর
                </span>
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  দই ঘর
                </span>
              </motion.h1>
              
              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-base sm:text-lg md:text-xl mb-8 text-gray-800 font-semibold"
              >
                Traditional Taste & Timeless Quality
              </motion.p>

              {/* Feature Pills - Inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-3 mb-8"
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-5 py-3 rounded-full shadow-md border border-amber-200">
                  <Award className="w-5 h-5 text-amber-700" strokeWidth={2.5} />
                  <span className="font-bold text-sm text-gray-800">Premium Quality</span>
                </div>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 px-5 py-3 rounded-full shadow-md border border-emerald-200">
                  <Clock className="w-5 h-5 text-emerald-700" strokeWidth={2.5} />
                  <span className="font-bold text-sm text-gray-800">Fresh Daily</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:9932552763"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  <span>Call to Order</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  <MapPin className="w-5 h-5" strokeWidth={2.5} />
                  <span>View Location</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Elegant Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/80">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-gradient-to-r from-brand-500 to-amber-500' 
                  : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
