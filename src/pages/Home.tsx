import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

export default function Home({ onNavigate, onBack }: HomeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showDomesticOptions, setShowDomesticOptions] = useState(false);
  const [showServicesPresentation, setShowServicesPresentation] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollPositionRef = useRef(0);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 300; // pixels to scroll
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPositionRef.current - scrollAmount)
      : scrollPositionRef.current + scrollAmount;

    scrollPositionRef.current = newPosition;
    scrollContainer.style.transform = `translate3d(-${newPosition}px, 0, 0)`;

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Pause for 3 seconds after manual scroll
    setIsPaused(true);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      pauseTimeoutRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;

        // Reset when we've scrolled through one full set
        if (scrollContainer.scrollWidth && scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isPaused]);

  const presentationImages = [
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-2.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-4.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-5.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-6.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-8.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-9.jpg',
    '/Caloxa-P%20Soil%20Conditioner%20Presentation/Caloxa-P%20Soil%20Conditioner%20Presentation-11.jpg',
  ];

  const handleNavigationBack = () => {
    if (showServicesPresentation) {
      setShowServicesPresentation(false);
    } else if (showDomesticOptions) {
      setShowDomesticOptions(false);
    } else {
      onBack();
    }
  };

  return (
    <div className="bg-[#fcfdfa] dark:bg-[#051f15] text-gray-800 dark:text-gray-200 font-body transition-colors duration-300">
      <Navigation
        currentPage={showDomesticOptions || showServicesPresentation ? 'services' : 'home'}
        onNavigate={onNavigate}
        onBack={handleNavigationBack}
      />

      {!showServicesPresentation ? (
        <>
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                alt="Green agricultural field close up"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnUyP74lPMDBvWhMF_InYknRBK8sm8clmBZ0I5sXdHuQKJ6Y4nCmkYSXWQL0lYfQQH9XG-t0Y21ZLBPrv9RZpLobcmgz1L01ZcA_rGuKVPWor9o0C2ESf3GSHitBNkSWUfqMv6KPY9ccPk9_B3BaGSaRDdWND0psdM-XUHHpGG6zVcH2_M1q-EKNX0x16oDp4kgz6n9NVT55EUaD-UKHQnit4cAQLyzcLcv0SCCQPoSlTsBZl_z12gNPVOMlBtrXPhPqYLxOpiPXd_"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl fade-in-up">
                <span className="inline-block py-1 px-3 rounded-full bg-[#cfb06e]/20 border border-[#cfb06e] text-[#cfb06e] text-sm font-semibold mb-6 backdrop-blur-sm">
                  Premium Eco-Friendly Solutions
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Nurturing Soil,<br />
                  <span className="text-[#cfb06e]">Growing Future.</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 font-light max-w-2xl leading-relaxed">
                  Kanade Foods & Agri Ventures brings you scientifically formulated, environmentally responsible fertilizers designed to maximize yield while preserving nature.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      const element = document.getElementById('services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#0b4d27] hover:bg-green-800 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl text-center"
                  >
                    Explore Our Premium Services
                  </button>
                  <a
                    href="#about"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all text-center"
                  >
                    Our Story
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-[#051f15] border-b border-white/5 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#cfb06e]/20 rounded-full blur-[100px]"></div>
                <span className="text-[#cfb06e] font-semibold tracking-[0.3em] text-sm uppercase block mb-4 opacity-80">
                  Trusted Quality & Reliability
                </span>
                <h3 className="font-display font-bold text-white text-4xl md:text-6xl tracking-tight">Certified Excellence</h3>
                <div className="h-1 w-24 bg-[#cfb06e]/30 mx-auto mt-6 rounded-full"></div>
              </div>
              <div className="relative overflow-hidden group/carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {/* Left Navigation Button */}
                <button
                  onClick={() => handleManualScroll('left')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#cfb06e] to-[#d4af37] hover:from-[#d4af37] hover:to-[#cfb06e] text-[#0b4d27] p-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(207,176,110,0.4)] hover:shadow-[0_12px_40px_rgba(207,176,110,0.6)] hover:scale-110 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Scroll left"
                >
                  <span className="material-icons-outlined text-2xl font-bold">chevron_left</span>
                </button>

                {/* Right Navigation Button */}
                <button
                  onClick={() => handleManualScroll('right')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#cfb06e] to-[#d4af37] hover:from-[#d4af37] hover:to-[#cfb06e] text-[#0b4d27] p-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(207,176,110,0.4)] hover:shadow-[0_12px_40px_rgba(207,176,110,0.6)] hover:scale-110 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Scroll right"
                >
                  <span className="material-icons-outlined text-2xl font-bold">chevron_right</span>
                </button>

                <div ref={scrollRef} className="flex py-8 will-change-transform">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-12 md:gap-24 flex-shrink-0">
                      {[
                        { src: 'fssai.jpg', alt: 'Food Safety and Standards Authority of India (FSSAI) Certification' },
                        { src: 'foreign-trade.jpg', alt: 'Directorate General of Foreign Trade (DGFT) Registration' },
                        { src: 'apeda.jpg', alt: 'Agricultural and Processed Food Products Export Development Authority (APEDA) Certification' },
                        { src: 'startupindia.jpg', alt: 'Startup India Recognition' },
                        { src: 'india-organic.jpg', alt: 'India Organic NPOP Certification' },
                        { src: 'usda-organic.png', alt: 'USDA Organic Certification' },
                        { src: 'msme.jpg', alt: 'Ministry of Micro, Small and Medium Enterprises (MSME) Registration' },
                        { src: 'sgs.jpg', alt: 'SGS Quality Assurance Certification' },
                        { src: 'jaivik-bharat.png', alt: 'Jaivik Bharat FSSAI Organic Logo' }
                      ].map((cert, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 h-32 w-44 md:h-56 md:w-72 bg-white rounded-xl md:rounded-2xl border border-white/10 p-3 md:p-5 shadow-[0_20px_50px_rgba(207,176,110,0.15)] hover:shadow-[0_20px_80px_rgba(207,176,110,0.3)] transition-all duration-500 group overflow-hidden flex items-center justify-center mx-2 md:mx-4"
                        >
                          <img
                            src={`/${cert.src}`}
                            alt={cert.alt}
                            className="w-full h-full object-contain filter hover:filter-none transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 relative overflow-hidden" id="why-choose">
            <div className="absolute inset-0 bg-[#0b4d27]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose Kanade?</h2>
                <div className="w-24 h-1 bg-[#cfb06e] mx-auto rounded-full mb-6"></div>
                <p className="text-green-100 text-lg">We combine traditional agricultural wisdom with modern biotechnology to create products that truly make a difference.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-green-400/50 group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-icons-outlined text-green-400 text-3xl">eco</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Eco-Friendly</h3>
                  <p className="text-gray-300">100% organic formulations that enrich the soil microbiome without harmful chemical residues.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-amber-400/50 group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-icons-outlined text-amber-400 text-3xl">trending_up</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Higher Yields</h3>
                  <p className="text-gray-300">Proven to increase crop productivity by optimizing nutrient absorption and root strength.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-cyan-400/50 group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-icons-outlined text-cyan-400 text-3xl">science</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Science-Backed</h3>
                  <p className="text-gray-300">Developed in partnership with agricultural researchers to ensure maximum efficacy and safety.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white dark:bg-[#0c2e22] relative overflow-hidden" id="about">
            <div className="absolute -right-20 top-20 opacity-5 dark:opacity-10 pointer-events-none">
              <span className="material-icons-outlined text-[300px] text-[#0b4d27]">eco</span>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      alt="Farmer holding soil"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtftFE7lUOS6SmVwkPPaNZ62YUhTxOH2icB2vmi9I7dpGXvVdMypksULoNfBz_uU68_EQ4nnUi8I5591osYmGY9_WrfwZP1Q29Sq3NSZlMTKlrrboybf-IIK_qHPAJYFRNP6kfYP-vAebC6-MUeV4mbI2bm5lssmBjqHdBjgFllaTdNaOsRjEPMo80HuRV0aCPNzfmRNDgfxHVDzVJpyxCycVrGZLrV_ZRprApJFfktUmw5DuC7PB0OoQXO_XKcOot7OkOQ_RAfmj4"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-[#cfb06e] text-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg">
                    <p className="text-xl md:text-3xl font-bold font-display">5+</p>
                    <p className="text-xs md:text-sm font-medium text-white/90">Years of Research</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h4 className="text-[#cfb06e] font-semibold uppercase tracking-wider mb-2">About Us</h4>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0b4d27] dark:text-white mb-6">Rooted in Tradition, Innovating for Tomorrow</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    At Kanade Foods and Agri Ventures LLP, we believe that healthy food starts with healthy soil. Our mission is to restore the earth's natural balance while empowering farmers with effective, sustainable solutions.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Inspired by the resilience of nature, our products are crafted to support the complete lifecycle of your crops from seed to harvest. We are committed to a future where agriculture and ecology thrive in harmony.
                  </p>
                  <button
                    onClick={() => onNavigate('mission')}
                    className="inline-flex items-center text-[#0b4d27] dark:text-[#cfb06e] font-semibold hover:underline"
                  >
                    Learn more about our mission
                    <span className="material-icons-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-green-50 dark:bg-[#051f15]" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0b4d27] dark:text-white mb-4">Our Premium Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10">Discover our range of fertilizers tailored for different soil types and crop needs.</p>
                <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
                  {!showDomesticOptions ? (
                    <div className="flex flex-col gap-5 w-full animate-fade-in group">
                      <button
                        onClick={() => setShowDomesticOptions(true)}
                        className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#cfb06e] text-[#0b4d27] text-xl font-bold transition-all shadow-lg hover:shadow-[#cfb06e]/30 transform hover:-translate-y-1 w-full relative overflow-hidden"
                      >
                        <span className="material-icons-outlined mr-4 text-2xl">home</span>
                        Domestic
                      </button>
                      <button
                        onClick={() => onNavigate('services')}
                        className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#0b4d27] border-2 border-[#cfb06e] text-white text-xl font-bold transition-all shadow-lg hover:shadow-[#cfb06e]/20 transform hover:-translate-y-1 w-full relative overflow-hidden"
                      >
                        <span className="material-icons-outlined mr-4 text-2xl">public</span>
                        International
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5 w-full animate-fade-in">
                      <button
                        onClick={() => {
                          setShowServicesPresentation(true);
                          window.scrollTo(0, 0);
                        }}
                        className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#cfb06e] text-[#0b4d27] text-xl font-bold transition-all shadow-lg hover:shadow-[#cfb06e]/30 transform hover:-translate-y-1 w-full"
                      >
                        <span className="material-icons-outlined mr-4 text-2xl">medical_services</span>
                        Our Services
                      </button>
                      <button
                        onClick={() => onNavigate('services')}
                        className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#0b4d27] border-2 border-[#cfb06e] text-white text-xl font-bold transition-all shadow-lg hover:shadow-[#cfb06e]/20 transform hover:-translate-y-1 w-full"
                      >
                        <span className="material-icons-outlined mr-4 text-2xl">shopping_basket</span>
                        Our Grocery Product
                      </button>
                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={() => setShowDomesticOptions(false)}
                          className="flex items-center justify-center w-14 h-14 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white transition-all shadow-md group"
                          title="Back"
                        >
                          <span className="material-icons-outlined group-hover:rotate-90 transition-transform duration-300">close</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 relative overflow-hidden" id="sustainability">
            <div className="absolute inset-0 bg-[#0b4d27]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="material-icons-outlined text-[#cfb06e] text-5xl mb-6">workspace_premium</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Committed to a Sustainable Earth</h2>
              <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
                We don't just sell fertilizer; we partner with you to build a legacy of fertile land for generations to come. Join the Kanade services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#cfb06e] text-[#0b4d27] font-bold px-8 py-4 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  Connect With Us
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="pt-32 pb-16 bg-white dark:bg-[#051f15] min-h-screen">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-[#cfb06e] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400">Presentation of our Premium Soil Conditioner Solutions</p>
            </div>

            <div className="flex flex-col items-center gap-12 md:gap-20">
              {presentationImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full bg-white dark:bg-[#0c2e22] rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-[#cfb06e]/30 hover:border-[#cfb06e] transition-colors group animate-fade-in"
                >
                  <img
                    src={src}
                    alt={`Service Presentation Page ${index + 1}`}
                    className="w-full h-auto object-contain block cursor-zoom-in"
                    loading="lazy"
                    onClick={() => setSelectedImage(src)}
                  />

                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <button
                onClick={() => {
                  setShowServicesPresentation(false);
                  window.scrollTo(0, 0);
                }}
                className="bg-[#0b4d27] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-800 transition-all transform hover:-translate-y-1"
              >
                Back to Domestic Services
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <span className="material-icons-outlined text-3xl">close</span>
          </button>

          <div
            className="relative max-w-full max-h-full flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-2 border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
