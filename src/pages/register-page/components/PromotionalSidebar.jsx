import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const PromotionalSidebar = () => {
  const benefits = [
    {
      icon: 'ShoppingCart',
      title: 'Smart Shopping',
      description: 'Compare prices across multiple distributors and find the best deals instantly.'
    },
    {
      icon: 'Shield',
      title: 'Secure Transactions',
      description: 'Shop with confidence using our secure payment gateway and buyer protection.'
    },
    {
      icon: 'Truck',
      title: 'Fast Delivery',
      description: 'Get your gadgets delivered quickly with our reliable shipping partners.'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help you with any questions.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Perera',
      role: 'Tech Enthusiast',
      comment: 'Found the best laptop deal in minutes!',
      avatar: 'P'
    },
    {
      name: 'Kamal Silva',
      role: 'Business Owner',
      comment: 'Reliable service and great customer support.',
      avatar: 'K'
    }
  ];

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="flex flex-col justify-center p-12 w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/home-page" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} color="white" />
            </div>
            <span className="text-2xl font-bold">The Gadget Hub</span>
          </Link>
          <h2 className="text-3xl font-bold mb-4">Join Sri Lanka's Premier Gadget Community</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Create your account and unlock exclusive benefits, personalized recommendations, 
            and access to the best gadget deals in Sri Lanka.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={benefit.icon} size={20} color="white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">What Our Members Say</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-primary-foreground/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold mb-1">50K+</div>
            <div className="text-primary-foreground/80 text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">1000+</div>
            <div className="text-primary-foreground/80 text-sm">Products</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">99%</div>
            <div className="text-primary-foreground/80 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSidebar;