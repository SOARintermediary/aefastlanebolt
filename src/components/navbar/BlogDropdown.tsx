import { type FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { blogSections } from './navData';

interface BlogDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BlogDropdown: FC<BlogDropdownProps> = ({ isOpen, setIsOpen }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-primary hover:text-primary-light transition-colors duration-300 font-medium"
      >
        {t('nav.blog')}
        <ChevronDown className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-primary to-primary-light p-4">
            <h3 className="text-white font-semibold text-lg">
              📚 {t('blog.title')}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              {t('blog.subtitle')}
            </p>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            <a
              href="/blog"
              className="block px-4 py-3 text-sm font-semibold text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 border-b border-gray-100 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">🏠</span>
                <span>{t('common.viewAll')}</span>
              </div>
            </a>
            
            {blogSections.map((section, index) => (
              <div key={index} className={`px-4 py-3 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t(section.titleKey)}
                </h4>
                <div className="space-y-1">
                  {section.links.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={linkIndex}
                        href={link.href || '#'}
                        className="group flex items-start px-3 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/10 rounded-lg transition-all duration-200 hover:shadow-sm"
                        onClick={(e) => {
                          if (!link.href) {
                            e.preventDefault();
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mr-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-200">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block font-medium text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-tight">
                            {t(link.textKey)}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
            <a
              href="#contact"
              className="block text-center text-sm font-medium text-primary hover:text-primary-light transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              💬 {t('blog.cta.button')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDropdown;