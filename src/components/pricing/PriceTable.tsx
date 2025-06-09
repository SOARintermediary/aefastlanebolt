import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { type PriceCategory } from './pricingData';

interface PriceTableProps {
  category: PriceCategory;
}

const PriceTable: FC<PriceTableProps> = ({ category }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary">
            <tr>
              <th scope="col" className={`px-6 py-4 text-sm font-semibold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('pricing.table.service')}
              </th>
              <th scope="col" className={`px-6 py-4 text-sm font-semibold text-white ${isRTL ? 'text-left' : 'text-right'}`}>
                {t('pricing.table.fee')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {category.items.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                <td className={`px-6 py-4 text-sm text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(`pricing.items.${category.key}.${item.service}`)}
                </td>
                <td className={`px-6 py-4 text-sm text-gray-900 ${isRTL ? 'text-left' : 'text-right'}`}>
                  {item.price.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="bg-primary/5 font-semibold">
              <td className={`px-6 py-4 text-sm text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('pricing.table.total')}
              </td>
              <td className={`px-6 py-4 text-sm text-primary ${isRTL ? 'text-left' : 'text-right'}`}>
                {category.items.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable; 