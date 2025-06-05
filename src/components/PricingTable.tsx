import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PriceCategory {
  title: string;
  items: {
    service: string;
    price: number;
  }[];
}

const priceData: PriceCategory[] = [
  {
    title: 'New Employment Visa (Inside Country)',
    items: [
      { service: 'Initial Processing (Offer Letter, Labor Contract)', price: 310 },
      { service: 'Labor Insurance', price: 220 },
      { service: 'Labor Payment', price: 3590 },
      { service: 'Entry Permit Inside', price: 1190 },
      { service: 'Change Status', price: 700 },
      { service: 'Medical - DHA', price: 310 },
      { service: 'Emirates ID (2 Years)', price: 380 },
      { service: 'Visa Stamping', price: 580 },
      { service: 'Labor Contract Submission', price: 190 }
    ]
  },
  {
    title: 'Visa Renewal',
    items: [
      { service: 'Contract Renewal Processing', price: 120 },
      { service: 'Labor Insurance', price: 220 },
      { service: 'Labor Payment & Contract Submission', price: 3750 },
      { service: 'Medical - DHA', price: 310 },
      { service: 'Emirates ID (2 Years)', price: 380 },
      { service: 'Visa Stamping', price: 580 }
    ]
  },
  {
    title: 'Visa Cancellation',
    items: [
      { service: 'Labor Cancellation Processing', price: 240 },
      { service: 'Immigration Cancellation', price: 260 }
    ]
  },
  {
    title: 'Translation Services',
    items: [
      { service: 'Normal Translation (Per Page)', price: 40 },
      { service: 'Legal Translation (Per Page)', price: 60 }
    ]
  },
  {
    title: 'Certificate Attestation',
    items: [
      { service: 'India', price: 590 },
      { service: 'UK', price: 1050 },
      { service: 'Pakistan', price: 1250 },
      { service: 'Philippines', price: 1550 },
      { service: 'Australia', price: 1700 },
      { service: 'Switzerland', price: 1850 },
      { service: 'Russia', price: 2100 },
      { service: 'France', price: 2200 },
      { service: 'Canada', price: 2000 }
    ]
  }
];

const PricingTable = () => {
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
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {priceData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === idx
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-sm font-semibold text-white">
                      Fee (AED)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {priceData[activeCategory].items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">
                        {item.price.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-primary/5 font-semibold">
                    <td className="px-6 py-4 text-sm text-primary">
                      Total
                    </td>
                    <td className="px-6 py-4 text-sm text-primary text-right">
                      {priceData[activeCategory].items.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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