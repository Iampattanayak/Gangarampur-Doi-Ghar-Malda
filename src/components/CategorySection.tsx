import React from 'react';
import { Product } from '../data/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import chocolateSilk from '../assets/chocolate-silk.jpg';
import beveragesImg from '../assets/Beverages.png';
import iceCreamsImg from '../assets/Icecreams.png';

interface CategorySectionProps {
  title: string;
  emoji: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  emoji,
  products,
  onProductClick,
}) => {
  if (products.length === 0) return null;

  // Determine gradient colors based on category
  const getCategoryTheme = (categoryTitle: string) => {
    switch (categoryTitle.toLowerCase()) {
      case 'ice creams':
        return {
          gradient: 'from-blue-50 via-cyan-50 to-sky-50',
          iconBg: 'from-cyan-500 to-blue-600',
          iconBorder: 'border-cyan-200',
          accentColor: 'text-cyan-600',
          badgeBg: 'from-cyan-100 to-blue-100',
          badgeText: 'text-cyan-700',
          glowColor: 'shadow-cyan-500/20'
        };
      case 'chocolates':
        return {
          gradient: 'from-amber-50 via-orange-50 to-yellow-50',
          iconBg: 'from-amber-600 to-orange-700',
          iconBorder: 'border-amber-200',
          accentColor: 'text-amber-700',
          badgeBg: 'from-amber-100 to-orange-100',
          badgeText: 'text-amber-800',
          glowColor: 'shadow-amber-500/20'
        };
      case 'beverages':
        return {
          gradient: 'from-green-50 via-emerald-50 to-teal-50',
          iconBg: 'from-emerald-500 to-green-600',
          iconBorder: 'border-emerald-200',
          accentColor: 'text-emerald-600',
          badgeBg: 'from-emerald-100 to-green-100',
          badgeText: 'text-emerald-700',
          glowColor: 'shadow-emerald-500/20'
        };
      default:
        return {
          gradient: 'from-gray-50 to-white',
          iconBg: 'from-brand-600 to-brand-500',
          iconBorder: 'border-brand-200',
          accentColor: 'text-brand-600',
          badgeBg: 'from-brand-100 to-accent-100',
          badgeText: 'text-brand-700',
          glowColor: 'shadow-brand-500/20'
        };
    }
  };

  const theme = getCategoryTheme(title);
  const totalProducts = products.length;

  const isChocolateSection = title.toLowerCase() === 'chocolates';
  const isBeveragesSection = title.toLowerCase() === 'beverages';
  const isIceCreamSection = title.toLowerCase() === 'ice creams';

  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')} className={`py-12 sm:py-16 bg-gradient-to-b ${theme.gradient} border-t-4 border-gray-100 relative overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-br ${theme.iconBg} rounded-full blur-2xl`}></div>
        <div className={`absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr ${theme.iconBg} rounded-full blur-2xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div 
              className={`p-3 sm:p-4 bg-gradient-to-br ${theme.iconBg} rounded-2xl shadow-strong border-2 ${theme.iconBorder} ${theme.glowColor} ${isChocolateSection || isBeveragesSection || isIceCreamSection ? 'bg-white' : ''}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {isChocolateSection ? (
                <img 
                  src={chocolateSilk} 
                  alt="Chocolates" 
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : isBeveragesSection ? (
                <img 
                  src={beveragesImg} 
                  alt="Beverages" 
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : isIceCreamSection ? (
                <img 
                  src={iceCreamsImg} 
                  alt="Ice Creams" 
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="text-4xl sm:text-5xl">{emoji}</span>
              )}
            </motion.div>
            <div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight`}>
                {title}
              </h2>
              <motion.div 
                className={`inline-flex items-center gap-2 mt-1 px-3 py-1 bg-gradient-to-r ${theme.badgeBg} rounded-full border border-${theme.iconBorder}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, type: 'spring', stiffness: 300 }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme.iconBg} animate-pulse`}></div>
                <span className={`text-xs sm:text-sm font-bold ${theme.badgeText}`}>
                  {totalProducts} Options Available
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.12, 
                delay: index * 0.003,
                ease: 'easeOut'
              }}
            >
              <ProductCard
                product={product}
                onClick={() => onProductClick(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
