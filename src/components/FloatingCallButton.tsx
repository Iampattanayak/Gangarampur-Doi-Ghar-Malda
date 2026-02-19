import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton: React.FC = () => {
  return (
    <motion.div className="fixed bottom-6 right-6 md:hidden z-50">
      {/* Pulsing ring effect behind */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
        }}
        animate={{ 
          scale: [1, 1.5],
          opacity: [0.4, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeOut",
        }}
      />
      
      <motion.a
        href="tel:9932552763"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
        whileHover={{ 
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-white text-white p-6 rounded-full border-4 border-white min-h-[80px] min-w-[80px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
          boxShadow: '0 8px 32px rgba(230, 57, 70, 0.7), 0 0 60px rgba(230, 57, 70, 0.4)'
        }}
        aria-label="Call Now"
      >
        <Phone className="w-9 h-9" strokeWidth={3} />
      </motion.a>
    </motion.div>
  );
};

export default React.memo(FloatingCallButton);
