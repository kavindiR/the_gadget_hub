import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: "BarChart3",
      title: "Intelligent Price Comparison",
      description: "Our AI-powered system compares prices from 100+ authorized distributors in real-time, ensuring you get the best deal on every purchase.",
      features: ["Real-time price updates", "100+ distributor network", "Guaranteed best prices", "Instant comparison results"],
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Authenticity Guarantee",
      description: "Every product is sourced from authorized distributors with full warranty coverage and authenticity verification.",
      features: ["Authorized distributors only", "Full warranty coverage", "Authenticity verification", "Quality assurance"],
      color: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: "Truck",
      title: "Island-wide Delivery",
      description: "Fast and secure delivery across Sri Lanka with real-time tracking and insurance coverage for all orders.",
      features: ["Island-wide coverage", "Real-time tracking", "Insurance included", "Express delivery options"],
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: "Users" },
    { label: "Products Available", value: "25,000+", icon: "Package" },
    { label: "Authorized Distributors", value: "100+", icon: "Store" },
    { label: "Average Savings", value: "Rs. 8,500", icon: "TrendingDown" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
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
            <Icon name="Settings" size={16} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Make Gadget Shopping
            <span className="block text-primary">Smarter & Cheaper</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of gadget shopping with our innovative platform that combines 
            intelligent price comparison, authenticity guarantee, and seamless delivery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon} size={28} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-success" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Thousands of Sri Lankan Customers
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the growing community of smart shoppers who save money and time with our platform.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop-page">
              <Button
                variant="secondary"
                size="lg"
                iconName="ShoppingBag"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Start Shopping Now
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best gadget prices in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Search & Browse",
                description: "Find your desired gadget using our smart search or browse through categories",
                icon: "Search"
              },
              {
                step: "02",
                title: "Compare Prices",
                description: "Our system instantly compares prices from 100+ distributors to find the best deal",
                icon: "BarChart3"
              },
              {
                step: "03",
                title: "Purchase & Enjoy",
                description: "Complete your purchase and enjoy fast delivery with full warranty coverage",
                icon: "ShoppingBag"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <Icon name={process.icon} size={32} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{process.step}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{process.title}</h4>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;