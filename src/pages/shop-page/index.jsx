import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import Button from '../../components/ui/Button';
import PageHeader from '../../components/ui/PageHeader';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import FilterChips from './components/FilterChips';
import SortDropdown from './components/SortDropdown';
import SearchBar from './components/SearchBar';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    priceRanges: [],
    brands: []
  });

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      brand: "Apple",
      description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system",
      price: 485000,
      originalPrice: 520000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      category: "smartphones",
      rating: 4.8,
      reviewCount: 245,
      stock: 12,
      isNew: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 512GB",
      brand: "Samsung",
      description: "Premium Android flagship with S Pen, 200MP camera, and AI features",
      price: 425000,
      originalPrice: 450000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
      category: "smartphones",
      rating: 4.7,
      reviewCount: 189,
      stock: 8,
      isNew: true
    },
    {
      id: 3,
      name: "MacBook Pro 14-inch M3 Pro",
      brand: "Apple",
      description: "Professional laptop with M3 Pro chip, Liquid Retina XDR display",
      price: 675000,
      originalPrice: 720000,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      category: "laptops",
      rating: 4.9,
      reviewCount: 156,
      stock: 5,
      isNew: false
    },
    {
      id: 4,
      name: "Dell XPS 13 Plus Intel i7",
      brand: "Dell",
      description: "Ultra-portable laptop with 13.4-inch InfinityEdge display and premium build",
      price: 385000,
      originalPrice: 420000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      category: "laptops",
      rating: 4.6,
      reviewCount: 98,
      stock: 15,
      isNew: false
    },
    {
      id: 5,
      name: "Sony WH-1000XM5 Headphones",
      brand: "Sony",
      description: "Industry-leading noise canceling wireless headphones with 30-hour battery",
      price: 85000,
      originalPrice: 95000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "accessories",
      rating: 4.8,
      reviewCount: 324,
      stock: 25,
      isNew: false
    },
    {
      id: 6,
      name: "iPad Pro 12.9-inch M2 WiFi",
      brand: "Apple",
      description: "Most advanced iPad with M2 chip, Liquid Retina XDR display, and Apple Pencil support",
      price: 325000,
      originalPrice: 350000,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      category: "accessories",
      rating: 4.7,
      reviewCount: 167,
      stock: 18,
      isNew: true
    },
    {
      id: 7,
      name: "HP Spectre x360 14-inch",
      brand: "HP",
      description: "2-in-1 convertible laptop with OLED display and premium aluminum design",
      price: 295000,
      originalPrice: 320000,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      category: "laptops",
      rating: 4.5,
      reviewCount: 87,
      stock: 10,
      isNew: false
    },
    {
      id: 8,
      name: "Xiaomi 13T Pro 256GB",
      brand: "Xiaomi",
      description: "Flagship smartphone with Leica cameras, 120W fast charging, and premium design",
      price: 185000,
      originalPrice: 210000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      category: "smartphones",
      rating: 4.6,
      reviewCount: 203,
      stock: 22,
      isNew: true
    },
    {
      id: 9,
      name: "Apple AirPods Pro 2nd Gen",
      brand: "Apple",
      description: "Active noise cancellation, spatial audio, and up to 6 hours of listening time",
      price: 65000,
      originalPrice: 72000,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
      category: "accessories",
      rating: 4.8,
      reviewCount: 445,
      stock: 35,
      isNew: false
    },
    {
      id: 10,
      name: "Samsung Galaxy Book3 Pro 360",
      brand: "Samsung",
      description: "2-in-1 laptop with AMOLED touchscreen, S Pen support, and Intel 13th gen processor",
      price: 425000,
      originalPrice: 465000,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400",
      category: "laptops",
      rating: 4.4,
      reviewCount: 76,
      stock: 7,
      isNew: false
    },
    {
      id: 11,
      name: "Gaming Mechanical Keyboard RGB",
      brand: "Dell",
      description: "Mechanical gaming keyboard with RGB backlighting and programmable keys",
      price: 25000,
      originalPrice: 28000,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      category: "accessories",
      rating: 4.3,
      reviewCount: 156,
      stock: 45,
      isNew: false
    },
    {
      id: 12,
      name: "Wireless Mouse Pro",
      brand: "HP",
      description: "Ergonomic wireless mouse with precision tracking and long battery life",
      price: 12000,
      originalPrice: 15000,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      category: "accessories",
      rating: 4.2,
      reviewCount: 89,
      stock: 60,
      isNew: false
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Apply price range filter
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return filters.priceRanges.some(rangeId => {
          switch (rangeId) {
            case 'under-25000':
              return product.price < 25000;
            case '25000-50000':
              return product.price >= 25000 && product.price <= 50000;
            case '50000-100000':
              return product.price >= 50000 && product.price <= 100000;
            case 'above-100000':
              return product.price > 100000;
            default:
              return true;
          }
        });
      });
    }

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand.toLowerCase())
      );
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, searchQuery, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (type, value) => {
    const newFilters = { ...filters };
    newFilters[type] = newFilters[type].filter(item => item !== value);
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      brands: []
    });
    setSearchQuery('');
    setSearchParams({});
  };





  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <PageHeader
        title="Shop Gadgets"
        subtitle="Discover the latest gadgets with the best prices in Sri Lanka"
      >
        {/* Mobile Search */}
        <div className="lg:hidden">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearAllFilters}
            isOpen={false}
            onClose={() => {}}
            isMobile={false}
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filter Button & Desktop Search */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsMobileFilterOpen(true)}
                  iconName="Filter"
                  iconPosition="left"
                  className="lg:hidden"
                >
                  Filters
                </Button>

                {/* Results Count */}
                <span className="text-sm text-muted-foreground">
                  {loading ? 'Loading...' : `${filteredProducts.length} products found`}
                </span>
              </div>

              {/* Desktop Search */}
              <div className="hidden lg:block w-80">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Active Filters */}
            <FilterChips
              activeFilters={filters}
              onRemoveFilter={handleRemoveFilter}
              onClearAll={handleClearAllFilters}
            />

            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <SortDropdown
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
              loading={loading}
            />

            {/* Load More Button */}
            {!loading && filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  iconName="ChevronDown"
                  iconPosition="right"
                  className="px-8"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearAllFilters}
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        isMobile={true}
      />
    </div>
  );
};

export default ShopPage;