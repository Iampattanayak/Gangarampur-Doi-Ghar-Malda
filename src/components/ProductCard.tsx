import React from 'react';
import { Product } from '../data/products';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductImage, categoryEmojis } from '../data/productImages';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [imageError, setImageError] = React.useState(false);
  
  const productImage = getProductImage(product.id, product.category);

  const currentPrice = product.sizeVariants
    ? product.sizeVariants[selectedSize].price
    : product.price;

  const currentSize = product.sizeVariants
    ? product.sizeVariants[selectedSize].size
    : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-150"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        {/* Product Image or Icon */}
        {productImage && !imageError ? (
          <img 
            src={productImage} 
            alt={product.name}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-6xl">
            {product.category === 'signature' && product.name.includes('Doi') && '🥣'}
            {product.category === 'signature' && product.name.includes('Ghee') && '🧈'}
            {product.category === 'signature' && product.name.includes('Para') && '🥮'}
            {product.category === 'ice_cream' && '🍦'}
            {product.category === 'chocolates' && '🍫'}
            {product.category === 'beverages' && '🥤'}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-3">
        {/* Size indicator */}
        {currentSize && (
          <div className="flex items-center gap-1 mb-1.5">
            <div className="w-3 h-3 rounded-full border-2 border-green-600"></div>
            <span className="text-xs text-gray-600 font-medium">{currentSize}</span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Size Variants */}
        {product.sizeVariants && product.sizeVariants.length > 1 && (
          <div className="mt-2 mb-3">
            <div className="flex flex-wrap gap-1.5">
              {product.sizeVariants.map((variant, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(index);
                  }}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-50 ${selectedSize === index
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
          </div>
          <span className="text-xs text-gray-500">(1.5k)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <motion.span
            className="text-gray-900 font-bold text-base"
            key={currentPrice}
          >
            {currentPrice}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProductCard);
