import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface CertificationsProps {
    onNavigate: (page: Page) => void;
    onBack: () => void;
}

export default function Certifications({ onNavigate, onBack }: CertificationsProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const certifications = [
        { src: 'fssai.jpg', alt: 'Food Safety and Standards Authority of India (FSSAI) Certification' },
        { src: 'foreign-trade.jpg', alt: 'Directorate General of Foreign Trade (DGFT) Registration' },
        { src: 'apeda.jpg', alt: 'Agricultural and Processed Food Products Export Development Authority (APEDA) Certification' },
        { src: 'startupindia.jpg', alt: 'Startup India Recognition' },
        { src: 'india-organic.jpg', alt: 'India Organic NPOP Certification' },
        { src: 'usda-organic.png', alt: 'USDA Organic Certification' },
        { src: 'msme.jpg', alt: 'Ministry of Micro, Small and Medium Enterprises (MSME) Registration' },
        { src: 'sgs.jpg', alt: 'SGS Quality Assurance Certification' },
        { src: 'jaivik-bharat.png', alt: 'Jaivik Bharat FSSAI Organic Logo' }
    ];

    return (
        <div className="bg-[#fcfdfa] dark:bg-[#051f15] font-body text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen flex flex-col">
            <Navigation currentPage="certifications" onNavigate={onNavigate} onBack={onBack} />

            <header className="relative bg-[#0b4d27] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cfb06e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Our Certifications</h1>
                    <p className="text-[#cfb06e] text-lg max-w-2xl mx-auto font-light">
                        We are proud to be recognized by leading agricultural and quality assurance organizations.
                    </p>
                </div>
            </header>

            <main className="flex-grow py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full max-w-sm flex items-center justify-center h-64 group"
                            >
                                <img
                                    src={`/${cert.src}`}
                                    alt={cert.alt}
                                    className="max-w-full max-h-full object-contain filter hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}
