
type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (linkName: string, hash?: string) => {
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
    if (linkName === 'Certifications') {
      onNavigate('certifications');
    }
  };

  return (
    <footer className="bg-[#02140d] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img alt="Kanade Foods Logo" className="h-10 w-auto object-contain bg-white rounded-md p-0.5" src="/logo.png" />
              <div>
                <h3 className="font-display font-bold text-lg text-[#cfb06e]">KANADE</h3>
                <p className="text-[0.65rem] uppercase tracking-widest text-gray-400">Foods & Agri Ventures</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cultivating a sustainable future through organic farming and eco-friendly agricultural solutions.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#cfb06e] hover:text-[#0b4d27] transition-all duration-300 group"
                >
                  <img
                    src={`/ ${social}.svg`}
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                    alt={social}
                  />
                </a>
              ))}
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
                { name: 'Sustainability', hash: 'sustainability' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.name, link.hash)}
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
                <span>A2/1 Goyal residency, Nashik Phata, Kasarwadi, Pune-411034</span>
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
                  <a className="hover:text-white" href="tel:+919881711038">
                    +91 98817 11038
                  </a>
                  ,{' '}
                  <a className="hover:text-white" href="tel:+918793050642">
                    +91 87930 50642
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-[#cfb06e]">verified</span>
                <span>Reg. No: AOC-0498, Dt: 01/05/2025</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2023 Kanade Foods and Agri Ventures LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
