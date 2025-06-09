import { type FC } from 'react';
import { type PriceCategory } from './pricingData';

interface PriceTableProps {
  category: PriceCategory;
}

const PriceTable: FC<PriceTableProps> = ({ category }) => {
  return (
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
            {category.items.map((item, idx) => (
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