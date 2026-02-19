import React from 'react';
import { Phone, MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2 sm:gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <img src={logo} alt="Gangarampur Doi Ghar" className="h-12 sm:h-14 md:h-16 w-auto" />
          <div>
            <div className="font-black text-lg sm:text-xl md:text-2xl text-brand-600">
              Gangarampur Doi Ghar
            </div>
            <div className="text-xs text-gray-600 font-bold">গঙ্গারামপুর দই ঘর</div>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSearchClick}
            className="p-3 sm:p-3.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 border-2 border-gray-300 shadow-soft min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" strokeWidth={2.5} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:9932552763"
            className="hidden md:flex items-center gap-2.5 bg-brand-600 text-white px-6 py-4 rounded-xl font-black hover:shadow-strong transition-all duration-200 border-2 border-brand-800 text-base"
            style={{
              background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
              boxShadow: '0 0 24px rgba(230, 57, 70, 0.4), 0 4px 16px rgba(0, 0, 0, 0.15)'
            }}
          >
            <Phone className="w-5 h-5" strokeWidth={3} />
            <span>Call to Order</span>
          </motion.a>
        </div>
      </div>

      {/* Store Status */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-2.5 text-sm">
          <motion.div 
            className="w-2 h-2 bg-emerald-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-emerald-800 font-semibold">Open Now</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600 font-medium">9:00 AM - 10:00 PM</span>
        </div>
      </div>
    </motion.header>
  );
};

export default React.memo(Header);
