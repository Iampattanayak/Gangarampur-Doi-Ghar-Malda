export interface Product {
  id: string;
  name: string;
  category: "signature" | "ice_cream" | "chocolates" | "beverages";
  subCategory?: string;
  price: string;
  imagePlaceholder: string;
  isBestSeller: boolean;
  description?: string;
  sizeVariants?: Array<{
    size: string;
    price: string;
    description?: string;
  }>;
}

export const products: Product[] = [
  // Signature Doi (Best Sellers)
  {
    id: "doi-1",
    name: "Choto Varer Khasa Doi",
    category: "signature",
    price: "₹70",
    imagePlaceholder: "khasa doi in small clay pot",
    isBestSeller: true,
    description: "Premium quality Khasa Doi in small earthen pot"
  },
  {
    id: "doi-2",
    name: "Baro Varer Khasa Doi",
    category: "signature",
    price: "₹135",
    imagePlaceholder: "khasa doi in large clay pot",
    isBestSeller: true,
    description: "Premium quality Khasa Doi in large earthen pot"
  },
  {
    id: "doi-3",
    name: "Choto Varer Khir Doi",
    category: "signature",
    price: "₹110",
    imagePlaceholder: "khir doi in small clay pot",
    isBestSeller: true,
    description: "Sweet Khir Doi in small earthen pot"
  },
  {
    id: "doi-4",
    name: "Baro Varer Khir Doi",
    category: "signature",
    price: "₹220",
    imagePlaceholder: "khir doi in large clay pot",
    isBestSeller: true,
    description: "Sweet Khir Doi in large earthen pot"
  },
  {
    id: "doi-5",
    name: "Sara te Khir Doi",
    category: "signature",
    price: "₹235",
    imagePlaceholder: "khir doi in sara traditional bowl",
    isBestSeller: true,
    description: "Khir Doi served in traditional Sara"
  },
  {
    id: "doi-6",
    name: "Sara Doi",
    category: "signature",
    price: "₹150",
    imagePlaceholder: "doi in sara traditional bowl",
    isBestSeller: true,
    description: "Fresh Doi served in traditional Sara"
  },
  {
    id: "doi-7",
    name: "Special Sara",
    category: "signature",
    price: "₹160",
    imagePlaceholder: "special sara doi in traditional bowl",
    isBestSeller: true,
    description: "Special preparation served in Sara"
  },
  {
    id: "ghee-1",
    name: "Pure Desi Ghee",
    category: "signature",
    price: "₹100/100 grams",
    imagePlaceholder: "golden desi ghee",
    isBestSeller: true,
    description: "100% pure homemade ghee with authentic aroma"
  },
  {
    id: "para-1",
    name: "Para",
    category: "signature",
    price: "₹5/piece",
    imagePlaceholder: "traditional para sweet",
    isBestSeller: true,
    description: "Traditional Bengali Para sweet"
  },

  // Ice Creams (125ml Cups)
  {
    id: "amul-gold-fruit-n-nut",
    name: "Amul Gold Fruit 'N' Nut Fantasy",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹45",
    imagePlaceholder: "fruit n nut ice cream cup",
    isBestSeller: false,
    description: "Creamy ice cream loaded with cashew, almond, and jelly."
  },
  {
    id: "amul-gold-choco-chips",
    name: "Amul Gold Choco Chips",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹45",
    imagePlaceholder: "choco chips ice cream cup",
    isBestSeller: false,
    description: "Chocolate ice cream packed with dark chocolate chips."
  },
  {
    id: "amul-sundae-gudbud",
    name: "Amul Sundae Gudbud",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹40",
    imagePlaceholder: "sundae gudbud cup",
    isBestSeller: false,
    description: "A classic mix of fruits, jelly, and nuts in a sundae format."
  },
  {
    id: "amul-jumbo-coffee",
    name: "Amul Jumbo Coffee",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹40",
    imagePlaceholder: "coffee ice cream cup",
    isBestSeller: false,
    description: "Rich coffee-flavored ice cream."
  },
  {
    id: "amul-jumbo-butterscotch",
    name: "Amul Jumbo Butterscotch Bliss",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹35 - ₹40",
    imagePlaceholder: "butterscotch ice cream cup",
    isBestSeller: false,
    description: "Crunchy butterscotch nuts in creamy golden ice cream."
  },
  {
    id: "amul-jumbo-tender-coconut",
    name: "Amul Jumbo Tender Coconut",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹35",
    imagePlaceholder: "tender coconut ice cream cup",
    isBestSeller: false,
    description: "Made with real tender coconut pieces."
  },
  {
    id: "amul-golden-pearl",
    name: "Amul Golden Pearl",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹35",
    imagePlaceholder: "golden pearl ice cream cup",
    isBestSeller: false,
    description: "Creamy ice cream with pearl-like confectioneries."
  },
  {
    id: "amul-king-alphonso",
    name: "Amul King Alphonso",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹30",
    imagePlaceholder: "alphonso mango ice cream cup",
    isBestSeller: false,
    description: "Made with real Alphonso mango pulp."
  },
  {
    id: "amul-chocolate-brownie",
    name: "Amul Chocolate Brownie",
    category: "ice_cream",
    subCategory: "125ml Cup",
    price: "₹30",
    imagePlaceholder: "chocolate brownie ice cream cup",
    isBestSeller: false,
    description: "Chocolate ice cream with brownie crumble."
  },

  // Ice Creams (100ml Cups)
  {
    id: "amul-afghan-dry-fruit",
    name: "Amul Afghan Dry Fruit",
    category: "ice_cream",
    subCategory: "100ml Cup",
    price: "₹25",
    imagePlaceholder: "dry fruit ice cream cup",
    isBestSeller: false,
    description: "Rich texture with dates and nuts."
  },
  {
    id: "amul-american-nuts",
    name: "Amul American Nuts",
    category: "ice_cream",
    subCategory: "100ml Cup",
    price: "₹25",
    imagePlaceholder: "american nuts ice cream cup",
    isBestSeller: false,
    description: "Fruit and nut mix with a distinctive pineapple/rose hint."
  },
  {
    id: "amul-shahi-anjir",
    name: "Amul Shahi Anjir (Fig)",
    category: "ice_cream",
    subCategory: "100ml Cup",
    price: "₹25",
    imagePlaceholder: "anjir ice cream cup",
    isBestSeller: false,
    description: "Traditional fig (Anjir) flavor."
  },
  {
    id: "amul-rajbhog",
    name: "Amul Rajbhog",
    category: "ice_cream",
    subCategory: "100ml Cup",
    price: "₹25",
    imagePlaceholder: "rajbhog ice cream cup",
    isBestSeller: false,
    description: "Saffron and cardamom flavored with nuts/honey balls."
  },
  {
    id: "amul-koolfi-cup",
    name: "Amul Koolfi Cup",
    category: "ice_cream",
    subCategory: "100ml Cup",
    price: "₹25",
    imagePlaceholder: "kulfi cup",
    isBestSeller: false,
    description: "Traditional Kulfi flavor in a cup format."
  },

  // Ice Creams (Small Cups)
  {
    id: "amul-vanilla-royal",
    name: "Amul Vanilla Royal",
    category: "ice_cream",
    subCategory: "65ml Cup",
    price: "₹10",
    imagePlaceholder: "vanilla ice cream cup",
    isBestSeller: false,
    description: "Classic vanilla."
  },
  {
    id: "amul-strawberry",
    name: "Amul Strawberry",
    category: "ice_cream",
    subCategory: "65ml Cup",
    price: "₹10",
    imagePlaceholder: "strawberry ice cream cup",
    isBestSeller: false,
    description: "Classic strawberry."
  },
  {
    id: "amul-butterscotch-small",
    name: "Amul Butterscotch (Small)",
    category: "ice_cream",
    subCategory: "60ml Cup",
    price: "₹15",
    imagePlaceholder: "butterscotch ice cream cup",
    isBestSeller: false,
    description: "Smaller version of the butterscotch cup."
  },

  // Epic Bars
  {
    id: "amul-epic-almond-gold",
    name: "Amul Epic Almond Gold",
    category: "ice_cream",
    subCategory: "Epic Bar",
    price: "₹100",
    imagePlaceholder: "epic almond gold bar",
    isBestSeller: false,
    description: "The most premium option. Rich vanilla ice cream coated in thick Belgian chocolate and roasted almonds."
  },
  {
    id: "amul-epic-choco-almond",
    name: "Amul Epic Choco Almond",
    category: "ice_cream",
    subCategory: "Epic Bar",
    price: "₹60",
    imagePlaceholder: "epic choco almond bar",
    isBestSeller: false,
    description: "Chocolate ice cream coated in chocolate and almonds."
  },
  {
    id: "amul-epic-strawberry",
    name: "Amul Epic Strawberry",
    category: "ice_cream",
    subCategory: "Epic Bar",
    price: "₹60",
    imagePlaceholder: "epic strawberry bar",
    isBestSeller: false,
    description: "Strawberry ice cream dipped in a white chocolate coating."
  },
  {
    id: "amul-epic-sweetheart",
    name: "Amul Epic Sweetheart",
    category: "ice_cream",
    subCategory: "Epic Bar",
    price: "₹35",
    imagePlaceholder: "epic sweetheart bar",
    isBestSeller: false,
    description: "A heart-shaped bar with vanilla ice cream and chocolate coating (often a Valentine's special)."
  },

  // Frostik & Bars
  {
    id: "amul-gold-frostik",
    name: "Amul Gold Frostik",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹40",
    imagePlaceholder: "frostik bar",
    isBestSeller: false,
    description: "Vanilla ice cream with a solid chocolate center, coated in biscuit crispies and chocolate."
  },
  {
    id: "amul-dark-frostik",
    name: "Amul Dark Frostik",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹40",
    imagePlaceholder: "dark frostik bar",
    isBestSeller: false,
    description: "Dark chocolate ice cream with a dark chocolate center and coating."
  },
  {
    id: "amul-chocobar",
    name: "Amul Chocobar (Gold/Probiotic)",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹25",
    imagePlaceholder: "chocobar",
    isBestSeller: false,
    description: "The classic vanilla bar dipped in a crisp chocolate shell. Now often sold as a Probiotic version."
  },
  {
    id: "amul-dark-chocobar",
    name: "Amul Dark Chocobar",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹20",
    imagePlaceholder: "dark chocobar",
    isBestSeller: false,
    description: "Dark chocolate ice cream dipped in a dark chocolate shell."
  },
  {
    id: "amul-coffee-bar",
    name: "Amul Coffee Bar",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹18 - ₹20",
    imagePlaceholder: "coffee bar",
    isBestSeller: false,
    description: "Coffee-flavored ice cream with a chocolate coating."
  },

  // Kulfi
  {
    id: "amul-punjabi-kulfi",
    name: "Amul Punjabi Kulfi",
    category: "ice_cream",
    subCategory: "Kulfi",
    price: "₹30",
    imagePlaceholder: "punjabi kulfi stick",
    isBestSeller: false,
    description: "Rich, condensed milk flavor with nuts, typical of Punjab."
  },
  {
    id: "amul-rajbhog-kulfi",
    name: "Amul Rajbhog Kulfi",
    category: "ice_cream",
    subCategory: "Kulfi",
    price: "₹25",
    imagePlaceholder: "rajbhog kulfi stick",
    isBestSeller: false,
    description: "Saffron (Kesar) and cardamom flavor with dry fruits."
  },
  {
    id: "amul-kashmiri-kesar-kulfi",
    name: "Amul Kashmiri Kesar Kulfi",
    category: "ice_cream",
    subCategory: "Kulfi",
    price: "₹20",
    imagePlaceholder: "kesar kulfi stick",
    isBestSeller: false,
    description: "Lighter saffron flavor."
  },
  {
    id: "amul-aamras-kulfi",
    name: "Amul Aamras Kulfi",
    category: "ice_cream",
    subCategory: "Kulfi",
    price: "₹18 - ₹20",
    imagePlaceholder: "aamras kulfi stick",
    isBestSeller: false,
    description: "Mango flavored kulfi."
  },

  // Candies
  {
    id: "amul-asli-aam",
    name: "Amul Asli Aam (Real Mango)",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹30",
    imagePlaceholder: "asli aam bar",
    isBestSeller: false,
    description: "Made with real mango pulp (milk-based, not just water)."
  },
  {
    id: "amul-creamy-almond",
    name: "Amul Creamy Almond",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹25",
    imagePlaceholder: "creamy almond bar",
    isBestSeller: false,
    description: "Almond flavored milk bar."
  },
  {
    id: "amul-raspberry-dolly",
    name: "Amul Raspberry Dolly",
    category: "ice_cream",
    subCategory: "Bar",
    price: "₹15 - ₹20",
    imagePlaceholder: "raspberry dolly",
    isBestSeller: false,
    description: "A nostalgic milk-and-raspberry duo bar."
  },
  {
    id: "amul-orange-mango-candy",
    name: "Amul Orange / Mango Candy",
    category: "ice_cream",
    subCategory: "Candy",
    price: "₹10",
    imagePlaceholder: "orange candy",
    isBestSeller: false,
    description: "Classic water-based ice candy."
  },

  // Family Packs (1L)
  {
    id: "amul-vanilla-magic",
    name: "Amul Vanilla Magic",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹180",
    imagePlaceholder: "vanilla magic tub",
    isBestSeller: false,
    description: "Classic rich vanilla (a step up from the brick vanilla)."
  },
  {
    id: "amul-butterscotch-bliss-1l",
    name: "Amul Butterscotch Bliss (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹195",
    imagePlaceholder: "butterscotch bliss tub",
    isBestSeller: false,
    description: "Creamy butterscotch with crunchy praline."
  },
  {
    id: "amul-chocolate-magic-sundae",
    name: "Amul Chocolate Magic Sundae",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹195",
    imagePlaceholder: "chocolate magic sundae tub",
    isBestSeller: false,
    description: "Chocolate ice cream with ribbons of sauce."
  },
  {
    id: "amul-choco-chips-1l",
    name: "Amul Choco Chips (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹210",
    imagePlaceholder: "choco chips tub",
    isBestSeller: false,
    description: "Chocolate ice cream loaded with chips."
  },
  {
    id: "amul-chocolate-brownie-1l",
    name: "Amul Chocolate Brownie (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹210",
    imagePlaceholder: "chocolate brownie tub",
    isBestSeller: false,
    description: "Darker chocolate ice cream with brownie chunks."
  },
  {
    id: "amul-fruit-n-nut-fantasy-1l",
    name: "Amul Fruit 'N' Nut Fantasy (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹210",
    imagePlaceholder: "fruit n nut fantasy tub",
    isBestSeller: false,
    description: "Loaded with jelly, cashew, and almond."
  },
  {
    id: "amul-gold-king-alphonso-1l",
    name: "Amul Gold King Alphonso (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹235",
    imagePlaceholder: "king alphonso tub",
    isBestSeller: false,
    description: "Made with real Alphonso mango pulp."
  },
  {
    id: "amul-cookies-n-cream",
    name: "Amul Cookies 'N' Cream",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹235",
    imagePlaceholder: "cookies n cream tub",
    isBestSeller: false,
    description: "Vanilla ice cream with crushed cookie pieces."
  },
  {
    id: "amul-rajbhog-1l",
    name: "Amul Rajbhog (1L)",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹270",
    imagePlaceholder: "rajbhog tub",
    isBestSeller: false,
    description: "Premium saffron (kesar) flavor with dry fruits/honey balls."
  },
  {
    id: "amul-roasted-almond",
    name: "Amul Roasted Almond",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹270 - ₹300",
    imagePlaceholder: "roasted almond tub",
    isBestSeller: false,
    description: "Roasted almonds in a rich base."
  },
  {
    id: "amul-falooda",
    name: "Amul Falooda",
    category: "ice_cream",
    subCategory: "1L Tub",
    price: "₹270 - ₹300",
    imagePlaceholder: "falooda tub",
    isBestSeller: false,
    description: "Rose flavor with vermicelli and nuts."
  },

  // Party Packs (750ml)
  {
    id: "amul-vanilla-royale-750",
    name: "Amul Vanilla Royale (750ml)",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹150",
    imagePlaceholder: "vanilla royale pack",
    isBestSeller: false
  },
  {
    id: "amul-two-in-one",
    name: "Amul Two In One",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹160",
    imagePlaceholder: "two in one pack",
    isBestSeller: false,
    description: "Strawberry/Vanilla"
  },
  {
    id: "amul-butterscotch-750",
    name: "Amul Butterscotch (750ml)",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹175",
    imagePlaceholder: "butterscotch pack",
    isBestSeller: false
  },
  {
    id: "amul-tutti-frutti",
    name: "Amul Tutti Frutti",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹160",
    imagePlaceholder: "tutti frutti pack",
    isBestSeller: false
  },
  {
    id: "amul-kesar-pista",
    name: "Amul Kesar Pista",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹190 - ₹200",
    imagePlaceholder: "kesar pista pack",
    isBestSeller: false
  },
  {
    id: "amul-black-currant",
    name: "Amul Black Currant",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹190 - ₹200",
    imagePlaceholder: "black currant pack",
    isBestSeller: false
  },
  {
    id: "amul-afghan-dry-fruit-750",
    name: "Amul Afghan Dry Fruit (750ml)",
    category: "ice_cream",
    subCategory: "750ml Pack",
    price: "₹200",
    imagePlaceholder: "afghan dry fruit pack",
    isBestSeller: false
  },

  // Tubs (500ml)
  {
    id: "amul-creme-rich-almond-fudge",
    name: "Amul Crème Rich Almond Fudge",
    category: "ice_cream",
    subCategory: "500ml Tub",
    price: "₹180 - ₹200",
    imagePlaceholder: "creme rich almond fudge",
    isBestSeller: false
  },
  {
    id: "amul-creme-rich-butterscotch",
    name: "Amul Crème Rich Butterscotch",
    category: "ice_cream",
    subCategory: "500ml Tub",
    price: "₹160",
    imagePlaceholder: "creme rich butterscotch",
    isBestSeller: false
  },
  {
    id: "amul-ice-lounge",
    name: "Amul Ice Lounge (International)",
    category: "ice_cream",
    subCategory: "500ml Tub",
    price: "₹250 - ₹400",
    imagePlaceholder: "ice lounge tub",
    isBestSeller: false,
    description: "Flavors: Butter Pecan, English Apple, Belgian Chocolate"
  },

  // Others
  {
    id: "amul-ice-cream-sandwich",
    name: "Amul Ice Cream Sandwich",
    category: "ice_cream",
    subCategory: "Novelty",
    price: "₹25",
    imagePlaceholder: "ice cream sandwich",
    isBestSeller: false,
    description: "Vanilla ice cream sandwiched between two chocolate biscuits."
  },
  {
    id: "amul-cassata-slice",
    name: "Amul Cassata Slice",
    category: "ice_cream",
    subCategory: "Novelty",
    price: "₹55 - ₹60",
    imagePlaceholder: "cassata slice",
    isBestSeller: false,
    description: "A slice of sponge cake layered with 3 flavors of ice cream and nuts."
  },
  {
    id: "amul-koolfi-block",
    name: "Amul Koolfi Block",
    category: "ice_cream",
    subCategory: "Block",
    price: "₹60",
    imagePlaceholder: "kulfi block",
    isBestSeller: false,
    description: "A brick of kulfi meant to be sliced at home."
  },

  // Chocolates
  {
    id: "choc-dairy-milk",
    name: "Cadbury Dairy Milk",
    category: "chocolates",
    subCategory: "Milk Chocolate",
    price: "₹5",
    imagePlaceholder: "cadbury dairy milk",
    isBestSeller: false,
    description: "Classic milk chocolate",
    sizeVariants: [
      { size: "6.6 g", price: "₹5", description: "Mini" },
      { size: "13.2 g", price: "₹10", description: "Small" },
      { size: "23 g", price: "₹20", description: "Medium" },
      { size: "52 g", price: "₹40", description: "Large" },
      { size: "130 g", price: "₹100", description: "Family Pack" },
      { size: "180 g", price: "₹150", description: "Maha Pack" }
    ]
  },
  {
    id: "choc-dairy-milk-crackle",
    name: "Cadbury Dairy Milk Crackle",
    category: "chocolates",
    subCategory: "Milk Chocolate",
    price: "₹50",
    imagePlaceholder: "cadbury dairy milk crackle",
    isBestSeller: false,
    description: "Rice Crispies - 36 g"
  },
  {
    id: "choc-dairy-milk-fruit-nut",
    name: "Cadbury Dairy Milk Fruit & Nut",
    category: "chocolates",
    subCategory: "Milk Chocolate",
    price: "₹50",
    imagePlaceholder: "cadbury dairy milk fruit nut",
    isBestSeller: false,
    description: "Fruit & Nut - 36 g"
  },
  {
    id: "choc-dairy-milk-roast-almond",
    name: "Cadbury Dairy Milk Roast Almond",
    category: "chocolates",
    subCategory: "Milk Chocolate",
    price: "₹50",
    imagePlaceholder: "cadbury dairy milk roast almond",
    isBestSeller: false,
    description: "Roast Almond - 36 g"
  },
  {
    id: "choc-silk-plain",
    name: "Cadbury Dairy Milk Silk",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹80",
    imagePlaceholder: "cadbury silk plain",
    isBestSeller: false,
    description: "Plain Silk",
    sizeVariants: [
      { size: "60 g", price: "₹80" },
      { size: "150 g", price: "₹175" }
    ]
  },
  {
    id: "choc-silk-bubbly",
    name: "Cadbury Dairy Milk Silk Bubbly",
    category: "chocolates",
    subCategory: "Aerated Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk bubbly",
    isBestSeller: false,
    description: "Aerated chocolate",
    sizeVariants: [
      { size: "50 g", price: "₹85" },
      { size: "120 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-fruit-nut",
    name: "Cadbury Dairy Milk Silk Fruit & Nut",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk fruit nut",
    isBestSeller: false,
    description: "Fruit & Nut",
    sizeVariants: [
      { size: "55 g", price: "₹85" },
      { size: "137 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-roast-almond",
    name: "Cadbury Dairy Milk Silk Roast Almond",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk roast almond",
    isBestSeller: false,
    description: "Roast Almond",
    sizeVariants: [
      { size: "58 g", price: "₹85" },
      { size: "143 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-oreo",
    name: "Cadbury Dairy Milk Silk Oreo",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk oreo",
    isBestSeller: false,
    description: "With Oreo cookies",
    sizeVariants: [
      { size: "60 g", price: "₹85" },
      { size: "130 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-hazelnut",
    name: "Cadbury Dairy Milk Silk Hazelnut",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk hazelnut",
    isBestSeller: false,
    description: "Hazelnut",
    sizeVariants: [
      { size: "58 g", price: "₹85" },
      { size: "143 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-mousse",
    name: "Cadbury Dairy Milk Silk Mousse",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹85",
    imagePlaceholder: "cadbury silk mousse",
    isBestSeller: false,
    description: "Mousse chocolate",
    sizeVariants: [
      { size: "50 g", price: "₹85" },
      { size: "116 g", price: "₹180" }
    ]
  },
  {
    id: "choc-silk-ganache",
    name: "Cadbury Dairy Milk Silk Ganache",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹185",
    imagePlaceholder: "cadbury silk ganache",
    isBestSeller: false,
    description: "137 g"
  },
  {
    id: "choc-silk-desserts",
    name: "Cadbury Dairy Milk Silk Desserts",
    category: "chocolates",
    subCategory: "Premium Chocolate",
    price: "₹280",
    imagePlaceholder: "cadbury silk desserts brownie",
    isBestSeller: false,
    description: "Brownie - 140 g"
  },
  {
    id: "choc-lickables",
    name: "Cadbury Dairy Milk Lickables",
    category: "chocolates",
    subCategory: "Kids Chocolate",
    price: "₹45",
    imagePlaceholder: "cadbury lickables",
    isBestSeller: false,
    description: "20 g - Plastic Cup/Toy"
  },
  {
    id: "choc-shots",
    name: "Cadbury Dairy Milk Shots",
    category: "chocolates",
    subCategory: "Chocolate Balls",
    price: "₹10",
    imagePlaceholder: "cadbury shots",
    isBestSeller: false,
    description: "Chocolate balls",
    sizeVariants: [
      { size: "18 g", price: "₹10", description: "Small Pouch" },
      { size: "185 g", price: "₹120", description: "Party Pack" }
    ]
  },
  {
    id: "choc-crispello",
    name: "Cadbury Dairy Milk Crispello",
    category: "chocolates",
    subCategory: "Wafer Chocolate",
    price: "₹40",
    imagePlaceholder: "cadbury crispello",
    isBestSeller: false,
    description: "Wafer chocolate - 35 g"
  },
  {
    id: "choc-5star",
    name: "Cadbury 5 Star",
    category: "chocolates",
    subCategory: "Chocolate Bar",
    price: "₹5",
    imagePlaceholder: "5 star chocolate",
    isBestSeller: false,
    description: "Caramel & Nougat",
    sizeVariants: [
      { size: "10.1 g", price: "₹5" },
      { size: "19.5 g", price: "₹10" },
      { size: "35 g", price: "₹20" }
    ]
  },
  {
    id: "choc-5star-3d",
    name: "Cadbury 5 Star 3D",
    category: "chocolates",
    subCategory: "Chocolate Bar",
    price: "₹40",
    imagePlaceholder: "5 star 3d chocolate",
    isBestSeller: false,
    description: "Crunchy Caramel - 42 g"
  },
  {
    id: "choc-fuse",
    name: "Cadbury Fuse",
    category: "chocolates",
    subCategory: "Chocolate Bar",
    price: "₹20",
    imagePlaceholder: "cadbury fuse",
    isBestSeller: false,
    description: "Peanut & Caramel",
    sizeVariants: [
      { size: "24 g", price: "₹20" },
      { size: "45 g", price: "₹35" }
    ]
  },
  {
    id: "choc-perk",
    name: "Cadbury Perk",
    category: "chocolates",
    subCategory: "Wafer Bar",
    price: "₹5",
    imagePlaceholder: "perk chocolate",
    isBestSeller: false,
    description: "Wafer chocolate",
    sizeVariants: [
      { size: "13 g", price: "₹5" },
      { size: "28 g", price: "₹10" }
    ]
  },
  {
    id: "choc-celebrations",
    name: "Cadbury Celebrations",
    category: "chocolates",
    subCategory: "Gift Pack",
    price: "₹50",
    imagePlaceholder: "cadbury celebrations",
    isBestSeller: false,
    description: "Assorted Gift Pack",
    sizeVariants: [
      { size: "59 g", price: "₹50", description: "Mini" },
      { size: "118 g", price: "₹140", description: "Small" },
      { size: "179 g", price: "₹200", description: "Medium" }
    ]
  },
  {
    id: "choc-celebrations-dry-fruit",
    name: "Cadbury Celebrations Rich Dry Fruit",
    category: "chocolates",
    subCategory: "Premium Gift Pack",
    price: "₹550",
    imagePlaceholder: "celebrations dry fruit collection",
    isBestSeller: false,
    description: "177 g - Tin/Box"
  },
  {
    id: "choc-celebrations-premium",
    name: "Cadbury Celebrations Premium Selection",
    category: "chocolates",
    subCategory: "Premium Gift Pack",
    price: "₹400",
    imagePlaceholder: "celebrations premium selection",
    isBestSeller: false,
    description: "280 g"
  },
  {
    id: "choc-silk-gift-miniatures",
    name: "Cadbury Silk Gift Pack Miniatures",
    category: "chocolates",
    subCategory: "Premium Gift Pack",
    price: "₹500",
    imagePlaceholder: "silk miniatures gift pack",
    isBestSeller: false,
    description: "240 g"
  },
  {
    id: "choc-silk-gift-pralines",
    name: "Cadbury Silk Gift Pack Pralines",
    category: "chocolates",
    subCategory: "Premium Gift Pack",
    price: "₹550",
    imagePlaceholder: "silk pralines gift pack",
    isBestSeller: false,
    description: "Special - 160 g"
  },

  // Beverages
  {
    id: "bev-campa-cola",
    name: "Campa Cola",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹10",
    imagePlaceholder: "campa cola bottle",
    isBestSeller: false,
    description: "Cola",
    sizeVariants: [
      { size: "200 ml", price: "₹10", description: "PET Bottle (Small)" },
      { size: "500 ml", price: "₹20", description: "PET Bottle" },
      { size: "1 L", price: "₹40", description: "PET Bottle (Large)" },
      { size: "2 L", price: "₹80", description: "PET Bottle (Mega)" }
    ]
  },
  {
    id: "bev-campa-orange",
    name: "Campa Orange",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹10",
    imagePlaceholder: "campa orange bottle",
    isBestSeller: false,
    description: "Orange",
    sizeVariants: [
      { size: "200 ml", price: "₹10", description: "PET Bottle (Small)" },
      { size: "500 ml", price: "₹20", description: "PET Bottle" },
      { size: "1 L", price: "₹40", description: "PET Bottle (Large)" }
    ]
  },
  {
    id: "bev-campa-lemon",
    name: "Campa Lemon",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹10",
    imagePlaceholder: "campa lemon bottle",
    isBestSeller: false,
    description: "Lemon",
    sizeVariants: [
      { size: "200 ml", price: "₹10", description: "PET Bottle (Small)" },
      { size: "500 ml", price: "₹20", description: "PET Bottle" },
      { size: "1 L", price: "₹40", description: "PET Bottle (Large)" }
    ]
  },
  {
    id: "bev-coca-cola",
    name: "Coca-Cola Original",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹20",
    imagePlaceholder: "coca cola bottle",
    isBestSeller: false,
    description: "Classic Cola",
    sizeVariants: [
      { size: "250 ml", price: "₹20", description: "PET Bottle" },
      { size: "300 ml", price: "₹40", description: "Aluminium Can" },
      { size: "750 ml", price: "₹40", description: "PET Bottle" },
      { size: "1.25 L", price: "₹65", description: "PET Bottle (Home)" },
      { size: "2.25 L", price: "₹95", description: "PET Bottle (Party)" }
    ]
  },
  {
    id: "bev-coca-cola-zero",
    name: "Coca-Cola Zero Sugar",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹40",
    imagePlaceholder: "coca cola zero can",
    isBestSeller: false,
    description: "Cola (Sugar Free)",
    sizeVariants: [
      { size: "300 ml", price: "₹40", description: "Aluminium Can" }
    ]
  },
  {
    id: "bev-thums-up",
    name: "Thums Up",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹20",
    imagePlaceholder: "thums up bottle",
    isBestSeller: false,
    description: "Strong Cola",
    sizeVariants: [
      { size: "250 ml", price: "₹20", description: "PET Bottle" },
      { size: "300 ml", price: "₹40", description: "Aluminium Can" },
      { size: "750 ml", price: "₹40", description: "PET Bottle" },
      { size: "1.25 L", price: "₹65", description: "PET Bottle (Home)" },
      { size: "2.25 L", price: "₹95", description: "PET Bottle (Party)" }
    ]
  },
  {
    id: "bev-thums-up-charged",
    name: "Thums Up Charged",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹20",
    imagePlaceholder: "thums up charged bottle",
    isBestSeller: false,
    description: "Strong Cola (High Caffeine)",
    sizeVariants: [
      { size: "250 ml", price: "₹20", description: "PET Bottle" }
    ]
  },
  {
    id: "bev-sprite",
    name: "Sprite",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹20",
    imagePlaceholder: "sprite bottle",
    isBestSeller: false,
    description: "Lemon-Lime",
    sizeVariants: [
      { size: "250 ml", price: "₹20", description: "PET Bottle" },
      { size: "300 ml", price: "₹40", description: "Aluminium Can" },
      { size: "750 ml", price: "₹40", description: "PET Bottle" },
      { size: "1.25 L", price: "₹65", description: "PET Bottle (Home)" },
      { size: "2.25 L", price: "₹95", description: "PET Bottle (Party)" }
    ]
  },
  {
    id: "bev-limca",
    name: "Limca",
    category: "beverages",
    subCategory: "Carbonated Soft Drink",
    price: "₹20",
    imagePlaceholder: "limca bottle",
    isBestSeller: false,
    description: "Cloudy Lemon",
    sizeVariants: [
      { size: "250 ml", price: "₹20", description: "PET Bottle" },
      { size: "300 ml", price: "₹40", description: "Aluminium Can" },
      { size: "750 ml", price: "₹40", description: "PET Bottle" },
      { size: "1.25 L", price: "₹65", description: "PET Bottle (Home)" },
      { size: "2.25 L", price: "₹90", description: "PET Bottle (Party)" }
    ]
  },
  {
    id: "bev-maaza",
    name: "Maaza",
    category: "beverages",
    subCategory: "Fruit Drink (Non-Fizzy)",
    price: "₹10",
    imagePlaceholder: "maaza bottle",
    isBestSeller: false,
    description: "Mango",
    sizeVariants: [
      { size: "125 ml", price: "₹10", description: "Tetra Pack" },
      { size: "250 ml", price: "₹20", description: "PET Bottle" },
      { size: "600 ml", price: "₹40", description: "PET Bottle" },
      { size: "1.2 L", price: "₹70", description: "PET Bottle (Home)" },
      { size: "1.75 L", price: "₹95", description: "PET Bottle (Party)" }
    ]
  },
];

export const categoryLabels = {
  signature: "🔥 Signature Doi & Ghee",
  ice_cream: "🍦 Ice Creams",
  chocolates: "🍫 Chocolates",
  beverages: "🥤 Beverages",
};
