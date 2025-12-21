
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Define the Page type locally or import it if it were centralized (it's not currently)
// We use 'home' for navigation current page as 'mission' isn't a top-level nav item in the menu
type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications';

interface MissionProps {
    onNavigate: (page: Page) => void;
}

export default function Mission({ onNavigate }: MissionProps) {
    return (
        <div className="bg-[#fcfdfa] dark:bg-[#051f15] font-body text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Navigation currentPage="home" onNavigate={onNavigate} />

            <main className="pt-24 pb-12 md:pt-28 md:pb-16 relative min-h-screen flex flex-col items-center overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b4d27]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cfb06e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="text-center mb-8">
                        <span className="text-[#cfb06e] font-semibold tracking-widest text-sm uppercase block mb-3">About Us</span>
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-[#0b4d27] dark:text-white mb-4">Our Mission</h1>
                    </div>

                    <div className="bg-white dark:bg-[#0c2e22] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cfb06e]/50 to-transparent opacity-50"></div>

                        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                Our company is passionately committed to delivering authentic, certified Indian organic agricultural products worldwide, reflecting India's rich heritage as one of the leading producers of organic farming.
                            </p>
                            <p>
                                We uphold the highest standards of sustainability and health, ensuring that our products are cultivated without artificial pesticides, fertilizers, or preservatives.
                            </p>
                            <p>
                                Through these practices, we aim to promote not only the well-being of our consumers but also the prosperity of the farming communities and the environment.
                            </p>
                            <p>
                                With the global demand for organic products rapidly expanding, we are dedicated to expanding our reach while supporting eco-friendly agriculture and transparent supply chains.
                            </p>
                            <p>
                                This commitment helps position India as a major player in the global organic market, bringing high-quality, natural, and sustainable agricultural products to tables worldwide.
                            </p>
                            <p>
                                Our vision is aligned with promoting a healthy lifestyle and a sustainable future through organic farming that benefits the planet and its people.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-display font-bold text-xl text-[#0b4d27] dark:text-[#cfb06e]">KANADE Foods and Agri Ventures LLP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}
