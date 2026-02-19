import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    { src: product1, alt: 'Fresh Doi Products' },
    { src: product2, alt: 'Premium Ice Creams' },
    { src: product3, alt: 'Quality Sweets' }
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] md:min-h-[650px]">
          
          {/* Left Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 py-12 md:px-12 lg:pl-16 order-2 lg:order-1"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <img 
                src={logo} 
                alt="Gangarampur Doi Ghar" 
                className="h-24 md:h-32 w-auto drop-shadow-lg"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            >
              <span className="block text-brand-600 mb-2">
                গঙ্গারামপুর
              </span>
              <span className="block text-amber-600">
                দই ঘর
              </span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl mb-8 text-gray-700 font-semibold"
            >
              Traditional Taste & Timeless Quality
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-amber-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Premium Quality</div>
                  <div className="text-xs text-gray-600">Certified Products</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-emerald-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Fresh Daily</div>
                  <div className="text-xs text-gray-600">Made Every Morning</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:9932552763"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                <span>Call to Order</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.app.goo.gl/4sRwmzJjDPTh7r7N6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white border-2 border-brand-200 text-brand-600 px-6 py-4 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <MapPin className="w-5 h-5" strokeWidth={2.5} />
                <span>View Location</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image Carousel Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-6 py-12 md:px-12 lg:pr-16 order-1 lg:order-2"
          >
            {/* Carousel Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle bottom gradient for indicators visibility */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800 group-hover:text-brand-600" strokeWidth={3} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-brand-600" strokeWidth={3} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                {currentSlide + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-200 to-amber-200 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-2xl opacity-40 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
