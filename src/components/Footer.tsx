
type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (linkName: string) => {
    if (linkName === 'Home') onNavigate('home');
    if (linkName === 'About Us') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    if (linkName === 'Our Services') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('services');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    if (linkName === 'Sustainability') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('sustainability');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    if (linkName === 'Soil Conditioner Fertilizer') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('services');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    if (linkName === 'Certifications') {
      onNavigate('certifications');
    }
    if (linkName === 'Privacy Policy') {
      onNavigate('privacy');
    }
    if (linkName === 'Terms of Service') {
      onNavigate('terms');
    }
  };

  return (
    <footer className="bg-[#02140d] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity text-left"
            >
              <img alt="Kanade Foods Logo" className="h-10 w-auto object-contain rounded-lg" src="/logo2.jpeg" />
              <div>
                <h3 className="font-display font-bold text-lg text-[#cfb06e]">KANADE</h3>
                <p className="text-[0.65rem] uppercase tracking-widest text-gray-400">Foods & Agri Ventures</p>
              </div>
            </button>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cultivating a sustainable future through organic farming and eco-friendly agricultural solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kanadefoods"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#cfb06e] hover:text-[#0b4d27] transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#cfb06e] font-bold text-lg mb-6 sticky top-0">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', hash: '' },
                { name: 'About Us', hash: 'about' },
                { name: 'Our Services', hash: 'services' },
                { name: 'Certifications', hash: '' },
                { name: 'Soil Conditioner Fertilizer', hash: 'services' },
                { name: 'Sustainability', hash: 'sustainability' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.name)}
                    className="text-gray-400 hover:text-[#cfb06e] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cfb06e]/50 group-hover:bg-[#cfb06e] transition-colors"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#cfb06e] font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Organic Grains & Cereals',
                'Organic Dals & Pulses',
                'Organic Spices',
                'Organic Flours & Atta',
                'Organic Superfoods'
              ].map((product) => (
                <li key={product}>
                  <button onClick={() => onNavigate('services')} className="text-gray-400 hover:text-[#cfb06e] transition-colors text-sm text-left">
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#cfb06e] font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-[#cfb06e] mt-0.5">place</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=A2%2F1+Goyal+residency%2C+Nashik+Phata%2C+Kasarwadi%2C+Pune-411034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cfb06e] transition-colors"
                >
                  A2/1 Goyal residency, Nashik Phata, Kasarwadi, Pune-411034
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-[#cfb06e]">email</span>
                <a className="hover:text-white" href="mailto:kanadefoods@gmail.com">
                  kanadefoods@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-[#cfb06e]">phone</span>
                <div>
                  <a className="hover:text-white" href="tel:+919156912328">
                    +91 91569 12328
                  </a>
                  ,{' '}
                  <a className="hover:text-white" href="tel:+917709987183">
                    +91 77099 87183
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-[#cfb06e]">verified</span>
                <span>Reg. No: AOC-0498, Dt: 01/05/2026</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Kanade Foods and Agri Ventures LLP. All rights reserved.</p>
          <div className="flex gap-8">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-[#4a9eff] hover:text-[#76b9ff] transition-colors font-medium border-b border-transparent hover:border-[#4a9eff] bg-transparent cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-[#4a9eff] hover:text-[#76b9ff] transition-colors font-medium border-b border-transparent hover:border-[#4a9eff] bg-transparent cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
