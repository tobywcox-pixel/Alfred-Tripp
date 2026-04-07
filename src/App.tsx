/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ArrowRight, 
  Calculator, 
  FileText, 
  BarChart3,
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Send,
  Award,
  Zap,
  UserCheck,
  Clock, 
  MessageSquare,
  Download,
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Rocket,
  User,
  Building2
} from 'lucide-react';

// Import assets
import logo from './assets/black.png';
import hmrc from './assets/hmrc.png';
import quickbooks from './assets/quickbooks.png';
import sage50 from './assets/Sage 50.png';
import xero from './assets/Xero-Bronze-Partner-Logo.jpg';
import aat from './assets/AAT.png';
import alfred from './assets/alfred.jpg';
const alfie1 = '/alfie1.png';
import alfie2 from './assets/alfie2.png';
import alfie3 from './assets/alfie3.png';
import alfie4 from './assets/alfie4.png';
import alfie10 from './assets/alfie10.png';
import stock1 from './assets/stock1.jpg';
import blog1 from './assets/blog1.avif';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'testimonials' | 'blog' | 'contact' | 'lead-magnet' | '404' | 'privacy' | 'terms' | 'cookies';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage, setSelectedPost }: { 
  currentPage: Page, 
  setCurrentPage: (p: Page) => void,
  setSelectedPost: (p: BlogPost | null) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Blog', id: 'blog' },
  ];

  const handleNavClick = (id: Page) => {
    if (id === 'blog') {
      setSelectedPost(null);
    }
    setCurrentPage(id);
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled || isOpen ? "bg-white py-2 border-gray-200 shadow-sm" : "bg-white/60 backdrop-blur-md py-4 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <img 
            src={logo} 
            alt="Alfred Tripp Accountancy - Expert Accountants in Southampton" 
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            )} 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "text-sm font-bold transition-all relative py-1",
                  currentPage === link.id 
                    ? "text-blue-600" 
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
            <button 
              onClick={() => handleNavClick('contact')}
              className="flex items-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 px-4 py-2 rounded-full active:scale-95"
              aria-label="Call Alfred Tripp Accountancy at 02380 361 948"
            >
              <Phone size={14} className="mr-2" />
              02380 361 948
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="p-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/20 transition-all active:scale-95"
              title="Email Me"
            >
              <Mail size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <a 
            href="tel:02380361948" 
            className="p-2.5 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
          >
            <Phone size={18} />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 text-gray-900 bg-gray-100 rounded-full transition-colors hover:bg-gray-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-base font-bold rounded-xl transition-all",
                    currentPage === link.id 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                <a 
                  href="tel:02380361948" 
                  className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
                >
                  <Phone size={18} className="mr-2" />
                  Call
                </a>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  <Mail size={18} className="mr-2" />
                  Email
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-8 bg-white border-t border-gray-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500">
            <img src={xero} alt="Xero Bronze Partner - Cloud Accounting Software" className="h-8 md:h-12 object-contain mx-auto md:mx-0" />
            <img src={sage50} alt="Sage 50 - Professional Accounting Software" className="h-6 md:h-10 object-contain mx-auto md:mx-0" />
            <img src={hmrc} alt="HM Revenue & Customs Registered Agent" className="h-8 md:h-12 object-contain mx-auto md:mx-0" />
            <div className="flex items-center space-x-2 mx-auto md:mx-0 col-span-2 sm:col-span-1">
            <CheckCircle2 className="text-green-600" size={24} />
            <span className="font-bold text-gray-900 text-sm">Licensed AAT Accountant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-gray-900 text-white pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <img src={logo} alt="Alfred Tripp Accountancy - Small Business Accountants Hampshire" className="h-12 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Simple, proactive accounting for UK small businesses. I help you save tax, stay compliant, and stay in control.
          </p>
          <div className="flex space-x-4">
            <a href="https://uk.linkedin.com/in/alfredtripp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile"><Linkedin size={20} /></a>
            <a href="https://x.com/at_accountancy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter Profile"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/AlfredTrippAccountancy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram Profile"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/AlfredTrippAccountant" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook Page"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Monthly Accounting</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Self Assessment</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Bookkeeping</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Business Advisory</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Me</button></li>
            <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            <li><button onClick={() => setCurrentPage('testimonials')} className="hover:text-white transition-colors">Testimonials</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition-colors">Blog & Resources</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start">
              <Phone size={16} className="mr-3 mt-1 text-blue-500" />
              <span>02380 361 948</span>
            </li>
            <li className="flex items-start">
              <Mail size={16} className="mr-3 mt-1 text-blue-500" />
              <span>alfietripp@gmail.com</span>
            </li>
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 mt-1 text-blue-500" />
              <div className="flex flex-col">
                <span>Tree Tops, Richmond Close</span>
                <span>Chandler's Ford, SO53 5RA</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <a 
            href="https://www.yin-yang-studios.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 group hover:text-white transition-colors"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-3.5 h-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="white" />
              <path d="M12 2a10 10 0 0 1 0 20 5 5 0 0 1 0-10 5 5 0 0 0 0-10z" />
              <circle cx="12" cy="7" r="1.5" fill="white" />
              <circle cx="12" cy="17" r="1.5" />
            </svg>
            <span>Created by <span className="font-medium">Yin & Yang Studios</span></span>
          </a>
          <p>© 2026 Alfred Tripp Accountancy. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          <button onClick={() => setCurrentPage('cookies')} className="hover:text-white transition-colors">Cookie Policy</button>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      label: "Startups",
      icon: <Rocket size={18} />,
      points: [
        "Fast-track company formation & HMRC setup",
        "R&D tax credit identification for cash flow",
        "Seed funding & SEIS/EIS compliance advice",
        "Software setup (Xero/QuickBooks) from day one"
      ]
    },
    {
      label: "Freelancers",
      icon: <User size={18} />,
      points: [
        "Stress-free Self Assessment tax returns",
        "Real-time expense tracking & optimization",
        "IR35 status reviews & contract guidance",
        "Mortgage & rental references provided quickly"
      ]
    },
    {
      label: "Small Business",
      icon: <Building2 size={18} />,
      points: [
        "Monthly management accounts for visibility",
        "Automated Payroll & VAT compliance handling",
        "Strategic tax planning to minimize liabilities",
        "Cash flow forecasting to support growth"
      ]
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-transparent flex items-center pt-20 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-liquid" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-liquid animation-delay-2000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:hidden mb-12 max-w-[340px] relative">
                <img 
                  src={alfie10} 
                  alt="Alfred Tripp - Professional Accountant in Southampton and Hampshire" 
                  className="w-full h-auto object-cover rounded-[2rem] shadow-xl border border-white/40 rotate-1" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -inset-3 bg-blue-600/5 rounded-[2.5rem] -z-10 blur-xl" />
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold tracking-wide uppercase mb-4">
                <CheckCircle2 size={12} className="mr-2" />
                Licensed AAT Accountant
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-4 tracking-tight">
                Accounting that gives you <span className="text-blue-600">Clarity</span>, not a Headache.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
                Simple, proactive accounting for UK small businesses and freelancers. I handle the HMRC stress so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 active:scale-95 flex items-center justify-center"
                >
                  Get In Touch <ChevronRight className="ml-2" size={18} />
                </button>
                <button 
                  onClick={() => setCurrentPage('pricing')}
                  className="bg-white text-gray-900 border-2 border-gray-200 px-6 py-3 rounded-full text-base font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  See Pricing
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block max-w-[420px] mx-auto lg:mr-auto lg:ml-0"
            >
              <div className="relative z-10">
                <img 
                  src={alfie10} 
                  alt="Alfred Tripp - Expert Small Business Accountant Hampshire" 
                  className="w-full h-auto object-cover rounded-[2.5rem] shadow-2xl border border-white/40 transform hover:scale-[1.02] transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element behind image */}
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -z-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - Redesigned */}
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center py-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/10 rounded-full blur-[150px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Expert support, <span className="text-blue-600">tailored</span> to your journey.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Whether you're just starting out or scaling to new heights, I provide the proactive accounting you need at every milestone.
              </p>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-y-1/2 -z-10" />
            
            {tabs.map((tab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/40 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 font-black text-xl z-20">
                    {i + 1}
                  </div>
                  
                  <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-blue-600">
                    {React.cloneElement(tab.icon as React.ReactElement, { size: 32 })}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tab.label}</h3>
                  
                  <div className="space-y-4 flex-grow">
                    {tab.points.map((point, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="mt-1.5 bg-blue-600/10 p-0.5 rounded-full text-blue-600">
                          <CheckCircle2 size={12} />
                        </div>
                        <p className="text-sm text-gray-600 leading-snug font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100/50">
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="text-blue-600 font-bold text-sm flex items-center group-hover:gap-2 transition-all"
                    >
                      Get Started <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Redesign */}
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-50/20 rounded-full blur-[180px] -z-10 animate-liquid" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                The Alfred Tripp Difference
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Why business owners <br />
                <span className="text-blue-600">trust Alfred Tripp.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I combine traditional values with modern technology to provide an accounting experience that's actually helpful.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Feature Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 bg-white/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/20 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">12+ Years of Expertise</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  Coming from a family of accountants, I've lived and breathed this for over a decade. I bring deep technical knowledge combined with a genuine understanding of small business challenges.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors duration-500" />
              <div className="absolute bottom-0 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Calculator size={200} className="text-blue-900" />
              </div>
            </motion.div>

            {/* Proactive Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-600 p-10 rounded-[3rem] shadow-2xl shadow-blue-200/40 text-white relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                <img 
                  src={stock1} 
                  alt="Business growth and financial planning background" 
                  className="w-full h-full object-cover grayscale mix-blend-soft-light" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Proactive, Not Reactive</h3>
                <p className="text-blue-50 text-sm leading-relaxed">
                  I don't just wait for you to call. I spot tax-saving opportunities and potential issues before they even cross your mind.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Human Support Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src={alfie2} alt="Alfred Tripp - Human Support and Personal Service" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <UserCheck className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Human Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No call centres. No ticketing systems. Just direct access to your dedicated accountant whenever you need it.
                </p>
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 bg-gray-900 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="grid sm:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Fixed, Transparent Pricing</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    No surprise bills. No hidden extras. You'll always know exactly what you're paying for with my clear, upfront pricing.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Monthly Fee</span>
                      <span className="text-green-400 font-bold">Fixed</span>
                    </div>
                    <div className="text-4xl font-black text-white mb-2">£120<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything You Need - Redesigned */}
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center py-32">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[150px] -z-10 animate-liquid" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-50/10 rounded-full blur-[180px] -z-10 animate-liquid animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                My Core Services
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Everything you need, <br />
                <span className="text-blue-600 font-black">nothing you don't.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I've productised my services so you know exactly what you're getting. No hidden fees, no hourly rates—just pure value.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Users size={32} />, 
                title: "Monthly Accounting", 
                desc: "Full support for limited companies. Payroll, VAT, and year-end accounts handled proactively by experts who care.",
                price: "From £120/mo",
                features: ["Dedicated Accountant", "Monthly Payroll", "VAT Returns", "Year-End Accounts"],
                color: "blue"
              },
              { 
                icon: <FileText size={32} />, 
                title: "Self Assessment", 
                desc: "Stress-free tax returns for sole traders and directors. I find every legal saving possible to keep more in your pocket.",
                price: "From £250/year",
                features: ["Full Tax Return", "Income Review", "HMRC Liaison", "Payment Reminders"],
                color: "indigo"
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: "Business Advisory", 
                desc: "Strategic guidance to help you scale. I look at the numbers to tell you what to do next to reach your goals.",
                price: "Custom Quote",
                features: ["Cash Flow Forecast", "Growth Strategy", "Tax Planning", "Performance Review"],
                color: "green"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/20 hover:shadow-blue-200/40 transition-all duration-500 h-full flex flex-col items-start text-left group-hover:-translate-y-2">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    service.color === 'blue' ? "bg-blue-600 text-white shadow-blue-200" :
                    service.color === 'indigo' ? "bg-indigo-600 text-white shadow-indigo-200" :
                    "bg-green-600 text-white shadow-green-200"
                  )}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">{service.desc}</p>
                  
                  <ul className="space-y-3 mb-10 w-full">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-xs text-gray-500 font-medium">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full mr-3",
                          service.color === 'blue' ? "bg-blue-600" :
                          service.color === 'indigo' ? "bg-indigo-600" :
                          "bg-green-600"
                        )} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="w-full pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Starting At</p>
                      <p className="text-xl font-black text-gray-900">{service.price.split(' ')[1] || service.price}</p>
                    </div>
                    <button 
                      onClick={() => setCurrentPage('services')}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1",
                        service.color === 'blue' ? "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white" :
                        service.color === 'indigo' ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white" :
                        "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
                      )}
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Decorative glow on hover */}
                <div className={cn(
                  "absolute -inset-1 rounded-[3.1rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10",
                  service.color === 'blue' ? "bg-blue-600" :
                  service.color === 'indigo' ? "bg-indigo-600" :
                  "bg-green-600"
                )} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned */}
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/20 rounded-full blur-[180px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                  The Onboarding Process
                </div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                  Getting started <br />
                  <span className="text-blue-600">is simple.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  Three steps to financial peace of mind. I've streamlined my onboarding to get you up and running without the stress.
                </p>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Just Give Me a Call", desc: "Call me on 02380 361 948 for a quick chat to understand your business and tax needs. No pressure, just clarity." },
                    { step: "02", title: "Get Your Custom Plan", desc: "I'll propose a fixed-price package that fits you perfectly. Total transparency from day one." },
                    { step: "03", title: "Relax & Grow", desc: "I handle the compliance and HMRC stress, you focus on what you're best at." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-blue-600 font-black text-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <img 
                  src={alfie4} 
                  alt="Alfred Tripp Accountancy Onboarding Process - Simple Accounting Setup Hampshire" 
                  className="w-full h-auto object-cover rounded-[3rem] shadow-2xl border border-white/60 transform hover:scale-[1.02] transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Contact Form */}
      <section className="min-h-screen bg-transparent relative overflow-hidden py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/20 rounded-full blur-[180px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                  Ready to finally <br />
                  feel in <br />
                  <span className="text-blue-600 font-black">control of your finances?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Stop worrying about HMRC and start focusing on your business. Whether you're starting out or looking to switch, I'm here to help.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Me</p>
                      <p className="text-xl font-bold text-gray-900">02380 361 948</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Me</p>
                      <p className="text-xl font-bold text-gray-900">alfietripp@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/60 shadow-2xl"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section - Not constrained to h-screen but is a snap target */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const services = [
    {
      title: "Monthly Accounting",
      subtitle: "For Limited Companies",
      description: "Complete financial management for your company, ensuring compliance and providing strategic insights.",
      icon: <BarChart3 size={28} />,
      features: [
        "Dedicated AAT Accountant",
        "Year-End Statutory Accounts",
        "Corporation Tax Returns",
        "Quarterly VAT & MTD Compliance",
        "Monthly Payroll (up to 5 employees)",
        "Strategic Tax Planning Reviews",
        "Unlimited Email & Phone Support"
      ],
      price: "£120",
      period: "/mo",
      color: "blue"
    },
    {
      title: "Self Assessment",
      subtitle: "For Sole Traders & Individuals",
      description: "Stress-free tax returns for freelancers, sole traders, and individuals with complex tax affairs.",
      icon: <FileText size={28} />,
      features: [
        "Full Self Assessment Tax Return",
        "Personal Income & Expense Review",
        "Capital Gains Tax Calculations",
        "HMRC Representation & Liaison",
        "Key Tax Deadline Reminders",
        "Basic Bookkeeping Review",
        "Mortgage/Rental References"
      ],
      price: "£250",
      period: "/yr",
      color: "green"
    },
    {
      title: "Startup Launchpad",
      subtitle: "For New Ventures",
      description: "Everything you need to get your new business off the ground correctly from day one.",
      icon: <Rocket size={28} />,
      features: [
        "Limited Company Formation",
        "HMRC Business Registration",
        "Xero/QuickBooks Setup & Training",
        "Initial Business Plan Review",
        "First Year Tax Strategy",
        "Founders' Agreement Advice",
        "SEIS/EIS Compliance Check"
      ],
      price: "£495",
      period: " fixed",
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                My Expertise
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Productised Services. <br />
                <span className="text-blue-600">Total Transparency.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                I don't believe in hourly rates or hidden fees. My services are packaged to provide maximum value with predictable, upfront pricing that scales with your business.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/20 flex flex-col group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:rotate-6",
                    service.color === 'blue' ? "bg-blue-600 shadow-blue-200 text-white" :
                    service.color === 'green' ? "bg-green-600 shadow-green-200 text-white" :
                    "bg-indigo-600 shadow-indigo-200 text-white"
                  )}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className={cn(
                    "text-xs font-bold uppercase tracking-widest mb-4",
                    service.color === 'blue' ? "text-blue-600" :
                    service.color === 'green' ? "text-green-600" :
                    "text-indigo-600"
                  )}>{service.subtitle}</p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-10 flex-grow">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={cn(
                          "mt-1 p-0.5 rounded-full",
                          service.color === 'blue' ? "bg-blue-600/10 text-blue-600" :
                          service.color === 'green' ? "bg-green-600/10 text-green-600" :
                          "bg-indigo-600/10 text-indigo-600"
                        )}>
                          <CheckCircle2 size={14} />
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100">
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-black text-gray-900">{service.price}</span>
                      <span className="text-gray-500 font-bold text-sm">{service.period}</span>
                    </div>
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className={cn(
                        "w-full py-4 rounded-full text-sm font-bold transition-all active:scale-95 shadow-xl",
                        service.color === 'blue' ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200/50" :
                        service.color === 'green' ? "bg-green-600 text-white hover:bg-green-700 shadow-green-200/50" :
                        "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200/50"
                      )}
                    >
                      Choose {service.title}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a bespoke solution?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              If your business has unique requirements or you're looking for a combination of services, I can create a custom package that fits your needs perfectly.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-gray-900 px-10 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition-all shadow-2xl active:scale-95"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const values = [
    {
      title: "Human First",
      description: "Behind every balance sheet is a human story. I prioritize relationships over spreadsheets.",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      title: "Radical Transparency",
      description: "No hidden fees, no jargon. Just clear, honest communication and fixed pricing.",
      icon: <ShieldCheck className="text-green-600" size={24} />
    },
    {
      title: "Proactive Growth",
      description: "I don't just record the past; I help you plan for the future with strategic insights.",
      icon: <TrendingUp className="text-indigo-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                My Story
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                Accountancy is in <br />
                <span className="text-blue-600">My DNA.</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm Alfred Tripp, but most people call me Alfie. I'm a licensed AAT accountant with over 12 years of experience helping UK small businesses thrive.
                </p>
                <p>
                  My journey started long before my professional qualifications. I grew up watching my grandfather run his own accountancy firm for 46 years. He taught me that a great accountant isn't just a number-cruncher; they're a trusted advisor and a steady hand in turbulent times.
                </p>
                <p>
                  Today, I carry that legacy forward, combining traditional values of integrity and personal service with modern technology and proactive thinking.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-1">12+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-1">20+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Businesses Helped</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={alfie3} 
                  className="w-full h-auto object-cover aspect-[4/5]" 
                  alt="Alfred Tripp - Licensed AAT Accountant in Chandler's Ford, Southampton" 
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/50 max-w-[280px] z-20 hidden md:block">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />)}
                </div>
                <p className="text-sm text-gray-800 italic leading-relaxed font-medium">
                  "I highly recommend Alfie Tripp Accountancy. He genuinely cares and is passionate about his standard of work quality."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                    KR
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Kylum Raquet</p>
                    <p className="text-[10px] text-gray-500">Client</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision I make and every client I serve.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-100/20 border border-gray-100 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">Ready to start your story?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Join over 20 businesses that trust Alfred Tripp Accountancy to handle their finances with care, expertise, and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white text-blue-600 px-10 py-4 rounded-full text-base font-bold hover:bg-blue-50 transition-all shadow-xl active:scale-95"
                >
                  Book a Free Consultation
                </button>
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="bg-blue-700 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-blue-800 transition-all border border-blue-500/30 active:scale-95"
                >
                  View My Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

const PricingPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const plans = [
    {
      name: "Sole Trader",
      price: "£45",
      period: "/mo",
      desc: "Perfect for freelancers and independent contractors.",
      features: [
        "Self Assessment Tax Return",
        "Quarterly Bookkeeping Review",
        "HMRC Registration & Liaison",
        "Basic Tax Planning Advice",
        "Unlimited Email Support",
        "Xero/QuickBooks Integration"
      ],
      cta: "Start Sole Trader",
      popular: false,
      color: "green"
    },
    {
      name: "Limited Company",
      price: "£120",
      period: "/mo",
      desc: "My most popular package for small UK businesses.",
      features: [
        "Statutory Year-End Accounts",
        "Corporation Tax Returns",
        "Quarterly VAT Returns (MTD)",
        "Monthly Payroll (up to 2 staff)",
        "Strategic Tax Planning Reviews",
        "Unlimited Phone & Email Support",
        "Company Secretarial Services"
      ],
      cta: "Choose Limited",
      popular: true,
      color: "blue"
    },
    {
      name: "Growth & Strategy",
      price: "£250",
      period: "/mo",
      desc: "For businesses ready to scale with expert guidance.",
      features: [
        "Everything in Limited Company",
        "Monthly Management Accounts",
        "Quarterly Strategy Board Meetings",
        "Cash Flow Forecasting & Analysis",
        "Monthly Payroll (up to 10 staff)",
        "Dedicated Account Manager",
        "R&D Tax Credit Assessment"
      ],
      cta: "Go for Growth",
      popular: false,
      color: "indigo"
    }
  ];

  const faqs = [
    {
      q: "Are there any hidden setup fees?",
      a: "No. I believe in total transparency. The price you see is the price you pay. For my Startup Launchpad, there is a one-off fee, but for monthly packages, there are no hidden setup costs."
    },
    {
      q: "Can I switch plans later?",
      a: "Absolutely. As your business grows or changes, you can move between my Sole Trader, Limited Company, and Growth packages at any time with just 30 days' notice."
    },
    {
      q: "Do you include accounting software?",
      a: "I am a partner with Xero, QuickBooks, and Sage. While the software subscription itself is usually separate, I provide full setup, training, and ongoing support as part of your package."
    },
    {
      q: "What happens if I have a quick question?",
      a: "All my plans include unlimited email support. My Limited and Growth plans also include unlimited phone support. I'm available to text on WhatsApp whenever or call during working hours. I want you to ask questions before making big decisions!"
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200/50">
                Transparent Pricing
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Simple. Fixed. <span className="text-blue-600">Fair.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                No hidden fees. No hourly rates. Just clear, predictable packages designed to support your business at every stage of its journey.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative bg-white p-10 rounded-[3rem] border transition-all duration-500 flex flex-col group",
                  plan.popular 
                    ? "border-blue-600 shadow-2xl shadow-blue-100 ring-4 ring-blue-50 lg:-translate-y-4" 
                    : "border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl hover:-translate-y-2"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-blue-200">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 font-bold text-lg">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-1 p-0.5 rounded-full",
                        plan.color === 'blue' ? "bg-blue-600/10 text-blue-600" :
                        plan.color === 'green' ? "bg-green-600/10 text-green-600" :
                        "bg-indigo-600/10 text-indigo-600"
                      )}>
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentPage('contact')}
                  className={cn(
                    "w-full py-5 rounded-full text-base font-bold transition-all active:scale-95 shadow-xl",
                    plan.popular 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" 
                      : "bg-gray-900 text-white hover:bg-gray-800 shadow-gray-200"
                  )}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Everything you need to know about my pricing and services.</p>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6 font-medium">Still have questions?</p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
            >
              Chat with me <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Limited Company',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Business Type: ${formData.businessType}`,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        let errorMessage = 'Something went wrong. Please try again.';
        try {
          const data = await response.json();
          errorMessage = data.error || errorMessage;
        } catch (e) {
          // If response is not JSON (e.g. 404 HTML page)
          console.error('Error parsing response:', e);
          if (response.status === 404) {
            errorMessage = 'The contact service is currently unavailable (404).';
          } else if (response.status === 500) {
            errorMessage = 'The server encountered an error. Please try again later (500).';
          }
        }
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to connect to the server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-6"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Business Type</label>
        <select 
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all appearance-none"
        >
          <option>Limited Company</option>
          <option>Sole Trader / Freelancer</option>
          <option>New Startup</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Message</label>
        <textarea 
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell me a bit about your business..."
          className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
        ></textarea>
      </div>
      
      {error && (
        <p className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-xl border border-red-100 italic">
          {error}
        </p>
      )}

      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>Send Message <Send size={16} className="ml-2" /></>
        )}
      </button>
    </form>
  );
};

const ContactPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-transparent relative overflow-hidden py-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Let's talk.</h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Whether you're starting out or looking to switch, I'm here to help. Book a free consultation today.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center mr-3 text-blue-600">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Call Me</p>
                    <p className="text-sm font-bold text-gray-900">02380 361 948</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center mr-3 text-blue-600">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
                    <p className="text-sm font-bold text-gray-900">alfietripp@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start sm:col-span-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center mr-3 text-blue-600 mt-1">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Visit Me</p>
                    <p className="text-sm font-bold text-gray-900">Tree Tops, Richmond Close, Chandler's Ford, SO53 5RA</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.456846313426!2d-1.393444423456789!3d50.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874738543210987%3A0x1234567890abcdef!2sRichmond%20Cl%2C%20Chandler's%20Ford%2C%20Eastleigh%20SO53%205RA%2C%20UK!5e0!3m2!1sen!2suk!4v1712420000000!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alfred Tripp Accountancy Location"
                />
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-3xl p-6 rounded-3xl border border-white/40 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section - Not constrained to h-screen but is a snap target */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

const TestimonialsPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-transparent relative overflow-hidden py-20">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">What my clients say.</h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Real stories from small business owners who finally found an accountant they can trust.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Kylum Raquet", 
                role: "Client", 
                text: "I highly recommend Alfie Tripp Accountancy, because not only is he providing an excellent service to stay compliant with your financial needs, he’s one of few in todays age that isn’t corrupted by corporate ways and isn’t just in it for the monetary gain. He genuinely cares and is passionate about his standard of work quality he provides. Thank you for everything Alfie.😊" 
              },
              { 
                name: "K-Tech cars", 
                role: "Business Owner", 
                text: "Excellent service! Helped me start my business and guided me to stay complaint, made everything simple and stress free👍📈" 
              },
              { 
                name: "Connor Wallace", 
                role: "Business Owner", 
                text: "Alfred has been a great help with my tax and Self Assessment, offering clear guidance for my business. I wouldn’t be where I am without his support—highly recommend!" 
              },
              { 
                name: "Harrison Burgess", 
                role: "Company Director", 
                text: "Great accountant so far since we’ve worked together, he’s massively helped me with my tax, filling in my self assessment form and guiding me to make the correct financial decisions within my business. My company wouldn’t be where it is now without him!!" 
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-2xl p-6 sm:p-10 rounded-[2.5rem] border border-white/60 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform" size={14} />)}
                </div>
                <p className="text-sm sm:text-base text-gray-700 italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mr-4 text-blue-600 font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section - Not constrained to h-screen but is a snap target */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'reduce-corporation-tax',
    title: "7 Ways to Reduce Corporation Tax",
    category: "Tax Savings",
    date: "Mar 15, 2026",
    image: blog1,
    content: `
      <p>Reducing your Corporation Tax liability is a key part of financial planning for any UK limited company. Here are seven effective ways to legally minimize your tax bill and keep more profit in your business.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Claim All Allowable Business Expenses</h3>
      <p>Ensure you are claiming for every legitimate business expense. This includes office costs, travel, insurance, and professional fees. Even small items like stationery and software subscriptions add up over the year.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Use Capital Allowances</h3>
      <p>When you buy assets for your business, such as equipment, machinery, or vehicles, you can often deduct the full cost from your profits before tax through the Annual Investment Allowance (AIA).</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Pay Yourself a Salary</h3>
      <p>Salaries are a tax-deductible expense for a limited company. By paying yourself a salary (up to the relevant thresholds), you reduce the company's taxable profit while utilizing your personal tax-free allowance.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">4. Pension Contributions</h3>
      <p>Employer pension contributions are generally treated as an allowable business expense. This is one of the most tax-efficient ways to extract profit from your company while saving for your future.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">5. Research and Development (R&D) Tax Credits</h3>
      <p>If your company is innovating or solving technical problems, you may be eligible for R&D tax credits. This can provide significant tax relief or even a cash payment from HMRC.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">6. Pay Your Tax Bill Early</h3>
      <p>HMRC actually pays interest (known as 'credit interest') if you pay your Corporation Tax early. While the rate isn't huge, it's better than nothing!</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">7. Don't Miss the Deadline</h3>
      <p>Avoiding penalties is the easiest way to save money. Ensure your accounts and tax returns are filed on time to avoid unnecessary fines and interest charges.</p>
      
      <p class="mt-8 font-bold text-blue-600">Need help optimizing your tax? Contact Alfred Tripp today for a proactive review of your business finances.</p>
    `
  },
  {
    id: 'sole-trader-vs-limited',
    title: "Sole Trader vs Limited Company",
    category: "Structure",
    date: "Mar 10, 2026",
    image: "1586281380117-5a60ae2050cc",
    content: `
      <p>Choosing the right business structure is one of the most important decisions you'll make. Both Sole Trader and Limited Company structures have their pros and cons. Here's a breakdown to help you decide.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Sole Trader: Simple and Direct</h3>
      <p>Being a sole trader is the simplest way to run a business. You are the business. You have fewer administrative burdens and lower accounting costs.</p>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Pros:</strong> Easy to set up, full control, privacy (accounts aren't public).</li>
        <li><strong>Cons:</strong> Unlimited personal liability, can be less tax-efficient at higher income levels.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Limited Company: Professional and Protected</h3>
      <p>A limited company is a separate legal entity from its owners. This provides "limited liability," meaning your personal assets are generally protected if the business runs into trouble.</p>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Pros:</strong> Limited liability, tax-efficient (salary/dividend split), professional image.</li>
        <li><strong>Cons:</strong> More paperwork (Companies House filings), accounts are public, higher accounting fees.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Which is right for you?</h3>
      <p>Generally, if you're just starting out and your profits are low, being a sole trader is often easier. As your profits grow (typically above £30k-£40k), the tax savings of a limited company often outweigh the extra administrative costs.</p>
      
      <p class="mt-8 font-bold text-blue-600">Unsure which structure to choose? Let's have a chat about your specific situation.</p>
    `
  },
  {
    id: 'self-assessment-guide',
    title: "Self Assessment Guide",
    category: "Tax",
    date: "Mar 05, 2026",
    image: "1554224154-26032ffc0d07",
    content: `
      <p>Self Assessment can be a daunting task for many business owners. This guide breaks down the key steps and deadlines you need to know to stay compliant with HMRC.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Who needs to file?</h3>
      <p>You generally need to file a Self Assessment tax return if you are a sole trader earning over £1,000, a company director, or if you have other untaxed income (like rental income or dividends).</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Key Deadlines</h3>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>5th October:</strong> Deadline to register for Self Assessment.</li>
        <li><strong>31st October:</strong> Deadline for paper tax returns.</li>
        <li><strong>31st January:</strong> Deadline for online tax returns and paying your tax bill.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Top Tips for a Smooth Filing</h3>
      <p>Keep your records organized throughout the year. Use accounting software to track your income and expenses in real-time. Don't leave it until the last minute—HMRC's systems can get busy in January!</p>
      
      <p class="mt-8 font-bold text-blue-600">Want to take the stress out of your tax return? I offer fixed-fee Self Assessment services to ensure you're compliant and saving tax.</p>
    `
  }
];

const BlogPage = ({ setCurrentPage, selectedPost, setSelectedPost }: { setCurrentPage: (p: Page) => void, selectedPost: BlogPost | null, setSelectedPost: (p: BlogPost | null) => void }) => {
  if (selectedPost) {
    return (
      <div className="min-h-screen scroll-smooth bg-transparent">
        <section className="pt-32 pb-20 bg-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-liquid" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-blue-600 font-bold mb-8 hover:gap-2 transition-all"
            >
              <ArrowRight size={18} className="rotate-180 mr-2" /> Back to Blogs
            </button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-bold tracking-wide uppercase mb-4">
                {selectedPost.category}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                {selectedPost.title}
              </h1>
              <p className="text-gray-400 text-sm mb-8">{selectedPost.date} • By Alfred Tripp</p>
              
              <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
                <img 
                  src={selectedPost.image.includes('unsplash.com') || !selectedPost.image.includes('.') ? `https://images.unsplash.com/photo-${selectedPost.image}?auto=format&fit=crop&q=80&w=1200&h=600` : selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div 
                className="prose prose-blue max-w-none text-gray-600 space-y-6 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-200">
                  <h3 className="text-2xl font-bold mb-4">Have questions about this topic?</h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto">I'm here to help you navigate the complexities of tax and accounting. Let's have a quick chat.</p>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
          <div className="relative z-10">
            <CertificationsSection />
            <Footer setCurrentPage={setCurrentPage} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-smooth bg-transparent">
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-transparent relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10 animate-liquid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Blogs</h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Expert advice on tax, accounting, and business growth. No jargon.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedPost(post)}
                className="bg-white/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-sm border border-white/40 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="h-24 sm:h-32 bg-gray-200 relative overflow-hidden">
                  <img src={post.image.includes('unsplash.com') || !post.image.includes('.') ? `https://images.unsplash.com/photo-${post.image}?auto=format&fit=crop&q=80&w=800&h=600` : post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={`Accounting resources and tax advice blog - ${post.title}`} referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] text-gray-400 mb-1">{post.date}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                  <button className="text-[10px] font-bold text-gray-900 flex items-center group-hover:translate-x-1 transition-transform">
                    Read Article <ChevronRight size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section - Not constrained to h-screen */}
      <section className="bg-transparent relative overflow-hidden pt-12 pb-8">
        <div className="relative z-10">
          <CertificationsSection />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </section>
    </div>
  );
};

// --- Liquid Background Component ---

const LiquidBackground = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
    {/* Base Mesh Gradient */}
    <div className="absolute inset-0 bg-mesh opacity-40" />
    
    {/* Texture Overlays */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
    <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
    <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />
    
    {/* Animated Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[140px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/15 rounded-full blur-[140px] animate-blob animation-delay-2000" />
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
    <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-6000" />
    <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-sky-500/10 rounded-full blur-[100px] animate-blob animation-delay-3000" />

    {/* Floating Particles & Abstract Shapes */}
    <div className="absolute top-[15%] left-[25%] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40" />
    <div className="absolute top-[45%] right-[20%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-2000 opacity-30" />
    <div className="absolute bottom-[35%] left-[15%] w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse animation-delay-4000 opacity-40" />
    <div className="absolute top-[75%] right-[35%] w-2.5 h-2.5 bg-indigo-300 rounded-full animate-pulse animation-delay-1000 opacity-30" />
    
    {/* Subtle Glass Shards (Decorative) */}
    <div className="absolute top-[30%] left-[10%] w-32 h-32 bg-white/5 border border-white/10 rounded-full rotate-12 backdrop-blur-[2px]" />
    <div className="absolute bottom-[25%] right-[15%] w-48 h-48 bg-white/5 border border-white/10 rounded-3xl -rotate-12 backdrop-blur-[2px]" />
    
    {/* Light Rays Effect */}
    <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-200/10 to-transparent rotate-[15deg]" />
    <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-200/10 to-transparent -rotate-[10deg]" />
  </div>
);

// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Scroll to top on page change and update document title for SEO
  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo(0, 0);
    }

    // Reset blog selection when navigating away from blog page
    if (currentPage !== 'blog') {
      setSelectedBlogPost(null);
    }
    
    // Dynamic SEO Titles
    const titles: Record<Page, string> = {
      home: "Alfred Tripp l Expert Accountant in Southampton & Hampshire",
      services: "Accounting Services in Southampton | Tax, VAT & Bookkeeping",
      about: "About Alfred Tripp | Licensed AAT Accountant in Hampshire",
      pricing: "Transparent Accounting Pricing | Fixed Fees for Small Business",
      testimonials: "Client Testimonials | Trusted Accountant in South of England",
      blog: selectedBlogPost ? `${selectedBlogPost.title} | Alfred Tripp Blog` : "Blogs | Alfred Tripp Accountancy",
      contact: "Contact Alfred Tripp | Book a Free Accounting Consultation",
      privacy: "Privacy Policy | Alfred Tripp Accountancy",
      terms: "Terms of Service | Alfred Tripp Accountancy",
      cookies: "Cookie Policy | Alfred Tripp Accountancy",
      '404': "Page Not Found | Alfred Tripp Accountancy",
      'lead-magnet': "Free Accounting Guide | Alfred Tripp Accountancy"
    };
    
    document.title = titles[currentPage] || "Alfred Tripp l Accountancy Services";
  }, [currentPage, selectedBlogPost]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'pricing': return <PricingPage setCurrentPage={setCurrentPage} />;
      case 'testimonials': return <TestimonialsPage setCurrentPage={setCurrentPage} />;
      case 'blog': return <BlogPage setCurrentPage={setCurrentPage} selectedPost={selectedBlogPost} setSelectedPost={setSelectedBlogPost} />;
      case 'contact': return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'privacy': return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
      case 'terms': return <TermsOfServicePage setCurrentPage={setCurrentPage} />;
      case 'cookies': return <CookiePolicyPage setCurrentPage={setCurrentPage} />;
      case '404': return <NotFoundPage setCurrentPage={setCurrentPage} />;
      default: return <NotFoundPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 relative">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedPost={setSelectedBlogPost} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <LiquidBackground />
      <CookieConsent />
    </div>
  );
}

// --- Additional Components ---

const NotFoundPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] animate-liquid" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <h1 className="text-8xl font-black text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! It looks like the page you're looking for has been moved or doesn't exist. Let's get you back on track.
        </p>
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center mx-auto"
        >
          Back to Home <ArrowRight size={18} className="ml-2" />
        </button>
      </motion.div>
    </div>
  );
};

const PolicyLayout = ({ title, children, setCurrentPage }: { title: string, children: React.ReactNode, setCurrentPage: (p: Page) => void }) => (
  <div className="min-h-screen pt-32 pb-20 bg-transparent relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-liquid" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">{title}</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          {children}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-blue-600 font-bold flex items-center hover:gap-2 transition-all"
          >
            <ArrowRight size={18} className="rotate-180 mr-2" /> Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  </div>
);

const PrivacyPolicyPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <PolicyLayout title="Privacy Policy" setCurrentPage={setCurrentPage}>
    <p>Last updated: April 6, 2026</p>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
      <p>Alfred Tripp Accountancy ("I", "me", or "my") is committed to protecting and respecting your privacy. This policy explains how I collect, use, and protect your personal data when you use my website and services.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">2. Data I Collect</h2>
      <p>I may collect and process the following data about you:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Information you provide by filling in forms on my site (e.g., name, email, business type).</li>
        <li>Records of correspondence if you contact me.</li>
        <li>Details of your visits to my site and the resources you access.</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">3. How I Use Your Data</h2>
      <p>I use your information to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide you with information or services that you request from me.</li>
        <li>Carry out my obligations arising from any contracts entered into between you and me.</li>
        <li>Notify you about changes to my service.</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
      <p>I take appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">5. Contact</h2>
      <p>Questions, comments, and requests regarding this privacy policy should be addressed to alfietripp@gmail.com.</p>
    </section>
  </PolicyLayout>
);

const TermsOfServicePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <PolicyLayout title="Terms of Service" setCurrentPage={setCurrentPage}>
    <p>Last updated: April 6, 2026</p>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">2. Provision of Services</h2>
      <p>I provide accounting, tax, and business advisory services. The specific scope of work for any engagement will be outlined in a separate letter of engagement.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">3. Accuracy of Information</h2>
      <p>While I strive to ensure that the information on this website is correct, I do not warrant its completeness or accuracy; nor do I commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law, I exclude all representations, warranties, and conditions relating to my website and the use of this website.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales.</p>
    </section>
  </PolicyLayout>
);

const CookiePolicyPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <PolicyLayout title="Cookie Policy" setCurrentPage={setCurrentPage}>
    <p>Last updated: April 6, 2026</p>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">1. What are Cookies?</h2>
      <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">2. How I Use Cookies</h2>
      <p>I use cookies for the following purposes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Necessary Cookies:</strong> These are required for the operation of my website.</li>
        <li><strong>Analytical Cookies:</strong> They allow me to recognize and count the number of visitors and to see how visitors move around my website when they are using it.</li>
        <li><strong>Preference Cookies:</strong> These are used to recognize you when you return to my website.</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">3. Managing Cookies</h2>
      <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">4. Consent</h2>
      <p>By using my website, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by deleting cookies from your browser settings or using the cookie consent banner on my site.</p>
    </section>
  </PolicyLayout>
);

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (type: 'accept' | 'decline') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/60 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4 flex-grow">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Cookie Preferences</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    I use cookies to enhance your experience and analyze my traffic. By clicking "Accept", you consent to my use of cookies.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto shrink-0">
                <button 
                  onClick={() => handleAction('decline')}
                  className="flex-grow md:flex-none px-8 bg-gray-100 text-gray-600 py-3 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all active:scale-95"
                >
                  Decline
                </button>
                <button 
                  onClick={() => handleAction('accept')}
                  className="flex-grow md:flex-none px-8 bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
