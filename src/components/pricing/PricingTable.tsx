import { type FC, useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { priceData } from './pricingData';
import CategoryTabs from './CategoryTabs';
import PriceTable from './PriceTable';

const PricingTable: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="mt-12">
          <CategoryTabs
            categories={priceData}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <PriceTable category={priceData[activeCategory]} />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {t('pricing.note')}
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-200"
              >
                <Check className="mr-2" size={20} />
                {t('pricing.getStarted')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable; 