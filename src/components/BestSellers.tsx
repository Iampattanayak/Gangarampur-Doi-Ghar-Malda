import React, { useRef } from 'react';
import { Product } from '../data/products';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface BestSellersProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ products, onProductClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const totalProducts = products.length;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-red-50 via-orange-50 to-amber-50 border-t-4 border-red-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-400 via-orange-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-400 via-red-400 to-orange-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Fire Particles Effect - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: '100%',
              opacity: 0.3
            }}
            animate={{ 
              y: '-20%',
              opacity: [0.3, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          >
            🔥
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-auto"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div 
                className="p-3 sm:p-4 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 rounded-2xl shadow-strong border-2 border-red-200 shadow-red-500/30 relative"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.2 }}
              >
                <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-yellow-400/50 to-transparent rounded-2xl"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Best Sellers
                </h2>
                <motion.div 
                  className="inline-flex items-center gap-2 mt-1 px-3 py-1 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 rounded-full border border-red-200"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 250 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs sm:text-sm font-bold text-red-700">
                    {totalProducts} Hot Favorites
                  </span>
                </motion.div>
              </div>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm font-bold ml-0 sm:ml-[4.5rem] mt-1.5 sm:mt-1">
              🥣 Our signature Doi & Ghee collection
            </p>
          </motion.div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden sm:flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              className="p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-red-200 rounded-xl hover:border-red-300 hover:shadow-medium transition-all duration-200 shadow-soft min-h-[52px] min-w-[52px] flex items-center justify-center group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-red-600 group-hover:text-red-700" strokeWidth={3} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              className="p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-red-200 rounded-xl hover:border-red-300 hover:shadow-medium transition-all duration-200 shadow-soft min-h-[52px] min-w-[52px] flex items-center justify-center group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-red-600 group-hover:text-red-700" strokeWidth={3} />
            </motion.button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.15, 
                delay: index * 0.01,
                ease: 'easeOut'
              }}
              className="flex-shrink-0 w-[44%] min-w-[160px] sm:w-48 md:w-52 snap-start"
            >
              <ProductCard product={product} onClick={() => onProductClick(product)} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <motion.div 
          className="flex sm:hidden justify-center mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 rounded-full border border-red-200 shadow-soft">
            <p className="text-xs text-red-700 font-semibold flex items-center gap-1.5">
              <ChevronLeft className="w-3.5 h-3.5" />
              Swipe to see more
              <ChevronRight className="w-3.5 h-3.5" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;
