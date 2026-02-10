import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryRail from './components/CategoryRail';
import FloatingCallButton from './components/FloatingCallButton';
import { products, categoryLabels } from './data/products';
import { Product } from './data/products';
import './index.css';

// Lazy load heavy components
const BestSellers = lazy(() => import('./components/BestSellers'));
const CategorySection = lazy(() => import('./components/CategorySection'));
const Footer = lazy(() => import('./components/Footer'));
const ProductModal = lazy(() => import('./components/ProductModal'));
const SearchModal = lazy(() => import('./components/SearchModal'));

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('bestsellers');

  // Filter products by category
  const bestSellers = products.filter((p) => p.isBestSeller);
  const iceCreams = products.filter((p) => p.category === 'ice_cream');
  const chocolates = products.filter((p) => p.category === 'chocolates');
  const beverages = products.filter((p) => p.category === 'beverages');

  // Categories for navigation
  const categories = [
    { id: 'bestsellers', label: 'Best Sellers', emoji: '🔥' },
    { id: 'ice_cream', label: 'Ice Creams', emoji: '🍦' },
    { id: 'chocolates', label: 'Chocolates', emoji: '🍫' },
    { id: 'beverages', label: 'Beverages', emoji: '🥤' },
  ];

  // Track scroll position to update active category
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      // Find which section is currently in view
      const offset = 250; // Offset for sticky header
      const scrollPosition = window.scrollY + offset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
      ticking = false;
    };

    // Use requestAnimationFrame for smooth updates
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [categories]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 180; // Account for sticky headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      
      <main>
        <Hero />
        
        <CategoryRail
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <Suspense fallback={<div className="h-96 bg-gradient-to-b from-red-50 via-orange-50 to-amber-50 animate-pulse" />}>
          <div id="bestsellers">
            <BestSellers products={bestSellers} onProductClick={handleProductClick} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <div id="ice_cream">
            <CategorySection
              title="Ice Creams"
              emoji="🍦"
              products={iceCreams}
              onProductClick={handleProductClick}
            />
          </div>

          <div id="chocolates">
            <CategorySection
              title="Chocolates"
              emoji="🍫"
              products={chocolates}
              onProductClick={handleProductClick}
            />
          </div>

          <div id="beverages">
            <CategorySection
              title="Beverages"
              emoji="🥤"
              products={beverages}
              onProductClick={handleProductClick}
            />
          </div>

          <div id="location">
            <Footer />
          </div>
        </Suspense>
      </main>

      <FloatingCallButton />

      <Suspense fallback={null}>
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          products={products}
          onProductClick={handleProductClick}
        />
      </Suspense>
    </div>
  );
};

export default App;
