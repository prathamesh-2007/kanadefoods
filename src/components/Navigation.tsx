import { useState } from 'react';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onBack?: () => void;
}

export default function Navigation({ currentPage, onNavigate, onBack }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page, hash?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-[#051f15]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            {currentPage !== 'home' && onBack && (
              <button
                onClick={onBack}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
                aria-label="Go back"
              >
                <span className="material-icons-outlined text-2xl">arrow_back</span>
              </button>
            )}
            <button onClick={() => handleNavClick('home')} className="flex-shrink-0 flex items-center gap-2 md:gap-3">
              <img alt="Kanade Foods Logo" className="h-10 md:h-12 w-auto object-contain" src="/logo1.png" />
              <div>
                <h1 className="font-display font-bold text-base md:text-xl text-[#cfb06e] tracking-wide">KANADE</h1>
                <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-widest text-gray-500 dark:text-gray-400">Foods & Agri Ventures LLP</p>
              </div>
            </button>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <button
              className={`${currentPage === 'home' ? 'text-[#0b4d27] dark:text-[#cfb06e] font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-[#0b4d27] dark:hover:text-[#cfb06e]'
                } font-medium transition-colors`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-[#0b4d27] dark:hover:text-[#cfb06e] font-medium transition-colors"
              onClick={() => handleNavClick('home', 'about')}
            >
              About Us
            </button>
            <button
              className={`${currentPage === 'services' ? 'text-[#0b4d27] dark:text-[#cfb06e] font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-[#0b4d27] dark:hover:text-[#cfb06e]'
                } font-medium transition-colors`}
              onClick={() => handleNavClick('home', 'services')}
            >
              Services
            </button>
            <button
              className={`${currentPage === 'certifications' ? 'text-[#0b4d27] dark:text-[#cfb06e] font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-[#0b4d27] dark:hover:text-[#cfb06e]'
                } font-medium transition-colors`}
              onClick={() => onNavigate('certifications')}
            >
              Certifications
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-[#0b4d27] dark:hover:text-[#cfb06e] font-medium transition-colors"
              onClick={() => handleNavClick('home', 'sustainability')}
            >
              Sustainability
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#0b4d27] hover:bg-green-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hamburger-btn text-gray-600 dark:text-gray-300 hover:text-[#0b4d27] focus:outline-none p-2 rounded-lg transition-colors ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-current transition-all"></span>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#051f15] border-b border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('home', 'about')}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('home', 'services')}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('certifications')}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => handleNavClick('home', 'sustainability')}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              Sustainability
            </button>
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-center bg-[#0b4d27] hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
