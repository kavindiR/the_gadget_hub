import React from 'react';
        import { motion } from 'framer-motion';
        import { Link } from 'react-router-dom';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const HeroSection = () => {
          return (
            <section className="relative py-16 lg:py-24 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                      <Icon name="Zap" size={16} className="mr-2 text-primary" />
                      <span className="text-sm font-medium text-primary">Our Services</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                      Smart Technology for
                      <span className="block text-primary">Smarter Shopping</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Experience Sri Lanka's most advanced price comparison system. Our intelligent 
                      platform connects you with 100+ authorized distributors to guarantee the best 
                      prices on every purchase.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link to="/shop-page">
                        <Button
                          variant="default"
                          size="lg"
                          iconName="Search"
                          iconPosition="left"
                          className="w-full sm:w-auto"
                        >
                          Start Price Comparison
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="lg"
                        iconName="Play"
                        iconPosition="left"
                        className="w-full sm:w-auto"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </motion.div>

                  {/* Right Column - Animated Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Main Device */}
                    <div className="relative bg-card border border-border rounded-3xl shadow-soft-lg p-6 max-w-md mx-auto">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Icon name="Zap" size={16} color="white" />
                          </div>
                          <span className="font-semibold text-foreground">Price Comparison</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-success rounded-full" />
                          <div className="w-3 h-3 bg-warning rounded-full" />
                          <div className="w-3 h-3 bg-destructive rounded-full" />
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="relative mb-6">
                        <input
                          type="text"
                          value="iPhone 15 Pro Max"
                          readOnly
                          className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <Icon name="Search" size={16} className="text-muted-foreground" />
                        </div>
                      </div>

                      {/* Price Results */}
                      <div className="space-y-3">
                        {[
                          { name: "TechMart LK", price: "Rs. 485,000", badge: "Best Price", color: "success" },
                          { name: "Gadgets.lk", price: "Rs. 492,000", badge: "2nd Best", color: "accent" },
                          { name: "iStore Ceylon", price: "Rs. 498,000", badge: "3rd Best", color: "secondary" }
                        ].map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-xl"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Icon name="Store" size={16} className="text-primary" />
                              </div>
                              <div>
                                <div className="font-medium text-foreground text-sm">{result.name}</div>
                                <div className={`text-xs px-2 py-1 bg-${result.color}/10 text-${result.color} rounded-full inline-block`}>
                                  {result.badge}
                                </div>
                              </div>
                            </div>
                            <div className="font-bold text-foreground font-mono">{result.price}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mt-6"
                      >
                        <Button variant="default" fullWidth>
                          Save Rs. 13,000 - Buy Now
                        </Button>
                      </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-6 -right-6 bg-success text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft-lg"
                    >
                      100+ Distributors
                    </motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-6 -left-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft-lg"
                    >
                      Best Prices Guaranteed
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        };

        export default HeroSection;