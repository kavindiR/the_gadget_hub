import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ activeFilters, onRemoveFilter, onClearAll }) => {
  const getFilterLabel = (type, value) => {
    const labels = {
      categories: {
        smartphones: 'Smartphones',
        laptops: 'Laptops',
        accessories: 'Accessories'
      },
      priceRanges: {
        'under-25000': 'Under Rs. 25,000',
        '25000-50000': 'Rs. 25,000 - Rs. 50,000',
        '50000-100000': 'Rs. 50,000 - Rs. 100,000',
        'above-100000': 'Above Rs. 100,000'
      },
      brands: {
        apple: 'Apple',
        samsung: 'Samsung',
        dell: 'Dell',
        hp: 'HP',
        sony: 'Sony',
        xiaomi: 'Xiaomi'
      }
    };
    
    return labels[type]?.[value] || value;
  };

  const getAllActiveFilters = () => {
    const filters = [];
    
    activeFilters.categories.forEach(category => {
      filters.push({ type: 'categories', value: category, label: getFilterLabel('categories', category) });
    });
    
    activeFilters.priceRanges.forEach(range => {
      filters.push({ type: 'priceRanges', value: range, label: getFilterLabel('priceRanges', range) });
    });
    
    activeFilters.brands.forEach(brand => {
      filters.push({ type: 'brands', value: brand, label: getFilterLabel('brands', brand) });
    });
    
    return filters;
  };

  const allFilters = getAllActiveFilters();

  if (allFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm font-medium text-foreground">Active Filters:</span>
      
      {allFilters.map((filter, index) => (
        <div
          key={`${filter.type}-${filter.value}-${index}`}
          className="flex items-center gap-1 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full"
        >
          <span>{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.type, filter.value)}
            className="ml-1 hover:bg-primary/80 rounded-full p-0.5 transition-colors"
          >
            <Icon name="X" size={12} />
          </button>
        </div>
      ))}
      
      {allFilters.length > 1 && (
        <button
          onClick={onClearAll}
          className="text-sm text-muted-foreground hover:text-foreground underline ml-2"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default FilterChips;