import { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Certifications from './pages/Certifications';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Products onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'mission':
        return <Mission onNavigate={setCurrentPage} />;
      case 'certifications':
        return <Certifications onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

export default App;
