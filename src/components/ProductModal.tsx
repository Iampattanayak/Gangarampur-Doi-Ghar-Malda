import React from 'react';
import { Product } from '../data/products';
import { X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductImage } from '../data/productImages';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(0);
  const [imageError, setImageError] = React.useState(false);

  if (!product) return null;

  const currentPrice = product.sizeVariants
    ? product.sizeVariants[selectedVariant].price
    : product.price;

  const currentSize = product.sizeVariants
    ? product.sizeVariants[selectedVariant].size
    : null;

  const productImage = getProductImage(product.id, product.category);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ y: '100%', opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: '100%', opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 30, stiffness: 400, duration: 0.3 }}
          className="relative bg-white rounded-t-3xl md:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-strong"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-3.5 bg-white border-2 border-gray-300 hover:bg-gray-50 rounded-full transition-all z-10 shadow-medium min-h-[52px] min-w-[52px] flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </motion.button>

          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
            {productImage && !imageError ? (
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-contain relative z-10 filter drop-shadow-xl"
                onError={() => setImageError(true)}
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className="text-9xl relative z-10 filter drop-shadow-xl">
                {product.category === 'signature' && product.name.includes('Doi') && '🥣'}
                {product.category === 'signature' && product.name.includes('Ghee') && '🧈'}
                {product.category === 'signature' && product.name.includes('Para') && '🥮'}
                {product.category === 'ice_cream' && '🍦'}
                {product.category === 'chocolates' && '🍫'}
                {product.category === 'beverages' && '🥤'}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8">
            {product.isBestSeller && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15 }}
                className="inline-block bg-gradient-to-r from-brand-600 to-brand-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-soft"
              >
                ⭐ Best Seller
              </motion.span>
            )}

            <h2 className="text-3xl font-black text-gray-900 mb-2">
              {product.name}
            </h2>

            {product.subCategory && (
              <p className="text-gray-500 mb-4 font-medium text-base">{product.subCategory}</p>
            )}

            {/* Size Variants Selection */}
            {product.sizeVariants && product.sizeVariants.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-700 mb-3">Available Sizes & Prices:</p>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizeVariants.map((variant, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedVariant(index)}
                      className={`p-4 rounded-xl border-2 transition-all duration-100 text-left ${selectedVariant === index
                          ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-500 shadow-medium'
                          : 'bg-white border-gray-200 hover:border-gray-300 shadow-soft'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-black ${selectedVariant === index ? 'text-emerald-700' : 'text-gray-900'
                          }`}>
                          {variant.size}
                        </span>
                        {selectedVariant === index && (
                          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <span className={`text-lg font-black ${selectedVariant === index ? 'text-emerald-600' : 'text-gray-700'
                        }`}>
                        {variant.price}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Current Selected Price */}
            <div className="text-4xl font-black text-emerald-600 mb-6 flex items-center gap-3">
              {currentPrice}
              {currentSize && (
                <span className="text-base font-bold text-gray-500">({currentSize})</span>
              )}
            </div>

            {product.description && (
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                {product.description}
              </p>
            )}

            {/* Call to Order Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              href="tel:9932552763"
              className="block w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white py-6 rounded-xl font-black text-center hover:shadow-strong transition-all flex items-center justify-center gap-3 text-lg sm:text-xl border-4 border-brand-700 shadow-medium min-h-[68px]"
            >
              <Phone className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />
              <span>Call to Order: 9932552763</span>
            </motion.a>

            <p className="text-center text-gray-500 text-sm mt-5 font-medium">
              🕒 Open Daily: 9:00 AM - 10:00 PM
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
