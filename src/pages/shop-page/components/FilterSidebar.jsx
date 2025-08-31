import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose,
  isMobile = false 
}) => {
  const categories = [
    { id: 'smartphones', label: 'Smartphones', count: 45 },
    { id: 'laptops', label: 'Laptops', count: 32 },
    { id: 'accessories', label: 'Accessories', count: 78 }
  ];

  const priceRanges = [
    { id: 'under-25000', label: 'Under Rs. 25,000', min: 0, max: 25000 },
    { id: '25000-50000', label: 'Rs. 25,000 - Rs. 50,000', min: 25000, max: 50000 },
    { id: '50000-100000', label: 'Rs. 50,000 - Rs. 100,000', min: 50000, max: 100000 },
    { id: 'above-100000', label: 'Above Rs. 100,000', min: 100000, max: Infinity }
  ];

  const brands = [
    { id: 'apple', label: 'Apple', count: 28 },
    { id: 'samsung', label: 'Samsung', count: 35 },
    { id: 'dell', label: 'Dell', count: 22 },
    { id: 'hp', label: 'HP', count: 18 },
    { id: 'sony', label: 'Sony', count: 15 },
    { id: 'xiaomi', label: 'Xiaomi', count: 25 }
  ];

  const handleCategoryChange = (categoryId, checked) => {
    const newCategories = checked 
      ? [...filters.categories, categoryId]
      : filters.categories.filter(id => id !== categoryId);
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handlePriceRangeChange = (rangeId, checked) => {
    const newPriceRanges = checked 
      ? [...filters.priceRanges, rangeId]
      : filters.priceRanges.filter(id => id !== rangeId);
    onFilterChange({ ...filters, priceRanges: newPriceRanges });
  };

  const handleBrandChange = (brandId, checked) => {
    const newBrands = checked 
      ? [...filters.brands, brandId]
      : filters.brands.filter(id => id !== brandId);
    onFilterChange({ ...filters, brands: newBrands });
  };

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isExpanded, setIsExpanded] = React.useState(defaultOpen);

    return (
      <div className="border-b border-border pb-6 mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full mb-4 text-left"
        >
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <Icon 
            name="ChevronDown" 
            size={20} 
            className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>
        {isExpanded && children}
      </div>
    );
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Filters</h2>
        {isMobile && (
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Icon name="X" size={20} />
          </button>
        )}
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={onClearFilters}
        iconName="RotateCcw"
        iconPosition="left"
        fullWidth
      >
        Clear All Filters
      </Button>

      {/* Categories */}
      <FilterSection title="Categories">
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <Checkbox
                label={category.label}
                checked={filters.categories.includes(category.id)}
                onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
              />
              <span className="text-sm text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <Checkbox
              key={range.id}
              label={range.label}
              checked={filters.priceRanges.includes(range.id)}
              onChange={(e) => handlePriceRangeChange(range.id, e.target.checked)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-between">
              <Checkbox
                label={brand.label}
                checked={filters.brands.includes(brand.id)}
                onChange={(e) => handleBrandChange(brand.id, e.target.checked)}
              />
              <span className="text-sm text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
            <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-card shadow-soft-lg animate-slide-right">
              <div className="h-full overflow-y-auto p-6">
                {sidebarContent}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="hidden lg:block w-80 bg-card border border-border rounded-lg p-6 h-fit sticky top-20">
      {sidebarContent}
    </div>
  );
};

export default FilterSidebar;