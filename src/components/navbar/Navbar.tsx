import { type FC, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <nav className="bg-white shadow-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12" />
          </div>
          
          <DesktopMenu isBlogOpen={isBlogOpen} setIsBlogOpen={setIsBlogOpen} />

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

      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar; 