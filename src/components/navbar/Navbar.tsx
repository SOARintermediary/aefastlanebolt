import { type FC, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`} 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12" />
          </Link>
          
          <DesktopMenu isBlogOpen={isBlogOpen} setIsBlogOpen={setIsBlogOpen} />

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-light transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar; 