import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect } from 'react';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications' | 'terms' | 'privacy';

interface PrivacyPolicyProps {
    onNavigate: (page: Page) => void;
    onBack: () => void;
}

export default function PrivacyPolicy({ onNavigate, onBack }: PrivacyPolicyProps) {
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
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-[#0b4d27] dark:text-white mb-6">Privacy Policy</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: January 2026</p>
                    </div>

                    <div className="bg-white dark:bg-[#0c2e22] border border-gray-100 dark:border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl space-y-8 leading-relaxed text-gray-600 dark:text-gray-300">
                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us when you fill out our contact form, including your name, email address, phone number, company name, and address.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">2. How We Use Your Information</h2>
                            <p>
                                The information we collect is used to:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Process orders and service requests.</li>
                                <li>Send updates and promotional materials (only with your consent).</li>
                                <li>Improve our website and service offerings.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">3. Data Security</h2>
                            <p>
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">4. Sharing of Information</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to third parties, except as required by law or to trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#0b4d27] dark:text-[#cfb06e] mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2 font-semibold">
                                Kanade Foods and Agri Ventures LLP<br />
                                Email: kanadefoods@gmail.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}
