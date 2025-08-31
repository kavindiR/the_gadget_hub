import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const IntroSection = () => {
  const features = [
    {
      id: 1,
      icon: "Search",
      title: "Smart Search",
      description: "Find exactly what you need with our intelligent search system"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Guaranteed Authenticity",
      description: "Every product is verified and sourced from authorized distributors"
    },
    {
      id: 3,
      icon: "Truck",
      title: "Fast Delivery",
      description: "Island-wide delivery with tracking and insurance coverage"
    },
    {
      id: 4,
      icon: "Headphones",
      title: "24/7 Support",
      description: "Round-the-clock customer service in Sinhala, Tamil, and English"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Zap" size={16} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose The Gadget Hub</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sri Lanka's Most Trusted
            <span className="block text-primary">Gadget Marketplace</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We revolutionize gadget shopping in Sri Lanka by automatically comparing prices from over 100 authorized distributors, 
            ensuring you always get the best deal on authentic electronics and gadgets.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                How Our Price Comparison Works
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced algorithm instantly queries multiple authorized distributors across Sri Lanka, 
                comparing prices, availability, and delivery options in real-time. This ensures you never 
                overpay for gadgets while maintaining product authenticity and warranty coverage.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Search for Your Gadget</h4>
                  <p className="text-muted-foreground">Browse our extensive catalog or use our smart search to find exactly what you need.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Instant Price Comparison</h4>
                  <p className="text-muted-foreground">Our system automatically compares prices from 100+ distributors in seconds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Get the Best Deal</h4>
                  <p className="text-muted-foreground">Purchase at the guaranteed lowest price with full warranty and support.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-primary rounded-full" />
                <div className="absolute top-12 right-8 w-8 h-8 bg-accent rounded-full" />
                <div className="absolute bottom-8 left-12 w-12 h-12 border-2 border-accent rounded-lg rotate-45" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="TrendingDown" size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Average Savings</h4>
                <div className="text-4xl font-bold text-primary mb-2">Rs. 8,500</div>
                <p className="text-muted-foreground">per purchase compared to retail prices</p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-soft"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span className="text-sm font-medium text-foreground">50K+ Customers</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-soft"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-warning fill-current" />
                <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Icon 
                  name={feature.icon} 
                  size={24} 
                  className="text-primary group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;