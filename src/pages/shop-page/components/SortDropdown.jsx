import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'price-low-high', label: 'Price: Low to High', icon: 'TrendingUp' },
    { value: 'price-high-low', label: 'Price: High to Low', icon: 'TrendingDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'popular', label: 'Most Popular', icon: 'Heart' }
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy) || sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full sm:w-auto min-w-48 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon name={currentSort.icon} size={16} />
          <span>Sort by: {currentSort.label}</span>
        </div>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-64 mt-1 bg-popover border border-border rounded-lg shadow-soft-lg z-10 animate-slide-down">
          <div className="py-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortSelect(option.value)}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                  sortBy === option.value ? 'bg-muted text-primary' : 'text-popover-foreground'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.label}</span>
                {sortBy === option.value && (
                  <Icon name="Check" size={16} className="ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;