import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <nav className="bg-white shadow-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary hover:text-primary-light">{t('nav.services')}</a>
            <a href="#pricing" className="text-primary hover:text-primary-light">{t('nav.pricing')}</a>
            
            {/* Blog Dropdown with Subsections */}
            <div className="relative">
              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center text-primary hover:text-primary-light"
              >
                Blog
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isBlogOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100 border-b border-gray-100"
                    onClick={() => setIsBlogOpen(false)}
                  >
                    📚 All Articles
                  </a>
                  
                  {/* Getting Started Section */}
                  <div className="px-4 py-2">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</h4>
                    <a
                      href="/blog/free-zone-vs-mainland"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      🏢 Free Zone vs Mainland: Which is Right?
                    </a>
                    <a
                      href="/blog/starting-business-uae-foreigner"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      🌍 Starting a Business as a Foreigner
                    </a>
                    <a
                      href="/blog/business-activities-licensing"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      📊 Business Activities & Licensing Categories
                    </a>
                  </div>
                  
                  {/* Setup Guides Section */}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Setup Guides</h4>
                    <a
                      href="/blog/mainland-business-license-dubai"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      📋 How to Open a Mainland Business License
                    </a>
                    <a
                      href="/blog/free-zone-company-setup"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      🏢 Step-by-Step Free Zone Company Setup
                    </a>
                  </div>
                  
                  {/* Operations & Compliance Section */}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Operations & Compliance</h4>
                    <a
                      href="/blog/government-approvals-streamlined"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      ⚙️ How AEFastLane Streamlines Approvals
                    </a>
                    <a
                      href="/blog/company-renewals-closures"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      🔁 Company Renewals & Closures
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#hr-services" className="text-primary hover:text-primary-light">{t('nav.hrServices')}</a>
            <LanguageSwitch />
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light">
              {t('nav.contactUs')}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-light"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.services')}</a>
            <a href="#pricing" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.pricing')}</a>
            <a href="/blog" className="block px-3 py-2 text-primary hover:text-primary-light">Blog</a>
            <a href="#hr-services" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.hrServices')}</a>
            <a href="#contact" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.contactUs')}</a>
            <div className="px-3 py-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;