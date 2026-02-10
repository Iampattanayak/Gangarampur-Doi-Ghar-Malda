import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../data/products';
import { getProductImage } from '../data/productImages';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductResult: React.FC<{ product: Product; index: number; onClick: () => void }> = ({ product, index, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const productImage = getProductImage(product.id, product.category);

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.02, duration: 0.15 }}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      className="w-full p-5 sm:p-6 hover:bg-gray-50 rounded-2xl transition-all duration-150 flex items-center gap-5 text-left border-2 border-gray-200 hover:border-brand-300 hover:shadow-medium min-h-[80px]"
    >
      <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center overflow-hidden">
        {productImage && !imageError ? (
          <img 
            src={productImage} 
            alt={product.name}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
            loading="eager"
            decoding="async"
          />
        ) : (
          <div className="text-4xl">
            {product.category === 'signature' && product.name.includes('Doi') && '🥣'}
            {product.category === 'signature' && product.name.includes('Ghee') && '🧈'}
            {product.category === 'signature' && product.name.includes('Para') && '🥮'}
            {product.category === 'ice_cream' && '🍦'}
            {product.category === 'chocolates' && '🍫'}
            {product.category === 'beverages' && '🥤'}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-emerald-600 font-bold">{product.price}</p>
      </div>
    </motion.button>
  );
};

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onProductClick,
}) => {
  const [query, setQuery] = useState('');

  const filteredProducts = query.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col p-4" onClick={onClose}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white mt-20 rounded-3xl shadow-strong max-w-2xl w-full mx-auto overflow-hidden border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="p-6 border-b border-gray-200 flex items-center gap-4 bg-white">
            <Search className="w-6 h-6 text-brand-600" />
            <input
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="flex-1 outline-none text-lg font-medium placeholder:text-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-xl transition-all border-2 border-gray-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-auto p-6">
            {query.trim() === '' ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg font-medium">Start typing to search...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😕</div>
                <p className="text-gray-500 text-lg font-medium">No products found for "{query}"</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredProducts.map((product, index) => (
                  <ProductResult
                    key={product.id}
                    product={product}
                    index={index}
                    onClick={() => {
                      onProductClick(product);
                      onClose();
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
