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
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Download,
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'testimonials' | 'blog' | 'contact' | 'lead-magnet';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Blog', id: 'blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/90 backdrop-blur-md py-3 border-gray-200 shadow-sm" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <img src="/black.png" alt="Alfred Tripp Accountancy" className="h-20 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                currentPage === link.id ? "text-blue-600" : "text-gray-600"
              )}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
            {isOpen ? <X /> : <Menu />}
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
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsOpen(false);
                }}
                className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-md text-base font-semibold"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <img src="/black.png" alt="Alfred Tripp Accountancy" className="h-16 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Simple, proactive accounting for UK small businesses. We help you save tax, stay compliant, and stay in control.
          </p>
          <div className="flex space-x-4">
            <a href="https://uk.linkedin.com/in/alfredtripp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/at_accountancy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/AlfredTrippAccountancy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/AlfredTrippAccountant" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
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
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
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
              <span>Alfiewtripp@gmail.com</span>
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
        <p>© 2026 Alfred Tripp Accountancy. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
                <ShieldCheck size={14} className="mr-2" />
                Licensed AAT Accountant
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Accounting that gives you <span className="text-blue-600">Clarity</span>, not a Headache.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Simple, proactive accounting for UK small businesses and freelancers. We handle the HMRC stress so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 active:scale-95 flex items-center justify-center"
                >
                  Get In Touch <ChevronRight className="ml-2" size={20} />
                </button>
                <button 
                  onClick={() => setCurrentPage('pricing')}
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  See Pricing
                </button>
              </div>
              <div className="mt-10 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Client" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p>Joined by <span className="font-bold text-gray-900">500+</span> UK small businesses</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Tax Savings</h3>
                      <p className="text-xs text-gray-500">Projected for 2026</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-600">£4,250+</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>Compliance Check</span>
                    <span className="text-blue-600 italic">100% Secure</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Deadlines</p>
                    <p className="text-sm font-bold text-gray-900">0 Missed</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Response Time</p>
                    <p className="text-sm font-bold text-gray-900">&lt; 2 Hours</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-70 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Professional Certifications & Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500">
              <img src="/hmrc.png" alt="HM Revenue & Customs" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
              <img src="/quickbooks.png" alt="QuickBooks" className="h-8 md:h-10 object-contain" referrerPolicy="no-referrer" />
              <img src="/Sage 50.png" alt="Sage 50" className="h-8 md:h-10 object-contain" referrerPolicy="no-referrer" />
              <img src="/Xero-Bronze-Partner-Logo.jpg" alt="Xero Bronze Partner" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
              <img src="/AAT.png" alt="AAT Licensed Accountant" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (PAS) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Accountancy shouldn't be your second full-time job.</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Most small business owners spend over 10 hours a month wrestling with spreadsheets, worrying about HMRC deadlines, and wondering if they're overpaying tax.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "HMRC Anxiety", desc: "The constant fear of a letter through the door or a fine for a missed deadline." },
              { title: "Financial Fog", desc: "Not knowing exactly how much profit you've made or what your next tax bill will be." },
              { title: "Jargon Overload", desc: "Accountants who talk in codes and make you feel like you're back in a maths exam." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <X className="text-red-500 mb-4" size={24} />
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need, nothing you don't.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We've productised our services so you know exactly what you're getting and how much it costs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="text-blue-600" />, 
                title: "Monthly Accounting", 
                desc: "Full support for limited companies. Payroll, VAT, and year-end accounts handled proactively.",
                price: "From £120/mo"
              },
              { 
                icon: <FileText className="text-blue-600" />, 
                title: "Self Assessment", 
                desc: "Stress-free tax returns for sole traders and directors. We find every legal saving possible.",
                price: "From £250/year"
              },
              { 
                icon: <TrendingUp className="text-blue-600" />, 
                title: "Business Advisory", 
                desc: "Strategic guidance to help you scale. We look at the numbers to tell you what to do next.",
                price: "Custom Quote"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-bold">{service.price}</span>
                  <button onClick={() => setCurrentPage('services')} className="text-gray-900 font-bold text-sm flex items-center hover:text-blue-600 transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Alfred Tripp?</h2>
              <div className="space-y-8">
                {[
                  { title: "12+ Years Experience", desc: "Coming from a family of accountants, I've lived and breathed this for over a decade." },
                  { title: "Proactive, Not Reactive", desc: "We don't just wait for you to call. We spot tax-saving opportunities before you even think of them." },
                  { title: "Human Support", desc: "No call centres. No ticketing systems. Just direct access to your dedicated accountant." },
                  { title: "Fixed, Transparent Pricing", desc: "No surprise bills. You'll always know exactly what you're paying for." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full mr-4">
                      <CheckCircle2 className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/alfred.jpg" 
                className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-700" 
                alt="Alfred Tripp" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="italic text-lg mb-4">"Alfred has completely transformed how I view my business finances. I finally feel in control."</p>
                <p className="font-bold">— Sarah J., Tech Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Getting started is simple.</h2>
            <p className="text-gray-400">Three steps to financial peace of mind.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector lines (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Book a Free Call", desc: "A 15-minute chat to understand your business and tax needs." },
              { step: "02", title: "Get Your Custom Plan", desc: "We'll propose a fixed-price package that fits you perfectly." },
              { step: "03", title: "Relax & Grow", desc: "We handle the compliance, you focus on what you're best at." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-lg shadow-blue-600/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all active:scale-95"
            >
              Start the Process
            </button>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free UK Small Business Tax Savings Guide</h2>
              <p className="text-gray-600 mb-8">Download our 2026 guide and discover 7 legal ways to reduce your tax bill this year. No jargon, just results.</p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); setCurrentPage('lead-magnet'); }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none"
                  required
                />
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center">
                  Get My Guide <Download className="ml-2" size={18} />
                </button>
              </form>
              <p className="text-[10px] text-gray-400 mt-4 text-center sm:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </div>
            <div className="w-48 h-64 bg-gray-100 rounded-xl shadow-inner flex items-center justify-center transform rotate-6 hidden md:flex">
              <FileText size={64} className="text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">Ready to finally feel in control of your finances?</h2>
          <p className="text-xl text-gray-600 mb-12">Stop worrying about HMRC and start focusing on your business. Let's talk.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-200/50 active:scale-95"
          >
            Book Your Free Consultation
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-blue-600" /> No Obligation</span>
            <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-blue-600" /> Fixed Pricing</span>
            <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-blue-600" /> Expert Advice</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Productised Services for Modern Businesses</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We don't believe in hourly rates or hidden fees. Our services are packaged to provide maximum value with total transparency.
          </p>
        </div>

        <div className="space-y-24">
          {[
            {
              title: "Monthly Accounting & Tax Support",
              subtitle: "The complete peace-of-mind package for Limited Companies.",
              features: [
                "Dedicated Licensed Accountant",
                "Full Year-End Statutory Accounts",
                "Corporation Tax Returns",
                "Quarterly VAT Returns",
                "Monthly Payroll (up to 5 employees)",
                "Proactive Tax-Saving Reviews",
                "Unlimited Email & Phone Support"
              ],
              idealFor: "Small limited companies looking to scale without the compliance stress.",
              price: "From £120 / Month"
            },
            {
              title: "Self Assessment Done For You",
              subtitle: "Stress-free tax returns for Sole Traders and Directors.",
              features: [
                "Full Self Assessment Tax Return",
                "Income & Expenditure Review",
                "Capital Gains Tax Advice",
                "HMRC Representation",
                "Tax Payment Reminders",
                "Basic Bookkeeping Review"
              ],
              idealFor: "Freelancers, sole traders, and company directors.",
              price: "From £250 / Year"
            },
            {
              title: "Startup Launchpad",
              subtitle: "Everything you need to get your new venture off the ground.",
              features: [
                "Company Formation & Registration",
                "HMRC Registration (VAT, PAYE, Corp Tax)",
                "Accounting Software Setup & Training",
                "Initial Business Plan Review",
                "First 3 Months Bookkeeping Support",
                "Founders' Tax Planning"
              ],
              idealFor: "New entrepreneurs launching their first business.",
              price: "One-off £495"
            }
          ].map((service, i) => (
            <div key={i} className={cn(
              "flex flex-col lg:flex-row gap-12 items-center",
              i % 2 !== 0 && "lg:flex-row-reverse"
            )}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-lg text-blue-600 font-medium mb-8">{service.subtitle}</p>
                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-bold text-gray-900 mb-1">Ideal For:</p>
                  <p className="text-sm text-gray-600">{service.idealFor}</p>
                </div>
              </div>
              <div className="w-full lg:w-80 bg-gray-900 text-white p-10 rounded-3xl text-center shadow-2xl">
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Investment</p>
                <p className="text-3xl font-black mb-8">{service.price}</p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-all mb-4">
                  Get Started
                </button>
                <p className="text-[10px] text-gray-500">Prices exclude VAT. Fixed fee guarantee.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Accountancy is in my DNA.</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              I'm Alfred Tripp, a licensed AAT accountant with over 12 years of experience helping UK small businesses thrive.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My journey started long before my professional qualifications. I grew up watching my grandfather run his own accountancy firm for 46 years. He taught me that behind every balance sheet is a human story, a family, and a dream.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-blue-600 mb-1">12+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600 mb-1">500+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Clients Helped</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/alfred.jpg" 
              className="rounded-3xl shadow-2xl" 
              alt="Alfred Tripp" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 fill-current" size={16} />
                <Star className="text-yellow-400 fill-current" size={16} />
                <Star className="text-yellow-400 fill-current" size={16} />
                <Star className="text-yellow-400 fill-current" size={16} />
                <Star className="text-yellow-400 fill-current" size={16} />
              </div>
              <p className="text-sm text-gray-600 italic">"Alfred isn't just an accountant; he's a strategic partner who genuinely cares about my success."</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 md:p-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "To strip away the jargon and complexity of accounting, giving small business owners the clarity and confidence they need to build something remarkable."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Simple, Fixed Pricing.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">No hidden fees. No hourly rates. Just transparent packages designed for your business stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sole Trader",
              price: "£45",
              period: "per month",
              desc: "Perfect for freelancers and individual contractors.",
              features: ["Self Assessment Tax Return", "Basic Bookkeeping Support", "Tax Saving Advice", "Direct Email Support"],
              cta: "Get Started",
              popular: false
            },
            {
              name: "Limited Company",
              price: "£120",
              period: "per month",
              desc: "Our most popular package for small businesses.",
              features: ["Year-End Accounts", "Corporation Tax Return", "VAT Returns", "Payroll (up to 2 staff)", "Unlimited Support", "Proactive Tax Planning"],
              cta: "Choose Limited",
              popular: true
            },
            {
              name: "Growth",
              price: "£250",
              period: "per month",
              desc: "For businesses looking for strategic financial guidance.",
              features: ["Everything in Limited", "Monthly Management Accounts", "Quarterly Strategy Calls", "Cash Flow Forecasting", "Payroll (up to 10 staff)"],
              cta: "Go for Growth",
              popular: false
            }
          ].map((plan, i) => (
            <div key={i} className={cn(
              "relative bg-white p-10 rounded-3xl border transition-all hover:shadow-2xl",
              plan.popular ? "border-blue-600 shadow-xl scale-105 z-10" : "border-gray-200 shadow-sm"
            )}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-8">{plan.desc}</p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 rounded-full font-bold transition-all",
                plan.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" : "bg-gray-900 text-white hover:bg-gray-800"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need something custom?</h3>
          <p className="text-gray-600 mb-8">We can build a bespoke package that fits your exact requirements.</p>
          <button className="text-blue-600 font-bold flex items-center justify-center mx-auto hover:underline">
            Request a Custom Quote <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Let's talk about your business.</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Whether you're just starting out or looking to switch accountants, I'm here to help. Book a free, no-obligation consultation today.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-gray-900">02380 361 948</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-gray-900">Alfiewtripp@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Office</p>
                  <p className="text-lg font-bold text-gray-900 leading-tight">
                    Tree Tops, Richmond Close<br />
                    Chandler's Ford, SO53 5RA
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Booking</p>
                  <p className="text-lg font-bold text-gray-900">Calendly Integration Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-600">Thanks for reaching out. Alfred will be in touch within 2 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-0 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-0 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Business Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-0 outline-none transition-all">
                    <option>Limited Company</option>
                    <option>Sole Trader / Freelancer</option>
                    <option>Contractor</option>
                    <option>Startup (Not yet registered)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">How can we help?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-0 outline-none transition-all" placeholder="Tell us a bit about your business..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50">
                  Send Message
                </button>
                <p className="text-[10px] text-gray-400 text-center">By submitting this form, you agree to our privacy policy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">What our clients say.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real stories from small business owners who finally found an accountant they can trust.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Founder, TechStart", text: "Alfred has been instrumental in our growth. He doesn't just do the books; he provides strategic advice that has saved us thousands in tax." },
            { name: "Mark Thompson", role: "Freelance Designer", text: "I used to dread tax season. Now, I just send my documents to Alfred and he handles everything. The clarity I have now is priceless." },
            { name: "Elena Rodriguez", role: "Director, Green Bloom", text: "The fixed pricing is a game-changer. I always know what I'm paying, and the proactive advice is something I've never had with previous accountants." },
            { name: "David Wilson", role: "Sole Trader", text: "Simple, jargon-free, and always responsive. Alfred makes accounting feel easy, which is exactly what I need as a busy sole trader." },
            { name: "Jessica Lee", role: "Startup Founder", text: "Alfred helped us from day one with company formation and VAT registration. His knowledge of the startup ecosystem is exceptional." },
            { name: "Robert Chen", role: "Contractor", text: "Highly professional and incredibly efficient. Alfred's attention to detail is second to none. I couldn't recommend him more highly." }
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} className="text-yellow-400 fill-current" size={16} />)}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Resources for UK Small Businesses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert advice on tax, accounting, and business growth. No jargon, just actionable tips.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "7 Legal Ways to Reduce Your Corporation Tax in 2026", category: "Tax Savings", date: "Mar 15, 2026" },
            { title: "Sole Trader vs Limited Company: Which is Right for You?", category: "Business Structure", date: "Mar 10, 2026" },
            { title: "The Ultimate Guide to Self Assessment for Freelancers", category: "Self Assessment", date: "Mar 05, 2026" },
            { title: "How to Prepare Your Business for MTD (Making Tax Digital)", category: "Compliance", date: "Feb 28, 2026" },
            { title: "5 Common Bookkeeping Mistakes That Are Costing You Money", category: "Bookkeeping", date: "Feb 20, 2026" },
            { title: "Understanding VAT: A Simple Guide for Small Businesses", category: "VAT", date: "Feb 12, 2026" }
          ].map((post, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${[
                  '1454165833968-2736a8aaad9b',
                  '1586281380117-5a60ae2050cc',
                  '1554224154-26032ffc0d07'
                ][i]}?auto=format&fit=crop&q=80&w=800&h=600`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <button className="text-sm font-bold text-gray-900 flex items-center group-hover:translate-x-1 transition-transform">
                  Read Article <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeadMagnetPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-blue-600 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-0" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
              Free Resource
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              The 2026 Small Business <span className="text-blue-600">Tax Savings Guide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Stop overpaying HMRC. Discover the 7 legal strategies we use to save our clients an average of £3,400 per year.
            </p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center"
              >
                <CheckCircle2 className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Check your inbox!</h3>
                <p className="text-gray-600">We've sent the guide to your email address. Happy saving!</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">First Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all" placeholder="Alfred" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all" placeholder="alfred@example.com" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 flex items-center justify-center">
                  Send Me The Guide <Download className="ml-2" size={24} />
                </button>
                <div className="flex items-center justify-center space-x-6 text-xs text-gray-400 font-medium">
                  <span className="flex items-center"><ShieldCheck size={14} className="mr-1" /> 100% Secure</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> Instant Access</span>
                  <span className="flex items-center"><Users size={14} className="mr-1" /> 1,200+ Downloads</span>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center text-white/80 text-sm">
          <p>Trusted by UK freelancers, contractors, and small business owners.</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      case 'lead-magnet': return <LeadMagnetPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <button 
          onClick={() => setCurrentPage('contact')}
          className="w-full bg-blue-600 text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center active:scale-95"
        >
          Get In Touch <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
