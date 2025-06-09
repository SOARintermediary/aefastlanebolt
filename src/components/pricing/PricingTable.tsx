import { type FC, useState } from 'react';
import { Check } from 'lucide-react';
import { priceData } from './pricingData';
import CategoryTabs from './CategoryTabs';
import PriceTable from './PriceTable';

const PricingTable: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Clear pricing for all your business setup needs
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
              * All fees are in AED and subject to change based on government regulations
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-200"
              >
                <Check className="mr-2" size={20} />
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable; 