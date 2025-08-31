import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyOrders = () => {
  const suggestions = [
    {
      icon: 'Smartphone',
      title: 'Latest Smartphones',
      description: 'Discover the newest flagship phones with best prices',
      link: '/shop-page?category=smartphones'
    },
    {
      icon: 'Laptop',
      title: 'Powerful Laptops',
      description: 'Find the perfect laptop for work, gaming, or creativity',
      link: '/shop-page?category=laptops'
    },
    {
      icon: 'Headphones',
      title: 'Audio Accessories',
      description: 'Premium headphones, speakers, and audio gear',
      link: '/shop-page?category=audio'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      {/* Empty State Illustration */}
      <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
        <Icon name="ShoppingBag" size={64} className="text-muted-foreground" />
      </div>

      {/* Empty State Content */}
      <h2 className="text-3xl font-bold text-foreground mb-4">No Orders Yet</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        You haven't placed any orders yet. Start exploring our wide selection of gadgets and find your perfect tech companion!
      </p>

      {/* Call to Action */}
      <div className="space-y-4 mb-12">
        <Link to="/shop-page">
          <Button size="lg" iconName="ShoppingCart" iconPosition="left">
            Start Shopping
          </Button>
        </Link>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/home-page">
            <Button variant="outline" size="sm">
              Browse Featured Products
            </Button>
          </Link>
          <Link to="/shop-page?sort=deals">
            <Button variant="outline" size="sm">
              View Best Deals
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Suggestions */}
      <div className="bg-card rounded-lg shadow-soft border border-border p-8">
        <h3 className="text-xl font-semibold text-card-foreground mb-6">Popular Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestions.map((suggestion, index) => (
            <Link
              key={index}
              to={suggestion.link}
              className="group p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-muted/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon name={suggestion.icon} size={20} className="text-primary" />
              </div>
              <h4 className="font-medium text-card-foreground mb-2">{suggestion.title}</h4>
              <p className="text-sm text-muted-foreground">{suggestion.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Shield" size={16} className="text-success" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Secure Shopping</h4>
            <p className="text-sm text-muted-foreground">Protected payments and buyer guarantee on every purchase</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Truck" size={16} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Fast Delivery</h4>
            <p className="text-sm text-muted-foreground">Quick delivery across Sri Lanka with real-time tracking</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Award" size={16} className="text-warning" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Best Prices</h4>
            <p className="text-sm text-muted-foreground">Price comparison across multiple distributors for best deals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyOrders;