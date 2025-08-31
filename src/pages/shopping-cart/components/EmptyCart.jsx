import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const EmptyCart = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 485000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      category: "Smartphones",
      rating: 4.8
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: 425000,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      category: "Laptops",
      rating: 4.9
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: 85000,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      category: "Accessories",
      rating: 4.7
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      price: 395000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      category: "Smartphones",
      rating: 4.6
    }
  ];

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="text-center py-12">
      {/* Empty Cart Icon */}
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Looks like you haven't added any gadgets to your cart yet. 
          Discover amazing deals on the latest electronics!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link to="/shop-page">
          <Button variant="default" size="lg" iconName="Store" iconPosition="left">
            Browse All Products
          </Button>
        </Link>
        <Link to="/home-page">
          <Button variant="outline" size="lg" iconName="Home" iconPosition="left">
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Suggested Products */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold text-card-foreground mb-6">You might like these</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((product) => (
            <div key={product.id} className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-md transition-smooth">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h4 className="font-semibold text-card-foreground mb-2 line-clamp-2 text-sm">
                  {product.name}
                </h4>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-primary font-mono text-sm">
                    {formatPrice(product.price)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-warning fill-current" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link to={`/product-details-page?id=${product.id}`} className="flex-1">
                    <Button variant="outline" size="sm" fullWidth>
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    variant="default" 
                    size="sm" 
                    iconName="Plus"
                    className="px-3"
                    onClick={() => {
                      // Simulate add to cart
                      console.log(`Added ${product.name} to cart`);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Truck" size={24} className="text-primary" />
          </div>
          <h4 className="font-semibold text-card-foreground mb-2">Free Delivery</h4>
          <p className="text-sm text-muted-foreground">
            Free delivery on orders over Rs. 50,000
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Shield" size={24} className="text-success" />
          </div>
          <h4 className="font-semibold text-card-foreground mb-2">Warranty</h4>
          <p className="text-sm text-muted-foreground">
            Official warranty on all products
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Headphones" size={24} className="text-accent" />
          </div>
          <h4 className="font-semibold text-card-foreground mb-2">24/7 Support</h4>
          <p className="text-sm text-muted-foreground">
            Round-the-clock customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;