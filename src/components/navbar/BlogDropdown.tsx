import { type FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { blogSections } from './navData';

interface BlogDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BlogDropdown: FC<BlogDropdownProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-primary hover:text-primary-light transition-colors duration-300"
      >
        {t('nav.blog')}
        <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 z-50">
          <div className="max-h-[400px] overflow-y-auto">
            <a
              href="/blog"
              className="block px-3 py-1.5 text-sm font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              📚 {t('common.viewAll')}
            </a>
            
            {blogSections.map((section, index) => (
              <div key={index} className={`px-3 py-1.5 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {t(section.titleKey)}
                </h4>
                <div className="space-y-0.5">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors duration-150"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block w-5">{link.icon}</span>
                      <span className="line-clamp-1">{t(link.textKey)}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDropdown; 