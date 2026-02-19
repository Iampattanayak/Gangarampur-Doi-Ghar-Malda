import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Award, Clock, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [product1, product2, product3];
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <motion.section 
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden min-h-[650px] md:min-h-[750px]"
    >
      {/* Elegant Image Carousel with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: imageY }} className="w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smoothness
              }}
              className="absolute inset-0"
            >
              <div 
                className="w-full h-full bg-cover bg-center transform scale-110"
                style={{
                  backgroundImage: `url(${carouselImages[currentSlide]})`,
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Professional Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/80" 
             style={{
               background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)'
             }}
        />
        
        {/* Subtle gradient for brand color */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-transparent to-amber-900/20" />
        
        {/* Bottom strong fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Modern Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 bg-white' 
                : 'w-8 bg-white/40 group-hover:bg-white/60'
            }`} />
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 h-1 bg-white rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: contentY }}
        className="max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-20"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo with Enhanced Presence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-brand-500/30 to-amber-500/30 scale-150" />
              <img 
                src={logo} 
                alt="Gangarampur Doi Ghar" 
                className="relative h-36 sm:h-44 md:h-52 lg:h-60 w-auto drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Main Heading - Clean Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-[1.1]"
          >
            <span className="block text-white tracking-tight mb-3">
              গঙ্গারামপুর
            </span>
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
              দই ঘর
            </span>
          </motion.h1>
          
          {/* Tagline with Better Spacing */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl lg:text-3xl mb-12 text-white/90 font-semibold tracking-wide"
          >
            Traditional Taste & Timeless Quality
          </motion.p>

          {/* Premium Feature Cards - Glass Morphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <motion.div 
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group w-full sm:w-auto"
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
              
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-yellow-400/0 group-hover:from-amber-400/20 group-hover:to-yellow-400/20 rounded-2xl transition-all duration-500 blur-xl" />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="font-black text-lg text-white">Premium Quality</div>
                  <div className="text-sm text-white/70 font-medium">Certified Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group w-full sm:w-auto"
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
              
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-green-400/0 group-hover:from-emerald-400/20 group-hover:to-green-400/20 rounded-2xl transition-all duration-500 blur-xl" />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="font-black text-lg text-white">Fresh Daily</div>
                  <div className="text-sm text-white/70 font-medium">Made Every Morning</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons - Modern & Bold */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-2xl mx-auto"
          >
            <motion.a
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9932552763"
              className="group relative flex-1 sm:flex-initial overflow-hidden rounded-2xl"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600" 
                   style={{ backgroundSize: '200% 100%' }} 
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3 px-8 py-6 text-white font-black text-lg">
                <Phone className="w-6 h-6" strokeWidth={3} />
                <span>Call to Order</span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 sm:flex-initial rounded-2xl"
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl" />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-2xl transition-all duration-300" />
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3 px-8 py-6 text-white font-black text-lg">
                <MapPin className="w-6 h-6" strokeWidth={3} />
                <span>View Location</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Smooth Bottom Transition */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;
