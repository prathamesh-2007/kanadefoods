import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect } from 'react';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface TermsOfServiceProps {
    onNavigate: (page: Page) => void;
    onBack: () => void;
}

export default function TermsOfService({ onNavigate, onBack }: TermsOfServiceProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fcfdfa] dark:bg-[#051f15] font-body text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Navigation currentPage="home" onNavigate={onNavigate} onBack={onBack} />

            <main className="pt-32 pb-20 relative min-h-screen">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b4d27]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cfb06e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-[#cfb06e] font-semibold tracking-widest text-sm uppercase block mb-4">Legal</span>
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-[#0b4d27] dark:text-white mb-6">Terms of Service</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: January 2026</p>
                    </div>

                    <div className="bg-white dark:bg-[#0c2e22] border border-gray-100 dark:border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl space-y-8 leading-relaxed text-gray-600 dark:text-gray-300">
                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the services provided by Kanade Foods and Agri Ventures LLP ("Company," "we," "us," or "our") through our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">2. Description of Service</h2>
                            <p>
                                Kanade Foods and Agri Ventures LLP provides agricultural services, including but not limited to domestic soil conditioner solutions (Caloxa-P) and international organic grocery products. We reserve the right to modify or discontinue any service with or without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">3. User Obligations</h2>
                            <p>
                                As a user, you agree to provide accurate, current, and complete information when contacting us or using our services. You are responsible for maintaining the confidentiality of any account details and for all activities that occur under your communication with us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">4. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, images, and presentation materials (such as the Caloxa-P Presentation), is the property of Kanade Foods and Agri Ventures LLP and is protected by intellectual property laws. Unauthorized use of any materials is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">5. Limitation of Liability</h2>
                            <p>
                                Kanade Foods and Agri Ventures LLP shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or products.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">6. Governing Law</h2>
                            <p>
                                These terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}
