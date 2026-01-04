import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface ProductsProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

interface ProductCategory {
  title: string;
  icon: string;
  count: number;
  category: string;
  products: string[];
}

const productCategories: ProductCategory[] = [
  {
    title: 'Organic Grains & Cereals',
    icon: 'grass',
    count: 18,
    category: 'grains',
    products: [
      'Organic Wheat Lokwan',
      'Organic Wheat Sharbati',
      'Organic Wheat Khapli',
      'Organic Premium Basmati Rice (White)',
      'Organic Basmati Rice (Brown)',
      'Organic Sona Masoori Rice (Brown)',
      'Organic Sona Masoori Rice (White)',
      'Organic Sona Masoori Rice (Hand Pounded)',
      'Organic Indrayani Rice (White)',
      'Organic Indrayani Rice (Hand Pounded)',
      'Organic Ambe Mohar Rice (White)',
      'Organic Wada Kolam (White)',
      'Organic Ambe Mohar Rice (Hand Pounded)',
      'Organic Red Rice',
      'Organic Idli Rice',
      'Organic Black Rice',
      'Organic Maize',
      'Organic Amaranth/Amaranthus/Rajgira',
    ],
  },
  {
    title: 'Organic Dals & Pulses',
    icon: 'spa',
    count: 24,
    category: 'dals',
    products: [
      'Organic Channa (Whole)/Bengal Gram (Whole)',
      'Organic Channa Dal/Split Bengal Gram',
      'Organic Chawli/Lobiya/Cowpea (Black Eye)',
      'Organic Green Peas',
      'Organic White Peas',
      'Organic Kabuli Chana/Chickpea',
      'Organic Masoor (Whole Skinless)/Red Lentil Gota',
      'Organic Masoor (Whole)/Red Lentil (Whole)',
      'Organic Masoor Dal/Split Red Lentil (Skinless)',
      'Organic Matki/Moth/Turkish Gram',
      'Organic Matki Dal/Moth Dal/Turkish Gram (Split)',
      'Organic Mix Dal',
      'Organic Moong (Whole)/Green Gram (Whole)',
      'Organic Moong Dal (Chilka)/Split Green Gram (With Skin)',
      'Organic Moong Dal/Split Green Gram (Skinless)',
      'Organic Roasted Channa Dal/Roasted Split Bengal Gram',
      'Organic Toor Dal/Arhar Dal/Split Pigeon Pea (Unpolished)',
      'Organic Urad Dal (Chilka)/Split Black Gram (With Skin)',
      'Organic Urad Dal (White)/Split Black Gram (Skinless)',
      'Organic Urad Whole (White)/Black Gram Whole (Gota)',
      'Organic Urad/Black Gram (Whole)',
      'Organic Rajma Chitra/Red Kidney Beans (Chitra)',
      'Organic Rajma Sharmili/Red Kidney Beans (Sharmili)',
      'Organic Red Rajma/Red Kidney Beans',
    ],
  },
  {
    title: 'Organic Flours / Atta',
    icon: 'grain',
    count: 11,
    category: 'flours',
    products: [
      'Organic Maida',
      'Organic Wheat Flour (Lokwan)',
      'Organic Wheat Flour (Sharbati)',
      'Organic Wheat Flour (Khapli)',
      'Organic Besan/Gram Flour',
      'Organic Sona Masoori Rice Flour',
      'Organic Multi Grain Atta (5 Grain)',
      'Organic Maize Flour',
      'Organic Bajra Atta/Pearl Millet Flour',
      'Organic Jowar Atta/Sorghum Bicolony Flour',
      'Organic Ragi Atta/Finger Millet Flour',
    ],
  },
  {
    title: 'Organic Processed Foods',
    icon: 'takeout_dining',
    count: 6,
    category: 'processed',
    products: [
      'Organic Wheat Daliya',
      'Organic White Poha/Beaten Rice',
      'Organic Red Poha',
      'Organic Jau/Barley (Dehusked)',
      'Organic Sooji Rawa',
      'Organic Sattu Atta',
    ],
  },
  {
    title: 'Organic Millets',
    icon: 'agriculture',
    count: 9,
    category: 'millets',
    products: [
      'Organic Quinoa White',
      'Organic Chia Seeds',
      'Organic Bajra/Pearl Millet',
      'Organic Jowar/Sorghum Bicolony',
      'Organic Ragi Whole/Finger Millet',
      'Organic Foxtail Millet',
      'Organic Kodo Millet',
      'Organic Little Millet',
      'Organic Proso Millet',
    ],
  },
  {
    title: 'Organic Spices',
    icon: 'whatshot',
    count: 33,
    category: 'spices',
    products: [
      'Organic Red Chilli Powder',
      'Organic Red Chilli Whole',
      'Organic Turmeric Powder',
      'Organic Til/White Sesame',
      'Organic Javas/Flax Seeds',
      'Organic Dhania/Coriander Seeds',
      'Organic Dhania Powder/Coriander Powder',
      'Organic Black Pepper',
      'Organic Black Pepper Powder',
      'Organic Cloves',
      'Organic Cloves Powder',
      'Organic Cinnamon',
      'Organic Cinnamon Quills',
      'Organic Cinnamon Powder',
      'Organic Jeera/Cumin',
      'Organic Jeera Powder/Cumin Powder',
      'Organic Methi/Fenugreek',
      'Organic Methi Powder/Fenugreek Powder',
      'Organic Rai (Small)/Mustard (Small)',
      'Organic Rai (Big)/Mustard (Big)',
      'Organic Rai (Yellow)/Mustard (Yellow)',
      'Organic Dry Ginger Flakes',
      'Organic Dry Ginger Powder',
      'Organic Kasoori Methi/Dried Fenugreek Leaves',
      'Organic Jaiphal/Nutmeg',
      'Organic Jaiphal Powder/Nutmeg Powder',
      'Organic Sauf/Fennel Seed',
      'Organic Sauf Powder/Fennel Seed Powder',
      'Organic Tej Patta/Bay Leaf',
      'Organic Ajwain/Carom Seeds',
      'Organic Cardamom Green',
      'Organic Cardamom Black',
      'Organic Turmeric Whole',
    ],
  },
  {
    title: 'Organic Dry Fruits',
    icon: 'spa',
    count: 3,
    category: 'dryfruits',
    products: ['Organic Cashew (W 320/240/210/180 & Split)', 'Organic Kismis/Raisins', 'Organic Almond'],
  },
  {
    title: 'Organic Sweeteners',
    icon: 'cookie',
    count: 6,
    category: 'sweeteners',
    products: [
      'Organic Jaggery Powder',
      'Organic Jaggery Granules / 400 & 900 gm',
      'Organic Sugar (White)',
      'Organic Sugar (Sulphur less)',
      'Organic Sugar Brown',
      'Organic Brown Sugar Cube',
    ],
  },
  {
    title: 'Organic Oils & Oilseeds',
    icon: 'water_drop',
    count: 5,
    category: 'oils',
    products: ['Organic Groundnut', 'Organic Soyabean', 'Organic Groundnut Oil', 'Organic Sunflower Oil', 'Organic Mustard Oil'],
  },
  {
    title: 'Organic Himalayan Salts',
    icon: 'landscape',
    count: 4,
    category: 'salts',
    products: [
      'Organic Rock Salt (White Powder)',
      'Organic Himalayan Rock Salt (Free Flow)',
      'Organic Himalayan Dark Pink Salt (Crystals)',
      'Organic Himalayan Dark Pink Salt (Free Flow)',
    ],
  },
  {
    title: 'Organic Superfoods',
    icon: 'auto_awesome',
    count: 6,
    category: 'superfoods',
    products: ['Organic Wheat Grass Powder', 'Psyllium Husk', 'Garlic Powder', 'Moringa Powder', 'Amchur Powder', 'Mushroom/Oyster'],
  },
  {
    title: 'Premium Spices',
    icon: 'local_dining',
    count: 9,
    category: 'premium_spices',
    products: [
      'Turmeric (whole / powder)',
      'Cinnamon (sticks / powder)',
      'Black pepper (powder)',
      'Red dried chili (powder)',
      'Bay leaf',
      'Cardimum',
      'Nutmeg',
      'Dried ginger (powder)',
      'Dried garlic (powder)',
    ],
  },
];

export default function Products({ onNavigate, onBack }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['all', 'grains', 'dals', 'flours', 'millets', 'processed', 'spices', 'premium_spices', 'dryfruits', 'sweeteners', 'oils', 'salts', 'superfoods'];

  const filteredProducts = productCategories.filter((category) => {
    const matchesCategory = activeCategory === 'all' || category.category === activeCategory;
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) || category.products.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fcfdfa] dark:bg-[#051f15] font-body text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navigation currentPage="services" onNavigate={onNavigate} onBack={onBack} />

      <header className="relative bg-[#0b4d27] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cfb06e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Our Premium Services</h1>
          <p className="text-[#cfb06e] text-lg max-w-2xl mx-auto font-light">Discover our range of pure, sustainable, and organic services & products harvested with care for nature and you.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 bg-[#02140d] p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="relative w-full lg:w-80 group">
              <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#cfb06e] transition-colors">search</span>
              <input
                className="w-full pl-12 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#cfb06e]/50 focus:border-[#cfb06e]/50 focus:bg-white/10 transition-all font-light"
                placeholder="Search services..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex overflow-x-auto w-full no-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0 lg:overflow-visible">
              <div className="flex flex-nowrap lg:flex-wrap gap-2 pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                      ? 'bg-[#0b4d27] text-white border-[#0b4d27]'
                      : 'bg-transparent text-gray-300 border border-white/10 hover:border-[#cfb06e]/30 hover:bg-white/5'
                      }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1).replace('__', ' / ')} {cat === 'all' ? 'Services' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((category, index) => (
            <div key={index} className="product-card">
              <div className="bg-white dark:bg-[#0c2e22] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#cfb06e] group">
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#0b4d27]/5 dark:bg-[#0b4d27]/10 rounded-full blur-2xl group-hover:bg-[#0b4d27]/10 transition-colors"></div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-[#0b4d27] dark:text-white mb-1">{category.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} Items Available</p>
                    </div>
                    <span className="material-icons-outlined text-[#0b4d27] dark:text-[#cfb06e] bg-green-50 dark:bg-green-900/30 p-2.5 rounded-full">{category.icon}</span>
                  </div>
                  <div className="bg-white dark:bg-[#051f15]/40 rounded-xl border border-gray-100 dark:border-gray-800 p-2 shadow-inner">
                    <ul className="space-y-1 max-h-80 overflow-y-auto custom-scrollbar pr-2">
                      {category.products
                        .filter((product) => product.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((product, pIndex) => (
                          <li key={pIndex} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#cfb06e]/10 dark:hover:bg-[#cfb06e]/5 transition-all group/item">
                            <span className="material-icons-outlined text-[10px] text-[#cfb06e] group-hover/item:scale-125 transition-transform">circle</span>
                            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{product}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
