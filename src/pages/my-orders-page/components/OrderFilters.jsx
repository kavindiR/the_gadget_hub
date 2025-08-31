import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const OrderFilters = ({ filters, onFilterChange, totalResults }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const dateRangeOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'Last Week' },
    { value: 'month', label: 'Last Month' },
    { value: '3months', label: 'Last 3 Months' },
    { value: 'year', label: 'Last Year' }
  ];

  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFilterChange({
      status: 'all',
      dateRange: 'all',
      searchQuery: ''
    });
  };

  const hasActiveFilters = filters.status !== 'all' || filters.dateRange !== 'all' || filters.searchQuery;

  return (
    <div className="bg-card rounded-lg shadow-soft border border-border mb-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} />
            <span className="font-medium text-card-foreground">Filters</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Active
              </span>
            )}
          </div>
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block p-4 ${isExpanded ? 'border-t border-border' : ''}`}>
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by order ID or product name..."
                value={filters.searchQuery}
                onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-48">
            <Select
              value={filters.status}
              onValueChange={(value) => handleFilterChange('status', value)}
              placeholder="Filter by status"
            >
              {statusOptions.map(option => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </div>

          {/* Date Range Filter */}
          <div className="w-full md:w-48">
            <Select
              value={filters.dateRange}
              onValueChange={(value) => handleFilterChange('dateRange', value)}
              placeholder="Filter by date"
            >
              {dateRangeOptions.map(option => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              size="sm"
              iconName="X"
              iconPosition="left"
            >
              Clear
            </Button>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {totalResults === 0 
              ? 'No orders found' 
              : `${totalResults} order${totalResults !== 1 ? 's' : ''} found`
            }
          </p>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              <div className="flex space-x-1">
                {filters.status !== 'all' && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {statusOptions.find(opt => opt.value === filters.status)?.label}
                  </span>
                )}
                {filters.dateRange !== 'all' && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {dateRangeOptions.find(opt => opt.value === filters.dateRange)?.label}
                  </span>
                )}
                {filters.searchQuery && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    "{filters.searchQuery}"
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderFilters;