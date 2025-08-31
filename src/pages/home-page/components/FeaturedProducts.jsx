import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const scrollContainerRef = useRef(null);

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphones",
      originalPrice: 485000,
      currentPrice: 445000,
      savings: 40000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1250,
      inStock: true,
      features: ["256GB Storage", "Pro Camera System", "Titanium Design"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "MacBook Pro 14-inch M3",
      category: "Laptops",
      originalPrice: 650000,
      currentPrice: 595000,
      savings: 55000,
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 890,
      inStock: true,
      features: ["M3 Chip", "16GB RAM", "512GB SSD"],
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      category: "Smartphones",
      originalPrice: 425000,
      currentPrice: 385000,
      savings: 40000,
      image: "https://images.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 2100,
      inStock: true,
      features: ["S Pen Included", "200MP Camera", "5000mAh Battery"],
      badge: "Hot Deal"
    },
    {
      id: 4,
      name: "iPad Pro 12.9-inch",
      category: "Tablets",
      originalPrice: 385000,
      currentPrice: 345000,
      savings: 40000,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 750,
      inStock: true,
      features: ["M2 Chip", "Liquid Retina Display", "Apple Pencil Support"],
      badge: "Editor\'s Choice"
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Accessories",
      originalPrice: 85000,
      currentPrice: 75000,
      savings: 10000,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1850,
      inStock: true,
      features: ["Noise Cancelling", "30hr Battery", "Premium Sound"],
      badge: "Top Rated"
    },
    {
      id: 6,
      name: "Dell XPS 13 Plus",
      category: "Laptops",
      originalPrice: 485000,
      currentPrice: 435000,
      savings: 50000,
      image: "https://images.pixabay.com/photo/2020-10/10/11/laptop-5641733_1280.jpg?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 650,
      inStock: true,
      features: ["Intel i7", "16GB RAM", "Ultra-thin Design"],
      badge: "Limited Offer"
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredProducts.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Update localStorage cart count
    const currentCount = parseInt(localStorage.getItem('cartItemCount') || '0');
    localStorage.setItem('cartItemCount', (currentCount + 1).toString());
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK')}.00`;
  };

  const getBadgeColor = (badge) => {
    const colors = {
      "Best Seller": "bg-green-500",
      "New Arrival": "bg-blue-500",
      "Hot Deal": "bg-red-500",
      "Editor's Choice": "bg-purple-500",
      "Top Rated": "bg-yellow-500",
      "Limited Offer": "bg-orange-500"
    };
    return colors[badge] || "bg-gray-500";
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Star" size={16} className="mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Best Deals on
              <span className="block text-primary">Premium Gadgets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our handpicked selection of the latest gadgets at unbeatable prices, 
              guaranteed to be the lowest in Sri Lanka.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-6 sm:mt-0">
            <Link to="/shop-page">
              <Button
                variant="outline"
                iconName="Grid3x3"
                iconPosition="left"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-soft hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-soft hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <motion.div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
              }}
            >
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badge */}
                      <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {product.badge}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-soft">
                          <Icon name="Heart" size={16} className="text-gray-600" />
                        </button>
                        <Link to={`/product-details-page?id=${product.id}`}>
                          <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-soft">
                            <Icon name="Eye" size={16} className="text-gray-600" />
                          </button>
                        </Link>
                      </div>

                      {/* Stock Status */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                          product.inStock 
                            ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            product.inStock ? 'bg-green-500' : 'bg-red-500'
                          }`} />
                          <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Icon name="Check" size={12} className="text-success" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-2xl font-bold text-foreground font-mono">
                            {formatPrice(product.currentPrice)}
                          </span>
                          <span className="text-sm text-muted-foreground line-through font-mono">
                            {formatPrice(product.originalPrice)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-success">
                            Save {formatPrice(product.savings)}
                          </span>
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                            {Math.round((product.savings / product.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button
                          variant="default"
                          size="sm"
                          iconName="ShoppingCart"
                          iconPosition="left"
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className="flex-1"
                        >
                          Add to Cart
                        </Button>
                        <Link to={`/product-details-page?id=${product.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="ArrowRight"
                            iconPosition="right"
                          >
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Browse our complete catalog of 25,000+ gadgets or use our smart search 
              to find exactly what you need at the best prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop-page">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Search"
                  iconPosition="left"
                >
                  Browse All Products
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;