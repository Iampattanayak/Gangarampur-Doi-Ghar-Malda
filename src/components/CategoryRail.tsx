import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import chocolateSilk from '../assets/chocolate-silk.jpg';
import beveragesImg from '../assets/Beverages.png';
import iceCreamsImg from '../assets/Icecreams.png';

interface CategoryRailProps {
  categories: { id: string; label: string; emoji: string }[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryRail: React.FC<CategoryRailProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  const railRef = useRef<HTMLDivElement>(null);

  // Get category-specific theme colors
  const getCategoryTheme = (categoryId: string) => {
    switch (categoryId) {
      case 'bestsellers':
        return {
          activeBg: 'bg-gradient-to-br from-red-100 via-orange-100 to-amber-100',
          activeText: 'text-red-700',
          activeBorder: 'border-red-300',
          activeGlow: 'shadow-red-200/50',
          inactiveBg: 'bg-white',
          inactiveText: 'text-gray-700',
          inactiveBorder: 'border-gray-200'
        };
      case 'ice_cream':
        return {
          activeBg: 'bg-gradient-to-br from-cyan-100 via-blue-100 to-sky-100',
          activeText: 'text-cyan-700',
          activeBorder: 'border-cyan-300',
          activeGlow: 'shadow-cyan-200/50',
          inactiveBg: 'bg-white',
          inactiveText: 'text-gray-700',
          inactiveBorder: 'border-gray-200'
        };
      case 'chocolates':
        return {
          activeBg: 'bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100',
          activeText: 'text-amber-700',
          activeBorder: 'border-amber-300',
          activeGlow: 'shadow-amber-200/50',
          inactiveBg: 'bg-white',
          inactiveText: 'text-gray-700',
          inactiveBorder: 'border-gray-200'
        };
      case 'beverages':
        return {
          activeBg: 'bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100',
          activeText: 'text-emerald-700',
          activeBorder: 'border-emerald-300',
          activeGlow: 'shadow-emerald-200/50',
          inactiveBg: 'bg-white',
          inactiveText: 'text-gray-700',
          inactiveBorder: 'border-gray-200'
        };
      default:
        return {
          activeBg: 'bg-brand-50',
          activeText: 'text-brand-700',
          activeBorder: 'border-brand-300',
          activeGlow: 'shadow-brand-200/50',
          inactiveBg: 'bg-white',
          inactiveText: 'text-gray-700',
          inactiveBorder: 'border-gray-200'
        };
    }
  };

  return (
    <div className="sticky top-[120px] md:top-[128px] z-40 bg-white border-b-2 border-gray-200 shadow-md -mt-[1px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div
          ref={railRef}
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide py-3 sm:py-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => {
            const theme = getCategoryTheme(category.id);
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryClick(category.id)}
                className={`
                  flex-shrink-0 snap-center relative
                  flex flex-col items-center justify-center gap-1.5 
                  px-5 py-3 sm:px-6 sm:py-3.5
                  rounded-2xl font-black whitespace-nowrap 
                  transition-all duration-200
                  min-w-[95px] sm:min-w-[110px] min-h-[76px] sm:min-h-[82px]
                  border-2
                  ${
                    isActive
                      ? `${theme.activeBg} ${theme.activeText} ${theme.activeBorder} shadow-lg ${theme.activeGlow} scale-105`
                      : `${theme.inactiveBg} ${theme.inactiveText} ${theme.inactiveBorder} hover:shadow-md hover:border-gray-300`
                  }
                `}
              >
                {/* Active Indicator - Top border glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -top-[2px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Emoji/Image with animation */}
                <motion.div
                  className="text-4xl sm:text-[2.75rem] leading-none flex items-center justify-center"
                  animate={isActive ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {category.id === 'chocolates' ? (
                    <img 
                      src={chocolateSilk} 
                      alt="Chocolates" 
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      loading="lazy"
                    />
                  ) : category.id === 'beverages' ? (
                    <img 
                      src={beveragesImg} 
                      alt="Beverages" 
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      loading="lazy"
                    />
                  ) : category.id === 'ice_cream' ? (
                    <img 
                      src={iceCreamsImg} 
                      alt="Ice Creams" 
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span>{category.emoji}</span>
                  )}
                </motion.div>
                
                {/* Label */}
                <span className="text-[11px] sm:text-xs leading-tight font-black tracking-wide">
                  {category.label}
                </span>

                {/* Active dot indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${theme.activeBg.replace('bg-gradient-to-br', 'bg-current')}`}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Scroll indicator for mobile */}
        <div className="flex sm:hidden justify-center pb-2">
          <div className="flex gap-1">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`h-1 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'w-6 bg-brand-600'
                    : 'w-1 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryRail);
