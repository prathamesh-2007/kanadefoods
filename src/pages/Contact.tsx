import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { countryCodes } from '../data/countryCodes';

type Page = 'home' | 'services' | 'contact' | 'mission' | 'certifications';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Google Apps Script Web App URL for form submission
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBFneoNHvjQYJCb_Uo093RxDdAqLyICHgXOkm7b3DIF6HNNCKYiTxG-bzdZpUPq6Qsqg/exec';

    const countryCode = formData.get('country-code') as string;
    const phoneNumber = formData.get('phone') as string;
    const fullPhoneNumber = `${countryCode} ${phoneNumber}`;

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: fullPhoneNumber,
      company: (formData.get('company') as string) || 'N/A',
      address: formData.get('address') as string,
      country: formData.get('country') as string,
      note: (formData.get('note') as string) || 'N/A',
      timestamp: new Date().toISOString()
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });

      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fcfdfa] dark:bg-[#051f15] font-body text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navigation currentPage="contact" onNavigate={onNavigate} />

      <main className="pt-32 pb-16 md:py-32 relative min-h-screen flex items-center overflow-hidden">
        {/* ... background elements ... */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b4d27]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cfb06e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#cfb06e] font-semibold tracking-widest text-sm uppercase block mb-4">Contact Us</span>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">Let's Start a Conversation</h1>
            <p className="text-gray-400 text-lg">Send us your details and we'll get back to you shortly.</p>
          </div>

          <div className="bg-white dark:bg-[#0c2e22] border border-white/5 rounded-2xl p-6 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cfb06e]/50 to-transparent opacity-50"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 material-icons-outlined text-xl">person</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                    />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 material-icons-outlined text-xl">email</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                    />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number(International) <span className="text-red-400">*</span>
                  </label>
                  <div className="flex gap-3 md:gap-4">
                    <div className="relative w-1/3 md:w-1/4">
                      <select
                        id="country-code"
                        name="country-code"
                        className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-4 pr-8 text-white focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] appearance-none cursor-pointer transition-all"
                        defaultValue="+91"
                      >
                        {countryCodes.map((country) => (
                          <option key={`${country.code}-${country.name}`} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <span className="material-icons-outlined text-gray-500">expand_more</span>
                      </div>
                    </div>
                    <div className="relative w-2/3 md:w-3/4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 material-icons-outlined text-xl">call</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="98765 43210"
                        pattern="[0-9\s\-\(\)]+"
                        title="Please enter a valid phone number"
                        className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name <span className="text-gray-500 text-xs ml-1">(Optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 material-icons-outlined text-xl">business</span>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Ltd."
                      className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                    />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                    Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-500 material-icons-outlined text-xl">location_on</span>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      placeholder="Street Address, City, Country"
                      className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                  Country <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 material-icons-outlined text-xl">public</span>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    placeholder="India"
                    className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="note" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Note (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-500 material-icons-outlined text-xl">note</span>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Any additional information you'd like to share..."
                    className="w-full bg-[#051f15]/50 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfb06e] focus:ring-1 focus:ring-[#cfb06e] transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0b4d27] hover:bg-green-800 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-900/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">send</span>}
                {isSubmitting && <span className="material-icons-outlined animate-spin">refresh</span>}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Success Animation Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0c2e22] rounded-2xl p-8 md:p-12 shadow-2xl max-w-md mx-4 text-center animate-scale-in">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <span className="material-icons-outlined text-white text-5xl">check</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent Successfully!</h3>
            <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
