import { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Certifications from './pages/Certifications';

import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>(['home']);
  const [homeKey, setHomeKey] = useState(0);

  const navigateTo = (page: Page) => {
    if (page === 'home' && currentPage === 'home') {
      setHomeKey(prev => prev + 1);
    }
    if (page !== currentPage) {
      setHistory(prev => [...prev, page]);
      setCurrentPage(page);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current page
      const previousPage = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentPage(previousPage);
    } else {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key={homeKey} onNavigate={navigateTo} onBack={handleBack} />;
      case 'services':
        return <Products onNavigate={navigateTo} onBack={handleBack} />;
      case 'contact':
        return <Contact onNavigate={navigateTo} onBack={handleBack} />;
      case 'mission':
        return <Mission onNavigate={navigateTo} onBack={handleBack} />;
      case 'certifications':
        return <Certifications onNavigate={navigateTo} onBack={handleBack} />;
      case 'terms':
        return <TermsOfService onNavigate={navigateTo} onBack={handleBack} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={navigateTo} onBack={handleBack} />;
      default:
        return <Home onNavigate={navigateTo} onBack={handleBack} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

export default App;
