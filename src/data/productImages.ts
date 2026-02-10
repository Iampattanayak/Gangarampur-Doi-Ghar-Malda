// Product image mappings
// Maps product IDs to their image paths in /public/products/

export interface ProductImage {
  id: string;
  imagePath: string;
  fallbackEmoji: string;
}

export const productImages: Record<string, string> = {
  // Signature Doi & Ghee
  "doi-1": "/products/signature/Choto%20Varer%20Khasa%20Doi.jpeg",
  "doi-2": "/products/signature/Baro%20Varer%20Khasa%20Doi.jpeg",
  "doi-3": "/products/signature/Choto%20Varer%20Khir%20Doi.jpeg",
  "doi-4": "/products/signature/Baro%20Varer%20Khir%20Doi.jpeg",
  "doi-5": "/products/signature/Sara%20te%20Khir%20Doi.jpeg",
  "doi-6": "/products/signature/Sara%20Doi.jpeg",
  "doi-7": "/products/signature/Special%20Sara.jpeg",
  "ghee-1": "/products/signature/Pure%20Desi%20Ghee.webp",
  "para-1": "/products/signature/Para.webp",

  // Ice Creams
  "amul-gold-fruit-n-nut": "/products/ice-cream/Amul%20Gold%20Fruit%20'N'%20Nut%20Fantasy.webp",
  "amul-gold-choco-chips": "/products/ice-cream/Amul%20Gold%20Choco%20Chips.webp",
  "amul-sundae-gudbud": "/products/ice-cream/Amul%20Sundae%20Gudbud.webp",
  "amul-jumbo-coffee": "/products/ice-cream/Amul%20Jumbo%20Coffee.webp",
  "amul-jumbo-butterscotch": "/products/ice-cream/Amul%20Jumbo%20Butterscotch%20Bliss.webp",
  "amul-jumbo-tender-coconut": "/products/ice-cream/Amul%20Jumbo%20Tender%20Coconut.webp",
  "amul-golden-pearl": "/products/ice-cream/Amul%20Golden%20Pearl.webp",
  "amul-king-alphonso": "/products/ice-cream/Amul%20King%20Alphonso.webp",
  "amul-chocolate-brownie": "/products/ice-cream/Amul%20Chocolate%20Brownie.webp",
  "amul-afghan-dry-fruit": "/products/ice-cream/Amul%20Afghan%20Dry%20Fruit.webp",
  "amul-american-nuts": "/products/ice-cream/Amul%20American%20Nuts.webp",
  "amul-shahi-anjir": "/products/ice-cream/Amul%20Shahi%20Anjir%20(Fig).webp",
  "amul-rajbhog": "/products/ice-cream/Amul%20Rajbhog.webp",
  "amul-koolfi-cup": "/products/ice-cream/Amul%20Koolfi%20Cup.webp",
  "amul-vanilla-royal": "/products/ice-cream/Amul%20Vanilla%20Royal.webp",
  "amul-strawberry": "/products/ice-cream/Amul%20Strawberry.webp",
  "amul-butterscotch-small": "/products/ice-cream/Amul%20Butterscotch%20(Small).webp",
  "amul-chocolate-small": "/products/ice-cream/Amul%20Chocolate%20(Small).webp",
  "amul-epic-almond-gold": "/products/ice-cream/Amul%20Epic%20Almond%20Gold.webp",
  "amul-epic-choco-almond": "/products/ice-cream/Amul%20Epic%20Choco%20Almond.webp",
  "amul-epic-strawberry": "/products/ice-cream/Amul%20Epic%20Strawberry.webp",
  "amul-epic-sweetheart": "/products/ice-cream/Amul%20Epic%20Sweetheart.webp",
  "amul-gold-frostik": "/products/ice-cream/Amul%20Gold%20Frostik.webp",
  "amul-dark-frostik": "/products/ice-cream/Amul%20Dark%20Frostik.webp",
  "amul-chocobar": "/products/ice-cream/Amul%20Chocobar%20(Gold-Probiotic).webp",
  "amul-dark-chocobar": "/products/ice-cream/Amul%20Dark%20Chocobar.webp",
  "amul-coffee-bar": "/products/ice-cream/Amul%20Coffee%20Bar.webp",
  "amul-punjabi-kulfi": "/products/ice-cream/Amul%20Punjabi%20Kulfi.webp",
  "amul-rajbhog-kulfi": "/products/ice-cream/Amul%20Rajbhog%20Kulfi.webp",
  "amul-kashmiri-kesar-kulfi": "/products/ice-cream/Amul%20Kashmiri%20Kesar%20Kulfi.webp",
  "amul-aamras-kulfi": "/products/ice-cream/Amul%20Aamras%20Kulfi.webp",
  "amul-asli-aam": "/products/ice-cream/Amul%20Asli%20Aam%20(Real%20Mango).webp",
  "amul-creamy-almond": "/products/ice-cream/Amul%20Creamy%20Almond.webp",
  "amul-raspberry-dolly": "/products/ice-cream/Amul%20Raspberry%20Dolly.webp",
  "amul-orange-mango-candy": "/products/ice-cream/Amul%20Orange%20-%20Mango%20Candy.webp",
  "amul-vanilla-magic": "/products/ice-cream/Amul%20Vanilla%20Magic.webp",
  "amul-butterscotch-bliss-1l": "/products/ice-cream/Amul%20Butterscotch%20Bliss%20(1L).webp",
  "amul-chocolate-magic-sundae": "/products/ice-cream/Amul%20Chocolate%20Magic%20Sundae.webp",
  "amul-choco-chips-1l": "/products/ice-cream/Amul%20Choco%20Chips%20(1L).webp",
  "amul-chocolate-brownie-1l": "/products/ice-cream/Amul%20Chocolate%20Brownie%20(1L).webp",
  "amul-fruit-n-nut-fantasy-1l": "/products/ice-cream/Amul%20Fruit%20'N'%20Nut%20Fantasy%20(1L).webp",
  "amul-gold-king-alphonso-1l": "/products/ice-cream/Amul%20Gold%20King%20Alphonso%20(1L).webp",
  "amul-cookies-n-cream": "/products/ice-cream/Amul%20Cookies%20'N'%20Cream.webp",
  "amul-rajbhog-1l": "/products/ice-cream/Amul%20Rajbhog%20(1L).webp",
  "amul-roasted-almond": "/products/ice-cream/Amul%20Roasted%20Almond.webp",
  "amul-falooda": "/products/ice-cream/Amul%20Falooda.webp",
  "amul-vanilla-royale-750": "/products/ice-cream/Amul%20Vanilla%20Royale%20(750ml).webp",
  "amul-two-in-one": "/products/ice-cream/Amul%20Two%20In%20One.webp",
  "amul-butterscotch-750": "/products/ice-cream/Amul%20Butterscotch%20(750ml).webp",
  "amul-tutti-frutti": "/products/ice-cream/Amul%20Tutti%20Frutti.webp",
  "amul-kesar-pista": "/products/ice-cream/Amul%20Kesar%20Pista.webp",
  "amul-black-currant": "/products/ice-cream/Amul%20Black%20Currant.webp",
  "amul-afghan-dry-fruit-750": "/products/ice-cream/Amul%20Afghan%20Dry%20Fruit%20(750ml).webp",
  "amul-creme-rich-almond-fudge": "/products/ice-cream/Amul%20Crème%20Rich%20Almond%20Fudge.webp",
  "amul-creme-rich-butterscotch": "/products/ice-cream/Amul%20Crème%20Rich%20Butterscotch.webp",
  "amul-ice-lounge": "/products/ice-cream/Amul%20Ice%20Lounge%20(International).webp",
  "amul-ice-cream-sandwich": "/products/ice-cream/Amul%20Ice%20Cream%20Sandwich.webp",
  "amul-cassata-slice": "/products/ice-cream/Amul%20Cassata%20Slice.webp",
  "amul-koolfi-block": "/products/ice-cream/Amul%20Koolfi%20Block.webp",

  // Chocolates
  "choc-dairy-milk": "/products/chocolates/Cadbury%20Dairy%20Milk.webp",
  "choc-dairy-milk-crackle": "/products/chocolates/Cadbury%20Dairy%20Milk%20Crackle.webp",
  "choc-dairy-milk-fruit-nut": "/products/chocolates/Cadbury-Dairy-Milk-Fruit-and-Nut.webp",
  "choc-dairy-milk-roast-almond": "/products/chocolates/Cadbury%20Dairy%20Milk%20Roast%20Almond.webp",
  "choc-silk-plain": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk.webp",
  "choc-silk-bubbly": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Bubbly.webp",
  "choc-silk-fruit-nut": "/products/chocolates/Cadbury-Dairy-Milk-Silk-Fruit-and-Nut.webp",
  "choc-silk-roast-almond": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Roast%20Almond.webp",
  "choc-silk-oreo": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Oreo.webp",
  "choc-silk-hazelnut": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Hazelnut.webp",
  "choc-silk-mousse": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Mousse.webp",
  "choc-silk-ganache": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Ganache.webp",
  "choc-silk-desserts": "/products/chocolates/Cadbury%20Dairy%20Milk%20Silk%20Desserts.webp",
  "choc-lickables": "/products/chocolates/Cadbury%20Dairy%20Milk%20Lickables.webp",
  "choc-shots": "/products/chocolates/Cadbury%20Dairy%20Milk%20Shots.webp",
  "choc-crispello": "/products/chocolates/Cadbury%20Dairy%20Milk%20Crispello.webp",
  "choc-5star": "/products/chocolates/Cadbury%205%20Star.webp",
  "choc-5star-3d": "/products/chocolates/Cadbury%205%20Star%203D.webp",
  "choc-fuse": "/products/chocolates/Cadbury%20Fuse.webp",
  "choc-perk": "/products/chocolates/Cadbury%20Perk.webp",
  "choc-celebrations": "/products/chocolates/Cadbury%20Celebrations.webp",
  "choc-celebrations-dry-fruit": "/products/chocolates/Cadbury%20Celebrations%20Rich%20Dry%20Fruit.webp",
  "choc-celebrations-premium": "/products/chocolates/Cadbury%20Celebrations%20Premium%20Selection.webp",
  "choc-silk-gift-miniatures": "/products/chocolates/Cadbury%20Silk%20Gift%20Pack%20Miniatures.webp",
  "choc-silk-gift-pralines": "/products/chocolates/Cadbury%20Silk%20Gift%20Pack%20Pralines.webp",

  // Beverages
  "bev-campa-cola": "/products/beverages/Campa%20Cola.webp",
  "bev-campa-orange": "/products/beverages/Campa%20Orange.webp",
  "bev-campa-lemon": "/products/beverages/Campa%20Lemon.webp",
  "bev-coca-cola": "/products/beverages/Coca-Cola%20Original.webp",
  "bev-coca-cola-zero": "/products/beverages/Coca-Cola%20Zero%20Sugar.webp",
  "bev-thums-up": "/products/beverages/Thums%20Up.webp",
  "bev-thums-up-charged": "/products/beverages/Thums%20Up%20Charged.webp",
  "bev-sprite": "/products/beverages/Sprite.webp",
  "bev-limca": "/products/beverages/Limca.webp",
  "bev-maaza": "/products/beverages/Maaza.webp",
};

// Get product image with fallback
export const getProductImage = (productId: string, category: string): string => {
  const imagePath = productImages[productId];
  
  // If no specific image is set, return empty string (component will show emoji)
  if (!imagePath) {
    return '';
  }
  
  return imagePath;
};

// Check if product has an image
export const hasProductImage = (productId: string): boolean => {
  return !!productImages[productId];
};

// Fallback emojis by category
export const categoryEmojis: Record<string, string> = {
  signature: '🥣',
  ice_cream: '🍦',
  chocolates: '🍫',
  beverages: '🥤',
};
