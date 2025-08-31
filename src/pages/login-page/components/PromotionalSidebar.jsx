import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PromotionalSidebar = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "Rs. 485,000.00",
      originalPrice: "Rs. 520,000.00",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      discount: "7% OFF",
      badge: "Trending"
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "Rs. 385,000.00",
      originalPrice: "Rs. 420,000.00",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      discount: "8% OFF",
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: "Rs. 65,000.00",
      originalPrice: "Rs. 75,000.00",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      discount: "13% OFF",
      badge: "Limited"
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Secure Shopping",
      description: "Your data is protected with bank-level security"
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Island-wide delivery within 24-48 hours"
    },
    {
      icon: "Award",
      title: "Best Prices",
      description: "Guaranteed lowest prices from multiple distributors"
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Expert customer support whenever you need"
    }
  ];

  return (
    <div className="hidden lg:block lg:w-96 xl:w-[420px] bg-muted/30 p-8">
      <div className="space-y-8">
        {/* Welcome Message */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Join The Gadget Hub
          </h2>
          <p className="text-muted-foreground">
            Discover the latest gadgets at unbeatable prices with our intelligent price comparison system.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose Us?</h3>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={benefit.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Featured Products</h3>
            <Link to="/shop-page" className="text-sm text-primary hover:text-primary/80 transition-smooth">
              View All
            </Link>
          </div>
          
          <div className="space-y-3">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg p-4 border border-border hover:shadow-soft transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <div className="absolute top-1 left-1 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-card-foreground text-sm truncate">
                      {product.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-primary font-bold text-sm font-mono">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through text-xs font-mono">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.discount && (
                      <span className="inline-block bg-success/10 text-success text-xs px-2 py-1 rounded mt-1">
                        {product.discount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white">
          <div className="text-center">
            <Icon name="Gift" size={32} className="mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">New User Bonus</h3>
            <p className="text-sm opacity-90 mb-4">
              Get Rs. 5,000 off on your first purchase above Rs. 50,000
            </p>
            <Button variant="secondary" size="sm" fullWidth>
              Learn More
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.8/5</span>
            </div>
            <div className="text-sm text-muted-foreground">|</div>
            <div className="text-sm text-muted-foreground">10,000+ Reviews</div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span>SSL Secured</span>
            <span>•</span>
            <span>Trusted by 50,000+ customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSidebar;