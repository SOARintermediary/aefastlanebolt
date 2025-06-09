import { type FC } from 'react';
import { type PriceCategory } from './pricingData';

interface CategoryTabsProps {
  categories: PriceCategory[];
  activeCategory: number;
  onCategoryChange: (index: number) => void;
}

const CategoryTabs: FC<CategoryTabsProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category, idx) => (
        <button
          key={idx}
          onClick={() => onCategoryChange(idx)}
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
  );
};

export default CategoryTabs; 